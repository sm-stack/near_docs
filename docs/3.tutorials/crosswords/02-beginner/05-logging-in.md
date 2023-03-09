---
sidebar_position: 5
sidebar_label: "액세스 키 및 로그인 1/2"
title: "액세스 키 및 로그인 다루기"
---

import chapter1Correct from '/docs/assets/crosswords/chapter-1-crossword-correct.gif';
import accessKeys from '/docs/assets/crosswords/keys-cartoon-good--alcantara_gabriel.near--Bagriel_5_10.png';
import functionCallAction from '/docs/assets/crosswords/function-call-action.png';
import tutorialAccessKeys from '/docs/assets/crosswords/access-keys.png';

# NEAR로 로그인

## 이전에는…

이전 챕터에서 우리는 단순히 사용자의 답에 대해 정답 해시를 확인하여 십자말풀이 퍼즐이 해결되었는지 여부를 표시했습니다.

<img src={chapter1Correct} width="600"/><br/><br/>

## 상금 전송 업데이트

이 챕터에서 우리의 스마트 컨트랙트 퍼즐을 가장 먼저 푸는 사람에게 5Ⓝ를 보낼 것입니다. 이를 위해 사용자에게 NEAR 계정이 있어야 하고, 이를 통해 로그인해야 합니다.

:::note 더 나은 온보딩
이 튜토리얼의 뒷부분에서는 사용자에게 NEAR 계정이 필요하지 않습니다.

로그인은 많은 탈중앙화 앱에서 중요하기 때문에, NEAR에서 로그인이 어떻게 수행되는지, 그리고 다른 블록체인과 비교할 때 얼마나 독특한지 보여드리겠습니다.
:::

이 전송은 퍼즐을 푸는 첫 번째 사용자가 정답이 있는 `submit_solution` 메서드를 호출할 때 발생합니다. 해당 함수를 실행하는 동안, 사용자가 정답을 제출했는지 확인한 다음 상금을 양도합니다.

