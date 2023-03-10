"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5567],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),f=a,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},13189:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],c={id:"connect",title:"Module: connect",sidebar_label:"connect",sidebar_position:0,custom_edit_url:null},l=void 0,s={unversionedId:"modules/connect",id:"version-near-api-js@1.1.0/modules/connect",title:"Module: connect",description:"Connect to NEAR using the provided configuration.",source:"@site/near-api-js_versioned_docs/version-near-api-js@1.1.0/modules/connect.md",sourceDirName:"modules",slug:"/modules/connect",permalink:"/near_docs/vi/tools/near-api-js/reference/modules/connect",draft:!1,editUrl:null,tags:[],version:"near-api-js@1.1.0",sidebarPosition:0,frontMatter:{id:"connect",title:"Module: connect",sidebar_label:"connect",sidebar_position:0,custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"browserConnect",permalink:"/near_docs/vi/tools/near-api-js/reference/modules/browserConnect"},next:{title:"connection",permalink:"/near_docs/vi/tools/near-api-js/reference/modules/connection"}},p={},d=[{value:"Interfaces",id:"interfaces",level:2},{value:"Functions",id:"functions",level:2},{value:"connect",id:"connect",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],u={toc:d};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Connect to NEAR using the provided configuration."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/near_docs/vi/tools/near-api-js/reference/interfaces/connect.ConnectConfig#networkid"},"networkId")," and ",(0,o.kt)("a",{parentName:"p",href:"/near_docs/vi/tools/near-api-js/reference/interfaces/connect.ConnectConfig#nodeurl"},"nodeUrl")," are required."),(0,o.kt)("p",null,"To sign transactions you can also pass:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/near_docs/vi/tools/near-api-js/reference/interfaces/connect.ConnectConfig#keystore"},"keyStore")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/near_docs/vi/tools/near-api-js/reference/interfaces/connect.ConnectConfig#keypath"},"keyPath"))),(0,o.kt)("p",null,"If all three are passed they are prioritize in that order."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"See"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/near_docs/vi/tools/near-api-js/reference/interfaces/connect.ConnectConfig"},"ConnectConfig")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function initNear() {\n  const near = await connect({\n     networkId: 'testnet',\n     nodeUrl: 'https://rpc.testnet.near.org'\n  })\n}\n")),(0,o.kt)("h2",{id:"interfaces"},"Interfaces"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/near_docs/vi/tools/near-api-js/reference/interfaces/connect.ConnectConfig"},"ConnectConfig"))),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"connect"},"connect"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"connect"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"config"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"/near_docs/vi/tools/near-api-js/reference/classes/near.Near"},(0,o.kt)("inlineCode",{parentName:"a"},"Near")),">"),(0,o.kt)("p",null,"Initialize connection to Near network."),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"config")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/near_docs/vi/tools/near-api-js/reference/interfaces/connect.ConnectConfig"},(0,o.kt)("inlineCode",{parentName:"a"},"ConnectConfig")))))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"/near_docs/vi/tools/near-api-js/reference/classes/near.Near"},(0,o.kt)("inlineCode",{parentName:"a"},"Near")),">"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/connect.ts#L42"},"connect.ts:42")))}f.isMDXComponent=!0}}]);