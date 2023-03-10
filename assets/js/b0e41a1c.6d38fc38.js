"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9270],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>s});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=d(n),s=a,k=u["".concat(p,".").concat(s)]||u[s]||m[s]||l;return n?r.createElement(k,o(o({ref:e},c),{},{components:n})):r.createElement(k,o({ref:e},c))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10272:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>d,default:()=>N,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var r,a=n(87462),l=n(63366),o=(n(67294),n(3905)),i=["components"],p={},d=void 0,c={unversionedId:"develop/contracts/environment/table.rs",id:"develop/contracts/environment/table.rs",title:"table.rs",description:"| \ubcc0\uc218 \uc774\ub984          | SDK \ubcc0\uc218                    | \uc124\uba85                                                            |",source:"@site/../docs/2.develop/contracts/environment/table.rs.md",sourceDirName:"2.develop/contracts/environment",slug:"/develop/contracts/environment/table.rs",permalink:"/near_docs/develop/contracts/environment/table.rs",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/contracts/environment/table.rs.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"Mar 9, 2023",frontMatter:{}},m={},u=[],s=(r="TableRs",function(t){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}),k={toc:u};function N(t){var e=t.components,n=(0,l.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(s,{mdxType:"TableRs"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\ubcc0\uc218 \uc774\ub984"),(0,o.kt)("th",{parentName:"tr",align:null},"SDK \ubcc0\uc218"),(0,o.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Predecessor"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"env::predecessor_account_id()")),(0,o.kt)("td",{parentName:"tr",align:null},"\uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud55c \uacc4\uc815 ID")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Current Account"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"env::current_account_id()")),(0,o.kt)("td",{parentName:"tr",align:null},"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \uacc4\uc815 ID")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Signer"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"env::signer_account_id()")),(0,o.kt)("td",{parentName:"tr",align:null},"\uc2e4\ud589\ub41c \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc11c\uba85\ud55c \uacc4\uc815 ID")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Attached Deposit"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"env::attached_deposit()")),(0,o.kt)("td",{parentName:"tr",align:null},"Predecessor(\uc804\uc784\uc790)\uac00 \ud638\ucd9c\uc5d0 \ucca8\ubd80\ud55c NEAR\uc758 \uc591")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Account Balance"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"env::account_balance()")),(0,o.kt)("td",{parentName:"tr",align:null},"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \uc794\uace0(\ucca8\ubd80 \uae08\uc561 \ud3ec\ud568)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Prepaid Gas"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"env::prepaid_gas()")),(0,o.kt)("td",{parentName:"tr",align:null},"\uc2e4\ud589 \uac00\ub2a5\ud55c \uac00\uc2a4 \uc591")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Timestamp"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"env::block_timestamp()")),(0,o.kt)("td",{parentName:"tr",align:null},"\ud604\uc7ac \ud0c0\uc784\uc2a4\ud0ec\ud504(1970\ub144 1\uc6d4 1\uc77c 0:00:00 UTC \uc774\ud6c4\ubd80\ud130\uc758 \ub098\ub178\ucd08 \uc218)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Current Epoch"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"env::epoch_height()")),(0,o.kt)("td",{parentName:"tr",align:null},"\ube14\ub85d\uccb4\uc778\uc758 \ud604\uc7ac \uc5d0\ud3ec\ud06c")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Block Index"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"env::block_index()")),(0,o.kt)("td",{parentName:"tr",align:null},"\ud604\uc7ac \ube14\ub85d \uc778\ub371\uc2a4 (\ube14\ub85d \ub192\uc774)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Storage Used"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"env::storage_usage()")),(0,o.kt)("td",{parentName:"tr",align:null},"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ud558\uace0 \uc788\ub294 \uc2a4\ud1a0\ub9ac\uc9c0(\ubc14\uc774\ud2b8 \ub2e8\uc704)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Storage Byte Cost"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"env::storage_byte_cost()")),(0,o.kt)("td",{parentName:"tr",align:null},"\ubc14\uc774\ud2b8\ub2f9 \ud604\uc7ac \uc2a4\ud1a0\ub9ac\uc9c0 \ube44\uc6a9(yoctoNEAR \ub2e8\uc704)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Used Gas"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"env::used_gas()")),(0,o.kt)("td",{parentName:"tr",align:null},"\uc2e4\ud589\uc5d0 \uc0ac\uc6a9\ub41c \uac00\uc2a4\uc758 \uc591")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Signer Public Key"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"env::signer_account_pk()")),(0,o.kt)("td",{parentName:"tr",align:null},"\ubc1c\uc2e0\uc790 \uacf5\uac1c \ud0a4")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Account Locked Balance"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"env::account_locked_balance()")),(0,o.kt)("td",{parentName:"tr",align:null},"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ub0b4 \uc7a0\uae34 \uc794\uace0"))))))}N.isMDXComponent=!0}}]);