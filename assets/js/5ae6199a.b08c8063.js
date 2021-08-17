"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[4675],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=d(n),p=r,f=h["".concat(s,".").concat(p)]||h[p]||c[p]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4860:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return h}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Overview",sidebar_position:1,date:new Date("2021-03-20T12:38:07.000Z")},s=void 0,d={unversionedId:"leaf/overview",id:"leaf/overview",isDocsHomePage:!1,title:"Overview",description:"Pando is a decentralized financial network built with the MTG technology, and its underlying financial algorithm is inspired by MakerDao and Synthetix.",source:"@site/developer/leaf/overview.md",sourceDirName:"leaf",slug:"/leaf/overview",permalink:"/developer/leaf/overview",version:"current",lastUpdatedAt:1629195508,formattedLastUpdatedAt:"8/17/2021",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1,date:"2021-03-20T12:38:07.000Z"},sidebar:"tutorialSidebar",previous:{title:"Examples",permalink:"/developer/lake/examples"},next:{title:"Technical Design",permalink:"/developer/leaf/design"}},u=[{value:"An Intro to Pando",id:"an-intro-to-pando",children:[{value:"pUSD",id:"pusd",children:[]},{value:"Pledge",id:"pledge",children:[]},{value:"Vaults",id:"vaults",children:[]},{value:"Interact with Pando",id:"interact-with-pando",children:[]},{value:"Liquidate high-risk vaults",id:"liquidate-high-risk-vaults",children:[]},{value:"Price Oracle",id:"price-oracle",children:[]},{value:"Summary and future works",id:"summary-and-future-works",children:[]}]}],c={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pando is a decentralized financial network built with the MTG technology, and its underlying financial algorithm is inspired by ",(0,o.kt)("a",{parentName:"p",href:"https://makerdao.com"},"MakerDao")," and Synthetix."),(0,o.kt)("p",null,"Pando takes multiple over-collateralized assets and grows multiple Pando assets, which(the grown Pando assets), e.g. pUSD, can also be used as a pledge."),(0,o.kt)("h2",{id:"an-intro-to-pando"},"An Intro to Pando"),(0,o.kt)("h3",{id:"pusd"},"pUSD"),(0,o.kt)("p",null,"pUSD is a stable coin launched on Dec 25, 2020. Since the launch, the backing ratio of pUSD has always been higher than 200%."),(0,o.kt)("h3",{id:"pledge"},"Pledge"),(0,o.kt)("p",null,"Nodes have the ability to add any asset as a pledge by voting. Once nodes vote one asset to be a pledge, anybody can borrow pUSD by providing enough specified asset."),(0,o.kt)("p",null,"Nodes also have the ability to adjust various parameters of pledges by voting."),(0,o.kt)("p",null,"All assets supported by Mixin Network, including BTC, ETH, etc, are potential pledges for Pando."),(0,o.kt)("h3",{id:"vaults"},"Vaults"),(0,o.kt)("p",null,"All approved pledges can be deposited in the Pando multi-signature address to create a vault to generate pUSD for any Pando user."),(0,o.kt)("p",null,"As long as the price of the pledge is higher than the minimum requirement, the creators have the complete control of their vaults."),(0,o.kt)("h3",{id:"interact-with-pando"},"Interact with Pando"),(0,o.kt)("p",null,"Both users and node administrators must use multi-signature transactions to interact with Pando."),(0,o.kt)("p",null,"The methods and parameters of the transactions are all written in the memo which contains extra information of each transfer."),(0,o.kt)("p",null,"Currently, in order to protect user privacy, all information in the memo must be encrypted by the following algorithm:"),(0,o.kt)("p",null,"Pando will generate a pair of ed25519 public and private keys at first, and publish the public key."),(0,o.kt)("p",null,"For each transaction, the user generates a pair of temporary ed25519 public and private keys, and generates a string of 32-bit bytes."),(0,o.kt)("p",null,"The first 16 bits of these bytes will be the key for AES encryption, and the last 16 bits will be the ",(0,o.kt)("inlineCode",{parentName:"p"},"iv")," of AES encryption."),(0,o.kt)("p",null,"These bytes must encrypt the original memo and generate a result we call it encrypted bytes. The client should put encrypted bytes and the user\u2019s public key \u200b\u200btogether and encode in base64 as the final memo for the transfer."),(0,o.kt)("p",null,"The nodes of Pando synchronize all transfers from the Mixin Network. When a node recognizes a valid transfer, it performs a reverse operation to restore the key and iv encrypted by AES, and then decrypts the parameters of the action."),(0,o.kt)("p",null,"The nodes need to ensure that they process the user interaction in the same order to ensure that the data stored in the database is completely consistent with other nodes; It should follow the same order when transferring money to ensure that all nodes choose when completing the transfer in the same utxo."),(0,o.kt)("h3",{id:"liquidate-high-risk-vaults"},"Liquidate high-risk vaults"),(0,o.kt)("p",null,"In order to ensure that there is always enough pledge in Pando to endorse the loaned pUSD, all vaults will require an excess mortgage such as 150%."),(0,o.kt)("p",null,"When the value of the mortgaged assets is insufficient due to market price fluctuations, the vault will enter a high-risk state and be open for liquidation to redeem the pUSD.The liquidation is carried out as auction:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the pUSD got by the auction is enough to pay off the debt in the vault and the liquidation penalty, the auction will sell just the enough amount of pledge to cover the debt and the remaining pledge will be returned to the original owner."),(0,o.kt)("li",{parentName:"ul"},"If the pUSD got from the auction of the pledge is not enough to pay off the debt and the liquidation penalty, the loss will become Pando\u2019s liability and be shared by all nodes.")),(0,o.kt)("h3",{id:"price-oracle"},"Price Oracle"),(0,o.kt)("p",null,"Pando needs to synchronize the prices of the pledged assets to update the collateral rate of the vaults and liquidate the high-risk vaults."),(0,o.kt)("p",null,"The price data of Pando relies on an external decentralized price service. Pando will not use the price data directly."),(0,o.kt)("p",null,"Pando adds an one-hour delay to all price data. During this period, if someone attacks a price service, the nodes can vote to change the state of the pledge to be frozen urgently. Nodes can also vote for new prices."),(0,o.kt)("h3",{id:"summary-and-future-works"},"Summary and future works"),(0,o.kt)("p",null,"Pando has achieved the goal that decentralized the consensus among trusted nodes, bringing the stable coin minting service to all users of the Mixin Network."),(0,o.kt)("p",null,"Pando also reserves the ability to extend the lending to non-stable assets. For example, it can issue a 1:1 token pTesla against Tesla stock on the Mixin network, and then plege the Bitcoin on Pando to generate pTesla, which will build connections between the assets in the Mixin Network and the external assets of outside world."))}h.isMDXComponent=!0}}]);