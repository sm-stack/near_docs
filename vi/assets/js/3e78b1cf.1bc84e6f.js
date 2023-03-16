"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[991],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),k=o(n),u=r,d=k["".concat(s,".").concat(u)]||k[u]||m[u]||l;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},93405:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>m});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],p={id:"marketplace",title:"\ub9c8\ucf13\ud50c\ub808\uc774\uc2a4",sidebar_label:"\ub9c8\ucf13\ud50c\ub808\uc774\uc2a4"},s=void 0,o={unversionedId:"tutorials/nfts/js/marketplace",id:"tutorials/nfts/js/marketplace",title:"\ub9c8\ucf13\ud50c\ub808\uc774\uc2a4",description:"\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c\ub294 $NEAR\uc5d0 \ub300\ud574 \ub300\uccb4 \ubd88\uac00\ub2a5 \ud1a0\ud070(NFT)\uc744 \uc0ac\uace0 \ud314 \uc218 \uc788\ub294 NFT \ub9c8\ucf13\ud50c\ub808\uc774\uc2a4 \ucee8\ud2b8\ub799\ud2b8\uc758 \uae30\ubcf8 \uc0ac\ud56d\uc744 \ubc30\uc6c1\ub2c8\ub2e4. \uc774\uc804 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c\ub294 NFT \ud45c\uc900\uc5d0 \uc788\ub294 \ubaa8\ub4e0 \ud45c\uc900\uc744 \ud1b5\ud569\ud558\ub294 \uc644\uc804\ud55c NFT \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud588\uc2b5\ub2c8\ub2e4.",source:"@site/../docs/3.tutorials/nfts/js/8-marketplace.md",sourceDirName:"3.tutorials/nfts/js",slug:"/tutorials/nfts/js/marketplace",permalink:"/near_docs/vi/tutorials/nfts/js/marketplace",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/js/8-marketplace.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"9 thg 3, 2023",sidebarPosition:8,frontMatter:{id:"marketplace",title:"\ub9c8\ucf13\ud50c\ub808\uc774\uc2a4",sidebar_label:"\ub9c8\ucf13\ud50c\ub808\uc774\uc2a4"},sidebar:"\ud29c\ud1a0\ub9ac\uc5bc",previous:{title:"\uc774\ubca4\ud2b8",permalink:"/near_docs/vi/tutorials/nfts/js/events"},next:{title:"\uc18c\uac1c",permalink:"/near_docs/vi/tutorials/nfts/introduction"}},c={},m=[{value:"\uc18c\uac1c",id:"\uc18c\uac1c",level:2},{value:"\ud30c\uc77c \uad6c\uc870",id:"file-structure",level:2},{value:"\ucee8\ud2b8\ub799\ud2b8 \uc774\ud574",id:"\ucee8\ud2b8\ub799\ud2b8-\uc774\ud574",level:2},{value:"index.ts",id:"index-ts",level:2},{value:"\uc0dd\uc131\uc790 \ub85c\uc9c1",id:"constructor-logic",level:3},{value:"\uc2a4\ud1a0\ub9ac\uc9c0 \uad00\ub9ac \ubaa8\ub378",id:"storage-management-model",level:3},{value:"nft_callbacks.ts",id:"nft_callbacks-ts",level:2},{value:"\ub9ac\uc2a4\ud305 \ub85c\uc9c1",id:"listing-logic",level:3},{value:"sale.ts",id:"sale-ts",level:2},{value:"\ud310\ub9e4 \uac1d\uccb4",id:"sale-object",level:3},{value:"\ub9ac\uc2a4\ud305 \uc81c\uac70",id:"removing-sales",level:3},{value:"\uac00\uaca9 \uc5c5\ub370\uc774\ud2b8",id:"updating-price",level:3},{value:"NFT \uad6c\ub9e4",id:"purchasing-nfts",level:3},{value:"sale_view.ts",id:"sale_view-ts",level:2},{value:"\ucd1d \uacf5\uae09\ub7c9",id:"total-supply",level:3},{value:"\uc18c\uc720\uc790\uac00 \uac00\uc9c4 \ucd1d \uacf5\uae09\ub7c9",id:"total-supply-by-owner",level:3},{value:"\ucee8\ud2b8\ub799\ud2b8\uac00 \uac00\uc9c4 \ucd1d \uacf5\uae09\ub7c9",id:"total-supply-by-contract",level:3},{value:"\ub9ac\uc2a4\ud305 \uc815\ubcf4 \ucffc\ub9ac",id:"query-listing-information",level:3},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2}],k={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c\ub294 $NEAR\uc5d0 \ub300\ud574 \ub300\uccb4 \ubd88\uac00\ub2a5 \ud1a0\ud070(NFT)\uc744 \uc0ac\uace0 \ud314 \uc218 \uc788\ub294 NFT \ub9c8\ucf13\ud50c\ub808\uc774\uc2a4 \ucee8\ud2b8\ub799\ud2b8\uc758 \uae30\ubcf8 \uc0ac\ud56d\uc744 \ubc30\uc6c1\ub2c8\ub2e4. \uc774\uc804 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c\ub294 ",(0,l.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/NonFungibleToken"},"NFT \ud45c\uc900"),"\uc5d0 \uc788\ub294 \ubaa8\ub4e0 \ud45c\uc900\uc744 \ud1b5\ud569\ud558\ub294 \uc644\uc804\ud55c NFT \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud588\uc2b5\ub2c8\ub2e4."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"JS-SDK\ub294 \ud604\uc7ac ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/near/near-sdk-js/releases/"},(0,l.kt)("inlineCode",{parentName:"a"},"Alpha")))," \ubc84\uc804\uc785\ub2c8\ub2e4. ")),(0,l.kt)("h2",{id:"\uc18c\uac1c"},"\uc18c\uac1c"),(0,l.kt)("p",null,"\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc744 \ud1b5\ud574 \ub9c8\ucf13\ud50c\ub808\uc774\uc2a4 \ucee8\ud2b8\ub799\ud2b8\uac00 NEAR\uc5d0\uc11c \uc791\ub3d9\ud558\ub294 \ubc29\ubc95\uc744 \ubc30\uc6b0\uac8c \ub429\ub2c8\ub2e4. \uc774\uac83\uc740 \uc608\uc2dc\uc6a9\uc774\uba70 \ud45c\uc900 \uad6c\ud604\uccb4\ub294 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2f9\uc2e0\uc758 \uc694\uad6c \uc0ac\ud56d\uc5d0 \ub9de\uac8c \uc774 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc790\uc720\ub86d\uac8c \ub098\ub204\uace0 \uc218\uc815\ud558\uc138\uc694."),(0,l.kt)("p",null,"\uc774\uc804 \ud29c\ud1a0\ub9ac\uc5bc\uacfc \ub3d9\uc77c\ud55c \ub808\ud37c\uc9c0\ud1a0\ub9ac\ub97c \uc0ac\uc6a9\ud558\uc5ec ",(0,l.kt)("inlineCode",{parentName:"p"},"8.marketplace")," \ube0c\ub79c\uce58\ub97c \ud655\uc778\ud558\uba74, \ud29c\ud1a0\ub9ac\uc5bc\uc744 \uc644\ub8cc\ud558\ub294 \ub370 \ud544\uc694\ud55c \ud30c\uc77c\uc774 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout 8.marketplace\n")),(0,l.kt)("h2",{id:"file-structure"},"\ud30c\uc77c \uad6c\uc870"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"market-contract\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 internal.ts\n    \u251c\u2500\u2500 index.ts\n    \u251c\u2500\u2500 nft_callbacks.ts\n    \u251c\u2500\u2500 sale.ts\n    \u2514\u2500\u2500 sale_views.ts\n")),(0,l.kt)("p",null,"\uc77c\ubc18\uc801\uc73c\ub85c \ubaa8\ub450 \ub3d9\uc77c\ud55c \ub808\ud37c\uc9c0\ud1a0\ub9ac\uc5d0 \uc18d\ud558\ub294 \uc5ec\ub7ec \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uc791\uc5c5\uc744 \uc218\ud589\ud560 \ub54c, \uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c \uc218\ud589\ud55c \ub300\ub85c \uc790\uccb4 \ud3f4\ub354\uc5d0 \uad6c\uc131\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. \ub450 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc27d\uac8c \ube4c\ub4dc\ud560 \uc218 \uc788\ub3c4\ub85d \ub808\ud37c\uc9c0\ud1a0\ub9ac\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," \ud30c\uc77c\ub3c4 \uc218\uc815\ud574 \ub450\uc5c8\uae30 \ub54c\ubb38\uc5d0, \uc774 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ub450 \uac1c\ub97c \ube4c\ub4dc\ud560 \ub54c \ub2e4\uc74c \uba85\ub839\uc744 \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn build\n")),(0,l.kt)("p",null,"\uc774\ub807\uac8c \ud558\uba74 \ub450 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ub300\ud55c \uc758\uc874\uc131(dependency)\uc774 \uc124\uce58\ub418\uace0 \uc544\ub798 \ub514\ub809\ud130\ub9ac\uc5d0 \uc800\uc7a5\ub41c ",(0,l.kt)("inlineCode",{parentName:"p"},"wasm")," \ud30c\uc77c\ub85c \ucef4\ud30c\uc77c\ub429\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nft-tutorial-js\n\u2514\u2500\u2500 build\n    \u251c\u2500\u2500 nft.wasm\n    \u2514\u2500\u2500 market.wasm\n")),(0,l.kt)("h2",{id:"\ucee8\ud2b8\ub799\ud2b8-\uc774\ud574"},"\ucee8\ud2b8\ub799\ud2b8 \uc774\ud574"),(0,l.kt)("p",null,"\ucc98\uc74c\uc5d0\ub294 \ucee8\ud2b8\ub799\ud2b8\uac00 \uc0c1\ub2f9\ud788 \ubc84\uac70\uc6b8 \uc218 \uc788\uc9c0\ub9cc, \ubaa8\ub4e0 \ubd80\uac00 \uae30\ub2a5\uc744 \uc81c\uc678\ud558\uace0 \ud575\uc2ec \uae30\ub2a5\ub9cc \ud30c\ud5e4\uce58\uba74 \uc2e4\uc81c\ub85c\ub294 \ub9e4\uc6b0 \uac04\ub2e8\ud569\ub2c8\ub2e4. \uc774 \ucee8\ud2b8\ub799\ud2b8\ub294 \uc0ac\ub78c\ub4e4\uc774 NEAR\ub97c \uc704\ud574 NFT\ub97c \uc0ac\uace0 \ud314 \uc218 \uc788\ub3c4\ub85d \ud55c\ub2e4\ub294 \ub2e8 \ud55c \uac00\uc9c0\ub97c \uc704\ud574 \uc124\uacc4\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\ub294 \ub85c\uc5f4\ud2f0 \uc9c0\ubd88, \ud310\ub9e4 \uac00\uaca9 \uc5c5\ub370\uc774\ud2b8, \ud310\ub9e4 \uc81c\uac70 \ubc0f \uc2a4\ud1a0\ub9ac\uc9c0 \ube44\uc6a9 \uc9c0\ubd88\uc5d0 \ub300\ud55c \uc9c0\uc6d0\uc774 \ud3ec\ud568\ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uba87 \uac00\uc9c0 \uc911\uc694\ud55c \uae30\ub2a5\uc744 \ud558\ub294 \ud30c\uc77c\uacfc \ud568\uc218\ub4e4\uc744 \uc0b4\ud3b4 \ubd05\uc2dc\ub2e4."),(0,l.kt)("h2",{id:"index-ts"},"index.ts"),(0,l.kt)("p",null,"\uc774 \ud30c\uc77c\uc740 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc800\uc7a5\ub418\ub294 \uc815\ubcf4\uc640 \uc544\ub798\uc5d0\uc11c \ubc30\uc6b0\uac8c \ub420 \uba87 \uac00\uc9c0 \uc8fc\uc694 \ud568\uc218\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"constructor-logic"},"\uc0dd\uc131\uc790 \ub85c\uc9c1"),(0,l.kt)("p",null,"\ucc98\uc74c\uc73c\ub85c \uc0b4\ud3b4\ubcfc \ud568\uc218\ub294 \uc0dd\uc131\uc790 \ud568\uc218\uc785\ub2c8\ub2e4. \uc774\uac83\uc740 \uc720\uc77c\ud55c \ub9e4\uac1c\ubcc0\uc218\ub85c ",(0,l.kt)("inlineCode",{parentName:"p"},"owner_id"),"\ub97c \uc0ac\uc6a9\ud558\uba70, \ubaa8\ub4e0 \uc2a4\ud1a0\ub9ac\uc9c0 \uceec\ub809\uc158\uc744 \uae30\ubcf8\uac12\uc73c\ub85c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/8.marketplace/src/market-contract/index.ts#L40-L52\n")),(0,l.kt)("h3",{id:"storage-management-model"},"\uc2a4\ud1a0\ub9ac\uc9c0 \uad00\ub9ac \ubaa8\ub378"),(0,l.kt)("p",null,"\ub2e4\uc74c\uc73c\ub85c \uc774 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc704\ud574 \uc120\ud0dd\ud55c \uc2a4\ud1a0\ub9ac\uc9c0 \uad00\ub9ac \ubaa8\ub378\uc5d0 \ub300\ud574 \uc774\uc57c\uae30\ud558\uaca0\uc2b5\ub2c8\ub2e4. NFT \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c, \uc0ac\uc6a9\uc790\ub294 \ube44\uc6a9\uc744 \uc9c0\ubd88\ud574\uc57c \ud558\ub294 \uc2a4\ud1a0\ub9ac\uc9c0 \ud638\ucd9c\uc5d0 $NEAR\ub97c \ucca8\ubd80\ud588\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ub204\uad70\uac00 NFT\ub97c \ubc1c\ud589\ud558\ub294 \uacbd\uc6b0, \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\ub294 \ube44\uc6a9\uc744 \ucda9\ub2f9\ud558\uae30 \uc704\ud574 ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," NEAR \ub9cc\ud07c\uc758 \uae08\uc561\uc744 \ucca8\ubd80\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uadf8\ub7ec\ub098 \uc774 \ub9c8\ucf13\ud50c\ub808\uc774\uc2a4 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c\ub294 \uc2a4\ud1a0\ub9ac\uc9c0 \ubaa8\ub378\uc774 \uc57d\uac04 \ub2e4\ub985\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\ub294 \uc2a4\ud1a0\ub9ac\uc9c0 \ube44\uc6a9\uc744 \ucda9\ub2f9\ud558\uae30 \uc704\ud574 $NEAR\ub97c \ub9c8\ucf13\ud50c\ub808\uc774\uc2a4\uc5d0 \uc608\uce58\ud574\uc57c \ud569\ub2c8\ub2e4. \ub204\uad70\uac00 NFT\ub97c \ud310\ub9e4\ud560 \ub54c\ub9c8\ub2e4 \ub9c8\ucf13\ud50c\ub808\uc774\uc2a4\ub294 $NEAR\ub97c \ub4e4\uc5ec \ud574\ub2f9 \uc815\ubcf4\ub97c \uc800\uc7a5\ud574\uc57c \ud569\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\ub294 \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 \ub300\ud574 \ub2e4\uc2dc\ub294 \uac71\uc815\ud560 \ud544\uc694\uac00 \uc5c6\ub3c4\ub85d \uc6d0\ud558\ub294 \ub9cc\ud07c NEAR\ub97c \uc785\uae08\ud558\uac70\ub098, \ud544\uc694\uc5d0 \ub530\ub77c 1\ud68c \ud310\ub9e4\ub97c \ucda9\ub2f9\ud558\uae30 \uc704\ud55c \ucd5c\uc18c \uae08\uc561\uc744 \uc785\uae08\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub9ac\uc2a4\ud305\ub41c NFT\uac00 \uad6c\ub9e4\ub420 \ub54c \uc2dc\ub098\ub9ac\uc624\uc5d0 \ub300\ud574 \uc0dd\uac01\ud574 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud604\uc7ac \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ud574\uc81c\ub418\ub294 \uc2a4\ud1a0\ub9ac\uc9c0\ub294 \uc5b4\ub5bb\uac8c \ub418\ub098\uc694? \uc774\uac83\uc774 \uc6b0\ub9ac\uac00 \uc2a4\ud1a0\ub9ac\uc9c0 \ucd9c\uae08 \uae30\ub2a5\uc744 \ub3c4\uc785\ud55c \uc774\uc720\uc785\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \uc0ac\uc6a9\uc790\ub294 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \ucd08\uacfc \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 \ub300\ud55c \ube44\uc6a9\uc744 \ucd9c\uae08\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub85c\uc9c1\uc744 \uc774\ud574\ud558\uae30 \uc704\ud574 \uba87 \uac00\uc9c0 \uc2dc\ub098\ub9ac\uc624\ub97c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. 1\ud68c \ud310\ub9e4\uc5d0 \ud544\uc694\ud55c \uc800\uc7a5 \uacf5\uac04\uc740 \ub9c8\ucf13\ud50c\ub808\uc774\uc2a4 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c 0.01 NEAR\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\uc2dc\ub098\ub9ac\uc624 A")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Benji\ub294 \ub9c8\ucf13\ud50c\ub808\uc774\uc2a4\uc5d0 \uc790\uc2e0\uc758 NFT\ub97c \ub9ac\uc2a4\ud305\ud558\uace0 \uc2f6\uc9c0\ub9cc, \uc2a4\ud1a0\ub9ac\uc9c0 \ube44\uc6a9\uc744 \uc9c0\ubd88\ud55c \uc801\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. "),(0,l.kt)("li",{parentName:"ul"},"\uadf8\ub294 ",(0,l.kt)("inlineCode",{parentName:"li"},"storage_deposit")," \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc815\ud655\ud788 0.01 NEAR\ub97c \uc608\uce58\ud569\ub2c8\ub2e4. \uc774\uac83\uc740 \ud55c \ubc88\uc758 \ud310\ub9e4\ub97c \ucee4\ubc84\ud560 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uadf8\ub294 \ub9c8\ucf13\ud50c\ub808\uc774\uc2a4\uc5d0 \uc790\uc2e0\uc758 NFT\ub97c \ub9ac\uc2a4\ud305\ud558\uc600\uc2b5\ub2c8\ub2e4. \ud604\uc7ac \uc120\ubd88 \ud310\ub9e4 1\uac1c \uc911 1\uac1c\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0 \ub354 \uc774\uc0c1 \uc2a4\ud1a0\ub9ac\uc9c0 \uacf5\uac04\uc774 \ub0a8\uc544 \uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uadf8\uac00 ",(0,l.kt)("inlineCode",{parentName:"li"},"storage_withdraw"),"\ub97c \ud638\ucd9c\ud558\uba74 \uc544\ubb34 \uc77c\ub3c4 \uc77c\uc5b4\ub098\uc9c0 \uc54a\uc744 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"Dorian\uc740 Benji\uc758 NFT\ub97c \uc88b\uc544\ud558\uace0, \ub2e4\ub978 \uc0ac\ub78c\ubcf4\ub2e4 \uba3c\uc800 \ube60\ub974\uac8c \uad6c\ub9e4\ud588\uc2b5\ub2c8\ub2e4. \uc774\ub294 Benji\uc758 \ud310\ub9e4\uac00 \uc774\uc81c \uc911\ub2e8\ub418\uc5c8\uc73c\uba70(\uad6c\ub9e4\ud55c \uc774\ud6c4) Benji\ub294 \uc120\ubd88 \ud310\ub9e4 1\uac1c \uc911 0\uac1c\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uc74c\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \uc989, \uadf8\ub294 1 \ud310\ub9e4 \ub610\ub294 0.01 NEAR\uac00 \ub0a8\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"Benji\ub294 \uc774\uc81c ",(0,l.kt)("inlineCode",{parentName:"li"},"storage_withdraw")," \ud638\ucd9c\uc744 \ud560 \uc218 \uc788\uc73c\uba70, \uadf8\uc758 0.01 NEAR\ub97c \ub2e4\uc2dc \ub3cc\ub824\ubc1b\uc744 \uac83\uc785\ub2c8\ub2e4. \ucee8\ud2b8\ub799\ud2b8 \uce21\uba74\uc5d0\uc11c, \uadf8\ub294 \ucd9c\uae08 \ud6c4 \ud310\ub9e4 \uae08\uc561\uc774 0\uc774 \ub418\uba70, \uc774\uc81c NFT\ub97c \ub9ac\uc2a4\ud305\ud558\uae30 \uc804\uc5d0 \uc2a4\ud1a0\ub9ac\uc9c0 \ube44\uc6a9\uc744 \uc608\uce58\ud574\uc57c \ud569\ub2c8\ub2e4.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\uc2dc\ub098\ub9ac\uc624 B")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Dorian\uc740 100\uac1c\uc758 \uc544\ub984\ub2e4\uc6b4 NFT\ub97c \uc18c\uc720\ud558\uace0 \uc788\uc73c\uba70, \ubaa8\ub4e0 NFT\ub97c \ub9ac\uc2a4\ud305\ud558\uace0 \uc2f6\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"NFT\ub97c \ub098\uc5f4\ud560 \ub54c\ub9c8\ub2e4 ",(0,l.kt)("inlineCode",{parentName:"li"},"storage_deposit"),"\ub97c \ud638\ucd9c\ud560 \ud544\uc694\uac00 \uc5c6\ub3c4\ub85d, \uadf8\ub294 \ud55c \ubc88\ub9cc \ud638\ucd9c\ud558\uc600\uc2b5\ub2c8\ub2e4. Dorian\uc740 \uc131\uacf5\ud55c \uc0ac\ub78c\uc774\uae30 \ub54c\ubb38\uc5d0 1000\uac1c\uc758 \ud310\ub9e4\ub97c \ucee4\ubc84\ud558\uae30\uc5d0 \ucda9\ubd84\ud55c 10\uac1c\uc758 NEAR\ub97c \ucca8\ubd80\ud558\uc600\uc2b5\ub2c8\ub2e4. \uc774\ud6c4, \uadf8\ub294 \uc774\uc81c 9 NEAR \ub610\ub294 900 \ud310\ub9e4\ub97c \ucd08\uacfc\ud588\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"Dorian\uc740 \ub2e4\ub978 \uc77c\uc744 \uc704\ud574 9 NEAR\uac00 \ud544\uc694\ud558\uc9c0\ub9cc, 100\uac1c\uc758 \ub9ac\uc2a4\ud305\uc744 \uc0ad\uc81c\ud558\uace0 \uc2f6\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4. \uadf8\ub294 9 NEAR\uac00 \ub0a8\uc558\uae30 \ub54c\ubb38\uc5d0 \uc27d\uac8c \uc778\ucd9c\ud560 \uc218 \uc788\uace0 \uc5ec\uc804\ud788 100\uac1c\uc758 \ubaa9\ub85d\uc744 \ubcf4\uc720\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"li"},"storage_withdraw")," \ud638\ucd9c\uc744 \ud558\uace0 9 NEAR\ub97c \ubc1b\uc73c\uba74 \uadf8\ub294 0\uac1c\uc758 \ud310\ub9e4 \uac00\ub2a5 \uc218\ub7c9\uc744 \uac00\uc9c0\uac8c \ub420 \uac83\uc785\ub2c8\ub2e4.")),(0,l.kt)("p",null,"\uc774 \ub3d9\uc791\uc744 \uc5fc\ub450\uc5d0 \ub450\uace0 \ub450 \ud568\uc218\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \ub85c\uc9c1\uc744 \uc124\uba85\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/8.marketplace/src/market-contract/index.ts#L58-L121\n")),(0,l.kt)("p",null,"\uc774 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uac01 \ud310\ub9e4\uc5d0 \ud544\uc694\ud55c \uc2a4\ud1a0\ub9ac\uc9c0\ub294 0.01 NEAR\uc774\uc9c0\ub9cc, ",(0,l.kt)("inlineCode",{parentName:"p"},"storage_minimum_balance")," \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud574\ub2f9 \uc815\ubcf4\ub97c \uc870\ud68c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c, \ud574\ub2f9 \uacc4\uc815\uc774 \uc9c0\ubd88\ud55c \uc2a4\ud1a0\ub9ac\uc9c0 \uacf5\uac04\uc744 \ud655\uc778\ud558\ub824\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"storage_balance_of")," \ud568\uc218\ub85c \ucffc\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uadf8 \ubc29\ubc95\uc73c\ub85c, ",(0,l.kt)("inlineCode",{parentName:"p"},"nft_callbacks.ts")," \ud30c\uc77c\ub85c \uc774\ub3d9\ud558\uc5ec NFT\uac00 \ud310\ub9e4\ub418\ub294 \ubc29\ubc95\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"nft_callbacks-ts"},"nft_callbacks.ts"),(0,l.kt)("p",null,"\uc774 \ud30c\uc77c\uc740 NFT\ub97c \ud310\ub9e4\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \ub85c\uc9c1\uc744 \ub2f4\ub2f9\ud569\ub2c8\ub2e4. \uc2b9\uc778 \ud29c\ud1a0\ub9ac\uc5bc\uc758 ",(0,l.kt)("a",{parentName:"p",href:"/tutorials/nfts/js/approvals#marketplace-integrations"},"\ub9c8\ucf13\ud50c\ub808\uc774\uc2a4 \uc139\uc158"),"\uc5d0\uc11c \uae30\uc5b5\ud55c\ub2e4\uba74 \uc0ac\uc6a9\uc790\uac00 ",(0,l.kt)("inlineCode",{parentName:"p"},"nft_approve"),"\ub97c \ud638\ucd9c\ud558\uc5ec \uba54\uc2dc\uc9c0\ub97c \uc804\ub2ec\ud560 \ub54c, ",(0,l.kt)("inlineCode",{parentName:"p"},"receiver_id")," \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ub300\ud55c \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c(cross-contract call)\uc744 \uc218\ud589\ud558\uace0 ",(0,l.kt)("inlineCode",{parentName:"p"},"nft_on_approve")," \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c \ud569\ub2c8\ub2e4. \uc774 ",(0,l.kt)("inlineCode",{parentName:"p"},"nft_callbacks.ts")," \ud30c\uc77c\uc740 \ud574\ub2f9 \ud568\uc218\ub97c \uad6c\ud604\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"listing-logic"},"\ub9ac\uc2a4\ud305 \ub85c\uc9c1"),(0,l.kt)("p",null,"\ub9c8\ucf13 \ucee8\ud2b8\ub799\ud2b8\ub294 \uc0ac\uc6a9\uc790\uac00 NFT \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"nft_approve"),"\ub85c \uc804\ub2ec\ud558\ub294 \uba54\uc2dc\uc9c0\uac00 \ubb38\uc790\uc5f4\ud654\ub41c JSON \ud310\ub9e4 \uc778\uc790\uac00 \ub420 \uac83\uc73c\ub85c \uc608\uc0c1\ud569\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\ub294 \ub098\uc5f4\ub41c NFT\uc5d0 \ub300\ud55c yoctoNEAR \ud615\ud0dc\uc758 \ud310\ub9e4 \uac00\uaca9\uc774 \uc694\uc57d\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"nft_on_approve")," \ud568\uc218\ub294 NFT \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc758\ud55c \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc744 \ud1b5\ud574 \ud638\ucd9c\ub429\ub2c8\ub2e4. \uc774\ub294 \uc11c\uba85\uc790\uac00 \ub2e4\ub978 \ud310\ub9e4\ub97c \ucd94\uac00\ud560 \uc218 \uc788\ub294 \ucda9\ubd84\ud55c \uc2a4\ud1a0\ub9ac\uc9c0 \uacf5\uac04\uc774 \uc788\ub294\uc9c0 \ud655\uc778\ud560 \uac83\uc785\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c \uba54\uc2dc\uc9c0\uc5d0\uc11c \ud310\ub9e4 \uc870\uac74\uc744 \uac00\uc838\uc624\uace0 \ub9ac\uc2a4\ud305\uc744 \uc0dd\uc131\ud558\ub824\uace0 \uc2dc\ub3c4\ud560 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/8.marketplace/src/market-contract/nft_callbacks.ts#L6-L73\n")),(0,l.kt)("h2",{id:"sale-ts"},"sale.ts"),(0,l.kt)("p",null,"\uc774\uc81c \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \ucd94\uac00\ud558\uace0 \ub9c8\ucf13\ud50c\ub808\uc774\uc2a4\uc5d0 NFT\ub97c \ub9ac\uc2a4\ud305\ud558\ub294 \ud504\ub85c\uc138\uc2a4\uc5d0 \uc775\uc219\ud574\uc84c\uc73c\ubbc0\ub85c, \ud310\ub9e4\uac00 \uc62c\ub77c\uac00\uba74 \uc218\ud589\ud560 \uc218 \uc788\ub294 \uc791\uc5c5\uc744 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc774 ",(0,l.kt)("inlineCode",{parentName:"p"},"sale.ts")," \ud30c\uc77c\uc740 \uac00\uaca9 \uc5c5\ub370\uc774\ud2b8, \uc81c\uac70 \ubc0f NFT \uad6c\ub9e4\ub97c \uc704\ud55c \ud568\uc218\ub4e4\uc5d0 \ub300\ud574 \uc124\uba85\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"sale-object"},"\ud310\ub9e4 \uac1d\uccb4"),(0,l.kt)("p",null,"\ucee8\ud2b8\ub799\ud2b8\ub294 \uac01 \ud310\ub9e4 \uac1d\uccb4\uc5d0 \ub300\ud574 \uc800\uc7a5\ud558\ub294 \uc815\ubcf4\ub97c \uc774\ud574\ud558\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4. \ub9c8\ucf13\ud50c\ub808\uc774\uc2a4\uc5d0\ub294 \uc11c\ub85c \ub2e4\ub978 NFT \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ub098\uc628 \ub9ce\uc740 NFT\uac00 \ub098\uc5f4\ub418\uc5b4 \uc788\uae30 \ub54c\ubb38\uc5d0, \ub2e8\uc21c\ud788 \ud1a0\ud070 ID\ub97c \uc800\uc7a5\ud558\ub294 \uac83\ub9cc\uc73c\ub85c\ub294 \uc11c\ub85c \ub2e4\ub978 NFT\ub97c \uad6c\ubcc4\ud558\uae30\uc5d0 \ucda9\ubd84\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc774\uac83\uc774 \ud1a0\ud070 ID\uc640 NFT\uac00 \ubc1c\uc0dd\ud55c \ucee8\ud2b8\ub799\ud2b8\ub97c \ubaa8\ub450 \ucd94\uc801\ud574\uc57c \ud558\ub294 \uc774\uc720\uc785\ub2c8\ub2e4. \ub610\ud55c \uac01 \ubaa9\ub85d\uc5d0 \ub300\ud574 \ucee8\ud2b8\ub799\ud2b8\ub294 NFT \uc804\uc1a1\uc744 \uc704\ud574 \uc81c\uacf5\ub41c \uc2b9\uc778 ID\ub97c \ucd94\uc801\ud574\uc57c \ud569\ub2c8\ub2e4. \ub9c8\uc9c0\ub9c9\uc73c\ub85c \uc18c\uc720\uc790 \ubc0f \ud310\ub9e4 \uc870\uac74\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/8.marketplace/src/market-contract/sale.ts#L9-L42\n")),(0,l.kt)("h3",{id:"removing-sales"},"\ub9ac\uc2a4\ud305 \uc81c\uac70"),(0,l.kt)("p",null,"\ub9ac\uc2a4\ud305\uc744 \uc81c\uac70\ud558\ub824\uba74, \uc18c\uc720\uc790\uac00 ",(0,l.kt)("inlineCode",{parentName:"p"},"remove_sale")," \ud568\uc218\ub97c \ud638\ucd9c\ud558\uace0 NFT \ucee8\ud2b8\ub799\ud2b8 \ubc0f \ud1a0\ud070 ID\ub97c \uc804\ub2ec\ud574\uc57c \ud569\ub2c8\ub2e4. \ub0b4\ubd80\uc801\uc73c\ub85c, \uc774\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"internal.ts")," \ud30c\uc77c\uc5d0\uc11c \ucc3e\uc744 \uc218 \uc788\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"internallyRemoveSale")," \ud568\uc218\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4. \uc774\uac83\uc740 \ubcf4\uc548\uc0c1\uc758 \uc774\uc720\ub85c 1 yoctoNEAR\ub97c \uc694\uad6c\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/8.marketplace/src/market-contract/sale.ts#L44-L65\n")),(0,l.kt)("h3",{id:"updating-price"},"\uac00\uaca9 \uc5c5\ub370\uc774\ud2b8"),(0,l.kt)("p",null,"\ud1a0\ud070\uc758 \ub9ac\uc2a4\ud305 \uac00\uaca9\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\ub824\uba74 \uc18c\uc720\uc790\uac00 ",(0,l.kt)("inlineCode",{parentName:"p"},"update_price")," \ud568\uc218\ub97c \ud638\ucd9c\ud558\uace0 \ucee8\ud2b8\ub799\ud2b8, \ud1a0\ud070 ID \ubc0f \uc6d0\ud558\ub294 \uac00\uaca9\uc744 \uc804\ub2ec\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774\ub807\uac8c \ud558\uba74 \ud310\ub9e4 \uac1d\uccb4\ub97c \uac00\uc838\uc624\uace0 \ud310\ub9e4 \uc870\uac74\uc744 \ubcc0\uacbd\ud55c \ub2e4\uc74c \ub2e4\uc2dc \uc0bd\uc785\ud560 \uac83\uc785\ub2c8\ub2e4. \ubcf4\uc548\uc0c1\uc758 \uc774\uc720\ub85c \uc774 \ud568\uc218\ub294 1 yoctoNEAR\ub97c \uc694\uad6c\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/8.marketplace/src/market-contract/sale.ts#L67-L96\n")),(0,l.kt)("h3",{id:"purchasing-nfts"},"NFT \uad6c\ub9e4"),(0,l.kt)("p",null,"NFT\ub97c \uad6c\ub9e4\ud558\ub824\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"offer")," \ud568\uc218\ub97c \ud638\ucd9c\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774\ub294 \ub9e4\uac1c\ubcc0\uc218\ub85c ",(0,l.kt)("inlineCode",{parentName:"p"},"nft_contract_id"),"\uc640 ",(0,l.kt)("inlineCode",{parentName:"p"},"token_id"),"\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uad6c\ub9e4\ud558\uace0 \uc2f6\ub2e4\uba74, \uc815\ud655\ud55c \uc591\uc758 NEAR\ub97c \ud638\ucd9c\uc5d0 \ucca8\ubd80\ud574\uc57c \ud569\ub2c8\ub2e4. \ub0b4\ubd80\uc801\uc73c\ub85c, \uc774\ub294 \ub2f9\uc2e0\uc758 \uae08\uc561\uc774 \uc815\uac00\ubcf4\ub2e4 \ud070\uc9c0 \ud655\uc778\ud558\uace0, ",(0,l.kt)("inlineCode",{parentName:"p"},"processPurchase")," \ud568\uc218\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4. \ud574\ub2f9 \ud568\uc218\ub294 NFT \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ub300\ud55c \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc744 \uc218\ud589\ud558\uc5ec ",(0,l.kt)("inlineCode",{parentName:"p"},"nft_transfer_payout")," \ud568\uc218\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4. \uc774\ub807\uac8c \ud558\uba74, \uc774\uc804\uc5d0 \ubc30\uc6b4 ",(0,l.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/ApprovalManagement"},"\uc2b9\uc778 \uad00\ub9ac")," \ud45c\uc900\uc744 \uc0ac\uc6a9\ud558\uc5ec NFT\ub97c \uc804\uc1a1\ud558\uace0, \ub85c\uc5f4\ud2f0\uac00 \ud3ec\ud568\ub41c ",(0,l.kt)("inlineCode",{parentName:"p"},"Payout")," \uac1d\uccb4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uadf8\ub7f0 \ub2e4\uc74c \ub9c8\ucf13\ud50c\ub808\uc774\uc2a4\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"resolve_purchase"),"\ub97c \ud638\ucd9c\ud558\uc5ec \uc545\uc758\uc801\uc778 \uc9c0\ubd88 \uac1d\uccb4\ub97c \ud655\uc778\ud558\uace0, \ubaa8\ub4e0 \uac83\uc774 \uc798 \uc9c4\ud589\ub418\uba74 \uc62c\ubc14\ub978 \uacc4\uc815\uc5d0 \uc9c0\ubd88\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/8.marketplace/src/market-contract/sale.ts#L98-L131\n")),(0,l.kt)("h2",{id:"sale_view-ts"},"sale_view.ts"),(0,l.kt)("p",null,"\ub9c8\uc9c0\ub9c9\uc73c\ub85c \uc0b4\ud3b4\ubcfc \ud30c\uc77c\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"sale_view.ts")," \ud30c\uc77c\uc785\ub2c8\ub2e4. \uc5ec\uae30\uc5d0 \uc5f4\uac70 \uba54\uc11c\ub4dc \uc911 \uc77c\ubd80\uac00 \uc124\uba85\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \uc0ac\uc6a9\uc790\ub294 \ud310\ub9e4\uc5d0 \uad00\ud55c \uc911\uc694\ud55c \uc815\ubcf4\ub97c \ucffc\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"total-supply"},"\ucd1d \uacf5\uae09\ub7c9"),(0,l.kt)("p",null,"\ub9c8\ucf13\ud50c\ub808\uc774\uc2a4\uc5d0 \ub4f1\ub85d\ub41c NFT\uc758 \ucd1d \uacf5\uae09\ub7c9\uc744 \ucffc\ub9ac\ud558\ub824\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"get_supply_sales")," \ud568\uc218\ub97c \ud638\ucd9c\ud558\uba74 \ub429\ub2c8\ub2e4. \uc544\ub798\uc5d0\uc11c \uc608\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"near view $MARKETPLACE_CONTRACT_ID get_supply_sales\n")),(0,l.kt)("h3",{id:"total-supply-by-owner"},"\uc18c\uc720\uc790\uac00 \uac00\uc9c4 \ucd1d \uacf5\uae09\ub7c9"),(0,l.kt)("p",null,"\ub9c8\ucf13\ud50c\ub808\uc774\uc2a4\uc758 \ud2b9\uc815 \uc18c\uc720\uc790\uac00 \ub098\uc5f4\ud55c NFT\uc758 \ucd1d \uacf5\uae09\ub7c9\uc744 \ucffc\ub9ac\ud558\ub824\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"get_supply_by_owner_id")," \ud568\uc218\ub97c \ud638\ucd9c\ud558\uba74 \ub429\ub2c8\ub2e4. \uc544\ub798\uc5d0\uc11c \uc608\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'near view $MARKETPLACE_CONTRACT_ID get_supply_by_owner_id \'{"account_id": "benji.testnet"}\'\n')),(0,l.kt)("h3",{id:"total-supply-by-contract"},"\ucee8\ud2b8\ub799\ud2b8\uac00 \uac00\uc9c4 \ucd1d \uacf5\uae09\ub7c9"),(0,l.kt)("p",null,"\ud2b9\uc815 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc18d\ud558\ub294 NFT\uc758 \ucd1d \uacf5\uae09\ub7c9\uc744 \ucffc\ub9ac\ud558\ub824\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"get_supply_by_nft_contract_id")," \ud568\uc218\ub97c \ud638\ucd9c\ud558\uba74 \ub429\ub2c8\ub2e4. \uc544\ub798\uc5d0\uc11c \uc608\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'near view $MARKETPLACE_CONTRACT_ID get_supply_by_nft_contract_id \'{"nft_contract_id": "fayyr-nft.testnet"}\'\n')),(0,l.kt)("h3",{id:"query-listing-information"},"\ub9ac\uc2a4\ud305 \uc815\ubcf4 \ucffc\ub9ac"),(0,l.kt)("p",null,"\ud2b9\uc815 \ub9ac\uc2a4\ud305\uc5d0 \ub300\ud55c \uc911\uc694\ud55c \uc815\ubcf4\ub97c \ucffc\ub9ac\ud558\uae30 \uc704\ud574 ",(0,l.kt)("inlineCode",{parentName:"p"},"get_sale")," \ud568\uc218\ub97c \ud638\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \uc704\ud574\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"nft_contract_token"),"\uc744 \ud1b5\uacfc\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774\ub294 \ubcf8\uc9c8\uc801\uc73c\ub85c \uc55e\uc11c \uc124\uba85\ud55c \ub300\ub85c \ub9c8\ucf13\ud50c\ub808\uc774\uc2a4 \ucee8\ud2b8\ub799\ud2b8 \ud310\ub9e4\uc5d0 \ub300\ud55c \uace0\uc720 \uc2dd\ubcc4\uc790\uc785\ub2c8\ub2e4. \uc774\ub294 NFT \ucee8\ud2b8\ub799\ud2b8\uc640 ",(0,l.kt)("inlineCode",{parentName:"p"},"DELIMITER"),", \ud1a0\ud070 ID\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4. \uc774 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c, ",(0,l.kt)("inlineCode",{parentName:"p"},"DELIMITER"),"\ub294 \ub2e8\uc21c\ud55c \uae30\uac04\uc785\ub2c8\ub2e4: ",(0,l.kt)("inlineCode",{parentName:"p"},"."),". \uc774 \ucffc\ub9ac\uc758 \uc608\uc2dc\ub294 \uc544\ub798\uc5d0\uc11c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'near view $MARKETPLACE_CONTRACT_ID get_sale \'{"nft_contract_token": "fayyr-nft.testnet.token-42"}\'\n')),(0,l.kt)("p",null,"\ub610\ud55c ",(0,l.kt)("inlineCode",{parentName:"p"},"get_sales_by_owner_id")," \ud568\uc218\ub97c \ud638\ucd9c\ud558\uc5ec, \uc9c0\uc815\ub41c \uc18c\uc720\uc790\uc758 \ubaa9\ub85d\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ucffc\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'near view $MARKETPLACE_CONTRACT_ID get_sales_by_owner_id \'{"account_id": "benji.testnet", "from_index": "5", "limit": 10}\'\n')),(0,l.kt)("p",null,"\ub9c8\uc9c0\ub9c9\uc73c\ub85c ",(0,l.kt)("inlineCode",{parentName:"p"},"get_sales_by_nft_contract_id")," \ud568\uc218\ub97c \ud638\ucd9c\ud558\uc5ec \uc9c0\uc815\ub41c NFT \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ubc1c\uc0dd\ud55c \ub9ac\uc2a4\ud305\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ucffc\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'near view $MARKETPLACE_CONTRACT_ID get_sales_by_nft_contract_id \'{"nft_contract_id": "fayyr-nft.testnet, "from_index": "5", "limit": 10}\'\n')),(0,l.kt)("h2",{id:"\uacb0\ub860"},"\uacb0\ub860"),(0,l.kt)("p",null,"\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c\ub294 \ub9c8\ucf13\ud50c\ub808\uc774\uc2a4 \ucee8\ud2b8\ub799\ud2b8\uc758 \uae30\ubcf8 \uc0ac\ud56d\uacfc \uc791\ub3d9 \ubc29\uc2dd\uc5d0 \ub300\ud574 \ubc30\uc6e0\uc2b5\ub2c8\ub2e4. ",(0,l.kt)("a",{parentName:"p",href:"#index-ts"},"index.ts")," \ud30c\uc77c\uc744 \ud6d1\uc5b4\ubcf4\uba70 ",(0,l.kt)("a",{parentName:"p",href:"#storage-management-model"},"\uc2a4\ud1a0\ub9ac\uc9c0 \uad00\ub9ac")," \ubaa8\ub378 \uc678\uc5d0 ",(0,l.kt)("a",{parentName:"p",href:"#initialization-function"},"\ucd08\uae30\ud654 \ud568\uc218"),"\uc5d0 \ub300\ud574\uc11c\ub3c4 \ubc30\uc6e0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uadf8\ub7f0 \ub2e4\uc74c ",(0,l.kt)("a",{parentName:"p",href:"#nft_callbacks-ts"},"nft_callbacks")," \ud30c\uc77c\uc744 \uac80\ud1a0\ud558\uc5ec ",(0,l.kt)("a",{parentName:"p",href:"#listing-logic"},"NFT\ub97c \ub9ac\uc2a4\ud305"),"\ud558\ub294 \ubc29\ubc95\uc744 \uc774\ud574\ud588\uc2b5\ub2c8\ub2e4. \ub610\ud55c NFT\ub97c \ub098\uc5f4\ud55c \ud6c4 \ud544\uc694\ud55c \uba87 \uac00\uc9c0 \uc911\uc694\ud55c \ud568\uc218\uc5d0 \ub300\ud574 \uc0b4\ud3b4\ubcf4\uc558\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\ub294 ",(0,l.kt)("a",{parentName:"p",href:"#removing-sales"},"\ub9ac\uc2a4\ud305 \uc81c\uac70"),", ",(0,l.kt)("a",{parentName:"p",href:"#updating-price"},"\uac00\uaca9 \uc5c5\ub370\uc774\ud2b8")," \ubc0f ",(0,l.kt)("a",{parentName:"p",href:"#purchasing-nfts"},"NFT \uad6c\ub9e4"),"\uac00 \ud3ec\ud568\ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub9c8\uc9c0\ub9c9\uc73c\ub85c ",(0,l.kt)("a",{parentName:"p",href:"#sale_view-ts"},(0,l.kt)("inlineCode",{parentName:"a"},"sale_view"))," \ud30c\uc77c\uc5d0 \uc788\ub294 \uc5f4\uac70 \uba54\uc11c\ub4dc\ub97c \uc0b4\ud3b4\ubcf4\uc558\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \ub9c8\ucf13\ud50c\ub808\uc774\uc2a4 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc788\ub294 \uc911\uc694\ud55c \uc815\ubcf4\ub97c \ucffc\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774\uc81c NEAR\uc758 NFT \ubc0f \ub9c8\ucf13\ud50c\ub808\uc774\uc2a4\uc5d0 \ub300\ud574 \ud655\uc2e4\ud558\uac8c \uc774\ud574\ud558\uc168\uc744 \uac83\uc785\ub2c8\ub2e4. \uc790\uc720\ub86d\uac8c \ubcc0\ud615\ud558\uace0 \uc774\ub7ec\ud55c \ucee8\ud2b8\ub799\ud2b8\ub97c \ud655\uc7a5\ud558\uc5ec \uc6d0\ud558\ub294 \uba4b\uc9c4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc138\uc0c1\uc740 \ub2f9\uc2e0\uc758 \uac83\uc785\ub2c8\ub2e4! \uc774 \uc5ec\uc815\uc5d0 \ucc38\uc5ec\ud574 \uc8fc\uc154\uc11c \uac10\uc0ac\ud569\ub2c8\ub2e4. \uc78a\uc9c0 \ub9c8\uc138\uc694. ",(0,l.kt)("strong",{parentName:"p"},"\ud654\uc774\ud305!")),(0,l.kt)("admonition",{title:"\ubb38\uc11c \ubc84\uc804 \uad00\ub9ac",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\uae00\uc744 \uc791\uc131\ud558\ub294 \uc2dc\uc810\uc5d0\uc11c, \ud574\ub2f9 \uc608\uc81c\ub294 \ub2e4\uc74c \ubc84\uc804\uc5d0\uc11c \uc791\ub3d9\ud569\ub2c8\ub2e4."),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"near-cli: ",(0,l.kt)("inlineCode",{parentName:"li"},"3.0.0")),(0,l.kt)("li",{parentName:"ul"},"NFT \ud45c\uc900: ",(0,l.kt)("a",{parentName:"li",href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core"},"NEP171"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"1.0.0")," \ubc84\uc804"))))}u.isMDXComponent=!0}}]);