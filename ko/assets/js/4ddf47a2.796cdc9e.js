"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[2331],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),k=o,f=d["".concat(s,".").concat(k)]||d[k]||p[k]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},517:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"Liquidity Provider Token (LP Token)",sidebar_position:1,date:new Date("2021-08-15T22:33:07.000Z")},s=void 0,c={unversionedId:"lake/key-concepts/lp-token",id:"lake/key-concepts/lp-token",isDocsHomePage:!1,title:"Liquidity Provider Token (LP Token)",description:"Liquidity provider tokens or LP tokens are ERC-20 tokens issued to liquidity providers on Pando Lake / 4swap. You can think of it as an IOU or a receipt.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/lake/key-concepts/lp-token.md",sourceDirName:"lake/key-concepts",slug:"/lake/key-concepts/lp-token",permalink:"/ko/docs/lake/key-concepts/lp-token",version:"current",sidebarPosition:1,frontMatter:{title:"Liquidity Provider Token (LP Token)",sidebar_position:1,date:"2021-08-15T22:33:07.000Z"},sidebar:"docs",previous:{title:"Listing assets and adding pools",permalink:"/ko/docs/lake/tutorials/listing"},next:{title:"Automated Market Maker (AMM)",permalink:"/ko/docs/lake/key-concepts/amm-mechanism"}},u=[],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Liquidity provider tokens or LP tokens are ERC-20 tokens issued to liquidity providers on Pando Lake / 4swap. You can think of it as an IOU or a receipt. "),(0,i.kt)("p",null,"LP tokens are used to track individual contributions to the overall liquidity pool, as LP tokens held correspond proportionally to the share of liquidity in the overall pool."),(0,i.kt)("p",null,"At the most basic level, LP tokens work on the following formula:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Total Value of Liquidity Pool / Circulating Supply of LP Tokens =  Value of 1 LP Token")),(0,i.kt)("p",null,"Just like other assets, the LP tokens can be transerred and traded.  "),(0,i.kt)("p",null,"Whenever a trade occurs, a ",(0,i.kt)("a",{parentName:"p",href:"./trading-fee"},"fee")," is charged to the transaction sender. This fee is distributed pro-rata to all LPs in the pool upon completion of the trade."),(0,i.kt)("p",null,'To retrieve the underlying liquidity, plus any fees accrued, liquidity providers can remove liquidity, "burning" their liquidity tokens. This will allow them to exchange LP tokens for their portion of the liquidity pool, plus the proportional fee allocation. ',(0,i.kt)("strong",{parentName:"p"},"The yield will not be distributed while the user is still holding the LP tokens.")))}d.isMDXComponent=!0}}]);