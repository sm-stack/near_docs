"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7665],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],c={id:"walletAccount",title:"Module: walletAccount",sidebar_label:"walletAccount",sidebar_position:0,custom_edit_url:null},s=void 0,i={unversionedId:"modules/walletAccount",id:"version-near-api-js@1.1.0/modules/walletAccount",title:"Module: walletAccount",description:"The classes in this module are used in conjunction with the BrowserLocalStorageKeyStore.",source:"@site/near-api-js_versioned_docs/version-near-api-js@1.1.0/modules/walletAccount.md",sourceDirName:"modules",slug:"/modules/walletAccount",permalink:"/near_docs/vi/tools/near-api-js/reference/modules/walletAccount",draft:!1,editUrl:null,tags:[],version:"near-api-js@1.1.0",sidebarPosition:0,frontMatter:{id:"walletAccount",title:"Module: walletAccount",sidebar_label:"walletAccount",sidebar_position:0,custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"validators",permalink:"/near_docs/vi/tools/near-api-js/reference/modules/validators"},next:{title:"MultisigDeleteRequestRejectionError",permalink:"/near_docs/vi/tools/near-api-js/reference/enums/account_multisig.MultisigDeleteRequestRejectionError"}},u={},p=[{value:"Classes",id:"classes",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The classes in this module are used in conjunction with the ",(0,o.kt)("a",{parentName:"p",href:"/near_docs/vi/tools/near-api-js/reference/classes/key_stores_browser_local_storage_key_store.BrowserLocalStorageKeyStore"},"BrowserLocalStorageKeyStore"),".\nThis module exposes two classes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/near_docs/vi/tools/near-api-js/reference/classes/walletAccount.WalletConnection"},"WalletConnection")," which redirects users to ",(0,o.kt)("a",{parentName:"li",href:"https://wallet.near.org/"},"NEAR Wallet")," for key management."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/near_docs/vi/tools/near-api-js/reference/classes/walletAccount.ConnectedWalletAccount"},"ConnectedWalletAccount")," is an ",(0,o.kt)("a",{parentName:"li",href:"/near_docs/vi/tools/near-api-js/reference/classes/account.Account"},"Account")," implementation that uses ",(0,o.kt)("a",{parentName:"li",href:"/near_docs/vi/tools/near-api-js/reference/classes/walletAccount.WalletConnection"},"WalletConnection")," to get keys")),(0,o.kt)("h2",{id:"classes"},"Classes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/near_docs/vi/tools/near-api-js/reference/classes/walletAccount.ConnectedWalletAccount"},"ConnectedWalletAccount")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/near_docs/vi/tools/near-api-js/reference/classes/walletAccount.WalletConnection"},"WalletConnection"))))}f.isMDXComponent=!0}}]);