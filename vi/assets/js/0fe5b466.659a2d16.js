"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8114],{90346:(e,t,a)=>{a.d(t,{Ey:()=>d,O2:()=>p,SQ:()=>m});var n=a(67294),r=a(65488),l=a(85162),u=a(1841),s=a.n(u),i=a(95665),o=a.n(i);function p(e){var t=e.children;return Array.isArray(t)||(t=[t]),n.createElement(r.Z,{className:"language-tabs",groupId:"code-tabs"},t.map((function(e,t){return n.createElement(l.Z,{value:e.props.value,label:e.props.value},e)})))}function m(e){var t=e.children,a=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var a=e.props,r=a.children,l=a.url,u=a.start,i=a.end,o=a.fname;if("Github"==e.props.mdxType)return d({url:l,start:u,end:i,language:t,fname:o});if("CodeBlock"==e.props.mdxType)return n.createElement(s(),{fname:o,language:t},r);return e}(e,a)})),1==t.length?n.createElement(l.Z,{value:0,label:t[0].props.fname},t[0]):n.createElement(r.Z,{className:"file-tabs"},t.map((function(e,t){return n.createElement(l.Z,{value:t,label:e.props.fname},e)})))}function d(e){var t=e.url,a=e.start,r=e.end,l=e.language,u=e.fname,s=t+"#";return a&&r&&(s+="L"+a+"-L"+r+"#"),n.createElement(o(),{language:l,fname:u},s)}},85162:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function u(e){var t=e.children,a=e.hidden,u=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,u),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(87462),r=a(67294),l=a(86010),u=a(72389),s=a(67392),i=a(7094),o=a(12466);const p="tabList__CuJ",m="tabItem_LNqP";function d(e){var t,a,u=e.lazy,d=e.block,c=e.defaultValue,v=e.values,g=e.groupId,f=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=v?v:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.l)(k,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===c?c:null!=(t=null!=c?c:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:h[0].props.value;if(null!==N&&!k.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.U)(),x=y.tabGroupChoices,T=y.setTabGroupChoices,E=(0,r.useState)(N),C=E[0],_=E[1],Z=[],w=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var L=x[g];null!=L&&L!==C&&k.some((function(e){return e.value===L}))&&_(L)}var A=function(e){var t=e.currentTarget,a=Z.indexOf(t),n=k[a].value;n!==C&&(w(t),_(n),null!=g&&T(g,String(n)))},I=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=Z.indexOf(e.currentTarget)+1;a=null!=(n=Z[r])?n:Z[0];break;case"ArrowLeft":var l,u=Z.indexOf(e.currentTarget)-1;a=null!=(l=Z[u])?l:Z[Z.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},f)},k.map((function(e){var t=e.value,a=e.label,u=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return Z.push(e)},onKeyDown:I,onFocus:A,onClick:A},u,{className:(0,l.Z)("tabs__item",m,null==u?void 0:u.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),u?(0,r.cloneElement)(h.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function c(e){var t=(0,u.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},24913:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>v,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),u=(a(65488),a(85162),a(90346)),s=["components"],i={id:"update-contract-migrate-state",title:"\uc790\uccb4 \uc5c5\uadf8\ub808\uc774\ub4dc \ubc0f \uc0c1\ud0dc \ub9c8\uc774\uadf8\ub808\uc774\uc158"},o=void 0,p={unversionedId:"tutorials/examples/update-contract-migrate-state",id:"tutorials/examples/update-contract-migrate-state",title:"\uc790\uccb4 \uc5c5\uadf8\ub808\uc774\ub4dc \ubc0f \uc0c1\ud0dc \ub9c8\uc774\uadf8\ub808\uc774\uc158",description:"",source:"@site/../docs/3.tutorials/examples/update.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/update-contract-migrate-state",permalink:"/near_docs/vi/tutorials/examples/update-contract-migrate-state",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/update.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"9 thg 3, 2023",frontMatter:{id:"update-contract-migrate-state",title:"\uc790\uccb4 \uc5c5\uadf8\ub808\uc774\ub4dc \ubc0f \uc0c1\ud0dc \ub9c8\uc774\uadf8\ub808\uc774\uc158"},sidebar:"\ud29c\ud1a0\ub9ac\uc5bc",previous:{title:"\ubcf5\uc7a1\ud55c \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c(Cross Contract Call)",permalink:"/near_docs/vi/tutorials/examples/advanced-xcc"},next:{title:"\ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070(Fungible Token)",permalink:"/near_docs/vi/develop/relevant-contracts/ft"}},m={},d=[{value:"\uc0c1\ud0dc \ub9c8\uc774\uadf8\ub808\uc774\uc158",id:"\uc0c1\ud0dc-\ub9c8\uc774\uadf8\ub808\uc774\uc158",level:2},{value:"\ub9c8\uc774\uadf8\ub808\uc774\uc158 \uba54\uc11c\ub4dc",id:"\ub9c8\uc774\uadf8\ub808\uc774\uc158-\uba54\uc11c\ub4dc",level:4},{value:"\uc0c1\ud0dc \ubc84\uc804 \uad00\ub9ac",id:"\uc0c1\ud0dc-\ubc84\uc804-\uad00\ub9ac",level:2},{value:"\uc790\uccb4 \uc5c5\ub370\uc774\ud2b8",id:"\uc790\uccb4-\uc5c5\ub370\uc774\ud2b8",level:2}],c={toc:d};function v(e){var t=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\uc5c5\ub370\uc774\ud2b8 \ubc0f ",(0,l.kt)("a",{parentName:"p",href:"/near_docs/vi/develop/upgrade"},"\uc0c1\ud0dc \ub9c8\uc774\uadf8\ub808\uc774\uc158"),"\uc744 \ucc98\ub9ac\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc138 \uac00\uc9c0 \uc608\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/near-examples/update-migrate-rust/tree/main/contracts/basic-updates"},"\uc0c1\ud0dc \ub9c8\uc774\uadf8\ub808\uc774\uc158"),": \ucee8\ud2b8\ub799\ud2b8 \uc5c5\ub370\uc774\ud2b8 \uac04\uc5d0 \uc0c1\ud0dc\ub97c \ub9c8\uc774\uadf8\ub808\uc774\uc158\ud558\ub294 ",(0,l.kt)("inlineCode",{parentName:"li"},"migrate")," \uba54\uc11c\ub4dc\ub97c \uad6c\ud604\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/near-examples/update-migrate-rust/tree/main/contracts/enum-updates"},"\uc0c1\ud0dc \ubc84\uc804 \uad00\ub9ac"),": \ub098\uc911\uc5d0 \uc5c5\ub370\uc774\ud2b8\ub97c \ub2e8\uc21c\ud654\ud558\uae30 \uc704\ud574 \uc0c1\ud0dc\uc5d0\uc11c \uc27d\uac8c \ubc84\uc804\uc744 \uad00\ub9ac\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/near-examples/update-migrate-rust/tree/main/contracts/self-updates"},"\uc790\uccb4 \uc5c5\ub370\uc774\ud2b8"),": \uc2a4\uc2a4\ub85c \uc5c5\ub370\uc774\ud2b8\ud560 \uc218 \uc788\ub294 \ucee8\ud2b8\ub799\ud2b8\ub97c \uad6c\ud604\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\uc0c1\ud0dc-\ub9c8\uc774\uadf8\ub808\uc774\uc158"},"\uc0c1\ud0dc \ub9c8\uc774\uadf8\ub808\uc774\uc158"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/near-examples/update-migrate-rust/tree/main/contracts/basic-updates"},"\uc0c1\ud0dc \ub9c8\uc774\uadf8\ub808\uc774\uc158 \uc608\uc81c"),"\ub294 \ucee8\ud2b8\ub799\ud2b8 \uc5c5\ub370\uc774\ud2b8 \uac04 \uc0c1\ud0dc \ubcc0\uacbd\uc744 \ucc98\ub9ac\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774\ub294 \ub450 \uac00\uc9c0 \ucee8\ud2b8\ub799\ud2b8\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\uae30\ubcf8: \ubc29\uba85\ub85d\uc5d0 \uc0ac\ub78c\ub4e4\uc774 \uba54\uc2dc\uc9c0\ub97c \uc791\uc131\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\uc5c5\ub370\uc774\ud2b8: \ub9e4\uac1c\ubcc0\uc218\ub97c \uc81c\uac70\ud558\uace0 \ub0b4\ubd80 \uad6c\uc870\ub97c \ubcc0\uacbd\ud558\ub294 \uc5c5\ub370\uc774\ud2b8\uc785\ub2c8\ub2e4.")),(0,l.kt)(u.O2,{mdxType:"CodeTabs"},(0,l.kt)(u.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,l.kt)(u.Ey,{fname:"migrate.rs",url:"https://github.com/near-examples/update-migrate-rust/blob/main/contracts/basic-updates/update/src/migrate.rs",start:"20",end:"44",mdxType:"Github"}))),(0,l.kt)("h4",{id:"\ub9c8\uc774\uadf8\ub808\uc774\uc158-\uba54\uc11c\ub4dc"},"\ub9c8\uc774\uadf8\ub808\uc774\uc158 \uba54\uc11c\ub4dc"),(0,l.kt)("p",null,"\ub9c8\uc774\uadf8\ub808\uc774\uc158 \uba54\uc11c\ub4dc\ub294 \ud604\uc7ac \uc0c1\ud0dc(",(0,l.kt)("inlineCode",{parentName:"p"},"OldState"),")\ub97c \uc5ed\uc9c1\ub82c\ud654\ud558\uace0 \uba54\uc2dc\uc9c0\ub97c \ubc18\ubcf5\ud558\uc5ec, ",(0,l.kt)("inlineCode",{parentName:"p"},"payment")," \ud544\ub4dc\ub97c \ud3ec\ud568\ud558\ub294 \uc0c8 ",(0,l.kt)("inlineCode",{parentName:"p"},"PostedMessage")," \uba54\uc2dc\uc9c0\ub85c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\ub9c8\uc774\uadf8\ub808\uc774\uc158\uc740 \uc2e4\uc81c\ub85c \uae30\uc874 \uc0c1\ud0dc(","[#init(ignore_state)]",")\ub97c \ubb34\uc2dc\ud558\ub294 ",(0,l.kt)("a",{parentName:"p",href:"/near_docs/vi/develop/contracts/anatomy#initialization-method"},"\ucd08\uae30\ud654 \ubc29\ubc95"),"\uc774\ubbc0\ub85c, \uc0c1\ud0dc\ub97c \uc2e4\ud589\ud558\uace0 \ub2e4\uc2dc \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\uc0c1\ud0dc-\ubc84\uc804-\uad00\ub9ac"},"\uc0c1\ud0dc \ubc84\uc804 \uad00\ub9ac"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/near-examples/update-migrate-rust/tree/main/contracts/enum-updates"},"\uc0c1\ud0dc \ubc84\uc804 \uad00\ub9ac \uc608\uc81c"),"\ub294 ","[\uc5f4\uac70\ud615(Enums)]","\ub97c \uc0ac\uc6a9\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uc0c1\ud0dc \ubc84\uc804 \uad00\ub9ac\ub97c \uad6c\ud604\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4.\n\ubc84\uc804 \uad00\ub9ac\ub294 \uc0c8 \ubc84\uc804\uc758 \uad6c\uc870\ub97c \ucd94\uac00\ud558\uae30\ub9cc \ud558\uba74 \ub418\ubbc0\ub85c \ucee8\ud2b8\ub799\ud2b8 \uc5c5\ub370\uc774\ud2b8\ub97c \uac04\uc18c\ud654\ud569\ub2c8\ub2e4. \ubaa8\ub4e0 \ubc84\uc804\uc774 \uacf5\uc874\ud560 \uc218 \uc788\uc73c\ubbc0\ub85c, \uae30\uc874 \uad6c\uc870\ub97c \ubcc0\uacbd\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774\ub294 \ub450 \ucee8\ud2b8\ub799\ud2b8\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\uae30\ubcf8: \ubc84\uc804 \uad00\ub9ac\ub41c ",(0,l.kt)("inlineCode",{parentName:"li"},"PostedMessages"),"(",(0,l.kt)("inlineCode",{parentName:"li"},"PostedMessagesV1"),")\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\uba85\ub85d \ucee8\ud2b8\ub799\ud2b8"),(0,l.kt)("li",{parentName:"ol"},"\uc5c5\ub370\uc774\ud2b8: \uc0c8\ub85c\uc6b4 \ubc84\uc804\uc758 ",(0,l.kt)("inlineCode",{parentName:"li"},"PostedMessages")," (",(0,l.kt)("inlineCode",{parentName:"li"},"PostedMessagesV2"),")\ub97c \ucd94\uac00\ud558\ub294 \uc5c5\ub370\uc774\ud2b8")),(0,l.kt)(u.O2,{mdxType:"CodeTabs"},(0,l.kt)(u.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,l.kt)(u.Ey,{fname:"versioned_msg.rs",url:"https://github.com/near-examples/update-migrate-rust/blob/main/contracts/enum-updates/update/src/versioned_msg.rs",start:"22",end:"40",mdxType:"Github"}))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\uc790\uccb4-\uc5c5\ub370\uc774\ud2b8"},"\uc790\uccb4 \uc5c5\ub370\uc774\ud2b8"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/near-examples/update-migrate-rust/tree/main/contracts/self-updates"},"\uc790\uccb4 \uc5c5\ub370\uc774\ud2b8 \uc608\uc81c"),"\ub294 \uc790\uccb4\uc801\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud560 \uc218 \uc788\ub294 \ucee8\ud2b8\ub799\ud2b8\ub97c \uad6c\ud604\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774\ub294 \ub450 \uac00\uc9c0 \ucee8\ud2b8\ub799\ud2b8\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\uae30\ubcf8: \ubc29\uba85\ub85d\uc740 ",(0,l.kt)("inlineCode",{parentName:"li"},"update_contract")," \uba54\uc11c\ub4dc\ub97c \uad6c\ud604\ud574, \uc0ac\ub78c\ub4e4\uc774 \uba54\uc2dc\uc9c0\ub97c \uc791\uc131\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\uc5c5\ub370\uc774\ud2b8: \ub9e4\uac1c\ubcc0\uc218\ub97c \uc81c\uac70\ud558\uace0 \ub0b4\ubd80 \uad6c\uc870\ub97c \ubcc0\uacbd\ud558\ub294 \uc5c5\ub370\uc774\ud2b8\uc785\ub2c8\ub2e4.")),(0,l.kt)(u.O2,{mdxType:"CodeTabs"},(0,l.kt)(u.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,l.kt)(u.Ey,{fname:"update.rs",url:"https://github.com/near-examples/update-migrate-rust/blob/main/contracts/self-updates/base/src/update.rs",start:"10",end:"28",mdxType:"Github"}))))}v.isMDXComponent=!0}}]);