"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[388],{90346:(e,t,n)=>{n.d(t,{Ey:()=>m,O2:()=>c,SQ:()=>p});var a=n(67294),r=n(65488),l=n(85162),o=n(1841),u=n.n(o),i=n(95665),s=n.n(i);function c(e){var t=e.children;return Array.isArray(t)||(t=[t]),a.createElement(r.Z,{className:"language-tabs",groupId:"code-tabs"},t.map((function(e,t){return a.createElement(l.Z,{value:e.props.value,label:e.props.value},e)})))}function p(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=n.children,l=n.url,o=n.start,i=n.end,s=n.fname;if("Github"==e.props.mdxType)return m({url:l,start:o,end:i,language:t,fname:s});if("CodeBlock"==e.props.mdxType)return a.createElement(u(),{fname:s,language:t},r);return e}(e,n)})),1==t.length?a.createElement(l.Z,{value:0,label:t[0].props.fname},t[0]):a.createElement(r.Z,{className:"file-tabs"},t.map((function(e,t){return a.createElement(l.Z,{value:t,label:e.props.fname},e)})))}function m(e){var t=e.url,n=e.start,r=e.end,l=e.language,o=e.fname,u=t+"#";return n&&r&&(u+="L"+n+"-L"+r+"#"),a.createElement(s(),{language:l,fname:o},u)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),l=n(86010),o=n(72389),u=n(67392),i=n(7094),s=n(12466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n,o=e.lazy,m=e.block,d=e.defaultValue,f=e.values,v=e.groupId,h=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=f?f:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,u.l)(k,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===d?d:null!=(t=null!=d?d:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==N&&!k.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,i.U)(),x=T.tabGroupChoices,y=T.setTabGroupChoices,E=(0,r.useState)(N),_=E[0],w=E[1],A=[],S=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var I=x[v];null!=I&&I!==_&&k.some((function(e){return e.value===I}))&&w(I)}var Z=function(e){var t=e.currentTarget,n=A.indexOf(t),a=k[n].value;a!==_&&(S(t),w(a),null!=v&&y(v,String(a)))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=A.indexOf(e.currentTarget)+1;n=null!=(a=A[r])?a:A[0];break;case"ArrowLeft":var l,o=A.indexOf(e.currentTarget)-1;n=null!=(l=A[o])?l:A[A.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},h)},k.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:function(e){return A.push(e)},onKeyDown:C,onFocus:Z,onClick:Z},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":_===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(g.filter((function(e){return e.props.value===_}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function d(e){var t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},63620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=(n(65488),n(85162),n(90346)),u=["components"],i={id:"frontend-multiple-contracts",title:"\ud504\ub860\ud2b8\uc5d4\ub4dc \ub2e4\uc911 \ucee8\ud2b8\ub799\ud2b8"},s=void 0,c={unversionedId:"tutorials/examples/frontend-multiple-contracts",id:"tutorials/examples/frontend-multiple-contracts",title:"\ud504\ub860\ud2b8\uc5d4\ub4dc \ub2e4\uc911 \ucee8\ud2b8\ub799\ud2b8",description:"",source:"@site/../docs/3.tutorials/examples/frontend-multiple-contracts.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/frontend-multiple-contracts",permalink:"/near_docs/vi/tutorials/examples/frontend-multiple-contracts",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/frontend-multiple-contracts.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"9 thg 3, 2023",frontMatter:{id:"frontend-multiple-contracts",title:"\ud504\ub860\ud2b8\uc5d4\ub4dc \ub2e4\uc911 \ucee8\ud2b8\ub799\ud2b8"},sidebar:"\ud29c\ud1a0\ub9ac\uc5bc",previous:{title:"\uc5d0\uc2a4\ud06c\ub85c \ucee8\ud2b8\ub799\ud2b8",permalink:"/near_docs/vi/tutorials/examples/escrow"},next:{title:"\ubcf5\uc7a1\ud55c \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c",permalink:"/near_docs/vi/tutorials/examples/advanced-xcc"}},p={},m=[{value:"\uc5ec\ub7ec \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ub370\uc774\ud130 \ucffc\ub9ac",id:"\uc5ec\ub7ec-\ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c-\ub370\uc774\ud130-\ucffc\ub9ac",level:2},{value:"\uc5ec\ub7ec \ud2b8\ub79c\uc7ad\uc158 \uc804\uc1a1",id:"\uc5ec\ub7ec-\ud2b8\ub79c\uc7ad\uc158-\uc804\uc1a1",level:2},{value:"\uc77c\uad04 Action",id:"\uc77c\uad04-action",level:2}],d={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\uc774 \uc608\uc81c\ub294 \ud558\ub098\uc758 \ud504\ub860\ud2b8\uc5d4\ub4dc\uc5d0\uc11c \uc5ec\ub7ec \ucee8\ud2b8\ub799\ud2b8\uc640 \uc0c1\ud638 \uc791\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ud2b9\ud788 \uc774 \uc608\uc5d0\uc11c\ub294 \ub2e4\uc74c\uc744 \uc218\ud589\ud558\ub294 \uba54\uc11c\ub4dc\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\uc5ec\ub7ec \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ub370\uc774\ud130 \ucffc\ub9ac"),(0,l.kt)("li",{parentName:"ol"},"\uc5ec\ub7ec \ucee8\ud2b8\ub799\ud2b8 \uba54\uc11c\ub4dc\ub97c \ub3d9\uc2dc\uc5d0 \ud638\ucd9c")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\uc5ec\ub7ec-\ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c-\ub370\uc774\ud130-\ucffc\ub9ac"},"\uc5ec\ub7ec \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ub370\uc774\ud130 \ucffc\ub9ac"),(0,l.kt)("p",null,"\uc5ec\ub7ec \ucee8\ud2b8\ub799\ud2b8\ub97c \ucffc\ub9ac\ud558\ub824\uba74 \uac04\ub2e8\ud788 \uc5ec\ub7ec \uac1c\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"view")," \ud638\ucd9c\uc744 \uc218\ud589\ud558\uc138\uc694."),(0,l.kt)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",mdxType:"Language"},(0,l.kt)(o.Ey,{fname:"index.js",url:"https://github.com/near-examples/frontend-multiple-contracts/blob/main/frontend/index.js",start:"70",end:"76",mdxType:"Github"})),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\uc5ec\ub7ec-\ud2b8\ub79c\uc7ad\uc158-\uc804\uc1a1"},"\uc5ec\ub7ec \ud2b8\ub79c\uc7ad\uc158 \uc804\uc1a1"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"wallet"),"\uac1d\uccb4\ub97c \uc0ac\uc6a9\ud558\uba74 \uc5ec\ub7ec \ud2b8\ub79c\uc7ad\uc158\uc744 \ub3d9\uc2dc\uc5d0 \uc804\uc1a1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \ud2b8\ub79c\uc7ad\uc158\uc740 \ub3c5\ub9bd\uc801\uc73c\ub85c \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ud55c \ubc88\uc5d0 \uc5ec\ub7ec \ud2b8\ub79c\uc7ad\uc158\uc744 \uc804\ub2ec\ud558\ub294 \uac83\uc740 \uc0ac\uc6a9\uc790\uac00 \uc9c0\uac11\uacfc \ud55c \ubc88\ub9cc \uc0c1\ud638 \uc791\uc6a9\ud558\uae30 \ub54c\ubb38\uc5d0, UX\ub97c \uac1c\uc120\ud558\ub294 \uc88b\uc740 \ubc29\ubc95\uc785\ub2c8\ub2e4."),(0,l.kt)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",mdxType:"Language"},(0,l.kt)(o.Ey,{fname:"index.js",url:"https://github.com/near-examples/frontend-multiple-contracts/blob/main/frontend/index.js",start:"39",end:"66",mdxType:"Github"})),(0,l.kt)("p",null,"\uc774 \uc608\uc5d0\uc11c \uc0ac\uc6a9\uc790\ub294 \ub450 \uac1c\uc758 \ub3c5\ub9bd\uc801\uc778 \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc11c\uba85\ud569\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/near-examples/hello-near-rust"},"Hello NEAR \uc608\uc81c")," \ub0b4 ",(0,l.kt)("inlineCode",{parentName:"li"},"set_greeting"),"\uc5d0\uc11c \ud638\ucd9c\ud560 \ud2b8\ub79c\uc7ad\uc158"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/near-examples/guest-book-rust"},"\ubc29\uba85\ub85d \uc608\uc81c")," \ub0b4 ",(0,l.kt)("inlineCode",{parentName:"li"},"add_message"),"\uc5d0\uc11c \ud638\ucd9c\ud560 \ud2b8\ub79c\uc7ad\uc158")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\uc0ac\uc6a9\uc790\uac00 \ud2b8\ub79c\uc7ad\uc158 \uc11c\uba85\uc744 \ub3d9\uc2dc\uc5d0 \uc218\ub77d\ud558\ub354\ub77c\ub3c4 \ud2b8\ub79c\uc7ad\uc158\uc740 ",(0,l.kt)("strong",{parentName:"p"},"\ub3c5\ub9bd\uc801"),"\uc73c\ub85c \uc720\uc9c0\ub429\ub2c8\ub2e4. \uc989, \ud558\ub098\uac00 \uc2e4\ud328\ud558\ub354\ub77c\ub3c4 \ub2e4\ub978 \ud558\ub098\ub294 \ub864\ubc31 \ub418\uc9c0 ",(0,l.kt)("strong",{parentName:"p"},"\uc54a\uc2b5\ub2c8\ub2e4"),".")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\uc77c\uad04-action"},"\uc77c\uad04 Action"),(0,l.kt)("p",null,"\ub3d9\uc77c\ud55c \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ub300\ud55c \uc5ec\ub7ec ",(0,l.kt)("a",{parentName:"p",href:"/near_docs/vi/develop/contracts/actions"},"Action"),"\uc744 \ud558\ub098\uc758 \ud2b8\ub79c\uc7ad\uc158\uc73c\ub85c \ubaa8\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc77c\uad04 Action\uc740 ",(0,l.kt)("strong",{parentName:"p"},"\uc21c\ucc28\uc801\uc73c\ub85c")," \uc2e4\ud589\ub418\uba70, \ud558\ub098\uac00 \uc2e4\ud328 \ud558\uba74 ",(0,l.kt)("strong",{parentName:"p"},"\ubaa8\ub450")," \ub418\ub3cc\ub824\uc9c4\ub2e4\ub294 \ucd94\uac00 \uc774\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  // Register a user and transfer them FT on a single take\n  const REGISTER_DEPOSIT = \"1250000000000000000000\";\n\n  const ftTx = {\n    receiverId: FT_ADDRESS,\n    actions: [\n      {\n        type: 'FunctionCall',\n        params: {\n          methodName: 'storage_deposit',\n          args: { account_id: \"<receiver-account>\" },\n          gas: THIRTY_TGAS, deposit: REGISTER_DEPOSIT\n        }\n      },\n      {\n        type: 'FunctionCall',\n        params: {\n          methodName: 'ft_transfer',\n          args: { receiver_id: \"<receiver-account>\", amount: amount_in_yocto },\n          gas: THIRTY_TGAS, deposit: 1 }\n      }\n    ]\n  }\n\n  // Ask the wallet to sign and send the transaction\n  await wallet.signAndSendTransactions({ transactions: [ ftTx ] })\n")))}f.isMDXComponent=!0}}]);