---
id: realtime
title: 실시간 이벤트 추적
---

탈중앙화 앱을 개발하는 동안, 실시간으로 특정 이벤트를 추적하고 싶을 수 있습니다. 예를 들어 특정 NFT 마켓플레이스에서 판매가 발생할 때마다 정보를 받고 싶을 수 있습니다. 이것이 가능하려면 다음과 같은 것들이 필요합니다.

1. 컨트랙트에서 이벤트가 발생했음을 알리는 방법
2. 이러한 이벤트를 실시간으로 추적하는 방법

이러한 문제를 해결하기 위해 [표준 이벤트 형식(NEP-297)](https://nomicon.io/Standards/EventsFormat)이 만들어졌습니다. [NEP-297](https://nomicon.io/Standards/EventsFormat)은 컨트랙트가 이벤트 발생을 알려주는 표준에 대해 정의합니다. 이러한 이벤트는 공개되므로, 웹소켓을 사용하여 실시간으로 이벤트를 추적하는 서비스를 구축할 수 있습니다.

---

## NEP-297 - 이벤트
NEAR에서는 `Events`는 컨트랙트의 표준 로그 기능을 사용하는데, 이는 모든 로그가 블록체인에 영원히 저장되기 때문입니다. 이러한 방식으로, 이벤트는 `EVENT_JSON:` 접두사로 시작하고 뒤에 유효한 JSON 문자열 한 개가 오는 일반 로그 항목과 같습니다. JSON 문자열은 다음과 같은 인터페이스로 객체를 코드화해야 합니다.

```ts
interface EventLogData {
    standard: string, // name of standard, e.g. nep171
    version: string, // e.g. 1.0.0
    event: string, // type of the event, e.g. nft_mint
    data?: unknown, // event data defined in the nep171
}
```

예제로 [NEP-297 페이지](https://nomicon.io/Standards/EventsFormat)를 참조하세요.

:::warning
로그를 캡쳐할 때 16kb 문자열 제한이 존재합니다.
:::

---

## 이벤트 듣기 (Mainnet)

`mainnet`에서 이벤트를 들으려면, 안전한 웹소켓 `wss://events.near.stream/ws`에 연결하기만 하면 됩니다. **`testnet`에 대한** 웹소켓은 없습니다.

첫 번째 메시지로, 필터링하려는 이벤트 유형과 필요한 경우 제한 사항을 나타내는 객체를 전달해야 합니다. 예를 들어 아래 예시에서는 `nft.nearapps.near` 계정의 `nft_mint` 이벤트를 필터링합니다.

```json
{
  secret: "ohyeahnftsss",
  filter: [{
    "account_id": "nft.nearapps.near",
    "status": "SUCCESS",
    "event": {
      "standard": "nep171",
      "event": "nft_mint",
    }
  }],
  fetch_past_events: 20,
}
```

:::caution
`testnet`에 대해 구현된 웹소켓은 없지만, 이 [수정된 인덱서](https://github.com/evgenykuzyakov/indexer-tutorials/tree/master/example-indexer)를 사용하여 데이터베이스를 이벤트로 채운 다음, [event-api 프로젝트](https://github.com/evgenykuzyakov/event-api)를 통해 해당 이벤트들을 제공하면 각자만의 웹소켓을 직접 실행할 수 있습니다.
:::

:::tip 참조 구현
참조 구현이 필요한 경우, NEAR 네트워크의 모든 `nft_mint` 및 `nft_transfer` 이벤트를 수신하는 [Evgeny Kuzyakov의 프로젝트](https://github.com/evgenykuzyakov/nft-mints)가 있습니다. 
:::

---

## NEAR Lake 인덱서

NEAR Lake는 네트워크를 감시하고 모든 이벤트를 AWS S3에 JSON 파일로 저장하기 위해 [NEAR 인덱서 프레임워크](https://near-indexers.io/docs/projects/near-indexer-framework) 위에 구축된 인덱서입니다 .

:::info GitHub 레퍼지토리

이 [GitHub 레퍼지토리](https://github.com/near/near-lake-indexer/)에서 Lake 인덱서 소스 코드를 찾을 수 있습니다.

:::

### 작동 방식

:::tip

[Pagoda Inc.](https://pagoda.co)는 NEAR Lake 노드를 실행하여 AWS S3에 JSON 형식으로 데이터를 저장합니다. 특별한 이유가 없는 한 자체 NEAR Lake를 실행할 필요는 없습니다.

:::

현재 생성되어 있는 AWS S3 버킷이 있습니다.

- `near-lake-data-testnet` (`eu-central-1` 지역)
- `near-lake-data-mainnet` (`eu-central-1` 지역)

모든 버킷은 요청자가 액세스에 대해 지불하는 방식으로 설정됩니다. 누구나 자신의 AWS 자격 증명으로 버킷에 연결하여, Amazon을 통해 요금을 지불하고 버킷에서 데이터를 읽을 수 있습니다.

### 자료 구조

Lake 인덱서에서 사용하는 자료 구조는 다음과 같습니다.

```
    <block_height>/
      block.json
      shard_0.json
      shard_1.json
      ...
      shard_N.json
```

`<block_height>` 앞에 0이 있는 12자 길이의 [`u64`](https://doc.rust-lang.org/std/primitive.u64.html) 문자열입니다 (예: "000042839521"). 더 자세히 알고 싶으면, [이 문제](https://github.com/near/near-lake/issues/23)를 참조하세요.

`block_json` JSON으로 직렬화된 `BlockView` 구조체를 포함합니다. **주의하세요!** 이 구조체는 향후 변경될 수 있으므로, 변경 사항이 생기면 공지하겠습니다.

`shard_N.json`에서, 샤드의 인덱스 번호를 나타냅니다. 여기서 N은 [`u64`](https://doc.rust-lang.org/std/primitive.u64.html)로, `0`부터 시작합니다. 블록에서 예상되는 샤드 수를 확인하려면`.header.chunks_included`에서 `block.json`을 확인할 수 있습니다.

### 사용 방법

우리는 NEAR Lake 자체에 저장된 데이터 위에 인덱서를 생성하는 간단하고 직관적인 방법을 제공하기 위해, [NEAR Lake 프레임워크](https://near-indexers.io/docs/projects/near-lake-framework)를 만들었습니다.

:::info NEAR Lake 프레임워크

[NEAR 거버넌스 포럼](https://gov.near.org/t/announcement-near-lake-framework-brand-new-word-in-indexer-building-approach/17668)에서 NEAR Lake Framework 릴리스 발표를 확인할 수 있습니다.

:::

개요와 몇 가지 아이디어를 제공하기 위해, 간단한 예제와 함께 이 비디오 튜토리얼을 준비했습니다.

<iframe
 width="560"
 height="315"
 src="https://www.youtube.com/embed/GsF7I93K-EQ"
 title="NEAR Lake Indexer"
 frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
 allowfullscreen>
</iframe>
