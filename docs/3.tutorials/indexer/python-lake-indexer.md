---
sidebar_label: "Python 튜토리얼"
---

# NEAR Lake 인덱서 기본 튜토리얼

<ProgrammingLanguage lang="python" />

:::info 튜토리얼 소스 코드

[`frolvanya/near-lake-raw-printer`](https://github.com/frolvanya/near-lake-raw-printer): 블록 높이와 샤드 수를 출력하는 인덱서를 만드는 방법에 대한 튜토리얼 소스 코드

:::

최근에 우리는 [NEAR Lake 프레임워크의 Python 버전을 pypi.org에 게시](https://pypi.org/project/near-lake-framework/)했습니다.

우리는 Python 패키지를 사용하는 방법에 대한 기본 튜토리얼을 제공하고 싶습니다. 시작해 봅시다!


## 프로젝트 생성

인덱서 프로젝트를 만듭니다.

```bash
mkdir near-lake-raw-printer && cd near-lake-raw-printer
touch main.py
```

## 의존성 설치

`near-lake-framework`를 설치합니다.

```bash
pip3 install near-lake-framework
```

## `near-lake-framework` 가져오기

`main.py` 파일에서 필요한 의존성을 가져오겠습니다.

```python title=main.py
from near_lake_framework import near_primitives, LakeConfig, streamer
```

실제로 인덱서를 실행하기 위해 호출될 기본 함수 `streamer`와 구성해야 하는 자료형 중 `near_primitives` 및 `LakeConfig`를 가져왔습니다.

## config 생성

아래와 같이 `LakeConfig`의 인스턴스화를 추가하세요.

```python title=main.py
config = LakeConfig.mainnet()
config.start_block_height = 69030747
config.aws_access_key_id = os.getenv("AWS_ACCESS_KEY_ID")
config.aws_secret_key = os.getenv("AWS_SECRET_ACCESS_KEY")
```

config에 대해 몇 마디 하자면, `mainnet()` 함수는 메인넷에 대해 `s3_bucket_name`, `s3_region_name`을 설정했습니다. 
[NEAR 익스플로러](https://explorer.near.org)로 가서 **가장 최근의** 블록 높이를 가져와 `config.start_block_height`를 설정할 수 있습니다.


## 스트림 시작

`config`로 `streamer` 함수를 호출해 보겠습니다.

```python title=main.py
stream_handle, streamer_messages_queue = streamer(config)
while True:
    streamer_message = await streamer_messages_queue.get()
    print(f"Block #{streamer_message.block.header.height} Shards: {len(streamer_message.shards)}")
```

그리고 `main.py` 끝 부분에서 인덱서의 실제 시작은 다음과 같습니다.

```python title=main.py
loop = asyncio.get_event_loop()
loop.run_until_complete(main())
```

## 모든 코드

```python title=main.py
import asyncio
import os

from near_lake_framework import LakeConfig, streamer, near_primitives

async def main():    
    config = LakeConfig.mainnet()
    config.start_block_height = 69030747
    config.aws_access_key_id = os.getenv("AWS_ACCESS_KEY_ID")
    config.aws_secret_key = os.getenv("AWS_SECRET_ACCESS_KEY")

    stream_handle, streamer_messages_queue = streamer(config)
    while True:
        streamer_message = await streamer_messages_queue.get()
        print(f"Block #{streamer_message.block.header.height} Shards: {len(streamer_message.shards)}")

loop = asyncio.get_event_loop()
loop.run_until_complete(main())
```

이게 전부입니다. 이제 `main.py`를 실행합니다.

```bash
python3 main.py
```

다음과 같은 내용이 표시되어야 합니다.

```bash
Received 400 blocks from S3
Block #69030747 Shards: 4
Block #69030748 Shards: 4
Block #69030749 Shards: 4
Block #69030750 Shards: 4
Block #69030751 Shards: 4
Block #69030752 Shards: 4
Block #69030753 Shards: 4
Block #69030754 Shards: 4
```

CTRL+C를 눌러 인덱서를 중지할 수 있습니다.

:::danger 자격 증명

[NEAR Lake](/tools/realtime#near-lake-indexer)에서 데이터에 액세스하려면 자격 증명을 제공해야 합니다. [자격 증명](credentials.md) 문서를 참고하세요.

:::

GitHub에서 [이 튜토리얼의 소스 코드](https://github.com/frolvanya/near-lake-raw-printer)를 찾을 수 있습니다.
