"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3585],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24718:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={id:"predeployed-contract",title:"\uc0ac\uc804 \ubc30\ud3ec\ub41c \ucee8\ud2b8\ub799\ud2b8",sidebar_label:"\uc0ac\uc804 \ubc30\ud3ec\ub41c \ucee8\ud2b8\ub799\ud2b8"},p=void 0,s={unversionedId:"tutorials/nfts/js/predeployed-contract",id:"tutorials/nfts/js/predeployed-contract",title:"\uc0ac\uc804 \ubc30\ud3ec\ub41c \ucee8\ud2b8\ub799\ud2b8",description:"\uc27d\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 NFT \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c\uc744 \ud558\uc9c0 \uc54a\uace0\ub3c4 \ub300\uccb4 \ubd88\uac00\ub2a5 \ud1a0\ud070\uc744 \uc27d\uac8c \ub9cc\ub4dc\ub294 \ubc29\ubc95\uc744 \uc54c\uc544\ubcf4\uc138\uc694.",source:"@site/../docs/3.tutorials/nfts/js/0-predeployed.md",sourceDirName:"3.tutorials/nfts/js",slug:"/tutorials/nfts/js/predeployed-contract",permalink:"/near_docs/vi/tutorials/nfts/js/predeployed-contract",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/js/0-predeployed.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"9 thg 3, 2023",sidebarPosition:0,frontMatter:{id:"predeployed-contract",title:"\uc0ac\uc804 \ubc30\ud3ec\ub41c \ucee8\ud2b8\ub799\ud2b8",sidebar_label:"\uc0ac\uc804 \ubc30\ud3ec\ub41c \ucee8\ud2b8\ub799\ud2b8"},sidebar:"\ud29c\ud1a0\ub9ac\uc5bc",previous:{title:"\uc18c\uac1c",permalink:"/near_docs/vi/tutorials/nfts/js/introduction"},next:{title:"\ucee8\ud2b8\ub799\ud2b8 \uad6c\uc870",permalink:"/near_docs/vi/tutorials/nfts/js/skeleton"}},u={},d=[{value:"\uc804\uc81c \uc870\uac74",id:"\uc804\uc81c-\uc870\uac74",level:2},{value:"NFT \ucee8\ud2b8\ub799\ud2b8 \uc0ac\uc6a9",id:"nft-\ucee8\ud2b8\ub799\ud2b8-\uc0ac\uc6a9",level:2},{value:"\uc124\uc815",id:"\uc124\uc815",level:3},{value:"NFT \ubc1c\ud589",id:"nft-\ubc1c\ud589",level:3},{value:"\ub9c8\ubb34\ub9ac",id:"\ub9c8\ubb34\ub9ac",level:2}],m={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\uc27d\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 NFT \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c\uc744 \ud558\uc9c0 \uc54a\uace0\ub3c4 \ub300\uccb4 \ubd88\uac00\ub2a5 \ud1a0\ud070\uc744 \uc27d\uac8c \ub9cc\ub4dc\ub294 \ubc29\ubc95\uc744 \uc54c\uc544\ubcf4\uc138\uc694.")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"JS-SDK\ub294 \ud604\uc7ac ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/near/near-sdk-js/releases/"},(0,l.kt)("inlineCode",{parentName:"a"},"Alpha")))," \ubc84\uc804\uc785\ub2c8\ub2e4. ")),(0,l.kt)("h2",{id:"\uc804\uc81c-\uc870\uac74"},"\uc804\uc81c \uc870\uac74"),(0,l.kt)("p",null,"\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc744 \uc131\uacf5\uc801\uc73c\ub85c \uc644\ub8cc\ud558\ub824\uba74 \ub2e4\uc74c\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wallet.testnet.near.org/create"},"NEAR \uc9c0\uac11")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/tools/near-cli#%EC%84%A4%EC%A0%95"},"NEAR-CLI"))),(0,l.kt)("h2",{id:"nft-\ucee8\ud2b8\ub799\ud2b8-\uc0ac\uc6a9"},"NFT \ucee8\ud2b8\ub799\ud2b8 \uc0ac\uc6a9"),(0,l.kt)("h3",{id:"\uc124\uc815"},"\uc124\uc815"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud130\ubbf8\ub110\uc5d0\uc11c \ub2e4\uc74c \uba85\ub839\uc744 \uc2e4\ud589\ud558\uc5ec \uc0c8\ub85c \ub9cc\ub4e0 \uacc4\uc815\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"li"},"near-cli"),"\ub85c \ub85c\uadf8\uc778\ud569\ub2c8\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"near login\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c \uba85\ub839\uc744 \uc27d\uac8c \ubcf5\uc0ac\ud558\uace0 \ubd99\uc5ec\ub123\uc744 \uc218 \uc788\ub3c4\ub85d \uacc4\uc815 ID\uc5d0 \ub300\ud55c \ud658\uacbd \ubcc0\uc218\ub97c \uc124\uc815\ud569\ub2c8\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export NEARID=YOUR_ACCOUNT_NAME\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},".testnet"),"(\ub610\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"mainnet"),"\uc5d0 \ub300\ud574\uc11c\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},".near"),")\uc744 \ud3ec\ud568\ud558\uc5ec, ",(0,l.kt)("inlineCode",{parentName:"p"},"YOUR_ACCOUNT_NAME"),"\ub97c \ubc29\uae08 \ub85c\uadf8\uc778\ud55c \uacc4\uc815 \uc774\ub984\uc73c\ub85c \ubc14\uafb8\uc138\uc694.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub2e4\uc74c\uc744 \uc2e4\ud589\ud558\uc5ec \ud658\uacbd \ubcc0\uc218\uac00 \uc62c\ubc14\ub974\uac8c \uc124\uc815\ub418\uc5c8\ub294\uc9c0 \ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"echo $NEARID\n")),(0,l.kt)("h3",{id:"nft-\ubc1c\ud589"},"NFT \ubc1c\ud589"),(0,l.kt)("p",null,"NEAR\ub294 \uc0ac\uc6a9\uc790\uac00 \ud1a0\ud070\uc744 \uc790\uc720\ub86d\uac8c \ubc1c\ud589\ud560 \uc218 \uc788\ub3c4\ub85d ",(0,l.kt)("inlineCode",{parentName:"p"},"nft.examples.testnet")," \uacc4\uc815\uc5d0 NFT \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud588\uc2b5\ub2c8\ub2e4. \uc774 \uc0ac\uc804 \ubc30\ud3ec\ub41c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc0ac\uc6a9\ud558\uc5ec \uccab \ubc88\uc9f8 \ud1a0\ud070\uc744 \ubc1c\ud589\ud574 \ubd05\uc2dc\ub2e4!"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud130\ubbf8\ub110\uc5d0\uc11c \uc774 \uba85\ub839\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4. ",(0,l.kt)("strong",{parentName:"li"},"\uc544\ub798 ",(0,l.kt)("inlineCode",{parentName:"strong"},"token_id")," \uac12\uc744 \uace0\uc720\ud55c \ubb38\uc790\uc5f4\ub85c \ubc14\uafd4\uc57c \ud569\ub2c8\ub2e4"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'near call nft.examples.testnet nft_mint \'{"token_id": "TYPE_A_UNIQUE_VALUE_HERE", "receiver_id": "\'$NEARID\'", "metadata": { "title": "GO TEAM", "description": "The Team Goes", "media": "https://bafybeidl4hjbpdr6u6xvlrizwxbrfcyqurzvcnn5xoilmcqbxfbdwrmp5m.ipfs.dweb.link/", "copies": 1}}\' --accountId $NEARID --deposit 0.1\n')),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"media")," URL\uc744 \uc6f9 \uc11c\ubc84\uc5d0\uc11c \ud638\uc2a4\ud305\ub418\ub294 \uc774\ubbf8\uc9c0 \ud30c\uc77c\uc5d0 \ub300\ud55c \ub9c1\ud06c\ub85c \ubc14\uafc0 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\uc751\ub2f5 \uc608\uc2dc: "),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'Log [nft.examples.testnet]: EVENT_JSON:{"standard":"nep171","version":"nft-1.0.0","event":"nft_mint","data":[{"owner_id":"benjiman.testnet","token_ids":["TYPE_A_UNIQUE_VALUE_HERE"]}]}\nTransaction Id 8RFWrQvAsm2grEsd1UTASKpfvHKrjtBdEyXu7WqGBPUr\nTo see the transaction in the transaction explorer, please open this url in your browser\nhttps://explorer.testnet.near.org/transactions/8RFWrQvAsm2grEsd1UTASKpfvHKrjtBdEyXu7WqGBPUr\n\'\'\n')))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uacc4\uc815\uc774 \uc18c\uc720\ud55c \ud1a0\ud070\uc744 \ubcf4\ub824\uba74 \ub2e4\uc74c ",(0,l.kt)("inlineCode",{parentName:"li"},"near-cli")," \uba85\ub839\uc744 \uc0ac\uc6a9\ud558\uc5ec NFT \ucee8\ud2b8\ub799\ud2b8\ub97c \ud638\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"near view nft.examples.testnet nft_tokens_for_owner '{\"account_id\": \"'$NEARID'\"}'\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\uc751\ub2f5 \uc608\uc2dc: "),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "token_id": "0",\n    "owner_id": "dev-xxxxxx-xxxxxxx",\n    "metadata": {\n      "title": "Some Art",\n      "description": "My NFT media",\n      "media": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Olympus_Mons_alt.jpg/1024px-Olympus_Mons_alt.jpg",\n      "media_hash": null,\n      "copies": 1,\n      "issued_at": null,\n      "expires_at": null,\n      "starts_at": null,\n      "updated_at": null,\n      "extra": null,\n      "reference": null,\n      "reference_hash": null\n    },\n    "approved_account_ids": {}\n  }\n]\n')))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"\ucd95\ud558\ud569\ub2c8\ub2e4! NEAR \ube14\ub85d\uccb4\uc778\uc5d0\uc11c \uccab \ubc88\uc9f8 NFT \ud1a0\ud070\uc744 \ubc1c\ud589\ud588\uc2b5\ub2c8\ub2e4!"))," \ud83c\udf89"),(0,l.kt)("p",null,"\ud83d\udc49 \uc774\uc81c ",(0,l.kt)("a",{parentName:"p",href:"http://wallet.testnet.near.org"},"NEAR \uc9c0\uac11"),'\uc73c\ub85c \uc774\ub3d9\ud558\uc5ec "\uc218\uc9d1\ud488" \ud0ed\uc5d0\uc11c NFT\ub97c \ud655\uc778\ud558\uc138\uc694. \ud83d\udc48 '),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\ub9c8\ubb34\ub9ac"},"\ub9c8\ubb34\ub9ac"),(0,l.kt)("p",null,"\uc774 \uae30\ubcf8 \uc608\uc81c\ub294 NEAR\uc5d0\uc11c NFT \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \ud638\ucd9c\ud558\uace0 \ub300\uccb4 \ubd88\uac00\ub2a5 \ud1a0\ud070\uc744 \ub9cc\ub4e4\uae30 \uc2dc\uc791\ud558\ub294 \ub370 \ud544\uc694\ud55c \ubaa8\ub4e0 \ub2e8\uacc4\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774\uc81c \ud504\ub85c\uc138\uc2a4\uc5d0 \uc775\uc219\ud574\uc84c\uc73c\ubbc0\ub85c ",(0,l.kt)("a",{parentName:"p",href:"/tutorials/nfts/js/skeleton"},"\ucee8\ud2b8\ub799\ud2b8 \uc544\ud0a4\ud14d\ucc98"),"\ub85c \uc774\ub3d9\ud558\uc5ec \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uad6c\uc870\uc640 \ucc98\uc74c\ubd80\ud130 \uc790\uccb4 NFT \ucee8\ud2b8\ub799\ud2b8\ub97c \uad6c\ucd95\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"\uc990\uac70\uc6b4 \ubbfc\ud305\ub418\uc138\uc694!"))," \ud83e\ude99"),(0,l.kt)("admonition",{title:"\ubb38\uc11c \ubc84\uc804 \uad00\ub9ac",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\uc774 \uae00\uc744 \uc4f0\ub294 \uc2dc\uc810\uc5d0\uc11c \uc774 \uc608\uc81c\ub294 \ub2e4\uc74c \ubc84\uc804\uc5d0\uc11c \uc791\ub3d9\ud569\ub2c8\ub2e4."),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"near-cli: ",(0,l.kt)("inlineCode",{parentName:"li"},"3.0.0")),(0,l.kt)("li",{parentName:"ul"},"NFT \ud45c\uc900: ",(0,l.kt)("a",{parentName:"li",href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core"},"NEP171"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"1.0.0")," \ubc84\uc804"))))}c.isMDXComponent=!0}}]);