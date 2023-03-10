"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7752],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return t?a.createElement(h,o(o({ref:n},u),{},{components:t})):a.createElement(h,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(67294),r=t(86010);const i="tabItem_Ymn6";function o(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(87462),r=t(67294),i=t(86010),o=t(72389),l=t(67392),s=t(7094),c=t(12466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var n,t,o=e.lazy,d=e.block,m=e.defaultValue,h=e.values,k=e.groupId,g=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,l.l)(f,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===m?m:null!=(n=null!=m?m:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:b[0].props.value;if(null!==v&&!f.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),w=N.tabGroupChoices,C=N.setTabGroupChoices,j=(0,r.useState)(v),_=j[0],T=j[1],P=[],S=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var x=w[k];null!=x&&x!==_&&f.some((function(e){return e.value===x}))&&T(x)}var E=function(e){var n=e.currentTarget,t=P.indexOf(n),a=f[t].value;a!==_&&(S(n),T(a),null!=k&&C(k,String(a)))},O=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,r=P.indexOf(e.currentTarget)+1;t=null!=(a=P[r])?a:P[0];break;case"ArrowLeft":var i,o=P.indexOf(e.currentTarget)-1;t=null!=(i=P[o])?i:P[P.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},g)},f.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===n?0:-1,"aria-selected":_===n,key:n,ref:function(e){return P.push(e)},onKeyDown:O,onFocus:E,onClick:E},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":_===n})}),null!=t?t:n)}))),o?(0,r.cloneElement)(b.filter((function(e){return e.props.value===_}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==_})}))))}function m(e){var n=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},31428:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>k,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=t(65488),l=t(85162),s=["components"],c={id:"rpc",title:"Remote Procedural Call"},u=void 0,p={unversionedId:"develop/integrate/rpc",id:"develop/integrate/rpc",title:"Remote Procedural Call",description:"",source:"@site/../docs/2.develop/integrate/rpc.md",sourceDirName:"2.develop/integrate",slug:"/develop/integrate/rpc",permalink:"/near_docs/zh-CN/develop/integrate/rpc",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/integrate/rpc.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"2023\u5e743\u67089\u65e5",frontMatter:{id:"rpc",title:"Remote Procedural Call"}},d={},m=[{value:"View Methods",id:"view-methods",level:2},{value:"Change Methods",id:"change-methods",level:2},{value:"Create Transaction",id:"create-transaction",level:3},{value:"<code>signerPublicKey</code>",id:"signerpublickey",level:4},{value:"<code>nonceForPublicKey</code>",id:"nonceforpublickey",level:4},{value:"<code>blockHash</code>",id:"blockhash",level:4},{value:"Sign Transaction",id:"sign-transaction",level:3},{value:"Send Transaction",id:"send-transaction",level:3}],h={toc:m};function k(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Here we will only briefly mention how to use the NEAR RPC.\nIf you want to find the full documentation on NEAR RPC please follow this link."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"view-methods"},"View Methods"),(0,i.kt)("p",null,"View methods are those that perform ",(0,i.kt)("strong",{parentName:"p"},"read-only")," operations. Calling these methods is free, and do not require to specify which account is being used to make the call:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"method: ",(0,i.kt)("inlineCode",{parentName:"li"},"query")),(0,i.kt)("li",{parentName:"ul"},"params:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"request_type"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"call_function")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/rpc/setup#using-finality-param"},(0,i.kt)("inlineCode",{parentName:"a"},"finality"))," ",(0,i.kt)("em",{parentName:"li"},"OR")," ",(0,i.kt)("a",{parentName:"li",href:"/api/rpc/setup#using-block_id-param"},(0,i.kt)("inlineCode",{parentName:"a"},"block_id"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"account_id"),": ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"em"},'"example.testnet"'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"method_name"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"name_of_a_example.testnet_method")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"args_base64"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"method_arguments_base_64_encoded"))))),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"json",label:"JSON",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": "dontcare",\n  "method": "query",\n  "params": {\n    "request_type": "call_function",\n    "finality": "final",\n    "account_id": "dev-1588039999690",\n    "method_name": "get_num",\n    "args_base64": "e30="\n  }\n}\n'))),(0,i.kt)(l.Z,{value:"\ud83c\udf10 JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const response = await near.connection.provider.query({\n  request_type: "call_function",\n  finality: "final",\n  account_id: "dev-1588039999690",\n  method_name: "get_num",\n  args_base64: "e30=",\n});\n'))),(0,i.kt)(l.Z,{value:"http",label:"HTTPie",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'http post https://rpc.testnet.near.org jsonrpc=2.0 id=dontcare method=query \\\n  params:=\'{\n    "request_type": "call_function",\n    "finality": "final",\n    "account_id": "dev-1588039999690",\n    "method_name": "get_num",\n    "args_base64": "e30="\n  }\'\n')))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example response: "),(0,i.kt)("p",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "result": {\n    "result": [48],\n    "logs": [],\n    "block_height": 17817336,\n    "block_hash": "4qkA4sUUG8opjH5Q9bL5mWJTnfR4ech879Db1BZXbx6P"\n  },\n  "id": "dontcare"\n}\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"View methods have by default 200 TGAS for execution")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"[48]")," is an array of bytes, to be specific it is an ASCII code of ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),".",(0,i.kt)("inlineCode",{parentName:"p"},"near-sdk-rs")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"near-sdk-js")," return JSON-serialized results."))),(0,i.kt)("admonition",{title:"What could go wrong?",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you encounter a error please check ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/api/rpc/contracts#what-could-go-wrong"},"the RPC docs"))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"change-methods"},"Change Methods"),(0,i.kt)("p",null,"Change methods are those that perform both read and write operations. For these methods we do need to specify the account being used to make the call, since that account will expend GAS in the call."),(0,i.kt)("p",null,"Since calls to change methods need to be signed by an account, you will first need to create and sign the transaction that you want to send to the RPC.\nFor this, you currently need to make heavy use of ",(0,i.kt)("inlineCode",{parentName:"p"},"near-api-js"),". Particularly, you need to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a transaction using the ",(0,i.kt)("inlineCode",{parentName:"li"},"near-api-js.transactions")," module."),(0,i.kt)("li",{parentName:"ol"},"Sign the transaction using the ",(0,i.kt)("inlineCode",{parentName:"li"},"near-api-js.KeyStore.KeyPair")),(0,i.kt)("li",{parentName:"ol"},"Send the signed transaction to the RPC.")),(0,i.kt)("h3",{id:"create-transaction"},"Create Transaction"),(0,i.kt)("p",null,"In order yo create a transaction you will use ",(0,i.kt)("inlineCode",{parentName:"p"},"near-api-js.transactions.createTransaction")," which takes as input:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"signerId"),": the account ID of the transaction originator."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"signerPublicKey"),": the signer public key, see bellow."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"receiverId"),": the account ID of the transaction recipient."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"nonceForPublicKey"),": a unique number, see bellow"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"actions"),": An ",(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/develop/contracts/actions"},"action"),", built from ",(0,i.kt)("inlineCode",{parentName:"li"},"near-api-js.transactions"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/integrator/create-transactions#6-blockhash"},(0,i.kt)("inlineCode",{parentName:"a"},"blockHash")))),(0,i.kt)("h4",{id:"signerpublickey"},(0,i.kt)("inlineCode",{parentName:"h4"},"signerPublicKey")),(0,i.kt)("p",null,"The public key of the signer must be encoded as an object with two key value pairs: keyType and data.\nHere is one possible way to get it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const privateKey = "private-key-here";\nconst keyPair = nearAPI.utils.key_pair.KeyPairEd25519.fromString(privateKey);\nconst publicKey = keyPair.getPublicKey()\n')),(0,i.kt)("h4",{id:"nonceforpublickey"},(0,i.kt)("inlineCode",{parentName:"h4"},"nonceForPublicKey")),(0,i.kt)("p",null,"A unique number or ",(0,i.kt)("inlineCode",{parentName:"p"},"nonce")," is required for each transaction signed with an access key. To ensure a unique number is created for each transaction, the current ",(0,i.kt)("inlineCode",{parentName:"p"},"nonce")," should be queried and then incremented by 1."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'\nconst provider = new near-api-js.providers.JsonRpcProvider(\n  `https://rpc.testnet.near.org`\n);\nconst accessKey = await provider.query(\n  `access_key/influencer.testnet/${publicKey.getPublicKey().toString()}`,\n  ""\n);\n\nconst nonce = accessKey.nonce + 1;\n')),(0,i.kt)("h4",{id:"blockhash"},(0,i.kt)("inlineCode",{parentName:"h4"},"blockHash")),(0,i.kt)("p",null,"Each transaction requires a current block hash (within 24hrs) to prove that the transaction was created recently. The hash must be converted to an array of bytes using the ",(0,i.kt)("inlineCode",{parentName:"p"},"base_decode")," method found in ",(0,i.kt)("inlineCode",{parentName:"p"},"near-api-js"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const recentBlockHash = near-api-js.utils.serialize.base_decode(\n  accessKey.block_hash\n);\n")),(0,i.kt)("h3",{id:"sign-transaction"},"Sign Transaction"),(0,i.kt)("p",null,"Now that the transaction is created, we sign it before sending it to the NEAR blockchain. At the lowest level, there are four steps to this process."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Using ",(0,i.kt)("a",{parentName:"li",href:"/integrator/create-transactions#imports"},(0,i.kt)("inlineCode",{parentName:"a"},"nearAPI")),", we call on ",(0,i.kt)("inlineCode",{parentName:"li"},"serialize()")," to serialize the transaction in ",(0,i.kt)("a",{parentName:"li",href:"https://borsh.io/"},"Borsh"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const serializedTx = near-api-js.utils.serialize.serialize(\n  nearAPI.transactions.SCHEMA,\n  transaction\n);\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Hash the serialized transaction using a ",(0,i.kt)("inlineCode",{parentName:"li"},"sha256")," cryptographic hashing algorithm.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const serializedTxHash = new Uint8Array(sha256.sha256.array(serializedTx));\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Create a signature with the ",(0,i.kt)("inlineCode",{parentName:"li"},"keyPair"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const signature = keyPair.sign(serializedTxHash);\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Construct the signed transaction using ",(0,i.kt)("inlineCode",{parentName:"li"},"near-api-js")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/near/near-api-js/blob/d4d4cf1ac3182fa998b1e004e6782219325a641b/src/transaction.ts#L112-L123"},"SignedTransaction class"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const signedTransaction = new nearAPI.transactions.SignedTransaction({\n  transaction,\n  signature: new nearAPI.transactions.Signature({\n    keyType: transaction.publicKey.keyType,\n    data: signature.signature,\n  }),\n});\n")),(0,i.kt)("h3",{id:"send-transaction"},"Send Transaction"),(0,i.kt)("p",null,"Final step is to encode and send the transaction."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First we serialize transaction into ",(0,i.kt)("a",{parentName:"li",href:"https://borsh.io/"},"Borsh"),", and store the result as ",(0,i.kt)("inlineCode",{parentName:"li"},"signedSerializedTx"),". ",(0,i.kt)("em",{parentName:"li"},"(required for all transactions)")),(0,i.kt)("li",{parentName:"ul"},"Then we send the transaction via ",(0,i.kt)("a",{parentName:"li",href:"/api/rpc/setup"},"RPC call")," using the ",(0,i.kt)("inlineCode",{parentName:"li"},"sendJsonRpc()")," method nested inside ",(0,i.kt)("a",{parentName:"li",href:"/integrator/create-transactions#setting-up-connection-to-near"},(0,i.kt)("inlineCode",{parentName:"a"},"near")),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// encodes transaction to serialized Borsh (required for all transactions)\nconst signedSerializedTx = signedTransaction.encode();\n// sends transaction to NEAR blockchain via JSON RPC call and records the result\nconst result = await provider.sendJsonRpc("broadcast_tx_commit", [\n  Buffer.from(signedSerializedTx).toString("base64"),\n]);\n')),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example response: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"{\n  status: { SuccessValue: '' },\n  transaction: {\n    signer_id: 'sender.testnet',\n    public_key: 'ed25519:8RazSLHvzj4TBSKGUo5appP7wVeqZNQYjP9hvhF4ZKS2',\n    nonce: 57,\n    receiver_id: 'receiver.testnet',\n    actions: [ [Object] ],\n    signature: 'ed25519:2sK53w6hybSxX7qWShXz6xKnjnYRUW7Co3evEaaggNW6pGSCNPvx7urY4akwnzAbxZGwsKjx8dcVm73qbitntJjz',\n    hash: 'EgGzB73eFxCwZRGcEyCKedLjvvgxhDXcUtq21SqAh79j'\n  },\n  transaction_outcome: {\n    proof: [ [Object] ],\n    block_hash: 'J6cFDzAFkuknHMCEYW2uPQXDvCfSndkJmADVEWJbtTwV',\n    id: 'EgGzB73eFxCwZRGcEyCKedLjvvgxhDXcUtq21SqAh79j',\n    outcome: {\n      logs: [],\n      receipt_ids: [Array],\n      gas_burnt: 223182562500,\n      tokens_burnt: '22318256250000000000',\n      executor_id: 'sender.testnet',\n      status: [Object]\n    }\n  },\n  receipts_outcome: [\n    {\n      proof: [Array],\n      block_hash: 'FSS7UzTpMr4mUm6aw8MmzP6Q7wnQs35VS8vYm1R461dM',\n      id: '3LjBxe2jq1s7XEPrYxihp4rPVdyHAbYfkcdJjUEVijhJ',\n      outcome: [Object]\n    },\n    {\n      proof: [Array],\n      block_hash: '4XBio5dM5UGYjJgzZjgckfVgMZ9uKGbTkt8zZi5webxw',\n      id: 'AXFA4kwiYfruKQ4LkD1qZA8P7HoAvtFwGqwQYdWtWNaW',\n      outcome: [Object]\n    }\n  ]\n}\nTransaction Results:  {\n  signer_id: 'sender.testnet',\n  public_key: 'ed25519:8RazSLHvzj4TBSKGUo5appP7wVeqZNQYjP9hvhF4ZKS2',\n  nonce: 57,\n  receiver_id: 'receiver.testnet',\n  actions: [ { Transfer: [Object] } ],\n  signature: 'ed25519:2sK53w6hybSxX7qWShXz6xKnjnYRUW7Co3evEaaggNW6pGSCNPvx7urY4akwnzAbxZGwsKjx8dcVm73qbitntJjz',\n  hash: 'EgGzB73eFxCwZRGcEyCKedLjvvgxhDXcUtq21SqAh79j'\n}\n"))))}k.isMDXComponent=!0}}]);