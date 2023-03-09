---
id: skeleton
title: 뼈대 및 Rust 아키텍처
sidebar_label: 컨트랙트 아키텍처
---

> 이 글에서는 이 _"Zero to Hero"_ 시리즈를 진행하면서 개발하게 될 NFT 컨트랙트의 기본 아키텍처에 대해 알아봅니다. 
> 컨트랙트의 레이아웃을 발견하고 완전한 기능을 갖춘 스마트 컨트랙트를 구축하기 위해 Rust 파일이 어떻게 구성되어 있는지 확인할 수 있습니다.

:::info Rust가 처음이신가요?
Rust를 처음 사용하고 스마트 컨트랙트 개발에 뛰어들고 싶다면 [빠른 시작 가이드](/develop/quickstart-guide)가 시작하기에 좋은 곳입니다.
:::
---

## 소개

이 튜토리얼은 NFT 스마트 컨트랙트의 코드 뼈대와 파일 구조를 보여줍니다. 모든 기능이 배치된 방법과 채워야 하는 누락된 Rust 코드를 찾을 수 있습니다. 모든 파일과 기능이 다루어지면 모형 컨트랙트를 작성하는 프로세스를 거쳐 확인합니다. 모든 것이 올바르게 작동합니다.

## 파일 구조

일반 [Rust](https://www.rust-lang.org/) 프로젝트에 따라 이 스마트 컨트랙트의 파일 구조는 다음과 같습니다.

- `Cargo.toml` : 코드 의존성을 정의하기 위한 파일(`package.json`과 유사)
- `src` : 모든 Rust 소스 파일이 저장되는 폴더입니다.
- `target` : 컴파일된 `wasm` 파일이 출력될 폴더입니다.
- `build.sh` : 소스 코드를 컴파일하는 더 편리한 방법을 제공하기 위해 추가된 스크립트

### 소스 파일

| 파일                             | 설명                                                                      |
| -------------------------------- | -------------------------------------------------------------------------------- |
| [approval.rs](#approvalrs)       | 대체 불가능 토큰의 액세스 및 전송을 제어하는 ​​내부 함수들이 존재합니다. |
| [enumeration.rs](#enumerationrs) | NFT 토큰 및 해당 소유자를 쿼리하는 내부 메서드를 포함합니다.                        |
| [lib.rs](#librs)                 | 공개된 스마트 컨트랙트 함수들을 가지고 있습니다.                               |
| [metadata.rs](#metadatars)       | 토큰 및 메타데이터 구조를 정의합니다.                                        |
| [mint.rs](#mintrs)               | 내부 토큰 발행 로직을 포함합니다.                                                    |
| [nft_core.rs](#nft_corers)       | 사용자 간에 NFT를 전송할 수 있는 내부 핵심 로직을 포함합니다.                       |
| [royalty.rs](#royaltyrs)         | 내부 지불 관련 함수를 포함합니다.                                               |

```
nft-contract
├── Cargo.lock
├── Cargo.toml
├── README.md
├── build.sh
└── src
    ├── approval.rs
    ├── enumeration.rs
    ├── lib.rs
    ├── metadata.rs
    ├── mint.rs
    ├── nft_core.rs
    └── royalty.rs
```

:::tip
[GitHub 레퍼지토리](https://github.com/near-examples/nft-tutorial/tree/1.skeleton)에서 코드를 살펴보세요.
:::

---

## `approval.rs`

> 이를 통해 사람들은 다른 계정을 NFT를 대신 전송할 수 있게끔 승인할 수 있습니다.

이 파일에는 표준의 [승인 관리](https://nomicon.io/Standards/NonFungibleToken/ApprovalManagement.html) 확장을 준수하는 내부 로직이 포함되어 있습니다. 다음은 메서드 및 기능에 대한 분석입니다.

| 메서드              | 설명                                                                                               |
| ------------------- | --------------------------------------------------------------------------------------------------------- |
| **nft_approve**     | 사용자를 대신하여 토큰을 전송할 계정 ID를 승인합니다.                                                |
| **nft_is_approved** | 입력 계정에 토큰 ID를 승인할 수 있는 액세스 권한이 있는지 확인합니다.                              |
| **nft_revoke**      | 사용자를 대신하여 토큰을 전송하는 특정 계정을 취소합니다.                                    |
| **nft_revoke_all**  | 사용자를 대신하여 토큰을 전송하는 모든 계정을 취소합니다.                                          |
| **nft_on_approve**  | 이 콜백 함수는 `nft_approve`에 의해 시작되어, 외부 컨트랙트로의 교차 컨트랙트 호출을 실행합니다. |

```rust reference
https://github.com/near-examples/nft-tutorial/tree/1.skeleton/nft-contract/src/approval.rs#L4-L33
```

Zero to Hero 시리즈의 [승인 섹션](/tutorials/nfts/approvals)에서 이러한 함수들에 대해 자세히 알아볼 수 있습니다.

---

## `enumeration.rs`

> 이 파일은 NFT에 대한 정보를 보는 데 필요한 내부 함수들을 제공하며 표준의 [열거](https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration) 확장자를 따릅니다.

| 메서드                   | 설명                                                                        |
| ------------------------ | ---------------------------------------------------------------------------------- |
| **nft_total_supply**           | 컨트랙트에 저장된 NFT의 총량을 반환합니다. |
| **nft_tokens**           | 소유자와 관계없이 컨트랙트에 저장된 페이지가 매겨진 NFT 목록을 반환합니다. |
| **nft_supply_for_owner** | 주어진 사용자가 소유한 총 NFT 수를 볼 수 있습니다.                  |
| **nft_tokens_for_owner** | 지정된 사용자가 소유한 NFT 목록을 페이지 형태로 반환합니다.                          |

```rust reference
https://github.com/near-examples/nft-tutorial/blob/1.skeleton/nft-contract/src/enumeration.rs#L4-L44
```

튜토리얼 시리즈의 [열거 섹션](/tutorials/nfts/enumeration)에서 이러한 함수에 대해 자세히 알아볼 수 있습니다.

---

## `lib.rs`

> 이 파일은 컨트랙트가 저장하고 추적하는 정보를 간략하게 설명합니다.

| 메서드               | 설명                                                                                     |
| -------------------- | ----------------------------------------------------------------------------------------------- |
| **new_default_meta** | 기본 `metadata`를 이용해 컨트랙트를 초기화해, 사용자가 입력값을 제공하지 않아도 되도록 합니다. |
| **new**              | 사용자가 제공한 `metadata`로 컨트랙트를 초기화합니다.                                     |

:::info 기억해 두세요
초기화 함수 (`new`, `new_default_meta`)은 한 번만 호출될 수 있습니다.
:::

```rust reference
https://github.com/near-examples/nft-tutorial/tree/1.skeleton/nft-contract/src/lib.rs#L45-L71
```

튜토리얼 시리즈의 [발행 섹션](/tutorials/nfts/minting)에서 이러한 기능에 대해 자세히 알아볼 것입니다.

---

## `metadata.rs`

> 이 파일은 토큰 및 메타데이터에 대해 저장할 정보를 추적하는 데 사용됩니다. 
> 또한 표준 메타데이터 확장의 일부인 컨트랙트의 [메타데이터](https://nomicon.io/Standards/Tokens/NonFungibleToken/Metadata)를 보는 기능을 정의할 수 있습니다.

| 이름              | 설명                                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------- |
| **TokenMetadata** | 이 구조는 각 토큰에 대해 저장할 수 있는 메타데이터를 정의합니다(제목, 설명, 미디어 등).       |
| **Token**         | 이 구조는 각 토큰에 대한 컨트랙트에 어떤 정보가 저장될 것인지를 설명합니다.           |
| **JsonToken**     | View 호출을 통해 NFT에 대한 정보를 조회할 때, 반환된 정보는 이 JSON 토큰에 저장됩니다. |
| **nft_metadata**  | 이 함수를 통해 사용자는 컨트랙트의 내부 메타데이터를 쿼리할 수 있습니다.                                    |

```rust reference
https://github.com/near-examples/nft-tutorial/blob/1.skeleton/nft-contract/src/metadata.rs#L10-L55
```

튜토리얼 시리즈 내 [발행 섹션](/tutorials/nfts/minting)에서 이러한 함수에 대해 더 많이 배울 수 있습니다.

---

## `mint.rs`

> 내부 토큰 발행 로직을 포함합니다.

| 메서드       | 설명                               |
| ------------ | ----------------------------------------- |
| **nft_mint** | 이 함수는 대체 불가능 토큰을 생성합니다. |

```rust reference
https://github.com/near-examples/nft-tutorial/tree/1.skeleton/nft-contract/src/mint.rs#L4-L16
```

---

## `nft_core.rs`

> 사용자 간에 NFT를 전송할 수 있는 핵심 로직입니다.

| 메서드                   | 설명                                                                                                                                                                                                                                                                                   |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **nft_transfer**         | NFT를 수신자 ID로 전송합니다.                                                                                                                                                                                                                             |
| **nft_transfer_call**    |  NFT를 수신자에게 전송하고 수신자 ID 컨트랙트의 함수를 호출합니다. 보낸 사람의 계정에서 토큰이 전송된 경우 함수는 `true`를 반환합니다. account.                                                                                                                        |
| **nft_token**            | 사용자가 특정 NFT에 대한 정보를 쿼리할 수 있도록 합니다.                                                                                                                                                                                                                               |
| **nft_on_transfer**      | NFT가 `nft_transfer_call` 메서드를 통해 컨트랙트 계정으로 전송될 때 다른 컨트랙트에 의해 호출됩니다. 토큰이 보낸 사람에게 다시 반환되어야 하면 `true`를 반환합니다.                                                                                               |
| **nft_resolve_transfer** |`nft_transfer_call`을 시작하고 NFT를 전송할 때 표준에 따르면 수신자의 컨트랙트에 있는 메서드도 호출해야 합니다. 수신자가 발신자에게 NFT를 반환해야 하는 경우(`nft_on_transfer` 메서드의 반환 값에 따라) 이 함수를 사용하면 해당 로직을 실행할 수 있습니다.  |

```rust reference
https://github.com/near-examples/nft-tutorial/blob/1.skeleton/nft-contract/src/nft_core.rs#L7-L56
```

튜토리얼 시리즈의 [발행 섹션](/tutorials/nfts/minting)에서 이러한 함수들에 대해 자세히 알아볼 것입니다.

---

## `royalty.rs`

> 내부 지불 관련 기능을 포함합니다.

| 메서드                  | 설명                                                                                                   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| **nft_payout**          | 이 view 메서드는 주어진 토큰에 대한 지불금을 계산합니다.                                                     |
| **nft_transfer_payout** | 토큰을 수신자 ID로 전송하고 주어진 잔고에 대해 지불해야 하는 지불 객체를 반환하는 내부 메서드입니다. |

```rust reference
https://github.com/near-examples/nft-tutorial/tree/1.skeleton/nft-contract/src/royalty.rs#L3-L17
```

튜토리얼 시리즈의 [로열티 섹션](/tutorials/nfts/royalty)에서 이러한 함수들에 대해 자세히 알아볼 수 있습니다.

---

## 뼈대 만들기

- 아직 기본 레퍼지토리를 복제하지 않은 경우 터미널을 열고 다음을 실행합니다.

```sh
git clone https://github.com/near-examples/nft-tutorial/
```

- 다음으로 `1.skeleton` 브랜치로 전환하고, `yarn`을 사용하여 컨트랙트를 빌드합니다.

```sh
cd nft-tutorial
git switch 1.skeleton
yarn build
```

이 소스는 뼈대일 뿐이므로 다음과 같이 사용하지 않는 코드에 대한 많은 경고를 받게 됩니다.


```
   Compiling nft_simple v0.1.0 (/Users/dparrino/near/nft-tutorial/nft-contract)
warning: unused imports: `LazyOption`, `LookupMap`, `UnorderedMap`, `UnorderedSet`
 --> src/lib.rs:3:29
  |
3 | use near_sdk::collections::{LazyOption, LookupMap, UnorderedMap, UnorderedSet};
  |                             ^^^^^^^^^^  ^^^^^^^^^  ^^^^^^^^^^^^  ^^^^^^^^^^^^
  |
  = note: `#[warn(unused_imports)]` on by default
...
...
...
warning: constant is never used: `NO_DEPOSIT`
 --> src/nft_core.rs:6:1
  |
6 | const NO_DEPOSIT: Balance = 0;
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: `nft_simple` (lib) generated 50 warnings
    Finished release [optimized] target(s) in 22.58s
✨  Done in 22.74s.
```

이러한 경고에 대해 걱정하지 마세요. 아직 이 컨트랙트를 배포하지 않을 것입니다. 뼈대 구축하는 것은 Rust 툴체인이 제대로 작동하는지 확인하는 것이고, 이는 다음 튜토리얼에서 이 NFT 컨트랙트의 개선된 버전을 컴파일할 수 있는지 확인하는 데 유용합니다.



---

## 결론

이 NFT 스마트 컨트랙트의 레이아웃과 다양한 소스 파일에 모든 함수가 어떻게 배치되어 있는지 확인했습니다. `yarn`을 사용하여 컨트랙트를 컴파일할 수 있었고, 다음 [발행 튜토리얼](/tutorials/nfts/minting)에서 이 뼈대를 구체화하기 시작할 것입니다.



:::note 이 문서의 버전 관리
이 글을 쓰는 시점에서 이 예제는 다음 버전에서 작동합니다.

- rustc: `1.6.0`
- near-sdk-rs: `4.0.0`
- NFT 표준: [NEP171](https://nomicon.io/Standards/Tokens/NonFungibleToken/Core), `1.0.0` 버전

:::
