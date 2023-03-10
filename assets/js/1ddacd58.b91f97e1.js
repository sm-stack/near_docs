"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8397],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=p(n),d=r,c=k["".concat(s,".").concat(d)]||k[d]||u[d]||l;return n?a.createElement(c,i(i({ref:t},m),{},{components:n})):a.createElement(c,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},41539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={id:"events",title:"\uc774\ubca4\ud2b8",sidebar_label:"\uc774\ubca4\ud2b8"},s=void 0,p={unversionedId:"tutorials/nfts/events",id:"tutorials/nfts/events",title:"\uc774\ubca4\ud2b8",description:"\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c\ub294 \uc774\ubca4\ud2b8 \ud45c\uc900\uacfc \uc774\ub97c \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uad6c\ud604\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4.",source:"@site/../docs/3.tutorials/nfts/7-events.md",sourceDirName:"3.tutorials/nfts",slug:"/tutorials/nfts/events",permalink:"/near_docs/tutorials/nfts/events",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/7-events.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"Mar 9, 2023",sidebarPosition:7,frontMatter:{id:"events",title:"\uc774\ubca4\ud2b8",sidebar_label:"\uc774\ubca4\ud2b8"},sidebar:"\ud29c\ud1a0\ub9ac\uc5bc",previous:{title:"\ub85c\uc5f4\ud2f0",permalink:"/near_docs/tutorials/nfts/royalty"},next:{title:"\ub9c8\ucf13\ud50c\ub808\uc774\uc2a4",permalink:"/near_docs/tutorials/nfts/marketplace"}},m={},u=[{value:"\uc18c\uac1c",id:"\uc18c\uac1c",level:2},{value:"\uc0ac\uc6a9 \uc0ac\ub840 \uc774\ud574\ud558\uae30",id:"understanding-the-use-case",level:2},{value:"\ubb38\uc81c",id:"the-problem",level:3},{value:"\ud574\uacb0\ucc45",id:"the-solution",level:3},{value:"\uc608\uc2dc",id:"examples",level:3},{value:"\uc2dc\ub098\ub9ac\uc624 A - \ub2e8\uc21c\ud55c \ubc1c\ud589",id:"\uc2dc\ub098\ub9ac\uc624-a---\ub2e8\uc21c\ud55c-\ubc1c\ud589",level:4},{value:"\uc2dc\ub098\ub9ac\uc624 B - \uc77c\uad04 \ubc1c\ud589",id:"\uc2dc\ub098\ub9ac\uc624-b---\uc77c\uad04-\ubc1c\ud589",level:4},{value:"\uc2dc\ub098\ub9ac\uc624 C - NFT \uc804\uc1a1",id:"\uc2dc\ub098\ub9ac\uc624-c---nft-\uc804\uc1a1",level:4},{value:"\ucee8\ud2b8\ub799\ud2b8 \uc218\uc815",id:"modifications-to-the-contract",level:2},{value:"\uc774\ubca4\ud2b8 \ud30c\uc77c \uc0dd\uc131",id:"events-rs",level:3},{value:"\ubaa8\ub4c8 \ubc0f \uc0c1\uc218 \ucd94\uac00",id:"lib-rs",level:3},{value:"\ubc1c\ud589\ub41c \ud1a0\ud070 \ub85c\uae45",id:"logging-minted-tokens",level:3},{value:"\uc804\uc1a1 \ub85c\uae45",id:"logging-transfers",level:3},{value:"\ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec",id:"redeploying-contract",level:2},{value:"\ud558\uc704 \uacc4\uc815 \uc0dd\uc131",id:"\ud558\uc704-\uacc4\uc815-\uc0dd\uc131",level:3},{value:"\ucd08\uae30\ud654 \ubc0f \ubc1c\ud589",id:"initialization-and-minting",level:3},{value:"\uc804\uc1a1",id:"transferring",level:3},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2}],k={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c\ub294 ",(0,l.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Event"},"\uc774\ubca4\ud2b8 \ud45c\uc900"),"\uacfc \uc774\ub97c \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uad6c\ud604\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\uc18c\uac1c"},"\uc18c\uac1c"),(0,l.kt)("p",null,"\uc9c0\uae08\ucbe4\uc774\uba74 \ub85c\uc5f4\ud2f0 \uc9c0\uc6d0\uc744 \uc81c\uc678\ud558\uace0\ub294 \uc644\uc804\ud55c NFT \ucee8\ud2b8\ub799\ud2b8\uac00 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4. \uc2dc\uc791\ud558\ub824\uba74 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/near-examples/nft-tutorial-js/"},"GitHub \ub808\ud37c\uc9c0\ud1a0\ub9ac"),"\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"6.royalty")," \ube0c\ub79c\uce58\ub85c \uc804\ud658\ud558\uac70\ub098 \uc774\uc804 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c \uc791\uc5c5\uc744 \uacc4\uc18d\ud558\uc2ed\uc2dc\uc624."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout 6.royalty\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\uc774 ",(0,l.kt)("em",{parentName:"p"},"\uc774\ubca4\ud2b8")," \ud29c\ud1a0\ub9ac\uc5bc\uc758 \uc644\uc131\ub41c \ucf54\ub4dc\ub97c \ubcf4\ub824\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"7.events")," \ube0c\ub79c\uce58\uc5d0\uc11c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("h2",{id:"understanding-the-use-case"},"\uc0ac\uc6a9 \uc0ac\ub840 \uc774\ud574\ud558\uae30"),(0,l.kt)("p",null,"\ub2f9\uc2e0\uc774 \uc18c\uc720\ud55c NFT\ub97c \uc9c0\uac11\uc774 \uc5b4\ub5bb\uac8c \uc54c\uace0 ",(0,l.kt)("a",{parentName:"p",href:"https://wallet.testnet.near.org/?tab=collectibles"},"\uc218\uc9d1\ud488 \ud0ed"),"\uc5d0 \uc5b4\ub5bb\uac8c \ud45c\uc2dc\ud560 \uc218 \uc788\ub294\uc9c0 \uad81\uae08\ud55c \uc801\uc774 \uc788\ub098\uc694? \uc6d0\ub798\ub294 ",(0,l.kt)("a",{parentName:"p",href:"/tools/indexer-for-explorer"},"\uc778\ub371\uc11c"),"\uac00 \uc0ac\uc6a9\ub418\uc5c8\uc73c\uba70, \uacc4\uc815\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"nft_"),"\ub85c \uc2dc\uc791\ud558\ub294 \ubaa8\ub4e0 \ud568\uc218\ub97c \uc218\uc2e0\ud588\uc2b5\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c \uc774\ub7ec\ud55c \ucee8\ud2b8\ub799\ud2b8\ub294 \uadc0\ud558\uc758 \uacc4\uc815\uc5d0\uc11c NFT \ucee8\ud2b8\ub799\ud2b8\uc77c \uac00\ub2a5\uc131\uc774 \uc788\ub294 \uac83\uc73c\ub85c \ud45c\uc2dc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc218\uc9d1\ud488 \ud0ed\uc73c\ub85c \uc774\ub3d9\ud558\uba74, \uc9c0\uac11\uc740 ",(0,l.kt)("a",{parentName:"p",href:"/tutorials/nfts/js/enumeration"},"\uc5f4\uac70 \ud29c\ud1a0\ub9ac\uc5bc"),"\uc5d0\uc11c \ubcf8 ",(0,l.kt)("inlineCode",{parentName:"p"},"nft_tokens_for_owner")," \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc18c\uc720\ud55c NFT \ubaa9\ub85d\uc5d0 \ub300\ud55c \ubaa8\ub4e0 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc870\ud68c\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"the-problem"},"\ubb38\uc81c"),(0,l.kt)("p",null,"\ucee8\ud2b8\ub799\ud2b8\uc5d0 \ud50c\ub798\uadf8\ub97c \uc9c0\uc815\ud558\ub294 \uc774 \ubc29\ubc95\uc740 \uac01\uac01\uc758 NFT \uae30\ubc18 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 NFT\ub97c \ubc1c\ud589\ud558\uac70\ub098 \uc804\uc1a1\ud558\ub294 \uace0\uc720\ud55c \ubc29\ubc95\uc744 \uac00\uc9c8 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0, \uc2e0\ub8b0\ud560 \uc218 \uc5c6\uc5c8\uc2b5\ub2c8\ub2e4. \ub610\ud55c \uc571\uc5d0\uc11c \ubc30\uce58 \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud55c \ubc88\uc5d0 \ub9ce\uc740 \ud1a0\ud070\uc744 \uc804\uc1a1\ud558\uac70\ub098 \ubc1c\ud589\ud558\ub294 \uc77c\ub3c4 \uc790\uc8fc \ubc1c\uc0dd\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"the-solution"},"\ud574\uacb0\ucc45"),(0,l.kt)("p",null,"NFT\uac00 \uc804\uc1a1, \ubc1c\ud589 \ub610\ub294 \uc18c\uac01\ub420 \ub54c\ub9c8\ub2e4 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uac00 \uc774\ubca4\ud2b8\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\ub294 \ud45c\uc900\uc774 \ub3c4\uc785\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc774 \uc774\ubca4\ud2b8\ub294 \ub85c\uadf8 \ud615\uc2dd\uc774\uc5c8\uc2b5\ub2c8\ub2e4. \ucee8\ud2b8\ub799\ud2b8\uac00 \uae30\ub2a5\uc744 \uad6c\ud604\ud558\ub294 \ubc29\ubc95\uc5d0 \uad00\uacc4\uc5c6\uc774, \uc774\uc81c \uc778\ub371\uc11c\ub294 \uc774\ub7ec\ud55c \ud45c\uc900\ud654\ub41c \ub85c\uadf8\ub97c \uc218\uc2e0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ud45c\uc900\uc5d0 \ub530\ub77c, NFT\uac00 \uc804\uc1a1\ub418\uac70\ub098 \ubc1c\ud589\ub420 \ub54c \uc2e4\ud589\ub418\ub294 \ub85c\uae45 \uae30\ub2a5\uc744 \uad6c\ud604\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774 \uacbd\uc6b0 \ucee8\ud2b8\ub799\ud2b8\ub294 \uc18c\uac01\uc744 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc73c\ubbc0\ub85c, \uc9c0\uae08\uc740 \uc774\uc5d0 \ub300\ud574\uc120 \uac71\uc815\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ud45c\uc900\uc740 \ub85c\uadf8\uac00 ",(0,l.kt)("inlineCode",{parentName:"p"},'"EVENT_JSON:"'),"\uc73c\ub85c \uc2dc\uc791\ud574\uc57c \ud568\uc744 \uc815\uc758\ud558\uace0 \uc788\ub2e4\ub294 \uc810\uc774 \uc911\uc694\ud569\ub2c8\ub2e4. \ud55c\ud3b8, \ub85c\uadf8 \uad6c\uc870\uc5d0\ub294 \ud56d\uc0c1 \ub2e4\uc74c 3\uac00\uc9c0\uac00 \ud3ec\ud568\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"standard"),": \ud45c\uc900\uc758 \ud604\uc7ac \uc774\ub984(\uc608: nep171)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"version"),": \uc0ac\uc6a9 \uc911\uc778 \ud45c\uc900 \ubc84\uc804(\uc608: 1.0.0)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"event"),": \ub0b4\ubcf4\ub0b4\ub294 \uc774\ubca4\ud2b8 \ubaa9\ub85d")),(0,l.kt)("p",null,"\uc774\ubca4\ud2b8 \uc778\ud130\ud398\uc774\uc2a4\ub294 \uc804\uc1a1\uc744 \uae30\ub85d\ud558\ub294\uc9c0 \ubc1c\ud589\uc744 \uae30\ub85d\ud558\ub294\uc9c0\uc5d0 \ub530\ub77c \ub2e4\ub985\ub2c8\ub2e4. \ub450 \uc774\ubca4\ud2b8\uc5d0 \ub300\ud55c \uc778\ud130\ud398\uc774\uc2a4\ub294 \uc544\ub798\uc5d0 \uc124\uba85\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\uc804\uc1a1 \uc774\ubca4\ud2b8"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"\uc120\ud0dd \uc0ac\ud56d")," - ",(0,l.kt)("strong",{parentName:"li"},"authorized_id"),": \uc18c\uc720\uc790\ub97c \ub300\uc2e0\ud558\uc5ec \uc804\uc1a1\ud558\ub3c4\ub85d \uc2b9\uc778\ub41c \uacc4\uc815\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"old_owner_id"),": NFT\uc758 \uc774\uc804 \uc18c\uc720\uc790\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"new_owner_id"),": NFT\uac00 \uc804\uc1a1\ub418\ub294 \uc0c8 \uc18c\uc720\uc790\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"token_ids"),": \uc804\uc1a1 \uc911\uc778 NFT \ubaa9\ub85d\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"\uc120\ud0dd \uc0ac\ud56d")," - ",(0,l.kt)("strong",{parentName:"li"},"memo"),": \uc774\ubca4\ud2b8\uc5d0 \ud3ec\ud568\ud560 \uc120\ud0dd\uc801 \uba54\uc2dc\uc9c0\uc785\ub2c8\ub2e4.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\ubc1c\ud589 \uc774\ubca4\ud2b8"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"owner_id"),": NFT\ub97c \ubc1c\ud589\ubc1b\uc740 \uc18c\uc720\uc790\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"token_ids"),": \uc804\uc1a1 \uc911\uc778 NFT \ubaa9\ub85d\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"\uc120\ud0dd \uc0ac\ud56d")," - ",(0,l.kt)("strong",{parentName:"li"},"memo"),": \uc774\ubca4\ud2b8\uc5d0 \ud3ec\ud568\ud560 \uc120\ud0dd\uc801 \uba54\uc2dc\uc9c0\uc785\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"examples"},"\uc608\uc2dc"),(0,l.kt)("p",null,"\ud45c\uc900\uc5d0 \ub300\ud55c \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud574 \uc138 \uac00\uc9c0 \uc2dc\ub098\ub9ac\uc624\ub97c \uc0b4\ud3b4\ubcf4\uace0 \ub85c\uadf8\uac00 \uc5b4\ub5bb\uac8c \ud45c\uc2dc\ub418\ub294\uc9c0 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h4",{id:"\uc2dc\ub098\ub9ac\uc624-a---\ub2e8\uc21c\ud55c-\ubc1c\ud589"},"\uc2dc\ub098\ub9ac\uc624 A - \ub2e8\uc21c\ud55c \ubc1c\ud589"),(0,l.kt)("p",null,"\uc774 \uc2dc\ub098\ub9ac\uc624\uc5d0\uc11c Benji\ub294 \ud1a0\ud070 ID ",(0,l.kt)("inlineCode",{parentName:"p"},'"team-token"'),"\uc744 \uc0ac\uc6a9\ud558\uc5ec Mike\uc5d0\uac8c NFT\ub97c \ubc1c\ud589\ud558\ub824\uace0 \ud558\uace0, \uba54\uc2dc\uc9c0\ub97c \ud3ec\ud568\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub85c\uadf8\ub294 \ub2e4\uc74c\uacfc \uac19\uc544\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'EVENT_JSON:{\n  "standard": "nep171",\n  "version": "1.0.0",\n  "event": "nft_mint",\n  "data": [\n    {"owner_id": "mike.testnet", "token_ids": ["team-token"]}\n  ]\n}\n')),(0,l.kt)("h4",{id:"\uc2dc\ub098\ub9ac\uc624-b---\uc77c\uad04-\ubc1c\ud589"},"\uc2dc\ub098\ub9ac\uc624 B - \uc77c\uad04 \ubc1c\ud589"),(0,l.kt)("p",null,"\uc774 \uc2dc\ub098\ub9ac\uc624\uc5d0\uc11c Benji\ub294 \uc77c\uad04 \ubc1c\ud589\uc744 \uc218\ud589\ud558\ub824\uace0 \ud569\ub2c8\ub2e4. \uadf8\ub294 Mike, Damian, Josh \ubc0f Dorian\uc5d0\uac8c NFT\ub97c \ubc1c\ud589\ud560 \uac83\uc785\ub2c8\ub2e4. Dorian\uc740 \ub450 \uac1c\uc758 NFT\ub97c \ubc1b\uac8c \ub429\ub2c8\ub2e4. \uac01 \ud1a0\ud070 ID ",(0,l.kt)("inlineCode",{parentName:"p"},'"team-token"'),"\uc5d0\ub294 \uc99d\uac00\ud558\ub294 \uc22b\uc790\uac00 \ub530\ub77c\uc635\ub2c8\ub2e4. \ub85c\uadf8\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'EVENT_JSON:{\n  "standard": "nep171",\n  "version": "1.0.0",\n  "event": "nft_mint",\n  "data": [\n    {"owner_id": "mike.testnet", "token_ids": ["team-token0"]},\n    {"owner_id": "damian.testnet", "token_ids": ["team-token1"]},\n    {"owner_id": "josh.testnet", "token_ids": ["team-token2"]}\n    {"owner_id": "dorian.testnet", "token_ids": ["team-token3", "team-token4"]},\n  ]\n}\n')),(0,l.kt)("h4",{id:"\uc2dc\ub098\ub9ac\uc624-c---nft-\uc804\uc1a1"},"\uc2dc\ub098\ub9ac\uc624 C - NFT \uc804\uc1a1"),(0,l.kt)("p",null,"\uc774 \uc2dc\ub098\ub9ac\uc624\uc5d0\uc11c Mike\ub294 \ub450 \ud300 \ud1a0\ud070\uc744 \ubaa8\ub450 Josh\uc5d0\uac8c \uc804\uc1a1\ud569\ub2c8\ub2e4. \ub85c\uadf8\ub294 \ub2e4\uc74c\uacfc \uac19\uc544\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'EVENT_JSON:{\n  "standard": "nep171",\n  "version": "1.0.0",\n  "event": "nft_transfer",\n  "data": [\n    {"old_owner_id": "mike.testnet", "new_owner_id": "josh.testnet", "token_ids": ["team-token", "team-token0"], "memo": "Go Team!"}\n  ]\n}\n')),(0,l.kt)("h2",{id:"modifications-to-the-contract"},"\ucee8\ud2b8\ub799\ud2b8 \uc218\uc815"),(0,l.kt)("p",null,"\uc774 \uc2dc\uc810\uc5d0\uc11c \ucd5c\uc885 \ubaa9\ud45c\uac00 \ubb34\uc5c7\uc778\uc9c0 \uc798 \uc774\ud574\ud558\uace0 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4. \uc2dc\uc791\ud558\uaca0\uc2b5\ub2c8\ub2e4! \ub808\ud37c\uc9c0\ud1a0\ub9ac\ub97c \uc5f4\uc5b4\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"nft-contract/src")," \ub514\ub809\ud1a0\ub9ac \ub0b4 \uc0c8 \ud30c\uc77c ",(0,l.kt)("inlineCode",{parentName:"p"},"events.rs"),"\uc744 \uc0dd\uc131\ud558\uc138\uc694"),(0,l.kt)("h3",{id:"events-rs"},"\uc774\ubca4\ud2b8 \ud30c\uc77c \uc0dd\uc131"),(0,l.kt)("p",null,"\ub2e4\uc74c\uc744 \ud30c\uc77c\uc5d0 \ubcf5\uc0ac\ud569\ub2c8\ub2e4. \uc774\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"EventLog"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"NftMintLog"),", \ubc0f ",(0,l.kt)("inlineCode",{parentName:"p"},"NftTransferLog"),"\uc5d0 \ub300\ud55c \uad6c\uc870\uccb4\uc758 \uac1c\uc694\ub97c \uc124\uba85\ud569\ub2c8\ub2e4. \ub610\ud55c, ",(0,l.kt)("inlineCode",{parentName:"p"},"EVENT_JSON:"),"\uc5d0 \ub300\ud574 ",(0,l.kt)("inlineCode",{parentName:"p"},"EventLog"),"\ub97c \ub85c\uadf8\ud560 \ub54c\ub9c8\ub2e4 \uc811\ub450\uc0ac\uac00 \ubd99\ub3c4\ub85d \ud558\ub294 \ubc29\ubc95\ub3c4 \ucd94\uac00\ud588\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial/blob/7.events/nft-contract/src/events.rs#L1-L79\n")),(0,l.kt)("p",null,"\uc774\ub97c \uc704\ud574\uc11c\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"nft-contract/Cargo.toml")," \ud30c\uc77c\uc5d0 \uc27d\uac8c \ucd94\uac00\ud560 \uc218 \uc788\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"serde_json")," \ud328\ud0a4\uc9c0\uac00 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial/blob/7.events/nft-contract/Cargo.toml#L1-L20\n")),(0,l.kt)("h3",{id:"lib-rs"},"\ubaa8\ub4c8 \ubc0f \uc0c1\uc218 \ucd94\uac00"),(0,l.kt)("p",null,"\uc774\uc81c \uc0c8 \ud30c\uc77c\uc744 \ub9cc\ub4e4\uc5c8\uc73c\ubbc0\ub85c ",(0,l.kt)("inlineCode",{parentName:"p"},"lib.rs")," \ud30c\uc77c\uc5d0 \ubaa8\ub4c8\uc744 \ucd94\uac00\ud574\uc57c \ud569\ub2c8\ub2e4. \ub610\ud55c \ucee8\ud2b8\ub799\ud2b8 \uc804\uccb4\uc5d0\uc11c \uc0ac\uc6a9\ub420 \ud45c\uc900 \ubc0f \ubc84\uc804\uc5d0 \ub300\ud574 \ub450 \uac1c\uc758 \uc0c1\uc218\ub97c \uc815\uc758\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial/blob/7.events/nft-contract/src/lib.rs#L10-L30\n")),(0,l.kt)("h3",{id:"logging-minted-tokens"},"\ubc1c\ud589\ub41c \ud1a0\ud070 \ub85c\uae45"),(0,l.kt)("p",null,"\uc774\uc81c \ubaa8\ub4e0 \ub3c4\uad6c\uac00 \uc81c\uc790\ub9ac\uc5d0 \uc124\uc815\ub418\uc5c8\uc73c\ubbc0\ub85c \uc774\uc81c \uc2e4\uc81c \ub85c\uae45 \uae30\ub2a5\uc744 \uad6c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ucee8\ud2b8\ub799\ud2b8\ub294 \ud55c \uacf3\uc5d0\uc11c\ub9cc \ud1a0\ud070\uc744 \ubc1c\ud589\ud558\uae30 \ub54c\ubb38\uc5d0, \ub85c\uadf8\ub97c \uc5b4\ub514\uc5d0 \ub450\uc5b4\uc57c \ud558\ub294\uc9c0\ub294 \uac04\ub2e8\ud569\ub2c8\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"p"},"nft-contract/src/mint.rs")," \ud30c\uc77c\uc744 \uc5f4\uace0 \ud30c\uc77c \ub9e8 \uc544\ub798\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\uc11c \ubc1c\ud589\uc744 \uc704\ud55c \ub85c\uadf8\ub97c \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub204\uad70\uac00 \uc131\uacf5\uc801\uc73c\ub85c NFT\ub97c \uc0dd\uc131\ud560 \ub54c\ub9c8\ub2e4 \uc774\uc81c \uc62c\ubc14\ub974\uac8c \ub85c\uadf8\ub97c \ub0b4\ubcf4\ub0bc \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial/blob/7.events/nft-contract/src/mint.rs#L5-L80\n")),(0,l.kt)("h3",{id:"logging-transfers"},"\uc804\uc1a1 \ub85c\uae45"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"nft-contract/src/internal.rs")," \ud30c\uc77c\uc744 \uc5f4\uace0 ",(0,l.kt)("inlineCode",{parentName:"p"},"internal_transfer")," \ud568\uc218\ub85c \uc774\ub3d9\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uac00 \uc804\uc1a1 \ub85c\uadf8\ub97c \uc791\uc131\ud560 \uc704\uce58\uc785\ub2c8\ub2e4. NFT\uac00 \uc804\uc1a1\ub420 \ub54c\ub9c8\ub2e4 \uc774 \ud568\uc218\uac00 \ud638\ucd9c\ub418\ubbc0\ub85c, \uc774\uc81c \uc804\uc1a1\uc744 \uc62c\ubc14\ub974\uac8c \uae30\ub85d\ud558\uac8c \ub429\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial/blob/7.events/nft-contract/src/internal.rs#L140-L239\n")),(0,l.kt)("p",null,"\ubd88\ud589\ud558\uac8c\ub3c4 \uc774 \uc194\ub8e8\uc158\uc5d0\ub294 \ubb38\uc81c\ub97c \uc77c\uc73c\ud0ac \uc218 \uc788\ub294 \uadf9\ub2e8\uc801\uc778 \uacbd\uc6b0\uac00 \uc788\uc2b5\ub2c8\ub2e4. NFT\uac00 ",(0,l.kt)("inlineCode",{parentName:"p"},"nft_transfer_call")," \ud568\uc218\ub97c \ud1b5\ud574 \uc804\uc1a1\ub418\ub294 \uacbd\uc6b0, ",(0,l.kt)("inlineCode",{parentName:"p"},"nft_on_transfer")," \ud568\uc218\uac00 ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\ub97c \ubc18\ud658\ud558\uba74 \uc804\uc1a1\uc774 \ucde8\uc18c\ub420 \uac00\ub2a5\uc131\uc774 \uc788\uc2b5\ub2c8\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"p"},"nft_transfer_call"),"\uc5d0 \ub300\ud55c \ub85c\uc9c1\uc744 \uc0b4\ud3b4\ubcf4\uba74, \uc774\uac83\uc774 \uc65c \ubb38\uc81c\uc778\uc9c0 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"nft_transfer_call"),"\uac00 \ud638\ucd9c\ub418\uba74 \ub2e4\uc74c\uc744 \uc218\ud589\ud569\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc2e4\uc81c \uc804\uc1a1 \ub85c\uc9c1\uc744 \uc218\ud589\ud558\uae30 \uc704\ud574 ",(0,l.kt)("inlineCode",{parentName:"li"},"internalTransfer"),"\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc744 \uc2dc\uc791\ud558\uace0 ",(0,l.kt)("inlineCode",{parentName:"li"},"nft_on_transfer")," \ud568\uc218\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nft_resolve_transfer"),"\uc5d0\uc11c \uc57d\uc18d\uc744 \ud574\uacb0\ud558\uace0 \ub85c\uc9c1\uc744 \uc218\ud589\ud569\ub2c8\ub2e4",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc774\ub294 \uc804\uc1a1\uc774 \uc798 \ub418\uc5c8\uc74c\uc744 \uc758\ubbf8\ud558\ub294 true\ub97c \ubc18\ud658\ud558\uac70\ub098 \uc804\uc1a1\uc744 \ub418\ub3cc\ub9ac\uace0 false\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.")))),(0,l.kt)("p",null,"\ub9cc\uc57d ",(0,l.kt)("inlineCode",{parentName:"p"},"internal_transfer")," \ud568\uc218\uc5d0 \ub85c\uadf8\ub9cc \ub123\uc73c\uba74, \ub85c\uadf8\uac00 \ub0b4\ubcf4\ub0b4\uc9c0\uace0 \uc778\ub371\uc11c\ub294 NFT\uac00 \uc804\uc1a1\ub41c \uac83\uc73c\ub85c \uac04\uc8fc\ud560 \uac83\uc785\ub2c8\ub2e4. \uadf8\ub7ec\ub098 ",(0,l.kt)("inlineCode",{parentName:"p"},"nft_resolve_transfer")," \ub3c4\uc911\uc5d0 \uc804\uc1a1\uc774 \ub418\ub3cc\ub824\uc9c0\uba74 \ud574\ub2f9 \uc774\ubca4\ud2b8\ub3c4 ",(0,l.kt)("strong",{parentName:"p"},"\uc5ed\uc2dc")," \ub0b4\ubcf4\ub0b4\uc57c \ud569\ub2c8\ub2e4. NFT\uac00 \uc804\uc1a1",(0,l.kt)("strong",{parentName:"p"},"\ub420 \uc218 \uc788\ub294")," \ubaa8\ub4e0 \uc704\uce58\uc5d0 \ub85c\uadf8\ub97c \ucd94\uac00\ud574\uc57c \ud569\ub2c8\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"p"},"nft_resolve_transfer"),"\ub97c \ub2e4\uc74c \ucf54\ub4dc\ub85c \ubc14\uafc9\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial/blob/7.events/nft-contract/src/nft_core.rs#L182-L277\n")),(0,l.kt)("p",null,"\ub610\ud55c \ub2e4\uc74c\uacfc \uac19\uc774 ",(0,l.kt)("inlineCode",{parentName:"p"},"nft_resolve_transfer"),"\uc5d0 \ub300\ud574 \ub9e4\uac1c\ubcc0\uc218\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"authorized_id"),"\uc640 ",(0,l.kt)("inlineCode",{parentName:"p"},"memo"),"\ub97c \ucd94\uac00\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial/blob/7.events/nft-contract/src/nft_core.rs#L47-L66\n")),(0,l.kt)("p",null,"\ub9c8\uc9c0\ub9c9 \ub2e8\uacc4\ub294 \ub2e4\uc74c \uc0c8 \ub9e4\uac1c\ubcc0\uc218\ub97c \ud3ec\ud568\ud558\ub3c4\ub85d ",(0,l.kt)("inlineCode",{parentName:"p"},"nft_transfer_call")," \ub85c\uc9c1\uc744 \uc218\uc815\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial/blob/7.events/nft-contract/src/nft_core.rs#L102-L159\n")),(0,l.kt)("p",null,"\uc644\ub8cc\ub418\uba74 \uc774\ubca4\ud2b8 \ud45c\uc900\uc744 \uc131\uacf5\uc801\uc73c\ub85c \uad6c\ud604\ud55c \uac83\uc774\uba70, \uc774\uc81c \ud14c\uc2a4\ud2b8\ub97c \uc2dc\uc791\ud560 \uc2dc\uac04\uc785\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"redeploying-contract"},"\ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec"),(0,l.kt)("p",null,"\uac00\ub3c5\uc131\uacfc \uac1c\ubc1c \uc6a9\uc774\uc131\uc744 \uc704\ud574 \ucee8\ud2b8\ub799\ud2b8\ub97c \ub3d9\uc77c\ud55c \uacc4\uc815\uc5d0 \uc7ac\ubc30\ud3ec\ud558\ub294 \ub300\uc2e0, \ud558\uc704 \uacc4\uc815\uc744 \ub9cc\ub4e4\uc5b4 \ubc30\ud3ec\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c \uad6c\ud604\ud55c \ubcc0\uacbd \uc0ac\ud56d\uc73c\ub85c \uc778\ud574 \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\uc558\uc73c\ubbc0\ub85c, \ub3d9\uc77c\ud55c \uacc4\uc815\uc5d0 \ubc30\ud3ec\ud588\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"\ud558\uc704-\uacc4\uc815-\uc0dd\uc131"},"\ud558\uc704 \uacc4\uc815 \uc0dd\uc131"),(0,l.kt)("p",null,"\ub2e4\uc74c \uba85\ub839\uc744 \uc2e4\ud589\ud558\uc5ec \ucd08\uae30 \uc794\uc561\uc774 25 NEAR\uc778 \ud558\uc704 \uacc4\uc815 ",(0,l.kt)("inlineCode",{parentName:"p"},"events"),"\ub97c \ub9cc\ub4ed\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"near create-account events.$NFT_CONTRACT_ID --masterAccount $NFT_CONTRACT_ID --initialBalance 25\n")),(0,l.kt)("p",null,"\ub2e4\uc74c\uc73c\ub85c \uac1c\ubc1c\uc744 \uc27d\uac8c \ud558\uae30 \uc704\ud574 \ud658\uacbd \ubcc0\uc218\ub97c \ub0b4\ubcf4\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export EVENTS_NFT_CONTRACT_ID=events.$NFT_CONTRACT_ID\n")),(0,l.kt)("p",null,"\ube4c\ub4dc \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc774\uc804 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c\uc640 \uac19\uc774 \ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec\ub97c \ube4c\ub4dc\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn build && near deploy --wasmFile out/main.wasm --accountId $EVENTS_NFT_CONTRACT_ID\n")),(0,l.kt)("h3",{id:"initialization-and-minting"},"\ucd08\uae30\ud654 \ubc0f \ubc1c\ud589"),(0,l.kt)("p",null,"\uc774\uac83\uc740 \uc0c8\ub85c\uc6b4 \ucee8\ud2b8\ub799\ud2b8\uc774\ubbc0\ub85c, \ud1a0\ud070\uc744 \ucd08\uae30\ud654\ud558\uace0 \ubc1c\ud589\ud574\uc57c \ud569\ub2c8\ub2e4. \ub2e4\uc74c \uba85\ub839\uc744 \uc0ac\uc6a9\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8\ub97c \ucd08\uae30\ud654\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"near call $EVENTS_NFT_CONTRACT_ID new_default_meta '{\"owner_id\": \"'$EVENTS_NFT_CONTRACT_ID'\"}' --accountId $EVENTS_NFT_CONTRACT_ID\n")),(0,l.kt)("p",null,"\ub2e4\uc74c\uc73c\ub85c \ud1a0\ud070\uc744 \ubc1c\ud589\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774 \uba85\ub839\uc744 \uc2e4\ud589\ud558\uba74 \ud1a0\ud070 ID ",(0,l.kt)("inlineCode",{parentName:"p"},'"events-token"'),"\ub85c \ud1a0\ud070\uc744 \ubc1c\ud589\ud558\uace0, \uc218\uc2e0\uc790\uac00 \uc0c8 \uacc4\uc815\uc774 \ub429\ub2c8\ub2e4. \ub610\ud55c \ud1a0\ud070\uc774 \ud310\ub9e4\ub420 \ub54c\ub9c8\ub2e4 \uc601\uad6c \ub85c\uc5f4\ud2f0\ub97c \ubc1b\ub294 \ub450 \uac1c\uc758 \uacc4\uc815\uc744 \ud3ec\ud568\ud55c \ub9f5\uc744 \uc804\ub2ec\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'near call $EVENTS_NFT_CONTRACT_ID nft_mint \'{"token_id": "events-token", "metadata": {"title": "Events Token", "description": "testing out the new events extension of the standard", "media": "https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif"}, "receiver_id": "\'$EVENTS_NFT_CONTRACT_ID\'"}\' --accountId $EVENTS_NFT_CONTRACT_ID --amount 0.1\n')),(0,l.kt)("p",null,"CLI\uc5d0\uc11c \ucd9c\ub825\uc744 \ud655\uc778\ud558\uc5ec \ubaa8\ub4e0 \uac83\uc774 \uc81c\ub300\ub85c \uc9c4\ud589\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Doing account.functionCall()\nReceipts: F4oxNfv54cqwUwLUJ7h74H1iE66Y3H7QDfZMmGENwSxd, BJxKNFRuLDdbhbGeLA3UBSbL8UicU7oqHsWGink5WX7S\n    Log [events.goteam.examples.testnet]: EVENT_JSON:{"standard":"nep171","version":"1.0.0","event":"nft_mint","data":[{"owner_id":"events.goteam.examples.testnet","token_ids":["events-token"]}]}\nTransaction Id 4Wy2KQVTuAWQHw5jXcRAbrz7bNyZBoiPEvLcGougciyk\nTo see the transaction in the transaction explorer, please open this url in your browser\nhttps://explorer.testnet.near.org/transactions/4Wy2KQVTuAWQHw5jXcRAbrz7bNyZBoiPEvLcGougciyk\n\'\'\n')),(0,l.kt)("p",null,"\uc774\ubca4\ud2b8\uac00 \uc81c\ub300\ub85c \uae30\ub85d\ub41c \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4!"),(0,l.kt)("h3",{id:"transferring"},"\uc804\uc1a1"),(0,l.kt)("p",null,"\uc774\uc81c ",(0,l.kt)("inlineCode",{parentName:"p"},"benjiman.testnet"),"\uc5d0 \ub300\ud574 NFT\ub97c \uc804\uc1a1\ud558\uc5ec \uc804\uc1a1 \ub85c\uadf8\uac00 \uc608\uc0c1\ub300\ub85c \uc791\ub3d9\ud558\ub294\uc9c0 \ud14c\uc2a4\ud2b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'near call $EVENTS_NFT_CONTRACT_ID nft_transfer \'{"receiver_id": "benjiman.testnet", "token_id": "events-token", "memo": "Go Team :)", "approval_id": 0}\' --accountId $EVENTS_NFT_CONTRACT_ID --depositYocto 1\n')),(0,l.kt)("p",null,"\uadf8\ub7ec\uba74 \ub2e4\uc74c\uacfc \uc720\uc0ac\ud55c \ucd9c\ub825\uc774 \ubc18\ud658\ub429\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Doing account.functionCall()\nReceipts: EoqBxrpv9Dgb8KqK4FdeREawVVLWepEUR15KPNuZ4fGD, HZ4xQpbgc8EfU3PiV72LvfXb2f3dVC1n9aVTbQds9zfR\n    Log [events.goteam.examples.testnet]: Memo: Go Team :)\n    Log [events.goteam.examples.testnet]: EVENT_JSON:{"standard":"nep171","version":"1.0.0","event":"nft_transfer","data":[{"authorized_id":"events.goteam.examples.testnet","old_owner_id":"events.goteam.examples.testnet","new_owner_id":"benjiman.testnet","token_ids":["events-token"],"memo":"Go Team :)"}]}\nTransaction Id 4S1VrepKzA6HxvPj3cK12vaT7Dt4vxJRWESA1ym1xdvH\nTo see the transaction in the transaction explorer, please open this url in your browser\nhttps://explorer.testnet.near.org/transactions/4S1VrepKzA6HxvPj3cK12vaT7Dt4vxJRWESA1ym1xdvH\n\'\'\n')),(0,l.kt)("p",null,"\ub9cc\uc138! \uc774 \uc2dc\uc810\uc5d0\uc11c NFT \ucee8\ud2b8\ub799\ud2b8\uac00 \uc644\uc804\ud788 \uc644\ub8cc\ub418\uace0 \uc774\ubca4\ud2b8 \ud45c\uc900\uc774 \uad6c\ud604\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\uacb0\ub860"},"\uacb0\ub860"),(0,l.kt)("p",null,"\uc624\ub298 \ub2f9\uc2e0\uc740 ",(0,l.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/NonFungibleToken/Event.html"},"\uc774\ubca4\ud2b8 \ud45c\uc900"),"\uc744 \uc0b4\ud3b4\ubcf4\uace0, \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ud544\uc694\ud55c \ub85c\uc9c1\uc744 \uad6c\ud604\ud588\uc2b5\ub2c8\ub2e4. NFT ",(0,l.kt)("a",{parentName:"p",href:"#logging-minted-tokens"},"\ubc1c\ud589")," \ubc0f ",(0,l.kt)("a",{parentName:"p",href:"#logging-transfers"},"\uc804\uc1a1"),"\uc744 \uc704\ud55c \uc774\ubca4\ud2b8\ub97c \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4 . \uadf8\ub7f0 \ub2e4\uc74c NFT\ub97c \ub9cc\ub4e4\uace0 \uc804\uc1a1\ud558\uc5ec \ubcc0\uacbd \uc0ac\ud56d\uc744 \ubc30\ud3ec\ud558\uace0 ",(0,l.kt)("a",{parentName:"p",href:"#initialization-and-minting"},"\ud14c\uc2a4\ud2b8"),"\ud588\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub2e4\uc74c \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c\ub294 \ub9c8\ucf13\ud50c\ub808\uc774\uc2a4 \ucee8\ud2b8\ub799\ud2b8\uc758 \uae30\ubcf8 \uc0ac\ud56d\uacfc \ucee8\ud2b8\ub799\ud2b8 \uc791\uc131 \ubc29\ubc95\uc744 \uc0b4\ud3b4\ubd05\ub2c8\ub2e4."),(0,l.kt)("admonition",{title:"\ubb38\uc11c \ubc84\uc804 \uad00\ub9ac",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\uae00\uc744 \uc791\uc131\ud558\ub294 \uc2dc\uc810\uc5d0\uc11c, \ud574\ub2f9 \uc608\uc81c\ub294 \ub2e4\uc74c \ubc84\uc804\uc5d0\uc11c \uc791\ub3d9\ud569\ub2c8\ub2e4."),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"near-cli: ",(0,l.kt)("inlineCode",{parentName:"li"},"3.0.0")),(0,l.kt)("li",{parentName:"ul"},"NFT \ud45c\uc900: ",(0,l.kt)("a",{parentName:"li",href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core"},"NEP171"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"1.0.0")," \ubc84\uc804"),(0,l.kt)("li",{parentName:"ul"},"\uc774\ubca4\ud2b8 \ud45c\uc900: ",(0,l.kt)("a",{parentName:"li",href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Event"},"NEP181"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"1.0.0")," \ubc84\uc804"))))}d.isMDXComponent=!0}}]);