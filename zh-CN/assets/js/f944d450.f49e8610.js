"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3768],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>p});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function _(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):_(_({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),p=a,m=d["".concat(i,".").concat(p)]||d[p]||u[p]||o;return t?r.createElement(m,_(_({ref:n},c),{},{components:t})):r.createElement(m,_({ref:n},c))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,_=new Array(o);_[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,_[1]=s;for(var l=2;l<o;l++)_[l]=t[l];return r.createElement.apply(null,_)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>_});var r=t(67294),a=t(86010);const o="tabItem_Ymn6";function _(e){var n=e.children,t=e.hidden,_=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,_),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(87462),a=t(67294),o=t(86010),_=t(72389),s=t(67392),i=t(7094),l=t(12466);const c="tabList__CuJ",u="tabItem_LNqP";function d(e){var n,t,_=e.lazy,d=e.block,p=e.defaultValue,m=e.values,g=e.groupId,b=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:k.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),f=(0,s.l)(y,(function(e,n){return e.value===n.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(n=null!=p?p:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:k[0].props.value;if(null!==h&&!y.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,i.U)(),x=v.tabGroupChoices,N=v.setTabGroupChoices,E=(0,a.useState)(h),w=E[0],R=E[1],T=[],O=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var j=x[g];null!=j&&j!==w&&y.some((function(e){return e.value===j}))&&R(j)}var C=function(e){var n=e.currentTarget,t=T.indexOf(n),r=y[t].value;r!==w&&(O(n),R(r),null!=g&&N(g,String(r)))},P=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r,a=T.indexOf(e.currentTarget)+1;t=null!=(r=T[a])?r:T[0];break;case"ArrowLeft":var o,_=T.indexOf(e.currentTarget)-1;t=null!=(o=T[_])?o:T[T.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},b)},y.map((function(e){var n=e.value,t=e.label,_=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:function(e){return T.push(e)},onKeyDown:P,onFocus:C,onClick:C},_,{className:(0,o.Z)("tabs__item",u,null==_?void 0:_.className,{"tabs__item--active":w===n})}),null!=t?t:n)}))),_?(0,a.cloneElement)(k.filter((function(e){return e.props.value===w}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function p(e){var n=(0,_.Z)();return a.createElement(d,(0,r.Z)({key:String(n)},e))}},18582:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),_=t(65488),s=t(85162),i=["components"],l={id:"protocol",title:"\ud504\ub85c\ud1a0\ucf5c"},c=void 0,u={unversionedId:"api/rpc/protocol",id:"api/rpc/protocol",title:"\ud504\ub85c\ud1a0\ucf5c",description:"",source:"@site/../docs/5.api/rpc/protocol.md",sourceDirName:"5.api/rpc",slug:"/api/rpc/protocol",permalink:"/near_docs/zh-CN/api/rpc/protocol",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/5.api/rpc/protocol.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"2023\u5e743\u67089\u65e5",frontMatter:{id:"protocol",title:"\ud504\ub85c\ud1a0\ucf5c"},sidebar:"api",previous:{title:"\uac00\uc2a4",permalink:"/near_docs/zh-CN/api/rpc/gas"},next:{title:"\ub124\ud2b8\uc6cc\ud06c",permalink:"/near_docs/zh-CN/api/rpc/network"}},d={},p=[{value:"\uc81c\ub124\uc2dc\uc2a4 \uad6c\uc131",id:"genesis-config",level:2},{value:"\ubb34\uc5c7\uc774 \uc798\ubabb\ub420 \uc218 \uc788\ub098\uc694?",id:"what-could-go-wrong",level:4},{value:"\ud504\ub85c\ud1a0\ucf5c \uad6c\uc131",id:"protocol-config",level:2},{value:"\ubb34\uc5c7\uc774 \uc798\ubabb\ub420 \uc218 \uc788\ub098\uc694?",id:"what-could-go-wrong-1",level:4}],m={toc:p};function g(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"RPC API\ub97c \uc0ac\uc6a9\ud558\uba74 \ud604\uc7ac \uc81c\ub124\uc2dc\uc2a4 \ubc0f \ud504\ub85c\ud1a0\ucf5c \uad6c\uc131\uc744 \uac80\uc0c9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"genesis-config"},"\uc81c\ub124\uc2dc\uc2a4 \uad6c\uc131"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ud604\uc7ac \uc81c\ub124\uc2dc\uc2a4 \uad6c\uc131\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uba54\uc11c\ub4dc: ",(0,o.kt)("inlineCode",{parentName:"li"},"EXPERIMENTAL_genesis_config")),(0,o.kt)("li",{parentName:"ul"},"\ub9e4\uac1c\ubcc0\uc218: ",(0,o.kt)("em",{parentName:"li"},"none"))),(0,o.kt)("p",null,"\uc608\uc2dc:"),(0,o.kt)(_.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"json",label:"JSON",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": "dontcare",\n  "method": "EXPERIMENTAL_genesis_config"\n}\n'))),(0,o.kt)(s.Z,{value:"\ud83c\udf10 JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const response = await near.connection.provider.experimental_genesisConfig();\n"))),(0,o.kt)(s.Z,{value:"http",label:"HTTPie",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"http post https://rpc.testnet.near.org jsonrpc=2.0 id=dontcare method=EXPERIMENTAL_genesis_config\n")))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"\uc751\ub2f5 \uc608\uc2dc: "),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "result": {\n    "protocol_version": 29,\n    "genesis_time": "2020-07-31T03:39:42.911378Z",\n    "chain_id": "testnet",\n    "genesis_height": 10885359,\n    "num_block_producer_seats": 100,\n    "num_block_producer_seats_per_shard": [100],\n    "avg_hidden_validator_seats_per_shard": [0],\n    "dynamic_resharding": false,\n    "protocol_upgrade_stake_threshold": [4, 5],\n    "protocol_upgrade_num_epochs": 2,\n    "epoch_length": 43200,\n    "gas_limit": 1000000000000000,\n    "min_gas_price": "5000",\n    "max_gas_price": "10000000000000000000000",\n    "block_producer_kickout_threshold": 80,\n    "chunk_producer_kickout_threshold": 90,\n    "online_min_threshold": [90, 100],\n    "online_max_threshold": [99, 100],\n    "gas_price_adjustment_rate": [1, 100],\n    "runtime_config": {\n      "storage_amount_per_byte": "90949470177292823791",\n      "transaction_costs": {\n        "action_receipt_creation_config": {\n          "send_sir": 108059500000,\n          "send_not_sir": 108059500000,\n          "execution": 108059500000\n        },\n        "data_receipt_creation_config": {\n          "base_cost": {\n            "send_sir": 4697339419375,\n            "send_not_sir": 4697339419375,\n            "execution": 4697339419375\n          },\n          "cost_per_byte": {\n            "send_sir": 59357464,\n            "send_not_sir": 59357464,\n            "execution": 59357464\n          }\n        },\n        "action_creation_config": {\n          "create_account_cost": {\n            "send_sir": 99607375000,\n            "send_not_sir": 99607375000,\n            "execution": 99607375000\n          },\n          "deploy_contract_cost": {\n            "send_sir": 184765750000,\n            "send_not_sir": 184765750000,\n            "execution": 184765750000\n          },\n          "deploy_contract_cost_per_byte": {\n            "send_sir": 6812999,\n            "send_not_sir": 6812999,\n            "execution": 6812999\n          },\n          "function_call_cost": {\n            "send_sir": 2319861500000,\n            "send_not_sir": 2319861500000,\n            "execution": 2319861500000\n          },\n          "function_call_cost_per_byte": {\n            "send_sir": 2235934,\n            "send_not_sir": 2235934,\n            "execution": 2235934\n          },\n          "transfer_cost": {\n            "send_sir": 115123062500,\n            "send_not_sir": 115123062500,\n            "execution": 115123062500\n          },\n          "stake_cost": {\n            "send_sir": 141715687500,\n            "send_not_sir": 141715687500,\n            "execution": 102217625000\n          },\n          "add_key_cost": {\n            "full_access_cost": {\n              "send_sir": 101765125000,\n              "send_not_sir": 101765125000,\n              "execution": 101765125000\n            },\n            "function_call_cost": {\n              "send_sir": 102217625000,\n              "send_not_sir": 102217625000,\n              "execution": 102217625000\n            },\n            "function_call_cost_per_byte": {\n              "send_sir": 1925331,\n              "send_not_sir": 1925331,\n              "execution": 1925331\n            }\n          },\n          "delete_key_cost": {\n            "send_sir": 94946625000,\n            "send_not_sir": 94946625000,\n            "execution": 94946625000\n          },\n          "delete_account_cost": {\n            "send_sir": 147489000000,\n            "send_not_sir": 147489000000,\n            "execution": 147489000000\n          }\n        },\n        "storage_usage_config": {\n          "num_bytes_account": 100,\n          "num_extra_bytes_record": 40\n        },\n        "burnt_gas_reward": [3, 10],\n        "pessimistic_gas_price_inflation_ratio": [103, 100]\n      },\n      "wasm_config": {\n        "ext_costs": {\n          "base": 264768111,\n          "contract_compile_base": 35445963,\n          "contract_compile_bytes": 216750,\n          "read_memory_base": 2609863200,\n          "read_memory_byte": 3801333,\n          "write_memory_base": 2803794861,\n          "write_memory_byte": 2723772,\n          "read_register_base": 2517165186,\n          "read_register_byte": 98562,\n          "write_register_base": 2865522486,\n          "write_register_byte": 3801564,\n          "utf8_decoding_base": 3111779061,\n          "utf8_decoding_byte": 291580479,\n          "utf16_decoding_base": 3543313050,\n          "utf16_decoding_byte": 163577493,\n          "sha256_base": 4540970250,\n          "sha256_byte": 24117351,\n          "keccak256_base": 5879491275,\n          "keccak256_byte": 21471105,\n          "keccak512_base": 5811388236,\n          "keccak512_byte": 36649701,\n          "log_base": 3543313050,\n          "log_byte": 13198791,\n          "storage_write_base": 64196736000,\n          "storage_write_key_byte": 70482867,\n          "storage_write_value_byte": 31018539,\n          "storage_write_evicted_byte": 32117307,\n          "storage_read_base": 56356845750,\n          "storage_read_key_byte": 30952533,\n          "storage_read_value_byte": 5611005,\n          "storage_remove_base": 53473030500,\n          "storage_remove_key_byte": 38220384,\n          "storage_remove_ret_value_byte": 11531556,\n          "storage_has_key_base": 54039896625,\n          "storage_has_key_byte": 30790845,\n          "storage_iter_create_prefix_base": 0,\n          "storage_iter_create_prefix_byte": 0,\n          "storage_iter_create_range_base": 0,\n          "storage_iter_create_from_byte": 0,\n          "storage_iter_create_to_byte": 0,\n          "storage_iter_next_base": 0,\n          "storage_iter_next_key_byte": 0,\n          "storage_iter_next_value_byte": 0,\n          "touching_trie_node": 16101955926,\n          "promise_and_base": 1465013400,\n          "promise_and_per_promise": 5452176,\n          "promise_return": 560152386,\n          "validator_stake_base": 911834726400,\n          "validator_total_stake_base": 911834726400\n        },\n        "grow_mem_cost": 1,\n        "regular_op_cost": 3856371,\n        "limit_config": {\n          "max_gas_burnt": 200000000000000,\n          "max_gas_burnt_view": 200000000000000,\n          "max_stack_height": 16384,\n          "initial_memory_pages": 1024,\n          "max_memory_pages": 2048,\n          "registers_memory_limit": 1073741824,\n          "max_register_size": 104857600,\n          "max_number_registers": 100,\n          "max_number_logs": 100,\n          "max_total_log_length": 16384,\n          "max_total_prepaid_gas": 300000000000000,\n          "max_actions_per_receipt": 100,\n          "max_number_bytes_method_names": 2000,\n          "max_length_method_name": 256,\n          "max_arguments_length": 4194304,\n          "max_length_returned_data": 4194304,\n          "max_contract_size": 4194304,\n          "max_length_storage_key": 4194304,\n          "max_length_storage_value": 4194304,\n          "max_promises_per_function_call_action": 1024,\n          "max_number_input_data_dependencies": 128\n        }\n      },\n      "account_creation_config": {\n        "min_allowed_top_level_account_length": 0,\n        "registrar_account_id": "registrar"\n      }\n    },\n    "validators": [\n      {\n        "account_id": "node0",\n        "public_key": "ed25519:7PGseFbWxvYVgZ89K1uTJKYoKetWs7BJtbyXDzfbAcqX",\n        "amount": "1000000000000000000000000000000"\n      },\n      {\n        "account_id": "node1",\n        "public_key": "ed25519:6DSjZ8mvsRZDvFqFxo8tCKePG96omXW7eVYVSySmDk8e",\n        "amount": "1000000000000000000000000000000"\n      },\n      {\n        "account_id": "node2",\n        "public_key": "ed25519:GkDv7nSMS3xcqA45cpMvFmfV1o4fRF6zYo1JRR6mNqg5",\n        "amount": "1000000000000000000000000000000"\n      },\n      {\n        "account_id": "node3",\n        "public_key": "ed25519:ydgzeXHJ5Xyt7M1gXLxqLBW1Ejx6scNV5Nx2pxFM8su",\n        "amount": "1000000000000000000000000000000"\n      }\n    ],\n    "transaction_validity_period": 86400,\n    "protocol_reward_rate": [1, 10],\n    "max_inflation_rate": [1, 20],\n    "total_supply": "1031467299046044096035532756810080",\n    "num_blocks_per_year": 31536000,\n    "protocol_treasury_account": "near",\n    "fishermen_threshold": "10000000000000000000",\n    "minimum_stake_divisor": 10\n  },\n  "id": "dontcare"\n}\n')))),(0,o.kt)("h4",{id:"what-could-go-wrong"},"\ubb34\uc5c7\uc774 \uc798\ubabb\ub420 \uc218 \uc788\ub098\uc694?"),(0,o.kt)("p",null,"API \uc694\uccad\uc774 \uc2e4\ud328\ud558\uba74 RPC \uc11c\ubc84\ub294 \uc81c\ud55c\ub41c \uc218\uc758 \uc798 \uc815\uc758\ub41c \uc624\ub958 \ubcc0\ud615\uacfc \ud568\uaed8 \uad6c\uc870\ud654\ub41c \uc624\ub958 \uc751\ub2f5\uc744 \ubc18\ud658\ud558\ubbc0\ub85c, \ud074\ub77c\uc774\uc5b8\ud2b8 \ucf54\ub4dc\ub294 \uac00\ub2a5\ud55c \ubaa8\ub4e0 \uc624\ub958 \uc0ac\ub840\ub97c \ucca0\uc800\ud558\uac8c \ucc98\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. JSON-RPC \uc624\ub958\ub294 \uc624\ub958 \uc751\ub2f5\uc744 \uad6c\uc870\ud654\ud558\uae30 \uc704\ud574 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/joyent/node-verror"},"verror")," \uaddc\uce59\uc744 \ub530\ub985\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": {\n        "name": <ERROR_TYPE>,\n        "cause": {\n            "info": {..},\n            "name": <ERROR_CAUSE>\n        },\n        "code": -32000,\n        "data": String,\n        "message": "Server error",\n    },\n    "id": "dontcare",\n    "jsonrpc": "2.0"\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"*\uc8fc\uc758")),(0,o.kt)("p",{parentName:"blockquote"},"\uc704 \uad6c\uc870\uc758 ",(0,o.kt)("inlineCode",{parentName:"p"},"code"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"data"),", \ubc0f ",(0,o.kt)("inlineCode",{parentName:"p"},"message")," \ud544\ub4dc\ub294 \ub808\uac70\uc2dc \ud56d\ubaa9\uc73c\ub85c \uac04\uc8fc\ub418\uba70, \ud5a5\ud6c4 \uc0ac\uc6a9\ub418\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uc5d0 \uc758\uc874\ud558\uc9c0 \ub9c8\uc138\uc694.")),(0,o.kt)("p",null,"\ub2e4\uc74c\uc740 ",(0,o.kt)("inlineCode",{parentName:"p"},"EXPERIMENTAL_genesis_config")," \uba54\uc11c\ub4dc\uc5d0 \uc758\ud574 \ubc18\ud658\ub420 \uc218 \uc788\ub294 \uc624\ub958 \ubcc0\ud615\uc758 \uc804\uccb4 \ubaa9\ub85d\uc785\ub2c8\ub2e4."),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"ERROR_TYPE",(0,o.kt)("br",null),(0,o.kt)("code",null,"error.name")),(0,o.kt)("th",null,"ERROR_CAUSE",(0,o.kt)("br",null),(0,o.kt)("code",null,"error.cause.name")),(0,o.kt)("th",null,"\uc774\uc720"),(0,o.kt)("th",null,"\ud574\uacb0\ucc45"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"INTERNAL_ERROR"),(0,o.kt)("td",null,"INTERNAL_ERROR"),(0,o.kt)("td",null,"\ub178\ub4dc \uc790\uccb4\uc5d0 \ubb38\uc81c\uac00 \uc788\uac70\ub098 \uacfc\ubd80\ud558\uac00 \uac78\ub838\uc2b5\ub2c8\ub2e4."),(0,o.kt)("td",null,(0,o.kt)("ul",null,(0,o.kt)("li",null,"\ub098\uc911\uc5d0 \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc138\uc694"),(0,o.kt)("li",null,"\ub2e4\ub978 \ub178\ub4dc\uc5d0 \uc694\uccad\uc744 \ubcf4\ub0b4\uc138\uc694."),(0,o.kt)("li",null,(0,o.kt)("code",null,"error.cause.info"),"\uc5d0\uc11c \uc790\uc138\ud55c \ub0b4\uc6a9\uc744 \ud655\uc778\ud558\uc138\uc694.")))))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"protocol-config"},"\ud504\ub85c\ud1a0\ucf5c \uad6c\uc131"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\uac00\uc7a5 \ucd5c\uadfc\uc758 \ud504\ub85c\ud1a0\ucf5c \uad6c\uc131 \ub610\ub294 \ud2b9\uc815 \ucffc\ub9ac \ube14\ub85d\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. \ud604\uc7ac \uc2a4\ud1a0\ub9ac\uc9c0 \ubc0f \ud2b8\ub79c\uc7ad\uc158 \ube44\uc6a9\uc744 \ucc3e\ub294 \ub370 \uc720\uc6a9\ud569\ub2c8\ub2e4.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uba54\uc11c\ub4dc: ",(0,o.kt)("inlineCode",{parentName:"li"},"EXPERIMENTAL_protocol_config")),(0,o.kt)("li",{parentName:"ul"},"\ub9e4\uac1c\ubcc0\uc218:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/api/rpc/setup#using-finality-param"},(0,o.kt)("inlineCode",{parentName:"a"},"finality"))," ",(0,o.kt)("em",{parentName:"li"},"\ub610\ub294")," ",(0,o.kt)("a",{parentName:"li",href:"/api/rpc/setup#using-block_id-param"},(0,o.kt)("inlineCode",{parentName:"a"},"block_id")))))),(0,o.kt)("p",null,"\uc608\uc2dc:"),(0,o.kt)(_.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"json",label:"JSON",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": "dontcare",\n  "method": "EXPERIMENTAL_protocol_config",\n  "params": {\n    "finality": "final"\n  }\n}\n'))),(0,o.kt)(s.Z,{value:"http",label:"HTTPie",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'http post https://rpc.testnet.near.org jsonrpc=2.0 id=dontcare method=EXPERIMENTAL_protocol_config \\\n  params:=\'{\n    "finality": "final"\n  }\'\n')))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"\uc751\ub2f5 \uc608\uc2dc: "),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "result": {\n    "protocol_version": 45,\n    "genesis_time": "2020-07-31T03:39:42.911378Z",\n    "chain_id": "testnet",\n    "genesis_height": 42376888,\n    "num_block_producer_seats": 200,\n    "num_block_producer_seats_per_shard": [200],\n    "avg_hidden_validator_seats_per_shard": [0],\n    "dynamic_resharding": false,\n    "protocol_upgrade_stake_threshold": [4, 5],\n    "epoch_length": 43200,\n    "gas_limit": 1000000000000000,\n    "min_gas_price": "5000",\n    "max_gas_price": "10000000000000000000000",\n    "block_producer_kickout_threshold": 80,\n    "chunk_producer_kickout_threshold": 90,\n    "online_min_threshold": [90, 100],\n    "online_max_threshold": [99, 100],\n    "gas_price_adjustment_rate": [1, 100],\n    "runtime_config": {\n      "storage_amount_per_byte": "10000000000000000000",\n      "transaction_costs": {\n        "action_receipt_creation_config": {\n          "send_sir": 108059500000,\n          "send_not_sir": 108059500000,\n          "execution": 108059500000\n        },\n        "data_receipt_creation_config": {\n          "base_cost": {\n            "send_sir": 4697339419375,\n            "send_not_sir": 4697339419375,\n            "execution": 4697339419375\n          },\n          "cost_per_byte": {\n            "send_sir": 59357464,\n            "send_not_sir": 59357464,\n            "execution": 59357464\n          }\n        },\n        "action_creation_config": {\n          "create_account_cost": {\n            "send_sir": 99607375000,\n            "send_not_sir": 99607375000,\n            "execution": 99607375000\n          },\n          "deploy_contract_cost": {\n            "send_sir": 184765750000,\n            "send_not_sir": 184765750000,\n            "execution": 184765750000\n          },\n          "deploy_contract_cost_per_byte": {\n            "send_sir": 6812999,\n            "send_not_sir": 6812999,\n            "execution": 6812999\n          },\n          "function_call_cost": {\n            "send_sir": 2319861500000,\n            "send_not_sir": 2319861500000,\n            "execution": 2319861500000\n          },\n          "function_call_cost_per_byte": {\n            "send_sir": 2235934,\n            "send_not_sir": 2235934,\n            "execution": 2235934\n          },\n          "transfer_cost": {\n            "send_sir": 115123062500,\n            "send_not_sir": 115123062500,\n            "execution": 115123062500\n          },\n          "stake_cost": {\n            "send_sir": 141715687500,\n            "send_not_sir": 141715687500,\n            "execution": 102217625000\n          },\n          "add_key_cost": {\n            "full_access_cost": {\n              "send_sir": 101765125000,\n              "send_not_sir": 101765125000,\n              "execution": 101765125000\n            },\n            "function_call_cost": {\n              "send_sir": 102217625000,\n              "send_not_sir": 102217625000,\n              "execution": 102217625000\n            },\n            "function_call_cost_per_byte": {\n              "send_sir": 1925331,\n              "send_not_sir": 1925331,\n              "execution": 1925331\n            }\n          },\n          "delete_key_cost": {\n            "send_sir": 94946625000,\n            "send_not_sir": 94946625000,\n            "execution": 94946625000\n          },\n          "delete_account_cost": {\n            "send_sir": 147489000000,\n            "send_not_sir": 147489000000,\n            "execution": 147489000000\n          }\n        },\n        "storage_usage_config": {\n          "num_bytes_account": 100,\n          "num_extra_bytes_record": 40\n        },\n        "burnt_gas_reward": [3, 10],\n        "pessimistic_gas_price_inflation_ratio": [103, 100]\n      },\n      "wasm_config": {\n        "ext_costs": {\n          "base": 264768111,\n          "contract_compile_base": 35445963,\n          "contract_compile_bytes": 216750,\n          "read_memory_base": 2609863200,\n          "read_memory_byte": 3801333,\n          "write_memory_base": 2803794861,\n          "write_memory_byte": 2723772,\n          "read_register_base": 2517165186,\n          "read_register_byte": 98562,\n          "write_register_base": 2865522486,\n          "write_register_byte": 3801564,\n          "utf8_decoding_base": 3111779061,\n          "utf8_decoding_byte": 291580479,\n          "utf16_decoding_base": 3543313050,\n          "utf16_decoding_byte": 163577493,\n          "sha256_base": 4540970250,\n          "sha256_byte": 24117351,\n          "keccak256_base": 5879491275,\n          "keccak256_byte": 21471105,\n          "keccak512_base": 5811388236,\n          "keccak512_byte": 36649701,\n          "log_base": 3543313050,\n          "log_byte": 13198791,\n          "storage_write_base": 64196736000,\n          "storage_write_key_byte": 70482867,\n          "storage_write_value_byte": 31018539,\n          "storage_write_evicted_byte": 32117307,\n          "storage_read_base": 56356845750,\n          "storage_read_key_byte": 30952533,\n          "storage_read_value_byte": 5611005,\n          "storage_remove_base": 53473030500,\n          "storage_remove_key_byte": 38220384,\n          "storage_remove_ret_value_byte": 11531556,\n          "storage_has_key_base": 54039896625,\n          "storage_has_key_byte": 30790845,\n          "storage_iter_create_prefix_base": 0,\n          "storage_iter_create_prefix_byte": 0,\n          "storage_iter_create_range_base": 0,\n          "storage_iter_create_from_byte": 0,\n          "storage_iter_create_to_byte": 0,\n          "storage_iter_next_base": 0,\n          "storage_iter_next_key_byte": 0,\n          "storage_iter_next_value_byte": 0,\n          "touching_trie_node": 16101955926,\n          "promise_and_base": 1465013400,\n          "promise_and_per_promise": 5452176,\n          "promise_return": 560152386,\n          "validator_stake_base": 911834726400,\n          "validator_total_stake_base": 911834726400\n        },\n        "grow_mem_cost": 1,\n        "regular_op_cost": 3856371,\n        "limit_config": {\n          "max_gas_burnt": 200000000000000,\n          "max_gas_burnt_view": 200000000000000,\n          "max_stack_height": 16384,\n          "initial_memory_pages": 1024,\n          "max_memory_pages": 2048,\n          "registers_memory_limit": 1073741824,\n          "max_register_size": 104857600,\n          "max_number_registers": 100,\n          "max_number_logs": 100,\n          "max_total_log_length": 16384,\n          "max_total_prepaid_gas": 300000000000000,\n          "max_actions_per_receipt": 100,\n          "max_number_bytes_method_names": 2000,\n          "max_length_method_name": 256,\n          "max_arguments_length": 4194304,\n          "max_length_returned_data": 4194304,\n          "max_contract_size": 4194304,\n          "max_length_storage_key": 4194304,\n          "max_length_storage_value": 4194304,\n          "max_promises_per_function_call_action": 1024,\n          "max_number_input_data_dependencies": 128\n        }\n      },\n      "account_creation_config": {\n        "min_allowed_top_level_account_length": 0,\n        "registrar_account_id": "registrar"\n      }\n    },\n    "transaction_validity_period": 86400,\n    "protocol_reward_rate": [1, 10],\n    "max_inflation_rate": [1, 20],\n    "num_blocks_per_year": 31536000,\n    "protocol_treasury_account": "near",\n    "fishermen_threshold": "340282366920938463463374607431768211455",\n    "minimum_stake_divisor": 10\n  },\n  "id": "dontcare"\n}\n')))),(0,o.kt)("h4",{id:"what-could-go-wrong-1"},"\ubb34\uc5c7\uc774 \uc798\ubabb\ub420 \uc218 \uc788\ub098\uc694?"),(0,o.kt)("p",null,"API \uc694\uccad\uc774 \uc2e4\ud328\ud558\uba74 RPC \uc11c\ubc84\ub294 \uc81c\ud55c\ub41c \uc218\uc758 \uc798 \uc815\uc758\ub41c \uc624\ub958 \ubcc0\ud615\uacfc \ud568\uaed8 \uad6c\uc870\ud654\ub41c \uc624\ub958 \uc751\ub2f5\uc744 \ubc18\ud658\ud558\ubbc0\ub85c, \ud074\ub77c\uc774\uc5b8\ud2b8 \ucf54\ub4dc\ub294 \uac00\ub2a5\ud55c \ubaa8\ub4e0 \uc624\ub958 \uc0ac\ub840\ub97c \ucca0\uc800\ud558\uac8c \ucc98\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. JSON-RPC \uc624\ub958\ub294 \uc624\ub958 \uc751\ub2f5\uc744 \uad6c\uc870\ud654\ud558\uae30 \uc704\ud574 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/joyent/node-verror"},"verror")," \uaddc\uce59\uc744 \ub530\ub985\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": {\n        "name": <ERROR_TYPE>,\n        "cause": {\n            "info": {..},\n            "name": <ERROR_CAUSE>\n        },\n        "code": -32000,\n        "data": String,\n        "message": "Server error",\n    },\n    "id": "dontcare",\n    "jsonrpc": "2.0"\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"\uc8fc\uc758")),(0,o.kt)("p",{parentName:"blockquote"},"\uc704 \uad6c\uc870\uc758 ",(0,o.kt)("inlineCode",{parentName:"p"},"code"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"data"),", \ubc0f ",(0,o.kt)("inlineCode",{parentName:"p"},"message")," \ud544\ub4dc\ub294 \ub808\uac70\uc2dc \ud56d\ubaa9\uc73c\ub85c \uac04\uc8fc\ub418\uba70, \ud5a5\ud6c4 \uc0ac\uc6a9\ub418\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uc5d0 \uc758\uc874\ud558\uc9c0 \ub9c8\uc138\uc694.")),(0,o.kt)("p",null,"\ub2e4\uc74c\uc740 ",(0,o.kt)("inlineCode",{parentName:"p"},"EXPERIMENTAL_protocol_config")," \uba54\uc11c\ub4dc\uc5d0 \uc758\ud574 \ubc18\ud658\ub420 \uc218 \uc788\ub294 \uc624\ub958 \ubcc0\ud615\uc758 \uc804\uccb4 \ubaa9\ub85d\uc785\ub2c8\ub2e4."),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"ERROR_TYPE",(0,o.kt)("br",null),(0,o.kt)("code",null,"error.name")),(0,o.kt)("th",null,"ERROR_CAUSE",(0,o.kt)("br",null),(0,o.kt)("code",null,"error.cause.name")),(0,o.kt)("th",null,"\uc774\uc720"),(0,o.kt)("th",null,"\ud574\uacb0\ucc45"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"HANDLER_ERROR"),(0,o.kt)("td",null,"UNKNOWN_BLOCK"),(0,o.kt)("td",null,"\uc694\uccad\ub41c \ube14\ub85d\uc774 \uc544\uc9c1 \uc0dd\uc131\ub418\uc9c0 \uc54a\uc558\uac70\ub098 \uac00\ube44\uc9c0 \uc218\uc9d1\ub418\uc5c8\uc2b5\ub2c8\ub2e4(RPC \ub178\ub4dc\uc758 \uacf5\uac04\uc744 \uc808\uc57d\ud558\uae30 \uc704\ud574 \uc815\ub9ac\ub428)."),(0,o.kt)("td",null,(0,o.kt)("ul",null,(0,o.kt)("li",null,"\uc694\uccad\ud55c \ube14\ub85d\uc774 \uc62c\ubc14\ub978\uc9c0 \ud655\uc778\ud558\uc138\uc694."),(0,o.kt)("li",null,"\ube14\ub85d\uc774 5 \uc774\uc0c1 \uc5d0\ud3ec\ud06c \uc804\uc5d0 \uc0dd\uc131\ub41c \uacbd\uc6b0, ",(0,o.kt)("a",{href:"https://near-nodes.io/intro/node-types#archival-node"},"\uc544\uce74\uc774\ube0c \ub178\ub4dc"),"\ub85c \uc694\uccad\uc744 \ubcf4\ub0b4\uc138\uc694.")))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"INTERNAL_ERROR"),(0,o.kt)("td",null,"INTERNAL_ERROR"),(0,o.kt)("td",null,"\ub178\ub4dc \uc790\uccb4\uc5d0 \ubb38\uc81c\uac00 \uc788\uac70\ub098 \uacfc\ubd80\ud558\uac00 \uac78\ub838\uc2b5\ub2c8\ub2e4."),(0,o.kt)("td",null,(0,o.kt)("ul",null,(0,o.kt)("li",null,"\ub098\uc911\uc5d0 \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc138\uc694."),(0,o.kt)("li",null,"\ub2e4\ub978 \ub178\ub4dc\uc5d0 \uc694\uccad\uc744 \ubcf4\ub0b4\uc138\uc694."),(0,o.kt)("li",null,(0,o.kt)("code",null,"error.cause.info"),"\uc5d0\uc11c \uc790\uc138\ud55c \ub0b4\uc6a9\uc744 \ud655\uc778\ud558\uc138\uc694.")))))),(0,o.kt)("hr",null))}g.isMDXComponent=!0}}]);