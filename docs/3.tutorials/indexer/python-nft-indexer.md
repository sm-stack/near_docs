---
sidebar_label: "Python용 NFT 인덱서"
---

# Python용 NFT 인덱서 구축

<ProgrammingLanguage lang="python" />

:::note 튜토리얼의 소스 코드

[`frolvanya/near-lake-nft-indexer`](https://github.com/frolvanya/near-lake-nft-indexer): 이 튜토리얼의 소스 코드

:::

## 목표

이 튜토리얼은 [Python용 NEAR Lake 프레임워크](https://near-indexers.io/docs/projects/near-lake-framework)에 구축된 작동하는 NFT 인덱서를 구축합니다. 인덱서는 `nft_mint` [이벤트](https://nomicon.io/Standards/EventsFormat)를 감시하고 다음과 같은 관련 데이터를 출력합니다.
- 민팅이 발생한 [Receipt](https://near-indexers.io/docs/data-flow-and-structures/structures/receipt)
- 마켓플레이스
- NFT 소유자 계정 이름
- 마켓플레이스 내 NFT로의 링크

최종 소스 코드는 GitHub [`frolvanya/near-lake-nft-indexer`](https://github.com/frolvanya/near-lake-nft-indexer)에서 사용할 수 있습니다.

## 동기

NEAR Protocol은 멋진 기능인 [Events](https://nomicon.io/Standards/EventsFormat)를 도입했습니다. 이벤트를 통해 컨트랙트 개발자는 표준화된 로그를 [`ExecutionOutcomes`](https://near-indexers.io/docs/data-flow-and-structures/structures/execution_outcome)에 추가할 수 있으므로, 자신이나 다른 개발자가 API 또는 인덱서를 통해 보다 편리한 방식으로 해당 로그를 읽을 수 있습니다.

이벤트에는 NEP와 일치하는 `standard` 필드가 있습니다. 이 튜토리얼에서는 [NEP-171 대체 불가능 토큰 표준](https://github.com/near/NEPs/discussions/171)에 대해 설명합니다.

이 튜토리얼에서 우리의 목표는, 이벤트 컨트랙트가 방출하는 것을 "듣는" 방법과 이를 통해 얻을 수 있는 이점을 보여주는 것입니다.

예를 들어,우리는 [NEP-171 이벤트](https://nomicon.io/Standards/Tokens/NonFungibleToken/Event) 표준에 따라 발행된 모든 NFT를 감시하는 인덱서를 구축할 것입니다. 우리는 하나의 이벤트도 놓치고 싶지 않은 상황입니다. 우리의 인덱서는 발행된 모든 NFT를 인식하고 발행된 영수증과 같은 기본 데이터 세트를 제공하고 시장에 대한 링크를 보여줍니다(이 예에서는 [Paras](https://paras.id)  및 [Mintbase](https://mintbase.io)를 다룰 것입니다).


이 튜토리얼에서는 Python 버전의 [NEAR Lake 프레임워크](https://near-indexers.io/docs/projects/near-lake-framework)를 사용합니다. Rust에서도 개념은 동일하지만, 더 많은 사람들에게 자신만의 인덱서를 구축하는 것이 그렇게 복잡하지 않다는 것을 보여주고 싶습니다.

## 준비

:::danger 자격 증명

[자격 증명](credentials.md) 페이지에 설명된 대로 자격 증명을 설정했는지 확인하세요. 그렇지 않으면 코드를 작동시킬 수 없습니다.

:::

프로젝트 폴더를 만들어 봅시다.

```bash
mkdir lake-nft-indexer && cd lake-nft-indexer
touch main.py
```

## NEAR Lake 프레임워크 설정

`main.py`에서 `near-lake-framework`로부터 `stream` 함수와 `near_primitives`를 가져옵시다.

```python title=main.py
from near_lake_framework import near_primitives, LakeConfig, streamer
```

main 함수를 추가합니다.

```python title=main.py
async def main():
    print("Starting NFT indexer")
```

아래와 같이 `LakeConfig`의 인스턴스화를 추가하세요.

```python title=main.py
config = LakeConfig.mainnet()
config.start_block_height = 69030747
config.aws_access_key_id = os.getenv("AWS_ACCESS_KEY_ID")
config.aws_secret_key = os.getenv("AWS_SECRET_ACCESS_KEY")
```

config에 대해 몇 마디 하자면, 메인넷에 대해서는 `mainnet()`함수가  `s3_bucket_name`, `s3_region_name`을 설정하였습니다. [NEAR 익스플로러](https://explorer.near.org)로 이동하여, **최신** 블록 높이를 얻어 `config.start_block_height`를 설정할 수도 있습니다. 

`config`로 `streamer` 함수를 호출해 보겠습니다.

```python title=main.py
stream_handle, streamer_messages_queue = streamer(config)
while True:
    streamer_message = await streamer_messages_queue.get()
```

그리고 `main.py` 마지막 부분에서 인덱서의 실제 시작은 다음과 같습니다.

```python title=main.py
loop = asyncio.get_event_loop()
loop.run_until_complete(main())
```

이 시점에서 최종 `main.py`는 다음과 같습니다.

```python title=main.py
from near_lake_framework import LakeConfig, streamer, near_primitives
async def main():
    print("Starting NFT indexer")
    
    config = LakeConfig.mainnet()
    config.start_block_height = 69030747
    config.aws_access_key_id = os.getenv("AWS_ACCESS_KEY_ID")
    config.aws_secret_key = os.getenv("AWS_SECRET_ACCESS_KEY")

    stream_handle, streamer_messages_queue = streamer(config)
    while True:
        streamer_message = await streamer_messages_queue.get()

loop = asyncio.get_event_loop()
loop.run_until_complete(main())
```

이제 인덱서가 받는 [`StreamerMessage`](https://near-indexers.io/docs/data-flow-and-structures/structures/toc)를 처리하기 위해 호출할 콜백 함수를 만들어야 합니다 .

```python title=main.py
async def handle_streamer_message(streamer_message: near_primitives.StreamerMessage):
    pass
```

## 이벤트와 이를 감지하는 방법

우선 우리가 이벤트를 감지할 수 있는 곳을 찾아봅시다. [NEAR 블록체인의 데이터 흐름](https://near-indexers.io/docs/data-flow-and-structures/flow/near-data-flow)에 대해 잘 알고 계시기를 바랍니다. 알고 있던 것들을 수정해 보겠습니다.
- NFT를 생성하는 것은 NFT 컨트랙트 내 작업입니다(어느 것이든 상관 없음).
- 작업은 [Receipt](https://near-indexers.io/docs/data-flow-and-structures/structures/receipt) 내 위치합니다.
- Receipt 실행 결과는 [ExecutionOutcome](https://near-indexers.io/docs/data-flow-and-structures/structures/execution_outcome)입니다.
- `ExecutionOutcome`는 따라서, 차례로 컨트랙트가 "출력"하는 로그를 잡습니다.
- [Events](https://nomicon.io/Standards/EventsFormat)는 로그 내에 존재합니다.

이로 인해 우리는 ExecutionOutcomes만 볼 수 있고, `StreamerMessage`가 가져오는 다른 모든 것은 무시될 수 있다는 사실을 알 수 있습니다.


## 필요한 데이터만 포착

[준비](#준비) 섹션에서 준비한 콜백 함수 `handle_streamer_message` 내에서 필요한 데이터 필터링을 시작하겠습니다.

```python title=main.py
async def handle_streamer_message(streamer_message: near_primitives.StreamerMessage):
    for shard in streamer_message.shards:
        for receipt_execution_outcome in shard.receipt_execution_outcomes:
            for log in receipt_execution_outcome.execution_outcome.outcome.logs:
                pass
```

우리는 모든 [샤드](https://near-indexers.io/docs/data-flow-and-structures/structures/shard)에 대해 반복하고, 모든 ExecutionOutcomes 목록을 단일 목록으로 수집했습니다(우리의 경우 어떤 샤드에서 민팅이 발생했는지는 신경 쓰지 않았습니다).

이제 이벤트 형식의 로그를 포함하는 ExecutionOutcomes만 처리하려고 합니다. 이러한 로그는 [Events 문서](https://nomicon.io/Standards/EventsFormat#events)에 따라 `EVENT_JSON:`으로 시작됩니다.


```python title=main.py
async def handle_streamer_message(streamer_message: near_primitives.StreamerMessage):
    for shard in streamer_message.shards:
        for receipt_execution_outcome in shard.receipt_execution_outcomes:
            for log in receipt_execution_outcome.execution_outcome.outcome.logs:
                if not log.startswith("EVENT_JSON:"):
                    continue
                try:
                    parsed_log = json.loads(log[len("EVENT_JSON:") :])
                except json.JSONDecodeError:
                    print(
                        f"Receipt ID: `{receipt_execution_outcome.receipt.receipt_id}`\nError during parsing logs from JSON string to dict"
                    )
                    continue
```

여기서 우리가 무엇을 하는지 설명하겠습니다.

1. ExecutionOutcomes를 진행 중입니다.
2. 이벤트 형식의 로그를 포함하는 ExecutionOutcomes를 필터링하고 있습니다.
3. 이벤트를 수집하기 위해, `json.loads`을 사용하여 이벤트를 구문 분석하려는 ExecutionOutcome의 로그를 반복하고 있습니다. 

인덱서의 목표는 NEP-171 표준을 따르는 발행된 NFT에 대한 유용한 데이터를 반환하는 것입니다. 이에 따라, 관련 없는 표준 이벤트를 삭제해야 합니다.

```python title=main.py
    if (
        parsed_log.get("standard") != "nep171"
        or parsed_log.get("event") != "nft_mint"
    ):
        continue
```

## 거의 완료

지금까지 요구 사항에 따라 필요한 모든 것을 수집했습니다.

`handle_streamer_message` 함수의 최종 모습은 다음과 같습니다:

```python title=main.py
async def handle_streamer_message(streamer_message: near_primitives.StreamerMessage):
    for shard in streamer_message.shards:
        for receipt_execution_outcome in shard.receipt_execution_outcomes:
            for log in receipt_execution_outcome.execution_outcome.outcome.logs:
                if not log.startswith("EVENT_JSON:"):
                    continue
                try:
                    parsed_log = json.loads(log[len("EVENT_JSON:") :])
                except json.JSONDecodeError:
                    print(
                        f"Receipt ID: `{receipt_execution_outcome.receipt.receipt_id}`\nError during parsing logs from JSON string to dict"
                    )
                    continue

                if (
                    parsed_log.get("standard") != "nep171"
                    or parsed_log.get("event") != "nft_mint"
                ):
                    continue

                print(parsed_log)
```

이제 `main` 함수 내 반복문에서 `handle_streamer_message`를 호출해 보겠습니다.


```python title=main.py
await handle_streamer_message(streamer_message)
```

인덱서를 실행하면, 이는 `nft_mint` 이벤트를 포착하고 터미널에 데이터를 출력합니다.

```bash
python3 main.py
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

링크 만들기를 시작하겠습니다.

```python title=main.py
def format_paras_nfts(data, receipt_execution_outcome):
    links = []

    for data_element in data:
        for token_id in data_element.get("token_ids", []):
            first_part_of_token_id = token_id.split(":")[0]
            links.append(
                f"https://paras.id/token/{receipt_execution_outcome.receipt.receiver_id}::{first_part_of_token_id}/{token_id}"
            )

    return {"owner": data[0].get("owner_id"), "links": links}

def format_mintbase_nfts(data, receipt_execution_outcome):
    links = []
    for data_block in data:
        try:
            memo = json.loads(data_block.get("memo"))
        except json.JSONDecodeError:
            print(
                f"Receipt ID: `{receipt_execution_outcome.receipt.receipt_id}`\nMemo: `{memo}`\nError during parsing Mintbase memo from JSON string to dict"
            )
            return

        meta_id = memo.get("meta_id")
        links.append(
            f"https://www.mintbase.io/thing/{meta_id}:{receipt_execution_outcome.receipt.receiver_id}"
        )

    return {"owner": data[0].get("owner_id"), "links": links}
```

receipt_id를 출력할 예정이므로 [NEAR 익스플로러](https://explorer.near.org)에서 마켓플레이스 이름, 소유자 계정 이름과 함께 NFT에 대한 링크 목록을 검색할 수 있습니다.

```python title=main.py
if receipt_execution_outcome.receipt.receiver_id.endswith(
    ".paras.near"
):
    output = {
        "receipt_id": receipt_execution_outcome.receipt.receipt_id,
        "marketplace": "Paras",
        "nfts": format_paras_nfts(
            parsed_log["data"], receipt_execution_outcome
        ),
    }
```

여기서 무슨 일이 일어나고 있는지에 대해 말씀드리겠습니다. Receipt의 수신자 계정 이름이 `.paras.near`(예: `x.paras.near`)로 끝나는 경우, Paras 마켓플레이스에서 온 것이므로, 해당 변수를 변경합니다.

Mintbase 차례에서는, [Nate](https://twitter.com/nategeier)와 그의 팀이 이미 [NEAR Lake Framework로 마이그레이션](migrating-to-near-lake-framework.md)하였습니다. 인사하고, 링크를 만들어 보겠습니다.

```python title=main.py
    elif re.search(
        ".mintbase\d+.near", receipt_execution_outcome.receipt.receiver_id
    ):
        output = {
            "receipt_id": receipt_execution_outcome.receipt.receipt_id,
            "marketplace": "Mintbase",
            "nfts": format_mintbase_nfts(
                parsed_log["data"], receipt_execution_outcome
            ),
        }
    else:
        continue
```

Paras와 거의 같은 이야기이지만, 조금 더 복잡합니다. Mintbase 마켓플레이스의 특징은 단일 마켓플레이스가 아니라는 것입니다! 모든 Mintbase 사용자는 자신의 상점과 별도의 컨트랙트를 가지고 있습니다. 그리고 그 컨트랙트 주소는 `mintbaseN.near`(여기서 `N`은 숫자)로 끝나는 동일한 원칙을 따르는 것처럼 보입니다(예: `nate.mintbase1.near`).


ExecutionOutcome 수신자가 Mintbase에서 왔다고 정의한 후에는 Paras와 동일한 작업을 수행합니다.

1. `marketplace` 변수 변경
2. 소유자 및 제작된 링크가 포함된 NFT 목록 수집

그리고 출력을 터미널에 출력합니다.

```python title=main.py
print(json.dumps(output, indent=4))
```

모든 코드는 다음과 같습니다.

```python title=main.py
def format_paras_nfts(data, receipt_execution_outcome):
    links = []

    for data_element in data:
        for token_id in data_element.get("token_ids", []):
            first_part_of_token_id = token_id.split(":")[0]
            links.append(
                f"https://paras.id/token/{receipt_execution_outcome.receipt.receiver_id}::{first_part_of_token_id}/{token_id}"
            )

    return {"owner": data[0].get("owner_id"), "links": links}


def format_mintbase_nfts(data, receipt_execution_outcome):
    links = []
    for data_block in data:
        try:
            memo = json.loads(data_block.get("memo"))
        except json.JSONDecodeError:
            print(
                f"Receipt ID: `{receipt_execution_outcome.receipt.receipt_id}`\nMemo: `{memo}`\nError during parsing Mintbase memo from JSON string to dict"
            )
            return

        meta_id = memo.get("meta_id")
        links.append(
            f"https://www.mintbase.io/thing/{meta_id}:{receipt_execution_outcome.receipt.receiver_id}"
        )

    return {"owner": data[0].get("owner_id"), "links": links}


async def handle_streamer_message(streamer_message: near_primitives.StreamerMessage):
    for shard in streamer_message.shards:
        for receipt_execution_outcome in shard.receipt_execution_outcomes:
            for log in receipt_execution_outcome.execution_outcome.outcome.logs:
                if not log.startswith("EVENT_JSON:"):
                    continue
                try:
                    parsed_log = json.loads(log[len("EVENT_JSON:") :])
                except json.JSONDecodeError:
                    print(
                        f"Receipt ID: `{receipt_execution_outcome.receipt.receipt_id}`\nError during parsing logs from JSON string to dict"
                    )
                    continue

                if (
                    parsed_log.get("standard") != "nep171"
                    or parsed_log.get("event") != "nft_mint"
                ):
                    continue

                if receipt_execution_outcome.receipt.receiver_id.endswith(
                    ".paras.near"
                ):
                    output = {
                        "receipt_id": receipt_execution_outcome.receipt.receipt_id,
                        "marketplace": "Paras",
                        "nfts": format_paras_nfts(
                            parsed_log["data"], receipt_execution_outcome
                        ),
                    }
                elif re.search(
                    ".mintbase\d+.near", receipt_execution_outcome.receipt.receiver_id
                ):
                    output = {
                        "receipt_id": receipt_execution_outcome.receipt.receipt_id,
                        "marketplace": "Mintbase",
                        "nfts": format_mintbase_nfts(
                            parsed_log["data"], receipt_execution_outcome
                        ),
                    }
                else:
                    continue

                print(json.dumps(output, indent=4))
```

그리고 그게 전부가 아닙니다. 인덱서를 실행하여 NFT 민팅을 감시하고 하나도 놓치지 마십시오.

```bash
python3 main.py
```

:::note

인덱서를 실행하는 데 문제가 있습니까? [자격 증명](credentials.md) 부분을 건너뛰지 않았는지 확인하세요 :)

:::

출력 예시:

```
{
    "receipt_id": "8rMK8rxb3WmFcSfM3ahFoeeoBF92pad3tpsqKoSWurr2",
    "marketplace": "Mintbase",
    "nfts": {
        "owner": "vn-artists-dao.near",
        "links": [
            "https://www.mintbase.io/thing/aqdCBHB9_2XZY7pwXRRu5rGDeLQl7Q8KgNud1wKgnGo:vnartistsdao.mintbase1.near"
        ]
    }
}
{
    "receipt_id": "ArRh94Fe1LKF9yPrAdzrMozWoxMVQbEW2Z2Zf4fsSsce",
    "marketplace": "Paras",
    "nfts": {
        "owner": "eeaeb516e0945893ac01eaf547f499abdbd344831c5fcbefa1a5c0a9f303cc5c",
        "links": [
            "https://paras.id/token/x.paras.near::432714/432714:1"
        ]
    }
}
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

