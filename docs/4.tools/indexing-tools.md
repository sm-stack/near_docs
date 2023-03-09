---
id: indexing
title: NEAR 내 인덱싱 솔루션
sidebar_label: "🔎 인덱싱 솔루션"
---

# NEAR 내 인덱싱 솔루션

다음은 NEAR 생태계의 인덱서 프로젝트에 대한 간략한 개요입니다.

- [NEAR 인덱서 프레임워크](https://docs.near.org/concepts/advanced/near-indexer-framework): 블록의 "라이브" 스트림을 제공하는 마이크로 프레임워크입니다. 온체인 실시간 "이벤트"를 처리하는 데 유용합니다.

- [익스플로러용 NEAR 인덱서](https://docs.near.org/tools/indexer-for-explorer): 인덱서 마이크로프레임워크 위에 구축된 인덱서입니다. 블록체인에서 **PostgreSQL 데이터베이스**로의 모든 이벤트/데이터를 감시하고 저장합니다. [GitHub 레퍼지토리](https://github.com/near/near-indexer-for-explorer)를 복제해서 고유한 인덱서 솔루션을 만들 수도 있습니다.

- [NEAR Lake 프레임워크](https://docs.near.org/concepts/advanced/near-lake-framework): NEAR Lake의 동반 라이브러리입니다. 이를 통해 **NEAR Lake 데이터 소스**에서 블록 스트림을 감시하는 고유한 인덱서를 구축하고 **해당 데이터를 처리하는 고유한 논리를 생성**할 수 있습니다. 이것은 인덱서 프레임워크 대신 **향후 프로젝트에 사용하기 위한 용도**임을 명심하세요. 왜 더 나은지에 대해서는 [이 문서](/concepts/advanced/near-indexer-framework)를 읽어보세요.


- [NEAR Lake 인덱서](https://docs.near.org/concepts/advanced/near-lake-framework): 인덱서 마이크로프레임워크 위에 구축된 인덱서입니다. 이는 블록체인을 감시하고 블록체인의 모든 이벤트/데이터를 **AWS S3 또는 S3 호환 스토리지에 JSON 파일**로 저장합니다.

- [Pagoda NEAR Lake](https://docs.pagoda.co/near-lake): [Pagoda Inc.](https://pagoda.co)의 완전 관리형 솔루션을 사용하면, 자체 NEAR Lake 노드 및 AWS S3 버킷을 실행할 필요가 없습니다.


- [The Graph](https://thegraph.com/docs/en/cookbook/near/): 블록체인 이벤트를 처리하고 subgraph로 알려진 GraphQL API를 통해 결과 데이터를 쉽게 사용할 수 있도록 하는 개발 도구입니다. [Graph 노드](https://github.com/graphprotocol/graph-node)는 NEAR 이벤트를 처리할 수 있습니다. 즉, NEAR 개발자는 subgraph를 만들어 스마트 컨트랙트를 인덱싱할 수 있습니다.

- [GetBlock](https://getblock.io/explorers/near/blocks/): NEAR 프로토콜을 포함한 여러 블록체인에 대한 간단하고 안정적인 API 액세스를 제공하는 개발자 도구입니다.

- [NearBlocks](https://api.nearblocks.io/api-docs/#/): NearBlocks API로 정확하고 안정적인 dApp을 구축하세요.

- [NEAR Smart Events](https://nearsmart.events/): [METABUILD III](https://devpost.com/software/near-smart-events) 해커톤 에서 시작된 이 도구를 사용하면, 코드를 사용하지 않고도 NEAR 온체인 내 복잡한 이벤트에 반응할 수 있습니다.

- [Octopus 네트워크 NEAR 인덱서](https://github.com/octopus-network/octopus-near-indexer-s3): NEAR Lake 프레임워크 기반의 인덱싱 솔루션입니다.

- [Covalent](https://www.covalenthq.com/docs/networks/aurora/): [Aurora EVM](https://aurora.dev/) 인덱싱을 위해, Covalent는 수십억 개의 Web3 데이터 포인트에 대한 가시성을 제공하는 통합 API를 제공합니다.
