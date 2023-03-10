"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2734],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4740:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],c={id:"balance-changes",title:"\uc794\uace0 \ubcc0\uacbd",sidebar_label:"\uc794\uace0 \ubcc0\uacbd"},s=void 0,i={unversionedId:"integrator/balance-changes",id:"integrator/balance-changes",title:"\uc794\uace0 \ubcc0\uacbd",description:"\uc804\uc81c \uc870\uac74",source:"@site/../docs/6.integrator/balance.md",sourceDirName:"6.integrator",slug:"/integrator/balance-changes",permalink:"/near_docs/vi/integrator/balance-changes",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/6.integrator/balance.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"9 thg 3, 2023",frontMatter:{id:"balance-changes",title:"\uc794\uace0 \ubcc0\uacbd",sidebar_label:"\uc794\uace0 \ubcc0\uacbd"},sidebar:"\ud1b5\ud569",previous:{title:"\uac70\ub798 \ud1b5\ud569",permalink:"/near_docs/vi/integrator/exchange-integration"},next:{title:"\uacc4\uc815",permalink:"/near_docs/vi/integrator/accounts"}},p={},u=[{value:"\uc804\uc81c \uc870\uac74",id:"prerequisites",level:2},{value:"\ub124\uc774\ud2f0\ube0c NEAR (\u24c3)",id:"native-near",level:3},{value:"\ud1a0\ud070 \uc804\uc1a1",id:"send-tokens",level:2},{value:"\uc794\uace0 \ubcc0\ud654 \ubcf4\uae30",id:"view-balance-changes",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prerequisites"},"\uc804\uc81c \uc870\uac74"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wallet.testnet.near.org/create"},"NEAR \uacc4\uc815")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/tools/near-cli"},"NEAR-CLI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/tools/near-cli#near-login"},(0,o.kt)("inlineCode",{parentName:"a"},"near login")),"\uc744 \uc2e4\ud589\ud558\uc5ec \ub85c\uceec\uc5d0 \uc800\uc7a5\ub41c \ubc1c\uc2e0\uc790 \uacc4\uc815\uc758 \uc790\uaca9 \uc99d\uba85")),(0,o.kt)("h3",{id:"native-near"},"\ub124\uc774\ud2f0\ube0c NEAR (\u24c3)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\uacc4\uc815\uc758 \uc794\uace0 \ubcc0\uacbd\uc740 ",(0,o.kt)("a",{parentName:"p",href:"/api/rpc/setup#view-account-changes"},"\ubcc0\uacbd RPC \uc5d4\ub4dc\ud3ec\uc778\ud2b8"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ucd94\uc801\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. NEAR-CLI\ub97c \uc0ac\uc6a9\ud558\uc5ec \uacc4\uc815\uc5d0 \ud1a0\ud070\uc744 \ubcf4\ub0b8 \ub2e4\uc74c, \ubcc0\uacbd \uc0ac\ud56d\uc744 \ud655\uc778\ud558\uc5ec \uc774\ub97c \ud14c\uc2a4\ud2b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,o.kt)("h2",{id:"send-tokens"},"\ud1a0\ud070 \uc804\uc1a1"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/tools/near-cli#near-send"},(0,o.kt)("inlineCode",{parentName:"a"},"near send")),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud1a0\ud070\uc744 \uc804\uc1a1\ud569\ub2c8\ub2e4.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"near send sender.testnet receiver.testnet 1\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ub2e4\uc74c\uacfc \uac19\uc740 \uacb0\uacfc\uac00 \ud130\ubbf8\ub110\uc5d0 \ud45c\uc2dc\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Sending 1 NEAR to receiver.testnet from sender.testnet\nTransaction Id 4To336bYcoGc3LMucJPMk6fMk5suKfCrdNotrRtTxqDy\nTo see the transaction in the transaction explorer, please open this url in your browser\nhttps://explorer.testnet.near.org/transactions/4To336bYcoGc3LMucJPMk6fMk5suKfCrdNotrRtTxqDy\n")),(0,o.kt)("h2",{id:"view-balance-changes"},"\uc794\uace0 \ubcc0\ud654 \ubcf4\uae30"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://explorer.testnet.near.org/"},"NEAR \uc775\uc2a4\ud50c\ub85c\ub7ec"),"\uc5d0\uc11c \ud2b8\ub79c\uc7ad\uc158 URL\uc744 \uc5f4\uace0, ",(0,o.kt)("inlineCode",{parentName:"li"},"BLOCK HASH"),"\ub97c \ubcf5\uc0ac\ud569\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BLOCK HASH"),"\uc640 accountId\ub97c \uc0ac\uc6a9\ud558\uc5ec, ",(0,o.kt)("a",{parentName:"li",href:"/api/rpc/setup#view-account-changes"},"\ubcc0\uacbd RPC \uc5d4\ub4dc\ud3ec\uc778\ud2b8"),"\ub97c \ucffc\ub9ac\ud558\uc5ec \ubcc0\ud654\ub97c \ud655\uc778\ud569\ub2c8\ub2e4.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"HTTPie\ub97c \uc0ac\uc6a9\ud55c \ucffc\ub9ac \uc608\uc2dc:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'http post https://rpc.testnet.near.org jsonrpc=2.0 id=dontcare \\\n    method=EXPERIMENTAL_changes \\\n    \'params:={\n        "block_id": "CJ24svU3C9FaULVjcNVnWuVZjK6mNaQ8p6AMyUDMqB37",\n        "changes_type": "account_changes",\n        "account_ids": ["sender.testnet"]\n    }\'\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,"\uc751\ub2f5 \uc608\uc2dc: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "dontcare",\n  "jsonrpc": "2.0",\n  "result": {\n    "block_hash": "BRgE4bjmUo33jmiVBcZaWGkSLVeL7TTi4ZxYTvJdPbB9",\n    "changes": [\n      {\n        "cause": {\n          "tx_hash": "4To336bYcoGc3LMucJPMk6fMk5suKfCrdNotrRtTxqDy",\n          "type": "transaction_processing"\n        },\n        "change": {\n          "account_id": "sender.testnet",\n          "amount": "11767430014412510000000000",\n          "code_hash": "11111111111111111111111111111111",\n          "locked": "0",\n          "storage_paid_at": 0,\n          "storage_usage": 806\n        },\n        "type": "account_update"\n      }\n    ]\n  }\n}\n'))),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\ub610\ub294 accountId\ub9cc \ud544\uc694\ud55c ",(0,o.kt)("a",{parentName:"p",href:"/api/rpc/setup#view-account"},(0,o.kt)("inlineCode",{parentName:"a"},"view_account")," \ucffc\ub9ac"),"\ub97c \ud1b5\ud574 \uacc4\uc815 \uc794\uc561\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"HTTPie \uc694\uccad \uc608\uc2dc:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'http post https://rpc.testnet.near.org jsonrpc=2.0 id=dontcare method=query \\\nparams:=\'{\n  "request_type": "view_account",\n  "finality": "final",\n  "account_id": "sender.testnet"\n}\'\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\uc751\ub2f5 \uc608\uc2dc:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "dontcare",\n  "jsonrpc": "2.0",\n  "result": {\n    "amount": "11767430683960197500000000",\n    "block_hash": "HUiscpNyoyR5z1UdnZhAJLNz1G8UjBrFTecSYqCrvdfW",\n    "block_height": 50754977,\n    "code_hash": "11111111111111111111111111111111",\n    "locked": "0",\n    "storage_paid_at": 0,\n    "storage_usage": 806\n  }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\ucc38\uace0:")," \uac00\uc2a4 \uac00\uaca9\uc740 \ube14\ub85d \uac04\uc5d0 \ubcc0\uacbd\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uacb0\uc815\ub860\uc801 \uac00\uc2a4 \ube44\uc6a9\uc774 \uc788\ub294 \ud2b8\ub79c\uc7ad\uc158\uc758 \uacbd\uc6b0\uc5d0\ub3c4, \ub4dc\ub294 NEAR\uc758 \ube44\uc6a9\uc774 \ub2e4\ub97c \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,o.kt)("a",{parentName:"p",href:"https://docs.near.org/api/rpc/setup#gas-price"},(0,o.kt)("inlineCode",{parentName:"a"},"gas_price")," RPC \uc5d4\ub4dc\ud3ec\uc778\ud2b8"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ucd5c\uadfc \ube14\ub85d\uc758 \uac00\uc2a4 \uac00\uaca9\uc744 \ucffc\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("hr",null),(0,o.kt)("admonition",{title:"\uc9c8\ubb38\uc774 \uc788\uc73c\uc2e0\uac00\uc694?",type:"tip"},(0,o.kt)("a",{href:"https://stackoverflow.com/questions/tagged/nearprotocol"},(0,o.kt)("h8",null,"StackOverflow\uc5d0 \ubb3c\uc5b4\ubcf4\uc138\uc694!"))))}m.isMDXComponent=!0}}]);