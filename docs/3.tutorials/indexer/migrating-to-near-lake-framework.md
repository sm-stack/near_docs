---
sidebar_label: NEAR Lake 프레임워크로 마이그레이션
---

# NEAR Lake 프레임워크로 마이그레이션

<ProgrammingLanguage lang="rust" />

[NEAR 인덱서 프레임워크](https://near-indexers.io/docs/projects/near-indexer-framework)를 꼭 사용해야만 하는 이유가 없는 모든 사용자는 [NEAR Lake 프레임워크](https://near-indexers.io/docs/projects/near-lake-framework)로의 마이그레이션을 고려하는 것이 좋습니다.

이 튜토리얼에서는 [indexer-tx-watcher-example](https://github.com/near-examples/indexer-tx-watcher-example)을 쇼케이스로 사용하여 프로젝트를 마이그레이션하는 방법을 보여줍니다.


:::info 소스 코드

마이그레이션된 인덱서의 소스 코드는 GitHub https://github.com/near-examples/indexer-tx-watcher-example-lake/tree/0.4.0에서 찾을 수 있습니다.

:::

:::info Diffs

문서 끝 부분에 참조용으로 [diff를 게시했습니다](#diffs). 인덱서를 마이그레이션하기 위해 diff만 필요한 경우, 아래로 스크롤하여 확인할 수 있습니다.

:::

## 의존성 변경

우선 `Cargo.toml` 내 의존성부터 시작해봅시다.

```toml title=src/Cargo.toml

[package]
name = "indexer-tx-watcher-example"
version = "0.1.0"
authors = ["Near Inc <hello@nearprotocol.com>"]
edition = "2018"

[dependencies]
actix = "=0.11.0-beta.2"
actix-rt = "=2.2.0"  # remove it once actix is upgraded to 0.11+
base64 = "0.11"
clap = "3.0.0-beta.1"
openssl-probe = { version = "0.1.2" }
serde = { version = "1", features = ["derive"] }
serde_json = "1.0.55"
tokio = { version = "1.1", features = ["sync"] }
tracing = "0.1.13"
tracing-subscriber = "0.2.4"

near-indexer = { git = "https://github.com/near/nearcore", rev = "25b000ae4dd9fe784695d07a3f2e99d82a6f10bd" }
```

- `edition`을 `2021`로 업데이트
- `actix` 크레이트 삭제
- `openssl-probe` 크레이트 삭제
- `itertools` 및 `futures` 추가 
- tokio 런타임을 사용하므로, `tokio` 기능 추가
- `tokio-stream` 크레이트 추가
- `near-indexer`를 `near-lake-framework`로 교체

결국 다음과 같은 형태가 될 것입니다.

```toml title=src/Cargo.toml
[package]
name = "indexer-tx-watcher-example"
version = "0.1.0"
authors = ["Near Inc <hello@nearprotocol.com>"]
edition = "2021"

[dependencies]
base64 = "0.11"
clap = { version = "3.1.6", features = ["derive"] }
futures = "0.3.5"
serde = { version = "1", features = ["derive"] }
serde_json = "1.0.55"
itertools = "0.9.0"
tokio = { version = "1.1", features = ["sync", "time", "macros", "rt-multi-thread"] }
tokio-stream = { version = "0.1" }
tracing = "0.1.13"
tracing-subscriber = "0.2.4"

near-lake-framework = "0.4.0"

```

## clap config 변경

현재 우리는 `Run` 및 `Init` 명령을 포함한 하위 명령이 있는 `Opts` 구조를 가지고 있습니다. [NEAR Lake 프레임워크](https://near-indexers.io/docs/projects/near-lake-framework)에는 `data`와 구성 파일이 필요하지 않기 때문에, `Init` 역시 전혀 필요하지 않습니다. 따라서 일부 구조를 `Opts`로 합쳐야 합니다.


```rust title=src/config.rs
...
/// NEAR Indexer Example
/// Watches for stream of blocks from the chain
#[derive(Clap, Debug)]
#[clap(version = "0.1", author = "Near Inc. <hello@nearprotocol.com>")]
pub(crate) struct Opts {
    /// Sets a custom config dir. Defaults to ~/.near/
    #[clap(short, long)]
    pub home_dir: Option<std::path::PathBuf>,
    #[clap(subcommand)]
    pub subcmd: SubCommand,
}

#[derive(Clap, Debug)]
pub(crate) enum SubCommand {
    /// Run NEAR Indexer Example. Start observe the network
    Run(RunArgs),
    /// Initialize necessary configs
    Init(InitConfigArgs),
}

#[derive(Clap, Debug)]
pub(crate) struct RunArgs {
    /// account ids to watch for
    #[clap(long)]
    pub accounts: String,
}

#[derive(Clap, Debug)]
pub(crate) struct InitConfigArgs {
    ...
}
...
```

할 것은 다음과 같습니다.

- `InitConfigArgs`를 완전히 삭제
- `RunArgs`에서 `Opts`로 내용물을 완전히 옮긴 뒤, `RunArgs` 삭제
- `Opts`에서 `home_dir` 삭제
- 인덱싱을 시작할 블록 높이를 알기 위해, `Opts`에 `block_height` 추가
- 변수에 대한 `SubCommand` 리팩터링 : 인덱싱할 체인을 정의하기 위한 메인넷 및 테스트넷
- 나중을 위해 구조체에 `Clone` 추가

```rust title=src/config.rs
/// NEAR Indexer Example
/// Watches for stream of blocks from the chain
#[derive(Clap, Debug, Clone)]
#[clap(version = "0.1", author = "Near Inc. <hello@nearprotocol.com>")]
pub(crate) struct Opts {
    /// block height to start indexing from
    #[clap(long)]
    pub block_height: u64,
    /// account ids to watch for
    #[clap(long)]
    pub accounts: String,
    #[clap(subcommand)]
    pub subcmd: SubCommand,
}

#[derive(Clap, Debug, Clone)]
pub(crate) enum SubCommand {
    Mainnet,
    Testnet,
}
```

파일 끝 부분에 교체해야 할 구현 사항이 하나 있습니다.


```rust title=src/config.rs
...
impl From<InitConfigArgs> for near_indexer::InitConfigArgs {
    ...
}
```

`near_lake_framework::LakeConfig`에 `Opts`를 캐스팅할 수 있기를 바라기 때문에, 아래와 같이 새롭게 구현할 것입니다.

```rust title=src/config.rs
impl From<Opts> for near_lake_framework::LakeConfig {
    fn from(opts: Opts) -> Self {
        let mut lake_config =
            near_lake_framework::LakeConfigBuilder::default().start_block_height(opts.block_height);

        match &opts.subcmd {
            SubCommand::Mainnet => {
                lake_config = lake_config.mainnet();
            }
            SubCommand::Testnet => {
                lake_config = lake_config.testnet();
            }
        };

        lake_config.build().expect("Failed to build LakeConfig")
    }
}
```

마지막 조치는 `init_logging`을 변경하여, 중복 로그 구독을 제거하는 제거하는 것입니다.


```rust title=src/config.rs

...
pub(crate) fn init_logging() {
    let env_filter = EnvFilter::new(
        "tokio_reactor=info,near=info,stats=info,telemetry=info,indexer_example=info,indexer=info,near-performance-metrics=info",
    );
    tracing_subscriber::fmt::Subscriber::builder()
        .with_env_filter(env_filter)
        .with_writer(std::io::stderr)
        .init();
}
...
```

이를 아래와 같이 변경합니다.

```rust title=src/config.rs
...
pub(crate) fn init_logging() {
    let env_filter = EnvFilter::new("near_lake_framework=info");
    tracing_subscriber::fmt::Subscriber::builder()
        .with_env_filter(env_filter)
        .with_writer(std::io::stderr)
        .init();
}
...
```

`src/config.rs`에서 할 일은 끝났고, `src/main.rs`을 수정해 봅시다.

## 인덱서 인스턴스 교체

`tokio` 런타임을 사용할 수 있고, `main` 함수를 비동기적으로 작동하도록 만들 수 있기 때문에, 리팩토링 프로세스보다 `main` 함수 재생성을 위주로 보여드리도록 하겠습니다.

가져오기(import) 섹션부터 시작하겠습니다.

### 수정 전 Import

```rust title=src/main.rs
use std::str::FromStr;

use std::collections::{HashMap, HashSet};

use clap::Clap;
use tokio::sync::mpsc;
use tracing::info;

use configs::{init_logging, Opts, SubCommand};

mod configs;
```

### 수정 후 Import

`near_lake_framework` import를 추가하고, `configs`로부터의 중복된 import를 삭제하였습니다.

```rust title=src/main.rs
use std::str::FromStr;

use std::collections::{HashMap, HashSet};

use clap::Clap;
use tokio::sync::mpsc;
use tracing::info;

use near_lake_framework::near_indexer_primitives;
use near_lake_framework::LakeConfig;

use configs::{init_logging, Opts};
```

### `main()` 생성

비동기 `main()` 함수를 만들어, `init_logging`을 호출하고 `Opts`를 읽습니다.

```rust title=src/main.rs
#[tokio::main]
async fn main() -> Result<(), tokio::io::Error> {
    init_logging();

    let opts: Opts = Opts::parse();

```
`Opts`에서 `LakeConfig`를 캐스팅하고, [NEAR Lake 프레임워크](https://near-indexers.io/docs/projects/near-lake-framework) 내 `stream`을 인스턴스화합니다.

```rust title=src/main.rs
#[tokio::main]
async fn main() -> Result<(), tokio::io::Error> {
    init_logging();

    let opts: Opts = Opts::parse();

    let config: LakeConfig = opts.clone().into();

    let (_, stream) = near_lake_framework::streamer(config);

```

이전 `main()`으로부터 `accounts` 인자를 읽는 코드를 `Vec<AccountId>`로 복사/붙여넣기하세요.

```rust title=src/main.rs
#[tokio::main]
async fn main() -> Result<(), tokio::io::Error> {
    init_logging();

    let opts: Opts = Opts::parse();

    let config: LakeConfig = opts.clone().into();

    let (_, stream) = near_lake_framework::streamer(config);

    let watching_list = opts
        .accounts
        .split(',')
        .map(|elem| {
            near_indexer_primitives::types::AccountId::from_str(elem).expect("AccountId is invalid")
        })
        .collect();
```

이제 [NEAR 인덱서 프레임워크](https://near-indexers.io/docs/projects/near-indexer-framework) 내 구축되었던 인덱서에서 이전에 사용했던 `listen_blocks` 함수를 호출할 수 있습니다 . 그리고 `main()` 함수가 행복할 수 있도록 `Ok(())`를 반환하세요.


### NEAR Lake 프레임워크 스트림 및 최종 main 함수

```rust title=src/main.rs
#[tokio::main]
async fn main() -> Result<(), tokio::io::Error> {
    init_logging();

    let opts: Opts = Opts::parse();

    let config: LakeConfig = opts.clone().into();

    let (_, stream) = near_lake_framework::streamer(config);

    let watching_list = opts
        .accounts
        .split(',')
        .map(|elem| {
            near_indexer_primitives::types::AccountId::from_str(elem).expect("AccountId is invalid")
        })
        .collect();

    listen_blocks(stream, watching_list).await;

    Ok(())
}
```

이제 끝났습니다. 이는 거의 완전한 `main()` 함수입니다. 이전 함수는 삭제하시면 됩니다.

## 자료형 관련 함수 내 변경 사항

[NEAR Lake 프레임워크 출시](https://near-indexers.io/docs/projects/near-lake-framework)와 함께, 인덱서용으로 생성된 구조를 별도의 크레이트로 추출했습니다. 이는 `nearcore` 내 의존성을 피하기 위해 수행되었는데, 이제 [crates.io에 이미 게시된](https://crates.io/crates/near-indexer-primitives) 별도의 크레이트 또는 해당 크레이트를 노출하는 NEAR Lake 프레임워크에 의존할 수 있기 때문입니다.

### `listen_blocks`

자료형의 새 위치를 가리키도록 함수 서명을 변경해야 합니다.

```rust title=src/main.rs
async fn listen_blocks(
    mut stream: mpsc::Receiver<near_indexer::StreamerMessage>,
    watching_list: Vec<near_indexer::near_primitives::types::AccountId>,
 ) {
```

```rust title=src/main.rs
async fn listen_blocks(
    mut stream: mpsc::Receiver<near_indexer_primitives::StreamerMessage>,
    watching_list: Vec<near_indexer_primitives::types::AccountId>,
 ) {
```

다음은 `near_indexer::near_primitives`가 `near_indexer_primitives`로 교체되어야 하는 세 가지 위치를 나타냅니다.


```rust title=src/main.rs

if let near_indexer_primitives::views::ReceiptEnumView::Action {
```

```rust title=src/main.rs
if let near_indexer_primitives::views::ReceiptEnumView::Action {
```

```rust title=src/main.rs
if let near_indexer_primitives::views::ActionView::FunctionCall {
```

## `is_tx_receiver_watched()`

그리고 함수 `is_tx_receiver_watched()`의 자료형에 대한 최종 변경 사항은 다음과 같습니다.

```rust title=src/main.rs
fn is_tx_receiver_watched(
    tx: &near_indexer_primitives::IndexerTransactionWithOutcome,
    watching_list: &[near_indexer_primitives::types::AccountId],
) -> bool {
    watching_list.contains(&tx.transaction.receiver_id)
}
```

## 자격 증명

NEAR Lake 프레임워크에서 데이터에 액세스하려면 [자격 증명을 구성해야 합니다](credentials.md).


## 결론

이제 [NEAR Lake 프레임워크](https://near-indexers.io/docs/projects/near-lake-framework) 인덱서로 완전히 마이그레이션되었습니다.

참조용으로, 밑에 전체 diff를 게시하고 있습니다.

## Diffs

```diff title=Cargo.toml
--- a/Cargo.toml
+++ b/Cargo.toml
@@ -2,18 +2,18 @@
 name = "indexer-tx-watcher-example"
 version = "0.1.0"
 authors = ["Near Inc <hello@nearprotocol.com>"]
-edition = "2018"
+edition = "2021"

 [dependencies]
-actix = "=0.11.0-beta.2"
-actix-rt = "=2.2.0"  # remove it once actix is upgraded to 0.11+
 base64 = "0.11"
-clap = "3.0.0-beta.1"
-openssl-probe = { version = "0.1.2" }
+clap = { version = "3.1.6", features = ["derive"] }
+futures = "0.3.5"
 serde = { version = "1", features = ["derive"] }
 serde_json = "1.0.55"
-tokio = { version = "1.1", features = ["sync"] }
+itertools = "0.9.0"
+tokio = { version = "1.1", features = ["sync", "time", "macros", "rt-multi-thread"] }
+tokio-stream = { version = "0.1" }
 tracing = "0.1.13"
 tracing-subscriber = "0.2.4"

-near-indexer = { git = "https://github.com/near/nearcore", rev = "25b000ae4dd9fe784695d07a3f2e99d82a6f10bd" }
+near-lake-framework = "0.4.0"
```

```diff title=src/configs.rs
--- a/src/configs.rs
+++ b/src/configs.rs
@@ -1,99 +1,50 @@
-use clap::Clap;
+use clap::Parser;

 use tracing_subscriber::EnvFilter;

 /// NEAR Indexer Example
 /// Watches for stream of blocks from the chain
-#[derive(Clap, Debug)]
+#[derive(Parser, Debug, Clone)]
 #[clap(version = "0.1", author = "Near Inc. <hello@nearprotocol.com>")]
 pub(crate) struct Opts {
-    /// Sets a custom config dir. Defaults to ~/.near/
-    #[clap(short, long)]
-    pub home_dir: Option<std::path::PathBuf>,
-    #[clap(subcommand)]
-    pub subcmd: SubCommand,
-}
-
-#[derive(Clap, Debug)]
-pub(crate) enum SubCommand {
-    /// Run NEAR Indexer Example. Start observe the network
-    Run(RunArgs),
-    /// Initialize necessary configs
-    Init(InitConfigArgs),
-}
-
-#[derive(Clap, Debug)]
-pub(crate) struct RunArgs {
+    /// block height to start indexing from
+    #[clap(long)]
+    pub block_height: u64,
     /// account ids to watch for
     #[clap(long)]
     pub accounts: String,
+    #[clap(subcommand)]
+    pub subcmd: SubCommand,
 }

-#[derive(Clap, Debug)]
-pub(crate) struct InitConfigArgs {
-    /// chain/network id (localnet, testnet, devnet, betanet)
-    #[clap(short, long)]
-    pub chain_id: Option<String>,
-    /// Account ID for the validator key
-    #[clap(long)]
-    pub account_id: Option<String>,
-    /// Specify private key generated from seed (TESTING ONLY)
-    #[clap(long)]
-    pub test_seed: Option<String>,
-    /// Number of shards to initialize the chain with
-    #[clap(short, long, default_value = "1")]
-    pub num_shards: u64,
-    /// Makes block production fast (TESTING ONLY)
-    #[clap(short, long)]
-    pub fast: bool,
-    /// Genesis file to use when initialize testnet (including downloading)
-    #[clap(short, long)]
-    pub genesis: Option<String>,
-    /// Download the verified NEAR genesis file automatically.
-    #[clap(long)]
-    pub download_genesis: bool,
-    /// Specify a custom download URL for the genesis file.
-    #[clap(long)]
-    pub download_genesis_url: Option<String>,
-    /// Download the verified NEAR config file automtically.
-    #[clap(long)]
-    pub download_config: bool,
-    /// Specify a custom download URL for the config file.
-    #[clap(long)]
-    pub download_config_url: Option<String>,
-    /// Specify the boot nodes to bootstrap the network
-    #[clap(long)]
-    pub boot_nodes: Option<String>,
-    /// Specify a custom max_gas_burnt_view limit.
-    #[clap(long)]
-    pub max_gas_burnt_view: Option<u64>,
+#[derive(Parser, Debug, Clone)]
+pub(crate) enum SubCommand {
+    Mainnet,
+    Testnet,
 }

 pub(crate) fn init_logging() {
-    let env_filter = EnvFilter::new(
-        "tokio_reactor=info,near=info,stats=info,telemetry=info,indexer_example=info,indexer=info,near-performance-metrics=info",
-    );
+    let env_filter = EnvFilter::new("near_lake_framework=info");
     tracing_subscriber::fmt::Subscriber::builder()
         .with_env_filter(env_filter)
         .with_writer(std::io::stderr)
         .init();
 }

-impl From<InitConfigArgs> for near_indexer::InitConfigArgs {
-    fn from(config_args: InitConfigArgs) -> Self {
-        Self {
-            chain_id: config_args.chain_id,
-            account_id: config_args.account_id,
-            test_seed: config_args.test_seed,
-            num_shards: config_args.num_shards,
-            fast: config_args.fast,
-            genesis: config_args.genesis,
-            download_genesis: config_args.download_genesis,
-            download_genesis_url: config_args.download_genesis_url,
-            download_config: config_args.download_config,
-            download_config_url: config_args.download_config_url,
-            boot_nodes: config_args.boot_nodes,
-            max_gas_burnt_view: config_args.max_gas_burnt_view,
-        }
+impl From<Opts> for near_lake_framework::LakeConfig {
+    fn from(opts: Opts) -> Self {
+        let mut lake_config =
+            near_lake_framework::LakeConfigBuilder::default().start_block_height(opts.block_height);
+
+        match &opts.subcmd {
+            SubCommand::Mainnet => {
+                lake_config = lake_config.mainnet();
+            }
+            SubCommand::Testnet => {
+                lake_config = lake_config.testnet();
+            }
+        };
+
+        lake_config.build().expect("Failed to build LakeConfig")
     }
 }
```

```diff title=src/main.rs
--- a/src/main.rs
+++ b/src/main.rs
@@ -2,11 +2,14 @@

 use std::collections::{HashMap, HashSet};

-use clap::Clap;
+use clap::Parser;
 use tokio::sync::mpsc;
 use tracing::info;

-use configs::{init_logging, Opts, SubCommand};
+use near_lake_framework::near_indexer_primitives;
+use near_lake_framework::LakeConfig;
+
+use configs::{init_logging, Opts};

 mod configs;

@@ -15,60 +18,34 @@
 /// We want to catch all *successful* transactions sent to one of the accounts from the list.
 /// In the demo we'll just look for them and log them but it might and probably should be extended based on your needs.

-fn main() {
-    // We use it to automatically search the for root certificates to perform HTTPS calls
-    // (sending telemetry and downloading genesis)
-    openssl_probe::init_ssl_cert_env_vars();
+#[tokio::main]
+async fn main() -> Result<(), tokio::io::Error> {
     init_logging();

     let opts: Opts = Opts::parse();

-    let home_dir = opts.home_dir.unwrap_or_else(near_indexer::get_default_home);
+    let config: LakeConfig = opts.clone().into();

-    match opts.subcmd {
-        SubCommand::Run(args) => {
-            // Create the Vec of AccountId from the provided ``--accounts`` to pass it to `listen_blocks`
-            let watching_list = args
-                .accounts
-                .split(',')
-                .map(|elem| {
-                    near_indexer::near_primitives::types::AccountId::from_str(elem)
-                        .expect("AccountId is invalid")
-                })
-                .collect();
-
-            // Inform about indexer is being started and what accounts we're watching for
-            eprintln!(
-                "Starting indexer transaction watcher for accounts: \n {:#?}",
-                &args.accounts
-            );
-
-            // Instantiate IndexerConfig with hardcoded parameters
-            let indexer_config = near_indexer::IndexerConfig {
-                home_dir,
-                sync_mode: near_indexer::SyncModeEnum::FromInterruption,
-                await_for_node_synced: near_indexer::AwaitForNodeSyncedEnum::WaitForFullSync,
-            };
+    let (_, stream) = near_lake_framework::streamer(config);

-            // Boilerplate code to start the indexer itself
-            let sys = actix::System::new();
-            sys.block_on(async move {
-                eprintln!("Actix");
-                let indexer = near_indexer::Indexer::new(indexer_config);
-                let stream = indexer.streamer();
-                actix::spawn(listen_blocks(stream, watching_list));
-            });
-            sys.run().unwrap();
-        }
-        SubCommand::Init(config) => near_indexer::indexer_init_configs(&home_dir, config.into()),
-    }
+    let watching_list = opts
+        .accounts
+        .split(',')
+        .map(|elem| {
+            near_indexer_primitives::types::AccountId::from_str(elem).expect("AccountId is invalid")
+        })
+        .collect();
+
+    listen_blocks(stream, watching_list).await;
+
+    Ok(())
 }

 /// The main listener function the will be reading the stream of blocks `StreamerMessage`
 /// and perform necessary checks
 async fn listen_blocks(
-    mut stream: mpsc::Receiver<near_indexer::StreamerMessage>,
-    watching_list: Vec<near_indexer::near_primitives::types::AccountId>,
+    mut stream: mpsc::Receiver<near_indexer_primitives::StreamerMessage>,
+    watching_list: Vec<near_indexer_primitives::types::AccountId>,
 ) {
     eprintln!("listen_blocks");
     // This will be a map of correspondence between transactions and receipts
@@ -120,7 +97,7 @@
                         &execution_outcome.receipt.receiver_id,
                         execution_outcome.execution_outcome.outcome.status
                     );
-                    if let near_indexer::near_primitives::views::ReceiptEnumView::Action {
+                    if let near_indexer_primitives::views::ReceiptEnumView::Action {
                         signer_id,
                         ..
                     } = &execution_outcome.receipt.receipt
@@ -128,19 +105,20 @@
                         eprintln!("{}", signer_id);
                     }

-                    if let near_indexer::near_primitives::views::ReceiptEnumView::Action {
-                        actions,
-                        ..
+                    if let near_indexer_primitives::views::ReceiptEnumView::Action {
+                        actions, ..
                     } = execution_outcome.receipt.receipt
                     {
                         for action in actions.iter() {
-                            if let near_indexer::near_primitives::views::ActionView::FunctionCall {
+                            if let near_indexer_primitives::views::ActionView::FunctionCall {
                                 args,
                                 ..
                             } = action
                             {
                                 if let Ok(decoded_args) = base64::decode(args) {
-                                    if let Ok(args_json) = serde_json::from_slice::<serde_json::Value>(&decoded_args) {
+                                    if let Ok(args_json) =
+                                        serde_json::from_slice::<serde_json::Value>(&decoded_args)
+                                    {
                                         eprintln!("{:#?}", args_json);
                                     }
                                 }
@@ -156,8 +134,8 @@
 }

 fn is_tx_receiver_watched(
-    tx: &near_indexer::IndexerTransactionWithOutcome,
-    watching_list: &[near_indexer::near_primitives::types::AccountId],
+    tx: &near_indexer_primitives::IndexerTransactionWithOutcome,
+    watching_list: &[near_indexer_primitives::types::AccountId],
 ) -> bool {
     watching_list.contains(&tx.transaction.receiver_id)
 }
```
