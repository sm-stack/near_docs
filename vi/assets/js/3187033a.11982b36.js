"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1069],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(86010);const l="tabItem_Ymn6";function o(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(87462),a=r(67294),l=r(86010),o=r(72389),i=r(67392),p=r(7094),u=r(12466);const s="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,r,o=e.lazy,d=e.block,m=e.defaultValue,f=e.values,k=e.groupId,v=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.l)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(t=null!=m?m:null==(r=b.find((function(e){return e.props.default})))?void 0:r.props.value)?t:b[0].props.value;if(null!==N&&!h.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var _=(0,p.U)(),x=_.tabGroupChoices,y=_.setTabGroupChoices,w=(0,a.useState)(N),E=w[0],O=w[1],T=[],C=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var j=x[k];null!=j&&j!==E&&h.some((function(e){return e.value===j}))&&O(j)}var P=function(e){var t=e.currentTarget,r=T.indexOf(t),n=h[r].value;n!==E&&(C(t),O(n),null!=k&&y(k,String(n)))},A=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,a=T.indexOf(e.currentTarget)+1;r=null!=(n=T[a])?n:T[0];break;case"ArrowLeft":var l,o=T.indexOf(e.currentTarget)-1;r=null!=(l=T[o])?l:T[T.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},v)},h.map((function(e){var t=e.value,r=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return T.push(e)},onKeyDown:A,onFocus:P,onClick:P},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=r?r:t)}))),o?(0,a.cloneElement)(b.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,o.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},38060:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>k,frontMatter:()=>u,metadata:()=>c,toc:()=>m});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),o=r(65488),i=r(85162),p=["components"],u={id:"indexer-for-explorer",title:"\uc775\uc2a4\ud50c\ub85c\ub7ec\uc6a9 NEAR \uc778\ub371\uc11c",sidebar_label:"\ube14\ub85d\uccb4\uc778 \ub370\uc774\ud130 \ucffc\ub9ac"},s=void 0,c={unversionedId:"tools/indexer-for-explorer",id:"tools/indexer-for-explorer",title:"\uc775\uc2a4\ud50c\ub85c\ub7ec\uc6a9 NEAR \uc778\ub371\uc11c",description:"",source:"@site/../docs/4.tools/indexer4explorer.md",sourceDirName:"4.tools",slug:"/tools/indexer-for-explorer",permalink:"/near_docs/vi/tools/indexer-for-explorer",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/4.tools/indexer4explorer.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"9 thg 3, 2023",frontMatter:{id:"indexer-for-explorer",title:"\uc775\uc2a4\ud50c\ub85c\ub7ec\uc6a9 NEAR \uc778\ub371\uc11c",sidebar_label:"\ube14\ub85d\uccb4\uc778 \ub370\uc774\ud130 \ucffc\ub9ac"},sidebar:"\uac1c\ubc1c",previous:{title:"\uc2e4\uc2dc\uac04 \uc774\ubca4\ud2b8 \ucd94\uc801",permalink:"/near_docs/vi/tools/realtime"},next:{title:"NEAR Lake \ud504\ub808\uc784\uc6cc\ud06c\ub85c \ub9c8\uc774\uadf8\ub808\uc774\uc158",permalink:"/near_docs/vi/tutorials/indexer/migrating-to-near-lake-framework"}},d={},m=[{value:"\ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \uc5f0\uacb0",id:"\ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0-\uc5f0\uacb0",level:2},{value:"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uad6c\uc870",id:"\ub370\uc774\ud130\ubca0\uc774\uc2a4-\uad6c\uc870",level:2},{value:"\ucffc\ub9ac \uc608\uc81c",id:"\ucffc\ub9ac-\uc608\uc81c",level:2},{value:"\uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\ub294 \ud2b8\ub79c\uc7ad\uc158",id:"\uba54\uc11c\ub4dc\ub97c-\ud638\ucd9c\ud558\ub294-\ud2b8\ub79c\uc7ad\uc158",level:3},{value:"\uc0ac\uc6a9\uc790, \uc0c1\ud0dc \ubc0f \ucca8\ubd80 \uae08\uc561",id:"\uc0ac\uc6a9\uc790-\uc0c1\ud0dc-\ubc0f-\ucca8\ubd80-\uae08\uc561",level:3},{value:"\ubcf4\ub0b8 \uae08\uc561",id:"\ubcf4\ub0b8-\uae08\uc561",level:3}],f={toc:m};function k(e){var t=e.components,r=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\ud0c8\uc911\uc559\ud654 \uc571\uc744 \uac1c\ubc1c\ud558\ub294 \ub3d9\uc548, \ub2e4\uc74c\uacfc \uac19\uc774 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ub300\ud55c \uc0ac\uc6a9 \uc815\ubcf4\ub97c \ucffc\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\uc5b4\ub5a4 \uc0ac\uc6a9\uc790\uac00 \ub0b4 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ud2b9\uc815 \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud588\ub098\uc694?"),(0,l.kt)("li",{parentName:"ol"},"\uadf8\ub4e4\uc740 \uc5bc\ub9c8\ub098 \ub9ce\uc740 \ub3c8\uacfc \uac00\uc2a4\ub97c \uc608\uce58\ud588\uc2b5\ub2c8\uae4c?"),(0,l.kt)("li",{parentName:"ol"},"\uc5b4\ub5a4 \ud2b8\ub79c\uc7ad\uc158\uc774 \uc2e4\ud328\ud588\ub098\uc694?")),(0,l.kt)("p",null,"\uc774\ub7ec\ud55c \uc9c8\ubb38\uc744 \ub2e8\uc21c\ud654\ud558\uae30 \uc704\ud574 \uc6b0\ub9ac\ub294 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/near/near-indexer-for-explorer"},"\uc775\uc2a4\ud50c\ub85c\ub7ec\uc6a9 NEAR \uc778\ub371\uc11c"),"\ub97c \uac1c\ubc1c\ud588\uc2b5\ub2c8\ub2e4. \uc775\uc2a4\ud50c\ub85c\ub7ec\uc6a9 NEAR \uc778\ub371\uc11c\ub294 ",(0,l.kt)("strong",{parentName:"p"},"\ubaa8\ub4e0")," \ube14\ub85d\uccb4\uc778 \uc791\uc5c5\uc774 \uc800\uc7a5\ub418\ub294 ",(0,l.kt)("strong",{parentName:"p"},"\uacf5\uac1c\ub41c")," ",(0,l.kt)("strong",{parentName:"p"},"\uc77d\uae30 \uc804\uc6a9")," PostgreSQL \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"testnet"),"\uacfc ",(0,l.kt)("inlineCode",{parentName:"p"},"mainnet")," \ubaa8\ub450 \uc81c\ub124\uc2dc\uc2a4 \ube14\ub85d\ubd80\ud130 \uc2dc\uc791\ud558\uc5ec \ub124\ud2b8\uc6cc\ud06c\uc758 \ubaa8\ub4e0 \ub370\uc774\ud130\ub85c \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub97c \ucc44\uc6b0\uace0, ",(0,l.kt)("a",{parentName:"p",href:"https://explorer.near.org/"},"\uc775\uc2a4\ud50c\ub85c\ub7ec"),"\uac00 \ud544\uc694\ub85c \ud558\ub294 \ud65c\uc131 \uc778\uc2a4\ud134\uc2a4\ub97c \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("admonition",{title:"GitHub \ub808\ud37c\uc9c0\ud1a0\ub9ac",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\uc775\uc2a4\ud50c\ub85c\ub7ec\uc6a9 NEAR \uc778\ub371\uc11c\ub294 ",(0,l.kt)("a",{parentName:"p",href:"https://near-indexers.io/docs/projects/near-indexer-framework"},"NEAR \uc778\ub371\uc11c \ub9c8\uc774\ud06c\ub85c\ud504\ub808\uc784\uc6cc\ud06c")," \uc704\uc5d0 \uad6c\ucd95\ub41c \uc778\ub371\uc11c\uc785\ub2c8\ub2e4. \uc774\ub294 \ub124\ud2b8\uc6cc\ud06c\ub97c \uac10\uc2dc\ud558\uace0, \ube14\ub85d\uccb4\uc778\uc758 \ubaa8\ub4e0 \ub370\uc774\ud130\ub97c PostgreSQL \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4. ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/near/near-indexer-for-explorer"},"\uc774 GitHub \ub808\ud37c\uc9c0\ud1a0\ub9ac"),"\uc5d0\uc11c \uc18c\uc2a4 \ucf54\ub4dc\ub97c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4\uac00 \ub2e4\uc6b4\ub418\uac70\ub098 \ucd5c\uc2e0 \ube14\ub85d\uccb4\uc778 \uc815\ubcf4\ub97c \ubc18\uc601\ud558\ub294 \ub370 \uc2dc\uac04\uc774 \uac78\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \uc81c\ud488\uc5d0 \uc0ac\uc6a9\ud558\uc9c0 \ub9c8\uc138\uc694. \ub300\uc2e0, \uc2e4\uc2dc\uac04 \ubc0f \uacfc\uac70 \uc815\ubcf4\uc758 \uc2e0\ub8b0\ud560 \uc218 \uc788\ub294 \ucd9c\ucc98\ub97c \uc704\ud574 \uc790\uccb4 ",(0,l.kt)("a",{parentName:"p",href:"https://near-indexers.io/"},"\uc778\ub371\uc11c"),"\ub97c \uc2e4\ud589\ud558\uc138\uc694.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0-\uc5f0\uacb0"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \uc5f0\uacb0"),(0,l.kt)("p",null,"PostgreSQL\uacfc \ud638\ud658\ub418\ub294 \ubaa8\ub4e0 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uad00\ub9ac\uc790\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc544\ubb34\uac83\ub3c4 \ubaa8\ub974\ub294 \uacbd\uc6b0 ",(0,l.kt)("a",{parentName:"p",href:"https://dbeaver.io/"},"DBeaver Community"),"\ub97c \uc0ac\uc6a9\ud574 \ubcf4\ub294 \uac83\uc744 \ucd94\ucc9c\ud569\ub2c8\ub2e4."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\ub124\ud2b8\uc6cc\ud06c"),(0,l.kt)("th",{parentName:"tr",align:null},"\ud638\uc2a4\ud2b8"),(0,l.kt)("th",{parentName:"tr",align:null},"\ud3ec\ud2b8"),(0,l.kt)("th",{parentName:"tr",align:null},"\ub370\uc774\ud130\ubca0\uc774\uc2a4"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc0ac\uc6a9\uc790 \uc774\ub984"),(0,l.kt)("th",{parentName:"tr",align:null},"\ube44\ubc00\ubc88\ud638"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mainnet"),(0,l.kt)("td",{parentName:"tr",align:null},"mainnet.db.explorer.indexer.near.dev"),(0,l.kt)("td",{parentName:"tr",align:null},"5432"),(0,l.kt)("td",{parentName:"tr",align:null},"mainnet_explorer"),(0,l.kt)("td",{parentName:"tr",align:null},"public_readonly"),(0,l.kt)("td",{parentName:"tr",align:null},"nearprotocol")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testnet"),(0,l.kt)("td",{parentName:"tr",align:null},"testnet.db.explorer.indexer.near.dev"),(0,l.kt)("td",{parentName:"tr",align:null},"5432"),(0,l.kt)("td",{parentName:"tr",align:null},"testnet_explorer"),(0,l.kt)("td",{parentName:"tr",align:null},"public_readonly"),(0,l.kt)("td",{parentName:"tr",align:null},"nearprotocol")))),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"testnet",label:"testnet",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"postgres://public_readonly:nearprotocol@testnet.db.explorer.indexer.near.dev/testnet_explorer\n"))),(0,l.kt)(i.Z,{value:"mainnet",label:"mainnet",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"postgres://public_readonly:nearprotocol@mainnet.db.explorer.indexer.near.dev/mainnet_explorer\n")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\ub370\uc774\ud130\ubca0\uc774\uc2a4-\uad6c\uc870"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uad6c\uc870"),(0,l.kt)("p",null,"\uc544\ub798 \uad6c\uc870\ub294 \uc2dc\uac04\uc774 \uc9c0\ub0a8\uc5d0 \ub530\ub77c \uc9c4\ud654\ud558\uac70\ub098 \ubcc0\uacbd\ub420 \uc218 \uc788\uc74c\uc744 \uc5fc\ub450\uc5d0 \ub450\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/near/near-indexer-for-explorer/master/docs/near-indexer-for-explorer-db.png"},(0,l.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/near/near-indexer-for-explorer/master/docs/near-indexer-for-explorer-db.png",alt:"structure_img"}))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\ucffc\ub9ac-\uc608\uc81c"},"\ucffc\ub9ac \uc608\uc81c"),(0,l.kt)("h3",{id:"\uba54\uc11c\ub4dc\ub97c-\ud638\ucd9c\ud558\ub294-\ud2b8\ub79c\uc7ad\uc158"},"\uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\ub294 \ud2b8\ub79c\uc7ad\uc158"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"v1.faucet.nonofficial.testnet")," \ud14c\uc2a4\ud2b8\ub137 \uacc4\uc815\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"contribute"),"\ub97c \ud638\ucd9c\ud55c \ubaa8\ub4e0 \ud2b8\ub79c\uc7ad\uc158\uc744 \ucffc\ub9ac\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select r.predecessor_account_id, t.transaction_hash \nfrom receipts r, action_receipt_actions ara, transactions t\nwhere r.receiver_account_id ='v1.faucet.nonofficial.testnet'\n  and ara.receipt_id = r.receipt_id\n  and ara.action_kind = 'FUNCTION_CALL'\n  and ara.args @> '{\"method_name\": \"contribute\"}'\n  and t.transaction_hash = r.originated_from_transaction_hash\n")),(0,l.kt)("hr",{class:"subsection"}),(0,l.kt)("h3",{id:"\uc0ac\uc6a9\uc790-\uc0c1\ud0dc-\ubc0f-\ucca8\ubd80-\uae08\uc561"},"\uc0ac\uc6a9\uc790, \uc0c1\ud0dc \ubc0f \ucca8\ubd80 \uae08\uc561"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"v1.faucet.nonofficial.testnet")," \ud14c\uc2a4\ud2b8\ub137 \uacc4\uc815\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"contribute"),"\ub97c \ud638\ucd9c\ud55c \ubaa8\ub4e0 \uc0ac\uc6a9\uc790, \ud638\ucd9c\uc5d0 \ucca8\ubd80\ub41c \uae08\uc561, \uadf8\ub9ac\uace0 \ud2b8\ub79c\uc7ad\uc158 \uc0c1\ud0dc\ub97c \ucffc\ub9ac\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select t.transaction_hash, eo.status, r.predecessor_account_id , ara.args -> 'deposit' as deposit\nfrom receipts r, action_receipt_actions ara, transactions t, execution_outcomes eo\nwhere r.receiver_account_id ='v1.faucet.nonofficial.testnet'\n  and ara.receipt_id = r.receipt_id and ara.action_kind = 'FUNCTION_CALL'\n  and ara.args @> '{\"method_name\": \"contribute\"}'\n  and t.transaction_hash = r.originated_from_transaction_hash\n  and r.receipt_id = eo.receipt_id\n")),(0,l.kt)("hr",{class:"subsection"}),(0,l.kt)("h3",{id:"\ubcf4\ub0b8-\uae08\uc561"},"\ubcf4\ub0b8 \uae08\uc561"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"v1.faucet.nonofficial.testnet"),"\uc5d0\uc11c \ub098\uac00\ub294 \ubaa8\ub4e0 \uc804\uc1a1 \ub370\uc774\ud130\ub97c \ucffc\ub9ac\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select r.receiver_account_id, ara.args -> 'deposit' as deposit  \nfrom receipts r, action_receipt_actions ara\nwhere r.predecessor_account_id  ='v1.faucet.nonofficial.testnet'\n  and ara.receipt_id = r.receipt_id and ara.action_kind = 'TRANSFER'\n")))}k.isMDXComponent=!0}}]);