---
id: welcome
title: Welcome to NEAR
hide_table_of_contents: true
---
import {FeatureList, Column, Feature} from "@site/components/featurelist"
import ContactUs from '@site/components/ContactUs.mdx';

환영합니다! 이것은 NEAR 내 모든 문서의 출발점입니다.

<div class="container">
  <div class="row">
    <div class="col col--6">
      <a href="/concepts/welcome">
        <div class="card">
          <div class="card__image">
            <img src={require("@site/static/docs/assets/welcome-pages/protocol.png").default} alt="Learn" />
          </div>
          <div class="card__body">
            <h3>NEAR 이해하기</h3>
            NEAR가 무엇이고, NEAR를 기반으로 구축해야 하는 이유에 대해 알아보세요.
          </div>
        </div>
      </a>
    </div>
    <div class="col col--6">
      <a href="/develop/welcome">
        <div class="card">
          <div class="card__image">
            <img src={require("@site/static/docs/assets/welcome-pages/examples.png").default} alt="Develop" />
          </div>
          <div class="card__body">
            <h3>개발자 문서</h3>
              컨트랙트를 만들고 Web3의 힘을 발휘하는 방법에 대해 알아보세요.
          </div>
        </div>
      </a>
    </div>
  </div>
</div>

<hr class="subsection" />

<h1 class="text-center big-title" > 주제별 문서 찾아보기 </h1>
<FeatureList>
  <Column title="NEAR 이해하기" size="3">
    <Feature url="/concepts/basics/protocol" title="NEAR란 무엇인가요?" subtitle="NEAR 기본 사항에 대해 알아보세요" image="near-logo.png" />
    <Feature url="/concepts/basics/accounts/account-id" title="명명된 계정" subtitle="NEAR는 사람이 읽을 수 있는 계정을 사용합니다." image="user.png" />
    <Feature url="/concepts/basics/accounts/access-keys" title="다중 액세스 키" subtitle="더 많은 키는 더 많은 보안을 의미합니다." image="key.png" />
    <Feature url="/concepts/basics/accounts/smartcontract" title="스마트 컨트랙트" subtitle="컨트랙트 기술에 대해 알아보세요." image="contract.png" />
    <Feature url="/concepts/basics/tokens" title="토큰" subtitle="NEAR 토큰에 대해 알아보세요." image="ft.png" />
    <Feature url="/concepts/basics/transactions/overview" title="트랜잭션" subtitle="빠르고 저렴합니다." image="transaction.png" />
    <Feature url="/concepts/basics/validators" title="밸리데이터" subtitle="네트워크를 안전하게 유지하는 방법에 대해 알아보세요." image="validation.png" />
  </Column>
  <Column title="개발자 문서" size="3">
    <Feature url="/develop/quickstart-guide" title="빠른 시작" subtitle="첫번째 dApp 스핀업" image="quickstart.png" />
    <Feature url="/tutorials/welcome" title="튜토리얼 & 예제" subtitle="예제 라이브러리들을 확인해보세요." image="tutorials.png" />
    <Feature url="/develop/contracts/introduction" title="컨트랙트 구축" subtitle="스마트 컨트랙트 작성 방법에 대해 알아보세요." image="smartcontract.png" />
    <Feature url="/develop/testing/introduction" title="컨트랙트 테스트" subtitle="단위 및 통합 테스트를 작성해보세요." image="test.png" />
    <Feature url="/develop/integrate/frontend" title="웹 프론트엔드 구축" subtitle="웹 dApp을 만드는 방법에 대해 알아보세요." image="frontend.png" />
    <Feature url="/tools/realtime" title="앱 모니터링" subtitle="블록체인을 추적하는 방법에 대해 알아보세요." image="monitor.png" />
  </Column>
  <Column title="개발자 도구" size="3">
    <Feature url="/sdk/js/introduction" title="JavaScript SDK" subtitle="JavaScript로 컨트랙트를 작성하세요." image="smartcontract-js.png" />
    <Feature url="/sdk/rs/introduction" title="Rust SDK" subtitle="Rust로 컨트랙트를 작성하세요." image="smartcontract-rust.png" />
    <Feature url="/tools/near-cli" title="NEAR CLI" subtitle="터미널에서 NEAR를 사용하세요" image="near-cli.png" />
    <Feature url="/tools/near-api-js/quick-reference" title="NEAR API JS" subtitle="JS를 통해 NEAR와 상호 작용하세요." image="near-api-js.png" />
    <Feature url="/api/rpc/introduction" title="RPC API" subtitle="NEAR RPC API와 상호 작용하세요" image="rpc.png" />
    <Feature url="/concepts/advanced/indexers" title="블록체인 데이터 인덱싱" subtitle="컨트랙트에 대한 사용 정보를 조회하세요." image="blocks.png" />
  </Column>
  <Column title="예제 & 튜토리얼" size="3">
    <Feature url="/develop/relevant-contracts/ft" title="대체 가능 토큰" subtitle="FT를 사용하고 만드는 방법에 대해 배워보세요." image="ft.png" />
    <Feature url="/develop/relevant-contracts/nft" title="대체 불가능 토큰" subtitle="NFT 스페이스에 참여해보세요." image="nft.png" />
    <Feature url="/develop/relevant-contracts/dao" title="자율 조직" subtitle="DAO를 이해해보세요." image="dao.png" />
    <Feature url="/tutorials/indexer/near-lake-state-changes-indexer" title="Lake 인덱서" subtitle="네트워크를 관찰하고, 모든 이벤트에 액세스해보세요." image="experiment.png" />
  </Column>
