"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1629],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),k=r,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||l;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7802:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>h,frontMatter:()=>u,metadata:()=>k,toc:()=>g});var a=n(87462),r=n(63366),l=(n(67294),n(3905));const o=n.p+"assets/images/chapter-1-crossword-correct-f093ba5931ae05e401027e4b5fde27e6.gif";var i=n(39654);const s=n.p+"assets/images/function-call-action-2b02111458f75979134c13a027b3e328.png",p=n.p+"assets/images/access-keys-f3c746a11476ebf9dea14a62e3a6e109.png";var c=["components"],u={sidebar_position:5,sidebar_label:"\uc561\uc138\uc2a4 \ud0a4 \ubc0f \ub85c\uadf8\uc778 1/2",title:"\uc561\uc138\uc2a4 \ud0a4 \ubc0f \ub85c\uadf8\uc778 \ub2e4\ub8e8\uae30"},d="NEAR\ub85c \ub85c\uadf8\uc778",k={unversionedId:"tutorials/crosswords/beginner/logging-in",id:"tutorials/crosswords/beginner/logging-in",title:"\uc561\uc138\uc2a4 \ud0a4 \ubc0f \ub85c\uadf8\uc778 \ub2e4\ub8e8\uae30",description:"",source:"@site/../docs/3.tutorials/crosswords/02-beginner/05-logging-in.md",sourceDirName:"3.tutorials/crosswords/02-beginner",slug:"/tutorials/crosswords/beginner/logging-in",permalink:"/near_docs/tutorials/crosswords/beginner/logging-in",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/02-beginner/05-logging-in.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"Mar 9, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"\uc561\uc138\uc2a4 \ud0a4 \ubc0f \ub85c\uadf8\uc778 1/2",title:"\uc561\uc138\uc2a4 \ud0a4 \ubc0f \ub85c\uadf8\uc778 \ub2e4\ub8e8\uae30"},sidebar:"\ud29c\ud1a0\ub9ac\uc5bc",previous:{title:"\ud37c\uc990 \ucd94\uac00",permalink:"/near_docs/tutorials/crosswords/beginner/adding-a-puzzle"},next:{title:"\uc561\uc138\uc2a4 \ud0a4 \ubc0f \ub85c\uadf8\uc778 2/2",permalink:"/near_docs/tutorials/crosswords/beginner/logging-in-implementation"}},m={},g=[{value:"\uc774\uc804\uc5d0\ub294\u2026",id:"\uc774\uc804\uc5d0\ub294",level:2},{value:"\uc0c1\uae08 \uc804\uc1a1 \uc5c5\ub370\uc774\ud2b8",id:"\uc0c1\uae08-\uc804\uc1a1-\uc5c5\ub370\uc774\ud2b8",level:2},{value:"\uc561\uc138\uc2a4 \ud0a4",id:"\uc561\uc138\uc2a4-\ud0a4",level:2},{value:"\uc804\uccb4 \uc561\uc138\uc2a4 \ud0a4",id:"\uc804\uccb4-\uc561\uc138\uc2a4-\ud0a4",level:3},{value:"\ud568\uc218 \ud638\ucd9c \uc561\uc138\uc2a4 \ud0a4",id:"\ud568\uc218-\ud638\ucd9c-\uc561\uc138\uc2a4-\ud0a4",level:3},{value:"\ud0a4\uac00 \uc788\ub294 \uc608\uc2dc \uacc4\uc815",id:"\ud0a4\uac00-\uc788\ub294-\uc608\uc2dc-\uacc4\uc815",level:3},{value:"\uccab \ubc88\uc9f8 \ud0a4:",id:"\uccab-\ubc88\uc9f8-\ud0a4",level:4},{value:"\ub450 \ubc88\uc9f8 \ud0a4:",id:"\ub450-\ubc88\uc9f8-\ud0a4",level:4},{value:"\uc138 \ubc88\uc9f8 \ud0a4",id:"\uc138-\ubc88\uc9f8-\ud0a4",level:4},{value:"\ube14\ub85d\uccb4\uc778\uc5d0\uc11c &quot;\ub85c\uadf8\uc778&quot;\uc740 \ubb34\uc5c7\uc744 \uc758\ubbf8\ud569\ub2c8\uae4c?",id:"\ube14\ub85d\uccb4\uc778\uc5d0\uc11c-\ub85c\uadf8\uc778\uc740-\ubb34\uc5c7\uc744-\uc758\ubbf8\ud569\ub2c8\uae4c",level:2}],b={toc:g};function h(e){var t=e.components,n=(0,r.Z)(e,c);return(0,l.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"near\ub85c-\ub85c\uadf8\uc778"},"NEAR\ub85c \ub85c\uadf8\uc778"),(0,l.kt)("h2",{id:"\uc774\uc804\uc5d0\ub294"},"\uc774\uc804\uc5d0\ub294\u2026"),(0,l.kt)("p",null,"\uc774\uc804 \ucc55\ud130\uc5d0\uc11c \uc6b0\ub9ac\ub294 \ub2e8\uc21c\ud788 \uc0ac\uc6a9\uc790\uc758 \ub2f5\uc5d0 \ub300\ud574 \uc815\ub2f5 \ud574\uc2dc\ub97c \ud655\uc778\ud558\uc5ec \uc2ed\uc790\ub9d0\ud480\uc774 \ud37c\uc990\uc774 \ud574\uacb0\ub418\uc5c8\ub294\uc9c0 \uc5ec\ubd80\ub97c \ud45c\uc2dc\ud588\uc2b5\ub2c8\ub2e4."),(0,l.kt)("img",{src:o,width:"600"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\uc0c1\uae08-\uc804\uc1a1-\uc5c5\ub370\uc774\ud2b8"},"\uc0c1\uae08 \uc804\uc1a1 \uc5c5\ub370\uc774\ud2b8"),(0,l.kt)("p",null,"\uc774 \ucc55\ud130\uc5d0\uc11c \uc6b0\ub9ac\uc758 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ud37c\uc990\uc744 \uac00\uc7a5 \uba3c\uc800 \ud478\ub294 \uc0ac\ub78c\uc5d0\uac8c 5\u24c3\ub97c \ubcf4\ub0bc \uac83\uc785\ub2c8\ub2e4. \uc774\ub97c \uc704\ud574 \uc0ac\uc6a9\uc790\uc5d0\uac8c NEAR \uacc4\uc815\uc774 \uc788\uc5b4\uc57c \ud558\uace0, \uc774\ub97c \ud1b5\ud574 \ub85c\uadf8\uc778\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("admonition",{title:"\ub354 \ub098\uc740 \uc628\ubcf4\ub529",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc758 \ub4b7\ubd80\ubd84\uc5d0\uc11c\ub294 \uc0ac\uc6a9\uc790\uc5d0\uac8c NEAR \uacc4\uc815\uc774 \ud544\uc694\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",{parentName:"admonition"},"\ub85c\uadf8\uc778\uc740 \ub9ce\uc740 \ud0c8\uc911\uc559\ud654 \uc571\uc5d0\uc11c \uc911\uc694\ud558\uae30 \ub54c\ubb38\uc5d0, NEAR\uc5d0\uc11c \ub85c\uadf8\uc778\uc774 \uc5b4\ub5bb\uac8c \uc218\ud589\ub418\ub294\uc9c0, \uadf8\ub9ac\uace0 \ub2e4\ub978 \ube14\ub85d\uccb4\uc778\uacfc \ube44\uad50\ud560 \ub54c \uc5bc\ub9c8\ub098 \ub3c5\ud2b9\ud55c\uc9c0 \ubcf4\uc5ec\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("p",null,"\uc774 \uc804\uc1a1\uc740 \ud37c\uc990\uc744 \ud478\ub294 \uccab \ubc88\uc9f8 \uc0ac\uc6a9\uc790\uac00 \uc815\ub2f5\uc774 \uc788\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"submit_solution")," \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud560 \ub54c \ubc1c\uc0dd\ud569\ub2c8\ub2e4. \ud574\ub2f9 \ud568\uc218\ub97c \uc2e4\ud589\ud558\ub294 \ub3d9\uc548, \uc0ac\uc6a9\uc790\uac00 \uc815\ub2f5\uc744 \uc81c\ucd9c\ud588\ub294\uc9c0 \ud655\uc778\ud55c \ub2e4\uc74c \uc0c1\uae08\uc744 \uc591\ub3c4\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://explorer.testnet.near.org"},"NEAR \uc775\uc2a4\ud50c\ub85c\ub7ec"),"\uc5d0\uc11c \uc774 \uc804\uc1a1(\ubc0f \ubc1c\uc0dd\ud55c \ub2e4\ub978 \ub2e8\uacc4)\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4 ."),(0,l.kt)("p",null,"\uadf8\ub7ec\ub098 \uba3c\uc800 NEAR\uc758 \uac00\uc7a5 \ud765\ubbf8\ub86d\uace0 \uac15\ub825\ud55c \uae30\ub2a5 \uc911 \ud558\ub098\uc778 \uc561\uc138\uc2a4 \ud0a4\uc5d0 \ub300\ud574 \uc774\uc57c\uae30\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\uc561\uc138\uc2a4-\ud0a4"},"\uc561\uc138\uc2a4 \ud0a4"),(0,l.kt)("p",null,"\uc544\ub9c8 \ub2f9\uc2e0\uc740 \uacc4\uc815 \uc774\ub984\uc774 \uc22b\uc790\uc640 \ubb38\uc790\ub85c \uad6c\uc131\ub41c \uae34 \ubb38\uc790\uc5f4\uc778 \ub2e4\ub978 \ube14\ub85d\uccb4\uc778\uc5d0 \uc775\uc219\ud560 \uac83\uc785\ub2c8\ub2e4. NEAR\uc5d0\ub294 \ud14c\uc2a4\ud2b8\ub137\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"friend.testnet"),"\uc774\ub098 \uba54\uc778\ub137\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"friend.near"),"\uc640 \uac19\uc774 \uc0ac\ub78c\uc774 \uc77d\uc744 \uc218 \uc788\ub294 \ud615\ud0dc\uc758 \uc774\ub984\uc744 \uac00\uc9c4 \uacc4\uc815 \uc2dc\uc2a4\ud15c\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"NEAR\uc5d0\uc11c \uacc4\uc815\uc5d0 \ud0a4\ub97c \ucd94\uac00(\ubc0f \uc81c\uac70)\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud0a4\uc5d0\ub294 \uc804\uccb4 \uc561\uc138\uc2a4 \ud0a4\uc640 \ud568\uc218 \ud638\ucd9c \uc561\uc138\uc2a4 \ud0a4\uc758 \ub450 \uac00\uc9c0 \uc720\ud615\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc544\ub798 \uadf8\ub9bc\uc740 \uc804\uccb4 \uc561\uc138\uc2a4 \ud0a4(\ud070 \uae08\uc0c9 \ud0a4)\uc640 \ub450 \uac1c\uc758 \ud568\uc218 \ud638\ucd9c \uc561\uc138\uc2a4 \ud0a4\uac00 \uc788\ub294 \ud0a4\uccb4\uc778\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,l.kt)("figure",null,(0,l.kt)("img",{src:i.Z,width:"600",alt:"A keychain with three keys. A large, gold key represents the full-access keys on NEAR. The two other keys are gray and smaller, and have detachable latches on them. They represent function-call access key. Art created by alcantara_gabriel.near"}),(0,l.kt)("figcaption",null,"Art by ",(0,l.kt)("a",{href:"https://twitter.com/Bagriel_5_10",target:"_blank"},"alcantara_gabriel.near"))),(0,l.kt)("h3",{id:"\uc804\uccb4-\uc561\uc138\uc2a4-\ud0a4"},"\uc804\uccb4 \uc561\uc138\uc2a4 \ud0a4"),(0,l.kt)("p",null,"\uc804\uccb4 \uc561\uc138\uc2a4 \ud0a4\ub294 \uac00\uc7a5 \uc798 \ubcf4\ud638\ud574\uc57c \ud558\ub294 \ud0a4\uc785\ub2c8\ub2e4. \uc774\ub294 \ub2f9\uc2e0\uc758 \uacc4\uc815\uc5d0\uc11c \ubaa8\ub4e0 \uc790\uae08\uc744 \uc774\uccb4\ud558\uac70\ub098, \uacc4\uc815\uc744 \uc0ad\uc81c\ud558\uac70\ub098, ",(0,l.kt)("a",{parentName:"p",href:"/near_docs/tutorials/crosswords/beginner/actions"},"NEAR\uc5d0\uc11c \ub2e4\ub978 Action"),"\uc744 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/near_docs/tutorials/crosswords/basics/set-up-skeleton#creating-a-new-key-on-your-computer"},"\uc774\uc804 \ucc55\ud130"),"\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"near login")," \uba85\ub839\uc744 \uc0ac\uc6a9\ud588\uc744 \ub54c, \uc774 \uba85\ub839\uc740 NEAR Wallet\uc758 \uc804\uccb4 \uc561\uc138\uc2a4 \ud0a4\uc5d0 \ub300\ud574 ",(0,l.kt)("inlineCode",{parentName:"p"},"AddKey")," Action\uc744 \uc0ac\uc6a9\ud558\ub3c4\ub85d \uc694\uccad\ud558\uc5ec, \ucef4\ud4e8\ud130\uc5d0\uc11c \ub85c\uceec\ub85c \ub9cc\ub4e0 \ub610 \ub2e4\ub978 \uc804\uccb4 \uc561\uc138\uc2a4 \ud0a4\ub97c \uc0dd\uc131\ud558\uc600\uc2b5\ub2c8\ub2e4. NEAR CLI\ub294 \uadf8\ub807\uac8c \ub9cc\ub4e4\uc5b4\uc9c4 \uc0c8 \ud0a4\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubc30\ud3ec, \ud568\uc218 \ud638\ucd9c \ub4f1\uc744 \uc218\ud589\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"\ud568\uc218-\ud638\ucd9c-\uc561\uc138\uc2a4-\ud0a4"},"\ud568\uc218 \ud638\ucd9c \uc561\uc138\uc2a4 \ud0a4"),(0,l.kt)("p",null,'\ud568\uc218 \ud638\ucd9c \uc561\uc138\uc2a4 \ud0a4\ub294 \uc804\uccb4 \uc561\uc138\uc2a4 \ud0a4\ub9cc\ud07c \uac15\ub825\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 "\uc81c\ud55c\ub41c \uc561\uc138\uc2a4 \ud0a4"\ub77c\uace0\ub3c4 \ud569\ub2c8\ub2e4.'),(0,l.kt)("p",null,"\ud568\uc218 \ud638\ucd9c \uc561\uc138\uc2a4 \ud0a4\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uac83\ub4e4\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc5b4\ub5a4 \ucee8\ud2b8\ub799\ud2b8\ub97c \ud638\ucd9c\ud560 \uc218 \uc788\ub294\uc9c0"),(0,l.kt)("li",{parentName:"ul"},"\uc5b4\ub5a4 \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud560 \uc218 \uc788\ub294\uc9c0(\ubaa8\ub4e0 \ud568\uc218\uc5d0 \ub300\ud574\uc11c\ub3c4 \uac00\ub2a5)"),(0,l.kt)("li",{parentName:"ul"},"\uc774\ub7ec\ud55c \ud568\uc218 \ud638\ucd9c\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ud5c8\uc6a9\ub7c9\uc740 \uc5bc\ub9c8\uc778\uc9c0")),(0,l.kt)("p",null,"\uc774\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"FunctionCall")," Action\ub9cc \uc218\ud589\ud558\ub3c4\ub85d \ud5c8\uc6a9\ub429\ub2c8\ub2e4."),(0,l.kt)("img",{src:s,alt:"List of NEAR Actions with a highlight on the FunctionCall Action",width:"600"}),(0,l.kt)("h3",{id:"\ud0a4\uac00-\uc788\ub294-\uc608\uc2dc-\uacc4\uc815"},"\ud0a4\uac00 \uc788\ub294 \uc608\uc2dc \uacc4\uc815"),(0,l.kt)("p",null,"\ud558\ub098\uc758 \uc804\uccb4 \uc561\uc138\uc2a4 \ud0a4\uc640 \ub450 \uac1c\uc758 \ud568\uc218 \ud638\ucd9c \uc561\uc138\uc2a4 \ud0a4\uac00 \uc788\ub294 \ud14c\uc2a4\ud2b8\ub137 \uacc4\uc815\uc744 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \ubcf4\uc2dc\ub2e4\uc2dc\ud53c NEAR CLI ",(0,l.kt)("a",{parentName:"p",href:"https://docs.near.org/tools/near-cli#near-keys"},"\uba85\ub839 ",(0,l.kt)("inlineCode",{parentName:"a"},"keys")),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub2e4\uc74c\uacfc \uac19\uc740 \uc815\ubcf4\ub97c \ucd9c\ub825\ud569\ub2c8\ub2e4."),(0,l.kt)("img",{src:p,alt:"Terminal screen showing the access keys for an account, there is one full-access key and two function-call access keys"}),(0,l.kt)("p",null,"\uac01 \ud0a4\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h4",{id:"\uccab-\ubc88\uc9f8-\ud0a4"},"\uccab \ubc88\uc9f8 \ud0a4:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n  access_key: {\n    nonce: 72772126000000, // Large nonce, huh!\n      permission: {\n      FunctionCall: {\n        allowance: '777000000000000000000000000', // Equivalent to 777 NEAR\n          method_names: [], // Any methods can be called\n          receiver_id: 'puzzle.testnet' // This key can only call methods on puzzle.testnet\n      }\n    }\n  },\n  public_key: 'ed25519:9Hhm77W4KCFzFgK55sZgEMesYRaL8wV1kpqh8qntnSPV'\n}\n")),(0,l.kt)("p",null,"\uc704 \uc774\ubbf8\uc9c0\uc758 \uccab \ubc88\uc9f8 \ud0a4\ub294 ",(0,l.kt)("strong",{parentName:"p"},"\ubaa8\ub4e0 \uba54\uc11c\ub4dc"),"\uc5d0\uc11c \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"puzzle.testnet"),"\uc744 \ud638\ucd9c\ud560 \uc218 \uc788\ub294 \ud568\uc218 \ud638\ucd9c \uc561\uc138\uc2a4 \ud0a4\uc785\ub2c8\ub2e4. \ub9cc\uc57d \ud638\ucd9c\ud560 \uc218 \uc788\ub294 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc815\ud558\uc9c0 \uc54a\uc73c\uba74, \ubaa8\ub4e0 \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ub098\ud0c0\ub0b4\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"method_names")," \uc606\uc5d0 \uc788\ub294 \ube48 \ubc30\uc5f4(",(0,l.kt)("inlineCode",{parentName:"p"},"[]"),")\uc5d0 \uc8fc\uc758\ud558\uc138\uc694."),(0,l.kt)("p",null,"\ub17c\uc2a4\uc5d0 \ub300\ud574 \ub108\ubb34 \ub9ce\uc774 \ub17c\uc758\ud558\uc9c0\ub294 \uc54a\uaca0\uc9c0\ub9cc, ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Replay_attack"},"replay attacks"),"\uc758 \uac00\ub2a5\uc131\uc744 \ubc29\uc9c0\ud558\uae30 \uc704\ud574 \uc0c8\ub85c \uc0dd\uc131\ub41c \ud0a4\uc5d0 \ub300\ud55c \ub17c\uc2a4\ub294 \ud070 \uac12\uc744 \uac00\uc9c0\uace0, \ube14\ub85d \ub192\uc774\uc5d0 \ub300\ud55c \uc815\ubcf4\uc640 \ub09c\uc218\ub97c \ud3ec\ud568\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ud5c8\uc6a9\ub7c9\uc740 yoctoNEAR \ub2e8\uc704\ub85c, \uc774 \ud0a4\uac00 \ud568\uc218 \ud638\ucd9c \uc911\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uc591\uc785\ub2c8\ub2e4. \uc774\ub294 NEAR \uc804\uc1a1\uc5d0 \uc0ac\uc6a9\ub420 \uc218 ",(0,l.kt)("strong",{parentName:"p"},"\uc5c6\uc2b5\ub2c8\ub2e4"),". \ud568\uc218 \ud638\ucd9c\uc744 \uc704\ud574 \uac00\uc2a4\ub97c \uc9c0\ubd88\ud558\ub294 \ub370\uc5d0\uc11c\ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774 \ud0a4\uc5d0 \ub300\ud55c \ud5c8\uc6a9\ub7c9\uc740 \uc124\uba85 \ubaa9\uc801\uc73c\ub85c \uc758\ub3c4\uc801\uc73c\ub85c \ud07d\ub2c8\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"p"},"777000000000000000000000000")," yoctoNEAR\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"777")," NEAR\ub85c, \uc561\uc138\uc2a4 \ud0a4\uc5d0 \ub300\ud574 \ube44\ud569\ub9ac\uc801\uc73c\ub85c \ub192\uc740 \uc22b\uc790\uc785\ub2c8\ub2e4. \uc0ac\uc2e4 \uc774\ub294 \ub108\ubb34 \ub192\uc740 \uc218\uce58\ub77c\uc11c, \uc0dd\uc131 \uc2dc \ucee8\ud2b8\ub799\ud2b8 \uc790\uccb4\uc758 NEAR \uc591\uc744 \ucd08\uacfc\ud588\uc2b5\ub2c8\ub2e4. \uc774\ub294 \uacc4\uc815 \uc794\uc561\uc744 \ucd08\uacfc\ud558\ub294 \uc561\uc138\uc2a4 \ud0a4\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc73c\uba70, \uc0dd\uc131 \uc2dc \ud5c8\uc6a9\ub7c9\uc744 \ucc28\uac10\ud558\uc9c0 \uc54a\ub294\ub2e4\ub294 \uac83\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub530\ub77c\uc11c \uc774 \ud0a4\ub294 \uac01 \ud568\uc218 \ud638\ucd9c\uc5d0 \ub300\ud55c \uacc4\uc815\uc5d0\uc11c \uae08\uc561\uc744 \ucc28\uac10\ud558\uc5ec \uac00\uc2a4\uc5d0 \ub300\ud55c NEAR\uc758 \ud5c8\uc6a9\ub7c9\uc744 \uc0ac\uc6a9\ud558\ub3c4\ub85d \ud5c8\uc6a9\ub429\ub2c8\ub2e4."),(0,l.kt)("h4",{id:"\ub450-\ubc88\uc9f8-\ud0a4"},"\ub450 \ubc88\uc9f8 \ud0a4:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n  access_key: {\n    nonce: 72777733000000,\n    permission: {\n      FunctionCall: {\n        allowance: '250000000000000000000000', // 0.25 NEAR, which is a typical allowance\n        method_names: [ 'foo', 'bar' ], // Can call methods foo and bar only\n        receiver_id: 'puzzle.testnet'\n      }\n    }\n  },\n  public_key: 'ed25519:CM4JtNo2sL3qPjWFn4MwusMQoZbHUSWaPGCCMrudZdDU'\n},\n")),(0,l.kt)("p",null,"\uc774 \ub450 \ubc88\uc9f8 \ud0a4\ub294 \ud638\ucd9c\ud560 \uc218 \uc788\ub294 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc815\ud558\uace0, \ud5c8\uc6a9\ub7c9\uc774 \ub354 \ub0ae\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,'\uc774 \ud0a4\uc5d0 \ub300\ud55c \ud5c8\uc6a9\ub7c9(1/4 NEAR)\uc740 \uc0ac\ub78c\uc774 NEAR \uc9c0\uac11\uc73c\ub85c "\ub85c\uadf8\uc778"\ud560 \ub54c\uc758 \uae30\ubcf8 \ud5c8\uc6a9\ub7c9\uc785\ub2c8\ub2e4.'),(0,l.kt)("p",null,'NEAR\uc5d0\uc11c "\ub85c\uadf8\uc778"\uc740 \uc77c\ubc18\uc801\uc73c\ub85c \uc774\uc640 \uac19\uc740 \ud0a4\ub97c \uacc4\uc815\uc5d0 \ucd94\uac00\ud558\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4\uc5d0 \ub354 \uc790\uc138\ud788 \ub2e4\ub8e8\uaca0\uc2b5\ub2c8\ub2e4.'),(0,l.kt)("h4",{id:"\uc138-\ubc88\uc9f8-\ud0a4"},"\uc138 \ubc88\uc9f8 \ud0a4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n  access_key: { nonce: 72770704000019, permission: 'FullAccess' },\n  public_key: 'ed25519:FG4HjEPsvP5beScC3hkTLztQH8k9Qz9maTaumvPDa5t3'\n}\n")),(0,l.kt)("p",null,"\uc138 \ubc88\uc9f8 \ud0a4\ub294 \uc804\uccb4 \uc561\uc138\uc2a4 \ud0a4\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774 \ud0a4\ub294 \ubaa8\ub4e0 \uc791\uc5c5\uc744 \uc218\ud589\ud560 \uc218 \uc788\uc73c\ubbc0\ub85c, \uc6b0\ub9ac\uac00 \ubcf8 \ud568\uc218 \ud638\ucd9c \uc561\uc138\uc2a4 \ud0a4\uc640 \uac19\uc740 \ucd94\uac00 \uc138\ubd80 \uc815\ubcf4\ub098 \uc81c\ud55c \uc0ac\ud56d\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\ube14\ub85d\uccb4\uc778\uc5d0\uc11c-\ub85c\uadf8\uc778\uc740-\ubb34\uc5c7\uc744-\uc758\ubbf8\ud569\ub2c8\uae4c"},'\ube14\ub85d\uccb4\uc778\uc5d0\uc11c "\ub85c\uadf8\uc778"\uc740 \ubb34\uc5c7\uc744 \uc758\ubbf8\ud569\ub2c8\uae4c?'),(0,l.kt)("p",null,"NEAR\uc5d0\uc11c \ud55c \uac78\uc74c \ubb3c\ub7ec\ub098, web3 \uc9c0\uac11\uc744 \uc0ac\uc6a9\ud558\uc5ec \ub85c\uadf8\uc778\uc774 \uc791\ub3d9\ud558\ub294 \ubc29\uc2dd\uc5d0 \ub300\ud574 \uad11\ubc94\uc704\ud558\uac8c \uc774\uc57c\uae30\ud574 \ubd05\uc2dc\ub2e4."),(0,l.kt)("p",null,"web3 \uc9c0\uac11(\uc608: Ethereum\uc758 MetaMask, Cosmos\uc758 Keplr \ub610\ub294 NEAR Wallet)\uc740 \uacc4\uc815\uc758 \uac1c\uc778 \ud0a4\ub97c \uc800\uc7a5\ud569\ub2c8\ub2e4. \ud0c8\uc911\uc559\ud654 \uc571\uacfc \uc0c1\ud638 \uc791\uc6a9\ud560 \ub54c, \uc0ac\uc6a9\uc790\ub294 \uc77c\ubc18\uc801\uc73c\ub85c \uc9c0\uac11\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc11c\uba85\ud558\uace0, \ucc98\ub9ac\ub97c \uc704\ud574 \ube14\ub85d\uccb4\uc778\uc73c\ub85c \ubcf4\ub0c5\ub2c8\ub2e4."),(0,l.kt)("p",null,'\uadf8\ub7ec\ub098, web3 \uc9c0\uac11\uc740 \ubaa8\ub4e0 \uc885\ub958\uc758 \uba54\uc2dc\uc9c0\uc5d0 \uc11c\uba85\ud558\ub294 \ub370 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc73c\uba70, \uc774\ub54c\ub294 \ube14\ub85d\uccb4\uc778\uc5d0 \uc544\ubb34 \uac83\ub3c4 \ubcf4\ub0bc \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \uc774\ub97c "\uc624\ud504\ub77c\uc778 \uc11c\uba85"\uc774\ub77c\uace0\ub3c4 \ud558\uba70 \ud504\ub85c\ud1a0\ucf5c\uc740 \ub54c\ub54c\ub85c \ub370\uc774\ud130 \uc11c\uba85 \ubc29\ubc95\uc5d0 \ub300\ud55c \ud45c\uc900\uc744 \ub9cc\ub4ed\ub2c8\ub2e4.'),(0,l.kt)("p",null,'\ub2e4\ub978 \uc0dd\ud0dc\uacc4\uc5d0\uc11c web3 \uc9c0\uac11\uc73c\ub85c "\ub85c\uadf8\uc778"\ud55c\ub2e4\ub294 \uc544\uc774\ub514\uc5b4\ub294 \uc774 \uc624\ud504\ub77c\uc778 \uc11c\uba85\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\ub294 \uad6c\uc870\ud654\ub41c \uba54\uc2dc\uc9c0\uc5d0 \uc11c\uba85\ud558\ub77c\ub294 \uc694\uccad\uc744 \ubc1b\uace0, \ubc31\uc5d4\ub4dc\ub294 \uba54\uc2dc\uc9c0\uac00 \uc9c0\uc815\ub41c \uacc4\uc815\uc5d0 \uc758\ud574 \uc11c\uba85\ub418\uc5c8\uc74c\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.'),(0,l.kt)("p",null,"NEAR \ud0a4\ub294 \uc774\ub7ec\ud55c \ubc29\uc2dd\uc73c\ub85c \uba54\uc2dc\uc9c0\uc5d0 \uc11c\uba85\ud558\uace0 \ud655\uc778\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc2e4\uc81c\ub85c ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/utils/verify-signature.js"},(0,l.kt)("inlineCode",{parentName:"a"},"near-api-js")," \uc694\ub9ac\ucc45"),"\uc5d0 \uc774\ub97c \ub2ec\uc131\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \uba87 \uac00\uc9c0 \uac04\ub2e8\ud55c \uc608\uac00 \uc874\uc7ac\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774 \uc624\ud504\ub77c\uc778 \uc11c\uba85 \uae30\uc220\uc5d0\ub294 \uc7a0\uc7ac\uc801\uc778 \ub2e8\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ud2b9\ud788 \uc545\uc758\uc801\uc778 \ub2f9\uc0ac\uc790\uac00 \uc11c\uba85\ub41c \uba54\uc2dc\uc9c0\ub97c \uac00\ub85c\ucc44\ub294 \uacbd\uc6b0\uc785\ub2c8\ub2e4. \uadf8\ub4e4\uc740 \uc774 \uc11c\uba85\uc744 \ubc31\uc5d4\ub4dc\ub85c \ubcf4\ub0b4\uace0, \ub2f9\uc2e0\uc744 \ub300\uc2e0\ud558\uc5ec \ub85c\uadf8\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ubaa8\ub4e0 \uac83\uc774 \uc624\ud504\ub77c\uc778\uc5d0\uc11c \uc774\ub8e8\uc5b4\uc9c0\uae30 \ub54c\ubb38\uc5d0, \ub85c\uadf8\uc778\uc744 \ucde8\uc18c\ud558\uac70\ub098 \uc561\uc138\uc2a4\ub97c \uc81c\uc5b4\ud558\ub294 \u200b\u200b\uba54\ucee4\ub2c8\uc998\uc740 \uc628\uccb4\uc778\uc5d0 \uc5c6\uc2b5\ub2c8\ub2e4. \uc6b0\ub9ac\ub294 \uc11c\uba85\ub41c \uc720\ud615 \ub370\uc774\ud130\uc5d0 \ub300\ud55c web3 \uc9c0\uac11\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \ud55c\uacc4\uc5d0 \ubd80\ub52a\uce5c\ub2e4\ub294 \uac83\uc744 \uae08\ubc29 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub530\ub77c\uc11c \uba54\uc2dc\uc9c0\uc5d0 \uc11c\uba85\ud558\ub294 \uac83\ub3c4 \uc88b\uc9c0\ub9cc \ub354 \uc798\ud560 \uc218 \uc788\ub2e4\uba74 \uc5b4\ub5a8\uae4c\uc694?"),(0,l.kt)("p",null,"NEAR\ub97c \uc0ac\uc6a9\ud558\uba74 \uc561\uc138\uc2a4 \ud0a4\ub97c \ud65c\uc6a9\ud558\uc5ec \uc0ac\uc6a9\uc790\uc758 \ub85c\uadf8\uc778 \uacbd\ud5d8\uc744 \uac1c\uc120\ud558\uace0 \uc0ac\uc6a9\uc790\uc5d0\uac8c \uad8c\ud55c\uc744 \ub3cc\ub824\uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/near-examples/guest-book-js"},"\ubc29\uba85\ub85d \uc608\uc2dc \uc0ac\uc774\ud2b8"),"\uc5d0 \ub85c\uadf8\uc778\ud558\uba74 \ud574\ub2f9 dApp\ub9cc\uc744 \uc704\ud55c \uace0\uc720 \ud0a4\ub97c \uc0dd\uc131\ud558\uc5ec \ub0b4 \uacc4\uc815\uc5d0 \ucd94\uac00\ud569\ub2c8\ub2e4. \uc644\ub8cc\ub418\uba74 \uc9c1\uc811 \ud0a4\ub97c \uc81c\uac70\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub204\uad70\uac00 \ub0b4 \ud0a4\ub97c \uc81c\uc5b4\ud558\uace0 \uc788\ub2e4\uace0 \uc758\uc2ec\ub418\ub294 \uacbd\uc6b0(\uc608\ub97c \ub4e4\uc5b4 \ub178\ud2b8\ubd81\uc744 \ub3c4\ub09c\ub2f9\ud55c \uacbd\uc6b0), \ub0b4\uac00 \uc81c\uc5b4\ud560 \uc218 \uc788\ub294 \uc804\uccb4 \uc561\uc138\uc2a4 \ud0a4\uac00 \uc788\ub294 \ud55c \ud0a4\ub97c \uc81c\uac70\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"NEAR\ub85c \ub85c\uadf8\uc778\ud558\uba74 \ucd5c\uc885 \uc0ac\uc6a9\uc790\uac00 \uc790\uc2e0\uc758 \uacc4\uc815\uacfc dApp\uacfc \uc0c1\ud638 \uc791\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \uc81c\uc5b4\ud560 \uc218 \uc788\uc73c\uba70, \uc774\ub97c \ud504\ub85c\ud1a0\ucf5c \uc218\uc900\uc5d0\uc11c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("p",null,"\uc561\uc138\uc2a4 \ud0a4\uc758 \uac1c\ub150\uc740 \ub9e4\uc6b0 \uc911\uc694\ud558\uae30 \ub54c\ubb38\uc5d0 \uac1c\uc120\ub41c \ud06c\ub85c\uc2a4\uc6cc\ub4dc \ud37c\uc990\uc744 \uc704\ud55c \ucf54\ub4dc\ub97c \uc2e4\uc81c\ub85c \uad6c\ud604\ud558\uc9c0 \uc54a\uace0 \uc774 \uc8fc\uc81c\uc5d0 \ub300\ud574 \ud3c9\uc18c\ubcf4\ub2e4 \ub354 \ub9ce\uc740 \uc2dc\uac04\uc744 \ud560\uc560\ud588\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub2e4\uc74c \uc139\uc158\uc73c\ub85c \uc774\ub3d9\ud558\uc5ec \uc2e4\uc81c\ub85c \ub85c\uadf8\uc778 \ubc84\ud2bc\uc744 \ucd94\uac00\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."))}h.isMDXComponent=!0},39654:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/keys-cartoon-good--alcantara_gabriel.near--Bagriel_5_10-25f5521a242db4d310be7de1dd937aa2.png"}}]);