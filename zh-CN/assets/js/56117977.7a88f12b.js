"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6162],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),k=o(a),m=r,N=k["".concat(p,".").concat(m)]||k[m]||c[m]||i;return a?n.createElement(N,l(l({ref:t},d),{},{components:a})):n.createElement(N,l({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},42087:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],s={id:"transaction",title:"Module: transaction",sidebar_label:"transaction",sidebar_position:0,custom_edit_url:null},p=void 0,o={unversionedId:"modules/transaction",id:"version-near-api-js@1.1.0/modules/transaction",title:"Module: transaction",description:"Classes",source:"@site/near-api-js_versioned_docs/version-near-api-js@1.1.0/modules/transaction.md",sourceDirName:"modules",slug:"/modules/transaction",permalink:"/near_docs/zh-CN/tools/near-api-js/reference/modules/transaction",draft:!1,editUrl:null,tags:[],version:"near-api-js@1.1.0",sidebarPosition:0,frontMatter:{id:"transaction",title:"Module: transaction",sidebar_label:"transaction",sidebar_position:0,custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"signer",permalink:"/near_docs/zh-CN/tools/near-api-js/reference/modules/signer"},next:{title:"utils",permalink:"/near_docs/zh-CN/tools/near-api-js/reference/modules/utils"}},d={},c=[{value:"Classes",id:"classes",level:2},{value:"Variables",id:"variables",level:2},{value:"SCHEMA",id:"schema",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions",level:2},{value:"addKey",id:"addkey",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"createAccount",id:"createaccount",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"createTransaction",id:"createtransaction",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"deleteAccount",id:"deleteaccount",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"deleteKey",id:"deletekey",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"deployContract",id:"deploycontract",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"fullAccessKey",id:"fullaccesskey",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"functionCall",id:"functioncall",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"functionCallAccessKey",id:"functioncallaccesskey",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"signTransaction",id:"signtransaction",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"stake",id:"stake",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-11",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"stringifyJsonOrBytes",id:"stringifyjsonorbytes",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Returns",id:"returns-12",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"transfer",id:"transfer",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"Returns",id:"returns-13",level:4},{value:"Defined in",id:"defined-in-14",level:4}],k={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"classes"},"Classes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.AccessKey"},"AccessKey")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.AccessKeyPermission"},"AccessKeyPermission")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.Action"},"Action")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.AddKey"},"AddKey")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.CreateAccount"},"CreateAccount")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.DeleteAccount"},"DeleteAccount")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.DeleteKey"},"DeleteKey")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.DeployContract"},"DeployContract")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.FullAccessPermission"},"FullAccessPermission")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.FunctionCall"},"FunctionCall")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.FunctionCallPermission"},"FunctionCallPermission")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.IAction"},"IAction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.Signature"},"Signature")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.SignedTransaction"},"SignedTransaction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.Stake"},"Stake")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.Transaction"},"Transaction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.Transfer"},"Transfer"))),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"schema"},"SCHEMA"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"SCHEMA"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Class"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/transaction.ts#L149"},"transaction.ts:149")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"addkey"},"addKey"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"addKey"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"publicKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"accessKey"),"): ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.Action"},(0,i.kt)("inlineCode",{parentName:"a"},"Action"))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"publicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/utils_key_pair.PublicKey"},(0,i.kt)("inlineCode",{parentName:"a"},"PublicKey")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"accessKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.AccessKey"},(0,i.kt)("inlineCode",{parentName:"a"},"AccessKey")))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.Action"},(0,i.kt)("inlineCode",{parentName:"a"},"Action"))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/transaction.ts#L85"},"transaction.ts:85")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"createaccount"},"createAccount"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"createAccount"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.Action"},(0,i.kt)("inlineCode",{parentName:"a"},"Action"))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.Action"},(0,i.kt)("inlineCode",{parentName:"a"},"Action"))),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/transaction.ts#L45"},"transaction.ts:45")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"createtransaction"},"createTransaction"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"createTransaction"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"signerId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"publicKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"receiverId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"nonce"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"actions"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"blockHash"),"): ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.Transaction"},(0,i.kt)("inlineCode",{parentName:"a"},"Transaction"))),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"signerId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"publicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/utils_key_pair.PublicKey"},(0,i.kt)("inlineCode",{parentName:"a"},"PublicKey")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"receiverId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nonce")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"BN"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actions")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.Action"},(0,i.kt)("inlineCode",{parentName:"a"},"Action")),"[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"blockHash")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Uint8Array"))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.Transaction"},(0,i.kt)("inlineCode",{parentName:"a"},"Transaction"))),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/transaction.ts#L223"},"transaction.ts:223")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"deleteaccount"},"deleteAccount"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"deleteAccount"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"beneficiaryId"),"): ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.Action"},(0,i.kt)("inlineCode",{parentName:"a"},"Action"))),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"beneficiaryId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.Action"},(0,i.kt)("inlineCode",{parentName:"a"},"Action"))),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/transaction.ts#L93"},"transaction.ts:93")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"deletekey"},"deleteKey"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"deleteKey"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"publicKey"),"): ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.Action"},(0,i.kt)("inlineCode",{parentName:"a"},"Action"))),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"publicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/utils_key_pair.PublicKey"},(0,i.kt)("inlineCode",{parentName:"a"},"PublicKey")))))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.Action"},(0,i.kt)("inlineCode",{parentName:"a"},"Action"))),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/transaction.ts#L89"},"transaction.ts:89")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"deploycontract"},"deployContract"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"deployContract"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"code"),"): ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.Action"},(0,i.kt)("inlineCode",{parentName:"a"},"Action"))),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"code")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Uint8Array"))))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.Action"},(0,i.kt)("inlineCode",{parentName:"a"},"Action"))),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/transaction.ts#L49"},"transaction.ts:49")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fullaccesskey"},"fullAccessKey"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"fullAccessKey"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.AccessKey"},(0,i.kt)("inlineCode",{parentName:"a"},"AccessKey"))),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.AccessKey"},(0,i.kt)("inlineCode",{parentName:"a"},"AccessKey"))),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/transaction.ts#L26"},"transaction.ts:26")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"functioncall"},"functionCall"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"functionCall"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"methodName"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"gas"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"deposit"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"stringify?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"jsContract?"),"): ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.Action"},(0,i.kt)("inlineCode",{parentName:"a"},"Action"))),(0,i.kt)("p",null,"Constructs ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.Action"},"Action")," instance representing contract method call."),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"methodName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:"left"},"the name of the method to call")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"args")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"object")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"Uint8Array")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:"left"},"arguments to pass to method. Can be either plain JS object which gets serialized as JSON automatically  or ",(0,i.kt)("inlineCode",{parentName:"td"},"Uint8Array")," instance which represents bytes passed as is.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"gas")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BN")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:"left"},"max amount of gas that method call can use")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"deposit")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BN")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:"left"},"amount of NEAR (in yoctoNEAR) to send together with the call")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"stringify")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"args"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"Buffer")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"stringifyJsonOrBytes")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Convert input arguments into bytes array.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"jsContract")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Is contract from JS SDK, skips stringification of arguments.")))),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.Action"},(0,i.kt)("inlineCode",{parentName:"a"},"Action"))),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/transaction.ts#L70"},"transaction.ts:70")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"functioncallaccesskey"},"functionCallAccessKey"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"functionCallAccessKey"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"receiverId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"methodNames"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"allowance?"),"): ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.AccessKey"},(0,i.kt)("inlineCode",{parentName:"a"},"AccessKey"))),(0,i.kt)("h4",{id:"parameters-6"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"receiverId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"methodNames")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"),"[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"allowance?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BN"))))),(0,i.kt)("h4",{id:"returns-8"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.AccessKey"},(0,i.kt)("inlineCode",{parentName:"a"},"AccessKey"))),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/transaction.ts#L30"},"transaction.ts:30")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"signtransaction"},"signTransaction"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"signTransaction"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"transaction"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"signer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"accountId?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"networkId?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<[",(0,i.kt)("inlineCode",{parentName:"p"},"Uint8Array"),", ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.SignedTransaction"},(0,i.kt)("inlineCode",{parentName:"a"},"SignedTransaction")),"]",">"),(0,i.kt)("h4",{id:"parameters-7"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"transaction")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.Transaction"},(0,i.kt)("inlineCode",{parentName:"a"},"Transaction")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"signer")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/signer.Signer"},(0,i.kt)("inlineCode",{parentName:"a"},"Signer")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"accountId?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"networkId?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-9"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<[",(0,i.kt)("inlineCode",{parentName:"p"},"Uint8Array"),", ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.SignedTransaction"},(0,i.kt)("inlineCode",{parentName:"a"},"SignedTransaction")),"]",">"),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/transaction.ts#L245"},"transaction.ts:245")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"signTransaction"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"receiverId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"nonce"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"actions"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"blockHash"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"signer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"accountId?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"networkId?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<[",(0,i.kt)("inlineCode",{parentName:"p"},"Uint8Array"),", ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.SignedTransaction"},(0,i.kt)("inlineCode",{parentName:"a"},"SignedTransaction")),"]",">"),(0,i.kt)("h4",{id:"parameters-8"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"receiverId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nonce")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BN"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actions")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.Action"},(0,i.kt)("inlineCode",{parentName:"a"},"Action")),"[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"blockHash")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Uint8Array"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"signer")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/signer.Signer"},(0,i.kt)("inlineCode",{parentName:"a"},"Signer")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"accountId?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"networkId?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-10"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<[",(0,i.kt)("inlineCode",{parentName:"p"},"Uint8Array"),", ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.SignedTransaction"},(0,i.kt)("inlineCode",{parentName:"a"},"SignedTransaction")),"]",">"),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/transaction.ts#L246"},"transaction.ts:246")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"stake"},"stake"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"stake"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"stake"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"publicKey"),"): ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.Action"},(0,i.kt)("inlineCode",{parentName:"a"},"Action"))),(0,i.kt)("h4",{id:"parameters-9"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"stake")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BN"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"publicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/utils_key_pair.PublicKey"},(0,i.kt)("inlineCode",{parentName:"a"},"PublicKey")))))),(0,i.kt)("h4",{id:"returns-11"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.Action"},(0,i.kt)("inlineCode",{parentName:"a"},"Action"))),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/transaction.ts#L81"},"transaction.ts:81")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"stringifyjsonorbytes"},"stringifyJsonOrBytes"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"stringifyJsonOrBytes"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"args"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Buffer")),(0,i.kt)("h4",{id:"parameters-10"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"args")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"returns-12"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Buffer")),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/transaction.ts#L53"},"transaction.ts:53")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"transfer"},"transfer"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"transfer"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"deposit"),"): ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.Action"},(0,i.kt)("inlineCode",{parentName:"a"},"Action"))),(0,i.kt)("h4",{id:"parameters-11"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"deposit")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BN"))))),(0,i.kt)("h4",{id:"returns-13"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/transaction.Action"},(0,i.kt)("inlineCode",{parentName:"a"},"Action"))),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/transaction.ts#L77"},"transaction.ts:77")))}m.isMDXComponent=!0}}]);