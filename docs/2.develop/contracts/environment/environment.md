---
id: environment
title: 환경
# sidebar_label: 🏞️ Environment
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import TableAs from "./table.as.md";
import TableRs from "./table.rs.md";
import TableJs from "./table.js.md";

import TableAsFunc from "./table-func.as.md";
import TableRsFunc from "./table-func.rs.md";
import TableJsFunc from "./table-func.js.md";


모든 메서드 실행에는 다음과 같은 것들과 관련된 환경이 있습니다.


1. 메소드를 호출한 사람
2. 호출에 첨부된 돈
3. 사용 가능한 컴퓨팅 리소스
4. 현재 타임스탬프
5. 공개 키 유도를 위한 헬퍼 함수(예시)

---

## 환경 변수

<Tabs className="language-tabs" groupId="code-tabs">
  <TabItem value="🌐 JavaScript">
    <TableJs></TableJs>
  </TabItem>
  <TabItem value="🦀 Rust">
    <TableRs></TableRs>
  </TabItem>
  <TabItem value="🚀 AssemblyScript" >
    <TableAs></TableAs>
  </TabItem>
</Tabs>

---

## 호출자는 누구인가요?

환경에서는 세 가지 중요한 사용자인 `current_account`, `predecessor`, 그리고 `signer`에 대한 정보를 제공합니다.

### 현재 계정

`current_account`에는 컨트랙트가 배포된 주소가 포함되어 있습니다. 이는 소유권을 구현하는 데 매우 유용합니다. 예를 들어 컨트랙트 자체에서만 호출할 수 있는 퍼블릭 메서드를 만들 때 이를 사용할 수 있습니다.

### 전임자와 서명자

`predecessor`는 컨트랙트에서 메서드를 호출한 계정입니다. 한편, `signer`는 최초 트랜잭션에 _서명한_ 계정을 의미합니다. 

단순 트랜잭션([교차 컨트랙트 호출](../crosscontract.md) 없음) 중에는 `predecessor`와 `signer`가 동일합니다. 예를 들어 **alice.near**가 **contract.near**를 호출하는 경우, 컨트랙트의 관점에서 **alice.near**는 `predecessor`인 동시에 `signer`인 것입니다. 그러나 **contract.near**가 [교차 컨트랙트 호출](../crosscontract.md)을 생성하면, `predecessor`에 변경 사항이 발생합니다. 아래 예제에서, **pool.near**가 실행되면, **contract.near**가 `predecessor`로, **alice.near**가 `signer`로 표시됩니다.

