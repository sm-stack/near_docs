---
id: minting-nft-frontend
title: NFT 발행 프론트엔드
sidebar_label: NFT 발행 프론트엔드
---

# NFT 발행 프론트엔드

> 이 튜토리얼에서는 간단한 NFT 프론트엔드를 만들고, 웹 브라우저에서 직접 NEAR 블록체인에 "Go Team" NFT를 생성하는 방법을 배웁니다.

## 앱 개요

이 앱은 매우 간단합니다. 사용자는 로그인하고 <kbd>Mint NFT</kbd> 버튼을 누르기만 하면 됩니다. 사용자가 발행 버튼을 누르면 "Go Team" NFT가 발행되어 NEAR 지갑으로 전송됩니다.


![Front-end](/docs/assets/nfts/nft-mint-frontend.png)

## 스마트 컨트랙트 코드

NFT 스마트 컨트랙트용 코드는 [Zero to Hero NFT 튜토리얼](/tutorials/nfts/introduction)의 [GitHub 레퍼지토리](https://github.com/near-examples/nft-tutorial/tree/main/nft-contract/src)에서 찾을 수 있습니다(`main` 브랜치).

본 애플리케이션에서 사용하는 컨트랙트 메서드는 다음과 같습니다.

- `nft_mint`: 토큰을 발행하는 데 사용되는 함수입니다.
- `check_token`: 토큰의 존재를 확인하기 위해 생성된 커스텀 함수입니다. 이는 사용자당 하나의 토큰만 발행되는 것을 보장하는 데 도움이 됩니다.

## 프론트엔드

컨트랙트의 프론트엔드는 `create-near-app`를 사용하여 구현되었습니다. [React Bootstrap](https://react-bootstrap.github.io/)은 애플리케이션의 스타일링에 사용되었습니다.

React 프론트엔드를 부트스트랩하려면, 터미널에서 다음 명령을 실행합니다.

```sh
npx create-near-app --frontend react --contract rust
```

그런 다음 `main` 브랜치에서 컨트랙트 파일을 가져오기만 하면, 애플리케이션을 실행하는 데 필요한 구조를 갖게 됩니다.

### 시작

애플리케이션의 구성 요소를 탑재할 때, 앱은 대체 불가능 토큰이 있는지 확인합니다.

```js reference
https://github.com/near-examples/nft-tutorial-frontend/blob/master/src/App.js#L24-L46
```

이전에 NFT가 발행되지 않은 경우, 발행 버튼을 사용할 수 있습니다.

### 발행 버튼

다음은 발행 버튼을 누르면 실행되는 함수입니다. 여기에는 사용자에 대한 메타 데이터가 이미 채워져 있습니다.


- `token_id` 는 사용자의 계정 ID로 설정되며,
-  `media` 링크는 IPFS에서 호스팅되는 `goteam-gif.gif`로 하드 코딩됩니다.

```js reference
https://github.com/near-examples/nft-tutorial-frontend/blob/master/src/Components/MintingTool.js#L7-L23
```

`Mint NFT` 버튼을 누른 후, 사용자는 지갑 내 `Collectibles` 탭 아래의 [wallet.testnet.near.org](https://wallet.testnet.near.org/?tab=collectibles)에서 새로 발행된 NFT를 확인할 수 있습니다.

## 끝맺는 말

복제하고 실행할 전체 애플리케이션 레퍼지토리는 [GitHub](https://github.com/near-examples/nft-tutorial-frontend)에서 찾을 수 있습니다. 구성 폴더에서 이 스마트 컨트랙트가 `nft-frontend-simple-mint.blockhead.testnet`에 배포되었음을 확인할 수 있습니다.

```js reference
https://github.com/near-examples/nft-tutorial-frontend/blob/master/src/config.js#L1-L2
```

[여기에서 익스플로러](https://explorer.testnet.near.org/accounts/nft-frontend-simple-mint.blockhead.testnet) 링크를 확인하여 얼마나 많은 사람들이 자신의 Go Team NFT를 생성했는지 확인할 수 있습니다. _**즐거운 민팅 되세요!**_


:::tip
https://github.com/near-examples/nft-tutorial-frontend에서 이 예제를 복제하고 실행합니다.
:::
