"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[993],{90346:(t,e,a)=>{a.d(e,{Ey:()=>m,O2:()=>p,SQ:()=>d});var n=a(67294),l=a(65488),r=a(85162),i=a(1841),s=a.n(i),o=a(95665),u=a.n(o);function p(t){var e=t.children;return Array.isArray(e)||(e=[e]),n.createElement(l.Z,{className:"language-tabs",groupId:"code-tabs"},e.map((function(t,e){return n.createElement(r.Z,{value:t.props.value,label:t.props.value},t)})))}function d(t){var e=t.children,a=t.language;return Array.isArray(e)||(e=[e]),e=e.map((function(t){return function(t,e){var a=t.props,l=a.children,r=a.url,i=a.start,o=a.end,u=a.fname;if("Github"==t.props.mdxType)return m({url:r,start:i,end:o,language:e,fname:u});if("CodeBlock"==t.props.mdxType)return n.createElement(s(),{fname:u,language:e},l);return t}(t,a)})),1==e.length?n.createElement(r.Z,{value:0,label:e[0].props.fname},e[0]):n.createElement(l.Z,{className:"file-tabs"},e.map((function(t,e){return n.createElement(r.Z,{value:e,label:t.props.fname},t)})))}function m(t){var e=t.url,a=t.start,l=t.end,r=t.language,i=t.fname,s=e+"#";return a&&l&&(s+="L"+a+"-L"+l+"#"),n.createElement(u(),{language:r,fname:i},s)}},85162:(t,e,a)=>{a.d(e,{Z:()=>i});var n=a(67294),l=a(86010);const r="tabItem_Ymn6";function i(t){var e=t.children,a=t.hidden,i=t.className;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:a},e)}},65488:(t,e,a)=>{a.d(e,{Z:()=>c});var n=a(87462),l=a(67294),r=a(86010),i=a(72389),s=a(67392),o=a(7094),u=a(12466);const p="tabList__CuJ",d="tabItem_LNqP";function m(t){var e,a,i=t.lazy,m=t.block,c=t.defaultValue,b=t.values,k=t.groupId,g=t.className,h=l.Children.map(t.children,(function(t){if((0,l.isValidElement)(t)&&"value"in t.props)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=b?b:h.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),f=(0,s.l)(v,(function(t,e){return t.value===e.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(e=null!=c?c:null==(a=h.find((function(t){return t.props.default})))?void 0:a.props.value)?e:h[0].props.value;if(null!==y&&!v.some((function(t){return t.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,o.U)(),N=x.tabGroupChoices,T=x.setTabGroupChoices,E=(0,l.useState)(y),C=E[0],Z=E[1],A=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var G=N[k];null!=G&&G!==C&&v.some((function(t){return t.value===G}))&&Z(G)}var w=function(t){var e=t.currentTarget,a=A.indexOf(e),n=v[a].value;n!==C&&(j(e),Z(n),null!=k&&T(k,String(n)))},S=function(t){var e,a=null;switch(t.key){case"ArrowRight":var n,l=A.indexOf(t.currentTarget)+1;a=null!=(n=A[l])?n:A[0];break;case"ArrowLeft":var r,i=A.indexOf(t.currentTarget)-1;a=null!=(r=A[i])?r:A[A.length-1]}null==(e=a)||e.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},g)},v.map((function(t){var e=t.value,a=t.label,i=t.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:function(t){return A.push(t)},onKeyDown:S,onFocus:w,onClick:w},i,{className:(0,r.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":C===e})}),null!=a?a:e)}))),i?(0,l.cloneElement)(h.filter((function(t){return t.props.value===C}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},h.map((function(t,e){return(0,l.cloneElement)(t,{key:e,hidden:t.props.value!==C})}))))}function c(t){var e=(0,i.Z)();return l.createElement(m,(0,n.Z)({key:String(e)},t))}},40075:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>p,metadata:()=>m,toc:()=>b});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),i=a(65488),s=a(85162),o=a(90346),u=["components"],p={id:"donation",title:"\uae30\ubd80"},d=void 0,m={unversionedId:"tutorials/examples/donation",id:"tutorials/examples/donation",title:"\uae30\ubd80",description:"",source:"@site/../docs/3.tutorials/examples/donation.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/donation",permalink:"/near_docs/tutorials/examples/donation",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/donation.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"Mar 9, 2023",frontMatter:{id:"donation",title:"\uae30\ubd80"},sidebar:"\ud29c\ud1a0\ub9ac\uc5bc",previous:{title:"\ubc29\uba85\ub85d",permalink:"/near_docs/tutorials/examples/guest-book"},next:{title:"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c(Cross Contract Call)",permalink:"/near_docs/tutorials/examples/xcc"}},c={},b=[{value:"\uae30\ubd80 \uc608\uc81c \uc2dc\uc791\ud558\uae30",id:"\uae30\ubd80-\uc608\uc81c-\uc2dc\uc791\ud558\uae30",level:2},{value:"dApp\uacfc \uc0c1\ud638 \uc791\uc6a9",id:"dapp\uacfc-\uc0c1\ud638-\uc791\uc6a9",level:2},{value:"dApp\uc758 \uad6c\uc870",id:"dapp\uc758-\uad6c\uc870",level:2},{value:"\ucee8\ud2b8\ub799\ud2b8",id:"\ucee8\ud2b8\ub799\ud2b8",level:3},{value:"\ud504\ub860\ud2b8\uc5d4\ub4dc",id:"\ud504\ub860\ud2b8\uc5d4\ub4dc",level:3},{value:"\ud14c\uc2a4\ud2b8",id:"\ud14c\uc2a4\ud2b8",level:2},{value:"\ub2e8\uc704 \ud14c\uc2a4\ud2b8",id:"\ub2e8\uc704-\ud14c\uc2a4\ud2b8",level:3},{value:"\ud1b5\ud569 \ud14c\uc2a4\ud2b8",id:"\ud1b5\ud569-\ud14c\uc2a4\ud2b8",level:3},{value:"\ub354 \uc54c\uc544\ubcf4\uae30",id:"\ub354-\uc54c\uc544\ubcf4\uae30",level:2}],k={toc:b};function g(t){var e=t.components,p=(0,l.Z)(t,u);return(0,r.kt)("wrapper",(0,n.Z)({},k,p,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\uc774 \uae30\ubd80 \uc608\uc2dc\ub294 \ub3c8\uc744 \ucd94\uc801\ud558\uba74\uc11c \uacc4\uc88c\ub85c \ub3c8\uc744 \ubcf4\ub0bc \uc218 \uc788\uac8c \ud569\ub2c8\ub2e4. \ucee8\ud2b8\ub799\ud2b8\ub97c \ud1b5\ud574 \ub3c8\uc744 \ubc1b\uace0 \ubcf4\ub0b4\ub294 \uac00\uc7a5 \uac04\ub2e8\ud55c \uc608 \uc911 \ud558\ub098\uc774\uba70, \ud0c8\uc911\uc559\ud654 \uae08\uc735\uc758 \uc138\uacc4\ub85c \uc9c4\uc785\ud558\uae30 \uc704\ud55c \uc644\ubcbd\ud55c \uad00\ubb38\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:a(55812).Z,width:"1139",height:"479"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\uae30\ubd80-\uc608\uc81c-\uc2dc\uc791\ud558\uae30"},"\uae30\ubd80 \uc608\uc81c \uc2dc\uc791\ud558\uae30"),(0,r.kt)("p",null,"\uae30\ubd80 \uc608\uc81c\ub97c \uc2dc\uc791\ud558\ub294 \ub370\ub294 \ub450 \uac00\uc9c0 \uc635\uc158\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uccab \ubc88\uc9f8 \uad8c\uc7a5 \uc0ac\ud56d\uc740 \uc6f9 \uae30\ubc18 \ub300\ud654\ud615 \ud658\uacbd\uc744 \uc5ec\ub294 Gitpod\ub97c \ud1b5\ud574 \uc571\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \ub450 \ubc88\uc9f8 \uc635\uc158\uc740 \ub808\ud37c\uc9c0\ud1a0\ub9ac\ub97c \ub85c\uceec\ub85c \ubcf5\uc81c\ud558\ub294 \uac83\uc73c\ub85c, \ubaa8\ub4e0 ",(0,r.kt)("a",{parentName:"p",href:"/near_docs/develop/prerequisites"},"\ud544\uc218 \uad6c\uc131 \uc694\uc18c"),"\ub97c \uc124\uce58\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)(i.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"\ud83c\udf10 JavaScript",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Gitpod"),(0,r.kt)("th",{parentName:"tr",align:null},"\ub85c\uceec\ub85c \ubcf5\uc81c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{href:"https://gitpod.io/#https://github.com/near-examples/donation-js"},(0,r.kt)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Gitpod\uc5d0\uc11c \uc5f4\uae30"}))),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83c\udf10 ",(0,r.kt)("inlineCode",{parentName:"td"},"https://github.com/near-examples/donation-js.git")))))),(0,r.kt)(s.Z,{value:"\ud83e\udd80 Rust",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Gitpod"),(0,r.kt)("th",{parentName:"tr",align:null},"\ub85c\uceec\ub85c \ubcf5\uc81c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{href:"https://gitpod.io/#https://github.com/near-examples/donation-rust"},(0,r.kt)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Gitpod\uc5d0\uc11c \uc5f4\uae30"}))),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83e\udd80 ",(0,r.kt)("inlineCode",{parentName:"td"},"https://github.com/near-examples/donation-rust.git")))))),(0,r.kt)(s.Z,{value:"\ud83d\ude80 AssemblyScript",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Gitpod"),(0,r.kt)("th",{parentName:"tr",align:null},"\ub85c\uceec\ub85c \ubcf5\uc81c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{href:"https://gitpod.io/#https://github.com/near-examples/docs-examples/blob/main/donation-as"},(0,r.kt)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Gitpod\uc5d0\uc11c \uc5f4\uae30"}))),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\ude80 ",(0,r.kt)("inlineCode",{parentName:"td"},"https://github.com/near-examples/docs-examples")," -> donation-as")))))),(0,r.kt)("p",null,"Gitpod\ub97c \uc120\ud0dd\ud558\uba74 \uc0c8 \ube0c\ub77c\uc6b0\uc800 \ucc3d\uc774 \ucf54\ub4dc\uc640 \ud568\uaed8 \uc790\ub3d9\uc73c\ub85c \uc5f4\ub9bd\ub2c8\ub2e4. \ud504\ub85c\uc81d\ud2b8\uac00 \ucef4\ud30c\uc77c\ub418\uace0 \uacb0\uad6d \ud504\ub860\ud2b8\uc5d4\ub4dc\uac00 \uc0c8 \ucc3d/\ud0ed\uc5d0\uc11c \uc5f4\ub9bd\ub2c8\ub2e4(\ud31d\uc5c5 \ucc3d\uc774 \ucc28\ub2e8\ub418\uc9c0 \uc54a\uc558\ub294\uc9c0 \ud655\uc778)."),(0,r.kt)("p",null,"\uc571\uc744 \ub85c\uceec\uc5d0\uc11c \uc2e4\ud589\ud558\ub294 \uacbd\uc6b0, \uc571\uc744 \ubcf5\uc81c\ud55c \ub514\ub809\ud130\ub9ac\ub97c \uc785\ub825\ud558\uace0 ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn"),"\uc73c\ub85c \uc758\uc874\uc131(dependency)\uc744 \uc124\uce58\ud558\uba70, ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn start"),"\ub97c \uc0ac\uc6a9\ud574 \uc2dc\uc791\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd donation\nyarn\nyarn deploy\nyarn start\n")),(0,r.kt)("p",null,"\uadf8\ub7ec\uba74 \ucee8\ud2b8\ub799\ud2b8\uac00 ",(0,r.kt)("strong",{parentName:"p"},"\ucef4\ud30c\uc77c"),"\ub418\uc5b4 ",(0,r.kt)("inlineCode",{parentName:"p"},"testnet")," \ub124\ud2b8\uc6cc\ud06c\uc758 ",(0,r.kt)("strong",{parentName:"p"},"\uacc4\uc815"),"\uc5d0 ",(0,r.kt)("strong",{parentName:"p"},"\ubc30\ud3ec"),"\ub429\ub2c8\ub2e4. \uc644\ub8cc\ub418\uba74 \ube0c\ub77c\uc6b0\uc800 \ucc3d\uc774 \uc5f4\ub9bd\ub2c8\ub2e4."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"dapp\uacfc-\uc0c1\ud638-\uc791\uc6a9"},"dApp\uacfc \uc0c1\ud638 \uc791\uc6a9"),(0,r.kt)("p",null,'\uacc4\uc18d\ud574\uc11c NEAR \uacc4\uc815\uc73c\ub85c \ub85c\uadf8\uc778\ud558\uc138\uc694. \uc5c6\ub294 \uacbd\uc6b0 \uc989\uc2dc \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub85c\uadf8\uc778 \ud6c4 \uae30\ubd80\ud560 NEAR \uae08\uc561\uc744 \uc785\ub825\ud558\uace0 \uae30\ubd80 \ubc84\ud2bc\uc744 \ub204\ub974\uba74, \ud2b8\ub79c\uc7ad\uc158\uc744 \ud655\uc778\ud558\uae30 \uc704\ud574 NEAR \uc9c0\uac11\uc73c\ub85c \ub9ac\ub514\ub809\uc158\ub429\ub2c8\ub2e4. \ud655\uc778 \ud6c4 \uae30\ubd80 \ub0b4\uc5ed\uc740 "\ucd5c\uadfc \uae30\ubd80 \ub0b4\uc5ed"\uc5d0 \uae30\uc7ac\ub429\ub2c8\ub2e4.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:a(55812).Z,width:"1139",height:"479"}),"\n",(0,r.kt)("em",{parentName:"p"},"\uae30\ubd80 \uc571\uc758 \ud504\ub860\ud2b8\uc5d4\ub4dc")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"dapp\uc758-\uad6c\uc870"},"dApp\uc758 \uad6c\uc870"),(0,r.kt)("p",null,"\uc774\uc81c dApp\uc774 \ubb34\uc5c7\uc744 \ud558\ub294\uc9c0 \uc774\ud574\ud588\uc73c\ubbc0\ub85c \uadf8 \uad6c\uc870\ub97c \uc790\uc138\ud788 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\ud504\ub860\ud2b8\uc5d4\ub4dc \ucf54\ub4dc\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"/frontend")," \ud3f4\ub354\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"/contract")," \ud3f4\ub354\uc5d0 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"\ucee8\ud2b8\ub799\ud2b8"},"\ucee8\ud2b8\ub799\ud2b8"),(0,r.kt)("p",null,"\ucee8\ud2b8\ub799\ud2b8\ub294 \ub3c8\uc744 \uae30\ubd80\ud558\ub294 \uba54\uc11c\ub4dc(",(0,r.kt)("inlineCode",{parentName:"p"},"donate"),")\uc640 \uae30\ub85d\ub41c \uae30\ubd80\uae08\uc744 \uac80\uc0c9\ud558\ub294 \uba54\uc11c\ub4dc(\uc608: ",(0,r.kt)("inlineCode",{parentName:"p"},"get_donation_by_number"),")\ub97c \uacf5\uac1c\ud569\ub2c8\ub2e4."),(0,r.kt)(o.O2,{mdxType:"CodeTabs"},(0,r.kt)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",mdxType:"Language"},(0,r.kt)(o.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/donation-js/blob/master/contract/src/contract.ts",start:"16",end:"44",mdxType:"Github"})),(0,r.kt)(o.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,r.kt)(o.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/donation-rust/blob/main/contract/src/donation.rs",start:"21",end:"50",mdxType:"Github"})),(0,r.kt)(o.SQ,{value:"\ud83d\ude80 AssemblyScript",language:"ts",mdxType:"Language"},(0,r.kt)(o.Ey,{fname:"index.ts",url:"https://github.com/near-examples/docs-examples/blob/main/donation-as/contract/assembly/index.ts",start:"11",end:"34",mdxType:"Github"}))),(0,r.kt)("h3",{id:"\ud504\ub860\ud2b8\uc5d4\ub4dc"},"\ud504\ub860\ud2b8\uc5d4\ub4dc"),(0,r.kt)("p",null,"\ud504\ub860\ud2b8\uc5d4\ub4dc\ub294 \ud558\ub098\uc758 HTML \ud30c\uc77c(",(0,r.kt)("inlineCode",{parentName:"p"},"/index.html"),")\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4. \uc774 \ud30c\uc77c\uc740 \ud654\uba74\uc5d0 \ud45c\uc2dc\ub418\ub294 \uad6c\uc131 \uc694\uc18c\ub97c \uc815\uc758\ud569\ub2c8\ub2e4. \uc6f9\uc0ac\uc774\ud2b8\uc758 \ub85c\uc9c1\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"/assets/js/index.js"),"\uc5d0 \uc874\uc7ac\ud558\uba70 ",(0,r.kt)("inlineCode",{parentName:"p"},"/assets/js/near/utils.js"),"\ub97c \ud1b5\ud574 \ucee8\ud2b8\ub799\ud2b8\uc640 \ud1b5\uc2e0\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uae30\ubd80 \uc608\uc81c\uc758 \ud765\ubbf8\ub85c\uc6b4 \uce21\uba74\uc740, \ud2b8\ub79c\uc7ad\uc158\uc744 \uc218\ub77d\ud558\uae30 \uc704\ud574 NEAR \uc9c0\uac11\uc73c\ub85c \ub9ac\ub514\ub809\uc158\ub41c \ud6c4 \uacb0\uacfc\ub97c \uac80\uc0c9\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc900\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)(o.O2,{mdxType:"CodeTabs"},(0,r.kt)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",mdxType:"Language"},(0,r.kt)(o.Ey,{fname:"index.js",url:"https://github.com/near-examples/donation-js/blob/master/frontend/index.js",start:"74",end:"81",mdxType:"Github"}),(0,r.kt)(o.Ey,{fname:"near-interface.js",url:"https://github.com/near-examples/donation-js/blob/master/frontend/near-interface.js",start:"29",end:"32",mdxType:"Github"}),(0,r.kt)(o.Ey,{fname:"near-wallet.js",url:"https://github.com/near-examples/donation-js/blob/master/frontend/near-wallet.js",start:"105",end:"113",mdxType:"Github"}))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\ud14c\uc2a4\ud2b8"},"\ud14c\uc2a4\ud2b8"),(0,r.kt)("p",null,"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud560 \ub54c, \ubaa8\ub4e0 \uba54\uc11c\ub4dc\ub97c \ucca0\uc800\ud558\uac8c \ud14c\uc2a4\ud2b8\ud558\ub294 \uac83\uc774 \ub9e4\uc6b0 \uc911\uc694\ud569\ub2c8\ub2e4. \uc774 \ud504\ub85c\uc81d\ud2b8\uc5d0\ub294 \ub2e8\uc704(unit) \ubc0f \ud1b5\ud569(integration)\uc774\ub77c\ub294 \ub450 \uac00\uc9c0 \uc720\ud615\uc758 \ud14c\uc2a4\ud2b8\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uae30 \uc804\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn test")," \uba85\ub839\uc744 \ud1b5\ud574 dApp\uc5d0 \uc788\ub294 \ud14c\uc2a4\ud2b8\ub97c \uc218\ud589\ud558\uc2ed\uc2dc\uc624"),(0,r.kt)("h3",{id:"\ub2e8\uc704-\ud14c\uc2a4\ud2b8"},"\ub2e8\uc704 \ud14c\uc2a4\ud2b8"),(0,r.kt)("p",null,"\ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub294 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \uac1c\ubcc4 \ud568\uc218\ub97c \ud655\uc778\ud569\ub2c8\ub2e4. \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc640 \ub3d9\uc77c\ud55c \uc5b8\uc5b4\ub85c \uc791\uc131\ub429\ub2c8\ub2e4."),(0,r.kt)(o.O2,{mdxType:"CodeTabs"},(0,r.kt)(o.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,r.kt)(o.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/donation-rust/blob/main/contract/src/lib.rs",start:"63",end:"92",mdxType:"Github"})),(0,r.kt)(o.SQ,{value:"\ud83d\ude80 AssemblyScript",language:"ts",mdxType:"Language"},(0,r.kt)(o.Ey,{fname:"main.spec.ts",url:"https://github.com/near-examples/docs-examples/blob/main/donation-as/contract/assembly/__tests__/donation.spec.ts",start:"16",end:"43",mdxType:"Github"}))),(0,r.kt)("h3",{id:"\ud1b5\ud569-\ud14c\uc2a4\ud2b8"},"\ud1b5\ud569 \ud14c\uc2a4\ud2b8"),(0,r.kt)("p",null,"\ud1b5\ud569 \ud14c\uc2a4\ud2b8\ub294 \uc77c\ubc18\uc801\uc73c\ub85c Javascript\ub85c \uc791\uc131\ub429\ub2c8\ub2e4. \uc790\ub3d9\uc73c\ub85c \uc0c8 \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\uace0 \uc774\uc5d0 \ub300\ud55c \uba54\uc11c\ub4dc\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ubc29\uc2dd\uc73c\ub85c \ud1b5\ud569 \ud14c\uc2a4\ud2b8\ub294 \ud604\uc2e4\uc801\uc778 \uc2dc\ub098\ub9ac\uc624\uc5d0\uc11c \uc0ac\uc6a9\uc790\uc758 \uc0c1\ud638 \uc791\uc6a9\uc744 \uc2dc\ubbac\ub808\uc774\uc158\ud569\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"tests/integration-tests"),"\uc5d0\uc11c \ud1b5\ud569 \ud14c\uc2a4\ud2b8\ub97c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(o.O2,{mdxType:"CodeTabs"},(0,r.kt)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"rust",mdxType:"Language"},(0,r.kt)(o.Ey,{fname:"main.test.js",url:"https://github.com/near-examples/donation-js/blob/master/integration-tests/src/main.ava.ts",start:"50",end:"73",mdxType:"Github"}))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\ub354-\uc54c\uc544\ubcf4\uae30"},"\ub354 \uc54c\uc544\ubcf4\uae30"),(0,r.kt)("p",null,"\ubc30\uc6b8 \uc218 \uc788\ub294 \uc88b\uc740 \uba54\uc11c\ub4dc\ub294 \ucee8\ud2b8\ub799\ud2b8\ub97c \ud655\uc7a5\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \ub3c8\uc744 \uc989\uc2dc \ubcf4\ub0b4\ub294 \ub300\uc2e0 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ub204\uc801\ub418\ub3c4\ub85d \uae30\ubd80 \uc608\uc2dc\ub97c \uc218\uc815\ud574\ubcf4\uc138\uc694. \uadf8\ub7f0 \ub2e4\uc74c \ub3c8\uc744 \ud68c\uc218\ud558\uae30 \uc704\ud574 \ud638\ucd9c\ud560 \uc218 \uc788\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"beneficiary")," \uba54\uc11c\ub4dc\ub97c \ub9cc\ub4e4\uc5b4 \ubcf4\uc138\uc694."))}g.isMDXComponent=!0},55812:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/donation-7cf65e5e131274fd1ae9aa34bc465bb8.png"}}]);