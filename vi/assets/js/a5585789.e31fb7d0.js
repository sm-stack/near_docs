"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[160],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=s(n),c=r,u=k["".concat(l,".").concat(c)]||k[c]||d[c]||i;return n?a.createElement(u,o(o({ref:t},m),{},{components:n})):a.createElement(u,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=k;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},21191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>c,frontMatter:()=>p,metadata:()=>s,toc:()=>d});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],p={id:"realtime",title:"\uc2e4\uc2dc\uac04 \uc774\ubca4\ud2b8 \ucd94\uc801"},l=void 0,s={unversionedId:"tools/realtime",id:"tools/realtime",title:"\uc2e4\uc2dc\uac04 \uc774\ubca4\ud2b8 \ucd94\uc801",description:"\ud0c8\uc911\uc559\ud654 \uc571\uc744 \uac1c\ubc1c\ud558\ub294 \ub3d9\uc548, \uc2e4\uc2dc\uac04\uc73c\ub85c \ud2b9\uc815 \uc774\ubca4\ud2b8\ub97c \ucd94\uc801\ud558\uace0 \uc2f6\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ud2b9\uc815 NFT \ub9c8\ucf13\ud50c\ub808\uc774\uc2a4\uc5d0\uc11c \ud310\ub9e4\uac00 \ubc1c\uc0dd\ud560 \ub54c\ub9c8\ub2e4 \uc815\ubcf4\ub97c \ubc1b\uace0 \uc2f6\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uac83\uc774 \uac00\ub2a5\ud558\ub824\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \uac83\ub4e4\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.",source:"@site/../docs/4.tools/events.md",sourceDirName:"4.tools",slug:"/tools/realtime",permalink:"/near_docs/vi/tools/realtime",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/4.tools/events.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"9 thg 3, 2023",frontMatter:{id:"realtime",title:"\uc2e4\uc2dc\uac04 \uc774\ubca4\ud2b8 \ucd94\uc801"},sidebar:"\uac1c\ubc1c",previous:{title:"\uc6f9 \ud504\ub860\ud2b8\uc5d4\ub4dc \uad6c\ucd95",permalink:"/near_docs/vi/develop/integrate/frontend"},next:{title:"\ube14\ub85d\uccb4\uc778 \ub370\uc774\ud130 \uc870\ud68c",permalink:"/near_docs/vi/tools/indexer-for-explorer"}},m={},d=[{value:"NEP-297 - \uc774\ubca4\ud2b8",id:"nep-297---\uc774\ubca4\ud2b8",level:2},{value:"\uc774\ubca4\ud2b8 \ub4e3\uae30 (Mainnet)",id:"\uc774\ubca4\ud2b8-\ub4e3\uae30-mainnet",level:2},{value:"NEAR Lake \uc778\ub371\uc11c",id:"near-lake-\uc778\ub371\uc11c",level:2},{value:"\uc791\ub3d9 \ubc29\uc2dd",id:"\uc791\ub3d9-\ubc29\uc2dd",level:3},{value:"\uc790\ub8cc \uad6c\uc870",id:"\uc790\ub8cc-\uad6c\uc870",level:3},{value:"\uc0ac\uc6a9 \ubc29\ubc95",id:"\uc0ac\uc6a9-\ubc29\ubc95",level:3}],k={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\ud0c8\uc911\uc559\ud654 \uc571\uc744 \uac1c\ubc1c\ud558\ub294 \ub3d9\uc548, \uc2e4\uc2dc\uac04\uc73c\ub85c \ud2b9\uc815 \uc774\ubca4\ud2b8\ub97c \ucd94\uc801\ud558\uace0 \uc2f6\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ud2b9\uc815 NFT \ub9c8\ucf13\ud50c\ub808\uc774\uc2a4\uc5d0\uc11c \ud310\ub9e4\uac00 \ubc1c\uc0dd\ud560 \ub54c\ub9c8\ub2e4 \uc815\ubcf4\ub97c \ubc1b\uace0 \uc2f6\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uac83\uc774 \uac00\ub2a5\ud558\ub824\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \uac83\ub4e4\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud588\uc74c\uc744 \uc54c\ub9ac\ub294 \ubc29\ubc95"),(0,i.kt)("li",{parentName:"ol"},"\uc774\ub7ec\ud55c \uc774\ubca4\ud2b8\ub97c \uc2e4\uc2dc\uac04\uc73c\ub85c \ucd94\uc801\ud558\ub294 \ubc29\ubc95")),(0,i.kt)("p",null,"\uc774\ub7ec\ud55c \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 ",(0,i.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/EventsFormat"},"\ud45c\uc900 \uc774\ubca4\ud2b8 \ud615\uc2dd(NEP-297)"),"\uc774 \ub9cc\ub4e4\uc5b4\uc84c\uc2b5\ub2c8\ub2e4. ",(0,i.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/EventsFormat"},"NEP-297"),"\uc740 \ucee8\ud2b8\ub799\ud2b8\uac00 \uc774\ubca4\ud2b8 \ubc1c\uc0dd\uc744 \uc54c\ub824\uc8fc\ub294 \ud45c\uc900\uc5d0 \ub300\ud574 \uc815\uc758\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc774\ubca4\ud2b8\ub294 \uacf5\uac1c\ub418\ubbc0\ub85c, \uc6f9\uc18c\ucf13\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc2e4\uc2dc\uac04\uc73c\ub85c \uc774\ubca4\ud2b8\ub97c \ucd94\uc801\ud558\ub294 \uc11c\ube44\uc2a4\ub97c \uad6c\ucd95\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"nep-297---\uc774\ubca4\ud2b8"},"NEP-297 - \uc774\ubca4\ud2b8"),(0,i.kt)("p",null,"NEAR\uc5d0\uc11c\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"Events"),"\ub294 \ucee8\ud2b8\ub799\ud2b8\uc758 \ud45c\uc900 \ub85c\uadf8 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\ub294\ub370, \uc774\ub294 \ubaa8\ub4e0 \ub85c\uadf8\uac00 \ube14\ub85d\uccb4\uc778\uc5d0 \uc601\uc6d0\ud788 \uc800\uc7a5\ub418\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ubc29\uc2dd\uc73c\ub85c, \uc774\ubca4\ud2b8\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"EVENT_JSON:")," \uc811\ub450\uc0ac\ub85c \uc2dc\uc791\ud558\uace0 \ub4a4\uc5d0 \uc720\ud6a8\ud55c JSON \ubb38\uc790\uc5f4 \ud55c \uac1c\uac00 \uc624\ub294 \uc77c\ubc18 \ub85c\uadf8 \ud56d\ubaa9\uacfc \uac19\uc2b5\ub2c8\ub2e4. JSON \ubb38\uc790\uc5f4\uc740 \ub2e4\uc74c\uacfc \uac19\uc740 \uc778\ud130\ud398\uc774\uc2a4\ub85c \uac1d\uccb4\ub97c \ucf54\ub4dc\ud654\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface EventLogData {\n    standard: string, // name of standard, e.g. nep171\n    version: string, // e.g. 1.0.0\n    event: string, // type of the event, e.g. nft_mint\n    data?: unknown, // event data defined in the nep171\n}\n")),(0,i.kt)("p",null,"\uc608\uc81c\ub85c ",(0,i.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/EventsFormat"},"NEP-297 \ud398\uc774\uc9c0"),"\ub97c \ucc38\uc870\ud558\uc138\uc694."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"\ub85c\uadf8\ub97c \ucea1\uccd0\ud560 \ub54c 16kb \ubb38\uc790\uc5f4 \uc81c\ud55c\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\uc774\ubca4\ud2b8-\ub4e3\uae30-mainnet"},"\uc774\ubca4\ud2b8 \ub4e3\uae30 (Mainnet)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"mainnet"),"\uc5d0\uc11c \uc774\ubca4\ud2b8\ub97c \ub4e4\uc73c\ub824\uba74, \uc548\uc804\ud55c \uc6f9\uc18c\ucf13 ",(0,i.kt)("inlineCode",{parentName:"p"},"wss://events.near.stream/ws"),"\uc5d0 \uc5f0\uacb0\ud558\uae30\ub9cc \ud558\uba74 \ub429\ub2c8\ub2e4. ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"testnet"),"\uc5d0 \ub300\ud55c")," \uc6f9\uc18c\ucf13\uc740 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uccab \ubc88\uc9f8 \uba54\uc2dc\uc9c0\ub85c, \ud544\ud130\ub9c1\ud558\ub824\ub294 \uc774\ubca4\ud2b8 \uc720\ud615\uacfc \ud544\uc694\ud55c \uacbd\uc6b0 \uc81c\ud55c \uc0ac\ud56d\uc744 \ub098\ud0c0\ub0b4\ub294 \uac1d\uccb4\ub97c \uc804\ub2ec\ud574\uc57c \ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc544\ub798 \uc608\uc2dc\uc5d0\uc11c\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"nft.nearapps.near")," \uacc4\uc815\uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},"nft_mint")," \uc774\ubca4\ud2b8\ub97c \ud544\ud130\ub9c1\ud569\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  secret: "ohyeahnftsss",\n  filter: [{\n    "account_id": "nft.nearapps.near",\n    "status": "SUCCESS",\n    "event": {\n      "standard": "nep171",\n      "event": "nft_mint",\n    }\n  }],\n  fetch_past_events: 20,\n}\n')),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"testnet"),"\uc5d0 \ub300\ud574 \uad6c\ud604\ub41c \uc6f9\uc18c\ucf13\uc740 \uc5c6\uc9c0\ub9cc, \uc774 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/evgenykuzyakov/indexer-tutorials/tree/master/example-indexer"},"\uc218\uc815\ub41c \uc778\ub371\uc11c"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub97c \uc774\ubca4\ud2b8\ub85c \ucc44\uc6b4 \ub2e4\uc74c, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/evgenykuzyakov/event-api"},"event-api \ud504\ub85c\uc81d\ud2b8"),"\ub97c \ud1b5\ud574 \ud574\ub2f9 \uc774\ubca4\ud2b8\ub4e4\uc744 \uc81c\uacf5\ud558\uba74 \uac01\uc790\ub9cc\uc758 \uc6f9\uc18c\ucf13\uc744 \uc9c1\uc811 \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("admonition",{title:"\ucc38\uc870 \uad6c\ud604",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\ucc38\uc870 \uad6c\ud604\uc774 \ud544\uc694\ud55c \uacbd\uc6b0, NEAR \ub124\ud2b8\uc6cc\ud06c\uc758 \ubaa8\ub4e0 ",(0,i.kt)("inlineCode",{parentName:"p"},"nft_mint")," \ubc0f ",(0,i.kt)("inlineCode",{parentName:"p"},"nft_transfer")," \uc774\ubca4\ud2b8\ub97c \uc218\uc2e0\ud558\ub294 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/evgenykuzyakov/nft-mints"},"Evgeny Kuzyakov\uc758 \ud504\ub85c\uc81d\ud2b8"),"\uac00 \uc788\uc2b5\ub2c8\ub2e4. ")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"near-lake-\uc778\ub371\uc11c"},"NEAR Lake \uc778\ub371\uc11c"),(0,i.kt)("p",null,"NEAR Lake\ub294 \ub124\ud2b8\uc6cc\ud06c\ub97c \uac10\uc2dc\ud558\uace0 \ubaa8\ub4e0 \uc774\ubca4\ud2b8\ub97c AWS S3\uc5d0 JSON \ud30c\uc77c\ub85c \uc800\uc7a5\ud558\uae30 \uc704\ud574 ",(0,i.kt)("a",{parentName:"p",href:"https://near-indexers.io/docs/projects/near-indexer-framework"},"NEAR \uc778\ub371\uc11c \ud504\ub808\uc784\uc6cc\ud06c")," \uc704\uc5d0 \uad6c\ucd95\ub41c \uc778\ub371\uc11c\uc785\ub2c8\ub2e4 ."),(0,i.kt)("admonition",{title:"GitHub \ub808\ud37c\uc9c0\ud1a0\ub9ac",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\uc774 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-lake-indexer/"},"GitHub \ub808\ud37c\uc9c0\ud1a0\ub9ac"),"\uc5d0\uc11c Lake \uc778\ub371\uc11c \uc18c\uc2a4 \ucf54\ub4dc\ub97c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"\uc791\ub3d9-\ubc29\uc2dd"},"\uc791\ub3d9 \ubc29\uc2dd"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://pagoda.co"},"Pagoda Inc."),"\ub294 NEAR Lake \ub178\ub4dc\ub97c \uc2e4\ud589\ud558\uc5ec AWS S3\uc5d0 JSON \ud615\uc2dd\uc73c\ub85c \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud569\ub2c8\ub2e4. \ud2b9\ubcc4\ud55c \uc774\uc720\uac00 \uc5c6\ub294 \ud55c \uc790\uccb4 NEAR Lake\ub97c \uc2e4\ud589\ud560 \ud544\uc694\ub294 \uc5c6\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("p",null,"\ud604\uc7ac \uc0dd\uc131\ub418\uc5b4 \uc788\ub294 AWS S3 \ubc84\ud0b7\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"near-lake-data-testnet")," (",(0,i.kt)("inlineCode",{parentName:"li"},"eu-central-1")," \uc9c0\uc5ed)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"near-lake-data-mainnet")," (",(0,i.kt)("inlineCode",{parentName:"li"},"eu-central-1")," \uc9c0\uc5ed)")),(0,i.kt)("p",null,"\ubaa8\ub4e0 \ubc84\ud0b7\uc740 \uc694\uccad\uc790\uac00 \uc561\uc138\uc2a4\uc5d0 \ub300\ud574 \uc9c0\ubd88\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \uc124\uc815\ub429\ub2c8\ub2e4. \ub204\uad6c\ub098 \uc790\uc2e0\uc758 AWS \uc790\uaca9 \uc99d\uba85\uc73c\ub85c \ubc84\ud0b7\uc5d0 \uc5f0\uacb0\ud558\uc5ec, Amazon\uc744 \ud1b5\ud574 \uc694\uae08\uc744 \uc9c0\ubd88\ud558\uace0 \ubc84\ud0b7\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uc77d\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"\uc790\ub8cc-\uad6c\uc870"},"\uc790\ub8cc \uad6c\uc870"),(0,i.kt)("p",null,"Lake \uc778\ub371\uc11c\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uc790\ub8cc \uad6c\uc870\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    <block_height>/\n      block.json\n      shard_0.json\n      shard_1.json\n      ...\n      shard_N.json\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<block_height>")," \uc55e\uc5d0 0\uc774 \uc788\ub294 12\uc790 \uae38\uc774\uc758 ",(0,i.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/primitive.u64.html"},(0,i.kt)("inlineCode",{parentName:"a"},"u64")),' \ubb38\uc790\uc5f4\uc785\ub2c8\ub2e4 (\uc608: "000042839521"). \ub354 \uc790\uc138\ud788 \uc54c\uace0 \uc2f6\uc73c\uba74, ',(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-lake/issues/23"},"\uc774 \ubb38\uc81c"),"\ub97c \ucc38\uc870\ud558\uc138\uc694."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"block_json")," JSON\uc73c\ub85c \uc9c1\ub82c\ud654\ub41c ",(0,i.kt)("inlineCode",{parentName:"p"},"BlockView")," \uad6c\uc870\uccb4\ub97c \ud3ec\ud568\ud569\ub2c8\ub2e4. ",(0,i.kt)("strong",{parentName:"p"},"\uc8fc\uc758\ud558\uc138\uc694!")," \uc774 \uad6c\uc870\uccb4\ub294 \ud5a5\ud6c4 \ubcc0\uacbd\ub420 \uc218 \uc788\uc73c\ubbc0\ub85c, \ubcc0\uacbd \uc0ac\ud56d\uc774 \uc0dd\uae30\uba74 \uacf5\uc9c0\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"shard_N.json"),"\uc5d0\uc11c, \uc0e4\ub4dc\uc758 \uc778\ub371\uc2a4 \ubc88\ud638\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4. \uc5ec\uae30\uc11c N\uc740 ",(0,i.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/primitive.u64.html"},(0,i.kt)("inlineCode",{parentName:"a"},"u64")),"\ub85c, ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"\ubd80\ud130 \uc2dc\uc791\ud569\ub2c8\ub2e4. \ube14\ub85d\uc5d0\uc11c \uc608\uc0c1\ub418\ub294 \uc0e4\ub4dc \uc218\ub97c \ud655\uc778\ud558\ub824\uba74",(0,i.kt)("inlineCode",{parentName:"p"},".header.chunks_included"),"\uc5d0\uc11c ",(0,i.kt)("inlineCode",{parentName:"p"},"block.json"),"\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"\uc0ac\uc6a9-\ubc29\ubc95"},"\uc0ac\uc6a9 \ubc29\ubc95"),(0,i.kt)("p",null,"\uc6b0\ub9ac\ub294 NEAR Lake \uc790\uccb4\uc5d0 \uc800\uc7a5\ub41c \ub370\uc774\ud130 \uc704\uc5d0 \uc778\ub371\uc11c\ub97c \uc0dd\uc131\ud558\ub294 \uac04\ub2e8\ud558\uace0 \uc9c1\uad00\uc801\uc778 \ubc29\ubc95\uc744 \uc81c\uacf5\ud558\uae30 \uc704\ud574, ",(0,i.kt)("a",{parentName:"p",href:"https://near-indexers.io/docs/projects/near-lake-framework"},"NEAR Lake \ud504\ub808\uc784\uc6cc\ud06c"),"\ub97c \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4."),(0,i.kt)("admonition",{title:"NEAR Lake \ud504\ub808\uc784\uc6cc\ud06c",type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://gov.near.org/t/announcement-near-lake-framework-brand-new-word-in-indexer-building-approach/17668"},"NEAR \uac70\ubc84\ub10c\uc2a4 \ud3ec\ub7fc"),"\uc5d0\uc11c NEAR Lake Framework \ub9b4\ub9ac\uc2a4 \ubc1c\ud45c\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("p",null,"\uac1c\uc694\uc640 \uba87 \uac00\uc9c0 \uc544\uc774\ub514\uc5b4\ub97c \uc81c\uacf5\ud558\uae30 \uc704\ud574, \uac04\ub2e8\ud55c \uc608\uc81c\uc640 \ud568\uaed8 \uc774 \ube44\ub514\uc624 \ud29c\ud1a0\ub9ac\uc5bc\uc744 \uc900\ube44\ud588\uc2b5\ub2c8\ub2e4."),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/GsF7I93K-EQ",title:"NEAR Lake Indexer",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}c.isMDXComponent=!0}}]);