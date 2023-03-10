---
sidebar_position: 2
---

# 재현 가능한 빌드
재현 가능한 빌드를 사용하면, 서로 다른 사람들이 동일한 프로그램을 빌드하고 서로 정확히 동일한 출력을 얻을 수 있습니다. 이는 사용자로 하여금 배포된 컨트랙트가 올바르게 구축되었고 소스 코드와 일치한다는 것을 신뢰할 수 있도록 도와줍니다. 컨트랙트를 검증하기 위해, 사용자는 직접 이를 빌드하고 바이너리가 동일한지 확인할 수 있습니다.

## 문제점
두 개의 서로 다른 시스템에서 컨트랙트를 작성하는 경우, 유사하지만 동일하지 않은 두 개의 바이너리를 얻게 될 가능성이 큽니다. 빌드 아티팩트는 위치, 시간대, 빌드 경로 및 빌드 환경의 기타 여러 요소의 영향을 받을 수 있습니다. Rust 커뮤니티는 이 문제를 오랫동안 다루어 왔지만, [아직 해결되지 않았습니다](https://github.com/rust-lang/rust/labels/A-reproducibility).

## CI 솔루션
우리가 만든 [Contract Builder](https://github.com/near/near-sdk-rs/tree/master/contract-builder)를 사용하여 컨트랙트를 빌드하는 것을 추천드립니다. 여기서는 당신과 당신의 사용자 모두가 사용할 수 있는 통제되고 공유 가능한 환경인 Docker를 사용하고 있습니다. [Docker](https://hub.docker.com/r/nearprotocol/contract-builder) 이미지는 여기에서 사용할 수 있습니다. 여기에 내장된 컨트랙트는 다른 시스템에 구축된 경우에도 동일한 바이너리를 생성합니다.