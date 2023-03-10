"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1703],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(i,".").concat(m)]||u[m]||c[m]||l;return n?a.createElement(k,p(p({ref:t},d),{},{components:n})):a.createElement(k,p({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var s=2;s<l;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},62626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),p=["components"],o={id:"prototyping",sidebar_label:"\uc2e0\uc18d\ud55c \ud504\ub85c\ud1a0\ud0c0\uc774\ud551",title:"\ucee8\ud2b8\ub799\ud2b8 \uc5c5\uadf8\ub808\uc774\ub4dc: \uc2e0\uc18d\ud55c \ud504\ub85c\ud1a0\ud0c0\uc774\ud551"},i="\uc2e0\uc18d\ud55c \ud504\ub85c\ud1a0\ud0c0\uc774\ud551",s={unversionedId:"sdk/js/building/prototyping",id:"sdk/js/building/prototyping",title:"\ucee8\ud2b8\ub799\ud2b8 \uc5c5\uadf8\ub808\uc774\ub4dc: \uc2e0\uc18d\ud55c \ud504\ub85c\ud1a0\ud0c0\uc774\ud551",description:"\ucee8\ud2b8\ub799\ud2b8\uc758 \uc778\ud130\ud398\uc774\uc2a4\ub97c \ubcc0\uacbd\ud558\uace0 \ub2e4\uc2dc \ubc30\ud3ec\ud558\uba74 \ub2e4\uc74c \uc624\ub958\uac00 \ud45c\uc2dc\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/../docs/sdk/js/building/prototyping.md",sourceDirName:"sdk/js/building",slug:"/sdk/js/building/prototyping",permalink:"/near_docs/vi/sdk/js/building/prototyping",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/js/building/prototyping.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"9 thg 3, 2023",frontMatter:{id:"prototyping",sidebar_label:"\uc2e0\uc18d\ud55c \ud504\ub85c\ud1a0\ud0c0\uc774\ud551",title:"\ucee8\ud2b8\ub799\ud2b8 \uc5c5\uadf8\ub808\uc774\ub4dc: \uc2e0\uc18d\ud55c \ud504\ub85c\ud1a0\ud0c0\uc774\ud551"},sidebar:"sdk",previous:{title:"Basic Instructions",permalink:"/near_docs/vi/sdk/js/building/basics"},next:{title:"\uc7ac\ud604 \uac00\ub2a5\ud55c \ube4c\ub4dc",permalink:"/near_docs/vi/sdk/js/building/reproducible-builds"}},d={},c=[{value:"\uc65c \uc774\ub7f0 \uc77c\uc774 \ubc1c\uc0dd\ud560\uae4c\uc694?",id:"\uc65c-\uc774\ub7f0-\uc77c\uc774-\ubc1c\uc0dd\ud560\uae4c\uc694",level:3},{value:"\uc774\ub7ec\ud55c \uc624\ub958\ub97c \ubc29\uc9c0\ud558\ub824\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c \ud560\uae4c\uc694?",id:"\uc774\ub7ec\ud55c-\uc624\ub958\ub97c-\ubc29\uc9c0\ud558\ub824\uba74-\uc5b4\ub5bb\uac8c-\ud574\uc57c-\ud560\uae4c\uc694",level:3},{value:"\uc2e0\uc18d\ud55c \ud504\ub85c\ud1a0\ud0c0\uc774\ud551: \ud56d\uc0c1 \ubaa8\ub4e0 \ud56d\ubaa9 \uc0ad\uc81c",id:"\uc2e0\uc18d\ud55c-\ud504\ub85c\ud1a0\ud0c0\uc774\ud551-\ud56d\uc0c1-\ubaa8\ub4e0-\ud56d\ubaa9-\uc0ad\uc81c",level:2},{value:"1. <code>rm -rf neardev &amp;&amp; near dev-deploy</code>",id:"1-rm--rf-neardev--near-dev-deploy",level:3},{value:"2. \ucee8\ud2b8\ub799\ud2b8 \uacc4\uc815 \uc0ad\uc81c &amp; \uc7ac\uc0dd\uc131",id:"2-\ucee8\ud2b8\ub799\ud2b8-\uacc4\uc815-\uc0ad\uc81c--\uc7ac\uc0dd\uc131",level:3}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\uc2e0\uc18d\ud55c-\ud504\ub85c\ud1a0\ud0c0\uc774\ud551"},"\uc2e0\uc18d\ud55c \ud504\ub85c\ud1a0\ud0c0\uc774\ud551"),(0,l.kt)("p",null,"\ucee8\ud2b8\ub799\ud2b8\uc758 \uc778\ud130\ud398\uc774\uc2a4\ub97c \ubcc0\uacbd\ud558\uace0 \ub2e4\uc2dc \ubc30\ud3ec\ud558\uba74 \ub2e4\uc74c \uc624\ub958\uac00 \ud45c\uc2dc\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Cannot deserialize the contract state.\n")),(0,l.kt)("h3",{id:"\uc65c-\uc774\ub7f0-\uc77c\uc774-\ubc1c\uc0dd\ud560\uae4c\uc694"},"\uc65c \uc774\ub7f0 \uc77c\uc774 \ubc1c\uc0dd\ud560\uae4c\uc694?"),(0,l.kt)("p",null,"\ucee8\ud2b8\ub799\ud2b8\uac00 \uc2e4\ud589\ub418\uba74, NEAR \ub7f0\ud0c0\uc784\uc740 \ub514\uc2a4\ud06c\uc5d0\uc11c \uc9c1\ub82c\ud654\ub41c \uc0c1\ud0dc\ub97c \uc77d\uace0 \ud604\uc7ac \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub85c\ub4dc\ub97c \uc2dc\ub3c4\ud569\ub2c8\ub2e4. \ucf54\ub4dc\uac00 \ubcc0\uacbd\ub418\uc5c8\uc9c0\ub9cc \uc9c1\ub82c\ud654\ub41c \uc0c1\ud0dc\uac00 \ub3d9\uc77c\ud558\uac8c \uc720\uc9c0\ub418\uba74, \ub7f0\ud0c0\uc784\uc740 \uc774\ub97c \uc218\ud589\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"\uc774\ub7ec\ud55c-\uc624\ub958\ub97c-\ubc29\uc9c0\ud558\ub824\uba74-\uc5b4\ub5bb\uac8c-\ud574\uc57c-\ud560\uae4c\uc694"},"\uc774\ub7ec\ud55c \uc624\ub958\ub97c \ubc29\uc9c0\ud558\ub824\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c \ud560\uae4c\uc694?"),(0,l.kt)("p",null,"\uc544\uc9c1 \uc5f0\uad6c \ubc0f \uac1c\ubc1c \ub2e8\uacc4\uc5d0 \uc788\ub294 \uacbd\uc6b0, \ud504\ub85c\ud1a0\ud0c0\uc785\uc744 \ube4c\ub4dc\ud558\uace0 \ub85c\uceec \ub610\ub294 ",(0,l.kt)("a",{parentName:"p",href:"/concepts/basics/networks"},"\ud14c\uc2a4\ud2b8\ub137"),"\uc5d0 \ubc30\ud3ec\ud558\uba74 \ubcc0\uacbd \uc0ac\ud56d\uc744 \uc218\uc815\ud560 \ub54c \uc774\uc804 \ucee8\ud2b8\ub799\ud2b8 \uc0c1\ud0dc\ub97c \ubaa8\ub450 \uc0ad\uc81c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \uc218\ud589\ud558\ub294 \uba87 \uac00\uc9c0 \ubc29\ubc95\uc740 \uc544\ub798\ub97c \ucc38\uace0\ud558\uc138\uc694."),(0,l.kt)("p",null,"\ubcf4\ub2e4 \uc548\uc815\uc801\uc778 \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud560 \uc900\ube44\uac00 \ub418\uba74, \uc0c1\ud0dc\ub97c \ubaa8\ub450 \uc0ad\uc81c\ud558\uc9c0 \uc54a\uace0 \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub418\ub294 \uba87 \uac00\uc9c0 ",(0,l.kt)("a",{parentName:"p",href:"/near_docs/vi/develop/upgrade#migrating-the-state"},"\uc0dd\uc0b0 \uc804\ub7b5"),'\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \ucee8\ud2b8\ub799\ud2b8\uac00 "\uc2e0\ub8b0\ud560 \uc218 \uc788\ub294 \ubaa8\ub4dc"(\uad00\ub9ac\uc790\uac00 ',(0,l.kt)("a",{parentName:"p",href:"/concepts/basics/accounts/access-keys"},"\uc804\uccb4 \uc561\uc138\uc2a4 \ud0a4"),"\ub97c \uc81c\uc5b4\ud558\ub294 \u200b\u200b\uacbd\uc6b0)\uc5d0\uc11c \ucee4\ubba4\ub2c8\ud2f0 \uad00\ub9ac \ubaa8\ub4dc(\ub354 \uc774\uc0c1 \uc804\uccb4 \uc561\uc138\uc2a4 \ud0a4\uac00 \uc5c6\uc74c)\ub85c \uc804\ud658\ub418\uba74, \ucee8\ud2b8\ub799\ud2b8\ub85c \ud558\uc5ec\uae08 ",(0,l.kt)("a",{parentName:"p",href:"/near_docs/vi/develop/upgrade#programmatic-update"},"\uc790\uccb4\uc801\uc73c\ub85c \uc5c5\uadf8\ub808\uc774\ub4dc"),"\ud558\ub3c4\ub85d \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\uc2e0\uc18d\ud55c-\ud504\ub85c\ud1a0\ud0c0\uc774\ud551-\ud56d\uc0c1-\ubaa8\ub4e0-\ud56d\ubaa9-\uc0ad\uc81c"},"\uc2e0\uc18d\ud55c \ud504\ub85c\ud1a0\ud0c0\uc774\ud551: \ud56d\uc0c1 \ubaa8\ub4e0 \ud56d\ubaa9 \uc0ad\uc81c"),(0,l.kt)("p",null,"\ubaa8\ub4e0 \uacc4\uc815 \uc0c1\ud0dc\ub97c \uc0ad\uc81c\ud558\ub294 \ubc29\ubc95\uc5d0\ub294 \ub450 \uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"rm -rf neardev && near dev-deploy")),(0,l.kt)("li",{parentName:"ol"},"\ucee8\ud2b8\ub799\ud2b8 \uacc4\uc815 \uc0ad\uc81c / \uc7ac\uc0dd\uc131")),(0,l.kt)("p",null,"\ub450 \uacbd\uc6b0 \ubaa8\ub450, \ub2e4\uc74c \uc608\uc2dc\ub97c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/near/near-sdk-js/blob/263c9695ab7bb853ced12886c4b3f8663070d900/examples/src/status-message-collections.js#L10-L42"},"JS \uc0c1\ud0dc \uba54\uc2dc\uc9c0 \ucee8\ud2b8\ub799\ud2b8"),"\ub97c \ud14c\uc2a4\ud2b8\ub137\uc5d0 \ubc30\ud3ec\ud558\uace0 \ub2e4\uc74c\uacfc \uac19\uc774 \ud638\ucd9c\ud55c\ub2e4\uace0 \uac00\uc815\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'near call [contract] set_status \'{"message": "lol"}\' --accountId you.testnet\nnear view [contract] get_status \'{"account_id": "you.testnet"}\'\n')),(0,l.kt)("p",null,"\uc774\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"set_status"),"\uc5d0 \ub300\ud55c \ud638\ucd9c\ub85c \uc124\uc815\ud55c \uba54\uc2dc\uc9c0(\uc774 \uacbd\uc6b0\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},'"lol"'),")\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774 \uc2dc\uc810\uc5d0\uc11c \ucee8\ud2b8\ub799\ud2b8\uac00 \ubc30\ud3ec\ub418\uace0, \uc0c1\ud0dc\uac00 \ub0b4\ubd80\uc5d0 \uc874\uc7ac\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774\uc81c \uac01 \uacc4\uc815\uc5d0 \ub300\ud574, \uc0c1\ud0dc \uba54\uc2dc\uc9c0\uc640 \ud0dc\uadf8\ub77c\uc778\uc774\ub77c\ub294 \ub450 \uc885\ub958\uc758 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\ub3c4\ub85d \ucee8\ud2b8\ub799\ud2b8\ub97c \ubcc0\uacbd\ud55c\ub2e4\uace0 \uac00\uc815\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc774\ub54c \uacc4\uc815 ID\ub85c \uc778\ub371\uc2f1\ub41c \uc0c1\ud0dc \uba54\uc2dc\uc9c0\uc640 \ud0dc\uadf8\ub77c\uc778\uc5d0 \ub300\ud55c \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc ",(0,l.kt)("inlineCode",{parentName:"p"},"LookupMap"),"\uc744 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc0c8 ",(0,l.kt)("inlineCode",{parentName:"p"},"taglines")," LookupMap\uc774 \uc774\uc804 ",(0,l.kt)("inlineCode",{parentName:"p"},"records")," LookupMap\uacfc \ub3d9\uc77c\ud55c \uc811\ub450\uc0ac(\uc811\ub450\uc0ac\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,l.kt)("inlineCode",{parentName:"p"},'new LookupMap("a")'),"\uc5d0 \uc758\ud574 \uc124\uc815\ub428)\ub97c \uac00\uc9c0\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0, ",(0,l.kt)("inlineCode",{parentName:"p"},"you.testnet"),"\uc5d0 \ub300\ud55c \ud0dc\uadf8\ub77c\uc778\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},'"lol"'),"\uc774 \ub418\uc5b4\uc57c \ud55c\ub2e4\uace0 \uc0dd\uac01\ud558\uba74\uc11c \ucee8\ud2b8\ub799\ud2b8\ub97c \ub2e4\uc2dc \ube4c\ub4dc\ud558\uace0 \ubc30\ud3ec\ud569\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"near view"),'\ub97c \uc2e4\ud589\ud558\uba74, "Cannot deserialize"\ub77c\ub294 \uc624\ub958 \uba54\uc2dc\uc9c0\uac00 \ub098\ud0c0\ub0a9\ub2c8\ub2e4. \ubb34\uc5c7\uc744 \ud574\uc57c \ud560\uae4c\uc694?'),(0,l.kt)("h3",{id:"1-rm--rf-neardev--near-dev-deploy"},"1. ",(0,l.kt)("inlineCode",{parentName:"h3"},"rm -rf neardev && near dev-deploy")),(0,l.kt)("p",null,"\uc0c8 \ud504\ub85c\uc81d\ud2b8\ub97c \ucc98\uc74c \uc2dc\uc791\ud560 \ub54c \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\ub294 \uac00\uc7a5 \ube60\ub978 \ubc29\ubc95\uc740 ",(0,l.kt)("a",{parentName:"p",href:"/concepts/basics/accounts/creating-accounts"},(0,l.kt)("inlineCode",{parentName:"a"},"dev-deploy")),"\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"near dev-deploy [--wasmFile ./path/to/compiled.wasm]\n")),(0,l.kt)("p",null,"\uc774\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uba87 \uac00\uc9c0 \uc791\uc5c5\uc744 \uc218\ud589\ud569\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"dev-1626793583587-89195915741581"),"\uacfc \uac19\uc740 \uc774\ub984\uc744 \uac00\uc9c4 \uc0c8 \ud14c\uc2a4\ud2b8\ub137 \uacc4\uc815\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\uc774 \uacc4\uc815 \uc774\ub984\uc744 \ud504\ub85c\uc81d\ud2b8 \ub0b4 ",(0,l.kt)("inlineCode",{parentName:"li"},"neardev")," \ud3f4\ub354\uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\uc774 \uacc4\uc815\uc5d0 \ub300\ud55c \uac1c\uc778 \ud0a4\ub97c ",(0,l.kt)("inlineCode",{parentName:"li"},"~/.near-credentials")," \ud3f4\ub354\uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\uc774 \uacc4\uc815\uc5d0 \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\ub97c \ubc30\ud3ec\ud569\ub2c8\ub2e4.")),(0,l.kt)("p",null,"\ub2e4\uc74c \ubc88\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"dev-deploy"),"\ub97c \uc2e4\ud589\ud558\uba74, \uc774\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"neardev")," \ud3f4\ub354\ub97c \ud655\uc778\ud55c \ub2e4\uc74c, \uc0c8 \uacc4\uc815\uc744 \ub9cc\ub4e4\uc9c0 \uc54a\uace0 \ub3d9\uc77c\ud55c \uacc4\uc815\uc5d0 \ub2e4\uc2dc \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uadf8\ub7ec\ub098 \uc704\uc758 \uc608\uc5d0\uc11c, \uc6b0\ub9ac\ub294 \uacc4\uc815 \uc0c1\ud0dc\ub97c \uc0ad\uc81c\ud558\uace0 \uc2f6\uc2b5\ub2c8\ub2e4. \uc774\ub294 \uc5b4\ub5bb\uac8c \ud560\uae4c\uc694?"),(0,l.kt)("p",null,"\uac00\uc7a5 \uc26c\uc6b4 \ubc29\ubc95\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"neardev")," \ud3f4\ub354\ub97c \uc0ad\uc81c\ud55c \ub2e4\uc74c, ",(0,l.kt)("inlineCode",{parentName:"p"},"near dev-deploy"),"\ub97c \ub2e4\uc2dc \uc2e4\ud589\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \uc774\ub807\uac8c \ud558\uba74 \uc0c1\ud0dc\ub97c \ube44\uc6b4 \ucc44\ub85c \uc644\uc804\ud788 \uc0c8\ub85c\uc6b4 \ud14c\uc2a4\ud2b8\ub137 \uacc4\uc815\uc774 \uc0dd\uc131\ub418\uace0, \uc5c5\ub370\uc774\ud2b8\ub41c \ucee8\ud2b8\ub799\ud2b8\uac00 \ubc30\ud3ec\ub429\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"2-\ucee8\ud2b8\ub799\ud2b8-\uacc4\uc815-\uc0ad\uc81c--\uc7ac\uc0dd\uc131"},"2. \ucee8\ud2b8\ub799\ud2b8 \uacc4\uc815 \uc0ad\uc81c & \uc7ac\uc0dd\uc131"),(0,l.kt)("p",null,"\ub04a\uc784\uc5c6\uc774 \ubcc0\ud654\ud558\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"dev-*")," \uacc4\uc815\uc774 \uc544\ub2cc \uc608\uce21 \uac00\ub2a5\ud55c \uacc4\uc815 \uc774\ub984\uc744 \uac16\uace0 \uc2f6\ub2e4\uba74, \uac00\uc7a5 \uc88b\uc740 \ubc29\ubc95\uc740 \ud558\uc704 \uacc4\uc815\uc744 \ub9cc\ub4dc\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Create sub-account"',title:'"Create','sub-account"':!0},"near create-account app-name.you.testnet --masterAccount you.testnet\n")),(0,l.kt)("p",null,"\uadf8\ub7f0 \ub2e4\uc74c \uc5ec\uae30\uc5d0 \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Deploy to sub-account"',title:'"Deploy',to:!0,'sub-account"':!0},"near deploy --accountId app-name.you.testnet [--wasmFile ./path/to/compiled.wasm]\n")),(0,l.kt)("p",null,"\uc774 \uacbd\uc6b0 \ubaa8\ub4e0 \ucee8\ud2b8\ub799\ud2b8 \uc0c1\ud0dc\ub97c \uc0ad\uc81c\ud558\uace0 \ub2e4\uc2dc \uc2dc\uc791\ud558\ub824\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c \ud560\uae4c\uc694? \ud558\uc704 \uacc4\uc815\uc744 \uc0ad\uc81c\ud558\uace0 \ub2e4\uc2dc \ub9cc\ub4dc\uc138\uc694."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Delete sub-account"',title:'"Delete','sub-account"':!0},"near delete app-name.you.testnet you.testnet\n")),(0,l.kt)("p",null,"\uc774\ub807\uac8c \ud558\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"app-name.you.testnet")," \uacc4\uc815\uc5d0 \ub0a8\uc544 \uc788\ub294 \ubaa8\ub4e0 \uc790\uae08\uc774 ",(0,l.kt)("inlineCode",{parentName:"p"},"you.testnet"),"\ub85c \ubcf4\ub0b4\uc9c0\uace0, ",(0,l.kt)("inlineCode",{parentName:"p"},"app-name.you.testnet"),"\uc5d0 \ubc30\ud3ec\ub41c \ucee8\ud2b8\ub799\ud2b8\ub294 \uc0c1\ud0dc\ub97c \ud3ec\ud568\ud55c \ubaa8\ub4e0 \uac83\uc774 \uc0ad\uc81c\ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774\uc81c \ud558\uc704 \uacc4\uc815\uc744 \uc0dd\uc131\ud558\uace0, \uc704\uc758 \uba85\ub839\uc744 \uc0ac\uc6a9\ud558\uc5ec \ub2e4\uc2dc \ubc30\ud3ec\ud558\uba74 \ucc98\uc74c \ubc30\ud3ec\ud588\uc744 \ub54c\uc640 \uac19\uc774 \ube48 \uc0c1\ud0dc\uac00 \ub429\ub2c8\ub2e4."))}m.isMDXComponent=!0}}]);