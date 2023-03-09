<TableRs>

| 변수 이름          | SDK 변수                    | 설명                                                            |
| ---------------------- | ------------------------------- | ---------------------------------------------------------------------- |
| Predecessor            | `env::predecessor_account_id()` | 메서드를 호출한 계정 ID                                     |
| Current Account        | `env::current_account_id()`     | 스마트 컨트랙트의 계정 ID                                      |
| Signer                 | `env::signer_account_id()`      | 실행된 트랜잭션에 서명한 계정 ID |
| Attached Deposit       | `env::attached_deposit()`       | Predecessor(전임자)가 호출에 첨부한 NEAR의 양                                   |
| Account Balance        | `env::account_balance()`        | 스마트 컨트랙트의 잔고(첨부 금액 포함)             |
| Prepaid Gas            | `env::prepaid_gas()`            | 실행 가능한 가스 양                                       |
| Timestamp              | `env::block_timestamp()`        | 현재 타임스탬프(1970년 1월 1일 0:00:00 UTC 이후부터의 나노초 수)|
| Current Epoch          | `env::epoch_height()`           | 블록체인의 현재 에포크                                        |
| Block Index            | `env::block_index()`            | 현재 블록 인덱스 (블록 높이)                            |
| Storage Used           | `env::storage_usage()`          | 스마트 컨트랙트에서 사용하고 있는 스토리지(바이트 단위)                            |
| Storage Byte Cost      | `env::storage_byte_cost()`      | 바이트당 현재 스토리지 비용(yoctoNEAR 단위)                      |
| Used Gas               | `env::used_gas()`               | 실행에 사용된 가스의 양                                       |
| Signer Public Key      | `env::signer_account_pk()`      | 발신자 공개 키                                                     |
| Account Locked Balance | `env::account_locked_balance()` | 스마트 컨트랙트 내 잠긴 잔고                           |

</TableRs>