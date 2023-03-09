---
id: crosscontract
title: 교차 컨트랙트 호출
#sidebar_label: 📞 Cross-Contract Calls
---
import {CodeBlock} from '@theme/CodeBlock'
import {CodeTabs, Language, Github} from "@site/components/codetabs"

교차 컨트랙트 호출을 통해, 컨트랙트는 이미 배포된 다른 컨트랙트와 상호 작용할 수 있습니다. 이는 다음과 같은 상황에서 유용하게 사용됩니다.

1. 다른 컨트랙트에서 정보를 조회할 때
2. 다른 컨트랙트 내 메서드를 실행할 때


#### 교차 컨트랙트 호출은 **독립적**입니다.
호출하는 메서드와 결과를 받는 메서드는 서로 다릅니다.

#### 교차 컨트랙트 호출은 **비동기적**입니다.
호출과 콜백 사이에 모든 사람이 여전히 컨트랙트와 상호 작용할 수 있는 지연 시간이 존재합니다.

---

## 스니펫: 정보 조회

컨트랙트를 만들 때, 다른 컨트랙트의 정보를 조회하는 기능을 넣고 싶을 수 있습니다. 아래에서 [Hello NEAR](../quickstart.md) 예제에서 인사말 메시지를 조회하는 기본 예제를 확인해 보세요.

<CodeTabs>
  <Language value="🌐 JavaScript" language="ts">
    <Github fname="contract.ts"
            url="https://github.com/near-examples/cross-contract-hello-js/blob/master/contract/src/contract.ts"
            start="17" end="39" />
  </Language>
  <Language value="🦀 Rust" language="rust">
    <Github fname="lib.rs"
            url="https://github.com/near-examples/cross-contract-hello-rust/blob/main/contract/src/lib.rs"
            start="24" end="49" />
    <Github fname="external.rs"
            url="https://github.com/near-examples/cross-contract-hello-rust/blob/main/contract/src/external.rs" />
  </Language>
  <Language value="🚀 AssemblyScript" language="ts">
    <Github fname="index.ts"
            url="https://github.com/near-examples/docs-examples/blob/main/cross-contract-hello-as/contract/assembly/index.ts"
            start="10" end="45" />
    <Github fname="external.ts"
            url="https://github.com/near-examples/docs-examples/blob/main/cross-contract-hello-as/contract/assembly/external.ts" />
  </Language>
</CodeTabs>

---

## 스니펫: 정보 전달
다른 컨트랙트를 호출해서 정보를 전달하는 것도 일반적인 시나리오입니다. 아래에서 인사말 메시지를 변경하기 위해 [Hello NEAR](../quickstart.md) 예제와 상호 작용하는 방법을 볼 수 있습니다.

<CodeTabs>
<Language value="🌐 JavaScript" language="ts">
    <Github fname="contract.ts"
            url="https://github.com/near-examples/cross-contract-hello-js/blob/master/contract/src/contract.ts"
            start="41" end="64" />
  </Language>
  <Language value="🦀 Rust" language="rust">
    <Github fname="lib.rs"
            url="https://github.com/near-examples/cross-contract-hello-rust/blob/main/contract/src/lib.rs"
            start="51" end="74" />
    <Github fname="external.rs"
            url="https://github.com/near-examples/cross-contract-hello-rust/blob/main/contract/src/external.rs" />
  </Language>
  <Language value="🚀 AssemblyScript" language="ts">
    <Github fname="index.ts"
            url="https://github.com/near-examples/docs-examples/blob/main/cross-contract-hello-as/contract/assembly/index.ts"
            start="47" end="79" />
    <Github fname="external.ts"
            url="https://github.com/near-examples/docs-examples/blob/main/cross-contract-hello-as/contract/assembly/external.ts" />
  </Language>
</CodeTabs>

---

## Promise
교차 컨트랙트 호출은 네트워크에서 두 가지 Promise를 생성합니다.

1. 외부 컨트랙트에서 코드를 실행하겠다는 Promise (`Promise.create`).
2. 실행 결과(`Promise.then`)와 함께 컨트랙트에서 다른 메서드를 다시 호출하겠다는 Promise

두 Promise 모두 동일한 인자를 사용합니다.

