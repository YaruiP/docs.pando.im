"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[2499],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(n),s=i,y=f["".concat(u,".").concat(s)]||f[s]||d[s]||o;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},135:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],c={title:"Liquidation Ratio",date:new Date("2021-08-13T14:33:07.000Z")},u=void 0,l={unversionedId:"leaf/key-concepts/liquidation/liquidation-ratio",id:"leaf/key-concepts/liquidation/liquidation-ratio",isDocsHomePage:!1,title:"Liquidation Ratio",description:"The Liquidation Ratio is the minimum required collateralization level for each Vault type before it is considered undercollateralized and subject to liquidation.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/leaf/key-concepts/liquidation/liquidation-ratio.md",sourceDirName:"leaf/key-concepts/liquidation",slug:"/leaf/key-concepts/liquidation/liquidation-ratio",permalink:"/ja/docs/leaf/key-concepts/liquidation/liquidation-ratio",version:"current",frontMatter:{title:"Liquidation Ratio",date:"2021-08-13T14:33:07.000Z"}},p=[],d={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Liquidation Ratio is the minimum required collateralization level for each Vault type before it is considered undercollateralized and subject to liquidation."),(0,o.kt)("p",null,"\u5404Vault\u306e\u6e05\u7b97\u6bd4\u7387\u306f\u3001\u62c5\u4fdd\u306e\u30ea\u30b9\u30af\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u3068\u5b89\u5b9a\u6027\u624b\u6570\u6599\u306e\u7d44\u307f\u5408\u308f\u305b\u306b\u3088\u3063\u3066\u6c7a\u5b9a\u3055\u308c\u307e\u3059\u3002 \u62c5\u4fdd\u3054\u3068\u306b\u8907\u6570\u306eVault\u30bf\u30a4\u30d7\u304c\u3042\u308a\u3001\u6e05\u7b97\u6bd4\u7387\u3068\u5b89\u5b9a\u6027\u624b\u6570\u6599\u304c\u7570\u306a\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("p",null,"Liquidation Ratio = (Collateral Amount x Collateral Price) \xf7 Generated pUSD \xd7 100"))}f.isMDXComponent=!0}}]);