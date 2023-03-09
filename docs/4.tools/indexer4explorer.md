---
id: indexer-for-explorer
title: 익스플로러용 NEAR 인덱서 
sidebar_label: 블록체인 데이터 조회
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

탈중앙화 앱을 개발하는 동안, 다음과 같이 컨트랙트에 대한 사용 정보를 쿼리할 수 있습니다.

1. 어떤 사용자가 내 컨트랙트에서 특정 메서드를 호출했나요?
2. 그들은 얼마나 많은 돈과 가스를 예치했습니까?
3. 어떤 트랜잭션이 실패했나요?

이러한 질문을 단순화하기 위해 우리는 [익스플로러용 NEAR 인덱서](https://github.com/near/near-indexer-for-explorer)를 개발했습니다. 익스플로러용 NEAR 인덱서는 **모든** 블록체인 작업이 저장되는 **공개된** **읽기 전용** PostgreSQL 데이터베이스 입니다.

`testnet`과 `mainnet` 모두 제네시스 블록부터 시작하여 네트워크의 모든 데이터로 데이터베이스를 채우고, [익스플로러](https://explorer.near.org/)가 필요로 하는 활성 인스턴스를 가지고 있습니다.

:::info GitHub 레퍼지토리

익스플로러용 NEAR 인덱서 는 [NEAR 인덱서 마이크로프레임워크](https://near-indexers.io/docs/projects/near-indexer-framework) 위에 구축된 인덱서입니다. 이는 네트워크를 감시하고, 블록체인의 모든 데이터를 PostgreSQL 데이터베이스에 저장합니다. [이 GitHub 레퍼지토리](https://github.com/near/near-indexer-for-explorer)에서 소스 코드를 찾을 수 있습니다 .

:::


:::warning
데이터베이스가 다운되거나 최신 블록체인 정보를 반영하는 데 시간이 걸릴 수 있습니다. 이를 제품에 사용하지 마세요. 대신, 실시간 및 과거 정보의 신뢰할 수 있는 출처를 위해 자체 [인덱서](https://near-indexers.io/)를 실행하세요.
:::

---

## 데이터베이스에 연결

PostgreSQL과 호환되는 모든 데이터베이스 관리자를 사용할 수 있습니다. 아무것도 모르는 경우 [DBeaver Community](https://dbeaver.io/)를 사용해 보는 것을 추천합니다.


| 네트워크 | 호스트                                 | 포트 | 데이터베이스         | 사용자 이름       | 비밀번호     |
| ------- | ------------------------------------ | ---- | ---------------- | --------------- | ------------ |
| mainnet | mainnet.db.explorer.indexer.near.dev | 5432 | mainnet_explorer | public_readonly | nearprotocol |
| testnet | testnet.db.explorer.indexer.near.dev | 5432 | testnet_explorer | public_readonly | nearprotocol |


<Tabs>
  <TabItem value="testnet" label="testnet" default>

    postgres://public_readonly:nearprotocol@testnet.db.explorer.indexer.near.dev/testnet_explorer


  </TabItem>
  <TabItem value="mainnet" label="mainnet">

    postgres://public_readonly:nearprotocol@mainnet.db.explorer.indexer.near.dev/mainnet_explorer

  </TabItem>
</Tabs>


---

## 데이터베이스 구조
아래 구조는 시간이 지남에 따라 진화하거나 변경될 수 있음을 염두에 두시기 바랍니다.

[![structure_img](https://raw.githubusercontent.com/near/near-indexer-for-explorer/master/docs/near-indexer-for-explorer-db.png)](https://raw.githubusercontent.com/near/near-indexer-for-explorer/master/docs/near-indexer-for-explorer-db.png)

---

## 조회 예제
### 메서드를 호출하는 트랜잭션
`v1.faucet.nonofficial.testnet` 테스트넷 계정에서 `contribute`를 호출한 모든 트랜잭션을 조회합니다.

```sql
select r.predecessor_account_id, t.transaction_hash 
from receipts r, action_receipt_actions ara, transactions t
where r.receiver_account_id ='v1.faucet.nonofficial.testnet'
  and ara.receipt_id = r.receipt_id
  and ara.action_kind = 'FUNCTION_CALL'
  and ara.args @> '{"method_name": "contribute"}'
  and t.transaction_hash = r.originated_from_transaction_hash
```

<hr class="subsection" />

### 사용자, 상태 및 첨부 금액
`v1.faucet.nonofficial.testnet` 테스트넷 계정에서 `contribute`를 호출한 모든 사용자, 호출에 첨부된 금액, 그리고 트랜잭션 상태를 조회합니다.

```sql
select t.transaction_hash, eo.status, r.predecessor_account_id , ara.args -> 'deposit' as deposit
from receipts r, action_receipt_actions ara, transactions t, execution_outcomes eo
where r.receiver_account_id ='v1.faucet.nonofficial.testnet'
  and ara.receipt_id = r.receipt_id and ara.action_kind = 'FUNCTION_CALL'
  and ara.args @> '{"method_name": "contribute"}'
  and t.transaction_hash = r.originated_from_transaction_hash
  and r.receipt_id = eo.receipt_id
```

<hr class="subsection" />

### 보낸 금액
`v1.faucet.nonofficial.testnet`에서 나가는 모든 전송 데이터를 조회합니다.

```sql
select r.receiver_account_id, ara.args -> 'deposit' as deposit	
from receipts r, action_receipt_actions ara
where r.predecessor_account_id  ='v1.faucet.nonofficial.testnet'
  and ara.receipt_id = r.receipt_id and ara.action_kind = 'TRANSFER'
```