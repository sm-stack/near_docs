"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8448],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),k=a,m=d["".concat(o,".").concat(k)]||d[k]||c[k]||l;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90228:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>k,frontMatter:()=>p,metadata:()=>s,toc:()=>c});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],p={id:"serialization",title:"\uc9c1\ub82c\ud654\uc5d0 \ub300\ud55c \ucc38\uace0 \uc0ac\ud56d"},o=void 0,s={unversionedId:"develop/contracts/serialization",id:"develop/contracts/serialization",title:"\uc9c1\ub82c\ud654\uc5d0 \ub300\ud55c \ucc38\uace0 \uc0ac\ud56d",description:"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub294 \ubcf5\uc7a1\ud55c \ub370\uc774\ud130\ub97c \uac04\ub2e8\ud55c \ubc29\ubc95\uc73c\ub85c \uc804\ub2ec\ud558\ub294 \ub3d9\uc2dc\uc5d0, \uc774\ub7ec\ud55c \ub370\uc774\ud130\ub97c \ud6a8\uc728\uc801\uc73c\ub85c \uc77d\uace0 \uc0c1\ud0dc\uc5d0 \uc800\uc7a5\ud560 \uc218 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4.",source:"@site/../docs/2.develop/contracts/serialization.md",sourceDirName:"2.develop/contracts",slug:"/develop/contracts/serialization",permalink:"/near_docs/vi/develop/contracts/serialization",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/contracts/serialization.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"9 thg 3, 2023",frontMatter:{id:"serialization",title:"\uc9c1\ub82c\ud654\uc5d0 \ub300\ud55c \ucc38\uace0 \uc0ac\ud56d"},sidebar:"\uac1c\ubc1c",previous:{title:"\u2705 \uccb4\ud06c\ub9ac\uc2a4\ud2b8",permalink:"/near_docs/vi/develop/contracts/security/checklist"},next:{title:"\uc18c\uac1c",permalink:"/near_docs/vi/develop/testing/introduction"}},u={},c=[{value:"\uc9c1\ub82c\ud654 \ud615\uc2dd \uac1c\uc694",id:"\uc9c1\ub82c\ud654-\ud615\uc2dd-\uac1c\uc694",level:2},{value:"JSON: \uac1d\uccb4\ub97c \ubb38\uc790\uc5f4\ub85c",id:"json-\uac1d\uccb4\ub97c-\ubb38\uc790\uc5f4\ub85c",level:3},{value:"\ud2b9\uc9d5",id:"\ud2b9\uc9d5",level:4},{value:"\uc608\uc2dc",id:"\uc608\uc2dc",level:4},{value:"Borsh: \uac1d\uccb4\ub97c \ubc14\uc774\ud2b8\ub85c",id:"borsh-\uac1d\uccb4\ub97c-\ubc14\uc774\ud2b8\ub85c",level:3},{value:"\ud2b9\uc9d5",id:"\ud2b9\uc9d5-1",level:4},{value:"\uc608\uc2dc",id:"\uc608\uc2dc-1",level:4},{value:"\uc785\ub825 \ubc0f \ucd9c\ub825 \uc9c1\ub82c\ud654",id:"\uc785\ub825-\ubc0f-\ucd9c\ub825-\uc9c1\ub82c\ud654",level:2},{value:"\uc608\uc2dc",id:"\uc608\uc2dc-2",level:4},{value:"\ub370\uc774\ud130 \uc218\uc2e0",id:"\ub370\uc774\ud130-\uc218\uc2e0",level:4},{value:"\ub370\uc774\ud130 \ubc18\ud658",id:"\ub370\uc774\ud130-\ubc18\ud658",level:4},{value:"Borsh: \uc0c1\ud0dc \uc9c1\ub82c\ud654",id:"borsh-\uc0c1\ud0dc-\uc9c1\ub82c\ud654",level:2},{value:"\uc608\uc2dc",id:"\uc608\uc2dc-3",level:4},{value:"\ubc30\ud3ec \uc2dc \ube48 \uc0c1\ud0dc",id:"\ubc30\ud3ec-\uc2dc-\ube48-\uc0c1\ud0dc",level:4},{value:"\uc0c1\ud0dc \ucd08\uae30\ud654",id:"\uc0c1\ud0dc-\ucd08\uae30\ud654",level:4},{value:"\uc0c1\ud0dc \uc218\uc815",id:"\uc0c1\ud0dc-\uc218\uc815",level:4},{value:"\uc5ed\uc9c1\ub82c\ud654 \uc624\ub958",id:"\uc5ed\uc9c1\ub82c\ud654-\uc624\ub958",level:3}],d={toc:c};function k(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub294 ",(0,l.kt)("strong",{parentName:"p"},"\ubcf5\uc7a1\ud55c \ub370\uc774\ud130\ub97c \uac04\ub2e8\ud55c \ubc29\ubc95\uc73c\ub85c \uc804\ub2ec"),"\ud558\ub294 \ub3d9\uc2dc\uc5d0, \uc774\ub7ec\ud55c \ub370\uc774\ud130\ub97c \ud6a8\uc728\uc801\uc73c\ub85c ",(0,l.kt)("strong",{parentName:"p"},"\uc77d\uace0 \uc0c1\ud0dc\uc5d0 \uc800\uc7a5"),"\ud560 \uc218 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc989, \uac04\ub2e8\ud55c \ud1b5\uc2e0\uacfc \ud6a8\uc728\uc801\uc778 \uc800\uc7a5\uc774\ub77c\ub294 \ubaa9\uc801\uc744 \ub2ec\uc131\ud558\uae30 \uc704\ud574 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub294 \ub370\uc774\ud130\ub97c \ub354 \uac04\ub2e8\ud55c \ubc29\uc2dd\uc73c\ub85c \ubcc0\ud615\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\ubcf5\uc7a1\ud55c \uac1d\uccb4\ub97c \ub354 \ub2e8\uc21c\ud55c \ub2e8\uc77c \uac12"),"\uc73c\ub85c \ubcc0\ud658\ud558\ub294 \uc774 \ud504\ub85c\uc138\uc2a4\ub97c ",(0,l.kt)("strong",{parentName:"p"},"\uc9c1\ub82c\ud654"),"\ub77c\uace0 \ud569\ub2c8\ub2e4. NEAR\ub294 ",(0,l.kt)("a",{parentName:"p",href:"https://www.json.org/json-en.html"},"JSON"),"\uacfc ",(0,l.kt)("a",{parentName:"p",href:"https://borsh.io/"},"Borsh"),"\uc758 \ub450 \uac00\uc9c0 \uc9c1\ub82c\ud654 \ud615\uc2dd\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://www.json.org/json-en.html"},"JSON"),"\uc740 \uba54\uc11c\ub4dc \ud638\ucd9c \uc911 \ucee8\ud2b8\ub799\ud2b8\uc758 \uc785\ub825/\ucd9c\ub825\uc744 \uc9c1\ub82c\ud654\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://borsh.io/"},"Borsh"),"\ub294 \ucee8\ud2b8\ub799\ud2b8\uc758 \uc0c1\ud0dc\ub97c \uc9c1\ub82c\ud654\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\uc9c1\ub82c\ud654-\ud615\uc2dd-\uac1c\uc694"},"\uc9c1\ub82c\ud654 \ud615\uc2dd \uac1c\uc694"),(0,l.kt)("p",null,"\ub450 \uc9c1\ub82c\ud654 \ud615\uc2dd\uc5d0 \ub300\ud55c \uac04\ub7b5\ud55c \uac1c\uc694\uc640 \uc7a5\ub2e8\uc810, \uadf8\ub9ac\uace0 \uc9c1\ub82c\ud654\uac00 \uc5b4\ub5bb\uac8c \ubcf4\uc774\ub294\uc9c0\uc5d0 \ub300\ud55c \uc608\uc2dc\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("hr",{class:"subsection"}),(0,l.kt)("h3",{id:"json-\uac1d\uccb4\ub97c-\ubb38\uc790\uc5f4\ub85c"},(0,l.kt)("a",{parentName:"h3",href:"https://www.json.org/json-en.html"},"JSON"),": \uac1d\uccb4\ub97c \ubb38\uc790\uc5f4\ub85c"),(0,l.kt)("h4",{id:"\ud2b9\uc9d5"},"\ud2b9\uc9d5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc790\uccb4 \uc124\uba85 \ud615\uc2dd"),(0,l.kt)("li",{parentName:"ul"},"JavaScript\uc640\uc758 \uc190\uc26c\uc6b4 \uc0c1\ud638 \uc6b4\uc6a9\uc131"),(0,l.kt)("li",{parentName:"ul"},"\uc989\uc2dc \uc0ac\uc6a9 \uac00\ub2a5\ud55c \uc5ec\ub7ec \uad6c\ud604\uccb4\ub4e4"),(0,l.kt)("li",{parentName:"ul"},"\uadf8\ub7ec\ub098... \uacc4\uc0b0 \uc2dc\uac04\uacfc \uacb0\uacfc \ud06c\uae30 \ubaa8\ub450\uc5d0\uc11c \ud6a8\uc728\uc801\uc774\uc9c0 \uc54a\uc74c")),(0,l.kt)("h4",{id:"\uc608\uc2dc"},"\uc608\uc2dc"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'Example{\n  number: i32 = 2;\n  arr: Vector<i32> = [0, 1];\n}\n\n// serializes to\n"{\\"number\\": 2, \\"arr\\": [0, 1]}"\n')),(0,l.kt)("hr",{class:"subsection"}),(0,l.kt)("h3",{id:"borsh-\uac1d\uccb4\ub97c-\ubc14\uc774\ud2b8\ub85c"},(0,l.kt)("a",{parentName:"h3",href:"https://borsh.io/"},"Borsh"),": \uac1d\uccb4\ub97c \ubc14\uc774\ud2b8\ub85c"),(0,l.kt)("h4",{id:"\ud2b9\uc9d5-1"},"\ud2b9\uc9d5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud6a8\uc728\uc801\uc73c\ub85c (\uc5ed)\uc9c1\ub82c\ud654\ub420 \uc218 \uc788\ub3c4\ub85d \uad6c\ucd95\ub41c \ucef4\ud329\ud2b8\ud55c \ubc14\uc774\ub108\ub9ac \ud615\uc2dd"),(0,l.kt)("li",{parentName:"ul"},"\uc5c4\uaca9\ud558\uace0 \ud45c\uc900\uc801\uc778 \ubc14\uc774\ub108\ub9ac \ud45c\ud604"),(0,l.kt)("li",{parentName:"ul"},"\uc624\ubc84\ud5e4\ub4dc \uac10\uc18c: \uc18d\uc131 \uc774\ub984\uc744 \uc800\uc7a5\ud560 \ud544\uc694 \uc5c6\uc74c"),(0,l.kt)("li",{parentName:"ul"},"\ud558\uc9c0\ub9cc... \ub370\uc774\ud130\ub97c (\uc5ed)\uc9c1\ub82c\ud654\ud558\ub824\uba74 \ubc29\ubc95\uc744 \uc54c\uc544\uc57c \ud568")),(0,l.kt)("h4",{id:"\uc608\uc2dc-1"},"\uc608\uc2dc"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"Example{\n  number: i32 = 2;\n  arr: Vector<i32> = [0, 1];\n}\n\n// serializes into\n[2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\uc785\ub825-\ubc0f-\ucd9c\ub825-\uc9c1\ub82c\ud654"},"\uc785\ub825 \ubc0f \ucd9c\ub825 \uc9c1\ub82c\ud654"),(0,l.kt)("p",null,"NEAR \ucee8\ud2b8\ub799\ud2b8\ub294 \ubcf5\uc7a1\ud55c \uac1d\uccb4\ub97c \uac00\uc838\uc624\uace0 \ubc18\ud658\ud558\ub294 \uba54\uc11c\ub4dc\ub97c \uad6c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ub370\uc774\ud130\ub97c \uac04\ub2e8\ud55c \ubc29\uc2dd\uc73c\ub85c \ucc98\ub9ac\ud558\uae30 \uc704\ud574, JSON \uc9c1\ub82c\ud654\uac00 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub300\ubd80\ubd84\uc758 \uc5b8\uc5b4\uac00 JSON (\uc5ed)\uc9c1\ub82c \ubcc0\ud658\uae30\ub97c \uc27d\uac8c \uad6c\ud604\ud558\ubbc0\ub85c, JSON\uc744 \uc0ac\uc6a9\ud558\uba74 \ubaa8\ub4e0 \uc0ac\ub78c\uc774 \ucee8\ud2b8\ub799\ud2b8\uc640 \ub354 \uc27d\uac8c \uc0c1\ud638 \uc791\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h4",{id:"\uc608\uc2dc-2"},"\uc608\uc2dc"),(0,l.kt)("p",null,"\uc544\ub798 \uc608\uc2dc\ub97c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc774\ub294 \uad50\uc721 \ubaa9\uc801\uc73c\ub85c\ub9cc \uc791\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Serialize)]\n#[serde(crate = "near_sdk::serde")]\npub struct A {\n  pub a_number: i32,\n  pub b_number: u128\n}\n\n#[derive(Serialize)]\n#[serde(crate = "near_sdk::serde")]\npub struct B {\n  pub success: bool,\n  pub other_number: i32\n}\n\npub fn method(&self, struct_a: A): B {\n  return B{true, 0}\n}\n')),(0,l.kt)("h4",{id:"\ub370\uc774\ud130-\uc218\uc2e0"},"\ub370\uc774\ud130 \uc218\uc2e0"),(0,l.kt)("p",null,"\uc0ac\uc6a9\uc790\uac00 ",(0,l.kt)("inlineCode",{parentName:"p"},"method"),"\ub97c \ud638\ucd9c\ud558\uba74, \ucee8\ud2b8\ub799\ud2b8\ub294 JSON \ubb38\uc790\uc5f4(\uc608: ",(0,l.kt)("inlineCode",{parentName:"p"},'"{\\"a_number\\":0, \\"b_number\\":\\"100\\"}"'),")\ub85c \uc778\ucf54\ub529\ub41c \uc778\uc790\ub97c \uc218\uc2e0\ud558\uace0, \uc774\ub97c \uc62c\ubc14\ub978 \uac1d\uccb4(",(0,l.kt)("inlineCode",{parentName:"p"},"A{0, 100}"),")\ub85c (\uc5ed)\uc9c1\ub82c\ud654\ud569\ub2c8\ub2e4."),(0,l.kt)("h4",{id:"\ub370\uc774\ud130-\ubc18\ud658"},"\ub370\uc774\ud130 \ubc18\ud658"),(0,l.kt)("p",null,"\uacb0\uacfc\ub97c \ubc18\ud658\ud560 \ub54c, \ucee8\ud2b8\ub799\ud2b8\ub294 \uc790\ub3d9\uc73c\ub85c \uac1d\uccb4 ",(0,l.kt)("inlineCode",{parentName:"p"},"B{true, 0}"),"\ub97c JSON \uc9c1\ub82c\ud654 \uac12 ",(0,l.kt)("inlineCode",{parentName:"p"},'"{\\"success\\":true, \\"other_number\\":0}"'),"\uc73c\ub85c \uc778\ucf54\ub529\ud558\uace0 \ud574\ub2f9 \ubb38\uc790\uc5f4\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,l.kt)("admonition",{title:"JSON \uc81c\ud55c \uc0ac\ud56d",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"JSON\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"52 bytes")," \uc22b\uc790\ub85c \uc81c\ud55c\ub418\ubbc0\ub85c ",(0,l.kt)("inlineCode",{parentName:"p"},"u64"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"u128"),"\ub97c \uc785\ub825 \ub610\ub294 \ucd9c\ub825\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. JSON\uc740 \ub2e8\uc21c\ud788 \uc774\ub97c \uc9c1\ub82c\ud654\ud560 \uc218 \uc5c6\uae30 \ub54c\ubb38\uc5d0, ",(0,l.kt)("inlineCode",{parentName:"p"},"Strings"),"\ub97c \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4 ."),(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"NEAR SDK RS")," \ub294 \ud604\uc7ac \uc785/\ucd9c\ub825 \ub370\uc774\ud130\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"near_sdk::json_types::{U64, I64, U128, I128}"),"\ub97c \uad6c\ud604\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"borsh-\uc0c1\ud0dc-\uc9c1\ub82c\ud654"},"Borsh: \uc0c1\ud0dc \uc9c1\ub82c\ud654"),(0,l.kt)("p",null,"\ub0b4\ubd80\uc801\uc73c\ub85c \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub294 \uac04\ub2e8\ud55c ",(0,l.kt)("strong",{parentName:"p"},"\ud0a4/\uac12 \uc30d"),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud569\ub2c8\ub2e4. \uc774\ub294 \ucee8\ud2b8\ub799\ud2b8\uac00 \ubcf5\uc7a1\ud55c \uc0c1\ud0dc\ub97c \uac04\ub2e8\ud55c \ud0a4-\uac12 \uc30d\uc73c\ub85c \ubcc0\ud658\ud574\uc57c \ud568\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774\ub97c \uc704\ud574, NEAR \ucee8\ud2b8\ub799\ud2b8\ub294 \ubcf5\uc7a1\ud55c \uac1d\uccb4\ub97c \ub354 \uc791\uc740 \ubc14\uc774\ud2b8 \uc2a4\ud2b8\ub9bc\uc73c\ub85c (\uc5ed)\uc9c1\ub82c\ud654\ud558\ub294 \ub370 \ucd5c\uc801\ud654\ub41c ",(0,l.kt)("a",{parentName:"p",href:"https://borsh.io"},"borsh"),"\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4 ."),(0,l.kt)("admonition",{title:"SDK-JS\ub294 JSON\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"JavaScript SDK\ub294 JSON\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc0c1\ud0dc\uc758 \uac1c\uccb4\ub97c \uc9c1\ub82c\ud654\ud569\ub2c8\ub2e4. borsh \uad6c\ud604\uc740 \uace7 \uad6c\ud604\ub420 \uc608\uc815\uc785\ub2c8\ub2e4.")),(0,l.kt)("h4",{id:"\uc608\uc2dc-3"},"\uc608\uc2dc"),(0,l.kt)("p",null,"\uc544\ub798 \uc608\uc2dc\ub97c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc774\ub294 \uad50\uc721 \ubaa9\uc801\uc73c\ub85c\ub9cc \uc791\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]\npub struct Contract {\n  string: String,\n  vector: Vector<u8>\n}\n\n#[near_bindgen]\nimpl Contract {\n  #[init]\n  pub fn init(string: String, first_u8: u8) -> Self {\n    let mut vector: Vector<u8> = Vector::new("prefix".as_bytes());\n    vector.push(&first_u8);\n\n    Self { string, vector }\n  }\n\n  pub fn change_state(&mut self, string: String, number: u8) {\n    self.string = string;\n    self.vector.push(&number);\n  }\n}\n')),(0,l.kt)("h4",{id:"\ubc30\ud3ec-\uc2dc-\ube48-\uc0c1\ud0dc"},"\ubc30\ud3ec \uc2dc \ube48 \uc0c1\ud0dc"),(0,l.kt)("p",null,"\ucee8\ud2b8\ub799\ud2b8\ub97c \uc0c8 \uacc4\uc815\uc5d0 \ubc30\ud3ec\ud558\uace0 \uc989\uc2dc \uc0c1\ud0dc\ub97c \uc694\uccad\ud558\uba74 \ube44\uc5b4 \uc788\uc74c\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"near view-state $CONTRACT --finality optimistic\n\n# Result is: []\n")),(0,l.kt)("h4",{id:"\uc0c1\ud0dc-\ucd08\uae30\ud654"},"\uc0c1\ud0dc \ucd08\uae30\ud654"),(0,l.kt)("p",null,"\uc0c1\ud0dc\ub97c \ucd08\uae30\ud654\ud574\ubcf4\uba74, Borsh\uac00 \uc0c1\ud0dc\ub97c \uc9c1\ub82c\ud654\ud558\ub294 \ub370 \uc5b4\ub5bb\uac8c \uc0ac\uc6a9\ub418\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# initialize with the string \"hi\" and 0\nnear call $CONTRACT init '{\"string\":\"hi\", \"first_u8\":0}' --accountId $CONTRACT\n\n# check the state\nnear view-state $CONTRACT --utf8 --finality optimistic\n\n# Result is:\n# [\n#   {\n#     key: 'STATE',\n#     value: '\\x02\\x00\\x00\\x00hi\\x01\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x06\\x00\\x00\\x00prefix'\n#   },\n#   { key: 'prefix\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00', value: '\\x00' }\n# ]\n")),(0,l.kt)("p",null,"\uccab \ubc88\uc9f8 \ud0a4-\uac12\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"key: 'STATE'\nvalue: '\\x02\\x00\\x00\\x00hi\\x01\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x06\\x00\\x00\\x00prefix'\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Contract"),"\uc5d0\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"string, Vector<u8>")," \uad6c\uc870\uac00 \uc874\uc7ac\ud558\ubbc0\ub85c, \uac12\uc740 \ub2e4\uc74c\uacfc \uac19\uc774 \ud574\uc11d\ub429\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'[2, 0, 0, 0, "h", "i"] -> The `string` has 2 elements: "h" and "i".\n[1, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, "prefix"] -> The Vector has 1 element, and to see the values search for keys that start with (the 6 bytes prefix): "prefix"\n')),(0,l.kt)("p",null,"\uadf8\ub7f0 \ub2e4\uc74c \ub450 \ubc88\uc9f8 \ud0a4-\uac12\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},'"prefix"')," \ubb38\uc790\uc5f4\ub85c \ud45c\uc2dc\ub41c ",(0,l.kt)("inlineCode",{parentName:"p"},"Vector")," \ud56d\ubaa9\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"key: 'prefix\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00'\nvalue: '\\x00'\n")),(0,l.kt)("h4",{id:"\uc0c1\ud0dc-\uc218\uc815"},"\uc0c1\ud0dc \uc218\uc815"),(0,l.kt)("p",null,"\uc800\uc7a5\ub41c \ubb38\uc790\uc5f4\uc744 \uc218\uc815\ud558\uace0 \uc0c8 \uc22b\uc790\ub97c \ucd94\uac00\ud558\uba74 \uadf8\uc5d0 \ub530\ub77c \uc0c1\ud0dc\uac00 \ubcc0\uacbd\ub429\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"near call $CONTRACT change_state '{\"string\":\"bye\", \"number\":1}' --accountId $CONTRACT\n\n# Result is\n# [\n#   {\n#     key: 'STATE',\n#     value: '\\x03\\x00\\x00\\x00bye\\x02\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x06\\x00\\x00\\x00prefix'\n#   },\n#   { key: 'prefix\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00', value: '\\x00' },\n#   { key: 'prefix\\x01\\x00\\x00\\x00\\x00\\x00\\x00\\x00', value: '\\x01' }\n# ]\n")),(0,l.kt)("p",null,"\uc0c8 \ubb38\uc790\uc5f4(",(0,l.kt)("inlineCode",{parentName:"p"},"bye"),")\uc758 \uc800\uc7a5\uc744 \ubc18\uc601\ud558\ub3c4\ub85d ",(0,l.kt)("inlineCode",{parentName:"p"},"STATE")," \ud0a4\uac00 \ubcc0\uacbd\ub418\uace0, \ubca1\ud130\uc5d0 \uc774\uc81c 2\uac1c\uc758 \uc694\uc18c\uac00 \uc788\uc74c\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub3d9\uc2dc\uc5d0 \uc0c8\ub85c\uc6b4 \ubca1\ud130 \ud56d\ubaa9(",(0,l.kt)("inlineCode",{parentName:"p"},"1u8"),")\uc744 \ucd94\uac00\ud558\ub294 \uc0c8\ub85c\uc6b4 \ud0a4-\uac12\uc774 \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,l.kt)("hr",{class:"subsection"}),(0,l.kt)("h3",{id:"\uc5ed\uc9c1\ub82c\ud654-\uc624\ub958"},"\uc5ed\uc9c1\ub82c\ud654 \uc624\ub958"),(0,l.kt)("p",null,"\ub204\uad70\uac00 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\uba74, \ucee8\ud2b8\ub799\ud2b8\uc758 \uccab \ubc88\uc9f8 \ub2e8\uacc4\ub294 \uc790\uccb4 \uc0c1\ud0dc\ub97c \uc5ed\uc9c1\ub82c\ud654\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc704\uc5d0 \uc0ac\uc6a9\ub41c \uc608\uc5d0\uc11c \ucee8\ud2b8\ub799\ud2b8\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"STATE")," \ud0a4\ub97c \uc77d\ub294 \uac83\uc73c\ub85c \uc2dc\uc791\ud558\uace0, \ud574\ub2f9 \uac12\uc744 ",(0,l.kt)("inlineCode",{parentName:"p"},"Contract{string: String, vector: Vector<u8>}")," \uac1d\uccb4\ub85c \uc5ed\uc9c1\ub82c\ud654\ud558\ub824\uace0 \uc2dc\ub3c4\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uadf8\ub7f0\ub370 \uad6c\uc870\uac00 \ub2e4\ub978 \uacc4\uc815\uc5d0 \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\uac8c \ub418\uba74, \ucee8\ud2b8\ub799\ud2b8\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"STATE")," \ud0a4 \uc5ed\uc9c1\ub82c\ud654\uc5d0 \uc2e4\ud328\ud558\uace0, ",(0,l.kt)("inlineCode",{parentName:"p"},"Cannot deserialize the contract state")," \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uac8c \ub420 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\ub824\uba74 \ub2e4\uc74c \uc911 \ud558\ub098\ub97c \uc218\ud589\ud558\uc138\uc694."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\uc774\uc804 \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\ub85c \ub864\ubc31"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/near_docs/vi/develop/upgrade"},"\ucee8\ud2b8\ub799\ud2b8 \uc0c1\ud0dc\ub97c \ub9c8\uc774\uadf8\ub808\uc774\uc158"),"\ud558\ub294 \uba54\uc11c\ub4dc \uad6c\ud604")))}k.isMDXComponent=!0}}]);