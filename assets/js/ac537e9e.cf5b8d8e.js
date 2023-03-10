"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2972],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(r),k=a,u=m["".concat(l,".").concat(k)]||m[k]||c[k]||s;return r?n.createElement(u,i(i({ref:t},p),{},{components:r})):n.createElement(u,i({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<s;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},26692:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),i=["components"],o={id:"Transfer",title:"Class: Transfer",sidebar_label:"Transfer",sidebar_position:0,custom_edit_url:null},l=void 0,d={unversionedId:"classes/Transfer",id:"version-near-sdk-js@0.7.0/classes/Transfer",title:"Class: Transfer",description:"A transfer promise action.",source:"@site/near-sdk-js_versioned_docs/version-near-sdk-js@0.7.0/classes/Transfer.md",sourceDirName:"classes",slug:"/classes/Transfer",permalink:"/near_docs/sdk/near-sdk-js/reference/classes/Transfer",draft:!1,editUrl:null,tags:[],version:"near-sdk-js@0.7.0",sidebarPosition:0,frontMatter:{id:"Transfer",title:"Class: Transfer",sidebar_label:"Transfer",sidebar_position:0,custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"TextEncoder",permalink:"/near_docs/sdk/near-sdk-js/reference/classes/TextEncoder"},next:{title:"UnknownCurve",permalink:"/near_docs/sdk/near-sdk-js/reference/classes/UnknownCurve"}},p={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"amount",id:"amount",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Methods",id:"methods",level:2},{value:"add",id:"add",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-2",level:4}],m={toc:c};function k(e){var t=e.components,r=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"A transfer promise action."),(0,s.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/near_docs/sdk/near-sdk-js/reference/classes/PromiseAction"},(0,s.kt)("inlineCode",{parentName:"a"},"PromiseAction"))),(0,s.kt)("p",{parentName:"li"},"\u21b3 ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Transfer"))))),(0,s.kt)("h2",{id:"constructors"},"Constructors"),(0,s.kt)("h3",{id:"constructor"},"constructor"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"new Transfer"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"amount"),")"),(0,s.kt)("h4",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"amount")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"bigint")),(0,s.kt)("td",{parentName:"tr",align:"left"},"The amount of NEAR to tranfer.")))),(0,s.kt)("h4",{id:"overrides"},"Overrides"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/near_docs/sdk/near-sdk-js/reference/classes/PromiseAction"},"PromiseAction"),".",(0,s.kt)("a",{parentName:"p",href:"/near_docs/sdk/near-sdk-js/reference/classes/PromiseAction#constructor"},"constructor")),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/near/near-sdk-js/blob/2847870/packages/near-sdk-js/src/promise.ts#L190"},"near-sdk-js/packages/near-sdk-js/src/promise.ts:190")),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"amount"},"amount"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"amount"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"bigint")),(0,s.kt)("p",null,"The amount of NEAR to tranfer."),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/near/near-sdk-js/blob/2847870/packages/near-sdk-js/src/promise.ts#L190"},"near-sdk-js/packages/near-sdk-js/src/promise.ts:190")),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("h3",{id:"add"},"add"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"add"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"promiseIndex"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"void")),(0,s.kt)("p",null,"The method that describes how a promise action adds it's ",(0,s.kt)("em",{parentName:"p"},"action")," to the promise batch with the provided index."),(0,s.kt)("h4",{id:"parameters-1"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"promiseIndex")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"_")),(0,s.kt)("td",{parentName:"tr",align:"left"},"The index of the promise batch to attach the action to.")))),(0,s.kt)("h4",{id:"returns"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"overrides-1"},"Overrides"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/near_docs/sdk/near-sdk-js/reference/classes/PromiseAction"},"PromiseAction"),".",(0,s.kt)("a",{parentName:"p",href:"/near_docs/sdk/near-sdk-js/reference/classes/PromiseAction#add"},"add")),(0,s.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/near/near-sdk-js/blob/2847870/packages/near-sdk-js/src/promise.ts#L194"},"near-sdk-js/packages/near-sdk-js/src/promise.ts:194")))}k.isMDXComponent=!0}}]);