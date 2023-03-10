"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5666],{90346:(e,t,a)=>{a.d(t,{Ey:()=>d,O2:()=>p,SQ:()=>c});var n=a(67294),l=a(65488),r=a(85162),o=a(1841),s=a.n(o),i=a(95665),u=a.n(i);function p(e){var t=e.children;return Array.isArray(t)||(t=[t]),n.createElement(l.Z,{className:"language-tabs",groupId:"code-tabs"},t.map((function(e,t){return n.createElement(r.Z,{value:e.props.value,label:e.props.value},e)})))}function c(e){var t=e.children,a=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var a=e.props,l=a.children,r=a.url,o=a.start,i=a.end,u=a.fname;if("Github"==e.props.mdxType)return d({url:r,start:o,end:i,language:t,fname:u});if("CodeBlock"==e.props.mdxType)return n.createElement(s(),{fname:u,language:t},l);return e}(e,a)})),1==t.length?n.createElement(r.Z,{value:0,label:t[0].props.fname},t[0]):n.createElement(l.Z,{className:"file-tabs"},t.map((function(e,t){return n.createElement(r.Z,{value:t,label:e.props.fname},e)})))}function d(e){var t=e.url,a=e.start,l=e.end,r=e.language,o=e.fname,s=t+"#";return a&&l&&(s+="L"+a+"-L"+l+"#"),n.createElement(u(),{language:r,fname:o},s)}},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),l=a(86010);const r="tabItem_Ymn6";function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),l=a(67294),r=a(86010),o=a(72389),s=a(67392),i=a(7094),u=a(12466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,a,o=e.lazy,d=e.block,m=e.defaultValue,h=e.values,k=e.groupId,g=e.className,v=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,s.l)(b,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===m?m:null!=(t=null!=m?m:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:v[0].props.value;if(null!==f&&!b.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,i.U)(),y=x.tabGroupChoices,C=x.setTabGroupChoices,T=(0,l.useState)(f),E=T[0],_=T[1],Z=[],A=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var w=y[k];null!=w&&w!==E&&b.some((function(e){return e.value===w}))&&_(w)}var I=function(e){var t=e.currentTarget,a=Z.indexOf(t),n=b[a].value;n!==E&&(A(t),_(n),null!=k&&C(k,String(n)))},G=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,l=Z.indexOf(e.currentTarget)+1;a=null!=(n=Z[l])?n:Z[0];break;case"ArrowLeft":var r,o=Z.indexOf(e.currentTarget)-1;a=null!=(r=Z[o])?r:Z[Z.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},g)},b.map((function(e){var t=e.value,a=e.label,o=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return Z.push(e)},onKeyDown:G,onFocus:I,onClick:I},o,{className:(0,r.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=a?a:t)}))),o?(0,l.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,o.Z)();return l.createElement(d,(0,n.Z)({key:String(t)},e))}},88290:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>g,frontMatter:()=>p,metadata:()=>d,toc:()=>h});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),o=a(65488),s=a(85162),i=a(90346),u=["components"],p={id:"xcc",title:"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c"},c=void 0,d={unversionedId:"tutorials/examples/xcc",id:"tutorials/examples/xcc",title:"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c",description:"",source:"@site/../docs/3.tutorials/examples/xcc.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/xcc",permalink:"/near_docs/zh-CN/tutorials/examples/xcc",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/xcc.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"2023\u5e743\u67089\u65e5",frontMatter:{id:"xcc",title:"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c"},sidebar:"\ud29c\ud1a0\ub9ac\uc5bc",previous:{title:"\uae30\ubd80",permalink:"/near_docs/zh-CN/tutorials/examples/donation"},next:{title:"\ub3d9\uc804 \ub358\uc9c0\uae30",permalink:"/near_docs/zh-CN/tutorials/examples/coin-flip"}},m={},h=[{value:"\ud504\ub85c\uc81d\ud2b8 \uc2dc\uc791",id:"\ud504\ub85c\uc81d\ud2b8-\uc2dc\uc791",level:2},{value:"\ucee8\ud2b8\ub799\ud2b8\uc640 \uc0c1\ud638 \uc791\uc6a9",id:"\ucee8\ud2b8\ub799\ud2b8\uc640-\uc0c1\ud638-\uc791\uc6a9",level:3},{value:"1. \ucee8\ud2b8\ub799\ud2b8 \uad6c\ucd95 \ubc0f \ubc30\ud3ec",id:"1-\ucee8\ud2b8\ub799\ud2b8-\uad6c\ucd95-\ubc0f-\ubc30\ud3ec",level:4},{value:"2. \uc778\uc0ac \uac00\uc838\uc624\uae30",id:"2-\uc778\uc0ac-\uac00\uc838\uc624\uae30",level:4},{value:"\ucee8\ud2b8\ub799\ud2b8",id:"\ucee8\ud2b8\ub799\ud2b8",level:3},{value:"\ud14c\uc2a4\ud2b8",id:"\ud14c\uc2a4\ud2b8",level:2},{value:"\ub2e8\uc704 \ud14c\uc2a4\ud2b8",id:"\ub2e8\uc704-\ud14c\uc2a4\ud2b8",level:3},{value:"\ud1b5\ud569 \ud14c\uc2a4\ud2b8",id:"\ud1b5\ud569-\ud14c\uc2a4\ud2b8",level:3},{value:"\ub354 \uc54c\uc544\ubcf4\uae30",id:"\ub354-\uc54c\uc544\ubcf4\uae30",level:2},{value:"\uace0\uae09 \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c",id:"\uace0\uae09-\uad50\ucc28-\ucee8\ud2b8\ub799\ud2b8-\ud638\ucd9c",level:3}],k={toc:h};function g(e){var t=e.components,a=(0,l.Z)(e,u);return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\uc774 \uc608\uc81c\ub294 \uac00\ub2a5\ud55c \uac00\uc7a5 \uac04\ub2e8\ud55c \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc744 \uc218\ud589\ud569\ub2c8\ub2e4. \uc778\uc0ac\ub9d0\uc744 \uc124\uc815\ud558\uace0 \uac80\uc0c9\ud558\uae30 \uc704\ud574 ",(0,r.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tutorials/examples/hello-near"},"Hello NEAR")," \uc608\uc81c\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4. \uc774\ub294 \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc5d0 \ub300\ud55c \uac00\uc7a5 \uac04\ub2e8\ud55c \uc608 \uc911 \ud558\ub098\uc774\uba70, \uc0c1\ud638 \uc791\uc6a9 \ucee8\ud2b8\ub799\ud2b8\uc758 \uc138\uacc4\ub85c \ub4e4\uc5b4\uac00\ub294 \uc644\ubcbd\ud55c \uad00\ubb38\uc785\ub2c8\ub2e4."),(0,r.kt)("admonition",{title:"\uace0\uae09 \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tutorials/examples/advanced-xcc"},"\uc77c\uad04 \ubc0f \ubcd1\ub82c\ub85c")," \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc744 \uc218\ud589\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \ud29c\ud1a0\ub9ac\uc5bc\uc744 \ud655\uc778\ud558\uc2ed\uc2dc\uc624.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\ud504\ub85c\uc81d\ud2b8-\uc2dc\uc791"},"\ud504\ub85c\uc81d\ud2b8 \uc2dc\uc791"),(0,r.kt)("p",null,"\ud504\ub85c\uc81d\ud2b8 \uc0ac\uc6a9\uc744 \uc2dc\uc791\ud558\ub294 \ub370\ub294 \ub450 \uac00\uc9c0 \uc635\uc158\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uccab \ubc88\uc9f8 \uad8c\uc7a5 \uc0ac\ud56d\uc740 \uc6f9 \uae30\ubc18 \ub300\ud654\ud615 \ud658\uacbd\uc744 \uc5ec\ub294 Gitpod\ub97c \ud1b5\ud574 \uc571\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \ub450 \ubc88\uc9f8 \uc635\uc158\uc740 \ub808\ud37c\uc9c0\ud1a0\ub9ac\ub97c \ub85c\uceec\ub85c \ubcf5\uc81c\ud558\ub294 \uac83\uc73c\ub85c, \ubaa8\ub4e0 ",(0,r.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/develop/prerequisites"},"\ud544\uc218 \uad6c\uc131 \uc694\uc18c"),"\ub97c \uc124\uce58\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)(o.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"\ud83c\udf10 JavaScript",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Gitpod"),(0,r.kt)("th",{parentName:"tr",align:null},"\ub85c\uceec\ub85c \ubcf5\uc81c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{href:"https://gitpod.io/#https://github.com/near-examples/cross-contract-hello-js"},(0,r.kt)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Gitpod\uc5d0\uc11c \uc5f4\uae30"}))),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83c\udf10 ",(0,r.kt)("inlineCode",{parentName:"td"},"https://github.com/near-examples/cross-contract-hello-js.git")))))),(0,r.kt)(s.Z,{value:"\ud83e\udd80 Rust",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Gitpod"),(0,r.kt)("th",{parentName:"tr",align:null},"\ub85c\uceec\ub85c \ubcf5\uc81c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{href:"https://gitpod.io/#https://github.com/near-examples/cross-contract-hello-rust"},(0,r.kt)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Gitpod\uc5d0\uc11c \uc5f4\uae30"}))),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83e\udd80 ",(0,r.kt)("inlineCode",{parentName:"td"},"https://github.com/near-examples/cross-contract-hello-rust.git")))))),(0,r.kt)(s.Z,{value:"\ud83d\ude80 AssemblyScript",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Gitpod"),(0,r.kt)("th",{parentName:"tr",align:null},"\ub85c\uceec\ub85c \ubcf5\uc81c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{href:"https://gitpod.io/#https://github.com/near-examples/docs-examples/blob/main/cross-contract-hello-as"},(0,r.kt)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Gitpod\uc5d0\uc11c \uc5f4\uae30"}))),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\ude80 ",(0,r.kt)("inlineCode",{parentName:"td"},"https://github.com/near-examples/docs-examples")," -> cross-contract-hello-as")))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\ucee8\ud2b8\ub799\ud2b8\uc640-\uc0c1\ud638-\uc791\uc6a9"},"\ucee8\ud2b8\ub799\ud2b8\uc640 \uc0c1\ud638 \uc791\uc6a9"),(0,r.kt)("p",null,"\uc774 \uc608\uc81c\uc5d0\ub294 \ud504\ub860\ud2b8\uc5d4\ub4dc\uac00 \uc5c6\uc73c\ubbc0\ub85c, ",(0,r.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-cli"},"NEAR CLI"),"\ub97c \ud1b5\ud574 \uc0c1\ud638 \uc791\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"README.md\ub97c \ud655\uc778\ud558\uc138\uc694. \uac04\ub2e8\ud788 \ub9d0\ud574\uc11c \ub2e4\uc74c\uacfc \uac19\uc740 \uac83\ub4e4\uc744 \uc218\ud589\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("h4",{id:"1-\ucee8\ud2b8\ub799\ud2b8-\uad6c\ucd95-\ubc0f-\ubc30\ud3ec"},"1. \ucee8\ud2b8\ub799\ud2b8 \uad6c\ucd95 \ubc0f \ubc30\ud3ec"),(0,r.kt)("p",null,"\ub2e4\uc74c\uc744 \uc2e4\ud589\ud558\uc5ec NEAR \ud14c\uc2a4\ud2b8\ub137\uc5d0\uc11c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc790\ub3d9\uc73c\ub85c \ucef4\ud30c\uc77c\ud558\uace0 \ubc30\ud3ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./deploy.sh\n")),(0,r.kt)("p",null,"\uc644\ub8cc\ub418\uba74, ",(0,r.kt)("inlineCode",{parentName:"p"},"neardev/dev-account")," \ud30c\uc77c\uc744 \ud655\uc778\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8\uac00 \ubc30\ud3ec\ub41c \uc8fc\uc18c\ub97c \ucc3e\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat ./neardev/dev-account # e.g. dev-1659899566943-21539992274727\n")),(0,r.kt)("h4",{id:"2-\uc778\uc0ac-\uac00\uc838\uc624\uae30"},"2. \uc778\uc0ac \uac00\uc838\uc624\uae30"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"query_greeting"),"\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"hello-nearverse.testnet"),"\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"get_greeting()")," \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\uc5ec \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4.\n",(0,r.kt)("inlineCode",{parentName:"p"},"Call")," \uba54\uc11c\ub4dc\ub294 NEAR \uacc4\uc815\uc744 \ud1b5\ud574\uc11c\ub9cc \ud638\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uacc4\uc815\uc740 \ud2b8\ub79c\uc7ad\uc158\uc5d0 \ub300\ud574 \uac00\uc2a4\ub97c \uc9c0\ubd88\ud574\uc57c \ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Use near-cli to ask the contract to query the greeting\nnear call <dev-account> query_greeting --accountId <dev-account>\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\ucee8\ud2b8\ub799\ud2b8"},"\ucee8\ud2b8\ub799\ud2b8"),(0,r.kt)("p",null,"\ucee8\ud2b8\ub799\ud2b8\ub294 \uc778\uc0ac\ub9d0\uc744 \uc870\ud68c\ud558\uace0 \ubcc0\uacbd\ud558\ub294 \uba54\uc11c\ub4dc\ub97c \uacf5\uac1c\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uba54\uc11c\ub4dc\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"hello-near")," \uc608\uc81c\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"get_greeting")," \ubc0f\n",(0,r.kt)("inlineCode",{parentName:"p"},"set_greeting")," \ud638\ucd9c\ub9cc \uc218\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)(i.O2,{mdxType:"CodeTabs"},(0,r.kt)(i.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",mdxType:"Language"},(0,r.kt)(i.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/cross-contract-hello-js/blob/master/contract/src/contract.ts",start:"17",end:"39",mdxType:"Github"})),(0,r.kt)(i.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,r.kt)(i.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/cross-contract-hello-rust/blob/main/contract/src/lib.rs",start:"24",end:"49",mdxType:"Github"})),(0,r.kt)(i.SQ,{value:"\ud83d\ude80 AssemblyScript",language:"ts",mdxType:"Language"},(0,r.kt)(i.Ey,{fname:"index.ts",url:"https://github.com/near-examples/docs-examples/blob/main/cross-contract-hello-as/contract/assembly/index.ts",start:"11",end:"45",mdxType:"Github"}))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\ud14c\uc2a4\ud2b8"},"\ud14c\uc2a4\ud2b8"),(0,r.kt)("p",null,"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud560 \ub54c \ubaa8\ub4e0 \uba54\uc11c\ub4dc\ub97c \ucca0\uc800\ud558\uac8c \ud14c\uc2a4\ud2b8\ud558\ub294 \uac83\uc774 \ub9e4\uc6b0 \uc911\uc694\ud569\ub2c8\ub2e4. \uc774 \ud504\ub85c\uc81d\ud2b8\uc5d0\ub294 \ub2e8\uc704 \ubc0f \ud1b5\ud569\uc774\ub77c\ub294 \ub450 \uac00\uc9c0 \uc720\ud615\uc758 \ud14c\uc2a4\ud2b8\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uae30 \uc804\uc5d0, ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn test")," \uba85\ub839\uc744 \ud1b5\ud574 dApp\uc5d0 \uc788\ub294 \ud14c\uc2a4\ud2b8\ub97c \uc218\ud589\ud558\uc138\uc694."),(0,r.kt)("h3",{id:"\ub2e8\uc704-\ud14c\uc2a4\ud2b8"},"\ub2e8\uc704 \ud14c\uc2a4\ud2b8"),(0,r.kt)("p",null,"\ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub294 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ub0b4 \uac1c\ubcc4 \ud568\uc218\ub97c \ud655\uc778\ud569\ub2c8\ub2e4. \ud604\uc7ac Rust\uc5d0\uc11c\ub9cc \ub2e8\uc704 \ud14c\uc2a4\ud2b8\uac00 \uad6c\ud604\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774 \uc608\uc81c\ub294 \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc744 \ucc98\ub9ac\ud558\ubbc0\ub85c, \ub2e8\uc704 \ud14c\uc2a4\ud2b8\uc5d0\uc11c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"initialize")," \uba54\uc11c\ub4dc\ub9cc \uc791\ub3d9 \uc5ec\ubd80\ub97c \ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4. \uc774\ub294 \ub2e8\uc704 \ud14c\uc2a4\ud2b8\uac00 \ucee8\ud2b8\ub799\ud2b8 \uac04 \ud638\ucd9c\uc744 \ud14c\uc2a4\ud2b8\ud560 \uc218 ",(0,r.kt)("strong",{parentName:"p"},"\uc5c6\uae30")," \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\ud1b5\ud569-\ud14c\uc2a4\ud2b8"},"\ud1b5\ud569 \ud14c\uc2a4\ud2b8"),(0,r.kt)("p",null,"\ud2b9\ud788 \uc774 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \ud1b5\ud569 \ud14c\uc2a4\ud2b8\ub294 \uba3c\uc800 ",(0,r.kt)("inlineCode",{parentName:"p"},"hello-near")," \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud569\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc774 \uba54\uc2dc\uc9c0\ub97c \uc62c\ubc14\ub974\uac8c \uc124\uc815\ud558\uace0 \uac80\uc0c9\ud558\ub294\uc9c0 \ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"integration-tests/"),"\uc5d0\uc11c \ud1b5\ud569 \ud14c\uc2a4\ud2b8\ub97c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(i.O2,{mdxType:"CodeTabs"},(0,r.kt)(i.SQ,{value:"\ud83c\udf10 JavaScript",language:"rust",mdxType:"Language"},(0,r.kt)(i.Ey,{fname:"main.test.js",url:"https://github.com/near-examples/cross-contract-hello-js/blob/master/integration-tests/src/main.ava.ts",start:"9",end:"59",mdxType:"Github"}))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\ub354-\uc54c\uc544\ubcf4\uae30"},"\ub354 \uc54c\uc544\ubcf4\uae30"),(0,r.kt)("p",null,"\ubc30\uc6b8 \uc218 \uc788\ub294 \uc88b\uc740 \ubc29\ubc95\uc740 \ucee8\ud2b8\ub799\ud2b8\ub97c \ud655\uc7a5\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. ",(0,r.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tutorials/examples/guest-book"},"\ubc29\uba85\ub85d")," \ucee8\ud2b8\ub799\ud2b8\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \uc608\uc81c\ub97c \uc218\uc815\ud569\ub2c8\ub2e4! \uc774\ub7f0 \uc2dd\uc73c\ub85c \ub3c8\uc744 \ubd99\uc774\ub294 \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc744 \uc2dc\ub3c4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,r.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/develop/contracts/crosscontract#callback-method"},"\ucf5c\ubc31\uc744 \uc62c\ubc14\ub974\uac8c \ucc98\ub9ac"),"\ud558\uace0, \uc624\ub958\uac00 \ubc1c\uc0dd\ud55c \uacbd\uc6b0 \uc0ac\uc6a9\uc790\uc5d0\uac8c \uae08\uc561\uc744 \ubc18\ud658\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\uace0\uae09-\uad50\ucc28-\ucee8\ud2b8\ub799\ud2b8-\ud638\ucd9c"},"\uace0\uae09 \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c"),(0,r.kt)("p",null,"\ucee8\ud2b8\ub799\ud2b8 \uc5ec\ub7ec \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc744 \ub3d9\uc2dc\uc5d0 \uc218\ud589\ud560 \uc218 \uc788\uace0, \uc774\ub97c \ubcd1\ub82c\ub85c \uc2e4\ud589\ub418\ub294 \uc57d\uc18d \uc0dd\uc131 \ud639\uc740 \ubc30\uce58 \ud2b8\ub79c\uc7ad\uc158\uc73c\ub85c \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,r.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tutorials/examples/advanced-xcc"},"\uace0\uae09 \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c \ud29c\ud1a0\ub9ac\uc5bc"),"\uc744 \ud655\uc778\ud558\uc138\uc694."))}g.isMDXComponent=!0}}]);