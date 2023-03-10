"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6588],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),s=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},c=function(t){var e=s(t.components);return n.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),u=s(a),k=r,d=u["".concat(i,".").concat(k)]||u[k]||m[k]||l;return a?n.createElement(d,p(p({ref:e},c),{},{components:a})):n.createElement(d,p({ref:e},c))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=u;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:r,p[1]=o;for(var s=2;s<l;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},37293:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),p=["components"],o={id:"gas-advanced",title:"\uac00\uc2a4 - \uace0\uae09"},i=void 0,s={unversionedId:"concepts/basics/transactions/gas-advanced",id:"concepts/basics/transactions/gas-advanced",title:"\uac00\uc2a4 - \uace0\uae09",description:"\ubcf5\uc7a1\ud55c Action\uc758 \ube44\uc6a9",source:"@site/../docs/1.concepts/basics/transactions/gas-advanced.md",sourceDirName:"1.concepts/basics/transactions",slug:"/concepts/basics/transactions/gas-advanced",permalink:"/near_docs/vi/concepts/basics/transactions/gas-advanced",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/basics/transactions/gas-advanced.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"9 thg 3, 2023",frontMatter:{id:"gas-advanced",title:"\uac00\uc2a4 - \uace0\uae09"},sidebar:"\uac1c\ub150",previous:{title:"\uac00\uc2a4",permalink:"/near_docs/vi/concepts/basics/transactions/gas"},next:{title:"NEAR \ub370\uc774\ud130 \ud750\ub984",permalink:"/near_docs/vi/concepts/data-flow/near-data-flow"}},c={},m=[{value:"\ubcf5\uc7a1\ud55c Action\uc758 \ube44\uc6a9",id:"costs-of-complex-actions",level:2},{value:"\ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec",id:"deploying-contracts",level:3},{value:"\ud568\uc218 \ud638\ucd9c",id:"function-calls",level:3},{value:"Ethereum\uacfc \ubcfc\ud30c\ud06c \ube44\uad50",id:"ballpark-comparisons-to-ethereum",level:4},{value:"\uc790\ub3d9\ud654\ub41c \ud14c\uc2a4\ud2b8\ub85c \uac00\uc2a4 \ube44\uc6a9 \uc608\uce21\ud558\uae30",id:"accurate-estimates-with-automated-tests",level:4},{value:"SDK\uc5d0\uc11c \uac00\uc2a4 \ube44\uc6a9 \ucd94\uc815",id:"gas-cost-estimation-in-the-sdk",level:4},{value:"\ube44\uad00\uc801\uc778 \uac00\uc2a4 \uac00\uaca9 \uc778\ud50c\ub808\uc774\uc158",id:"\ube44\uad00\uc801\uc778-\uac00\uc2a4-\uac00\uaca9-\uc778\ud50c\ub808\uc774\uc158",level:2},{value:"\uc9c0\uae08 \uac00\uc2a4 \uac00\uaca9\uc740 \uc5bc\ub9c8\uc778\uac00\uc694?",id:"whats-the-price-of-gas-right-now",level:2},{value:"\ubc31\uc11c\uc5d0\uc11c\uc758 \uba87 \uac00\uc9c0 \ub9c8\ubb34\ub9ac \uc0dd\uac01",id:"some-closing-thoughts-from-the-whitepaper",level:2}],u={toc:m};function k(t){var e=t.components,a=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"costs-of-complex-actions"},"\ubcf5\uc7a1\ud55c Action\uc758 \ube44\uc6a9"),(0,l.kt)("p",null,"\ucee8\ud2b8\ub799\ud2b8 \ubc0f \ud568\uc218 \ud638\ucd9c \ubc30\ud3ec\uc640 \uac19\uc740 \uc880 \ub354 \ubcf5\uc7a1\ud55c \uac00\uc2a4 \uacc4\uc0b0\uc5d0 \ub300\ud574 \ub2e4\ub904\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"deploying-contracts"},"\ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec"),(0,l.kt)("p",null,"\uae30\ubcf8 Action \ube44\uc6a9\uc5d0\ub294 \ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec\ub97c \uc704\ud55c \ub450 \uac00\uc9c0 \ub2e4\ub978 \uac12\uc774 \ud3ec\ud568\ub429\ub2c8\ub2e4. \ub2e8\uc21c\ud654\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"deploy_contract_cost: 184765750000,\ndeploy_contract_cost_per_byte: 64572944,\n")),(0,l.kt)("p",null,"\uc774\ub7ec\ud55c \uac12\uc740 ",(0,l.kt)("a",{parentName:"p",href:"/api/rpc/protocol#protocol-config"},(0,l.kt)("inlineCode",{parentName:"a"},"protocol_config"))," RPC \uc5d4\ub4dc\ud3ec\uc778\ud2b8\ub97c \uc0ac\uc6a9\ud558\uc5ec \ucffc\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uccab \ubc88\uc9f8\ub294 \ucee8\ud2b8\ub799\ud2b8 \uaddc\ubaa8\uc5d0 \uad00\uacc4\uc5c6\ub294 \uae30\ubcf8 \ube44\uc6a9\uc785\ub2c8\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"p"},"send"),"\uc640 ",(0,l.kt)("inlineCode",{parentName:"p"},"execute")," \ube44\uc6a9\uc5d0 \ub300\ud574 \uac01\uac01 2\ub97c \uacf1\ud574\uc57c \ud558\uace0, Receipt\ub97c \ubcf4\ub0b4\uace0 \uc2e4\ud589 \ud574\uc57c \ud55c\ub2e4\ub294 \uc810\uc744 \uc5fc\ub450\uc5d0 \ub450\uc5b4\uc57c \ud569\ub2c8\ub2e4. \uac00\uc2a4 \ub2e8\uc704\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"2 * 184765750000 +\n2 * contract_size_in_bytes * 64572944 +\n2 * 108059500000\n")),(0,l.kt)("p",null,"(TGas \uac12\uc73c\ub85c \ud45c\ud604\ud558\ub824\uba74 \uacb0\uacfc \uc22b\uc790\ub97c 10\xb9\xb2\ub85c \ub098\ub215\ub2c8\ub2e4!)"),(0,l.kt)("p",null,"\uc5ec\uae30\uc5d0\ub294 \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 \ubc14\uc774\ud2b8\ub97c \uc5c5\ub85c\ub4dc\ud558\uace0 \uc4f0\ub294 \ube44\uc6a9\uc774 \ud3ec\ud568\ub418\uc9c0\ub9cc, \uc774\ub7ec\ud55c \ubc14\uc774\ud2b8\ub97c \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 \ubcf4\uad00\ud558\ub294 \ube44\uc6a9\uc740 \ud3ec\ud568\ub418\uc9c0 ",(0,l.kt)("strong",{parentName:"p"},"\uc54a\uc2b5\ub2c8\ub2e4")," . \uc7a5\uae30 \uc2a4\ud1a0\ub9ac\uc9c0\ub294 \uc2a4\ud1a0\ub9ac\uc9c0 \uc2a4\ud14c\uc774\ud0b9\uc744 \ud1b5\ud574 \ubcf4\uc0c1\ub418\ub294\ub370, \uc5ec\uae30\uc11c \uc2a4\ud1a0\ub9ac\uc9c0 \uc2a4\ud14c\uc774\ud0b9\uc740 \ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec \uc911\uc5d0 \uacc4\uc815\uc5d0\uc11c \ucc28\uac10\ub418\ub294 \ubcf5\uad6c \uac00\ub2a5\ud55c \ubc14\uc774\ud2b8\ub2f9 \ube44\uc6a9\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"16kb \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\ub824\uba74 \ud2b8\ub79c\uc7ad\uc158 \uc218\uc218\ub8cc\ub85c 2.65 TGas (\ub530\ub77c\uc11c \ucd5c\uc18c \uac00\uc2a4 \uac00\uaca9\uc73c\ub85c 0.265mN)\uac00 \ud544\uc694\ud558\uace0, 1.5N\uc740 \uc2a4\ud1a0\ub9ac\uc9c0 \uc2a4\ud14c\uc774\ud0b9\uc744 \uc704\ud574 \ub77d\uc5c5\ub429\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"function-calls"},"\ud568\uc218 \ud638\ucd9c"),(0,l.kt)("p",null,"NEAR\uc758 \ubc94\uc6a9\uc801\uc778 \ud2b9\uc131\uc744 \uace0\ub824\ud560 \ub54c, \ud568\uc218 \ud638\ucd9c\uc740 \uac00\uc7a5 \ubcf5\uc7a1\ud55c \uac00\uc2a4 \uacc4\uc0b0\uc744 \ud544\uc694\ub85c \ud569\ub2c8\ub2e4. \uc8fc\uc5b4\uc9c4 \ud568\uc218 \ud638\ucd9c\uc740 \uc608\uce21\ud558\uae30 \uc5b4\ub824\uc6b4 \uc591\uc758 CPU, \ub124\ud2b8\uc6cc\ud06c \ubc0f IO\ub97c \uc0ac\uc6a9\ud558\uba70 \uac01\uac01\uc758 \uc591\uc740 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc774\ubbf8 \uc800\uc7a5\ub41c \ub370\uc774\ud130 \uc591\uc5d0 \ub530\ub77c \ubcc0\uacbd\ub420 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4!"),(0,l.kt)("p",null,"\uc774\ub7ec\ud55c \ubcf5\uc7a1\uc131\uc73c\ub85c, \uac00\uc2a4 \uacc4\uc0b0\uc758 \uac01 \ud56d\ubaa9(",(0,l.kt)("a",{parentName:"p",href:"/api/rpc/protocol#protocol-config"},(0,l.kt)("inlineCode",{parentName:"a"},"protocol_config"))," RPC \uc5d4\ub4dc\ud3ec\uc778\ud2b8\ub97c \uc0ac\uc6a9\ud55c ",(0,l.kt)("inlineCode",{parentName:"p"},"wasm_config")," \ub0b4 ",(0,l.kt)("inlineCode",{parentName:"p"},"ext_costs"),"\ub97c \ucc38\uc870\ud558\uc138\uc694)\uc744 \uc5f4\uac70\ud558\ub294 \uc608\uc81c\ub97c \uc0b4\ud3b4\ubcf4\ub294 \uac83\uc740 \ub354 \uc774\uc0c1 \uc720\uc6a9\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/near/nearcore/pull/3038"},"\uc6d0\ud558\ub294 \uacbd\uc6b0")," \uc9c1\uc811 \uc870\uc0ac\ud574\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4). \ub300\uc2e0, \ub450 \uac00\uc9c0 \ub2e4\ub978 \uac01\ub3c4\uc5d0\uc11c \uc811\uadfc\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4. (1) Ethereum\uacfc \ube44\uad50\ud558\uace0, (2) \uc790\ub3d9\ud654\ub41c \ud14c\uc2a4\ud2b8\ub97c \ud1b5\ud574 \uc815\ud655\ud55c \ucd94\uc815\uce58\ub97c \uc5bb\uc5b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("blockquote",{class:"lesson"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uacc4\uc815\uc5d0 30% \ubcf4\uc0c1\uc73c\ub85c \ub4e4\uc5b4\uac00\ub294 \uac00\uc2a4\ube44\ub294 \uc5bc\ub9c8\uc778\uac00\uc694?")),(0,l.kt)("p",null,"NEAR \ubc31\uc11c\ub294 ",(0,l.kt)("a",{parentName:"p",href:"https://near.org/papers/the-official-near-white-paper/"},"\ubaa8\ub4e0 \uac00\uc2a4 \uc218\uc218\ub8cc\uc758 30%"),"\uac00 \uc218\uc218\ub8cc\uac00 \uc9c0\ucd9c\ub418\ub294 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uacc4\uc815\uc73c\ub85c \uac04\ub2e4\uace0 \uc5b8\uae09\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774 \uae08\uc561\uc740 \ub450 \uac00\uc9c0 \ubc29\ubc95\uc73c\ub85c \ud568\uc218 \ud638\ucd9c\uc5d0 \ub300\ud574 \uacc4\uc0b0\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\uac00\uc2a4 \ud504\ub85c\ud30c\uc77c \ub0b4 \ubaa8\ub4e0 \uac12\uc744 \ud569\uc0b0\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\ud2b8\ub79c\uc7ad\uc158\uc744 \uc704\ud574 \uc18c\uc9c4\ub41c \ucd1d \uac00\uc2a4\uc5d0\uc11c \uc815\uc801 \uc2e4\ud589 \uac00\uc2a4(Receipt \uc804\uc1a1\uc5d0 \uc18c\ube44\ub41c \uac00\uc2a4 \uc591\uacfc \ub3d9\uc77c)\ub97c \ube8d\ub2c8\ub2e4. \uc774 \ub450 \uc22b\uc790\ub294 \ud2b8\ub79c\uc7ad\uc158\uc5d0 \ub300\ud55c ",(0,l.kt)("a",{parentName:"li",href:"https://explorer.near.org/"},"NEAR \uc775\uc2a4\ud50c\ub85c\ub7ec")," \uac1c\uc694 \ud398\uc774\uc9c0\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("p",null,"\ub450 \ubc88\uc9f8 \uc811\uadfc \ubc29\uc2dd\uc740 \ub354 \uc9e7\uace0 \uae30\uc5b5\ud558\uae30 \ub354 \uc27d\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uacc4\uc815\uc774 ",(0,l.kt)("inlineCode",{parentName:"li"},"aurora"),"\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"li"},"submit")," \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud2b8\ub79c\uc7ad\uc158\uc744 Receipt\ub85c \uc804\ud658\ud558\uc5ec \ucd1d ~0.00024\u24c3\ub97c \uc18c\uac01\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"Receipt \uc2e4\ud589\uc73c\ub85c \ucd1d ~0.00376\u24c3\ub97c \uc18c\uac01\ud569\ub2c8\ub2e4.")))),(0,l.kt)("p",null,"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uc18c\uc720\uc790(\uc774 \uacbd\uc6b0 aurora)\uc5d0 \ub300\ud55c 30% \ubcf4\uc0c1\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4. (0.00376\u24c3 - 0.00024\u24c3) * 0.3 = 0.001056\u24c3"),(0,l.kt)("p",null,"\uc774 \ud2b8\ub79c\uc7ad\uc158\uc740 ",(0,l.kt)("a",{parentName:"p",href:"https://explorer.near.org/transactions/GzRn9yhDaQ8f3ReJguCBGxdi4iJEeBguJ5MWufMcu1JP"},"\uc5ec\uae30"),"\uc5d0\uc11c\ub3c4 \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc790\uc720\ub86d\uac8c \ub458\ub7ec\ubcf4\uc138\uc694!"),(0,l.kt)("p",null,"\uc5ec\ub7ec \ucee8\ud2b8\ub799\ud2b8\uac00 \ud3ec\ud568\ub41c \ud638\ucd9c\uc758 \uacbd\uc6b0, \uc774 \ubc29\ubc95\uc73c\ub85c \uac01 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ub300\ud55c \ubcf4\uc0c1\uc744 \uacc4\uc0b0\ud558\ub294 \uac83\uc740 NEAR \uc775\uc2a4\ud50c\ub85c\ub7ec(2022\ub144 6\uc6d4)\uc5d0 \ud45c\uc2dc\ub41c \ub370\uc774\ud130\ub9cc\uc73c\ub85c\ub294 \ubd88\uac00\ub2a5\ud560 \uac83\uc785\ub2c8\ub2e4. \uc775\uc2a4\ud50c\ub85c\ub7ec\ub294 \ub450 \ubc88\uc9f8(\ubc0f \uae30\ud0c0) Receipt\uc5d0 \ub300\ud55c \ubcc0\ud658 \ube44\uc6a9\uc744 \ud45c\uc2dc\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4.")),(0,l.kt)("h4",{id:"ballpark-comparisons-to-ethereum"},"Ethereum\uacfc \ubcfc\ud30c\ud06c \ube44\uad50"),(0,l.kt)("p",null,"NEAR\uc640 \ub9c8\ucc2c\uac00\uc9c0\ub85c Ethereum\uc740 \uac00\uc2a4 \ub2e8\uc704\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc791\uc5c5\uc758 \uacc4\uc0b0 \ubcf5\uc7a1\uc131\uc744 \ubaa8\ub378\ub9c1\ud569\ub2c8\ub2e4. NEAR\uc640 \uac19\uc774 \uc608\uce21 \uac00\ub2a5\ud55c \uac00\uc2a4 \uac00\uaca9\uc744 \uc0ac\uc6a9\ud558\ub294 \ub300\uc2e0, Ethereum\uc740 \ub3d9\uc801\uc778 \uacbd\ub9e4 \uae30\ubc18 \uc2dc\uc7a5\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc774 \uc0ac\uc2e4\uc740 Ethereum\uc758 \uac00\uc2a4 \uac00\uaca9\uacfc \ube44\uad50\ud558\ub294 \uac83\uc744 \uc57d\uac04 \uae4c\ub2e4\ub86d\uac8c \ub9cc\ub4e4\uc9c0\ub9cc, \ucd5c\uc120\uc744 \ub2e4\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"Etherscan\uc740 ",(0,l.kt)("a",{parentName:"p",href:"https://etherscan.io/chart/gasprice"},"Ethereum \uac00\uc2a4 \uac00\uaca9 \ucc28\ud2b8"),'\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc774 \uac00\uaca9\ub4e4\uc740 "Gwei" \ub610\ub294 Gigawei \ud615\ud0dc\ub85c \ud45c\ud604\ub418\uba70, \uc5ec\uae30\uc11c wei\ub294 \uac00\ub2a5\ud55c \ucd5c\uc18c\uc758 ETH \uae08\uc561\uc778 10\u207b\xb9\u2078 ETH\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4. 2017\ub144 11\uc6d4\ubd80\ud130 2020\ub144 7\uc6d4\uae4c\uc9c0 \ud3c9\uade0 \uac00\uc2a4 \uac00\uaca9\uc740 21Gwei\uc600\uc2b5\ub2c8\ub2e4. \uc774\ub97c "\ud3c9\uade0" \uac00\uc2a4 \uac00\uaca9\uc774\ub77c\uace0 \ubd80\ub974\uaca0\uc2b5\ub2c8\ub2e4. 2020\ub144 7\uc6d4 \ud3c9\uade0 \uac00\uc2a4 \uac00\uaca9\uc740 57Gwei\uae4c\uc9c0 \uc62c\ub790\uc2b5\ub2c8\ub2e4. \uc774\uac83\uc744 "\ub192\uc740" \uc774\ub354\ub9ac\uc6c0 \uac00\uc2a4 \uc218\uc218\ub8cc\ub77c\uace0 \ubd88\ub7ec\ubd05\uc2dc\ub2e4.'),(0,l.kt)("p",null,'\uc774\ub354\ub9ac\uc6c0\uc758 \uac00\uc2a4 \ub2e8\uc704\uc5d0 \uac00\uc2a4 \uac00\uaca9\uc744 \uacf1\ud558\uba74 \uc77c\ubc18\uc801\uc73c\ub85c NEAR\uc758 TGas\ub97c milliNEAR\ub85c \ubcc0\ud658\ud55c \uac83\uacfc \uac19\uc740 \ubc29\uc2dd\uc73c\ub85c milliETH(mE)\ub85c \ud45c\uc2dc\ud558\uae30 \uc26c\uc6b4 \uae08\uc561\uc774 \ub429\ub2c8\ub2e4. \uba87 \uac00\uc9c0 \uc77c\ubc18\uc801\uc778 \uc791\uc5c5\uc758 \uacbd\uc6b0\ub97c \ub098\ub780\ud788 \uc0b4\ud3b4\ubcf4\uace0 ETH\uc758 \uac00\uc2a4 \ub2e8\uc704\ub97c NEAR\uc758 \uac00\uc2a4 \ub2e8\uc704\uc640 \ube44\uad50\ud558\uace0 \uc704\uc758 "\ud3c9\uade0" \ubc0f "\ub192\uc740" \uac00\uc2a4 \uac00\uaca9\uc73c\ub85c \ubcc0\ud658\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4.'),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\uc791\uc5c5"),(0,l.kt)("th",{parentName:"tr",align:null},"ETH \uac00\uc2a4 \ub2e8\uc704"),(0,l.kt)("th",{parentName:"tr",align:null},"\ud3c9\uade0 mE"),(0,l.kt)("th",{parentName:"tr",align:null},"\ub192\uc740 mE"),(0,l.kt)("th",{parentName:"tr",align:null},"NEAR TGas"),(0,l.kt)("th",{parentName:"tr",align:null},"mN"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\ub124\uc774\ud2f0\ube0c \ud1a0\ud070 \uc804\uc1a1 (ETH or NEAR)"),(0,l.kt)("td",{parentName:"tr",align:null},"21k"),(0,l.kt)("td",{parentName:"tr",align:null},"0.441"),(0,l.kt)("td",{parentName:"tr",align:null},"1.197"),(0,l.kt)("td",{parentName:"tr",align:null},"0.45"),(0,l.kt)("td",{parentName:"tr",align:null},"0.045")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/near-examples/FT/pull/42"},"\ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070")," \ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec \ubc0f \ucd08\uae30\ud654"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/chadoh/erc20-test"},"1.1M")),(0,l.kt)("td",{parentName:"tr",align:null},"23.3"),(0,l.kt)("td",{parentName:"tr",align:null},"63.1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://explorer.testnet.near.org/transactions/GsgH2KoxLZoL8eoutM2NkHe5tBPnRfyhcDMZaBEsC7Sm"},"9"),(0,l.kt)("super",null,"\u2020")),(0,l.kt)("td",{parentName:"tr",align:null},"0.9 (",(0,l.kt)("a",{parentName:"td",href:"/concepts/storage/storage-staking"},"\uc2a4\ud1a0\ub9ac\uc9c0 \uc2a4\ud14c\uc774\ud0b9"),"\uc5d0 1.5\u24c3 \ucd94\uac00)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\ub300\uccb4 \uac00\ub2a5 \ud1a0\ud070 \uc804\uc1a1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://ethereum.stackexchange.com/questions/71235/gas-limit-for-erc-20-tokens"},"~45k")),(0,l.kt)("td",{parentName:"tr",align:null},"0.945"),(0,l.kt)("td",{parentName:"tr",align:null},"2.565"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://explorer.testnet.near.org/transactions/5joKRvsmpEXzhVShsPDdV8z5EG9bGMWeuM9e9apLJhLe"},"14")),(0,l.kt)("td",{parentName:"tr",align:null},"1.4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\ub300\uccb4 \uac00\ub2a5 \ud1a0\ud070\uc5d0 \ub300\ud55c \uc5d0\uc2a4\ud06c\ub85c \uc124\uc815"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/chadoh/erc20-test"},"44k")),(0,l.kt)("td",{parentName:"tr",align:null},"0.926"),(0,l.kt)("td",{parentName:"tr",align:null},"2.51"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://explorer.testnet.near.org/transactions/34pW67zsotFsD1DY8GktNhZT9yP5KHHeWAmhKaYvvma6"},"8")),(0,l.kt)("td",{parentName:"tr",align:null},"0.8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\ub300\uccb4 \uac00\ub2a5 \ud1a0\ud070 \uc794\uc561 \ud655\uc778"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0")))),(0,l.kt)("super",null,"\u2020")," \ud568\uc218 \ud638\ucd9c\uc740 VM\uc744 \uac00\ub3d9\ud558\uace0 \ucef4\ud30c\uc77c\ub41c \ubaa8\ub4e0 Wasm \ubc14\uc774\ud2b8\ub97c \uba54\ubaa8\ub9ac\uc5d0 \ub85c\ub4dc\ud574\uc57c \ud558\ubbc0\ub85c \uae30\ubcf8 \uc791\uc5c5\uc5d0 \ub300\ud55c \ube44\uc6a9\uc744 \uc99d\uac00\uc2dc\ud0b5\ub2c8\ub2e4.",(0,l.kt)("p",null,"\uc774 \ubd80\ubd84\uc740 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/near/nearcore/issues/3094"},"\ucd5c\uc801\ud654 \uc911"),"\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774\ub7ec\ud55c \uc791\uc5c5 \uc911 \uc77c\ubd80\ub294 \uc774\ub354\ub9ac\uc6c0\uc5d0 \ube44\ud574 10\ubc30 \uc815\ub3c4 \uac1c\uc120\ub41c \uac83\ucc98\ub7fc \ubcf4\uc774\uc9c0\ub9cc, NEAR\uc758 \ucd1d \uacf5\uae09\ub7c9\uc740 10\uc5b5 \uac1c \uc774\uc0c1\uc778 \ubc18\uba74 \uc774\ub354\ub9ac\uc6c0\uc758 \ucd1d \uacf5\uae09\ub7c9\uc740 1\uc5b5 \uac1c\uc5d0 \uac00\uae5d\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \ucd1d \uacf5\uae09\ub7c9\uc758 \ud37c\uc13c\ud2f0\uc9c0\ub85c \ub530\uc9c0\uc790\uba74, NEAR\uc758 \uac00\uc2a4 \uc694\uae08\uc740 \uc774\ub354\ub9ac\uc6c0\ubcf4\ub2e4 \uc57d 10\ubc30 \ub354 \ub0ae\uc2b5\ub2c8\ub2e4. \ub610\ud55c NEAR\uc758 \uac00\uaca9\uc774 \ud06c\uac8c \uc624\ub974\uba74 \ub124\ud2b8\uc6cc\ud06c\uc5d0\uc11c \uc124\uc815\ud55c \ucd5c\uc18c \uac00\uc2a4 \uc694\uae08\uc744 \ub0ae\ucd9c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub300\ubd80\ubd84\uc758 \uacbd\uc6b0 \ub124\ud2b8\uc6cc\ud06c\uac00 \ucd5c\uc18c \uac00\uc2a4 \uac00\uaca9\uc5d0 \uba38\ubb3c \uac83\uc73c\ub85c \uc608\uc0c1\ub429\ub2c8\ub2e4. ",(0,l.kt)("a",{parentName:"p",href:"https://near.org/papers/economics-in-sharded-blockchain/#transaction-and-storage-fees"},"Economics \ubc31\uc11c"),"\uc5d0\uc11c \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uc138\uc694."),(0,l.kt)("h4",{id:"accurate-estimates-with-automated-tests"},"\uc790\ub3d9\ud654\ub41c \ud14c\uc2a4\ud2b8\ub85c \uac00\uc2a4 \ube44\uc6a9 \uc608\uce21\ud558\uae30"),(0,l.kt)("p",null,"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uae30\ub2a5\uc744 \uc2e4\ud589\ud558\uae30 \uc704\ud55c \uac00\uc2a4 \ub2e8\uc704 \ube44\uc6a9\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"testnet"),"\uc744 \ud1b5\ud574 \uc815\ud655\ud558\uac8c \uc608\uce21\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c ",(0,l.kt)("inlineCode",{parentName:"p"},"testnet"),"\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"mainnet"),"\ubcf4\ub2e4 \ub192\uc740 \ubc84\uc804\uc758 \ud504\ub85c\ud1a0\ucf5c\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uac00\uc2a4 \ube44\uc6a9 \uacc4\uc0b0\uc740 \uc790\uc8fc \ubcc0\uacbd\ub418\uc9c0 \uc54a\uc73c\ubbc0\ub85c \uc774\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"mainnet"),"\uc5d0\uc11c \ud568\uc218\uc758 \uac00\uc2a4 \ube44\uc6a9\uc744 \ud30c\uc545\ud558\ub294 \uc88b\uc740 \ubc29\ubc95\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uac00\uc2a4 \ube44\uc6a9\uc744 \ucd94\uc815\ud558\uae30 \uc704\ud574 Rust\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"near-workspaces")," ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/near/workspaces-rs/tree/main/examples/src"},"\ud06c\ub808\uc774\ud2b8")," \ub610\ub294 JavaScript \ub0b4 \ube44\uc2b7\ud55c \uc774\ub984\uc758 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/near/workspaces-js"},"\ud328\ud0a4\uc9c0"),"\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"call")," \uba54\uc11c\ub4dc\uc5d0\uc11c \ubc18\ud658\ub41c ",(0,l.kt)("inlineCode",{parentName:"p"},"CallExecutionDetails")," \uad6c\uc870\uccb4\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"total_gas_burnt")," \ud544\ub4dc\ub97c \ucd94\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.(",(0,l.kt)("a",{parentName:"p",href:"/near_docs/vi/sdk/rust/testing/integration-tests#profiling-gas"},"\ub354 \uc77d\uc5b4\ubcf4\uae30"),")"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'println!("Burnt gas (all): {}", res.total_gas_burnt);\n')),(0,l.kt)("p",null,"JS\uc5d0\uc11c\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"result.receipts_outcome[0].outcome.gas_burnt"),"\uc5d0\uc11c Receipt \uc2e4\ud589\uc744 \uc704\ud574 \uc18c\ube44\ub41c \uac00\uc2a4 \ub2e8\uc704\uc758 \uc591\uacfc ",(0,l.kt)("inlineCode",{parentName:"p"},"result.transaction_outcome.outcome.gas_burnt"),"\ub97c \ub354\ud558\uc5ec \uc774 \uac12\uc744 \uacc4\uc0b0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("admonition",{title:"\uac00\uc2a4 \ube44\uc6a9 \ucd94\uc815 REST API",type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"api.gasbuddy.tech"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc8fc\uc5b4\uc9c4 \ud568\uc218 \ud638\ucd9c\uc5d0 \ub300\ud55c \uac00\uc2a4 \ube44\uc6a9 \ucd94\uc815\uce58\ub97c \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 API\ub294 \uc2e4\ud5d8\uc801\uc73c\ub85c \ub9cc\ub4e4\uc5b4\uc84c\uc73c\uba70, \ud5a5\ud6c4 \uc81c\uac70\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\uc74c JSON \ubcf8\ubb38\uacfc \ud568\uaed8 ",(0,l.kt)("inlineCode",{parentName:"p"},"https://api.gasbuddy.tech/profile"),"\ub85c POST \uc694\uccad\uc744 \ubcf4\ub0b4 \uc8fc\uc5b4\uc9c4 \ud568\uc218 \ud638\ucd9c\uc5d0 \ub300\ud55c \uac00\uc2a4 \ube44\uc6a9 \ucd94\uc815\uce58\ub97c \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "contract_id": "<your-contract-account-id>",\n  "method": "<your-contract-method-name>",\n  "args": {\n    "arg1": "value1",\n    "arg2": "value2"\n  }\n}\n'))),(0,l.kt)("h4",{id:"gas-cost-estimation-in-the-sdk"},"SDK\uc5d0\uc11c \uac00\uc2a4 \ube44\uc6a9 \ucd94\uc815"),(0,l.kt)("p",null,"\uc6b0\ub9ac ",(0,l.kt)("a",{parentName:"p",href:"/near_docs/vi/develop/contracts/environment/"},"SDK \ud658\uacbd"),"\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"used gas")," \uba54\uc11c\ub4dc\ub97c \ud1b5\ud574 \uc9c0\uae08\uae4c\uc9c0 \uc5bc\ub9c8\ub098 \ub9ce\uc740 \uac00\uc2a4\uac00 \uc0ac\uc6a9\ub418\uc5c8\ub294\uc9c0 \uc54c\ub824\uc90d\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub450 \uc9c0\uc810 \uc0ac\uc774\uc5d0 \uc0ac\uc6a9\ub41c \uac00\uc2a4\uc758 \ucc28\uc774\ub97c \uac04\ub2e8\ud788 \uacc4\uc0b0\ud558\uc5ec \ud2b9\uc815 \uba54\uc11c\ub4dc(\ub610\ub294 \uadf8\uc758 \uc77c\ubd80)\uac00 \uc0ac\uc6a9\ud558\ub294 \uac00\uc2a4\uc758 \uc591\uc744 \ubca4\uce58\ub9c8\ud0b9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'function myMethod(){\n  // take gas usage\n  const used_gas_point_A = environment.used_gas()\n  \n  // --- some code goes here ---\n\n  const used_gas_point_B = environment.used_gas()\n\n  log("Used gas", used_gas_point_B - used_gas_point_A )\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\ube44\uad00\uc801\uc778-\uac00\uc2a4-\uac00\uaca9-\uc778\ud50c\ub808\uc774\uc158"},"\ube44\uad00\uc801\uc778 \uac00\uc2a4 \uac00\uaca9 \uc778\ud50c\ub808\uc774\uc158"),(0,l.kt)("p",null,"\ud2b8\ub79c\uc7ad\uc158\uc774 \uc644\ub8cc\ub418\uae30\uae4c\uc9c0 \uc5ec\ub7ec \ube14\ub85d\uc774 \uac78\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub3d9\uc801 \uac00\uc2a4 \uac00\uaca9 \uc870\uc815\uc73c\ub85c \uc778\ud574 \uc774\ud6c4 \ube14\ub85d\uc758 \uac00\uc2a4 \uac00\uaca9\uc740 \uac70\ub798\uac00 \uc11c\uba85\ub418\uc5c8\uc744 \ub54c\ubcf4\ub2e4 \ub192\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158\uc774 \uc5ec\uc804\ud788 \uc644\ub8cc\ub420 \uc218 \uc788\ub3c4\ub85d \ud558\uae30 \uc704\ud574 ",(0,l.kt)("em",{parentName:"p"},"\ube44\uad00\uc801 \uc778\ud50c\ub808\uc774\uc158 \uaddc\uce59")," \uc5d0 \uc758\ud574 \ud2b8\ub79c\uc7ad\uc158 \uc2dc\uc791 \uc2dc \uc608\uc57d\ub418\ub294 \ud1a0\ud070\uc758 \uc591\uc774 \uc99d\uac00\ud569\ub2c8\ub2e4 "),(0,l.kt)("p",null,"\ube44\uad00\uc801 \uc778\ud50c\ub808\uc774\uc158 \uaddc\uce59\uc740 \ud2b8\ub79c\uc7ad\uc158\uc774 \ub3c4\ub2ec\ud560 \uc218 \uc788\ub294 \uac00\uc7a5 \ub192\uc740 \uc774\ub860\uc801 \uac00\uc2a4 \uac00\uaca9\uc73c\ub85c \uac00\uc2a4\ub97c \uad6c\ub9e4\ud574\uc57c \ud568\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \ucd94\uac00 \uc9c0\ucd9c\uc740 \uc77c\uc2dc\uc801\uc77c \ubfd0\uc774\uba70, \ube44\uad00\uc801 \uac00\uaca9\uacfc \uc2e4\uc81c \uac00\uaca9\uc758 \ucc28\uc561\uc740 \ud2b8\ub79c\uc7ad\uc158\uc774 \uc644\ub8cc\ub418\uba74 \ud658\ubd88\ub429\ub2c8\ub2e4. \uc774\uac83\uc774 \uc775\uc2a4\ud50c\ub85c\ub7ec\uc5d0\uc11c \ubaa8\ub4e0 \uac00\uc2a4\uac00 \uc18c\ube44\ub41c \uacbd\uc6b0\uc5d0\ub3c4 \ud558\ub098 \uc774\uc0c1\uc758 \ube14\ub85d\uc5d0 \uac78\uccd0 \uc788\ub294 \uac70\uc758 \ubaa8\ub4e0 \ud2b8\ub79c\uc7ad\uc158\uc5d0 \ud658\ubd88\uc774 \ud3ec\ud568\ub41c \uc774\uc720\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uac00\uaca9\uc740 \uc5bc\ub9c8\ub098 \ubd80\ud480\ub824\uc9c8\uae4c\uc694? \ud2b8\ub79c\uc7ad\uc158\uc774 \ucc28\uc9c0\ud558\ub294 \ube14\ub85d \uc218\uc5d0 \ub530\ub77c \ub2e4\ub985\ub2c8\ub2e4. \ub2e4\uc74c\uacfc \uac19\uc774 \ud55c \uacc4\uc815\uc5d0\uc11c \ub2e4\ub978 \uacc4\uc815\uc73c\ub85c\ub9cc \ud1a0\ud070\uc744 \ubcf4\ub0b4\ub294 \uac04\ub2e8\ud55c \ud2b8\ub79c\uc7ad\uc158\uc740 2-3 \ube14\ub85d \uc815\ub3c4 \uac78\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc11c\uba85\uc790\uc758 \uacc4\uc815\uc5d0\uc11c \ub3c8\uc744 \ube7c\uae30 \uc704\ud574\uc11c\ub294 \ud558\ub098\uc758 \ube14\ub85d\uc774 \uac78\ub9bd\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc218\uc2e0\uc790 \uacc4\uc815\uc5d0 \uc790\uae08\uc744 \ucd94\uac00\ud558\uae30 \uc704\ud574\uc11c\ub294 \ud558\ub098\uc758 \ube14\ub85d\uc774 \uac78\ub9bd\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc218\uc2e0\uc790\uac00 \ub2e4\ub978 \uc0e4\ub4dc\uc5d0 \uc788\uace0 Receipt \uc2e0\uccad\uc774 \uc9c0\uc5f0\ub418\ub294 \uacbd\uc6b0, \ub610 \ud558\ub098\uc758 \ube14\ub85d\uc774 \ub354 \uac78\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("p",null,"\ub530\ub77c\uc11c \ube44\uad00\uc801\uc73c\ub85c \ubd80\ud480\ub824\uc9c4 \uac00\uaca9\uc740 3% \uc99d\uac00\ud558\uac70\ub098 ",(0,l.kt)("inlineCode",{parentName:"p"},"gas_price")," \u2a09 1.03\uc73c\ub85c \uacc4\uc0b0\ub429\ub2c8\ub2e4. \ucd94\uac00 \uad50\ucc28 \uc0e4\ub4dc \ud1b5\uc2e0\ub9c8\ub2e4 \ub610 1.03\uc774 \uacf1\ud574\uc9d1\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ud568\uc218 \ud638\ucd9c\uc758 \uacbd\uc6b0, \ucd5c\ub300 \ube14\ub85d \uc9c0\uc5f0\uc740 \ubd80\ucc29\ub41c \ucd1d \uac00\uc2a4\ub97c \ub2e4\ub978 \ud568\uc218\ub97c \ud638\ucd9c\ud558\ub294 \ub370 \ud544\uc694\ud55c \ucd5c\uc18c \uac00\uc2a4\ub7c9\uc73c\ub85c \ub098\ub208 \uac12\uc73c\ub85c \uacc4\uc0b0\ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c \ud2b8\ub79c\uc7ad\uc158\uc5d0 \ucd94\uac00\ud558\ub294 \uac00\uc2a4\uac00 \ub9ce\uc744\uc218\ub85d \uac00\uc2a4 \uac00\uaca9\uc774 \ub192\uc544\uc9d1\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \ub2e4\uc2dc \ub9d0\ud558\uc9c0\ub9cc \uc778\uc0c1\ub41c \uac00\uaca9\uc740 \uc77c\uc2dc\uc801\uc774\uba70, \ub124\ud2b8\uc6cc\ud06c\uac00 \uc2e4\uc81c\ub85c \ud63c\uc7a1\ud558\uc9c0 \uc54a\ub294 \ud55c \ud658\ubd88\ub429\ub2c8\ub2e4. \ub9e4\ubc88 \ucd94\uac00 \uc9c0\uc5f0\uc774 \ubc1c\uc0dd\ud558\ub824\uba74 \uac00\uaca9\uc740 \ub9e4 \ube14\ub85d\ub9c8\ub2e4 \ucd5c\ub300\uce58\uae4c\uc9c0 \uc62c\ub77c\uc57c \ud558\uace0, Receipt\uac00 \ub9e4\uc6b0 \uc6b4\uc774 \uc88b\uc9c0 \uc54a\uc544\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"whats-the-price-of-gas-right-now"},"\uc9c0\uae08 \uac00\uc2a4 \uac00\uaca9\uc740 \uc5bc\ub9c8\uc778\uac00\uc694?"),(0,l.kt)("p",null,"RPC \uba54\uc18c\ub4dc ",(0,l.kt)("inlineCode",{parentName:"p"},"gas_price"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud2b9\uc815 \ube14\ub85d\uc758 \uac00\uc2a4 \uac00\uaca9\uc5d0 \ub300\ud574 NEAR \ud50c\ub7ab\ud3fc\uc5d0\uc11c \uc9c1\uc811 \ucffc\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uac00\uaca9\uc740 \ub124\ud2b8\uc6cc\ud06c \ubd80\ud558\uc5d0 \ub530\ub77c \ubcc0\uacbd\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uac00\uaca9\uc740 yoctoNEAR(10^-24 NEAR)\ub85c \ud45c\uc2dc\ub429\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://explorer.testnet.near.org/blocks"},"NEAR \uc775\uc2a4\ud50c\ub85c\ub7ec"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ube14\ub85d\uccb4\uc778\uc5d0\uc11c \ucd5c\uadfc \ube14\ub85d \ud574\uc2dc\ub97c \uac00\uc838\uc635\ub2c8\ub2e4."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"\uc791\uc131 \ub2f9\uc2dc, ",(0,l.kt)("inlineCode",{parentName:"em"},"SqNPYxdgspCT3dXK93uVvYZh18yPmekirUaXpoXshHv"),"\uac00 \ucd5c\uc2e0 \ube14\ub85d \ud574\uc2dc\uc600\uc2b5\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/api/rpc/gas#gas-price"},"\uc5ec\uae30\uc5d0 \uc124\uba85"),"\ub41c ",(0,l.kt)("inlineCode",{parentName:"p"},"gas_price")," \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc774 \ube14\ub85d\uc758 \uac00\uc2a4 \uac00\uaca9\uc5d0 \ub300\ud55c RPC \uc694\uccad\uc744 \ubc1c\ud589\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"http post https://rpc.testnet.near.org jsonrpc=2.0 method=gas_price params:='[\"SqNPYxdgspCT3dXK93uVvYZh18yPmekirUaXpoXshHv\"]' id=dontcare\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\uacb0\uacfc\ub97c \uad00\ucc30\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "dontcare",\n  "jsonrpc": "2.0",\n  "result": {\n    "gas_price": "5000"\n  }\n}\n')))),(0,l.kt)("p",null,"\uc774 \ube14\ub85d\uc5d0\uc11c \uac00\uc2a4 1\ub2e8\uc704\uc758 \uac00\uaca9\uc740 5000 yoctoNEAR (10^-24 NEAR)\uc785\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"some-closing-thoughts-from-the-whitepaper"},"\ubc31\uc11c\uc5d0\uc11c\uc758 \uba87 \uac00\uc9c0 \ub9c8\ubb34\ub9ac \uc0dd\uac01"),(0,l.kt)("blockquote",{class:"info"},'\uae30\ubcf8\uc801\uc73c\ub85c NEAR \ud50c\ub7ab\ud3fc\uc740 \uc790\ubc1c\uc801\uc778 \ucc38\uc5ec\uc790 \uac04\uc758 \uc2dc\uc7a5\uc785\ub2c8\ub2e4. \uacf5\uae09 \uce21\uba74\uc5d0\uc11c, \ubc38\ub9ac\ub370\uc774\ud130 \ub178\ub4dc \ubc0f \uae30\ud0c0 \uae30\ubcf8 \uc778\ud504\ub77c\uc758 \uc6b4\uc601\uc790\ub294 "\ucee4\ubba4\ub2c8\ud2f0 \ud074\ub77c\uc6b0\ub4dc"\ub97c \uad6c\uc131\ud558\ub294 \uc11c\ube44\uc2a4\ub97c \uc81c\uacf5\ud558\ub294 \ub370\uc5d0 \uc788\uc5b4 \uc778\uc13c\ud2f0\ube0c\ub97c \ubc1b\uc544\uc57c \ud569\ub2c8\ub2e4. \uc218\uc694 \uce21\uba74\uc5d0\uc11c, \uc774\ub97c \uc0ac\uc6a9\ud558\ub294 \ud50c\ub7ab\ud3fc\uc758 \uac1c\ubc1c\uc790\uc640 \ucd5c\uc885 \uc0ac\uc6a9\uc790\ub294 \uac04\ub2e8\ud558\uace0 \uba85\ud655\ud558\uba70 \uc77c\uad00\ub41c \ubc29\uc2dd\uc73c\ub85c \uc11c\ube44\uc2a4 \uc0ac\uc6a9\uc5d0 \ub300\ud55c \ube44\uc6a9\uc744 \uc9c0\ubd88\ud560 \uc218 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4.',(0,l.kt)("p",null,"\ube14\ub85d\uccb4\uc778 \uae30\ubc18 \ud074\ub77c\uc6b0\ub4dc\ub294 \uadf8 \uc704\uc5d0\uc11c \uc2e4\ud589\ub418\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \uba87 \uac00\uc9c0 \ud2b9\uc815 \ub9ac\uc18c\uc2a4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\ucef4\ud4e8\ud305 (CPU)"),": \uc774\ub294 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ucf54\ub4dc\ub97c \uc2e4\ud589\ud558\ub294 \uc2e4\uc81c \ucef4\ud4e8\ud130 \ucc98\ub9ac(\ubc0f \uc989\uc2dc \uc0ac\uc6a9 \uac00\ub2a5\ud55c RAM)\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},'\ub300\uc5ed\ud3ed ("\ub124\ud2b8\uc6cc\ud06c")'),": \ud2b8\ub79c\uc7ad\uc158\uc744 \uc81c\ucd9c\ud558\ub294 \uba54\uc2dc\uc9c0\uc640 \ube14\ub85d\uc744 \uc804\ud30c\ud558\ub294 \uba54\uc2dc\uc9c0\ub97c \ud3ec\ud568\ud558\ub294, \ucc38\uac00\uc790\uc640 \uc0ac\uc6a9\uc790 \uac04\uc758 \ub124\ud2b8\uc6cc\ud06c \ud2b8\ub798\ud53d\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\uc2a4\ud1a0\ub9ac\uc9c0"),": \uc77c\ubc18\uc801\uc73c\ub85c \uc2a4\ud1a0\ub9ac\uc9c0 \uacf5\uac04\uacfc \uc2dc\uac04\uc758 \ud568\uc218\ub85c \ud45c\ud604\ub418\ub294 \uccb4\uc778\uc758 \uc601\uad6c \ub370\uc774\ud130 \uc800\uc7a5\uc18c\uc785\ub2c8\ub2e4.")),(0,l.kt)("p",null,'Ethereum\uacfc \uac19\uc740 \uae30\uc874 \ube14\ub85d\uccb4\uc778\uc740 \uac01\uac01\uc5d0 \ub300\ud574 \ubcc4\ub3c4\ub85c \uacc4\uc0b0\ud558\uc9c0\ub9cc, \uad81\uadf9\uc801\uc73c\ub85c \uac1c\ubc1c\uc790\ub098 \uc0ac\uc6a9\uc790\uc5d0\uac8c \ub2e8\uc77c \uc218\uc218\ub8cc\ub85c \ud55c \ubc88\ub9cc \uccad\uad6c\ud558\ub294 \ub2e8\uc77c \uc120\ubd88 \ud2b8\ub79c\uc7ad\uc158 \uc218\uc218\ub8cc\ub97c \ud1b5\ud574 \uc774\ub4e4 \ubaa8\ub450\ub97c \uc124\uba85\ud569\ub2c8\ub2e4. \uc774\uac83\uc740 \uc77c\ubc18\uc801\uc73c\ub85c "\uac00\uc2a4"\ub85c \ud45c\uc2dc\ub418\ub294, \ub192\uc740 \ubcc0\ub3d9\uc131\uc744 \uac00\uc9c0\ub294 \uc218\uc218\ub8cc\uc785\ub2c8\ub2e4.'),(0,l.kt)("p",null,"\uac1c\ubc1c\uc790\ub294 \ucd5c\uc885 \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc608\uc0b0\uc744 \ucc45\uc815\ud558\uace0 \uac00\uaca9\uc744 \uc81c\uacf5\ud560 \uc218 \uc788\ub3c4\ub85d \uc608\uce21 \uac00\ub2a5\ud55c \uac00\uaca9\uc744 \uc120\ud638\ud569\ub2c8\ub2e4. NEAR\uc5d0\uc11c \uc704\uc5d0\uc11c \uc5b8\uae09\ud55c \ub9ac\uc18c\uc2a4\uc5d0 \ub300\ud55c \uac00\uaca9\uc740 \uc644\uc804\ud55c \uacbd\ub9e4 \uae30\ubc18\uc774 \uc544\ub2c8\ub77c \uc2dc\uc2a4\ud15c \uc0ac\uc6a9\ub7c9\uc5d0 \ub530\ub77c \ucc9c\ucc9c\ud788 \uc870\uc815\ub418\ub294 \uae08\uc561\uc785\ub2c8\ub2e4(\uadf8\ub9ac\uace0 \uadf9\ub2e8\uc801\uc778 \uc0ac\uc6a9\ub7c9\uc5d0 \ub300\ud55c \ub9ac\uc0e4\ub529\uc758 \uc2a4\ubb34\ub529 \ud6a8\uacfc\uc5d0 \ub530\ub77c \ub2e4\ub984). \uc774\ub294 \uac1c\ubc1c\uc790\uac00 \ud2b8\ub79c\uc7ad\uc158 \uc2e4\ud589 \ub610\ub294 \uc2a4\ud1a0\ub9ac\uc9c0 \uc720\uc9c0 \ube44\uc6a9\uc744 \ubcf4\ub2e4 \uc608\uce21 \uac00\ub2a5\ud558\uac8c \uc54c \uc218 \uc788\uc74c\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4.")),(0,l.kt)("p",null,"\uac00\uc2a4\uac00 NEAR\uc5d0\uc11c \uc791\ub3d9\ud558\ub294 \ubc29\uc2dd\uacfc \uc774\uc720\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\ub824\uba74, \uae30\ubcf8 \ubc31\uc11c\uc758 ",(0,l.kt)("a",{parentName:"p",href:"https://near.org/papers/the-official-near-white-paper/#economics"},"Economics")," \uc139\uc158\uacfc Economics \ubc31\uc11c\uc758 ",(0,l.kt)("a",{parentName:"p",href:"https://near.org/papers/economics-in-sharded-blockchain/#transaction-and-storage-fees"},"\ud2b8\ub79c\uc7ad\uc158 \ubc0f \uc2a4\ud1a0\ub9ac\uc9c0 \uc218\uc218\ub8cc")," \uc139\uc158\uc744 \ud655\uc778\ud558\uc138\uc694."),(0,l.kt)("admonition",{title:"\uc9c8\ubb38\uc774 \uc788\uc73c\uc2e0\uac00\uc694?",type:"tip"},(0,l.kt)("a",{href:"https://stackoverflow.com/questions/tagged/nearprotocol"},(0,l.kt)("h8",null,"StackOverflow\uc5d0 \ubb3c\uc5b4\ubcf4\uc138\uc694!"))))}k.isMDXComponent=!0}}]);