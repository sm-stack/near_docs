"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4925],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),i=["components"],o={sidebar_position:2},l="\ud1b5\ud569 \ud14c\uc2a4\ud2b8(Integration Test)",p={unversionedId:"sdk/rust/testing/integration-tests",id:"sdk/rust/testing/integration-tests",title:"\ud1b5\ud569 \ud14c\uc2a4\ud2b8(Integration Test)",description:"\ucc38\uace0: \uc2dc\ubbac\ub808\uc774\uc158 \ud14c\uc2a4\ud2b8\ub294 \ub354 \uc774\uc0c1 \uc801\uadf9\uc801\uc73c\ub85c \uc9c0\uc6d0\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. NEAR \uc2dc\ubbac\ub808\uc774\ud130\ub294 NEAR \ucee8\ud2b8\ub799\ud2b8\ub97c \ud14c\uc2a4\ud2b8\ud560 \ubaa9\uc801\uc73c\ub85c \ube14\ub85d\uccb4\uc778 \ud658\uacbd\uc744 \ub300\uccb4\ud558\uae30 \uc704\ud55c \uac83\uc774\uc5c8\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 NEAR \ub81b\uc800\ub97c \uc2dc\ubbac\ub808\uc774\uc158\ud558\ub294 \uac83\uc740 \uc608\uc0c1\ud588\ub358 \uac83\ubcf4\ub2e4 \ud6e8\uc52c \ub354 \ubcf5\uc7a1\ud55c \ub178\ub825\uc774 \ub4e0\ub2e4\ub294 \uac83\uc774 \ubc1d\ud600\uc84c\uc2b5\ub2c8\ub2e4. \uacb0\uad6d \uc6cc\ud06c\ud50c\ub85c\uc6b0\ub97c \uc790\ub3d9\ud654\ud558\uace0 \uc2e4\uc81c NEAR \ub124\ud2b8\uc6cc\ud06c(\ub85c\uceec\ub137, \ud14c\uc2a4\ud2b8\ub137 \ub610\ub294 \uba54\uc778\ub137)\ub97c \uc0ac\uc6a9\ud558\uc5ec NEAR \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ub300\ud55c \ud14c\uc2a4\ud2b8\ub97c \uc791\uc131\ud558\uae30 \uc704\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac\uc778 '\uc791\uc5c5 \uacf5\uac04(Workspace)'\uc5d0 \ub300\ud55c \uc544\uc774\ub514\uc5b4\uac00 \ud0c4\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c NEAR \uc2dc\ubbac\ub808\uc774\ud130\ub294 \ub354 \uc774\uc0c1 \uc0ac\uc6a9\ub418\uc9c0 \uc54a\uace0, \uc791\uc5c5 \uacf5\uac04\uc758 Rust \ubc84\uc804\uc778 workspaces-rs\uac00 \ub300\uc2e0 \uc0ac\uc6a9\ub418\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ub450 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0\ub294 \ud06c\uac8c \ub2e4\ub978 \ub450 API\uac00 \uc788\uc73c\ubbc0\ub85c, \uc774 \uac00\uc774\ub4dc\ub294 \uac1c\ubc1c\uc790\uc758 \ub9c8\uc774\uadf8\ub808\uc774\uc158 \ud504\ub85c\uc138\uc2a4\ub97c \uc27d\uac8c \ud558\uae30 \uc704\ud574 \ub9cc\ub4e4\uc5b4\uc84c\uc2b5\ub2c8\ub2e4.",source:"@site/../docs/sdk/rust/testing/integration-tests.md",sourceDirName:"sdk/rust/testing",slug:"/sdk/rust/testing/integration-tests",permalink:"/near_docs/vi/sdk/rust/testing/integration-tests",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/testing/integration-tests.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"9 thg 3, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sdk",previous:{title:"\uc7ac\ud604 \uac00\ub2a5\ud55c \ube4c\ub4dc",permalink:"/near_docs/vi/sdk/rust/building/reproducible-builds"},next:{title:"\ub2e8\uc704 \ud14c\uc2a4\ud2b8(Unit Test)",permalink:"/near_docs/vi/sdk/rust/testing/unit-tests"}},c={},u=[{value:"\ub2e8\uc704 \ud14c\uc2a4\ud2b8(Unit Test) vs. \ud1b5\ud569 \ud14c\uc2a4\ud2b8(Integration Test)",id:"\ub2e8\uc704-\ud14c\uc2a4\ud2b8unit-test-vs-\ud1b5\ud569-\ud14c\uc2a4\ud2b8integration-test",level:2},{value:"\ud1b5\ud569 \ud14c\uc2a4\ud2b8 \uc0ac\uc6a9 \uc0ac\ub840",id:"\ud1b5\ud569-\ud14c\uc2a4\ud2b8-\uc0ac\uc6a9-\uc0ac\ub840",level:2},{value:"\uc124\uc815",id:"\uc124\uc815",level:2},{value:"\uc608\uc2dc \ube44\uad50",id:"\uc608\uc2dc-\ube44\uad50",level:2},{value:"\ub2e8\uc704 \ud14c\uc2a4\ud2b8",id:"\ub2e8\uc704-\ud14c\uc2a4\ud2b8",level:3},{value:"\uc791\uc5c5 \uacf5\uac04 \ud14c\uc2a4\ud2b8",id:"\uc791\uc5c5-\uacf5\uac04-\ud14c\uc2a4\ud2b8",level:3},{value:"\ub3c4\uc6c0 \ub418\ub294 \uc2a4\ub2c8\ud3ab",id:"\ub3c4\uc6c0-\ub418\ub294-\uc2a4\ub2c8\ud3ab",level:2},{value:"\uacc4\uc815 \uc0dd\uc131",id:"\uacc4\uc815-\uc0dd\uc131",level:3},{value:"\ud5ec\ud37c \ud568\uc218 \uc0dd\uc131",id:"\ud5ec\ud37c-\ud568\uc218-\uc0dd\uc131",level:3},{value:"\uc2a4\ud478\ub2dd - Mainnet/Testnet\uc5d0\uc11c \uc874\uc7ac\ud558\ub294 \uc0c1\ud0dc \ubc0f \ucee8\ud2b8\ub799\ud2b8 \ud480\ub9c1(Pulling)",id:"\uc2a4\ud478\ub2dd---mainnettestnet\uc5d0\uc11c-\uc874\uc7ac\ud558\ub294-\uc0c1\ud0dc-\ubc0f-\ucee8\ud2b8\ub799\ud2b8-\ud480\ub9c1pulling",level:3},{value:"\ube68\ub9ac \uac10\uae30 - \ubbf8\ub798 \ube14\ub85d\uc73c\ub85c",id:"\ube68\ub9ac-\uac10\uae30---\ubbf8\ub798-\ube14\ub85d\uc73c\ub85c",level:3},{value:"\uc5d0\ub7ec \ucc98\ub9ac",id:"\uc5d0\ub7ec-\ucc98\ub9ac",level:3},{value:"\ubc30\uce58(Batch) \ud2b8\ub79c\uc7ad\uc158",id:"\ubc30\uce58batch-\ud2b8\ub79c\uc7ad\uc158",level:3},{value:"\ub85c\uadf8 \uac80\uc0ac",id:"\ub85c\uadf8-\uac80\uc0ac",level:3},{value:"\uac00\uc2a4 \ud504\ub85c\ud30c\uc77c\ub9c1",id:"\uac00\uc2a4-\ud504\ub85c\ud30c\uc77c\ub9c1",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\ud1b5\ud569-\ud14c\uc2a4\ud2b8integration-test"},"\ud1b5\ud569 \ud14c\uc2a4\ud2b8(Integration Test)"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\ucc38\uace0:")," \uc2dc\ubbac\ub808\uc774\uc158 \ud14c\uc2a4\ud2b8\ub294 \ub354 \uc774\uc0c1 \uc801\uadf9\uc801\uc73c\ub85c \uc9c0\uc6d0\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. NEAR \uc2dc\ubbac\ub808\uc774\ud130\ub294 NEAR \ucee8\ud2b8\ub799\ud2b8\ub97c \ud14c\uc2a4\ud2b8\ud560 \ubaa9\uc801\uc73c\ub85c \ube14\ub85d\uccb4\uc778 \ud658\uacbd\uc744 \ub300\uccb4\ud558\uae30 \uc704\ud55c \uac83\uc774\uc5c8\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 NEAR \ub81b\uc800\ub97c \uc2dc\ubbac\ub808\uc774\uc158\ud558\ub294 \uac83\uc740 \uc608\uc0c1\ud588\ub358 \uac83\ubcf4\ub2e4 \ud6e8\uc52c \ub354 \ubcf5\uc7a1\ud55c \ub178\ub825\uc774 \ub4e0\ub2e4\ub294 \uac83\uc774 \ubc1d\ud600\uc84c\uc2b5\ub2c8\ub2e4. \uacb0\uad6d \uc6cc\ud06c\ud50c\ub85c\uc6b0\ub97c \uc790\ub3d9\ud654\ud558\uace0 \uc2e4\uc81c NEAR \ub124\ud2b8\uc6cc\ud06c(\ub85c\uceec\ub137, \ud14c\uc2a4\ud2b8\ub137 \ub610\ub294 \uba54\uc778\ub137)\ub97c \uc0ac\uc6a9\ud558\uc5ec NEAR \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ub300\ud55c \ud14c\uc2a4\ud2b8\ub97c \uc791\uc131\ud558\uae30 \uc704\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac\uc778 '\uc791\uc5c5 \uacf5\uac04(Workspace)'\uc5d0 \ub300\ud55c \uc544\uc774\ub514\uc5b4\uac00 \ud0c4\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c NEAR \uc2dc\ubbac\ub808\uc774\ud130\ub294 \ub354 \uc774\uc0c1 \uc0ac\uc6a9\ub418\uc9c0 \uc54a\uace0, \uc791\uc5c5 \uacf5\uac04\uc758 Rust \ubc84\uc804\uc778 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/near/workspaces-rs"},(0,s.kt)("inlineCode",{parentName:"a"},"workspaces-rs")),"\uac00 \ub300\uc2e0 \uc0ac\uc6a9\ub418\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ub450 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0\ub294 \ud06c\uac8c \ub2e4\ub978 \ub450 API\uac00 \uc788\uc73c\ubbc0\ub85c, ",(0,s.kt)("a",{parentName:"p",href:"/develop/testing/workspaces-migration"},"\uc774 \uac00\uc774\ub4dc"),"\ub294 \uac1c\ubc1c\uc790\uc758 \ub9c8\uc774\uadf8\ub808\uc774\uc158 \ud504\ub85c\uc138\uc2a4\ub97c \uc27d\uac8c \ud558\uae30 \uc704\ud574 \ub9cc\ub4e4\uc5b4\uc84c\uc2b5\ub2c8\ub2e4."),(0,s.kt)("h2",{id:"\ub2e8\uc704-\ud14c\uc2a4\ud2b8unit-test-vs-\ud1b5\ud569-\ud14c\uc2a4\ud2b8integration-test"},"\ub2e8\uc704 \ud14c\uc2a4\ud2b8(Unit Test) vs. \ud1b5\ud569 \ud14c\uc2a4\ud2b8(Integration Test)"),(0,s.kt)("p",null,"\ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub294 \ub2e8\uc77c \ud568\uc218 \uc218\uc900\uc5d0\uc11c \uae30\ub2a5\uc774 \uc608\uc0c1\ub300\ub85c \uc791\ub3d9\ud558\ub294\uc9c0 \ud655\uc778\ud558\ub294 \ub370 \uc720\uc6a9\ud569\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\ub294 ",(0,s.kt)("inlineCode",{parentName:"p"},"get_nth_fibonacci(n: u8)")," \ud568\uc218\uac00 \uc608\uc0c1\ub300\ub85c \uc791\ub3d9\ud558\ub294\uc9c0, \uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \uc785\ub825\uc744 \uc815\uc0c1\uc801\uc73c\ub85c \ucc98\ub9ac\ud558\ub294\uc9c0 \ud655\uc778\ud558\ub294 \uac83 \ub4f1\uc774 \ud3ec\ud568\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub294 \ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub294 \uc720\uc0ac\ud558\uac8c \ud37c\ube14\ub9ad \ud568\uc218\ub3c4 \ud14c\uc2a4\ud2b8\ud560 \uc218 \uc788\uc9c0\ub9cc, \uacc4\uc815 \uac04\uc5d0 \uc5ec\ub7ec \ud638\ucd9c\uc774 \uc788\ub294 \uacbd\uc6b0 \uc81c\uc5b4\ub418\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,s.kt)("a",{parentName:"p",href:"/near_docs/vi/sdk/rust/testing/unit-tests"},"\ub2e8\uc704 \ud14c\uc2a4\ud2b8")," \uc139\uc158\uc5d0\uc11c\ub3c4 \uc5b8\uae09\ud588\ub4ef\uc774, \ud2b8\ub79c\uc7ad\uc158\uc758 \uc77c\ubd80 \uce21\uba74\uc744 \uc2dc\ubbac\ub808\uc774\uc158\ud558\uae30 \uc704\ud574 \ub2e8\uc704 \ud14c\uc2a4\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 ",(0,s.kt)("inlineCode",{parentName:"p"},"VMContext")," \uac1d\uccb4\uac00 \uc874\uc7ac\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ud14c\uc2a4\ud2b8 \ucee8\ud14d\uc2a4\ud2b8\ub97c \uc218\uc815\ud558\uc5ec ",(0,s.kt)("inlineCode",{parentName:"p"},'"bob.near"'),"\uc758 ",(0,s.kt)("inlineCode",{parentName:"p"},"predecessor_account_id")," \ub97c \uac00\uc9c0\ub3c4\ub85d \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub2e8\uc704 \ud14c\uc2a4\ud2b8\uc758 \ud55c\uacc4\ub294 \ud1a0\ud070 \uc804\uc1a1\uacfc \uac19\uc740 \ud2b9\uc815 \uc0c1\ud638 \uc791\uc6a9\uc5d0\uc11c \ubd84\uba85\ud574\uc9d1\ub2c8\ub2e4. ",(0,s.kt)("inlineCode",{parentName:"p"},'"bob.near"'),"\ub294 \ub2e8\uc21c\ud788 \ubb38\uc790\uc5f4\uc774\uace0 \uacc4\uc815 \uac1d\uccb4\uac00 \uc544\ub2c8\uae30 \ub584\ubb38\uc5d0, Alice\uac00 Bob 6\uc5d0\uac8c NEAR(\u24c3)\ub97c \ubcf4\ub0c8\ub294\uc9c0 \ud655\uc778\ud558\ub294 \ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub294 \uc791\uc131\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub610\ud55c \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c(cross-contract call)\uc744 \uc2e4\ud589\ud558\ub294 \ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub3c4 \uc791\uc131\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub610\ud55c \ube14\ub85d\uccb4\uc778\uc5d0\uc11c \uac00\uc2a4 \uc0ac\uc6a9 \ubc0f \ud638\ucd9c(\ub610\ub294 \uc77c\ub828\uc758 \ud638\ucd9c) \uc2e4\ud589\ub3c4 \uc5ed\uc2dc \ud504\ub85c\ud30c\uc77c\ub9c1\ud560 \ubc29\ubc95\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,s.kt)("p",null,"\ud1b5\ud569 \ud14c\uc2a4\ud2b8\ub294 \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c, \uc801\uc808\ud55c \uc0ac\uc6a9\uc790 \uacc4\uc815, \uc0c1\ud0dc\uc5d0 \ub300\ud55c \uc561\uc138\uc2a4, \uad6c\uc870\ud654\ub41c \uc2e4\ud589 \uacb0\uacfc \ub4f1\uc744 \ud3ec\ud568\ud558\ub294 \uc885\ub2e8 \uac04 \ud14c\uc2a4\ud2b8 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. NEAR\uc5d0\uc11c\ub294 \ub85c\uceec\uc5d0\uc11c \uc2e4\ud589\ub418\ub294 \ube14\ub85d\uccb4\uc778 \ub610\ub294 \ud14c\uc2a4\ud2b8\ub137\uc5d0\uc11c \uc774\ub7ec\ud55c \uc720\ud615\uc758 \ud14c\uc2a4\ud2b8\ub97c \uc704\ud574 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/near/workspaces-rs"},"Rust"),"\uc640 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/near/workspaces-js"},"JavaScript"),"\uc758 ",(0,s.kt)("inlineCode",{parentName:"p"},"workspaces")," \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \ubaa8\ub450 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("h2",{id:"\ud1b5\ud569-\ud14c\uc2a4\ud2b8-\uc0ac\uc6a9-\uc0ac\ub840"},"\ud1b5\ud569 \ud14c\uc2a4\ud2b8 \uc0ac\uc6a9 \uc0ac\ub840"),(0,s.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \uacbd\uc6b0 \ud1b5\ud569 \ud14c\uc2a4\ud2b8\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4."),(0,s.kt)("li",{parentName:"ul"},"\uc794\uc561\uc774 \ubcc0\uacbd\ub41c \uc0ac\uc6a9\uc790\uac00 \uc5ec\ub7ec \uba85 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("li",{parentName:"ul"},"\uc628\uccb4\uc778\uc5d0\uc11c \uac00\uc2a4 \uc0ac\uc6a9 \ubc0f \uc2e4\ud589 \uacb0\uacfc\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \uc218\uc9d1\ud558\uace0 \uc2f6\uc2b5\ub2c8\ub2e4."),(0,s.kt)("li",{parentName:"ul"},"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ub85c\uc9c1\uc758 \uc0ac\uc6a9 \uc0ac\ub840 \uc2e4\ud589 \ud750\ub984\uc774 \uc608\uc0c1\ub300\ub85c \uc791\ub3d9\ud55c\ub2e4\uace0 \uc8fc\uc7a5\ud558\ub824\uace0 \ud569\ub2c8\ub2e4."),(0,s.kt)("li",{parentName:"ul"},"\uc8fc\uc5b4\uc9c4 \uc2e4\ud589 \ud328\ud134\uc774 (\uc608\uc0c1\ub300\ub85c) \uc791\ub3d9\ud558\uc9c0 \uc54a\ub294\ub2e4\uace0 \uc8fc\uc7a5\ud558\ub824\uace0 \ud569\ub2c8\ub2e4.")),(0,s.kt)("h2",{id:"\uc124\uc815"},"\uc124\uc815"),(0,s.kt)("p",null,"\ub2e8\uc704 \ud14c\uc2a4\ud2b8(\ucee8\ud2b8\ub799\ud2b8 \ub0b4 ",(0,s.kt)("inlineCode",{parentName:"p"},"src/lib.rs")," \ud30c\uc77c\uc5d0 \uc788\ub294 \uacbd\uc6b0\uac00 \ub9ce\uc74c)\uc640 \ub2ec\ub9ac, Rust\uc758 \ud1b5\ud569 \ud14c\uc2a4\ud2b8\ub294 ",(0,s.kt)("inlineCode",{parentName:"p"},"/tests"),"\ub77c\uace0 \ud558\ub294 ",(0,s.kt)("inlineCode",{parentName:"p"},"/src"),"\uc640 \ub3d9\uc77c\ud55c \uc218\uc900\uc758 \ubcc4\ub3c4 \ub514\ub809\ud1a0\ub9ac\uc5d0 \uc788\uc2b5\ub2c8\ub2e4(",(0,s.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/reference/cargo-targets.html#integration-tests"},"\uc790\uc138\ud788 \ubcf4\uae30"),"). \uc544\ub798\uc758 \uc774 \ud3f4\ub354 \uad6c\uc870\ub97c \ucc38\uc870\ud558\uc138\uc694."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"\u251c\u2500\u2500 Cargo.toml                  \u27f5 contains `dependencies` for contract and `dev-dependencies` for workspaces-rs tests\n\u251c\u2500\u2500 src\n\u2502  \u2514\u2500\u2500 lib.rs                   \u27f5 contract code\n\u251c\u2500\u2500 target\n\u2514\u2500\u2500 tests                       \u27f5 integration test directory\n   \u2514\u2500\u2500 integration-tests.rs     \u27f5 integration test file\n")),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"\uc774\ub7ec\ud55c \ud14c\uc2a4\ud2b8\ub294 \uc790\uccb4 ",(0,s.kt)("inlineCode",{parentName:"p"},"/tests")," \ub514\ub809\ud1a0\ub9ac\uc5d0 \ubc30\uce58\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \ub300\uc2e0 \ud14c\uc2a4\ud2b8 \uc0ac\ub840 \ub0b4\uc5d0\uc11c \uc9c1\ub82c\ud654\ub97c \uc704\ud574 \ub0b4\ubcf4\ub0b4\uc9c0 \uc54a\uc740 \uc790\ub8cc\ud615\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc73c\ubbc0\ub85c, \uc720\uc775\ud560 \uc218 \uc788\ub294 ",(0,s.kt)("inlineCode",{parentName:"p"},"/src")," \ub514\ub809\ud1a0\ub9ac\uc5d0 \ubc30\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,s.kt)("p",null,"\uc774 \ud504\ub85c\uc81d\ud2b8\uc758 ",(0,s.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"\uc5d0 \ub300\ud55c \uc0d8\ud50c \uad6c\uc131\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-toml"},'[package]\nname = "fungible-token-wrapper"\nversion = "0.0.2"\nauthors = ["Near Inc <hello@nearprotocol.com>"]\nedition = "2021"\n\n[dev-dependencies]\nanyhow = "1.0"\nnear-primitives = "0.5.0"\nnear-sdk = "4.0.0"\nnear-units = "0.2.0"\nserde_json = "1.0"\ntokio = { version = "1.14", features = ["full"] }\nworkspaces = "0.4.1"\n\n# remember to include a line for each contract\nfungible-token = { path = "./ft" }\ndefi = { path = "./test-contract-defi" }\n\n[profile.release]\ncodegen-units = 1\n# Tell `rustc` to optimize for small code size.\nopt-level = "z"\nlto = true\ndebug = false\npanic = "abort"\noverflow-checks = true\n\n[workspace]\n# remember to include a member for each contract\nmembers = [\n  "ft",\n  "test-contract-defi",\n]\n')),(0,s.kt)("p",null,"\uc704\uc758 ",(0,s.kt)("inlineCode",{parentName:"p"},"integration-tests.rs")," \ud30c\uc77c\uc5d0\ub294 \ud1b5\ud569 \ud14c\uc2a4\ud2b8\uac00 \ud3ec\ud568\ub429\ub2c8\ub2e4. \uc774\ub294 \ud14c\uc2a4\ud2b8 ",(0,s.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," \ud30c\uc77c\uc774 \uc788\ub294 \ub514\ub809\ud1a0\ub9ac\uc5d0\uc11c \ub2e4\uc74c \uba85\ub839\uc73c\ub85c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"cargo test --test integration-tests\n")),(0,s.kt)("h2",{id:"\uc608\uc2dc-\ube44\uad50"},"\uc608\uc2dc \ube44\uad50"),(0,s.kt)("h3",{id:"\ub2e8\uc704-\ud14c\uc2a4\ud2b8"},"\ub2e8\uc704 \ud14c\uc2a4\ud2b8"),(0,s.kt)("p",null,"\ub3d9\uc77c\ud55c \uc791\uc5c5\uc744 \uc218\ud589\ud558\ub294 \ub9e4\uc6b0 \uac04\ub2e8\ud55c \ub2e8\uc704 \ud14c\uc2a4\ud2b8\uc640 \ud1b5\ud569 \ud14c\uc2a4\ud2b8\ub97c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c \uc774\uc640 \uac19\uc774 \uc911\ubcf5\ub41c \uc791\uc5c5\uc744 \ud558\uc9c4 \uc54a\uc9c0\ub9cc(\ud1b5\ud569 \ud14c\uc2a4\ud2b8\ub294 \ubc94\uc704\uac00 \ub354 \ub113\uae30 \ub54c\ubb38\uc5d0), \uc720\uc775\ud560 \uac83\uc785\ub2c8\ub2e4."),(0,s.kt)("p",null,"\uc2dc\ubbac\ub808\uc774\uc158 \ud14c\uc2a4\ud2b8\ub97c \uc2dc\uc5f0\ud558\uae30 \uc704\ud574 ",(0,s.kt)("inlineCode",{parentName:"p"},"near-sdk-rs")," \ub808\ud37c\uc9c0\ud1a0\ub9ac \ub0b4\uc758 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/near/near-sdk-rs/blob/master/examples/fungible-token"},"\ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070 \uc608\uc81c"),"\uc758 \uc2a4\ub2c8\ud3ab\uc744 \uc0ac\uc6a9\ud560 \uac83\uc785\ub2c8\ub2e4."),(0,s.kt)("p",null,"\uba3c\uc800 ",(0,s.kt)("inlineCode",{parentName:"p"},"test_transfer")," \uba54\uc11c\ub4dc\uc758 \uae30\ub2a5\uc744 \ud14c\uc2a4\ud2b8\ud558\ub294 \uc774 \ub2e8\uc704 \ud14c\uc2a4\ud2b8\uc5d0 \uc8fc\ubaa9\ud558\uc138\uc694."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near/near-sdk-rs/blob/6d4045251c63ec875dc55f43b065b33a36d94792/examples/fungible-token/ft/src/lib.rs#L100-L165\n")),(0,s.kt)("p",null,"\uc704\uc758 \ud14c\uc2a4\ud2b8\ub294 \ud14c\uc2a4\ud2b8 \ucee8\ud14d\uc2a4\ud2b8\ub97c \uc124\uc815\ud558\uace0, ",(0,s.kt)("inlineCode",{parentName:"p"},"get_context()"),"\ub97c \ud1b5\ud574 \ud14c\uc2a4\ud2b8 \ud658\uacbd\uc744 \uc778\uc2a4\ud134\uc2a4\ud654\ud558\uace0, ",(0,s.kt)("inlineCode",{parentName:"p"},"test_transfer")," \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\uba70, ",(0,s.kt)("inlineCode",{parentName:"p"},"storage_deposit()")," \ucd08\uae30\ud654 \ud638\ucd9c(FT \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ub4f1\ub85d\ud558\uae30 \uc704\ud574) \ubc0f ",(0,s.kt)("inlineCode",{parentName:"p"},"ft_transfer()")," FT \uc804\uc1a1 \ud638\ucd9c\uc744 \uc218\ud589\ud569\ub2c8\ub2e4."),(0,s.kt)("p",null,"\uc774\uac83\uc774 \uc791\uc5c5 \uacf5\uac04 \ud14c\uc2a4\ud2b8\ub85c \uc791\uc131\ub418\ub294 \ubc29\uc2dd\uc5d0 \ub300\ud574 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc544\ub798 \uc2a4\ub2c8\ud3ab\uc740 \uc8fc\ubaa9\ud560 \uac00\uce58\uac00 \uc788\ub294 \uba87 \uac00\uc9c0 \uc0ac\ud56d\uc744 \ubcf4\uc5ec\uc8fc\uae30 \ub54c\ubb38\uc5d0, \uc870\uae08 \ub354 \uae41\ub2c8\ub2e4."),(0,s.kt)("h3",{id:"\uc791\uc5c5-\uacf5\uac04-\ud14c\uc2a4\ud2b8"},"\uc791\uc5c5 \uacf5\uac04 \ud14c\uc2a4\ud2b8"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near/near-sdk-rs/blob/master/examples/fungible-token/tests/workspaces.rs#L25-L115\n")),(0,s.kt)("p",null,"\uc704\uc758 \ud14c\uc2a4\ud2b8\uc5d0\uc11c, \ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070 \uc608\uc81c\uc5d0 \ub300\ud55c \ucef4\ud30c\uc77c\ub41c \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 ",(0,s.kt)("inlineCode",{parentName:"p"},".wasm")," \ud30c\uc77c(",(0,s.kt)("inlineCode",{parentName:"p"},"/out")," \ub514\ub809\ud1a0\ub9ac\ub85c \ucef4\ud30c\uc77c\ub428)\uc740 \ud658\uacbd\uc5d0 dev-deploy(\uc0c8\ub85c \uc0dd\uc131\ub41c \uacc4\uc815)\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uacc4\uc815 \uc0dd\uc131\uc5d0 \uc0ac\uc6a9\ub41c \ud658\uacbd\uc758 \uacb0\uacfc\ub85c, ",(0,s.kt)("inlineCode",{parentName:"p"},"ft_contract")," \uacc4\uc815\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4. \uc774 \ud2b9\uc815 \ud30c\uc77c\uc758 \ud615\uc2dd\uc5d0\ub294 \ud558\ub098\uc758 \ud14c\uc2a4\ud2b8 \uc9c4\uc785\uc810(",(0,s.kt)("inlineCode",{parentName:"p"},"main"),")\ub9cc \uc788\uc73c\uba70, \ubaa8\ub4e0 \ud14c\uc2a4\ud2b8\ub294 ",(0,s.kt)("inlineCode",{parentName:"p"},"#[tokio::test]"),"\ub85c \uc120\uc5b8\ub429\ub2c8\ub2e4. \ud14c\uc2a4\ud2b8\ub294 \uc2e4\ud589 \uac04\uc5d0 \uc0c1\ud0dc\ub97c \uacf5\uc720\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"test_total_supply"),"\uc758 \ub808\uc774\uc544\uc6c3\uc744 \ud655\uc778\ud558\uc138\uc694. ",(0,s.kt)("inlineCode",{parentName:"p"},".call()"),"\uc740 \ud544\uc694\ud55c \uac00\uc2a4\ub97c \uc774\ub97c \uc218\ud589\ud558\ub294 \uacc4\uc815\uc5d0\uc11c \uc5bb\uc2b5\ub2c8\ub2e4. \ub2e8\uc704 \ud14c\uc2a4\ud2b8\uc640 \ub2ec\ub9ac, ",(0,s.kt)("inlineCode",{parentName:"p"},"init()")," \uc911 \ucd08\uae30\ud654\ub41c \ud658\uacbd\uc5d0 \uc758\ud574 \ucee8\ud14d\uc2a4\ud2b8\uac00 \uc81c\uacf5\ub418\ubbc0\ub85c, \ud638\ucd9c \uc804\uc5d0 \uc2dc\ubbac\ub808\uc774\uc158\uc774 \uc218\ud589\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ubaa8\ub4e0 \ud638\ucd9c\uc740 \uc774 \ud658\uacbd\uacfc \uc0c1\ud638 \uc791\uc6a9\ud558\uc5ec \uc0c1\ud0dc\ub97c \uac00\uc838\uc624\uac70\ub098 \ubcc0\uacbd\ud569\ub2c8\ub2e4."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("strong",{parentName:"p"},"\ud568\uc815"),": \ud1b5\ud569 \ud14c\uc2a4\ud2b8\ub97c \uc2e4\ud589\ud558\uae30 \uc804\uc5d0 \ucee8\ud2b8\ub799\ud2b8\ub97c \ucef4\ud30c\uc77c\ud574\uc57c \ud569\ub2c8\ub2e4. \uc791\uc5c5 \uacf5\uac04 \ud14c\uc2a4\ud2b8\ub294 ",(0,s.kt)("inlineCode",{parentName:"p"},".wasm")," \ud30c\uc77c\uc744 \uc0ac\uc6a9\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8\ub97c \ub124\ud2b8\uc6cc\ud06c\uc5d0 \ubc30\ud3ec\ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\uac00 \ubcc0\uacbd\ub418\uba74, \uc774\ub7ec\ud55c \ud14c\uc2a4\ud2b8\ub97c \ub2e4\uc2dc \uc2e4\ud589\ud558\uae30 \uc804\uc5d0 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \ub2e4\uc2dc \ube4c\ub4dc\ud574\uc57c \ud569\ub2c8\ub2e4.")),(0,s.kt)("admonition",{title:",",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"\uc2e4\ud589 \uc0ac\uc774\uc5d0 \uc0c1\ud0dc\ub97c \uc720\uc9c0\ud558\ub824\ub294 \uacbd\uc6b0, \ud558\ub098\uc758 \ud568\uc218 \ub0b4\uc5d0\uc11c \uc5ec\ub7ec \ud14c\uc2a4\ud2b8\ub97c \ud638\ucd9c\ud558\uc5ec ",(0,s.kt)("inlineCode",{parentName:"p"},"workspaces::sandbox()")," \ud638\ucd9c\uc5d0\uc11c \uc791\uc5c5\uc790\ub97c \uc804\ub2ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,s.kt)("h2",{id:"\ub3c4\uc6c0-\ub418\ub294-\uc2a4\ub2c8\ud3ab"},"\ub3c4\uc6c0 \ub418\ub294 \uc2a4\ub2c8\ud3ab"),(0,s.kt)("h3",{id:"\uacc4\uc815-\uc0dd\uc131"},"\uacc4\uc815 \uc0dd\uc131"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/rust-counter/blob/6a7af5a32c630e0298c09c24eab87267746552b2/integration-tests/rs/src/tests.rs#L16-L21\n")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"\ub2e4\uc74c\uacfc \uac19\uc774 \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\uc9c0 \uc54a\uace0\ub3c4 ",(0,s.kt)("inlineCode",{parentName:"p"},"dev_account"),"\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near/workspaces-rs/blob/8f12f3dc3b0251ac3f44ddf6ab6fc63003579139/workspaces/tests/create_account.rs#L7-L8\n"))),(0,s.kt)("h3",{id:"\ud5ec\ud37c-\ud568\uc218-\uc0dd\uc131"},"\ud5ec\ud37c \ud568\uc218 \uc0dd\uc131"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial/blob/7fb267b83899d1f65f1bceb71804430fab62c7a7/integration-tests/rs/src/helpers.rs#L148-L161\n")),(0,s.kt)("h3",{id:"\uc2a4\ud478\ub2dd---mainnettestnet\uc5d0\uc11c-\uc874\uc7ac\ud558\ub294-\uc0c1\ud0dc-\ubc0f-\ucee8\ud2b8\ub799\ud2b8-\ud480\ub9c1pulling"},"\uc2a4\ud478\ub2dd - Mainnet/Testnet\uc5d0\uc11c \uc874\uc7ac\ud558\ub294 \uc0c1\ud0dc \ubc0f \ucee8\ud2b8\ub799\ud2b8 \ud480\ub9c1(Pulling)"),(0,s.kt)("p",null,"\uc774 \uc608\ub294 \ud14c\uc2a4\ud2b8\ub137 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ub85c\uceec \uc0cc\ub4dc\ubc15\uc2a4 \ud658\uacbd\uc73c\ub85c \uc0c1\ud0dc\ub97c \uc2a4\ud478\ub2dd(\ub370\uc774\ud130 \ubcf5\uc0ac)\ud558\ub294 \uac83\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near/workspaces-rs/blob/c14fe2aa6cdf586028b2993c6a28240f78484d3e/examples/src/spooning.rs#L64-L122\n")),(0,s.kt)("p",null,"\uc804\uccb4 \uc608\uc81c\ub294 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/near/workspaces-rs/blob/main/examples/src/spooning.rs"},"examples/src/spooning.rs")," \uc608\uc81c\ub97c \ucc38\uc870\ud558\uc138\uc694."),(0,s.kt)("h3",{id:"\ube68\ub9ac-\uac10\uae30---\ubbf8\ub798-\ube14\ub85d\uc73c\ub85c"},"\ube68\ub9ac \uac10\uae30 - \ubbf8\ub798 \ube14\ub85d\uc73c\ub85c"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"workspaces")," \ud14c\uc2a4\ud2b8\ub294 \ube14\ub85d\uccb4\uc778\uc758 \uc0c1\ud0dc\ub97c \ubbf8\ub798\ub85c \ubcf4\ub0bc \uc218 \uc788\ub294 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc989, \uc2dc\uac04\uc5d0 \ubbfc\uac10\ud55c \ub370\uc774\ud130\uac00 \ud544\uc694\ud55c \ucee8\ud2b8\ub799\ud2b8\ub294 \uc0cc\ub4dc\ubc15\uc2a4\uc758 \ube14\ub85d\uc774 \uc0dd\uc131\ub420 \ub54c\uae4c\uc9c0 \uc549\uc544\uc11c \uae30\ub2e4\ub9b4 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \uc2dc\uac04\uc744 \ube68\ub9ac \ub3cc\ub9ac\uace0 \uc2f6\ub2e4\uba74, ",(0,s.kt)("inlineCode",{parentName:"p"},"worker.fast_forward"),"\ub97c \ud638\ucd9c\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near/workspaces-rs/blob/c14fe2aa6cdf586028b2993c6a28240f78484d3e/examples/src/fast_forward.rs#L12-L44\n")),(0,s.kt)("p",null,"\uc804\uccb4 \uc608\uc81c\ub97c \ubcf4\ub824\uba74 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/near/workspaces-rs/blob/main/examples/src/fast_forward.rs"},"examples/src/fast_forward.rs"),"\ub97c \uc0b4\ud3b4\ubcf4\uc138\uc694."),(0,s.kt)("h3",{id:"\uc5d0\ub7ec-\ucc98\ub9ac"},"\uc5d0\ub7ec \ucc98\ub9ac"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/FT/blob/98b85297a270cbcb8ef3901c29c17701e1cab698/integration-tests/rs/src/tests.rs#L199-L225\n")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("inlineCode",{parentName:"p"},"Err(msg)")," \ubc18\ud658 \ub610\ud55c \uad6c\ud604 \uac00\ub2a5\ud569\ub2c8\ub2e4(\ub610\ud55c \ud2c0\ub9bc\uc5c6\uc774 \ub354 \uac04\ub2e8\ud560 \uac83\uc785\ub2c8\ub2e4).")),(0,s.kt)("h3",{id:"\ubc30\uce58batch-\ud2b8\ub79c\uc7ad\uc158"},"\ubc30\uce58(Batch) \ud2b8\ub79c\uc7ad\uc158"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="Batch Transaction - workspace-rs"',title:'"Batch',Transaction:!0,"-":!0,'workspace-rs"':!0},'let res = contract\n    .batch(&worker)\n    .call(\n        Function::new("ft_transfer_call")\n            .args_json((defi_contract.id(), transfer_amount, Option::<String>::None, "10"))?\n            .gas(300_000_000_000_000 / 2)\n            .deposit(1),\n    )\n    .call(\n        Function::new("storage_unregister")\n            .args_json((Some(true),))?\n            .gas(300_000_000_000_000 / 2)\n            .deposit(1),\n    )\n    .transact()\n    .await?;\n')),(0,s.kt)("h3",{id:"\ub85c\uadf8-\uac80\uc0ac"},"\ub85c\uadf8 \uac80\uc0ac"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="Logs - workspaces-rs"',title:'"Logs',"-":!0,'workspaces-rs"':!0},'assert_eq!(\n    res.logs()[1],\n    format!("Closed @{} with {}", contract.id(), initial_balance.0 - transfer_amount.0)\n);\n')),(0,s.kt)("p",null,"Receipt \uacb0\uacfc\ub97c \uac80\ud1a0\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="Logs - workspaces-rs"',title:'"Logs',"-":!0,'workspaces-rs"':!0},'let outcome = &res.receipt_outcomes()[5];\nassert_eq!(outcome.logs[0], "The account of the sender was deleted");\nassert_eq!(outcome.logs[2], format!("Account @{} burned {}", contract.id(), 10));\n')),(0,s.kt)("h3",{id:"\uac00\uc2a4-\ud504\ub85c\ud30c\uc77c\ub9c1"},"\uac00\uc2a4 \ud504\ub85c\ud30c\uc77c\ub9c1"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"CallExecutionDetails::total_gas_burnt"),"\ub294 Receipt\ub97c \ud3ec\ud568\ud558\uc5ec \ud638\ucd9c \uc2e4\ud589\uc73c\ub85c \uc5f0\uc18c\ub41c \ubaa8\ub4e0 \uac00\uc2a4\ub97c \ud3ec\ud568\ud569\ub2c8\ub2e4. \uc774\uac83\uc740 \ud6e8\uc52c \ub354 \uc77c\ubc18\uc801\uc73c\ub85c \uc0ac\uc6a9\ub418\ub294 \uac1c\ub150\uc774\ubbc0\ub85c, \ud45c\uba74(surface) \uc218\uc900 API\ub85c \uacf5\uac1c\ub429\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="Gas (all) - workspaces-rs"',title:'"Gas',"(all)":!0,"-":!0,'workspaces-rs"':!0},'println!("Burnt gas (all): {}", res.total_gas_burnt);\n')),(0,s.kt)("p",null,"\ud2b8\ub79c\uc7ad\uc158 \uc790\uccb4\uc5d0 \uc758\ud574 \uc2e4\uc81c\ub85c \uac00\uc2a4\ub97c \uc18c\uac01\ud558\uace0 \uc2f6\ub2e4\uba74, \ub2e4\uc74c\uacfc \uac19\uc774 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="Gas (transaction) - workspaces-rs"',title:'"Gas',"(transaction)":!0,"-":!0,'workspaces-rs"':!0},'println!("Burnt gas (transaction): {}", res.outcome().gas_burnt);\n')),(0,s.kt)("p",null,"\uac01 Receipt\uc5d0 \uc758\ud574 \uc18c\uac01\ub41c \uac00\uc2a4\ub97c \ubcf4\ub824\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="Gas (receipt) - workspaces-rs"',title:'"Gas',"(receipt)":!0,"-":!0,'workspaces-rs"':!0},'for receipt in res.receipt_outcomes() {\n   println!("Burnt gas (receipt): {}", receipt.gas_burnt);\n}\n')))}d.isMDXComponent=!0}}]);