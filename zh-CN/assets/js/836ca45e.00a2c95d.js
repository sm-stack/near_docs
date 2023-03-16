"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8392],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},p=Object.keys(t);for(n=0;n<p.length;n++)a=p[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(n=0;n<p.length;n++)a=p[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,p=t.originalType,o=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),s=d(a),k=r,u=s["".concat(o,".").concat(k)]||s[k]||m[k]||p;return a?n.createElement(u,l(l({ref:e},c),{},{components:a})):n.createElement(u,l({ref:e},c))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var p=a.length,l=new Array(p);l[0]=s;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var d=2;d<p;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},9051:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var n=a(87462),r=a(63366),p=(a(67294),a(3905)),l=["components"],i={id:"providers",title:"RPC \uc81c\uacf5\uc790"},o=void 0,d={unversionedId:"api/rpc/providers",id:"api/rpc/providers",title:"RPC \uc81c\uacf5\uc790",description:"\uc120\ud0dd\ud560 \uc218 \uc788\ub294 \uc5ec\ub7ec RPC \uacf5\uae09\uc790\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uacf5\uae09\uc790\ub294 NEAR \ub124\ud2b8\uc6cc\ud06c\uc640 \uc0c1\ud638 \uc791\uc6a9\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub418\ub294 \uc911\uac1c\uc790 \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4. \uacf5\uae09\uc790\uac00 \uc788\ub294 \uc704\uce58\uc5d0 \ub530\ub77c, \uac01\uac01 \ub2e4\ub978 \ub808\uc774\ud134\uc2dc \uc218\uc900\uc744 \uacbd\ud5d8\ud558\uac8c \ub429\ub2c8\ub2e4. \uc774\uc911\ud654(redundancy) \ubc0f \uade0\ud615 \uc870\uc815\uc744 \uc704\ud574 \uc7a0\uc7ac\uc801\uc73c\ub85c \uc5ec\ub7ec \uacf5\uae09\uc790\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/../docs/5.api/rpc/providers.md",sourceDirName:"5.api/rpc",slug:"/api/rpc/providers",permalink:"/near_docs/zh-CN/api/rpc/providers",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/5.api/rpc/providers.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"2023\u5e743\u67089\u65e5",frontMatter:{id:"providers",title:"RPC \uc81c\uacf5\uc790"},sidebar:"api",previous:{title:"\ud648",permalink:"/near_docs/zh-CN/api/rpc/introduction"},next:{title:"\uc124\uc815",permalink:"/near_docs/zh-CN/api/rpc/setup"}},c={},m=[],s={toc:m};function k(t){var e=t.components,a=(0,r.Z)(t,l);return(0,p.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\uc120\ud0dd\ud560 \uc218 \uc788\ub294 \uc5ec\ub7ec RPC \uacf5\uae09\uc790\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uacf5\uae09\uc790\ub294 NEAR \ub124\ud2b8\uc6cc\ud06c\uc640 \uc0c1\ud638 \uc791\uc6a9\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub418\ub294 \uc911\uac1c\uc790 \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4. \uacf5\uae09\uc790\uac00 \uc788\ub294 \uc704\uce58\uc5d0 \ub530\ub77c, \uac01\uac01 \ub2e4\ub978 \ub808\uc774\ud134\uc2dc \uc218\uc900\uc744 \uacbd\ud5d8\ud558\uac8c \ub429\ub2c8\ub2e4. \uc774\uc911\ud654(redundancy) \ubc0f \uade0\ud615 \uc870\uc815\uc744 \uc704\ud574 \uc7a0\uc7ac\uc801\uc73c\ub85c \uc5ec\ub7ec \uacf5\uae09\uc790\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("admonition",{type:"tip"},(0,p.kt)("p",{parentName:"admonition"},"\ub9cc\uc57d NEAR \uc9c0\uac11 \uc120\ud0dd\uae30(Wallet Selector)\ub85c \uc0ac\uc6a9\uc790 \uc815\uc758 RPC \uacf5\uae09\uc790\ub97c \uc0ac\uc6a9\ud558\ub824\uba74, ",(0,p.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/develop/integrate/frontend/#%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%A0%95%EC%9D%98-rpc-%EC%97%94%EB%93%9C%ED%8F%AC%EC%9D%B8%ED%8A%B8-%EC%84%A4%EC%A0%95"},"\ub2e4\uc74c \uc608\uc81c"),"\ub97c \ucc38\uace0\ud558\uc138\uc694.")),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"\uc5d4\ub4dc\ud3ec\uc778\ud2b8 \ub8e8\ud2b8"),(0,p.kt)("th",{parentName:"tr",align:null},"\uacf5\uae09\uc790"),(0,p.kt)("th",{parentName:"tr",align:null},"\ubb38\uc11c"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"https://rpc.mainnet.near.org")),(0,p.kt)("td",{parentName:"tr",align:null},"NEAR"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/near_docs/zh-CN/api/rpc/setup"},"\uc5ec\uae30 \uc788\uc2b5\ub2c8\ub2e4!"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"https://near-mainnet.api.pagoda.co/rpc/v1")),(0,p.kt)("td",{parentName:"tr",align:null},"Pagoda"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"https://www.pagoda.co/console"},"https://www.pagoda.co/console"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"https://near-mainnet.infura.io/v3/")),(0,p.kt)("td",{parentName:"tr",align:null},"Infura"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"https://docs.infura.io/infura/networks/near"},"https://docs.infura.io/infura/networks/near"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"https://rpc.dev.gateway.fm/v1/near/")),(0,p.kt)("td",{parentName:"tr",align:null},"Gateway.fm"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"https://gateway.fm/"},"https://gateway.fm/"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"https://rpc.ankr.com/near")),(0,p.kt)("td",{parentName:"tr",align:null},"ankr.com"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"https://www.ankr.com/docs/build-blockchain/chains/v2/near/"},"https://www.ankr.com/docs/build-blockchain/chains/v2/near/"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"https://public-rpc.blockpi.io/http/near")),(0,p.kt)("td",{parentName:"tr",align:null},"BlockPi"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"https://chains.blockpi.io/#/near"},"https://chains.blockpi.io/#/near"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"-"),(0,p.kt)("td",{parentName:"tr",align:null},"figment.io"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"https://docs.figment.io/guides/staking-api/near/delegate/"},"https://docs.figment.io/guides/staking-api/near/delegate/"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"-"),(0,p.kt)("td",{parentName:"tr",align:null},"Chainstack"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"https://chainstack.com/build-better-with-near/"},"https://chainstack.com/build-better-with-near/"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"-"),(0,p.kt)("td",{parentName:"tr",align:null},"QuickNode"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"https://www.quicknode.com/chains/near"},"https://www.quicknode.com/chains/near"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"https://near-mainnet-rpc.allthatnode.com:3030")),(0,p.kt)("td",{parentName:"tr",align:null},"All That Node"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"https://docs.allthatnode.com/protocols/near/"},"https://docs.allthatnode.com/protocols/near/"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"https://getblock.io/nodes/near/")),(0,p.kt)("td",{parentName:"tr",align:null},"GetBlock"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"https://getblock.io/nodes/near/"},"https://getblock.io/nodes/near/"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"http://bit.do/freeapikey-near")),(0,p.kt)("td",{parentName:"tr",align:null},"NOWNodes"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"https://nownodes.io/"},"https://nownodes.io/"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"https://endpoints.omniatech.io/v1/near/mainnet/public")),(0,p.kt)("td",{parentName:"tr",align:null},"OMNIA"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"https://omniatech.io/"},"https://omniatech.io/"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"https://1rpc.io/near")),(0,p.kt)("td",{parentName:"tr",align:null},"1RPC"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"https://docs.ata.network/1rpc/introduction/"},"https://docs.ata.network/1rpc/introduction/"))))))}k.isMDXComponent=!0}}]);