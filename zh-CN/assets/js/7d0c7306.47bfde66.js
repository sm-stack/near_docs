"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[153],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),k=a,d=m["".concat(p,".").concat(k)]||m[k]||u[k]||r;return n?i.createElement(d,o(o({ref:t},s),{},{components:n})):i.createElement(d,o({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27698:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=["components"],l={id:"overview",title:"\ud2b8\ub79c\uc7ad\uc158",sidebar_label:"\uac1c\uc694"},p=void 0,c={unversionedId:"concepts/basics/transactions/overview",id:"concepts/basics/transactions/overview",title:"\ud2b8\ub79c\uc7ad\uc158",description:"NEAR\ub294 \uc124\uacc4\uc0c1 \ube44\ub3d9\uae30\uc2dd\uc785\ub2c8\ub2e4. \uc774\ub294 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uad6c\ud604\uc744 \uc704\ud55c \uad11\ubc94\uc704\ud55c \uac00\ub2a5\uc131\uc744 \uc5f4\uc5b4\uc8fc\uc9c0\ub9cc, \ub2e4\ub978 \ube14\ub85d\uccb4\uc778 \ud50c\ub7ab\ud3fc\uc744 \uc0ac\uc6a9\ud558\ub358 \uc0ac\ub78c\ub4e4\uc5d0\uac8c\ub294 \ud63c\ub780\uc744 \uac00\uc911\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. NEAR\uc758 \ud2b8\ub79c\uc7ad\uc158\uc5d0\ub294 \ube44\ub3d9\uae30 \uc791\uc5c5\uc744 \uc218\ud589\ud558\ub294 \uc791\uc5c5\uc774 \ud3ec\ud568\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uacbd\uc6b0 \ud2b8\ub79c\uc7ad\uc158\uc758 \uac00\ub2a5\ud55c \uacb0\uacfc(\uc131\uacf5 or \uc2e4\ud328)\ub97c \uc5fc\ub450\uc5d0 \ub450\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc774 \ud3ec\ud568\ub41c \uacbd\uc6b0, \ud574\ub2f9 \ud638\ucd9c \uc790\uccb4\ub294 \uc131\uacf5\uc73c\ub85c \ud45c\uc2dc\ub420 \uc218 \uc788\uc9c0\ub9cc \ub2e4\ub978 \ucee8\ud2b8\ub799\ud2b8 \uc2e4\ud589\uc740 \uc2e4\ud328\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ubb38\uc11c\uc5d0\uc11c\ub294 \uc774\uc5d0 \ub300\ud55c \uac00\ub2a5\ud55c \uc2dc\ub098\ub9ac\uc624\ub97c \ub2e4\ub8f9\ub2c8\ub2e4.",source:"@site/../docs/1.concepts/basics/transactions/overview.md",sourceDirName:"1.concepts/basics/transactions",slug:"/concepts/basics/transactions/overview",permalink:"/near_docs/zh-CN/concepts/basics/transactions/overview",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/basics/transactions/overview.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"2023\u5e743\u67089\u65e5",frontMatter:{id:"overview",title:"\ud2b8\ub79c\uc7ad\uc158",sidebar_label:"\uac1c\uc694"},sidebar:"\uac1c\ub150",previous:{title:"\uacc4\uc815 \uc0dd\uc131",permalink:"/near_docs/zh-CN/concepts/basics/accounts/creating-accounts"},next:{title:"\uac00\uc2a4",permalink:"/near_docs/zh-CN/concepts/basics/transactions/gas"}},s={},u=[{value:"\ud2b8\ub79c\uc7ad\uc158",id:"transaction",level:2},{value:"Action",id:"action",level:2},{value:"Receipt",id:"receipt",level:2},{value:"\ud2b8\ub79c\uc7ad\uc158 \uc6d0\uc790\uc131(Atomicity)",id:"atomicity",level:2},{value:"\ud2b8\ub79c\uc7ad\uc158 \uc0c1\ud0dc",id:"transaction-status",level:2},{value:"\uc644\uacb0\uc131",id:"finality",level:2}],m={toc:u};function k(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"NEAR\ub294 \uc124\uacc4\uc0c1 \ube44\ub3d9\uae30\uc2dd\uc785\ub2c8\ub2e4. \uc774\ub294 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uad6c\ud604\uc744 \uc704\ud55c \uad11\ubc94\uc704\ud55c \uac00\ub2a5\uc131\uc744 \uc5f4\uc5b4\uc8fc\uc9c0\ub9cc, \ub2e4\ub978 \ube14\ub85d\uccb4\uc778 \ud50c\ub7ab\ud3fc\uc744 \uc0ac\uc6a9\ud558\ub358 \uc0ac\ub78c\ub4e4\uc5d0\uac8c\ub294 \ud63c\ub780\uc744 \uac00\uc911\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. NEAR\uc758 \ud2b8\ub79c\uc7ad\uc158\uc5d0\ub294 \ube44\ub3d9\uae30 \uc791\uc5c5\uc744 \uc218\ud589\ud558\ub294 \uc791\uc5c5\uc774 \ud3ec\ud568\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uacbd\uc6b0 \ud2b8\ub79c\uc7ad\uc158\uc758 \uac00\ub2a5\ud55c \uacb0\uacfc(\uc131\uacf5 or \uc2e4\ud328)\ub97c \uc5fc\ub450\uc5d0 \ub450\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc774 \ud3ec\ud568\ub41c \uacbd\uc6b0, \ud574\ub2f9 \ud638\ucd9c \uc790\uccb4\ub294 \uc131\uacf5\uc73c\ub85c \ud45c\uc2dc\ub420 \uc218 \uc788\uc9c0\ub9cc \ub2e4\ub978 \ucee8\ud2b8\ub799\ud2b8 \uc2e4\ud589\uc740 \uc2e4\ud328\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ubb38\uc11c\uc5d0\uc11c\ub294 \uc774\uc5d0 \ub300\ud55c \uac00\ub2a5\ud55c \uc2dc\ub098\ub9ac\uc624\ub97c \ub2e4\ub8f9\ub2c8\ub2e4."),(0,r.kt)("p",null,'\ud2b8\ub79c\uc7ad\uc158\uc740 \ub124\ud2b8\uc6cc\ud06c\uc5d0 \ud560\ub2f9\ud560 \uc218 \uc788\ub294 \uac00\uc7a5 \uc791\uc740 \uc791\uc5c5 \ub2e8\uc704\uc785\ub2c8\ub2e4. \uc5ec\uae30\uc11c "\uc791\uc5c5"\uc740 \ucef4\ud4e8\ud305(\ud568\uc218 \uc2e4\ud589) \ub610\ub294 \uc800\uc7a5(\ub370\uc774\ud130 \uc77d\uae30/\uc4f0\uae30)\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158\uc740 \ud558\ub098 \uc774\uc0c1\uc758 ',(0,r.kt)("inlineCode",{parentName:"p"},"Actions"),'\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4. \ub458 \uc774\uc0c1\uc758 Action\uc774 \uc788\ub294 \ud2b8\ub79c\uc7ad\uc158\uc744 "\ubc30\uce58 \ud2b8\ub79c\uc7ad\uc158"\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158\uc740 \uac00\uc7a5 \uc791\uc740 \uc791\uc5c5 \ub2e8\uc704\uc774\ubbc0\ub85c \uc6d0\uc790\uc131\uc744 \uac00\uc9c0\uace0 \uc788\uc9c0\ub9cc, \ube44\ub3d9\uae30 \uc791\uc5c5\uc774 \ubc18\ub4dc\uc2dc \uc804\uccb4 \ud2b8\ub79c\uc7ad\uc158\uc758 \uc131\uacf5 \ub610\ub294 \uc2e4\ud328\ub97c \uacc4\ub2e8\uc2dd\uc73c\ub85c \ub098\uc5f4\ud558\ub294 \uac83\uc740 \uc544\ub2d9\ub2c8\ub2e4.'),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Receipt"),'\ub77c\ub294 \uac1c\ub150\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 "',(0,r.kt)("inlineCode",{parentName:"p"},"Action"),'\uc744 \uc801\uc6a9\ud558\uae30 \uc704\ud55c \uc694\uccad"\uc774\uac70\ub098, "',(0,r.kt)("inlineCode",{parentName:"p"},"Action"),'\uc758 \uacb0\uacfc"\uc785\ub2c8\ub2e4. \ubaa8\ub4e0 \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ucee4\ubba4\ub2c8\ucf00\uc774\uc158\uc740 Receipt\ub97c \ud1b5\ud574 \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4. Action\uc73c\ub85c \uc778\ud574 \ud558\ub098 \uc774\uc0c1\uc758 Receipt\uac00 \uc0dd\uc131\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ube14\ub85d\uccb4\uc778\uc740 \uc77c\ub828\uc758 \ud2b8\ub79c\uc7ad\uc158\uc73c\ub85c \ubcf4\uc77c \uc218 \uc788\uc9c0\ub9cc, \uc77c\ub828\uc758 Receipt\uc774\uae30\ub3c4 \ud569\ub2c8\ub2e4.'),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("a",{href:"https://explorer.near.org/"},"NEAR Blockchain Explorer"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud2b8\ub79c\uc7ad\uc158\uacfc \uad00\ub828\ub41c \ubaa8\ub4e0 Action \ubc0f Receipt\ub97c \uac80\uc0ac\ud558\uace0 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud2b8\ub79c\uc7ad\uc158\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ubb38\uc11c\ub294 ",(0,r.kt)("a",{parentName:"p",href:"https://nomicon.io/RuntimeSpec/Transactions"},"NEAR \ud504\ub85c\ud1a0\ucf5c \uc0ac\uc591 (nomicon.io)"),"\uc5d0\uc11c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ud398\uc774\uc9c0\uc5d0\uc11c\ub294 NEAR \ud2b8\ub79c\uc7ad\uc158\uc758 \uc911\uc694\ud55c \uce21\uba74\uc5d0 \ub300\ud55c \uac1c\uc694\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"transaction"},"\ud2b8\ub79c\uc7ad\uc158"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Transaction"),"\uc740 \ubaa9\uc801\uc9c0(",(0,r.kt)("inlineCode",{parentName:"p"},"receiver")," \uacc4\uc815)\uc5d0\uc11c \uc218\ud589\ub418\uc5b4\uc57c \ud558\ub294 \uac83\ub4e4\uc744 \ubb18\uc0ac\ud558\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"Actions"),"\uc758 \uc9d1\ud569\uc785\ub2c8\ub2e4. "),(0,r.kt)("p",null,"\uac01 ",(0,r.kt)("inlineCode",{parentName:"p"},"Transaction"),"\uc740 \ub2e4\uc74c\uacfc \uac19\uc740 \uc911\uc694\ud55c \uc815\ubcf4\ub4e4\uc744 \ub2f4\uace0 \uc788\uc2b5\ub2c8\ub2e4:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\ucd9c\ucc98")," (",(0,r.kt)("inlineCode",{parentName:"li"},"signer"),"\uc5d0 \uc758\ud574 \uc554\ud638\ud654 \uc11c\uba85\ub428)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\ubaa9\uc801\uc9c0")," \ub610\ub294 \uc758\ub3c4 (",(0,r.kt)("inlineCode",{parentName:"li"},"receiver"),"\uc5d0\uac8c \uc804\ub2ec\ub418\uc5b4 \uc801\uc6a9\ub428)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\ucd5c\uc2e0\uc131")," (\ud5c8\uc6a9\uac00\ub2a5\ud55c \ud55c\ub3c4 - ",(0,r.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/concepts/basics/epoch"},"1 \uc5d0\ud3ec\ud06c")," \ub0b4 \ucd5c\uc2e0 \ube14\ub85d\uc73c\ub85c\ubd80\ud130\uc758 ",(0,r.kt)("inlineCode",{parentName:"li"},"block_hash"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\uace0\uc720\uc131")," (\uc8fc\uc5b4\uc9c4 ",(0,r.kt)("inlineCode",{parentName:"li"},"signer"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"li"},"AccessKey"),"\uc5d0 \ub300\ud574 \uace0\uc720\ud55c ",(0,r.kt)("inlineCode",{parentName:"li"},"nonce"),"\ub97c \uac00\uc9d0)")),(0,r.kt)("h2",{id:"action"},"Action"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Action"),"\uc740 0\uac1c \uc774\uc0c1\uc758 \ub2e4\ub978 ",(0,r.kt)("inlineCode",{parentName:"p"},"Action"),"\uacfc \ud568\uaed8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Transaction"),"\uc744 \uc815\uc758\ud558\ub294 \uad6c\uc131 \uac00\ub2a5\ud55c \uc791\uc5c5 \ub2e8\uc704\uc785\ub2c8\ub2e4. \ud604\uc7ac\ub294 8 \uc885\ub958\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"Action"),"\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FunctionCall")," \uc740 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\uace0 \uc120\ud0dd\uc801\uc73c\ub85c \ucef4\ud4e8\ud305 \ubc0f \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 \ud544\uc694\ud55c \uc218\uc218\ub8cc\ub97c \ud3ec\ud568\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Transfer")," \ub294 \uacc4\uc815 \uac04 \ud1a0\ud070\uc744 \uc774\ub3d9\uc2dc\ud0b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DeployContract")," \ub294 \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud560 \ub54c \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CreateAccount")," \ub294 \uc0c8\ub85c\uc6b4 \uacc4\uc815\uc744 \ub9cc\ub4e4 \ub54c \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DeleteAccount")," \ub294 \uacc4\uc815\uc744 \uc0ad\uc81c\ud558\uace0 \uc218\ub839\uc790 \uacc4\uc815\uc73c\ub85c \uc794\uace0\ub97c \uc774\ub3d9\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AddKey")," \ub294 \uacc4\uc815\uc5d0 \ud0a4(",(0,r.kt)("inlineCode",{parentName:"li"},"FullAccess")," \ub610\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"FunctionCall")," \uc811\uadfc\uad8c)\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DeleteKey")," \ub294 \uacc4\uc815\uc5d0\uc11c \uae30\uc874 \ud0a4\ub97c \uc0ad\uc81c\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Stake")," \ub294 \ub2e4\uc74c \uae30\ud68c\uc5d0 \ubc38\ub9ac\ub370\uc774\ud130\uac00 \ub418\ub294 \uac83\uc5d0 \ub300\ud55c \uad00\uc2ec\uc744 \ud45c\uba85\ud560 \ub54c \uc0ac\uc6a9\ub429\ub2c8\ub2e4.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://nomicon.io/RuntimeSpec/Actions"},"NEAR nomicon"),"\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"Action"),"\ub4e4\uc758 \uae30\uc220\uc801 \uc138\ubd80 \uc0ac\ud56d\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"receipt"},"Receipt"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Receipt"),'\ub294  \uc2dc\uc2a4\ud15c\uc5d0\uc11c \uc2e4\ud589 \uac00\ub2a5\ud55c \uc720\uc77c\ud55c \uac1d\uccb4\uc785\ub2c8\ub2e4. \ub530\ub77c\uc11c NEAR \ud50c\ub7ab\ud3fc\uc5d0\uc11c "\ud2b8\ub79c\uc7ad\uc158 \ucc98\ub9ac"\uc5d0 \ub300\ud574 \uc774\uc57c\uae30\ud558\ub294 \uac83\uc740, \uacb0\uad6d \uc5b4\ub290 \uc2dc\uc810\uc5d0\uc11c "Receipt\ub97c \uc801\uc6a9"\ud558\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4.'),(0,r.kt)("p",null,"\uac04\ub2e8\ud558\uac8c ",(0,r.kt)("inlineCode",{parentName:"p"},"Receipt"),"\ub97c \ubaa9\uc801\uc9c0(",(0,r.kt)("inlineCode",{parentName:"p"},"receiver"),")\uc5d0\uc11c \uc2e4\ud589\ub418\ub294 \uc720\ub8cc \uba54\uc138\uc9c0\ub85c \uc0dd\uac01\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub807\ub2e4\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"Transaction"),"\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"Receipt"),"\ub97c \uc0dd\uc131\ud558\uae30 \uc704\ud574 \uc678\ubd80\uc5d0\uc11c \ubc1c\ud589\ub41c \uc694\uccad \uc815\ub3c4\ub85c \uc0dd\uac01\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4(1\ub3001 \uad00\uacc4)."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Receipts"),"\ub97c \ub9cc\ub4dc\ub294 \ubc29\ubc95\uc5d0\ub294 \uc5ec\ub7ec \uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Transaction")," \ubc1c\ud589"),(0,r.kt)("li",{parentName:"ul"},"Promise \ubc18\ud658 (\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c \uad00\ub828)"),(0,r.kt)("li",{parentName:"ul"},"\ud658\ubd88 ")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://nomicon.io/RuntimeSpec/Actions"},"NEAR nomicon"),"\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"Receipt"),"\ub4e4\uc758 \uae30\uc220\uc801 \uc138\ubd80 \uc0ac\ud56d\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"atomicity"},"\ud2b8\ub79c\uc7ad\uc158 \uc6d0\uc790\uc131(Atomicity)"),(0,r.kt)("p",null,"\ud2b8\ub79c\uc7ad\uc158\uc740 \uc801\uc6a9\ub418\uae30 \uc804\uc5d0 Receipt\ub85c \ubcc0\ud658\ub418\uae30 \ub54c\ubb38\uc5d0, Receipt \uc6d0\uc790\uc131\uc5d0 \ub300\ud574 \uc774\uc57c\uae30\ud558\ub294 \uac83\uc73c\ub85c\ub3c4 \ucda9\ubd84\ud560 \uac83\uc785\ub2c8\ub2e4. Receipt \uc2e4\ud589\uc740 \uc6d0\uc790\uc801\uc785\ub2c8\ub2e4. \uc989, \uc774\ub294 \ubaa8\ub4e0 \uc791\uc5c5\uc774 \uc131\uacf5\uc801\uc73c\ub85c \uc2e4\ud589\ub418\uac70\ub098 \uc544\ubb34 \uc791\uc5c5\ub3c4 \uc2e4\ud589\ub418\uc9c0 \uc54a\uc74c\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \ud55c \uac00\uc9c0 \uc8fc\uc758\ud560 \uc810\uc740 \ud568\uc218 \ud638\ucd9c \ud2b8\ub79c\uc7ad\uc158\uc740 \ub2e4\ub978 \ud2b8\ub79c\uc7ad\uc158\uacfc \ub2ec\ub9ac \ubb34\ud55c\ud55c \uc591\uc758 Receipt\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc73c\uba70, \uac01 Receipt\ub294 \uc6d0\uc790\uc801\uc774\uc9c0\ub9cc \ud558\ub098\uc758 Receipt\uc758 \uc131\uacf5 \ub610\ub294 \uc2e4\ud328\uac00 \ub3d9\uc77c\ud55c \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc758\ud574 \uc0dd\uc131\ub41c \ub2e4\ub978 Receipt\uc758 \uc0c1\ud0dc\uc5d0 \ubc18\ub4dc\uc2dc \uc601\ud5a5\uc744 \ubbf8\uce58\uc9c0\ub294 \uc54a\ub294\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"  \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc124\uacc4\ud560 \ub54c NEAR \ud504\ub85c\ud1a0\ucf5c\uc758 \ube44\ub3d9\uae30\uc801 \ud2b9\uc131\uc744 \ud56d\uc0c1 \uace0\ub824\ud574\uc57c \ud569\ub2c8\ub2e4.")),(0,r.kt)("h2",{id:"transaction-status"},"\ud2b8\ub79c\uc7ad\uc158 \uc0c1\ud0dc"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/rpc/setup"},"RPC API"),"\ub97c \ud1b5\ud574 \ud2b8\ub79c\uc7ad\uc158 \uc0c1\ud0dc\ub97c \ucffc\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ucffc\ub9ac \uacb0\uacfc\uc758 \uc608\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": { "SuccessValue": "" },\n  "transaction": {\n    "actions": [\n      { "Transfer": { "deposit": "50000000000000000000000000" } }\n    ],\n    "hash": "EL9cEcoiF1ThH1HXrdE5LBuJKzSe6dRr7tia61fohPrP",\n    "nonce": 51,\n    "public_key": "ed25519:5zset1JX4qp4PcR3N9KDSY6ATdgkrbBW5wFBGWC4ZjnU",\n    "receiver_id": "transfer-vote.near",\n    "signature": "ed25519:37rcwcjDBWWAaaRYCazHY72sfDbmudYvtmEBHMFmhYEfWD3mbrgrtYs5nVh9gzRUESELRDET9g72LnAD2BWdSgKu",\n    "signer_id": "near"\n  },\n  "transaction_outcome": {\n    "block_hash": "dvwSabiWzRjfQamZCEMeguxxXL4885JGU87xfjoPWR2",\n    "id": "EL9cEcoiF1ThH1HXrdE5LBuJKzSe6dRr7tia61fohPrP",\n    "outcome": {\n      "executor_id": "near",\n      "gas_burnt": 223182562500,\n      "logs": [],\n      "metadata": { "gas_profile": null, "version": 1 },\n      "receipt_ids": [\n        "6LrHPazG3DTcKkd4TjqbgajqmbcAfyoTG383Cft5SZ5Y"\n      ],\n      "status": {\n        "SuccessReceiptId": "6LrHPazG3DTcKkd4TjqbgajqmbcAfyoTG383Cft5SZ5Y"\n      },\n      "tokens_burnt": "22318256250000000000"\n    },\n    "proof": []\n  },\n  "receipts_outcome": [\n    {\n      "block_hash": "6evPKFQRw1E3gH9L1d59mz7GahsbnqsdYwcZQo8hpFQB",\n      "id": "6LrHPazG3DTcKkd4TjqbgajqmbcAfyoTG383Cft5SZ5Y",\n      "outcome": {\n        "executor_id": "transfer-vote.near",\n        "gas_burnt": 223182562500,\n        "logs": [],\n        "metadata": { "gas_profile": null, "version": 1 },\n        "receipt_ids": [\n          "7NMpF9ZGwSj48bpvJK2xVobJkTasEkakazTKi2zotHR4"\n        ],\n        "status": { "SuccessValue": "" },\n        "tokens_burnt": "22318256250000000000"\n      },\n      "proof": []\n    },\n    {\n      "block_hash": "Gm6TFS1ZxmA45itVj8a7vE8yJF8V5hXeNF1EhEVr7GVS",\n      "id": "7NMpF9ZGwSj48bpvJK2xVobJkTasEkakazTKi2zotHR4",\n      "outcome": {\n        "executor_id": "near",\n        "gas_burnt": 0,\n        "logs": [],\n        "metadata": { "gas_profile": null, "version": 1 },\n        "receipt_ids": [],\n        "status": { "SuccessValue": "" },\n        "tokens_burnt": "0"\n      },\n      "proof": []\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"\uc870\ud68c \uacb0\uacfc\ub294 \ub2e4\uc74c\uc744 \ud45c\uc2dc\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud2b8\ub79c\uc7ad\uc158\uc758 \uc804\ubc18\uc801\uc778 \uc0c1\ud0dc"),(0,r.kt)("li",{parentName:"ul"},"\ud2b8\ub79c\uc7ad\uc158\uc758 \uacb0\uacfc"),(0,r.kt)("li",{parentName:"ul"},"\uc774 \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc758\ud574 \uc0dd\uc131\ub41c Receipt\uc758 \uacb0\uacfc.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"status")," \ud544\ub4dc\ub294 \ub2e4\uc74c\uc5d0 \ub098\ud0c0\ub0a9\ub2c8\ub2e4:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucd5c\uc0c1\uc704 \ub808\ubca8: \ud2b8\ub79c\uc7ad\uc158\uc758 \ubaa8\ub4e0 Action\uc774 \uc131\uacf5\uc801\uc73c\ub85c \uc2e4\ud589\ub418\uc5c8\ub294\uc9c0 \uc5ec\ubd80\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4.\n-",(0,r.kt)("inlineCode",{parentName:"li"},"transaction_outcome"),": \ud2b8\ub79c\uc7ad\uc158\uc774 \uc131\uacf5\uc801\uc73c\ub85c Receipt\uc73c\ub85c \uc804\ud658\ub418\uc5c8\ub294\uc9c0 \uc5ec\ubd80\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uac01 Receipt\uc5d0 \ub300\ud55c ",(0,r.kt)("inlineCode",{parentName:"li"},"receipts_outcome"),": Receipt\uac00 \uc131\uacf5\uc801\uc73c\ub85c \uc2e4\ud589\ub418\uc5c8\ub294\uc9c0 \uc5ec\ubd80\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"status"),"\ub294 \ub2e4\uc74c 4\uac1c \uc911 \ud558\ub098\uc758 \ud0a4\uac00 \uc788\ub294 \uac1d\uccb4\uc785\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status: { SuccessValue: 'val or empty'}")," - Receipt \ub610\ub294 \ud2b8\ub79c\uc7ad\uc158\uc774 \uc131\uacf5\uc801\uc73c\ub85c \uc2e4\ud589\ub418\uc5c8\uc74c\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4. \ud568\uc218 \ud638\ucd9c Receipt\uc758 \uacb0\uacfc\uc778 \uacbd\uc6b0 \uac12\uc740 \ud568\uc218\uc758 \ubc18\ud658 \uac12\uc774\uace0, \uadf8\ub807\uc9c0 \uc54a\uc740 \uacbd\uc6b0 \uac12\uc740 \ube44\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status: { SuccessReceiptId: 'id_of_generated_receipt' }")," - \ud2b8\ub79c\uc7ad\uc158\uc774 \uc131\uacf5\uc801\uc73c\ub85c Receipt\ub85c \ubcc0\ud658\ub418\uc5c8\uac70\ub098 Receipt\uac00 \uc131\uacf5\uc801\uc73c\ub85c \ucc98\ub9ac\ub418\uc5b4 \ub2e4\ub978 Receipt\uac00 \uc0dd\uc131\ub418\uc5c8\uc74c\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4. \uc774 \ud0a4\uc758 \uac12\uc740 \uc0c8\ub85c \uc0dd\uc131\ub41c Receipt\uc758 ID\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status: { Failure: {} }'")," - \uc2e4\ud589 \uc911\uc778 \ud2b8\ub79c\uc7ad\uc158 \ub610\ub294 Receipt\uac00 \uc2e4\ud328\ud588\uc74c\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4. \uac12\uc5d0\ub294 \uc624\ub958 \uc774\uc720\uac00 \ud3ec\ud568\ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status: { Unknown: '' }'")," - \ud2b8\ub79c\uc7ad\uc158 \ub610\ub294 Receipt\uac00 \uc544\uc9c1 \ucc98\ub9ac\ub418\uc9c0 \uc54a\uc558\uc74c\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Receipt\uc758 \uacbd\uc6b0, ",(0,r.kt)("inlineCode",{parentName:"p"},"SuccessValue"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"SuccessReceiptId"),"\ub294 \ub9c8\uc9c0\ub9c9 Action \uc2e4\ud589\uc5d0\uc11c \uac00\uc838\uc635\ub2c8\ub2e4. \ub3d9\uc77c\ud55c Receipt\uc758 \ub2e4\ub978 Action \uc2e4\ud589 \uacb0\uacfc\ub294 \ubc18\ud658\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 Action\uc774 \uc2e4\ud328\ud558\uba74, Receipt \uc2e4\ud589\uc774 \uc911\uc9c0\ub418\uace0 ",(0,r.kt)("inlineCode",{parentName:"p"},"status"),"\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"Failure"),"\uac00 \ubc18\ud658\ub429\ub2c8\ub2e4. \ub9c8\uc9c0\ub9c9 Action\uc774 \ud568\uc218 \ud638\ucd9c\uc774 \uc544\ub2c8\uace0 \uc131\uacf5\uc801\uc73c\ub85c \uc2e4\ud589\ub418\uba74, \uacb0\uacfc\ub294 \ube48 ",(0,r.kt)("inlineCode",{parentName:"p"},"SuccessValue"),"\uc77c \uac83\uc785\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\ucd5c\uc0c1\uc704 \ub808\ubca8 ",(0,r.kt)("inlineCode",{parentName:"p"},"status"),"\ub294 \ud2b8\ub79c\uc7ad\uc158\uc758 \ubaa8\ub4e0 Action\uc774 \uc131\uacf5\uc801\uc73c\ub85c \uc2e4\ud589\ub418\uc5c8\ub294\uc9c0 \uc5ec\ubd80\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \ud55c \uac00\uc9c0 \uc8fc\uc758\ud560 \uc810\uc740, \ud568\uc218 \ud638\ucd9c\uc744 \uc131\uacf5\uc801\uc73c\ub85c \uc2e4\ud589\ud588\ub2e4\uace0 \ud574\uc11c \ubc18\ub4dc\uc2dc \ud568\uc218 \ud638\ucd9c\uc5d0\uc11c \uc0dd\uc131\ub41c Receipt\uac00 \ubaa8\ub450 \uc131\uacf5\uc801\uc73c\ub85c \uc2e4\ud589\ub418\ub294 \uac83\uc740 \uc544\ub2c8\ub77c\ub294 \uc810\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn transfer(receiver_id: String) {\n    Promise::new(receiver_id).transfer(10);\n}\n")),(0,r.kt)("p",null,"\uc774 \ud568\uc218\ub294 Promise\ub97c \uc608\uc57d\ud558\uc9c0\ub9cc, \ubc18\ud658 \uac12\uc740 \ud574\ub2f9 Promise\uc640 \uad00\ub828\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c Promise\uac00 \uc2e4\ud328\ud558\ub354\ub77c\ub3c4 \uc7a0\uc7ac\uc801\uc73c\ub85c ",(0,r.kt)("inlineCode",{parentName:"p"},"receiver_id"),"\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0, \uc774 \ud568\uc218\ub97c \ud638\ucd9c\ud558\ub294 \ud2b8\ub79c\uc7ad\uc158\uc740 \uc5ec\uc804\ud788 \uc804\uccb4 ",(0,r.kt)("inlineCode",{parentName:"p"},"status"),"\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"SuccessValue\u200b"),"\u200b\ub97c \uac00\uc9c0\uace0 \uc788\uc744 \uac83\uc785\ub2c8\ub2e4. \ub3d9\uc77c\ud55c \uc870\ud68c \uacb0\uacfc\ub97c \ud1b5\ud574 \uc0dd\uc131\ub41c \uac01 Receipt\uc758 \uc0c1\ud0dc\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"finality"},"\uc644\uacb0\uc131"),(0,r.kt)("p",null,"\ud2b8\ub79c\uc7ad\uc158 \uc644\uacb0\uc131\uc740 \ud2b8\ub79c\uc7ad\uc158\uc774 \ud3ec\ud568\ub41c \ube14\ub85d\uc758 \uc644\uacb0\uc131\uacfc \ubc00\uc811\ud558\uac8c \uc5f0\uacb0\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \ub300\ubd80\ubd84\uc758 Action\uc774 Receipt \uc2e4\ud589\uc5d0\uc11c \uc774\ub8e8\uc5b4\uc9c0\uae30 \ub54c\ubb38\uc5d0, \ud2b8\ub79c\uc7ad\uc158 \uc790\uccb4\uac00 \uc544\ub2cc Receipt\uac00 \uc644\uacb0\ub418\uc5c8\ub294\uc9c0 \uc5ec\ubd80\uc5d0 \uad00\uc2ec\uc774 \uc788\ub294 \uacbd\uc6b0\uac00 \ub9ce\uc2b5\ub2c8\ub2e4. \uc989, \ubaa8\ub4e0 \uacbd\uc6b0\uc5d0 \uc774\uac83\uc774 \ub3d9\uc77c\ud558\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \ud2b8\ub79c\uc7ad\uc158\uc758 \uc644\uacb0\uc131\uc744 \uac80\uc99d\ud558\uae30 \uc704\ud574 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc870\ud68c\ud574\uc11c \ud2b8\ub79c\uc7ad\uc158\uc758 \ubaa8\ub4e0 \ube14\ub85d\ud574\uc2dc\uc640 \ud2b8\ub79c\uc7ad\uc158\uc5d0\uc11c \uc0dd\uc131\ub41c Receipt\uac00 \uc644\uacb0\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("admonition",{title:"\uc9c8\ubb38\uc774 \uc788\uc73c\uc2e0\uac00\uc694?",type:"tip"},(0,r.kt)("a",{href:"https://stackoverflow.com/questions/tagged/nearprotocol"},(0,r.kt)("h8",null,"StackOverflow\uc5d0 \ubb3c\uc5b4\ubcf4\uc138\uc694!"))))}k.isMDXComponent=!0}}]);