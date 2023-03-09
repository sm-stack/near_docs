---
sidebar_label: "JS 기본 튜토리얼"
---

# NEAR Lake 인덱서 기본 튜토리얼

<ProgrammingLanguage lang="js" />

:::info 튜토리얼의 소스 코드

[`near-examples/near-lake-raw-printer-js`](https://github.com/near-examples/near-lake-raw-printer-js): 블록 높이와 샤드 수를 출력하는 인덱서를 만드는 방법에 대한 튜토리얼 소스 코드

:::

최근 npmjs.org에 [NEAR Lake 프레임워크의 JavaScript 버전을 게시](https://www.npmjs.com/package/near-lake-framework)했습니다.

JavaScript 라이브러리를 사용하는 방법에 대한 기본 튜토리얼을 통해 당신의 역량을 강화하고자 합니다. 시작해 봅시다!

## 전제 조건

시작하기 전에 다음 사항이 갖추어졌는지 확인하세요.

- [nodejs](https://nodejs.org/en/download/) 설치

## 프로젝트 생성

인덱서 프로젝트를 만듭니다.

```bash
mkdir near-lake-raw-printer-js && cd near-lake-raw-printer-js
```

이제 `npm init`을 호출할 것입니다. 대화형 모드에서 모든 질문에 대해 Enter 키를 눌러 기본값으로 계속할 수 있습니다.

```bash
npm init
```

```
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to /Users/near/projects/near-lake-raw-printer-js/package.json:

{
  "name": "near-lake-raw-printer-js",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes)
```

`package.json`이 준비되었습니다. `near-lake-framework`을 설치해 봅시다.

## 의존성 설치

`near-lake-framework`를 설치합니다.

```bash
npm install near-lake-framework --save
```

`typescript`를 개발자 의존성으로 설치합니다.

```bash
npm install typescript --save-dev
```

## TypeScript 설정

이제 TypeScript 설정을 위해 `tsconfig.json`을 만들 수 있습니다 .

```bash
touch tsconfig.json
```

아래 내용을 파일에 붙여넣습니다.

```json title=tsconfig.json
{
  "compilerOptions": {
    "lib": [
      "ES2018",
      "dom"
    ]
  }
}
```

이제 `package.json`에 `scripts` 섹션을 넣습니다.

```json
"scripts": {
  "start": "tsc && node index.js"
}
```

그러면 `package.json`은 다음과 유사해야 합니다.

```json title=package.json
{
  "name": "near-lake-raw-printer",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "tsc && node index.js"
  },
  "dependencies": {
    "near-lake-framework": "^1.0.1"
  },
  "devDependencies": {
    "typescript": "^4.6.4"
  }
}
```

이제 `index.ts`를 생성해 봅시다.

```bash
touch index.ts
```

좋아하는 편집기에서 `index.ts`를 열어 코딩을 시작하세요.

## `near-lake-framework` 가져오기

`index.ts` 파일에서 필요한 의존성을 가져오겠습니다.

```ts
import { startStream, types } from 'near-lake-framework';
```

인덱서를 실제로 실행하기 위해 호출되어야 하는 기본 함수 `startStream`과, 구성해야 하는 `LakeConfig` 자료형을 가지고 있는 `types`를 가져왔습니다.

## config 생성

인덱서를 실행하려면 config부터 시작해야 합니다. 우리는 `LakeConfig`의 인스턴스를 생성해야 합니다.

```ts
const lakeConfig: types.LakeConfig = {
    s3BucketName: "near-lake-data-mainnet",
    s3RegionName: "eu-central-1",
    startBlockHeight: 63804051,
};
```

## 인덱서 핸들러 생성
인덱서는 필요에 따라 처리해야 하는 [`StreamerMessage`](https://near-indexers.io/docs/data-flow-and-structures/structures/toc) 인스턴스를 스트리밍합니다.

`near-lake-framework` JS 라이브러리에서, 핸들러는 콜백 함수로 제공되어야 합니다. 이 함수는 다음과 같은 특성을 가져야 합니다.
- 비동기적
- [`StreamerMessage`](https://near-indexers.io/docs/data-flow-and-structures/structures/toc) 자료형의 인자를 받음
- 아무것도 반환하지 않음(`void`)

콜백 생성:

```ts
async function handleStreamerMessage(streamerMessage: types.StreamerMessage): Promise<void> {
    //
}
```

이 튜토리얼에서 달성하고자 하는 사항은, 블록 높이와 샤드 수를 기록하는 것입니다. 이는 간단합니다.

```ts
async function handleStreamerMessage(streamerMessage: types.StreamerMessage): Promise<void> {
    console.log(`
        Block #${streamerMessage.block.header.height}
        Shards: ${streamerMessage.shards.length}
    `);
}
```

## 스트림 시작

그리고 마지막으로 작성할 것은 config와 함께 `startStream`을 호출하고, 콜백 함수를 전달하는 것입니다.

```ts
(async () => {
    await startStream(lakeConfig, handleStreamerMessage);
})();
```
이제 끝났습니다. 코드를 컴파일하고 실행할 수 있습니다.


## 컴파일 및 실행

:::danger 자격 증명

[NEAR Lake](/tools/realtime#near-lake-indexer)에서 데이터에 액세스하려면, 자격 증명을 제공해야 합니다. [자격 증명](credentials.md) 문서를 참조하세요.

:::

`scripts`에 `start` 명령을 추가했으므로, 컴파일 및 실행이 다음과 같이 쉬워야 합니다.

```bash
npm run start
```

다음과 같은 내용이 표시되어야 합니다.

```bash
Block #63804051 Shards: 4
Block #63804052 Shards: 4
Block #63804053 Shards: 4
Block #63804054 Shards: 4
Block #63804055 Shards: 4
Block #63804056 Shards: 4
Block #63804057 Shards: 4
Block #63804058 Shards: 4
Block #63804059 Shards: 4
Block #63804060 Shards: 4
```

CTRL+C를 눌러 인덱서를 중지할 수 있습니다.


## 다음은 무엇인가요?

데이터를 다르게 처리하기 위해 콜백 함수 [`handleStreamerMessage`](#인덱서-핸들러-생성)의 코드를 변경할 수도 있습니다.

[GitHub에서 이 튜토리얼의 소스 코드](https://github.com/near-examples/near-lake-raw-printer-js)를 찾을 수 있습니다.

