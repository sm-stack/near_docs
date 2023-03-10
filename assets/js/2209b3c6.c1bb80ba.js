"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5320],{90346:(e,t,a)=>{a.d(t,{Ey:()=>d,O2:()=>u,SQ:()=>m});var n=a(67294),l=a(65488),r=a(85162),o=a(1841),i=a.n(o),s=a(95665),p=a.n(s);function u(e){var t=e.children;return Array.isArray(t)||(t=[t]),n.createElement(l.Z,{className:"language-tabs",groupId:"code-tabs"},t.map((function(e,t){return n.createElement(r.Z,{value:e.props.value,label:e.props.value},e)})))}function m(e){var t=e.children,a=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var a=e.props,l=a.children,r=a.url,o=a.start,s=a.end,p=a.fname;if("Github"==e.props.mdxType)return d({url:r,start:o,end:s,language:t,fname:p});if("CodeBlock"==e.props.mdxType)return n.createElement(i(),{fname:p,language:t},l);return e}(e,a)})),1==t.length?n.createElement(r.Z,{value:0,label:t[0].props.fname},t[0]):n.createElement(l.Z,{className:"file-tabs"},t.map((function(e,t){return n.createElement(r.Z,{value:t,label:e.props.fname},e)})))}function d(e){var t=e.url,a=e.start,l=e.end,r=e.language,o=e.fname,i=t+"#";return a&&l&&(i+="L"+a+"-L"+l+"#"),n.createElement(p(),{language:r,fname:o},i)}},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),l=a(86010);const r="tabItem_Ymn6";function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(87462),l=a(67294),r=a(86010),o=a(72389),i=a(67392),s=a(7094),p=a(12466);const u="tabList__CuJ",m="tabItem_LNqP";function d(e){var t,a,o=e.lazy,d=e.block,c=e.defaultValue,k=e.values,h=e.groupId,g=e.className,N=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=k?k:N.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,i.l)(b,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===c?c:null!=(t=null!=c?c:null==(a=N.find((function(e){return e.props.default})))?void 0:a.props.value)?t:N[0].props.value;if(null!==v&&!b.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.U)(),j=y.tabGroupChoices,w=y.setTabGroupChoices,x=(0,l.useState)(v),C=x[0],E=x[1],T=[],A=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var S=j[h];null!=S&&S!==C&&b.some((function(e){return e.value===S}))&&E(S)}var R=function(e){var t=e.currentTarget,a=T.indexOf(t),n=b[a].value;n!==C&&(A(t),E(n),null!=h&&w(h,String(n)))},L=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,l=T.indexOf(e.currentTarget)+1;a=null!=(n=T[l])?n:T[0];break;case"ArrowLeft":var r,o=T.indexOf(e.currentTarget)-1;a=null!=(r=T[o])?r:T[T.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},g)},b.map((function(e){var t=e.value,a=e.label,o=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return T.push(e)},onKeyDown:L,onFocus:R,onClick:R},o,{className:(0,r.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),o?(0,l.cloneElement)(N.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},N.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function c(e){var t=(0,o.Z)();return l.createElement(d,(0,n.Z)({key:String(t)},e))}},21690:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),o=a(90346),i=(a(65488),a(85162),["components"]),s={id:"frontend",title:"\uc6f9 \ud504\ub860\ud2b8\uc5d4\ub4dc \uad6c\ucd95"},p=void 0,u={unversionedId:"develop/integrate/frontend",id:"develop/integrate/frontend",title:"\uc6f9 \ud504\ub860\ud2b8\uc5d4\ub4dc \uad6c\ucd95",description:"",source:"@site/../docs/2.develop/integrate/frontend.md",sourceDirName:"2.develop/integrate",slug:"/develop/integrate/frontend",permalink:"/near_docs/develop/integrate/frontend",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/integrate/frontend.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"Mar 9, 2023",frontMatter:{id:"frontend",title:"\uc6f9 \ud504\ub860\ud2b8\uc5d4\ub4dc \uad6c\ucd95"},sidebar:"\uac1c\ubc1c",previous:{title:"\ubc84\uadf8 \ubc14\uc6b4\ud2f0 \ud504\ub85c\uadf8\ub7a8",permalink:"/near_docs/develop/contracts/security/bounty"},next:{title:"\uc2e4\uc2dc\uac04 \uc774\ubca4\ud2b8 \ucd94\uc801",permalink:"/near_docs/tools/realtime"}},m={},d=[{value:"NEAR API JS \ubc0f Wallet Selector \uad6c\ud604",id:"near-api-js-\ubc0f-wallet-selector-\uad6c\ud604",level:2},{value:"Wallet \uac1d\uccb4 \uc0dd\uc131",id:"wallet-\uac1d\uccb4-\uc0dd\uc131",level:2},{value:"\uc0ac\uc6a9\uc790 \uc815\uc758 RPC \uc5d4\ub4dc\ud3ec\uc778\ud2b8 \uc124\uc815",id:"\uc0ac\uc6a9\uc790-\uc815\uc758-rpc-\uc5d4\ub4dc\ud3ec\uc778\ud2b8-\uc124\uc815",level:3},{value:"\uc9c0\uac11 \uc2dc\uc791",id:"\uc9c0\uac11-\uc2dc\uc791",level:2},{value:"View \uba54\uc11c\ub4dc \ud638\ucd9c",id:"view-\uba54\uc11c\ub4dc-\ud638\ucd9c",level:2},{value:"\uc0ac\uc6a9\uc790 \ub85c\uadf8\uc778/\ub85c\uadf8\uc544\uc6c3",id:"\uc0ac\uc6a9\uc790-\ub85c\uadf8\uc778\ub85c\uadf8\uc544\uc6c3",level:2},{value:"\ud568\uc218 \ud638\ucd9c \ud0a4",id:"\ud568\uc218-\ud638\ucd9c-\ud0a4",level:3},{value:"\ubcc0\uacbd \uba54\uc11c\ub4dc \ud638\ucd9c",id:"\ubcc0\uacbd-\uba54\uc11c\ub4dc-\ud638\ucd9c",level:2},{value:"\uc9c0\uac11 \ub9ac\ub514\ub809\uc158",id:"\uc9c0\uac11-\ub9ac\ub514\ub809\uc158",level:3},{value:"\uc790\ub8cc\ud615 \ud578\ub4e4\ub9c1",id:"\uc790\ub8cc\ud615-\ud578\ub4e4\ub9c1",level:2},{value:"\uc2dc\uac04",id:"\uc2dc\uac04",level:5},{value:"\uc790\uae08",id:"\uc790\uae08",level:5},{value:"NEAR API JS \uc774\uc6a9",id:"near-api-js-\uc774\uc6a9",level:2}],c={toc:d};function k(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ucee8\ud2b8\ub799\ud2b8\uac00 \ubc30\ud3ec\ub418\uba74, \uc6f9 \ud504\ub860\ud2b8\uc5d4\ub4dc\uc5d0\uc11c \ucee8\ud2b8\ub799\ud2b8\uc640 \uc0c1\ud638\uc791\uc6a9\ud558\uac8c \ub420 \uac00\ub2a5\uc131\uc774 \ub192\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud504\ub860\ud2b8\uc5d4\ub4dc\ub97c \ub9cc\ub4e4\uae30 \uc704\ud574\uc120, \ub450 \uac00\uc9c0 \ub3c4\uad6c\ub97c \ud65c\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Wallet Selector"),": \uc0ac\uc6a9\uc790\uac00 dApp\uc5d0\uc11c NEAR \uc9c0\uac11\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"NEAR API JS"),": NEAR RPC\uc640 \uc0c1\ud638 \uc791\uc6a9\ud558\ub294 \ub3c4\uad6c \uc138\ud2b8\uc785\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\uc774\ub7ec\ud55c \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub2e4\uc74c \ud750\ub984\uc744 \uad6c\ud604\ud569\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"wallet selector\ub97c ",(0,r.kt)("strong",{parentName:"li"},"\uc124\uc815\ud569\ub2c8\ub2e4"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\uc2dc\uc791\ud560 \ub54c")," wallet selector\ub97c \ub85c\ub4dc\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"\uc0ac\uc6a9\uc790\uc5d0\uac8c NEAR \uc9c0\uac11\uc744 \uc0ac\uc6a9\ud558\uc5ec ",(0,r.kt)("strong",{parentName:"li"},"\ub85c\uadf8\uc778"),"\ud558\ub3c4\ub85d \uc694\uccad\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"\ucee8\ud2b8\ub799\ud2b8 \ub0b4 ",(0,r.kt)("strong",{parentName:"li"},"\uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4"),".")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"near-api-js-\ubc0f-wallet-selector-\uad6c\ud604"},"NEAR API JS \ubc0f Wallet Selector \uad6c\ud604"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"near-api-js")," \ubc0f ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet-selector"),"\ub97c \uad6c\ud604\ud558\ub824\uba74, \uba3c\uc800 \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc774\ub97c \ucd94\uac00\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"Wallet selector\uc5d0\ub294 \uc120\ud0dd\ud560 \uc218 \uc788\ub294 \uc5ec\ub7ec \uc9c0\uac11 \ud328\ud0a4\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/near/wallet-selector#installation-and-usage"},"\ud574\ub2f9 \uc6f9\uc0ac\uc774\ud2b8"),"\ub97c \ud655\uc778\ud574 \ubcf4\uc138\uc694."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install \\\n  near-api-js@^0.44.2 \\\n  @near-wallet-selector/core \\\n  @near-wallet-selector/my-near-wallet \\\n  @near-wallet-selector/ledger\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\uc77c\ubc18 HTML\uc5d0\uc11c\uc758 \uc0ac\uc6a9"),(0,r.kt)("p",null,"HTML \ub0b4 \uc2a4\ud06c\ub9bd\ud2b8 \ud0dc\uadf8\ub85c ",(0,r.kt)("inlineCode",{parentName:"p"},"near-api-js"),"\ub97c \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<script src="https://cdn.jsdelivr.net/npm/near-api-js@0.44.2/dist/near-api-js.min.js" integrity="sha256-W5o4c5DRZZXMKjuL41jsaoBpE/UHMkrGvIxN9HcjNSY=" crossorigin="anonymous"><\/script>\n'))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"wallet-\uac1d\uccb4-\uc0dd\uc131"},"Wallet \uac1d\uccb4 \uc0dd\uc131"),(0,r.kt)("p",null,"\uc774 \uc608\uc81c\uc5d0\uc11c \uc6b0\ub9ac\ub294 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/near-examples/hello-near-js/blob/master/frontend/near-wallet.js"},(0,r.kt)("inlineCode",{parentName:"a"},"./near-wallet.js"))," \ubaa8\ub4c8\uc744 \uad6c\ud604\ud560 \uac83\uc785\ub2c8\ub2e4. \ub2e8\uc21c\ud654\ub97c \uc704\ud574 ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet selector"),"\ub97c ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet")," \uac1d\uccb4\ub85c \ucd94\uc0c1\ud654\ud558\uc600\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc9c0\uac11\uc744 \ub9cc\ub4dc\ub824\uba74, \ubaa8\ub4c8\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet")," \uac1d\uccb4\ub97c \uac00\uc9c0\uace0 \uc640\uc11c \ucd08\uae30\ud654\ud558\uba74 \ub429\ub2c8\ub2e4. \uc774 ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet"),"\uc740 \ub098\uc911\uc5d0 \uc0ac\uc6a9\uc790\ub85c \ud558\uc5ec\uae08 NEAR \ub0b4 \ubaa8\ub4e0 \ucee8\ud2b8\ub799\ud2b8\ub97c \ud638\ucd9c\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4."),(0,r.kt)(o.O2,{mdxType:"CodeTabs"},(0,r.kt)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",mdxType:"Language"},(0,r.kt)(o.Ey,{fname:"index.js",url:"https://github.com/near-examples/hello-near-js/blob/master/frontend/index.js",start:"2",end:"8",mdxType:"Github"}))),(0,r.kt)("p",null,"\uc9c0\uac11\uc744 \uc778\uc2a4\ud134\uc2a4\ud654\ud560 \ub54c, ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/near_docs/concepts/basics/accounts/access-keys#function-call-keys-function-call-keys"},"\ud568\uc218 \ud638\ucd9c \ud0a4")),"\ub97c \uc0dd\uc131\ud560\uc9c0 \uc5ec\ubd80\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud0a4\ub97c \uc0dd\uc131\ud558\uba74 dApp\uc740 \uc9c0\uc815\ub41c \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\uc790 \ub300\uc2e0 ",(0,r.kt)("strong",{parentName:"p"},"\ub3c8\uc774 \ub4e4\uc9c0 \uc54a\ub294 \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc790\ub3d9\uc73c\ub85c")," \uc11c\uba85 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\uc0ac\uc6a9\uc790-\uc815\uc758-rpc-\uc5d4\ub4dc\ud3ec\uc778\ud2b8-\uc124\uc815"},"\uc0ac\uc6a9\uc790 \uc815\uc758 RPC \uc5d4\ub4dc\ud3ec\uc778\ud2b8 \uc124\uc815"),(0,r.kt)("p",null,"Wallet Selector\uc640 \ud568\uaed8 \uc0ac\uc6a9\uc790 \uc815\uc758 RPC \uc5d4\ub4dc\ud3ec\uc778\ud2b8\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 \uc0ac\uc6a9\uc790 \uc815\uc758 URL\ub85c ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/near/wallet-selector/tree/main/packages/core#options"},"\ub124\ud2b8\uc6cc\ud06c \uc635\uc158")," \uac1d\uccb4\ub97c \uc124\uc815\ud574\uc57c \ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4:"),(0,r.kt)(o.O2,{mdxType:"CodeTabs"},(0,r.kt)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",mdxType:"Language"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},'const CONTRACT_ADDRESS = process.env.CONTRACT_NAME;\n\nconst my_network = {\n    networkId: "my-custom-network",\n    nodeUrl: "https://rpc.custom-rpc.com",\n    helperUrl: "https://helper.custom-helper.com",\n    explorerUrl: "https://custom-explorer.com",\n    indexerUrl: "https://api.custom-indexer.com",\n  };\n\nconst wallet = new Wallet({ createAccessKeyFor: CONTRACT_ADDRESS, network: my_network });\n')))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/near/wallet-selector/blob/main/packages/core/docs/api/selector.md"},"\uc5ec\uae30"),"\uc5d0\uc11c \uc804\uccb4 Wallet Selector API \ucc38\uc870\ub97c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\uc9c0\uac11-\uc2dc\uc791"},"\uc9c0\uac11 \uc2dc\uc791"),(0,r.kt)("p",null,"\uc774 \uc608\uc81c\uc5d0\uc11c\ub294 \ud56d\uc0c1 \uc0ac\uc6a9\uc790\uac00 \ub85c\uadf8\uc778\ud588\ub294\uc9c0 \ud655\uc778\ud558\uace0 \uc870\uce58\ub97c \ucde8\ud558\ub294 \uac83\uc73c\ub85c \uc2dc\uc791\ud558\ub294 \uac04\ub2e8\ud55c \ud750\ub984\uc744 \uad6c\ud604\ud569\ub2c8\ub2e4. \uc608\uc81c\uc640 \ub3d9\uc77c\ud55c \uc791\uc5c5\uc744 \uc218\ud589\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ub97c \uc704\ud574, ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet.startUp()")," \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\ub294 \ud568\uc218\ub85c ",(0,r.kt)("inlineCode",{parentName:"p"},"window.onload")," \uba54\uc11c\ub4dc\ub97c \uc7ac\uc815\uc758\ud569\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\uac00 \uc774\ubbf8 \ub85c\uadf8\uc778\ud55c \uacbd\uc6b0\uc5d0 \ud574\ub2f9 \uba54\uc11c\ub4dc\uac00 \ubc18\ud658\ub429\ub2c8\ub2e4."),(0,r.kt)(o.O2,{mdxType:"CodeTabs"},(0,r.kt)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",mdxType:"Language"},(0,r.kt)(o.Ey,{fname:"index.js",url:"https://github.com/near-examples/hello-near-js/blob/master/frontend/index.js",start:"10",end:"21",mdxType:"Github"}),(0,r.kt)(o.Ey,{fname:"near-wallet.js",url:"https://github.com/near-examples/hello-near-js/blob/master/frontend/near-wallet.js",start:"36",end:"52",mdxType:"Github"}))),(0,r.kt)("p",null,"\uc2e4\uc81c\ub85c \ub0b4\ubd80\uc5d0\uc11c(",(0,r.kt)("inlineCode",{parentName:"p"},"near-wallet")," \ud0ed \ucc38\uc870) wallet selector\ub97c \uc124\uc815\ud558\uace0 \uc0ac\uc6a9\uc790\uac00 \uc774\ubbf8 \ub85c\uadf8\uc778\ud588\ub294\uc9c0 \ubb3b\ub294 \uac83\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"view-\uba54\uc11c\ub4dc-\ud638\ucd9c"},"View \uba54\uc11c\ub4dc \ud638\ucd9c"),(0,r.kt)("p",null,"\uc9c0\uac11\uc774 \uac00\ub3d9\ub418\uba74 View \uba54\uc11c\ub4dc, \uc989 \uc77d\uae30 \uc804\uc6a9 \uc791\uc5c5\uc744 \uc218\ud589\ud558\ub294 \uba54\uc11c\ub4dc \ud638\ucd9c\uc744 \uc2dc\uc791\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc77d\uae30 \uc804\uc6a9 \ud2b9\uc131\uc73c\ub85c \uc778\ud574 View \uba54\uc11c\ub4dc\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\uc790\uc720\ub86d\uac8c")," \ud638\ucd9c\ud560 \uc218 \uc788\uc73c\uba70, \uc0ac\uc6a9\uc790\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\ub85c\uadf8\uc778"),"\ub418\uc5b4 \uc788\uc744 ",(0,r.kt)("strong",{parentName:"p"},"\ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4"),"."),(0,r.kt)(o.O2,{mdxType:"CodeTabs"},(0,r.kt)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",mdxType:"Language"},(0,r.kt)(o.Ey,{fname:"index.js",url:"https://github.com/near-examples/hello-near-js/blob/master/frontend/index.js",start:"46",end:"46",mdxType:"Github"}),(0,r.kt)(o.Ey,{fname:"near-wallet.js",url:"https://github.com/near-examples/hello-near-js/blob/master/frontend/near-wallet.js",start:"68",end:"81",mdxType:"Github"}))),(0,r.kt)("p",null,"\uc704\uc758 \uc2a4\ub2c8\ud3ab\uc740 View \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \uc2e4\uc81c\ub85c \ub0b4\ubd80\uc5d0\uc11c \ubc1c\uc0dd\ud558\ub294 \uc791\uc5c5\uc744 \ubcf4\ub824\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"near-wallet")," \ud0ed\uc73c\ub85c \uc804\ud658\ud558\uc138\uc694. \uc2e4\uc81c\ub85c ",(0,r.kt)("inlineCode",{parentName:"p"},"near-api-js"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec RPC\ub97c ",(0,r.kt)("strong",{parentName:"p"},"\uc9c1\uc811 \ud638\ucd9c"),"\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"View \uba54\uc11c\ub4dc \uc2e4\ud589\uc5d0\ub294 \uae30\ubcf8\uc801\uc73c\ub85c 200 TGAS\uac00 \ub4ed\ub2c8\ub2e4.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\uc0ac\uc6a9\uc790-\ub85c\uadf8\uc778\ub85c\uadf8\uc544\uc6c3"},"\uc0ac\uc6a9\uc790 \ub85c\uadf8\uc778/\ub85c\uadf8\uc544\uc6c3"),(0,r.kt)("p",null,"Non-View \uba54\uc11c\ub4dc\uc640 \uc0c1\ud638 \uc791\uc6a9\ud558\ub824\uba74, \uc0ac\uc6a9\uc790\ub294 \uba3c\uc800 NEAR \uc9c0\uac11\uc744 \uc0ac\uc6a9\ud558\uc5ec \ub85c\uadf8\uc778\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub85c\uadf8\uc778\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet")," \uac1d\uccb4\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"signIn"),"\uc744 \uc694\uccad\ud558\ub294 \uac83\ub9cc\ud07c \uac04\ub2e8\ud558\uba70, \ub85c\uadf8\uc544\uc6c3\uc5d0\ub3c4 \ub3d9\uc77c\ud558\uac8c \uac04\ub2e8\ud569\ub2c8\ub2e4."),(0,r.kt)(o.O2,{mdxType:"CodeTabs"},(0,r.kt)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",mdxType:"Language"},(0,r.kt)(o.Ey,{fname:"index.js",url:"https://github.com/near-examples/hello-near-js/blob/master/frontend/index.js",start:"25",end:"26",mdxType:"Github"}),(0,r.kt)(o.Ey,{fname:"near-wallet.js",url:"https://github.com/near-examples/hello-near-js/blob/master/frontend/near-wallet.js",start:"54",end:"66",mdxType:"Github"}))),(0,r.kt)("p",null,"\uc0ac\uc6a9\uc790\uac00 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uba74, \uc9c0\uac11\uc744 \uc120\ud0dd\ud558\uace0 \ub85c\uadf8\uc778\ud558\ub294 \ub370 \uc9c0\uac11\uc744 \uc0ac\uc6a9\ud558\ub77c\ub294 \uba54\uc2dc\uc9c0\uac00 \ud45c\uc2dc\ub429\ub2c8\ub2e4."),(0,r.kt)("hr",{class:"subsection"}),(0,r.kt)("h3",{id:"\ud568\uc218-\ud638\ucd9c-\ud0a4"},"\ud568\uc218 \ud638\ucd9c \ud0a4"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"createAccessKeyFor")," \ub9e4\uac1c\ubcc0\uc218\uc5d0 \ub300\ud574 \uacc4\uc815\uc744 \uc804\ub2ec\ud574 ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet"),"\uc744 \uc778\uc2a4\ud134\uc2a4\ud654\ud55c \uacbd\uc6b0, \uc9c0\uac11\uc740 ",(0,r.kt)("a",{parentName:"p",href:"/near_docs/concepts/basics/accounts/access-keys#function-call-keys-function-call-keys"},"\ud568\uc218 \ud638\ucd9c \ud0a4"),"\ub97c \uc0dd\uc131\ud558\uc5ec \uc6f9\uc758 \ub85c\uceec \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,r.kt)(o.O2,{mdxType:"CodeTabs"},(0,r.kt)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",mdxType:"Language"},(0,r.kt)(o.Ey,{fname:"index.js",url:"https://github.com/near-examples/hello-near-js/blob/master/frontend/index.js",start:"8",end:"8",mdxType:"Github"}))),(0,r.kt)("p",null,"\uae30\ubcf8\uc801\uc73c\ub85c, \uc774\ub7ec\ud55c \ud0a4\ub97c \uc0ac\uc6a9\ud558\uba74 \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc11c\uba85\ud558\ub77c\ub294 \uba54\uc138\uc9c0\ub97c \ud45c\uc2dc\ud558\uc9c0 \uc54a\uc544\ub3c4 ",(0,r.kt)("strong",{parentName:"p"},"\uc9c0\uc815\ub41c")," \ucee8\ud2b8\ub799\ud2b8 \uc5d0\uc11c \ucd5c\ub300 ",(0,r.kt)("inlineCode",{parentName:"p"},"0.25\u24c3"),"\uc758 \uac00\uc2a4\ub97c \uc18c\ubaa8\ud558\ub294 \ud638\ucd9c \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ubc18\ub300\ub85c, \ub9cc\uc57d \uc561\uc138\uc2a4 \ud0a4\ub97c \uc0dd\uc131\ud558\uc9c0 \uc54a\ub294\ub2e4\uba74, \uc0ac\uc6a9\uc790\ub294 \ubaa8\ub4e0 \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc11c\uba85\ud558\ub77c\ub294 \uba54\uc2dc\uc9c0\ub97c \ubc1b\uac8c \ub429\ub2c8\ub2e4(",(0,r.kt)("inlineCode",{parentName:"p"},"View \uba54\uc11c\ub4dc"),"\ub294 \ud56d\uc0c1 \ubb34\ub8cc\uc774\ubbc0\ub85c \uc774\uc5d0 \ub300\ud55c \ud638\ucd9c\uc740 \uc81c\uc678)."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\uc774\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\ub3c8\uc774 \ub4e4\uc9c0 \uc54a\ub294")," \uba54\uc11c\ub4dc\uc5d0\ub9cc \uc801\uc6a9\ub41c\ub2e4\ub294 \uc810\uc5d0 \uc720\uc758\ud558\uc138\uc694. \ud638\ucd9c\uc5d0 \ub3c8\uc744 \ucca8\ubd80\ud558\uba74, \uc0ac\uc6a9\uc790\ub294 \ud2b8\ub79c\uc7ad\uc158 \ucee8\ud38c\uc744 \uc704\ud574 ",(0,r.kt)("strong",{parentName:"p"},"\ud56d\uc0c1")," \uc9c0\uac11\uc73c\ub85c \ub9ac\ub514\ub809\uc158\ub429\ub2c8\ub2e4.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\ubcc0\uacbd-\uba54\uc11c\ub4dc-\ud638\ucd9c"},"\ubcc0\uacbd \uba54\uc11c\ub4dc \ud638\ucd9c"),(0,r.kt)("p",null,"\uc0ac\uc6a9\uc790\uac00 \ub85c\uadf8\uc778\ud558\uba74 \ubcc0\uacbd \uba54\uc11c\ub4dc \ud638\ucd9c\uc744 \uc2dc\uc791\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud504\ub85c\uadf8\ub798\ubc0d \ubc29\uc2dd\uc73c\ub85c \ubcc0\uacbd \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\ub294 \uac83\uc740 View \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\ub294 \uac83\uacfc \ube44\uc2b7\ud558\uc9c0\ub9cc, \uc774\uc81c \ud638\ucd9c\uc5d0 \ub3c8\uc744 \ucca8\ubd80\ud558\uace0 \uc0ac\uc6a9\ud560 \uac00\uc2a4\uc758 \uc591\uc744 \uc9c0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud638\ucd9c\uc5d0 \ub3c8\uc744 \ucca8\ubd80\ud558\ub3c4\ub85d \uc694\uccad\ud558\uba74, \uc0ac\uc6a9\uc790\uac00 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc218\ub77d\ud558\uae30 \uc704\ud574 NEAR \uc9c0\uac11\uc73c\ub85c \ub9ac\ub514\ub809\uc158\ub41c\ub2e4\ub294 \uc810\uc5d0 \uc720\uc758\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)(o.O2,{mdxType:"CodeTabs"},(0,r.kt)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",mdxType:"Language"},(0,r.kt)(o.Ey,{fname:"index.js",url:"https://github.com/near-examples/hello-near-js/blob/master/frontend/index.js",start:"36",end:"36",mdxType:"Github"}),(0,r.kt)(o.Ey,{fname:"near-wallet.js",url:"https://github.com/near-examples/hello-near-js/blob/master/frontend/near-wallet.js",start:"83",end:"103",mdxType:"Github"}))),(0,r.kt)("p",null,"\ub0b4\ubd80\uc801\uc73c\ub85c(",(0,r.kt)("inlineCode",{parentName:"p"},"near-wallet")," \ud0ed \u200b\u200b\ucc38\uc870), ",(0,r.kt)("strong",{parentName:"p"},"\uc9c0\uac11"),"\uc5d0\uac8c ",(0,r.kt)("strong",{parentName:"p"},"\ud568\uc218 \ud638\ucd9c \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc11c\uba85"),"\ud558\ub3c4\ub85d \uc694\uccad\ud558\uace0 \uc788\uc74c\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\ubaa8\ub4e0")," \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uba54\uc18c\ub4dc\ub97c \ud638\ucd9c\ud560 \ub54c ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet"),"\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc74c\uc744 \uae30\uc5b5\ud558\uc138\uc694. \ud568\uc218 \ud0a4 \uc0dd\uc131\uc744 \uc694\uccad\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0, \uc0ac\uc6a9\uc790\uc5d0\uac8c\ub294 \ud2b8\ub79c\uc7ad\uc158\uc744 \ud655\uc778\ud558\ub77c\ub294 \uba54\uc2dc\uc9c0\ub9cc \ud45c\uc2dc\ub429\ub2c8\ub2e4.")),(0,r.kt)("hr",{class:"subsection"}),(0,r.kt)("h3",{id:"\uc9c0\uac11-\ub9ac\ub514\ub809\uc158"},"\uc9c0\uac11 \ub9ac\ub514\ub809\uc158"),(0,r.kt)("p",null,"\ubcc0\uacbd \ud638\ucd9c\uc5d0 \ub3c8\uc744 \ucca8\ubd80\ud558\uba74, \uc0ac\uc6a9\uc790\ub294 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc218\ub77d\ud558\uae30 \uc704\ud574 \uc9c0\uac11\uc73c\ub85c \ub9ac\ub514\ub809\uc158\ub429\ub2c8\ub2e4. \uc218\ub77d \ud6c4 \uc0ac\uc6a9\uc790\ub294 \uadc0\ud558\uc758 \uc6f9\uc0ac\uc774\ud2b8\ub85c \ub3cc\uc544\uac00\uace0, \uacb0\uacfc\ub85c \ub098\uc624\ub294 \ud2b8\ub79c\uc7ad\uc158 \ud574\uc2dc\ub294 URL\uc758 \uc77c\ubd80\ub85c \uc804\ub2ec\ub429\ub2c8\ub2e4(\uc608: ",(0,r.kt)("inlineCode",{parentName:"p"},"your-website.com/?transactionHashes=..."),")."),(0,r.kt)("p",null,"\ud638\ucd9c\ub41c \uba54\uc11c\ub4dc\uac00 \uacb0\uacfc\ub97c \ubc18\ud658\ud55c \uacbd\uc6b0, \ud2b8\ub79c\uc7ad\uc158 \ud574\uc2dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub124\ud2b8\uc6cc\ud06c\uc5d0\uc11c \uacb0\uacfc\ub97c \uac80\uc0c9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,r.kt)("a",{parentName:"p",href:"#%EC%BB%A8%ED%8A%B8%EB%9E%99%ED%8A%B8-%EC%97%B0%EA%B2%B0"},"\uc704\uc758 \uc608\uc2dc"),"\uc5d0\uc11c\uc640 \uac19\uc774 ",(0,r.kt)("inlineCode",{parentName:"p"},"near")," \uac1d\uccb4\ub97c \ub9cc\ub4e4\uc5c8\ub2e4\uace0 \uac00\uc815\ud558\uba74, \ub2e4\uc74c\uacfc \uac19\uc740 \uc791\uc5c5\uc744 \uc218\ud589\ud558\uc5ec \uacb0\uacfc\ub97c \uc870\ud68c\ud569\ub2c8\ub2e4."),(0,r.kt)(o.O2,{mdxType:"CodeTabs"},(0,r.kt)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",mdxType:"Language"},(0,r.kt)(o.Ey,{fname:"index.js",url:"https://github.com/near-examples/donation-js/blob/master/frontend/index.js",start:"74",end:"80",mdxType:"Github"}),(0,r.kt)(o.Ey,{fname:"utils.js",url:"https://github.com/near-examples/donation-js/blob/master/frontend/near-wallet.js",start:"105",end:"113",mdxType:"Github"}))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\uc790\ub8cc\ud615-\ud578\ub4e4\ub9c1"},"\uc790\ub8cc\ud615 \ud578\ub4e4\ub9c1"),(0,r.kt)("p",null,"\ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\uac70\ub098 \uacb0\uacfc\ub97c \uc218\uc2e0\ud560 \ub54c, \ub9e4\uac1c\ubcc0\uc218\ub97c \uc62c\ubc14\ub974\uac8c \uc778\ucf54\ub529/\ub514\ucf54\ub529\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774\ub97c \uc704\ud574\uc11c\ub294 \ucee8\ud2b8\ub799\ud2b8\uac00 \ud0c0\uc784\uc2a4\ud0ec\ud504(u64)\uc640 \uae08\uc561(u128)\uc744 \uc5b4\ub5bb\uac8c \uc778\ucf54\ub529\ud558\ub294\uc9c0 \uc544\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4."),(0,r.kt)("h5",{id:"\uc2dc\uac04"},"\uc2dc\uac04"),(0,r.kt)("p",null,"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \ube14\ub85d \ud0c0\uc784\uc2a4\ud0ec\ud504\ub294 \ub098\ub178\ucd08(\uc608: 19\uc790\ub9ac - ",(0,r.kt)("inlineCode",{parentName:"p"},"1655373910837593990"),")\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc778\ucf54\ub529\ub429\ub2c8\ub2e4. \ubc18\ub300\ub85c Javascript\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"Date.now()"),"\ub294 \ubc00\ub9ac\ucd08 \ub2e8\uc704\uc758 \ud0c0\uc784\uc2a4\ud0ec\ud504\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4(\uc608: 13\uc790\ub9ac - ",(0,r.kt)("inlineCode",{parentName:"p"},"1655373910837"),"). \uc2dc\uac04 \ubcc0\uc218\ub97c \uc801\uc808\ud558\uac8c \ucc98\ub9ac\ud558\ub824\uba74 \ubc00\ub9ac\ucd08\uc640 \ub098\ub178\ucd08 \uac04 \ubcc0\ud658\uc774 \uc62c\ubc14\ub974\uac8c \uc774\ub8e8\uc5b4\uc838\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("h5",{id:"\uc790\uae08"},"\uc790\uae08"),(0,r.kt)("p",null,"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub294 \ud56d\uc0c1 yocto NEAR(1\u24c3 = 10^24yocto) \ub2e8\uc704\ub85c \uc774\uc57c\uae30\ud558\uace0, \ud574\ub2f9 \uac12\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\uc73c\ub85c \uc778\ucf54\ub529\ub429\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"near-api-js.utils.format.parseNearAmount(amount.toString())"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8\ub85c \ub3c8\uc744 \ubcf4\ub0b4\uae30 \uc804\uc5d0 NEAR\ub97c yocto\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"near-api-js.utils.format.formatNearAmount(amount)"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec yoctoNEAR \ud615\ud0dc\uc758 \uc751\ub2f5 \uacb0\uacfc\ub97c NEAR \ub2e8\uc704\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\ucee8\ud2b8\ub799\ud2b8\uac00 ",(0,r.kt)("inlineCode",{parentName:"p"},"U128")," \ub300\uc2e0 ",(0,r.kt)("inlineCode",{parentName:"p"},"Balance"),"\ub97c \ubc18\ud658\ud558\uba74, ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," \ub300\uc2e0 ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),'\uc758 "\uacfc\ud559\uc801 \ud45c\uae30\ubc95"\uc744 \ubc1b\uac8c \ub420 \uac83\uc785\ub2c8\ub2e4(\uc608: ',(0,r.kt)("inlineCode",{parentName:"p"},'"1000000"')," \ub300\uc2e0 ",(0,r.kt)("inlineCode",{parentName:"p"},"10^6"),"). \uc774 \uacbd\uc6b0, \ub2e4\uc74c\uacfc \uac19\uc774 \uac12\uc744 NEAR\ub85c \ubcc0\ud658\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function formatAmount(amount) {\n  let formatted = amount.toLocaleString('fullwide', { useGrouping: false })\n  formatted = utils.format.formatNearAmount(formatted)\n  return Math.floor(formatted * 100) / 100\n}\n"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"near-api-js-\uc774\uc6a9"},"NEAR API JS \uc774\uc6a9"),(0,r.kt)("p",null,"NEAR API JS\ub294 \ub2e8\uc21c\ud788 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\ub294 \uc791\uc5c5\ub9cc\uc73c\ub85c \uc81c\ud55c\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc774\ub294 \uc2e4\uc81c\ub85c \uc6f9 \uc571\uc744 \ud48d\ubd80\ud55c \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc73c\ub85c \ubcc0\ud658\ud558\ub294 \ub370 \uc0ac\uc6a9\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc8fc\uc81c\ub97c \uae4a\uc774 \ub2e4\ub8e8\uc9c0\ub294 \uc54a\uaca0\uc9c0\ub9cc, NEAR API JS\ub97c \uc0ac\uc6a9\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \uc791\uc5c5\ub3c4 \uac00\ub2a5\ud558\ub2e4\ub294 \uc0ac\uc2e4\uc744 \uc544\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/utils/verify-signature.js"},"\uba54\uc138\uc9c0 \uc11c\uba85 \ubc0f \uac80\uc99d")),": \uba54\uc2dc\uc9c0\uac00 \uc0ac\uc6a9\uc790\uc5d0 \uc758\ud574 \uc0dd\uc131\ub418\uc5c8\uc74c\uc744 \uc99d\uba85\ud558\ub294 \ub370 \ub9e4\uc6b0 \uc720\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/near/near-api-js/tree/master/packages/cookbook/transactions/batch-transactions.js"},"\ubc30\uce58 \ud2b8\ub79c\uc7ad\uc158 \ub9cc\ub4e4\uae30")),": \uc5ec\ub7ec ",(0,r.kt)("a",{parentName:"li",href:"/develop/contracts/actions"},"\uc791\uc5c5"),"(\uc608: \uc5ec\ub7ec \uba54\uc11c\ub4dc \ud638\ucd9c)\uc744 \uc5f0\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158 \uc911 \ud558\ub098\uac00 \uc2e4\ud328\ud558\uba74 \ubaa8\ub450 \ub418\ub3cc\ub824\uc9d1\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/near/near-api-js/tree/master/packages/cookbook/accounts/create-testnet-account.js"},"\uacc4\uc815 \uc0dd\uc131")),": \uc0ac\uc6a9\uc790\ub97c \uc704\ud55c \uacc4\uc815\uc744 \ubc30\ud3ec\ud558\uc138\uc694!")),(0,r.kt)("p",null,"\uc6f9\uc571\uc744 \uac15\ud654\ud558\ub294 \ubc29\ubc95\uc744 \uc54c\uc544\ubcf4\ub824\uba74 ",(0,r.kt)("a",{parentName:"p",href:"/tools/near-api-js/cookbook"},"\uc124\uba85\uc11c"),"\ub97c \ud655\uc778\ud558\uc138\uc694 ."))}k.isMDXComponent=!0}}]);