"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6016],{90346:(e,t,a)=>{a.d(t,{Ey:()=>d,O2:()=>c,SQ:()=>p});var n=a(67294),l=a(65488),r=a(85162),s=a(1841),u=a.n(s),o=a(95665),i=a.n(o);function c(e){var t=e.children;return Array.isArray(t)||(t=[t]),n.createElement(l.Z,{className:"language-tabs",groupId:"code-tabs"},t.map((function(e,t){return n.createElement(r.Z,{value:e.props.value,label:e.props.value},e)})))}function p(e){var t=e.children,a=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var a=e.props,l=a.children,r=a.url,s=a.start,o=a.end,i=a.fname;if("Github"==e.props.mdxType)return d({url:r,start:s,end:o,language:t,fname:i});if("CodeBlock"==e.props.mdxType)return n.createElement(u(),{fname:i,language:t},l);return e}(e,a)})),1==t.length?n.createElement(r.Z,{value:0,label:t[0].props.fname},t[0]):n.createElement(l.Z,{className:"file-tabs"},t.map((function(e,t){return n.createElement(r.Z,{value:t,label:e.props.fname},e)})))}function d(e){var t=e.url,a=e.start,l=e.end,r=e.language,s=e.fname,u=t+"#";return a&&l&&(u+="L"+a+"-L"+l+"#"),n.createElement(i(),{language:r,fname:s},u)}},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),l=a(86010);const r="tabItem_Ymn6";function s(e){var t=e.children,a=e.hidden,s=e.className;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,s),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),l=a(67294),r=a(86010),s=a(72389),u=a(67392),o=a(7094),i=a(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,a,s=e.lazy,d=e.block,m=e.defaultValue,k=e.values,h=e.groupId,v=e.className,b=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=k?k:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,u.l)(N,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===m?m:null!=(t=null!=m?m:null==(a=b.find((function(e){return e.props.default})))?void 0:a.props.value)?t:b[0].props.value;if(null!==f&&!N.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.U)(),w=y.tabGroupChoices,E=y.setTabGroupChoices,_=(0,l.useState)(f),x=_[0],C=_[1],T=[],A=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var Z=w[h];null!=Z&&Z!==x&&N.some((function(e){return e.value===Z}))&&C(Z)}var I=function(e){var t=e.currentTarget,a=T.indexOf(t),n=N[a].value;n!==x&&(A(t),C(n),null!=h&&E(h,String(n)))},j=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,l=T.indexOf(e.currentTarget)+1;a=null!=(n=T[l])?n:T[0];break;case"ArrowLeft":var r,s=T.indexOf(e.currentTarget)-1;a=null!=(r=T[s])?r:T[T.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},v)},N.map((function(e){var t=e.value,a=e.label,s=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return T.push(e)},onKeyDown:j,onFocus:I,onClick:I},s,{className:(0,r.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),s?(0,l.cloneElement)(b.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,s.Z)();return l.createElement(d,(0,n.Z)({key:String(t)},e))}},15295:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>v,frontMatter:()=>c,metadata:()=>d,toc:()=>k});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),s=a(65488),u=a(85162),o=a(90346),i=["components"],c={id:"escrow",title:"\uc5d0\uc2a4\ud06c\ub85c \ucee8\ud2b8\ub799\ud2b8"},p=void 0,d={unversionedId:"tutorials/examples/escrow",id:"tutorials/examples/escrow",title:"\uc5d0\uc2a4\ud06c\ub85c \ucee8\ud2b8\ub799\ud2b8",description:"",source:"@site/../docs/3.tutorials/examples/escrow.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/escrow",permalink:"/near_docs/zh-CN/tutorials/examples/escrow",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/escrow.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"2023\u5e743\u67089\u65e5",frontMatter:{id:"escrow",title:"\uc5d0\uc2a4\ud06c\ub85c \ucee8\ud2b8\ub799\ud2b8"},sidebar:"\ud29c\ud1a0\ub9ac\uc5bc",previous:{title:"\ud329\ud1a0\ub9ac",permalink:"/near_docs/zh-CN/tutorials/examples/factory"},next:{title:"\ud504\ub860\ud2b8\uc5d4\ub4dc \ub2e4\uc911 \ucee8\ud2b8\ub799\ud2b8",permalink:"/near_docs/zh-CN/tutorials/examples/frontend-multiple-contracts"}},m={},k=[{value:"\ud504\ub85c\uc81d\ud2b8 \uc2dc\uc791",id:"\ud504\ub85c\uc81d\ud2b8-\uc2dc\uc791",level:2},{value:"\ucee8\ud2b8\ub799\ud2b8\uc640 \uc0c1\ud638 \uc791\uc6a9",id:"\ucee8\ud2b8\ub799\ud2b8\uc640-\uc0c1\ud638-\uc791\uc6a9",level:3},{value:"1. \uc758\uc874\uc131 \uc124\uce58",id:"1-\uc758\uc874\uc131-\uc124\uce58",level:4},{value:"1. \ucee8\ud2b8\ub799\ud2b8 \uad6c\ucd95",id:"1-\ucee8\ud2b8\ub799\ud2b8-\uad6c\ucd95",level:4},{value:"2. \ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec",id:"2-\ucee8\ud2b8\ub799\ud2b8-\ubc30\ud3ec",level:4},{value:"3. \uc790\uc0b0 \ucee8\ud2b8\ub799\ud2b8 \ucd08\uae30\ud654",id:"3-\uc790\uc0b0-\ucee8\ud2b8\ub799\ud2b8-\ucd08\uae30\ud654",level:4},{value:"3. \uc5d0\uc2a4\ud06c\ub85c\uc5d0\uc11c \uad6c\ub9e4 \uc9c4\ud589",id:"3-\uc5d0\uc2a4\ud06c\ub85c\uc5d0\uc11c-\uad6c\ub9e4-\uc9c4\ud589",level:4},{value:"4. \uad6c\ub9e4\uc790 \uacc4\uc815 \uc794\uace0 \ud655\uc778",id:"4-\uad6c\ub9e4\uc790-\uacc4\uc815-\uc794\uace0-\ud655\uc778",level:4},{value:"5. \uad6c\ub9e4 \uc2b9\uc778",id:"5-\uad6c\ub9e4-\uc2b9\uc778",level:4},{value:"\ucee8\ud2b8\ub799\ud2b8",id:"\ucee8\ud2b8\ub799\ud2b8",level:3},{value:"\ud14c\uc2a4\ud2b8",id:"\ud14c\uc2a4\ud2b8",level:2},{value:"\ub354 \uc54c\uc544\ubcf4\uae30",id:"\ub354-\uc54c\uc544\ubcf4\uae30",level:2}],h={toc:k};function v(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\uc774 \uc608\uc81c\ub294 \uad6c\ub9e4\uc790\uac00 \uc8fc\uc5b4\uc9c4 \uae30\uac04 \ub0b4\uc5d0 \uc2b9\uc778\uc744 \uc81c\uacf5\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc885\ub8cc\ud558\ub294 \ud0c0\uc784\uc544\uc6c3 \uae30\ub2a5\uc774 \uc788\ub294 \uc5d0\uc2a4\ud06c\ub85c \ucee8\ud2b8\ub799\ud2b8\uc758 \uac04\ub2e8\ud55c \uad6c\ud604\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774 \ucf54\ub4dc\uc5d0\ub294 \ucee8\ud2b8\ub799\ud2b8 \uac04 \ud638\ucd9c\uc744 \ud1b5\ud574 \ucee8\ud2b8\ub799\ud2b8\uac00 \uc11c\ub85c \ub370\uc774\ud130\ub97c \uc804\ub2ec\ud558\ub294 \ubc29\ubc95\uacfc, \ud638\ucd9c\uc790 \ucee8\ud2b8\ub799\ud2b8\uac00 \uacb0\uacfc\ub97c \ucc98\ub9ac\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc608\uc81c\ub3c4 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\uc774 \uc608\uc81c\uc5d0\ub294 \ud504\ub860\ud2b8\uc5d4\ub4dc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\ud504\ub85c\uc81d\ud2b8-\uc2dc\uc791"},"\ud504\ub85c\uc81d\ud2b8 \uc2dc\uc791"),(0,r.kt)("p",null,"\ud504\ub85c\uc81d\ud2b8 \uc0ac\uc6a9\uc744 \uc2dc\uc791\ud560 \uc218 \uc788\ub294 \ub450 \uac00\uc9c0 \uc635\uc158\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uccab \ubc88\uc9f8 \uad8c\uc7a5 \ubc29\ubc95\uc740 Gitpod\ub97c \ud1b5\ud574 \ud504\ub85c\uc81d\ud2b8\ub97c \uc5ec\ub294 \uac83\uc785\ub2c8\ub2e4. \uadf8\ub7ec\uba74 \ubaa8\ub4e0 \uc758\uc874\uc131(dependency)\uc774 \uc124\uce58\ub41c \uc6f9 \uae30\ubc18 \ub300\ud654\ud615 \ud658\uacbd\uc774 \uc5f4\ub9bd\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub450 \ubc88\uc9f8 \uc635\uc158\uc740 \ub808\ud37c\uc9c0\ud1a0\ub9ac\ub97c \ub85c\uceec\ub85c \ubcf5\uc81c\ud558\ub294 \uac83\uc73c\ub85c, \ubaa8\ub4e0 ",(0,r.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/develop/prerequisites"},"\ud544\uc218 \uad6c\uc131 \uc694\uc18c"),"\ub97c \uc124\uce58\ud574\uc57c \ud569\ub2c8\ub2e4.")),(0,r.kt)(s.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"\ud83c\udf10 JavaScript",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Gitpod"),(0,r.kt)("th",{parentName:"tr",align:null},"\ub85c\uceec\ub85c \ubcf5\uc81c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{href:"https://gitpod.io/#https://github.com/near-examples/escrow-js"},(0,r.kt)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"}))),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83c\udf10 ",(0,r.kt)("inlineCode",{parentName:"td"},"https://github.com/near-examples/escrow-js.git"))))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\ucee8\ud2b8\ub799\ud2b8\uc640-\uc0c1\ud638-\uc791\uc6a9"},"\ucee8\ud2b8\ub799\ud2b8\uc640 \uc0c1\ud638 \uc791\uc6a9"),(0,r.kt)("p",null,"\uc774 \uc608\uc81c\uc5d0\ub294 \ud504\ub860\ud2b8\uc5d4\ud2b8\uac00 \uc5c6\uc73c\ubbc0\ub85c, ",(0,r.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-cli"},"NEAR CLI"),"\ub97c \uc0ac\uc6a9\ud558\uac70\ub098 ",(0,r.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/develop/testing/integration-test"},(0,r.kt)("inlineCode",{parentName:"a"},"workspaces-js")),"\ub97c \uc0ac\uc6a9\ud55c \ud14c\uc2a4\ud2b8\ub97c \uc791\uc131\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \ucee8\ud2b8\ub799\ud2b8\uc640 \uc0c1\ud638 \uc791\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud504\ub85c\uc81d\ud2b8\uc758 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/near-examples/escrow-js/blob/master/README.md"},"README.md"),"\ub97c \ud655\uc778\ud558\uc138\uc694. \uac04\ub2e8\ud788 \ub9d0\ud574\uc11c \ub2e4\uc74c\uc744 \uc218\ud589\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("h4",{id:"1-\uc758\uc874\uc131-\uc124\uce58"},"1. \uc758\uc874\uc131 \uc124\uce58"),(0,r.kt)("p",null,"\uc758\uc874\uc131\uc744 \uc124\uce58\ud558\ub824\uba74 \ub2e4\uc74c \uba85\ub839\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i\n")),(0,r.kt)("h4",{id:"1-\ucee8\ud2b8\ub799\ud2b8-\uad6c\ucd95"},"1. \ucee8\ud2b8\ub799\ud2b8 \uad6c\ucd95"),(0,r.kt)("p",null,"\ub2e4\uc74c\uc744 \uc2e4\ud589\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8\ub97c \uad6c\ucd95\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4(\ub124\ud2b8\uc6cc\ud06c\uc5d0 \ubc30\ud3ec\ud560 ",(0,r.kt)("inlineCode",{parentName:"p"},".wasm")," \ud30c\uc77c \uc0dd\uc131)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,r.kt)("p",null,"\uc644\ub8cc\ub418\uba74, ",(0,r.kt)("inlineCode",{parentName:"p"},"build/")," \ud3f4\ub354\ub97c \ud655\uc778\ud588\uc744 \ub54c ",(0,r.kt)("inlineCode",{parentName:"p"},"escrow.wasm.")," \ud30c\uc77c\uc774 \ud45c\uc2dc\ub420 \uac83\uc785\ub2c8\ub2e4. \uc774\ub294 \uc790\uc0b0 \uc18c\uc720\uad8c\uc744 \uad00\ub9ac\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"assets.wasm")," \ud30c\uc77c\uacfc \ud568\uaed8 \ub124\ud2b8\uc6cc\ud06c\uc5d0 \ubc30\ud3ec\ub420 \ud30c\uc77c\uc785\ub2c8\ub2e4."),(0,r.kt)("h4",{id:"2-\ucee8\ud2b8\ub799\ud2b8-\ubc30\ud3ec"},"2. \ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec"),(0,r.kt)("p",null,"\ud14c\uc2a4\ud2b8\ub137\uc5d0 \uc5d0\uc2a4\ud06c\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\ub824\uba74 \ub2e4\uc74c\uc744 \uc2e4\ud589\ud558\uc138\uc694."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"near deploy --wasmFile build/escrow.wasm --accountId <your-escrow-testnet-account-id>\n")),(0,r.kt)("p",null,"\ud14c\uc2a4\ud2b8\ub137\uc5d0 \uc790\uc0b0 \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\ub824\uba74 \ub2e4\uc74c\uc744 \uc2e4\ud589\ud558\uc138\uc694."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"near deploy --wasmFile build/assets.wasm --accountId <your-assets-testnet-account-id>\n")),(0,r.kt)("h4",{id:"3-\uc790\uc0b0-\ucee8\ud2b8\ub799\ud2b8-\ucd08\uae30\ud654"},"3. \uc790\uc0b0 \ucee8\ud2b8\ub799\ud2b8 \ucd08\uae30\ud654"),(0,r.kt)("p",null,"\uc790\uc0b0 \ucee8\ud2b8\ub799\ud2b8\ub97c \ucd08\uae30\ud654\ud558\ub824\uba74 \ub2e4\uc74c\uc744 \uc2e4\ud589\ud558\uc138\uc694."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'near call <your-assets-testnet-account-id> init \'{"owner_id": "<your-asset-owner-account-id>", "total_supply": "1000", "escrow_contract_id": "<your-escrow-testnet-account-id>", "asset_price": "100000000000000000000000"}\' --accountId <your-assets-testnet-account-id>\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"asset_price"),"\ub294 yoctoNEAR(10^-24 NEAR) \ub2e8\uc704\ub85c \ud45c\ud604\ub41c \uc790\uc0b0\uc758 \uac00\uaca9\uc785\ub2c8\ub2e4. \uc774 \uc608\uc81c\uc5d0\uc11c \uac00\uaca9\uc740 0.1 NEAR\ub85c \uc124\uc815\ub429\ub2c8\ub2e4. "),(0,r.kt)("h4",{id:"3-\uc5d0\uc2a4\ud06c\ub85c\uc5d0\uc11c-\uad6c\ub9e4-\uc9c4\ud589"},"3. \uc5d0\uc2a4\ud06c\ub85c\uc5d0\uc11c \uad6c\ub9e4 \uc9c4\ud589"),(0,r.kt)("p",null,"\uc5d0\uc2a4\ud06c\ub85c \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uad6c\ub9e4\ub97c \uc218\ud589\ud558\ub824\uba74 \ub2e4\uc74c\uc744 \uc2e4\ud589\ud558\uc138\uc694."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'near call <your-escrow-testnet-account-id> purchase_in_escrow \'{"seller_account_id": "<your-asset-owner-account-id>", "asset_contract_id ": "<your-assets-testnet-account-id>"}\' --accountId <your-account-id> --amount 0.11 --gas=300000000000000\n')),(0,r.kt)("p",null,"\uc790\uc0b0 \uac00\uaca9\uc744 0.1 NEAR\ub85c \uc124\uc815\ud588\uae30 \ub54c\ubb38\uc5d0, \uc790\uc0b0 \uac00\uaca9\uacfc \uac00\uc2a4 \ube44\uc6a9\uc744 \ucda9\ub2f9\ud558\uae30 \uc704\ud574 \uc5d0\uc2a4\ud06c\ub85c \ucee8\ud2b8\ub799\ud2b8\uc5d0 0.11 NEAR\ub97c \ubcf4\ub0b4\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("h4",{id:"4-\uad6c\ub9e4\uc790-\uacc4\uc815-\uc794\uace0-\ud655\uc778"},"4. \uad6c\ub9e4\uc790 \uacc4\uc815 \uc794\uace0 \ud655\uc778"),(0,r.kt)("p",null,"\uc5d0\uc2a4\ud06c\ub85c \uad6c\ub9e4 \ud6c4 \uad6c\ub9e4\uc790 \uacc4\uc815\uc758 \uc790\uc0b0 \uc794\uace0\ub97c \ud655\uc778\ud558\ub824\uba74 \ub2e4\uc74c\uc744 \uc2e4\ud589\ud558\uc138\uc694."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'near view <your-assets-testnet-account-id> get_account_assets \'{"account_id": "<your-account-id>"}\'\n')),(0,r.kt)("p",null,"\ud310\ub9e4\uc790 \uacc4\uc815\uc758 NEAR \uc794\uc561\uc744 \ud655\uc778\ud558\uc5ec \uc544\uc9c1 \uc9c0\ubd88\uc744 \ubc1b\uc9c0 \uc54a\uc558\ub294\uc9c0 \ud655\uc778\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"near state <your-asset-owner-account-id>\n")),(0,r.kt)("h4",{id:"5-\uad6c\ub9e4-\uc2b9\uc778"},"5. \uad6c\ub9e4 \uc2b9\uc778"),(0,r.kt)("p",null,"\uad6c\ub9e4\ub97c \uc2b9\uc778\ud558\ub824\uba74 \ub2e4\uc74c\uc744 \uc2e4\ud589\ud558\uc138\uc694."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"near call <your-escrow-testnet-account-id> approve_purchase '{}' --accountId <your-account-id>\n")),(0,r.kt)("p",null,"\ud310\ub9e4\uc790 \uacc4\uc815\uc758 NEAR \uc794\uc561\uc744 \ub2e4\uc2dc \ud655\uc778\ud558\uba74 \uacb0\uc81c\uac00 \uc644\ub8cc\ub418\uc5c8\uc74c\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\ucee8\ud2b8\ub799\ud2b8"},"\ucee8\ud2b8\ub799\ud2b8"),(0,r.kt)("p",null,"\ucee8\ud2b8\ub799\ud2b8\ub294 \uc5d0\uc2a4\ud06c\ub85c\uc5d0\uc11c \uc790\uc0b0\uc744 \uad6c\ub9e4\ud558\uace0 \uad6c\ub9e4\uc790\uac00 \uad6c\ub9e4\ub97c \uc2b9\uc778\ud558\uac70\ub098 \ucde8\uc18c\ud558\ub294 \uba54\uc11c\ub4dc\ub97c \uacf5\uac1c\ud569\ub2c8\ub2e4. \ub610\ud55c \ucee8\ud2b8\ub799\ud2b8\ub294 \uad6c\ub9e4 \uc0dd\uc131 \uc2dc\uac04\uc744 \ud655\uc778\ud558\ub294 \uba54\uc11c\ub4dc\ub97c \uacf5\uac1c\ud558\uba70, \uad6c\ub9e4\uac00 \ud558\ub8e8 \uc774\uc0c1 \uc804\uc5d0 \uc0dd\uc131\ub41c \uacbd\uc6b0 \ucee8\ud2b8\ub799\ud2b8\ub294 \uad6c\ub9e4\uc790\uc758 \uc785\ub825 \uc5c6\uc774 \uad6c\ub9e4\ub97c \uc2b9\uc778\ud569\ub2c8\ub2e4."),(0,r.kt)(o.O2,{mdxType:"CodeTabs"},(0,r.kt)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",mdxType:"Language"},(0,r.kt)(o.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/escrow-js/blob/master/contracts/escrow.js",start:"41",end:"119",mdxType:"Github"}))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\ud14c\uc2a4\ud2b8"},"\ud14c\uc2a4\ud2b8"),(0,r.kt)("p",null,"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud560 \ub54c \ubaa8\ub4e0 \uba54\uc11c\ub4dc\ub97c \ucca0\uc800\ud558\uac8c \ud14c\uc2a4\ud2b8\ud558\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4. \uc774 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"workspaces-js"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8 \uba54\uc11c\ub4dc\ub97c \ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4. \ud14c\uc2a4\ud2b8\ub97c \uc9c4\ud589\ud558\uae30 \uc804\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"npm test")," \uba85\ub839\uc744 \ud1b5\ud574 dApp\uc5d0 \uc788\ub294 \ud14c\uc2a4\ud2b8\ub97c \uc218\ud589\ud558\uc138\uc694. \uadf8\ub7ec\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"tests/main.ava.js"),"\uc5d0\uc11c \ud14c\uc2a4\ud2b8\uac00 \uc2e4\ud589\ub429\ub2c8\ub2e4. \ub610\ud55c, \ud14c\uc2a4\ud2b8 \uc774\ub984\uacfc \uacb0\uacfc\uac00 \ucf58\uc194\uc5d0 \ud45c\uc2dc\ub429\ub2c8\ub2e4."),(0,r.kt)(o.O2,{mdxType:"CodeTabs"},(0,r.kt)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",mdxType:"Language"},(0,r.kt)(o.Ey,{fname:"main.ava.js",url:"https://github.com/near-examples/escrow-js/blob/master/tests/main.ava.js",start:"4",end:"78",mdxType:"Github"}))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\ub354-\uc54c\uc544\ubcf4\uae30"},"\ub354 \uc54c\uc544\ubcf4\uae30"),(0,r.kt)("p",null,"\ubc30\uc6b8 \uc218\uc788\ub294 \uc88b\uc740 \ubc29\ubc95\uc740 \ucee8\ud2b8\ub799\ud2b8\ub97c \ud655\uc7a5\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"escrow-js")," \ucee8\ud2b8\ub799\ud2b8\ub97c \uc218\uc815\ud558\uc5ec ",(0,r.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tutorials/nfts/introduction"},"NFT"),"\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \uc608\uc81c\ub97c \uc218\uc815\ud574 \ubcf4\uc138\uc694! \uc774\ub7ec\ud55c \ubc29\uc2dd\uc73c\ub85c \uc0ac\uc6a9\uc790\uac00 \uc5d0\uc2a4\ud06c\ub85c\uc5d0\uc11c NFT\ub97c \uad6c\ub9e4\ud558\ub294 \uae30\ub2a5\uc744 \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4! ",(0,r.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/develop/contracts/crosscontract#callback-method"},"\ucf5c\ubc31\uc744 \uc62c\ubc14\ub974\uac8c \ucc98\ub9ac"),"\ud558\uace0 \uc624\ub958\uac00 \ubc1c\uc0dd\ud55c \uacbd\uc6b0 \uc0ac\uc6a9\uc790\uc5d0\uac8c \uae08\uc561\uc744 \ubc18\ud658\ud574\uc57c \ud569\ub2c8\ub2e4."))}v.isMDXComponent=!0}}]);