---
id: networks
title: NEAR 네트워크
sidebar_label: 네트워크
---

NEAR 프로토콜은 각각 독립적인 밸리데이터와 고유한 상태로 작동하는 여러 네트워크에서 작동합니다. 이러한 네트워크는 다음과 같습니다.

* [`mainnet`](/concepts/basics/networks#mainnet)
* [`testnet`](/concepts/basics/networks#testnet)
* [`betanet`](/concepts/basics/networks#betanet)
* [`localnet`](/concepts/basics/networks#localnet)


## 메인넷 {#mainnet}

`mainnet`은 스마트 컨트랙트 및 실시간 토큰 전송을 위해 생산 준비된 네트워크입니다. `mainnet`을 위헤 준비된 컨트랙트는 엄격한 테스트와, 필요한 경우 독립적인 보안 검토를 거쳐야 합니다. `mainnet`은 시간이 지나도 상태가 지속되도록 보장되는 유일한 네트워크입니다 _(네트워크 유효성 검사 프로세스의 일반적인 보안 보장에 따름)_ .

* 상태: `https://rpc.mainnet.near.org/status`
* [ [익스플로러](https://explorer.near.org) ]
* [ [지갑](https://wallet.near.org) ]
* [ [데이터 스냅샷](https://near-nodes.io/intro/node-data-snapshots) ]


## 테스트넷 {#testnet}

`testnet`은 `mainnet`에 배포하기 전 `nearcore`의 변경 사항에 대한 공용 네트워크이자 최종 테스트 네트워크입니다. `testnet`은 배포 전 NEAR 플랫폼의 모든 측면을 테스트하기 위한 것입니다. 계정 생성, 모의 토큰 전송, 개발 도구 및 스마트 컨트랙트 개발에서 `testnet` 환경은 `mainnet`과 매우 유사합니다. 모든 `nearcore` 내 변경 사항은 변경 사항이 `mainnet`에 릴리스되기 전에 첫 번째 테스트넷에 릴리스 후보로 배포됩니다. 다수의 `testnet` 밸리데이터가 트랜잭션을 검증하고 새 블록을 생성합니다. dApp 개발자는  `mainnet`에 배포하기 전에 애플리케이션을 `testnet`에 배포합니다. `testnet`에는 자체 트랜잭션과 상태가 있다는 점에 유의하는 것이 중요합니다.

* 상태: `https://rpc.testnet.near.org/status`
* [ [익스플로러](https://explorer.testnet.near.org) ]
* [ [지갑](https://wallet.testnet.near.org) ]
* [ [데이터 스냅샷](https://near-nodes.io/intro/node-data-snapshots) ]


## 베타넷 {#betanet}

`betanet`은 `nearcore`의 안정성과 이전 버전과의 호환성을 테스트하기 위해 실행 되는 공용 네트워크 입니다. `betanet`의 밸리데이터는 베타넷 분석 그룹의 참가자로서 활발한 토론에 참여하고 버그 보고서를 제출하며 문제 해결에 참여합니다. `betanet` 프로토콜 변경 시 상태가 새롭게 압축되는 자동화된 하드 포크가 실행됩니다. 따라서 `betanet`에는 제네시스가 자주 존재하며, 과거 데이터 스냅샷이 없습니다. 또한 `betanet`에는 일반적으로 아직 안정화되지 않은 프로토콜 기능이 포함된 일일 릴리스가 있습니다. `betanet`의 상태는 최대한 유지되지만 높은 변동성을 가집니다.


* 상태: `https://rpc.betanet.near.org/status`
* [ [지갑](https://wallet.betanet.near.org) ]


## 로컬넷 {#localnet}

`localnet`은 퍼블릭 블록체인과 독립적인 NEAR 플랫폼으로 작업하려는 개발자를 위한 것입니다. 여기서는 노드를 직접 생성해야 합니다. `localnet`에서는 고급 사용 사례(`nearcore`에 대한 변경 포함)를 위해 계정, 경제 및 기타 요소를 완전히 제어할 수 있습니다. 개발자로서 개발 프로세스 중에 작업에 대한 정보 유출을 피하려는 경우, `localnet`은 올바른 선택입니다.

로컬 개발에 대한 자세한 내용은 [여기](https://near-nodes.io/validator/running-a-node) 있습니다.

`near-cli` [네트워크 선택](/tools/near-cli#network-selection) 변수는 `local` 입니다.

---

:::tip 질문이 있으신가요?
<a href="https://stackoverflow.com/questions/tagged/nearprotocol">
  <h8>StackOverflow에 물어보세요!</h8>
</a>
:::
