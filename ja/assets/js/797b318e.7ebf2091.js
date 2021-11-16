"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[1862],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5028:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],p={title:"What's Pando Lake",date:new Date("2021-07-22T22:33:07.000Z")},s=void 0,l={unversionedId:"lake/intro",id:"lake/intro",isDocsHomePage:!1,title:"What's Pando Lake",description:"Pando Lake is a decentralized protocol for automated liquidity provision built with the Mixin MTG (Mixin Trusted Group) technology, an alternative to smart contracts on Mixin Network.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/lake/intro.md",sourceDirName:"lake",slug:"/lake/intro",permalink:"/ja/docs/lake/intro",version:"current",frontMatter:{title:"What's Pando Lake",date:"2021-07-22T22:33:07.000Z"},sidebar:"docs",previous:{title:"User Manuals",permalink:"/ja/docs/intro"},next:{title:"Get Started",permalink:"/ja/docs/lake/tutorials/get-started"}},c=[],u={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://lake.pando.im"},"Pando Lake")," is a decentralized protocol for automated liquidity provision built with the Mixin MTG (Mixin Trusted Group) technology, an alternative to smart contracts on Mixin Network."),(0,o.kt)("p",null,"It uses combined algorithms - functioning on a Curve-like, bespoke low slippage, low trading fee algorithm specifically for swapping between stablecoins and on the constant product formula ",(0,o.kt)("inlineCode",{parentName:"p"},"x*y=k")," for the rest of pairs."),(0,o.kt)("p",null,"Each pair manages a liquidity pool made up of reserves of two tokens. The prices of the pair tokens are directly determined by the reserve balances."),(0,o.kt)("p",null,"Users can swap at a specific crypto assets market(pair) and/or become liquidity providers."),(0,o.kt)("p",null,"For the pairs ",(0,o.kt)("inlineCode",{parentName:"p"},"pUSD-USDT(ERC-20)"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"pUSD-USDT(TRC-20)"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"pUSD-USDC"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"pUSD-DAI"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"BTC-wBTC"),", the swapping fee is 0.04%. For the rest of pairs, the swapping fee is 0.3%."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"./key-concepts/trading-fee"},"trading fee")," is paid to all liquidity providers proportional to their shares of the liquidity pool."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://4swap.org"},"4swap"),' provides a mechanism named "Broker" that users interact with the protocol. Pando Lake  has its own Broker to serve the users. Please refer to ',(0,o.kt)("a",{parentName:"p",href:"faqs/lake-vs-4swap"},'"Lake vs 4swap"')," for more information."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u2192")," ",(0,o.kt)("a",{parentName:"p",href:"https://4swap.org"},"Visit 4swap.org"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"\u2192")," ",(0,o.kt)("a",{parentName:"p",href:"https://lake.pando.im"},"Visit Pando Lake")))}d.isMDXComponent=!0}}]);