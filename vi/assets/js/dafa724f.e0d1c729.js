"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8583],{3905:(t,e,a)=>{a.d(e,{Zo:()=>i,kt:()=>N});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var k=n.createContext({}),m=function(t){var e=n.useContext(k),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},i=function(t){var e=m(t.components);return n.createElement(k.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,k=t.parentName,i=o(t,["components","mdxType","originalType","parentName"]),s=m(a),N=r,u=s["".concat(k,".").concat(N)]||s[N]||d[N]||l;return a?n.createElement(u,p(p({ref:e},i),{},{components:a})):n.createElement(u,p({ref:e},i))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=s;var o={};for(var k in e)hasOwnProperty.call(e,k)&&(o[k]=e[k]);o.originalType=t,o.mdxType="string"==typeof t?t:r,p[1]=o;for(var m=2;m<l;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},33389:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>k,default:()=>N,frontMatter:()=>o,metadata:()=>m,toc:()=>d});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),p=["components"],o={id:"skeleton",title:"\ubf08\ub300 \ubc0f JavaScript \uc544\ud0a4\ud14d\ucc98",sidebar_label:"\ucee8\ud2b8\ub799\ud2b8 \uad6c\uc870"},k=void 0,m={unversionedId:"tutorials/nfts/js/skeleton",id:"tutorials/nfts/js/skeleton",title:"\ubf08\ub300 \ubc0f JavaScript \uc544\ud0a4\ud14d\ucc98",description:'\uc774 \uae00\uc5d0\uc11c\ub294 \uc774 "Zero to Hero" \uc2dc\ub9ac\uc988\ub97c \uc9c4\ud589\ud558\uba74\uc11c \uac1c\ubc1c\ud558\uac8c \ub420 NFT \ucee8\ud2b8\ub799\ud2b8\uc758 \uae30\ubcf8 \uc544\ud0a4\ud14d\ucc98\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4.',source:"@site/../docs/3.tutorials/nfts/js/1-skeleton.md",sourceDirName:"3.tutorials/nfts/js",slug:"/tutorials/nfts/js/skeleton",permalink:"/near_docs/vi/tutorials/nfts/js/skeleton",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/js/1-skeleton.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"9 thg 3, 2023",sidebarPosition:1,frontMatter:{id:"skeleton",title:"\ubf08\ub300 \ubc0f JavaScript \uc544\ud0a4\ud14d\ucc98",sidebar_label:"\ucee8\ud2b8\ub799\ud2b8 \uad6c\uc870"},sidebar:"\ud29c\ud1a0\ub9ac\uc5bc",previous:{title:"\uc0ac\uc804 \ubc30\ud3ec\ub41c \ucee8\ud2b8\ub799\ud2b8",permalink:"/near_docs/vi/tutorials/nfts/js/predeployed-contract"},next:{title:"\ubc1c\ud589",permalink:"/near_docs/vi/tutorials/nfts/js/minting"}},i={},d=[{value:"\uc18c\uac1c",id:"\uc18c\uac1c",level:2},{value:"\ud30c\uc77c \uad6c\uc870",id:"\ud30c\uc77c-\uad6c\uc870",level:2},{value:"\uc18c\uc2a4 \ud30c\uc77c",id:"\uc18c\uc2a4-\ud30c\uc77c",level:3},{value:"<code>approval.ts</code>",id:"approvalts",level:2},{value:"<code>enumeration.ts</code>",id:"enumerationts",level:2},{value:"<code>metadata.ts</code>",id:"metadatats",level:2},{value:"<code>mint.ts</code>",id:"mintts",level:2},{value:"<code>nft_core.ts</code>",id:"nft_corets",level:2},{value:"<code>royalty.ts</code>",id:"royaltyts",level:2},{value:"<code>index.ts</code>",id:"indexts",level:2},{value:"\ubf08\ub300 \ub9cc\ub4e4\uae30",id:"\ubf08\ub300-\ub9cc\ub4e4\uae30",level:2},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2}],s={toc:d};function N(t){var e=t.components,a=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\uc774 \uae00\uc5d0\uc11c\ub294 \uc774 ",(0,l.kt)("em",{parentName:"p"},'"Zero to Hero"')," \uc2dc\ub9ac\uc988\ub97c \uc9c4\ud589\ud558\uba74\uc11c \uac1c\ubc1c\ud558\uac8c \ub420 NFT \ucee8\ud2b8\ub799\ud2b8\uc758 \uae30\ubcf8 \uc544\ud0a4\ud14d\ucc98\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4.\n\ucee8\ud2b8\ub799\ud2b8\uc758 \ub808\uc774\uc544\uc6c3\uc744 \ubc1c\uacac\ud558\uace0 \uc644\uc804\ud55c \uae30\ub2a5\uc744 \uac16\ucd98 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uad6c\ucd95\ud558\uae30 \uc704\ud574 JavaScript \ud30c\uc77c\uc774 \uc5b4\ub5bb\uac8c \uad6c\uc131\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"JS-SDK\ub294 \ud604\uc7ac ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/near/near-sdk-js/releases/"},(0,l.kt)("inlineCode",{parentName:"a"},"Alpha")))," \ubc84\uc804\uc785\ub2c8\ub2e4. ")),(0,l.kt)("h2",{id:"\uc18c\uac1c"},"\uc18c\uac1c"),(0,l.kt)("p",null,"\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc740 NFT \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \ucf54\ub4dc \ubf08\ub300\uc640 \ud30c\uc77c \uad6c\uc870\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \ubaa8\ub4e0 \uae30\ub2a5\uc774 \ubc30\uce58\ub41c \ubc29\ubc95\uacfc \ucc44\uc6cc\uc57c \ud558\ub294 \ub204\ub77d\ub41c JS \ucf54\ub4dc\ub97c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubaa8\ub4e0 \ud30c\uc77c\uacfc \uae30\ub2a5\uc774 \ub2e4\ub8e8\uc5b4\uc9c0\uba74, \ubaa8\ud615 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud558\ub294 \ud504\ub85c\uc138\uc2a4\ub97c \uac70\uccd0\uc11c \ud655\uc778\ud569\ub2c8\ub2e4. \ubaa8\ub4e0 \uac83\uc774 \uc62c\ubc14\ub974\uac8c \uc791\ub3d9\ud560 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\ud30c\uc77c-\uad6c\uc870"},"\ud30c\uc77c \uad6c\uc870"),(0,l.kt)("p",null,"\uc77c\ubc18 ",(0,l.kt)("a",{parentName:"p",href:"https://www.javascript.com/"},"JavaScript")," \ud504\ub85c\uc81d\ud2b8\uc5d0 \ub530\ub77c \uc774 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \ud30c\uc77c \uad6c\uc870\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"package.json")," : \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \ud328\ud0a4\uc9c0 \ubc0f \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc815\uc758\ud558\ub294 \ud30c\uc77c\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"src")," : \ubaa8\ub4e0 JavaScript \uc18c\uc2a4 \ud30c\uc77c\uc774 \uc800\uc7a5\ub418\ub294 \ud3f4\ub354\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"build")," : \ucef4\ud30c\uc77c\ub41c ",(0,l.kt)("inlineCode",{parentName:"li"},"wasm")," \ud30c\uc77c\uc774 \ucd9c\ub825\ub420 \ud3f4\ub354\uc785\ub2c8\ub2e4. ")),(0,l.kt)("h3",{id:"\uc18c\uc2a4-\ud30c\uc77c"},"\uc18c\uc2a4 \ud30c\uc77c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\ud30c\uc77c"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#approvalts"},"approval.ts")),(0,l.kt)("td",{parentName:"tr",align:null},"\ub300\uccb4 \ubd88\uac00\ub2a5 \ud1a0\ud070\uc758 \uc561\uc138\uc2a4 \ubc0f \uc804\uc1a1\uc744 \uc81c\uc5b4\ud558\ub294 \u200b\u200b\ub0b4\ubd80 \ud568\uc218\ub4e4\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#enumerationts"},"enumeration.ts")),(0,l.kt)("td",{parentName:"tr",align:null},"NFT \ud1a0\ud070 \ubc0f \ud574\ub2f9 \uc18c\uc720\uc790\ub97c \ucffc\ub9ac\ud558\ub294 \ub0b4\ubd80 \uba54\uc11c\ub4dc\ub97c \ud3ec\ud568\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#indexts"},"index.ts")),(0,l.kt)("td",{parentName:"tr",align:null},"\uacf5\uac1c\ub41c \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ud568\uc218\ub4e4\uc744 \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#metadatats"},"metadata.ts")),(0,l.kt)("td",{parentName:"tr",align:null},"\ud1a0\ud070 \ubc0f \uba54\ud0c0\ub370\uc774\ud130 \uad6c\uc870\ub97c \uc815\uc758\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#mintts"},"mint.ts")),(0,l.kt)("td",{parentName:"tr",align:null},"\ub0b4\ubd80 \ud1a0\ud070 \ubc1c\ud589 \ub85c\uc9c1\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#nft_corets"},"nft_core.ts")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc0ac\uc6a9\uc790 \uac04\uc5d0 NFT\ub97c \uc804\uc1a1\ud560 \uc218 \uc788\ub294 \ub0b4\ubd80 \ud575\uc2ec \ub85c\uc9c1\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#royaltyts"},"royalty.ts")),(0,l.kt)("td",{parentName:"tr",align:null},"\ub0b4\ubd80 \uc9c0\ubd88 \uad00\ub828 \ud568\uc218\ub97c \ud3ec\ud568\ud569\ub2c8\ub2e4.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nft-tutorial-js\n\u2514\u2500\u2500 src\n    market-contract\n    nft-contract\n    \u251c\u2500\u2500 approval.ts\n    \u251c\u2500\u2500 enumeration.ts\n    \u251c\u2500\u2500 index.ts\n    \u251c\u2500\u2500 metadata.ts\n    \u251c\u2500\u2500 mint.ts\n    \u251c\u2500\u2500 nft_core.ts\n    \u2514\u2500\u2500 royalty.ts\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/near-examples/nft-tutorial-js/tree/1.skeleton"},"GitHub \ub808\ud37c\uc9c0\ud1a0\ub9ac"),"\uc5d0\uc11c \ucf54\ub4dc\ub97c \uc0b4\ud3b4\ubcf4\uc138\uc694.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"approvalts"},(0,l.kt)("inlineCode",{parentName:"h2"},"approval.ts")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\uc774\ub97c \ud1b5\ud574 \uc0ac\ub78c\ub4e4\uc740 \ub2e4\ub978 \uacc4\uc815\uc744 NFT\ub97c \ub300\uc2e0 \uc804\uc1a1\ud560 \uc218 \uc788\uac8c\ub054 \uc2b9\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("p",null,"\uc774 \ud30c\uc77c\uc5d0\ub294 \ud45c\uc900\uc758 ",(0,l.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/NonFungibleToken/ApprovalManagement.html"},"\uc2b9\uc778 \uad00\ub9ac")," \ud655\uc7a5\uc744 \uc900\uc218\ud558\ub294 \ub0b4\ubd80 \ub85c\uc9c1\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\uc74c\uc740 \uba54\uc11c\ub4dc \ubc0f \uae30\ub2a5\uc5d0 \ub300\ud55c \ubd84\uc11d\uc785\ub2c8\ub2e4."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\uba54\uc11c\ub4dc"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"internalNftApprove")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc0ac\uc6a9\uc790\ub97c \ub300\uc2e0\ud558\uc5ec \ud1a0\ud070\uc744 \uc804\uc1a1\ud560 \uacc4\uc815 ID\ub97c \uc2b9\uc778\ud569\ub2c8\ub2e4. ",(0,l.kt)("strong",{parentName:"td"},"nft_approve")," \uc5d0\uc11c \ud638\ucd9c\ub429\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"internalNftIsApproved")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc785\ub825 \uacc4\uc815\uc5d0 \ud1a0\ud070 ID\ub97c \uc2b9\uc778\ud560 \uc218 \uc788\ub294 \uc561\uc138\uc2a4 \uad8c\ud55c\uc774 \uc788\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4. ",(0,l.kt)("strong",{parentName:"td"},"nft_is_approved"),"\uc5d0\uc11c \ud638\ucd9c\ub429\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"internalNftRevoke")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc0ac\uc6a9\uc790\ub97c \ub300\uc2e0\ud558\uc5ec \ud1a0\ud070\uc744 \uc804\uc1a1\ud558\ub294 \ud2b9\uc815 \uacc4\uc815\uc744 \ucde8\uc18c\ud569\ub2c8\ub2e4. ",(0,l.kt)("strong",{parentName:"td"},"nft_revoke"),"\uc5d0\uc11c \ud638\ucd9c\ub429\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"internalNftRevokeAll")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc0ac\uc6a9\uc790\ub97c \ub300\uc2e0\ud558\uc5ec \ud1a0\ud070\uc744 \uc804\uc1a1\ud558\ub294 \ubaa8\ub4e0 \uacc4\uc815\uc744 \ucde8\uc18c\ud569\ub2c8\ub2e4. ",(0,l.kt)("strong",{parentName:"td"},"nft_revoke_all"),"\uc5d0\uc11c \ud638\ucd9c\ub429\ub2c8\ub2e4.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/1.skeleton/src/nft-contract/approval.ts#L9-L69\n")),(0,l.kt)("p",null,"Zero to Hero \uc2dc\ub9ac\uc988\uc758 ",(0,l.kt)("a",{parentName:"p",href:"/tutorials/nfts/js/approvals"},"\uc2b9\uc778 \uc139\uc158"),"\uc5d0\uc11c \uc774\ub7ec\ud55c \ud568\uc218\ub4e4\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"enumerationts"},(0,l.kt)("inlineCode",{parentName:"h2"},"enumeration.ts")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\uc774 \ud30c\uc77c\uc740 NFT\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ubcf4\ub294 \ub370 \ud544\uc694\ud55c \ub0b4\ubd80 \ud568\uc218\ub4e4\uc744 \uc81c\uacf5\ud558\uba70 \ud45c\uc900\uc758 ",(0,l.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration"},"\uc5f4\uac70")," \ud655\uc7a5\uc790\ub97c \ub530\ub985\ub2c8\ub2e4.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\uba54\uc11c\ub4dc"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"internalNftTotalSupply")),(0,l.kt)("td",{parentName:"tr",align:null},"\ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc800\uc7a5\ub41c NFT\uc758 \ucd1d\ub7c9\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. ",(0,l.kt)("strong",{parentName:"td"},"nft_total_supply"),"\uc5d0\uc11c \ud638\ucd9c\ub429\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"internalNftTokens")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc18c\uc720\uc790\uc640 \uad00\uacc4\uc5c6\uc774 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc800\uc7a5\ub41c \ud398\uc774\uc9c0\uac00 \ub9e4\uaca8\uc9c4 NFT \ubaa9\ub85d\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. ",(0,l.kt)("strong",{parentName:"td"},"nft_tokens"),"\uc5d0\uc11c \ud638\ucd9c\ub429\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"internalNftSupplyForOwner")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc8fc\uc5b4\uc9c4 \uc0ac\uc6a9\uc790\uac00 \uc18c\uc720\ud55c \ucd1d NFT \uc218\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,l.kt)("strong",{parentName:"td"},"nft_supply_for_owner"),"\uc5d0\uc11c \ud638\ucd9c\ub429\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"internalNftTokensForOwner")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc9c0\uc815\ub41c \uc0ac\uc6a9\uc790\uac00 \uc18c\uc720\ud55c NFT \ubaa9\ub85d\uc744 \ud398\uc774\uc9c0 \ud615\ud0dc\ub85c \ubc18\ud658\ud569\ub2c8\ub2e4. ",(0,l.kt)("strong",{parentName:"td"},"nft_tokens_for_owner"),"\uc5d0\uc11c \ud638\ucd9c\ub429\ub2c8\ub2e4.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/1.skeleton/src/nft-contract/enumeration.ts#L8-L62\n")),(0,l.kt)("p",null,"\ud29c\ud1a0\ub9ac\uc5bc \uc2dc\ub9ac\uc988\uc758 ",(0,l.kt)("a",{parentName:"p",href:"/tutorials/nfts/js/enumeration"},"\uc5f4\uac70 \uc139\uc158"),"\uc5d0\uc11c \uc774\ub7ec\ud55c \ud568\uc218\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"metadatats"},(0,l.kt)("inlineCode",{parentName:"h2"},"metadata.ts")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\uc774 \ud30c\uc77c\uc740 \ud1a0\ud070 \ubc0f \uba54\ud0c0\ub370\uc774\ud130\uc5d0 \ub300\ud574 \uc800\uc7a5\ud560 \uc815\ubcf4\ub97c \ucd94\uc801\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4.\n\ub610\ud55c \ud45c\uc900 \uba54\ud0c0\ub370\uc774\ud130 \ud655\uc7a5\uc758 \uc77c\ubd80\uc778 \ucee8\ud2b8\ub799\ud2b8\uc758 ",(0,l.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Metadata"},"\uba54\ud0c0\ub370\uc774\ud130")," \ub97c \ubcf4\ub294 \uae30\ub2a5\uc744 \uc815\uc758\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\uc774\ub984"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"TokenMetadata")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc774 \uad6c\uc870\ub294 \uac01 \ud1a0\ud070\uc5d0 \ub300\ud574 \uc800\uc7a5\ud560 \uc218 \uc788\ub294 \uba54\ud0c0\ub370\uc774\ud130\ub97c \uc815\uc758\ud569\ub2c8\ub2e4(\uc81c\ubaa9, \uc124\uba85, \ubbf8\ub514\uc5b4 \ub4f1).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Token")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc774 \uad6c\uc870\ub294 \uac01 \ud1a0\ud070\uc5d0 \ub300\ud55c \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc5b4\ub5a4 \uc815\ubcf4\uac00 \uc800\uc7a5\ub420 \uac83\uc778\uc9c0\ub97c \uc124\uba85\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"JsonToken")),(0,l.kt)("td",{parentName:"tr",align:null},"View \ud638\ucd9c\uc744 \ud1b5\ud574 NFT\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \uc870\ud68c\ud560 \ub54c, \ubc18\ud658\ub41c \uc815\ubcf4\ub294 \uc774 JSON \ud1a0\ud070\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"internalNftMetadata")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc774 \ud568\uc218\ub97c \ud1b5\ud574 \uc0ac\uc6a9\uc790\ub294 \ucee8\ud2b8\ub799\ud2b8\uc758 \ub0b4\ubd80 \uba54\ud0c0\ub370\uc774\ud130\ub97c \ucffc\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,l.kt)("strong",{parentName:"td"},"nft_metadata"),"\uc5d0\uc11c \ud638\ucd9c\ub429\ub2c8\ub2e4.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/1.skeleton/src/nft-contract/metadata.ts#L12-L46\n")),(0,l.kt)("p",null,"\ud29c\ud1a0\ub9ac\uc5bc \uc2dc\ub9ac\uc988\uc758 ",(0,l.kt)("a",{parentName:"p",href:"/tutorials/nfts/js/minting"},"\ubc1c\ud589 \uc139\uc158"),"\uc5d0\uc11c \uc774\ub7ec\ud55c \uae30\ub2a5\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"mintts"},(0,l.kt)("inlineCode",{parentName:"h2"},"mint.ts")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ub0b4\ubd80 \ud1a0\ud070 \ubc1c\ud589 \ub85c\uc9c1\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\uba54\uc11c\ub4dc"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"internalNftMint")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc774 \ud568\uc218\ub294 \ub300\uccb4 \ubd88\uac00\ub2a5 \ud1a0\ud070\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4. ",(0,l.kt)("strong",{parentName:"td"},"nft_mint"),"\uc5d0\uc11c \ud638\ucd9c\ub429\ub2c8\ub2e4.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/1.skeleton/src/nft-contract/mint.ts#L7-L23\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"nft_corets"},(0,l.kt)("inlineCode",{parentName:"h2"},"nft_core.ts")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\uc0ac\uc6a9\uc790 \uac04\uc5d0 NFT\ub97c \uc804\uc1a1\ud560 \uc218 \uc788\ub294 \ud575\uc2ec \ub85c\uc9c1\uc785\ub2c8\ub2e4.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\uba54\uc11c\ub4dc"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"internalNftTransfer")),(0,l.kt)("td",{parentName:"tr",align:null},"NFT\ub97c \uc218\uc2e0\uc790 ID\ub85c \uc804\uc1a1\ud569\ub2c8\ub2e4. ",(0,l.kt)("strong",{parentName:"td"},"nft_transfer"),"\uc5d0\uc11c \ud638\ucd9c\ub429\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"internalNftTransferCall")),(0,l.kt)("td",{parentName:"tr",align:null},"NFT\ub97c \uc218\uc2e0\uc790\uc5d0\uac8c \uc804\uc1a1\ud558\uace0 \uc218\uc2e0\uc790 ID \ucee8\ud2b8\ub799\ud2b8\uc758 \ud568\uc218\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4. \ubcf4\ub0b8 \uc0ac\ub78c\uc758 \uacc4\uc815\uc5d0\uc11c \ud1a0\ud070\uc774 \uc804\uc1a1\ub41c \uacbd\uc6b0 \ud568\uc218\ub294 ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),"\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. ",(0,l.kt)("strong",{parentName:"td"},"nft_transfer_call"),"\uc5d0\uc11c \ud638\ucd9c\ub429\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"internalNftToken")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc0ac\uc6a9\uc790\uac00 \ud2b9\uc815 NFT\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ucffc\ub9ac\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4. ",(0,l.kt)("strong",{parentName:"td"},"nft_token"),"\uc5d0\uc11c \ud638\ucd9c\ub429\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"internalNftResolveTransfer")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"nft_transfer_call"),"\uc744 \uc2dc\uc791\ud558\uace0 NFT\ub97c \uc804\uc1a1\ud560 \ub54c\uc758 \ud45c\uc900\uc5d0 \ub530\ub974\uba74, \uc218\uc2e0\uc790\uc758 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc788\ub294 \uba54\uc11c\ub4dc\ub3c4 \ud638\ucd9c\ud574\uc57c \ud569\ub2c8\ub2e4. \uc218\uc2e0\uc790\uac00 \ubc1c\uc2e0\uc790\uc5d0\uac8c NFT\ub97c \ubc18\ud658\ud574\uc57c \ud558\ub294 \uacbd\uc6b0(",(0,l.kt)("inlineCode",{parentName:"td"},"nft_on_transfer")," \uba54\uc11c\ub4dc\uc758 \ubc18\ud658 \uac12\uc5d0 \ub530\ub77c) \uc774 \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uba74 \ud574\ub2f9 \ub85c\uc9c1\uc744 \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,l.kt)("strong",{parentName:"td"},"nft_resolve_transfer"),"\uc5d0\uc11c \ud638\ucd9c\ub429\ub2c8\ub2e4.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/1.skeleton/src/nft-contract/nft_core.ts#L10-L85\n")),(0,l.kt)("p",null,"\ud29c\ud1a0\ub9ac\uc5bc \uc2dc\ub9ac\uc988\uc758 ",(0,l.kt)("a",{parentName:"p",href:"/tutorials/nfts/js/minting"},"\ubc1c\ud589 \uc139\uc158"),"\uc5d0\uc11c \uc774\ub7ec\ud55c \ud568\uc218\ub4e4\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"royaltyts"},(0,l.kt)("inlineCode",{parentName:"h2"},"royalty.ts")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ub0b4\ubd80 \uc9c0\ubd88 \uad00\ub828 \uae30\ub2a5\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\uba54\uc11c\ub4dc"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"internalNftPayout")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc774 \ub0b4\ubd80 \uba54\uc11c\ub4dc\ub294 \uc8fc\uc5b4\uc9c4 \ud1a0\ud070\uc5d0 \ub300\ud55c \uc9c0\ubd88\uae08\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4. ",(0,l.kt)("strong",{parentName:"td"},"nft_payout"),"\uc5d0\uc11c \ud638\ucd9c\ub429\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"internalNftTransferPayout")),(0,l.kt)("td",{parentName:"tr",align:null},"\ud1a0\ud070\uc744 \uc218\uc2e0\uc790 ID\ub85c \uc804\uc1a1\ud558\uace0 \uc8fc\uc5b4\uc9c4 \uc794\uace0\uc5d0 \ub300\ud574 \uc9c0\ubd88\ud574\uc57c \ud558\ub294 \uc9c0\ubd88 \uac1d\uccb4\ub97c \ubc18\ud658\ud558\ub294 \ub0b4\ubd80 \uba54\uc11c\ub4dc\uc785\ub2c8\ub2e4. ",(0,l.kt)("strong",{parentName:"td"},"nft_transfer_payout"),"\uc5d0\uc11c \ud638\ucd9c\ub429\ub2c8\ub2e4.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/1.skeleton/src/nft-contract/royalty.ts#L7-L45\n")),(0,l.kt)("p",null,"\ud29c\ud1a0\ub9ac\uc5bc \uc2dc\ub9ac\uc988\uc758 ",(0,l.kt)("a",{parentName:"p",href:"/tutorials/nfts/js/royalty"},"\ub85c\uc5f4\ud2f0 \uc139\uc158"),"\uc5d0\uc11c \uc774\ub7ec\ud55c \ud568\uc218\ub4e4\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"indexts"},(0,l.kt)("inlineCode",{parentName:"h2"},"index.ts")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\uc774 \ud30c\uc77c\uc740 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ud074\ub798\uc2a4\uc640 \ud574\ub2f9 \ucee8\ud2b8\ub799\ud2b8\uac00 \uc800\uc7a5\ud558\uace0 \ucd94\uc801\ud558\ub294 \uc815\ubcf4\uc758 \uac1c\uc694\ub97c \uc124\uba85\ud569\ub2c8\ub2e4. \ub610\ud55c \uc0ac\uc6a9\uc790\uac00 \ud638\ucd9c\ud560 \uc218 \uc788\ub294 \ubaa8\ub4e0 \uacf5\uc6a9 \uba54\uc11c\ub4dc\ub97c \uacf5\uac1c\ud569\ub2c8\ub2e4.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\uba54\uc11c\ub4dc"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"init")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc77c\ubd80 \uba54\ud0c0\ub370\uc774\ud130 \ubc0f \uae30\ubcf8 \uc0c1\ud0dc\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \ucd08\uae30\ud654\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \uc0dd\uc131\uc790 \ud568\uc218\uc785\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_mint")),(0,l.kt)("td",{parentName:"tr",align:null},"NFT\ub97c \ubc1c\ud589\ud558\uae30 \uc704\ud574 \ub0b4\ubd80 \ubbfc\ud305 \ud568\uc218\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_token")),(0,l.kt)("td",{parentName:"tr",align:null},"\ud2b9\uc815 NFT\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ucffc\ub9ac\ud558\uae30 \uc704\ud574 \ub0b4\ubd80 \ud568\uc218\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_transfer")),(0,l.kt)("td",{parentName:"tr",align:null},"\ub0b4\ubd80 \ud568\uc218\ub97c \ud638\ucd9c\ud558\uc5ec NFT\ub97c \uc804\uc1a1\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_transfer_call")),(0,l.kt)("td",{parentName:"tr",align:null},"\ub0b4\ubd80 \ud568\uc218\ub97c \ud638\ucd9c\ud558\uc5ec NFT\ub97c \uc804\uc1a1\ud558\uace0 \uc218\uc2e0\uc790\uc758 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"td"},"nft_on_transfer"),"\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_resolve_transfer")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc804\uc1a1 \ud638\ucd9c \uc57d\uc18d\uc744 \ud574\uacb0\ud558\uae30 \uc704\ud574 \ub0b4\ubd80 \ud568\uc218\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_is_approved")),(0,l.kt)("td",{parentName:"tr",align:null},"\ub204\uad70\uac00 NFT\ub97c \uc2b9\uc778\ud588\ub294\uc9c0 \uc5ec\ubd80\ub97c \ud655\uc778\ud558\uae30 \uc704\ud574 \ub0b4\ubd80 \ud568\uc218\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_approve")),(0,l.kt)("td",{parentName:"tr",align:null},"\ub0b4\ubd80 \ud568\uc218\ub97c \ud638\ucd9c\ud558\uc5ec \ub204\uad70\uac00 NFT\ub97c \uc804\uc1a1\ud558\ub3c4\ub85d \uc2b9\uc778\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_payout")),(0,l.kt)("td",{parentName:"tr",align:null},"NFT\uc5d0 \ub300\ud55c \uc9c0\ubd88 \uac1d\uccb4\ub97c \ucffc\ub9ac\ud558\uae30 \uc704\ud574 \ub0b4\ubd80 \ud568\uc218\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_transfer_payout")),(0,l.kt)("td",{parentName:"tr",align:null},"\ub0b4\ubd80 \ud568\uc218\ub97c \ud638\ucd9c\ud558\uc5ec NFT\ub97c \uc804\uc1a1\ud558\uace0 \uc9c0\ubd88 \uac1d\uccb4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_revoke")),(0,l.kt)("td",{parentName:"tr",align:null},"NFT\ub97c \uc804\uc1a1\ud558\uae30 \uc704\ud574 \ub204\uad70\uac00\uc758 \uc561\uc138\uc2a4 \uad8c\ud55c\uc744 \ucde8\uc18c\ud558\ub294 \ub0b4\ubd80 \ud568\uc218\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_revoke_all")),(0,l.kt)("td",{parentName:"tr",align:null},"NFT\ub97c \uc804\uc1a1\ud558\uae30 \uc704\ud574 \ubaa8\ub4e0 \uc0ac\ub78c\uc758 \uc561\uc138\uc2a4 \uad8c\ud55c\uc744 \ucde8\uc18c\ud558\ub294 \ub0b4\ubd80 \ud568\uc218\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_total_supply")),(0,l.kt)("td",{parentName:"tr",align:null},"\ub0b4\ubd80 \ud568\uc218\ub97c \ud638\ucd9c\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c NFT\uc758 \ucd1d \uacf5\uae09\ub7c9\uc744 \ucffc\ub9ac\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_tokens")),(0,l.kt)("td",{parentName:"tr",align:null},"\ucee8\ud2b8\ub799\ud2b8 \ub0b4 NFT\ub97c \ud398\uc774\uc9c0\ub85c \ub9e4\uae30\uae30 \uc704\ud574 \ub0b4\ubd80 \ud568\uc218\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_tokens_for_owner")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc8fc\uc5b4\uc9c4 \uc18c\uc720\uc790\uac00 \uac00\uc9c4 NFT\ub97c \ud398\uc774\uc9c0\ub85c \ub9e4\uae30\ub294 \ub0b4\ubd80 \ud568\uc218\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_supply_for_owner")),(0,l.kt)("td",{parentName:"tr",align:null},"\ub204\uad70\uac00\uac00 \uc18c\uc720\ud55c \ucd1d NFT \uc218\ub97c \ucffc\ub9ac\ud558\uae30 \uc704\ud574 \ub0b4\ubd80 \ud568\uc218\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_metadata")),(0,l.kt)("td",{parentName:"tr",align:null},"\ucee8\ud2b8\ub799\ud2b8\uc758 \uba54\ud0c0\ub370\uc774\ud130\ub97c \ucffc\ub9ac\ud558\uae30 \uc704\ud574 \ub0b4\ubd80 \ud568\uc218\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/1.skeleton/src/nft-contract/index.ts#L16-L157\n")),(0,l.kt)("p",null,"\ud29c\ud1a0\ub9ac\uc5bc \uc2dc\ub9ac\uc988\uc758 ",(0,l.kt)("a",{parentName:"p",href:"/tutorials/nfts/js/minting"},"\ubc1c\ud589 \uc139\uc158"),"\uc5d0\uc11c \uc774\ub7ec\ud55c \uae30\ub2a5\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\ubf08\ub300-\ub9cc\ub4e4\uae30"},"\ubf08\ub300 \ub9cc\ub4e4\uae30"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc544\uc9c1 \uae30\ubcf8 \ub808\ud37c\uc9c0\ud1a0\ub9ac\ub97c \ubcf5\uc81c\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0 \ud130\ubbf8\ub110\uc744 \uc5f4\uace0 \ub2e4\uc74c\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/near-examples/nft-tutorial-js/\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uadf8\ub7f0 \ub2e4\uc74c ",(0,l.kt)("inlineCode",{parentName:"li"},"1.skeleton")," \ube0c\ub79c\uce58\ub85c \uc804\ud658\ud558\uc138\uc694."),(0,l.kt)("li",{parentName:"ul"},"\uc758\uc874\uc131\uc744 \uc124\uce58\ud569\ub2c8\ub2e4(JS SDK \ud3ec\ud568): ",(0,l.kt)("inlineCode",{parentName:"li"},"yarn")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"yarn build"),"\ub97c \ud1b5\ud574 \ucee8\ud2b8\ub799\ud2b8\ub97c \uad6c\ucd95\ud569\ub2c8\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/near-examples/nft-tutorial-js/\ncd nft-tutorial-js\ngit checkout 1.skeleton\nyarn && yarn build\n")),(0,l.kt)("p",null,"\uc774 \uc791\uc5c5\uc774 \uc644\ub8cc\ub418\uba74, ",(0,l.kt)("inlineCode",{parentName:"p"},"nft-tutorial-js/build")," \ub514\ub809\ud1a0\ub9ac\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"nft.wasm")," \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uac00 \ud3ec\ud568\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4!"),(0,l.kt)("p",null,"\ubf08\ub300 \uad6c\ucd95\uc740 \ubaa8\ub4e0 \uac83\uc774 \uc81c\ub300\ub85c \uc791\ub3d9\ud558\ub294\uc9c0 \ud655\uc778\ud558\uace0 \ub2e4\uc74c \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c \uc774 NFT \ucee8\ud2b8\ub799\ud2b8\uc758 \uac1c\uc120 \ubc84\uc804\uc744 \ucef4\ud30c\uc77c\ud560 \uc218 \uc788\ub294\uc9c0 \ud655\uc778\ud558\ub294 \ub370 \uc720\uc6a9\ud569\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\uacb0\ub860"},"\uacb0\ub860"),(0,l.kt)("p",null,"\uc774 NFT \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \ub808\uc774\uc544\uc6c3\uacfc \ub2e4\uc591\ud55c \uc18c\uc2a4 \ud30c\uc77c\uc5d0 \ubaa8\ub4e0 \ud568\uc218\uac00 \uc5b4\ub5bb\uac8c \ubc30\uce58\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\ud588\uc2b5\ub2c8\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn"),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8\ub97c \ucef4\ud30c\uc77c\ud560 \uc218 \uc788\uc5c8\uace0, \ub2e4\uc74c ",(0,l.kt)("a",{parentName:"p",href:"/tutorials/nfts/js/minting"},"\ubc1c\ud589 \ud29c\ud1a0\ub9ac\uc5bc"),"\uc5d0\uc11c \uc774 \ubf08\ub300\ub97c \uad6c\uccb4\ud654\ud558\uae30 \uc2dc\uc791\ud560 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("admonition",{title:"\ubb38\uc11c \ubc84\uc804 \uad00\ub9ac",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\uc774 \uae00\uc744 \uc4f0\ub294 \uc2dc\uc810\uc5d0\uc11c, \uc774 \uc608\uc81c\ub294 \ub2e4\uc74c \ubc84\uc804\uc5d0\uc11c \uc791\ub3d9\ud569\ub2c8\ub2e4."),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"near-sdk-js: ",(0,l.kt)("inlineCode",{parentName:"li"},"0.4.0-5")),(0,l.kt)("li",{parentName:"ul"},"NFT \ud45c\uc900: ",(0,l.kt)("a",{parentName:"li",href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core"},"NEP171"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"1.0.0")," \ubc84\uc804"))))}N.isMDXComponent=!0}}]);