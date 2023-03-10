"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5818],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5354:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),c=["components"],l={id:"account_creator.UrlAccountCreator",title:"Class: UrlAccountCreator",sidebar_label:"UrlAccountCreator",custom_edit_url:null},i=void 0,s={unversionedId:"classes/account_creator.UrlAccountCreator",id:"version-near-api-js@1.1.0/classes/account_creator.UrlAccountCreator",title:"Class: UrlAccountCreator",description:"accountcreator.UrlAccountCreator",source:"@site/near-api-js_versioned_docs/version-near-api-js@1.1.0/classes/account_creator.UrlAccountCreator.md",sourceDirName:"classes",slug:"/classes/account_creator.UrlAccountCreator",permalink:"/near_docs/zh-CN/tools/near-api-js/reference/classes/account_creator.UrlAccountCreator",draft:!1,editUrl:null,tags:[],version:"near-api-js@1.1.0",frontMatter:{id:"account_creator.UrlAccountCreator",title:"Class: UrlAccountCreator",sidebar_label:"UrlAccountCreator",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"LocalAccountCreator",permalink:"/near_docs/zh-CN/tools/near-api-js/reference/classes/account_creator.LocalAccountCreator"},next:{title:"Account2FA",permalink:"/near_docs/zh-CN/tools/near-api-js/reference/classes/account_multisig.Account2FA"}},p={},u=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"connection",id:"connection",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"helperUrl",id:"helperurl",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"Methods",id:"methods",level:2},{value:"createAccount",id:"createaccount",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-3",level:4}],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/modules/account_creator"},"account_creator"),".UrlAccountCreator"),(0,o.kt)("p",null,"Account creator provides an interface for implementations to actually create accounts"),(0,o.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/account_creator.AccountCreator"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountCreator"))),(0,o.kt)("p",{parentName:"li"},"\u21b3 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"UrlAccountCreator"))))),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"new UrlAccountCreator"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"connection"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"helperUrl"),")"),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"connection")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/connection.Connection"},(0,o.kt)("inlineCode",{parentName:"a"},"Connection")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"helperUrl")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string"))))),(0,o.kt)("h4",{id:"overrides"},"Overrides"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/account_creator.AccountCreator"},"AccountCreator"),".",(0,o.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/account_creator.AccountCreator#constructor"},"constructor")),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/account_creator.ts#L39"},"account_creator.ts:39")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"connection"},"connection"),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"connection"),": ",(0,o.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/connection.Connection"},(0,o.kt)("inlineCode",{parentName:"a"},"Connection"))),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/account_creator.ts#L36"},"account_creator.ts:36")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"helperurl"},"helperUrl"),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"helperUrl"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/account_creator.ts#L37"},"account_creator.ts:37")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"createaccount"},"createAccount"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"createAccount"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"newAccountId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"publicKey"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,o.kt)("p",null,"Creates an account using a helperUrl\nThis is ",(0,o.kt)("a",{parentName:"p",href:"https://helper.nearprotocol.com"},"hosted here")," or set up locally with the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nearprotocol/near-contract-helper"},"near-contract-helper")," repository"),(0,o.kt)("h4",{id:"parameters-1"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"newAccountId")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The name of the NEAR account to be created")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"publicKey")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/utils_key_pair.PublicKey"},(0,o.kt)("inlineCode",{parentName:"a"},"PublicKey"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"The public key from the masterAccount used to create this account")))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,o.kt)("h4",{id:"overrides-1"},"Overrides"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/account_creator.AccountCreator"},"AccountCreator"),".",(0,o.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/account_creator.AccountCreator#createaccount"},"createAccount")),(0,o.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/account_creator.ts#L52"},"account_creator.ts:52")))}m.isMDXComponent=!0}}]);