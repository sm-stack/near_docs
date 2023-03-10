"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5502],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=i,v=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return t?n.createElement(v,o(o({ref:r},l),{},{components:t})):n.createElement(v,o({ref:r},l))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},69595:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],s={id:"providers_provider.ExecutionStatus",title:"Interface: ExecutionStatus",sidebar_label:"ExecutionStatus",custom_edit_url:null},p=void 0,c={unversionedId:"interfaces/providers_provider.ExecutionStatus",id:"version-near-api-js@1.1.0/interfaces/providers_provider.ExecutionStatus",title:"Interface: ExecutionStatus",description:"providers/provider.ExecutionStatus",source:"@site/near-api-js_versioned_docs/version-near-api-js@1.1.0/interfaces/providers_provider.ExecutionStatus.md",sourceDirName:"interfaces",slug:"/interfaces/providers_provider.ExecutionStatus",permalink:"/near_docs/tools/near-api-js/reference/interfaces/providers_provider.ExecutionStatus",draft:!1,editUrl:null,tags:[],version:"near-api-js@1.1.0",frontMatter:{id:"providers_provider.ExecutionStatus",title:"Interface: ExecutionStatus",sidebar_label:"ExecutionStatus",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"ExecutionOutcomeWithIdView",permalink:"/near_docs/tools/near-api-js/reference/interfaces/providers_provider.ExecutionOutcomeWithIdView"},next:{title:"FinalExecutionOutcome",permalink:"/near_docs/tools/near-api-js/reference/interfaces/providers_provider.FinalExecutionOutcome"}},l={},u=[{value:"Properties",id:"properties",level:2},{value:"Failure",id:"failure",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"SuccessReceiptId",id:"successreceiptid",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"SuccessValue",id:"successvalue",level:3},{value:"Defined in",id:"defined-in-2",level:4}],d={toc:u};function f(e){var r=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/near_docs/tools/near-api-js/reference/modules/providers_provider"},"providers/provider"),".ExecutionStatus"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"failure"},"Failure"),(0,a.kt)("p",null," ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"Failure"),": ",(0,a.kt)("a",{parentName:"p",href:"/near_docs/tools/near-api-js/reference/interfaces/providers_provider.ExecutionError"},(0,a.kt)("inlineCode",{parentName:"a"},"ExecutionError"))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L47"},"providers/provider.ts:47")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"successreceiptid"},"SuccessReceiptId"),(0,a.kt)("p",null," ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"SuccessReceiptId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L46"},"providers/provider.ts:46")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"successvalue"},"SuccessValue"),(0,a.kt)("p",null," ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"SuccessValue"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L45"},"providers/provider.ts:45")))}f.isMDXComponent=!0}}]);