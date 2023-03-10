"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8752],{90346:(e,t,a)=>{a.d(t,{Ey:()=>m,O2:()=>p,SQ:()=>d});var n=a(67294),l=a(65488),r=a(85162),o=a(1841),u=a.n(o),s=a(95665),i=a.n(s);function p(e){var t=e.children;return Array.isArray(t)||(t=[t]),n.createElement(l.Z,{className:"language-tabs",groupId:"code-tabs"},t.map((function(e,t){return n.createElement(r.Z,{value:e.props.value,label:e.props.value},e)})))}function d(e){var t=e.children,a=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var a=e.props,l=a.children,r=a.url,o=a.start,s=a.end,i=a.fname;if("Github"==e.props.mdxType)return m({url:r,start:o,end:s,language:t,fname:i});if("CodeBlock"==e.props.mdxType)return n.createElement(u(),{fname:i,language:t},l);return e}(e,a)})),1==t.length?n.createElement(r.Z,{value:0,label:t[0].props.fname},t[0]):n.createElement(l.Z,{className:"file-tabs"},t.map((function(e,t){return n.createElement(r.Z,{value:t,label:e.props.fname},e)})))}function m(e){var t=e.url,a=e.start,l=e.end,r=e.language,o=e.fname,u=t+"#";return a&&l&&(u+="L"+a+"-L"+l+"#"),n.createElement(i(),{language:r,fname:o},u)}},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),l=a(86010);const r="tabItem_Ymn6";function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(87462),l=a(67294),r=a(86010),o=a(72389),u=a(67392),s=a(7094),i=a(12466);const p="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,a,o=e.lazy,m=e.block,c=e.defaultValue,k=e.values,b=e.groupId,g=e.className,h=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=k?k:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,u.l)(v,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===c?c:null!=(t=null!=c?c:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:h[0].props.value;if(null!==N&&!v.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.U)(),x=y.tabGroupChoices,T=y.setTabGroupChoices,C=(0,l.useState)(N),E=C[0],Z=C[1],A=[],w=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var G=x[b];null!=G&&G!==E&&v.some((function(e){return e.value===G}))&&Z(G)}var S=function(e){var t=e.currentTarget,a=A.indexOf(t),n=v[a].value;n!==E&&(w(t),Z(n),null!=b&&T(b,String(n)))},j=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,l=A.indexOf(e.currentTarget)+1;a=null!=(n=A[l])?n:A[0];break;case"ArrowLeft":var r,o=A.indexOf(e.currentTarget)-1;a=null!=(r=A[o])?r:A[A.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},g)},v.map((function(e){var t=e.value,a=e.label,o=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return A.push(e)},onKeyDown:j,onFocus:S,onClick:S},o,{className:(0,r.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=a?a:t)}))),o?(0,l.cloneElement)(h.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function c(e){var t=(0,o.Z)();return l.createElement(m,(0,n.Z)({key:String(t)},e))}},97059:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>p,metadata:()=>m,toc:()=>k});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),o=a(65488),u=a(85162),s=a(90346),i=["components"],p={id:"guest-book",title:"\ubc29\uba85\ub85d"},d=void 0,m={unversionedId:"tutorials/examples/guest-book",id:"tutorials/examples/guest-book",title:"\ubc29\uba85\ub85d",description:"",source:"@site/../docs/3.tutorials/examples/guest-book.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/guest-book",permalink:"/near_docs/tutorials/examples/guest-book",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/guest-book.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"Mar 9, 2023",frontMatter:{id:"guest-book",title:"\ubc29\uba85\ub85d"},sidebar:"\ud29c\ud1a0\ub9ac\uc5bc",previous:{title:"NEAR \uc22b\uc790 \uc138\uae30",permalink:"/near_docs/tutorials/examples/count-near"},next:{title:"\uae30\ubd80",permalink:"/near_docs/tutorials/examples/donation"}},c={},k=[{value:"\ud504\ub85c\uc81d\ud2b8 \uc2dc\uc791",id:"\ud504\ub85c\uc81d\ud2b8-\uc2dc\uc791",level:2},{value:"\ubc29\uba85\ub85d\uacfc \uc0c1\ud638 \uc791\uc6a9",id:"\ubc29\uba85\ub85d\uacfc-\uc0c1\ud638-\uc791\uc6a9",level:2},{value:"dApp\uc758 \uad6c\uc870",id:"dapp\uc758-\uad6c\uc870",level:2},{value:"\ucee8\ud2b8\ub799\ud2b8",id:"\ucee8\ud2b8\ub799\ud2b8",level:3},{value:"\ud504\ub860\ud2b8\uc5d4\ub4dc",id:"\ud504\ub860\ud2b8\uc5d4\ub4dc",level:3},{value:"\ud14c\uc2a4\ud2b8",id:"\ud14c\uc2a4\ud2b8",level:2},{value:"\ub2e8\uc704 \ud14c\uc2a4\ud2b8",id:"\ub2e8\uc704-\ud14c\uc2a4\ud2b8",level:3},{value:"\ud1b5\ud569 \ud14c\uc2a4\ud2b8",id:"\ud1b5\ud569-\ud14c\uc2a4\ud2b8",level:3}],b={toc:k};function g(e){var t=e.components,p=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},b,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\uc774 \ubc29\uba85\ub85d \uc608\uc81c\ub294 \ub450 \uac00\uc9c0 \uc8fc\uc694 \uad6c\uc131 \uc694\uc18c\ub85c \uc774\ub8e8\uc5b4\uc9c4 \uac04\ub2e8\ud55c \uc571\uc785\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\uc0ac\uc6a9\uc790\uc758 \uba54\uc2dc\uc9c0\ub97c \uc800\uc7a5\ud558\uace0 \ub3c8\uc744 \ucca8\ubd80\ud560 \uc218 \uc788\ub294 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8"),(0,r.kt)("li",{parentName:"ol"},"\uac8c\uc2dc\ub41c \ub9c8\uc9c0\ub9c9 10\uac1c\uc758 \uba54\uc2dc\uc9c0\ub97c \ud45c\uc2dc\ud558\ub294 \uac04\ub2e8\ud55c \uc6f9 \uae30\ubc18 \ud504\ub860\ud2b8\uc5d4\ub4dc")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:a(39769).Z,width:"1080",height:"457"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\ud504\ub85c\uc81d\ud2b8-\uc2dc\uc791"},"\ud504\ub85c\uc81d\ud2b8 \uc2dc\uc791"),(0,r.kt)("p",null,"\ud504\ub85c\uc81d\ud2b8 \uc0ac\uc6a9\uc744 \uc2dc\uc791\ud558\ub294 \ub370\ub294 \ub450 \uac00\uc9c0 \uc635\uc158\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uccab \ubc88\uc9f8 \uad8c\uc7a5 \uc0ac\ud56d\uc740 \uc6f9 \uae30\ubc18 \ub300\ud654\ud615 \ud658\uacbd\uc744 \uc5ec\ub294 Gitpod\ub97c \ud1b5\ud574 \uc571\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \ub450 \ubc88\uc9f8 \uc635\uc158\uc740 \ub808\ud37c\uc9c0\ud1a0\ub9ac\ub97c \ub85c\uceec\ub85c \ubcf5\uc81c\ud558\ub294 \uac83\uc73c\ub85c \ubaa8\ub4e0 ",(0,r.kt)("a",{parentName:"p",href:"/near_docs/develop/prerequisites"},"\ud544\uc218 \uad6c\uc131 \uc694\uc18c"),"\ub97c \uc124\uce58\ud574\uc57c \ud569\ub2c8\ub2e4 ."),(0,r.kt)(o.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"\ud83c\udf10 JavaScript",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Gitpod"),(0,r.kt)("th",{parentName:"tr",align:null},"\ub85c\uceec\ub85c \ubcf5\uc81c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{href:"https://gitpod.io/#https://github.com/near-examples/guest-book-js.git"},(0,r.kt)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Gitpod\uc5d0\uc11c \uc5f4\uae30"}))),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83c\udf10 ",(0,r.kt)("inlineCode",{parentName:"td"},"https://github.com/near-examples/guest-book-js")))))),(0,r.kt)(u.Z,{value:"\ud83e\udd80 Rust",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Gitpod"),(0,r.kt)("th",{parentName:"tr",align:null},"\ub85c\uceec\ub85c \ubcf5\uc81c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{href:"https://gitpod.io/#https://github.com/near-examples/guest-book-rust.git"},(0,r.kt)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Gitpod\uc5d0\uc11c \uc5f4\uae30"}))),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83e\udd80 ",(0,r.kt)("inlineCode",{parentName:"td"},"https://github.com/near-examples/guest-book-rust")))))),(0,r.kt)(u.Z,{value:"\ud83d\ude80 AssemblyScript",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Gitpod"),(0,r.kt)("th",{parentName:"tr",align:null},"\ub85c\uceec\ub85c \ubcf5\uc81c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{href:"https://gitpod.io/#https://github.com/near-examples/guest-book.git"},(0,r.kt)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Gitpod\uc5d0\uc11c \uc5f4\uae30"}))),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\ude80 ",(0,r.kt)("inlineCode",{parentName:"td"},"https://github.com/near-examples/guest-book"))))))),(0,r.kt)("p",null,"Gitpod\ub97c \uc120\ud0dd\ud558\uba74 \uc0c8 \ube0c\ub77c\uc6b0\uc800 \ucc3d\uc774 \ucf54\ub4dc\uc640 \ud568\uaed8 \uc790\ub3d9\uc73c\ub85c \uc5f4\ub9ac\uace0, \uc7a0\uc2dc \uae30\ub2e4\ub9ac\uba74 \ud504\ub860\ud2b8\uc5d4\ub4dc\uac00 \ud31d\uc5c5\ub429\ub2c8\ub2e4(\ud31d\uc5c5 \ucc3d\uc774 \ucc28\ub2e8\ub418\uc9c0 \uc54a\uc558\ub294\uc9c0 \ud655\uc778)."),(0,r.kt)("p",null,"\uc571\uc744 \ub85c\uceec\uc5d0\uc11c \uc2e4\ud589\ud558\ub294 \uacbd\uc6b0, \uc571\uc744 \ubcf5\uc81c\ud55c \ub514\ub809\ud130\ub9ac\ub97c \uc785\ub825\ud558\uace0 ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn"),"\uc73c\ub85c \uc758\uc874\uc131\uc744 \uc124\uce58\ud55c \ub4a4 ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn start"),"\ub97c \uc785\ub825\ud558\uc5ec \uc2dc\uc791\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd guest-book\nyarn\nyarn deploy\nyarn start\n")),(0,r.kt)("p",null,"\uadf8\ub7ec\uba74 \ucee8\ud2b8\ub799\ud2b8\uac00 ",(0,r.kt)("strong",{parentName:"p"},"\ucef4\ud30c\uc77c\ub418\uc5b4")," ",(0,r.kt)("inlineCode",{parentName:"p"},"testnet")," \ub124\ud2b8\uc6cc\ud06c\uc758 ",(0,r.kt)("strong",{parentName:"p"},"\uacc4\uc815"),"\uc5d0 ",(0,r.kt)("strong",{parentName:"p"},"\ubc30\ud3ec"),"\ub429\ub2c8\ub2e4. \uc644\ub8cc\ub418\uba74 \ube0c\ub77c\uc6b0\uc800 \ucc3d\uc774 \uc5f4\ub9bd\ub2c8\ub2e4."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\ubc29\uba85\ub85d\uacfc-\uc0c1\ud638-\uc791\uc6a9"},"\ubc29\uba85\ub85d\uacfc \uc0c1\ud638 \uc791\uc6a9"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:a(39769).Z,width:"1080",height:"457"}),"\n",(0,r.kt)("em",{parentName:"p"},"\ubc29\uba85\ub85d \uc571\uc758 \ud504\ub860\ud2b8\uc5d4\ub4dc")),(0,r.kt)("p",null,'NEAR \uacc4\uc815\uc73c\ub85c \ub85c\uadf8\uc778\ud558\uc138\uc694. \uacc4\uc815\uc774 \uc5c6\ub294 \uacbd\uc6b0 \uc989\uc2dc \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub85c\uadf8\uc778\ud558\uba74 \ubc29\uba85\ub85d\uc5d0 \uba54\uc2dc\uc9c0\uc5d0 \uc11c\uba85\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uba54\uc2dc\uc9c0\uc640 \ud568\uaed8 \ub3c8\uc744 \ub354 \ubcf4\ub0bc \uc218 \uc788\uace0, 0.01\u24c3 \uc774\uc0c1 \ucca8\ubd80\ud558\uba74 \uba54\uc2dc\uc9c0\uac00 "\ud504\ub9ac\ubbf8\uc5c4"\uc73c\ub85c \ud45c\uc2dc\ub429\ub2c8\ub2e4.'),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"dapp\uc758-\uad6c\uc870"},"dApp\uc758 \uad6c\uc870"),(0,r.kt)("p",null,"\uc774\uc81c dApp\uc774 \ubb34\uc5c7\uc744 \ud558\ub294\uc9c0 \uc774\ud574\ud588\uc73c\ubbc0\ub85c \uadf8 \uad6c\uc870\ub97c \uc790\uc138\ud788 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\ud504\ub860\ud2b8\uc5d4\ub4dc \ucf54\ub4dc\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"/frontend")," \ud3f4\ub354\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"/contract")," \ud3f4\ub354\uc5d0 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"\ucee8\ud2b8\ub799\ud2b8"},"\ucee8\ud2b8\ub799\ud2b8"),(0,r.kt)("p",null,"\ucee8\ud2b8\ub799\ud2b8\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"add_message"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"get_message")," \ub450 \uac00\uc9c0 \uba54\uc11c\ub4dc\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(s.O2,{mdxType:"CodeTabs"},(0,r.kt)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",mdxType:"Language"},(0,r.kt)(s.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/guest-book-js/blob/master/contract/src/contract.ts",start:"4",end:"24",mdxType:"Github"})),(0,r.kt)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,r.kt)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/guest-book-rust/blob/main/contract/src/lib.rs",start:"29",end:"50",mdxType:"Github"}))),(0,r.kt)("h3",{id:"\ud504\ub860\ud2b8\uc5d4\ub4dc"},"\ud504\ub860\ud2b8\uc5d4\ub4dc"),(0,r.kt)("p",null,"\ud504\ub860\ud2b8\uc5d4\ub4dc\ub294 \ud558\ub098\uc758 HTML \ud30c\uc77c(",(0,r.kt)("inlineCode",{parentName:"p"},"/index.html"),")\ub85c \uad6c\uc131\ub418\uba70, REACT\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uad6c\uc131 \uc694\uc18c\uac00 \ud654\uba74\uc5d0 \ud45c\uc2dc\ub418\ub294 \ubc29\uc2dd\uc744 \uc774\ud574\ud558\ub824\uba74, ",(0,r.kt)("inlineCode",{parentName:"p"},"/App.js")," \ubc0f ",(0,r.kt)("inlineCode",{parentName:"p"},"/index.js"),"\ub97c \ud655\uc778\ud558\uc138\uc694."),(0,r.kt)("p",null,"\ub2e4\uc74c \ucf54\ub4dc\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"/assets/js/index.js"),"\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(s.O2,{mdxType:"CodeTabs"},(0,r.kt)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",mdxType:"Language"},(0,r.kt)(s.Ey,{fname:"index.js",url:"https://github.com/near-examples/guest-book-rust/blob/main/frontend/index.js",start:"15",end:"25",mdxType:"Github"}))),(0,r.kt)("p",null,"\ud544\uc694\ud55c \ubcc0\uc218\ub97c \uc124\uc815\ud558\uace0 \uc571\uc744 \uc2dc\uc791\ud569\ub2c8\ub2e4."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\ud14c\uc2a4\ud2b8"},"\ud14c\uc2a4\ud2b8"),(0,r.kt)("p",null,"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud560 \ub54c, \ubaa8\ub4e0 \ubc29\ubc95\uc744 \ucca0\uc800\ud558\uac8c \ud14c\uc2a4\ud2b8\ud558\ub294 \uac83\uc774 \ub9e4\uc6b0 \uc911\uc694\ud569\ub2c8\ub2e4. \uc774 \ud504\ub85c\uc81d\ud2b8\uc5d0\ub294 \ub2e8\uc704 \ubc0f \ud1b5\ud569\uc774\ub77c\ub294 \ub450 \uac00\uc9c0 \uc720\ud615\uc758 \ud14c\uc2a4\ud2b8\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uae30 \uc804\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn test")," \uba85\ub839\uc744 \ud1b5\ud574 dApp\uc5d0 \uc788\ub294 \ud14c\uc2a4\ud2b8\ub97c \uc218\ud589\ud558\uc138\uc694."),(0,r.kt)("h3",{id:"\ub2e8\uc704-\ud14c\uc2a4\ud2b8"},"\ub2e8\uc704 \ud14c\uc2a4\ud2b8"),(0,r.kt)("p",null,"\ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub294 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \uac1c\ubcc4 \ud568\uc218\ub97c \ud655\uc778\ud569\ub2c8\ub2e4. \ud604\uc7ac Rust\uc5d0\uc11c\ub9cc \ub2e8\uc704 \ud14c\uc2a4\ud2b8\uac00 \uad6c\ud604\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(s.O2,{mdxType:"CodeTabs"},(0,r.kt)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,r.kt)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/guest-book-rust/blob/main/contract/src/lib.rs",start:"63",end:"86",mdxType:"Github"}))),(0,r.kt)("h3",{id:"\ud1b5\ud569-\ud14c\uc2a4\ud2b8"},"\ud1b5\ud569 \ud14c\uc2a4\ud2b8"),(0,r.kt)("p",null,"\ud1b5\ud569 \ud14c\uc2a4\ud2b8\ub294 \uc77c\ubc18\uc801\uc73c\ub85c JavaScript\ub85c \uc791\uc131\ub429\ub2c8\ub2e4. \uc774\ub294 \uc790\ub3d9\uc73c\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\uace0 \uba54\uc11c\ub4dc\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ubc29\uc2dd\uc73c\ub85c \ud1b5\ud569 \ud14c\uc2a4\ud2b8\ub294 \ud604\uc2e4\uc801\uc778 \uc2dc\ub098\ub9ac\uc624\uc5d0\uc11c \ucee8\ud2b8\ub799\ud2b8\uc640 \uc0ac\uc6a9\uc790 \uac04\uc758 \uc0c1\ud638 \uc791\uc6a9\uc744 \uc2dc\ubbac\ub808\uc774\uc158\ud569\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"integration-tests/"),"\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"hello-near"),"\uc5d0 \ub300\ud55c \ud1b5\ud569 \ud14c\uc2a4\ud2b8\ub97c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(s.O2,{mdxType:"CodeTabs"},(0,r.kt)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",mdxType:"Language"},(0,r.kt)(s.Ey,{fname:"main.ava.ts",url:"https://github.com/near-examples/guest-book-js/blob/master/integration-tests/src/main.ava.ts",start:"39",end:"59",mdxType:"Github"}))))}g.isMDXComponent=!0},39769:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/guest-book-b305a87a35cbef2b632ebe289d44f7b2.png"}}]);