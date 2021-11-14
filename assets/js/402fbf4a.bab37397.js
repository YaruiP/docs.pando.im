"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[4539],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5265:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={title:"Introducation"},p=void 0,c={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Introducation",description:"Pando Lake / 4swap",source:"@site/developer/intro.md",sourceDirName:".",slug:"/intro",permalink:"/developer/intro",version:"current",lastUpdatedAt:1636868787,formattedLastUpdatedAt:"11/14/2021",frontMatter:{title:"Introducation"},sidebar:"docs",next:{title:"Overview",permalink:"/developer/lake/overview"}},u=[{value:"Pando Lake / 4swap",id:"pando-lake--4swap",children:[]},{value:"Pando Leaf",id:"pando-leaf",children:[]},{value:"Pando Rings",id:"pando-rings",children:[]},{value:"Resources",id:"resources",children:[]}],s={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"pando-lake--4swap"},"Pando Lake / 4swap"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Develop Guide")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developer/lake/guide/using-sdk"},"Using SDK to Trade"),": use a golang sdk to swap crypto at 4swap/Lake."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developer/lake/guide/invoke-wallets"},"Invoke Wallets"),": call the payment dialog up to complete a transfer with Mixin Network compatible wallets.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Specifications")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developer/lake/apis/overview"},"API Reference"),": RESTful API reference."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developer/lake/action-protocol"},"Action Protocol"),": a memo based JSON protocol to swap crypto, add and remove liquidity."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developer/lake/lake-and-4swap"},"Compare Lake and 4swap"),": comparision of Lake and 4swap.")),(0,o.kt)("h2",{id:"pando-leaf"},"Pando Leaf"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Specifications")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developer/leaf/apis/overview"},"API Reference"),": RESTful API reference.")),(0,o.kt)("h2",{id:"pando-rings"},"Pando Rings"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developer/rings/apis"},"API Reference"),": RESTful API reference."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developer/rings/guide"},"SDK Guide"),": An easier and faster way to Connect to Pando Rings engine.")),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developer/resources/examples"},"Examples"))))}d.isMDXComponent=!0}}]);