[NEAR 익스플로러](https://explorer.testnet.near.org)에서 이 전송(및 발생한 다른 단계)을 볼 수 있습니다 .

그러나 먼저 NEAR의 가장 흥미롭고 강력한 기능 중 하나인 액세스 키에 대해 이야기해 보겠습니다.

## 액세스 키

아마 당신은 계정 이름이 숫자와 문자로 구성된 긴 문자열인 다른 블록체인에 익숙할 것입니다. NEAR에는 테스트넷에서 `friend.testnet`이나 메인넷에서 `friend.near`와 같이 사람이 읽을 수 있는 형태의 이름을 가진 계정 시스템이 존재합니다.

NEAR에서 계정에 키를 추가(및 제거)할 수 있습니다. 키에는 전체 액세스 키와 함수 호출 액세스 키의 두 가지 유형이 있습니다.

아래 그림은 전체 액세스 키(큰 금색 키)와 두 개의 함수 호출 액세스 키가 있는 키체인을 보여줍니다.

<figure>
    <img src={accessKeys} width="600" alt="A keychain with three keys. A large, gold key represents the full-access keys on NEAR. The two other keys are gray and smaller, and have detachable latches on them. They represent function-call access key. Art created by alcantara_gabriel.near" />
    <figcaption>Art by <a href="https://twitter.com/Bagriel_5_10" target="_blank">alcantara_gabriel.near</a></figcaption>
</figure>

### 전체 액세스 키

전체 액세스 키는 가장 잘 보호해야 하는 키입니다. 이는 당신의 계정에서 모든 자금을 이체하거나, 계정을 삭제하거나, [NEAR에서 다른 Action](03-actions.md)을 수행할 수 있습니다.

[이전 챕터](../01-basics/01-set-up-skeleton.md#creating-a-new-key-on-your-computer)에서 `near login` 명령을 사용했을 때, 이 명령은 NEAR Wallet의 전체 액세스 키에 대해 `AddKey` Action을 사용하도록 요청하여, 컴퓨터에서 로컬로 만든 또 다른 전체 액세스 키를 생성하였습니다. NEAR CLI는 그렇게 만들어진 새 키를 사용하여 배포, 함수 호출 등을 수행합니다.

### 함수 호출 액세스 키

함수 호출 액세스 키는 전체 액세스 키만큼 강력하지 않기 때문에 "제한된 액세스 키"라고도 합니다.

함수 호출 액세스 키는 다음과 같은 것들을 지정합니다.

- 어떤 컨트랙트를 호출할 수 있는지
- 어떤 메서드를 호출할 수 있는지(모든 함수에 대해서도 가능)
- 이러한 함수 호출에 사용할 수 있는 허용량은 얼마인지

이는 `FunctionCall` Action만 수행하도록 허용됩니다.

<img src={functionCallAction} alt="List of NEAR Actions with a highlight on the FunctionCall Action" width="600"/>

### 키가 있는 예시 계정

하나의 전체 액세스 키와 두 개의 함수 호출 액세스 키가 있는 테스트넷 계정을 살펴보겠습니다. 보시다시피 NEAR CLI [명령 `keys`](https://docs.near.org/tools/near-cli#near-keys)를 사용하여 다음과 같은 정보를 출력합니다.


<img src={tutorialAccessKeys} alt="Terminal screen showing the access keys for an account, there is one full-access key and two function-call access keys"/>

각 키에 대해 자세히 살펴보겠습니다.

#### 첫 번째 키:

```js
{
  access_key: {
    nonce: 72772126000000, // Large nonce, huh!
      permission: {
      FunctionCall: {
        allowance: '777000000000000000000000000', // Equivalent to 777 NEAR
          method_names: [], // Any methods can be called
          receiver_id: 'puzzle.testnet' // This key can only call methods on puzzle.testnet
      }
    }
  },
  public_key: 'ed25519:9Hhm77W4KCFzFgK55sZgEMesYRaL8wV1kpqh8qntnSPV'
}
```
위 이미지의 첫 번째 키는 **모든 메서드**에서 스마트 컨트랙트 `puzzle.testnet`을 호출할 수 있는 함수 호출 액세스 키입니다. 만약 호출할 수 있는 메서드를 지정하지 않으면, 모든 메서드를 호출할 수 있습니다. 이를 나타내는 `method_names` 옆에 있는 빈 배열(`[]`)에 주의하세요.

논스에 대해 너무 많이 논의하지는 않겠지만, [replay attacks](https://en.wikipedia.org/wiki/Replay_attack)의 가능성을 방지하기 위해 새로 생성된 키에 대한 논스는 큰 값을 가지고, 블록 높이에 대한 정보와 난수를 포함합니다.

허용량은 yoctoNEAR 단위로, 이 키가 함수 호출 중에 사용할 수 있는 양입니다. 이는 NEAR 전송에 사용될 수 **없습니다**. 함수 호출을 위해 가스를 지불하는 데에서만 사용할 수 있습니다.

이 키에 대한 허용량은 설명 목적으로 의도적으로 큽니다. `777000000000000000000000000` yoctoNEAR는 `777` NEAR로, 액세스 키에 대해 비합리적으로 높은 숫자입니다. 사실 이는 너무 높은 수치라서, 생성 시 컨트랙트 자체의 NEAR 양을 초과했습니다. 이는 계정 잔액을 초과하는 액세스 키를 생성할 수 있으며, 생성 시 허용량을 차감하지 않는다는 것을 보여줍니다.

따라서 이 키는 각 함수 호출에 대한 계정에서 금액을 차감하여 가스에 대한 NEAR의 허용량을 사용하도록 허용됩니다.

#### 두 번째 키:

```js
{
  access_key: {
    nonce: 72777733000000,
    permission: {
      FunctionCall: {
        allowance: '250000000000000000000000', // 0.25 NEAR, which is a typical allowance
        method_names: [ 'foo', 'bar' ], // Can call methods foo and bar only
        receiver_id: 'puzzle.testnet'
      }
    }
  },
  public_key: 'ed25519:CM4JtNo2sL3qPjWFn4MwusMQoZbHUSWaPGCCMrudZdDU'
},
```

이 두 번째 키는 호출할 수 있는 메서드를 지정하고, 허용량이 더 낮습니다.

이 키에 대한 허용량(1/4 NEAR)은 사람이 NEAR 지갑으로 "로그인"할 때의 기본 허용량입니다.

NEAR에서 "로그인"은 일반적으로 이와 같은 키를 계정에 추가하는 것을 의미합니다. 잠시 후에 더 자세히 다루겠습니다.


#### 세 번째 키

```js
{
  access_key: { nonce: 72770704000019, permission: 'FullAccess' },
  public_key: 'ed25519:FG4HjEPsvP5beScC3hkTLztQH8k9Qz9maTaumvPDa5t3'
}
```

세 번째 키는 전체 액세스 키입니다.

이 키는 모든 작업을 수행할 수 있으므로, 우리가 본 함수 호출 액세스 키와 같은 추가 세부 정보나 제한 사항이 없습니다.



## 블록체인에서 "로그인"은 무엇을 의미합니까?

NEAR에서 한 걸음 물러나, web3 지갑을 사용하여 로그인이 작동하는 방식에 대해 광범위하게 이야기해 봅시다.

web3 지갑(예: Ethereum의 MetaMask, Cosmos의 Keplr 또는 NEAR Wallet)은 계정의 개인 키를 저장합니다. 탈중앙화 앱과 상호 작용할 때, 사용자는 일반적으로 지갑을 사용하여 트랜잭션에 서명하고, 처리를 위해 블록체인으로 보냅니다.

그러나, web3 지갑은 모든 종류의 메시지에 서명하는 데 사용할 수 있으며, 이때는 블록체인에 아무 것도 보낼 필요가 없습니다. 이를 "오프라인 서명"이라고도 하며 프로토콜은 때때로 데이터 서명 방법에 대한 표준을 만듭니다.

다른 생태계에서 web3 지갑으로 "로그인"한다는 아이디어는 이 오프라인 서명을 사용합니다. 사용자는 구조화된 메시지에 서명하라는 요청을 받고, 백엔드는 메시지가 지정된 계정에 의해 서명되었음을 확인할 수 있습니다.

NEAR 키는 이러한 방식으로 메시지에 서명하고 확인할 수도 있습니다. 실제로 [`near-api-js` 요리책](https://github.com/near/near-api-js/blob/master/packages/cookbook/utils/verify-signature.js)에 이를 달성하는 방법에 대한 몇 가지 간단한 예가 존재합니다.

이 오프라인 서명 기술에는 잠재적인 단점이 있습니다. 특히 악의적인 당사자가 서명된 메시지를 가로채는 경우입니다. 그들은 이 서명을 백엔드로 보내고, 당신을 대신하여 로그인할 수 있습니다. 이 모든 것이 오프라인에서 이루어지기 때문에, 로그인을 취소하거나 액세스를 제어하는 ​​메커니즘은 온체인에 없습니다. 우리는 서명된 유형 데이터에 대한 web3 지갑을 사용하는 것이 한계에 부딪친다는 것을 금방 알 수 있습니다.

따라서 메시지에 서명하는 것도 좋지만 더 잘할 수 있다면 어떨까요?

NEAR를 사용하면 액세스 키를 활용하여 사용자의 로그인 경험을 개선하고 사용자에게 권한을 돌려줄 수 있습니다.

[방명록 예시 사이트](https://github.com/near-examples/guest-book-js)에 로그인하면 해당 dApp만을 위한 고유 키를 생성하여 내 계정에 추가합니다. 완료되면 직접 키를 제거할 수 있습니다. 누군가 내 키를 제어하고 있다고 의심되는 경우(예를 들어 노트북을 도난당한 경우), 내가 제어할 수 있는 전체 액세스 키가 있는 한 키를 제거할 수 있습니다.

NEAR로 로그인하면 최종 사용자가 자신의 계정과 dApp과 상호 작용하는 방법을 제어할 수 있으며, 이를 프로토콜 수준에서 할 수 있습니다.


---

액세스 키의 개념은 매우 중요하기 때문에 개선된 크로스워드 퍼즐을 위한 코드를 실제로 구현하지 않고 이 주제에 대해 평소보다 더 많은 시간을 할애했습니다.

다음 섹션으로 이동하여 실제로 로그인 버튼을 추가해 보겠습니다.

