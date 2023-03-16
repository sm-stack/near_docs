"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1909],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=i(r),d=a,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(k,l(l({ref:t},s),{},{components:r})):n.createElement(k,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6190:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],c={id:"callbacks",title:"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c(Cross-Contract Calls)"},p=void 0,i={unversionedId:"develop/contracts/security/callbacks",id:"develop/contracts/security/callbacks",title:"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c(Cross-Contract Calls)",description:"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc744 \uc791\uc131\ud558\ub294 \ub3d9\uc548 \uba85\uc2ec\ud574\uc57c \ud560 \uc911\uc694\ud55c \uce21\uba74\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ubaa8\ub4e0 \ud638\ucd9c\uc740 \ub3c5\ub9bd\uc801\uc774\uace0 \ube44\ub3d9\uae30\uc801\uc785\ub2c8\ub2e4. \ub2e4\uc2dc \ub9d0\ud574\uc11c:",source:"@site/../docs/2.develop/contracts/security/callbacks.md",sourceDirName:"2.develop/contracts/security",slug:"/develop/contracts/security/callbacks",permalink:"/near_docs/vi/develop/contracts/security/callbacks",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/contracts/security/callbacks.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"9 thg 3, 2023",frontMatter:{id:"callbacks",title:"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c(Cross-Contract Calls)"},sidebar:"\uac1c\ubc1c",previous:{title:"\uc18c\uc561 \uc608\uce58(Small Deposits)",permalink:"/near_docs/vi/develop/contracts/security/storage"},next:{title:"\uc0ac\uc6a9\uc790\uac00 \ub9de\ub294\uc9c0 \ud655\uc778 (1y\u24c3)",permalink:"/near_docs/vi/develop/contracts/security/one-yocto"}},s={},u=[{value:"\ud504\ub77c\uc774\ube57 \ucf5c\ubc31",id:"\ud504\ub77c\uc774\ube57-\ucf5c\ubc31",level:2},{value:"\uc0ac\uc6a9\uc790\uc758 \uc790\uae08",id:"\uc0ac\uc6a9\uc790\uc758-\uc790\uae08",level:2},{value:"\ube44\ub3d9\uae30 \ucf5c\ubc31",id:"\ube44\ub3d9\uae30-\ucf5c\ubc31",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc744 \uc791\uc131\ud558\ub294 \ub3d9\uc548 \uba85\uc2ec\ud574\uc57c \ud560 \uc911\uc694\ud55c \uce21\uba74\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ubaa8\ub4e0 \ud638\ucd9c\uc740 ",(0,o.kt)("strong",{parentName:"p"},"\ub3c5\ub9bd\uc801"),"\uc774\uace0 ",(0,o.kt)("strong",{parentName:"p"},"\ube44\ub3d9\uae30\uc801"),"\uc785\ub2c8\ub2e4. \ub2e4\uc2dc \ub9d0\ud574\uc11c:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ud638\ucd9c \uba54\uc11c\ub4dc\uc640 \ucf5c\ubc31 \uba54\uc11c\ub4dc\ub294 ",(0,o.kt)("strong",{parentName:"li"},"\ub3c5\ub9bd\uc801"),"\uc785\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ul"},"\ud638\ucd9c\uacfc \ucf5c\ubc31 \uc0ac\uc774\uc5d0\uc11c \uc0ac\ub78c\ub4e4\uc740 \ucee8\ud2b8\ub799\ud2b8\uc640 \uc0c1\ud638 \uc791\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,o.kt)("p",null,"\uc774\ub294 \ucf5c\ubc31\uc744 \ucc98\ub9ac\ud558\ub294 \ubc29\ubc95\uc5d0 \uc911\uc694\ud55c \uc601\ud5a5\uc744 \ubbf8\uce69\ub2c8\ub2e4. \ud2b9\ud788:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\ucf5c\ubc31 \uba54\uc11c\ub4dc\ub294 \uacf5\uac1c\ub418\uc5b4\uc57c \ud558\uc9c0\ub9cc, \uc774\ub97c \ucee8\ud2b8\ub799\ud2b8\ub9cc \ud638\ucd9c\ud560 \uc218 \uc788\ub3c4\ub85d \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ol"},"\ud638\ucd9c\uacfc \ucf5c\ubc31 \uc0ac\uc774\uc5d0 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc545\uc6a9 \uac00\ub2a5\ud55c \uc0c1\ud0dc\ub85c \ub450\uc9c0 \uc54a\uc544\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ol"},"\uc678\ubd80 \ud638\ucd9c\uc774 \uc2e4\ud328\ud55c \uacbd\uc6b0, \ucf5c\ubc31\uc758 \uc0c1\ud0dc\uc5d0 \ub300\ud55c \ubaa8\ub4e0 \ubcc0\uacbd \uc0ac\ud56d\uc744 \uc218\ub3d9\uc73c\ub85c \ub864\ubc31\ud574\uc57c \ud569\ub2c8\ub2e4.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\ud504\ub77c\uc774\ube57-\ucf5c\ubc31"},"\ud504\ub77c\uc774\ube57 \ucf5c\ubc31"),(0,o.kt)("p",null,"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc774 \uc644\ub8cc\ub420 \ub54c, \ucee8\ud2b8\ub799\ud2b8\uac00 \uc790\uccb4\uc801\uc73c\ub85c \ud638\ucd9c\ub418\ub3c4\ub85d \ud558\ub824\uba74 \ucf5c\ubc31 \uba54\uc11c\ub4dc\ub97c \uacf5\uac1c\ud574\uc57c \ud569\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \ub300\ubd80\ubd84\uc758 \uacbd\uc6b0 \uacf5\uac1c\ub418\uc9c0 \uc54a\uae38 \uc6d0\ud560 \uac83\uc785\ub2c8\ub2e4. ",(0,o.kt)("inlineCode",{parentName:"p"},"predecessor"),"\uc774 ",(0,o.kt)("inlineCode",{parentName:"p"},"current_account"),"\uc784\uc744 assert\ud558\uc5ec, \uba54\uc11c\ub4dc\ub97c \ud37c\ube14\ub9ad\uc73c\ub85c \uc720\uc9c0\ud558\uba74\uc11c \ube44\uacf5\uac1c\ub85c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Rust\uc5d0\uc11c\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"#[private]")," \ub370\ucf54\ub808\uc774\ud130\ub97c \ucd94\uac00\ud558\uba74 \uc774 \uc791\uc5c5\uc774 \uc790\ub3d9\uc73c\ub85c \uc218\ud589\ub429\ub2c8\ub2e4."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\uc0ac\uc6a9\uc790\uc758-\uc790\uae08"},"\uc0ac\uc6a9\uc790\uc758 \uc790\uae08"),(0,o.kt)("p",null,"\uba54\uc11c\ub4dc\uac00 \ud328\ub2c9 \uc0c1\ud0dc\uac00 \ub418\uba74, \ud574\ub2f9 \ud2b8\ub79c\uc7ad\uc158\uc5d0 \ucca8\ubd80\ub41c \ub3c8\uc774 ",(0,o.kt)("inlineCode",{parentName:"p"},"predecessor"),"\uc5d0\uac8c \ubc18\ud658\ub429\ub2c8\ub2e4. \uc989, \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc744 \ud558\uace0 \uc2e4\ud328\ud558\uba74, \ub3c8\uc774 ",(0,o.kt)("strong",{parentName:"p"},"\ucee8\ud2b8\ub799\ud2b8\ub85c \ub3cc\uc544\uac11\ub2c8\ub2e4"),". \ucee8\ud2b8\ub799\ud2b8\ub97c \ud638\ucd9c\ud55c \uc0ac\uc6a9\uc790\ub85c\ubd80\ud130 \ub3c8\uc774 \ub098\uc628 \uacbd\uc6b0, \ucf5c\ubc31 \ub3c4\uc911\uc5d0 \uc774\ub97c \ubc18\ud658\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/1*Hp4TOcaBqm9LS0wkgWw3nA.png",alt:"img"}),"\n",(0,o.kt)("em",{parentName:"p"},"\uc0ac\uc6a9\uc790\uac00 \ub3c8\uc744 \ucca8\ubd80\ud55c \uacbd\uc6b0, \ucf5c\ubc31\uc5d0\uc11c \uc218\ub3d9\uc73c\ub85c \ubc18\ud658\ud574\uc57c \ud569\ub2c8\ub2e4")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\uc804\uc1a1 \uc791\uc5c5\uc744 \uc704\ud574 \ucf5c\ubc31\uc5d0 \ucda9\ubd84\ud55c \uac00\uc2a4\uac00 \uc788\ub294\uc9c0 \ud655\uc778\ud558\uc138\uc694.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\ube44\ub3d9\uae30-\ucf5c\ubc31"},"\ube44\ub3d9\uae30 \ucf5c\ubc31"),(0,o.kt)("p",null,"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uacfc \ucf5c\ubc31 \uc0ac\uc774\uc5d0\uc11c ",(0,o.kt)("strong",{parentName:"p"},"\ucee8\ud2b8\ub799\ud2b8\uc758 \ubaa8\ub4e0 \uba54\uc11c\ub4dc\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"),". \uc774\uac83\uc744 \uace0\ub824\ud558\uc9c0 \uc54a\ub294 \uac83\uc740 \ud574\ud0b9\uc758 \uc8fc\uc694 \uc6d0\uc778 \uc911 \ud558\ub098\uc785\ub2c8\ub2e4. \uc7ac\uc9c4\uc785 \uacf5\uaca9\uc774\ub77c\ub294 \uc790\uccb4 \uc774\ub984\uc774 \uc788\uc744 \uc815\ub3c4\ub85c, \uc774\ub294 \ub9e4\uc6b0 \uae30\ubcf8\uc801\uc778 \ud574\ud0b9 \ubc29\uc2dd\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 ",(0,o.kt)("strong",{parentName:"p"},"\uc798\ubabb\ub41c \ub85c\uc9c1"),"\uc73c\ub85c ",(0,o.kt)("inlineCode",{parentName:"p"},"deposit_and_stake"),"\ub97c \uac1c\ubc1c\ud55c\ub2e4\uace0 \uc0c1\uc0c1\ud574 \ubd05\uc2dc\ub2e4. (1) \uc0ac\uc6a9\uc790\uac00 \uc6b0\ub9ac\uc5d0\uac8c \ub3c8\uc744 \ubcf4\ub0c5\ub2c8\ub2e4. (2) \uc6b0\ub9ac\ub294 \uc774\ub97c \uc794\uace0\uc5d0 \ucd94\uac00\ud569\ub2c8\ub2e4. (3) \ubc38\ub9ac\ub370\uc774\ud130\uc5d0 \uc2a4\ud14c\uc774\ud0b9\uc744 \uc2dc\ub3c4\ud569\ub2c8\ub2e4. (4) \uc2a4\ud14c\uc774\ud0b9\uc774 \uc2e4\ud328\ud558\uba74, \ucf5c\ubc31\uc5d0\uc11c \uc794\uace0\ub97c \uc81c\uac70\ud569\ub2c8\ub2e4. \uadf8\ub7ec\uba74, \uc0ac\uc6a9\uc790\ub294 (2)\uc640 (4) \uc0ac\uc774\uc5d0 \ud638\ucd9c\uc744 \ucca0\ud68c\ud558\ub3c4\ub85d \uc608\uc57d\ud560 \uc218 \uc788\uc73c\uba70, \uc2a4\ud14c\uc774\ud0b9\uc5d0 \uc2e4\ud328\ud558\uba74 \uc0ac\uc6a9\uc790\ub294 \ub450 \ubc88 \ub3c8\uc744 \ubc1b\uac8c \ub429\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/1*VweWHQYGLBa70uceiWHLQA.png",alt:"img"}),"\n",(0,o.kt)("em",{parentName:"p"},"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uacfc \ucf5c\ubc31 \uc0ac\uc774\uc5d0 \ubb34\uc2a8 \uc77c\uc774\ub4e0 \uc77c\uc5b4\ub0a0 \uc218 \uc788\uc2b5\ub2c8\ub2e4")),(0,o.kt)("p",null,"\ub2e4\ud589\uc2a4\ub7fd\uac8c\ub3c4 \uc194\ub8e8\uc158\uc740 \ub2e4\uc18c \uac04\ub2e8\ud569\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\uc758 \uc794\uace0\uc5d0 \ub3c8\uc744 \uc989\uc2dc \ucd94\uac00\ud558\ub294 \ub300\uc2e0, \ucf5c\ubc31\uc774 \uc62c \ub54c\uae4c\uc9c0 \uae30\ub2e4\ub9bd\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c, \ud655\uc778 \ud6c4 \uc2a4\ud14c\uc774\ud0b9\uc774 \uc798 \ub418\uc5c8\uc73c\uba74 \uc794\uace0\uc5d0 \ucd94\uac00\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/1*o0YVDCp_7l-L3njJMGhU4w.png",alt:"img"}),"\n",(0,o.kt)("em",{parentName:"p"},"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc5d0\uc11c \uc608\uae08\uc744 \ucc98\ub9ac\ud558\ub294 \uc62c\ubc14\ub978 \ubc29\ubc95")))}d.isMDXComponent=!0}}]);