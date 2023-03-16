"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5021],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},40199:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={sidebar_position:2},s="\uceec\ub809\uc158",p={unversionedId:"sdk/rust/contract-structure/collections",id:"sdk/rust/contract-structure/collections",title:"\uceec\ub809\uc158",description:"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ub370\uc774\ud130\uc5d0 \uc0ac\uc6a9\ud560 \ub370\uc774\ud130 \uad6c\uc870\ub97c \uacb0\uc815\ud560 \ub54c, \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 \uc77d\uace0 \uc4f0\ub294 \ub370\uc774\ud130\uc758 \uc591\uc744 \ucd5c\uc18c\ud654\ud558\ub294 \uac83\uc774 \uc911\uc694\ud558\uc9c0\ub9cc \ud2b8\ub79c\uc7ad\uc158 \ube44\uc6a9\uc744 \ucd5c\uc18c\ud654\ud558\uae30 \uc704\ud574 \uc9c1\ub82c\ud654 \ubc0f \uc5ed\uc9c1\ub82c\ud654\ub418\ub294 \ub370\uc774\ud130\uc758 \uc591\ub3c4 \ucd5c\uc18c\ud654\ud574\uc57c \ud569\ub2c8\ub2e4. \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ud655\uc7a5\ub418\uace0, \uc0c1\ud0dc\ub97c \uc0c8 \ub370\uc774\ud130 \uad6c\uc870\ub85c \ub9c8\uc774\uadf8\ub808\uc774\uc158\ud558\uba74 \ube44\uc6a9\uc774 \ubc1c\uc0dd\ud558\uace0, \ubcd1\ubaa9 \ud604\uc0c1\uc774 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc73c\ubbc0\ub85c, \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ub370\uc774\ud130 \uad6c\uc870\uc758 \uc7a5\ub2e8\uc810\uc744 \uc774\ud574\ud558\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4.",source:"@site/../docs/sdk/rust/contract-structure/collections.md",sourceDirName:"sdk/rust/contract-structure",slug:"/sdk/rust/contract-structure/collections",permalink:"/near_docs/sdk/rust/contract-structure/collections",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/contract-structure/collections.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"Mar 9, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sdk",previous:{title:"near_bindgen",permalink:"/near_docs/sdk/rust/contract-structure/near-bindgen"},next:{title:"\uceec\ub809\uc158 \uc911\ucca9(Nesting)",permalink:"/near_docs/sdk/rust/contract-structure/nesting"}},d={},u=[{value:"\uc778\uba54\ubaa8\ub9ac <code>HashMap</code> vs \uc601\uad6c <code>UnorderedMap</code>",id:"\uc778\uba54\ubaa8\ub9ac-hashmap-vs-\uc601\uad6c-unorderedmap",level:2},{value:"\uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uae30 \uc26c\uc6b4 \ud328\ud134",id:"\uc624\ub958\uac00-\ubc1c\uc0dd\ud558\uae30-\uc26c\uc6b4-\ud328\ud134",level:2},{value:"\uc601\uad6c \uceec\ub809\uc158 \ud398\uc774\uc9c0 \ub9e4\uae30\uae30",id:"\uc601\uad6c-\uceec\ub809\uc158-\ud398\uc774\uc9c0-\ub9e4\uae30\uae30",level:2},{value:"<code>LookupMap</code> vs <code>UnorderedMap</code>",id:"lookupmap-vs-unorderedmap",level:2},{value:"\uae30\ub2a5",id:"\uae30\ub2a5",level:3},{value:"\uc131\ub2a5",id:"\uc131\ub2a5",level:3},{value:"\uc2a4\ud1a0\ub9ac\uc9c0 \uacf5\uac04",id:"\uc2a4\ud1a0\ub9ac\uc9c0-\uacf5\uac04",level:3},{value:"<code>LazyOption</code>",id:"lazyoption",level:2}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\uceec\ub809\uc158"},"\uceec\ub809\uc158"),(0,l.kt)("p",null,"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ub370\uc774\ud130\uc5d0 \uc0ac\uc6a9\ud560 \ub370\uc774\ud130 \uad6c\uc870\ub97c \uacb0\uc815\ud560 \ub54c, \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 \uc77d\uace0 \uc4f0\ub294 \ub370\uc774\ud130\uc758 \uc591\uc744 \ucd5c\uc18c\ud654\ud558\ub294 \uac83\uc774 \uc911\uc694\ud558\uc9c0\ub9cc \ud2b8\ub79c\uc7ad\uc158 \ube44\uc6a9\uc744 \ucd5c\uc18c\ud654\ud558\uae30 \uc704\ud574 \uc9c1\ub82c\ud654 \ubc0f \uc5ed\uc9c1\ub82c\ud654\ub418\ub294 \ub370\uc774\ud130\uc758 \uc591\ub3c4 \ucd5c\uc18c\ud654\ud574\uc57c \ud569\ub2c8\ub2e4. \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ud655\uc7a5\ub418\uace0, \uc0c1\ud0dc\ub97c \uc0c8 \ub370\uc774\ud130 \uad6c\uc870\ub85c \ub9c8\uc774\uadf8\ub808\uc774\uc158\ud558\uba74 \ube44\uc6a9\uc774 \ubc1c\uc0dd\ud558\uace0, \ubcd1\ubaa9 \ud604\uc0c1\uc774 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc73c\ubbc0\ub85c, \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ub370\uc774\ud130 \uad6c\uc870\uc758 \uc7a5\ub2e8\uc810\uc744 \uc774\ud574\ud558\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"near-sdk")," \ub0b4 \uceec\ub809\uc158\uc740 \ub370\uc774\ud130\ub97c \uccad\ud06c\ub85c \ubd84\ud560\ud558\uace0 \ud544\uc694\ud560 \ub54c\uae4c\uc9c0 \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 \ub300\ud55c \uc77d\uae30 \ubc0f \uc4f0\uae30\ub97c \uc5f0\uae30\ud558\ub3c4\ub85d \uc124\uacc4\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ub370\uc774\ud130 \uad6c\uc870\ub294 \uc800\uc218\uc900 \uc2a4\ud1a0\ub9ac\uc9c0 \uc0c1\ud638 \uc791\uc6a9\uc744 \ucc98\ub9ac\ud558\uace0, ",(0,l.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/collections/index.html"},(0,l.kt)("inlineCode",{parentName:"a"},"std::collections")),"\uc640 \uc720\uc0ac\ud55c API\ub97c \uac16\ub294 \uac83\uc744 \ubaa9\ud45c\ub85c \ud569\ub2c8\ub2e4.."),(0,l.kt)("admonition",{title:"\ucc38\uace0",type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"near_sdk::collections"),"\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"near_sdk::store"),"\ub85c \uc774\ub3d9\ud558\uc5ec \uc5c5\ub370\uc774\ud2b8\ub41c API\ub97c \uac00\uc9c8 \uc608\uc815\uc785\ub2c8\ub2e4. \uc774\ub294 \uad6c\ud604 \uc911\uc774\uace0, \uc774\ub7ec\ud55c \uc5c5\ub370\uc774\ud2b8\ub41c \uad6c\uc870\uc5d0 \uc561\uc138\uc2a4\ud558\ub824\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"near-sdk"),"\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"unstable")," \uae30\ub2a5\uc744 \ud65c\uc131\ud654\ud558\uc138\uc694.")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"std::collections"),"\ub97c \uc0ac\uc6a9\ud560 \ub54c, \uc0c1\ud0dc\uac00 \ub85c\ub4dc\ub420 \ub54c\ub9c8\ub2e4 \uc790\ub8cc \uad6c\uc870\uc758 \ubaa8\ub4e0 \ud56d\ubaa9\uc774 \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0\uc11c \uc9c0\uc18d\uc801\uc73c\ub85c \uc77d\uace0 \uc5ed\uc9c1\ub82c\ud654\ub41c\ub2e4\ub294 \uc810\uc744 \uc5fc\ub450\uc5d0 \ub450\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4. \uc774\uac83\uc740 \uc801\uc9c0 \uc54a\uc740 \uc591\uc758 \ub370\uc774\ud130\uc5d0 \ub300\ud574\uc11c\ub3c4 \ud070 \ube44\uc6a9\uc774 \ub4dc\ub294 \uc791\uc5c5\uc774\uae30 \ub54c\ubb38\uc5d0, \uc0ac\uc6a9\ub418\ub294 \uac00\uc2a4\uc758 \uc591\uc744 \ucd5c\uc18c\ud654\ud558\uae30 \uc704\ud574 \ub300\ubd80\ubd84\uc758 \uacbd\uc6b0 SDK \uceec\ub809\uc158\uc744 \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ucd5c\uc2e0 \uceec\ub809\uc158\uacfc \uad00\ub828\ub41c \ubb38\uc11c\ub294 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.rs/near-sdk/latest/near_sdk/collections/index.html"},"rust \ubb38\uc11c"),"\uc5d0\uc11c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"SDK\uc5d0 \uc874\uc7ac\ud558\ub294 \ub2e4\uc74c \ub370\uc774\ud130 \uad6c\uc870\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"SDK \uceec\ub809\uc158"),(0,l.kt)("th",{parentName:"tr",align:null},"\ud574\ub2f9\ud558\ub294 ",(0,l.kt)("inlineCode",{parentName:"th"},"std"),"\xa0"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LazyOption<T>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Option<T>")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc2a4\ud1a0\ub9ac\uc9c0\uc758 \uc120\ud0dd\uc801 \uac12\uc785\ub2c8\ub2e4. \uc774 \uac12\uc740 \uc0c1\ud638 \uc791\uc6a9\ud560 \ub54c\ub9cc \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0\uc11c \uc77d\uc5b4 \uc635\ub2c8\ub2e4. \uc774 \uac12\uc740 \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 \uac12\uc774 \uc800\uc7a5\ub418\uc5b4 \uc788\uc73c\uba74 ",(0,l.kt)("inlineCode",{parentName:"td"},"Some<T>"),", \uc811\ub450\uc0ac\uc5d0 \uac12\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0 ",(0,l.kt)("inlineCode",{parentName:"td"},"None"),"\uc785\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Vector<T>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Vec<T>")),(0,l.kt)("td",{parentName:"tr",align:null},"\ud655\uc7a5 \uac00\ub2a5\ud55c \ubc30\uc5f4 \uc720\ud615\uc785\ub2c8\ub2e4. \uac12\uc740 \uba54\ubaa8\ub9ac\uc5d0\uc11c \uc0e4\ub529\ub418\uba70, \ub3d9\uc801\uc73c\ub85c \ud06c\uae30\uac00 \uc870\uc815\ub418\uace0, \ubc18\ubcf5 \ubc0f \uc778\ub371\uc2f1 \uac00\ub2a5\ud55c \uac12\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"LookupMap<K,","\xa0","V>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"HashMap<K,","\xa0","V>")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc774 \uad6c\uc870\ub294 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ud0a4-\uac12 \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \ub458\ub7ec\uc2fc \uc587\uc740 \ub798\ud37c \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4. \uc774 \uad6c\uc870\uc5d0\ub294 \ub9f5\uc758 \uc694\uc18c\uc5d0 \ub300\ud55c \uba54\ud0c0\ub370\uc774\ud130\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc73c\ubbc0\ub85c \ubc18\ubcf5\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"UnorderedMap<K,","\xa0","V>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"HashMap<K,","\xa0","V>")),(0,l.kt)("td",{parentName:"tr",align:null},"\ub370\uc774\ud130 \uad6c\uc870\uc758 \uc694\uc18c\ub97c \ubc18\ubcf5\ud560 \uc218 \uc788\ub3c4\ub85d \ucd94\uac00 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud55c\ub2e4\ub294 \uc810\uc744 \uc81c\uc678\ud558\uba74, ",(0,l.kt)("inlineCode",{parentName:"td"},"LookupMap"),"\uacfc \uc720\uc0ac\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"TreeMap<K,","\xa0","V>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"BTreeMap<K,","\xa0","V>")),(0,l.kt)("td",{parentName:"tr",align:null},"\uae30\ubcf8 \uad6c\ud604\uc740 ",(0,l.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/AVL_tree"},"AVL \ud2b8\ub9ac"),"\ub97c \uae30\ubc18\uc73c\ub85c \ud569\ub2c8\ub2e4. \uc774 \uad6c\uc870\ub294 \uc77c\uad00\ub41c \uc21c\uc11c\uac00 \ud544\uc694\ud558\uac70\ub098, \ucd5c\uc18c/\ucd5c\ub300 \ud0a4\uc5d0 \uc561\uc138\uc2a4\ud574\uc57c \ud560 \ub54c \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LookupSet<T>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"HashSet<T>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LookupMap"),"\uacfc \uc720\uc0ac\ud558\uc9c0\ub9cc \uac12\uc744 \uc800\uc7a5\ud558\uc9c0 \uc54a\ub294 \uc9d1\ud569\uc785\ub2c8\ub2e4. \uc774\ub294 \uac12\uc758 \uace0\uc720\ud55c \uc874\uc7ac \uc5ec\ubd80\ub97c \ud655\uc778\ud558\ub294 \ub370 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uad6c\uc870\ub294 \ubc18\ubcf5\ud560 \uc218 \uc5c6\uc73c\uba70, \uac12 \uc870\ud68c\uc5d0\ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UnorderedSet<T>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"HashSet<T>")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc138\ud2b8\uc5d0 \ud3ec\ud568\ub41c \uc694\uc18c\uc5d0 \ub300\ud55c \ucd94\uac00 \uba54\ud0c0\ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\ub294 \ubc18\ubcf5 \uac00\ub2a5\ud55c \uc790\ub8cc\ud615\uc73c\ub85c, ",(0,l.kt)("inlineCode",{parentName:"td"},"LookupSet"),"\uacfc \uac19\uc2b5\ub2c8\ub2e4.")))),(0,l.kt)("h2",{id:"\uc778\uba54\ubaa8\ub9ac-hashmap-vs-\uc601\uad6c-unorderedmap"},"\uc778\uba54\ubaa8\ub9ac ",(0,l.kt)("inlineCode",{parentName:"h2"},"HashMap")," vs \uc601\uad6c ",(0,l.kt)("inlineCode",{parentName:"h2"},"UnorderedMap")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"HashMap"),"\uc740 \ubaa8\ub4e0 \ub370\uc774\ud130\ub97c \uba54\ubaa8\ub9ac\uc5d0 \ubcf4\uad00\ud569\ub2c8\ub2e4. \uc561\uc138\uc2a4\ud558\ub824\uba74 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uc804\uccb4 \ub9f5\uc744 \uc5ed\uc9c1\ub82c\ud654\ud574\uc57c \ud569\ub2c8\ub2e4. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UnorderedMap"),"\uc740 \uc601\uad6c \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 \ub370\uc774\ud130\ub97c \ubcf4\uad00\ud569\ub2c8\ub2e4. \uc694\uc18c\uc5d0 \uc561\uc138\uc2a4\ud558\ub824\uba74 \ud574\ub2f9 \uc694\uc18c\ub97c \uc5ed\uc9c1\ub82c\ud654\ud558\uae30\ub9cc \ud558\uba74 \ub429\ub2c8\ub2e4. ")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"HashMap")," \uc0ac\uc6a9 \uc0ac\ub840:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\ud55c \ubc88\uc758 \ud568\uc218 \ud638\ucd9c"),"\ub85c \uceec\ub809\uc158\uc758 \ubaa8\ub4e0 \uc694\uc18c\ub97c \u200b\u200b\ubc18\ubcf5\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc694\uc18c\uc758 \uc218\ub294 \uc791\uac70\ub098 \uace0\uc815\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4(\uc608: 10\uac1c \ubbf8\ub9cc).")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"UnorderedMap")," \uc0ac\uc6a9 \uc0ac\ub840:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uceec\ub809\uc158\uc758 \uc81c\ud55c\ub41c \ud558\uc704 \uc9d1\ud569(\uc608: \ud638\ucd9c\ub2f9 \ud558\ub098 \ub610\ub294 \ub450 \uac1c\uc758 \uc694\uc18c)\uc5d0 \uc561\uc138\uc2a4\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uceec\ub809\uc158\uc744 \uba54\ubaa8\ub9ac\uc5d0 \ub9de\ucd9c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("p",null,"\uadf8 \uc774\uc720\ub294, ",(0,l.kt)("inlineCode",{parentName:"p"},"HashMap"),"\uc774 \ud558\ub098\uc758 \uc2a4\ud1a0\ub9ac\uc9c0 \uc791\uc5c5\uc73c\ub85c \uc804\uccb4 \uceec\ub809\uc158\uc744 \uc5ed\uc9c1\ub82c\ud654(\ubc0f \uc9c1\ub82c\ud654)\ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uc804\uccb4 \uceec\ub809\uc158\uc5d0 \uc561\uc138\uc2a4\ud558\ub294 \uac83\uc774 ",(0,l.kt)("inlineCode",{parentName:"p"},"N"),"\uac1c\uc758 \uc2a4\ud1a0\ub9ac\uc9c0 \uc791\uc5c5\uc744 \ud1b5\ud574 \ubaa8\ub4e0 \uc694\uc18c\uc5d0 \uc561\uc138\uc2a4\ud558\ub294 \uac83\ubcf4\ub2e4 \uac00\uc2a4 \ube44\uc6a9\uc774 \uc800\ub834\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"HashMap")," \uc608\uc2dc:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'/// Using Default initialization.\n#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize, Default)]\npub struct Contract {\n    pub status_updates: HashMap<AccountId, String>,\n}\n\n#[near_bindgen]\nimpl Contract {\n    pub fn set_status(&mut self, status: String) {\n        self.status_updates.insert(env::predecessor_account_id(), status);\n        assert!(self.status_updates.len() <= 10, "Too many messages");\n    }\n\n    pub fn clear(&mut self) {\n        // Effectively iterating through all removing them.\n        self.status_updates.clear();\n    }\n\n    pub fn get_all_updates(self) -> HashMap<AccountId, String> {\n        self.status_updates\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"UnorderedMap")," \uc608\uc2dc:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]\npub struct Contract {\n    pub status_updates: UnorderedMap<AccountId, String>,\n}\n\n#[near_bindgen]\nimpl Contract {\n    #[init]\n    pub fn new() -> Self {\n        // Initializing `status_updates` with unique key prefix.\n        Self {\n            status_updates: UnorderedMap::new(b\"s\".to_vec()),\n        }\n    }\n\n    pub fn set_status(&mut self, status: String) {\n        self.status_updates.insert(&env::predecessor_account_id(), &status);\n        // Note, don't need to check size, since `UnorderedMap` doesn't store all data in memory.\n    }\n\n    pub fn delete_status(&mut self) {\n        self.status_updates.remove(&env::predecessor_account_id());\n    }\n\n    pub fn get_status(&self, account_id: AccountId) -> Option<String> {\n        self.status_updates.get(&account_id)\n    }\n}\n")),(0,l.kt)("h2",{id:"\uc624\ub958\uac00-\ubc1c\uc0dd\ud558\uae30-\uc26c\uc6b4-\ud328\ud134"},"\uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uae30 \uc26c\uc6b4 \ud328\ud134"),(0,l.kt)("p",null,"\uac12\uc740 \uba54\ubaa8\ub9ac\uc5d0 \ubcf4\uad00\ub418\uc9c0 \uc54a\uace0 \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0\uc11c \ub290\ub9ac\uac8c \ub85c\ub4dc\ub418\uae30 \ub54c\ubb38\uc5d0, \uceec\ub809\uc158\uc774 \uad50\uccb4\ub418\uac70\ub098 \uc81c\uac70\ub418\uba74 \uc2a4\ud1a0\ub9ac\uc9c0\uac00 \uc9c0\uc6cc\uc9c0\ub294\uc9c0 \ud655\uc778\ud558\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4. \ub610\ud55c \uceec\ub809\uc158\uc774 \uc218\uc815\ub418\uba74 \ub300\ubd80\ubd84\uc758 \uceec\ub809\uc158\uc774 \uc77c\ubd80 \uba54\ud0c0\ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\uae30 \ub54c\ubb38\uc5d0, \uceec\ub809\uc158 \uc790\uccb4\uac00 \uc0c1\ud0dc\uc5d0\uc11c \uc5c5\ub370\uc774\ud2b8\ub418\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc77c\ubd80 \ud328\ud134\uc740 \uc790\ub8cc\ud615 \uc218\uc900\uc5d0\uc11c \uc81c\ud55c\ud560 \uc218 \uc5c6\ub294 \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uae30 \uc27d\uace0, \ud574\ub2f9 \ud328\ud134\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'use near_sdk::store::UnorderedMap;\n\nlet mut m = UnorderedMap::<u8, String>::new(b"m");\nm.insert(1, "test".to_string());\nassert_eq!(m.len(), 1);\nassert_eq!(m.get(&1), Some(&"test".to_string()));\n\n// Bug 1: Should not replace any collections without clearing state, this will reset any\n// metadata, such as the number of elements, leading to bugs. If you replace the collection\n// with something with a different prefix, it will be functional, but you will lose any\n// previous data and the old values will not be removed from storage.\nm = UnorderedMap::new(b"m");\nassert!(m.is_empty());\nassert_eq!(m.get(&1), Some(&"test".to_string()));\n\n// Bug 2: Should not use the same prefix as another collection\n// or there will be unexpected side effects.\nlet m2 = UnorderedMap::<u8, String>::new(b"m");\nassert!(m2.is_empty());\nassert_eq!(m2.get(&1), Some(&"test".to_string()));\n\n// Bug 3: forgetting to save the collection in storage. When the collection is attached to\n// the contract state (`self` in `#[near_bindgen]`) this will be done automatically, but if\n// interacting with storage manually or working with nested collections, this is relevant.\nuse near_sdk::store::Vector;\n\n// Simulate roughly what happens during a function call that initializes state.\n{\n    let v = Vector::<u8>::new(b"v");\n    near_sdk::env::state_write(&v);\n}\n\n// Simulate what happens during a function call that just modifies the collection\n// but does not store the collection itself.\n{\n    let mut v: Vector<u8> = near_sdk::env::state_read().unwrap();\n    v.push(1);\n    // The bug is here that the collection itself if not written back\n}\n\nlet v: Vector<u8> = near_sdk::env::state_read().unwrap();\n// This will report as if the collection is empty, even though the element exists\nassert!(v.get(0).is_none());\nassert!(\n    near_sdk::env::storage_read(&[b"v".as_slice(), &0u32.to_le_bytes()].concat()).is_some()\n);\n\n// Bug 4 (only relevant for `near_sdk::store`): These collections will cache writes as well\n// as reads, and the writes are performed on [`Drop`](https://doc.rust-lang.org/std/ops/trait.Drop.html)\n// so if the collection is kept in static memory or something like `std::mem::forget` is used,\n// the changes will not be persisted.\nuse near_sdk::store::LookupSet;\n\nlet mut m: LookupSet<u8> = LookupSet::new(b"l");\nm.insert(1);\nassert!(m.contains(&1));\n\n// This would be the fix, manually flushing the intermediate changes to storage.\n// m.flush();\nstd::mem::forget(m);\n\nm = LookupSet::new(b"l");\nassert!(!m.contains(&1));\n')),(0,l.kt)("h2",{id:"\uc601\uad6c-\uceec\ub809\uc158-\ud398\uc774\uc9c0-\ub9e4\uae30\uae30"},"\uc601\uad6c \uceec\ub809\uc158 \ud398\uc774\uc9c0 \ub9e4\uae30\uae30"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"UnorderedMap"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"UnorderedSet")," \uadf8\ub9ac\uace0 ",(0,l.kt)("inlineCode",{parentName:"p"},"Vector"),"\uc640 \uac19\uc740 \uc601\uad6c \uceec\ub809\uc158\uc5d0\ub294 \uc694\uc18c\ub97c \ubaa8\ub450 \uc77d\uc744 \uc218 \uc788\ub294 \uac00\uc2a4\uc758 \uc591\ubcf4\ub2e4 \ub354 \ub9ce\uc740 \uc694\uc18c\uac00 \ud3ec\ud568\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. view \ud638\ucd9c\uc744 \ud1b5\ud574 \ubaa8\ub450 \ub178\ucd9c\ud558\uae30 \uc704\ud574, \ud398\uc774\uc9c0 \ub9e4\uae40\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774 \uc791\uc5c5\uc740 ",(0,l.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/iter/struct.Skip.html"},(0,l.kt)("inlineCode",{parentName:"a"},"Skip")),"\uacfc ",(0,l.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/iter/struct.Take.html"},(0,l.kt)("inlineCode",{parentName:"a"},"Take")),"\ub97c \ud3ec\ud568\ud55c \ubc18\ubcf5\uc790(iterator)\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 \ubc94\uc704 \ub0b4\uc758 \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0\uc11c \uc694\uc18c\ub9cc \ub85c\ub4dc\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"UnorderedMap"),"\uc5d0 \ub300\ud55c \ud398\uc774\uc9c0 \ub9e4\uae40 \uc608\uc2dc:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]\npub struct Contract {\n    pub status_updates: UnorderedMap<AccountId, String>,\n}\n\n#[near_bindgen]\nimpl Contract {\n    /// Retrieves multiple elements from the `UnorderedMap`.\n    /// - `from_index` is the index to start from.\n    /// - `limit` is the maximum number of elements to return.\n    pub fn get_updates(&self, from_index: usize, limit: usize) -> Vec<(AccountId, String)> {\n        self.status_updates\n            .iter()\n            .skip(from_index)\n            .take(limit)\n            .collect()\n    }\n}\n")),(0,l.kt)("h2",{id:"lookupmap-vs-unorderedmap"},(0,l.kt)("inlineCode",{parentName:"h2"},"LookupMap")," vs ",(0,l.kt)("inlineCode",{parentName:"h2"},"UnorderedMap")),(0,l.kt)("h3",{id:"\uae30\ub2a5"},"\uae30\ub2a5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UnorderedMap"),"\uc740 \ud0a4\uc640 \uac12\uc5d0 \ub300\ud55c \ubc18\ubcf5\uc744 \uc9c0\uc6d0\ud558\uace0, \ud398\uc774\uc9c0 \ub9e4\uae40\ub3c4 \uc9c0\uc6d0\ud569\ub2c8\ub2e4. \ub0b4\ubd80\uc801\uc73c\ub85c\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uad6c\uc870\ub97c \uac00\uc9d1\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud0a4\uc5d0\uc11c \uc778\ub371\uc2a4\ub85c\uc758 \ub9f5"),(0,l.kt)("li",{parentName:"ul"},"\ud0a4 \ubca1\ud130"),(0,l.kt)("li",{parentName:"ul"},"\uac12 \ubca1\ud130"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LookupMap"),"\uc740 \ud0a4\uc5d0\uc11c \uac12\uc73c\ub85c\uc758 \ub9e4\ud551\ub9cc \uc788\uc2b5\ub2c8\ub2e4. \ud0a4 \ubca1\ud130\uac00 \uc5c6\uc73c\uba74 \ud0a4\ub97c \ubc18\ubcf5\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc131\ub2a5"},"\uc131\ub2a5"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"LookupMap"),"\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"UnorderedMap"),"\uc5d0 \ube44\ud574 \uc131\ub2a5\uc774 \ub354 \uc88b\uace0 \ub370\uc774\ud130 \uc800\uc7a5\ub7c9\uc774 \uc801\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UnorderedMap"),"\uc740 \uac12\uc744 \uac00\uc838\uc624\uae30 \uc704\ud574 ",(0,l.kt)("inlineCode",{parentName:"li"},"2"),"\uac1c\uc758 \uc2a4\ud1a0\ub9ac\uc9c0 \uc77d\uae30\uac00 \ud544\uc694\ud558\uace0, \uc0c8 \ud56d\ubaa9\uc744 \uc0bd\uc785\ud558\uae30 \uc704\ud574\uc11c\ub294 ",(0,l.kt)("inlineCode",{parentName:"li"},"3"),"\uac1c\uc758 \uc2a4\ud1a0\ub9ac\uc9c0 \uc4f0\uae30\uac00 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LookupMap"),"\uc740 \uac12\uc744 \uac00\uc838\uc624\uae30 \uc704\ud574 \ud558\ub098\uc758 \uc2a4\ud1a0\ub9ac\uc9c0 \uc77d\uae30\ub9cc \ud544\uc694\ud558\uace0 \uac12\uc744 \uc800\uc7a5\ud558\uae30 \uc704\ud574 \ud558\ub098\uc758 \uc2a4\ud1a0\ub9ac\uc9c0 \uc4f0\uae30\ub9cc \ud544\uc694\ud569\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc2a4\ud1a0\ub9ac\uc9c0-\uacf5\uac04"},"\uc2a4\ud1a0\ub9ac\uc9c0 \uacf5\uac04"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"UnorderedMap"),"\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"LookupMap"),"\uc5d0 \ube44\ud574 \ud56d\ubaa9\uc5d0 \ub354 \ub9ce\uc740 \uc800\uc7a5 \uacf5\uac04\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UnorderedMap"),"\uc740 \ud0a4\ub97c \ub450 \ubc88(\uccab \ubc88\uc9f8 \ub9f5\uc5d0 \ud55c \ubc88, \ud0a4 \ubca1\ud130\uc5d0 \ud55c \ubc88), \uac12\uc744 \ud55c \ubc88 \uc800\uc7a5\ud569\ub2c8\ub2e4. \ub610\ud55c \ubca1\ud130\uc640 \uc811\ub450\uc0ac\uc758 \uae38\uc774\ub97c \uc800\uc7a5\ud558\uae30 \uc704\ud55c \uc0c1\uc218\uac00 \ub354 \ub192\uc740 \uac12\uc744 \uac00\uc9d1\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LookupMap"),"\uc740 \ud0a4\uc640 \uac12\uc744 \ud55c \ubc88\ub9cc \uc800\uc7a5\ud569\ub2c8\ub2e4.")),(0,l.kt)("h2",{id:"lazyoption"},(0,l.kt)("inlineCode",{parentName:"h2"},"LazyOption")),(0,l.kt)("p",null,"\uc774\ub294 \ub2e8\uc77c \uac12\ub9cc \uc800\uc7a5\ud558\ub294 \uc601\uad6c \uceec\ub809\uc158 \uc790\ub8cc\ud615\uc785\ub2c8\ub2e4. \ubaa9\ud45c\ub294 \ucee8\ud2b8\ub799\ud2b8\uac00 \ud544\uc694\ud560 \ub54c\uae4c\uc9c0 \uc8fc\uc5b4\uc9c4 \uac12\uc744 \uc5ed\uc9c1\ub82c\ud654\ud558\ub294 \uac83\uc744 \ubc29\uc9c0\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \uc608\uc2dc\ub85c\ub294 view \ud638\ucd9c\uc5d0\uc11c \uc694\uccad\ub420 \ub54c\ub9cc \ud544\uc694\ud55c \uba54\ud0c0\ub370\uc774\ud130\uc758 \ud070 blob\uc744 \ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc774\ub294 \ub300\ubd80\ubd84\uc758 \ucee8\ud2b8\ub799\ud2b8 \uc791\uc5c5\uc5d0\ub294 \ud544\uc694\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774\ub294 \uac12\uc744 \ubcf4\uc720\ud560 \uc218 \uc788\uac70\ub098 \ubcf4\uc720\ud558\uc9c0 \uc54a\uc744 \uc218 \uc788\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"Option"),"\ucc98\ub7fc \uc791\ub3d9\ud558\uba70, \ub2e4\ub978 \uc601\uad6c \uceec\ub809\uc158\uacfc \ub9c8\ucc2c\uac00\uc9c0\ub85c \uace0\uc720\ud55c \uc811\ub450\uc0ac(\uc774 \uacbd\uc6b0 \ud0a4)\uac00 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]\npub struct Contract {\n    pub metadata: LazyOption<Metadata>,\n}\n\n#[derive(Serialize, Deserialize, BorshDeserialize, BorshSerialize)]\n#[serde(crate = "near_sdk::serde")]\npub struct Metadata {\n    data: String,\n    image: Base64Vec,\n    blobs: Vec<String>,\n}\n\n#[near_bindgen]\nimpl Contract {\n    #[init]\n    pub fn new(metadata: Metadata) -> Self {\n        Self {\n            metadata: LazyOption::new(b"m", Some(metadata)),\n        }\n    }\n\n    pub fn get_metadata(&self) -> Metadata {\n        // `.get()` reads and deserializes the value from the storage. \n        self.metadata.get().unwrap()\n    }\n}\n')))}m.isMDXComponent=!0}}]);