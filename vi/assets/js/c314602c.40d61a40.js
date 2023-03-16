"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9471],{90346:(e,t,n)=>{n.d(t,{Ey:()=>d,O2:()=>p,SQ:()=>c});var a=n(67294),r=n(65488),l=n(85162),i=n(1841),s=n.n(i),o=n(95665),u=n.n(o);function p(e){var t=e.children;return Array.isArray(t)||(t=[t]),a.createElement(r.Z,{className:"language-tabs",groupId:"code-tabs"},t.map((function(e,t){return a.createElement(l.Z,{value:e.props.value,label:e.props.value},e)})))}function c(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=n.children,l=n.url,i=n.start,o=n.end,u=n.fname;if("Github"==e.props.mdxType)return d({url:l,start:i,end:o,language:t,fname:u});if("CodeBlock"==e.props.mdxType)return a.createElement(s(),{fname:u,language:t},r);return e}(e,n)})),1==t.length?a.createElement(l.Z,{value:0,label:t[0].props.fname},t[0]):a.createElement(r.Z,{className:"file-tabs"},t.map((function(e,t){return a.createElement(l.Z,{value:t,label:e.props.fname},e)})))}function d(e){var t=e.url,n=e.start,r=e.end,l=e.language,i=e.fname,s=t+"#";return n&&r&&(s+="L"+n+"-L"+r+"#"),a.createElement(u(),{language:l,fname:i},s)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),l=n(86010),i=n(72389),s=n(67392),o=n(7094),u=n(12466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n,i=e.lazy,d=e.block,m=e.defaultValue,v=e.values,f=e.groupId,b=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=v?v:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,s.l)(h,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,o.U)(),T=N.tabGroupChoices,x=N.setTabGroupChoices,C=(0,r.useState)(y),_=C[0],E=C[1],I=[],Z=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var w=T[f];null!=w&&w!==_&&h.some((function(e){return e.value===w}))&&E(w)}var A=function(e){var t=e.currentTarget,n=I.indexOf(t),a=h[n].value;a!==_&&(Z(t),E(a),null!=f&&x(f,String(a)))},L=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=I.indexOf(e.currentTarget)+1;n=null!=(a=I[r])?a:I[0];break;case"ArrowLeft":var l,i=I.indexOf(e.currentTarget)-1;n=null!=(l=I[i])?l:I[I.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},b)},h.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:function(e){return I.push(e)},onKeyDown:L,onFocus:A,onClick:A},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":_===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(g.filter((function(e){return e.props.value===_}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function m(e){var t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},77160:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>v,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(90346),s=["components"],o={id:"unit-test",title:"\ub2e8\uc704 \ud14c\uc2a4\ud2b8(Unit Testing)"},u=void 0,p={unversionedId:"develop/testing/unit-test",id:"develop/testing/unit-test",title:"\ub2e8\uc704 \ud14c\uc2a4\ud2b8(Unit Testing)",description:"",source:"@site/../docs/2.develop/testing/unit.md",sourceDirName:"2.develop/testing",slug:"/develop/testing/unit-test",permalink:"/near_docs/vi/develop/testing/unit-test",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/testing/unit.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"9 thg 3, 2023",frontMatter:{id:"unit-test",title:"\ub2e8\uc704 \ud14c\uc2a4\ud2b8(Unit Testing)"},sidebar:"\uac1c\ubc1c",previous:{title:"\uc18c\uac1c",permalink:"/near_docs/vi/develop/testing/introduction"},next:{title:"\ud1b5\ud569 \ud14c\uc2a4\ud2b8(Integration Test)",permalink:"/near_docs/vi/develop/testing/integration-test"}},c={},d=[{value:"\uc2a4\ub2c8\ud3ab I: Counter \ud14c\uc2a4\ud2b8",id:"\uc2a4\ub2c8\ud3ab-i-counter-\ud14c\uc2a4\ud2b8",level:2},{value:"\uc2a4\ub2c8\ud3ab II: \ucee8\ud14d\uc2a4\ud2b8 \uc218\uc815",id:"\uc2a4\ub2c8\ud3ab-ii-\ucee8\ud14d\uc2a4\ud2b8-\uc218\uc815",level:2},{value:"\u26a0\ufe0f \uc81c\ud55c \uc0ac\ud56d",id:"\ufe0f-\uc81c\ud55c-\uc0ac\ud56d",level:2}],m={toc:d};function v(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub97c \uc0ac\uc6a9\ud558\uba74 \ucee8\ud2b8\ub799\ud2b8 \uba54\uc11c\ub4dc\ub97c \uac1c\ubcc4\uc801\uc73c\ub85c \ud14c\uc2a4\ud2b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 \uc2a4\ud1a0\ub9ac\uc9c0\uac00 \uc62c\ubc14\ub974\uac8c \uc5c5\ub370\uc774\ud2b8\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud558\uace0, \uba54\uc11c\ub4dc\uac00 \uc608\uc0c1 \uac12\uc744 \ubc18\ud658\ud558\ub294\uc9c0 \ud655\uc778\ud558\ub294 \ub370 \uc801\ud569\ud569\ub2c8\ub2e4. \uc774\ub294 \ucee8\ud2b8\ub799\ud2b8\uc758 \uc5b8\uc5b4\ub85c \uc791\uc131\ub418\uace0 \ub85c\uceec\uc5d0\uc11c \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/near-examples/docs-examples"},"\uc608\uc81c")," \uc911 \ud558\ub098\ub97c \ud15c\ud50c\ub9bf\uc73c\ub85c \uc0ac\uc6a9\ud55c \uacbd\uc6b0, \ucee8\ud2b8\ub799\ud2b8 \ud3f4\ub354\ub85c \uc774\ub3d9\ud558\uc5ec ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn test"),"\ub97c \uc0ac\uc6a9\ud558\uc138\uc694. \uadf8\ub807\uc9c0 \uc54a\uc740 \uacbd\uc6b0 \ud15c\ud50c\ub9bf \uc911 \ud558\ub098\uc5d0\uc11c \ud544\uc694\ud55c \ub178\ub4dc \ud30c\uc77c(\uc608: ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),")\uc744 \ubcf5\uc0ac\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\uac01 \ud504\ub85c\uc81d\ud2b8\uc758 \ub8e8\ud2b8 \ud3f4\ub354\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn test"),"\ub97c \uc2e4\ud589\ud558\uc5ec \ub2e8\uc704 \ud14c\uc2a4\ud2b8\uc640 ",(0,l.kt)("a",{parentName:"p",href:"/near_docs/vi/develop/testing/integration-test"},"\ud1b5\ud569")," \ud14c\uc2a4\ud2b8\ub97c \ubaa8\ub450 \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4 ")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\uc2a4\ub2c8\ud3ab-i-counter-\ud14c\uc2a4\ud2b8"},"\uc2a4\ub2c8\ud3ab I: Counter \ud14c\uc2a4\ud2b8"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/near-examples/counter-rust"},"Counter \uc608\uc81c")," \ub0b4 \ud14c\uc2a4\ud2b8\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"increment"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"decrement"),", \ubc0f ",(0,l.kt)("inlineCode",{parentName:"p"},"reset")," \uba54\uc11c\ub4dc\uac00 \uc81c\ub300\ub85c \uc791\ub3d9\ud558\ub294\uc9c0 \ud655\uc778\ud558\uae30 \uc704\ud55c \uae30\ubcf8 \ud568\uc218\ub4e4\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,l.kt)(i.O2,{mdxType:"CodeTabs"},(0,l.kt)(i.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,l.kt)(i.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/rust-counter/blob/master/contract/src/lib.rs",start:"48",end:"83",mdxType:"Github"})),(0,l.kt)(i.SQ,{value:"\ud83d\ude80 AssemblyScript",language:"ts",mdxType:"Language"},(0,l.kt)(i.Ey,{fname:"main.spec.ts",url:"https://github.com/near-examples/counter/blob/master/contract/assembly/__tests__/main.spec.ts",start:"5",end:"44",mdxType:"Github"}))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\uc2a4\ub2c8\ud3ab-ii-\ucee8\ud14d\uc2a4\ud2b8-\uc218\uc815"},"\uc2a4\ub2c8\ud3ab II: \ucee8\ud14d\uc2a4\ud2b8 \uc218\uc815"),(0,l.kt)("p",null,"\ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub97c \uc218\ud589\ud558\ub294 \ub3d9\uc548 ",(0,l.kt)("inlineCode",{parentName:"p"},"VMContextBuilder"),"\ub97c \ud1b5\ud574 ",(0,l.kt)("a",{parentName:"p",href:"/near_docs/vi/develop/contracts/environment/"},"\ud658\uacbd \ubcc0\uc218"),"\ub97c \uc218\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574, \uc608\ub97c \ub4e4\uc5b4 \ubcf4\uc99d\uae08 \ubc0f \uac00\uc2a4\uac00 \ucca8\ubd80\ub41c \ub2e4\ub978 \uc0ac\uc6a9\uc790\uc758 \ud638\ucd9c\uc744 \uc2dc\ubbac\ub808\uc774\uc158\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\uc74c\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"predecessor"),"\uc640 ",(0,l.kt)("inlineCode",{parentName:"p"},"attached_deposit"),"\ub97c \ud1b5\ud574 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/near-examples/donation-rust"},"\uae30\ubd80 \uc608\uc81c"),"\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"donate")," \uba54\uc11c\ub4dc\ub97c \ud14c\uc2a4\ud2b8\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc2a4\ub2c8\ud3ab\uc785\ub2c8\ub2e4."),(0,l.kt)(i.O2,{mdxType:"CodeTabs"},(0,l.kt)(i.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,l.kt)(i.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/donation-rust/blob/main/contract/src/lib.rs",start:"58",end:"93",mdxType:"Github"})),(0,l.kt)(i.SQ,{value:"\ud83d\ude80 AssemblyScript",language:"ts",mdxType:"Language"},(0,l.kt)(i.Ey,{fname:"main.spec.ts",url:"https://github.com/near-examples/docs-examples/blob/main/donation-as/contract/assembly/__tests__/donation.spec.ts",start:"23",end:"56",mdxType:"Github"}))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\ufe0f-\uc81c\ud55c-\uc0ac\ud56d"},"\u26a0\ufe0f \uc81c\ud55c \uc0ac\ud56d"),(0,l.kt)("p",null,"\ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub294 \ucf54\ub4dc \ubb34\uacb0\uc131\uc744 \ud655\uc778\ud558\uace0 \uaca9\ub9ac\ub41c \uba54\uc11c\ub4dc\uc5d0\uc11c \uae30\ubcf8\uc801\uc778 \uc624\ub958\ub97c \uac10\uc9c0\ud558\ub294 \ub370 \uc720\uc6a9\ud569\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub294 \ube14\ub85d\uccb4\uc778\uc5d0\uc11c \uc2e4\ud589\ub418\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \uac10\uc9c0\ud560 \uc218 \uc5c6\ub294 \uac83\uc774 \ub9ce\uc2b5\ub2c8\ub2e4. \ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uc0c1\ud669\uc5d0 \uc801\ud569\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/near_docs/vi/develop/contracts/environment/"},"\uac00\uc2a4")," \ubc0f ",(0,l.kt)("a",{parentName:"li",href:"/near_docs/vi/develop/contracts/storage"},"\uc2a4\ud1a0\ub9ac\uc9c0")," \uc0ac\uc6a9\ub7c9 \ud14c\uc2a4\ud2b8"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/near_docs/vi/develop/contracts/actions"},"\uc804\uc1a1")," \ud14c\uc2a4\ud2b8"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/near_docs/vi/develop/contracts/crosscontract"},"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c(Cross-contract Call)")," \ud14c\uc2a4\ud2b8"),(0,l.kt)("li",{parentName:"ul"},"\ubcf5\uc7a1\ud55c \uc0c1\ud638 \uc791\uc6a9 \ud14c\uc2a4\ud2b8(\uc608: \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc5ec\ub7ec \uc0ac\uc6a9\uc790\ub4e4\uc774 \uc790\uae08\uc744 \uc608\uce58\ud558\ub294 \uacbd\uc6b0)")),(0,l.kt)("p",null,"\uc774\ub7ec\ud55c \ubaa8\ub4e0 \uacbd\uc6b0\uc5d0 \ub300\ud574\uc11c, ",(0,l.kt)("a",{parentName:"p",href:"/near_docs/vi/develop/testing/integration-test"},"\ud1b5\ud569 \ud14c\uc2a4\ud2b8"),"\ub85c \ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub97c ",(0,l.kt)("strong",{parentName:"p"},"\ubcf4\uc644"),"\ud574\uc57c \ud569\ub2c8\ub2e4."))}v.isMDXComponent=!0}}]);