"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[762],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(n),u=a,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},67751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>m});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],p={id:"get-started",title:"\uc2dc\uc791\ud558\uae30"},s="\uc2dc\uc791\ud558\uae30",l={unversionedId:"sdk/js/get-started",id:"sdk/js/get-started",title:"\uc2dc\uc791\ud558\uae30",description:"Linux\uc6a9 Windows \ud558\uc704 \uc2dc\uc2a4\ud15c(WSL2)\uc744 \uc0ac\uc6a9\ud558\uc5ec Windows\uc5d0\uc11c \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uac1c\ubc1c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/../docs/sdk/js/intro.md",sourceDirName:"sdk/js",slug:"/sdk/js/get-started",permalink:"/near_docs/zh-CN/sdk/js/get-started",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/js/intro.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"2023\u5e743\u67089\u65e5",frontMatter:{id:"get-started",title:"\uc2dc\uc791\ud558\uae30"},sidebar:"sdk",previous:{title:"JavaScript SDK\uc5d0 \ub300\ud574",permalink:"/near_docs/zh-CN/sdk/js/introduction"},next:{title:"NearBindgen",permalink:"/near_docs/zh-CN/sdk/js/contract-structure/near-bindgen"}},d={},m=[],c={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\uc2dc\uc791\ud558\uae30"},"\uc2dc\uc791\ud558\uae30"),(0,i.kt)("admonition",{title:"WINDOWS\uc5d0\uc11c JS SDK \uc0ac\uc6a9",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Linux\uc6a9 Windows \ud558\uc704 \uc2dc\uc2a4\ud15c(WSL2)\uc744 \uc0ac\uc6a9\ud558\uc5ec Windows\uc5d0\uc11c \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uac1c\ubc1c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.:::"),(0,i.kt)("p",{parentName:"admonition"},"WSL2\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 \ub2e4\uc74c \ub2e8\uacc4\ub97c \ub530\ub974\uc138\uc694."),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PowerShell"),"\uc744 \uad00\ub9ac\uc790 \uad8c\ud55c\uc73c\ub85c \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"Ubuntu \uc124\uce58\ub97c \uc704\ud574 ",(0,i.kt)("inlineCode",{parentName:"li"},"wsl --install"),"\uc744 \uc2e4\ud589\ud558\uace0, \ucd94\uac00 \uc124\uc815\uc744 \uc790\ub3d9\uc73c\ub85c \uc9c4\ud589\ud569\ub2c8\ub2e4. ",(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/windows/wsl/install"},"\uc5ec\uae30"),"\uc5d0\uc11c \uc138\ubd80 \uc0ac\ud56d\uc744 \uc0b4\ud3b4\ubcf4\uc138\uc694."),(0,i.kt)("li",{parentName:"ul"},"\uc7a5\uce58\ub97c \uc7ac\uc2dc\uc791\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WSL2"),"\ub294 \ub2e4\uc2dc \uc2dc\uc791\ud560 \ub54c \uc124\uc815 \ud504\ub85c\uc138\uc2a4\ub97c \uacc4\uc18d\ud560 \uac83\uc785\ub2c8\ub2e4. \uba54\uc2dc\uc9c0\uac00 \ud45c\uc2dc\ub418\uba74 \uc0ac\uc6a9\uc790 \uc774\ub984\uacfc \uc554\ud638\ub97c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl"},"\uc774 \uac00\uc774\ub4dc"),"\ub97c \ud655\uc778\ud574 ",(0,i.kt)("inlineCode",{parentName:"li"},"npm"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"node"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"npx"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"VSCode")," \ubc0f \ub2e4\ub978 \ub3c4\uad6c\ub4e4\uc744 \uc124\uc815\ud558\uace0, \uac1c\ubc1c\uc744 \uc2dc\uc791\ud558\uc138\uc694.")),(0,i.kt)("p",{parentName:"admonition"},"WSL2 \uc124\uc815\uc5d0 \ubb38\uc81c\uac00 \uc788\ub294 \uacbd\uc6b0 \ub2e4\uc74c\uc744 \ud655\uc778\ud558\uc138\uc694."),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Windows OS\uac00 \ucd5c\uc2e0 \uc0c1\ud0dc\uc785\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"BIOS\uc5d0\uc11c \uac00\uc0c1\ud654\uac00 \ucf1c\uc838 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Windows Subsystem for Linux"),"\uc640 ",(0,i.kt)("inlineCode",{parentName:"li"},"Virtual Machine Platform"),"\uc774 ",(0,i.kt)("inlineCode",{parentName:"li"},"Windows Features"),"\uc5d0\uc11c \ucf1c\uc838 \uc788\uc2b5\ub2c8\ub2e4(\uc2dc\uc791 -> \uac80\uc0c9 -> Windows \uae30\ub2a5 On \ub610\ub294 Off)")),(0,i.kt)("h2",{parentName:"admonition",id:"\ub178\ub4dc-\uc124\uce58"},"\ub178\ub4dc \uc124\uce58"),(0,i.kt)("p",{parentName:"admonition"},"Node\ub97c \uc124\uce58\ud558\ub824\uba74 ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node.js \uc6f9\uc0ac\uc774\ud2b8"),"\uc758 \uc9c0\uce68\uc744 \ub530\ub974\uc138\uc694."),(0,i.kt)("h2",{parentName:"admonition",id:"\uc0c8-\ud504\ub85c\uc81d\ud2b8-\uc0dd\uc131"},"\uc0c8 \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131"),(0,i.kt)("p",{parentName:"admonition"},"\ud504\ub860\ud2b8\uc5d4\ub4dc\uc640 \uc5f0\uacb0\ub41c \uc0c8 NEAR \uc571\uc744 \ub9cc\ub4dc\ub294 \uac00\uc7a5 \uc88b\uc740 \ubc29\ubc95\uc740 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/create-near-app"},"create-near-app"),"\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \ud504\ub85c\uc81d\ud2b8\ub97c \ucd08\uae30\ud654\ud560 \ub54c \uc120\ud0dd\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uc635\uc158\uc744 \uc0ac\uc6a9\ud558\uc5ec TypeScript\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8 \ub9cc\ub4e4\uae30\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-near-app\n")),(0,i.kt)("p",{parentName:"admonition"},"JS \ucee8\ud2b8\ub799\ud2b8\ub9cc \uac1c\ubc1c\ud558\uace0 \ubc30\ud3ec\ud558\ub824\ub294 \uacbd\uc6b0, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/near-examples/hello-near-js"},(0,i.kt)("inlineCode",{parentName:"a"},"hello-near-js"))," \ub808\ud37c\uc9c0\ud1a0\ub9ac\ub97c \ud15c\ud50c\ub9bf \ub610\ub294 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-sdk-js/tree/develop/examples/src"},"SDK \ub808\ud37c\uc9c0\ud1a0\ub9ac\uc758 \uc608\uc81c")," \uc911 \ud558\ub098\ub85c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4 ."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"npm init"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc0c8 \ud504\ub85c\uc81d\ud2b8\ub97c \uc218\ub3d9\uc73c\ub85c \uc0dd\uc131\ud558\ub824\uba74, \uc0dd\uc131\ub41c ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," \ub0b4\uc5d0 \ub2e4\uc74c \uad6c\uc131\uc774 \ud3ec\ud568\ub418\ub294\uc9c0 \ud655\uc778\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'  "dependencies": {\n    "near-sdk-js": "*"\n  }\n'))))}u.isMDXComponent=!0}}]);