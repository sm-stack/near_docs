"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2801],{3905:(e,r,a)=>{a.d(r,{Zo:()=>d,kt:()=>u});var t=a(67294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function i(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?i(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function s(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=t.createContext({}),l=function(e){var r=t.useContext(p),a=r;return e&&(a="function"==typeof e?e(r):o(o({},r),e)),a},d=function(e){var r=l(e.components);return t.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),f=l(a),u=n,k=f["".concat(p,".").concat(u)]||f[u]||c[u]||i;return a?t.createElement(k,o(o({ref:r},d),{},{components:a})):t.createElement(k,o({ref:r},d))}));function u(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=f;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}f.displayName="MDXCreateElement"},87442:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=a(87462),n=a(63366),i=(a(67294),a(3905)),o=["components"],s={id:"providers_provider",title:"Module: providers/provider",sidebar_label:"providers/provider",sidebar_position:0,custom_edit_url:null},p=void 0,l={unversionedId:"modules/providers_provider",id:"version-near-api-js@1.1.0/modules/providers_provider",title:"Module: providers/provider",description:"NEAR RPC API request types and responses",source:"@site/near-api-js_versioned_docs/version-near-api-js@1.1.0/modules/providers_provider.md",sourceDirName:"modules",slug:"/modules/providers_provider",permalink:"/near_docs/zh-CN/tools/near-api-js/reference/modules/providers_provider",draft:!1,editUrl:null,tags:[],version:"near-api-js@1.1.0",sidebarPosition:0,frontMatter:{id:"providers_provider",title:"Module: providers/provider",sidebar_label:"providers/provider",sidebar_position:0,custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"providers/json-rpc-provider",permalink:"/near_docs/zh-CN/tools/near-api-js/reference/modules/providers_json_rpc_provider"},next:{title:"signer",permalink:"/near_docs/zh-CN/tools/near-api-js/reference/modules/signer"}},d={},c=[{value:"Enumerations",id:"enumerations",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Type Aliases",id:"type-aliases",level:2},{value:"BlockId",id:"blockid",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"BlockReference",id:"blockreference",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"BlockShardId",id:"blockshardid",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"ChunkHash",id:"chunkhash",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"ChunkId",id:"chunkid",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"Finality",id:"finality",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"MerklePath",id:"merklepath",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"RpcQueryRequest",id:"rpcqueryrequest",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"ShardId",id:"shardid",level:3},{value:"Defined in",id:"defined-in-8",level:4}],f={toc:c};function u(e){var r=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},f,a,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"NEAR RPC API request types and responses"),(0,i.kt)("h2",{id:"enumerations"},"Enumerations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/enums/providers_provider.ExecutionStatusBasic"},"ExecutionStatusBasic")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/enums/providers_provider.FinalExecutionStatusBasic"},"FinalExecutionStatusBasic")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/enums/providers_provider.IdType"},"IdType"))),(0,i.kt)("h2",{id:"interfaces"},"Interfaces"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.AccessKeyInfoView"},"AccessKeyInfoView")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.AccessKeyList"},"AccessKeyList")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.AccessKeyView"},"AccessKeyView")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.AccessKeyViewRaw"},"AccessKeyViewRaw")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.AccessKeyWithPublicKey"},"AccessKeyWithPublicKey")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.AccountView"},"AccountView")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.BlockChange"},"BlockChange")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.BlockChangeResult"},"BlockChangeResult")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.BlockHeader"},"BlockHeader")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.BlockHeaderInnerLiteView"},"BlockHeaderInnerLiteView")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.BlockResult"},"BlockResult")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.CallFunctionRequest"},"CallFunctionRequest")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.ChangeResult"},"ChangeResult")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.Chunk"},"Chunk")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.ChunkHeader"},"ChunkHeader")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.ChunkResult"},"ChunkResult")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.CodeResult"},"CodeResult")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.ContractCodeView"},"ContractCodeView")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.CurrentEpochValidatorInfo"},"CurrentEpochValidatorInfo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.EpochValidatorInfo"},"EpochValidatorInfo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.ExecutionError"},"ExecutionError")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.ExecutionOutcome"},"ExecutionOutcome")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.ExecutionOutcomeWithId"},"ExecutionOutcomeWithId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.ExecutionOutcomeWithIdView"},"ExecutionOutcomeWithIdView")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.ExecutionStatus"},"ExecutionStatus")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.FinalExecutionOutcome"},"FinalExecutionOutcome")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.FinalExecutionStatus"},"FinalExecutionStatus")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.FunctionCallPermissionView"},"FunctionCallPermissionView")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.GasPrice"},"GasPrice")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.LightClientBlockLiteView"},"LightClientBlockLiteView")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.LightClientProof"},"LightClientProof")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.LightClientProofRequest"},"LightClientProofRequest")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.MerkleNode"},"MerkleNode")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.NearProtocolConfig"},"NearProtocolConfig")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.NearProtocolRuntimeConfig"},"NearProtocolRuntimeConfig")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.NextEpochValidatorInfo"},"NextEpochValidatorInfo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.NodeStatusResult"},"NodeStatusResult")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.QueryResponseKind"},"QueryResponseKind")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.SyncInfo"},"SyncInfo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.TotalWeight"},"TotalWeight")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.Transaction"},"Transaction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.ValidatorStakeView"},"ValidatorStakeView")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.ViewAccessKeyListRequest"},"ViewAccessKeyListRequest")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.ViewAccessKeyRequest"},"ViewAccessKeyRequest")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.ViewAccountRequest"},"ViewAccountRequest")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.ViewCodeRequest"},"ViewCodeRequest")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.ViewStateRequest"},"ViewStateRequest")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.ViewStateResult"},"ViewStateResult"))),(0,i.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,i.kt)("h3",{id:"blockid"},"BlockId"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"BlockId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"BlockHash")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"BlockHeight")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L32"},"providers/provider.ts:32")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"blockreference"},"BlockReference"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"BlockReference"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"blockId"),": ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/modules/providers_provider#blockid"},(0,i.kt)("inlineCode",{parentName:"a"},"BlockId")),"  } ","|"," { ",(0,i.kt)("inlineCode",{parentName:"p"},"finality"),": ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/modules/providers_provider#finality"},(0,i.kt)("inlineCode",{parentName:"a"},"Finality")),"  } ","|"," { ",(0,i.kt)("inlineCode",{parentName:"p"},"sync_checkpoint"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"genesis"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"earliest_available"'),"  }"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L36"},"providers/provider.ts:36")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"blockshardid"},"BlockShardId"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"BlockShardId"),": [",(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/modules/providers_provider#blockid"},(0,i.kt)("inlineCode",{parentName:"a"},"BlockId")),", ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/modules/providers_provider#shardid"},(0,i.kt)("inlineCode",{parentName:"a"},"ShardId")),"]"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L130"},"providers/provider.ts:130")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"chunkhash"},"ChunkHash"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"ChunkHash"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L128"},"providers/provider.ts:128")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"chunkid"},"ChunkId"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"ChunkId"),": ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/modules/providers_provider#chunkhash"},(0,i.kt)("inlineCode",{parentName:"a"},"ChunkHash"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/modules/providers_provider#blockshardid"},(0,i.kt)("inlineCode",{parentName:"a"},"BlockShardId"))),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L131"},"providers/provider.ts:131")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"finality"},"Finality"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"Finality"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"optimistic"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"near-final"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"final"')),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L34"},"providers/provider.ts:34")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"merklepath"},"MerklePath"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"MerklePath"),": ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.MerkleNode"},(0,i.kt)("inlineCode",{parentName:"a"},"MerkleNode")),"[]"),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L266"},"providers/provider.ts:266")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"rpcqueryrequest"},"RpcQueryRequest"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"RpcQueryRequest"),": ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.ViewAccountRequest"},(0,i.kt)("inlineCode",{parentName:"a"},"ViewAccountRequest"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.ViewCodeRequest"},(0,i.kt)("inlineCode",{parentName:"a"},"ViewCodeRequest"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.ViewStateRequest"},(0,i.kt)("inlineCode",{parentName:"a"},"ViewStateRequest"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.ViewAccountRequest"},(0,i.kt)("inlineCode",{parentName:"a"},"ViewAccountRequest"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.ViewAccessKeyRequest"},(0,i.kt)("inlineCode",{parentName:"a"},"ViewAccessKeyRequest"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.ViewAccessKeyListRequest"},(0,i.kt)("inlineCode",{parentName:"a"},"ViewAccessKeyListRequest"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.CallFunctionRequest"},(0,i.kt)("inlineCode",{parentName:"a"},"CallFunctionRequest"))," & ",(0,i.kt)("a",{parentName:"p",href:"/near_docs/zh-CN/tools/near-api-js/reference/modules/providers_provider#blockreference"},(0,i.kt)("inlineCode",{parentName:"a"},"BlockReference"))),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L408"},"providers/provider.ts:408")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"shardid"},"ShardId"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"ShardId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L129"},"providers/provider.ts:129")))}u.isMDXComponent=!0}}]);