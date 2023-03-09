---
id: guest-book
title: 방명록
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {CodeTabs, Language, Github} from "@site/components/codetabs"

이 방명록 예제는 두 가지 주요 구성 요소로 이루어진 간단한 앱입니다.
  1. 사용자의 메시지를 저장하고 돈을 첨부할 수 있는 스마트 컨트랙트
  2. 게시된 마지막 10개의 메시지를 표시하는 간단한 웹 기반 프론트엔드

![img](/docs/assets/examples/guest-book.png)

---

## 프로젝트 시작

프로젝트 사용을 시작하는 데는 두 가지 옵션이 있습니다. 첫 번째 권장 사항은 웹 기반 대화형 환경을 여는 Gitpod를 통해 앱을 사용하는 것입니다. 두 번째 옵션은 레퍼지토리를 로컬로 복제하는 것으로 모든 [필수 구성 요소](../../2.develop/prerequisites.md)를 설치해야 합니다 .


<Tabs className="language-tabs" groupId="code-tabs">
  <TabItem value="🌐 JavaScript" >

  | Gitpod                                                                                                                                                          | 로컬로 복제                                   |
  | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
  | <a href="https://gitpod.io/#https://github.com/near-examples/guest-book-js.git"><img src="https://gitpod.io/button/open-in-gitpod.svg" alt="Gitpod에서 열기" /></a> | 🌐 `https://github.com/near-examples/guest-book-js` |

  </TabItem>
  <TabItem value="🦀 Rust">

  | Gitpod              | 로컬로 복제         |
  | ------------------- | --------------------- |
  | <a href="https://gitpod.io/#https://github.com/near-examples/guest-book-rust.git"><img src="https://gitpod.io/button/open-in-gitpod.svg" alt="Gitpod에서 열기" /></a>  | 🦀 `https://github.com/near-examples/guest-book-rust` |

  </TabItem>
  <TabItem value="🚀 AssemblyScript" >

  | Gitpod                                                                                                                                                          | 로컬로 복제                                   |
  | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
  | <a href="https://gitpod.io/#https://github.com/near-examples/guest-book.git"><img src="https://gitpod.io/button/open-in-gitpod.svg" alt="Gitpod에서 열기" /></a> | 🚀 `https://github.com/near-examples/guest-book` |

  </TabItem>
</Tabs>

Gitpod를 선택하면 새 브라우저 창이 코드와 함께 자동으로 열리고, 잠시 기다리면 프론트엔드가 팝업됩니다(팝업 창이 차단되지 않았는지 확인).

앱을 로컬에서 실행하는 경우, 앱을 복제한 디렉터리를 입력하고 `yarn`으로 의존성을 설치한 뒤 `yarn start`를 입력하여 시작합니다.


```bash
cd guest-book
yarn
yarn deploy
yarn start
```
그러면 컨트랙트가 **컴파일되어** `testnet` 네트워크의 **계정**에 **배포**됩니다. 완료되면 브라우저 창이 열립니다.


---

## 방명록과 상호 작용

![img](/docs/assets/examples/guest-book.png)
*방명록 앱의 프론트엔드*

NEAR 계정으로 로그인하세요. 계정이 없는 경우 즉시 만들 수 있습니다. 로그인하면 방명록에 메시지에 서명할 수 있습니다. 메시지와 함께 돈을 더 보낼 수 있고, 0.01Ⓝ 이상 첨부하면 메시지가 "프리미엄"으로 표시됩니다.


---

## dApp의 구조

이제 dApp이 무엇을 하는지 이해했으므로 그 구조를 자세히 살펴보겠습니다.

1. 프론트엔드 코드는 `/frontend` 폴더에 있습니다.
2. 스마트 컨트랙트 코드는 `/contract` 폴더에 있습니다.

### 컨트랙트
컨트랙트는 `add_message`와 `get_message` 두 가지 메서드가 있습니다.

<CodeTabs>
  <Language value="🌐 JavaScript" language="ts">
    <Github fname="contract.ts" 
            url="https://github.com/near-examples/guest-book-js/blob/master/contract/src/contract.ts"
            start="4" end="24" />
  </Language>
  <Language value="🦀 Rust" language="rust">
    <Github fname="lib.rs"
            url="https://github.com/near-examples/guest-book-rust/blob/main/contract/src/lib.rs"
            start="29" end="50" />
  </Language>
  
</CodeTabs>

### 프론트엔드
프론트엔드는 하나의 HTML 파일(`/index.html`)로 구성되며, REACT를 사용합니다. 구성 요소가 화면에 표시되는 방식을 이해하려면, `/App.js` 및 `/index.js`를 확인하세요.

다음 코드에서 `/assets/js/index.js`를 확인할 수 있습니다.

<CodeTabs>
  <Language value="🌐 JavaScript" language="js">
    <Github fname="index.js"
            url="https://github.com/near-examples/guest-book-rust/blob/main/frontend/index.js"
            start="15" end="25" />
  </Language>
</CodeTabs>

필요한 변수를 설정하고 앱을 시작합니다.

---

## 테스트

스마트 컨트랙트를 작성할 때, 모든 방법을 철저하게 테스트하는 것이 매우 중요합니다. 이 프로젝트에는 단위 및 통합이라는 두 가지 유형의 테스트가 있습니다. 이를 자세히 알아보기 전에 `yarn test` 명령을 통해 dApp에 있는 테스트를 수행하세요.

### 단위 테스트

단위 테스트는 스마트 컨트랙트의 개별 함수를 확인합니다. 현재 Rust에서만 단위 테스트가 구현되어 있습니다.

<CodeTabs>
  <Language value="🦀 Rust" language="rust">
    <Github fname="lib.rs"
            url="https://github.com/near-examples/guest-book-rust/blob/main/contract/src/lib.rs"
            start="63" end="86" />
  </Language>
</CodeTabs>

### 통합 테스트

통합 테스트는 일반적으로 JavaScript로 작성됩니다. 이는 자동으로 컨트랙트를 배포하고 메서드를 실행합니다. 이러한 방식으로 통합 테스트는 현실적인 시나리오에서 컨트랙트와 사용자 간의 상호 작용을 시뮬레이션합니다. `integration-tests/`에서 `hello-near`에 대한 통합 테스트를 찾을 수 있습니다.


<CodeTabs>
  <Language value="🌐 JavaScript" language="js">
    <Github fname="main.ava.ts"
            url="https://github.com/near-examples/guest-book-js/blob/master/integration-tests/src/main.ava.ts"
            start="39" end="59" />
  </Language>
</CodeTabs>
