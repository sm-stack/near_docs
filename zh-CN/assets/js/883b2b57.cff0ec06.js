"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7917],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var k=n.createContext({}),i=function(e){var t=n.useContext(k),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=i(e.components);return n.createElement(k.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,k=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=i(a),c=r,u=d["".concat(k,".").concat(c)]||d[c]||m[c]||l;return a?n.createElement(u,p(p({ref:t},s),{},{components:a})):n.createElement(u,p({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=d;var o={};for(var k in t)hasOwnProperty.call(t,k)&&(o[k]=t[k]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var i=2;i<l;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},86088:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>k,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),p=["components"],o={id:"data-storage",title:"\ub370\uc774\ud130 \uc800\uc7a5 / \uc218\uc9d1",sidebar_label:"NEAR\uc5d0 \uc800\uc7a5\ud558\uae30"},k=void 0,i={unversionedId:"concepts/storage/data-storage",id:"concepts/storage/data-storage",title:"\ub370\uc774\ud130 \uc800\uc7a5 / \uc218\uc9d1",description:"NEAR \ube14\ub85d\uccb4\uc778\uc5d0 \uc800\uc7a5\ub41c \ubaa8\ub4e0 \ub370\uc774\ud130\ub294 \ud0a4/\uac12 \uc30d\uc73c\ub85c \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4. \uc6b0\ub9ac\uac00 \ub9cc\ub4e0 SDK\uc5d0\ub294 \ub370\uc774\ud130\ub97c \uccb4\uc778\uc5d0 \uc800\uc7a5\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub418\ub294 \uba87 \uac00\uc9c0 \uc218\uc9d1 \ubc29\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/../docs/1.concepts/storage/data-collections.md",sourceDirName:"1.concepts/storage",slug:"/concepts/storage/data-storage",permalink:"/near_docs/zh-CN/concepts/storage/data-storage",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/storage/data-collections.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"2023\u5e743\u67089\u65e5",frontMatter:{id:"data-storage",title:"\ub370\uc774\ud130 \uc800\uc7a5 / \uc218\uc9d1",sidebar_label:"NEAR\uc5d0 \uc800\uc7a5\ud558\uae30"},sidebar:"\uac1c\ub150",previous:{title:"\ud1a0\ud070 \uc190\uc2e4 \ubc29\uc9c0",permalink:"/near_docs/zh-CN/concepts/basics/token-loss"},next:{title:"\uc2a4\ud1a0\ub9ac\uc9c0 \uc2a4\ud14c\uc774\ud0b9",permalink:"/near_docs/zh-CN/concepts/storage/storage-staking"}},s={},m=[{value:"Rust \uc218\uc9d1 \uc790\ub8cc\ud615",id:"rust-collection-types",level:2},{value:"Big-O \ud45c\uae30\ubc95",id:"big-o-notation-1",level:3},{value:"\uac00\uc2a4 \uc18c\ubaa8 \uc608\uc81c",id:"gas-consumption-examples-1",level:3},{value:"<code>Vector</code>",id:"vector",level:3},{value:"<code>LookupSet</code>",id:"lookupset",level:3},{value:"<code>UnorderedSet</code>",id:"unorderedset",level:3},{value:"<code>LookupMap</code>",id:"lookupmap",level:3},{value:"<code>UnorderedMap</code>",id:"unorderedmap",level:3},{value:"<code>TreeMap</code>",id:"treemap",level:3},{value:"NEAR\uc758 \uc2a4\ud1a0\ub9ac\uc9c0 \uc81c\ud55c \uc0ac\ud56d",id:"near\uc758-\uc2a4\ud1a0\ub9ac\uc9c0-\uc81c\ud55c-\uc0ac\ud56d",level:2}],d={toc:m};function c(e){var t=e.components,o=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"NEAR \ube14\ub85d\uccb4\uc778\uc5d0 \uc800\uc7a5\ub41c \ubaa8\ub4e0 \ub370\uc774\ud130\ub294 \ud0a4/\uac12 \uc30d\uc73c\ub85c \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4. \uc6b0\ub9ac\uac00 \ub9cc\ub4e0 SDK\uc5d0\ub294 \ub370\uc774\ud130\ub97c \uccb4\uc778\uc5d0 \uc800\uc7a5\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub418\ub294 \uba87 \uac00\uc9c0 \uc218\uc9d1 \ubc29\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/"},"Rust")," \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc704\ud55c ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/near/near-sdk-rs"},(0,l.kt)("inlineCode",{parentName:"a"},"near-sdk-rs"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.javascript.com/"},"JavaScript")," \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc704\ud55c ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/near/near-sdk-js"},(0,l.kt)("inlineCode",{parentName:"a"},"near-sdk-js")))),(0,l.kt)("p",null,"\uc2a4\ud1a0\ub9ac\uc9c0 \ube44\uc6a9\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,l.kt)("a",{parentName:"p",href:"/concepts/storage/storage-staking"},(0,l.kt)("strong",{parentName:"a"},"\uc2a4\ud1a0\ub9ac\uc9c0 \uc2a4\ud14c\uc774\ud0b9")),"\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"rust-collection-types"},"Rust \uc218\uc9d1 \uc790\ub8cc\ud615"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.rs/near-sdk/latest/near_sdk/collections/"},(0,l.kt)("inlineCode",{parentName:"a"},"near-sdk-rs")," \ubaa8\ub4c8 \ubb38\uc11c")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\uc790\ub8cc\ud615"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\ubc18\ubcf5 \uac00\ub2a5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\ubaa8\ub4e0 \uac12 \uc9c0\uc6b0\uae30"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\uc0bd\uc785 \uc21c\uc11c \uc720\uc9c0"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\ubc94\uc704 \uc120\ud0dd"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/concepts/storage/data-storage#vector"},(0,l.kt)("inlineCode",{parentName:"a"},"Vector"))),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/concepts/storage/data-storage#lookupset"},(0,l.kt)("inlineCode",{parentName:"a"},"LookupSet"))),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/concepts/storage/data-storage#unorderedset"},(0,l.kt)("inlineCode",{parentName:"a"},"UnorderedSet"))),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/concepts/storage/data-storage#lookupmap"},(0,l.kt)("inlineCode",{parentName:"a"},"LookupMap"))),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/concepts/storage/data-storage#unorderedmap"},(0,l.kt)("inlineCode",{parentName:"a"},"UnorderedMap"))),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/concepts/storage/data-storage#treemap"},(0,l.kt)("inlineCode",{parentName:"a"},"TreeMap"))),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"big-o-notation-1"},"Big-O \ud45c\uae30\ubc95"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\uc544\ub798 \ucc28\ud2b8\uc758 ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Big_O_notation"},"Big-O \ud45c\uae30\ubc95")," \uac12\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"near-sdk-rs"),"\uc5d0\uc11c \ubcfc \uc218 \uc788\ub294 \ub2e4\uc591\ud55c \uc218\uc9d1 \ubc29\ubc95\uc758 ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Time_complexity"},"\uc2dc\uac04 \ubcf5\uc7a1\ub3c4"),"\ub97c \uc124\uba85 \ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ubc29\uc2dd\ub4e4\uc758 \uc2dc\uac04 \ubcf5\uc7a1\ub3c4 \uc815\ubcf4\ub294 NEAR\uc758 ",(0,l.kt)("a",{parentName:"p",href:"/concepts/basics/transactions/gas"},"\uac00\uc2a4")," \uc18c\ube44\uc640 \uad00\ub828\uc774 \uc788\uc73c\ubbc0\ub85c, \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ud560 \ub370\uc774\ud130\ub97c \uacb0\uc815\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4. \ub370\uc774\ud130 \uc218\uc9d1 \ubc29\ubc95\uc5d0\ub294 \uc138 \uac00\uc9c0 \uc720\ud615\uc774 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"O(1) - ",(0,l.kt)("em",{parentName:"li"},(0,l.kt)("a",{parentName:"em",href:"https://en.wikipedia.org/wiki/Time_complexity#Constant_time"},"\uc0c1\uc218\uc2dc\uac04"))),(0,l.kt)("li",{parentName:"ul"},"O(n) - ",(0,l.kt)("em",{parentName:"li"},(0,l.kt)("a",{parentName:"em",href:"https://en.wikipedia.org/wiki/Time_complexity#Linear_time"},"\uc120\ud615\uc2dc\uac04"))),(0,l.kt)("li",{parentName:"ul"},"O(log n) - ",(0,l.kt)("em",{parentName:"li"},(0,l.kt)("a",{parentName:"em",href:"https://en.wikipedia.org/wiki/Time_complexity#Logarithmic_time"},"\ub85c\uadf8\uc2dc\uac04")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\uc811\uadfc"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\uc0bd\uc785"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\uc0ad\uc81c"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\uac80\uc0c9"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\uc21c\ud68c"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\ubaa8\ub4e0 \uc6d0\uc18c \uc0ad\uc81c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/concepts/storage/data-storage#vector"},(0,l.kt)("inlineCode",{parentName:"a"},"Vector"))),(0,l.kt)("td",{parentName:"tr",align:"center"},"O(1)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"O(1)","*"),(0,l.kt)("td",{parentName:"tr",align:"center"},"O(1)","*","*"),(0,l.kt)("td",{parentName:"tr",align:"center"},"O(n)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"O(n)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"O(n)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/concepts/storage/data-storage#lookupset"},(0,l.kt)("inlineCode",{parentName:"a"},"LookupSet"))),(0,l.kt)("td",{parentName:"tr",align:"center"},"O(1)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"O(1)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"O(1)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"O(1)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"N/A"),(0,l.kt)("td",{parentName:"tr",align:"center"},"N/A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/concepts/storage/data-storage#unorderedset"},(0,l.kt)("inlineCode",{parentName:"a"},"UnorderedSet"))),(0,l.kt)("td",{parentName:"tr",align:"center"},"O(1)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"O(1)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"O(1)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"O(1)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"O(n)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"O(n)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/concepts/storage/data-storage#lookupmap"},(0,l.kt)("inlineCode",{parentName:"a"},"LookupMap"))),(0,l.kt)("td",{parentName:"tr",align:"center"},"O(1)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"O(1)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"O(1)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"O(1)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"N/A"),(0,l.kt)("td",{parentName:"tr",align:"center"},"N/A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/concepts/storage/data-storage#unorderedmap"},(0,l.kt)("inlineCode",{parentName:"a"},"UnorderedMap"))),(0,l.kt)("td",{parentName:"tr",align:"center"},"O(1)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"O(1)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"O(1)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"O(1)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"O(n)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"O(n)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/concepts/storage/data-storage#treemap"},(0,l.kt)("inlineCode",{parentName:"a"},"TreeMap"))),(0,l.kt)("td",{parentName:"tr",align:"center"},"O(1)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"O(log n)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"O(log n)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"O(log n)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"O(n)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"O(n)")))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"*"," - ",(0,l.kt)("inlineCode",{parentName:"em"},"push_back"),"(\ub610\ub294 deque\uc5d0 \ub300\ud574 ",(0,l.kt)("inlineCode",{parentName:"em"},"push_front"),")\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubca1\ud130 \ub9e8 \ub4a4\uc5d0 \uc0bd\uc785")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"*","*"," - ",(0,l.kt)("inlineCode",{parentName:"em"},"pop")," (\ub610\ub294 deque\uc5d0 \ub300\ud574 ",(0,l.kt)("inlineCode",{parentName:"em"},"pop_front"),")\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubca1\ud130 \ub9e8 \ub4a4 \uc6d0\uc18c\ub97c \uc0ad\uc81c\ud558\uace0, \ub610\ub294 ",(0,l.kt)("inlineCode",{parentName:"em"},"swap_remove"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud574\ub2f9 \uc694\uc18c\ub97c \ubca1\ud130 \ub9e8 \ub4a4 \uc694\uc18c\uc640 \uad50\uccb4\ud55c \ub4a4 \uc0ad\uc81c")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"gas-consumption-examples-1"},"\uac00\uc2a4 \uc18c\ubaa8 \uc608\uc81c"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\uc544\ub798\uc758 \uc608\uc81c\ub294 \uc704\uc758 \ubc29\ubc95\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud0a4/\uac12 \uc30d\uc744 \uc800\uc7a5\ud558\uace0 \uac80\uc0c9\ud558\ub294 \uac00\uc2a4 \uc18c\ubaa8\uc758 \ucc28\uc774\uc810\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \ub370\uc774\ud130 \uc77d\uae30/\uc4f0\uae30\ub9cc \ud45c\uc2dc\ud558\uae30 \uc704\ud574 \uccb4\uc778\uc5d0\uc11c \ub7f0\ud0c0\uc784 \ud658\uacbd\uc744 \ud68c\uc804\uc2dc\ud0a4\ub294 \uac00\uc2a4 \ube44\uc6a9\uc740 \ucc28\uac10\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/near-examples/collection-examples-rs"},"collection-examples-rs"),"\ub97c \ubc29\ubb38\ud558\uc5ec \uc774\ub97c \uc7ac\ud604\ud558\uace0 \uc790\uc2e0\uc758 \ub370\uc774\ud130 \uc138\ud2b8\ub97c \ud14c\uc2a4\ud2b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Rust Set Data Gas Chart",src:a(32713).Z,width:"1901",height:"747"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Rust Get Data Gas Chart",src:a(23676).Z,width:"1911",height:"762"})),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"vector"},(0,l.kt)("inlineCode",{parentName:"h3"},"Vector")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Array_data_structure"},"vector")," / \uc601\uad6c \ubc30\uc5f4\uc744 \uad6c\ud604\ud569\ub2c8\ub2e4."),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\uc778\ub371\uc2a4\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubc18\ubcf5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc778\ub371\uc2a4 -> \uc694\uc18c \ud615\ud0dc\uc758 \ub9f5\ud551\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."))),(0,l.kt)("p",null,"[ ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/near/near-sdk-rs/blob/master/near-sdk/src/collections/vector.rs"},"SDK \uc18c\uc2a4")," ]"),(0,l.kt)("p",null,"[ ",(0,l.kt)("a",{parentName:"p",href:"https://docs.rs/near-sdk/latest/near_sdk/collections/vector/struct.Vector.html"},"\uad6c\ud604")," ]"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"lookupset"},(0,l.kt)("inlineCode",{parentName:"h3"},"LookupSet")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ubc18\ubcf5\uc790 ",(0,l.kt)("em",{parentName:"p"},"\uc5c6\uc774")," \uc601\uad6c \uc9d1\ud569\uc744 \uad6c\ud604\ud569\ub2c8\ub2e4."),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\ud0a4\ub97c \ubc18\ubcf5\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub354 \ud6a8\uc728\uc801\uc778 \uc77d\uae30/\uc4f0\uae30\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4."))),(0,l.kt)("p",null,"[ ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/near/near-sdk-rs/blob/master/near-sdk/src/collections/lookup_set.rs"},"SDK \uc18c\uc2a4")," ]"),(0,l.kt)("p",null,"[ ",(0,l.kt)("a",{parentName:"p",href:"https://docs.rs/near-sdk/latest/near_sdk/collections/struct.LookupSet.html"},"\uad6c\ud604")," ]"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"unorderedset"},(0,l.kt)("inlineCode",{parentName:"h3"},"UnorderedSet")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ud0a4, \uac12 \ubc0f \ud56d\ubaa9\uc5d0 \ub300\ud55c \ubc18\ubcf5\uc790\ub97c ",(0,l.kt)("em",{parentName:"p"},"\uc0ac\uc6a9\ud558\uc5ec")," \uc601\uad6c \uc9d1\ud569\uc744 \uad6c\ud604\ud569\ub2c8\ub2e4.")),(0,l.kt)("p",null,"[ ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/near/near-sdk-rs/blob/master/near-sdk/src/collections/unordered_set.rs"},"SDK \uc18c\uc2a4")," ]"),(0,l.kt)("p",null,"[ ",(0,l.kt)("a",{parentName:"p",href:"https://docs.rs/near-sdk/latest/near_sdk/collections/struct.UnorderedSet.html"},"\uad6c\ud604 \ubb38\uc11c")," ]"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"lookupmap"},(0,l.kt)("inlineCode",{parentName:"h3"},"LookupMap")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\uc601\uad6c \ub9f5\ud551\uc744 \uad6c\ud604\ud569\ub2c8\ub2e4."),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\ud0a4\ub97c \ubc18\ubcf5\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uac12\uc744 \uc81c\uac70\ud558\uace0 \ucd94\uac00\ud560 \ub54c \uc21c\uc11c\ub97c \uc720\uc9c0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc77d\uae30 \ubc0f \uc4f0\uae30 \ud69f\uc218\uac00 \ud6a8\uc728\uc801\uc785\ub2c8\ub2e4."))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ub97c \ucd94\uac00\ud558\ub824\uba74:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn add_lookup_map(&mut self, key: String, value: String) {\n    self.lookup_map.insert(&key, &value);\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ub97c \uc5bb\uc73c\ub824\uba74:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn get_lookup_map(&self, key: String) -> String {\n    match self.lookup_map.get(&key) {\n        Some(value) => {\n            let log_message = format!("Value from LookupMap is {:?}", value.clone());\n            env::log(log_message.as_bytes());\n            value\n        },\n        None => "not found".to_string()\n    }\n}\n')),(0,l.kt)("p",null,"[ ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/near/near-sdk-rs/blob/master/near-sdk/src/collections/lookup_map.rs"},"SDK \uc18c\uc2a4")," ]"),(0,l.kt)("p",null,"[ ",(0,l.kt)("a",{parentName:"p",href:"https://docs.rs/near-sdk/latest/near_sdk/collections/struct.LookupMap.html"},"\uad6c\ud604")," ]"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"unorderedmap"},(0,l.kt)("inlineCode",{parentName:"h3"},"UnorderedMap")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\uc815\ub82c\ub418\uc9c0 \uc54a\uc740 \ub9f5\ud551\uc744 \uad6c\ud604\ud569\ub2c8\ub2e4."),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\ubc18\ubcf5 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uac12\uc744 \uc81c\uac70\ud558\uace0 \ucd94\uac00\ud560 \ub54c \uc21c\uc11c\ub97c \uc720\uc9c0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ubaa8\ub4e0 \uac12\uc744 \uc9c0\uc6b8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ub97c \ucd94\uac00\ud558\ub824\uba74:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn add_unordered_map(&mut self, key: String, value: String) {\n    self.unordered_map.insert(&key, &value);\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ub97c \uc5bb\uc73c\ub824\uba74:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn get_unordered_map(&self, key: String) -> String {\n    match self.unordered_map.get(&key) {\n        Some(value) => {\n            let log_message = format!("Value from UnorderedMap is {:?}", value.clone());\n            env::log(log_message.as_bytes());\n            value\n        },\n        // None => "Didn\'t find that key.".to_string()\n        None => "not found".to_string()\n    }\n}\n')),(0,l.kt)("p",null,"[ ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/near/near-sdk-rs/tree/master/near-sdk/src/collections/unordered_map"},"SDK \uc18c\uc2a4")," ]"),(0,l.kt)("p",null,"[ ",(0,l.kt)("a",{parentName:"p",href:"https://docs.rs/near-sdk/latest/near_sdk/collections/unordered_map/struct.UnorderedMap.html"},"\uad6c\ud604")," ]"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"treemap"},(0,l.kt)("inlineCode",{parentName:"h3"},"TreeMap")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/AVL_tree"},"AVL-tree")," \uae30\ubc18\uc758 \ud2b8\ub9ac \ub9f5\uc744 \uad6c\ud604\ud569\ub2c8\ub2e4."),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\ubc18\ubcf5 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc21c\uc11c\ub97c \uc720\uc9c0\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ubaa8\ub4e0 \uac12\uc744 \uc9c0\uc6b8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc790\uae30 \uade0\ud615(Self Balancing)\uc744 \uc720\uc9c0\ud569\ub2c8\ub2e4."))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ub97c \ucd94\uac00\ud558\ub824\uba74:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn add_tree_map(&mut self, key: String, value: String) {\n    self.tree_map.insert(&key, &value);\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ub97c \uc5bb\uc73c\ub824\uba74:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn get_tree_map(&self, key: String) -> String {\n    match self.tree_map.get(&key) {\n        Some(value) => {\n            let log_message = format!("Value from TreeMap is {:?}", value.clone());\n            env::log(log_message.as_bytes());\n            // Since we found it, return it (note implicit return)\n            value\n        },\n        // did not find the entry\n        // note: curly brackets after arrow are optional in simple cases, like other languages\n        None => "not found".to_string()\n    }\n}\n')),(0,l.kt)("p",null,"[ ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/near/near-sdk-rs/blob/master/near-sdk/src/collections/tree_map.rs"},"SDK \uc18c\uc2a4")," ]"),(0,l.kt)("p",null,"[ ",(0,l.kt)("a",{parentName:"p",href:"https://docs.rs/near-sdk/latest/near_sdk/collections/struct.TreeMap.html"},"\uad6c\ud604")," ]"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"near\uc758-\uc2a4\ud1a0\ub9ac\uc9c0-\uc81c\ud55c-\uc0ac\ud56d"},"NEAR\uc758 \uc2a4\ud1a0\ub9ac\uc9c0 \uc81c\ud55c \uc0ac\ud56d"),(0,l.kt)("p",null,"\ub370\uc774\ud130\ub97c \uc628\uccb4\uc778\uc5d0 \uc800\uc7a5\ud558\ub824\uba74 \ub2e4\uc74c \uc0ac\ud56d\uc5d0 \uc720\uc758\ud574\uc57c \ud569\ub2c8\ub2e4:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc2a4\ud1a0\ub9ac\uc9c0 \uc2a4\ud14c\uc774\ud0b9 \ube44\uc6a9\uc740 \ud569\uc0b0\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ud55c \ubc88\uc5d0 \uc5c5\ub85c\ub4dc\ud560 \uc218 \uc788\ub294 \uc591\uc5d0\ub294 4MB \uc81c\ud55c\uc774 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4, \ub204\uad70\uac00\uac00 NFT\ub97c \uc21c\uc804\ud788 \uc628\uccb4\uc778(IPFS \ub610\ub294 \ub2e4\ub978 \ud0c8\uc911\uc559\ud654 \uc2a4\ud1a0\ub9ac\uc9c0 \uc194\ub8e8\uc158\uc774 \uc544\ub2cc)\uc5d0 \ub123\uae30\ub97c \uc6d0\ud55c\ub2e4\uace0 \uac00\uc815\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uac70\uc758 \ubb34\uc81c\ud55c\uc758 \uc2a4\ud1a0\ub9ac\uc9c0\uac00 \uc788\uc9c0\ub9cc, \uc0ac\uc6a9\ub41c \uc2a4\ud1a0\ub9ac\uc9c0 100kb\ub2f9 1 $NEAR\ub97c \uc9c0\ubd88\ud574\uc57c \ud569\ub2c8\ub2e4(\uc2a4\ud1a0\ub9ac\uc9c0 \uc2a4\ud14c\uc774\ud0b9 \ucc38\uace0)."),(0,l.kt)("p",null,"\uc0ac\uc6a9\uc790\ub294 MAX_GAS \uc81c\uc57d\uc73c\ub85c \uc778\ud574, \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c \ub2f9 4MB\uae4c\uc9c0 \uc5c5\ub85c\ub4dc\ud560 \uc218 \uc788\ub3c4\ub85d \uc81c\ud55c\ub429\ub2c8\ub2e4. \uc8fc\uc5b4\uc9c4 functionCall\uc5d0 \uc5f0\uacb0\ud560 \uc218 \uc788\ub294 \ucd5c\ub300 \uac00\uc2a4\ub7c9\uc740 300TGas\uc785\ub2c8\ub2e4."))}c.isMDXComponent=!0},23676:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rust-getData-gasBurnt-0ccc453173ad23be8abb0463b574ea3d.png"},32713:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rust-setData-gasBurnt-309a1615483af8a465b806aacdb3c840.png"}}]);