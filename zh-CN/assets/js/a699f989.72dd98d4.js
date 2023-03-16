"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4473],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return a?r.createElement(k,l(l({ref:t},c),{},{components:a})):r.createElement(k,l({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},66376:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),l=["components"],o={id:"contract-size",title:"\ucee8\ud2b8\ub799\ud2b8 \ud06c\uae30 \ucd95\uc18c"},p="\ucee8\ud2b8\ub799\ud2b8 \ud06c\uae30 \ucd95\uc18c",s={unversionedId:"sdk/rust/contract-size",id:"sdk/rust/contract-size",title:"\ucee8\ud2b8\ub799\ud2b8 \ud06c\uae30 \ucd95\uc18c",description:"\uc870\uc5b8 \ubc0f \uc608\uc2dc",source:"@site/../docs/sdk/rust/reduce-size.md",sourceDirName:"sdk/rust",slug:"/sdk/rust/contract-size",permalink:"/near_docs/zh-CN/sdk/rust/contract-size",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/reduce-size.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"2023\u5e743\u67089\u65e5",frontMatter:{id:"contract-size",title:"\ucee8\ud2b8\ub799\ud2b8 \ud06c\uae30 \ucd95\uc18c"},sidebar:"sdk",previous:{title:"\ubaa8\ubc94 \uc0ac\ub840",permalink:"/near_docs/zh-CN/sdk/rust/best-practices"},next:{title:"JavaScript SDK\uc5d0 \ub300\ud574",permalink:"/near_docs/zh-CN/sdk/js/introduction"}},c={},m=[{value:"\uc870\uc5b8 \ubc0f \uc608\uc2dc",id:"\uc870\uc5b8-\ubc0f-\uc608\uc2dc",level:2},{value:"\uc791\uc740 \uc2b9\ub9ac",id:"\uc791\uc740-\uc2b9\ub9ac",level:2},{value:"\ud50c\ub798\uadf8 \uc0ac\uc6a9",id:"\ud50c\ub798\uadf8-\uc0ac\uc6a9",level:3},{value:"\ub9e4\ub2c8\ud398\uc2a4\ud2b8\uc5d0\uc11c <code>rlib</code> \uc81c\uac70",id:"\ub9e4\ub2c8\ud398\uc2a4\ud2b8\uc5d0\uc11c-rlib-\uc81c\uac70",level:3},{value:"\uc800\uc218\uc900 \uc811\uadfc \ubc29\uc2dd",id:"\uc800\uc218\uc900-\uc811\uadfc-\ubc29\uc2dd",level:2}],u={toc:m};function d(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\ucee8\ud2b8\ub799\ud2b8-\ud06c\uae30-\ucd95\uc18c"},"\ucee8\ud2b8\ub799\ud2b8 \ud06c\uae30 \ucd95\uc18c"),(0,i.kt)("h2",{id:"\uc870\uc5b8-\ubc0f-\uc608\uc2dc"},"\uc870\uc5b8 \ubc0f \uc608\uc2dc"),(0,i.kt)("p",null,"\uc774 \ud398\uc774\uc9c0\ub294 \ucf54\ub4dc \uac00\ub3c5\uc131\uc744 \ud76c\uc0dd\ud558\uba74\uc11c \ucee8\ud2b8\ub799\ud2b8 \ud06c\uae30\ub97c \ud06c\uac8c \uc904\uc774\ub824\ub294 \ud558\uc704 \uc218\uc900 \uac1c\ub150\uc5d0 \uc775\uc219\ud55c \uac1c\ubc1c\uc790\ub97c \uc704\ud574 \ub9cc\ub4e4\uc5b4\uc84c\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc774 \uc811\uadfc \ubc29\uc2dd\uc774 \ub3c4\uc6c0\uc774 \ub420 \uc218 \uc788\ub294 \uba87 \uac00\uc9c0 \uc77c\ubc18\uc801\uc778 \uc2dc\ub098\ub9ac\uc624\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uacc4\uc815 \uad00\ub9ac\uc640 \uad00\ub828\ub41c \ucee8\ud2b8\ub799\ud2b8"),(0,i.kt)("li",{parentName:"ul"},"\ud329\ud1a0\ub9ac\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubc30\ud3ec\ub41c \ucee8\ud2b8\ub799\ud2b8"),(0,i.kt)("li",{parentName:"ul"},"NEAR\uc758 EVM\uacfc \uac19\uc740 \ud5a5\ud6c4 \ubc1c\uc804 \uc0ac\ud56d")),(0,i.kt)("p",null,"\ucef4\ud30c\uc77c \uc2dc \ucee8\ud2b8\ub799\ud2b8 \ud06c\uae30\uc5d0 \uc6d0\uce58 \uc54a\ub294 \ubc14\uc774\ud2b8\ub97c \ucd94\uac00\ud560 \uc218 \uc788\ub294 \uba87 \uac00\uc9c0 \ud56d\ubaa9\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub4e4 \uc911 \uc77c\ubd80\ub294 \ub2e4\ub978 \uc811\uadfc \ubc29\uc2dd\uc73c\ub85c \ub354 \uc27d\uac8c \uad50\uccb4\ub420 \uc218 \uc788\ub294 \ubc18\uba74, \ub2e4\ub978 \uc77c\ubd80\ub294 \uc2dc\uc2a4\ud15c \ud638\ucd9c\uc5d0 \ub300\ud55c \ub354 \ub9ce\uc740 \ub0b4\ubd80 \uc9c0\uc2dd\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"\uc791\uc740-\uc2b9\ub9ac"},"\uc791\uc740 \uc2b9\ub9ac"),(0,i.kt)("h3",{id:"\ud50c\ub798\uadf8-\uc0ac\uc6a9"},"\ud50c\ub798\uadf8 \uc0ac\uc6a9"),(0,i.kt)("p",null,"\ucee8\ud2b8\ub799\ud2b8\ub97c \ucef4\ud30c\uc77c\ud560 \ub54c, ",(0,i.kt)("inlineCode",{parentName:"p"},"-C link-arg=-s")," \ud50c\ub798\uadf8\ub97c Rust \ucef4\ud30c\uc77c\ub7ec\uc5d0 \uc804\ub2ec\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"RUSTFLAGS='-C link-arg=-s' cargo build --target wasm32-unknown-unknown --release\n")),(0,i.kt)("p",null,"\ub2e4\uc74c\uc740 \ub300\ubd80\ubd84\uc758 \uc608\uc81c \ub0b4 ",(0,i.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"\uc5d0 \uc0ac\uc6a9\ud558\ub294 \ub9e4\uac1c\ubcc0\uc218\uc785\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[profile.release]\ncodegen-units = 1\nopt-level = "s"\nlto = true\ndebug = false\npanic = "abort"\noverflow-checks = true\n')),(0,i.kt)("p",null,"\ub354 \uc791\uc740 \ubc14\uc774\ub108\ub9ac\ub97c \uc0dd\uc131\ud558\ub294\uc9c0 \ud655\uc778\ud558\uae30 \uc704\ud574, ",(0,i.kt)("inlineCode",{parentName:"p"},'opt-level = "z"')," \ub300\uc2e0 ",(0,i.kt)("inlineCode",{parentName:"p"},'opt-level = "s"'),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc2e4\ud5d8\ud574 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,i.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/reference/profiles.html#opt-level"},"Cargo Book Profiles")," \uc139\uc158\uc744 \ucc38\uc870\ud558\uc138\uc694. \uc774 ",(0,i.kt)("a",{parentName:"p",href:"https://rustwasm.github.io/book/reference/code-size.html#tell-llvm-to-optimize-for-size-instead-of-speed"},".wasm \ud06c\uae30 \ucd95\uc18c")," \uc790\ub8cc\ub97c \ucc38\uc870\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"\ub9e4\ub2c8\ud398\uc2a4\ud2b8\uc5d0\uc11c-rlib-\uc81c\uac70"},"\ub9e4\ub2c8\ud398\uc2a4\ud2b8\uc5d0\uc11c ",(0,i.kt)("inlineCode",{parentName:"h3"},"rlib")," \uc81c\uac70"),(0,i.kt)("p",null,"\ud544\uc694\ud55c \uacbd\uc6b0\uac00 \uc544\ub2c8\uba74 \ub9e4\ub2c8\ud398\uc2a4\ud2b8(",(0,i.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),")\uc5d0 ",(0,i.kt)("inlineCode",{parentName:"p"},"rlib"),"\uac00 \ud3ec\ud568\ub418\uc9c0 \uc54a\ub3c4\ub85d \ud569\ub2c8\ub2e4. \uc77c\ubd80 NEAR \uc608\uc81c\uc5d0\uc11c\ub294 \uc774\ub97c \ud3ec\ud568\ud569\ub2c8\ub2e4."),(0,i.kt)("admonition",{title:"\ubd88\ud544\uc694\ud55c \ube14\ub86f \ucd94\uac00",type:"caution"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[lib]\ncrate-type = ["cdylib", "rlib"]\n'))),(0,i.kt)("p",null,"  \uc774\ub97c \ub2e4\uc74c\uacfc \uac19\uc774 \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[lib]\ncrate-type = ["cdylib"]\n'))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Rust SDK\ub97c \uc0ac\uc6a9\ud560 \ub54c, \uae30\ubcf8 JSON \uc9c1\ub82c\ud654\ub97c \uc7ac\uc815\uc758\ud558\uc5ec \ub300\uc2e0 ",(0,i.kt)("a",{parentName:"p",href:"https://borsh.io"},"Borsh"),"\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uacfc \uc608\uc81c\ub294 ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/sdk/rust/contract-interface/serialization-interface#overriding-serialization-protocol-default"},"\uc774 \ud398\uc774\uc9c0"),"\ub97c \ucc38\uc870\ud558\uc138\uc694.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"assertion \ub610\ub294 \uac00\ub4dc\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0, ",(0,i.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/macro.assert.html"},(0,i.kt)("inlineCode",{parentName:"a"},"assert!")),", ",(0,i.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/macro.assert_eq.html"},(0,i.kt)("inlineCode",{parentName:"a"},"assert_eq!")),", \ub610\ub294 ",(0,i.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/macro.assert_ne.html"},(0,i.kt)("inlineCode",{parentName:"a"},"assert_ne!"))," \uac19\uc740 \ud45c\uc900 ",(0,i.kt)("inlineCode",{parentName:"p"},"assert")," \ub9e4\ud06c\ub85c\ub97c \uc0ac\uc6a9\ud558\uc9c0 \ub9c8\uc138\uc694. \uc774\ub97c \uc0ac\uc6a9\ud55c\ub2e4\uba74, \uc624\ub958\uc758 \uc904 \ubc88\ud638\uc640 \uad00\ub828\ub41c \uc815\ubcf4\uc758 \ud06c\uae30\uac00 \ucee4\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,i.kt)("inlineCode",{parentName:"p"},"unwrap"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"expect"),", \uadf8\ub9ac\uace0 Rust\uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},"panic!()")," \ub9e4\ud06c\ub85c\uc5d0\ub3c4 \uc720\uc0ac\ud55c \ubb38\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",{parentName:"li"}," \ud45c\uc900 assertion \uc608\uc2dc:"),(0,i.kt)("p",{parentName:"li"}," :::caution \ubd88\ud544\uc694\ud55c \ube14\ub86f \ucd94\uac00"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(contract_owner, predecessor_account, "ERR_NOT_OWNER");\n')),(0,i.kt)("p",{parentName:"li"}," :::"),(0,i.kt)("p",{parentName:"li"}," \uc774\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \uc218\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",{parentName:"li"}," :::tip"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'if contract_owner != predecessor_account {\n  env::panic(b"ERR_NOT_OWNER");\n}\n')),(0,i.kt)("p",{parentName:"li"}," :::"),(0,i.kt)("p",{parentName:"li"}," ",(0,i.kt)("inlineCode",{parentName:"p"},"expect")," \uc81c\uac70 \uc608\uc2dc:"),(0,i.kt)("p",{parentName:"li"}," :::caution \ubd88\ud544\uc694\ud55c \ube14\ub86f \ucd94\uac00"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let owner_id = self.owner_by_id.get(&token_id).expect("Token not found");\n')),(0,i.kt)("p",{parentName:"li"}," :::"),(0,i.kt)("p",{parentName:"li"},"\uc774\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \uc4f8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",{parentName:"li"}," :::tip"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'fn expect_token_found<T>(option: Option<T>) -> T {\n  option.unwrap_or_else(|| env::panic_str("Token not found"))\n}\nlet owner_id = expect_token_found(self.owner_by_id.get(&token_id));  \n')),(0,i.kt)("p",{parentName:"li"}," :::"),(0,i.kt)("p",{parentName:"li"}," \ud45c\uc900 ",(0,i.kt)("inlineCode",{parentName:"p"},"panic!()")," \ubcc0\uacbd \uc608\uc2dc:"),(0,i.kt)("p",{parentName:"li"}," :::caution \ubd88\ud544\uc694\ud55c \ube14\ub86f \ucd94\uac00"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'panic!("ERR_MSG_HERE"); \n')),(0,i.kt)("p",{parentName:"li"}," :::"),(0,i.kt)("p",{parentName:"li"}," \uc774\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \uc4f8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),(0,i.kt)("p",{parentName:"li"}," :::tip"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'env::panic_str("ERR_MSG_HERE");  \n')),(0,i.kt)("p",{parentName:"li"}," :::"))),(0,i.kt)("h2",{id:"\uc800\uc218\uc900-\uc811\uadfc-\ubc29\uc2dd"},"\uc800\uc218\uc900 \uc811\uadfc \ubc29\uc2dd"),(0,i.kt)("p",null,"\ucd5c\uc18c \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ub300\ud55c ",(0,i.kt)("inlineCode",{parentName:"p"},"no_std")," \uc811\uadfc \ubc29\uc2dd\uc740 \ub2e4\uc74c \uc608\ub97c \ucc38\uc870\ud558\uc138\uc694."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/near/nearcore/tree/1e7c6613f65c23f87adf2c92e3d877f4ffe666ea/runtime/near-test-contracts/tiny-contract-rs"},"\uc791\uc740 \ucee8\ud2b8\ub799\ud2b8")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ilblackdragon/near-eth-gateway/blob/master/proxy/src/lib.rs"},"NEAR ETH \uac8c\uc774\ud2b8\uc6e8\uc774")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/Hy4VBSCqnsE"},"\uad00\ub828 Youtube \ube44\ub514\uc624")," : \uc5ec\uae30\uc11c\ub294 Eugene\uc774 ",(0,i.kt)("inlineCode",{parentName:"li"},"no_std")," \ubaa8\ub4dc\uc5d0\uc11c\uc758 \ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4. \uc774\uc5d0 \ub300\ud55c \ucf54\ub4dc \uc608\uc2dc\ub294 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/near/core-contracts/pull/88"},"\uc5ec\uae30"),"\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/austinabell/nesdie/tree/main/examples"},(0,i.kt)("inlineCode",{parentName:"a"},"nesdie")," \ud504\ub85c\uc81d\ud2b8 \uc0ac\uc6a9 \uc608\uc2dc")),(0,i.kt)("li",{parentName:"ul"},"Aurora\ub294 ",(0,i.kt)("a",{parentName:"li",href:"https://crates.io/crates/rjson"},"rjson"),"\uc744 \uac00\ubcbc\uc6b4 JSON \uc9c1\ub82c\ud654 \ud06c\ub808\uc774\ud2b8\ub85c \uc0ac\uc6a9\ud558\uc5ec \uc131\uacf5\uc744 \uac70\ub450\uc5c8\uc2b5\ub2c8\ub2e4. \uc774\ub294 \ud604\uc7ac Rust SDK\uc640 \ud568\uaed8 \ud328\ud0a4\uc9d5\ub41c ",(0,i.kt)("a",{parentName:"li",href:"https://crates.io/crates/serde"},"serde"),"\ubcf4\ub2e4 \uc791\uc740 \uacf5\uac04\uc744 \ucc28\uc9c0\ud569\ub2c8\ub2e4. Aurora \ub808\ud37c\uc9c0\ud1a0\ub9ac\uc5d0\uc11c ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/aurora-is-near/aurora-engine/blob/65a1d11fcd16192cc1bda886c62005c603189a24/src/json.rs#L254"},"rjson\uc758 \uc608\uc2dc"),"\ub97c \ucc38\uc870\ud558\uc138\uc694. \uad6c\ud604 \uc138\ubd80 \uc815\ubcf4\ub294 \ub3c5\uc790\uac00 \uc218\uc9d1\ud574\uc57c \ud558\uba70, \uc5ec\uae30\uc5d0\uc11c \uc124\uba85\ud558\uc9c0\ub294 \uc54a\uaca0\uc2b5\ub2c8\ub2e4. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/austinabell/nesdie/blob/bb6beb77e32cd54077ac54bf028f262a9dfb6ad0/examples/multisig/src/utils/json/vector.rs#L26-L30"},"\uc774 nesdie \uc608\uc81c"),"\ub294 \ub610\ud55c ",(0,i.kt)("a",{parentName:"li",href:"https://crates.io/crates/miniserde"},"miniserde \ud06c\ub808\uc774\ud2b8"),"\ub97c \uc0ac\uc6a9\ud558\uace0, \uc774\ub294 Rust SDK\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uae30\ub85c \uc120\ud0dd\ud55c \uc0ac\ub78c\ub4e4\uc774 \uace0\ub824\ud574\uc57c \ud560 \ub610 \ub2e4\ub978 \uc635\uc158\uc785\ub2c8\ub2e4.")),(0,i.kt)("admonition",{title:"\uc2dc\uc2a4\ud15c \ud638\ucd9c\uc5d0 \ub300\ud55c \uc815\ubcf4",type:"note"},(0,i.kt)("details",null,(0,i.kt)("summary",null,"\ud3bc\uccd0\uc11c ",(0,i.kt)("code",null,"sys.rs"),"\uc5d0\uc11c \uc0ac\uc6a9 \uac00\ub2a5\ud55c \ud56d\ubaa9 \ubcf4\uae30"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near/near-sdk-rs/blob/master/near-sdk/src/environment/sys.rs\n")))))}d.isMDXComponent=!0}}]);