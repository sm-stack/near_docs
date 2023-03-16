"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6318],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),o=n(86010),l=n(72389),i=n(67392),s=n(7094),c=n(12466);const p="tabList__CuJ",u="tabItem_LNqP";function m(e){var t,n,l=e.lazy,m=e.block,d=e.defaultValue,k=e.values,y=e.groupId,f=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=k?k:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,i.l)(v,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,s.U)(),S=g.tabGroupChoices,j=g.setTabGroupChoices,w=(0,r.useState)(b),I=w[0],_=w[1],T=[],P=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var C=S[y];null!=C&&C!==I&&v.some((function(e){return e.value===C}))&&_(C)}var E=function(e){var t=e.currentTarget,n=T.indexOf(t),a=v[n].value;a!==I&&(P(t),_(a),null!=y&&j(y,String(a)))},K=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=T.indexOf(e.currentTarget)+1;n=null!=(a=T[r])?a:T[0];break;case"ArrowLeft":var o,l=T.indexOf(e.currentTarget)-1;n=null!=(o=T[l])?o:T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},f)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:function(e){return T.push(e)},onKeyDown:K,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":I===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(h.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==I})}))))}function d(e){var t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},92079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>y,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=n(65488),i=n(85162),s=["components"],c={id:"quick-reference",title:"JavaScript API\ub97c \uc0ac\uc6a9\ud558\uc5ec NEAR\uc640 \uc0c1\ud638 \uc791\uc6a9",sidebar_label:"JavaScript API \uc0ac\uc6a9"},p=void 0,u={unversionedId:"tools/near-api-js/quick-reference",id:"tools/near-api-js/quick-reference",title:"JavaScript API\ub97c \uc0ac\uc6a9\ud558\uc5ec NEAR\uc640 \uc0c1\ud638 \uc791\uc6a9",description:"",source:"@site/../docs/4.tools/near-api-js/quick-reference.md",sourceDirName:"4.tools/near-api-js",slug:"/tools/near-api-js/quick-reference",permalink:"/near_docs/vi/tools/near-api-js/quick-reference",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/4.tools/near-api-js/quick-reference.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"9 thg 3, 2023",frontMatter:{id:"quick-reference",title:"JavaScript API\ub97c \uc0ac\uc6a9\ud558\uc5ec NEAR\uc640 \uc0c1\ud638 \uc791\uc6a9",sidebar_label:"JavaScript API \uc0ac\uc6a9"},sidebar:"\uac1c\ubc1c",previous:{title:"NEAR \uc9c0\uac11 \uc120\ud0dd\uae30",permalink:"/near_docs/vi/tools/wallet-selector"},next:{title:"\uc9c0\uac11",permalink:"/near_docs/vi/tools/near-api-js/wallet"}},m={},d=[{value:"\ube60\ub978 \ucc38\uace0",id:"\ube60\ub978-\ucc38\uace0",level:2},{value:"<code>near-api-js</code>\ub780 \ubb34\uc5c7\uc778\uac00\uc694?",id:"near-api-js\ub780-\ubb34\uc5c7\uc778\uac00\uc694",level:2},{value:"\uc124\uce58",id:"install",level:2},{value:"Import",id:"import",level:2},{value:"\ud0a4 \uc800\uc7a5\uc18c(Key Store)",id:"key-store",level:2},{value:"NEAR\uc5d0 \uc5f0\uacb0",id:"connect",level:2}],k={toc:d};function y(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\ube60\ub978-\ucc38\uace0"},"\ube60\ub978 \ucc38\uace0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#install"},"\uc124\uce58")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/near_docs/vi/tools/near-api-js/wallet"},"\uc9c0\uac11\uacfc\uc758 \uc0c1\ud638\uc791\uc6a9")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/near_docs/vi/tools/near-api-js/account"},"\uacc4\uc815")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/near_docs/vi/tools/near-api-js/contract"},"\ucee8\ud2b8\ub799\ud2b8")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/near_docs/vi/tools/near-api-js/utils"},"\uc720\ud2f8\ub9ac\ud2f0"))),(0,o.kt)("h2",{id:"near-api-js\ub780-\ubb34\uc5c7\uc778\uac00\uc694"},(0,o.kt)("inlineCode",{parentName:"h2"},"near-api-js"),"\ub780 \ubb34\uc5c7\uc778\uac00\uc694?"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"near-api-js"),"\ub294 NEAR \ube14\ub85d\uccb4\uc778\uacfc \uc0c1\ud638 \uc791\uc6a9\ud558\ub294 \uc644\uc804\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4. \uc774\ub294 \ube0c\ub77c\uc6b0\uc800 \ub610\ub294 Node.js \ub7f0\ud0c0\uc784\uc5d0\uc11c \uc0ac\uc6a9\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc77c\ubc18\uc801\uc73c\ub85c ",(0,o.kt)("a",{parentName:"p",href:"#key-store"},(0,o.kt)("inlineCode",{parentName:"a"},"KeyStore")),"\ub97c \uc0ac\uc6a9\ud55c ",(0,o.kt)("a",{parentName:"p",href:"#connect"},(0,o.kt)("inlineCode",{parentName:"a"},"connect")),"\ub85c \uc5f0\uacb0\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5f0\uacb0 \uac1d\uccb4\ub97c \ud1b5\ud574, \ub2e4\uc74c\uacfc \uac19\uc740 \uac83\ub4e4\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c ",(0,o.kt)("a",{parentName:"li",href:"/near_docs/vi/tools/near-api-js/wallet"},"\uc9c0\uac11"),"\uacfc \uc0c1\ud638 \uc791\uc6a9."),(0,o.kt)("li",{parentName:"ul"},"\ub2e4\uc74c\uacfc \uac19\uc740 \uac83\ub4e4\uc744 \uc704\ud574 ",(0,o.kt)("a",{parentName:"li",href:"/near_docs/vi/tools/near-api-js/account"},"\uacc4\uc815")," \uac1d\uccb4 \uc778\uc2a4\ud134\uc2a4\ud654:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\ud1a0\ud070 \uc804\uc1a1"),(0,o.kt)("li",{parentName:"ul"},"\ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec"),(0,o.kt)("li",{parentName:"ul"},"\uacc4\uc815 \uac80\uc0ac, \uc0dd\uc131 \ub610\ub294 \uc0ad\uc81c"),(0,o.kt)("li",{parentName:"ul"},"\uacc4\uc815 \ud0a4 \uad00\ub9ac"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/near_docs/vi/tools/near-api-js/contract"},"\ucee8\ud2b8\ub799\ud2b8")," \uac1d\uccb4\ub97c \uc778\uc2a4\ud134\uc2a4\ud654\ud558\uc5ec \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uba54\uc11c\ub4dc \ud638\ucd9c")),(0,o.kt)("p",null,"\ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0\ub294 \uc77c\ubd80 ",(0,o.kt)("a",{parentName:"p",href:"/near_docs/vi/tools/near-api-js/utils"},"utils")," \ud568\uc218\ub3c4 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\uc6f9 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c NEAR \ud1b5\ud569\uc744 \ube60\ub974\uac8c \uc2dc\uc791\ud558\ub824\uba74 ",(0,o.kt)("a",{parentName:"p",href:"/develop/integrate/frontend"},"\uc6f9 \ud504\ub860\ud2b8\uc5d4\ub4dc \ud1b5\ud569")," \ubb38\uc11c\ub97c \uc77d\uc5b4\ubcf4\uc138\uc694.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"near-api-js"),"\uc640 ",(0,o.kt)("inlineCode",{parentName:"p"},"near-sdk-js"),"\uc758 \ucc28\uc774\uc810\uc5d0 \uc720\uc758\ud558\uc138\uc694:"),(0,o.kt)("p",{parentName:"admonition"},"JavaScript ",(0,o.kt)("em",{parentName:"p"},"SDK")," \ub294 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uac1c\ubc1c\uc744 \uc704\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\ub294 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\ub294 \ub370 \uc0ac\uc6a9\ud558\ub294 \ud074\ub798\uc2a4\uc640 \ud568\uc218\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",{parentName:"admonition"},"JavaScript ",(0,o.kt)("em",{parentName:"p"},"API")," \ub294 NEAR\uc640 \uc0c1\ud638 \uc791\uc6a9\ud560 \uc218 \uc788\ub294 \ubaa8\ub4e0 \uac00\ub2a5\ud55c \uba85\ub839\uc744 \uc704\ud55c \uc644\uc804\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4. \uc774\ub294 RPC \uc5d4\ub4dc\ud3ec\uc778\ud2b8 \ub798\ud37c, \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c NEAR \uc9c0\uac11\uacfc \uc0c1\ud638 \uc791\uc6a9\ud558\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac, \ud0a4 \uad00\ub9ac \ub3c4\uad6c\uc785\ub2c8\ub2e4.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"install"},"\uc124\uce58"),(0,o.kt)("p",null,"\ud328\ud0a4\uc9c0\uc5d0 ",(0,o.kt)("inlineCode",{parentName:"p"},"near-api-js"),"\ub97c \uc758\uc874\uc131(dependency)\uc73c\ub85c \ud3ec\ud568\ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save near-api-js\n")),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("p",null,"\ube0c\ub77c\uc6b0\uc800 \ub610\ub294 Node.js \ub7f0\ud0c0\uc784\uc5d0\uc11c API \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc77c\ubd80 \uae30\ub2a5\uc740 \uc5ec\ub7ec \ud658\uacbd \uc911 \ud558\ub098\uc5d0\uc11c\ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 ",(0,o.kt)("inlineCode",{parentName:"p"},"WalletConnection"),"\ub294 \ube0c\ub77c\uc6b0\uc800 \uc804\uc6a9\uc774\uba70, \uac01 \ud658\uacbd\ub9c8\ub2e4 \uc11c\ub85c \ub2e4\ub978 ",(0,o.kt)("inlineCode",{parentName:"p"},"KeyStore")," \uacf5\uae09\uc790\uac00 \uc874\uc7ac\ud569\ub2c8\ub2e4."),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Browser",label:"\ube0c\ub77c\uc6b0\uc800",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import * as nearAPI from "near-api-js";\n'))),(0,o.kt)(i.Z,{value:"Node",label:"\ub178\ub4dc",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const nearAPI = require("near-api-js");\n')))),(0,o.kt)("h2",{id:"key-store"},"\ud0a4 \uc800\uc7a5\uc18c(Key Store)"),(0,o.kt)("p",null,"\ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc11c\uba85\ud558\ub294 \uacbd\uc6b0 ",(0,o.kt)("em",{parentName:"p"},"\ud0a4 \uc800\uc7a5\uc18c")," \ub97c \uc0dd\uc131\ud574\uc57c \ud569\ub2c8\ub2e4. \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc9c0\uac11\uc73c\ub85c \ub85c\uadf8\uc778\ud558\ub3c4\ub85d \uc694\uccad\ud558\uba74, LocalStorage KeyStore\uac00 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"browser",label:"\ube0c\ub77c\uc6b0\uc800 \uc0ac\uc6a9",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// creates keyStore using private key in local storage\n\nconst { keyStores } = nearAPI;\nconst myKeyStore = new keyStores.BrowserLocalStorageKeyStore();\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://near.github.io/near-api-js/classes/key_stores_browser_local_storage_key_store.BrowserLocalStorageKeyStore"},(0,o.kt)("span",{class:"typedoc-icon typedoc-icon-class"})," ",(0,o.kt)("inlineCode",{parentName:"a"},"BrowserLocalStorageKeyStore")," \ud074\ub798\uc2a4"))),(0,o.kt)(i.Z,{value:"dir",label:"\uc790\uaca9 \uc99d\uba85 \ub514\ub809\ud1a0\ub9ac \uc0ac\uc6a9",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// creates a keyStore that searches for keys in .near-credentials\n// requires credentials stored locally by using a NEAR-CLI command: `near login` \n// https://docs.near.org/tools/cli#near-login\n\nconst { keyStores } = nearAPI;\nconst homedir = require("os").homedir();\nconst CREDENTIALS_DIR = ".near-credentials";\nconst credentialsPath = require("path").join(homedir, CREDENTIALS_DIR);\nconst myKeyStore = new keyStores.UnencryptedFileSystemKeyStore(credentialsPath);\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://near.github.io/near-api-js/classes/key_stores_unencrypted_file_system_keystore.UnencryptedFileSystemKeyStore"},(0,o.kt)("span",{class:"typedoc-icon typedoc-icon-class"})," ",(0,o.kt)("inlineCode",{parentName:"a"},"UnencryptedFileSystemKeyStore")," \ud074\ub798\uc2a4"))),(0,o.kt)(i.Z,{value:"file",label:"\ud30c\uc77c \uc0ac\uc6a9",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// creates keyStore from a provided file\n// you will need to pass the location of the .json key pair\n\nconst { KeyPair, keyStores } = require("near-api-js");\nconst fs = require("fs");\nconst homedir = require("os").homedir();\n\nconst ACCOUNT_ID = "near-example.testnet";  // NEAR account tied to the keyPair\nconst NETWORK_ID = "testnet";\n// path to your custom keyPair location (ex. function access key for example account)\nconst KEY_PATH = \'/.near-credentials/near-example-testnet/get_token_price.json\';\n\nconst credentials = JSON.parse(fs.readFileSync(homedir + KEY_PATH));\nconst myKeyStore = new keyStores.InMemoryKeyStore();\nmyKeyStore.setKey(NETWORK_ID, ACCOUNT_ID, KeyPair.fromString(credentials.private_key));\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://near.github.io/near-api-js/classes/key_stores_in_memory_key_store.InMemoryKeyStore"},(0,o.kt)("span",{class:"typedoc-icon typedoc-icon-class"})," ",(0,o.kt)("inlineCode",{parentName:"a"},"InMemoryKeyStore")," \ud074\ub798\uc2a4"),"\n","\xa0","\xa0","\xa0","\n",(0,o.kt)("a",{parentName:"p",href:"https://near.github.io/near-api-js/classes/utils_key_pair.KeyPair"},(0,o.kt)("span",{class:"typedoc-icon typedoc-icon-class"})," ",(0,o.kt)("inlineCode",{parentName:"a"},"KeyPair")," \ud074\ub798\uc2a4"))),(0,o.kt)(i.Z,{value:"key",label:"\uac1c\uc778 \ud0a4 \ubb38\uc790\uc5f4 \uc0ac\uc6a9",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// creates keyStore from a private key string\n// you can define your key here or use an environment variable\n\nconst { keyStores, KeyPair } = nearAPI;\nconst myKeyStore = new keyStores.InMemoryKeyStore();\nconst PRIVATE_KEY =\n  "by8kdJoJHu7uUkKfoaLd2J2Dp1q1TigeWMG123pHdu9UREqPcshCM223kWadm";\n// creates a public / private key pair using the provided private key\nconst keyPair = KeyPair.fromString(PRIVATE_KEY);\n// adds the keyPair you created to keyStore\nawait myKeyStore.setKey("testnet", "example-account.testnet", keyPair);\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://near.github.io/near-api-js/classes/key_stores_in_memory_key_store.InMemoryKeyStore"},(0,o.kt)("span",{class:"typedoc-icon typedoc-icon-class"})," ",(0,o.kt)("inlineCode",{parentName:"a"},"InMemoryKeyStore")," \ud074\ub798\uc2a4"),"\n","\xa0","\xa0","\xa0","\n",(0,o.kt)("a",{parentName:"p",href:"https://near.github.io/near-api-js/classes/utils_key_pair.KeyPair"},(0,o.kt)("span",{class:"typedoc-icon typedoc-icon-class"})," ",(0,o.kt)("inlineCode",{parentName:"a"},"KeyPair")," \ud074\ub798\uc2a4")))),(0,o.kt)("h2",{id:"connect"},"NEAR\uc5d0 \uc5f0\uacb0"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"connect"),"\uc5d0\uc11c \ubc18\ud658\ub41c \uac1d\uccb4\ub294 API\uc758 \ubaa8\ub4e0 \uba85\ub839\uc5d0 \ub300\ud55c \uc9c4\uc785\uc810\uc785\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc11c\uba85\ud558\ub824\uba74 \uc5f0\uacb0\uc744 \ub9cc\ub4e4\uae30 \uc704\ud55c ",(0,o.kt)("a",{parentName:"p",href:"#key-store"},(0,o.kt)("inlineCode",{parentName:"a"},"KeyStore")),"\uac00 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"testnet",label:"TestNet",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const { connect } = nearAPI;\n\nconst connectionConfig = {\n  networkId: "testnet",\n  keyStore: myKeyStore, // first create a key store \n  nodeUrl: "https://rpc.testnet.near.org",\n  walletUrl: "https://wallet.testnet.near.org",\n  helperUrl: "https://helper.testnet.near.org",\n  explorerUrl: "https://explorer.testnet.near.org",\n};\nconst nearConnection = await connect(connectionConfig);\n'))),(0,o.kt)(i.Z,{value:"mainnet",label:"MainNet",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const { connect } = nearAPI;\n\nconst connectionConfig = {\n  networkId: "mainnet",\n  keyStore: myKeyStore, // first create a key store\n  nodeUrl: "https://rpc.mainnet.near.org",\n  walletUrl: "https://wallet.mainnet.near.org",\n  helperUrl: "https://helper.mainnet.near.org",\n  explorerUrl: "https://explorer.mainnet.near.org",\n};\nconst nearConnection = await connect(connectionConfig);\n'))),(0,o.kt)(i.Z,{value:"betanet",label:"BetaNet",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const { connect } = nearAPI;\n\nconst connectionConfig = {\n  networkId: "betanet",\n  keyStore: myKeyStore, // first create a key store\n  nodeUrl: "https://rpc.betanet.near.org",\n  walletUrl: "https://wallet.betanet.near.org",\n  helperUrl: "https://helper.betanet.near.org",\n  explorerUrl: "https://explorer.betanet.near.org",\n};\nconst nearConnection = await connect(connectionConfig);\n'))),(0,o.kt)(i.Z,{value:"localnet",label:"LocalNet",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const { connect } = nearAPI;\nconst connectionConfig = {\n  networkId: "local",\n  nodeUrl: "http://localhost:3030",\n  walletUrl: "http://localhost:4000/wallet",\n};\nconst nearConnection = await connect(connectionConfig);\n')))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://near.github.io/near-api-js/modules/connect"},(0,o.kt)("span",{class:"typedoc-icon typedoc-icon-module"})," ",(0,o.kt)("inlineCode",{parentName:"a"},"connect")," \ubaa8\ub4c8")))}y.isMDXComponent=!0}}]);