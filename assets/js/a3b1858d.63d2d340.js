"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9199],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>m});var r=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},s=Object.keys(n);for(r=0;r<s.length;r++)t=s[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)t=s[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var c=r.createContext({}),p=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},u=function(n){var e=p(n.components);return r.createElement(c.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},l=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,s=n.originalType,c=n.parentName,u=o(n,["components","mdxType","originalType","parentName"]),l=p(t),m=i,g=l["".concat(c,".").concat(m)]||l[m]||d[m]||s;return t?r.createElement(g,a(a({ref:e},u),{},{components:t})):r.createElement(g,a({ref:e},u))}));function m(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var s=t.length,a=new Array(s);a[0]=l;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=n,o.mdxType="string"==typeof n?n:i,a[1]=o;for(var p=2;p<s;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},72399:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var r=t(87462),i=t(63366),s=(t(67294),t(3905)),a=["components"],o={id:"accounts",title:"\uacc4\uc815",sidebar_label:"\uacc4\uc815"},c=void 0,p={unversionedId:"integrator/accounts",id:"integrator/accounts",title:"\uacc4\uc815",description:"\uc18c\uac1c",source:"@site/../docs/6.integrator/accounts.md",sourceDirName:"6.integrator",slug:"/integrator/accounts",permalink:"/near_docs/integrator/accounts",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/6.integrator/accounts.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"Mar 9, 2023",frontMatter:{id:"accounts",title:"\uacc4\uc815",sidebar_label:"\uacc4\uc815"},sidebar:"\ud1b5\ud569",previous:{title:"\uc794\uace0 \ubcc0\uacbd",permalink:"/near_docs/integrator/balance-changes"},next:{title:"\ud2b8\ub79c\uc7ad\uc158 \uc0dd\uc131",permalink:"/near_docs/integrator/create-transactions"}},u={},d=[{value:"\uc18c\uac1c",id:"introduction",level:2},{value:"\ud568\uc218 \ud638\ucd9c\uc5d0 \uc758\ud55c \uc804\uc1a1",id:"transfer-from-function-call",level:2}],l={toc:d};function m(n){var e=n.components,t=(0,i.Z)(n,a);return(0,s.kt)("wrapper",(0,r.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"introduction"},"\uc18c\uac1c"),(0,s.kt)("p",null,"\uae30\ubcf8\uc801\uc778 \uc815\ubcf4\ub294 ",(0,s.kt)("a",{parentName:"p",href:"/concepts/basics/accounts/model"},"\uacc4\uc815\uc5d0 \ub300\ud55c \ubb38\uc11c"),"\ub97c \ucc38\uace0\ud558\uc138\uc694."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\uac70\ub798\uc18c\uc758 \uacbd\uc6b0, NEAR\ub294 \ud2b8\ub79c\uc7ad\uc158 \ube44\uc6a9\uc744 \uc9c0\ubd88\ud558\uc9c0 \uc54a\uace0 \uacc4\uc815\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\ub294 ",(0,s.kt)("a",{parentName:"li",href:"https://nomicon.io/DataStructures/Account.html#implicit-account-ids"},"\uc554\uc2dc\uc801 \uacc4\uc815(Implicit Account)")," \uc0dd\uc131\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/integrator/implicit-accounts"},"\uc774 \uac00\uc774\ub4dc"),"\uc758 \ub2e8\uacc4\uc5d0 \ub530\ub77c \uc554\uc2dc\uc801 \uacc4\uc815\uc744 \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("li",{parentName:"ul"},"\uacc4\uc815\uc5d0\ub294 \uc2a4\ud1a0\ub9ac\uc9c0 \ube44\uc6a9\uc744 \ucda9\ub2f9\ud560 \uc218 \uc788\uc744 \ub9cc\ud07c \ucda9\ubd84\ud55c \ud1a0\ud070\uc774 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4. \uc774\ub294 \ud604\uc7ac (\ud604\uc7ac) \ubc14\uc774\ud2b8\ub2f9 0.0001 NEAR \ub9cc\ud07c\uc758 \uac00\uaca9\uc744 \uac00\uc9c0\uace0 \uc788\uace0, \ud558\ub098\uc758 \uc561\uc138\uc2a4 \ud0a4\uac00 \uc788\ub294 \uacc4\uc815\uc5d0 \ub300\ud574 \ucd5c\uc18c \uc794\uc561\uc740 0.0182 NEAR\uc785\ub2c8\ub2e4. ",(0,s.kt)("a",{parentName:"li",href:"https://docs.near.org/api/rpc/setup#protocol-config"},(0,s.kt)("inlineCode",{parentName:"a"},"protocol-config"))," RPC \uc5d4\ub4dc\ud3ec\uc778\ud2b8\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc2e4\uc2dc\uac04 \uc2a4\ud1a0\ub9ac\uc9c0 \uac00\uaca9\uc744 \ucffc\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc2a4\ud1a0\ub9ac\uc9c0 \uc218\uc218\ub8cc\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,s.kt)("a",{parentName:"li",href:"https://near.org/papers/economics-in-sharded-blockchain/#transaction-and-storage-fees"},"\uacbd\uc81c\ud559 \ub17c\ubb38 \ub0b4 \uc774 \uc139\uc158"),"\uc744 \ucc38\uace0\ud558\uc138\uc694.")),(0,s.kt)("h2",{id:"transfer-from-function-call"},"\ud568\uc218 \ud638\ucd9c\uc5d0 \uc758\ud55c \uc804\uc1a1"),(0,s.kt)("p",null,"NEAR\uc5d0\uc11c\ub294 \ud568\uc218 \ud638\ucd9c \ub0b4\uc5d0\uc11c \uc804\uc1a1\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. \ub354 \uc911\uc694\ud55c \uac83\uc740, \uacc4\uc815\uc774 \uc77c\ubd80 \ucee8\ud2b8\ub799\ud2b8\uc640 \ud568\uaed8 \ubc30\ud3ec\ub420 \ub54c, \ud574\ub2f9 \uacc4\uc815\uc5d0\uc11c \ud1a0\ud070\uc744 \uc804\uc1a1\ud558\ub294 \uc720\uc77c\ud55c \ubc29\ubc95\uc740 \ud568\uc218 \ud638\ucd9c\uc744 \ud1b5\ud574\uc11c\ub9cc \uac00\ub2a5\ud558\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4. \ub530\ub77c\uc11c \uac70\ub798\uc18c\ub294 \ud568\uc218 \ud638\ucd9c\uc744 \ud1b5\ud55c \uc804\uc1a1\ub3c4 \uc9c0\uc6d0\ud574\uc57c \ud569\ub2c8\ub2e4. \ub2e4\uc74c\uacfc \uac19\uc740 \uc811\uadfc \ubc29\uc2dd\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4."),(0,s.kt)("p",null,"\uac70\ub798\uc18c\ub294 ",(0,s.kt)("a",{parentName:"p",href:"/api/rpc/setup#block"},"\ub192\uc774\ubcc4\ub85c \ube14\ub85d\uc744 \ucffc\ub9ac\ud558\uc5ec")," \uac01 \ub192\uc774\uc5d0\uc11c \ube14\ub85d\uc744 \uac00\uc838\uc624\uace0, \ubaa8\ub4e0 \ube14\ub85d\uc5d0 \ub300\ud574 ",(0,s.kt)("a",{parentName:"p",href:"/api/rpc/setup#chunk"},"\uccad\ud06c\ub97c \ucffc\ub9ac\ud558\uc5ec")," \ube14\ub85d\uc5d0 \ud3ec\ud568\ub41c \ud2b8\ub79c\uc7ad\uc158\uc744 \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uac01 \ud2b8\ub79c\uc7ad\uc158\uc5d0 \ub300\ud574, \uac70\ub798\uc18c\ub294 ",(0,s.kt)("a",{parentName:"p",href:"/api/rpc/setup#transaction-status-with-receipts"},"\uc0c1\ud0dc\ub97c \ucffc\ub9ac\ud558\uc5ec")," \ud2b8\ub79c\uc7ad\uc158\uc5d0\uc11c \uc0dd\uc131\ub41c Receipt\ub97c \ud655\uc778\ud569\ub2c8\ub2e4. \uac70\ub798\uc18c\ub294 \uc8fc\uc18c\ub85c\uc758 \uc804\uc1a1\uc5d0\ub9cc \uad00\uc2ec\uc774 \uc788\uae30 \ub54c\ubb38\uc5d0, ",(0,s.kt)("inlineCode",{parentName:"p"},"Transfer")," Action\ub9cc \ud3ec\ud568\ud558\uace0 ",(0,s.kt)("inlineCode",{parentName:"p"},"predecessor_id"),"\uac00 ",(0,s.kt)("inlineCode",{parentName:"p"},"system"),"\uc774 \uc544\ub2cc Receipt\ub9cc \ud544\ud130\ub9c1\ud558\uba74 \ub429\ub2c8\ub2e4(",(0,s.kt)("inlineCode",{parentName:"p"},"predecessor_id"),"\uac00 ",(0,s.kt)("inlineCode",{parentName:"p"},"system"),"\uacfc \uac19\uc740 Receipt\ub294 ",(0,s.kt)("a",{parentName:"p",href:"https://nomicon.io/RuntimeSpec/Refunds.html"},"\ud658\ubd88"),"\ub429\ub2c8\ub2e4). \uadf8\ub7f0 \ub2e4\uc74c, Receipt\uc758 \uc131\uacf5 \uc5ec\ubd80\ub97c \ud655\uc778\ud558\ub824\uba74, ",(0,s.kt)("inlineCode",{parentName:"p"},"receipts_outcome"),"\uc5d0\uc11c ",(0,s.kt)("inlineCode",{parentName:"p"},"receipt_id"),"\uc744 \ucc3e\uc544 \uc0c1\ud0dc\uac00 ",(0,s.kt)("inlineCode",{parentName:"p"},"SuccessValue"),"\uc778\uc9c0 \ud655\uc778\ud558\ub294 \uac83\uc73c\ub85c \ucda9\ubd84\ud569\ub2c8\ub2e4."),(0,s.kt)("p",null,"\uc544\ub2c8\uba74 \uac70\ub798\uc18c\ub294 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/near/nearcore/tree/master/chain/indexer"},"\uc778\ub371\uc11c \ud504\ub808\uc784\uc6cc\ud06c"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec, Receipt\ub97c \ud3ec\ud568\ud558\ub294 \uc628\uccb4\uc778 \ub370\uc774\ud130\ub97c \uc778\ub371\uc2f1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc778\ub371\uc11c\uc758 \uc0ac\uc6a9 \uc608\ub294 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/near/nearcore/tree/master/tools/indexer/example"},"\uc5ec\uae30"),"\uc5d0\uc11c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("p",null,"\uc544\ub798\uc5d0\ub294 \ud568\uc218 \ud638\ucd9c\uc744 \ud1b5\ud574 \uc804\uc1a1\uc744 \uc218\ud589\ud558\ub294 \ub370 \uc0ac\uc6a9\ub420 \uac00\ub2a5\uc131\uc774 \uc788\ub294 \ucee8\ud2b8\ub799\ud2b8\uc758 \uc608\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\ub77d\uc5c5 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uc804\uc1a1\uc758 \uc608")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"evgeny.lockup.near")," \ucee8\ud2b8\ub799\ud2b8\uac00 \ubc30\ud3ec\ub418\uba74, \ub2e4\uc74c\uacfc \uac19\uc774 \uc18c\uc720\uc790\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"> near view evgeny.lockup.near get_owner_account_id\nView call: evgeny.lockup.near.get_owner_account_id()\n'evgeny.near'\n")),(0,s.kt)("p",null,"\uc774\uc81c \ub2e4\uc74c \ud638\ucd9c\uc744 \ud1b5\ud574 \uc7a0\uae08 \ud574\uc81c\ub41c \ud1a0\ud070 \uc77c\ubd80(1 NEAR)\ub97c \uc804\uc1a1\ud558\ub824\uace0 \ud569\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'near call evgeny.lockup.near transfer \'{"amount":"1000000000000000000000000", "receiver_id": "evgeny.near"}\' --accountId=evgeny.near\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\ucc38\uace0"),": \uc544\ub798 \uc751\ub2f5\uc740 \ub2e4\uc74c\uacfc \uac19\uc774 \ud2b8\ub79c\uc7ad\uc158 \ud574\uc2dc \ubc0f NEAR \uacc4\uc815\uc73c\ub85c RPC\ub97c \uce58\uba74 \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'http post https://rpc.testnet.near.org jsonrpc=2.0 id=txstatus method=EXPERIMENTAL_tx_status \\\n  params:=\'[ "GXP8YaSonoN2eBY6dB3FbMN2NyYD2JeJJvKdvbL4Jmb2", "evgeny.near"]\'\n')),(0,s.kt)("details",null,(0,s.kt)("summary",null,"\uc751\ub2f5 \uc608\uc2dc: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "123",\n  "jsonrpc": "2.0",\n  "result": {\n    "receipts": [\n      {\n        "predecessor_id": "evgeny.near",\n        "receipt": {\n          "Action": {\n            "actions": [\n              {\n                "FunctionCall": {\n                  "args": "eyJhbW91bnQiOiIxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwIiwicmVjZWl2ZXJfaWQiOiJldmdlbnkubmVhciJ9",\n                  "deposit": "0",\n                  "gas": 100000000000000,\n                  "method_name": "transfer"\n                }\n              }\n            ],\n            "gas_price": "186029458",\n            "input_data_ids": [],\n            "output_data_receivers": [],\n            "signer_id": "evgeny.near",\n            "signer_public_key": "ed25519:BVRTxEEMx3gFceSgJtnvPFbSnPDwwUzHe6KGduRh5Byq"\n          }\n        },\n        "receipt_id": "CyJL22SYqt26qgh2XVnk9MGfvzgyiiq5Lny7DdbTdTWU",\n        "receiver_id": "evgeny.lockup.near"\n      },\n      {\n        "predecessor_id": "evgeny.lockup.near",\n        "receipt": {\n          "Action": {\n            "actions": [\n              {\n                "Transfer": {\n                  "deposit": "1000000000000000000000000"\n                }\n              }\n            ],\n            "gas_price": "186029458",\n            "input_data_ids": [],\n            "output_data_receivers": [],\n            "signer_id": "evgeny.near",\n            "signer_public_key": "ed25519:BVRTxEEMx3gFceSgJtnvPFbSnPDwwUzHe6KGduRh5Byq"\n          }\n        },\n        "receipt_id": "EvHfj4fUyVuLBRKNdCZmFGr4WfqwYf7YCbzFsRGFTFJC",\n        "receiver_id": "evgeny.near"\n      },\n      {\n        "predecessor_id": "system",\n        "receipt": {\n          "Action": {\n            "actions": [\n              {\n                "Transfer": {\n                  "deposit": "19200274886926125000"\n                }\n              }\n            ],\n            "gas_price": "0",\n            "input_data_ids": [],\n            "output_data_receivers": [],\n            "signer_id": "evgeny.near",\n            "signer_public_key": "ed25519:BVRTxEEMx3gFceSgJtnvPFbSnPDwwUzHe6KGduRh5Byq"\n          }\n        },\n        "receipt_id": "J1bBKH43nXHYg4NuS97R1PFzdZchrJboVAdRsK5NRrAv",\n        "receiver_id": "evgeny.near"\n      },\n      {\n        "predecessor_id": "system",\n        "receipt": {\n          "Action": {\n            "actions": [\n              {\n                "Transfer": {\n                  "deposit": "18655658845681462514128"\n                }\n              }\n            ],\n            "gas_price": "0",\n            "input_data_ids": [],\n            "output_data_receivers": [],\n            "signer_id": "evgeny.near",\n            "signer_public_key": "ed25519:BVRTxEEMx3gFceSgJtnvPFbSnPDwwUzHe6KGduRh5Byq"\n          }\n        },\n        "receipt_id": "6PFaxnNvK5r6qxBq5WfV9uGjoNM6qjhHwLehLP1qak9d",\n        "receiver_id": "evgeny.near"\n      }\n    ],\n    "receipts_outcome": [\n      {\n        "block_hash": "9boEKq9G1UFsEuzmuQrxh5dkRc8xsv8PSPGEkYiTyRLj",\n        "id": "CyJL22SYqt26qgh2XVnk9MGfvzgyiiq5Lny7DdbTdTWU",\n        "outcome": {\n          "executor_id": "evgeny.lockup.near",\n          "gas_burnt": 3574640311481,\n          "logs": [\n            "Transferring 1000000000000000000000000 to account @evgeny.near"\n          ],\n          "receipt_ids": [\n            "EvHfj4fUyVuLBRKNdCZmFGr4WfqwYf7YCbzFsRGFTFJC",\n            "6PFaxnNvK5r6qxBq5WfV9uGjoNM6qjhHwLehLP1qak9d"\n          ],\n          "status": {\n            "SuccessReceiptId": "EvHfj4fUyVuLBRKNdCZmFGr4WfqwYf7YCbzFsRGFTFJC"\n          },\n          "tokens_burnt": "357464031148100000000"\n        },\n        "proof": []\n      },\n      {\n        "block_hash": "7qn4BjmMD4QbyVvMa8QEzm7h5YuhoGTFTgLeNMUp85UQ",\n        "id": "EvHfj4fUyVuLBRKNdCZmFGr4WfqwYf7YCbzFsRGFTFJC",\n        "outcome": {\n          "executor_id": "evgeny.near",\n          "gas_burnt": 223182562500,\n          "logs": [],\n          "receipt_ids": ["J1bBKH43nXHYg4NuS97R1PFzdZchrJboVAdRsK5NRrAv"],\n          "status": {\n            "SuccessValue": ""\n          },\n          "tokens_burnt": "22318256250000000000"\n        },\n        "proof": [\n          {\n            "direction": "Right",\n            "hash": "AwHdk5dushTSXHFBt3R5MiexjiXybwdnEaB7L9iJ5F6t"\n          }\n        ]\n      },\n      {\n        "block_hash": "46788Ay85YGnQaH5tfbboQNWJs3gyXsPbcWzRyxqw56K",\n        "id": "J1bBKH43nXHYg4NuS97R1PFzdZchrJboVAdRsK5NRrAv",\n        "outcome": {\n          "executor_id": "evgeny.near",\n          "gas_burnt": 0,\n          "logs": [],\n          "receipt_ids": [],\n          "status": {\n            "SuccessValue": ""\n          },\n          "tokens_burnt": "0"\n        },\n        "proof": []\n      },\n      {\n        "block_hash": "7qn4BjmMD4QbyVvMa8QEzm7h5YuhoGTFTgLeNMUp85UQ",\n        "id": "6PFaxnNvK5r6qxBq5WfV9uGjoNM6qjhHwLehLP1qak9d",\n        "outcome": {\n          "executor_id": "evgeny.near",\n          "gas_burnt": 0,\n          "logs": [],\n          "receipt_ids": [],\n          "status": {\n            "SuccessValue": ""\n          },\n          "tokens_burnt": "0"\n        },\n        "proof": [\n          {\n            "direction": "Left",\n            "hash": "9RRJpH5VdDxsHpp323EshcAauV5wUNDyW9FpEJBRXXq8"\n          }\n        ]\n      }\n    ],\n    "status": {\n      "SuccessValue": ""\n    },\n    "transaction": {\n      "actions": [\n        {\n          "FunctionCall": {\n            "args": "eyJhbW91bnQiOiIxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwIiwicmVjZWl2ZXJfaWQiOiJldmdlbnkubmVhciJ9",\n            "deposit": "0",\n            "gas": 100000000000000,\n            "method_name": "transfer"\n          }\n        }\n      ],\n      "hash": "GXP8YaSonoN2eBY6dB3FbMN2NyYD2JeJJvKdvbL4Jmb2",\n      "nonce": 6,\n      "public_key": "ed25519:BVRTxEEMx3gFceSgJtnvPFbSnPDwwUzHe6KGduRh5Byq",\n      "receiver_id": "evgeny.lockup.near",\n      "signature": "ed25519:4nfzTMpQJKCY3KaqUTFig4Xy9uxwbMeQpMJjtNKsXmwiVqgcVSWRguZEgZM8L2x1jvdpZHsYjLCxc9cSBamXuXPH",\n      "signer_id": "evgeny.near"\n    },\n    "transaction_outcome": {\n      "block_hash": "4u7maz2U43W4DPxqQE8KoRNi5dTRHrAsKsFk2qDQsQEw",\n      "id": "GXP8YaSonoN2eBY6dB3FbMN2NyYD2JeJJvKdvbL4Jmb2",\n      "outcome": {\n        "executor_id": "evgeny.near",\n        "gas_burnt": 2428086459116,\n        "logs": [],\n        "receipt_ids": ["CyJL22SYqt26qgh2XVnk9MGfvzgyiiq5Lny7DdbTdTWU"],\n        "status": {\n          "SuccessReceiptId": "CyJL22SYqt26qgh2XVnk9MGfvzgyiiq5Lny7DdbTdTWU"\n        },\n        "tokens_burnt": "242808645911600000000"\n      },\n      "proof": []\n    }\n  }\n}\n'))),(0,s.kt)("p",null,"\ubcf4\uc2dc\ub2e4\uc2dc\ud53c \uc774 \ud568\uc218 \ud638\ucd9c\uc5d0\uc11c \uc0dd\uc131\ub41c Receipt\uac00 4\uac1c \uc788\uc2b5\ub2c8\ub2e4. \uc704\uc5d0\uc11c \uc5b8\uae09\ud55c \uae30\uc900\uc744 \uc801\uc6a9\ud558\uba74 ",(0,s.kt)("inlineCode",{parentName:"p"},"receipts")," \ud544\ub4dc\uc5d0\uc11c \uc774 \uac1d\uccb4\ub97c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "predecessor_id": "evgeny.lockup.near",\n  "receipt": {\n    "Action": {\n      "actions": [\n        {\n          "Transfer": {\n            "deposit": "1000000000000000000000000"\n          }\n        }\n      ],\n      "gas_price": "186029458",\n      "input_data_ids": [],\n      "output_data_receivers": [],\n      "signer_id": "evgeny.near",\n      "signer_public_key": "ed25519:BVRTxEEMx3gFceSgJtnvPFbSnPDwwUzHe6KGduRh5Byq"\n    }\n  },\n  "receipt_id": "EvHfj4fUyVuLBRKNdCZmFGr4WfqwYf7YCbzFsRGFTFJC",\n  "receiver_id": "evgeny.near"\n}\n')),(0,s.kt)("p",null,"\uc774\ub294 ",(0,s.kt)("inlineCode",{parentName:"p"},"Transfer")," Action\uc744 \ud3ec\ud568\ud558\uace0, \uc5ec\uae30\uc11c ",(0,s.kt)("inlineCode",{parentName:"p"},"predecessor_id"),"\uc740 ",(0,s.kt)("inlineCode",{parentName:"p"},"system"),"\uc774 \uc544\ub2d9\ub2c8\ub2e4. \uc774\uc81c rpc \ubc18\ud658 \uacb0\uacfc\uc758 ",(0,s.kt)("inlineCode",{parentName:"p"},"receipts_outcome")," \ud544\ub4dc\uc5d0\uc11c ",(0,s.kt)("inlineCode",{parentName:"p"},"EvHfj4fUyVuLBRKNdCZmFGr4WfqwYf7YCbzFsRGFTFJC"),"\uc5d0\uc11c \ub3d9\uc77c\ud55c Receipt ID\ub97c \ucc3e\uc544 \uc2e4\ud589 \uc0c1\ud0dc\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc73c\uba70, \uc774\ub294 \ub2e4\uc74c \uc2e4\ud589 \uacb0\uacfc\ub85c \uc774\uc5b4\uc9d1\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "block_hash": "7qn4BjmMD4QbyVvMa8QEzm7h5YuhoGTFTgLeNMUp85UQ",\n  "id": "EvHfj4fUyVuLBRKNdCZmFGr4WfqwYf7YCbzFsRGFTFJC",\n  "outcome": {\n    "executor_id": "evgeny.near",\n    "gas_burnt": 223182562500,\n    "logs": [],\n    "receipt_ids": ["J1bBKH43nXHYg4NuS97R1PFzdZchrJboVAdRsK5NRrAv"],\n    "status": {\n      "SuccessValue": ""\n    },\n    "tokens_burnt": "22318256250000000000"\n  },\n  "proof": [\n    {\n      "direction": "Right",\n      "hash": "AwHdk5dushTSXHFBt3R5MiexjiXybwdnEaB7L9iJ5F6t"\n    }\n  ]\n}\n')),(0,s.kt)("p",null,"\uc0c1\ud0dc\uc5d0\ub294 ",(0,s.kt)("inlineCode",{parentName:"p"},"SuccessValue"),"\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc73c\uba70, Receipt\uac00 \uc131\uacf5\ud588\uc74c\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc6b0\ub9ac\ub294 ",(0,s.kt)("inlineCode",{parentName:"p"},"1000000000000000000000000")," yoctoNEAR \ub610\ub294 1 NEAR\uac00 \uc131\uacf5\uc801\uc73c\ub85c \uc804\uc1a1\ub418\uc5c8\uc74c\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\ub2e4\uc911 \uc11c\uba85(Multisig) \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uc804\uc1a1 \uc608\uc2dc")),(0,s.kt)("p",null,"\uc774\ub984\uc5d0\uc11c \uc54c \uc218 \uc788\ub4ef\uc774 \ub2e4\uc911 \uc11c\uba85 \ucee8\ud2b8\ub799\ud2b8\ub294 \ud2b8\ub79c\uc7ad\uc158\uc744 \ud655\uc778\ud558\uae30 \uc704\ud574 \ub2e4\uc911 \uc11c\uba85\uc744 \uc0ac\uc6a9\ud558\ubbc0\ub85c, \ub2e4\uc911 \uc11c\uba85 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uc218\ud589\ud558\ub294 \uc791\uc5c5\uc5d0\ub294 \uc5ec\ub7ec \ud2b8\ub79c\uc7ad\uc158\uc774 \ud3ec\ud568\ub429\ub2c8\ub2e4. \ub2e4\uc74c \uc608\uc5d0\uc11c\ub294 \ub450 \uac1c\uc758 \ud655\uc778\uc774 \ud544\uc694\ud55c \ub2e4\uc911 \uc11c\uba85 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uc804\uc1a1\uc774 \uc218\ud589\ub418\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\uccab \ubc88\uca30 \ub2e8\uacc4: ",(0,s.kt)("inlineCode",{parentName:"li"},"add_request_and_confirm"),"\uc744 \ud1b5\ud574, \ub2e4\uc911 \uc11c\uba85 \ucee8\ud2b8\ub799\ud2b8\uc758 \uccab \ubc88\uc9f8 \ud655\uc778 \uc791\uc5c5\uc744 \uc2dc\uc791\ud569\ub2c8\ub2e4. \ub2e4\uc911 \uc11c\uba85 \ucee8\ud2b8\ub799\ud2b8 ",(0,s.kt)("inlineCode",{parentName:"li"},"multsigtest.testnet"),"\ub294 ",(0,s.kt)("inlineCode",{parentName:"li"},"bowen"),"\uc5d0\uac8c 1 NEAR\ub97c \uc804\uc1a1\ud558\ub824\uace0 \ud558\uba70, \uba3c\uc800 \uc694\uccad\uacfc \ud568\uaed8 ",(0,s.kt)("inlineCode",{parentName:"li"},"add_request_and_confirm"),"\ub97c \ud638\ucd9c\ud558\ub294 \ud2b8\ub79c\uc7ad\uc158\uc744 \ubcf4\ub0c5\ub2c8\ub2e4.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "request": {\n    "receiver_id": "bowen",\n    "actions": [\n      {\n        "type": "Transfer",\n        "amount": "1000000000000000000000000"\n      }\n    ]\n  }\n}\n')),(0,s.kt)("p",null,"\uc774\ub294 1 NEAR\ub97c ",(0,s.kt)("inlineCode",{parentName:"p"},"bowen"),"\uc5d0 \uc804\uc1a1\ud558\ub824\uace0 \ud558\ub294 \uac83\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4. \uc774 \ud2b8\ub79c\uc7ad\uc158\uc740 \uc791\uc5c5\uc744 \uae30\ub85d\ud560 \ubfd0 \uc2e4\uc81c \uc804\uc1a1\uc744 \uc218\ud589\ud558\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158 \uacb0\uacfc\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,s.kt)("details",null,(0,s.kt)("summary",null,"\uc751\ub2f5 \uc608\uc2dc: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "123",\n  "jsonrpc": "2.0",\n  "result": {\n    "receipts": [\n      {\n        "predecessor_id": "system",\n        "receipt": {\n          "Action": {\n            "actions": [\n              {\n                "Transfer": {\n                  "deposit": "3069687780141648922140"\n                }\n              }\n            ],\n            "gas_price": "0",\n            "input_data_ids": [],\n            "output_data_receivers": [],\n            "signer_id": "multisigtest.testnet",\n            "signer_public_key": "ed25519:JDewsbE7nz6orFD4zJ3mVzqhfcaoSD6Hmi5as3AHHiTt"\n          }\n        },\n        "receipt_id": "4qgDptd7Wm6vswAhWMCsVpTjBEkmLJEUxSNVQS1wu3rD",\n        "receiver_id": "multisigtest.testnet"\n      }\n    ],\n    "receipts_outcome": [\n      {\n        "block_hash": "6uJWHTvUrtFQAurUyfuAfy9EdoR9FhLodGh44aHJta6m",\n        "id": "94LiYwKJEDherHMNg9fqLy9ShFTDiQiUN3nDaGmLZwth",\n        "outcome": {\n          "executor_id": "multisigtest.testnet",\n          "gas_burnt": 8024094920263,\n          "logs": [],\n          "receipt_ids": ["4qgDptd7Wm6vswAhWMCsVpTjBEkmLJEUxSNVQS1wu3rD"],\n          "status": {\n            "SuccessValue": "OA=="\n          },\n          "tokens_burnt": "802409492026300000000"\n        },\n        "proof": [\n          {\n            "direction": "Left",\n            "hash": "GedzmwRkxA5VkT8GLBCnrPUmnEhWPXadPmiq4Ho1s9pH"\n          },\n          {\n            "direction": "Right",\n            "hash": "GirkzdS9YpsAz5fXuL5T3rXd93aRcnXNAdXYi241qpWK"\n          }\n        ]\n      },\n      {\n        "block_hash": "4JyQ6guJKeWZxxXrKndLDuSa5URuirmBi6RzsbKYFsBE",\n        "id": "4qgDptd7Wm6vswAhWMCsVpTjBEkmLJEUxSNVQS1wu3rD",\n        "outcome": {\n          "executor_id": "multisigtest.testnet",\n          "gas_burnt": 0,\n          "logs": [],\n          "receipt_ids": [],\n          "status": {\n            "SuccessValue": ""\n          },\n          "tokens_burnt": "0"\n        },\n        "proof": []\n      }\n    ],\n    "status": {\n      "SuccessValue": "OA=="\n    },\n    "transaction": {\n      "actions": [\n        {\n          "FunctionCall": {\n            "args": "eyJyZXF1ZXN0Ijp7InJlY2VpdmVyX2lkIjoiYm93ZW4iLCJhY3Rpb25zIjpbeyJ0eXBlIjoiVHJhbnNmZXIiLCJhbW91bnQiOiIxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwIn1dfX0=",\n            "deposit": "0",\n            "gas": 30000000000000,\n            "method_name": "add_request_and_confirm"\n          }\n        }\n      ],\n      "hash": "FGREJkC1e8y95Rc35iD1LVRiDy1WcAZhAxxkSinfb2mL",\n      "nonce": 10,\n      "public_key": "ed25519:JDewsbE7nz6orFD4zJ3mVzqhfcaoSD6Hmi5as3AHHiTt",\n      "receiver_id": "multisigtest.testnet",\n      "signature": "ed25519:3NUKXd4uj2eEBqGQtRAxkTFW7UfG44tjvQNNHBDvN9ZswTTMRsDrMJSd1U3GqWF7QToqWQR9J8atNEVTemSWYw41",\n      "signer_id": "multisigtest.testnet"\n    },\n    "transaction_outcome": {\n      "block_hash": "6uJWHTvUrtFQAurUyfuAfy9EdoR9FhLodGh44aHJta6m",\n      "id": "FGREJkC1e8y95Rc35iD1LVRiDy1WcAZhAxxkSinfb2mL",\n      "outcome": {\n        "executor_id": "multisigtest.testnet",\n        "gas_burnt": 2428204963618,\n        "logs": [],\n        "receipt_ids": ["94LiYwKJEDherHMNg9fqLy9ShFTDiQiUN3nDaGmLZwth"],\n        "status": {\n          "SuccessReceiptId": "94LiYwKJEDherHMNg9fqLy9ShFTDiQiUN3nDaGmLZwth"\n        },\n        "tokens_burnt": "242820496361800000000"\n      },\n      "proof": [\n        {\n          "direction": "Right",\n          "hash": "AsNAQabPFkmaugRGhCbzcEcR8Gnd22WXxPM2fb2cwHiv"\n        },\n        {\n          "direction": "Right",\n          "hash": "GirkzdS9YpsAz5fXuL5T3rXd93aRcnXNAdXYi241qpWK"\n        }\n      ]\n    }\n  }\n}\n'))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\ub450 \ubc88\uc9f8 \ub2e8\uacc4: ",(0,s.kt)("inlineCode",{parentName:"li"},"confirm"),"\uc744 \ud1b5\ud574, \uc804\uc1a1\uc744 \ud655\uc815\uc9d3\ub294 \ub450 \ubc88\uc9f8 \ud2b8\ub79c\uc7ad\uc158\uc774 \ubcf4\ub0b4\uc9d1\ub2c8\ub2e4. \uc774 \ud2b8\ub79c\uc7ad\uc158\uc740 \uccab \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc758\ud574 \ubc18\ud658\ub41c \uc694\uccad id\ub97c \ubc1b\uc544 \uc2e4\uc81c \uc804\uc1a1 \uc791\uc5c5\uc744 \uc218\ud589\ud569\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158 \uacb0\uacfc\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.")),(0,s.kt)("details",null,(0,s.kt)("summary",null,"\uc751\ub2f5 \uc608\uc2dc: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "123",\n  "jsonrpc": "2.0",\n  "result": {\n    "receipts": [\n      {\n        "predecessor_id": "multisigtest.testnet",\n        "receipt": {\n          "Action": {\n            "actions": [\n              {\n                "Transfer": {\n                  "deposit": "1000000000000000000000000"\n                }\n              }\n            ],\n            "gas_price": "451542320",\n            "input_data_ids": [],\n            "output_data_receivers": [],\n            "signer_id": "multisigtest.testnet",\n            "signer_public_key": "ed25519:BmVX32jhvEd8d8outiQdjf66GGYV3pb7kaxrKTdNisCz"\n          }\n        },\n        "receipt_id": "DZbHTEf3i3XznK4oJHQfcrteoiCL6WykRiA8vsn4LmAy",\n        "receiver_id": "bowen"\n      },\n      {\n        "predecessor_id": "system",\n        "receipt": {\n          "Action": {\n            "actions": [\n              {\n                "Transfer": {\n                  "deposit": "78458115804795000000"\n                }\n              }\n            ],\n            "gas_price": "0",\n            "input_data_ids": [],\n            "output_data_receivers": [],\n            "signer_id": "multisigtest.testnet",\n            "signer_public_key": "ed25519:BmVX32jhvEd8d8outiQdjf66GGYV3pb7kaxrKTdNisCz"\n          }\n        },\n        "receipt_id": "6SxC9GfYdjqm7Ao5EAw51XUAjgoN8Lj2X9xJfxjDQYXd",\n        "receiver_id": "multisigtest.testnet"\n      },\n      {\n        "predecessor_id": "system",\n        "receipt": {\n          "Action": {\n            "actions": [\n              {\n                "Transfer": {\n                  "deposit": "112870156274913516718240"\n                }\n              }\n            ],\n            "gas_price": "0",\n            "input_data_ids": [],\n            "output_data_receivers": [],\n            "signer_id": "multisigtest.testnet",\n            "signer_public_key": "ed25519:BmVX32jhvEd8d8outiQdjf66GGYV3pb7kaxrKTdNisCz"\n          }\n        },\n        "receipt_id": "CHfzz6NLcQMyiLHBQoczhgm5BFjLVfv9B7eCyXKLhhcT",\n        "receiver_id": "multisigtest.testnet"\n      }\n    ],\n    "receipts_outcome": [\n      {\n        "block_hash": "9JEiMrZ1SpAUEbQswde3Diptzwy35Vrvd41VZWG9hYVE",\n        "id": "FfuhYhsgFL7sLC8pk1tuRnMHJdqycE6gEcfgZLW9fmFB",\n        "outcome": {\n          "executor_id": "multisigtest.testnet",\n          "gas_burnt": 10109796553814,\n          "logs": [],\n          "receipt_ids": [\n            "DZbHTEf3i3XznK4oJHQfcrteoiCL6WykRiA8vsn4LmAy",\n            "CHfzz6NLcQMyiLHBQoczhgm5BFjLVfv9B7eCyXKLhhcT"\n          ],\n          "status": {\n            "SuccessReceiptId": "DZbHTEf3i3XznK4oJHQfcrteoiCL6WykRiA8vsn4LmAy"\n          },\n          "tokens_burnt": "1010979655381400000000"\n        },\n        "proof": [\n          {\n            "direction": "Left",\n            "hash": "9e2UcG6qBRahBh3V2Z8bGJLh5c4jXfZdP3WBJkCpJCfj"\n          }\n        ]\n      },\n      {\n        "block_hash": "4LkVfqyhhrxDdVFmow6NxLf1jTaj6XVr7CVcUxxySd1R",\n        "id": "DZbHTEf3i3XznK4oJHQfcrteoiCL6WykRiA8vsn4LmAy",\n        "outcome": {\n          "executor_id": "bowen",\n          "gas_burnt": 223182562500,\n          "logs": [],\n          "receipt_ids": ["6SxC9GfYdjqm7Ao5EAw51XUAjgoN8Lj2X9xJfxjDQYXd"],\n          "status": {\n            "SuccessValue": ""\n          },\n          "tokens_burnt": "22318256250000000000"\n        },\n        "proof": [\n          {\n            "direction": "Right",\n            "hash": "FFWaWUFt6sNx5XNHzGYsYBSYFWtGPoww5XQz1QmLVc8i"\n          }\n        ]\n      },\n      {\n        "block_hash": "G6LDdnAa2b38TB4KZ89HAyVgfgyiRPDDgSxoZypbUYpx",\n        "id": "6SxC9GfYdjqm7Ao5EAw51XUAjgoN8Lj2X9xJfxjDQYXd",\n        "outcome": {\n          "executor_id": "multisigtest.testnet",\n          "gas_burnt": 0,\n          "logs": [],\n          "receipt_ids": [],\n          "status": {\n            "SuccessValue": ""\n          },\n          "tokens_burnt": "0"\n        },\n        "proof": []\n      },\n      {\n        "block_hash": "4LkVfqyhhrxDdVFmow6NxLf1jTaj6XVr7CVcUxxySd1R",\n        "id": "CHfzz6NLcQMyiLHBQoczhgm5BFjLVfv9B7eCyXKLhhcT",\n        "outcome": {\n          "executor_id": "multisigtest.testnet",\n          "gas_burnt": 0,\n          "logs": [],\n          "receipt_ids": [],\n          "status": {\n            "SuccessValue": ""\n          },\n          "tokens_burnt": "0"\n        },\n        "proof": [\n          {\n            "direction": "Left",\n            "hash": "DpDYAEKZTtSomgyeNcJ2i4qjvfqnCtf1CXa83Cz5wvEy"\n          }\n        ]\n      }\n    ],\n    "status": {\n      "SuccessValue": ""\n    },\n    "transaction": {\n      "actions": [\n        {\n          "FunctionCall": {\n            "args": "eyJyZXF1ZXN0X2lkIjo4fQ==",\n            "deposit": "0",\n            "gas": 250000000000000,\n            "method_name": "confirm"\n          }\n        }\n      ],\n      "hash": "Fu39vwxC4mu9ks1DZA5Cib63RnBMHpFonk2DcbpioEYc",\n      "nonce": 9,\n      "public_key": "ed25519:BmVX32jhvEd8d8outiQdjf66GGYV3pb7kaxrKTdNisCz",\n      "receiver_id": "multisigtest.testnet",\n      "signature": "ed25519:2raQq7t3cmzSL2krE2xaNqXhAw7cKMoXrBjT2ZhAGfCVtGwzbbQ8zkB17vrCSFZDbFmPWSJpoqsw8qPZZiorwSzS",\n      "signer_id": "multisigtest.testnet"\n    },\n    "transaction_outcome": {\n      "block_hash": "9JEiMrZ1SpAUEbQswde3Diptzwy35Vrvd41VZWG9hYVE",\n      "id": "Fu39vwxC4mu9ks1DZA5Cib63RnBMHpFonk2DcbpioEYc",\n      "outcome": {\n        "executor_id": "multisigtest.testnet",\n        "gas_burnt": 2427972426482,\n        "logs": [],\n        "receipt_ids": ["FfuhYhsgFL7sLC8pk1tuRnMHJdqycE6gEcfgZLW9fmFB"],\n        "status": {\n          "SuccessReceiptId": "FfuhYhsgFL7sLC8pk1tuRnMHJdqycE6gEcfgZLW9fmFB"\n        },\n        "tokens_burnt": "242797242648200000000"\n      },\n      "proof": [\n        {\n          "direction": "Right",\n          "hash": "B6hN48qeVP8J3hP8XGcANShM264QkNjgJAfMtsuknqex"\n        }\n      ]\n    }\n  }\n}\n'))),(0,s.kt)("p",null,"\ub77d\uc5c5 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c\uc758 \uc804\uc1a1 \uacfc\uc815\uacfc \uc720\uc0ac\ud558\uac8c, ",(0,s.kt)("inlineCode",{parentName:"p"},"receipts")," \ud544\ub4dc \ub0b4\uc5d0 \uc6b0\ub9ac\uc758 \uc694\uad6c \uc0ac\ud56d\uc744 \ucda9\uc871\ud558\ub294 Receipt\ub3c4 \ud55c \uac1c \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "predecessor_id": "multisigtest.testnet",\n  "receipt": {\n    "Action": {\n      "actions": [\n        {\n          "Transfer": {\n            "deposit": "1000000000000000000000000"\n          }\n        }\n      ],\n      "gas_price": "451542320",\n      "input_data_ids": [],\n      "output_data_receivers": [],\n      "signer_id": "multisigtest.testnet",\n      "signer_public_key": "ed25519:BmVX32jhvEd8d8outiQdjf66GGYV3pb7kaxrKTdNisCz"\n    }\n  },\n  "receipt_id": "DZbHTEf3i3XznK4oJHQfcrteoiCL6WykRiA8vsn4LmAy",\n  "receiver_id": "bowen"\n}\n')),(0,s.kt)("p",null,"\uacb0\uacfc\ub294 ",(0,s.kt)("inlineCode",{parentName:"p"},"receipts_outcome"),"\uc5d0\uc11c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "block_hash": "4LkVfqyhhrxDdVFmow6NxLf1jTaj6XVr7CVcUxxySd1R",\n  "id": "DZbHTEf3i3XznK4oJHQfcrteoiCL6WykRiA8vsn4LmAy",\n  "outcome": {\n    "executor_id": "bowen",\n    "gas_burnt": 223182562500,\n    "logs": [],\n    "receipt_ids": ["6SxC9GfYdjqm7Ao5EAw51XUAjgoN8Lj2X9xJfxjDQYXd"],\n    "status": {\n      "SuccessValue": ""\n    },\n    "tokens_burnt": "22318256250000000000"\n  },\n  "proof": [\n    {\n      "direction": "Right",\n      "hash": "FFWaWUFt6sNx5XNHzGYsYBSYFWtGPoww5XQz1QmLVc8i"\n    }\n  ]\n}\n')),(0,s.kt)("p",null,"\uc774\ub294 \ud2b8\ub79c\uc7ad\uc158\uc774 \uc131\uacf5\ud588\uc74c\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4."),(0,s.kt)("admonition",{title:"\uc9c8\ubb38\uc774 \uc788\uc73c\uc2e0\uac00\uc694?",type:"tip"},(0,s.kt)("a",{href:"https://stackoverflow.com/questions/tagged/nearprotocol"},(0,s.kt)("h8",null,"StackOverflow\uc5d0 \ubb3c\uc5b4\ubcf4\uc138\uc694!"))))}m.isMDXComponent=!0}}]);