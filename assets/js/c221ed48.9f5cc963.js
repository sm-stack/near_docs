"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7074],{3905:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>u});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),m=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},k=function(t){var e=m(t.components);return a.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),s=m(n),u=r,N=s["".concat(i,".").concat(u)]||s[u]||d[u]||l;return n?a.createElement(N,o(o({ref:e},k),{},{components:n})):a.createElement(N,o({ref:e},k))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=s;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:r,o[1]=p;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},91772:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>k,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>m,toc:()=>d});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],p={id:"skeleton",title:"\ubf08\ub300 \ubc0f Rust \uc544\ud0a4\ud14d\ucc98",sidebar_label:"\ucee8\ud2b8\ub799\ud2b8 \uc544\ud0a4\ud14d\ucc98"},i=void 0,m={unversionedId:"tutorials/nfts/skeleton",id:"tutorials/nfts/skeleton",title:"\ubf08\ub300 \ubc0f Rust \uc544\ud0a4\ud14d\ucc98",description:'\uc774 \uae00\uc5d0\uc11c\ub294 \uc774 "Zero to Hero" \uc2dc\ub9ac\uc988\ub97c \uc9c4\ud589\ud558\uba74\uc11c \uac1c\ubc1c\ud558\uac8c \ub420 NFT \ucee8\ud2b8\ub799\ud2b8\uc758 \uae30\ubcf8 \uc544\ud0a4\ud14d\ucc98\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4.',source:"@site/../docs/3.tutorials/nfts/1-skeleton.md",sourceDirName:"3.tutorials/nfts",slug:"/tutorials/nfts/skeleton",permalink:"/near_docs/tutorials/nfts/skeleton",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/1-skeleton.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"Mar 9, 2023",sidebarPosition:1,frontMatter:{id:"skeleton",title:"\ubf08\ub300 \ubc0f Rust \uc544\ud0a4\ud14d\ucc98",sidebar_label:"\ucee8\ud2b8\ub799\ud2b8 \uc544\ud0a4\ud14d\ucc98"},sidebar:"\ud29c\ud1a0\ub9ac\uc5bc",previous:{title:"\uc0ac\uc804 \ubc30\ud3ec\ub41c \ucee8\ud2b8\ub799\ud2b8",permalink:"/near_docs/tutorials/nfts/predeployed-contract"},next:{title:"\ubc1c\ud589",permalink:"/near_docs/tutorials/nfts/minting"}},k={},d=[{value:"\uc18c\uac1c",id:"\uc18c\uac1c",level:2},{value:"\ud30c\uc77c \uad6c\uc870",id:"\ud30c\uc77c-\uad6c\uc870",level:2},{value:"\uc18c\uc2a4 \ud30c\uc77c",id:"\uc18c\uc2a4-\ud30c\uc77c",level:3},{value:"<code>approval.rs</code>",id:"approvalrs",level:2},{value:"<code>enumeration.rs</code>",id:"enumerationrs",level:2},{value:"<code>lib.rs</code>",id:"librs",level:2},{value:"<code>metadata.rs</code>",id:"metadatars",level:2},{value:"<code>mint.rs</code>",id:"mintrs",level:2},{value:"<code>nft_core.rs</code>",id:"nft_corers",level:2},{value:"<code>royalty.rs</code>",id:"royaltyrs",level:2},{value:"\ubf08\ub300 \ub9cc\ub4e4\uae30",id:"\ubf08\ub300-\ub9cc\ub4e4\uae30",level:2},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2}],s={toc:d};function u(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\uc774 \uae00\uc5d0\uc11c\ub294 \uc774 ",(0,l.kt)("em",{parentName:"p"},'"Zero to Hero"')," \uc2dc\ub9ac\uc988\ub97c \uc9c4\ud589\ud558\uba74\uc11c \uac1c\ubc1c\ud558\uac8c \ub420 NFT \ucee8\ud2b8\ub799\ud2b8\uc758 \uae30\ubcf8 \uc544\ud0a4\ud14d\ucc98\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4.\n\ucee8\ud2b8\ub799\ud2b8\uc758 \ub808\uc774\uc544\uc6c3\uc744 \ubc1c\uacac\ud558\uace0 \uc644\uc804\ud55c \uae30\ub2a5\uc744 \uac16\ucd98 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uad6c\ucd95\ud558\uae30 \uc704\ud574 Rust \ud30c\uc77c\uc774 \uc5b4\ub5bb\uac8c \uad6c\uc131\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("admonition",{title:"Rust\uac00 \ucc98\uc74c\uc774\uc2e0\uac00\uc694?",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Rust\ub97c \ucc98\uc74c \uc0ac\uc6a9\ud558\uace0 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uac1c\ubc1c\uc5d0 \ub6f0\uc5b4\ub4e4\uace0 \uc2f6\ub2e4\uba74 ",(0,l.kt)("a",{parentName:"p",href:"/develop/quickstart-guide"},"\ube60\ub978 \uc2dc\uc791 \uac00\uc774\ub4dc"),"\uac00 \uc2dc\uc791\ud558\uae30\uc5d0 \uc88b\uc740 \uacf3\uc785\ub2c8\ub2e4.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\uc18c\uac1c"},"\uc18c\uac1c"),(0,l.kt)("p",null,"\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc740 NFT \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \ucf54\ub4dc \ubf08\ub300\uc640 \ud30c\uc77c \uad6c\uc870\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \ubaa8\ub4e0 \uae30\ub2a5\uc774 \ubc30\uce58\ub41c \ubc29\ubc95\uacfc \ucc44\uc6cc\uc57c \ud558\ub294 \ub204\ub77d\ub41c Rust \ucf54\ub4dc\ub97c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubaa8\ub4e0 \ud30c\uc77c\uacfc \uae30\ub2a5\uc774 \ub2e4\ub8e8\uc5b4\uc9c0\uba74 \ubaa8\ud615 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud558\ub294 \ud504\ub85c\uc138\uc2a4\ub97c \uac70\uccd0 \ud655\uc778\ud569\ub2c8\ub2e4. \ubaa8\ub4e0 \uac83\uc774 \uc62c\ubc14\ub974\uac8c \uc791\ub3d9\ud569\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\ud30c\uc77c-\uad6c\uc870"},"\ud30c\uc77c \uad6c\uc870"),(0,l.kt)("p",null,"\uc77c\ubc18 ",(0,l.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust")," \ud504\ub85c\uc81d\ud2b8\uc5d0 \ub530\ub77c \uc774 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \ud30c\uc77c \uad6c\uc870\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Cargo.toml")," : \ucf54\ub4dc \uc758\uc874\uc131\uc744 \uc815\uc758\ud558\uae30 \uc704\ud55c \ud30c\uc77c(",(0,l.kt)("inlineCode",{parentName:"li"},"package.json"),"\uacfc \uc720\uc0ac)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"src")," : \ubaa8\ub4e0 Rust \uc18c\uc2a4 \ud30c\uc77c\uc774 \uc800\uc7a5\ub418\ub294 \ud3f4\ub354\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"target")," : \ucef4\ud30c\uc77c\ub41c ",(0,l.kt)("inlineCode",{parentName:"li"},"wasm")," \ud30c\uc77c\uc774 \ucd9c\ub825\ub420 \ud3f4\ub354\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"build.sh")," : \uc18c\uc2a4 \ucf54\ub4dc\ub97c \ucef4\ud30c\uc77c\ud558\ub294 \ub354 \ud3b8\ub9ac\ud55c \ubc29\ubc95\uc744 \uc81c\uacf5\ud558\uae30 \uc704\ud574 \ucd94\uac00\ub41c \uc2a4\ud06c\ub9bd\ud2b8")),(0,l.kt)("h3",{id:"\uc18c\uc2a4-\ud30c\uc77c"},"\uc18c\uc2a4 \ud30c\uc77c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\ud30c\uc77c"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#approvalrs"},"approval.rs")),(0,l.kt)("td",{parentName:"tr",align:null},"\ub300\uccb4 \ubd88\uac00\ub2a5 \ud1a0\ud070\uc758 \uc561\uc138\uc2a4 \ubc0f \uc804\uc1a1\uc744 \uc81c\uc5b4\ud558\ub294 \u200b\u200b\ub0b4\ubd80 \ud568\uc218\ub4e4\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#enumerationrs"},"enumeration.rs")),(0,l.kt)("td",{parentName:"tr",align:null},"NFT \ud1a0\ud070 \ubc0f \ud574\ub2f9 \uc18c\uc720\uc790\ub97c \ucffc\ub9ac\ud558\ub294 \ub0b4\ubd80 \uba54\uc11c\ub4dc\ub97c \ud3ec\ud568\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#librs"},"lib.rs")),(0,l.kt)("td",{parentName:"tr",align:null},"\uacf5\uac1c\ub41c \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ud568\uc218\ub4e4\uc744 \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#metadatars"},"metadata.rs")),(0,l.kt)("td",{parentName:"tr",align:null},"\ud1a0\ud070 \ubc0f \uba54\ud0c0\ub370\uc774\ud130 \uad6c\uc870\ub97c \uc815\uc758\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#mintrs"},"mint.rs")),(0,l.kt)("td",{parentName:"tr",align:null},"\ub0b4\ubd80 \ud1a0\ud070 \ubc1c\ud589 \ub85c\uc9c1\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#nft_corers"},"nft_core.rs")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc0ac\uc6a9\uc790 \uac04\uc5d0 NFT\ub97c \uc804\uc1a1\ud560 \uc218 \uc788\ub294 \ub0b4\ubd80 \ud575\uc2ec \ub85c\uc9c1\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#royaltyrs"},"royalty.rs")),(0,l.kt)("td",{parentName:"tr",align:null},"\ub0b4\ubd80 \uc9c0\ubd88 \uad00\ub828 \ud568\uc218\ub97c \ud3ec\ud568\ud569\ub2c8\ub2e4.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nft-contract\n\u251c\u2500\u2500 Cargo.lock\n\u251c\u2500\u2500 Cargo.toml\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 build.sh\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 approval.rs\n    \u251c\u2500\u2500 enumeration.rs\n    \u251c\u2500\u2500 lib.rs\n    \u251c\u2500\u2500 metadata.rs\n    \u251c\u2500\u2500 mint.rs\n    \u251c\u2500\u2500 nft_core.rs\n    \u2514\u2500\u2500 royalty.rs\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/near-examples/nft-tutorial/tree/1.skeleton"},"GitHub \ub808\ud37c\uc9c0\ud1a0\ub9ac"),"\uc5d0\uc11c \ucf54\ub4dc\ub97c \uc0b4\ud3b4\ubcf4\uc138\uc694.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"approvalrs"},(0,l.kt)("inlineCode",{parentName:"h2"},"approval.rs")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\uc774\ub97c \ud1b5\ud574 \uc0ac\ub78c\ub4e4\uc740 \ub2e4\ub978 \uacc4\uc815\uc744 NFT\ub97c \ub300\uc2e0 \uc804\uc1a1\ud560 \uc218 \uc788\uac8c\ub054 \uc2b9\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("p",null,"\uc774 \ud30c\uc77c\uc5d0\ub294 \ud45c\uc900\uc758 ",(0,l.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/NonFungibleToken/ApprovalManagement.html"},"\uc2b9\uc778 \uad00\ub9ac")," \ud655\uc7a5\uc744 \uc900\uc218\ud558\ub294 \ub0b4\ubd80 \ub85c\uc9c1\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\uc74c\uc740 \uba54\uc11c\ub4dc \ubc0f \uae30\ub2a5\uc5d0 \ub300\ud55c \ubd84\uc11d\uc785\ub2c8\ub2e4."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\uba54\uc11c\ub4dc"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_approve")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc0ac\uc6a9\uc790\ub97c \ub300\uc2e0\ud558\uc5ec \ud1a0\ud070\uc744 \uc804\uc1a1\ud560 \uacc4\uc815 ID\ub97c \uc2b9\uc778\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_is_approved")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc785\ub825 \uacc4\uc815\uc5d0 \ud1a0\ud070 ID\ub97c \uc2b9\uc778\ud560 \uc218 \uc788\ub294 \uc561\uc138\uc2a4 \uad8c\ud55c\uc774 \uc788\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_revoke")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc0ac\uc6a9\uc790\ub97c \ub300\uc2e0\ud558\uc5ec \ud1a0\ud070\uc744 \uc804\uc1a1\ud558\ub294 \ud2b9\uc815 \uacc4\uc815\uc744 \ucde8\uc18c\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_revoke_all")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc0ac\uc6a9\uc790\ub97c \ub300\uc2e0\ud558\uc5ec \ud1a0\ud070\uc744 \uc804\uc1a1\ud558\ub294 \ubaa8\ub4e0 \uacc4\uc815\uc744 \ucde8\uc18c\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_on_approve")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc774 \ucf5c\ubc31 \ud568\uc218\ub294 ",(0,l.kt)("inlineCode",{parentName:"td"},"nft_approve"),"\uc5d0 \uc758\ud574 \uc2dc\uc791\ub418\uc5b4, \uc678\ubd80 \ucee8\ud2b8\ub799\ud2b8\ub85c\uc758 \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial/tree/1.skeleton/nft-contract/src/approval.rs#L4-L33\n")),(0,l.kt)("p",null,"Zero to Hero \uc2dc\ub9ac\uc988\uc758 ",(0,l.kt)("a",{parentName:"p",href:"/tutorials/nfts/approvals"},"\uc2b9\uc778 \uc139\uc158"),"\uc5d0\uc11c \uc774\ub7ec\ud55c \ud568\uc218\ub4e4\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"enumerationrs"},(0,l.kt)("inlineCode",{parentName:"h2"},"enumeration.rs")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\uc774 \ud30c\uc77c\uc740 NFT\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ubcf4\ub294 \ub370 \ud544\uc694\ud55c \ub0b4\ubd80 \ud568\uc218\ub4e4\uc744 \uc81c\uacf5\ud558\uba70 \ud45c\uc900\uc758 ",(0,l.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration"},"\uc5f4\uac70")," \ud655\uc7a5\uc790\ub97c \ub530\ub985\ub2c8\ub2e4.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\uba54\uc11c\ub4dc"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_total_supply")),(0,l.kt)("td",{parentName:"tr",align:null},"\ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc800\uc7a5\ub41c NFT\uc758 \ucd1d\ub7c9\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_tokens")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc18c\uc720\uc790\uc640 \uad00\uacc4\uc5c6\uc774 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc800\uc7a5\ub41c \ud398\uc774\uc9c0\uac00 \ub9e4\uaca8\uc9c4 NFT \ubaa9\ub85d\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_supply_for_owner")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc8fc\uc5b4\uc9c4 \uc0ac\uc6a9\uc790\uac00 \uc18c\uc720\ud55c \ucd1d NFT \uc218\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_tokens_for_owner")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc9c0\uc815\ub41c \uc0ac\uc6a9\uc790\uac00 \uc18c\uc720\ud55c NFT \ubaa9\ub85d\uc744 \ud398\uc774\uc9c0 \ud615\ud0dc\ub85c \ubc18\ud658\ud569\ub2c8\ub2e4.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial/blob/1.skeleton/nft-contract/src/enumeration.rs#L4-L44\n")),(0,l.kt)("p",null,"\ud29c\ud1a0\ub9ac\uc5bc \uc2dc\ub9ac\uc988\uc758 ",(0,l.kt)("a",{parentName:"p",href:"/tutorials/nfts/enumeration"},"\uc5f4\uac70 \uc139\uc158"),"\uc5d0\uc11c \uc774\ub7ec\ud55c \ud568\uc218\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"librs"},(0,l.kt)("inlineCode",{parentName:"h2"},"lib.rs")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\uc774 \ud30c\uc77c\uc740 \ucee8\ud2b8\ub799\ud2b8\uac00 \uc800\uc7a5\ud558\uace0 \ucd94\uc801\ud558\ub294 \uc815\ubcf4\ub97c \uac04\ub7b5\ud558\uac8c \uc124\uba85\ud569\ub2c8\ub2e4.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\uba54\uc11c\ub4dc"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"new_default_meta")),(0,l.kt)("td",{parentName:"tr",align:null},"\uae30\ubcf8 ",(0,l.kt)("inlineCode",{parentName:"td"},"metadata"),"\ub97c \uc774\uc6a9\ud574 \ucee8\ud2b8\ub799\ud2b8\ub97c \ucd08\uae30\ud654\ud574, \uc0ac\uc6a9\uc790\uac00 \uc785\ub825\uac12\uc744 \uc81c\uacf5\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub418\ub3c4\ub85d \ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"new")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc0ac\uc6a9\uc790\uac00 \uc81c\uacf5\ud55c ",(0,l.kt)("inlineCode",{parentName:"td"},"metadata"),"\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \ucd08\uae30\ud654\ud569\ub2c8\ub2e4.")))),(0,l.kt)("admonition",{title:"\uae30\uc5b5\ud574 \ub450\uc138\uc694",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\ucd08\uae30\ud654 \ud568\uc218 (",(0,l.kt)("inlineCode",{parentName:"p"},"new"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"new_default_meta"),")\uc740 \ud55c \ubc88\ub9cc \ud638\ucd9c\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial/tree/1.skeleton/nft-contract/src/lib.rs#L45-L71\n")),(0,l.kt)("p",null,"\ud29c\ud1a0\ub9ac\uc5bc \uc2dc\ub9ac\uc988\uc758 ",(0,l.kt)("a",{parentName:"p",href:"/tutorials/nfts/minting"},"\ubc1c\ud589 \uc139\uc158"),"\uc5d0\uc11c \uc774\ub7ec\ud55c \uae30\ub2a5\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"metadatars"},(0,l.kt)("inlineCode",{parentName:"h2"},"metadata.rs")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\uc774 \ud30c\uc77c\uc740 \ud1a0\ud070 \ubc0f \uba54\ud0c0\ub370\uc774\ud130\uc5d0 \ub300\ud574 \uc800\uc7a5\ud560 \uc815\ubcf4\ub97c \ucd94\uc801\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4.\n\ub610\ud55c \ud45c\uc900 \uba54\ud0c0\ub370\uc774\ud130 \ud655\uc7a5\uc758 \uc77c\ubd80\uc778 \ucee8\ud2b8\ub799\ud2b8\uc758 ",(0,l.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Metadata"},"\uba54\ud0c0\ub370\uc774\ud130"),"\ub97c \ubcf4\ub294 \uae30\ub2a5\uc744 \uc815\uc758\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\uc774\ub984"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"TokenMetadata")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc774 \uad6c\uc870\ub294 \uac01 \ud1a0\ud070\uc5d0 \ub300\ud574 \uc800\uc7a5\ud560 \uc218 \uc788\ub294 \uba54\ud0c0\ub370\uc774\ud130\ub97c \uc815\uc758\ud569\ub2c8\ub2e4(\uc81c\ubaa9, \uc124\uba85, \ubbf8\ub514\uc5b4 \ub4f1).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Token")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc774 \uad6c\uc870\ub294 \uac01 \ud1a0\ud070\uc5d0 \ub300\ud55c \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc5b4\ub5a4 \uc815\ubcf4\uac00 \uc800\uc7a5\ub420 \uac83\uc778\uc9c0\ub97c \uc124\uba85\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"JsonToken")),(0,l.kt)("td",{parentName:"tr",align:null},"View \ud638\ucd9c\uc744 \ud1b5\ud574 NFT\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \uc870\ud68c\ud560 \ub54c, \ubc18\ud658\ub41c \uc815\ubcf4\ub294 \uc774 JSON \ud1a0\ud070\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_metadata")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc774 \ud568\uc218\ub97c \ud1b5\ud574 \uc0ac\uc6a9\uc790\ub294 \ucee8\ud2b8\ub799\ud2b8\uc758 \ub0b4\ubd80 \uba54\ud0c0\ub370\uc774\ud130\ub97c \ucffc\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial/blob/1.skeleton/nft-contract/src/metadata.rs#L10-L55\n")),(0,l.kt)("p",null,"\ud29c\ud1a0\ub9ac\uc5bc \uc2dc\ub9ac\uc988 \ub0b4 ",(0,l.kt)("a",{parentName:"p",href:"/tutorials/nfts/minting"},"\ubc1c\ud589 \uc139\uc158"),"\uc5d0\uc11c \uc774\ub7ec\ud55c \ud568\uc218\uc5d0 \ub300\ud574 \ub354 \ub9ce\uc774 \ubc30\uc6b8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"mintrs"},(0,l.kt)("inlineCode",{parentName:"h2"},"mint.rs")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ub0b4\ubd80 \ud1a0\ud070 \ubc1c\ud589 \ub85c\uc9c1\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\uba54\uc11c\ub4dc"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_mint")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc774 \ud568\uc218\ub294 \ub300\uccb4 \ubd88\uac00\ub2a5 \ud1a0\ud070\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial/tree/1.skeleton/nft-contract/src/mint.rs#L4-L16\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"nft_corers"},(0,l.kt)("inlineCode",{parentName:"h2"},"nft_core.rs")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\uc0ac\uc6a9\uc790 \uac04\uc5d0 NFT\ub97c \uc804\uc1a1\ud560 \uc218 \uc788\ub294 \ud575\uc2ec \ub85c\uc9c1\uc785\ub2c8\ub2e4.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\uba54\uc11c\ub4dc"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_transfer")),(0,l.kt)("td",{parentName:"tr",align:null},"NFT\ub97c \uc218\uc2e0\uc790 ID\ub85c \uc804\uc1a1\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_transfer_call")),(0,l.kt)("td",{parentName:"tr",align:null},"NFT\ub97c \uc218\uc2e0\uc790\uc5d0\uac8c \uc804\uc1a1\ud558\uace0 \uc218\uc2e0\uc790 ID \ucee8\ud2b8\ub799\ud2b8\uc758 \ud568\uc218\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4. \ubcf4\ub0b8 \uc0ac\ub78c\uc758 \uacc4\uc815\uc5d0\uc11c \ud1a0\ud070\uc774 \uc804\uc1a1\ub41c \uacbd\uc6b0 \ud568\uc218\ub294 ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),"\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. account.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_token")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc0ac\uc6a9\uc790\uac00 \ud2b9\uc815 NFT\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ucffc\ub9ac\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_on_transfer")),(0,l.kt)("td",{parentName:"tr",align:null},"NFT\uac00 ",(0,l.kt)("inlineCode",{parentName:"td"},"nft_transfer_call")," \uba54\uc11c\ub4dc\ub97c \ud1b5\ud574 \ucee8\ud2b8\ub799\ud2b8 \uacc4\uc815\uc73c\ub85c \uc804\uc1a1\ub420 \ub54c \ub2e4\ub978 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc758\ud574 \ud638\ucd9c\ub429\ub2c8\ub2e4. \ud1a0\ud070\uc774 \ubcf4\ub0b8 \uc0ac\ub78c\uc5d0\uac8c \ub2e4\uc2dc \ubc18\ud658\ub418\uc5b4\uc57c \ud558\uba74 ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),"\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_resolve_transfer")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"nft_transfer_call"),"\uc744 \uc2dc\uc791\ud558\uace0 NFT\ub97c \uc804\uc1a1\ud560 \ub54c \ud45c\uc900\uc5d0 \ub530\ub974\uba74 \uc218\uc2e0\uc790\uc758 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc788\ub294 \uba54\uc11c\ub4dc\ub3c4 \ud638\ucd9c\ud574\uc57c \ud569\ub2c8\ub2e4. \uc218\uc2e0\uc790\uac00 \ubc1c\uc2e0\uc790\uc5d0\uac8c NFT\ub97c \ubc18\ud658\ud574\uc57c \ud558\ub294 \uacbd\uc6b0(",(0,l.kt)("inlineCode",{parentName:"td"},"nft_on_transfer")," \uba54\uc11c\ub4dc\uc758 \ubc18\ud658 \uac12\uc5d0 \ub530\ub77c) \uc774 \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uba74 \ud574\ub2f9 \ub85c\uc9c1\uc744 \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial/blob/1.skeleton/nft-contract/src/nft_core.rs#L7-L56\n")),(0,l.kt)("p",null,"\ud29c\ud1a0\ub9ac\uc5bc \uc2dc\ub9ac\uc988\uc758 ",(0,l.kt)("a",{parentName:"p",href:"/tutorials/nfts/minting"},"\ubc1c\ud589 \uc139\uc158"),"\uc5d0\uc11c \uc774\ub7ec\ud55c \ud568\uc218\ub4e4\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"royaltyrs"},(0,l.kt)("inlineCode",{parentName:"h2"},"royalty.rs")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ub0b4\ubd80 \uc9c0\ubd88 \uad00\ub828 \uae30\ub2a5\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\uba54\uc11c\ub4dc"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_payout")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc774 view \uba54\uc11c\ub4dc\ub294 \uc8fc\uc5b4\uc9c4 \ud1a0\ud070\uc5d0 \ub300\ud55c \uc9c0\ubd88\uae08\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_transfer_payout")),(0,l.kt)("td",{parentName:"tr",align:null},"\ud1a0\ud070\uc744 \uc218\uc2e0\uc790 ID\ub85c \uc804\uc1a1\ud558\uace0 \uc8fc\uc5b4\uc9c4 \uc794\uace0\uc5d0 \ub300\ud574 \uc9c0\ubd88\ud574\uc57c \ud558\ub294 \uc9c0\ubd88 \uac1d\uccb4\ub97c \ubc18\ud658\ud558\ub294 \ub0b4\ubd80 \uba54\uc11c\ub4dc\uc785\ub2c8\ub2e4.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial/tree/1.skeleton/nft-contract/src/royalty.rs#L3-L17\n")),(0,l.kt)("p",null,"\ud29c\ud1a0\ub9ac\uc5bc \uc2dc\ub9ac\uc988\uc758 ",(0,l.kt)("a",{parentName:"p",href:"/tutorials/nfts/royalty"},"\ub85c\uc5f4\ud2f0 \uc139\uc158"),"\uc5d0\uc11c \uc774\ub7ec\ud55c \ud568\uc218\ub4e4\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\ubf08\ub300-\ub9cc\ub4e4\uae30"},"\ubf08\ub300 \ub9cc\ub4e4\uae30"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc544\uc9c1 \uae30\ubcf8 \ub808\ud37c\uc9c0\ud1a0\ub9ac\ub97c \ubcf5\uc81c\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0 \ud130\ubbf8\ub110\uc744 \uc5f4\uace0 \ub2e4\uc74c\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/near-examples/nft-tutorial/\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub2e4\uc74c\uc73c\ub85c ",(0,l.kt)("inlineCode",{parentName:"li"},"1.skeleton")," \ube0c\ub79c\uce58\ub85c \uc804\ud658\ud558\uace0, ",(0,l.kt)("inlineCode",{parentName:"li"},"yarn"),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8\ub97c \ube4c\ub4dc\ud569\ub2c8\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cd nft-tutorial\ngit switch 1.skeleton\nyarn build\n")),(0,l.kt)("p",null,"\uc774 \uc18c\uc2a4\ub294 \ubf08\ub300\uc77c \ubfd0\uc774\ubbc0\ub85c \ub2e4\uc74c\uacfc \uac19\uc774 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \ucf54\ub4dc\uc5d0 \ub300\ud55c \ub9ce\uc740 \uacbd\uace0\ub97c \ubc1b\uac8c \ub429\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"   Compiling nft_simple v0.1.0 (/Users/dparrino/near/nft-tutorial/nft-contract)\nwarning: unused imports: `LazyOption`, `LookupMap`, `UnorderedMap`, `UnorderedSet`\n --\x3e src/lib.rs:3:29\n  |\n3 | use near_sdk::collections::{LazyOption, LookupMap, UnorderedMap, UnorderedSet};\n  |                             ^^^^^^^^^^  ^^^^^^^^^  ^^^^^^^^^^^^  ^^^^^^^^^^^^\n  |\n  = note: `#[warn(unused_imports)]` on by default\n...\n...\n...\nwarning: constant is never used: `NO_DEPOSIT`\n --\x3e src/nft_core.rs:6:1\n  |\n6 | const NO_DEPOSIT: Balance = 0;\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n\nwarning: `nft_simple` (lib) generated 50 warnings\n    Finished release [optimized] target(s) in 22.58s\n\u2728  Done in 22.74s.\n")),(0,l.kt)("p",null,"\uc774\ub7ec\ud55c \uacbd\uace0\uc5d0 \ub300\ud574 \uac71\uc815\ud558\uc9c0 \ub9c8\uc138\uc694. \uc544\uc9c1 \uc774 \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\uc9c0 \uc54a\uc744 \uac83\uc785\ub2c8\ub2e4. \ubf08\ub300 \uad6c\ucd95\ud558\ub294 \uac83\uc740 Rust \ud234\uccb4\uc778\uc774 \uc81c\ub300\ub85c \uc791\ub3d9\ud558\ub294\uc9c0 \ud655\uc778\ud558\ub294 \uac83\uc774\uace0, \uc774\ub294 \ub2e4\uc74c \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c \uc774 NFT \ucee8\ud2b8\ub799\ud2b8\uc758 \uac1c\uc120\ub41c \ubc84\uc804\uc744 \ucef4\ud30c\uc77c\ud560 \uc218 \uc788\ub294\uc9c0 \ud655\uc778\ud558\ub294 \ub370 \uc720\uc6a9\ud569\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\uacb0\ub860"},"\uacb0\ub860"),(0,l.kt)("p",null,"\uc774 NFT \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \ub808\uc774\uc544\uc6c3\uacfc \ub2e4\uc591\ud55c \uc18c\uc2a4 \ud30c\uc77c\uc5d0 \ubaa8\ub4e0 \ud568\uc218\uac00 \uc5b4\ub5bb\uac8c \ubc30\uce58\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\ud588\uc2b5\ub2c8\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn"),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8\ub97c \ucef4\ud30c\uc77c\ud560 \uc218 \uc788\uc5c8\uace0, \ub2e4\uc74c ",(0,l.kt)("a",{parentName:"p",href:"/tutorials/nfts/minting"},"\ubc1c\ud589 \ud29c\ud1a0\ub9ac\uc5bc"),"\uc5d0\uc11c \uc774 \ubf08\ub300\ub97c \uad6c\uccb4\ud654\ud558\uae30 \uc2dc\uc791\ud560 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("admonition",{title:"\uc774 \ubb38\uc11c\uc758 \ubc84\uc804 \uad00\ub9ac",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\uc774 \uae00\uc744 \uc4f0\ub294 \uc2dc\uc810\uc5d0\uc11c \uc774 \uc608\uc81c\ub294 \ub2e4\uc74c \ubc84\uc804\uc5d0\uc11c \uc791\ub3d9\ud569\ub2c8\ub2e4."),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"rustc: ",(0,l.kt)("inlineCode",{parentName:"li"},"1.6.0")),(0,l.kt)("li",{parentName:"ul"},"near-sdk-rs: ",(0,l.kt)("inlineCode",{parentName:"li"},"4.0.0")),(0,l.kt)("li",{parentName:"ul"},"NFT \ud45c\uc900: ",(0,l.kt)("a",{parentName:"li",href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core"},"NEP171"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"1.0.0")," \ubc84\uc804"))))}u.isMDXComponent=!0}}]);