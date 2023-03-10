"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9652],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=p(t),d=i,y=f["".concat(s,".").concat(d)]||f[d]||c[d]||a;return t?n.createElement(y,l(l({ref:r},u),{},{components:t})):n.createElement(y,l({ref:r},u))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=f;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5229:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=t(87462),i=t(63366),a=(t(67294),t(3905)),l=["components"],o={id:"utils_key_pair.Signature",title:"Interface: Signature",sidebar_label:"Signature",custom_edit_url:null},s=void 0,p={unversionedId:"interfaces/utils_key_pair.Signature",id:"version-near-api-js@1.1.0/interfaces/utils_key_pair.Signature",title:"Interface: Signature",description:"utils/keypair.Signature",source:"@site/near-api-js_versioned_docs/version-near-api-js@1.1.0/interfaces/utils_key_pair.Signature.md",sourceDirName:"interfaces",slug:"/interfaces/utils_key_pair.Signature",permalink:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/utils_key_pair.Signature",draft:!1,editUrl:null,tags:[],version:"near-api-js@1.1.0",frontMatter:{id:"utils_key_pair.Signature",title:"Interface: Signature",sidebar_label:"Signature",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"ViewStateResult",permalink:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.ViewStateResult"},next:{title:"ConnectionInfo",permalink:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/utils_web.ConnectionInfo"}},u={},c=[{value:"Properties",id:"properties",level:2},{value:"publicKey",id:"publickey",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"signature",id:"signature",level:3},{value:"Defined in",id:"defined-in-1",level:4}],f={toc:c};function d(e){var r=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/modules/utils_key_pair"},"utils/key_pair"),".Signature"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"publickey"},"publicKey"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"publicKey"),": ",(0,a.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/classes/utils_key_pair.PublicKey"},(0,a.kt)("inlineCode",{parentName:"a"},"PublicKey"))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/utils/key_pair.ts#L9"},"utils/key_pair.ts:9")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"signature"},"signature"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"signature"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8Array")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/utils/key_pair.ts#L8"},"utils/key_pair.ts:8")))}d.isMDXComponent=!0}}]);