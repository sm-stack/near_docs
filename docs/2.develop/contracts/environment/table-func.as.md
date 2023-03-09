<TableAsFunc>

| 함수 이름               | SDK 메서드                     | 설명                                                            |
| ---------------------- | ------------------------------ | ---------------------------------------------------------------------- |
| SHA 256                | `context.sha256(value)`          | sha256을 사용하여 바이트를 해시합니다.    |
| Keccak 256             | `context.keccak256(value)`         | keccak256을 사용하여 바이트를 해시합니다. |
| Keccak 512             | `context.keccak512(value)`   | keccak512를 사용하여 바이트를 해시합니다. |
| Panic String       | `context.panic(message)`      | UTF-8 인코딩 메시지로 프로그램 실행을 종료합니다.  |
| Log String      | `context.log_utf8(message)`      | 문자열 메시지를 기록합니다. 이 메시지는 체인에 저장됩니다. |
| Validator Stake | `context.validator_stake(account_id)` | 주어진 계정에 대해 현재 지분을 반환합니다. 계정이 밸리데이터가 아닌 경우 0을 반환합니다. |
| Validator Total Stake | `context.validator_total_stake()` | 현재 에포크에서 밸리데이터의 총 지분 값을 반환합니다. |
| Account ID Validation | `context.isValidAccountID(account_id)` | `accountId` 문자열을 검증합니다. |

</TableAsFunc>