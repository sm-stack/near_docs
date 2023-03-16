"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[435],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(67294),a=t(86010);const l="tabItem_Ymn6";function o(e){var n=e.children,t=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(87462),a=t(67294),l=t(86010),o=t(72389),i=t(67392),u=t(7094),c=t(12466);const s="tabList__CuJ",p="tabItem_LNqP";function d(e){var n,t,o=e.lazy,d=e.block,m=e.defaultValue,f=e.values,v=e.groupId,b=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=f?f:k.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,i.l)(w,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(n=null!=m?m:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:k[0].props.value;if(null!==y&&!w.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+w.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,u.U)(),E=g.tabGroupChoices,N=g.setTabGroupChoices,O=(0,a.useState)(y),T=O[0],R=O[1],j=[],P=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var _=E[v];null!=_&&_!==T&&w.some((function(e){return e.value===_}))&&R(_)}var C=function(e){var n=e.currentTarget,t=j.indexOf(n),r=w[t].value;r!==T&&(P(n),R(r),null!=v&&N(v,String(r)))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r,a=j.indexOf(e.currentTarget)+1;t=null!=(r=j[a])?r:j[0];break;case"ArrowLeft":var l,o=j.indexOf(e.currentTarget)-1;t=null!=(l=j[o])?l:j[j.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},b)},w.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return j.push(e)},onKeyDown:I,onFocus:C,onClick:C},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),o?(0,a.cloneElement)(k.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function m(e){var n=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(n)},e))}},80890:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>v,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),o=t(65488),i=t(85162),u=["components"],c={id:"maintenance-windows",title:"\uc720\uc9c0 \uad00\ub9ac \uae30\uac04(Maintenance Window)"},s=void 0,p={unversionedId:"api/rpc/maintenance-windows",id:"api/rpc/maintenance-windows",title:"\uc720\uc9c0 \uad00\ub9ac \uae30\uac04(Maintenance Window)",description:"",source:"@site/../docs/5.api/rpc/maintenance-windows.md",sourceDirName:"5.api/rpc",slug:"/api/rpc/maintenance-windows",permalink:"/near_docs/vi/api/rpc/maintenance-windows",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/5.api/rpc/maintenance-windows.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"9 thg 3, 2023",frontMatter:{id:"maintenance-windows",title:"\uc720\uc9c0 \uad00\ub9ac \uae30\uac04(Maintenance Window)"}},d={},m=[{value:"\uc720\uc9c0 \uad00\ub9ac \uae30\uac04(Maintenance Window)",id:"maintenance-windows",level:2},{value:"\ubb34\uc5c7\uc774 \uc798\ubabb\ub420 \uc218 \uc788\ub098\uc694??",id:"what-could-go-wrong",level:4}],f={toc:m};function v(e){var n=e.components,t=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"RPC API\ub97c \uc0ac\uc6a9\ud558\uba74 \ud604\uc7ac \uc5d0\ud3ec\ud06c\uc758 \ud2b9\uc815 \ubc38\ub9ac\ub370\uc774\ud130\uc5d0 \ub300\ud55c \ud5a5\ud6c4 \uc720\uc9c0 \uad00\ub9ac \uae30\uac04\uc744 \ucffc\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"maintenance-windows"},"\uc720\uc9c0 \uad00\ub9ac \uae30\uac04(Maintenance Window)"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ud2b9\uc815 \ubc38\ub9ac\ub370\uc774\ud130\uc758 \uc720\uc9c0 \uad00\ub9ac \uae30\uac04\uc740 \ud604\uc7ac \uc5d0\ud3ec\ud06c\uc758 \ubbf8\ub798 \ube14\ub85d \ub192\uc774 \ubc94\uc704\uc774\uba70, \uc774 \uae30\uac04 \ub3d9\uc548 \ubc38\ub9ac\ub370\uc774\ud130\ub294 \ube14\ub85d \ub610\ub294 \uccad\ud06c\ub97c \uc0dd\uc131\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.\n\uc81c\uacf5\ub41c \uacc4\uc815\uc774 \ubc38\ub9ac\ub370\uc774\ud130\uac00 \uc544\ub2cc \uacbd\uc6b0, \uc9c0\uae08\ubd80\ud130 \uc5d0\ud3ec\ud06c \ub05d\uae4c\uc9c0\uc758 \ubc94\uc704\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uba54\uc11c\ub4dc: ",(0,l.kt)("inlineCode",{parentName:"li"},"EXPERIMENTAL_maintenance_windows")),(0,l.kt)("li",{parentName:"ul"},"\ub9e4\uac1c\ubcc0\uc218:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"account_id"))))),(0,l.kt)("p",null,"\uc608\uc2dc:"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"json",label:"JSON",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": "dontcare",\n  "method": "EXPERIMENTAL_maintenance_windows",\n  "params": {\n    "account_id": "node0"\n  }\n}\n'))),(0,l.kt)(i.Z,{value:"http",label:"HTTPie",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'http post https://rpc.testnet.near.org jsonrpc=2.0 id=dontcare method=EXPERIMENTAL_maintenance_windows \\\n  params:=\'{\n    "account_id": "node0"\n  }\'\n')))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\uc751\ub2f5 \uc608\uc2dc:"),(0,l.kt)("p",null,(0,l.kt)("p",null,"\uacb0\uacfc\ub294 \ud604\uc7ac \uc5d0\ud3ec\ud06c\uc758 \ud5a5\ud6c4 \uc720\uc9c0 \uad00\ub9ac \uae30\uac04 \ubaa9\ub85d\uc785\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uae30\uac04 ",(0,l.kt)("inlineCode",{parentName:"p"},"[1028, 1031]"),"\uc5d0\ub294 1028, 1029 \ubc0f 1030\uc774 \ud3ec\ud568\ub429\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "result": [\n        [\n            1028,\n            1031\n        ],\n        [\n            1034,\n            1038\n        ],\n    ],\n    "id": "dontcare"\n}\n')))),(0,l.kt)("h4",{id:"what-could-go-wrong"},"\ubb34\uc5c7\uc774 \uc798\ubabb\ub420 \uc218 \uc788\ub098\uc694??"),(0,l.kt)("p",null,"API \uc694\uccad\uc774 \uc2e4\ud328\ud558\uba74 RPC \uc11c\ubc84\ub294 \uc81c\ud55c\ub41c \uc218\uc758 \uc798 \uc815\uc758\ub41c \uc624\ub958 \ubcc0\ud615\uacfc \ud568\uaed8 \uad6c\uc870\ud654\ub41c \uc624\ub958 \uc751\ub2f5\uc744 \ubc18\ud658\ud558\ubbc0\ub85c, \ud074\ub77c\uc774\uc5b8\ud2b8 \ucf54\ub4dc\ub294 \uac00\ub2a5\ud55c \ubaa8\ub4e0 \uc624\ub958 \uc0ac\ub840\ub97c \ucca0\uc800\ud558\uac8c \ucc98\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. JSON-RPC \uc624\ub958\ub294 \uc624\ub958 \uc751\ub2f5\uc744 \uad6c\uc870\ud654\ud558\uae30 \uc704\ud574 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/joyent/node-verror"},"verror")," \uaddc\uce59\uc744 \ub530\ub985\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": {\n        "name": <ERROR_TYPE>,\n        "cause": {\n            "info": {..},\n            "name": <ERROR_CAUSE>\n        },\n        "code": -32000,\n        "data": String,\n        "message": "Server error",\n    },\n    "id": "dontcare",\n    "jsonrpc": "2.0"\n}\n')),(0,l.kt)("p",null,"\ub2e4\uc74c\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"maintenance_windows")," \uba54\uc11c\ub4dc\uc5d0\uc11c \ubc18\ud658\ud560 \uc218 \uc788\ub294 \uc624\ub958 \ubcc0\ud615\uc758 \uc804\uccb4 \ubaa9\ub85d\uc785\ub2c8\ub2e4."),(0,l.kt)("table",{class:"custom-stripe"},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"ERROR_TYPE",(0,l.kt)("br",null),(0,l.kt)("code",null,"error.name")),(0,l.kt)("th",null,"ERROR_CAUSE",(0,l.kt)("br",null),(0,l.kt)("code",null,"error.cause.name")),(0,l.kt)("th",null,"\uc774\uc720"),(0,l.kt)("th",null,"\ud574\uacb0\ucc45"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"INTERNAL_ERROR"),(0,l.kt)("td",null,"INTERNAL_ERROR"),(0,l.kt)("td",null,"\ub178\ub4dc \uc790\uccb4\uc5d0 \ubb38\uc81c\uac00 \uc788\uac70\ub098 \uacfc\ubd80\ud558\uac00 \uac78\ub838\uc2b5\ub2c8\ub2e4."),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"\ub098\uc911\uc5d0 \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc138\uc694"),(0,l.kt)("li",null,"\ub2e4\ub978 \ub178\ub4dc\uc5d0 \uc694\uccad\uc744 \ubcf4\ub0b4\uc138\uc694"),(0,l.kt)("li",null,"\uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,l.kt)("code",null,"error.cause.info"),"\ub97c \ud655\uc778\ud558\uc138\uc694")))))))}v.isMDXComponent=!0}}]);