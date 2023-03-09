---
sidebar_label: NFT 인덱서
---

# NFT 인덱서 구축

<ProgrammingLanguage lang="js" />

:::note 튜토리얼 소스 코드

[`near-examples/near-lake-nft-indexer`](https://github.com/near-examples/near-lake-nft-indexer): 이 튜토리얼의 소스 코드

:::

## 목표

이 튜토리얼은 [NEAR Lake 프레임워크 JS](https://near-indexers.io/docs/projects/near-lake-framework) 위에 구축된 작동 중인 NFT 인덱서를 구축합니다. 인덱서는 `nft_mint` [이벤트](https://nomicon.io/Standards/EventsFormat)를 감시하고 다음과 같은 관련 데이터를 출력합니다.
- 민팅이 발생한 [Receipt](https://near-indexers.io/docs/data-flow-and-structures/structures/receipt)의 `receiptId` 
- 마켓플레이스
- NFT 소유자 계정 이름
- 마켓플레이스 내 NFT로의 링크

최종 소스 코드는 GitHub 내 [`near-examples/near-lake-nft-indexer`](https://github.com/near-examples/near-lake-nft-indexer)에서 사용할 수 있습니다.

## 동기

NEAR Protocol은 멋진 기능인 [Events](https://nomicon.io/Standards/EventsFormat)를 도입했습니다. 이벤트를 통해 컨트랙트 개발자는 표준화된 로그를 [`ExecutionOutcomes`](https://near-indexers.io/docs/data-flow-and-structures/structures/execution_outcome)에 추가할 수 있으므로, 자신이나 다른 개발자가 API 또는 인덱서를 통해 보다 편리한 방식으로 해당 로그를 읽을 수 있습니다.

이벤트에는 NEP와 일치하는 `standard` 필드가 있습니다. 이 튜토리얼에서는 [NEP-171 대체 불가능 토큰 표준](https://github.com/near/NEPs/discussions/171)에 대해 설명합니다.

이 튜토리얼에서 우리의 목표는, 이벤트 컨트랙트가 방출하는 것을 "듣는" 방법과 이를 통해 얻을 수 있는 이점을 보여주는 것입니다.

예를 들어,우리는 [NEP-171 이벤트](https://nomicon.io/Standards/Tokens/NonFungibleToken/Event) 표준에 따라 발행된 모든 NFT를 감시하는 인덱서를 구축할 것입니다. 우리는 하나의 이벤트도 놓치고 싶지 않은 상황입니다. 우리의 인덱서는 발행된 모든 NFT를 인식하고 발행된 Receipt과 같은 기본 데이터 세트를 제공하고 마켓플레이스에 대한 링크를 보여줍니다(이 예에서는 [Paras](https://paras.id)  및 [Mintbase](https://mintbase.io)를 다룰 것입니다).


이 튜토리얼에서는 JS 버전의 [NEAR Lake 프레임워크](https://near-indexers.io/docs/projects/near-lake-framework)를 사용합니다. Rust에서도 개념은 동일하지만, 더 많은 사람들에게 자신만의 인덱서를 구축하는 것이 그렇게 복잡하지 않다는 것을 보여주고 싶습니다.

## 준비

:::danger 자격 증명

[자격 증명](credentials.md) 페이지에 설명된 대로 자격 증명을 설정했는지 확인하세요. 그렇지 않으면 코드를 작동시킬 수 없습니다.

:::

다음이 필요할 것입니다.

- `node`가 [설치 및 구성됨](https://nodejs.org/en/download/)

프로젝트 폴더를 만들어 봅시다.

```bash
mkdir lake-nft-indexer && cd lake-nft-indexer
```

`package.json`을 추가해 봅시다.

```json title=package.json
{
  "name": "lake-nft-indexer",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "tsc && node index.js"
  },
  "dependencies": {
    "near-lake-framework": "^1.0.2"
  },
  "devDependencies": {
    "typescript": "^4.6.4"
  }
}
```

개발 의존성으로 `typescript`를 추가한 것을 눈치채셨을 것입니다 . TypeScript를 구성해 봅시다. 이를 위해 `tsconfig.json` 파일을 생성해야 합니다

```json title=tsconfig.json
{
  "compilerOptions": {
    "lib": [
      "ES2019",
      "dom"
    ]
  }
}
```

:::warning ES2019 에디션

사용된 `ES2019` 에디션에 유의하세요. 이는 코드에서 `.flatMap()` 및 `.flat()`을 사용할 것이기 때문에 필요합니다. 이러한 방법은 `ES2019`에 소개되어 있습니다. 더 최신 버전을 사용할 수도 있습니다.\

:::

프로젝트 루트에 빈 `index.ts`을 생성하고 준비를 마칩니다.

```bash
npm install
```

이제 실제 작업을 시작할 수 있습니다.


## NEAR Lake 프레임워크 설정

`index.ts`에서 `near-lake-framework`로부터 `startStream` 함수와 `types`를 가져옵니다.


```ts title=index.ts
import { startStream, types } from 'near-lake-framework';
```

아래와 같이 `LakeConfig`의 인스턴스화를 추가하세요.


```ts title=index.js
const lakeConfig: types.LakeConfig = {
  s3BucketName: "near-lake-data-mainnet",
  s3RegionName: "eu-central-1",
  startBlockHeight: 66264389,
};
```

config에 대해 몇 마디 하자면, 메인넷에 대해서는 `s3BucketName`, 기본으로는 `s3RegionName`, 그리고 가장 최신 블록 높이로 `startBlockHeight`을 설정하였습니다. [NEAR 익스플로러](https://explorer.near.org)로 이동하여, 설정에 대한 **최신** 블록 높이를 얻을 수 있습니다. 우리와 똑같이 사용해도 상관 없습니다.

이제 인덱서가 받는 [`StreamerMessage`](https://near-indexers.io/docs/data-flow-and-structures/structures/toc)을 처리하기 위해 호출할 콜백 함수를 만들어야 합니다 .

```ts title=index.ts
async function handleStreamerMessage(
  streamerMessage: types.StreamerMessage
): Promise<void> {

}
```

:::info 콜백 함수 요구 사항
`near-lake-framework` JS 라이브러리에서, 핸들러는 콜백 함수로 제공되어야 합니다. 이 함수는 다음 특성을 가져야 합니다.
- 비동기적이어야 함
- [`StreamerMessage`](https://near-indexers.io/docs/data-flow-and-structures/structures/toc) 자료형의 인자를 받아야 함
- 아무것도 반환하지 않아야 함(`void`)

:::

그리고 `index.ts` 끝 부분에서 인덱서의 실제 시작은 다음과 같습니다.

```ts title=index.ts
(async () => {
  await startStream(lakeConfig, handleStreamerMessage);
})();
```

이 시점에서 최종 `index.ts`는 다음과 같습니다.

```ts title=index.ts
import { startStream, types } from 'near-lake-framework';

const lakeConfig: types.LakeConfig = {
  s3BucketName: "near-lake-data-mainnet",
  s3RegionName: "eu-central-1",
  startBlockHeight: 66264389,
};

async function handleStreamerMessage(
  streamerMessage: types.StreamerMessage
): Promise<void> {

}

(async () => {
  await startStream(lakeConfig, handleStreamerMessage);
})();
```


## 이벤트와 이를 감지하는 방법

우선 우리가 이벤트를 감지할 수 있는 곳을 찾아봅시다. [NEAR 블록체인의 데이터 흐름](https://near-indexers.io/docs/data-flow-and-structures/flow/near-data-flow)에 대해 잘 알고 계시기를 바랍니다. 알고 있던 것들을 수정해 보겠습니다.
- NFT를 생성하는 것은 NFT 컨트랙트 내 작업입니다(어느 것이든 상관 없음).
- 작업은 [Receipt](https://near-indexers.io/docs/data-flow-and-structures/structures/receipt) 내 위치합니다.
- Receipt 실행 결과는 [ExecutionOutcome](https://near-indexers.io/docs/data-flow-and-structures/structures/execution_outcome)입니다.
- `ExecutionOutcome`는 따라서, 차례로 컨트랙트가 "출력"하는 로그를 잡습니다.
- [Events](https://nomicon.io/Standards/EventsFormat)는 로그 내에 존재합니다.

이로 인해 우리는 ExecutionOutcomes만 볼 수 있고, `StreamerMessage`가 가져오는 다른 모든 것은 무시될 수 있다는 사실을 알 수 있습니다.

또한 이벤트를 포착하기 위한 인터페이스를 정의해야 합니다. [Events Nomicon 페이지](https://nomicon.io/Standards/EventsFormat#events)에서 인터페이스 정의를 복사하여 `handleStreamerMessage` 함수 앞에 붙여넣습니다.

```ts title=index.ts
interface EventLogData {
  standard: string,
  version: string,
  event: string,
  data?: unknown,
};
```

## 필요한 데이터만 포착

[준비](#준비) 섹션에서 준비한 콜백 함수 `handleStreamerMessage` 내에서 필요한 데이터 필터링을 시작하겠습니다.

```ts title=index.ts
async function handleStreamerMessage(
  streamerMessage: types.StreamerMessage
): Promise<void> {
  const relevantOutcomes = streamerMessage
    .shards
    .flatMap(shard => shard.receiptExecutionOutcomes)

}
```

우리는 모든 [샤드](https://near-indexers.io/docs/data-flow-and-structures/structures/shard)에 대해 반복하고, 모든 ExecutionOutcomes 목록을 단일 목록으로 수집했습니다(우리의 경우 어떤 샤드에서 민팅이 발생했는지는 신경 쓰지 않았습니다).

이제 이벤트 형식의 로그를 포함하는 ExecutionOutcomes만 처리하려고 합니다. 이러한 로그는 [Events 문서](https://nomicon.io/Standards/EventsFormat#events)에 따라 `EVENT_JSON:`으로 시작됩니다.

또한 ExecutionOutcome 내 모든 데이터가 필요하지 않으므로, 이를 처리해 보겠습니다.

```ts title=index.ts
async function handleStreamerMessage(
  streamerMessage: types.StreamerMessage
): Promise<void> {
  const relevantOutcomes = streamerMessage
    .shards
    .flatMap(shard => shard.receiptExecutionOutcomes)
    .map(outcome => ({
      receipt: {
        id: outcome.receipt.receiptId,
        receiverId: outcome.receipt.receiverId,
      },
      events: outcome.executionOutcome.outcome.logs.map(
        (log: string): EventLogData => {
          const [_, probablyEvent] = log.match(/^EVENT_JSON:(.*)$/) ?? []
          try {
            return JSON.parse(probablyEvent)
          } catch (e) {
            return
          }
        }
      )
      .filter(event => event !== undefined)
    }))

}
```

여기서 우리가 무엇을 하는지 설명하겠습니다.

1. ExecutionOutcomes를 진행 중입니다.
2. `receipt`(ID 및 수신자)와 이벤트를 포함하는 `events`가 담긴 객체 목록을 구성하고 있습니다.
3. 이벤트를 수집하기 위해, 정규 표현을 사용하여 이벤트를 구문 분석하려는 ExecutionOutcome의 로그를 반복하고 있습니다. `EventLogData`의 구문 분석에 실패하면 `undefined`를 반환합니다
4. 마지막으로 `events` 목록이 수집되면, `undefined`를 반환하는 것들을 필터링합니다.

좋습니다. 이제 일부 Receipt 데이터가 포함된 객체 목록과 성공적으로 구문 분석된 `EventLogData` 목록만 남았습니다.

인덱서의 목표는 NEP-171 표준을 따르는 발행된 NFT에 대한 유용한 데이터를 반환하는 것입니다. 따라서, 관련 없는 표준 이벤트를 삭제해야 합니다.

```ts title=index.ts
    .filter(relevantOutcome =>
      relevantOutcome.events.some(
        event => event.standard === "nep171" && event.event === "nft_mint"
      )
    )
```

## 거의 완료

지금까지 요구 사항에 따라 필요한 모든 것을 수집했습니다.

`handleStreamerMessage` 끝에 모든 것을 출력할 수 있습니다:

```ts title=index.ts
  relevantOutcomes.length && console.dir(relevantOutcomes, { depth: 10 })
```

`handleStreamerMessage` 함수의 최종 모습은 다음과 같습니다:

```ts title=index.ts
async function handleStreamerMessage(
  streamerMessage: types.StreamerMessage
): Promise<void> {
  const relevantOutcomes = streamerMessage
    .shards
    .flatMap(shard => shard.receiptExecutionOutcomes)
    .map(outcome => ({
      receipt: {
        id: outcome.receipt.receiptId,
        receiverId: outcome.receipt.receiverId,
      },
      events: outcome.executionOutcome.outcome.logs.map(
        (log: string): EventLogData => {
          const [_, probablyEvent] = log.match(/^EVENT_JSON:(.*)$/) ?? []
          try {
            return JSON.parse(probablyEvent)
          } catch (e) {
            return
          }
        }
      )
      .filter(event => event !== undefined)
    }))
    .filter(relevantOutcome =>
      relevantOutcome.events.some(
        event => event.standard === "nep171" && event.event === "nft_mint"
      )
    )

  relevantOutcomes.length && console.dir(relevantOutcomes, { depth: 10 })
}

```

인덱서를 실행하면, 이는 `nft_mint` 이벤트를 포착하고 터미널에 데이터를 출력합니다.

```bash
npm run start
```

:::note

인덱서를 실행하는 데 문제가 있나요? [자격 증명](credentials.md) 부분 을 건너뛰지 않았는지 확인하세요 :)

:::

그렇게 빠르진 않습니다! 발행된 토큰을 볼 수 있는 마켓플레이스 링크에 대해 이야기했던 것을 기억하십니까? 이제, 가능할 때마다 해당 링크로 데이터를 확장할 것입니다. 적어도 우리는 [Paras](https://paras.id)와 [Mintbase](https://mintbase.io)에서 발행된 NFT를 처리하는 방법을 보여줄 것입니다.



## Paras와 Mintbase에서 발행된 NFT 링크 제작

현재 우리는 수신, 실행 상태 및 이벤트 로그를 노출하는 객체 배열을 가지고 있습니다. 우리는 현재 우리가 가지고 있는 모든 데이터가 우리와 관련이 있다는 것을 확실히 알고 있으며, 적어도 우리가 알고 있는 마켓플레이스를 위해 발행된 NFT에 대한 링크로 확장하고자 합니다.

우리는 Paras와 Mintbase를 잘 알고 있고 좋아합니다.


### Paras 토큰 URL

당신을 위해 조사한 결과, Paras에서 토큰에 대한 URL을 만드는 방법은 다음과 같습니다.


```
https://paras.id/token/[1]::[2]/[3]
```

여기서:

- [1] - Paras 컨트랙트 주소 (`x.paras.near`)
- [2] - `token_id`의 첫 번째 부분 (Paras의 `EventLogData.data`는 `token_ids` 키가 있는 객체 배열입니다. 해당 ID는 사이에 `:` 열이 있는 숫자들로 표현됩니다.)
- [3] - `token_id` 자체

예시:

```
https://paras.id/token/x.paras.near::387427/387427:373
```

나중에 사용할 수 있도록 `interface EventLogData` 뒤 어딘가에 인터페이스를 추가해 보겠습니다.

```ts
interface ParasEventLogData {
  owner_id: string,
  token_ids: string[],
};
```

### Mintbase 토큰 URL

다시 당신을 위해 조사한 결과입니다.
```
https://www.mintbase.io/thing/[1]:[2]
```

여기서:

- [1] - `meta_id` ( Mintbase의 `EventLogData.data`는 `meta_id`를 포함하는 문자열화된 JSON 배열입니다.)
- [2] - 컨트랙트 계정 주소 저장(기본적으로 Receipt의 수신자 ID)

예시:

```
https://www.mintbase.io/thing/70eES-icwSw9iPIkUluMHOV055pKTTgQgTiXtwy3Xus:vnartistsdao.mintbase1.near
```

나중에 사용할 수 있도록 `interface EventLogData` 뒤 어딘가에 인터페이스를 추가해 보겠습니다.

```ts
interface MintbaseEventLogData {
  owner_id: string,
  memo: string,
}
```

이제 다른 `.map()`을 추가하기에 완벽한 시간이지만, 너무 많을 수도 있습니다. 이제 출력하려는 데이터를 만들기 위해 forloop를 진행해 보겠습니다.

```ts title=index.ts
let output = []
for (let relevantOutcome of relevantOutcomes) {
  let marketplace = "Unknown"
  let nfts = []


}
```

이제 마켓플레이스 이름, Receipt ID를 출력하여 [NEAR 익스플로러](https://explorer.near.org)에서 검색할 수 있도록 하고, 소유자 계정 이름과 함께 NFT에 대한 링크 목록을 출력할 것입니다.

링크 만들기를 시작하겠습니다. [Riqi](https://twitter.com/hdriqi)에게 인사하세요!



```ts title=index.ts
let output = []
  for (let relevantOutcome of relevantOutcomes) {
    let marketplace = "Unknown"
    let nfts = []
    if (relevantOutcome.receipt.receiverId.endsWith(".paras.near")) {
      marketplace = "Paras"
      nfts = relevantOutcome.events.flatMap(event => {
        return (event.data as ParasEventLogData[])
          .map(eventData => ({
            owner: eventData.owner_id,
            links: eventData.token_ids.map(
              tokenId => `https://paras.id/token/${relevantOutcome.receipt.receiverId}::${tokenId.split(":")[0]}/${tokenId}`
            )
           })
        )
      })
    }
```

여기서 무슨 일이 일어나고 있는지에 대해 말씀드리겠습니다. Receipt의 수신자 계정 이름이 `.paras.near`(예: `x.paras.near`)로 끝나는 경우, Paras 마켓플레이스에서 온 것이므로, 해당 변수를 변경합니다.

그런 다음 이전에 정의한 이벤트와 `ParasEventLogData`를 사용한 `data`를 사용하여 이벤트를 반복합니다. 이는 소유자 및 NFT 링크가 있는 객체 목록을 수집합니다.


Mintbase 차례에서는, [Nate](https://twitter.com/nategeier)와 그의 팀이 이미 [NEAR Lake Framework로 마이그레이션](migrating-to-near-lake-framework.md)하였습니다. 인사하고, 링크를 만들어 보겠습니다.

```ts title=index.ts
  } else if (relevantOutcome.receipt.receiverId.match(/\.mintbase\d+\.near$/)) {
      marketplace = "Mintbase"
      nfts = relevantOutcome.events.flatMap(event => {
        return (event.data as MintbaseEventLogData[])
          .map(eventData => {
          const memo = JSON.parse(eventData.memo)
          return {
            owner: eventData.owner_id,
            links: [`https://mintbase.io/thing/${memo["meta_id"]}:${relevantOutcome.receipt.receiverId}`]
          }
        })
      })
    }
```

Paras와 거의 같은 이야기이지만, 조금 더 복잡합니다. Mintbase 마켓플레이스의 특징은 단일 마켓플레이스가 아니라는 것입니다! 모든 Mintbase 사용자는 자신의 상점과 별도의 컨트랙트를 가지고 있습니다. 그리고 그 컨트랙트 주소는 `mintbaseN.near`(여기서 `N`은 숫자)로 끝나는 동일한 원칙을 따르는 것처럼 보입니다(예: `nate.mintbase1.near`).

ExecutionOutcome 수신자가 Mintbase에서 왔다고 정의한 후에는 Paras와 동일한 작업을 수행합니다.

1. `marketplace` 변수 변경
2. 소유자 및 제작된 링크가 포함된 NFT 목록 수집

그리고 마켓플레이스를 결정할 수 없는 경우에도 무언가를 반환해야 하므로, Events 데이터를 있는 그대로 반환해 보겠습니다.

```ts title=index.ts
  } else {
    nfts = relevantOutcome.events.flatMap(event => event.data)
  }
```

수집된 데이터를 `output`으로 push할 차례입니다.

```ts title=index.ts
  output.push({
    receiptId: relevantOutcome.receipt.id,
    marketplace,
    nfts,
  })
```

그리고 출력을 터미널에 인쇄하도록 합니다.

```ts title=index.ts
if (output.length) {
  console.log(`We caught freshly minted NFTs!`)
  console.dir(output, { depth: 5 })
}
```

모든 코드는 다음과 같습니다.

```ts title=index.ts
  let output = []
  for (let relevantOutcome of relevantOutcomes) {
    let marketplace = "Unknown"
    let nfts = []
    if (relevantOutcome.receipt.receiverId.endsWith(".paras.near")) {
      marketplace = "Paras"
      nfts = relevantOutcome.events.flatMap(event => {
        return (event.data as ParasEventLogData[])
          .map(eventData => ({
            owner: eventData.owner_id,
            links: eventData.token_ids.map(
              tokenId => `https://paras.id/token/${relevantOutcome.receipt.receiverId}::${tokenId.split(":")[0]}/${tokenId}`
            )
           })
        )
      })
    } else if (relevantOutcome.receipt.receiverId.match(/\.mintbase\d+\.near$/)) {
      marketplace = "Mintbase"
      nfts = relevantOutcome.events.flatMap(event => {
        return (event.data as MintbaseEventLogData[])
          .map(eventData => {
          const memo = JSON.parse(eventData.memo)
          return {
            owner: eventData.owner_id,
            links: [`https://mintbase.io/thing/${memo["meta_id"]}:${relevantOutcome.receipt.receiverId}`]
          }
        })
      })
    } else {
      nfts = relevantOutcome.events.flatMap(event => event.data)
    }
    output.push({
      receiptId: relevantOutcome.receipt.id,
      marketplace,
      createdOn,
      nfts,
    })
  }
  if (output.length) {
    console.log(`We caught freshly minted NFTs!`)
    console.dir(output, { depth: 5 })
  }
```

NFT 민팅의 날짜와 시간은 언제일까요? `handleStreamerMessage`함수 의 시작 부분에 다음 코드를 추가해 봅시다.

```ts title=index.ts
const createdOn = new Date(streamerMessage.block.header.timestamp / 1000000)
```

`output.push()` 표현식을 업데이트합니다.

```ts title=index.ts
output.push({
  receiptId: relevantOutcome.receipt.id,
  marketplace,
  createdOn,
  nfts,
})
```

그리고 그게 전부가 아닙니다. 인덱서를 실행하여 NFT 민팅을 감시하고 하나도 놓치지 마십시오.


```bash
npm run start
```

:::note

인덱서를 실행하는 데 문제가 있습니까? [자격 증명](credentials.md) 부분을 건너뛰지 않았는지 확인하세요 :)

:::

예상 출력:

```
We caught freshly minted NFTs!
[
  {
    receiptId: '2y5XzzL1EEAxgq8EW3es2r1dLLkcecC6pDFHR12osCGk',
    marketplace: 'Paras',
    createdOn: 2022-05-24T09:35:57.831Z,
    nfts: [
      {
        owner: 'dccc.near',
        links: [ 'https://paras.id/token/x.paras.near::398089/398089:17' ]
      }
    ]
  }
]
We caught freshly minted NFTs!
[
  {
    receiptId: 'BAVZ92XdbkAPX4DkqW5gjCvrhLX6kGq8nD8HkhQFVt5q',
    marketplace: 'Mintbase',
    createdOn: 2022-05-24T09:36:00.411Z,
    nfts: [
      {
        owner: 'chiming.near',
        links: [
          'https://mintbase.io/thing/HOTcn6LTo3qTq8bUbB7VwA1GfSDYx2fYOqvP0L_N5Es:vnartistsdao.mintbase1.near'
        ]
      }
    ]
  }
]
```

## 결론

정말 재밌지 않나요? 우리가 한 일을 요약해 보겠습니다.

- [이벤트](https://nomicon.io/Standards/EventsFormat)에 대해 배웠습니다.
- 이제 이벤트를 팔로우하는 방법을 이해했습니다.
- 컨트랙트 개발자로서 이벤트를 사용하고 자신의 이벤트를 내보낼 수 있다는 사실을 알았으므로, 이제 해당 이벤트를 추적하는 인덱서를 만드는 방법에 대해 알게 되었습니다.
- NFT 민팅 프로세스를 자세히 살펴보았으며, 추가 실험을 통해 `nft_transfer` 이벤트를 추적하는 방법을 알아볼 수 있습니다.

이 튜토리얼의 자료는 문자 그대로 [이벤트 형식](https://nomicon.io/Standards/EventsFormat)을 따르는 모든 이벤트에 대해 추정할 수 있습니다.

거기에서 발행된 최신 NFT에 대해 알아보고, 이를 수집하는 가장 빠른 사람이 되기 위한 전용 인덱서가 있다는 것은 말할 것도 없습니다.

사냥하러 가봅시다! 🦈

:::note 튜토리얼 소스 코드

[`near-examples/near-lake-nft-indexer`](https://github.com/near-examples/near-lake-nft-indexer): 이 튜토리얼의 소스 코드
:::
