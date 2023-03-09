---
sidebar_label: "시작 옵션"
---

# 시작 옵션으로 Lake 인덱서 확장

<ProgrammingLanguage lang="rust" />

## 끝

이 튜토리얼은 [NEAR Lake 프레임워크](https://near-indexers.io/docs/projects/near-lake-framework) 위에 구축된 간단한 인덱서의 예제 코드로 끝납니다. 이는 다음과 같습니다.


- 지정된 블록 높이에서(기본적으로)
  ```bash
  ./target/release/indexer mainnet from-block 65359506
  ```
- 네트워크의 최신 최종 블록에서
  ```bash
  ./target/release/indexer mainnet from-latest
  ```
- 중단되기 전에 마지막으로 인덱싱한 블록에서
  ```bash
  ./target/release/indexer mainnet from-interruption
  ```

## 동기

프로젝트에 인덱서가 필요한지 여부를 확인하고 인덱서를 생성한다는 것은 개발이라는 한 측면만 다루고 있음을 의미합니다.

또 다른 중요한 측면인 유지 관리가 있습니다. 여기에는 다음과 같은 것들이 포함됩니다.

- 인덱서를 최신 버전의 의존성으로 업그레이드해야 함
- 인덱서를 사용자가 만든 새 기능으로 업데이트해야 함
- 사용하는 서버에 약간의 유지 관리가 필요함
- 사건이 발생
- 기타 등등

위의 거의 모든 경우에, 제공해야 하는 특정 블록뿐만 아니라 중지된 블록 또는 네트워크의 최신 최종 블록에서 인덱서를 시작하거나 다시 시작해야 할 수 있습니다.

[NEAR Lake 프레임워크](https://near-indexers.io/docs/projects/near-lake-framework)는 이러한 옵션을 제공하지 않습니다. 실제로, 이러한 옵션을 사용하여 의도적으로 인덱서를 시작하도록 라이브러리에 권한을 부여하지 않았습니다.

:::info 의도

우리는 [NEAR Lake 프레임워크](https://near-indexers.io/docs/projects/near-lake-framework) 크레이트를 가능한 가장 좁은 방식으로 유지하려고 합니다. 해당 라이브러리의 목표는 한 가지 작업을 수행하고, 크레이트 자체 이외의 기능으로 추가 기능을 부여하는 것입니다.

:::

그러나, 최신 블록 또는 마지막으로 인덱싱한 블록 이후의 블록에서 인덱서를 시작할 수 있는 기능은 매우 유용할 수 있습니다.

또한 4월 [Data Platform Community Meeting](https://near-indexers.io/blog/2022-05-11-community-meeting-record)에서 이 기능을 라이브러리에 추가할 계획인지 질문을 받았습니다. 이에 대해, 우리는 이를 직접 수행하는 방법을 보여주는 튜토리얼을 만들겠다고 약속했습니다. 해당 튜토리얼은 이 문서에서 제공됩니다.

## 준비

이 튜토리얼에서는 인덱서 자체가 아니라 시작 옵션에 중점을 둘 것입니다.

:::note

튜토리얼의 코드 샘플을 단순화하기 위해 단일 파일 `src/main.rs`에 전체 애플리케이션을 작성할 것입니다.

**이를 디자인 조언으로 받아들이지 마시기 바랍니다. 이는 단순성을 위한 것입니다.**

:::

이 튜토리얼의 주요 목표에 집중할 수 있도록, 기본 의존성이 있는 프로젝트를 준비하겠습니다.

새로운 Rust 프로젝트를 생성합니다.

```bash
cargo new --bin indexer && cd indexer
```

`Cargo.toml` 파일 내용을 다음으로 바꿉니다.

```toml title=Cargo.toml
[package]
name = "indexer"
version = "0.1.0"
edition = "2021"
rust-version = "1.60.0"

[dependencies]
clap = { version = "3.1.6", features = ["derive"] }
futures = "0.3.5"
itertools = "0.9.0"
tokio = { version = "1.1", features = ["sync", "time", "macros", "rt-multi-thread"] }
tokio-stream = { version = "0.1" }
tracing = "0.1.13"
tracing-subscriber = "0.2.4"
serde = { version = "1", features = ["derive"] }
serde_json = "1.0.55"

near-lake-framework = "0.3.0"

```

`src/main.rs`의 내용을 다음으로 바꿉니다.

```rust
use clap::{Parser, Subcommand};
use futures::StreamExt;
use tracing_subscriber::EnvFilter;

// TODO: StartOptions

#[tokio::main]
async fn main() -> Result<(), tokio::io::Error> {
    init_tracing();

    let opts = Opts::parse();

    // TODO: Config

    let stream = near_lake_framework::streamer(config);

    let mut handlers = tokio_stream::wrappers::ReceiverStream::new(stream)
        .map(handle_streamer_message)
        .buffer_unordered(1usize);

    while let Some(_handle_message) = handlers.next().await {}

    Ok(())
}

async fn handle_streamer_message(
    streamer_message: near_lake_framework::near_indexer_primitives::StreamerMessage,
) {
    eprintln!(
        "{} / shards {}",
        streamer_message.block.header.height,
        streamer_message.shards.len()
    );
    std::fs::write("last_indexed_block", streamer_message.block.header.height.to_string().as_bytes()).unwrap();
}

fn init_tracing() {
    let mut env_filter = EnvFilter::new("near_lake_framework=info");

    if let Ok(rust_log) = std::env::var("RUST_LOG") {
        if !rust_log.is_empty() {
            for directive in rust_log.split(',').filter_map(|s| match s.parse() {
                Ok(directive) => Some(directive),
                Err(err) => {
                    eprintln!("Ignoring directive `{}`: {}", s, err);
                    None
                }
            }) {
                env_filter = env_filter.add_directive(directive);
            }
        }
    }

    tracing_subscriber::fmt::Subscriber::builder()
        .with_env_filter(env_filter)
        .with_writer(std::io::stderr)
        .init();
}
```

이 코드는 아직 빌드되지 않습니다. 그동안 복사/붙여넣기한 내용을 간단히 살펴보겠습니다.

- 수락할 명령줄 인자를 설정하기 위해 [`clap`](https://docs.rs/clap/latest/clap/)을 가져왔습니다.
- 또한 `futures`와 `tracing_subscriber` 같은 중요한 필수 항목이 있습니다.
- 파일 끝의 `init_tracing`는 애플리케이션을 `near-lake-framework`의 로그에 등록하는 헬퍼 함수입니다.
- 인덱서 상용구 코드가 있는 비동기 `main` 함수는 `LakeConfig` 생성 파트가 없습니다. 이는 튜토리얼에서 곧 다룰 예정입니다.
- 이 튜토리얼 코드를 작성할 위치를 찾을 수 있도록 표시된 몇 가지 `// TODO: ...` 섹션을 찾을 수 있습니다.

자, 모든 준비가 끝났습니다. 계속합시다.

## `StartOptions` 디자인

우리는 인덱서 시작 방법을 정의하는 명령을 전달할 수 있기를 원합니다. 이 튜토리얼에서는 `clap`을 사용할 것입니다.

체인 ID를 받는 구조가 필요합니다. 이렇게 하면 다음 명령을 사용할 수 있습니다.

```bash
./target/release/indexer mainnet ...
```

또는

```bash
./target/release/indexer testnet ...
```

`src/main.rs` 내 `// TODO: StartOptions`를 다음으로 교체합니다.

```rust title=src/main.rs
#[derive(Parser, Debug, Clone)]
#[clap(version = "0.1", author = "Near Inc. <hello@nearprotocol.com>")]
struct Opts {
    #[clap(subcommand)]
    pub chain_id: ChainId,
}

#[derive(Subcommand, Debug, Clone)]
enum ChainId {
    #[clap(subcommand)]
    Mainnet(StartOptions),
    #[clap(subcommand)]
    Testnet(StartOptions),
}

```

이제 인덱서에 인덱싱을 시작할 위치를 알려주는 `StartOptions` 구조를 만들고 싶습니다. 명령은 다음과 같아야 합니다.

```bash
./target/release mainnet from-latest
```

우리가 변경한 것은 다음과 같습니다.

- `from-block N` (`N`은 시작할 블록 높이)
- `from-latest` (네트워크의 최신 최종 블록에서 시작)
- `from-interruption` (이전에 중단된 블록 인덱서에서 시작)

`// TODO: StartOptions` 주석을 열거형으로 바꾸겠습니다. 

```rust title=src/main.rs
#[derive(Subcommand, Debug, Clone)]
pub(crate) enum StartOptions {
    FromBlock { height: u64 },
    FromLatest,
    FromInterruption,
}
```

정말 간단합니다. 그렇죠?

## `LakeConfig` 생성

`LakeConfig`를 생성하기 위해, config 빌더 [`LakeConfigBuilder`](https://docs.rs/near-lake-framework/0.3.0/near_lake_framework/struct.LakeConfigBuilder.html)를 사용할 것입니다. 다행스럽게도 이는 이미 우리가 가져온 것 중 하나입니다.

`// TODO: Config` 주석 대신 빌더를 인스턴스화해 보겠습니다.

```rust title=src/main.src
    let mut lake_config_builder = near_lake_framework::LakeConfigBuilder::default();
```

`lake_config_builder`가 변경 가능한 것으로 정의되어 있음에 유의하세요.

이제 제공된 `ChainId`의 매칭을 통해 인덱싱할 체인을 설정해야 합니다.


```rust title=src/main.src
    let mut lake_config_builder = near_lake_framework::LakeConfigBuilder::default();

    match &opts.chain_id {
        ChainId::Mainnet(start_options) => {
            lake_config_builder = lake_config_builder
                .mainnet();
        }
        ChainId::Testnet(start_options) => {
            lake_config_builder = lake_config_builder
                .testnet();
        }
    }
```

보다시피, `ChainId` 열거형의 변형에 따라 `mainnet()` 또는 `testnet()` 단축키로 `lake_config_builder`를 수정합니다.

설정해야 할 유일한 매개변수인 `start_block_height`는 이 튜토리얼에서 우리에게 가장 중요한 것입니다.

일반적으로 블록 높이 번호 `u64`만 전달하지만, 여기서는 시작 옵션을 구현합니다.

## 시작 옵션 로직

`start_block_height`의 식별 논리를 유지하는 별도의 함수를 만들고, 이를 `get_start_block_height`이라고 부릅시다.


**코드를 읽기만 하고, 복사하지 마세요. 아직 최종 접근 방식이 아닙니다.**

### `FromBlock { height: u64 }`

가장 간단한 `from-block N` 구현부터 시작하겠습니다.

```rust title=src/main.rs
async fn get_start_block_height(start_options: &StartOptions) -> u64 {
    match start_options {
        StartOptions::FromBlock { height } => height,

    }
}
```

좋습니다. 충분히 간단합니다. `StartOptions`을 위한 다른 매치 암(match arm)은 무엇이 있을까요?

```rust title=src/main.rs
async fn get_start_block_height(start_options: &StartOptions) -> u64 {
    match start_options {
        StartOptions::FromBlock { height } => height,
        StartOptions::FromLatest =>
    }
}
```

네트워크에서 최신 블록을 어떻게 가져와야 할까요? 우리는 JSON RPC를 쿼리하고 최종 블록을 가져와 높이를 추출하고 마무리해야 합니다.

### `FromLatest`

Rust 코드 내에서 JSON RPC를 쿼리하려면 [`near-jsonrpc-client-rs` crate](https://github.com/near/near-jsonrpc-client-rs)를 사용해야 합니다.

GitHub에 있는 프로젝트 레퍼지토리의 해당 폴더에서 여러 가지 [유용한 예제](https://github.com/near/near-jsonrpc-client-rs/tree/master/examples)를 찾을 수 있습니다.


다음을 `Cargo.toml` 끝에 추가하세요.

```toml title=Cargo.toml
near-jsonrpc-client = "0.3.0"
```

최종 블록 높이를 가져오는 코드는 다음과 같습니다.

```rust
use near_jsonrpc_client::{methods, JsonRpcClient};
use near_lake_framework::near_indexer_primitives::types::{BlockReference, Finality};

async fn final_block_height() -> u64 {
    let client = JsonRpcClient::connect("https://rpc.mainnet.near.org");
    let request = methods::block::RpcBlockRequest {
        block_reference: BlockReference::Finality(Finality::Final),
    };

    let latest_block = client.call(request).await.unwrap();

    latest_block.header.height
}
```

좋습니다. 그러나 `"https://rpc.mainnet.near.org"`의 하드코딩된 값은 그다지 좋아 보이지 않습니다. 특히 두 네트워크를 모두 지원하려는 경우, 더욱 그렇습니다.

그러나, 다음과 같이 `get_start_block_function`에 JSON RPC URL을 전달하여 처리할 수 있습니다.


```rust title=src/main.rs

async fn get_start_block_height(
    start_options: &StartOptions,
    rpc_url: &str,
) -> u64 {
    ...
}

    ...
    match &opts.chain_id {
        ChainId::Mainnet(start_options) => {
            lake_config_builder = lake_config_builder
                .mainnet()
                .start_block_height(
                    get_start_block_height(
                        start_options,
                        "https://rpc.mainnet.near.org",
                    ).await
                );
        }
        ChainId::Testnet(start_options) => {
            lake_config_builder = lake_config_builder
                .testnet()
                .start_block_height(
                    get_start_block_height(
                        start_options,
                        "https://rpc.testnet.near.org",
                    ).await
                )
        }
    }

```

이는 예쁘지 않게 생겼습니다. 가능한 세 가지 경우 중 한 가지 경우에만 필요하면, 왜 매번 전달해야 할까요?

대신 우리는 함수 `get_start_block_height`에 전체 `Opts`를 전달할 수 있습니다.


```rust title=src/main.rs
async fn get_start_block_height(opts: &Opts) -> u64 {
    match opts.chain_id {
        ChainId::Mainnet(start_options) => {
            match start_options {
                StartOptions::FromBlock { height } => height,
                StartOptions::FromLatest =>
            }
        }
    }
}
```

적어도 우리는 필요한 모든 것을 가지고 있습니다. 하지만 여전히 보기 흉하고 코드 중복이 무조건 포함될 것입니다.

대신 우리가 제안하는 것은 몇 가지 유용한 메서드로 `impl Opts`를 생성해서 JSON RPC URL과 `StartOptions` 인스턴스를 가져오는 것입니다.


**이제 코드 복사를 진행해도 좋습니다.**

`StartOptions` 정의 아래 어딘가에 다음을 추가합니다.

```rust title=src/main.rs
impl Opts {
    pub fn rpc_url(&self) -> &str {
        match self.chain_id {
            ChainId::Mainnet(_) => "https://rpc.mainnet.near.org",
            ChainId::Testnet(_) => "https://rpc.testnet.near.org",
        }
    }

    pub fn start_options(&self) -> &StartOptions {
        match &self.chain_id {
            ChainId::Mainnet(args) | ChainId::Testnet(args) => args
        }
    }
}
```

이제 최종 블록 `final_block_height`을 쿼리하는 헬퍼 함수를 ​​사용하여 `get_start_block_height` 함수를 만들 수 있습니다(재사용할 것이므로, 주의 바람).


```rust title=src/main.rs
async fn get_start_block_height(opts: &Opts) -> u64 {
    match opts.start_options() {
        StartOptions::FromBlock { height } => *height,
        StartOptions::FromLatest => final_block_height(opts.rpc_url()).await,
        // a placeholder
        StartOptions::FromInterruption => 0,
    }
}

async fn final_block_height(rpc_url: &str) -> u64 {
    let client = JsonRpcClient::connect(rpc_url);
    let request = methods::block::RpcBlockRequest {
        block_reference: BlockReference::Finality(Finality::Final),
    };

    let latest_block = client.call(request).await.unwrap();

    latest_block.header.height
}
```

`FromInterruption`과 자리 표시자에 대한 주석을 보셨을 것입니다. 우리가 이를 만든 이유는, 지금 바로 애플리케이션을 빌드하여 `FromLatest`가 예상대로 작동하는지 테스트할 수 있도록 하기 위함입니다.

### `FromLatest` 테스트

:::danger 자격 증명

[자격 증명](credentials.md) 페이지에 설명된 대로 자격 증명을 설정했는지 확인하세요. 그렇지 않으면 코드를 작동시킬 수 없습니다.

:::

코드를 빌드하고 실행해 봅시다.

```bash
cargo build --release

./target/release/indexer mainnet from-latest
```

코드가 빌드되면 터미널에 다음과 같은 내용이 표시됩니다.

```
65364116 / shards 4
65364117 / shards 4
65364118 / shards 4
65364119 / shards 4
65364120 / shards 4
```

`CTRL+C`를 눌러 중지할 수 있습니다.

이제 `FromInterruption`으로 넘어갈 수 있습니다.

### `FromInterruption`

중단된 블록을 인덱서에게 알리기 위해, 인덱서는 어딘가에 블록 높이를 저장해야 합니다. 그리고 이는 `handle_message` 함수 내에서 수행되어야 합니다.

이 튜토리얼의 시작 부분에 복사/붙여넣은 상용구 코드에서 한 줄의 코드를 볼 수 있습니다.

```rust
    std::fs::write("last_indexed_block", streamer_message.block.header.height.to_string().as_bytes()).unwrap();
```

이는 마지막 인덱싱된 블록 높이를 인덱서 바이너리 바로 근처의 `last_indexed_block` 파일에 저장합니다.

실제 인덱서에서는 사용 중인 툴셋에 따라 다른 스토리지를 사용할 수도 있습니다.

그러나 개념을 보여주기 위해, 여기서는 파일에 저장하는 가장 쉬운 접근 방식을 사용하기로 결정했습니다.

이제 파일에서 값 읽기를 구현해야 합니다.

:::note

만약 인덱서를 처음 시작하였고, 중단점에서부터 시작하도록 요청하면 `last_indexed_block`는 찾을 수 없고 실패할 것입니다.

이는 우리가 기대하는 행동이 아닙니다. 그렇기 때문에 중단점(가능한 경우) 또는 최신부터 시작하기를 원한다고 가정한 것입니다.

:::

`get_start_block_height`를 마무리해 봅시다.

```rust title=src/main.rs
async fn get_start_block_height(opts: &Opts) -> u64 {
    match opts.start_options() {
        StartOptions::FromBlock { height } => *height,
        StartOptions::FromLatest => final_block_height(opts.rpc_url()).await,
        // a placeholder
        StartOptions::FromInterruption => {
            match &std::fs::read("last_indexed_block") {
                Ok(contents) => {
                    String::from_utf8_lossy(contents).parse().unwrap()
                }
                Err(e) => {
                    eprintln!("Cannot read last_indexed_block.\n{}\nStart indexer from latest final", e);
                    latest_block_height(opts.rpc_url()).await
                }
            }
        },
    }
}
```

여기서 하려고 하는 것은 다음과 같습니다.

- `last_indexed_block` 파일을 읽으려고 합니다.
- `Result`가 `Ok`인 경우, `contents`를 읽고 파싱합니다.
- `Result`가 `Err`인 경우, 오류에 대한 메시지를 출력하고 `last_block_height`를 호출하여 네트워크에서 최종 블록을 가져옵니다(이전에 이야기한 fallback).

### `FromInterruption` 테스트

모든 것이 예상대로 작동하는지 확인하기 위해, 우리는 마지막 인덱싱된 블록 저장을 목표로 제네시스부터 인덱싱을 시작할 것입니다. 그런 다음 중단된 상태에서 시작하여 최신 상태에서 시작하지 않도록 할 것입니다.

제네시스부터 빌드하고 실행해 봅시다.

:::info 제네시스 트릭

제네시스 블록에서 NEAR Lake 프레임워크 기반 인덱서를 시작하려면, `start_block_height`를 `0`으로 지정하기만 하면 됩니다.

:::

```bash
cargo build --release
./target/release/indexer mainnet from-block 0
```

다음과 같은 내용이 표시됩니다.

```
9820210 / shards 1
9820214 / shards 1
9820216 / shards 1
9820219 / shards 1
9820221 / shards 1
9820226 / shards 1
9820228 / shards 1
9820230 / shards 1
9820231 / shards 1
9820232 / shards 1
9820233 / shards 1
9820235 / shards 1
9820236 / shards 1
9820237 / shards 1
9820238 / shards 1
```

`CTRL+C`를 누르면 중지될 것입니다.

마지막으로 본 블록 높이를 기억하세요. 우리 예에서는 `9820238`입니다.

중단점에서 인덱서를 다시 시작합니다.


```bash
./target/release/indexer mainnet from-interruption
```

기억한 블록으로부터 시작하는 인덱서 로그가 표시되어야 합니다.

완벽합니다! 모두 끝났습니다. 이제 결과에서 얻은 코드를 필요에 맞게 조정하고, 인덱서에서 사용할 수 있습니다.

## 요약

시작 옵션으로 인덱서에 권한을 부여하는 방법을 확인했습니다. 보시다시피 여기에는 복잡한 것이 없습니다.


[`near-examples/lake-indexer-start-options`](https://github.com/near-examples/lake-indexer-start-options)에서 소스 코드를 찾을 수 있습니다.