<CodeTabs>
  <Language value="🌐 JavaScript" language="ts">
    <CodeBlock>
    NearPromise.new("external_address").functionCall("method", (JSON.stringify(arguments), DEPOSIT, GAS);
    </CodeBlock>
  </Language>
  <Language value="🦀 Rust" language="rust">
    <CodeBlock>
    external_trait::ext("external_address")
    .with_attached_deposit(DEPOSIT)
    .with_static_gas(GAS)
    .method(arguments);
    </CodeBlock>
  </Language>
  <Language value="🚀 AssemblyScript" language="ts">
    <CodeBlock> 
    ContractPromise.create(
      "external_address", "method", "encoded_arguments", GAS, DEPOSIT
    )
    </CodeBlock>
  </Language>
</CodeTabs>

   - 상호 작용하려는 컨트랙트의 주소
   - 실행하려는 메서드
   - 메서드에 전달할 (**인코딩된**) 인수
   - 사용할 GAS의 양 (**첨부된 가스**에서 차감)
   - 첨부할 NEAR 금액(**컨트랙트 잔고**에서 차감)

:::tip
콜백은 **모든** 컨트랙트에 대해 수행될 수 있습니다. 이는 원하는 경우 결과가 잠재적으로 다른 컨트랙트에 의해 처리될 수 있다는 것을 의미합니다.
:::

:::caution
Promise를 생성한다는 사실은 교차 컨트랙트 호출과 콜백이 **즉시 실행되지 않는다는** 것을 의미합니다. 사실은:
- 교차 컨트랙트 호출은 메서드 실행이 **올바르게** 완료되고 1~2 블록이 지난 뒤 실행됩니다.
- 그런 다음 콜백은 **외부** 메서드 실행이 (**올바르게 혹은 올바르지 않게**) 완료되고 1~2 블록이 지난 뒤 실행됩니다.
:::

---

## 콜백 메서드
메서드가 올바르게 완료되면 결국 콜백 메서드가 실행됩니다. 이는 외부 컨트랙트가 성공적으로 완료되었는지 여부에 **관계없이** 발생합니다. 원래 방법이 올바르게 완료되면 콜백이 **항상** 실행됩니다.

콜백 메서드에서 결과에 액세스할 수 있는데, 여기에는 두 가지 중요한 인자가 포함되어 있습니다.

- `status`: 외부 메서드가 성공적으로 완료되었는지 여부
- `buffer`: 외부 메서드에 의해 반환된 값(있는 경우)

:::tip
컨트랙트의 콜백 메서드는 공개되어야 하므로, 두 번째 Promise가 실행될 때 호출될 수 있습니다. 그러나 이는 **컨트랙트**에 의해서만 호출할 수 있어야 합니다. `predecessor`가 항상 `current_account_id`임을 assert하는 방식으로, 콜백 메서드를 비공개로 만드세요. Rust에서는 `#[private]` 데코레이터를 사용하여 이 작업을 수행할 수 있습니다.
:::

### 실행 상태 확인
<CodeTabs>
  <Language value="🌐 JavaScript" language="ts">
    <Github fname="contract.ts"
            url="https://github.com/near-examples/cross-contract-hello-js/blob/master/contract/src/contract.ts"
            start="31" end="38" />
  </Language>
  <Language value="🦀 Rust" language="rust">
    <Github fname="lib.rs"
            url="https://github.com/near-examples/cross-contract-hello-rust/blob/main/contract/src/lib.rs"
            start="67" end="73" />
  </Language>
  <Language value="🚀 AssemblyScript" language="ts">
    <Github fname="index.ts"
            url="https://github.com/near-examples/docs-examples/blob/main/cross-contract-hello-as/contract/assembly/index.ts"
            start="70" end="78" />
    <Github fname="external.ts"
            url="https://github.com/near-examples/docs-examples/blob/main/cross-contract-hello-as/contract/assembly/external.ts"
            start="9" end="19"/>
  </Language>
</CodeTabs>

### 실행 성공
호출이 성공적으로 완료되면 결과 객체 내 `status`에는 1이, 그리고 `buffer`에는 인코딩된 결과가 저장될 것입니다. 결과를 복구하려면, 다음과 같이 `buffer` 내 결과를 디코딩해야 합니다. 

<CodeTabs>
  <Language value="🌐 JavaScript" language="ts">
    <Github fname="contract.ts"
            url="https://github.com/near-examples/cross-contract-hello-js/blob/master/contract/src/contract.ts"
            start="31" end="31" />
  </Language>
  <Language value="🦀 Rust" language="rust">
    <Github fname="lib.ts"
            url="https://github.com/near-examples/cross-contract-hello-rust/blob/main/contract/src/lib.rs"
            start="47" end="47" />
  </Language>
  <Language value="🚀 AssemblyScript" language="ts">
    <Github fname="index.ts"
            url="https://github.com/near-examples/docs-examples/blob/main/cross-contract-hello-as/contract/assembly/index.ts"
            start="37" end="37" />
  </Language>
</CodeTabs>

### 실행 실패
외부 메서드가 실패하면(예: 패닉) 콜백은 **어쨌든 실행**됩니다. 여기에서 원래 호출 중에 컨트랙트에서 변경된 사항을 **수동으로 롤백**해야 합니다. 특히:


1. 컨트랙트가 호출에 NEAR를 첨부하였다면 자금이 **컨트랙트 계정**으로 다시 전송됩니다.
2. 만약 원래 메서드가 상태(예: 변경되거나 저장된 데이터)를 변경하였다면, 이는 **자동으로 되돌려지지 않습니다**.

:::warning
원래 메서드가 올바르게 완료되면 **외부 메서드가 패닉 상태가 되더라도** 콜백이 실행됩니다. 상태는 자동으로 롤백되지 **않으며**, $NEAR는 자동으로 서명자에게 반환되지 **않습니다**. 외부 메서드가 실패한 경우 항상 콜백을 확인하고, 필요한 경우 작업을 수동으로 롤백해야 합니다.


:::

---

## 보안 문제

교차 컨트랙트 호출을 작성할 때, 명심해야 할 중요한 것이 있습니다. 모든 호출은 **독립적**이고 **비동기적**입니다. 다시 말해,

- 호출하는 메서드와 콜백 메서드는 **독립적**입니다.
- **호출과 콜백 사이에 지연 시간이 있어**, 사람들이 여전히 컨트랙트와 상호 작용할 수 있습니다.


이는 콜백을 처리하는 방법에 중요한 영향을 미칩니다. 특히, 다음과 같은 사항을 명심해야 합니다.

1. 호출과 콜백 사이에 컨트랙트를 악용 가능한 상태로 두지 않도록 하세요.
2. 외부 호출이 실패한 경우, 콜백에서 발생한 모든 상태 변경 사항을 수동으로 롤백해야 합니다.

이러한 오류들에 대해 다루는 [보안 섹션](./security/callbacks.md)에 대해 확인배 보세요.


:::warning
이러한 기본 보안 가이드라인을 따르지 않으면, 컨트랙트가 악용될 수 있습니다. [보안 섹션](./security/callbacks.md)을 확인하고, 문제가 의심되는 경우 [Discord에 참여하세요](https://near.chat).
:::