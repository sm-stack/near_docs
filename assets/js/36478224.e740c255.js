"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1114],{90346:(e,t,n)=>{n.d(t,{Ey:()=>c,O2:()=>p,SQ:()=>d});var a=n(67294),r=n(65488),l=n(85162),u=n(1841),s=n.n(u),i=n(95665),o=n.n(i);function p(e){var t=e.children;return Array.isArray(t)||(t=[t]),a.createElement(r.Z,{className:"language-tabs",groupId:"code-tabs"},t.map((function(e,t){return a.createElement(l.Z,{value:e.props.value,label:e.props.value},e)})))}function d(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=n.children,l=n.url,u=n.start,i=n.end,o=n.fname;if("Github"==e.props.mdxType)return c({url:l,start:u,end:i,language:t,fname:o});if("CodeBlock"==e.props.mdxType)return a.createElement(s(),{fname:o,language:t},r);return e}(e,n)})),1==t.length?a.createElement(l.Z,{value:0,label:t[0].props.fname},t[0]):a.createElement(r.Z,{className:"file-tabs"},t.map((function(e,t){return a.createElement(l.Z,{value:t,label:e.props.fname},e)})))}function c(e){var t=e.url,n=e.start,r=e.end,l=e.language,u=e.fname,s=t+"#";return n&&r&&(s+="L"+n+"-L"+r+"#"),a.createElement(o(),{language:l,fname:u},s)}},85162:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function u(e){var t=e.children,n=e.hidden,u=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,u),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),l=n(86010),u=n(72389),s=n(67392),i=n(7094),o=n(12466);const p="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,n,u=e.lazy,c=e.block,m=e.defaultValue,k=e.values,g=e.groupId,b=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=k?k:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,s.l)(f,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==N&&!f.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.U)(),_=y.tabGroupChoices,C=y.setTabGroupChoices,w=(0,r.useState)(N),E=w[0],T=w[1],S=[],I=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var Z=_[g];null!=Z&&Z!==E&&f.some((function(e){return e.value===Z}))&&T(Z)}var A=function(e){var t=e.currentTarget,n=S.indexOf(t),a=f[n].value;a!==E&&(I(t),T(a),null!=g&&C(g,String(a)))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=S.indexOf(e.currentTarget)+1;n=null!=(a=S[r])?a:S[0];break;case"ArrowLeft":var l,u=S.indexOf(e.currentTarget)-1;n=null!=(l=S[u])?l:S[S.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},b)},f.map((function(e){var t=e.value,n=e.label,u=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return S.push(e)},onKeyDown:x,onFocus:A,onClick:A},u,{className:(0,l.Z)("tabs__item",d,null==u?void 0:u.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,u.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},37840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),u=n(90346),s=["components"],i={id:"prototyping",sidebar_label:"\uc2e0\uc18d\ud55c \ud504\ub85c\ud1a0\ud0c0\uc774\ud551",title:"\ucee8\ud2b8\ub799\ud2b8 \uc5c5\uadf8\ub808\uc774\ub4dc: \uc2e0\uc18d\ud55c \ud504\ub85c\ud1a0\ud0c0\uc774\ud551"},o="\uc2e0\uc18d\ud55c \ud504\ub85c\ud1a0\ud0c0\uc774\ud551",p={unversionedId:"sdk/rust/building/prototyping",id:"sdk/rust/building/prototyping",title:"\ucee8\ud2b8\ub799\ud2b8 \uc5c5\uadf8\ub808\uc774\ub4dc: \uc2e0\uc18d\ud55c \ud504\ub85c\ud1a0\ud0c0\uc774\ud551",description:"",source:"@site/../docs/sdk/rust/building/prototyping.md",sourceDirName:"sdk/rust/building",slug:"/sdk/rust/building/prototyping",permalink:"/near_docs/sdk/rust/building/prototyping",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/building/prototyping.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"Mar 9, 2023",frontMatter:{id:"prototyping",sidebar_label:"\uc2e0\uc18d\ud55c \ud504\ub85c\ud1a0\ud0c0\uc774\ud551",title:"\ucee8\ud2b8\ub799\ud2b8 \uc5c5\uadf8\ub808\uc774\ub4dc: \uc2e0\uc18d\ud55c \ud504\ub85c\ud1a0\ud0c0\uc774\ud551"},sidebar:"sdk",previous:{title:"Basic Instructions",permalink:"/near_docs/sdk/rust/building/basics"},next:{title:"\uc0ac\ud6c4 \ucc98\ub9ac \ub3c4\uad6c",permalink:"/near_docs/sdk/rust/building/post-processing"}},d={},c=[{value:"\uc65c \uc774\ub7f0 \uc77c\uc774 \ubc1c\uc0dd\ud560\uae4c\uc694?",id:"\uc65c-\uc774\ub7f0-\uc77c\uc774-\ubc1c\uc0dd\ud560\uae4c\uc694",level:3},{value:"\uc774\ub7ec\ud55c \uc624\ub958\ub97c \ubc29\uc9c0\ud558\ub824\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c \ud560\uae4c\uc694?",id:"\uc774\ub7ec\ud55c-\uc624\ub958\ub97c-\ubc29\uc9c0\ud558\ub824\uba74-\uc5b4\ub5bb\uac8c-\ud574\uc57c-\ud560\uae4c\uc694",level:3},{value:"\uc2e0\uc18d\ud55c \ud504\ub85c\ud1a0\ud0c0\uc774\ud551: \ud56d\uc0c1 \ubaa8\ub4e0 \ud56d\ubaa9 \uc0ad\uc81c",id:"\uc2e0\uc18d\ud55c-\ud504\ub85c\ud1a0\ud0c0\uc774\ud551-\ud56d\uc0c1-\ubaa8\ub4e0-\ud56d\ubaa9-\uc0ad\uc81c",level:2},{value:"1. <code>rm -rf neardev &amp;&amp; near dev-deploy</code>",id:"1-rm--rf-neardev--near-dev-deploy",level:3},{value:"2. \ucee8\ud2b8\ub799\ud2b8 \uacc4\uc815 \uc0ad\uc81c &amp; \uc7ac\uc0dd\uc131",id:"2-\ucee8\ud2b8\ub799\ud2b8-\uacc4\uc815-\uc0ad\uc81c--\uc7ac\uc0dd\uc131",level:3}],m={toc:c};function k(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\uc2e0\uc18d\ud55c-\ud504\ub85c\ud1a0\ud0c0\uc774\ud551"},"\uc2e0\uc18d\ud55c \ud504\ub85c\ud1a0\ud0c0\uc774\ud551"),(0,l.kt)("p",null,"\ucee8\ud2b8\ub799\ud2b8\uc758 \uc778\ud130\ud398\uc774\uc2a4\ub97c \ubcc0\uacbd\ud558\uace0 \ub2e4\uc2dc \ubc30\ud3ec\ud558\uba74 \ub2e4\uc74c \uc624\ub958\uac00 \ud45c\uc2dc\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Cannot deserialize the contract state.\n")),(0,l.kt)("h3",{id:"\uc65c-\uc774\ub7f0-\uc77c\uc774-\ubc1c\uc0dd\ud560\uae4c\uc694"},"\uc65c \uc774\ub7f0 \uc77c\uc774 \ubc1c\uc0dd\ud560\uae4c\uc694?"),(0,l.kt)("p",null,"\ucee8\ud2b8\ub799\ud2b8\uac00 \uc2e4\ud589\ub418\uba74, NEAR \ub7f0\ud0c0\uc784\uc740 \ub514\uc2a4\ud06c\uc5d0\uc11c \uc9c1\ub82c\ud654\ub41c \uc0c1\ud0dc\ub97c \uc77d\uace0 \ud604\uc7ac \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub85c\ub4dc\ub97c \uc2dc\ub3c4\ud569\ub2c8\ub2e4. \ucf54\ub4dc\uac00 \ubcc0\uacbd\ub418\uc5c8\uc9c0\ub9cc \uc9c1\ub82c\ud654\ub41c \uc0c1\ud0dc\uac00 \ub3d9\uc77c\ud558\uac8c \uc720\uc9c0\ub418\uba74, \ub7f0\ud0c0\uc784\uc740 \uc774\ub97c \uc218\ud589\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"\uc774\ub7ec\ud55c-\uc624\ub958\ub97c-\ubc29\uc9c0\ud558\ub824\uba74-\uc5b4\ub5bb\uac8c-\ud574\uc57c-\ud560\uae4c\uc694"},"\uc774\ub7ec\ud55c \uc624\ub958\ub97c \ubc29\uc9c0\ud558\ub824\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c \ud560\uae4c\uc694?"),(0,l.kt)("p",null,"\uc544\uc9c1 \uc5f0\uad6c \ubc0f \uac1c\ubc1c \ub2e8\uacc4\uc5d0 \uc788\ub294 \uacbd\uc6b0, \ud504\ub85c\ud1a0\ud0c0\uc785\uc744 \ube4c\ub4dc\ud558\uace0 \ub85c\uceec \ub610\ub294 ",(0,l.kt)("a",{parentName:"p",href:"/concepts/basics/networks"},"\ud14c\uc2a4\ud2b8\ub137"),"\uc5d0 \ubc30\ud3ec\ud558\uba74 \ubcc0\uacbd \uc0ac\ud56d\uc744 \uc218\uc815\ud560 \ub54c \uc774\uc804 \ucee8\ud2b8\ub799\ud2b8 \uc0c1\ud0dc\ub97c \ubaa8\ub450 \uc0ad\uc81c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \uc218\ud589\ud558\ub294 \uba87 \uac00\uc9c0 \ubc29\ubc95\uc740 \uc544\ub798\ub97c \ucc38\uace0\ud558\uc138\uc694."),(0,l.kt)("p",null,"\ubcf4\ub2e4 \uc548\uc815\uc801\uc778 \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud560 \uc900\ube44\uac00 \ub418\uba74, \uc0c1\ud0dc\ub97c \ubaa8\ub450 \uc0ad\uc81c\ud558\uc9c0 \uc54a\uace0 \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub418\ub294 \uba87 \uac00\uc9c0 ",(0,l.kt)("a",{parentName:"p",href:"/near_docs/develop/upgrade#migrating-the-state"},"\uc0dd\uc0b0 \uc804\ub7b5"),'\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \ucee8\ud2b8\ub799\ud2b8\uac00 "\uc2e0\ub8b0\ud560 \uc218 \uc788\ub294 \ubaa8\ub4dc"(\uad00\ub9ac\uc790\uac00 ',(0,l.kt)("a",{parentName:"p",href:"/concepts/basics/accounts/access-keys"},"\uc804\uccb4 \uc561\uc138\uc2a4 \ud0a4"),"\ub97c \uc81c\uc5b4\ud558\ub294 \u200b\u200b\uacbd\uc6b0)\uc5d0\uc11c \ucee4\ubba4\ub2c8\ud2f0 \uad00\ub9ac \ubaa8\ub4dc(\ub354 \uc774\uc0c1 \uc804\uccb4 \uc561\uc138\uc2a4 \ud0a4\uac00 \uc5c6\uc74c)\ub85c \uc804\ud658\ub418\uba74, \ucee8\ud2b8\ub799\ud2b8\ub85c \ud558\uc5ec\uae08 ",(0,l.kt)("a",{parentName:"p",href:"/near_docs/develop/upgrade#programmatic-update"},"\uc790\uccb4\uc801\uc73c\ub85c \uc5c5\uadf8\ub808\uc774\ub4dc"),"\ud558\ub3c4\ub85d \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\uc2e0\uc18d\ud55c-\ud504\ub85c\ud1a0\ud0c0\uc774\ud551-\ud56d\uc0c1-\ubaa8\ub4e0-\ud56d\ubaa9-\uc0ad\uc81c"},"\uc2e0\uc18d\ud55c \ud504\ub85c\ud1a0\ud0c0\uc774\ud551: \ud56d\uc0c1 \ubaa8\ub4e0 \ud56d\ubaa9 \uc0ad\uc81c"),(0,l.kt)("p",null,"\ubaa8\ub4e0 \uacc4\uc815 \uc0c1\ud0dc\ub97c \uc0ad\uc81c\ud558\ub294 \ubc29\ubc95\uc5d0\ub294 \ub450 \uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"rm -rf neardev && near dev-deploy")),(0,l.kt)("li",{parentName:"ol"},"\ucee8\ud2b8\ub799\ud2b8 \uacc4\uc815 \uc0ad\uc81c / \uc7ac\uc0dd\uc131")),(0,l.kt)("p",null,"\ub450 \uacbd\uc6b0 \ubaa8\ub450, \ub2e4\uc74c \uc608\uc2dc\ub97c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/near-examples/rust-status-message"},"rust-status-message")," \uc608\uc81c \ucee8\ud2b8\ub799\ud2b8\uc758 \uad6c\uc870\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)(u.O2,{mdxType:"CodeTabs"},(0,l.kt)(u.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,l.kt)(u.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/rust-status-message/blob/b5fa6f2a30559d56a3a3ea52da8c26c5d3907606/src/lib.rs",start:"5",end:"29",mdxType:"Github"}))),(0,l.kt)("p",null,"\uc774 \ucee8\ud2b8\ub799\ud2b8\ub97c \ud14c\uc2a4\ud2b8\ub137\uc5d0 \ubc30\ud3ec\ud558\uace0 \ub2e4\uc74c\uacfc \uac19\uc774 \ud638\ucd9c\ud55c\ub2e4\uace0 \uac00\uc815\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'near call [contract] set_status \'{"message": "lol"}\' --accountId you.testnet\nnear view [contract] get_status \'{"account_id": "you.testnet"}\'\n')),(0,l.kt)("p",null,"\uc774\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"set_status"),"\uc5d0 \ub300\ud55c \ud638\ucd9c\ub85c \uc124\uc815\ud55c \uba54\uc2dc\uc9c0(\uc774 \uacbd\uc6b0\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},'"lol"'),")\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774 \uc2dc\uc810\uc5d0\uc11c \ucee8\ud2b8\ub799\ud2b8\uac00 \ubc30\ud3ec\ub418\uace0, \uc0c1\ud0dc\uac00 \ub0b4\ubd80\uc5d0 \uc874\uc7ac\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774\uc81c \uac01 \uacc4\uc815\uc5d0 \ub300\ud574 \ub450 \uc885\ub958\uc758 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\ub3c4\ub85d \ucee8\ud2b8\ub799\ud2b8\ub97c \ubcc0\uacbd\ud55c\ub2e4\uace0 \uac00\uc815\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize)]\npub struct StatusMessage {\n    taglines: LookupMap<AccountId, String>,\n    bios: LookupMap<AccountId, String>,\n}\n\nimpl Default for StatusMessage {\n    fn default() -> Self {\n        Self {\n            taglines: LookupMap::new(b"r"),\n            bios: LookupMap::new(b"b"),\n        }\n    }\n}\n\n#[near_bindgen]\nimpl StatusMessage {\n    pub fn set_tagline(&mut self, message: String) {\n        let account_id = env::signer_account_id();\n        self.taglines.insert(&account_id, &message);\n    }\n\n    pub fn get_tagline(&self, account_id: AccountId) -> Option<String> {\n        return self.taglines.get(&account_id);\n    }\n\n    pub fn set_bio(&mut self, message: String) {\n        let account_id = env::signer_account_id();\n        self.bios.insert(&account_id, &message);\n    }\n\n    pub fn get_bio(&self, account_id: AccountId) -> Option<String> {\n        return self.bios.get(&account_id);\n    }\n}\n')),(0,l.kt)("p",null,"\ub2e4\uc2dc \uc774 \ucee8\ud2b8\ub799\ud2b8\ub97c \ube4c\ub4dc \ubc0f \ubc30\ud3ec\ud558\uba74\uc11c, \uc0c8 ",(0,l.kt)("inlineCode",{parentName:"p"},"taglines"),"\uc774 \uc774\uc804 ",(0,l.kt)("inlineCode",{parentName:"p"},"records")," LookupMap(",(0,l.kt)("inlineCode",{parentName:"p"},'LookupMap::new(b"r".to_vec())'),"\uc5d0 \uc758\ud574 \uc124\uc815\ub41c \uc811\ub450\uc0ac ",(0,l.kt)("inlineCode",{parentName:"p"},"r"),")\uacfc \uac19\uc740 \uc811\ub450\uc0ac\ub97c \uac00\uc9c0\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"you.testnet"),"\uc5d0 \ub300\ud55c tagline\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},'"lol"'),"\uc774 \ub418\uc5b4\uc57c \ud55c\ub2e4\uace0 \uc0dd\uac01\ud558\uace0 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ub300\ud574 ",(0,l.kt)("inlineCode",{parentName:"p"},"near view"),'\ub97c \uc2e4\ud589\ud558\uba74, "Cannot deserialize" \uba54\uc2dc\uc9c0\uac00 \ub098\ud0c0\ub0a0 \uac83\uc785\ub2c8\ub2e4. \uc5b4\ub5bb\uac8c \ud574\uc57c \ud558\ub098\uc694?'),(0,l.kt)("h3",{id:"1-rm--rf-neardev--near-dev-deploy"},"1. ",(0,l.kt)("inlineCode",{parentName:"h3"},"rm -rf neardev && near dev-deploy")),(0,l.kt)("p",null,"\uc0c8 \ud504\ub85c\uc81d\ud2b8\ub97c \ucc98\uc74c \uc2dc\uc791\ud560 \ub54c \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\ub294 \uac00\uc7a5 \ube60\ub978 \ubc29\ubc95\uc740 ",(0,l.kt)("a",{parentName:"p",href:"/concepts/basics/accounts/creating-accounts"},(0,l.kt)("inlineCode",{parentName:"a"},"dev-deploy")),"\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"near dev-deploy [--wasmFile ./path/to/compiled.wasm]\n")),(0,l.kt)("p",null,"\uc774\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uba87 \uac00\uc9c0 \uc791\uc5c5\uc744 \uc218\ud589\ud569\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"dev-1626793583587-89195915741581"),"\uacfc \uac19\uc740 \uc774\ub984\uc744 \uac00\uc9c4 \uc0c8 \ud14c\uc2a4\ud2b8\ub137 \uacc4\uc815\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\uc774 \uacc4\uc815 \uc774\ub984\uc744 \ud504\ub85c\uc81d\ud2b8 \ub0b4 ",(0,l.kt)("inlineCode",{parentName:"li"},"neardev")," \ud3f4\ub354\uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\uc774 \uacc4\uc815\uc5d0 \ub300\ud55c \uac1c\uc778 \ud0a4\ub97c ",(0,l.kt)("inlineCode",{parentName:"li"},"~/.near-credentials")," \ud3f4\ub354\uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\uc774 \uacc4\uc815\uc5d0 \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\ub97c \ubc30\ud3ec\ud569\ub2c8\ub2e4.")),(0,l.kt)("p",null,"\ub2e4\uc74c \ubc88\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"dev-deploy"),"\ub97c \uc2e4\ud589\ud558\uba74, \uc774\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"neardev")," \ud3f4\ub354\ub97c \ud655\uc778\ud55c \ub2e4\uc74c, \uc0c8 \uacc4\uc815\uc744 \ub9cc\ub4e4\uc9c0 \uc54a\uace0 \ub3d9\uc77c\ud55c \uacc4\uc815\uc5d0 \ub2e4\uc2dc \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uadf8\ub7ec\ub098 \uc704\uc758 \uc608\uc5d0\uc11c, \uc6b0\ub9ac\ub294 \uacc4\uc815 \uc0c1\ud0dc\ub97c \uc0ad\uc81c\ud558\uace0 \uc2f6\uc2b5\ub2c8\ub2e4. \uc774\ub294 \uc5b4\ub5bb\uac8c \ud560\uae4c\uc694?"),(0,l.kt)("p",null,"\uac00\uc7a5 \uc26c\uc6b4 \ubc29\ubc95\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"neardev")," \ud3f4\ub354\ub97c \uc0ad\uc81c\ud55c \ub2e4\uc74c, ",(0,l.kt)("inlineCode",{parentName:"p"},"near dev-deploy"),"\ub97c \ub2e4\uc2dc \uc2e4\ud589\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \uc774\ub807\uac8c \ud558\uba74 \uc0c1\ud0dc\ub97c \ube44\uc6b4 \ucc44\ub85c \uc644\uc804\ud788 \uc0c8\ub85c\uc6b4 \ud14c\uc2a4\ud2b8\ub137 \uacc4\uc815\uc774 \uc0dd\uc131\ub418\uace0, \uc5c5\ub370\uc774\ud2b8\ub41c \ucee8\ud2b8\ub799\ud2b8\uac00 \ubc30\ud3ec\ub429\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"2-\ucee8\ud2b8\ub799\ud2b8-\uacc4\uc815-\uc0ad\uc81c--\uc7ac\uc0dd\uc131"},"2. \ucee8\ud2b8\ub799\ud2b8 \uacc4\uc815 \uc0ad\uc81c & \uc7ac\uc0dd\uc131"),(0,l.kt)("p",null,"\ub04a\uc784\uc5c6\uc774 \ubcc0\ud654\ud558\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"dev-*")," \uacc4\uc815\uc774 \uc544\ub2cc \uc608\uce21 \uac00\ub2a5\ud55c \uacc4\uc815 \uc774\ub984\uc744 \uac16\uace0 \uc2f6\ub2e4\uba74, \uac00\uc7a5 \uc88b\uc740 \ubc29\ubc95\uc740 \ud558\uc704 \uacc4\uc815\uc744 \ub9cc\ub4dc\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Create sub-account"',title:'"Create','sub-account"':!0},"near create-account app-name.you.testnet --masterAccount you.testnet\n")),(0,l.kt)("p",null,"\uadf8\ub7f0 \ub2e4\uc74c \uc5ec\uae30\uc5d0 \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Deploy to sub-account"',title:'"Deploy',to:!0,'sub-account"':!0},"near deploy --accountId app-name.you.testnet [--wasmFile ./path/to/compiled.wasm]\n")),(0,l.kt)("p",null,"\uc774 \uacbd\uc6b0 \ubaa8\ub4e0 \ucee8\ud2b8\ub799\ud2b8 \uc0c1\ud0dc\ub97c \uc0ad\uc81c\ud558\uace0 \ub2e4\uc2dc \uc2dc\uc791\ud558\ub824\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c \ud560\uae4c\uc694? \ud558\uc704 \uacc4\uc815\uc744 \uc0ad\uc81c\ud558\uace0 \ub2e4\uc2dc \ub9cc\ub4dc\uc138\uc694."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Delete sub-account"',title:'"Delete','sub-account"':!0},"near delete app-name.you.testnet you.testnet\n")),(0,l.kt)("p",null,"\uc774\ub807\uac8c \ud558\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"app-name.you.testnet")," \uacc4\uc815\uc5d0 \ub0a8\uc544 \uc788\ub294 \ubaa8\ub4e0 \uc790\uae08\uc774 ",(0,l.kt)("inlineCode",{parentName:"p"},"you.testnet"),"\ub85c \ubcf4\ub0b4\uc9c0\uace0, ",(0,l.kt)("inlineCode",{parentName:"p"},"app-name.you.testnet"),"\uc5d0 \ubc30\ud3ec\ub41c \ucee8\ud2b8\ub799\ud2b8\ub294 \uc0c1\ud0dc\ub97c \ud3ec\ud568\ud55c \ubaa8\ub4e0 \uac83\uc774 \uc0ad\uc81c\ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774\uc81c \ud558\uc704 \uacc4\uc815\uc744 \uc0dd\uc131\ud558\uace0, \uc704\uc758 \uba85\ub839\uc744 \uc0ac\uc6a9\ud558\uc5ec \ub2e4\uc2dc \ubc30\ud3ec\ud558\uba74 \ucc98\uc74c \ubc30\ud3ec\ud588\uc744 \ub54c\uc640 \uac19\uc774 \ube48 \uc0c1\ud0dc\uac00 \ub429\ub2c8\ub2e4."))}k.isMDXComponent=!0}}]);