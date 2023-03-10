"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4511],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"exchange-integration",title:"\uac70\ub798 \ud1b5\ud569",sidebar_label:"\uac70\ub798 \ud1b5\ud569"},c=void 0,p={unversionedId:"integrator/exchange-integration",id:"integrator/exchange-integration",title:"\uac70\ub798 \ud1b5\ud569",description:"\ud1b5\ud569 \ub808\ud37c\ub7f0\uc2a4",source:"@site/../docs/6.integrator/exchange-integration.md",sourceDirName:"6.integrator",slug:"/integrator/exchange-integration",permalink:"/near_docs/zh-CN/integrator/exchange-integration",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/6.integrator/exchange-integration.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"2023\u5e743\u67089\u65e5",frontMatter:{id:"exchange-integration",title:"\uac70\ub798 \ud1b5\ud569",sidebar_label:"\uac70\ub798 \ud1b5\ud569"},sidebar:"\ud1b5\ud569",next:{title:"\uc794\uace0 \ubcc0\uacbd",permalink:"/near_docs/zh-CN/integrator/balance-changes"}},s={},u=[{value:"\ud1b5\ud569 \ub808\ud37c\ub7f0\uc2a4",id:"integration-reference",level:2},{value:"\ud2b8\ub79c\uc7ad\uc158 \ub808\ud37c\ub7f0\uc2a4 \ub9c1\ud06c",id:"transaction-reference-links",level:3},{value:"\ube14\ub85d \ubc0f \uc644\uacb0\uc131",id:"blocks-and-finality",level:2},{value:"\uc544\uce74\uc774\ube0c \ub178\ub4dc \uad6c\ub3d9",id:"running-an-archival-node",level:2},{value:"\uc2a4\ud14c\uc774\ud0b9 \ubc0f \uc704\uc784",id:"staking-and-delegation",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"integration-reference"},"\ud1b5\ud569 \ub808\ud37c\ub7f0\uc2a4"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/integrator/balance-changes"},"\uc794\uace0 \ubcc0\uacbd")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/integrator/accounts"},"\uacc4\uc815")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/integrator/fungible-tokens"},"\ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/integrator/implicit-accounts"},"\uc554\uc2dc\uc801 \uacc4\uc815"))),(0,i.kt)("h3",{id:"transaction-reference-links"},"\ud2b8\ub79c\uc7ad\uc158 \ub808\ud37c\ub7f0\uc2a4 \ub9c1\ud06c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/basics/transactions/overview"},"\uae30\ucd08")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nomicon.io/RuntimeSpec/Transactions"},"\uc124\uba85")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/integrator/create-transactions"},"\ud2b8\ub79c\uc7ad\uc158 \uad6c\uc131"))),(0,i.kt)("h2",{id:"blocks-and-finality"},"\ube14\ub85d \ubc0f \uc644\uacb0\uc131"),(0,i.kt)("p",null,"\ube14\ub85d \ubc0f \uc644\uacb0\uc131\uc5d0 \uad00\ud55c \uba87 \uac00\uc9c0 \uc911\uc694\ud55c \uc815\ubcf4\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc608\uc0c1 \ube14\ub85d \uc0dd\uc131 \uc2dc\uac04\uc740 \uc57d 1\ucd08\uc774\uace0, \uc608\uc0c1 \uc644\uacb0 \uc2dc\uac04\uc740 \uc57d 2\ucd08\uc785\ub2c8\ub2e4. \ube14\ub85d \ucffc\ub9ac\uc5d0\uc11c ",(0,i.kt)("inlineCode",{parentName:"li"},'{"finality": "final"}'),"\ub97c \uc9c0\uc815\ud558\uc5ec \ub9c8\uc9c0\ub9c9 \ucd5c\uc885 \ube14\ub85d\uc744 \ucffc\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \uba54\uc778\ub137\uc5d0\uc11c \ucd5c\uc2e0 \ucd5c\uc885 \ube14\ub85d\uc744 \uc5bb\uc73c\ub824\uba74 \ub2e4\uc74c\uc744 \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'http post https://rpc.mainnet.near.org method=block params:=\'{"finality":"final"}\' id=123 jsonrpc=2.0\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\ube14\ub85d \ub192\uc774\ub294 \ubc18\ub4dc\uc2dc \uc5f0\uc18d\uc801\uc778 \uac83\uc740 \uc544\ub2c8\uba70, \uc608\ub97c \ub4e4\uc5b4 \ud574\ub2f9 \ub192\uc774\uc758 \ube14\ub85d \uc0dd\uc0b0\uc790\uac00 \uc624\ud504\ub77c\uc778\uc778 \uacbd\uc6b0 \ud2b9\uc815 \ub192\uc774\ub97c \uac74\ub108\ub6f8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ub192\uc774 100\uc758 \ube14\ub85d\uc774 \uc0dd\uc131\ub41c \ud6c4 \ub192\uc774 101\uc758 \ube14\ub85d\uc744 \uac74\ub108\ub6f8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub192\uc774 102\uc758 \ube14\ub85d\uc774 \uc0dd\uc131\ub418\uba74, \uc774\uc804 \ube14\ub85d\uc740 \ub192\uc774 100\uc758 \ube14\ub85d\uc785\ub2c8\ub2e4.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\uc608\ub97c \ub4e4\uc5b4 \uc774\uc804 \uccad\ud06c \uc0dd\uc131\uc790\uac00 \uc624\ud504\ub77c\uc778\uc778 \uacbd\uc6b0 \uc77c\ubd80 \ube14\ub85d\uc5d0\ub294 \uc0c8 \uccad\ud06c\uac00 \ud3ec\ud568\ub418\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. RPC \ubc18\ud658 \uacb0\uacfc\uc5d0\uc11c \ubaa8\ub4e0 \ube14\ub85d\uc5d0\ub294 \ube44\uc5b4 \uc788\uc9c0 \uc54a\uc740 ",(0,i.kt)("inlineCode",{parentName:"p"},"chunks")," \ud544\ub4dc\uac00 \uc788\uc9c0\ub9cc, \uc774\ub294 \ud56d\uc0c1 \ube14\ub85d\uc5d0 \ud3ec\ud568\ub41c \uc0c8 \uccad\ud06c\uac00 \uc788\uc74c\uc744 \uc758\ubbf8\ud558\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4. \uccad\ud06c\uac00 \ube14\ub85d\uc5d0 \ud3ec\ud568\ub418\uc5b4 \uc788\ub294\uc9c0 \uc5ec\ubd80\ub97c \ud655\uc778\ud558\ub294 \ubc29\ubc95\uc740 \uccad\ud06c \ub0b4 ",(0,i.kt)("inlineCode",{parentName:"p"},"height_included"),"\uac00 \ube14\ub85d\uc758 \ub192\uc774\uc640 \ub3d9\uc77c\ud55c\uc9c0 \ud655\uc778\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."))),(0,i.kt)("h2",{id:"running-an-archival-node"},"\uc544\uce74\uc774\ube0c \ub178\ub4dc \uad6c\ub3d9"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"config.json")," \ub0b4 ",(0,i.kt)("a",{parentName:"p",href:"https://near-nodes.io/archival/run-archival-node-with-nearup"},"\uc544\uce74\uc774\ube0c \ub178\ub4dc \uc2e4\ud589")," \ubb38\uc11c\ub97c \ucc38\uc870\ud558\uc5ec, \uc544\uce74\uc774\ube0c \ub178\ub4dc\uc5d0 \ud544\uc694\ud55c \uad6c\uc131 \ubcc0\uacbd \uc0ac\ud56d\uc744 \ucc38\uace0\ud558\uc138\uc694."),(0,i.kt)("h2",{id:"staking-and-delegation"},"\uc2a4\ud14c\uc774\ud0b9 \ubc0f \uc704\uc784"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/nearprotocol/stakewars"},"https://github.com/nearprotocol/stakewars")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/near/core-contracts"},"https://github.com/near/core-contracts"))),(0,i.kt)("admonition",{title:"\uc9c8\ubb38\uc774 \uc788\uc73c\uc2e0\uac00\uc694?",type:"tip"},(0,i.kt)("a",{href:"https://stackoverflow.com/questions/tagged/nearprotocol"},(0,i.kt)("h8",null,"StackOverflow\uc5d0 \ubb3c\uc5b4\ubcf4\uc138\uc694!"))))}d.isMDXComponent=!0}}]);