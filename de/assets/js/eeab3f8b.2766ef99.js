"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[2602],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6705:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"What's Pando Leaf",date:new Date("2021-07-22T22:33:07.000Z")},c=void 0,u={unversionedId:"leaf/intro",id:"leaf/intro",isDocsHomePage:!1,title:"What's Pando Leaf",description:"Pando Leaf is a decentralized financial network built with the Mixin MTG (Mixin Trusted Group) technology, a place where you can deposit collateral to generate and destory Pando USD(pUSD) and destroy it when repaying the generated pUSD balance.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/leaf/intro.md",sourceDirName:"leaf",slug:"/leaf/intro",permalink:"/de/docs/leaf/intro",version:"current",frontMatter:{title:"What's Pando Leaf",date:"2021-07-22T22:33:07.000Z"},sidebar:"docs",previous:{title:"Which tokens are supported?",permalink:"/de/docs/lake/faqs/supported-tokens"},next:{title:"Pando USD",permalink:"/de/docs/leaf/pusd"}},s=[{value:"How does Pando Leaf work?",id:"how-does-pando-leaf-work",children:[]},{value:"Auction",id:"auction",children:[]}],p={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leaf.pando.im"},"Pando Leaf")," is a decentralized financial network built with the Mixin MTG (",(0,o.kt)("a",{parentName:"p",href:"https://developers.mixin.one/document/mainnet/mtg/exchange"},"Mixin Trusted Group"),") technology, a place where you can deposit collateral to generate and destory ",(0,o.kt)("a",{parentName:"p",href:"./pusd"},"Pando USD(pUSD)")," and destroy it when repaying the generated pUSD balance."),(0,o.kt)("h2",{id:"how-does-pando-leaf-work"},"How does Pando Leaf work?"),(0,o.kt)("p",null,"Depositing collaterals and repaying the generated pUSD balance both happen in a ",(0,o.kt)("strong",{parentName:"p"},"vault"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Vaults are not free. Generating the stablecoin requires the payment of stability fee. To reclaim collateral, users must repay the previously generated stablecoin and the accumulated stability fee."),(0,o.kt)("li",{parentName:"ul"},"Vaults are required to be overcollateralized. Vault owners should uphold the liquidation price/liquidation ratio (which is the minimum collateralization ratio) to avoid the ",(0,o.kt)("strong",{parentName:"li"},"liquidation")," of their positions.")),(0,o.kt)("p",null,"When a vault is liquidated, a liquidation penalty is applied and collateral is sold to repay the vault\u2019s outstanding stablecoin balance."),(0,o.kt)("p",null,"For more techincal details, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/developer/leaf/design"},"Pando Leaf Technical Design")),(0,o.kt)("h2",{id:"auction"},"Auction"),(0,o.kt)("p",null,"Anyone can participate in the auction if a vault breaches the minimum required collateralization ratio and becomes liquidated."),(0,o.kt)("p",null,"There are two phases of the auction - For the first phase, participants bid at an increment of not less than 3% of the previous bidding amount to cover the highest amount of the outstanding debt. If within the limit of 12 hours, no one is willing to cover the total debt, the auction is over and the bidder who is willing to cover the highest amount of the debt will take all of the collateral home. Or if there is someone who bids to cover the total debt, then the auction will move to the second phase."),(0,o.kt)("p",null,"For the second phase, participants bid at a decrement of no less than 3% of the previous bidding amount on accepting the smallest part of the collateral for the payment of the total debt."))}d.isMDXComponent=!0}}]);