"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8447],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=s,f=p["".concat(o,".").concat(m)]||p[m]||c[m]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},71504:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=r(87462),s=r(63366),a=(r(67294),r(3905)),i=["components"],l={id:"PromiseResult",title:"Enumeration: PromiseResult",sidebar_label:"PromiseResult",sidebar_position:0,custom_edit_url:null},o=void 0,u={unversionedId:"enums/PromiseResult",id:"version-near-sdk-js@0.7.0/enums/PromiseResult",title:"Enumeration: PromiseResult",description:"A Promise result in near can be one of:",source:"@site/near-sdk-js_versioned_docs/version-near-sdk-js@0.7.0/enums/PromiseResult.md",sourceDirName:"enums",slug:"/enums/PromiseResult",permalink:"/near_docs/vi/sdk/near-sdk-js/reference/enums/PromiseResult",draft:!1,editUrl:null,tags:[],version:"near-sdk-js@0.7.0",sidebarPosition:0,frontMatter:{id:"PromiseResult",title:"Enumeration: PromiseResult",sidebar_label:"PromiseResult",sidebar_position:0,custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"PromiseError",permalink:"/near_docs/vi/sdk/near-sdk-js/reference/enums/PromiseError"},next:{title:"AddAccessKey",permalink:"/near_docs/vi/sdk/near-sdk-js/reference/classes/AddAccessKey"}},d={},c=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Failed",id:"failed",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"NotReady",id:"notready",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Successful",id:"successful",level:3},{value:"Defined in",id:"defined-in-2",level:4}],p={toc:c};function m(e){var t=e.components,r=(0,s.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A Promise result in near can be one of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NotReady = 0 - the promise you are specifying is still not ready, not yet failed nor successful."),(0,a.kt)("li",{parentName:"ul"},"Successful = 1 - the promise has been successfully executed and you can retrieve the resulting value."),(0,a.kt)("li",{parentName:"ul"},"Failed = 2 - the promise execution has failed.")),(0,a.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,a.kt)("h3",{id:"failed"},"Failed"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"Failed")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"2")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-sdk-js/blob/2847870/packages/near-sdk-js/src/types/vm_types.ts#L19"},"near-sdk-js/packages/near-sdk-js/src/types/vm_types.ts:19")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"notready"},"NotReady"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"NotReady")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"0")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-sdk-js/blob/2847870/packages/near-sdk-js/src/types/vm_types.ts#L17"},"near-sdk-js/packages/near-sdk-js/src/types/vm_types.ts:17")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"successful"},"Successful"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"Successful")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"1")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-sdk-js/blob/2847870/packages/near-sdk-js/src/types/vm_types.ts#L18"},"near-sdk-js/packages/near-sdk-js/src/types/vm_types.ts:18")))}m.isMDXComponent=!0}}]);