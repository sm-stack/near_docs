"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1012],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21569:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"basics",title:"Basic Instructions"},s="\uae30\ubcf8 \uc9c0\uce68",c={unversionedId:"sdk/rust/building/basics",id:"sdk/rust/building/basics",title:"Basic Instructions",description:"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \ub9b4\ub9ac\uc2a4 \ubc84\uc804\uc744 \ucef4\ud30c\uc77c\ud558\ub824\uba74 \ub2e4\uc74c\uc744 \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/../docs/sdk/rust/building/basic-build.md",sourceDirName:"sdk/rust/building",slug:"/sdk/rust/building/basics",permalink:"/near_docs/sdk/rust/building/basics",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/building/basic-build.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"Mar 9, 2023",frontMatter:{id:"basics",title:"Basic Instructions"},sidebar:"sdk",previous:{title:"\ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec",permalink:"/near_docs/sdk/rust/promises/deploy-contract"},next:{title:"\uc2e0\uc18d\ud55c \ud504\ub85c\ud1a0\ud0c0\uc774\ud551",permalink:"/near_docs/sdk/rust/building/prototyping"}},p={},u=[],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\uae30\ubcf8-\uc9c0\uce68"},"\uae30\ubcf8 \uc9c0\uce68"),(0,o.kt)("p",null,"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \ub9b4\ub9ac\uc2a4 \ubc84\uc804\uc744 \ucef4\ud30c\uc77c\ud558\ub824\uba74 \ub2e4\uc74c\uc744 \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build --target wasm32-unknown-unknown --release\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\uc704\uc758 ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," \uba85\ub839\uc740 WebAssembly ",(0,o.kt)("inlineCode",{parentName:"p"},".wasm")," \ud30c\uc77c\uc744 \uc0dd\uc131\ud558\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," \ud50c\ub798\uadf8\ub97c \uc124\uc815\ud569\ub2c8\ub2e4.")),(0,o.kt)("p",null,"\uc774\uc81c \ud504\ub85c\uc81d\ud2b8 \ub514\ub809\ud130\ub9ac\uc5d0 \uba87 \uac00\uc9c0 \ucd94\uac00 \ud56d\ubaa9\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 Cargo.lock  \u27f5 created during build to lock dependencies\n\u251c\u2500\u2500 Cargo.toml\n\u251c\u2500\u2500 src\n\u2502  \u2514\u2500\u2500 lib.rs\n\u2514\u2500\u2500 target      \u27f5 created during build, holds the compiled wasm\n")),(0,o.kt)("h1",{id:"\ube4c\ub4dc-\ubc0f-\ud50c\ub798\uadf8"},"\ube4c\ub4dc \ubc0f \ud50c\ub798\uadf8"),(0,o.kt)("p",null,"Cargo.toml \ud30c\uc77c\uc758 \ub2e4\uc74c \ud50c\ub798\uadf8\ub97c \uc0ac\uc6a9\ud558\uc5ec \ube4c\ub4dc \uc544\ud2f0\ud329\ud2b8\ub97c \ucd5c\uc801\ud654\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. \ub2e4\uc911 \ucee8\ud2b8\ub799\ud2b8 \ube4c\ub4dc\ub97c \uc218\ud589\ud558\ub294 \uacbd\uc6b0, \ud504\ub85c\uc81d\ud2b8 \ub8e8\ud2b8\uc5d0 \uc788\ub294 Cargo.toml\uc5d0 \uc774\ub7ec\ud55c \uc124\uc815\uc744 \ud3ec\ud568\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'[profile.release]\ncodegen-units = 1\n# Tell `rustc` to optimize for small code size.\nopt-level = "z"\nlto = true\ndebug = false\npanic = "abort"\n# Opt into extra safety checks on arithmetic operations https://stackoverflow.com/a/64136471/249801\noverflow-checks = true\n')),(0,o.kt)("p",null,"\uc704\uc758 \uba85\ub839\uc740 \ubcf8\uc9c8\uc801\uc73c\ub85c \ud2b9\uc218 \ud50c\ub798\uadf8\ub97c \uc124\uc815\ud558\uace0, \uacb0\uacfc\ub85c \ub098\uc624\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},".wasm"),"\ud30c\uc77c\uc744 \ucd5c\uc801\ud654\ud569\ub2c8\ub2e4. \ud558\ub8e8\uac00 \ub05d\ub098\uba74, \uc774\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo build --release")," \uba85\ub839\uc744 \uc0ac\uc6a9\uc790 \uc815\uc758\ud560 \uc218 \uc788\uac8c\ub054 \ud574\uc904 \uac83\uc785\ub2c8\ub2e4."),(0,o.kt)("h1",{id:"\ub9de\ucda4-\ud50c\ub798\uadf8"},"\ub9de\ucda4 \ud50c\ub798\uadf8"),(0,o.kt)("p",null,"\ube4c\ub4dc\uc5d0 \uc0ac\uc6a9\uc790 \uc9c0\uc815 \ud50c\ub798\uadf8\ub97c \ucd94\uac00\ud558\ub824\ub294 \uacbd\uc6b0, \uc774 \uc608\uc81c\uc5d0 \uc124\uba85\ub41c \ub300\ub85c \ube4c\ub4dc \ud50c\ub798\uadf8\ub97c ",(0,o.kt)("inlineCode",{parentName:"p"},"ProjectFolder/.cargo/config.toml"),"\uc5d0 \ucd94\uac00\ud558\uc5ec \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[target.wasm32-unknown-unknown]\nrustflags = ["-C", "link-arg=-s"]\n')),(0,o.kt)("p",null,"\uc804\uccb4 \ube4c\ub4dc \uc635\uc158 \uc138\ud2b8\ub294 ",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/reference/config.html%EC%97%90%EC%84%9C"},"https://doc.rust-lang.org/cargo/reference/config.html\uc5d0\uc11c")," \uc561\uc138\uc2a4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/near-sdk-rs/blob/05e4539a8f3db86dd43b768ee9660dd4c8e7ea5c/examples/fungible-token/.cargo/config.toml"},"\uc5ec\uae30"),"\uc5d0\uc11c \uc608\ub97c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}m.isMDXComponent=!0}}]);