"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1011],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(t),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||s;return t?r.createElement(m,a(a({ref:n},l),{},{components:t})):r.createElement(m,a({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},69120:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=t(87462),o=t(63366),s=(t(67294),t(3905)),a=["components"],i={sidebar_position:3},c="\uceec\ub809\uc158 \uc911\ucca9(Nesting)",u={unversionedId:"sdk/rust/contract-structure/nesting",id:"sdk/rust/contract-structure/nesting",title:"\uceec\ub809\uc158 \uc911\ucca9(Nesting)",description:"\uace0\uc720 \uc811\ub450\uc0ac\uc5d0 \ub300\ud55c \uae30\uc874 \uc811\uadfc\ubc95",source:"@site/../docs/sdk/rust/contract-structure/nesting.md",sourceDirName:"sdk/rust/contract-structure",slug:"/sdk/rust/contract-structure/nesting",permalink:"/near_docs/zh-CN/sdk/rust/contract-structure/nesting",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/contract-structure/nesting.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"2023\u5e743\u67089\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sdk",previous:{title:"\uceec\ub809\uc158",permalink:"/near_docs/zh-CN/sdk/rust/contract-structure/collections"},next:{title:"\ud37c\ube14\ub9ad \uba54\uc11c\ub4dc \uc790\ub8cc\ud615",permalink:"/near_docs/zh-CN/sdk/rust/contract-interface/public-methods"}},l={},d=[{value:"\uace0\uc720 \uc811\ub450\uc0ac\uc5d0 \ub300\ud55c \uae30\uc874 \uc811\uadfc\ubc95",id:"\uace0\uc720-\uc811\ub450\uc0ac\uc5d0-\ub300\ud55c-\uae30\uc874-\uc811\uadfc\ubc95",level:2},{value:"\uc601\uad6c \uceec\ub809\uc158\uc5d0 \ub300\ud55c \uace0\uc720 \uc811\ub450\uc0ac \uc0dd\uc131",id:"\uc601\uad6c-\uceec\ub809\uc158\uc5d0-\ub300\ud55c-\uace0\uc720-\uc811\ub450\uc0ac-\uc0dd\uc131",level:2},{value:"\uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uae30 \uc26c\uc6b4 \ud328\ud134",id:"\uc624\ub958\uac00-\ubc1c\uc0dd\ud558\uae30-\uc26c\uc6b4-\ud328\ud134",level:2}],p={toc:d};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\uceec\ub809\uc158-\uc911\ucca9nesting"},"\uceec\ub809\uc158 \uc911\ucca9(Nesting)"),(0,s.kt)("h2",{id:"\uace0\uc720-\uc811\ub450\uc0ac\uc5d0-\ub300\ud55c-\uae30\uc874-\uc811\uadfc\ubc95"},"\uace0\uc720 \uc811\ub450\uc0ac\uc5d0 \ub300\ud55c \uae30\uc874 \uc811\uadfc\ubc95"),(0,s.kt)("p",null,"\uc6d0\ub798\ub294 \ubc14\uc774\ud2b8 \ubca1\ud130\ub85c \ubcc0\ud658\ub41c \uc9e7\uc740 \ud55c \uae00\uc790 \uc811\ub450\uc0ac\ub97c \uc0ac\uc6a9\ud558\uc5ec, \uc0dd\uc131\uc790(constructor)\uc5d0\uc11c \uc811\ub450\uc0ac\ub97c \ud558\ub4dc\ucf54\ub529\ud558\uc600\uc2b5\ub2c8\ub2e4. \uc911\ucca9 \uceec\ub809\uc158\uc744 \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0 \uc811\ub450\uc0ac\ub97c \uc218\ub3d9\uc73c\ub85c \uad6c\uc131\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};\nuse near_sdk::collections::{UnorderedMap, UnorderedSet};\nuse near_sdk::{near_bindgen, AccountId};\n\n#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize)]\npub struct Contract {\n    pub accounts: UnorderedMap<AccountId, UnorderedSet<String>>,\n}\n\nimpl Default for Contract {\n    fn default() -> Self {\n        Self {\n            accounts: UnorderedMap::new(b"t"),\n        }\n    }\n}\n\n#[near_bindgen]\nimpl Contract {\n    pub fn get_tokens(&self, account_id: &AccountId) -> UnorderedSet<String> {\n        let tokens = self.accounts.get(account_id).unwrap_or_else(|| {\n            // Constructing a unique prefix for a nested UnorderedSet from a concatenation\n            // of a prefix and a hash of the account id.\n            let prefix: Vec<u8> = [\n                b"s".as_slice(),\n                &near_sdk::env::sha256_array(account_id.as_bytes()),\n            ]\n            .concat();\n            UnorderedSet::new(prefix)\n        });\n        tokens\n    }\n}\n')),(0,s.kt)("h2",{id:"\uc601\uad6c-\uceec\ub809\uc158\uc5d0-\ub300\ud55c-\uace0\uc720-\uc811\ub450\uc0ac-\uc0dd\uc131"},"\uc601\uad6c \uceec\ub809\uc158\uc5d0 \ub300\ud55c \uace0\uc720 \uc811\ub450\uc0ac \uc0dd\uc131"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/sdk/rust/contract-structure/collections"},"\uc774 \ubb38\uc11c")," \ub610\ub294 ",(0,s.kt)("a",{parentName:"p",href:"https://docs.rs/near-sdk/latest/near_sdk/collections"},"Rust \ubb38\uc11c"),"\uc5d0\uc11c \uc601\uad6c \uceec\ub809\uc158\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc77d\uc5b4\ubcf4\uc138\uc694."),(0,s.kt)("p",null,"\uc601\uad6c \uceec\ub809\uc158\uc758 \ubaa8\ub4e0 \uc778\uc2a4\ud134\uc2a4\uc5d0\ub294 \uace0\uc720\ud55c \uc2a4\ud1a0\ub9ac\uc9c0 \uc811\ub450\uc0ac\uac00 \ud544\uc694\ud569\ub2c8\ub2e4. \uc811\ub450\uc0ac\ub294 \uc601\uad6c \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\uae30 \uc704\ud55c \ub0b4\ubd80 \ud0a4\ub97c \uc0dd\uc131\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ub0b4\ubd80 \ud0a4\ub294 \ucda9\ub3cc(",(0,s.kt)("inlineCode",{parentName:"p"},"STATE")," key\uc640\uc758 \ucda9\ub3cc \ud3ec\ud568)\uc744 \ubc29\uc9c0\ud558\uae30 \uc704\ud574, \uace0\uc720\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,s.kt)("p",null,"\ucee8\ud2b8\ub799\ud2b8\uac00 \ubcf5\uc7a1\ud574\uc9c0\uba74, \ubaa8\ub450 \uae30\ubcf8 \uad6c\uc870\uc758 \uc77c\ubd80\uac00 \uc544\ub2c8\ub77c \ud558\uc704 \uad6c\uc870 \ub610\ub294 \uc911\ucca9\ub41c \uceec\ub809\uc158\uc758 \uc77c\ubd80\ub85c \uc5ec\ub7ec \ub2e4\ub978 \uceec\ub809\uc158\uc774 \uc874\uc7ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubaa8\ub450 \uace0\uc720\ud55c \uc811\ub450\uc0ac\uac00 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,s.kt)("p",null,"\uc2a4\ud1a0\ub9ac\uc9c0 \uc811\ub450\uc0ac \ubc0f \ud0a4\ub97c \ucd94\uc801\ud558\uae30 \uc704\ud574 ",(0,s.kt)("inlineCode",{parentName:"p"},"enum"),"\uc744 \ub3c4\uc785\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c borsh \uc9c1\ub82c\ud654\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubaa8\ub4e0 \uceec\ub809\uc158\uc5d0 \ub300\ud574 \uace0\uc720\ud55c \uc811\ub450\uc0ac\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4. Borsh \uc9c1\ub82c\ud654\ub97c \uc0ac\uc6a9\ud558\uba74 \uc5f4\uac70\ud615(enum)\uc774 1\ubc14\uc774\ud2b8\ub9cc \uc0ac\uc6a9\ud558\uae30 \ub54c\ubb38\uc5d0, \uc218\ub3d9\uc73c\ub85c \uc811\ub450\uc0ac\ub97c \uad6c\uc131\ud558\ub294 \uac83\ub9cc\ud07c \ud6a8\uc728\uc801\uc785\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};\nuse near_sdk::collections::{UnorderedMap, UnorderedSet};\nuse near_sdk::{env, near_bindgen, AccountId, BorshStorageKey, CryptoHash};\n\n#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize)]\npub struct Contract {\n    pub accounts: UnorderedMap<AccountId, UnorderedSet<String>>,\n}\n\nimpl Default for Contract {\n    fn default() -> Self {\n        Self {\n            accounts: UnorderedMap::new(StorageKeys::Accounts),\n        }\n    }\n}\n\n#[derive(BorshStorageKey, BorshSerialize)]\npub enum StorageKeys {\n    Accounts,\n    SubAccount { account_hash: CryptoHash },\n}\n\n#[near_bindgen]\nimpl Contract {\n    pub fn get_tokens(&self, account_id: &AccountId) -> UnorderedSet<String> {\n        let tokens = self.accounts.get(account_id).unwrap_or_else(|| {\n            UnorderedSet::new(StorageKeys::SubAccount {\n                account_hash: env::sha256_array(account_id.as_bytes()),\n            })\n        });\n        tokens\n    }\n}\n")),(0,s.kt)("h2",{id:"\uc624\ub958\uac00-\ubc1c\uc0dd\ud558\uae30-\uc26c\uc6b4-\ud328\ud134"},"\uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uae30 \uc26c\uc6b4 \ud328\ud134"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/sdk/rust/contract-structure/collections#error-prone-patterns"},"\uceec\ub809\uc158 \uc139\uc158"),"\uc5d0\uc11c \uc5b8\uae09\ud55c \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uae30 \uc26c\uc6b4 \ud328\ud134\uc744 \ud655\uc7a5\ud558\uc5ec, \uc911\ucca9 \uceec\ub809\uc158\uc744 \uc0ac\uc6a9\ud560 \ub54c \uc774\ub7ec\ud55c \ubc84\uadf8\uac00 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc5b4\ub5bb\uac8c \uc27d\uac8c \ub3c4\uc785\ub420 \uc218 \uc788\ub294\uc9c0 \uc5fc\ub450\uc5d0 \ub450\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4."),(0,s.kt)("p",null,"\ub354 \ub113\uc740 \ub9e5\ub77d\uc5d0\uc11c \ubc1c\uc0dd\ud560 \uc218 \uc788\ub294 \uba87 \uac00\uc9c0 \ubb38\uc81c\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/near/near-sdk-rs/issues/560"},"https://github.com/near/near-sdk-rs/issues/560")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/near/near-sdk-rs/issues/703"},"https://github.com/near/near-sdk-rs/issues/703"))),(0,s.kt)("p",null,"\ub2e4\uc74c \uc0ac\ub840\ub294 \uc790\ub8cc\ud615 \uc218\uc900\uc5d0\uc11c \uc81c\ud55c\ud560 \uc218 \uc5c6\ub294, \uac00\uc7a5 \uc77c\ubc18\uc801\uc73c\ub85c \ubc1c\uc0dd\ud558\ub294 \ubc84\uadf8\uc785\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'use near_sdk::borsh::{self, BorshSerialize};\nuse near_sdk::collections::{LookupMap, UnorderedSet};\nuse near_sdk::BorshStorageKey;\n\n#[derive(BorshStorageKey, BorshSerialize)]\npub enum StorageKey {\n    Root,\n    Nested(u8),\n}\n\n// Bug 1: Nested collection is removed without clearing it\'s own state.\nlet mut root: LookupMap<u8, UnorderedSet<String>> = LookupMap::new(StorageKey::Root);\nlet mut nested = UnorderedSet::new(StorageKey::Nested(1));\nnested.insert(&"test".to_string());\nroot.insert(&1, &nested);\n\n// Remove inserted collection without clearing it\'s sub-state.\nlet mut _removed = root.remove(&1).unwrap();\n\n// This line would fix the bug:\n// _removed.clear();\n\n// This collection will now be in an inconsistent state if an empty UnorderedSet is put\n// in the same entry of `root`.\nroot.insert(&1, &UnorderedSet::new(StorageKey::Nested(1)));\nlet n = root.get(&1).unwrap();\nassert!(n.is_empty());\nassert!(n.contains(&"test".to_string()));\n\n// Bug 2 (only relevant for `near_sdk::collections`, not `near_sdk::store`): Nested\n// collection is modified without updating the collection itself in the outer collection.\n//\n// This is fixed at the type level in `near_sdk::store` because the values are modified\n// in-place and guarded by regular Rust borrow-checker rules.\nroot.insert(&2, &UnorderedSet::new(StorageKey::Nested(2)));\n\nlet mut nested = root.get(&2).unwrap();\nnested.insert(&"some value".to_string());\n\n// This line would fix the bug:\n// root.insert(&2, &nested);\n\nlet n = root.get(&2).unwrap();\nassert!(n.is_empty());\nassert!(n.contains(&"some value".to_string()));\n')))}f.isMDXComponent=!0}}]);