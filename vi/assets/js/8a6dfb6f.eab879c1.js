"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7500],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,v=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return r?a.createElement(v,o(o({ref:t},u),{},{components:r})):a.createElement(v,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(86010);const l="tabItem_Ymn6";function o(e){var t=e.children,r=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(87462),n=r(67294),l=r(86010),o=r(72389),i=r(67392),c=r(7094),s=r(12466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,r,o=e.lazy,d=e.block,m=e.defaultValue,v=e.values,b=e.groupId,f=e.className,h=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=v?v:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.l)(y,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(t=null!=m?m:null==(r=h.find((function(e){return e.props.default})))?void 0:r.props.value)?t:h[0].props.value;if(null!==g&&!y.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,c.U)(),w=N.tabGroupChoices,x=N.setTabGroupChoices,T=(0,n.useState)(g),O=T[0],E=T[1],j=[],_=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var D=w[b];null!=D&&D!==O&&y.some((function(e){return e.value===D}))&&E(D)}var P=function(e){var t=e.currentTarget,r=j.indexOf(t),a=y[r].value;a!==O&&(_(t),E(a),null!=b&&x(b,String(a)))},C=function(e){var t,r=null;switch(e.key){case"ArrowRight":var a,n=j.indexOf(e.currentTarget)+1;r=null!=(a=j[n])?a:j[0];break;case"ArrowLeft":var l,o=j.indexOf(e.currentTarget)-1;r=null!=(l=j[o])?l:j[j.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},f)},y.map((function(e){var t=e.value,r=e.label,o=e.attributes;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return j.push(e)},onKeyDown:C,onFocus:P,onClick:P},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=r?r:t)}))),o?(0,n.cloneElement)(h.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,o.Z)();return n.createElement(d,(0,a.Z)({key:String(t)},e))}},74559:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),o=r(65488),i=r(85162),c=["components"],s={id:"oracles",title:"\uc624\ub77c\ud074",sidebar_label:"\ud83d\udd2e \uc624\ub77c\ud074"},u=void 0,p={unversionedId:"develop/relevant-contracts/oracles",id:"develop/relevant-contracts/oracles",title:"\uc624\ub77c\ud074",description:"",source:"@site/../docs/2.develop/relevant-contracts/oracles.md",sourceDirName:"2.develop/relevant-contracts",slug:"/develop/relevant-contracts/oracles",permalink:"/near_docs/vi/develop/relevant-contracts/oracles",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/relevant-contracts/oracles.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"9 thg 3, 2023",frontMatter:{id:"oracles",title:"\uc624\ub77c\ud074",sidebar_label:"\ud83d\udd2e \uc624\ub77c\ud074"},sidebar:"\uac1c\ubc1c",previous:{title:"\ud83d\udd0e \uc778\ub371\uc2f1 \uc194\ub8e8\uc158",permalink:"/near_docs/vi/tools/indexing"}},d={},m=[{value:"Switchboard",id:"switchboard",level:3},{value:"\uac00\uaca9 \uc624\ub77c\ud074 - Promixityfi",id:"\uac00\uaca9-\uc624\ub77c\ud074---promixityfi",level:2},{value:"\uc790\uc0b0 \uc870\ud68c",id:"\uc790\uc0b0-\uc870\ud68c",level:4},{value:"\uc790\uc0b0 \uac00\uaca9 \uac00\uc838\uc624\uae30",id:"\uc790\uc0b0-\uac00\uaca9-\uac00\uc838\uc624\uae30",level:4}],v={toc:m};function b(e){var t=e.components,r=(0,n.Z)(e,c);return(0,l.kt)("wrapper",(0,a.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\uc624\ub77c\ud074\uc740 \uc790\uc0b0\uc758 \ud604\uc7ac \uac00\uaca9\uc744 \uc870\ud68c\ud560 \uc218 \uc788\ub294 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc785\ub2c8\ub2e4. \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub294 \uc778\ud130\ub137\uc5d0 \uc5f0\uacb0\ud558\uc5ec \uc815\ubcf4\ub97c \uac00\uc838\uc62c \uc218 \uc5c6\uae30 \ub54c\ubb38\uc5d0, \uc624\ub77c\ud074\uc740 \ub204\uad70\uac00 \uc9c0\uc18d\uc801\uc73c\ub85c \uac00\uaca9\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \ub370 \uc758\uc874\ud569\ub2c8\ub2e4. \uadf8\ub807\uae30 \ub54c\ubb38\uc5d0 \uc2dc\uc7a5\uc758 \ucd5c\uc2e0 \uc815\ubcf4\uc640 \uc624\ub77c\ud074 \ub370\uc774\ud130 \uc0ac\uc774\uc5d0 \uc9c0\uc5f0\uc774 \uc788\uc744 \uc218 \uc788\ub2e4\ub294 \uc810\uc744 \uc624\ub77c\ud074\uc744 \uc0ac\uc6a9\ud560 \ub54c \uc5fc\ub450\uc5d0 \ub450\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/near_docs/vi/develop/relevant-contracts/ft"},"FT")," \ubc0f ",(0,l.kt)("a",{parentName:"p",href:"/near_docs/vi/develop/relevant-contracts/nft"},"NFT"),"\uc640 \ub2ec\ub9ac \uc624\ub77c\ud074 \ucee8\ud2b8\ub799\ud2b8\ub294 \ud45c\uc900\ud654\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc11c\ub294 \ub2e4\uc591\ud55c \uc81c\uacf5\uc5c5\uccb4\uc640 \uad6c\ucd95\ub41c \uc624\ub77c\ud074\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \ub098\uc5f4\ud569\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"switchboard"},"Switchboard"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uacc4\uc815: ",(0,l.kt)("strong",{parentName:"li"},"switchboard-v2.near")," | ",(0,l.kt)("strong",{parentName:"li"},"switchboard-v2.testnet")),(0,l.kt)("li",{parentName:"ul"},"\uc0dd\uc131\uc790: ",(0,l.kt)("a",{parentName:"li",href:"https://twitter.com/switchboardxyz"},"Switchboard")),(0,l.kt)("li",{parentName:"ul"},"\ubb38\uc11c: ",(0,l.kt)("a",{parentName:"li",href:"https://docs.switchboard.xyz/near/program/mainnet"},"https://docs.switchboard.xyz/near/program/mainnet")),(0,l.kt)("li",{parentName:"ul"},"Typescript \ubb38\uc11c: ",(0,l.kt)("a",{parentName:"li",href:"https://docs.switchboard.xyz/near/dev/javascript"},"https://docs.switchboard.xyz/near/dev/javascript")),(0,l.kt)("li",{parentName:"ul"},"CLI \ubb38\uc11c: ",(0,l.kt)("a",{parentName:"li",href:"https://docs.switchboard.xyz/near/dev/cli"},"https://docs.switchboard.xyz/near/dev/cli")),(0,l.kt)("li",{parentName:"ul"},"\ud1b5\ud569 \uc608\uc81c: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/switchboard-xyz/sbv2-near/blob/main/programs/feed-parser/src/lib.rs"},"https://github.com/switchboard-xyz/sbv2-near/blob/main/programs/feed-parser/src/lib.rs")),(0,l.kt)("li",{parentName:"ul"},"crates.io: ",(0,l.kt)("a",{parentName:"li",href:"https://crates.io/crates/sbv2-near"},"https://crates.io/crates/sbv2-near"))),(0,l.kt)("h2",{id:"\uac00\uaca9-\uc624\ub77c\ud074---promixityfi"},"\uac00\uaca9 \uc624\ub77c\ud074 - Promixityfi"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uacc4\uc815: ",(0,l.kt)("strong",{parentName:"li"},"price-oracle.near")," | ",(0,l.kt)("strong",{parentName:"li"},"price-oracle.testnet")),(0,l.kt)("li",{parentName:"ul"},"\uc791\uc131\uc790: ",(0,l.kt)("a",{parentName:"li",href:"https://twitter.com/proximityfi"},"Proximity")),(0,l.kt)("li",{parentName:"ul"},"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/NearDeFi/price-oracle"},"https://github.com/NearDeFi/price-oracle")),(0,l.kt)("li",{parentName:"ul"},"\ucee8\ud2b8\ub799\ud2b8 \uccb4\uacb0 \ubd07: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/NearDeFi/near-price-oracle-bot"},"https://github.com/NearDeFi/near-price-oracle-bot"))),(0,l.kt)("h4",{id:"\uc790\uc0b0-\uc870\ud68c"},"\uc790\uc0b0 \uc870\ud68c"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NEAR_ENV=mainnet near view priceoracle.near get_assets\n")))),(0,l.kt)("h4",{id:"\uc790\uc0b0-\uac00\uaca9-\uac00\uc838\uc624\uae30"},"\uc790\uc0b0 \uac00\uaca9 \uac00\uc838\uc624\uae30"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NEAR_ENV=mainnet near view priceoracle.near get_price_data\n")))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"  \ubc18\ud690\ub41c ",(0,l.kt)("inlineCode",{parentName:"p"},"multiplier")," \uac12\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"10000"),"\uc73c\ub85c \ub098\ub220\uc11c USD \ud615\ud0dc\ub85c \uac00\uaca9\uc744 \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))}b.isMDXComponent=!0}}]);