</FeatureList>

---

## 기타 문서 사이트

다음은 NEAR에 대해 자세히 알아보는 데 도움이 되는 NEAR 생태계 내 더 많은 자료들입니다.

<div class="container">
  <div class="row cards">
    <div class="col col--6">
      <a href="https://awesomenear.com">
        <div class="card">
          <div class="card__image">
            <img src={require("@site/static/docs/assets/welcome-pages/awesomenear.jpg").default} alt="Discover" />
          </div>
          <div class="card__body">
            <h3>
            알아보기
            <svg width="0.8rem" height="0.8rem" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
            </h3>
            Near 생태계 내에서 멋진 앱을 찾아보세요.
          </div>
        </div>
      </a>
    </div>
    <div class="col col--6">
      <a href="https://nomicon.io">
        <div class="card">
          <div class="card__image">
            <img src={require("@site/static/docs/assets/welcome-pages/nomicon.png").default} alt="Nomicon" />
          </div>
          <div class="card__body">
            <h3>
            Nomicon
            <svg width="0.8rem" height="0.8rem" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
            </h3>
              공식 프로토콜 사양을 통해 Near가 어떻게 구현되는지 확인하세요.
          </div>
        </div>
      </a>
    </div>
    <div class="col col--6">
      <a href="https://near-nodes.io">
        <div class="card">
          <div class="card__image">
            <img src={require("@site/static/docs/assets/welcome-pages/validate.png").default} alt="Validate" />
          </div>
          <div class="card__body">
            <h3>
            노드 실행
            <svg width="0.8rem" height="0.8rem" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
            </h3>
            블록체인을 안전하게 유지하는 데 도움을 주는 밸리데이터가 되기 위한 문서입니다.
          </div>
        </div>
      </a>
    </div>
    <div class="col col--6">
      <a href="/concepts/advanced/indexers">
        <div class="card">
          <div class="card__image">
            <img src={require("@site/static/docs/assets/welcome-pages/indexers.png").default} alt="Indexers" />
          </div>
          <div class="card__body">
            <h3>NEAR 인덱서</h3>
              인덱서는 블록체인에서 정보를 추출하는 데 도움을 줍니다.
          </div>
        </div>
      </a>
    </div>
  </div>
</div>

<hr class="subsection" />

<ContactUs />
