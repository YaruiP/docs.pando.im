"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[5972],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return y}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),y=o,f=d["".concat(c,".").concat(y)]||d[y]||s[y]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2445:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={title:"Liquidation",date:new Date("2021-09-04T12:33:07.000Z")},c=void 0,u={unversionedId:"rings/key-concepts/liquidation",id:"rings/key-concepts/liquidation",isDocsHomePage:!1,title:"Liquidation",description:"In Pando Rings, if the value of your borrowing rises above the level of your borrowing capacity, liquidation will happen. A liquidator is allowed to pay back up to 50% of your borrowed assets and get your corresponding collateral at a discounted price. The liquidator can choose the debt they want to pay back and the type of collateral they would like to receive.",source:"@site/docs/rings/key-concepts/liquidation.md",sourceDirName:"rings/key-concepts",slug:"/rings/key-concepts/liquidation",permalink:"/docs/rings/key-concepts/liquidation",version:"current",frontMatter:{title:"Liquidation",date:"2021-09-04T12:33:07.000Z"},sidebar:"docs",previous:{title:"Interest Rate Determination",permalink:"/docs/rings/key-concepts/interest-model"},next:{title:"Supported Crypto",permalink:"/docs/rings/key-concepts/supported-crypto"}},p=[],s={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In Pando Rings, if the value of your borrowing rises above the level of your borrowing capacity, liquidation will happen. A liquidator is allowed to pay back ",(0,i.kt)("strong",{parentName:"p"},"up to 50%")," of your borrowed assets and get your corresponding collateral at a discounted price. The liquidator ",(0,i.kt)("strong",{parentName:"p"},"can choose")," the debt they want to pay back and the type of collateral they would like to receive. "),(0,i.kt)("p",null,"For example, if you pledged BTC, ETH and LTC to get ",(0,i.kt)("a",{parentName:"p",href:"./glossary"},"pUSD")," and DOT. Both of your pUSD and DOT debt are now in liquidation. A liquidator can choose to just pay back some pUSD debt and receive BTC, as long as it is within the limit of the BTC amount you provided. "),(0,i.kt)("p",null,"You will not be able to borrow, unpledge or withdraw from your pledged assets while you are in liquidation. "),(0,i.kt)("p",null,"After liquidation, your loan will be reduced to a safe level while you will lose your corresponding collateral. "),(0,i.kt)("p",null,"Several scenarios can lead to liquidation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The interest on the borrowed funds is higher than the interest on the pledged assets, and it accumulates over time "),(0,i.kt)("li",{parentName:"ul"},"The price of the collateral suddenly drops "),(0,i.kt)("li",{parentName:"ul"},"The price of the borrowed asset suddenly rise sharply")))}d.isMDXComponent=!0}}]);