"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1208],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=i(r),d=a,y=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(y,c(c({ref:t},s),{},{components:r})):n.createElement(y,c({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var i=2;i<o;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},36145:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),c=["components"],l={id:"reentrancy",title:"\uc7ac\uc9c4\uc785(Reentrancy) \uacf5\uaca9"},p=void 0,i={unversionedId:"develop/contracts/security/reentrancy",id:"develop/contracts/security/reentrancy",title:"\uc7ac\uc9c4\uc785(Reentrancy) \uacf5\uaca9",description:"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c(Cross-contract Call)\uacfc \ucf5c\ubc31 \uc0ac\uc774\uc5d0\uc11c \ucee8\ud2b8\ub799\ud2b8\uc758 \ubaa8\ub4e0 \uba54\uc11c\ub4dc\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uac83\uc744 \uace0\ub824\ud558\uc9c0 \uc54a\ub294 \uac83\uc740 \ud574\ud0b9\uc758 \uc8fc\uc694 \uc18c\uc2a4 \uc911 \ud558\ub098\uc785\ub2c8\ub2e4. \uc7ac\uc9c4\uc785 \uacf5\uaca9\uc774\ub77c\ub294 \uc790\uccb4 \uc774\ub984\uc774 \uc788\uc744 \uc815\ub3c4\ub85c, \uc774\ub294 \ub9e4\uc6b0 \uae30\ubcf8\uc801\uc778 \ud574\ud0b9 \ubc29\uc2dd\uc785\ub2c8\ub2e4.",source:"@site/../docs/2.develop/contracts/security/reentrancy.md",sourceDirName:"2.develop/contracts/security",slug:"/develop/contracts/security/reentrancy",permalink:"/near_docs/develop/contracts/security/reentrancy",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/contracts/security/reentrancy.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"Mar 9, 2023",frontMatter:{id:"reentrancy",title:"\uc7ac\uc9c4\uc785(Reentrancy) \uacf5\uaca9"},sidebar:"\uac1c\ubc1c",previous:{title:"\ud504\ub860\ud2b8\ub7ec\ub2dd",permalink:"/near_docs/develop/contracts/security/frontrunning"},next:{title:"\ub09c\uc218",permalink:"/near_docs/develop/contracts/security/random"}},s={},u=[{value:"\uc608\uc2dc",id:"\uc608\uc2dc",level:3}],m={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c(Cross-contract Call)\uacfc \ucf5c\ubc31 \uc0ac\uc774\uc5d0\uc11c ",(0,o.kt)("strong",{parentName:"p"},"\ucee8\ud2b8\ub799\ud2b8\uc758 \ubaa8\ub4e0 \uba54\uc11c\ub4dc\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"),". \uc774\uac83\uc744 \uace0\ub824\ud558\uc9c0 \uc54a\ub294 \uac83\uc740 \ud574\ud0b9\uc758 \uc8fc\uc694 \uc18c\uc2a4 \uc911 \ud558\ub098\uc785\ub2c8\ub2e4. ",(0,o.kt)("strong",{parentName:"p"},"\uc7ac\uc9c4\uc785 \uacf5\uaca9"),"\uc774\ub77c\ub294 \uc790\uccb4 \uc774\ub984\uc774 \uc788\uc744 \uc815\ub3c4\ub85c, \uc774\ub294 \ub9e4\uc6b0 \uae30\ubcf8\uc801\uc778 \ud574\ud0b9 \ubc29\uc2dd\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uba54\uc11c\ub4dc \uc2e4\ud589\uc774 \uc644\ub8cc\ub41c \ud6c4\uc5d0\ub294 \ud56d\uc0c1 \uc0c1\ud0dc\ub97c \uc77c\uad00\ub41c \uc0c1\ud0dc\ub85c \uc720\uc9c0\ud574\uc57c \ud569\ub2c8\ub2e4. \ub2e4\uc74c\uacfc \uac19\uc740 \uc0c1\ud669\uc744 \uac00\uc815\ud574 \ubd05\uc2dc\ub2e4."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uba54\uc11c\ub4dc \uc2e4\ud589\uacfc \ud574\ub2f9 \ucf5c\ubc31 \uc0ac\uc774\uc5d0\uc11c \ubaa8\ub4e0 \uba54\uc11c\ub4dc\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ul"},"\ucf5c\ubc31\uc774 \uc2dc\uc791\ub418\uae30 \uc804\uc5d0 \ub3d9\uc77c\ud55c \uba54\uc11c\ub4dc\ub97c \ub2e4\uc2dc \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"\uc608\uc2dc"},"\uc608\uc2dc"),(0,o.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 ",(0,o.kt)("strong",{parentName:"p"},"\uc798\ubabb\ub41c \ub85c\uc9c1"),"\uc73c\ub85c ",(0,o.kt)("inlineCode",{parentName:"p"},"deposit_and_stake"),"\ub97c \uac1c\ubc1c\ud55c\ub2e4\uace0 \uc0c1\uc0c1\ud574 \ubd05\uc2dc\ub2e4. (1) \uc0ac\uc6a9\uc790\uac00 \uc6b0\ub9ac\uc5d0\uac8c \ub3c8\uc744 \ubcf4\ub0c5\ub2c8\ub2e4. (2) \uc6b0\ub9ac\ub294 \uadf8\uac83\uc744 \uc794\uace0\uc5d0 \ucd94\uac00\ud569\ub2c8\ub2e4. (3) \ubc38\ub9ac\ub370\uc774\ud130\uc5d0 \uc2a4\ud14c\uc774\ud0b9\uc744 \uc2dc\ub3c4\ud569\ub2c8\ub2e4. (4) \uc2a4\ud14c\uc774\ud0b9\uc774 \uc2e4\ud328\ud558\uba74, \ucf5c\ubc31\uc5d0\uc11c \uc794\uace0\ub97c \uc81c\uac70\ud569\ub2c8\ub2e4. \uadf8\ub7ec\uba74, \uc0ac\uc6a9\uc790\ub294 (2)\uc640 (4) \uc0ac\uc774\uc5d0 \ud638\ucd9c\uc744 \ucca0\ud68c\ud558\ub3c4\ub85d \uc608\uc57d\ud560 \uc218 \uc788\uc73c\uba70, \uc2a4\ud14c\uc774\ud0b9\uc5d0 \uc2e4\ud328\ud558\uba74 \uc0ac\uc6a9\uc790\ub294 \ub450 \ubc88 \ub3c8\uc744 \ubc1b\uac8c \ub429\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/1*VweWHQYGLBa70uceiWHLQA.png",alt:"img"}),"\n",(0,o.kt)("em",{parentName:"p"},"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uacfc \ucf5c\ubc31 \uc0ac\uc774\uc5d0 \ubb34\uc2a8 \uc77c\uc774\ub4e0 \uc77c\uc5b4\ub0a0 \uc218 \uc788\uc2b5\ub2c8\ub2e4")),(0,o.kt)("p",null,"\ub2e4\ud589\uc2a4\ub7fd\uac8c\ub3c4 \uc194\ub8e8\uc158\uc740 \ub2e4\uc18c \uac04\ub2e8\ud569\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\uc758 \uc794\uace0\uc5d0 \ub3c8\uc744 \uc989\uc2dc \ucd94\uac00\ud558\ub294 \ub300\uc2e0, \ucf5c\ubc31\uc774 \uc62c \ub54c\uae4c\uc9c0 \uae30\ub2e4\ub9bd\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c, \ud655\uc778 \ud6c4 \uc2a4\ud14c\uc774\ud0b9\uc774 \uc798 \ub418\uc5c8\uc73c\uba74 \uc794\uace0\uc5d0 \ucd94\uac00\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/1*o0YVDCp_7l-L3njJMGhU4w.png",alt:"img"}),"\n",(0,o.kt)("em",{parentName:"p"},"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c \uc0ac\uc774\uc5d0 \uae08\uc561\uc744 \ub2e4\ub8e8\ub294 \uc62c\ubc14\ub978 \ubc29\ubc95")))}d.isMDXComponent=!0}}]);