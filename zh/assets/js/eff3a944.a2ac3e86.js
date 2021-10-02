"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[7696],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),u=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,h=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?i.createElement(h,a(a({ref:t},s),{},{components:n})):i.createElement(h,a({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4973:function(e,t,n){n.d(t,{Z:function(){return d},I:function(){return s}});var i=n(7294),r=/{\w+}/g,o="{}";function a(e,t){var n=[],a=e.replace(r,(function(e){var r=e.substr(1,e.length-2),a=null==t?void 0:t[r];if(void 0!==a){var l=i.isValidElement(a)?a:String(a);return n.push(l),o}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?a.split(o).reduce((function(e,t,i){var r;return e.concat(t).concat(null!==(r=n[i])&&void 0!==r?r:"")}),""):a.split(o).reduce((function(e,t,r){return[].concat(e,[i.createElement(i.Fragment,{key:r},t,n[r])])}),[])}function l(e){var t=e.children,n=e.values;if("string"!=typeof t)throw console.warn("Illegal <Interpolate> children",t),new Error("The Docusaurus <Interpolate> component only accept simple string values");return a(t,n)}var c=n(7529);function u(e){var t,n=e.id,i=e.message;return null!==(t=c[null!=n?n:i])&&void 0!==t?t:i}function s(e,t){var n,i=e.message;return a(null!==(n=u({message:i,id:e.id}))&&void 0!==n?n:i,t)}function d(e){var t,n=e.children,r=e.id,o=e.values;if("string"!=typeof n)throw console.warn("Illegal <Translate> children",n),new Error("The Docusaurus <Translate> component only accept simple string values");var a=null!==(t=u({message:n,id:r}))&&void 0!==t?t:n;return i.createElement(l,{values:o},a)}},2008:function(e,t,n){n.d(t,{M:function(){return u}});var i=n(7294),r="container_2Pz7",o="title_24BA",a="subtitle_2vvR",l="msg_3ZE1",c=n(4973);function u(e){var t=e.msg,n="";return t&&(n=i.createElement("div",{className:l},t)),i.createElement("div",{className:r},i.createElement("div",{className:o},i.createElement(c.Z,null,"This Article needs additional information.")),i.createElement("div",{className:a},i.createElement(c.Z,null,"Please help improve it by "),i.createElement("a",{href:"https://docs.pando.im/docs/community/contribute"},i.createElement(c.Z,null,"polishing the content"))),n)}},2336:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return d},default:function(){return f}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=n(2008),l=["components"],c={title:"Why did I fail in providing liquidity?",sidebar_position:4,date:new Date("2021-08-15T22:33:07.000Z")},u=void 0,s={unversionedId:"lake/faqs/why-providing-liquidity-fail",id:"lake/faqs/why-providing-liquidity-fail",isDocsHomePage:!1,title:"Why did I fail in providing liquidity?",description:"Improvement,",source:"@site/docs/lake/faqs/why-providing-liquidity-fail.md",sourceDirName:"lake/faqs",slug:"/lake/faqs/why-providing-liquidity-fail",permalink:"/zh/docs/lake/faqs/why-providing-liquidity-fail",version:"current",sidebarPosition:4,frontMatter:{title:"Why did I fail in providing liquidity?",sidebar_position:4,date:"2021-08-15T22:33:07.000Z"},sidebar:"docs",previous:{title:"Why did my transaction fail?",permalink:"/zh/docs/lake/faqs/why-transaction-fail"},next:{title:"Where can I see liquidity reward\uff1f",permalink:"/zh/docs/lake/faqs/where-can-I-see-liquidity-reward"}},d=[],p={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.M,{mdxType:"Improvement"}),(0,o.kt)("p",null,"(to be edited)"),(0,o.kt)("p",null,"The common failure of liquidity injection is caused by exceeding slippage. Please refresh the page to get the latest trading pair data."),(0,o.kt)("p",null,"When injecting liquidity, there is a very important principle: the injection behavior should not change the current trading pair price."),(0,o.kt)("p",null,"Therefore, there is also the concept of slippage when injecting liquidity. When injecting liquidity, the proportion of assets in the liquidity pool is changed due to the trading behavior of others, or in a more general sense, the price of the liquidity pool occurs due to the transaction. Big change. There is a difference between the injected assets and the current liquidity pool ratio. If the difference exceeds a certain ratio, the liquidity injection will fail. That is, slippage is exceeded."),(0,o.kt)("p",null,"There is also a situation where the injection fails, that is, the two assets injected are too small to obtain the minimum amount of LP shares. It will also lead to failure to inject liquidity."),(0,o.kt)("p",null,"If you encounter other situations in the transaction that cause the transaction to fail, please contact our community manager-Chris (ID: 37160854) or ask questions in the Pando Lakeofficial community (ID: 7000103578)"))}f.isMDXComponent=!0}}]);