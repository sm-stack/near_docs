"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5807],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>s});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),p=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=p(n),s=r,k=m["".concat(c,".").concat(s)]||m[s]||u[s]||l;return n?a.createElement(k,o(o({ref:e},d),{},{components:n})):a.createElement(k,o({ref:e},d))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35172:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var a,r=n(87462),l=n(63366),o=(n(67294),n(3905)),i=["components"],c={},p=void 0,d={unversionedId:"develop/contracts/environment/table-func.as",id:"develop/contracts/environment/table-func.as",title:"table-func.as",description:"| \ud568\uc218 \uc774\ub984               | SDK \uba54\uc11c\ub4dc                     | \uc124\uba85                                                            |",source:"@site/../docs/2.develop/contracts/environment/table-func.as.md",sourceDirName:"2.develop/contracts/environment",slug:"/develop/contracts/environment/table-func.as",permalink:"/near_docs/vi/develop/contracts/environment/table-func.as",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/contracts/environment/table-func.as.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"9 thg 3, 2023",frontMatter:{}},u={},m=[],s=(a="TableAsFunc",function(t){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}),k={toc:m};function f(t){var e=t.components,n=(0,l.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(s,{mdxType:"TableAsFunc"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\ud568\uc218 \uc774\ub984"),(0,o.kt)("th",{parentName:"tr",align:null},"SDK \uba54\uc11c\ub4dc"),(0,o.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SHA 256"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"context.sha256(value)")),(0,o.kt)("td",{parentName:"tr",align:null},"sha256\uc744 \uc0ac\uc6a9\ud558\uc5ec \ubc14\uc774\ud2b8\ub97c \ud574\uc2dc\ud569\ub2c8\ub2e4.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Keccak 256"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"context.keccak256(value)")),(0,o.kt)("td",{parentName:"tr",align:null},"keccak256\uc744 \uc0ac\uc6a9\ud558\uc5ec \ubc14\uc774\ud2b8\ub97c \ud574\uc2dc\ud569\ub2c8\ub2e4.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Keccak 512"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"context.keccak512(value)")),(0,o.kt)("td",{parentName:"tr",align:null},"keccak512\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubc14\uc774\ud2b8\ub97c \ud574\uc2dc\ud569\ub2c8\ub2e4.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Panic String"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"context.panic(message)")),(0,o.kt)("td",{parentName:"tr",align:null},"UTF-8 \uc778\ucf54\ub529 \uba54\uc2dc\uc9c0\ub85c \ud504\ub85c\uadf8\ub7a8 \uc2e4\ud589\uc744 \uc885\ub8cc\ud569\ub2c8\ub2e4.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Log String"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"context.log_utf8(message)")),(0,o.kt)("td",{parentName:"tr",align:null},"\ubb38\uc790\uc5f4 \uba54\uc2dc\uc9c0\ub97c \uae30\ub85d\ud569\ub2c8\ub2e4. \uc774 \uba54\uc2dc\uc9c0\ub294 \uccb4\uc778\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Validator Stake"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"context.validator_stake(account_id)")),(0,o.kt)("td",{parentName:"tr",align:null},"\uc8fc\uc5b4\uc9c4 \uacc4\uc815\uc5d0 \ub300\ud574 \ud604\uc7ac \uc9c0\ubd84\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. \uacc4\uc815\uc774 \ubc38\ub9ac\ub370\uc774\ud130\uac00 \uc544\ub2cc \uacbd\uc6b0 0\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Validator Total Stake"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"context.validator_total_stake()")),(0,o.kt)("td",{parentName:"tr",align:null},"\ud604\uc7ac \uc5d0\ud3ec\ud06c\uc5d0\uc11c \ubc38\ub9ac\ub370\uc774\ud130\uc758 \ucd1d \uc9c0\ubd84 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Account ID Validation"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"context.isValidAccountID(account_id)")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"accountId")," \ubb38\uc790\uc5f4\uc744 \uac80\uc99d\ud569\ub2c8\ub2e4."))))))}f.isMDXComponent=!0}}]);