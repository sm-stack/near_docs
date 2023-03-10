"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6084],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),k=s(a),u=r,N=k["".concat(p,".").concat(u)]||k[u]||m[u]||l;return a?n.createElement(N,o(o({ref:e},d),{},{components:a})):n.createElement(N,o({ref:e},d))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},14075:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],i={id:"skeleton",title:"\ubf08\ub300 \ubc0f Rust \uc544\ud0a4\ud14d\ucc98",sidebar_label:"\ucee8\ud2b8\ub799\ud2b8 \uc544\ud0a4\ud14d\ucc98"},p=void 0,s={unversionedId:"tutorials/fts/skeleton",id:"tutorials/fts/skeleton",title:"\ubf08\ub300 \ubc0f Rust \uc544\ud0a4\ud14d\ucc98",description:'\uc774 \uae00\uc5d0\uc11c\ub294 \uc774 "Zero to Hero" \uc2dc\ub9ac\uc988\ub97c \uc9c4\ud589\ud558\uba74\uc11c \uac1c\ubc1c\ud558\uac8c \ub420 NFT \ucee8\ud2b8\ub799\ud2b8\uc758 \uae30\ubcf8 \uc544\ud0a4\ud14d\ucc98\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4.',source:"@site/../docs/3.tutorials/fts/1-skeleton.md",sourceDirName:"3.tutorials/fts",slug:"/tutorials/fts/skeleton",permalink:"/near_docs/tutorials/fts/skeleton",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/fts/1-skeleton.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"Mar 9, 2023",sidebarPosition:1,frontMatter:{id:"skeleton",title:"\ubf08\ub300 \ubc0f Rust \uc544\ud0a4\ud14d\ucc98",sidebar_label:"\ucee8\ud2b8\ub799\ud2b8 \uc544\ud0a4\ud14d\ucc98"},sidebar:"\ud29c\ud1a0\ub9ac\uc5bc",previous:{title:"\uc0ac\uc804 \ubc30\ud3ec\ub41c \ucee8\ud2b8\ub799\ud2b8",permalink:"/near_docs/tutorials/fts/predeployed-contract"},next:{title:"\ud1a0\ud070 \uc815\uc758",permalink:"/near_docs/tutorials/fts/defining-a-token"}},d={},m=[{value:"\uc18c\uac1c",id:"\uc18c\uac1c",level:2},{value:"\ud30c\uc77c \uad6c\uc870",id:"\ud30c\uc77c-\uad6c\uc870",level:2},{value:"\uc18c\uc2a4 \ud30c\uc77c",id:"\uc18c\uc2a4-\ud30c\uc77c",level:3},{value:"<code>ft_core.rs</code>",id:"ft_corers",level:2},{value:"<code>lib.rs</code>",id:"librs",level:2},{value:"<code>metadata.rs</code>",id:"metadatars",level:2},{value:"<code>storage.rs</code>",id:"storagers",level:2},{value:"\ubf08\ub300 \ub9cc\ub4e4\uae30",id:"\ubf08\ub300-\ub9cc\ub4e4\uae30",level:2},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2}],k={toc:m};function u(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\uc774 \uae00\uc5d0\uc11c\ub294 \uc774 ",(0,l.kt)("em",{parentName:"p"},'"Zero to Hero"')," \uc2dc\ub9ac\uc988\ub97c \uc9c4\ud589\ud558\uba74\uc11c \uac1c\ubc1c\ud558\uac8c \ub420 NFT \ucee8\ud2b8\ub799\ud2b8\uc758 \uae30\ubcf8 \uc544\ud0a4\ud14d\ucc98\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4.\n\ucee8\ud2b8\ub799\ud2b8\uc758 \ub808\uc774\uc544\uc6c3\uc744 \ubc1c\uacac\ud558\uace0 \uc644\uc804\ud55c \uae30\ub2a5\uc744 \uac16\ucd98 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uad6c\ucd95\ud558\uae30 \uc704\ud574 Rust \ud30c\uc77c\uc774 \uc5b4\ub5bb\uac8c \uad6c\uc131\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("admonition",{title:"Rust\uac00 \ucc98\uc74c\uc774\uc2e0\uac00\uc694?",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Rust\ub97c \ucc98\uc74c \uc0ac\uc6a9\ud558\uace0 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uac1c\ubc1c\uc5d0 \ub6f0\uc5b4\ub4e4\uace0 \uc2f6\ub2e4\uba74 ",(0,l.kt)("a",{parentName:"p",href:"/develop/quickstart-guide"},"\ube60\ub978 \uc2dc\uc791 \uac00\uc774\ub4dc"),"\uac00 \uc2dc\uc791\ud558\uae30\uc5d0 \uc88b\uc740 \uacf3\uc785\ub2c8\ub2e4.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\uc18c\uac1c"},"\uc18c\uac1c"),(0,l.kt)("p",null,"\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc740 FT \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \ucf54\ub4dc \ubf08\ub300\uc640 \ud30c\uc77c \uad6c\uc870\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \ubaa8\ub4e0 \uae30\ub2a5\uc774 \ubc30\uce58\ub41c \ubc29\ubc95\uacfc \ucc44\uc6cc\uc57c \ud558\ub294 \ub204\ub77d\ub41c Rust \ucf54\ub4dc\ub97c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubaa8\ub4e0 \ud30c\uc77c\uacfc \uae30\ub2a5\uc774 \ub2e4\ub8e8\uc5b4\uc9c0\uba74 \ubaa8\ud615 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud558\ub294 \ud504\ub85c\uc138\uc2a4\ub97c \uac70\uccd0 \ud655\uc778\ud569\ub2c8\ub2e4. \ubaa8\ub4e0 \uac83\uc774 \uc62c\ubc14\ub974\uac8c \uc791\ub3d9\ud569\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\ud30c\uc77c-\uad6c\uc870"},"\ud30c\uc77c \uad6c\uc870"),(0,l.kt)("p",null,"\ub808\ud37c\uc9c0\ud1a0\ub9ac\uc5d0\ub294 \ub2e4\uc591\ud55c \ud3f4\ub354\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uac01 \ud3f4\ub354\ub294 \ubf08\ub300 \ud3f4\ub354\uc5d0\uc11c \uc2dc\uc791\ud558\uc5ec \uc644\uc131\ub41c \ucee8\ud2b8\ub799\ud2b8 \ud3f4\ub354\ub85c \ub05d\ub098\ub294 \uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc758 \ub2e4\ub978 \uc774\uc815\ud45c\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4. \uc774 \ud3f4\ub354\ub4e4 \uc911 \ud558\ub098\uc5d0 \ub4e4\uc5b4\uac00\uba74, \uac01\uac01 \uc77c\ubc18 ",(0,l.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust")," \ud504\ub85c\uc81d\ud2b8\ub97c \ub530\ub974\uace0 \uc788\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \ud30c\uc77c \uad6c\uc870\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Cargo.toml"),": \ucf54\ub4dc \uc758\uc874\uc131\uc744 \uc815\uc758\ud558\uae30 \uc704\ud55c \ud30c\uc77c(Javascript\ub098 node \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c\uc758 ",(0,l.kt)("inlineCode",{parentName:"li"},"package.json"),"\uacfc \uc720\uc0ac)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"src"),": \ubaa8\ub4e0 Rust \uc18c\uc2a4 \ud30c\uc77c\uc774 \uc800\uc7a5\ub418\ub294 \ud3f4\ub354\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"target"),": \ucef4\ud30c\uc77c\ub41c ",(0,l.kt)("inlineCode",{parentName:"li"},"wasm")," \ud30c\uc77c\uc774 \ucd9c\ub825\ub420 \ud3f4\ub354\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"build.sh"),": \uc18c\uc2a4 \ucf54\ub4dc\ub97c \ucef4\ud30c\uc77c\ud558\ub294 \ub354 \ud3b8\ub9ac\ud55c \ubc29\ubc95\uc744 \uc81c\uacf5\ud558\uae30 \uc704\ud574 \ucd94\uac00\ub41c \uc2a4\ud06c\ub9bd\ud2b8")),(0,l.kt)("h3",{id:"\uc18c\uc2a4-\ud30c\uc77c"},"\uc18c\uc2a4 \ud30c\uc77c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\ud30c\uc77c"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#corers"},"ft_core.rs")),(0,l.kt)("td",{parentName:"tr",align:null},"\ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070\uc758 \uc561\uc138\uc2a4 \ubc0f \uc804\uc1a1\uc744 \uc81c\uc5b4\ud558\ub294 \ub85c\uc9c1\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4.  \uc774 \ud30c\uc77c\uc740 ",(0,l.kt)("a",{parentName:"td",href:"https://nomicon.io/Standards/Tokens/FungibleToken/Core"},"\ud575\uc2ec")," \ud45c\uc900\uc758 \uad6c\ud604\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#librs"},"lib.rs")),(0,l.kt)("td",{parentName:"tr",align:null},"\uacf5\uac1c\ub41c \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ud568\uc218\ub4e4\uc744 \uac00\uc9c0\uace0 \uc788\uace0, \uc5b4\ub5a4 \uc815\ubcf4\uac00 \uc628\uccb4\uc778\uc5d0 \uc800\uc7a5\ub420\uc9c0 \uc9c0\uc2dc\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#metadatars"},"metadata.rs")),(0,l.kt)("td",{parentName:"tr",align:null},"\ud1a0\ud070 \ubc0f \uba54\ud0c0\ub370\uc774\ud130 \uad6c\uc870\ub97c \uc815\uc758\ud569\ub2c8\ub2e4. \uc774 \ud30c\uc77c\uc740 \ud45c\uc900\uc758 ",(0,l.kt)("a",{parentName:"td",href:"https://nomicon.io/Standards/Tokens/FungibleToken/Metadata"},"\uba54\ud0c0\ub370\uc774\ud130")," \ud655\uc7a5 \uad6c\ud604\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#storagers"},"storage.rs")),(0,l.kt)("td",{parentName:"tr",align:null},"\ub4f1\ub85d \ubc0f \uc800\uc7a5\uc744 \uc704\ud55c \ub85c\uc9c1\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4. \uc774 \ud30c\uc77c\uc740 ",(0,l.kt)("a",{parentName:"td",href:"https://nomicon.io/Standards/StorageManagement"},"\uc2a4\ud1a0\ub9ac\uc9c0 \uad00\ub9ac")," \ud45c\uc900\uc758 \uad6c\ud604\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"skeleton\n\u251c\u2500\u2500 Cargo.lock\n\u251c\u2500\u2500 Cargo.toml\n\u251c\u2500\u2500 build.sh\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 ft_core.rs\n    \u251c\u2500\u2500 lib.rs\n    \u251c\u2500\u2500 metadata.rs\n    \u2514\u2500\u2500 storage.rs\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/near-examples/ft-tutorial/tree/main/1.skeleton"},"GitHub \ub808\ud37c\uc9c0\ud1a0\ub9ac"),"\uc5d0\uc11c \ucf54\ub4dc\ub97c \uc0b4\ud3b4\ubcf4\uc138\uc694.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"ft_corers"},(0,l.kt)("inlineCode",{parentName:"h2"},"ft_core.rs")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\uc0ac\uc6a9\uc790 \uac04\uc5d0 FT\ub97c \uc804\uc1a1\ud558\uace0 \uc911\uc694\ud55c \uc815\ubcf4\ub97c \ucffc\ub9ac\ud560 \uc218 \uc788\ub294 \ud575\uc2ec \ub85c\uc9c1\uc785\ub2c8\ub2e4.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\uba54\uc11c\ub4dc"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"ft_transfer")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc9c0\uc815\ub41c \uc591\uc758 FT\ub97c \uc218\uc2e0\uc790 ID\ub85c \uc804\uc1a1\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"ft_transfer_call")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc9c0\uc815\ub41c \uc591\uc758 FT\ub97c \uc218\uc2e0\uc790\uc5d0\uac8c \uc804\uc1a1\ud558\uace0, \uc218\uc2e0\uc790\uc758 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc744 \uc218\ud589\ud558\uc5ec ",(0,l.kt)("inlineCode",{parentName:"td"},"ft_on_transfer")," \uba54\uc11c\ub4dc\ub97c \uc2e4\ud589\ud558\ub824\uace0 \uc2dc\ub3c4\ud569\ub2c8\ub2e4. \uc774 ",(0,l.kt)("inlineCode",{parentName:"td"},"ft_on_transfer")," \uba54\uc11c\ub4dc\uc758 \uad6c\ud604\uc740 \ucee8\ud2b8\ub799\ud2b8 \uc791\uc131\uc790\uc5d0\uac8c \ub2ec\ub824 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc758 \ub9c8\ucf13\ud50c\ub808\uc774\uc2a4 \uc139\uc158\uc5d0\uc11c \uc608\uc81c \uad6c\ud604\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"td"},"ft_on_transfer")," \uc2e4\ud589\uc774 \uc644\ub8cc\ub418\uba74 \uc131\uacf5 \uc5ec\ubd80\ub97c \ud655\uc778\ud558\uae30 \uc704\ud574 ",(0,l.kt)("inlineCode",{parentName:"td"},"ft_resolve_transfer"),"\uac00 \ud638\ucd9c\ub429\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"ft_total_supply")),(0,l.kt)("td",{parentName:"tr",align:null},"\ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uc720\ud1b5\ub418\ub294 \ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070\uc758 \ucd1d\ub7c9\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"ft_balance_of")),(0,l.kt)("td",{parentName:"tr",align:null},"\ud2b9\uc815 \uc0ac\uc6a9\uc790\uac00 \uc18c\uc720\ud55c \ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070 \uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"ft_on_transfer")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc218\uc2e0\uc790\uc758 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ub530\ub77c \uc9c4\ud589\ub418\ub294 \uba54\uc11c\ub4dc\uc785\ub2c8\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"td"},"ft_transfer_call")," \uba54\uc11c\ub4dc\ub97c \ud1b5\ud574 FT\uac00 \uc218\uc2e0\uc790\uc758 \ucee8\ud2b8\ub799\ud2b8 \uacc4\uc815\uc73c\ub85c \uc804\uc1a1\ub420 \ub54c \ud638\ucd9c\ub429\ub2c8\ub2e4. \uc774\ub294 \ubcf4\ub0b8 \uc0ac\ub78c\uc5d0\uac8c \ub2e4\uc2dc \ud658\ubd88\ud574\uc57c \ud558\ub294 FT \uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"ft_resolve_transfer")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ft_on_transfer")," \uc2e4\ud589\uc774 \uc644\ub8cc\ub41c \ud6c4 \ud638\ucd9c\ub429\ub2c8\ub2e4. \uc774 \ud568\uc218\ub294 \uc218\uc2e0\uc790 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc740 FT\ub97c \ud658\ubd88\ud558\uace0 \ud658\ubd88 \ud6c4 \uc218\uc2e0\uc790\uc5d0\uac8c \uc804\uc1a1\ub41c \uc21c FT \uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4(\uc788\ub294 \uacbd\uc6b0).")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/ft-tutorial/blob/main/1.skeleton/src/ft_core.rs#L61-L166\n")),(0,l.kt)("p",null,"\ud29c\ud1a0\ub9ac\uc5bc \uc2dc\ub9ac\uc988\uc758 ",(0,l.kt)("a",{parentName:"p",href:"/tutorials/fts/circulating-supply"},"\uc21c\ud658 \uacf5\uae09")," \ubc0f ",(0,l.kt)("a",{parentName:"p",href:"/tutorials/fts/transfers"},"\uc804\uc1a1")," \uc139\uc158\uc5d0\uc11c \uc774\ub7ec\ud55c \ud568\uc218\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubd05\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"librs"},(0,l.kt)("inlineCode",{parentName:"h2"},"lib.rs")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\uc774 \ud30c\uc77c\uc740 \ucee8\ud2b8\ub799\ud2b8\uac00 \uc800\uc7a5\ud558\uace0 \ucd94\uc801\ud558\ub294 \uc815\ubcf4\ub97c \uac04\ub7b5\ud558\uac8c \uc124\uba85\ud569\ub2c8\ub2e4.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\uba54\uc11c\ub4dc"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"new_default_meta")),(0,l.kt)("td",{parentName:"tr",align:null},"\uae30\ubcf8 ",(0,l.kt)("inlineCode",{parentName:"td"},"metadata"),"\ub97c \uc774\uc6a9\ud574 \ucee8\ud2b8\ub799\ud2b8\ub97c \ucd08\uae30\ud654\ud574, \uc0ac\uc6a9\uc790\uac00 \uc785\ub825\uac12\uc744 \uc81c\uacf5\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub418\ub3c4\ub85d \ud569\ub2c8\ub2e4. \ub610\ud55c \uc18c\uc720\uc790\uc5d0\uac8c \uc804\uc1a1\ub418\ub294 \uc804\uccb4 \ud1a0\ud070 \uc218\ub7c9\uc744 \uc804\ub2ec\ub429\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"new")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc0ac\uc6a9\uc790\uac00 \uc81c\uacf5\ud55c ",(0,l.kt)("inlineCode",{parentName:"td"},"metadata"),"\uc640 \ucd1d \uacf5\uae09\ub7c9\uc73c\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \ucd08\uae30\ud654\ud569\ub2c8\ub2e4.")))),(0,l.kt)("admonition",{title:"\uae30\uc5b5\ud574 \ub450\uc138\uc694",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\ucd08\uae30\ud654 \ud568\uc218 (",(0,l.kt)("inlineCode",{parentName:"p"},"new"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"new_default_meta"),")\uc740 \ud55c \ubc88\ub9cc \ud638\ucd9c\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/ft-tutorial/blob/main/1.skeleton/src/lib.rs#L34-L58\n")),(0,l.kt)("p",null,"\ud29c\ud1a0\ub9ac\uc5bc \uc2dc\ub9ac\uc988\uc758 ",(0,l.kt)("a",{parentName:"p",href:"/near_docs/tutorials/fts/defining-a-token"},"\ud1a0\ud070 \uc815\uc758"),"\uc5d0\uc11c \uc774\ub7ec\ud55c \uae30\ub2a5\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"metadatars"},(0,l.kt)("inlineCode",{parentName:"h2"},"metadata.rs")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\uc774 \ud30c\uc77c\uc740 \ud1a0\ud070 \ubc0f \uba54\ud0c0\ub370\uc774\ud130\uc5d0 \ub300\ud574 \uc800\uc7a5\ud560 \uc815\ubcf4\ub97c \ucd94\uc801\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4.\n\ub610\ud55c \ud45c\uc900 \uba54\ud0c0\ub370\uc774\ud130 \ud655\uc7a5\uc758 \uc77c\ubd80\uc778 \ucee8\ud2b8\ub799\ud2b8\uc758 ",(0,l.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/NonFungibleToken/Metadata.html"},"\uba54\ud0c0\ub370\uc774\ud130"),"\ub97c \ubcf4\ub294 \uae30\ub2a5\uc744 \uc815\uc758\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\uc774\ub984"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"FungibleTokenMetadata")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc774 \uad6c\uc870\ub294 \ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070\uc758 \uba54\ud0c0\ub370\uc774\ud130\ub97c \uc815\uc758\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"ft_metadata")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc774 \ud568\uc218\ub97c \ud1b5\ud574 \uc0ac\uc6a9\uc790\ub294 \ud1a0\ud070\uc758 \uba54\ud0c0\ub370\uc774\ud130\ub97c \ucffc\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/ft-tutorial/blob/main/1.skeleton/src/metadata.rs#L10-L30\n")),(0,l.kt)("p",null,"\ud29c\ud1a0\ub9ac\uc5bc \uc2dc\ub9ac\uc988\uc758 ",(0,l.kt)("a",{parentName:"p",href:"/near_docs/tutorials/fts/defining-a-token"},"\ud1a0\ud070 \uc815\uc758"),"\uc5d0\uc11c \uc774\ub7ec\ud55c \uae30\ub2a5\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"storagers"},(0,l.kt)("inlineCode",{parentName:"h2"},"storage.rs")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/StorageManagement"},"\uc2a4\ud1a0\ub9ac\uc9c0 \uad00\ub9ac")," \ud45c\uc900\uc5d0 \ub530\ub978 \ub4f1\ub85d \ub85c\uc9c1\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\uba54\uc11c\ub4dc"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"storage_deposit")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc8fc\uc5b4\uc9c4 \uacc4\uc815\uc5d0 \ub300\ud574 \u24c3\uc758 \uc785\uae08\uc744 \ubc1b\ub294 \uc9c0\uae09 \uba54\uc11c\ub4dc\uc785\ub2c8\ub2e4. \uc774\ub807\uac8c \ud558\uba74 \ucee8\ud2b8\ub799\ud2b8 \uc0ac\uc6a9\uc790\uac00 \ub4f1\ub85d\ub429\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"storage_balance_bounds")),(0,l.kt)("td",{parentName:"tr",align:null},"\ucee8\ud2b8\ub799\ud2b8\uc640 \uc0c1\ud638 \uc791\uc6a9\ud558\ub294 \ub370 \ud544\uc694\ud55c \ucd5c\uc18c \ubc0f \ucd5c\ub300 \ud5c8\uc6a9 \uc2a4\ud1a0\ub9ac\uc9c0 \uae08\uc561\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. FT \ucee8\ud2b8\ub799\ud2b8\uc758 \uacbd\uc6b0 \ucd5c\uc18c\uac12 = \ucd5c\ub300\uac12\uc785\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"storage_balance_of")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc9c0\uc815\ub41c \uc0ac\uc6a9\uc790\uac00 \uc9c0\ubd88\ud55c \ucd1d \uc2a4\ud1a0\ub9ac\uc9c0 \ubc0f \uc0ac\uc6a9 \uac00\ub2a5\ud55c \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. FT \ucee8\ud2b8\ub799\ud2b8\uc758 \uacbd\uc6b0 \ub4f1\ub85d\uc744 \uc704\ud574 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ud558\uace0 \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 \ub300\ud574 \ucd08\uacfc \uc9c0\ubd88\ud560 \uc218 \uc5c6\uae30 \ub54c\ubb38\uc5d0, \uc0ac\uc6a9 \uac00\ub2a5\ud55c \uc2a4\ud1a0\ub9ac\uc9c0\ub294 \ud56d\uc0c1 0\uc785\ub2c8\ub2e4.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/ft-tutorial/blob/main/1.skeleton/src/storage.rs#L79-L106\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\ud29c\ud1a0\ub9ac\uc5bc \uc2dc\ub9ac\uc988\uc758 ",(0,l.kt)("a",{parentName:"p",href:"/near_docs/tutorials/fts/registering-accounts"},"\uc2a4\ud1a0\ub9ac\uc9c0"),"\uc5d0\uc11c \uc774\ub7ec\ud55c \uae30\ub2a5\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uac83\uc785\ub2c8\ub2e4.")),(0,l.kt)("h2",{id:"\ubf08\ub300-\ub9cc\ub4e4\uae30"},"\ubf08\ub300 \ub9cc\ub4e4\uae30"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc544\uc9c1 \uae30\ubcf8 \ub808\ud37c\uc9c0\ud1a0\ub9ac\ub97c \ubcf5\uc81c\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0 \ud130\ubbf8\ub110\uc744 \uc5f4\uace0 \ub2e4\uc74c\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/near-examples/ft-tutorial/\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub2e4\uc74c\uc73c\ub85c ",(0,l.kt)("inlineCode",{parentName:"li"},"1.skeleton/build.sh")," \ud30c\uc77c \ub0b4\uc5d0 \uc788\ub294 \ube4c\ub4dc \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubf08\ub300 \ucee8\ud2b8\ub799\ud2b8\ub97c \ube4c\ub4dc\ud569\ub2c8\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cd ft-tutorial/1.skeleton\n./build.sh\ncd ..\n")),(0,l.kt)("p",null,"\uc774 \uc18c\uc2a4\ub294 \ubf08\ub300\uc77c \ubfd0\uc774\ubbc0\ub85c \ub2e4\uc74c\uacfc \uac19\uc774 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \ucf54\ub4dc\uc5d0 \ub300\ud55c \ub9ce\uc740 \uacbd\uace0\ub97c \ubc1b\uac8c \ub429\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"   = note: `#[warn(dead_code)]` on by default\n\nwarning: constant is never used: `GAS_FOR_RESOLVE_TRANSFER`\n --\x3e src/ft_core.rs:5:1\n  |\n5 | const GAS_FOR_RESOLVE_TRANSFER: Gas = Gas(5_000_000_000_000);\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n\nwarning: constant is never used: `GAS_FOR_FT_TRANSFER_CALL`\n --\x3e src/ft_core.rs:6:1\n  |\n6 | const GAS_FOR_FT_TRANSFER_CALL: Gas = Gas(25_000_000_000_000 + GAS_FOR_RESOLVE_TRANSFER.0);\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n\nwarning: `fungible-token` (lib) generated 25 warnings\n    Finished release [optimized] target(s) in 1.93s\n\u2728  Done in 2.03s.\n")),(0,l.kt)("p",null,"\uc774\ub7ec\ud55c \uacbd\uace0\uc5d0 \ub300\ud574 \uac71\uc815\ud558\uc9c0 \ub9c8\uc138\uc694. \uc544\uc9c1 \uc774 \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\uc9c0 \uc54a\uc744 \uac83\uc785\ub2c8\ub2e4. \ubf08\ub300 \uad6c\ucd95\ud558\ub294 \uac83\uc740 Rust \ud234\uccb4\uc778\uc774 \uc81c\ub300\ub85c \uc791\ub3d9\ud558\ub294\uc9c0 \ud655\uc778\ud558\ub294 \uac83\uc774\uace0, \uc774\ub294 \ub2e4\uc74c \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c \uc774 NFT \ucee8\ud2b8\ub799\ud2b8\uc758 \uac1c\uc120\ub41c \ubc84\uc804\uc744 \ucef4\ud30c\uc77c\ud560 \uc218 \uc788\ub294\uc9c0 \ud655\uc778\ud558\ub294 \ub370 \uc720\uc6a9\ud569\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\uacb0\ub860"},"\uacb0\ub860"),(0,l.kt)("p",null,"\uc774 NFT \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \ub808\uc774\uc544\uc6c3\uacfc \ub2e4\uc591\ud55c \uc18c\uc2a4 \ud30c\uc77c\uc5d0 \ubaa8\ub4e0 \ud568\uc218\uac00 \uc5b4\ub5bb\uac8c \ubc30\uce58\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\ud588\uc2b5\ub2c8\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn"),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8\ub97c \ucef4\ud30c\uc77c\ud560 \uc218 \uc788\uc5c8\uace0, \ud29c\ud1a0\ub9ac\uc5bc\uc758 \ub2e4\uc74c ",(0,l.kt)("a",{parentName:"p",href:"/tutorials/fts/circulating-supply"},"\uc139\uc158"),"\uc5d0\uc11c \uc774 \ubf08\ub300\ub97c \uad6c\uccb4\ud654\ud558\uae30 \uc2dc\uc791\ud560 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("admonition",{title:"\ubb38\uc11c\uc758 \ubc84\uc804 \uad00\ub9ac",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\uc774 \uae00\uc744 \uc4f0\ub294 \uc2dc\uc810\uc5d0\uc11c \uc774 \uc608\uc81c\ub294 \ub2e4\uc74c \ubc84\uc804\uc5d0\uc11c \uc791\ub3d9\ud569\ub2c8\ub2e4."),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"rustc: ",(0,l.kt)("inlineCode",{parentName:"li"},"1.6.0")),(0,l.kt)("li",{parentName:"ul"},"near-sdk-rs: ",(0,l.kt)("inlineCode",{parentName:"li"},"4.0.0")))))}u.isMDXComponent=!0}}]);