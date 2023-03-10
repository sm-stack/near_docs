"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2735],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),l=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=l(r),m=n,d=h["".concat(i,".").concat(m)]||h[m]||u[m]||o;return r?a.createElement(d,s(s({ref:t},p),{},{components:r})):a.createElement(d,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},99042:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),s=["components"],c={id:"actors",title:"Actors of NEAR"},i=void 0,l={unversionedId:"concepts/basics/actors",id:"concepts/basics/actors",title:"Actors of NEAR",description:"There are 3 main actors interacting to form the NEAR ecosystem:",source:"@site/../docs/1.concepts/basics/actors.md",sourceDirName:"1.concepts/basics",slug:"/concepts/basics/actors",permalink:"/near_docs/concepts/basics/actors",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/basics/actors.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678337636,formattedLastUpdatedAt:"Mar 9, 2023",frontMatter:{id:"actors",title:"Actors of NEAR"}},p={},u=[{value:"Users",id:"users",level:2},{value:"Validators",id:"validators",level:2},{value:"Want to dig deeper?",id:"want-to-dig-deeper",level:2}],h={toc:u};function m(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are 3 main actors interacting to form the NEAR ecosystem:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("strong",{parentName:"li"},"users"),", consuming the services provided by the NEAR network."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("strong",{parentName:"li"},"validators"),", operating the computers that form the decentralized network."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("strong",{parentName:"li"},"blockchain"),", working as the persistent storage for the network's transaction.")),(0,o.kt)("hr",{class:"subsection"}),(0,o.kt)("h2",{id:"users"},"Users"),(0,o.kt)("p",null,"Users can have one or multiple ",(0,o.kt)("a",{parentName:"p",href:"/near_docs/concepts/basics/accounts/model"},"NEAR accounts"),", which they can use to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Transfer")," tokens, such as the native ",(0,o.kt)("a",{parentName:"li",href:"/near_docs/concepts/basics/tokens"},"$NEAR token")," or community-built ones."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Execute")," ",(0,o.kt)("a",{parentName:"li",href:"https://awesomenear.com"},"decentralized apps")," stored in the network, known as ",(0,o.kt)("a",{parentName:"li",href:"/near_docs/concepts/basics/accounts/smartcontract"},"smart contracts"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Develop")," their own decentralized app and store it in the network.")),(0,o.kt)("hr",{class:"subsection"}),(0,o.kt)("h2",{id:"validators"},"Validators"),(0,o.kt)("p",null,"Validators are people distributed around the world, running the infrastructure that underlies the NEAR network. They serve two main jobs:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Execute")," the ",(0,o.kt)("a",{parentName:"li",href:"/near_docs/concepts/basics/transactions/overview"},"transactions")," sent by the users, persisting their outcomes in the blockchain."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Secure")," the network by overseeing the rest of the validators and the blocks they create.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"want-to-dig-deeper"},"Want to dig deeper?"),(0,o.kt)("p",null,"Here are some of the best ",(0,o.kt)("strong",{parentName:"p"},"introductory videos"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"[ ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=Y21YtLzGbH0&feature=youtu.b&t=2656"},"watch")," ] Blockchain 101 Onramp: Deconstructing the Blockchain Ecosystem"),(0,o.kt)("li",{parentName:"ul"},"[ ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=Gd-aNfDqgQY&feature=youtu.be&t=1100"},"watch")," ] What are Decentralized Applications and How Do They Work?"),(0,o.kt)("li",{parentName:"ul"},"[ ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=Y21YtLzGbH0&feature=youtu.b&t=2656"},"watch")," ] The Design of Blockchain-Based Apps"),(0,o.kt)("li",{parentName:"ul"},"[ ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=bBC-nXj3Ng4"},"watch")," ] But how does Bitcoin actually work? ",(0,o.kt)("em",{parentName:"li"},"by 3Blue1Brown"))),(0,o.kt)("p",null,"And you can read more in these ",(0,o.kt)("strong",{parentName:"p"},"educational resources"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://near.org/blog/the-beginners-guide-to-the-near-blockchain/"},"Beginner\u2019s Guide to the NEAR Blockchain")),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://near.org/papers/the-official-near-white-paper/#design-principles"},"Official NEAR white paper")),(0,o.kt)("li",{parentName:"ul"},"Blog post on ",(0,o.kt)("a",{parentName:"li",href:"https://near.org/blog/thresholded-proof-of-stake/"},"Thresholded Proof of Stake"))))}m.isMDXComponent=!0}}]);