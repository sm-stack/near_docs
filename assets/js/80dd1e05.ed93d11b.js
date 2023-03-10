"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4909],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(k,l(l({ref:n},p),{},{components:t})):r.createElement(k,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},46900:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),l=["components"],o={sidebar_position:1,title:"NearBindgen"},c="NearBindgen",s={unversionedId:"sdk/js/contract-structure/near-bindgen",id:"sdk/js/contract-structure/near-bindgen",title:"NearBindgen",description:"@NearBindgen({}) \ub370\ucf54\ub808\uc774\ud130\ub294\ub294 \uc720\ud6a8\ud55c NEAR \ucee8\ud2b8\ub799\ud2b8\uac00 \ub418\uae30 \uc704\ud574 \ud544\uc694\ud55c \ucf54\ub4dc\ub97c \uc0dd\uc131\ud558\uace0, \uc678\ubd80\uc5d0\uc11c \ud638\ucd9c\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\ub294 \ud568\uc218\ub97c \uacf5\uac1c\ud558\uae30 \uc704\ud574 \ucee8\ud2b8\ub799\ud2b8 \ud074\ub798\uc2a4\uc5d0\uc11c \uc0ac\uc6a9\ub429\ub2c8\ub2e4.",source:"@site/../docs/sdk/js/contract-structure/near-bindgen.md",sourceDirName:"sdk/js/contract-structure",slug:"/sdk/js/contract-structure/near-bindgen",permalink:"/near_docs/sdk/js/contract-structure/near-bindgen",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/js/contract-structure/near-bindgen.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"Mar 9, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"NearBindgen"},sidebar:"sdk",previous:{title:"\uc2dc\uc791\ud558\uae30",permalink:"/near_docs/sdk/js/get-started"},next:{title:"\uceec\ub809\uc158",permalink:"/near_docs/sdk/js/contract-structure/collections"}},p={},u=[{value:"\uba85\uc2ec\ud574\uc57c \ud560 \uc911\uc694\ud55c \ud575\uc2ec \uc0c1\ud638 \uc791\uc6a9\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4:",id:"\uba85\uc2ec\ud574\uc57c-\ud560-\uc911\uc694\ud55c-\ud575\uc2ec-\uc0c1\ud638-\uc791\uc6a9\uc740-\ub2e4\uc74c\uacfc-\uac19\uc2b5\ub2c8\ub2e4",level:2},{value:"\ucd08\uae30\ud654 \uba54\uc11c\ub4dc",id:"\ucd08\uae30\ud654-\uba54\uc11c\ub4dc",level:2},{value:"\uc9c0\ubd88 \uba54\uc11c\ub4dc",id:"\uc9c0\ubd88-\uba54\uc11c\ub4dc",level:2},{value:"\ud504\ub77c\uc774\ube57 \uba54\uc11c\ub4dc",id:"\ud504\ub77c\uc774\ube57-\uba54\uc11c\ub4dc",level:2}],d={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nearbindgen"},"NearBindgen"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@NearBindgen({})")," \ub370\ucf54\ub808\uc774\ud130\ub294\ub294 \uc720\ud6a8\ud55c NEAR \ucee8\ud2b8\ub799\ud2b8\uac00 \ub418\uae30 \uc704\ud574 \ud544\uc694\ud55c \ucf54\ub4dc\ub97c \uc0dd\uc131\ud558\uace0, \uc678\ubd80\uc5d0\uc11c \ud638\ucd9c\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\ub294 \ud568\uc218\ub97c \uacf5\uac1c\ud558\uae30 \uc704\ud574 \ucee8\ud2b8\ub799\ud2b8 \ud074\ub798\uc2a4\uc5d0\uc11c \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4 \uac04\ub2e8\ud55c counter \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ub370\ucf54\ub808\uc774\ud130\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \uc801\uc6a9\ub429\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { NearBindgen, near, call, view } from 'near-sdk-js'\n\n@NearBindgen({})\nclass Counter {\n  val: number = 0;\n\n  @view({}) // Public read-only method: Returns the counter value.\n  get_num(): number {\n    return this.val\n  }\n\n  @call({}) // Public method: Increment the counter.\n  increment() {\n    this.val += 1;\n    near.log(`Increased number to ${this.val}`)\n  }\n\n  @call({}) // Public method: Decrement the counter.\n  decrement() {\n    this.val -= 1;\n    near.log(`Decreased number to ${this.val}`)\n  }\n\n  @call({}) // Public method - Reset to zero.\n  reset() {\n    this.val = 0;\n    near.log(`Reset counter to zero`)\n  }\n}\n")),(0,i.kt)("p",null,"\uc774 \uc608\uc5d0\uc11c ",(0,i.kt)("inlineCode",{parentName:"p"},"Counter")," \ud074\ub798\uc2a4\ub294 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uc0c1\ud0dc\uc640 ",(0,i.kt)("inlineCode",{parentName:"p"},"collections"),"\uacfc \uac19\uc740 (\uc5ed)\uc9c1\ub82c\ud654 \uba54\uc11c\ub4dc\ub97c \uad6c\ud604\ud558\ub294 \ubaa8\ub4e0 \uac83\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4. \uc774\ub294 \ub2e4\uc74c \uc139\uc158\uc5d0\uc11c \ub2e4\ub8f0 \uac83\uc785\ub2c8\ub2e4. \ud568\uc218\uac00 \ud638\ucd9c\ub420 \ub54c\ub9c8\ub2e4, \uc0c1\ud0dc\uac00 \ub85c\ub4dc\ub418\uace0 \uc5ed\uc9c1\ub82c\ud654\ub418\ubbc0\ub85c, \ub85c\ub4dc\ub418\ub294 \ub370\uc774\ud130 \uc591\uc744 \uac00\ub2a5\ud55c \ud55c \ucd5c\uc18c\ud654\ud558\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"\uba85\uc2ec\ud574\uc57c-\ud560-\uc911\uc694\ud55c-\ud575\uc2ec-\uc0c1\ud638-\uc791\uc6a9\uc740-\ub2e4\uc74c\uacfc-\uac19\uc2b5\ub2c8\ub2e4"},"\uba85\uc2ec\ud574\uc57c \ud560 \uc911\uc694\ud55c \ud575\uc2ec \uc0c1\ud638 \uc791\uc6a9\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ubaa8\ub4e0 ",(0,i.kt)("inlineCode",{parentName:"li"},"call"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"view")," \ub610\ub294 ",(0,i.kt)("inlineCode",{parentName:"li"},"init")," \ud568\uc218\ub294 \ubaa8\ub4e0 \uacc4\uc815/\ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uc678\ubd80\uc801\uc73c\ub85c \ud638\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,i.kt)("a",{parentName:"li",href:"/near_docs/sdk/js/contract-interface/public-methods"},"\ud37c\ube14\ub9ad \uba54\uc11c\ub4dc"),"\ub97c \ucc38\uace0\ud558\uc138\uc694. "))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"view")," \ub610\ub294 ",(0,i.kt)("inlineCode",{parentName:"li"},"call")," \ub370\ucf54\ub808\uc774\ud130\ub294 \ucee8\ud2b8\ub799\ud2b8\uc758 \uac00\ubcc0\uc131\uc744 \uc81c\uc5b4\ud558\uae30 \uc704\ud574 \uc5ec\ub7ec \uac00\uc9c0 \ubc29\ubc95\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"view"),"\ub85c \ub370\ucf54\ub808\uc774\ud305\ub41c \ud568\uc218\ub294 \uc77d\uae30 \uc804\uc6a9\uc774\uba70, \uc5c5\ub370\uc774\ud2b8\ub41c \uc0c1\ud0dc\ub97c \ub808\ud37c\uc9c0\ud1a0\ub9ac\uc5d0 \uc4f0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"call"),"\ub85c \ub370\ucf54\ub808\uc774\ud305\ub41c \ud568\uc218\ub294 \uc0c1\ud0dc \ubcc0\uacbd\uc744 \ud5c8\uc6a9\ud558\uba70, \uc0c1\ud0dc\ub294 \ud56d\uc0c1 \ud568\uc218 \ud638\ucd9c\uc774 \ub05d\ub0a0 \ub54c \ub2e4\uc2dc \uae30\ub85d\ub429\ub2c8\ub2e4."))),(0,i.kt)("li",{parentName:"ul"},"\ub178\ucd9c\ub41c \ud568\uc218\ub294 \ud568\uc218\uc5d0\uc11c \ud074\ub798\uc2a4 \ubcc0\uc218\uc5d0 \uc561\uc138\uc2a4\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0 \uc0c1\ud0dc\uc5d0 \ub300\ud55c \uc77d\uae30 \ubc0f \uc4f0\uae30\ub97c \uc0dd\ub7b5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\uc774\ub294 \uc77c\ubd80 \uc815\uc801 \uae30\ub2a5 \ub610\ub294 \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\uc5d0 \ud3ec\ud568\ub41c \ub370\uc774\ud130 \ubc18\ud658\uc5d0 \uc720\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))),(0,i.kt)("h2",{id:"\ucd08\uae30\ud654-\uba54\uc11c\ub4dc"},"\ucd08\uae30\ud654 \uba54\uc11c\ub4dc"),(0,i.kt)("p",null,"\uae30\ubcf8\uc801\uc73c\ub85c \ucee8\ud2b8\ub799\ud2b8\uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},"default()")," \uad6c\ud604\uc740 \ucee8\ud2b8\ub799\ud2b8\ub97c \ucd08\uae30\ud654\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \ub2e4\uc74c ",(0,i.kt)("inlineCode",{parentName:"p"},"@init({})")," \ub370\ucf54\ub808\uc774\ud130\uc640 \ud568\uaed8 \ub9e4\uac1c\ubcc0\uc218\ub97c \uc0ac\uc6a9\ud558\uac70\ub098 \uc0ac\uc6a9\uc790 \uc815\uc758 \ub17c\ub9ac\ub97c \uc218\ud589\ud558\ub294 \uc0ac\uc6a9\uc790 \uc815\uc758 \ucd08\uae30\ud654 \ud568\uc218\uac00 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"@NearBindgen({})\nclass Counter {\n    @init({})\n    init(val): void {\n        this.val = val;\n    }\n}\n")),(0,i.kt)("h2",{id:"\uc9c0\ubd88-\uba54\uc11c\ub4dc"},"\uc9c0\ubd88 \uba54\uc11c\ub4dc"),(0,i.kt)("p",null,"\ud638\ucd9c\uacfc \ud568\uaed8 \ud1a0\ud070\uc744 \uc804\uc1a1\ud560 \uc218 \uc788\ub3c4\ub85d ",(0,i.kt)("inlineCode",{parentName:"p"},"call")," \uba54\uc11c\ub4dc \ub370\ucf54\ub808\uc774\ud130\uc5d0  ",(0,i.kt)("inlineCode",{parentName:"p"},"{ payableFunction: true }")," \uc8fc\uc11d\uc744 \ub2ec \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/sdk/js/contract-interface/payable-methods"},"\uc9c0\ubd88 \uba54\uc11c\ub4dc"),"\ub97c \ucc38\uc870\ud558\uc138\uc694."),(0,i.kt)("p",null,"\ud568\uc218\ub97c \uc9c0\ubd88 \uac00\ub2a5\ud55c \uac83\uc73c\ub85c \uc120\uc5b8\ud558\ub824\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \uc8fc\uc11d\uc744 \uc0ac\uc6a9\ud558\uc138\uc694."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"@NearBindgen({})\nclass Counter {\n    @call({ payableFunction: true })\n    increment(): void {\n        this.val += 1;\n    }\n}\n")),(0,i.kt)("h2",{id:"\ud504\ub77c\uc774\ube57-\uba54\uc11c\ub4dc"},"\ud504\ub77c\uc774\ube57 \uba54\uc11c\ub4dc"),(0,i.kt)("p",null,"\ucee8\ud2b8\ub799\ud2b8\ub294 Promise\ub97c \ud1b5\ud574 \uc790\uccb4\uc801\uc73c\ub85c \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud560 \uc218 \uc788\ub3c4\ub85d \uc77c\ubd80 \uba54\uc11c\ub4dc\ub97c \ub178\ucd9c\ud574\uc57c \ud558\uc9c0\ub9cc, \ub2e4\ub978 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ud638\ucd9c\ud558\ub294 \uac83\uc740 \ud5c8\uc6a9\ud558\uc9c0 \uc54a\uc73c\ub824\uace0 \ud569\ub2c8\ub2e4. \uc774\ub97c \uc704\ud574 ",(0,i.kt)("inlineCode",{parentName:"p"},"{ privateFunction: true }")," \uc8fc\uc11d\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc774 \uba54\uc18c\ub4dc\uac00 \uc678\ubd80\uc5d0\uc11c \ud638\ucd9c\ub420 \ub54c \uc624\ub958\ub97c \ubc1c\uc0dd\uc2dc\ud0b5\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/sdk/js/contract-interface/private-methods"},"\ud504\ub77c\uc774\ube57 \uba54\uc11c\ub4dc"),"\ub97c \ucc38\uace0\ud558\uc138\uc694."),(0,i.kt)("p",null,"\uc774 \uc8fc\uc11d\uc740 \ub2e4\uc74c\uc744 \ud1b5\ud574 \ubaa8\ub4e0 \uba54\uc11c\ub4dc\uc5d0 \uc801\uc6a9\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"@NearBindgen({})\nclass Counter {\n    @call({ privateFunction: true })\n    private_increment(): void {\n        this.val += 1;\n    }\n}\n")))}m.isMDXComponent=!0}}]);