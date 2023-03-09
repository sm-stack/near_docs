<TableRsFunc>

| 함수 이름          | SDK 메서드                      | 설명                                                          |
| ---------------------- | ------------------------------- | ---------------------------------------------------------------------- |
| SHA 256                | `env::sha256(value)` | sha256을 사용하여 바이트를 해시합니다.                                   |
| Keccak 256             | `env::keccak256(value)`     | keccak256을 사용하여 바이트를 해시합니다.                                     |
| Keccak 512             | `env::keccak512(value)`      | keccak512를 사용하여 바이트를 해시합니다. |
| SHA 256 (Array)        | `env::sha256_array(value)`       | SHA-256 해시 함수를 사용하여 바이트를 해시합니다. 32바이트 해시를 반환합니다. |
| Keccak 256 (Array)     | `env::keccak256_array(value)`    | Keccak-256 해시 함수를 사용하여 바이트를 해시합니다. 32바이트 해시를 반환합니다. |
| Keccak 512 (Array)     | `env::keccak512_array(value)`      | Keccak-512 해시 함수를 사용하여 바이트를 해시합니다. 64바이트 해시를 반환합니다. |
| RIPEMD 160 (Array)     | `env::ripemd160_array(value)`    | RIPEMD-160 해시 함수를 사용하여 바이트를 해시합니다. 20바이트 해시를 반환합니다.|
| EC Recover             | `env::ecrecover(hash, signature, v, malleability_flag)`           | 32바이트 메시지 `hash` 및 해당 `signature`, 그리고 복구 바이트 `v`와 함께 ECDSA 서명자 주소를 복구합니다. 일반적으로 트랜잭션에만 이상적인 서명의 유연성을 확인하기 위해 추가 플래그를 사용합니다. 복구에 성공한 경우 공개 키를 나타내는 64바이트를 반환합니다. |
| Panic String           | `env::panic_str(message)`            | UTF-8 인코딩 메시지로 프로그램 실행을 종료합니다. |
| Log String             | `env::log_str(message)`          | 문자열 메시지를 기록합니다. 이 메시지는 체인에 저장됩니다.                          |
| Validator Stake        | `env::validator_stake(account_id)` | 주어진 계정에 대해 현재 지분을 반환합니다. 계정이 밸리데이터가 아닌 경우 0을 반환합니다. |
| Validator Total Stake  | `env::validator_total_stake()` | 현재 에포크에서 밸리데이터의 총 지분을 반환합니다. |

</TableRsFunc>