"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1037],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,_=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return t?a.createElement(_,s(s({ref:n},u),{},{components:t})):a.createElement(_,s({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(67294),r=t(86010);const o="tabItem_Ymn6";function s(e){var n=e.children,t=e.hidden,s=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(87462),r=t(67294),o=t(86010),s=t(72389),i=t(67392),c=t(7094),l=t(12466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var n,t,s=e.lazy,d=e.block,m=e.defaultValue,_=e.values,k=e.groupId,b=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=_?_:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),N=(0,i.l)(f,(function(e,n){return e.value===n.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===m?m:null!=(n=null!=m?m:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:g[0].props.value;if(null!==v&&!f.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,c.U)(),h=y.tabGroupChoices,A=y.setTabGroupChoices,E=(0,r.useState)(v),T=E[0],S=E[1],I=[],C=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var O=h[k];null!=O&&O!==T&&f.some((function(e){return e.value===O}))&&S(O)}var B=function(e){var n=e.currentTarget,t=I.indexOf(n),a=f[t].value;a!==T&&(C(n),S(a),null!=k&&A(k,String(a)))},w=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,r=I.indexOf(e.currentTarget)+1;t=null!=(a=I[r])?a:I[0];break;case"ArrowLeft":var o,s=I.indexOf(e.currentTarget)-1;t=null!=(o=I[s])?o:I[I.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},b)},f.map((function(e){var n=e.value,t=e.label,s=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return I.push(e)},onKeyDown:w,onFocus:B,onClick:B},s,{className:(0,o.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),s?(0,r.cloneElement)(g.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function m(e){var n=(0,s.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},17632:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),s=t(65488),i=t(85162),c=["components"],l={id:"actions",title:"\uc804\uc1a1 & Action"},u=void 0,p={unversionedId:"develop/contracts/actions",id:"develop/contracts/actions",title:"\uc804\uc1a1 & Action",description:"",source:"@site/../docs/2.develop/contracts/actions.md",sourceDirName:"2.develop/contracts",slug:"/develop/contracts/actions",permalink:"/near_docs/vi/develop/contracts/actions",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/contracts/actions.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"9 thg 3, 2023",frontMatter:{id:"actions",title:"\uc804\uc1a1 & Action"},sidebar:"\uac1c\ubc1c",previous:{title:"\uc0c1\ud0dc & \uc790\ub8cc\uad6c\uc870",permalink:"/near_docs/vi/develop/contracts/storage"},next:{title:"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c(Cross-Contract Calls)",permalink:"/near_docs/vi/develop/contracts/crosscontract"}},d={},m=[{value:"NEAR \u24c3 \uc804\uc1a1",id:"near-\u24dd-\uc804\uc1a1",level:2},{value:"\ud568\uc218 \ud638\ucd9c",id:"\ud568\uc218-\ud638\ucd9c",level:2},{value:"\ud558\uc704 \uacc4\uc815(Sub Account) \uc0dd\uc131",id:"\ud558\uc704-\uacc4\uc815sub-account-\uc0dd\uc131",level:2},{value:"\ub2e4\ub978 \uacc4\uc815 \uc0dd\uc131",id:"\ub2e4\ub978-\uacc4\uc815-\uc0dd\uc131",level:4},{value:"\ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec",id:"\ucee8\ud2b8\ub799\ud2b8-\ubc30\ud3ec",level:2},{value:"\ud0a4 \ucd94\uac00",id:"\ud0a4-\ucd94\uac00",level:2},{value:"\uacc4\uc815 \uc0ad\uc81c",id:"\uacc4\uc815-\uc0ad\uc81c",level:2}],_={toc:m};function k(e){var n=e.components,t=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},_,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub294 NEAR \uc804\uc1a1 \ub610\ub294 \ub2e4\ub978 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uacfc \uac19\uc740 \ud2b9\uc815 ",(0,o.kt)("inlineCode",{parentName:"p"},"Actions"),"\ub97c \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Actions"),"\uc758 \uc911\uc694\ud55c \uc18d\uc131\uc740, \ub3d9\uc77c\ud55c \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uc791\uc5c5\ud560 \ub54c \uc77c\uad04\uc801\uc73c\ub85c \ucc98\ub9ac\ub420 \uc218 \uc788\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4. ",(0,o.kt)("strong",{parentName:"p"},"\uc77c\uad04 Action"),"\uc740 \ud55c \ub2e8\uc704\ub85c \uc791\ub3d9\ud569\ub2c8\ub2e4. \uc774\ub294 \ub3d9\uc77c\ud55c ",(0,o.kt)("a",{parentName:"p",href:"/near_docs/vi/concepts/basics/transactions/overview#receipt-receipt"},"Receipt"),"\uc5d0\uc11c \uc2e4\ud589\ub418\uba70, ",(0,o.kt)("strong",{parentName:"p"},"\uc2e4\ud328\ud560")," \uacbd\uc6b0 \ubaa8\ub450 ",(0,o.kt)("strong",{parentName:"p"},"\ub418\ub3cc\ub824\uc9d1\ub2c8\ub2e4"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"Actions"),"\ub294 ",(0,o.kt)("strong",{parentName:"p"},"\ub3d9\uc77c\ud55c \ucee8\ud2b8\ub799\ud2b8"),"\uc5d0 \ub530\ub77c \ud589\ub3d9\ud558\ub294 \uacbd\uc6b0\uc5d0\ub9cc \uc77c\uad04 \ucc98\ub9ac\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ub450 \uba54\uc11c\ub4dc\ub97c \uc77c\uad04\uc801\uc73c\ub85c \ud638\ucd9c\ud560 \uc218 \uc788\uc9c0\ub9cc, \uc11c\ub85c \ub2e4\ub978 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ub450 \uba54\uc11c\ub4dc\ub97c \uc77c\uad04\uc801\uc73c\ub85c \ud638\ucd9c \ud560 \uc218\ub294 ",(0,o.kt)("strong",{parentName:"p"},"\uc5c6\uc2b5\ub2c8\ub2e4"),".")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"near-\u24dd-\uc804\uc1a1"},"NEAR \u24c3 \uc804\uc1a1"),(0,o.kt)("p",null,"\ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c $NEAR\ub97c \ub124\ud2b8\uc6cc\ud06c\uc758 \ub2e4\ub978 \uacc4\uc815\uc73c\ub85c \ubcf4\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4. $NEAR \uc804\uc1a1\uc5d0 \ub300\ud55c \uac00\uc2a4 \ube44\uc6a9\uc740 \uace0\uc815\ub418\uc5b4 \uc788\uc73c\uba70, \ud504\ub85c\ud1a0\ucf5c\uc758 \uae30\ubcf8 \uad6c\uc131\uc744 \uae30\ubc18\uc73c\ub85c \ud569\ub2c8\ub2e4. \ud604\uc7ac \ube44\uc6a9\uc740 ",(0,o.kt)("inlineCode",{parentName:"p"},"~0.45 TGas"),"\uc785\ub2c8\ub2e4."),(0,o.kt)(s.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\ud83c\udf10 JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { NearBindgen, NearPromise, call } from 'near-sdk-js'\nimport { AccountId } from 'near-sdk-js/lib/types'\n\n@NearBindgen({})\nclass Contract{\n  @call({})\n  transfer({ to, amount }: { to: AccountId, amount: bigint }) {\n    NearPromise.new(to).transfer(amount);\n  }\n}\n"))),(0,o.kt)(i.Z,{value:"\ud83e\udd80 Rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};\nuse near_sdk::{near_bindgen, AccountId, Promise, Balance};\n\n#[near_bindgen]\n#[derive(Default, BorshDeserialize, BorshSerialize)]\npub struct Contract { }\n\n#[near_bindgen]\nimpl Contract {\n  pub fn transfer(&self, to: AccountId, amount: Balance){\n    Promise::new(to).transfer(amount);\n  }\n}\n")))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\uc804\uc1a1\uc774 \uc2e4\ud328\ud558\ub294 \uc720\uc77c\ud55c \uacbd\uc6b0\ub294 \uc218\uc2e0\uc790 \uacc4\uc815\uc774 \uc874\uc7ac \ud558\uc9c0 ",(0,o.kt)("strong",{parentName:"p"},"\uc54a\ub294")," \uacbd\uc6b0\uc785\ub2c8\ub2e4.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\ub2f9\uc2e0\uc758 \uc794\uace0\uac00 \ucee8\ud2b8\ub799\ud2b8 \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \ucda9\ub2f9\ud558\ub294 \ub370 \uc0ac\uc6a9\ub41c\ub2e4\ub294 \uc810\uc744 \uae30\uc5b5\ud558\uc138\uc694. \ub3c8\uc744 \ubcf4\ub0bc \ub54c \ud56d\uc0c1 \ud5a5\ud6c4 \uc2a4\ud1a0\ub9ac\uc9c0 \uc694\uad6c \uc0ac\ud56d\uc744 \ub9cc\uc871\ud560 \uc218 \uc788\ub3c4\ub85d \ucda9\ubd84\ud55c \uae08\uc561\uc744 \ub0a8\uaca8 \ub450\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\ud568\uc218-\ud638\ucd9c"},"\ud568\uc218 \ud638\ucd9c"),(0,o.kt)("p",null,"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub294 \ub2e4\ub978 \ucee8\ud2b8\ub799\ud2b8\uc758 \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc544\ub798 \uc2a4\ub2c8\ud3ab\uc5d0\uc11c \ubc30\ud3ec\ub41c ",(0,o.kt)("a",{parentName:"p",href:"/near_docs/vi/develop/quickstart-guide"},"Hello NEAR")," \ucee8\ud2b8\ub799\ud2b8\uc758 \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\uace0, \ucf5c\ubc31\uc744 \ud1b5\ud574 \ubaa8\ub4e0 \uac83\uc774 \uc62c\ubc14\ub974\uac8c \uc9c4\ud589\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,o.kt)(s.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\ud83c\udf10 JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { NearBindgen, near, call, bytes, NearPromise } from \'near-sdk-js\'\nimport { AccountId } from \'near-sdk-js/lib/types\'\n\nconst HELLO_NEAR: AccountId = "hello-nearverse.testnet";\nconst NO_DEPOSIT: bigint = BigInt(0);\nconst CALL_GAS: bigint = BigInt("10000000000000");\n\n@NearBindgen({})\nclass Contract {\n  @call({})\n  call_method({}): NearPromise {\n    const args = bytes(JSON.stringify({ message: "howdy" }))\n\n    return NearPromise.new(HELLO_NEAR)\n    .functionCall("set_greeting", args, NO_DEPOSIT, CALL_GAS)\n    .then(\n      NearPromise.new(near.currentAccountId())\n      .functionCall("callback", bytes(JSON.stringify({})), NO_DEPOSIT, CALL_GAS)\n    )\n    .asReturn()\n  }\n\n  @call({privateFunction: true})\n  callback({}): boolean {\n    let result, success;\n  \n    try{ result = near.promiseResult(0); success = true }\n    catch{ result = undefined; success = false }\n  \n    if (success) {\n      near.log(`Success!`)\n      return true\n    } else {\n      near.log("Promise failed...")\n      return false\n    }\n  }\n}\n'))),(0,o.kt)(i.Z,{value:"\ud83e\udd80 Rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};\nuse near_sdk::{near_bindgen, env, log, Promise, Gas, PromiseError};\nuse serde_json::json;\n\n#[near_bindgen]\n#[derive(Default, BorshDeserialize, BorshSerialize)]\npub struct Contract { }\n\nconst HELLO_NEAR: &str = "hello-nearverse.testnet";\nconst NO_DEPOSIT: u128 = 0;\nconst CALL_GAS: Gas = Gas(5_000_000_000_000);\n\n#[near_bindgen]\nimpl Contract {\n  pub fn call_method(&self){\n    let args = json!({ "message": "howdy".to_string() })\n              .to_string().into_bytes().to_vec();\n\n    Promise::new(HELLO_NEAR.parse().unwrap())\n    .function_call("set_greeting".to_string(), args, NO_DEPOSIT, CALL_GAS)\n    .then(\n      Promise::new(env::current_account_id())\n      .function_call("callback".to_string(), Vec::new(), NO_DEPOSIT, CALL_GAS)\n    );\n  }\n\n  pub fn callback(&self, #[callback_result] result: Result<(), PromiseError>){\n    if result.is_err(){\n        log!("Something went wrong")\n    }else{\n        log!("Message changed")\n    }\n  }\n}\n')))),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"\uc704\uc5d0 \ud45c\uc2dc\ub41c \uc2a4\ub2c8\ud3ab\uc740 \ub2e4\ub978 \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\ub294 \ub0ae\uc740 \uc218\uc900\uc758 \ubc29\ubc95\uc785\ub2c8\ub2e4. ",(0,o.kt)("a",{parentName:"p",href:"/near_docs/vi/develop/contracts/crosscontract"},"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c \uc139\uc158"),"\uc5d0 \uc124\uba85\ub41c \ubc29\uc2dd\ub300\ub85c \ub2e4\ub978 \ucee8\ud2b8\ub799\ud2b8\ub97c \ud638\ucd9c\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\ud558\uc704-\uacc4\uc815sub-account-\uc0dd\uc131"},"\ud558\uc704 \uacc4\uc815(Sub Account) \uc0dd\uc131"),(0,o.kt)("p",null,"\ucee8\ud2b8\ub799\ud2b8\ub294 \uc9c1\uc811 \ubcf8\uc778\uc758 \ud558\uc704 \uacc4\uc815\uc744 \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,o.kt)("inlineCode",{parentName:"p"},"user.near"),"\ub77c\ub294 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc608\ub85c \ub4e4\uba74, ",(0,o.kt)("inlineCode",{parentName:"p"},"sub.user.near"),"\ub77c\ub294 \ud558\uc704 \uacc4\uc815\uc744 \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uac01 \uacc4\uc815\uc5d0\ub294 \uc790\uccb4 \ud0a4\uac00 \uc788\uc73c\ubbc0\ub85c, \ucee8\ud2b8\ub799\ud2b8\ub294 \ud558\uc704 \uacc4\uc815\uc744 \uc81c\uc5b4\ud560 \uc218 ",(0,o.kt)("strong",{parentName:"p"},"\uc5c6\uc2b5\ub2c8\ub2e4"),"."),(0,o.kt)("p",null,"\ud558\uc704 \uacc4\uc815\uc740 \uacc4\uc815\uc744 \uad6c\uc131\ud558\ub294 \ub370 \uc720\uc6a9\ud569\ub2c8\ub2e4(\uc608\uc2dc : ",(0,o.kt)("inlineCode",{parentName:"p"},"dao.project.near"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"token.project.near"),")."),(0,o.kt)(s.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\ud83c\udf10 JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { NearBindgen, near, call, NearPromise } from 'near-sdk-js'\n\nconst MIN_STORAGE: bigint = BigInt(\"1000000000000000000000\") // 0.001\u24c3\n\n@NearBindgen({})\nclass Contract {\n  @call({payableFunction:true})\n  create({prefix}:{prefix: String}) {\n    const account_id = `${prefix}.${near.currentAccountId()}`\n\n    NearPromise.new(account_id)\n    .createAccount()\n    .transfer(MIN_STORAGE)\n  }\n}\n"))),(0,o.kt)(i.Z,{value:"\ud83e\udd80 Rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};\nuse near_sdk::{near_bindgen, env, Promise, Balance};\n\n#[near_bindgen]\n#[derive(Default, BorshDeserialize, BorshSerialize)]\npub struct Contract { }\n                          \nconst MIN_STORAGE: Balance = 1_000_000_000_000_000_000_000; //0.001\u24c3\n\n#[near_bindgen]\nimpl Contract {\n  pub fn create(&self, prefix: String){\n    let account_id = prefix + "." + &env::current_account_id().to_string();\n    Promise::new(account_id.parse().unwrap())\n    .create_account()\n    .transfer(MIN_STORAGE);\n  }\n}\n')))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"  \uc2a4\ub2c8\ud3ab\uc5d0\uc11c\ub294 \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \uc704\ud574 \uc77c\ubd80 \uc790\uae08\uc744 \uc0c8 \uacc4\uc815\uc73c\ub85c \uc774\uccb4\ud558\uace0 \uc788\uc74c\uc5d0 \uc720\uc758\ud558\uc138\uc694.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"  \ucee8\ud2b8\ub799\ud2b8 \ub0b4\uc5d0\uc11c \uacc4\uc815\uc744 \uc0dd\uc131\ud558\uba74 \uae30\ubcf8\uc801\uc73c\ub85c \ud0a4\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \uacc4\uc815\uc5d0 \ud0a4\ub97c \uba85\uc2dc\uc801\uc73c\ub85c ",(0,o.kt)("a",{parentName:"p",href:"#%ED%82%A4-%EC%B6%94%EA%B0%80"},"\ucd94\uac00"),"\ud558\uc9c0 \uc54a\uac70\ub098 \uc0dd\uc131 \uc2dc ",(0,o.kt)("a",{parentName:"p",href:"#%EC%BB%A8%ED%8A%B8%EB%9E%99%ED%8A%B8-%EB%B0%B0%ED%8F%AC"},"\ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec"),"\ud558\uc9c0 \uc54a\uc73c\uba74 \uacc4\uc815\uc740 ",(0,o.kt)("a",{parentName:"p",href:"/near_docs/vi/concepts/basics/accounts/access-keys#locked-accounts"},"\uc7a0\uae30\uac8c")," \ub429\ub2c8\ub2e4.")),(0,o.kt)("hr",{class:"subsection"}),(0,o.kt)("h4",{id:"\ub2e4\ub978-\uacc4\uc815-\uc0dd\uc131"},"\ub2e4\ub978 \uacc4\uc815 \uc0dd\uc131"),(0,o.kt)("p",null,"\uacc4\uc815\uc740 \uc790\uc2e0\uc758 \uc9c1\uc811\uc801\uc778 \ud558\uc704 \uacc4\uc815\ub9cc \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},".mainnet")," \ub610\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},".testnet")," \uacc4\uc815\uc744 \ub9cc\ub4e4\ub824\uba74, \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},"near")," \ub610\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"testnet")," \ub8e8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 ",(0,o.kt)("inlineCode",{parentName:"p"},"create_account")," \uba54\uc11c\ub4dc\ub97c ",(0,o.kt)("a",{parentName:"p",href:"#%ED%95%A8%EC%88%98-%ED%98%B8%EC%B6%9C"},"\ud638\ucd9c"),"\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)(s.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\ud83c\udf10 JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { NearBindgen, near, call, bytes, NearPromise } from \'near-sdk-js\'\n\nconst MIN_STORAGE: bigint = BigInt("1820000000000000000000"); //0.00182\u24c3\nconst CALL_GAS: bigint = BigInt("28000000000000");\n\n@NearBindgen({})\nclass Contract {\n  @call({})\n  create_account({account_id, public_key}:{account_id: String, public_key: String}) {\n    const args = bytes(JSON.stringify({ \n      "new_account_id": account_id,\n      "new_public_key": public_key \n    }))\n\n    NearPromise.new("testnet")\n    .functionCall("create_account", args, MIN_STORAGE, CALL_GAS);\n  }\n}\n'))),(0,o.kt)(i.Z,{value:"\ud83e\udd80 Rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};\nuse near_sdk::{near_bindgen, Promise, Gas, Balance };\nuse serde_json::json;\n\n#[near_bindgen]\n#[derive(Default, BorshDeserialize, BorshSerialize)]\npub struct Contract { }\n\nconst CALL_GAS: Gas = Gas(28_000_000_000_000);\nconst MIN_STORAGE: Balance = 1_820_000_000_000_000_000_000; //0.00182\u24c3\n\n#[near_bindgen]\nimpl Contract {\n  pub fn create_account(&self, account_id: String, public_key: String){\n    let args = json!({\n                "new_account_id": account_id,\n                "new_public_key": public_key,\n              }).to_string().into_bytes().to_vec();\n\n    // Use "near" to create mainnet accounts\n    Promise::new("testnet".parse().unwrap())\n    .function_call("create_account".to_string(), args, MIN_STORAGE, CALL_GAS);\n  }\n}\n')))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\ucee8\ud2b8\ub799\ud2b8-\ubc30\ud3ec"},"\ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec"),(0,o.kt)("p",null,"\uacc4\uc815\uc744 \uc0dd\uc131\ud560 \ub54c \ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec \uc791\uc5c5\uc744 \uc77c\uad04 \ucc98\ub9ac\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \ud574\ub2f9 \uc791\uc5c5\uc744 \uc704\ud574\uc11c, \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ubc30\ud3ec\ud558\ub824\ub294 \ubc14\uc774\ud2b8 \ucf54\ub4dc\ub97c \ubbf8\ub9ac \ub85c\ub4dc\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)(s.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\ud83e\udd80 Rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};\nuse near_sdk::{near_bindgen, env, Promise, Balance};\n\n#[near_bindgen]\n#[derive(Default, BorshDeserialize, BorshSerialize)]\npub struct Contract { }\n\nconst MIN_STORAGE: Balance = 1_100_000_000_000_000_000_000_000; //1.1\u24c3\nconst HELLO_CODE: &[u8] = include_bytes!("./hello.wasm");\n\n#[near_bindgen]\nimpl Contract {\n  pub fn create_hello(&self, prefix: String){\n    let account_id = prefix + "." + &env::current_account_id().to_string();\n    Promise::new(account_id.parse().unwrap())\n    .create_account()\n    .transfer(MIN_STORAGE)\n    .deploy_contract(HELLO_CODE.to_vec());\n  }\n}\n')))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\ucee8\ud2b8\ub799\ud2b8\uac00 \ubc30\ud3ec\ub41c \uacc4\uc815\uc5d0 \uc561\uc138\uc2a4 \ud0a4\uac00 ",(0,o.kt)("strong",{parentName:"p"},"\uc5c6\ub294")," \uacbd\uc6b0 \uc774\ub97c \uc7a0\uae34 \ucee8\ud2b8\ub799\ud2b8\ub77c\uace0 \ud569\ub2c8\ub2e4. \uacc4\uc815\uc774 \uc7a0\uaca8 \uc788\uc73c\uba74 \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc11c\uba85\ud560 \uc218 \uc5c6\uc73c\ubbc0\ub85c, \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc ",(0,o.kt)("strong",{parentName:"p"},"\ub0b4\uc5d0\uc11c\ub9cc")," \uc791\uc5c5\uc744 \uc218\ud589 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\ud0a4-\ucd94\uac00"},"\ud0a4 \ucd94\uac00"),(0,o.kt)("p",null,"Action\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc0c8 \uacc4\uc815\uc744 \ub9cc\ub4e4 \ub54c \uc0dd\uc131\ub41c \uacc4\uc815\uc5d0\ub294 ",(0,o.kt)("a",{parentName:"p",href:"/near_docs/vi/concepts/basics/accounts/access-keys"},"\uc561\uc138\uc2a4 \ud0a4"),"\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \uc989, \uc774 \uacbd\uc6b0 ",(0,o.kt)("strong",{parentName:"p"},"\ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc11c\uba85\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"),"(\uc608: \ucee8\ud2b8\ub799\ud2b8 \uc5c5\ub370\uc774\ud2b8, \uacc4\uc815 \uc0ad\uc81c, \uc1a1\uae08)."),(0,o.kt)("p",null,"\uacc4\uc815\uc5d0 \ud0a4\ub97c \ucd94\uac00\ud558\ub824\uba74, \ub2e4\uc74c \ub450 \uac00\uc9c0 \uc635\uc158 \uc911 \ud558\ub098\ub97c \uc0ac\uc6a9\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"add_access_key"),": \uc9c0\uc815\ub41c \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ud2b9\uc815 \uba54\uc11c\ub4dc\ub9cc \ud638\ucd9c\ud560 \uc218 \uc788\ub294 \ud0a4\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"add_full_access_key"),": \uacc4\uc815\uc5d0 \ub300\ud55c \uc804\uccb4 \uc561\uc138\uc2a4 \uad8c\ud55c\uc774 \uc788\ub294 \ud0a4\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4.")),(0,o.kt)("br",null),(0,o.kt)(s.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\ud83c\udf10 JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { NearBindgen, near, call, NearPromise } from 'near-sdk-js'\nimport { PublicKey } from 'near-sdk-js/lib/types'\n\nconst MIN_STORAGE: bigint = BigInt(\"1000000000000000000000\") // 0.001\u24c3\n\n@NearBindgen({})\nclass Contract {\n  @call({})\n  create_hello({prefix, public_key}:{prefix: String, public_key: PublicKey}) {\n    const account_id = `${prefix}.${near.currentAccountId()}`\n\n    NearPromise.new(account_id)\n    .createAccount()\n    .transfer(MIN_STORAGE)\n    .addFullAccessKey(public_key)\n  }\n}\n"))),(0,o.kt)(i.Z,{value:"\ud83e\udd80 Rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};\nuse near_sdk::{near_bindgen, env, Promise, Balance, PublicKey};\n\n#[near_bindgen]\n#[derive(Default, BorshDeserialize, BorshSerialize)]\npub struct Contract { }\n\nconst MIN_STORAGE: Balance = 1_100_000_000_000_000_000_000_000; //1.1\u24c3\nconst HELLO_CODE: &[u8] = include_bytes!("./hello.wasm");\n\n#[near_bindgen]\nimpl Contract {\n  pub fn create_hello(&self, prefix: String, public_key: PublicKey){\n    let account_id = prefix + "." + &env::current_account_id().to_string();\n    Promise::new(account_id.parse().unwrap())\n    .create_account()\n    .transfer(MIN_STORAGE)\n    .deploy_contract(HELLO_CODE.to_vec())\n    .add_full_access_key(public_key);\n  }\n}\n')))),(0,o.kt)("p",null,'\uc2e4\uc81c\ub85c \ucd94\uac00\ud558\ub294 \uac83\uc740 "\uacf5\uac1c \ud0a4"\uc785\ub2c8\ub2e4. \uc989, \uac1c\uc778 \ud0a4\ub97c \ubcf4\uc720\ud55c \uc0ac\ub78c\uc740 \uc0c8\ub85c\uc6b4 \uc561\uc138\uc2a4 \ud0a4\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.'),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\ucee8\ud2b8\ub799\ud2b8\uac00 \ubc30\ud3ec\ub41c \uacc4\uc815\uc5d0 \uc561\uc138\uc2a4 \ud0a4\uac00 ",(0,o.kt)("strong",{parentName:"p"},"\uc5c6\ub294")," \uacbd\uc6b0 \uc774\ub97c \uc7a0\uae34 \ucee8\ud2b8\ub799\ud2b8\ub77c\uace0 \ud569\ub2c8\ub2e4. \uacc4\uc815\uc774 \uc7a0\uaca8 \uc788\uc73c\uba74 \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc11c\uba85\ud560 \uc218 \uc5c6\uc73c\ubbc0\ub85c \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc ",(0,o.kt)("strong",{parentName:"p"},"\ub0b4\uc5d0\uc11c\ub9cc")," \uc791\uc5c5\uc744 \uc218\ud589 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\uacc4\uc815-\uc0ad\uc81c"},"\uacc4\uc815 \uc0ad\uc81c"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"delete_account")," \uc791\uc5c5\uc740 \ub2e4\uc74c \ub450 \uac00\uc9c0 \uc2dc\ub098\ub9ac\uc624\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\uc77c\uad04 Action\uc758 ",(0,o.kt)("strong",{parentName:"li"},"\ub9c8\uc9c0\ub9c9")," \uc791\uc5c5\uc73c\ub85c \uacc4\uc815\uc744 \uc0ad\uc81c\ud569\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ol"},"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub85c \ud558\uc5ec\uae08 \uc790\uccb4 \uacc4\uc815\uc744 \uc0ad\uc81c\ud558\ub3c4\ub85d \ud569\ub2c8\ub2e4.")),(0,o.kt)(s.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\ud83c\udf10 JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { NearBindgen, near, call, NearPromise } from 'near-sdk-js'\nimport { AccountId } from 'near-sdk-js/lib/types'\n\nconst MIN_STORAGE: bigint = BigInt(\"1000000000000000000000\") // 0.001\u24c3\n\n@NearBindgen({})\nclass Contract {\n  @call({})\n  create_delete({prefix, beneficiary}:{prefix: String, beneficiary: AccountId}) {\n    const account_id = `${prefix}.${near.currentAccountId()}`\n\n    NearPromise.new(account_id)\n    .createAccount()\n    .transfer(MIN_STORAGE)\n    .deleteAccount(beneficiary)\n  }\n\n  @call({})\n  self_delete({beneficiary}:{beneficiary: AccountId}) {\n    NearPromise.new(near.currentAccountId())\n    .deleteAccount(beneficiary)\n  }\n}\n"))),(0,o.kt)(i.Z,{value:"\ud83e\udd80 Rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};\nuse near_sdk::{near_bindgen, env, Promise, Balance, AccountId};\n\n#[near_bindgen]\n#[derive(Default, BorshDeserialize, BorshSerialize)]\npub struct Contract { }\n                          \nconst MIN_STORAGE: Balance = 1_000_000_000_000_000_000_000; //0.001\u24c3\n\n#[near_bindgen]\nimpl Contract {\n  pub fn create_delete(&self, prefix: String, beneficiary: AccountId){\n    let account_id = prefix + "." + &env::current_account_id().to_string();\n    Promise::new(account_id.parse().unwrap())\n    .create_account()\n    .transfer(MIN_STORAGE)\n    .delete_account(beneficiary);\n  }\n\n  pub fn self_delete(beneficiary: AccountId){\n    Promise::new(env::current_account_id())\n    .delete_account(beneficiary);\n  }\n}\n')))),(0,o.kt)("admonition",{title:"\ud1a0\ud070 \uc190\uc2e4",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"\uc218\ub839\uc790 \uacc4\uc815\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0, \uc790\uae08\uc740 ",(0,o.kt)("a",{parentName:"p",href:"/near_docs/vi/concepts/basics/token-loss"},"\ubc38\ub9ac\ub370\uc774\ud130\ub4e4\uc5d0\uac8c \ubd84\ubc30\ub429\ub2c8\ub2e4"),".")),(0,o.kt)("admonition",{title:"\ud1a0\ud070 \uc190\uc2e4",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"\uc0c8 \uacc4\uc815\uc5d0 \uc790\uae08\uc744 \uc870\ub2ec\ud558\ub294 \ub370 ",(0,o.kt)("inlineCode",{parentName:"p"},"delete"),"\ub97c \uc0ac\uc6a9\ud558\uc9c0 ",(0,o.kt)("strong",{parentName:"p"},"\ub9c8\uc138\uc694"),". \uacc4\uc815\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0, \ud1a0\ud070\uc744 \uc783\uac8c \ub420 \uac83\uc785\ub2c8\ub2e4.")))}k.isMDXComponent=!0}}]);