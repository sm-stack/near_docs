"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1287],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=o(a),m=l,u=c["".concat(p,".").concat(m)]||c[m]||k[m]||r;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var o=2;o<r;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},72772:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>k});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),i=["components"],s={title:"JS SDK CLI"},p=void 0,o={unversionedId:"sdk/js/cli/cli",id:"sdk/js/cli/cli",title:"JS SDK CLI",description:"SDK \uba85\ub839\uc904 \uc778\ud130\ud398\uc774\uc2a4 (CLI)\ub294 \ube4c\ub4dc \ud504\ub85c\uc138\uc2a4\uc758 \uc5ec\ub7ec \ubd80\ubd84\uc5d0\uc11c \uc791\ub3d9\ud558\uace0, \uc720\ud6a8\uc131 \uac80\uc0ac \ubc0f ABI\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\ub294 \ub3c4\uad6c\uc785\ub2c8\ub2e4. \ubb34\uc5c7\ubcf4\ub2e4\ub3c4 SDK CLI\ub97c \uc0ac\uc6a9\ud558\uba74 \ub2e4\uc74c\uc744 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/../docs/sdk/js/cli/cli.md",sourceDirName:"sdk/js/cli",slug:"/sdk/js/cli/",permalink:"/near_docs/vi/sdk/js/cli/",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/js/cli/cli.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"9 thg 3, 2023",frontMatter:{title:"JS SDK CLI"},sidebar:"sdk",previous:{title:"\uc7ac\ud604 \uac00\ub2a5\ud55c \ube4c\ub4dc",permalink:"/near_docs/vi/sdk/js/building/reproducible-builds"},next:{title:"\ud1b5\ud569 \ud14c\uc2a4\ud2b8(Integration Test)",permalink:"/near_docs/vi/sdk/js/testing/integration-tests"}},d={},k=[{value:"\uac1c\uc694",id:"overview",level:2},{value:"\uc124\uc815",id:"setup",level:2},{value:"\uc124\uce58",id:"installation",level:3},{value:"Mac / Linux",id:"mac-and-linux",level:4},{value:"Windows",id:"windows",level:4},{value:"\uba85\ub839",id:"commands",level:2},{value:"<code>near-sdk-js build</code>",id:"build",level:3},{value:"<code>near-sdk-js validateContract</code>",id:"validate-contract",level:3},{value:"<code>near-sdk-js checkTypescript</code>",id:"check-ts",level:3},{value:"<code>near-sdk-js createJsFileWithRollup</code>",id:"create-js-file",level:3},{value:"<code>near-sdk-js transpileJsAndBuildWasm</code>",id:"transpile-js-to-wasm",level:3}],c={toc:k};function m(e){var t=e.components,s=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"SDK ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/near/near-sdk-js/blob/develop/packages/near-sdk-js/src/cli/cli.ts"},"\uba85\ub839\uc904 \uc778\ud130\ud398\uc774\uc2a4")," (CLI)\ub294 \ube4c\ub4dc \ud504\ub85c\uc138\uc2a4\uc758 \uc5ec\ub7ec \ubd80\ubd84\uc5d0\uc11c \uc791\ub3d9\ud558\uace0, \uc720\ud6a8\uc131 \uac80\uc0ac \ubc0f ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/near/abi"},"ABI"),"\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\ub294 \ub3c4\uad6c\uc785\ub2c8\ub2e4. \ubb34\uc5c7\ubcf4\ub2e4\ub3c4 SDK CLI\ub97c \uc0ac\uc6a9\ud558\uba74 \ub2e4\uc74c\uc744 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ube4c\ub4dc \ud504\ub85c\uc138\uc2a4\uc758 \ub2e4\uc591\ud55c \ubd80\ubd84 \uc81c\uc5b4"),(0,r.kt)("li",{parentName:"ul"},"\ucee8\ud2b8\ub799\ud2b8 \ubc0f TypeScript \ucf54\ub4dc \uc720\ud6a8\uc131 \uac80\uc0ac"),(0,r.kt)("li",{parentName:"ul"},"ABI JSON \ud30c\uc77c \uc0dd\uc131")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"overview"},"\uac1c\uc694"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\uc790\uc138\ud55c \uc815\ubcf4\uc640 \uc608\ub97c \ubcf4\ub824\uba74 \uba85\ub839\uc744 \ud074\ub9ad\ud558\uc138\uc694.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uba85\ub839")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\uba85\ub839"),(0,r.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#build"},(0,r.kt)("inlineCode",{parentName:"a"},"near-sdk-js build"))),(0,r.kt)("td",{parentName:"tr",align:null},"NEAR JS \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uad6c\ucd95")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#validate-contract"},(0,r.kt)("inlineCode",{parentName:"a"},"near-sdk-js validateContract"))),(0,r.kt)("td",{parentName:"tr",align:null},"NEAR JS \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uac80\uc99d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#check-ts"},(0,r.kt)("inlineCode",{parentName:"a"},"near-sdk-js checkTypescript"))),(0,r.kt)("td",{parentName:"tr",align:null},"\uc77c\ubd80 CLI \ud50c\ub798\uadf8\ub85c TSC \uc2e4\ud589")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#create-js-file"},(0,r.kt)("inlineCode",{parentName:"a"},"near-sdk-js createJsFileWithRollup"))),(0,r.kt)("td",{parentName:"tr",align:null},"\ub098\uc911\uc5d0 QJSC\ub85c \ucc98\ub9ac\ud560 \uc911\uac04 JavaScript \ud30c\uc77c \uc0dd\uc131")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#transpile-js-to-wasm"},(0,r.kt)("inlineCode",{parentName:"a"},"near-sdk-js transpileJsAndBuildWasm"))),(0,r.kt)("td",{parentName:"tr",align:null},"\ub300\uc0c1 javascript \ud30c\uc77c\uc744 QJSC\ub97c \uc0ac\uc6a9\ud558\uc5ec .c \ubc0f .h\ub85c \ubcc0\ud658\ud55c \ub2e4\uc74c clang\uc744 \uc0ac\uc6a9\ud558\uc5ec wasm\uc73c\ub85c \ucef4\ud30c\uc77c")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"setup"},"\uc124\uc815"),(0,r.kt)("h3",{id:"installation"},"\uc124\uce58"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"npm"),"\uacfc ",(0,r.kt)("inlineCode",{parentName:"p"},"NodeJS"),"\uc758 \ucd5c\uc2e0 \ubc84\uc804\uc774 \uc124\uce58\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\ud558\uc138\uc694.")),(0,r.kt)("h4",{id:"mac-and-linux"},"Mac / Linux"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"nvm"),"\uacfc \uac19\uc774 ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/"},"\ud328\ud0a4\uc9c0 \ub9e4\ub2c8\uc800"),"\ub97c \uc0ac\uc6a9\ud574 ",(0,r.kt)("inlineCode",{parentName:"li"},"npm"),"\uacfc ",(0,r.kt)("inlineCode",{parentName:"li"},"node"),"\ub97c \uc124\uce58\ud569\ub2c8\ub2e4. \uc774\ub294 macOS\uac00 USB \uc7a5\uce58\uc640 \uad00\ub828\ub41c \ub178\ub4dc \ud328\ud0a4\uc9c0\ub97c \ucc98\ub9ac\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \uc778\ud574 \ub584\ub584\ub85c Ledger \uc0ac\uc6a9\uc5d0 \ubb38\uc81c\uac00 \uc0dd\uae38 \uc218 \uc788\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"Node \ubc84\uc804 12 \uc774\uc0c1\uc744 \uc124\uce58\ud588\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"\ub2e4\uc74c\uc744 \uc2e4\ud589\ud558\uc5ec ",(0,r.kt)("inlineCode",{parentName:"li"},"near-cli"),"\ub97c \uc804\uc5ed\uc801\uc73c\ub85c \uc124\uce58\ud569\ub2c8\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g near-cli\n")),(0,r.kt)("h4",{id:"windows"},"Windows"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Windows \uc0ac\uc6a9\uc790\uc758 \uacbd\uc6b0 Linux\uc6a9 Windows \ud558\uc704 \uc2dc\uc2a4\ud15c(",(0,r.kt)("inlineCode",{parentName:"p"},"WSL"),")\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"WSL")," \uc124\uce58 ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/wsl/install-manual#downloading-distros"},"[\uc5ec\uae30\ub97c \ud074\ub9ad]")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"npm")," \uc124\uce58 ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/get-npm"},"[\uc5ec\uae30\ub97c \ud074\ub9ad]")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"}," Node.js")," \uc124\uce58 ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/"},"[\uc5ec\uae30\ub97c \ud074\ub9ad]")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"npm")," \uae30\ubcf8 \ub514\ub809\ud1a0\ub9ac \ubcc0\uacbd ",(0,r.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally#manually-change-npms-default-directory"},"[\uc5ec\uae30\ub97c \ud074\ub9ad]"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc774\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"WSL")," \uad00\ub828 \uad8c\ud55c \ubb38\uc81c\ub97c \ud53c\ud558\uae30 \uc704\ud55c \uac83\uc785\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ol"},"\ub2e4\uc74c\uc744 \uc2e4\ud589\ud558\uc5ec ",(0,r.kt)("inlineCode",{parentName:"li"},"WSL"),"\uc744 \uc5f4\uace0 ",(0,r.kt)("inlineCode",{parentName:"li"},"near-cli"),"\ub97c \uc124\uce58\ud569\ub2c8\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g near-cli\n")),(0,r.kt)("admonition",{title:"\uc8fc\uc758",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"WSL"),"\ub97c \uc0ac\uc6a9\ud558\ub294 \ubcf5\uc0ac/\ubd99\uc5ec\ub123\uae30\ub294 \uc57d\uac04 \uc774\uc0c1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},'"\ube60\ub978 \ud3b8\uc9d1 \ubaa8\ub4dc"\ub97c \uc0ac\uc6a9\ud558\uba74 \ub9c8\uc6b0\uc2a4 \uc624\ub978\ucabd \ubc84\ud2bc\uc73c\ub85c \ubd99\uc5ec\ub123\uae30\ub97c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.'),(0,r.kt)("li",{parentName:"ul"},"\ubc84\uc804\uc5d0 \ub530\ub77c ",(0,r.kt)("inlineCode",{parentName:"li"},"Ctrl")," + ",(0,r.kt)("inlineCode",{parentName:"li"},"V")," \ubd99\uc5ec\ub123\uae30\ub97c \ud5c8\uc6a9\ud558\ub294 \ub610 \ub2e4\ub978 \ud655\uc778\ub780\uc774 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"Windows option called Quick Edit allow right-click pasting in WSL",src:a(41496).Z,width:"608",height:"531"}))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"commands"},"\uba85\ub839"),(0,r.kt)("h3",{id:"build"},(0,r.kt)("inlineCode",{parentName:"h3"},"near-sdk-js build")),(0,r.kt)("p",null,"\uc18c\uc2a4, \ub300\uc0c1, ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \ubc0f ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," \ud30c\uc77c\uc744 \uc9c0\uc815\ud558\uc5ec NEAR JS \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uad6c\ucd95\ud569\ub2c8\ub2e4. \uc544\ubb34\uac83\ub3c4 \uc9c0\uc815\ud558\uc9c0 \uc54a\uc73c\uba74 \uae30\ubcf8\uac12\uc774 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uc778\uc790 \uae30\ubcf8\uac12\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc18c\uc2a4: ",(0,r.kt)("inlineCode",{parentName:"li"},"src/index.js")),(0,r.kt)("li",{parentName:"ul"},"\ud0c0\uac9f: ",(0,r.kt)("inlineCode",{parentName:"li"},"build/contract.wasm")),(0,r.kt)("li",{parentName:"ul"},"packageJson: ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")),(0,r.kt)("li",{parentName:"ul"},"tsConfig: ",(0,r.kt)("inlineCode",{parentName:"li"},"tsconfig.json"))),(0,r.kt)("p",null,"\uc635\uc158 \uae30\ubcf8\uac12\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"\ub85c \uc124\uc815\ub429\ub2c8\ub2e4. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc778\uc790 (\uc120\ud0dd \uc0ac\ud56d): ",(0,r.kt)("inlineCode",{parentName:"li"},"[source] [target] [packageJson] [tsConfig]")),(0,r.kt)("li",{parentName:"ul"},"\uc635\uc158: ",(0,r.kt)("inlineCode",{parentName:"li"},"--verbose --generateABI"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc608\uc2dc:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"near-sdk-js build src/main.ts out/main.wasm package.json tsconfig.json --verbose true --generateABI true\n")),(0,r.kt)("h3",{id:"validate-contract"},(0,r.kt)("inlineCode",{parentName:"h3"},"near-sdk-js validateContract")),(0,r.kt)("p",null,"NEAR JS \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uac80\uc99d\ud569\ub2c8\ub2e4. \uc0dd\uc131\uc790\uc5d0\uc11c \ubaa8\ub4e0 \ub9e4\uac1c\ubcc0\uc218\uac00 \ucd08\uae30\ud654\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8\ub97c \uac80\uc99d\ud569\ub2c8\ub2e4. \uc774\ub294 TypeScript\uc5d0\uc11c\ub9cc \uc791\ub3d9\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc778\uc790: ",(0,r.kt)("inlineCode",{parentName:"li"},"[source]")),(0,r.kt)("li",{parentName:"ul"},"\uc635\uc158: ",(0,r.kt)("inlineCode",{parentName:"li"},"--verbose"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc608\uc2dc:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"near-sdk-js validateContract src/main.ts --verbose true\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc751\ub2f5 \uc608\uc2dc:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx near-sdk-js validateContract src/index.ts\n[validate] \u203a \u2026  awaiting  Validating src/index.ts contract...\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"check-ts"},(0,r.kt)("inlineCode",{parentName:"h3"},"near-sdk-js checkTypescript")),(0,r.kt)("p",null,"\uc77c\ubd80 CLI \ud50c\ub798\uadf8\uc640 \ud568\uaed8 TSC\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null," :::note \uc8fc\uc758\n\uc774 \uba85\ub839\uc5b4\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"\uc744 \ubb34\uc2dc\ud569\ub2c8\ub2e4.\n:::"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc778\uc790: ",(0,r.kt)("inlineCode",{parentName:"li"},"[source]")),(0,r.kt)("li",{parentName:"ul"},"\uc635\uc158: ",(0,r.kt)("inlineCode",{parentName:"li"},"--verbose"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc608\uc2dc:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"near-sdk-js checkTypescript src/main.ts --verbose true\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc751\ub2f5 \uc608\uc2dc:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx near-sdk-js checkTypescript src/index.ts\n[checkTypescript] \u203a \u2026  awaiting  Typechecking src/index.ts with tsc...\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"create-js-file"},(0,r.kt)("inlineCode",{parentName:"h3"},"near-sdk-js createJsFileWithRollup")),(0,r.kt)("p",null,"\ub098\uc911\uc5d0 QJSC\ub85c \ucc98\ub9ac\ud560 \uc911\uac04 JavaScript \ud30c\uc77c\uc744 \ub9cc\ub4ed\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc778\uc790: ",(0,r.kt)("inlineCode",{parentName:"li"},"[source]")," ",(0,r.kt)("inlineCode",{parentName:"li"},"[target]")),(0,r.kt)("li",{parentName:"ul"},"\uc635\uc158: ",(0,r.kt)("inlineCode",{parentName:"li"},"--verbose"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc608\uc2dc:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"near-sdk-js createJsFileWithRollup src/main.ts out/main.js --verbose true\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc751\ub2f5 \uc608\uc2dc:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx near-sdk-js createJsFileWithRollup src/index.ts\n[createJsFileWithRollup] \u203a \u2026  awaiting  Creating src/index.ts file with Rollup...\n")),(0,r.kt)("h3",{id:"transpile-js-to-wasm"},(0,r.kt)("inlineCode",{parentName:"h3"},"near-sdk-js transpileJsAndBuildWasm")),(0,r.kt)("p",null,"\ub098\uc911\uc5d0 QJSC\ub85c \ucc98\ub9ac\ud560 \uc911\uac04 JavaScript \ud30c\uc77c\uc744 \ub9cc\ub4ed\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc778\uc790: ",(0,r.kt)("inlineCode",{parentName:"li"},"[source]")," ",(0,r.kt)("inlineCode",{parentName:"li"},"[target]")),(0,r.kt)("li",{parentName:"ul"},"\uc635\uc158: ",(0,r.kt)("inlineCode",{parentName:"li"},"--verbose"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc608\uc2dc:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"near-sdk-js transpileJsAndBuildWasm src/main.js out/main.wasm --verbose true\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc751\ub2f5 \uc608\uc2dc:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx near-sdk-js transpileJsAndBuildWasm\n[transpileJsAndBuildWasm] \u203a \u2714  success   Generated build/contract.wasm contract successfully!\n")))}m.isMDXComponent=!0},41496:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/windows-quickedit-mode-e412732b3a729c9ff17225591ab7bc6e.png"}}]);