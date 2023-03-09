---
id: upgrade
title: 컨트랙트 업데이트
---

import {CodeBlock} from '@theme/CodeBlock'
import {CodeTabs, Language, Github} from "@site/components/codetabs"
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

NEAR 계정은 로직(컨트랙트의 코드)을 상태(스토리지)와 분리하여, 코드를 변경할 수 있습니다.

컨트랙트는 두 가지 방법으로 업데이트할 수 있습니다.

1. [NEAR CLI](../4.tools/cli.md) 또는 [near-api-js](../4.tools/near-api-js/quick-reference.md)와 같은 **도구를 통해** (계정의 [전체 액세스 키](../1.concepts/basics/accounts/access-keys.md)를 보유한 경우).
2. [새 코드를 가져와 배포](#프로그래밍을-통한-업데이트)하는 메서드를 구현하는 **프로그래밍을 통해**. 

---

## 도구를 통한 업데이트
[NEAR CLI](../4.tools/cli.md) 등 선호하는 도구를 사용하여 다른 컨트랙트를 재배포하기만 하면 됩니다.

```bash
# If you already used dev-deploy the same account will be used
near dev-deploy --wasmFile <new-contract>

# If you logged in
near deploy <account-id> --wasmFile <new-contract>
```

---

## 프로그래밍을 통한 업데이트
스마트 컨트랙트를 다음과 같은 방법을 구현하여 자체적으로 업데이트할 수도 있습니다.
1. 새 wasm 컨트랙트를 입력으로 사용합니다.
2. Promise를 생성하여 자체적으로 배포합니다.


<CodeTabs>
  <Language value="🦀 Rust" language="rust">
    <Github fname="update.rs"
        url="https://github.com/near-examples/update-migrate-rust/blob/main/contracts/self-updates/base/src/update.rs"
        start="10" end="28" />
  </Language>
</CodeTabs>

#### 이러한 메서드를 호출하는 방법은 무엇인가요?
<Tabs className="language-tabs" groupId="code-tabs">
  <TabItem value="Terminal">

```bash
# Load the contract's raw bytes
CONTRACT_BYTES=`cat ./path/to/wasm.wasm | base64`

# Call the update_contract method
near call <contract-account> update_contract "$CONTRACT_BYTES" --base64 --accountId <manager-account> --gas 300000000000000
```

  </TabItem>
  <TabItem value="🌐 JavaScript">

```js
// Load the contract's raw bytes
const code = fs.readFileSync("./path/to/wasm.wasm");

// Call the update_contract method
await wallet.callMethod({contractId: guestBook, method: "update_contract", args: code, gas: "300000000000000"});
```

  </TabItem>
</Tabs>

:::tip DAO 팩토리
이것이 DAO 팩토리가 [컨트랙트를 업데이트하는 방법](https://github.com/near-daos/sputnik-dao-contract/blob/main/sputnikdao-factory2/src/factory_manager.rs#L60)입니다.
:::

---

## 상태 마이그레이션
계정의 로직(스마트 컨트랙트)는 계정의 상태(스토리지)와 분리되어 있으므로, 컨트랙트를 재배포해도 **계정의 상태는 유지**됩니다.

이 때문에 **방법을 추가**하거나 **기존 방법을 수정**해도 **문제가 발생하지 않습니다**.

그러나 상태에 저장된 **구조를 수정하거나 제거**하는 컨트랙트를 배포하면 `Cannot deserialize the contract state`라는 오류가 발생합니다. 이 경우 다음과 같은 것들 중 하나를 선택할 수 있습니다.
1. 다른 계정 사용
2. 이전 컨트랙트 코드로 롤백
3. 컨트랙트 상태를 마이그레이션하는 메서드 추가

<hr class="subsection" />

### 마이그레이션 방법
상태를 마이그레이션하는 것 외에 다른 옵션이 없는 경우 다음과 같은 메서드를 구현해야 합니다.
1. 컨트랙트의 현재 상태를 읽습니다.
2. 새로운 상태로 변환하기 위해 다른 함수를 적용합니다.
3. 새로운 상태를 반환합니다.

:::tip DAO 업데이트
이것이 DAO가 [스스로를 업데이트](https://github.com/near-daos/sputnik-dao-contract/blob/main/sputnikdao2/src/upgrade.rs#L59)하는 방법입니다.
:::


<hr class="subsection" />

### 예제: 방명록 마이그레이션

메시지를 저장하는 방명록이 있고, 사용자가 이러한 메시지에 대해 "프리미엄"으로 지불할 수 있다고 상상해 보세요. 다음과 같은 상태를 사용하여 메시지 및 결제를 추적할 수 있습니다.


<CodeTabs>
  <Language value="🦀 Rust" language="rust">
    <Github fname="lib.rs"
        url="https://github.com/near-examples/update-migrate-rust/blob/main/contracts/basic-updates/base/src/lib.rs"
        start="9" end="23" />        
  </Language>
</CodeTabs>

#### 컨트랙트 업데이트
만약 어느 시점에서 `PostedMessage` 내 `payments`를 추적할 수 있다는 것을 깨달아서, 컨트랙트를 다음과 같이 변경했다고 해봅시다.

<CodeTabs>
  <Language value="🦀 Rust" language="rust">
    <Github fname="lib.rs"
        url="https://github.com/near-examples/update-migrate-rust/blob/main/contracts/basic-updates/update/src/lib.rs"
        start="11" end="25" />        
  </Language>
</CodeTabs>

#### 호환되지 않는 상태
초기화된 계정에 업데이트를 배포하면, 다음과 같은 이유로 컨트랙트는 계정 ​​상태를 역직렬화하지 못합니다.

1. (이전 컨트랙트로부터) 상태에 저장된 추가 `payments` 벡터가 존재합니다.
2. 저장된 `PostedMessages`에는 (이전 컨트랙트와 같이) `payment` 필드가 존재하지 않습니다.


<br />

#### 상태 마이그레이션
이 문제를 해결하려면, 이전 상태를 거쳐 `payments` 벡터를 제거하고, `PostedMessages`에 정보를 추가하는 메서드를 구현해야 합니다.

<CodeTabs>
  <Language value="🦀 Rust" language="rust">
    <Github fname="lib.rs"
        url="https://github.com/near-examples/update-migrate-rust/blob/main/contracts/basic-updates/update/src/migrate.rs"
        start="3" end="45" />
  </Language>
</CodeTabs>

실제로 `migrate`는 기존 상태(`[#init(ignore_state)]`)를 **무시하는** [초기화 메서드](./contracts/anatomy.md#initialization-method)임에 유의하세요. 따라서, `migrate`를 통해 상태를 실행하고 재작성할 수 있습니다.

:::tip
[공식 마이그레이션 예제](https://github.com/near-examples/update-migrate-rust/tree/main/contracts/basic-updates/base)에서 단계별로 마이그레이션을 진행할 수 있습니다.
:::