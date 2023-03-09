<TableAs>

| 변수 이름         | SDK 변수                   | 설명                                                            |
| ---------------------- | ------------------------------ | ---------------------------------------------------------------------- |
| Predecessor            | `context.predecessor`          | 메서드를 호출한 계정 ID                                     |
| Current Account        | `context.contractName`         | 스마트 컨트랙트의 계정 ID                                     |
| Signer                 | `context.sender`               | 실행된 트랜잭션에 서명한 계정 ID |
| Attached Deposit       | `context.attachedDeposit`      | Predecessor(전임자)가 호출에 첨부한 NEAR의 양                                  |
| Account Balance        | `context.accountBalance`       | 스마트 컨트랙트의 잔고(첨부 금액 포함)            |
| Prepaid Gas            | `context.prepaidGas`           | 실행 가능한 가스 양                                |
| Timestamp              | `context.blockTimestamp`       | 현재 타임스탬프(1970년 1월 1일 0:00:00 UTC 이후부터의 나노초 수) |
| Current Epoch          | `context.epochHeight`          | 블록체인의 현재 에포크                                       |
| Block Index            | `context.blockIndex`           | 현재 블록 인덱스 (블록 높이)                              |
| Storage Used           | `context.storageUsage`         | 스마트 컨트랙트에서 사용하고 있는 스토리지                           |
| Used Gas               | `context.usedGas`              | 실행에 사용된 가스의 양                                       |
| Signer Public Key      | `context.senderPublicKey`      | 발신자 공개 키                                                     |
| Account Locked Balance | `context.accountLockedBalance` | 스마트 컨트랙트 내 잠긴 잔고                         |

</TableAs>