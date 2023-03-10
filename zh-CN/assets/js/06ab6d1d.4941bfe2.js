"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4445],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,h=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(h,c(c({ref:t},p),{},{components:n})):r.createElement(h,c({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],i={id:"contract.ContractMethods",title:"Interface: ContractMethods",sidebar_label:"ContractMethods",custom_edit_url:null},s=void 0,l={unversionedId:"interfaces/contract.ContractMethods",id:"version-near-api-js@1.1.0/interfaces/contract.ContractMethods",title:"Interface: ContractMethods",description:"contract.ContractMethods",source:"@site/near-api-js_versioned_docs/version-near-api-js@1.1.0/interfaces/contract.ContractMethods.md",sourceDirName:"interfaces",slug:"/interfaces/contract.ContractMethods",permalink:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/contract.ContractMethods",draft:!1,editUrl:null,tags:[],version:"near-api-js@1.1.0",frontMatter:{id:"contract.ContractMethods",title:"Interface: ContractMethods",sidebar_label:"ContractMethods",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"ConnectConfig",permalink:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/connect.ConnectConfig"},next:{title:"NearConfig",permalink:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/near.NearConfig"}},p={},d=[{value:"Properties",id:"properties",level:2},{value:"changeMethods",id:"changemethods",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"viewMethods",id:"viewmethods",level:3},{value:"Defined in",id:"defined-in-1",level:4}],u={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/modules/contract"},"contract"),".ContractMethods"),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"changemethods"},"changeMethods"),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"changeMethods"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,o.kt)("p",null,"Methods that change state. These methods cost gas and require a signed transaction."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"See"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/account.Account#functioncall"},"functionCall")),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/contract.ts#L37"},"contract.ts:37")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"viewmethods"},"viewMethods"),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"viewMethods"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,o.kt)("p",null,"View methods do not require a signed transaction."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"See"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/account.Account#viewfunction"},"viewFunction")),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/contract.ts#L44"},"contract.ts:44")))}f.isMDXComponent=!0}}]);