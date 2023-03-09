---
sidebar_position: 4
---

# 컨트랙트 배포

다음과 같은 몇 가지 이유로 스마트 컨트랙트가 후속 스마트 컨트랙트 코드를 배포하기를 원할 수 있습니다.

- 컨트랙트는 팩토리 역할을 하며, 상위 컨트랙트가 많은 하위 컨트랙트를 생성하는 패턴입니다([Mintbase](https://www.mintbase.io/)는 원하는 사람을 위한 새로운 NFT 스토어를 생성하기 위해 이 작업을 수행합니다. [Rainbow Bridge](https://near.org/bridge/)는 [브릿징된 각 토큰](https://github.com/aurora-is-near/rainbow-token-connector/blob/ce7640da144f000e0a93b6d9373bbc2514e37f3b/bridge-token-factory/src/lib.rs#L311-L341)에 대해 별도의 대체 가능 토큰 컨트랙트를 배포하기 위해 이를 수행합니다.)
- 컨트랙트가 [코드를 자체적으로 업데이트합니다](../../../2.develop/upgrade.md#programmatic-update) (`deploy` 자체 호출).
- 사용자(`your-app.user1.near`, `your-app.user2.near` 등) 에 대한 앱별 하위 계정을 생성하고, 각각에 동일한 컨트랙트를 배포하는 "사용자 한 명당 하나의 컨트랙트" 시스템을 구현할 수 있습니다. 이것은 현재 NEAR의 [스토리지 수수료](https://docs.near.org/concepts/storage/storage-staking)로 인해 엄청나게 비싸지만, 향후 최적화될 수 있습니다. 그렇다면 이러한 종류의 "샤딩된 앱 디자인"은 컨트랙트 표준 및 앱 메커니즘에 대한 보다 확장 가능하고 사용자 중심적인 접근 방식이 될 수 있습니다. 이 패러다임에 대한 초기 실험은 [Meta NEAR](https://github.com/metanear)라고 불립니다.

목표가 Mintbase 또는 Rainbow Bridge와 같은 기본 컨트랙트의 하위 계정에 배포하는 것이라면, 계정도 생성해야 합니다. 따라서 마지막 몇 페이지의 개념을 결합하면 다음이 필요합니다.

```js
import { includeBytes, NearPromise, near } from "near-sdk-js";

const CODE = includeBytes("./res/contract.wasm");

NearPromise.new("subaccount.example.near")
  .createAccount()
  .addFullAccessKey(near.signerAccountPk())
  .transfer(BigInt(3_000_000_000_000_000_000_000_000)) // 3e24yN, 3N
  .deployContract(CODE);
```

전체 컨트랙트는 다음과 같이 `code`를 `includeBytes`로 하드 코딩하지 않고, 인자로 전달하는 단순한 방법을 보여줍니다.

```js
import { NearPromise, near, validateAccountId } from "near-sdk-js";

const INITIAL_BALANCE = BigInt(3_000_000_000_000_000_000_000_000); // 3e24yN, 3N

@NearBindgen({})
export class Contract {
  @call({ privateFunction: true })
  createAccount({ prefix, code }) {
    const subAccountId = `${prefix}.${near.currentAccountId()}`;
    validateAccountId(subAccountId);
    NearPromise.new(subAccountId)
        .createAccount()
        .addFullAccessKey(near.signerAccountPk())
        .transfer(INITIAL_BALANCE)
        .deployContract(code);
  }
}
```

이것이 단순한 접근 방식인 이유는 무엇일까요? 이는 4MB 트랜잭션 크기 제한으로 인해 문제가 발생할 수 있기 때문입니다. 위의 함수는 전체 컨트랙트를 역직렬화하고 힙 영역에 할당합니다. 따라서 많은 상황에서는 `includeBytes` 접근 방식이 선호됩니다. 컴파일된 Wasm을 인자로 첨부해야 하는 경우, [Sputnik DAO v2](https://github.com/near-daos/sputnik-dao-contract/blob/a8fc9a8c1cbde37610e56e1efda8e5971e79b845/sputnikdao2/src/types.rs#L74-L142)에서 사용하는 접근 방식을 복사할 수 있습니다.
