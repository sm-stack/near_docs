"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4670],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>c});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),u=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=u(r),c=a,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return r?n.createElement(k,o(o({ref:e},s),{},{components:r})):n.createElement(k,o({ref:e},s))}));function c(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62550:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),o=["components"],i={id:"introduction",title:"\ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070 Zero to Hero",sidebar_label:"\uc18c\uac1c"},p=void 0,u={unversionedId:"tutorials/fts/introduction",id:"tutorials/fts/introduction",title:"\ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070 Zero to Hero",description:"\uc774 Zero to Hero \uc2dc\ub9ac\uc988\uc5d0\uc11c\ub294 \ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070(FT) \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \ubaa8\ub4e0 \uce21\uba74\uc744 \ub2e4\ub8e8\ub294 \uc77c\ub828\uc758 \ud29c\ud1a0\ub9ac\uc5bc\uc744 \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/../docs/3.tutorials/fts/0-intro.md",sourceDirName:"3.tutorials/fts",slug:"/tutorials/fts/introduction",permalink:"/near_docs/zh-CN/tutorials/fts/introduction",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/fts/0-intro.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"2023\u5e743\u67089\u65e5",sidebarPosition:0,frontMatter:{id:"introduction",title:"\ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070 Zero to Hero",sidebar_label:"\uc18c\uac1c"},sidebar:"\ud29c\ud1a0\ub9ac\uc5bc",previous:{title:"\uac8c\uc73c\ub978 \ubbfc\ud305, \uceec\ub809\uc158 \ub4f1!",permalink:"/near_docs/zh-CN/tutorials/nfts/series"},next:{title:"\uc0ac\uc804 \ubc30\ud3ec\ub41c \ucee8\ud2b8\ub799\ud2b8",permalink:"/near_docs/zh-CN/tutorials/fts/predeployed-contract"}},s={},d=[{value:"\uc804\uc81c \uc870\uac74",id:"\uc804\uc81c-\uc870\uac74",level:2},{value:"\uac1c\uc694",id:"\uac1c\uc694",level:2},{value:"\ub2e4\uc74c \ub2e8\uacc4",id:"\ub2e4\uc74c-\ub2e8\uacc4",level:2}],m={toc:d};function c(t){var e=t.components,r=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\uc774 ",(0,l.kt)("em",{parentName:"p"},"Zero to Hero")," \uc2dc\ub9ac\uc988\uc5d0\uc11c\ub294 \ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070(FT) \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \ubaa8\ub4e0 \uce21\uba74\uc744 \ub2e4\ub8e8\ub294 \uc77c\ub828\uc758 \ud29c\ud1a0\ub9ac\uc5bc\uc744 \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc0ac\uc804 \ubc30\ud3ec\ub41c \ucee8\ud2b8\ub799\ud2b8\uc640 \uc0c1\ud638 \uc791\uc6a9\ud558\ub294 \uac83\uc73c\ub85c \uc2dc\uc791\ud558\uace0, \ub9c8\uc9c0\ub9c9\uc5d0\ub294 \ud45c\uc900\uc758 \ubaa8\ub4e0 \ud655\uc7a5\uc744 \uc9c0\uc6d0\ud558\ub294 \ubcf8\uaca9\uc801\uc778 FT \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uad6c\ucd95\ud558\uac8c \ub429\ub2c8\ub2e4.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\uc804\uc81c-\uc870\uac74"},"\uc804\uc81c \uc870\uac74"),(0,l.kt)("p",null,"\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc744 \uc131\uacf5\uc801\uc73c\ub85c \uc644\ub8cc\ud558\ub824\uba74 \ub2e4\uc74c\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/develop/prerequisites"},"Rust")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/concepts/basics/accounts/creating-accounts"},"NEAR TestNet \uacc4\uc815")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/tools/near-cli#setup"},"NEAR-CLI"))),(0,l.kt)("admonition",{title:"Rust\uac00 \ucc98\uc74c\uc774\uc2e0\uac00\uc694?",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Rust\ub97c \ucc98\uc74c \uc0ac\uc6a9\ud558\uace0 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uac1c\ubc1c\uc5d0 \ub6f0\uc5b4\ub4e4\uace0 \uc2f6\ub2e4\uba74 ",(0,l.kt)("a",{parentName:"p",href:"/develop/quickstart-guide"},"\ube60\ub978 \uc2dc\uc791 \uac00\uc774\ub4dc"),"\uac00 \uc2dc\uc791\ud558\uae30\uc5d0 \uc88b\uc740 \uacf3\uc785\ub2c8\ub2e4.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\uac1c\uc694"},"\uac1c\uc694"),(0,l.kt)("p",null,"\ub2e4\uc74c\uc740 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Zero"))," to ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Hero")),"\ub85c \uc21c\uc2dd\uac04\uc5d0 \ub370\ub824\ub2e4 \uc904 \ub2e8\uacc4\uc785\ub2c8\ub2e4! \ud83d\udcaa"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\ub2e8\uacc4"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc774\ub984"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/tutorials/fts/predeployed-contract"},"\uc0ac\uc804 \ubc30\ud3ec\ub41c \ucee8\ud2b8\ub799\ud2b8")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \ucf54\ub529, \uc0dd\uc131 \ub610\ub294 \ubc30\ud3ec\ud560 \ud544\uc694 \uc5c6\uc774 NFT\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/tutorials/fts/skeleton"},"\ucee8\ud2b8\ub799\ud2b8 \uc544\ud0a4\ud14d\ucc98")),(0,l.kt)("td",{parentName:"tr",align:null},"FT \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \uae30\ubcf8 \uc544\ud0a4\ud14d\ucc98\ub97c \ubc30\uc6b0\uace0 \ucf54\ub4dc\ub97c \ucef4\ud30c\uc77c\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/tutorials/fts/defining-a-token"},"\ud1a0\ud070 \uc815\uc758")),(0,l.kt)("td",{parentName:"tr",align:null},"FT\ub97c \uac16\ub294\ub2e4\ub294 \uac83\uc774 \ubb34\uc5c7\uc744 \uc758\ubbf8\ud558\ub294\uc9c0, \uadf8\ub9ac\uace0 \uc790\uc2e0\ub9cc\uc758 FT\ub97c \ucee4\uc2a4\ud130\ub9c8\uc774\uc9d5\ud558\ub294 \ubc29\ubc95\uc744 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uc138\uc694.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/tutorials/fts/circulating-supply"},"\uc21c\ud658 \uacf5\uae09")),(0,l.kt)("td",{parentName:"tr",align:null},"\ucd08\uae30 \uacf5\uae09\uc744 \uc0dd\uc131\ud558\uace0 \uc9c0\uac11\uc5d0 \ud1a0\ud070\uc744 \ud45c\uc2dc\ud558\ub294 \ubc29\ubc95\uc744 \uc54c\uc544\ubcf4\uc138\uc694.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/tutorials/fts/registering-accounts"},"\uacc4\uc815 \ub4f1\ub85d")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc545\uc758\uc801\uc778 \uc0ac\uc6a9\uc790\uac00 \uc790\uae08\uc744 \ub0ad\ube44\ud558\uc9c0 \uc54a\ub3c4\ub85d \uc2a4\ud1a0\ub9ac\uc9c0 \uad00\ub9ac \ud45c\uc900\uc744 \uad6c\ud604\ud558\uace0 \uc774\ud574\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc744 \uc0b4\ud3b4\ubcf4\uc138\uc694.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/tutorials/fts/transfers"},"FT \uc804\uc1a1")),(0,l.kt)("td",{parentName:"tr",align:null},"FT\ub97c \uc804\uc1a1\ud558\ub294 \ubc29\ubc95\uc744 \uc54c\uc544\ubcf4\uace0 \ud575\uc2ec \ud45c\uc900\uc774 \uc81c\uacf5\ud558\ub294 \uc9c4\uc815\ud55c \ud798\uc744 \ubc1c\uacac\ud558\uc138\uc694.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/tutorials/fts/marketplace"},"\ub9c8\ucf13\ud50c\ub808\uc774\uc2a4")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc77c\ubc18\uc801\uc778 \ub9c8\ucf13\ud50c\ub808\uc774\uc2a4\uac00 NEAR\uc5d0\uc11c \uc791\ub3d9\ud558\ub294 \ubc29\uc2dd\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uace0, \ub300\uccb4 \uac00\ub2a5 \ud1a0\ud070\uc744 \uc0ac\uc6a9\ud558\uc5ec NFT\ub97c \uc0ac\uace0 \ud314 \uc218 \uc788\ub294 \uc77c\ubd80 \ucf54\ub4dc\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uc138\uc694.")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\ub2e4\uc74c-\ub2e8\uacc4"},"\ub2e4\uc74c \ub2e8\uacc4"),(0,l.kt)("p",null,"\uc2dc\uc791\ud560 \uc900\ube44\uac00 \ub418\uc168\uc2b5\ub2c8\uae4c? ",(0,l.kt)("a",{parentName:"p",href:"/tutorials/fts/predeployed-contract"},"\uc0ac\uc804 \ubc30\ud3ec\ub41c \ucee8\ud2b8\ub799\ud2b8")," \ud29c\ud1a0\ub9ac\uc5bc\ub85c \uc774\ub3d9\ud558\uc5ec \ud559\uc2b5\uc744 \uc2dc\uc791\ud558\uc138\uc694!"),(0,l.kt)("p",null,"\ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070\uacfc \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ub300\ud574 \uc774\ubbf8 \uc54c\uace0 \uc788\ub2e4\uba74, \uac74\ub108\ub6f0\uace0 \uad00\uc2ec \uc788\ub294 \ud29c\ud1a0\ub9ac\uc5bc\ub85c \ubc14\ub85c \uc774\ub3d9\ud558\uc2ed\uc2dc\uc624. \ud29c\ud1a0\ub9ac\uc5bc\uc740 \uc8fc\uc5b4\uc9c4 \uc9c0\uc810\uc5d0\uc11c \uc2dc\uc791\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uacc4\ub418\uc5c8\uc2b5\ub2c8\ub2e4!"),(0,l.kt)("admonition",{title:"\uc9c8\ubb38?",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\ud83d\udc49 ",(0,l.kt)("a",{parentName:"p",href:"https://near.chat/"},"Discord"),"\uc5d0 \uac00\uc785\ud558\uace0 ",(0,l.kt)("inlineCode",{parentName:"p"},"#development")," \ucc44\ub110\uc5d0\uc11c \uc54c\ub824\uc8fc\uc138\uc694. \ud83d\udc48"),(0,l.kt)("p",{parentName:"admonition"},"\uc6b0\ub9ac\ub294 \ub610\ud55c DevRel \ud300\uc774 \ub2f9\uc2e0\uc758 \uc9c8\ubb38\uc5d0 \ub2f5\ud560 \uc218 \uc788\ub294 \uc2e4\uc2dc\uac04 ",(0,l.kt)("a",{parentName:"p",href:"https://near.org/office-hours/"},"Office Hour"),"\uc744 \ub9e4\uc77c \uac1c\ucd5c\ud569\ub2c8\ub2e4. \ud83e\udd14"),(0,l.kt)("p",{parentName:"admonition"},"\uc6d4\uc694\uc77c \u2013 \uae08\uc694\uc77c \uc624\uc804 11\uc2dc \u2013 \uc624\ud6c4 12\uc2dc(\ud0dc\ud3c9\uc591 \ud45c\uc900\uc2dc \uc624\ud6c4 6\uc2dc \u2013 \uc624\ud6c4 7\uc2dc)")))}c.isMDXComponent=!0}}]);