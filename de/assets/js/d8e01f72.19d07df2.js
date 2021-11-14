"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[9161],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),f=i,y=s["".concat(c,".").concat(f)]||s[f]||d[f]||o;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},578:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={title:"Liquidation Ratio",date:"13-08-2021 14:33:07"},c=void 0,u={unversionedId:"leaf/key-concepts/liquidation/liquidation-ratio",id:"leaf/key-concepts/liquidation/liquidation-ratio",isDocsHomePage:!1,title:"Liquidation Ratio",description:"The Liquidation Ratio is the minimum required collateralization level for each Vault type before it is considered undercollateralized and subject to liquidation.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/leaf/key-concepts/liquidation/liquidation-ratio.md",sourceDirName:"leaf/key-concepts/liquidation",slug:"/leaf/key-concepts/liquidation/liquidation-ratio",permalink:"/de/docs/leaf/key-concepts/liquidation/liquidation-ratio",version:"current",frontMatter:{title:"Liquidation Ratio",date:"13-08-2021 14:33:07"}},p=[],d={toc:p};function s(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Liquidation Ratio is the minimum required collateralization level for each Vault type before it is considered undercollateralized and subject to liquidation."),(0,o.kt)("p",null,"Each Vault type\u2019s Liquidation Ratio is determined by a combination of the collateral\u2019s risk profile and the Stability Fee. There may be multiple Vault types for each collateral, with varying Liquidation Ratios and Stability Fees."),(0,o.kt)("p",null,"Liquidation Ratio = (Collateral Amount x Collateral Price) \xf7 Generated pUSD \xd7 100"))}s.isMDXComponent=!0}}]);