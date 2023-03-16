"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8108],{90346:(e,t,a)=>{a.d(t,{Ey:()=>d,O2:()=>c,SQ:()=>u});var n=a(67294),r=a(65488),s=a(85162),l=a(1841),o=a.n(l),i=a(95665),p=a.n(i);function c(e){var t=e.children;return Array.isArray(t)||(t=[t]),n.createElement(r.Z,{className:"language-tabs",groupId:"code-tabs"},t.map((function(e,t){return n.createElement(s.Z,{value:e.props.value,label:e.props.value},e)})))}function u(e){var t=e.children,a=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var a=e.props,r=a.children,s=a.url,l=a.start,i=a.end,p=a.fname;if("Github"==e.props.mdxType)return d({url:s,start:l,end:i,language:t,fname:p});if("CodeBlock"==e.props.mdxType)return n.createElement(o(),{fname:p,language:t},r);return e}(e,a)})),1==t.length?n.createElement(s.Z,{value:0,label:t[0].props.fname},t[0]):n.createElement(r.Z,{className:"file-tabs"},t.map((function(e,t){return n.createElement(s.Z,{value:t,label:e.props.fname},e)})))}function d(e){var t=e.url,a=e.start,r=e.end,s=e.language,l=e.fname,o=t+"#";return a&&r&&(o+="L"+a+"-L"+r+"#"),n.createElement(p(),{language:s,fname:l},o)}},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const s="tabItem_Ymn6";function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),s=a(86010),l=a(72389),o=a(67392),i=a(7094),p=a(12466);const c="tabList__CuJ",u="tabItem_LNqP";function d(e){var t,a,l=e.lazy,d=e.block,m=e.defaultValue,k=e.values,h=e.groupId,v=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=k?k:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.l)(N,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===m?m:null!=(t=null!=m?m:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:g[0].props.value;if(null!==f&&!N.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,i.U)(),_=w.tabGroupChoices,T=w.setTabGroupChoices,C=(0,r.useState)(f),y=C[0],E=C[1],A=[],x=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var S=_[h];null!=S&&S!==y&&N.some((function(e){return e.value===S}))&&E(S)}var I=function(e){var t=e.currentTarget,a=A.indexOf(t),n=N[a].value;n!==y&&(x(t),E(n),null!=h&&T(h,String(n)))},R=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=A.indexOf(e.currentTarget)+1;a=null!=(n=A[r])?n:A[0];break;case"ArrowLeft":var s,l=A.indexOf(e.currentTarget)-1;a=null!=(s=A[l])?s:A[A.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},v)},N.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:function(e){return A.push(e)},onKeyDown:R,onFocus:I,onClick:I},l,{className:(0,s.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":y===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(g.filter((function(e){return e.props.value===y}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}function m(e){var t=(0,l.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},55360:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),l=a(90346),o=["components"],i={id:"integration-test",title:"\ud1b5\ud569 \ud14c\uc2a4\ud2b8(Integration Test)"},p=void 0,c={unversionedId:"develop/testing/integration-test",id:"develop/testing/integration-test",title:"\ud1b5\ud569 \ud14c\uc2a4\ud2b8(Integration Test)",description:"",source:"@site/../docs/2.develop/testing/integration.md",sourceDirName:"2.develop/testing",slug:"/develop/testing/integration-test",permalink:"/near_docs/develop/testing/integration-test",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/testing/integration.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"Mar 9, 2023",frontMatter:{id:"integration-test",title:"\ud1b5\ud569 \ud14c\uc2a4\ud2b8(Integration Test)"},sidebar:"\uac1c\ubc1c",previous:{title:"\ub2e8\uc704 \ud14c\uc2a4\ud2b8(Unit Testing)",permalink:"/near_docs/develop/testing/unit-test"},next:{title:"\ub85c\uceec \uac1c\ubc1c \ud658\uacbd",permalink:"/near_docs/develop/testing/kurtosis-localnet"}},u={},d=[{value:"NEAR \uc791\uc5c5 \uacf5\uac04",id:"near-\uc791\uc5c5-\uacf5\uac04",level:3},{value:"\uc2a4\ub2c8\ud3ab I: Hello NEAR \ud14c\uc2a4\ud2b8",id:"\uc2a4\ub2c8\ud3ab-i-hello-near-\ud14c\uc2a4\ud2b8",level:2},{value:"\uc2a4\ub2c8\ud3ab II: \uae30\ubd80 \uc608\uc81c \ud14c\uc2a4\ud2b8",id:"\uc2a4\ub2c8\ud3ab-ii-\uae30\ubd80-\uc608\uc81c-\ud14c\uc2a4\ud2b8",level:2},{value:"\uc0cc\ub4dc\ubc15\uc2a4 \ud14c\uc2a4\ud2b8",id:"\uc0cc\ub4dc\ubc15\uc2a4-\ud14c\uc2a4\ud2b8",level:2},{value:"\ucee8\ud2b8\ub799\ud2b8 \uc2a4\ud478\ub2dd",id:"\ucee8\ud2b8\ub799\ud2b8-\uc2a4\ud478\ub2dd",level:3},{value:"\uc2e4\uc2dc\uac04 \uc0c1\ud0dc \ud328\uce58",id:"\uc2e4\uc2dc\uac04-\uc0c1\ud0dc-\ud328\uce58",level:3},{value:"\uc2dc\uac04 \uc774\ub3d9",id:"\uc2dc\uac04-\uc774\ub3d9",level:3},{value:"\ud14c\uc2a4\ud2b8\ub137 \uc0ac\uc6a9",id:"\ud14c\uc2a4\ud2b8\ub137-\uc0ac\uc6a9",level:2},{value:"\ucd94\uac00 \ubbf8\ub514\uc5b4 \uc790\ub8cc",id:"\ucd94\uac00-\ubbf8\ub514\uc5b4-\uc790\ub8cc",level:2},{value:"\uc791\uc5c5 \uacf5\uac04\uacfc AVA\ub97c \uc0ac\uc6a9\ud55c \ud14c\uc2a4\ud2b8 \uae30\ubc18 \uc124\uacc4",id:"test-driven-design",level:4}],m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)}},k=m("Tabs"),h=m("TabItem"),v={toc:d};function g(e){var t=e.components,a=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\ud1b5\ud569 \ud14c\uc2a4\ud2b8\ub97c \uc0ac\uc6a9\ud558\uba74 NEAR ",(0,s.kt)("inlineCode",{parentName:"p"},"testnet")," \ub610\ub294 \ub85c\uceec ",(0,s.kt)("inlineCode",{parentName:"p"},"sandbox"),"\uc5d0 \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\uace0, \ucee8\ud2b8\ub799\ud2b8\uc640 \uc0c1\ud638 \uc791\uc6a9\ud560 \ud14c\uc2a4\ud2b8 \uc0ac\uc6a9\uc790\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ud55c \ubc29\uc2dd\uc73c\ub85c, \ud604\uc2e4\uc801\uc778 \ud658\uacbd\uc5d0\uc11c \ucee8\ud2b8\ub799\ud2b8\ub97c \ucca0\uc800\ud558\uac8c \ud14c\uc2a4\ud2b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("p",null,"\ub610\ud55c \ub85c\uceec ",(0,s.kt)("inlineCode",{parentName:"p"},"sandbox"),"\uc744 \uc0ac\uc6a9\ud558\uba74 \ub124\ud2b8\uc6cc\ud06c\ub97c \uc644\uc804\ud788 \uc81c\uc5b4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\ud14c\uc2a4\ud2b8 ",(0,s.kt)("inlineCode",{parentName:"li"},"Accounts"),"\ub97c \uc0dd\uc131\ud558\uace0 \uadf8\ub4e4\uc758 ",(0,s.kt)("inlineCode",{parentName:"li"},"State")," \ubc0f ",(0,s.kt)("inlineCode",{parentName:"li"},"Balance"),"\ub97c \ucc98\ub9ac\ud569\ub2c8\ub2e4."),(0,s.kt)("li",{parentName:"ol"},"\ucf5c\ubc31\uc5d0\uc11c \uc5d0\ub7ec\ub97c \uc2dc\ubbac\ub808\uc774\uc158\ud569\ub2c8\ub2e4."),(0,s.kt)("li",{parentName:"ol"},"\uc2dc\uac04 \ud750\ub984\uc744 \uc81c\uc5b4\ud558\uace0, \ubbf8\ub798\ub85c \ube60\ub974\uac8c \uc774\ub3d9\ud569\ub2c8\ub2e4(Rust\uc5d0\uc11c\ub294 \uc900\ube44\ub41c \uae30\ub2a5\uc774\uace0, TS\uc5d0\uc11c\ub294 \ucd9c\uc2dc \uc608\uc815\uc785\ub2c8\ub2e4).")),(0,s.kt)("h3",{id:"near-\uc791\uc5c5-\uacf5\uac04"},"NEAR \uc791\uc5c5 \uacf5\uac04"),(0,s.kt)("p",null,"NEAR\uc5d0\uc11c \ud1b5\ud569 \ud14c\uc2a4\ud2b8\ub294 ",(0,s.kt)("strong",{parentName:"p"},"\uc791\uc5c5 \uacf5\uac04(Workspaces)"),"\ub77c\ub294 \ud504\ub808\uc784\uc6cc\ud06c\ub97c \uc0ac\uc6a9\ud558\uc5ec \uad6c\ud604\ub429\ub2c8\ub2e4. \uc791\uc5c5 \uacf5\uac04\uc740 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/near/workspaces-rs"},"\ud83e\udd80 Rust")," \ubc0f ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/near/workspaces-js"},"\ud83c\udf10 Typescript"),"\uc758 \ub450 \uac00\uc9c0 \uc720\ud615\uc73c\ub85c \uc81c\uacf5\ub429\ub2c8\ub2e4."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/near-examples/docs-examples"},"\uc608\uc81c")," \uc911 \ud558\ub098\ub97c \ud15c\ud50c\ub9bf\uc73c\ub85c \uc0ac\uc6a9\ud55c \uacbd\uc6b0, ",(0,s.kt)("inlineCode",{parentName:"p"},"workspaces-js"),"\ub97c \uc0ac\uc6a9\ud55c \ud1b5\ud569 \ud14c\uc2a4\ud2b8\uac00 \uc774\ubbf8 \uad6c\ud604\ub418\uc5c8\uc73c\uba70, \ud504\ub85c\uc81d\ud2b8\uc758 \ub8e8\ud2b8 \ud3f4\ub354\uc5d0\uc11c  ",(0,s.kt)("inlineCode",{parentName:"p"},"yarn test:integration"),"\ub97c \uc2e4\ud589\ud558\uae30\ub9cc \ud558\uba74 \ub429\ub2c8\ub2e4."),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"\uc2a4\ub2c8\ud3ab-i-hello-near-\ud14c\uc2a4\ud2b8"},"\uc2a4\ub2c8\ud3ab I: Hello NEAR \ud14c\uc2a4\ud2b8"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/near_docs/develop/quickstart-guide"},"\ube60\ub978 \uc2dc\uc791 \ud504\ub85c\uc81d\ud2b8")," \ub0b4 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/near-examples/hello-near-rs"},"\ud83d\udc4b Hello NEAR"),"\uc758 \ud14c\uc2a4\ud2b8\ub97c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \ub2e4\uc74c\uc740 \ucee8\ud2b8\ub799\ud2b8\ub97c \uacc4\uc815\uc5d0 \ubc30\ud3ec\ud558\uace0, \uc62c\ubc14\ub974\uac8c \uc778\uc0ac\ub9d0\uc744 \uac80\uc0c9\ud558\uc5ec \uc124\uc815\ud558\ub294\uc9c0 \ud14c\uc2a4\ud2b8\ud558\ub294 \uc608\uc81c\uc785\ub2c8\ub2e4."),(0,s.kt)(l.O2,{mdxType:"CodeTabs"},(0,s.kt)(l.SQ,{value:"\ud83c\udf10 - Typescript",language:"ts",mdxType:"Language"},(0,s.kt)(l.Ey,{fname:"main.ava.ts",url:"https://github.com/near-examples/hello-near-js/blob/master/integration-tests/src/main.ava.ts",start:"9",end:"43",mdxType:"Github"}))),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"\uc2a4\ub2c8\ud3ab-ii-\uae30\ubd80-\uc608\uc81c-\ud14c\uc2a4\ud2b8"},"\uc2a4\ub2c8\ud3ab II: \uae30\ubd80 \uc608\uc81c \ud14c\uc2a4\ud2b8"),(0,s.kt)("p",null,"\ub300\ubd80\ubd84\uc758 \uacbd\uc6b0, \uc5ec\ub7ec \uc0ac\uc6a9\uc790 \ubc0f \uc1a1\uae08\uacfc \uad00\ub828\ub41c \ubcf5\uc7a1\ud55c \uba54\uc11c\ub4dc\ub97c \ud14c\uc2a4\ud2b8\ud558\uac8c \ub420 \uac83\uc785\ub2c8\ub2e4. \uc774\uc5d0 \ub300\ud55c \uc644\ubcbd\ud55c \uc608\uc2dc\ub85c, \ub2e4\uc74c\uacfc \uac19\uc774 \uc0ac\uc6a9\uc790\uac00 \uc218\ud61c\uc790\uc5d0\uac8c \ub3c8\uc744 ",(0,s.kt)("inlineCode",{parentName:"p"},"donate"),"\ud560 \uc218 \uc788\ub294 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/near-examples/donation-js"},"\uae30\ubd80 \uc608\uc81c"),"\uac00 \uc874\uc7ac\ud569\ub2c8\ub2e4. \uc774\uc5d0 \ub300\ud55c \ud1b5\ud569 \ud14c\uc2a4\ud2b8\ub97c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,s.kt)(l.O2,{mdxType:"CodeTabs"},(0,s.kt)(l.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",mdxType:"Language"},(0,s.kt)(l.Ey,{fname:"main.ava.ts",url:"https://github.com/near-examples/donation-js/blob/master/integration-tests/src/main.ava.ts",start:"50",end:"73",mdxType:"Github"}))),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"\uc0cc\ub4dc\ubc15\uc2a4-\ud14c\uc2a4\ud2b8"},"\uc0cc\ub4dc\ubc15\uc2a4 \ud14c\uc2a4\ud2b8"),(0,s.kt)("p",null,"NEAR \uc791\uc5c5 \uacf5\uac04\uc744 \uc0ac\uc6a9\ud558\uba74 \ud14c\uc2a4\ud2b8\ub97c \ud55c \ubc88\ub9cc \uc791\uc131\ud574\ub3c4 ",(0,s.kt)("inlineCode",{parentName:"p"},"testnet"),"\uacfc  \ub85c\uceec ",(0,s.kt)("inlineCode",{parentName:"p"},"Sandbox"),"\uc5d0\uc11c \ubaa8\ub450 \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,s.kt)("strong",{parentName:"p"},"\uae30\ubcf8\uc801\uc73c\ub85c"),", \uc791\uc5c5 \uacf5\uac04\uc740 ",(0,s.kt)("strong",{parentName:"p"},"\uc0cc\ub4dc\ubc15\uc2a4"),"\ub97c \uc2dc\uc791\ud558\uace0, ",(0,s.kt)("strong",{parentName:"p"},"\ub85c\uceec \ud658\uacbd\uc5d0\uc11c")," \ud14c\uc2a4\ud2b8\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4. \uc774 \ud504\ub808\uc784\uc6cc\ud06c\uc758 \uae30\ub2a5\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uace0, \ud574\ub2f9 \ud504\ub808\uc784\uc6cc\ud06c\uac00 \uc5b4\ub5bb\uac8c \ub3c4\uc6c0\uc774 \ub418\ub294\uc9c0 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,s.kt)("h3",{id:"\ucee8\ud2b8\ub799\ud2b8-\uc2a4\ud478\ub2dd"},"\ucee8\ud2b8\ub799\ud2b8 \uc2a4\ud478\ub2dd"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://coinmarketcap.com/alexandria/glossary/spoon-blockchain"},"\ube14\ub85d\uccb4\uc778\uc744 \uc2a4\ud478\ub2dd\ud558\ub294 \uac83"),"\uc740 \ud55c \ub124\ud2b8\uc6cc\ud06c\uc5d0\uc11c \ub2e4\ub978 \ub124\ud2b8\uc6cc\ud06c\ub85c \ub370\uc774\ud130\ub97c \ubcf5\uc0ac\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. NEAR \uc791\uc5c5 \uacf5\uac04\uc744 \uc0ac\uc6a9\ud558\uba74, Mainnet \ub610\ub294 Testnet \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ub85c\uceec \uc0cc\ub4dc\ubc15\uc2a4 \ud658\uacbd\uc73c\ub85c \ub370\uc774\ud130\ub97c \uc27d\uac8c \ubcf5\uc0ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)(k,{mdxType:"Tabs"},(0,s.kt)(h,{value:"\ud83c\udf10 JavaScript",label:"JavaScript",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const refFinance = await root.importContract({\n  mainnetContract: 'v2.ref-finance.near',\n  blockId: 50_000_000,\n  withData: true,\n});\n")),(0,s.kt)("p",null,"\uc774\uac83\uc740 ",(0,s.kt)("a",{parentName:"p",href:"https://explorer.near.org/accounts/v2.ref-finance.near"},"v2.ref-finance.near"),"\uc758 Wasm \ubc14\uc774\ud2b8 \ubc0f \ucee8\ud2b8\ub799\ud2b8 \uc0c1\ud0dc\ub97c \ub9c8\uce58 \ube14\ub85d ",(0,s.kt)("inlineCode",{parentName:"p"},"50_000_000"),"\uc5d0 \uc874\uc7ac\ud588\ub358 \uac83\ucc98\ub7fc \ub85c\uceec \ube14\ub85d\uccb4\uc778\uc73c\ub85c \ubcf5\uc0ac\ud569\ub2c8\ub2e4. \ucd5c\uc0c1\uc704 \uacc4\uc815\uc774 \ub85c\uceec\uc5d0 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub354\ub77c\ub3c4 \ucee8\ud2b8\ub799\ud2b8 \uc774\ub984\uc744 \ub3d9\uc77c\ud558\uac8c \uc720\uc9c0\ud558\uae30 \uc704\ud574, \uc5ec\uae30\uc11c\ub294 \uc0cc\ub4dc\ubc15\uc2a4\uc758 \ud2b9\uc218\ud55c ",(0,s.kt)("a",{parentName:"p",href:"#%EC%8B%A4%EC%8B%9C%EA%B0%84-%ED%8C%A8%EC%B9%98-%EC%83%81%ED%83%9C"},"\ud328\uce58 \uc0c1\ud0dc")," \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4 (\uc774\ub294 \uc0cc\ub4dc\ubc15\uc2a4 \ud14c\uc2a4\ud2b8 \ubaa8\ub4dc\uc5d0\uc11c\ub9cc \uc791\ub3d9\ud568\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4). \uc774\ub807\uac8c \ud558\uba74 \uac00\uae4c\uc6b4 \uc791\uc5c5 \uacf5\uac04\uc5d0\uc11c \uc0dd\uc131\ub41c \ub2e4\ub978 \ubaa8\ub4e0 \uacc4\uc815\uacfc \uc0c1\ud638 \uc791\uc6a9\ud558\ub294 \uac83\uacfc \ub3d9\uc77c\ud558\uac8c, \uacb0\uc815\ub860\uc801 \ubc29\uc2dd\uc73c\ub85c \ucee8\ud2b8\ub799\ud2b8\uc640 \uc0c1\ud638 \uc791\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("inlineCode",{parentName:"p"},"withData"),"\ub294 \ucee8\ud2b8\ub799\ud2b8\uc758 \ub370\uc774\ud130\uac00 50kB \uc774\ud558\uc778 \uacbd\uc6b0\uc5d0\ub9cc \uc791\ub3d9\ud569\ub2c8\ub2e4. \uc774\ub294 RPC \uc11c\ubc84\uc758 \uae30\ubcf8 \uad6c\uc131 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uc774\uc5d0 \ub300\ud574\uc11c\ub294 ",(0,s.kt)("a",{parentName:"p",href:"/near_docs/api/rpc/contracts#view-contract-state-view-contract-state"},'"\uc8fc\uc758" \uba54\ubaa8'),"\ub97c \ucc38\uc870\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/near/workspaces-js/blob/main/__tests__/05.spoon-contract-to-sandbox.ava.ts"},"\ucee8\ud2b8\ub799\ud2b8 \uc2a4\ud478\ub2dd\uc5d0 \ub300\ud55c TypeScript \uc608\uc81c"),"\ub97c \ucc38\uc870\ud558\uc138\uc694.")),(0,s.kt)(h,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"testnet"),"\uc5d0\uc11c \uac00\uc838\uc624\ub824\ub294 \ucee8\ud2b8\ub799\ud2b8 \uc774\ub984\uacfc, \ud2b9\uc815 \uc2dc\uac04\uc744 \ub2e4\uc2dc \ucc38\uc870\ud558\ub294 \ube14\ub85d ID\ub97c \uc9c0\uc815\ud558\uc138\uc694(\ucc38\uc870\ud558\ub294 \ucee8\ud2b8\ub799\ud2b8\uac00 \ubcc0\uacbd\ub418\uac70\ub098 \uc5c5\ub370\uc774\ud2b8\ub41c \uacbd\uc6b0)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'const CONTRACT_ACCOUNT: &str = "contract_account_name_on_testnet.testnet";\nconst BLOCK_HEIGHT: BlockHeight = 12345;\n')),(0,s.kt)("p",null,"\uccb4\uc778 \ub0b4 \ucee8\ud2b8\ub799\ud2b8\uc758 ",(0,s.kt)("inlineCode",{parentName:"p"},".wasm")," \ud30c\uc77c\uc744 \uac00\uc838\uc624\ub294 ",(0,s.kt)("inlineCode",{parentName:"p"},"pull_contract")," \ud568\uc218\ub97c \ub9cc\ub4ed\ub2c8\ub2e4. \ud14c\uc2a4\ud2b8\ub97c \uc2e4\ud589\ud558\ub824\uba74 \ubaa8\ub4e0 \ub370\uc774\ud130\ub97c \ub2e4\uc2dc \ucd08\uae30\ud654\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"async fn pull_contract(owner: &Account, worker: &Worker<Sandbox>) -> anyhow::Result<Contract> {\n    let testnet = workspaces::testnet_archival();\n    let contract_id: AccountId = CONTRACT_ACCOUNT.parse()?;\n")),(0,s.kt)("p",null,"\uc774 \ub2e4\uc74c \uc904\uc740 \uc2e4\uc81c\ub85c testnet\uc5d0\uc11c \uad00\ub828 \ucee8\ud2b8\ub799\ud2b8\ub97c \ub04c\uc5b4\uc624\uace0, 1000 NEAR\ub85c \ucd08\uae30 \uc794\uace0\ub97c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'    let contract = worker\n        .import_contract(&contract_id, &testnet)\n        .initial_balance(parse_near!("1000 N"))\n        .block_height(BLOCK_HEIGHT)\n        .transact()\n        .await?;\n')),(0,s.kt)("p",null,"\uadf8\ub7f0 \ub2e4\uc74c \uba54\ud0c0\ub370\uc774\ud130\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \ub2e4\uc2dc \ucd08\uae30\ud654\ud574\uc57c \ud569\ub2c8\ub2e4. \ucee8\ud2b8\ub799\ud2b8\uc758 \ub370\uc774\ud130\uac00 \ub108\ubb34 \ucee4\uc11c RPC \uc11c\ube44\uc2a4\uc5d0\uc11c \ub04c\uc5b4\uc62c \uc218 \uc5c6\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. (\uc81c\ud55c\uc740 50Mb\ub85c \uc124\uc815\ub428)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'    owner\n        .call(&worker, contract.id(), "init_method_name")\n        .args_json(serde_json::json!({\n            "arg1": value1,\n            "arg2": value2,\n        }))?\n        .transact()\n        .await?;\n    Ok(contract)\n}\n')))),(0,s.kt)("h3",{id:"\uc2e4\uc2dc\uac04-\uc0c1\ud0dc-\ud328\uce58"},"\uc2e4\uc2dc\uac04 \uc0c1\ud0dc \ud328\uce58"),(0,s.kt)("p",null,"\uc0cc\ub4dc\ubc15\uc2a4 \ubaa8\ub4dc\uc5d0\uc11c\ub294 \ucee8\ud2b8\ub799\ud2b8 \uc0c1\ud0dc, \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc, \uacc4\uc815 \ub610\ub294 \uc561\uc138\uc2a4 \ud0a4\ub97c ",(0,s.kt)("inlineCode",{parentName:"p"},"patchState"),"\ub85c \ucd94\uac00\ud558\uac70\ub098 \uc218\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("inlineCode",{parentName:"p"},"DeployContract"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"CreateAccount")," \ubc0f ",(0,s.kt)("inlineCode",{parentName:"p"},"AddKey")," ",(0,s.kt)("a",{parentName:"p",href:"https://nomicon.io/RuntimeSpec/Actions#addkeyaction"},"\uc791\uc5c5(Action)"),"\uc744 \ud1b5\ud574 \uc77c\ubc18 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc0ac\uc6a9\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc, \uacc4\uc815 \ubc0f \uc561\uc138\uc2a4 \ud0a4\ub97c \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc774\uac83\uc740 \uc790\uc2e0\uc758 \uacc4\uc815 \ub610\ub294 \ud558\uc704 \uacc4\uc815\uc744 \ubcc0\uacbd\ud558\ub294 \uac83\ub9cc\uc73c\ub85c \uc81c\ud55c\ub429\ub2c8\ub2e4. ",(0,s.kt)("inlineCode",{parentName:"p"},"patchState"),"\ub97c \ud1b5\ud574 \ubaa8\ub4e0 \uacc4\uc815\uc5d0\uc11c \uc774\ub7ec\ud55c \uc791\uc5c5\uc744 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,s.kt)("p",null,'\ud2b8\ub79c\uc7ad\uc158\uc740 \ucee8\ud2b8\ub799\ud2b8\uac00 \ud504\ub85c\uadf8\ub7a8\ub41c \ubc29\uc2dd\uc73c\ub85c \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud558\ub294 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\ub9cc \ud3ec\ud568\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0, \ud2b8\ub79c\uc7ad\uc158\uc744 \ud1b5\ud574 \ucee8\ud2b8\ub799\ud2b8 \uc0c1\ud0dc\uc5d0 \ub300\ud574 \uc784\uc758\ub85c \ubcc0\uacbd\ud558\ub294 \uc791\uc5c5\uc744 \uc218\ud589\ud560 \uc218 \uc5c6\uc74c\uc744 \uba85\uc2ec\ud558\uc138\uc694. \uc608\ub97c \ub4e4\uc5b4 NFT \ucee8\ud2b8\ub799\ud2b8\ub97c \uc0ac\uc6a9\ud558\uba74 \uc18c\uc720\uad8c\uc744 \uac00\uc9c4 NFT\uc5d0 \ub300\ud574 \uc791\uc5c5\uc744 \uc218\ud589\ud560 \uc218\ub294 \uc788\uc9c0\ub9cc, \ub2e4\ub978 \uacc4\uc815\uc774 \uc18c\uc720\ud55c NFT\uc5d0 \ub300\ud574 \uc791\uc5c5\ud558\ub294 \uac83\uc740 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4. \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub294 \uc774\ub97c \uac70\ubd80\ud558\ub3c4\ub85d \ucf54\ub529\ub418\uc5b4 \uc788\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uc774\uac83\uc740 NFT \ucee8\ud2b8\ub799\ud2b8\uc758 \uc608\uc0c1\ub41c \uc791\ub3d9 \ubc29\uc2dd\uc785\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \ud14c\uc2a4\ud2b8\ub97c \uc704\ud574 \ub2e4\ub978 \uc0ac\ub78c\uc758 NFT\ub97c \ubcc0\uacbd\ud558\uace0 \uc2f6\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c "\ucee8\ud2b8\ub799\ud2b8 \uc0c1\ud0dc\uc758 \uc784\uc758 \ubcc0\uacbd"\uc774\ub77c\uace0 \ud558\uba70, ',(0,s.kt)("inlineCode",{parentName:"p"},"patchState"),"\ub97c \ud1b5\ud574 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)(k,{mdxType:"Tabs"},(0,s.kt)(h,{value:"\ud83c\udf10 JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"    const {contract, ali} = t.context.accounts;\n    // Contract must have some state for viewState & patchState to work\n    await ali.call(contract, 'set_status', {message: 'hello'});\n    // Get state\n    const state = await contract.viewState();\n    // Get raw value\n    const statusMessage = state.get('STATE', {schema, type: StatusMessage});\n    // Update contract state\n    statusMessage.records.push(\n      new BorshRecord({k: 'alice.near', v: 'hello world'}),\n    );\n    // Serialize and patch state back to runtime\n    await contract.patchState(\n      'STATE',\n      borsh.serialize(schema, statusMessage),\n    );\n    // Check again that the update worked\n    const result = await contract.view('get_status', {\n      account_id: 'alice.near',\n    });\n    t.is(result, 'hello world');\n")),(0,s.kt)("p",null,"\uc774\ub97c \uc218\ud589\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc804\uccb4 \uc608\uc81c\ub97c \ubcf4\uace0 \uc2f6\ub2e4\uba74, ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/near/workspaces-js/blob/main/__tests__/02.patch-state.ava.ts"},"\uc0c1\ud0dc \ud328\uce58 \ud14c\uc2a4\ud2b8"),"\ub97c \ucc38\uc870\ud558\uc138\uc694.")),(0,s.kt)(h,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'    // Grab STATE from the testnet status_message contract. This contract contains the following data:\n    //   get_status(dev-20211013002148-59466083160385) => "hello from testnet"\n    let (testnet_contract_id, status_msg) = {\n        let worker = workspaces::testnet().await?;\n        let contract_id: AccountId = TESTNET_PREDEPLOYED_CONTRACT_ID\n            .parse()\n            .map_err(anyhow::Error::msg)?;\n        let mut state_items = worker.view_state(&contract_id, None).await?;\n        let state = state_items.remove(b"STATE".as_slice()).unwrap();\n        let status_msg = StatusMessage::try_from_slice(&state)?;\n        (contract_id, status_msg)\n    };\n    info!(target: "spooning", "Testnet: {:?}", status_msg);\n    // Create our sandboxed environment and grab a worker to do stuff in it:\n    let worker = workspaces::sandbox().await?;\n    // Deploy with the following status_message state: sandbox_contract_id => "hello from sandbox"\n    let sandbox_contract = deploy_status_contract(&worker, "hello from sandbox").await?;\n    // Patch our testnet STATE into our local sandbox:\n    worker\n        .patch_state(\n            sandbox_contract.id(),\n            "STATE".as_bytes(),\n            &status_msg.try_to_vec()?,\n        )\n        .await?;\n    // Now grab the state to see that it has indeed been patched:\n    let status: String = sandbox_contract\n        .view(\n            &worker,\n            "get_status",\n            serde_json::json!({\n                "account_id": testnet_contract_id,\n            })\n            .to_string()\n            .into_bytes(),\n        )\n        .await?\n        .json()?;\n    info!(target: "spooning", "New status patched: {:?}", status);\n    assert_eq!(&status, "hello from testnet");\n')))),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"patchState")," \ub300\uc2e0, \ub178\ub4dc\ub97c \uc911\uc9c0\ud558\uace0 \uc81c\ub124\uc2dc\uc2a4\uc5d0\uc11c \uc0c1\ud0dc\ub97c \ub364\ud504\ud55c \ub2e4\uc74c, \uc81c\ub124\uc2dc\uc2a4\ub97c \ud3b8\uc9d1\ud558\uace0 \ub178\ub4dc\ub97c \ub2e4\uc2dc \uc2dc\uc791\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uc811\uadfc \ubc29\uc2dd\uc740 \uc218\ud589\ud558\uae30\uac00 \ub354 \ubcf5\uc7a1\ud558\uba70, \ub178\ub4dc\ub97c \ub2e4\uc2dc \uc2dc\uc791\ud558\uc9c0 \uc54a\uace0\uc11c\ub294 \uc218\ud589\ud560 \uc218\ub3c4 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,s.kt)("h3",{id:"\uc2dc\uac04-\uc774\ub3d9"},"\uc2dc\uac04 \uc774\ub3d9"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"workspaces")," \ud14c\uc2a4\ud2b8\ub294 \ube14\ub85d\uccb4\uc778\uc758 \uc0c1\ud0dc\ub97c \ubbf8\ub798\ub85c \ubcf4\ub0bc \uc218 \uc788\ub294 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc989, \uc2dc\uac04\uc5d0 \ubbfc\uac10\ud55c \ub370\uc774\ud130\uac00 \ud544\uc694\ud55c \ucee8\ud2b8\ub799\ud2b8\ub294 \uc0cc\ub4dc\ubc15\uc2a4\uc758 \ube14\ub85d\uc774 \uc0dd\uc131\ub420 \ub54c\uae4c\uc9c0 \uc549\uc544\uc11c \uae30\ub2e4\ub9b4 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \uc2dc\uac04\uc744 \ube68\ub9ac \ub3cc\ub9ac\uace0 \uc2f6\ub2e4\uba74, ",(0,s.kt)("inlineCode",{parentName:"p"},"worker.fast_forward"),"\ub97c \ud638\ucd9c\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,s.kt)(k,{mdxType:"Tabs"},(0,s.kt)(h,{value:"\ud83c\udf10 JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("inlineCode",{parentName:"p"},"workspaces-js"),"\uc5d0\uc11c\uc758 \uc2dc\uac04 \uc774\ub3d9\uc740 \ud604\uc7ac \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4."))),(0,s.kt)(h,{value:"rust",label:"Rust",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'#[tokio::test]\nasync fn test_contract() -> anyhow::Result<()> {\n    let worker = workspaces::sandbox().await?;\n    let contract = worker.dev_deploy(WASM_BYTES);\n    let blocks_to_advance = 10000;\n    worker.fast_forward(blocks_to_advance);\n    // Now, "do_something_with_time" will be in the future and can act on future time-related state.\n    contract.call(&worker, "do_something_with_time")\n        .transact()\n        .await?;\n}\n')))),(0,s.kt)("p",null,"\uc804\uccb4 Rust \uc608\uc81c\ub97c \ubcf4\ub824\uba74 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/near/workspaces-rs/blob/main/examples/src/fast_forward.rs"},"examples/src/fast_forward.rs"),"\ub97c \uc0b4\ud3b4\ubcf4\uc138\uc694."),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"\ud14c\uc2a4\ud2b8\ub137-\uc0ac\uc6a9"},"\ud14c\uc2a4\ud2b8\ub137 \uc0ac\uc6a9"),(0,s.kt)("p",null,"NEAR \uc791\uc5c5 \uacf5\uac04\uc740 \ud14c\uc2a4\ud2b8\ub97c \uc791\uc131\ud55c \ub4a4 \ub85c\uceec \uc0cc\ub4dc\ubc15\uc2a4 \ub178\ub4dc(\uae30\ubcf8 \ub3d9\uc791) \ub610\ub294 ",(0,s.kt)("a",{parentName:"p",href:"/near_docs/concepts/basics/networks"},"NEAR TestNet"),"\uc5d0 \ub300\ud574 \uc2e4\ud589\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uc815\ub429\ub2c8\ub2e4. \uc774\uac83\uc774 \ub3c4\uc6c0\uc774 \ub420 \uc218 \uc788\ub294 \uc774\uc720\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\ucee8\ud2b8\ub799\ud2b8\uac00 \uc608\uc0c1\ub300\ub85c \uc791\ub3d9\ud55c\ub2e4\ub294 \ud655\uc2e0 \uc81c\uacf5"),(0,s.kt)("li",{parentName:"ul"},"\ubc30\ud3ec\ub41c \ud14c\uc2a4\ud2b8\ub137 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ub300\ud55c \ud14c\uc2a4\ud2b8 \uac00\ub2a5"),(0,s.kt)("li",{parentName:"ul"},"\uc0cc\ub4dc\ubc15\uc2a4 \ubaa8\ub4dc \ud14c\uc2a4\ud2b8 \uc911 \uc774\uc0c1\ud55c \uc810\uc5d0 \ub300\ud574 \ud14c\uc2a4\ud2b8\ub137\uc5d0\uc11c \uad50\ucc28 \uac80\uc99d \uac00\ub2a5")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"\ud14c\uc2a4\ud2b8\ub137 \ubaa8\ub4dc\uc5d0\uc11c Workspaces\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 ",(0,s.kt)("inlineCode",{parentName:"p"},"testnet")," \uacc4\uc815\uc774 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4. \uc774\ub294 ",(0,s.kt)("a",{parentName:"p",href:"https://wallet.testnet.near.org/"},"\uc5ec\uae30"),"\uc5d0\uc11c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,s.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \uc138 \uac00\uc9c0 \ub2e8\uacc4\ub97c \ud1b5\ud574 \ud14c\uc2a4\ud2b8\ub137 \ubaa8\ub4dc\ub85c \uc804\ud658\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"testnet"),"\uc5d0 \uc791\uc5c5\uc790 \uc124\uc815 \ub124\ud2b8\uc6cc\ud06c\ub97c \ub9cc\ub4e4\uace0 \ub9c8\uc2a4\ud130 \uacc4\uc815\uc744 \uc804\ub2ec\ud560 \ub54c")),(0,s.kt)(k,{mdxType:"Tabs"},(0,s.kt)(h,{value:"\ud83c\udf10 JavaScript",label:"JavaScript",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const worker = await Worker.init({\n network: 'testnet',\n testnetMasterAccountId: '<yourAccountName>',\n})\n"))),(0,s.kt)(h,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"#[tokio::main]  // or whatever runtime we want\nasync fn main() -> anyhow::Result<()> {\n// Create a sandboxed environment.\n// NOTE: Each call will create a new sandboxed environment\nlet worker = workspaces::sandbox().await?;\n// or for testnet:\nlet worker = workspaces::testnet().await?;\n}\n")))),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"\ud14c\uc2a4\ud2b8\ub97c \uc2e4\ud589\ud560 \ub54c, ",(0,s.kt)("inlineCode",{parentName:"li"},"NEAR_WORKSPACES_NETWORK")," \ubc0f ",(0,s.kt)("inlineCode",{parentName:"li"},"TESTNET_MASTER_ACCOUNT_ID")," \ud658\uacbd \ubcc0\uc218\ub97c \uc124\uc815")),(0,s.kt)(k,{mdxType:"Tabs"},(0,s.kt)(h,{value:"\ud83c\udf10 JavaScript",label:"JavaScript",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"NEAR_WORKSPACES_NETWORK=testnet TESTNET_MASTER_ACCOUNT_ID=<your master account Id> node test.js\n")),(0,s.kt)("p",null,"\uc774 \ud658\uacbd \ubcc0\uc218\ub97c \uc124\uc815\ud558\uace0, ",(0,s.kt)("inlineCode",{parentName:"p"},"{network: 'testnet', testnetMasterAccountId: <masterAccountId>}"),"\ub97c ",(0,s.kt)("inlineCode",{parentName:"p"},"Worker.init"),"\uc5d0 \uc804\ub2ec\ud558\uba74 \uad6c\uc131 \uac1d\uccb4\uac00 \uc6b0\uc120\ud569\ub2c8\ub2e4."))),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"AVA\ub97c \ud1b5\ud574 ",(0,s.kt)("inlineCode",{parentName:"li"},"near-workspaces"),"\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\ub2e4\uba74 \ucee4\uc2a4\ud140 \uad6c\uc131 \ud30c\uc77c\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\ub978 \ud14c\uc2a4\ud130\ub4e4\ub3c4 \uc720\uc0ac\ud55c \uad6c\uc131 \ud30c\uc77c\uc744 \ud5c8\uc6a9\ud569\ub2c8\ub2e4. \uac01 \uc0c1\ud669\uc5d0 \ub9de\uac8c \ub2e4\uc74c \uc9c0\uce68\uc744 \ub530\ub974\uba74 \ub429\ub2c8\ub2e4.")),(0,s.kt)(k,{mdxType:"Tabs"},(0,s.kt)(h,{value:"\ud83c\udf10 JavaScript",label:"JavaScript",default:!0,mdxType:"TabItem"},(0,s.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \ud615\ud0dc\ub85c ",(0,s.kt)("inlineCode",{parentName:"p"},"ava.testnet.config.cjs")," \ud30c\uc77c\uc744 ",(0,s.kt)("inlineCode",{parentName:"p"},"package.json"),"\uacfc \ub3d9\uc77c\ud55c \ub514\ub809\ud1a0\ub9ac\uc5d0 \ub9cc\ub4ed\ub2c8\ub2e4.  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n ...require('near-workspaces/ava.testnet.config.cjs'),\n ...require('./ava.config.cjs'),\n};\nmodule.exports.environmentVariables = {\n    TESTNET_MASTER_ACCOUNT_ID: '<masterAccountId>',\n};\n")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/near/workspaces-js/blob/main/ava.testnet.config.cjs"},"near -workspaces/ava.testnet.config.cjs")," \uac00\uc838\uc624\uae30(import)\ub294 ",(0,s.kt)("inlineCode",{parentName:"p"},"NEAR_WORKSPACES_NETWORK")," \ud658\uacbd \ubcc0\uc218\ub97c \uc124\uc815\ud569\ub2c8\ub2e4. \uc774 \uc811\uadfc \ubc29\uc2dd\uc758 \uc774\uc810\uc740 \uc0cc\ub4dc\ubc15\uc2a4 \ubaa8\ub4dc\uc5d0\uc11c\ub9cc \uc2e4\ud589\ub418\uc5b4\uc57c \ud558\ub294 \ud30c\uc77c\uc744 \uc27d\uac8c \ubb34\uc2dc\ud560 \uc218 \uc788\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,s.kt)("p",null,"\uc774\uc81c ",(0,s.kt)("inlineCode",{parentName:"p"},"package.json"),"\uc758 ",(0,s.kt)("inlineCode",{parentName:"p"},"scripts")," \uc139\uc158\uc5d0 ",(0,s.kt)("inlineCode",{parentName:"p"},"test:testnet")," \uc2a4\ud06c\ub9bd\ud2b8\ub97c \ucd94\uac00\ud558\uace0 \uc2f6\ub2e4\uba74, \ub2e4\uc74c\uacfc \uac19\uc774 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-diff"},'"scripts": {\n  "test": "ava",\n+  "test:testnet": "ava --config ./ava.testnet.config.cjs"\n}\n')))),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"\ucd94\uac00-\ubbf8\ub514\uc5b4-\uc790\ub8cc"},"\ucd94\uac00 \ubbf8\ub514\uc5b4 \uc790\ub8cc"),(0,s.kt)("h4",{id:"test-driven-design"},"\uc791\uc5c5 \uacf5\uac04\uacfc AVA\ub97c \uc0ac\uc6a9\ud55c \ud14c\uc2a4\ud2b8 \uae30\ubc18 \uc124\uacc4"),(0,s.kt)("p",null,"\uc544\ub798 \ube44\ub514\uc624\ub294 \uac04\ub2e8\ud55c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc704\ud574 TDD\uc5d0 \uc791\uc5c5 \uacf5\uac04 \ubc0f AVA\ub97c \uc801\uc6a9\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc548\ub0b4\ud569\ub2c8\ub2e4."),(0,s.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/LCu03IYwu1I",title:"TDD Using Workspaces",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}g.isMDXComponent=!0}}]);