![img](https://miro.medium.com/max/1400/1*LquSNOoRyXpITQF9ugsDpQ.png)
*스마트 컨트랙트와 상호 작용하는 사용자에 대한 정보에 액세스할 수 있습니다.*

:::tip
대부분의 시나리오에서는 **predecessor(전임자)**만 알면 됩니다. 그러나, signer(서명자)가 매우 유용한 상황도 있습니다. 예를 들어, [이 마켓플레이스](https://github.com/near-examples/nft-tutorial/blob/7fb267b83899d1f65f1bceb71804430fab62c7a7/market-contract/src/nft_callbacks.rs#L42)에 NFT를 추가할 때, 컨트랙트는 `signer`를 통해 트랜잭션을 생성한 사람이 NFT 소유자인지 확인합니다.
:::

---

## 잔고 및 첨부된 NEAR
환경은 3개의 토큰 관련 매개변수에 대한 액세스를 제공합니다. 이는 모두 yoctoNEAR ((1 Ⓝ = 10<sup>24</sup>yⓃ))로 표현됩니다.

### 첨부된 금액
`attached_deposit`은 호출에 연결된 predecessor의 yoctoNEAR 양을 나타냅니다.

이 금액은 컨트랙트 계정에 **이미 예치되어** 있으며, **메서드 패닉**이 발생하면 `predecessor`에게 **자동으로 반환** 됩니다.

:::warning
[교차 컨트랙트 호출](../crosscontract.md)을 했는데 패닉이 발생하면 자금이 **컨트랙트로** 다시 전송됩니다. [콜백 섹션](../crosscontract.md#failed-execution)에서 이 상황을 처리하는 방법을 참고하세요.
:::

### 계정 잔고

`account_balance`는 컨트랙트 잔고를 나타냅니다(`current_account`).

이는 `attached_deposit`을 포함하는데, 이는 해당 값이 메소드 실행 시 저장되었기 때문입니다.

컨트랙트에 잠긴 $NEAR가 있으면 `account_locked_balance`에 나타납니다.

---

### 사용된 스토리지

`storage_used`는 현재 컨트랙트에서 사용되고 있는 [스토리지](../storage.md)의 양을 나타냅니다.

:::tip
구조가 차지하는 스토리지의 양을 알고 싶다면, 저장 전후에 스토리지를 출력해보면 됩니다.
:::

---

## 시간

환경은 시간의 흐름을 알려주는 세 가지 다른 메서드를 공개하며, 이들은 각각 다른 방식으로 블록체인 내 시간을 나타냅니다.


### 타임스탬프

`timestamp` 속성은 호출이 실행된 대략적인 **UNIX 타임스탬프**를 나타냅니다. 이는 인간의 방식으로 시간의 흐름을 정량화하여 특정 날짜가 지났는지 여부를 확인할 수 있습니다.

### 현재 에포크

NEAR 블록체인은 [에포크](../../../1.concepts/basics/epoch.md) 단위로 블록을 묶습니다. `current_epoch` 속성은 지금까지 경과한 에포크 수를 측정합니다. 이는 [밸리데이터](../../../1.concepts/basics/validators.md)와 같이 에포크에서 시간을 측정하는 다른 컨트랙트와 협력하는 행위를 매우 쉽게 만들어 줍니다. 

### 블록 인덱스

`block_index`는 해당 트랜잭션이 블록체인에 추가될 블록의 인덱스를 나타냅니다.

---

## 가스

컨트랙트에는 각 호출에 사용할 **컴퓨팅 리소스가 제한**되어 있습니다. 이러한 자원은 [가스](/concepts/basics/transactions/gas) 단위로 측정됩니다.

가스는 실제 걸린 시간으로 생각할 수 있습니다. 1 PetaGas(1_000 TGas)는 약 1초의 계산 시간을 의미합니다.

각 코드 명령에는 일정량의 가스가 소모되며, 가스가 부족하면 `Exceeded the prepaid gas`라는 오류 메시지와 함께 실행이 중단됩니다.

환경은 두 가지 가스 관련 인수인 `prepaid_gas` 및 `used_gas`에 대한 액세스를 제공합니다.


### 선불 가스
`prepaid_gas`는 `predecessor`가 해당 호출에 첨부한 가스의 양을 의미합니다. 이는 300TGas (300 * 10<sup>12</sup> Gas)를 넘을 수 없습니다.

### 사용한 가스
`used_gas`는 지금까지 사용한 Gas의 양을 포함합니다. 이는 메서드를 실행하는 가스 비용을 추정하는 데에 유용합니다.

:::warning
[교차 컨트랙트 호출](/develop/contracts/crosscontract) 중 콜백에 완전히 실행하기에 충분한 가스가 있는지 항상 확인하세요.
:::

:::tip
메서드에 필요한 [가스를 이미 추정](/concepts/basics/transactions/gas#accurate-estimates-with-automated-tests)한 경우, `assert`를 사용하여 가스가 부족하지 않도록 할 수 있습니다.

<Tabs className="language-tabs" groupId="code-tabs">
  <TabItem value="🦀 Rust">

  ```rust
  const REQUIRED_GAS: Gas = Gas(20_000_000_000_000); // 20 TGas
  assert!(env::prepaid_gas() >= REQUIRED_GAS, "Please attach at least 20 TGas");
  ```
  </TabItem>
</Tabs>
:::

---

## 환경 함수

<Tabs className="language-tabs" groupId="code-tabs">
  <TabItem value="🌐 JavaScript">
    <TableJsFunc></TableJsFunc>
  </TabItem>
  <TabItem value="🦀 Rust">
    <TableRsFunc></TableRsFunc>
  </TabItem>
  <TabItem value="🚀 AssemblyScript" >
    <TableAsFunc></TableAsFunc>
  </TabItem>
</Tabs>

:::info 
JS SDK에서, `throw new Error("message")`는 Rust의 `env::panic_str("message")`와 같은 방식으로 동작합니다.
:::

---
