---
id: introduction
title: NFT Zero to Hero
sidebar_label: 소개
---

> 이 _Zero to Hero_ 시리즈에서는 NFT(Non-Fungible Token) 스마트 컨트랙트의 모든 측면을 다루는 일련의 튜토리얼를 찾을 수 있습니다. 
> 미리 배포된 컨트랙트를 사용하여 NFT를 생성하는 것으로 시작하여 마지막에는 모든 확장을 지원하는 완전한 NFT 스마트 컨트랙트를 구축하게 됩니다.

---

## 전제 조건

이 튜토리얼을 성공적으로 완료하려면 다음이 필요합니다.

- [Rust](/develop/prerequisites)
- [NEAR 지갑](https://wallet.testnet.near.org/create)
- [NEAR-CLI](/tools/near-cli#setup)

:::info Rust가 처음이신가요?
Rust를 처음 사용하고, 스마트 컨트랙트 개발에 뛰어들고 싶다면 [빠른 시작 가이드](/develop/quickstart-guide)가 시작하기에 좋은 곳입니다.
:::

---

## 개요

다음은 **_Zero_** to **_Hero_**로 순식간에 데려다 줄 단계입니다! 💪

| 단계 | 이름                                                                         | 설명                                                                          |
| ---- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 1    | [사전 배포된 컨트랙트](/tutorials/nfts/predeployed-contract) | 스마트 컨트랙트를 코딩, 생성 또는 배포할 필요 없이 NFT를 생성합니다.            |
| 2    | [컨트랙트 아키텍처](/tutorials/nfts/skeleton)             | NFT 스마트 컨트랙트의 기본 아키텍처를 배우고 코드를 컴파일합니다.             |
| 3    | [발행](/tutorials/nfts/minting)                            | 스마트 컨트랙트가 대체 불가능 토큰을 만들 수 있도록 구체화하세요.          |
| 4    | [컨트랙트 업그레이드](/tutorials/nfts/upgrade-contract)        | 기존 스마트 컨트랙트를 업그레이드하는 프로세스에 대해 알아보세요.  |
| 5    | [열거](/tutorials/nfts/enumeration)                    | 스마트 컨트랙트의 상태를 반환하는 데 사용할 수 있는 열거 메서드를 살펴보세요. |
| 6    | [핵심](/tutorials/nfts/core)                                  | 	토큰 전송을 허용하는 핵심 표준을 사용하여 NFT 컨트랙트 확장         |
| 7    | [승인](/tutorials/nfts/approvals)                        | 다른 계정이 당신을 대신하여 NFT를 전송할 수 있도록 컨트랙트를 확장하세요.         |
| 8    | [로열티](/tutorials/nfts/royalty)                            | NFT 로열티를 추가하여 일정 비율의 금액을 토큰 생성자에게 지급할 수 있습니다.      |
| 9    | [이벤트](/tutorials/nfts/events)                           | 이 튜토리얼에서는 이벤트 확장을 탐색하여 컨트랙트가 특정 이벤트에 반응할 수 있도록 합니다. |
| 10    | [마켓플레이스](/tutorials/nfts/marketplace)                            | 일반 마켓플레이스가 NEAR에서 작동하는 방식에 대해 알아보고, NFT 구매 및 판매를 허용하는 일부 코드에 대해 자세히 알아보세요. |

---

<!--
1. [Events](/tutorials/nfts/events): in this tutorial you'll explore the events extension, allowing the contract to react on certain events.
1. [Marketplace](/tutorials/nfts/marketplace): in the last tutorial you'll be exploring some key aspects of the marketplace contract.
-->

---
## 다음 단계

시작할 준비가 되셨습니까? [사전 배포된 컨트랙트](/tutorials/nfts/predeployed-contract) 튜토리얼로 이동하여 학습을 시작하세요!

대체 불가능 토큰과 스마트 컨트랙트에 대해 이미 알고 있다면 건너뛰고 관심 있는 튜토리얼로 바로 이동하세요. 튜토리얼은 주어진 지점에서 시작할 수 있도록 설계되었습니다!

:::info 질문?
👉 [Discord](https://near.chat/)에 가입하고 `#development` 채널에서 알려주세요. 👈

우리는 또한 DevRel 팀이 당신의 질문에 답할 수 있는 실시간 [Office Hour](https://near.org/office-hours/)을 매일 개최합니다. 🤔

월요일 – 금요일 오전 11시 – 오후 12시(태평양 표준시 오후 6시 – 오후 7시)
:::