"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7955],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},32754:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],i={id:"prerequisites",title:"\uc804\uc81c \uc870\uac74"},l=void 0,p={unversionedId:"develop/prerequisites",id:"develop/prerequisites",title:"\uc804\uc81c \uc870\uac74",description:"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uac1c\ubc1c\ud560 \ub54c Javascript\ub97c \uc0ac\uc6a9\ud558\uba74 Node.js\ub97c, Rust\ub97c \uc0ac\uc6a9\ud558\uba74 rust \ud234\uccb4\uc778\uc744 \uc124\uce58\ud574\uc57c \ud569\ub2c8\ub2e4.",source:"@site/../docs/2.develop/prerequisites.md",sourceDirName:"2.develop",slug:"/develop/prerequisites",permalink:"/near_docs/develop/prerequisites",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/prerequisites.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"Mar 9, 2023",frontMatter:{id:"prerequisites",title:"\uc804\uc81c \uc870\uac74"}},c={},u=[{value:"Developing Contracts in Rust",id:"developing-contracts-in-rust",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uac1c\ubc1c\ud560 \ub54c Javascript\ub97c \uc0ac\uc6a9\ud558\uba74 Node.js\ub97c, Rust\ub97c \uc0ac\uc6a9\ud558\uba74 rust \ud234\uccb4\uc778\uc744 \uc124\uce58\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"developing-contracts-in-rust"},"Developing Contracts in Rust"),(0,a.kt)("p",null,"Follow ",(0,a.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/book/ch01-01-installation.html"},"these instructions")," for setting up Rust. Then, add the ",(0,a.kt)("inlineCode",{parentName:"p"},"wasm32-unknown-unknown")," toolchain which enables compiling Rust to ",(0,a.kt)("a",{parentName:"p",href:"https://webassembly.org/"},"Web Assembly (wasm)"),", the low-level language used by the NEAR platform."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Get Rust in linux and MacOS\ncurl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh\nsource $HOME/.cargo/env\n\n# Add the wasm toolchain\nrustup target add wasm32-unknown-unknown\n")),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);