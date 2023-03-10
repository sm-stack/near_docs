"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5436],{3905:(e,t,r)=>{r.d(t,{Zo:()=>o,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},o=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),u=d(r),c=n,m=u["".concat(p,".").concat(c)]||u[c]||k[c]||i;return r?a.createElement(m,l(l({ref:t},o),{},{components:r})):a.createElement(m,l({ref:t},o))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var d=2;d<i;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},11637:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>s,metadata:()=>d,toc:()=>k});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),l=["components"],s={id:"utils_key_pair.KeyPairEd25519",title:"Class: KeyPairEd25519",sidebar_label:"KeyPairEd25519",custom_edit_url:null},p=void 0,d={unversionedId:"classes/utils_key_pair.KeyPairEd25519",id:"version-near-api-js@1.1.0/classes/utils_key_pair.KeyPairEd25519",title:"Class: KeyPairEd25519",description:"utils/keypair.KeyPairEd25519",source:"@site/near-api-js_versioned_docs/version-near-api-js@1.1.0/classes/utils_key_pair.KeyPairEd25519.md",sourceDirName:"classes",slug:"/classes/utils_key_pair.KeyPairEd25519",permalink:"/near_docs/tools/near-api-js/reference/classes/utils_key_pair.KeyPairEd25519",draft:!1,editUrl:null,tags:[],version:"near-api-js@1.1.0",frontMatter:{id:"utils_key_pair.KeyPairEd25519",title:"Class: KeyPairEd25519",sidebar_label:"KeyPairEd25519",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"KeyPair",permalink:"/near_docs/tools/near-api-js/reference/classes/utils_key_pair.KeyPair"},next:{title:"PublicKey",permalink:"/near_docs/tools/near-api-js/reference/classes/utils_key_pair.PublicKey"}},o={},k=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"publicKey",id:"publickey",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"secretKey",id:"secretkey",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"Methods",id:"methods",level:2},{value:"getPublicKey",id:"getpublickey",level:3},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"sign",id:"sign",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"toString",id:"tostring",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"verify",id:"verify",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"fromRandom",id:"fromrandom",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"fromString",id:"fromstring",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-8",level:4}],u={toc:k};function c(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near_docs/tools/near-api-js/reference/modules/utils_key_pair"},"utils/key_pair"),".KeyPairEd25519"),(0,i.kt)("p",null,"This class provides key pair functionality for Ed25519 curve:\ngenerating key pairs, encoding key pairs, signing and verifying."),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/near_docs/tools/near-api-js/reference/classes/utils_key_pair.KeyPair"},(0,i.kt)("inlineCode",{parentName:"a"},"KeyPair"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"KeyPairEd25519"))))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"new KeyPairEd25519"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"secretKey"),")"),(0,i.kt)("p",null,"Construct an instance of key pair given a secret key.\nIt's generally assumed that these are encoded in base58."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"secretKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"overrides"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near_docs/tools/near-api-js/reference/classes/utils_key_pair.KeyPair"},"KeyPair"),".",(0,i.kt)("a",{parentName:"p",href:"/near_docs/tools/near-api-js/reference/classes/utils_key_pair.KeyPair#constructor"},"constructor")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/utils/key_pair.ts#L113"},"utils/key_pair.ts:113")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"publickey"},"publicKey"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"publicKey"),": ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/tools/near-api-js/reference/classes/utils_key_pair.PublicKey"},(0,i.kt)("inlineCode",{parentName:"a"},"PublicKey"))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/utils/key_pair.ts#L105"},"utils/key_pair.ts:105")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"secretkey"},"secretKey"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"secretKey"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/utils/key_pair.ts#L106"},"utils/key_pair.ts:106")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"getpublickey"},"getPublicKey"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"getPublicKey"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/tools/near-api-js/reference/classes/utils_key_pair.PublicKey"},(0,i.kt)("inlineCode",{parentName:"a"},"PublicKey"))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near_docs/tools/near-api-js/reference/classes/utils_key_pair.PublicKey"},(0,i.kt)("inlineCode",{parentName:"a"},"PublicKey"))),(0,i.kt)("h4",{id:"overrides-1"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near_docs/tools/near-api-js/reference/classes/utils_key_pair.KeyPair"},"KeyPair"),".",(0,i.kt)("a",{parentName:"p",href:"/near_docs/tools/near-api-js/reference/classes/utils_key_pair.KeyPair#getpublickey"},"getPublicKey")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/utils/key_pair.ts#L148"},"utils/key_pair.ts:148")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sign"},"sign"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"sign"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"message"),"): ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/tools/near-api-js/reference/interfaces/utils_key_pair.Signature"},(0,i.kt)("inlineCode",{parentName:"a"},"Signature"))),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"message")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Uint8Array"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near_docs/tools/near-api-js/reference/interfaces/utils_key_pair.Signature"},(0,i.kt)("inlineCode",{parentName:"a"},"Signature"))),(0,i.kt)("h4",{id:"overrides-2"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near_docs/tools/near-api-js/reference/classes/utils_key_pair.KeyPair"},"KeyPair"),".",(0,i.kt)("a",{parentName:"p",href:"/near_docs/tools/near-api-js/reference/classes/utils_key_pair.KeyPair#sign"},"sign")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/utils/key_pair.ts#L135"},"utils/key_pair.ts:135")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tostring"},"toString"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"toString"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"overrides-3"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near_docs/tools/near-api-js/reference/classes/utils_key_pair.KeyPair"},"KeyPair"),".",(0,i.kt)("a",{parentName:"p",href:"/near_docs/tools/near-api-js/reference/classes/utils_key_pair.KeyPair#tostring"},"toString")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/utils/key_pair.ts#L144"},"utils/key_pair.ts:144")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"verify"},"verify"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"verify"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"message"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"signature"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"message")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Uint8Array"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"signature")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Uint8Array"))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"overrides-4"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near_docs/tools/near-api-js/reference/classes/utils_key_pair.KeyPair"},"KeyPair"),".",(0,i.kt)("a",{parentName:"p",href:"/near_docs/tools/near-api-js/reference/classes/utils_key_pair.KeyPair#verify"},"verify")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/utils/key_pair.ts#L140"},"utils/key_pair.ts:140")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fromrandom"},"fromRandom"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"fromRandom"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/tools/near-api-js/reference/classes/utils_key_pair.KeyPairEd25519"},(0,i.kt)("inlineCode",{parentName:"a"},"KeyPairEd25519"))),(0,i.kt)("p",null,"Generate a new random keypair."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const keyRandom = KeyPair.fromRandom();\nkeyRandom.publicKey\n// returns [PUBLIC_KEY]\n\nkeyRandom.secretKey\n// returns [SECRET_KEY]\n")),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near_docs/tools/near-api-js/reference/classes/utils_key_pair.KeyPairEd25519"},(0,i.kt)("inlineCode",{parentName:"a"},"KeyPairEd25519"))),(0,i.kt)("h4",{id:"overrides-5"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near_docs/tools/near-api-js/reference/classes/utils_key_pair.KeyPair"},"KeyPair"),".",(0,i.kt)("a",{parentName:"p",href:"/near_docs/tools/near-api-js/reference/classes/utils_key_pair.KeyPair#fromrandom"},"fromRandom")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/utils/key_pair.ts#L130"},"utils/key_pair.ts:130")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fromstring"},"fromString"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"fromString"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"encodedKey"),"): ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/tools/near-api-js/reference/classes/utils_key_pair.KeyPair"},(0,i.kt)("inlineCode",{parentName:"a"},"KeyPair"))),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"encodedKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near_docs/tools/near-api-js/reference/classes/utils_key_pair.KeyPair"},(0,i.kt)("inlineCode",{parentName:"a"},"KeyPair"))),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near_docs/tools/near-api-js/reference/classes/utils_key_pair.KeyPair"},"KeyPair"),".",(0,i.kt)("a",{parentName:"p",href:"/near_docs/tools/near-api-js/reference/classes/utils_key_pair.KeyPair#fromstring"},"fromString")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/utils/key_pair.ts#L85"},"utils/key_pair.ts:85")))}c.isMDXComponent=!0}}]);