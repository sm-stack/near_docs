"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4595],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],p={sidebar_position:2},s="$NEAR \uc804\uc1a1",l={unversionedId:"sdk/rust/promises/token-tx",id:"sdk/rust/promises/token-tx",title:"$NEAR \uc804\uc1a1",description:"\uc5ec\ub7ec \uac00\uc9c0 \uc774\uc720\ub85c \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ud1a0\ud070\uc744 \ubcf4\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/../docs/sdk/rust/promises/token-tx.md",sourceDirName:"sdk/rust/promises",slug:"/sdk/rust/promises/token-tx",permalink:"/near_docs/vi/sdk/rust/promises/token-tx",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/promises/token-tx.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"9 thg 3, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sdk",previous:{title:"Promises: Introduction",permalink:"/near_docs/vi/sdk/rust/promises/intro"},next:{title:"\uacc4\uc815 \uc0dd\uc131",permalink:"/near_docs/vi/sdk/rust/promises/create-account"}},c={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"near-\uc804\uc1a1"},"$NEAR \uc804\uc1a1"),(0,o.kt)("p",null,"\uc5ec\ub7ec \uac00\uc9c0 \uc774\uc720\ub85c \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ud1a0\ud070\uc744 \ubcf4\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ucee8\ud2b8\ub799\ud2b8\ub294 ",(0,o.kt)("a",{parentName:"li",href:"https://nomicon.io/Standards/StorageManagement.html"},"\uc2a4\ud1a0\ub9ac\uc9c0 \ud45c\uc900"),"\uacfc \uac19\uc740 \uac83\uc744 \uc0ac\uc6a9\ud558\uba70, \ub4f1\ub85d \ucde8\uc18c \uc2dc \uc0ac\uc6a9\uc790\uc5d0\uac8c \ubcf4\uc99d\uae08\uc744 \ubc18\ud658\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790\ub294 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc218\uc218\ub8cc\ub97c \uc9c0\ubd88\ud558\uace0, \ucee8\ud2b8\ub799\ud2b8\ub294 \ub098\uc911\uc5d0 \uc774\ub7ec\ud55c \uc218\uc218\ub8cc\ub97c \uad00\ub9ac\uc790\uc5d0\uac8c \uc9c0\ubd88\ud558\uac70\ub098, \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc7ac\ubc30\ud3ec\ud558\uac70\ub098, \uc0ac\uc6a9\uc790\uac00 \ud22c\ud45c\ud558\ub294 \uc6d0\uc778\uc5d0 \ub300\ud574 \uc9c0\ubd88\ud569\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ul"},"\uae30\ud0c0 \ub4f1\ub4f1")),(0,o.kt)("p",null,"\ube14\ub85d\uccb4\uc778\uc740 \uc6b0\ub9ac\uc5d0\uac8c \ud504\ub85c\uadf8\ub798\ubc0d \uac00\ub2a5\ud55c \ub3c8\uc744 \uc81c\uacf5\ud558\uba70, \uc5ec\uae30\uc11c \ud575\uc2ec\uc740 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uac00 \ud1a0\ud070\uc744 \ubcf4\ub0b4\ub294 \uae30\ub2a5\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"NEAR\ub294 \uc774\ub97c \uc27d\uac8c \ub9cc\ub4ed\ub2c8\ub2e4. NEAR \ud1a0\ud070 \uc804\uc1a1\uc740 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ubcf4\ub0bc \uc218 \uc788\ub294 \uac00\uc7a5 \uac04\ub2e8\ud55c \ud2b8\ub79c\uc7ad\uc158\uc785\ub2c8\ub2e4. \ud544\uc694\ud55c \uac83\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let amount: u128 = 1_000_000_000_000_000_000_000_000; // 1 $NEAR as yoctoNEAR\nlet account_id: AccountId = "example.near".parse().unwrap();\n\nPromise::new(account_id).transfer(amount);\n')),(0,o.kt)("p",null,"\uc804\uccb4 \ucee8\ud2b8\ub799\ud2b8 \ubc0f \ud568\uc218 \ud638\ucd9c\uc758 \ub9e5\ub77d\uc5d0\uc11c, \uc774\ub294 \ub2e4\uc74c\uacfc \uac19\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"use near_sdk::{json_types::U128, near_bindgen, AccountId, Promise};\n\n#[near_bindgen]\npub struct Contract {}\n\n#[near_bindgen]\nimpl Contract {\n    pub fn pay(amount: U128, to: AccountId) -> Promise {\n        Promise::new(to).transfer(amount.0)\n    }\n}\n")),(0,o.kt)("p",null,"\uc774 \uc911 \ub300\ubd80\ubd84\uc740 \uc774\ubbf8 \uc775\uc219\ud560 \uac83\uc785\ub2c8\ub2e4 - imports, ",(0,o.kt)("a",{parentName:"p",href:"/near_docs/vi/sdk/rust/contract-structure/near-bindgen"},(0,o.kt)("inlineCode",{parentName:"a"},"near_bindgen"))," \uc124\uc815 , ",(0,o.kt)("a",{parentName:"p",href:"/near_docs/vi/sdk/rust/contract-interface/serialization-interface"},"borsh")," \ub4f1\uc744 \ud3ec\ud568\ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uc804\uc1a1 \uc790\uccb4\uc640 \uad00\ub828\ub41c \uba87 \uac00\uc9c0 \ud765\ubbf8\ub85c\uc6b4 \uc138\ubd80 \uc815\ubcf4\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"U128"),"(\ub300\ubb38\uc790 ",(0,o.kt)("inlineCode",{parentName:"p"},"U"),"): \uc5ec\uae30\uc5d0 \uc815\uc758\ub41c ",(0,o.kt)("inlineCode",{parentName:"p"},"pay")," \uba54\uc11c\ub4dc\ub294 JSON\uc744 \uc785\ub825\uc73c\ub85c \ubc1b\uc544\ub4e4\uc774\uace0, JS\uc758 \uc22b\uc790\ub294 ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER"},(0,o.kt)("inlineCode",{parentName:"a"},"2^53-1"),"\ubcf4\ub2e4 \ud074 \uc218 \uc5c6\uc73c\ubbc0\ub85c"),", JSON\uc744 JS\ub85c \uc5ed\uc9c1\ub82c\ud654\ud558\ub294 \uac83\uacfc\uc758 \ud638\ud658\uc131\uc744 \uc704\ud574 \uc815\uc218\ub97c 10\uc9c4\uc218 \ubb38\uc790\uc5f4\ub85c \uc9c1\ub82c\ud654\ud569\ub2c8\ub2e4. ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer")," \uba54\uc11c\ub4dc\uac00 ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Yocto-"},"yocto"),"NEAR \ub2e8\uc704\ub85c \uc22b\uc790\ub97c \ubc1b\uae30 \ub54c\ubb38\uc5d0, ",(0,o.kt)("inlineCode",{parentName:"p"},"2^53-1"),"\ubcf4\ub2e4 \ud6e8\uc52c \ub354 \ud070 \uc22b\uc790\uac00 \ud544\uc694\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",{parentName:"li"},"\ud568\uc218\uac00 \uc785\ub825\uc73c\ub85c ",(0,o.kt)("inlineCode",{parentName:"p"},"U128"),"\uc744 \ubc1b\uc73c\uba74, \ud638\ucd9c\uc790\uac00 \uc22b\uc790\ub97c \ubb38\uc790\uc5f4\ub85c \uc9c0\uc815\ud574\uc57c \ud568\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. near-sdk-rs\ub294 \uc774\ub97c ",(0,o.kt)("inlineCode",{parentName:"p"},"U128")," \uc790\ub8cc\ud615\uc73c\ub85c \ubcc0\ud658\ud558\uc5ec U128 Rust\uc758 \uae30\ubcf8 ",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/primitive.u128.html"},(0,o.kt)("inlineCode",{parentName:"a"},"u128")),"\ub85c \ub798\ud551\ud569\ub2c8\ub2e4. \uae30\ubcf8 ",(0,o.kt)("inlineCode",{parentName:"p"},"u128"),"\uc740 ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer(amount.0)"),"\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},".0"),"\uc73c\ub85c \uac80\uc0c9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"AccountId"),": \uc774\ub294 \uc81c\uacf5\ub41c \ubb38\uc790\uc5f4\uc774 \uc62c\ubc14\ub978 \ud615\uc2dd\uc758 NEAR \uacc4\uc815 ID\uc778\uc9c0 \uc790\ub3d9\uc73c\ub85c \ud655\uc778\ud558\uace0, \uadf8\ub807\uc9c0 \uc54a\uc740 \uacbd\uc6b0 \uc720\uc6a9\ud55c \uc624\ub958\uc640 \ud568\uaed8 \ud328\ub2c9\ud569\ub2c8\ub2e4.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," \ubc18\ud658 : \uc774\ub97c \ud1b5\ud574 NEAR \uc775\uc2a4\ud50c\ub85c\ub7ec, near-cli, near-api-js \ubc0f \uae30\ud0c0 \ub3c4\uad6c\uac00 \uc804\uccb4 \ud2b8\ub79c\uc7ad\uc158 \uccb4\uc778\uc774 \uc131\uacf5\ud588\ub294\uc9c0 \uc5ec\ubd80\ub97c \uc62c\ubc14\ub974\uac8c \uacb0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud568\uc218\uac00 ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"\ub97c \ubc18\ud658\ud558\uc9c0 \uc54a\uc73c\uba74, near-cli\uc640 \uac19\uc740 \ub3c4\uad6c\ub294 \ud568\uc218 \ud638\ucd9c \uc9c1\ud6c4\uc5d0 \uc774\ub97c \ubc18\ud658\ud560 \uac83\uc785\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer"),"\uac00 \uc2e4\ud328\ud558\ub354\ub77c\ub3c4, \ud568\uc218 \ud638\ucd9c\uc740 \uc131\uacf5\ud55c \uac83\uc73c\ub85c \uac04\uc8fc\ub429\ub2c8\ub2e4. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near-examples/xcc-advanced"},"\uc5ec\uae30"),"\uc5d0\uc11c \uc774 \ub3d9\uc791\uc758 \uc608\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,o.kt)("p",null,"near-cli\ub97c \uc0ac\uc6a9\ud558\uba74, \ub204\uad70\uac00 \ub2e4\uc74c\uacfc \uac19\uc740 \ud638\ucd9c\ub85c \uc774 \ud568\uc218\ub97c \ud638\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'near call $CONTRACT pay \'{"amount": "1000000000000000000000000", "to": "example.near"}\' --accountId benjiman.near\n')))}d.isMDXComponent=!0}}]);