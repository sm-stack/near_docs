"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3726],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},77134:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={sidebar_position:3,sidebar_label:"\uc2dc\ub4dc \ubb38\uad6c \ub85c\uc9c1",title:"\ud544\uc218 \ub77c\uc774\ube0c\ub7ec\ub9ac\ubd80\ud130 \uc2dc\ub4dc \ubb38\uad6c \ub85c\uc9c1 \uad6c\ud604"},l="\uc2dc\ub4dc \ubb38\uad6c \ubc0f \ud0a4 \ud30c\uc0dd",p={unversionedId:"tutorials/crosswords/intermediate/use-seed-phrase",id:"tutorials/crosswords/intermediate/use-seed-phrase",title:"\ud544\uc218 \ub77c\uc774\ube0c\ub7ec\ub9ac\ubd80\ud130 \uc2dc\ub4dc \ubb38\uad6c \ub85c\uc9c1 \uad6c\ud604",description:"\uc6b0\ub9ac\uac00 \ud558\uace0\uc790 \ud558\ub294 \ub450 \uac00\uc9c0 \ubcc4\ub3c4\uc758 \uc791\uc5c5\uc774 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/../docs/3.tutorials/crosswords/03-intermediate/02-use-seed-phrase.md",sourceDirName:"3.tutorials/crosswords/03-intermediate",slug:"/tutorials/crosswords/intermediate/use-seed-phrase",permalink:"/near_docs/vi/tutorials/crosswords/intermediate/use-seed-phrase",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/03-intermediate/02-use-seed-phrase.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"9 thg 3, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"\uc2dc\ub4dc \ubb38\uad6c \ub85c\uc9c1",title:"\ud544\uc218 \ub77c\uc774\ube0c\ub7ec\ub9ac\ubd80\ud130 \uc2dc\ub4dc \ubb38\uad6c \ub85c\uc9c1 \uad6c\ud604"},sidebar:"\ud29c\ud1a0\ub9ac\uc5bc",previous:{title:"\uc2dc\ub4dc \ubb38\uad6c\ub97c \uc815\ub2f5\uc73c\ub85c",permalink:"/near_docs/vi/tutorials/crosswords/intermediate/access-key-solution"},next:{title:"Linkdrop \ucee8\ud2b8\ub799\ud2b8",permalink:"/near_docs/vi/tutorials/crosswords/intermediate/linkdrop"}},d={},c=[{value:"near-seed-phrase \ub77c\uc774\ube0c\ub7ec\ub9ac",id:"near-seed-phrase-\ub77c\uc774\ube0c\ub7ec\ub9ac",level:2},{value:"\uc0c8 \uacc4\uc815 \uc0dd\uc131\uc744 \uc704\ud55c \uc784\uc758\uc758 \uc2dc\ub4dc \ubb38\uad6c \uc0dd\uc131(\uc2b9\uc790\uac00 \uc544\uc9c1 \uacc4\uc815\uc774 \uc5c6\ub294 \uacbd\uc6b0)",id:"\uc0c8-\uacc4\uc815-\uc0dd\uc131\uc744-\uc704\ud55c-\uc784\uc758\uc758-\uc2dc\ub4dc-\ubb38\uad6c-\uc0dd\uc131\uc2b9\uc790\uac00-\uc544\uc9c1-\uacc4\uc815\uc774-\uc5c6\ub294-\uacbd\uc6b0",level:2},{value:"\uc815\ub2f5\uc744 \uc2dc\ub4dc \uad6c\ubb38\uc73c\ub85c \ud30c\uc2f1",id:"\uc815\ub2f5\uc744-\uc2dc\ub4dc-\uad6c\ubb38\uc73c\ub85c-\ud30c\uc2f1",level:2},{value:"\ud0a4 \uc800\uc7a5\uc18c",id:"\ud0a4-\uc800\uc7a5\uc18c",level:3}],u={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\uc2dc\ub4dc-\ubb38\uad6c-\ubc0f-\ud0a4-\ud30c\uc0dd"},"\uc2dc\ub4dc \ubb38\uad6c \ubc0f \ud0a4 \ud30c\uc0dd"),(0,o.kt)("p",null,"\uc6b0\ub9ac\uac00 \ud558\uace0\uc790 \ud558\ub294 \ub450 \uac00\uc9c0 \ubcc4\ub3c4\uc758 \uc791\uc5c5\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\uc0ac\uc6a9\uc790\uac00 \uc2ed\uc790\ub9d0\ud480\uc774 \ud37c\uc990\uc744 \ubc29\ubb38\ud560 \ub54c \uc0ac\uc6a9\uc790\ub97c \uc704\ud55c \uc784\uc758\uc758 ",(0,o.kt)("strong",{parentName:"li"},"\uc2dc\ub4dc \ubb38\uad6c\ub97c \uc0dd\uc131"),'\ud569\ub2c8\ub2e4. \uc774\uac83\uc740 \uadf8\ub4e4\uc774 \uac8c\uc784\uc5d0\uc11c \uc774\uacbc\uc744 \ub54c NEAR \uacc4\uc815\uc774 \uc5c6\uace0, \uacc4\uc815\uc744 \ub9cc\ub4e4\uace0\uc790 \ud558\ub294 \uacbd\uc6b0\uc5d0 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c \ub098\uc911\uc5d0 \uc774 \uc2dc\ub4dc \ubb38\uad6c\ub97c NEAR \uc9c0\uac11\uc5d0 \ubd99\uc5ec\ub123\uc5b4 \uacc4\uc815\uc744 \uac00\uc838\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4(\uae30\ubcf8\uc801\uc73c\ub85c "\ub85c\uadf8\uc778"\uacfc \uc720\uc0ac\ud558\uba70 \ud604\uc7ac ',(0,o.kt)("a",{parentName:"li",href:"https://wallet.near.org/recover-seed-phrase%EC%97%90%EC%84%9C"},"https://wallet.near.org/recover-seed-phrase\uc5d0\uc11c")," \uac00\ub2a5\ud568)."),(0,o.kt)("li",{parentName:"ol"},"\uc2ed\uc790\ub9d0\ud480\uc774 \uc815\ub2f5\uc744 \ud574\uc2f1\ud558\ub294 \ub300\uc2e0 ",(0,o.kt)("strong",{parentName:"li"},"\ud0a4 \uc30d\uc73c\ub85c \uc804\ud658"),"\ud569\ub2c8\ub2e4.")),(0,o.kt)("h2",{id:"near-seed-phrase-\ub77c\uc774\ube0c\ub7ec\ub9ac"},"near-seed-phrase \ub77c\uc774\ube0c\ub7ec\ub9ac"),(0,o.kt)("p",null,"\ub2e4\uc74c\uc744 \uc0ac\uc6a9\ud558\uc5ec ",(0,o.kt)("inlineCode",{parentName:"p"},"near-seed-phrase")," \ud328\ud0a4\uc9c0\ub97c \ud504\ub85c\uc81d\ud2b8\uc5d0 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install near-seed-phrase --save\n")),(0,o.kt)("admonition",{title:"\uc774 \ucc55\ud130\uc758 \ucf54\ub4dc \uc2a4\ub2c8\ud3ab",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\ud29c\ud1a0\ub9ac\uc5bc\uc758 \uc774 \uc2dc\uc810\uc5d0\uc11c\ub294 \uc758\ubbf8 \uc788\ub294 \ub3d9\uc2dc\uc5d0 \ud504\ub85c\uc81d\ud2b8\uc5d0 \ubcf5\uc0ac/\ubd99\uc5ec\ub123\uae30\ud560 \ucf54\ub4dc \uc2a4\ub2c8\ud3ab\uc744 \uacf5\uc720\ud558\uae30\uac00 \ub354 \uc5b4\ub835\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",{parentName:"admonition"},"\uc81c\uacf5\ub41c \uc2a4\ub2c8\ud3ab\uc740 \uc791\ub3d9\ud558\ub294 \ucf54\ub4dc\ub97c \ucc3e\uae30\uc5d0 \uac00\uc7a5 \uc88b\uc740 \uc704\uce58\uc778 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near-examples/crossword-tutorial-chapter-3"},"3\uc7a5\uc758 \uc644\uc131\ub41c \ucf54\ub4dc")," \uad6c\ud604\uacfc \uc57d\uac04 \ub2e4\ub97c \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,o.kt)("h2",{id:"\uc0c8-\uacc4\uc815-\uc0dd\uc131\uc744-\uc704\ud55c-\uc784\uc758\uc758-\uc2dc\ub4dc-\ubb38\uad6c-\uc0dd\uc131\uc2b9\uc790\uac00-\uc544\uc9c1-\uacc4\uc815\uc774-\uc5c6\ub294-\uacbd\uc6b0"},"\uc0c8 \uacc4\uc815 \uc0dd\uc131\uc744 \uc704\ud55c \uc784\uc758\uc758 \uc2dc\ub4dc \ubb38\uad6c \uc0dd\uc131(\uc2b9\uc790\uac00 \uc544\uc9c1 \uacc4\uc815\uc774 \uc5c6\ub294 \uacbd\uc6b0)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { generateSeedPhrase } from 'near-seed-phrase';\n\n// Create a random key in here\nlet seedPhrase = generateSeedPhrase(); // generateSeedPhrase() returns an object {seedPhrase, publicKey, secretKey}\nlocalStorage.setItem('playerKeyPair', JSON.stringify(seedPhrase));\n")),(0,o.kt)("h2",{id:"\uc815\ub2f5\uc744-\uc2dc\ub4dc-\uad6c\ubb38\uc73c\ub85c-\ud30c\uc2f1"},"\uc815\ub2f5\uc744 \uc2dc\ub4dc \uad6c\ubb38\uc73c\ub85c \ud30c\uc2f1"),(0,o.kt)("p",null,"(\uc774 \ubcf4\uc548 \uc870\uce58\ub294 \ud504\ub860\ud2b8\ub7ec\ub2dd\uc744 \ubc29\uc9c0\ud569\ub2c8\ub2e4.)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { parseSeedPhrase } from 'near-seed-phrase';\n// Get the seed phrase from the completed puzzle. \n// The original puzzle creator would have already called this same function with the same inputs and would have \n// already called `AddKey` on this contract to add the key related to this seed phrase. Here, using this deterministic \n// function, the front-end will automatically generate that same key based on the inputs from the winner.\nconst seedPhrase = parseSolutionSeedPhrase(data, gridData); // returns a string of space-separated words\n// Get the public and private key derived from the seed phrase\nconst {secretKey, publicKey} = parseSeedPhrase(seedPhrase);\n\n// Set up the account and connection, acting on behalf of the crossword account\nconst keyStore = new nearAPI.keyStores.InMemoryKeyStore(); // Another type of key\nconst keyPair = nearAPI.utils.key_pair.KeyPair.fromString(secretKey);\nawait keyStore.setKey(nearConfig.networkId, nearConfig.contractName, keyPair);\nnearConfig.keyStore = keyStore;\nconst near = await nearAPI.connect(nearConfig);\nconst crosswordAccount = await near.account(nearConfig.contractName);\n\n// Call the submit_solution method using the discovered function-call access key\nlet transaction = await crosswordAccount.functionCall(\u2026);\n")),(0,o.kt)("p",null,"\ub9c8\uc9c0\ub9c9 \uc904\uc740 \uc775\uc219\ud574 \ubcf4\uc77c \uac83\uc785\ub2c8\ub2e4. \uc6b0\ub9ac\ub294 \ud568\uc218 \ud638\ucd9c\uc744 \ud558\uae30 \uc704\ud574 ",(0,o.kt)("inlineCode",{parentName:"p"},"WalletConnection"),"\uc758 \uacc4\uc815\uc744 \uc0ac\uc6a9\ud55c \uac83\uc744 \uc81c\uc678\ud558\uace0\ub294 \uc9c0\ub09c \uc7a5\uc5d0\uc11c \ube44\uc2b7\ud55c \uc77c\uc744 \ud588\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774\ubc88\uc5d0\ub294 \uc2a4\ub2c8\ud3ab\uc758 \uc911\uac04 \ubd80\ubd84\uc5d0\uc11c \ubcfc \uc218 \uc788\ub4ef\uc774, \ube0c\ub77c\uc6b0\uc800 \ub300\uc2e0 ",(0,o.kt)("inlineCode",{parentName:"p"},"InMemoryKeyStore"),"\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4 ."),(0,o.kt)("h3",{id:"\ud0a4-\uc800\uc7a5\uc18c"},"\ud0a4 \uc800\uc7a5\uc18c"),(0,o.kt)("p",null,"\uc774\uc81c ",(0,o.kt)("inlineCode",{parentName:"p"},"near-api-js"),"\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uac70\uc758 \ubaa8\ub4e0 \ud0a4 \uc800\uc7a5\uc18c\ub97c \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"UnencryptedFileSystemKeyStore")," \u2014 \ucd08\uae30\uc5d0 NEAR CLI \uba85\ub839 ",(0,o.kt)("inlineCode",{parentName:"li"},"near login"),"\uc744 \uc0ac\uc6a9\ud588\uc744 \ub54c, \uc774\ub294 \uc6b4\uc601 \uccb4\uc81c\uc758 \ud648 \ub514\ub809\ud1a0\ub9ac\uc5d0 \uacc4\uc815\uc5d0 \ub300\ud55c \uac1c\uc778 \uc804\uccb4 \uc561\uc138\uc2a4 \ud0a4\uac00 \ud3ec\ud568\ub41c \ud30c\uc77c\uc744 \uc0dd\uc131\ud588\uc2b5\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"BrowserLocalStorageKeyStore")," \u2014 \ub9c8\uc9c0\ub9c9 \ucc55\ud130\uc5d0\uc11c \uc0ac\uc6a9\uc790\uac00 \ucc98\uc74c \ub85c\uadf8\uc778\ud558\uba74, \ud568\uc218 \ud638\ucd9c \uc561\uc138\uc2a4 \ud0a4\uac00 \ube0c\ub77c\uc6b0\uc800\uc758 \ub85c\uceec \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"InMemoryKeyStore")," \u2014 \uc774 \ucc55\ud130\uc5d0\uc11c\ub294 \ub2e8\uc21c\ud788 \ucef4\ud4e8\ud130\uc758 \uba54\ubaa8\ub9ac\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc2ed\uc790\ub9d0\ud480\uc774 \uc815\ub2f5\uc5d0\uc11c \ud30c\uc0dd\ub41c \uac1c\uc778 \ud0a4\ub97c \uc800\uc7a5\ud569\ub2c8\ub2e4.")),(0,o.kt)("admonition",{title:"\uc5ec\ub7ec \uac1c\uc758 \ud0a4 \uc800\uc7a5\uc18c\ub97c \uac00\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\uae30\uc220\uc801\uc73c\ub85c\ub294, ",(0,o.kt)("inlineCode",{parentName:"p"},"MergeKeyStore"),"\ub77c\uace0 \ubd80\ub974\ub294 \ud0a4 \uc800\uc7a5\uc18c\uac00 \ub610 \ud558\ub098 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",{parentName:"admonition"},"\ub2e4\uc591\ud55c \ub514\ub809\ud1a0\ub9ac\uc5d0\uc11c \uac1c\uc778 \ud0a4\ub97c \ucc3e\uace0 \uc2f6\ub2e4\uace0 \uac00\uc815\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc73c\ub85c \ub2e4\ub978 \uc704\uce58\uc5d0\uc11c \ubcf4\uc774\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"UnencryptedFileSystemKeyStore")," \ud0a4 \uc800\uc7a5\uc18c \ubaa9\ub85d\uc744 \uac00\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",{parentName:"admonition"},"\ub458 \uc774\uc0c1\uc758 \uc704\uce58\uc5d0\uc11c \uac1c\uc778 \ud0a4\ub97c \ucc3e\uace0 \uc2f6\ub2e4\uba74, ",(0,o.kt)("inlineCode",{parentName:"p"},"MergeKeyStore"),"\ub97c \uc0ac\uc6a9\ud558\uc138\uc694.")))}m.isMDXComponent=!0}}]);