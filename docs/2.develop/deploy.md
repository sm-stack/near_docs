---
id: deploy
title: NEAR CLI - 기초
sidebar_label: 배포 및 사용
---

컨트랙트가 준비되면, 모든 사람이 사용할 수 있도록 NEAR 네트워크에 배포할 수 있습니다.

[NEAR CLI](../4.tools/cli.md)를 사용하여 컨트랙트를 배포하고, 컨트랙트 내 메서드를 호출하는 방법을 안내해 드립니다.


:::info
이 페이지에서는 NEAR CLI의 기본 사항만 다룹니다. 자세한 내용은 [NEAR CLI 설명서 페이지](../4.tools/cli.md)를 참조하세요.
:::

---

## 컨트랙트 배포

`NEAR CLI` 덕분에 컨트랙트 배포는 다음과 같이 간단하게 수행될 수 있습니다.

1. 컨트랙트를 wasm으로 컴파일합니다(템플릿 내 `yarn build`를 통해 자동으로 수행됨).
2. [NEAR CLI](../4.tools/cli.md#near-deploy)를 사용해 원하는 계정에 컨트랙트를 배포합니다.

#### 계정 생성 및 배포

```bash
# Automatically deploy the wasm in a new account
near dev-deploy <route_to_wasm>

# Get the account name
cat ./neardev/dev-account
```

#### 기존 계정에 배포

```bash
# login into your account
near login

# deploy the contract
near deploy <accountId> <route_to_wasm>
```

:::tip
컨트랙트 위에 다른 컨트랙트를 배포하여 컨트랙트를 덮어쓸 수 있습니다. 이 경우 계정의 로직이 변경되지만, 상태는 유지됩니다.
:::

:::info
기본적으로 `near-cli`는 `testnet` 네트워크를 사용합니다. `mainnet`에 배포하려면, `NEAR_ENV=mainnet`를 정의하세요.
:::

:::info 공개 메서드에 대한 명명 규칙
컨트랙트가 네트워크에 배포되면, 누구나 다른 컨트랙트(예: NEAR의 다른 계정)가 메서드를 호출하여 컨트랙트와 상호 작용할 수 있습니다. 또한 컨트랙트와 관련된 모든 트랜잭션도 네트워크의 데이터 스트림에 포함되므로, 특정 이벤트를 수신하는 모든 사람이 해당 활동을 볼 수 있습니다.

이를 고려하여, 대부분 Rust 컨트랙트로 구성된 나머지 NEAR 생태계와 호환되도록 모든 SDK에서 `snake_case`를 사용해 메서드의 이름을 정하는 것이 좋습니다 .
:::

---

## 컨트랙트 초기화
컨트랙트에 [초기화 메서드](./contracts/anatomy.md#initialization-functions)가 있는 경우, 이를 호출하여 상태를 초기화할 수 있습니다. 컨트랙트가 상태에 대한 `default` 값을 구현하는 경우에는 필요하지 않습니다 .

```bash
# Call the initialization method (`init` in our examples)
near call <contractId> <initMethod> [<args>] --accountId <accountId>
```

:::info
`--initFunction` 및 `--initArgs` 인자를 사용해서 [배포 중에](#컨트랙트-배포) 컨트랙트를 초기화할 수 있습니다.
:::

---

## 컨트랙트 호출
컨트랙트가 배포되고 나면, [NEAR CLI](../4.tools/cli.md)를 통해 바로 컨트랙트와 상호 작용할 수 있습니다. 

<hr class="subsection" />

### View 메서드
View 메서드는 **읽기 전용** 작업을 수행하는 메서드입니다. 이러한 메서드를 호출하는 것은 무료이며, 호출에 사용되는 계정을 지정할 필요가 없습니다.

```bash
near view <contractId> <methodName>
```

:::tip
View 메서드는 실행에 기본적으로 200 TGAS를 소모합니다. 
:::

<hr class="subsection" />

### 메서드 변경
변경 방법은 읽기 및 쓰기 작업을 모두 수행하는 방법입니다. 이러한 방법의 경우, 호출에 사용되는 계정을 지정해야 합니다. 해당 계정은 호출을 위해 가스를 소비하기 때문입니다.

```bash
near call <contractId> <methodName> <jsonArgs> --accountId <yourAccount> [--deposit <amount>] [--gas <GAS>]
```
