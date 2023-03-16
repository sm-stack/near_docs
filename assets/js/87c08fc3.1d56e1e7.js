"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9463],{90346:(e,t,a)=>{a.d(t,{Ey:()=>c,O2:()=>p,SQ:()=>d});var n=a(67294),r=a(65488),l=a(85162),o=a(1841),s=a.n(o),u=a(95665),i=a.n(u);function p(e){var t=e.children;return Array.isArray(t)||(t=[t]),n.createElement(r.Z,{className:"language-tabs",groupId:"code-tabs"},t.map((function(e,t){return n.createElement(l.Z,{value:e.props.value,label:e.props.value},e)})))}function d(e){var t=e.children,a=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var a=e.props,r=a.children,l=a.url,o=a.start,u=a.end,i=a.fname;if("Github"==e.props.mdxType)return c({url:l,start:o,end:u,language:t,fname:i});if("CodeBlock"==e.props.mdxType)return n.createElement(s(),{fname:i,language:t},r);return e}(e,a)})),1==t.length?n.createElement(l.Z,{value:0,label:t[0].props.fname},t[0]):n.createElement(r.Z,{className:"file-tabs"},t.map((function(e,t){return n.createElement(l.Z,{value:t,label:e.props.fname},e)})))}function c(e){var t=e.url,a=e.start,r=e.end,l=e.language,o=e.fname,s=t+"#";return a&&r&&(s+="L"+a+"-L"+r+"#"),n.createElement(i(),{language:l,fname:o},s)}},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),l=a(86010),o=a(72389),s=a(67392),u=a(7094),i=a(12466);const p="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,a,o=e.lazy,c=e.block,m=e.defaultValue,k=e.values,b=e.groupId,g=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=k?k:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,s.l)(h,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(t=null!=m?m:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:v[0].props.value;if(null!==N&&!h.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,u.U)(),E=y.tabGroupChoices,T=y.setTabGroupChoices,C=(0,r.useState)(N),w=C[0],x=C[1],_=[],A=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var D=E[b];null!=D&&D!==w&&h.some((function(e){return e.value===D}))&&x(D)}var Z=function(e){var t=e.currentTarget,a=_.indexOf(t),n=h[a].value;n!==w&&(A(t),x(n),null!=b&&T(b,String(n)))},I=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=_.indexOf(e.currentTarget)+1;a=null!=(n=_[r])?n:_[0];break;case"ArrowLeft":var l,o=_.indexOf(e.currentTarget)-1;a=null!=(l=_[o])?l:_[_.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},g)},h.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return _.push(e)},onKeyDown:I,onFocus:Z,onClick:Z},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(v.filter((function(e){return e.props.value===w}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function m(e){var t=(0,o.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},29949:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>g,frontMatter:()=>p,metadata:()=>c,toc:()=>k});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=(a(1841),a(90346)),s=a(65488),u=a(85162),i=["components"],p={id:"upgrade",title:"\ucee8\ud2b8\ub799\ud2b8 \uc5c5\ub370\uc774\ud2b8"},d=void 0,c={unversionedId:"develop/upgrade",id:"develop/upgrade",title:"\ucee8\ud2b8\ub799\ud2b8 \uc5c5\ub370\uc774\ud2b8",description:"",source:"@site/../docs/2.develop/upgrade.md",sourceDirName:"2.develop",slug:"/develop/upgrade",permalink:"/near_docs/develop/upgrade",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/upgrade.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"Mar 9, 2023",frontMatter:{id:"upgrade",title:"\ucee8\ud2b8\ub799\ud2b8 \uc5c5\ub370\uc774\ud2b8"},sidebar:"\uac1c\ubc1c",previous:{title:"\ubc30\ud3ec \ubc0f \uc0ac\uc6a9",permalink:"/near_docs/develop/deploy"},next:{title:"\uacc4\uc815 \uc7a0\uae08",permalink:"/near_docs/develop/lock"}},m={},k=[{value:"\ub3c4\uad6c\ub97c \ud1b5\ud55c \uc5c5\ub370\uc774\ud2b8",id:"\ub3c4\uad6c\ub97c-\ud1b5\ud55c-\uc5c5\ub370\uc774\ud2b8",level:2},{value:"\ud504\ub85c\uadf8\ub798\ubc0d\uc744 \ud1b5\ud55c \uc5c5\ub370\uc774\ud2b8",id:"\ud504\ub85c\uadf8\ub798\ubc0d\uc744-\ud1b5\ud55c-\uc5c5\ub370\uc774\ud2b8",level:2},{value:"\uc774\ub7ec\ud55c \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\ub294 \ubc29\ubc95\uc740 \ubb34\uc5c7\uc778\uac00\uc694?",id:"\uc774\ub7ec\ud55c-\uba54\uc11c\ub4dc\ub97c-\ud638\ucd9c\ud558\ub294-\ubc29\ubc95\uc740-\ubb34\uc5c7\uc778\uac00\uc694",level:4},{value:"\uc0c1\ud0dc \ub9c8\uc774\uadf8\ub808\uc774\uc158",id:"\uc0c1\ud0dc-\ub9c8\uc774\uadf8\ub808\uc774\uc158",level:2},{value:"\ub9c8\uc774\uadf8\ub808\uc774\uc158 \uba54\uc11c\ub4dc",id:"\ub9c8\uc774\uadf8\ub808\uc774\uc158-\uba54\uc11c\ub4dc",level:3},{value:"\uc608\uc81c: \ubc29\uba85\ub85d \ub9c8\uc774\uadf8\ub808\uc774\uc158",id:"\uc608\uc81c-\ubc29\uba85\ub85d-\ub9c8\uc774\uadf8\ub808\uc774\uc158",level:3},{value:"\ucee8\ud2b8\ub799\ud2b8 \uc5c5\ub370\uc774\ud2b8",id:"\ucee8\ud2b8\ub799\ud2b8-\uc5c5\ub370\uc774\ud2b8",level:4},{value:"\ud638\ud658\ub418\uc9c0 \uc54a\ub294 \uc0c1\ud0dc",id:"\ud638\ud658\ub418\uc9c0-\uc54a\ub294-\uc0c1\ud0dc",level:4},{value:"\uc0c1\ud0dc \ub9c8\uc774\uadf8\ub808\uc774\uc158",id:"\uc0c1\ud0dc-\ub9c8\uc774\uadf8\ub808\uc774\uc158-1",level:4}],b={toc:k};function g(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"NEAR \uacc4\uc815\uc740 \ub85c\uc9c1(\ucee8\ud2b8\ub799\ud2b8\uc758 \ucf54\ub4dc)\uc744 \uc0c1\ud0dc(\uc2a4\ud1a0\ub9ac\uc9c0)\uc640 \ubd84\ub9ac\ud558\uc5ec, \ucf54\ub4dc\ub97c \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ucee8\ud2b8\ub799\ud2b8\ub294 \ub450 \uac00\uc9c0 \ubc29\ubc95\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/near_docs/tools/near-cli"},"NEAR CLI")," \ub610\ub294 ",(0,l.kt)("a",{parentName:"li",href:"/near_docs/tools/near-api-js/quick-reference"},"near-api-js"),"\uc640 \uac19\uc740 ",(0,l.kt)("strong",{parentName:"li"},"\ub3c4\uad6c\ub97c \ud1b5\ud574")," (\uacc4\uc815\uc758 ",(0,l.kt)("a",{parentName:"li",href:"/near_docs/concepts/basics/accounts/access-keys"},"\uc804\uccb4 \uc561\uc138\uc2a4 \ud0a4"),"\ub97c \ubcf4\uc720\ud55c \uacbd\uc6b0)."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%EC%9D%84-%ED%86%B5%ED%95%9C-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8"},"\uc0c8 \ucf54\ub4dc\ub97c \uac00\uc838\uc640 \ubc30\ud3ec"),"\ud558\ub294 \uba54\uc11c\ub4dc\ub97c \uad6c\ud604\ud558\ub294 ",(0,l.kt)("strong",{parentName:"li"},"\ud504\ub85c\uadf8\ub798\ubc0d\uc744 \ud1b5\ud574"),". ")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\ub3c4\uad6c\ub97c-\ud1b5\ud55c-\uc5c5\ub370\uc774\ud2b8"},"\ub3c4\uad6c\ub97c \ud1b5\ud55c \uc5c5\ub370\uc774\ud2b8"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/near_docs/tools/near-cli"},"NEAR CLI")," \ub4f1 \uc120\ud638\ud558\ub294 \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub2e4\ub978 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc7ac\ubc30\ud3ec\ud558\uae30\ub9cc \ud558\uba74 \ub429\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# If you already used dev-deploy the same account will be used\nnear dev-deploy --wasmFile <new-contract>\n\n# If you logged in\nnear deploy <account-id> --wasmFile <new-contract>\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\ud504\ub85c\uadf8\ub798\ubc0d\uc744-\ud1b5\ud55c-\uc5c5\ub370\uc774\ud2b8"},"\ud504\ub85c\uadf8\ub798\ubc0d\uc744 \ud1b5\ud55c \uc5c5\ub370\uc774\ud2b8"),(0,l.kt)("p",null,"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \ub2e4\uc74c\uacfc \uac19\uc740 \ubc29\ubc95\uc744 \uad6c\ud604\ud558\uc5ec \uc790\uccb4\uc801\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\uc0c8 wasm \ucee8\ud2b8\ub799\ud2b8\ub97c \uc785\ub825\uc73c\ub85c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"Promise\ub97c \uc0dd\uc131\ud558\uc5ec \uc790\uccb4\uc801\uc73c\ub85c \ubc30\ud3ec\ud569\ub2c8\ub2e4.")),(0,l.kt)(o.O2,{mdxType:"CodeTabs"},(0,l.kt)(o.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,l.kt)(o.Ey,{fname:"update.rs",url:"https://github.com/near-examples/update-migrate-rust/blob/main/contracts/self-updates/base/src/update.rs",start:"10",end:"28",mdxType:"Github"}))),(0,l.kt)("h4",{id:"\uc774\ub7ec\ud55c-\uba54\uc11c\ub4dc\ub97c-\ud638\ucd9c\ud558\ub294-\ubc29\ubc95\uc740-\ubb34\uc5c7\uc778\uac00\uc694"},"\uc774\ub7ec\ud55c \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\ub294 \ubc29\ubc95\uc740 \ubb34\uc5c7\uc778\uac00\uc694?"),(0,l.kt)(s.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"Terminal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# Load the contract\'s raw bytes\nCONTRACT_BYTES=`cat ./path/to/wasm.wasm | base64`\n\n# Call the update_contract method\nnear call <contract-account> update_contract "$CONTRACT_BYTES" --base64 --accountId <manager-account> --gas 300000000000000\n'))),(0,l.kt)(u.Z,{value:"\ud83c\udf10 JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// Load the contract\'s raw bytes\nconst code = fs.readFileSync("./path/to/wasm.wasm");\n\n// Call the update_contract method\nawait wallet.callMethod({contractId: guestBook, method: "update_contract", args: code, gas: "300000000000000"});\n')))),(0,l.kt)("admonition",{title:"DAO \ud329\ud1a0\ub9ac",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\uc774\uac83\uc774 DAO \ud329\ud1a0\ub9ac\uac00 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/near-daos/sputnik-dao-contract/blob/main/sputnikdao-factory2/src/factory_manager.rs#L60"},"\ucee8\ud2b8\ub799\ud2b8\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \ubc29\ubc95"),"\uc785\ub2c8\ub2e4.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\uc0c1\ud0dc-\ub9c8\uc774\uadf8\ub808\uc774\uc158"},"\uc0c1\ud0dc \ub9c8\uc774\uadf8\ub808\uc774\uc158"),(0,l.kt)("p",null,"\uacc4\uc815\uc758 \ub85c\uc9c1(\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8)\ub294 \uacc4\uc815\uc758 \uc0c1\ud0dc(\uc2a4\ud1a0\ub9ac\uc9c0)\uc640 \ubd84\ub9ac\ub418\uc5b4 \uc788\uc73c\ubbc0\ub85c, \ucee8\ud2b8\ub799\ud2b8\ub97c \uc7ac\ubc30\ud3ec\ud574\ub3c4 ",(0,l.kt)("strong",{parentName:"p"},"\uacc4\uc815\uc758 \uc0c1\ud0dc\ub294 \uc720\uc9c0"),"\ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774 \ub54c\ubb38\uc5d0 ",(0,l.kt)("strong",{parentName:"p"},"\uba54\uc11c\ub4dc\ub97c \ucd94\uac00"),"\ud558\uac70\ub098 ",(0,l.kt)("strong",{parentName:"p"},"\uae30\uc874 \uba54\uc11c\ub4dc\ub97c \uc218\uc815"),"\ud574\ub3c4 ",(0,l.kt)("strong",{parentName:"p"},"\ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4"),"."),(0,l.kt)("p",null,"\uadf8\ub7ec\ub098 \uc0c1\ud0dc\uc5d0 \uc800\uc7a5\ub41c ",(0,l.kt)("strong",{parentName:"p"},"\uad6c\uc870\ub97c \uc218\uc815\ud558\uac70\ub098 \uc81c\uac70"),"\ud558\ub294 \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"Cannot deserialize the contract state"),"\ub77c\ub294 \uc624\ub958\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4. \uc774 \uacbd\uc6b0 \ub2e4\uc74c\uacfc \uac19\uc740 \uac83\ub4e4 \uc911 \ud558\ub098\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\ub2e4\ub978 \uacc4\uc815 \uc0ac\uc6a9"),(0,l.kt)("li",{parentName:"ol"},"\uc774\uc804 \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\ub85c \ub864\ubc31"),(0,l.kt)("li",{parentName:"ol"},"\ucee8\ud2b8\ub799\ud2b8 \uc0c1\ud0dc\ub97c \ub9c8\uc774\uadf8\ub808\uc774\uc158\ud558\ub294 \uba54\uc11c\ub4dc \ucd94\uac00")),(0,l.kt)("hr",{class:"subsection"}),(0,l.kt)("h3",{id:"\ub9c8\uc774\uadf8\ub808\uc774\uc158-\uba54\uc11c\ub4dc"},"\ub9c8\uc774\uadf8\ub808\uc774\uc158 \uba54\uc11c\ub4dc"),(0,l.kt)("p",null,"\uc0c1\ud0dc\ub97c \ub9c8\uc774\uadf8\ub808\uc774\uc158\ud558\ub294 \uac83 \uc678\uc5d0 \ub2e4\ub978 \uc635\uc158\uc774 \uc5c6\ub294 \uacbd\uc6b0 \ub2e4\uc74c\uacfc \uac19\uc740 \uba54\uc11c\ub4dc\ub97c \uad6c\ud604\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\ucee8\ud2b8\ub799\ud2b8\uc758 \ud604\uc7ac \uc0c1\ud0dc\ub97c \uc77d\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\uc0c8\ub85c\uc6b4 \uc0c1\ud0dc\ub85c \ubcc0\ud658\ud558\uae30 \uc704\ud574 \ub2e4\ub978 \ud568\uc218\ub97c \uc801\uc6a9\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\uc0c8\ub85c\uc6b4 \uc0c1\ud0dc\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.")),(0,l.kt)("admonition",{title:"DAO \uc5c5\ub370\uc774\ud2b8",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\uc774\uac83\uc774 DAO\uac00 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/near-daos/sputnik-dao-contract/blob/main/sputnikdao2/src/upgrade.rs#L59"},"\uc2a4\uc2a4\ub85c\ub97c \uc5c5\ub370\uc774\ud2b8"),"\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4.")),(0,l.kt)("hr",{class:"subsection"}),(0,l.kt)("h3",{id:"\uc608\uc81c-\ubc29\uba85\ub85d-\ub9c8\uc774\uadf8\ub808\uc774\uc158"},"\uc608\uc81c: \ubc29\uba85\ub85d \ub9c8\uc774\uadf8\ub808\uc774\uc158"),(0,l.kt)("p",null,'\uba54\uc2dc\uc9c0\ub97c \uc800\uc7a5\ud558\ub294 \ubc29\uba85\ub85d\uc774 \uc788\uace0, \uc0ac\uc6a9\uc790\uac00 \uc774\ub7ec\ud55c \uba54\uc2dc\uc9c0\uc5d0 \ub300\ud574 "\ud504\ub9ac\ubbf8\uc5c4"\uc73c\ub85c \uc9c0\ubd88\ud560 \uc218 \uc788\ub2e4\uace0 \uc0c1\uc0c1\ud574 \ubcf4\uc138\uc694. \ub2e4\uc74c\uacfc \uac19\uc740 \uc0c1\ud0dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \uba54\uc2dc\uc9c0 \ubc0f \uacb0\uc81c\ub97c \ucd94\uc801\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.'),(0,l.kt)(o.O2,{mdxType:"CodeTabs"},(0,l.kt)(o.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,l.kt)(o.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/update-migrate-rust/blob/main/contracts/basic-updates/base/src/lib.rs",start:"9",end:"23",mdxType:"Github"}))),(0,l.kt)("h4",{id:"\ucee8\ud2b8\ub799\ud2b8-\uc5c5\ub370\uc774\ud2b8"},"\ucee8\ud2b8\ub799\ud2b8 \uc5c5\ub370\uc774\ud2b8"),(0,l.kt)("p",null,"\ub9cc\uc57d \uc5b4\ub290 \uc2dc\uc810\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"PostedMessage")," \ub0b4 ",(0,l.kt)("inlineCode",{parentName:"p"},"payments"),"\ub97c \ucd94\uc801\ud560 \uc218 \uc788\ub2e4\ub294 \uac83\uc744 \uae68\ub2ec\uc544\uc11c, \ucee8\ud2b8\ub799\ud2b8\ub97c \ub2e4\uc74c\uacfc \uac19\uc774 \ubcc0\uacbd\ud588\ub2e4\uace0 \ud574\ubd05\uc2dc\ub2e4."),(0,l.kt)(o.O2,{mdxType:"CodeTabs"},(0,l.kt)(o.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,l.kt)(o.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/update-migrate-rust/blob/main/contracts/basic-updates/update/src/lib.rs",start:"11",end:"25",mdxType:"Github"}))),(0,l.kt)("h4",{id:"\ud638\ud658\ub418\uc9c0-\uc54a\ub294-\uc0c1\ud0dc"},"\ud638\ud658\ub418\uc9c0 \uc54a\ub294 \uc0c1\ud0dc"),(0,l.kt)("p",null,"\ucd08\uae30\ud654\ub41c \uacc4\uc815\uc5d0 \uc5c5\ub370\uc774\ud2b8\ub97c \ubc30\ud3ec\ud558\uba74, \ub2e4\uc74c\uacfc \uac19\uc740 \uc774\uc720\ub85c \ucee8\ud2b8\ub799\ud2b8\ub294 \uacc4\uc815 \u200b\u200b\uc0c1\ud0dc\ub97c \uc5ed\uc9c1\ub82c\ud654\ud558\uc9c0 \ubabb\ud569\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"(\uc774\uc804 \ucee8\ud2b8\ub799\ud2b8\ub85c\ubd80\ud130) \uc0c1\ud0dc\uc5d0 \uc800\uc7a5\ub41c \ucd94\uac00 ",(0,l.kt)("inlineCode",{parentName:"li"},"payments")," \ubca1\ud130\uac00 \uc874\uc7ac\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\uc800\uc7a5\ub41c ",(0,l.kt)("inlineCode",{parentName:"li"},"PostedMessages"),"\uc5d0\ub294 (\uc774\uc804 \ucee8\ud2b8\ub799\ud2b8\uc640 \uac19\uc774) ",(0,l.kt)("inlineCode",{parentName:"li"},"payment")," \ud544\ub4dc\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("br",null),(0,l.kt)("h4",{id:"\uc0c1\ud0dc-\ub9c8\uc774\uadf8\ub808\uc774\uc158-1"},"\uc0c1\ud0dc \ub9c8\uc774\uadf8\ub808\uc774\uc158"),(0,l.kt)("p",null,"\uc774 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\ub824\uba74, \uc774\uc804 \uc0c1\ud0dc\ub97c \uac70\uccd0 ",(0,l.kt)("inlineCode",{parentName:"p"},"payments")," \ubca1\ud130\ub97c \uc81c\uac70\ud558\uace0, ",(0,l.kt)("inlineCode",{parentName:"p"},"PostedMessages"),"\uc5d0 \uc815\ubcf4\ub97c \ucd94\uac00\ud558\ub294 \uba54\uc11c\ub4dc\ub97c \uad6c\ud604\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)(o.O2,{mdxType:"CodeTabs"},(0,l.kt)(o.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,l.kt)(o.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/update-migrate-rust/blob/main/contracts/basic-updates/update/src/migrate.rs",start:"3",end:"45",mdxType:"Github"}))),(0,l.kt)("p",null,"\uc2e4\uc81c\ub85c ",(0,l.kt)("inlineCode",{parentName:"p"},"migrate"),"\ub294 \uae30\uc874 \uc0c1\ud0dc(",(0,l.kt)("inlineCode",{parentName:"p"},"[#init(ignore_state)]"),")\ub97c ",(0,l.kt)("strong",{parentName:"p"},"\ubb34\uc2dc\ud558\ub294")," ",(0,l.kt)("a",{parentName:"p",href:"/near_docs/develop/contracts/anatomy#initialization-method"},"\ucd08\uae30\ud654 \uba54\uc11c\ub4dc"),"\uc784\uc5d0 \uc720\uc758\ud558\uc138\uc694. \ub530\ub77c\uc11c, ",(0,l.kt)("inlineCode",{parentName:"p"},"migrate"),"\ub97c \ud1b5\ud574 \uc0c1\ud0dc\ub97c \uc2e4\ud589\ud558\uace0 \uc7ac\uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/near-examples/update-migrate-rust/tree/main/contracts/basic-updates/base"},"\uacf5\uc2dd \ub9c8\uc774\uadf8\ub808\uc774\uc158 \uc608\uc81c"),"\uc5d0\uc11c \ub2e8\uacc4\ubcc4\ub85c \ub9c8\uc774\uadf8\ub808\uc774\uc158\uc744 \uc9c4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))}g.isMDXComponent=!0}}]);