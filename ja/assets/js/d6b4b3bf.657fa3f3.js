"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[8145],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8468:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={title:"Price Oracles",date:new Date("2021-08-13T12:33:07.000Z")},s=void 0,l={unversionedId:"leaf/key-concepts/price-oracles",id:"leaf/key-concepts/price-oracles",isDocsHomePage:!1,title:"Price Oracles",description:'Current price in Pando Leaf is not real-time market price of the assets. Instead, it delays 30 minutes - that is why you see the "Next Price". This design is to allow time for users to respond so as to mitigate the risk of liquidation from sudden decrease in the collateralization ratio as a result of potential extreme market volatility.',source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/leaf/key-concepts/price-oracles.md",sourceDirName:"leaf/key-concepts",slug:"/leaf/key-concepts/price-oracles",permalink:"/ja/docs/leaf/key-concepts/price-oracles",version:"current",frontMatter:{title:"Price Oracles",date:"2021-08-13T12:33:07.000Z"},sidebar:"docs",previous:{title:"Liquidation",permalink:"/ja/docs/leaf/key-concepts/liquidation"},next:{title:"Pando Leaf MTG",permalink:"/ja/docs/leaf/key-concepts/mtg"}},u=[],p={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Current price in Pando Leaf is not real-time market price of the assets. Instead, it delays 30 minutes - that is why you see the "Next Price". This design is to allow time for users to respond so as to mitigate the risk of liquidation from sudden decrease in the collateralization ratio as a result of potential extreme market volatility.'))}f.isMDXComponent=!0}}]);