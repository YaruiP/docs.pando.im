"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[6842],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),y=r,h=d["".concat(l,".").concat(y)]||d[y]||p[y]||i;return n?o.createElement(h,a(a({ref:t},u),{},{components:n})):o.createElement(h,a({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},274:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={title:"What's Pando Rings",sidebar_position:1,date:new Date("2021-07-22T22:33:07.000Z")},l=void 0,c={unversionedId:"rings/intro",id:"rings/intro",isDocsHomePage:!1,title:"What's Pando Rings",description:"Pando Rings is an algorithmic, autonomous interest rate protocol built with Mixin MTG (Mixin Trusted Group) technology, an alternative to smart contracts on Mixin Network.",source:"@site/docs/rings/intro.md",sourceDirName:"rings",slug:"/rings/intro",permalink:"/ko/docs/rings/intro",version:"current",sidebarPosition:1,frontMatter:{title:"What's Pando Rings",sidebar_position:1,date:"2021-07-22T22:33:07.000Z"},sidebar:"docs",previous:{title:"Emergency Shutdown",permalink:"/ko/docs/leaf/faqs/emergency-shutdown"},next:{title:"Supplying assets to Pando Rings",permalink:"/ko/docs/rings/tutorials/how-to-supply"}},u=[{value:"How does Pando Rings work?",id:"how-does-pando-rings-work",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pando Rings is an algorithmic, autonomous interest rate protocol built with Mixin MTG (Mixin Trusted Group) technology, an alternative to smart contracts on Mixin Network."),(0,i.kt)("p",null,"It is a place where you can lend or borrow cryptocurrencies. You can think of it as an open market for money. It lets users deposit cryptocurrencies and earn interest, or borrow other cryptoassets against them."),(0,i.kt)("p",null,"The interest rates for supplying and borrowing are adjusted algorithmically based on supply and demand."),(0,i.kt)("h2",{id:"how-does-pando-rings-work"},"How does Pando Rings work?"),(0,i.kt)("p",null,"Supplied assets in Pando Rings are tracked in tokens called rTokens, Pando Rings' native tokens. rTokens are ERC-20 tokens that represent claims to a portion of an asset pool in Pando Rings."),(0,i.kt)("p",null,"For example, if you deposit BTC into Pando Rings, it is converted to rBTC. If you deposit ETH, it will be converted to rETH. rTokens are available in the connected wallet for further transactional purposes."),(0,i.kt)("p",null,"As the money market earns interest (borrowing increases), rTokens earn interest and become convertible to more of the underlying assets. If you deposit multiple coins, they'll each earn interest based on their individual rToken interest rates. You earn interest on Pando Rings by holding the rTokens."),(0,i.kt)("p",null,"Lending in Pando Rings is straightforward. After selecting the asset you wish to supply liquidity for and signing the transaction through your wallet, you instantly add the asset to the pool and start earning interest in real-time. At the same time, the assets are converted to rTokens."),(0,i.kt)("p",null,"Borrowing is a bit more complicated. To borrow, supplying is not enough - you have to make sure that you also have pledged, locking your rTokens into the system as collateral to earn the Borrowing Power (Borrow Balance). Every asset that is available for supply will add a different amount of borrowing power based on its collateral factor. Users can then borrow according to the Total Borrowing Power (Borrow Limit) they have."),(0,i.kt)("p",null,"There are shortcuts if your goal is to borrow - Quick Supply function is for you to quickly get the borrow balance as it enables you pledge when you supply the asset. Quick Borrow enables you to get the loan right away when you supply an asset."),(0,i.kt)("p",null,"Similar to many other DeFi projects, Pando Rings works with the concept of overcollateralization. This means that borrowers have to supply more value than they wish to borrow to avoid liquidation."))}d.isMDXComponent=!0}}]);