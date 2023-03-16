"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9853],{90346:(e,t,a)=>{a.d(t,{Ey:()=>p,O2:()=>i,SQ:()=>m});var n=a(67294),r=a(65488),l=a(85162),s=a(1841),o=a.n(s),u=a(95665),c=a.n(u);function i(e){var t=e.children;return Array.isArray(t)||(t=[t]),n.createElement(r.Z,{className:"language-tabs",groupId:"code-tabs"},t.map((function(e,t){return n.createElement(l.Z,{value:e.props.value,label:e.props.value},e)})))}function m(e){var t=e.children,a=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var a=e.props,r=a.children,l=a.url,s=a.start,u=a.end,c=a.fname;if("Github"==e.props.mdxType)return p({url:l,start:s,end:u,language:t,fname:c});if("CodeBlock"==e.props.mdxType)return n.createElement(o(),{fname:c,language:t},r);return e}(e,a)})),1==t.length?n.createElement(l.Z,{value:0,label:t[0].props.fname},t[0]):n.createElement(r.Z,{className:"file-tabs"},t.map((function(e,t){return n.createElement(l.Z,{value:t,label:e.props.fname},e)})))}function p(e){var t=e.url,a=e.start,r=e.end,l=e.language,s=e.fname,o=t+"#";return a&&r&&(o+="L"+a+"-L"+r+"#"),n.createElement(c(),{language:l,fname:s},o)}},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function s(e){var t=e.children,a=e.hidden,s=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),r=a(67294),l=a(86010),s=a(72389),o=a(67392),u=a(7094),c=a(12466);const i="tabList__CuJ",m="tabItem_LNqP";function p(e){var t,a,s=e.lazy,p=e.block,d=e.defaultValue,k=e.values,b=e.groupId,g=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=k?k:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.l)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===d?d:null!=(t=null!=d?d:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:h[0].props.value;if(null!==x&&!v.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=(0,u.U)(),N=f.tabGroupChoices,T=f.setTabGroupChoices,E=(0,r.useState)(x),C=E[0],S=E[1],_=[],A=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var G=N[b];null!=G&&G!==C&&v.some((function(e){return e.value===G}))&&S(G)}var L=function(e){var t=e.currentTarget,a=_.indexOf(t),n=v[a].value;n!==C&&(A(t),S(n),null!=b&&T(b,String(n)))},w=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=_.indexOf(e.currentTarget)+1;a=null!=(n=_[r])?n:_[0];break;case"ArrowLeft":var l,s=_.indexOf(e.currentTarget)-1;a=null!=(l=_[s])?l:_[_.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",i)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},g)},v.map((function(e){var t=e.value,a=e.label,s=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return _.push(e)},onKeyDown:w,onFocus:L,onClick:L},s,{className:(0,l.Z)("tabs__item",m,null==s?void 0:s.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),s?(0,r.cloneElement)(h.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function d(e){var t=(0,s.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},294:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>b,frontMatter:()=>c,metadata:()=>m,toc:()=>d});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),s=a(1841),o=a(90346),u=["components"],c={id:"crosscontract",title:"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c(Cross-Contract Calls)"},i=void 0,m={unversionedId:"develop/contracts/crosscontract",id:"develop/contracts/crosscontract",title:"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c(Cross-Contract Calls)",description:"",source:"@site/../docs/2.develop/contracts/crosscontract.md",sourceDirName:"2.develop/contracts",slug:"/develop/contracts/crosscontract",permalink:"/near_docs/develop/contracts/crosscontract",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/contracts/crosscontract.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"Mar 9, 2023",frontMatter:{id:"crosscontract",title:"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c(Cross-Contract Calls)"},sidebar:"\uac1c\ubc1c",previous:{title:"\uc804\uc1a1 & Action",permalink:"/near_docs/develop/contracts/actions"},next:{title:"\u2705 \uccb4\ud06c\ub9ac\uc2a4\ud2b8",permalink:"/near_docs/develop/contracts/security/checklist"}},p={},d=[{value:"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc740 <strong>\ub3c5\ub9bd\uc801</strong>\uc785\ub2c8\ub2e4.",id:"\uad50\ucc28-\ucee8\ud2b8\ub799\ud2b8-\ud638\ucd9c\uc740-\ub3c5\ub9bd\uc801\uc785\ub2c8\ub2e4",level:4},{value:"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc740 <strong>\ube44\ub3d9\uae30\uc801</strong>\uc785\ub2c8\ub2e4.",id:"\uad50\ucc28-\ucee8\ud2b8\ub799\ud2b8-\ud638\ucd9c\uc740-\ube44\ub3d9\uae30\uc801\uc785\ub2c8\ub2e4",level:4},{value:"\uc2a4\ub2c8\ud3ab: \uc815\ubcf4 \uc870\ud68c",id:"\uc2a4\ub2c8\ud3ab-\uc815\ubcf4-\uc870\ud68c",level:2},{value:"\uc2a4\ub2c8\ud3ab: \uc815\ubcf4 \uc804\ub2ec",id:"\uc2a4\ub2c8\ud3ab-\uc815\ubcf4-\uc804\ub2ec",level:2},{value:"Promise",id:"promise",level:2},{value:"\ucf5c\ubc31 \uba54\uc11c\ub4dc",id:"\ucf5c\ubc31-\uba54\uc11c\ub4dc",level:2},{value:"\uc2e4\ud589 \uc0c1\ud0dc \ud655\uc778",id:"\uc2e4\ud589-\uc0c1\ud0dc-\ud655\uc778",level:3},{value:"\uc2e4\ud589 \uc131\uacf5",id:"\uc2e4\ud589-\uc131\uacf5",level:3},{value:"\uc2e4\ud589 \uc2e4\ud328",id:"\uc2e4\ud589-\uc2e4\ud328",level:3},{value:"\ubcf4\uc548 \ubb38\uc81c",id:"\ubcf4\uc548-\ubb38\uc81c",level:2}],k={toc:d};function b(e){var t=e.components,a=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc744 \ud1b5\ud574, \ucee8\ud2b8\ub799\ud2b8\ub294 \uc774\ubbf8 \ubc30\ud3ec\ub41c \ub2e4\ub978 \ucee8\ud2b8\ub799\ud2b8\uc640 \uc0c1\ud638 \uc791\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uc0c1\ud669\uc5d0\uc11c \uc720\uc6a9\ud558\uac8c \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\ub2e4\ub978 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uc815\ubcf4\ub97c \uc870\ud68c\ud560 \ub54c"),(0,l.kt)("li",{parentName:"ol"},"\ub2e4\ub978 \ucee8\ud2b8\ub799\ud2b8 \ub0b4 \uba54\uc11c\ub4dc\ub97c \uc2e4\ud589\ud560 \ub54c")),(0,l.kt)("h4",{id:"\uad50\ucc28-\ucee8\ud2b8\ub799\ud2b8-\ud638\ucd9c\uc740-\ub3c5\ub9bd\uc801\uc785\ub2c8\ub2e4"},"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc740 ",(0,l.kt)("strong",{parentName:"h4"},"\ub3c5\ub9bd\uc801"),"\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ud638\ucd9c\ud558\ub294 \uba54\uc11c\ub4dc\uc640 \uacb0\uacfc\ub97c \ubc1b\ub294 \uba54\uc11c\ub4dc\ub294 \uc11c\ub85c \ub2e4\ub985\ub2c8\ub2e4."),(0,l.kt)("h4",{id:"\uad50\ucc28-\ucee8\ud2b8\ub799\ud2b8-\ud638\ucd9c\uc740-\ube44\ub3d9\uae30\uc801\uc785\ub2c8\ub2e4"},"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc740 ",(0,l.kt)("strong",{parentName:"h4"},"\ube44\ub3d9\uae30\uc801"),"\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ud638\ucd9c\uacfc \ucf5c\ubc31 \uc0ac\uc774\uc5d0 \ubaa8\ub4e0 \uc0ac\ub78c\uc774 \uc5ec\uc804\ud788 \ucee8\ud2b8\ub799\ud2b8\uc640 \uc0c1\ud638 \uc791\uc6a9\ud560 \uc218 \uc788\ub294 \uc9c0\uc5f0 \uc2dc\uac04\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\uc2a4\ub2c8\ud3ab-\uc815\ubcf4-\uc870\ud68c"},"\uc2a4\ub2c8\ud3ab: \uc815\ubcf4 \uc870\ud68c"),(0,l.kt)("p",null,"\ucee8\ud2b8\ub799\ud2b8\ub97c \ub9cc\ub4e4 \ub54c, \ub2e4\ub978 \ucee8\ud2b8\ub799\ud2b8\uc758 \uc815\ubcf4\ub97c \uc870\ud68c\ud558\ub294 \uae30\ub2a5\uc744 \ub123\uace0 \uc2f6\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc544\ub798\uc5d0\uc11c ",(0,l.kt)("a",{parentName:"p",href:"/near_docs/develop/quickstart-guide"},"Hello NEAR")," \uc608\uc81c\uc5d0\uc11c \uc778\uc0ac\ub9d0 \uba54\uc2dc\uc9c0\ub97c \uc870\ud68c\ud558\ub294 \uae30\ubcf8 \uc608\uc81c\ub97c \ud655\uc778\ud574 \ubcf4\uc138\uc694."),(0,l.kt)(o.O2,{mdxType:"CodeTabs"},(0,l.kt)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",mdxType:"Language"},(0,l.kt)(o.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/cross-contract-hello-js/blob/master/contract/src/contract.ts",start:"17",end:"39",mdxType:"Github"})),(0,l.kt)(o.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,l.kt)(o.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/cross-contract-hello-rust/blob/main/contract/src/lib.rs",start:"24",end:"49",mdxType:"Github"}),(0,l.kt)(o.Ey,{fname:"external.rs",url:"https://github.com/near-examples/cross-contract-hello-rust/blob/main/contract/src/external.rs",mdxType:"Github"})),(0,l.kt)(o.SQ,{value:"\ud83d\ude80 AssemblyScript",language:"ts",mdxType:"Language"},(0,l.kt)(o.Ey,{fname:"index.ts",url:"https://github.com/near-examples/docs-examples/blob/main/cross-contract-hello-as/contract/assembly/index.ts",start:"10",end:"45",mdxType:"Github"}),(0,l.kt)(o.Ey,{fname:"external.ts",url:"https://github.com/near-examples/docs-examples/blob/main/cross-contract-hello-as/contract/assembly/external.ts",mdxType:"Github"}))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\uc2a4\ub2c8\ud3ab-\uc815\ubcf4-\uc804\ub2ec"},"\uc2a4\ub2c8\ud3ab: \uc815\ubcf4 \uc804\ub2ec"),(0,l.kt)("p",null,"\ub2e4\ub978 \ucee8\ud2b8\ub799\ud2b8\ub97c \ud638\ucd9c\ud574\uc11c \uc815\ubcf4\ub97c \uc804\ub2ec\ud558\ub294 \uac83\ub3c4 \uc77c\ubc18\uc801\uc778 \uc2dc\ub098\ub9ac\uc624\uc785\ub2c8\ub2e4. \uc544\ub798\uc5d0\uc11c \uc778\uc0ac\ub9d0 \uba54\uc2dc\uc9c0\ub97c \ubcc0\uacbd\ud558\uae30 \uc704\ud574 ",(0,l.kt)("a",{parentName:"p",href:"/near_docs/develop/quickstart-guide"},"Hello NEAR")," \uc608\uc81c\uc640 \uc0c1\ud638 \uc791\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)(o.O2,{mdxType:"CodeTabs"},(0,l.kt)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",mdxType:"Language"},(0,l.kt)(o.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/cross-contract-hello-js/blob/master/contract/src/contract.ts",start:"41",end:"64",mdxType:"Github"})),(0,l.kt)(o.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,l.kt)(o.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/cross-contract-hello-rust/blob/main/contract/src/lib.rs",start:"51",end:"74",mdxType:"Github"}),(0,l.kt)(o.Ey,{fname:"external.rs",url:"https://github.com/near-examples/cross-contract-hello-rust/blob/main/contract/src/external.rs",mdxType:"Github"})),(0,l.kt)(o.SQ,{value:"\ud83d\ude80 AssemblyScript",language:"ts",mdxType:"Language"},(0,l.kt)(o.Ey,{fname:"index.ts",url:"https://github.com/near-examples/docs-examples/blob/main/cross-contract-hello-as/contract/assembly/index.ts",start:"47",end:"79",mdxType:"Github"}),(0,l.kt)(o.Ey,{fname:"external.ts",url:"https://github.com/near-examples/docs-examples/blob/main/cross-contract-hello-as/contract/assembly/external.ts",mdxType:"Github"}))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"promise"},"Promise"),(0,l.kt)("p",null,"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc740 \ub124\ud2b8\uc6cc\ud06c\uc5d0\uc11c \ub450 \uac00\uc9c0 Promise\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\uc678\ubd80 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ucf54\ub4dc\ub97c \uc2e4\ud589\ud558\uaca0\ub2e4\ub294 Promise (",(0,l.kt)("inlineCode",{parentName:"li"},"Promise.create"),")."),(0,l.kt)("li",{parentName:"ol"},"\uc2e4\ud589 \uacb0\uacfc(",(0,l.kt)("inlineCode",{parentName:"li"},"Promise.then"),")\uc640 \ud568\uaed8 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ub2e4\ub978 \uba54\uc11c\ub4dc\ub97c \ub2e4\uc2dc \ud638\ucd9c\ud558\uaca0\ub2e4\ub294 Promise")),(0,l.kt)("p",null,"\ub450 Promise \ubaa8\ub450 \ub3d9\uc77c\ud55c \uc778\uc790\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,l.kt)(o.O2,{mdxType:"CodeTabs"},(0,l.kt)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",mdxType:"Language"},(0,l.kt)(s.CodeBlock,{mdxType:"CodeBlock"},'NearPromise.new("external_address").functionCall("method", (JSON.stringify(arguments), DEPOSIT, GAS);')),(0,l.kt)(o.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,l.kt)(s.CodeBlock,{mdxType:"CodeBlock"},'external_trait::ext("external_address") .with_attached_deposit(DEPOSIT) .with_static_gas(GAS) .method(arguments);')),(0,l.kt)(o.SQ,{value:"\ud83d\ude80 AssemblyScript",language:"ts",mdxType:"Language"},(0,l.kt)(s.CodeBlock,{mdxType:"CodeBlock"},'ContractPromise.create( "external_address", "method", "encoded_arguments", GAS, DEPOSIT )'))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc0c1\ud638 \uc791\uc6a9\ud558\ub824\ub294 \ucee8\ud2b8\ub799\ud2b8\uc758 \uc8fc\uc18c"),(0,l.kt)("li",{parentName:"ul"},"\uc2e4\ud589\ud558\ub824\ub294 \uba54\uc11c\ub4dc"),(0,l.kt)("li",{parentName:"ul"},"\uba54\uc11c\ub4dc\uc5d0 \uc804\ub2ec\ud560 (",(0,l.kt)("strong",{parentName:"li"},"\uc778\ucf54\ub529\ub41c"),") \uc778\uc218"),(0,l.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\ud560 GAS\uc758 \uc591 (",(0,l.kt)("strong",{parentName:"li"},"\ucca8\ubd80\ub41c \uac00\uc2a4"),"\uc5d0\uc11c \ucc28\uac10)"),(0,l.kt)("li",{parentName:"ul"},"\ucca8\ubd80\ud560 NEAR \uae08\uc561(",(0,l.kt)("strong",{parentName:"li"},"\ucee8\ud2b8\ub799\ud2b8 \uc794\uace0"),"\uc5d0\uc11c \ucc28\uac10)")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\ucf5c\ubc31\uc740 ",(0,l.kt)("strong",{parentName:"p"},"\ubaa8\ub4e0")," \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ub300\ud574 \uc218\ud589\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 \uc6d0\ud558\ub294 \uacbd\uc6b0 \uacb0\uacfc\uac00 \uc7a0\uc7ac\uc801\uc73c\ub85c \ub2e4\ub978 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc758\ud574 \ucc98\ub9ac\ub420 \uc218 \uc788\ub2e4\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4.")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Promise\ub97c \uc0dd\uc131\ud55c\ub2e4\ub294 \uc0ac\uc2e4\uc740 \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uacfc \ucf5c\ubc31\uc774 ",(0,l.kt)("strong",{parentName:"p"},"\uc989\uc2dc \uc2e4\ud589\ub418\uc9c0 \uc54a\ub294\ub2e4\ub294")," \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \uc0ac\uc2e4\uc740:"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc740 \uba54\uc11c\ub4dc \uc2e4\ud589\uc774 ",(0,l.kt)("strong",{parentName:"li"},"\uc62c\ubc14\ub974\uac8c")," \uc644\ub8cc\ub418\uace0 1~2 \ube14\ub85d\uc774 \uc9c0\ub09c \ub4a4 \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uadf8\ub7f0 \ub2e4\uc74c \ucf5c\ubc31\uc740 ",(0,l.kt)("strong",{parentName:"li"},"\uc678\ubd80")," \uba54\uc11c\ub4dc \uc2e4\ud589\uc774 (",(0,l.kt)("strong",{parentName:"li"},"\uc62c\ubc14\ub974\uac8c \ud639\uc740 \uc62c\ubc14\ub974\uc9c0 \uc54a\uac8c"),") \uc644\ub8cc\ub418\uace0 1~2 \ube14\ub85d\uc774 \uc9c0\ub09c \ub4a4 \uc2e4\ud589\ub429\ub2c8\ub2e4."))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\ucf5c\ubc31-\uba54\uc11c\ub4dc"},"\ucf5c\ubc31 \uba54\uc11c\ub4dc"),(0,l.kt)("p",null,"\uba54\uc11c\ub4dc\uac00 \uc62c\ubc14\ub974\uac8c \uc644\ub8cc\ub418\uba74 \uacb0\uad6d \ucf5c\ubc31 \uba54\uc11c\ub4dc\uac00 \uc2e4\ud589\ub429\ub2c8\ub2e4. \uc774\ub294 \uc678\ubd80 \ucee8\ud2b8\ub799\ud2b8\uac00 \uc131\uacf5\uc801\uc73c\ub85c \uc644\ub8cc\ub418\uc5c8\ub294\uc9c0 \uc5ec\ubd80\uc5d0 ",(0,l.kt)("strong",{parentName:"p"},"\uad00\uacc4\uc5c6\uc774")," \ubc1c\uc0dd\ud569\ub2c8\ub2e4. \uc6d0\ub798 \ubc29\ubc95\uc774 \uc62c\ubc14\ub974\uac8c \uc644\ub8cc\ub418\uba74 \ucf5c\ubc31\uc774 ",(0,l.kt)("strong",{parentName:"p"},"\ud56d\uc0c1")," \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ucf5c\ubc31 \uba54\uc11c\ub4dc\uc5d0\uc11c \uacb0\uacfc\uc5d0 \uc561\uc138\uc2a4\ud560 \uc218 \uc788\ub294\ub370, \uc5ec\uae30\uc5d0\ub294 \ub450 \uac00\uc9c0 \uc911\uc694\ud55c \uc778\uc790\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"status"),": \uc678\ubd80 \uba54\uc11c\ub4dc\uac00 \uc131\uacf5\uc801\uc73c\ub85c \uc644\ub8cc\ub418\uc5c8\ub294\uc9c0 \uc5ec\ubd80"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"buffer"),": \uc678\ubd80 \uba54\uc11c\ub4dc\uc5d0 \uc758\ud574 \ubc18\ud658\ub41c \uac12(\uc788\ub294 \uacbd\uc6b0)")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\ucee8\ud2b8\ub799\ud2b8\uc758 \ucf5c\ubc31 \uba54\uc11c\ub4dc\ub294 \uacf5\uac1c\ub418\uc5b4\uc57c \ud558\ubbc0\ub85c, \ub450 \ubc88\uc9f8 Promise\uac00 \uc2e4\ud589\ub420 \ub54c \ud638\ucd9c\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc774\ub294 ",(0,l.kt)("strong",{parentName:"p"},"\ucee8\ud2b8\ub799\ud2b8"),"\uc5d0 \uc758\ud574\uc11c\ub9cc \ud638\ucd9c\ud560 \uc218 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"p"},"predecessor"),"\uac00 \ud56d\uc0c1 ",(0,l.kt)("inlineCode",{parentName:"p"},"current_account_id"),"\uc784\uc744 assert\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c, \ucf5c\ubc31 \uba54\uc11c\ub4dc\ub97c \ube44\uacf5\uac1c\ub85c \ub9cc\ub4dc\uc138\uc694. Rust\uc5d0\uc11c\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"#[private]")," \ub370\ucf54\ub808\uc774\ud130\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc774 \uc791\uc5c5\uc744 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc2e4\ud589-\uc0c1\ud0dc-\ud655\uc778"},"\uc2e4\ud589 \uc0c1\ud0dc \ud655\uc778"),(0,l.kt)(o.O2,{mdxType:"CodeTabs"},(0,l.kt)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",mdxType:"Language"},(0,l.kt)(o.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/cross-contract-hello-js/blob/master/contract/src/contract.ts",start:"31",end:"38",mdxType:"Github"})),(0,l.kt)(o.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,l.kt)(o.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/cross-contract-hello-rust/blob/main/contract/src/lib.rs",start:"67",end:"73",mdxType:"Github"})),(0,l.kt)(o.SQ,{value:"\ud83d\ude80 AssemblyScript",language:"ts",mdxType:"Language"},(0,l.kt)(o.Ey,{fname:"index.ts",url:"https://github.com/near-examples/docs-examples/blob/main/cross-contract-hello-as/contract/assembly/index.ts",start:"70",end:"78",mdxType:"Github"}),(0,l.kt)(o.Ey,{fname:"external.ts",url:"https://github.com/near-examples/docs-examples/blob/main/cross-contract-hello-as/contract/assembly/external.ts",start:"9",end:"19",mdxType:"Github"}))),(0,l.kt)("h3",{id:"\uc2e4\ud589-\uc131\uacf5"},"\uc2e4\ud589 \uc131\uacf5"),(0,l.kt)("p",null,"\ud638\ucd9c\uc774 \uc131\uacf5\uc801\uc73c\ub85c \uc644\ub8cc\ub418\uba74 \uacb0\uacfc \uac1d\uccb4 \ub0b4 ",(0,l.kt)("inlineCode",{parentName:"p"},"status"),"\uc5d0\ub294 1\uc774, \uadf8\ub9ac\uace0 ",(0,l.kt)("inlineCode",{parentName:"p"},"buffer"),"\uc5d0\ub294 \uc778\ucf54\ub529\ub41c \uacb0\uacfc\uac00 \uc800\uc7a5\ub420 \uac83\uc785\ub2c8\ub2e4. \uacb0\uacfc\ub97c \ubcf5\uad6c\ud558\ub824\uba74, \ub2e4\uc74c\uacfc \uac19\uc774 ",(0,l.kt)("inlineCode",{parentName:"p"},"buffer")," \ub0b4 \uacb0\uacfc\ub97c \ub514\ucf54\ub529\ud574\uc57c \ud569\ub2c8\ub2e4. "),(0,l.kt)(o.O2,{mdxType:"CodeTabs"},(0,l.kt)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",mdxType:"Language"},(0,l.kt)(o.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/cross-contract-hello-js/blob/master/contract/src/contract.ts",start:"31",end:"31",mdxType:"Github"})),(0,l.kt)(o.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,l.kt)(o.Ey,{fname:"lib.ts",url:"https://github.com/near-examples/cross-contract-hello-rust/blob/main/contract/src/lib.rs",start:"47",end:"47",mdxType:"Github"})),(0,l.kt)(o.SQ,{value:"\ud83d\ude80 AssemblyScript",language:"ts",mdxType:"Language"},(0,l.kt)(o.Ey,{fname:"index.ts",url:"https://github.com/near-examples/docs-examples/blob/main/cross-contract-hello-as/contract/assembly/index.ts",start:"37",end:"37",mdxType:"Github"}))),(0,l.kt)("h3",{id:"\uc2e4\ud589-\uc2e4\ud328"},"\uc2e4\ud589 \uc2e4\ud328"),(0,l.kt)("p",null,"\uc678\ubd80 \uba54\uc11c\ub4dc\uac00 \uc2e4\ud328\ud574\ub3c4(\uc608: \ud328\ub2c9) \ucf5c\ubc31\uc740 ",(0,l.kt)("strong",{parentName:"p"},"\uc5b4\uca0c\ub4e0 \uc2e4\ud589"),"\ub429\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\uc11c \uc6d0\ub798 \ud638\ucd9c \uc911\uc5d0 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ubcc0\uacbd\ub41c \uc0ac\ud56d\uc744 ",(0,l.kt)("strong",{parentName:"p"},"\uc218\ub3d9\uc73c\ub85c \ub864\ubc31"),"\ud574\uc57c \ud569\ub2c8\ub2e4. \ud2b9\ud788:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\ucee8\ud2b8\ub799\ud2b8\uac00 \ud638\ucd9c\uc5d0 NEAR\ub97c \ucca8\ubd80\ud558\uc600\ub2e4\uba74 \uc790\uae08\uc774 ",(0,l.kt)("strong",{parentName:"li"},"\ucee8\ud2b8\ub799\ud2b8 \uacc4\uc815"),"\uc73c\ub85c \ub2e4\uc2dc \uc804\uc1a1\ub429\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\ub9cc\uc57d \uc6d0\ub798 \uba54\uc11c\ub4dc\uac00 \uc0c1\ud0dc(\uc608: \ubcc0\uacbd\ub418\uac70\ub098 \uc800\uc7a5\ub41c \ub370\uc774\ud130)\ub97c \ubcc0\uacbd\ud558\uc600\ub2e4\uba74, \uc774\ub294 ",(0,l.kt)("strong",{parentName:"li"},"\uc790\ub3d9\uc73c\ub85c \ub418\ub3cc\ub824\uc9c0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4"),".")),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"\uc6d0\ub798 \uba54\uc11c\ub4dc\uac00 \uc62c\ubc14\ub974\uac8c \uc644\ub8cc\ub418\uba74 ",(0,l.kt)("strong",{parentName:"p"},"\uc678\ubd80 \uba54\uc11c\ub4dc\uac00 \ud328\ub2c9 \uc0c1\ud0dc\uac00 \ub418\ub354\ub77c\ub3c4")," \ucf5c\ubc31\uc774 \uc2e4\ud589\ub429\ub2c8\ub2e4. \uc0c1\ud0dc\ub294 \uc790\ub3d9\uc73c\ub85c \ub864\ubc31\ub418\uc9c0 ",(0,l.kt)("strong",{parentName:"p"},"\uc54a\uc73c\uba70"),", $NEAR\ub294 \uc790\ub3d9\uc73c\ub85c \uc11c\uba85\uc790\uc5d0\uac8c \ubc18\ud658\ub418\uc9c0 ",(0,l.kt)("strong",{parentName:"p"},"\uc54a\uc2b5\ub2c8\ub2e4"),". \uc678\ubd80 \uba54\uc11c\ub4dc\uac00 \uc2e4\ud328\ud55c \uacbd\uc6b0 \ud56d\uc0c1 \ucf5c\ubc31\uc744 \ud655\uc778\ud558\uace0, \ud544\uc694\ud55c \uacbd\uc6b0 \uc791\uc5c5\uc744 \uc218\ub3d9\uc73c\ub85c \ub864\ubc31\ud574\uc57c \ud569\ub2c8\ub2e4.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\ubcf4\uc548-\ubb38\uc81c"},"\ubcf4\uc548 \ubb38\uc81c"),(0,l.kt)("p",null,"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc744 \uc791\uc131\ud560 \ub54c, \uba85\uc2ec\ud574\uc57c \ud560 \uc911\uc694\ud55c \uac83\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ubaa8\ub4e0 \ud638\ucd9c\uc740 ",(0,l.kt)("strong",{parentName:"p"},"\ub3c5\ub9bd\uc801"),"\uc774\uace0 ",(0,l.kt)("strong",{parentName:"p"},"\ube44\ub3d9\uae30\uc801"),"\uc785\ub2c8\ub2e4. \ub2e4\uc2dc \ub9d0\ud574,"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud638\ucd9c\ud558\ub294 \uba54\uc11c\ub4dc\uc640 \ucf5c\ubc31 \uba54\uc11c\ub4dc\ub294 ",(0,l.kt)("strong",{parentName:"li"},"\ub3c5\ub9bd\uc801"),"\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\ud638\ucd9c\uacfc \ucf5c\ubc31 \uc0ac\uc774\uc5d0 \uc9c0\uc5f0 \uc2dc\uac04\uc774 \uc788\uc5b4"),", \uc0ac\ub78c\ub4e4\uc774 \uc5ec\uc804\ud788 \ucee8\ud2b8\ub799\ud2b8\uc640 \uc0c1\ud638 \uc791\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("p",null,"\uc774\ub294 \ucf5c\ubc31\uc744 \ucc98\ub9ac\ud558\ub294 \ubc29\ubc95\uc5d0 \uc911\uc694\ud55c \uc601\ud5a5\uc744 \ubbf8\uce69\ub2c8\ub2e4. \ud2b9\ud788, \ub2e4\uc74c\uacfc \uac19\uc740 \uc0ac\ud56d\uc744 \uba85\uc2ec\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\ud638\ucd9c\uacfc \ucf5c\ubc31 \uc0ac\uc774\uc5d0 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc545\uc6a9 \uac00\ub2a5\ud55c \uc0c1\ud0dc\ub85c \ub450\uc9c0 \uc54a\ub3c4\ub85d \ud558\uc138\uc694."),(0,l.kt)("li",{parentName:"ol"},"\uc678\ubd80 \ud638\ucd9c\uc774 \uc2e4\ud328\ud55c \uacbd\uc6b0, \ucf5c\ubc31\uc5d0\uc11c \ubc1c\uc0dd\ud55c \ubaa8\ub4e0 \uc0c1\ud0dc \ubcc0\uacbd \uc0ac\ud56d\uc744 \uc218\ub3d9\uc73c\ub85c \ub864\ubc31\ud574\uc57c \ud569\ub2c8\ub2e4.")),(0,l.kt)("p",null,"\uc774\ub7ec\ud55c \uc624\ub958\ub4e4\uc5d0 \ub300\ud574 \ub2e4\ub8e8\ub294 ",(0,l.kt)("a",{parentName:"p",href:"/near_docs/develop/contracts/security/callbacks"},"\ubcf4\uc548 \uc139\uc158"),"\uc5d0 \ub300\ud574 \ud655\uc778\ud574 \ubcf4\uc138\uc694."),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"\uc774\ub7ec\ud55c \uae30\ubcf8 \ubcf4\uc548 \uac00\uc774\ub4dc\ub77c\uc778\uc744 \ub530\ub974\uc9c0 \uc54a\uc73c\uba74, \ucee8\ud2b8\ub799\ud2b8\uac00 \uc545\uc6a9\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,l.kt)("a",{parentName:"p",href:"/near_docs/develop/contracts/security/callbacks"},"\ubcf4\uc548 \uc139\uc158"),"\uc744 \ud655\uc778\ud558\uace0, \ubb38\uc81c\uac00 \uc758\uc2ec\ub418\ub294 \uacbd\uc6b0 ",(0,l.kt)("a",{parentName:"p",href:"https://near.chat"},"Discord\uc5d0 \ucc38\uc5ec\ud558\uc138\uc694"),".")))}b.isMDXComponent=!0}}]);