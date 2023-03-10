"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2936],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94197:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"utils",title:"\uc720\ud2f8\ub9ac\ud2f0",sidebar_label:"\uc720\ud2f8\ub9ac\ud2f0"},c=void 0,l={unversionedId:"tools/near-api-js/utils",id:"tools/near-api-js/utils",title:"\uc720\ud2f8\ub9ac\ud2f0",description:"NEAR => yoctoNEAR",source:"@site/../docs/4.tools/near-api-js/naj-utils.md",sourceDirName:"4.tools/near-api-js",slug:"/tools/near-api-js/utils",permalink:"/near_docs/vi/tools/near-api-js/utils",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/4.tools/near-api-js/naj-utils.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"9 thg 3, 2023",frontMatter:{id:"utils",title:"\uc720\ud2f8\ub9ac\ud2f0",sidebar_label:"\uc720\ud2f8\ub9ac\ud2f0"},sidebar:"\uac1c\ubc1c",previous:{title:"\ucee8\ud2b8\ub799\ud2b8",permalink:"/near_docs/vi/tools/near-api-js/contract"},next:{title:"FAQ",permalink:"/near_docs/vi/tools/near-api-js/faq"}},p={},u=[{value:"NEAR =&gt; yoctoNEAR",id:"near--yoctonear",level:3},{value:"YoctoNEAR =&gt; NEAR",id:"yoctonear--near",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"near--yoctonear"},"NEAR => yoctoNEAR"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// converts NEAR amount into yoctoNEAR (10^-24)\n\nconst { utils } = nearAPI;\nconst amountInYocto = utils.format.parseNearAmount("1");\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://near.github.io/near-api-js/modules/utils_format#parsenearamount"},(0,a.kt)("span",{class:"typedoc-icon typedoc-icon-function"})," ",(0,a.kt)("inlineCode",{parentName:"a"},"parseNearAmount")," \ud568\uc218")),(0,a.kt)("h3",{id:"yoctonear--near"},"YoctoNEAR => NEAR"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// converts yoctoNEAR (10^-24) amount into NEAR\n\nconst { utils } = nearAPI;\nconst amountInNEAR = utils.format.formatNearAmount("1000000000000000000000000");\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://near.github.io/near-api-js/modules/utils_format#formatnearamount"},(0,a.kt)("span",{class:"typedoc-icon typedoc-icon-function"})," ",(0,a.kt)("inlineCode",{parentName:"a"},"formatNearAmount")," \ud568\uc218")))}d.isMDXComponent=!0}}]);