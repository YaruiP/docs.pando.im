"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[4070],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},649:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={title:"Pando Leaf Stability Fee Changes",author:"Pando",author_title:"Pando Team",author_image_url:"https://docs.pando.im/img/logo.png",tags:["product updates"]},c=void 0,p={permalink:"/blog/2022/05/31/pando-leaf-stability-fee-decrease",source:"@site/blog/2022-05-31-pando-leaf-stability-fee-decrease.md",title:"Pando Leaf Stability Fee Changes",description:"Pando Leaf has lowered the stability fees across collaterals.",date:"2022-05-31T00:00:00.000Z",formattedDate:"May 31, 2022",tags:[{label:"product updates",permalink:"/blog/tags/product-updates"}],readingTime:1.135,truncated:!1,nextItem:{title:"Recent updates on Pando",permalink:"/blog/2022/05/31/recent development"}},u=[],s={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pando Leaf has lowered the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.pando.im/docs/leaf/key-concepts/vaults"},"stability fees")," across collaterals."),(0,o.kt)("p",null,"Specifically, the changes are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Decrease the BTC Stability Fee from 4.5% to 1%."),(0,o.kt)("li",{parentName:"ul"},"Decrease the sETH-BTC Stability Fee from 5.5% to 1%."),(0,o.kt)("li",{parentName:"ul"},"Decrease the ETH Stability Fee from 5.5% to 1.5%."),(0,o.kt)("li",{parentName:"ul"},"Decrease the EOS Stability Fee from 5.5% to 1.5%."),(0,o.kt)("li",{parentName:"ul"},"Decrease the XIN Stability Fee from 5.5% to 1.5%."),(0,o.kt)("li",{parentName:"ul"},"Decrease the DOGE Stability Fee from 5.5% to 1.5%."),(0,o.kt)("li",{parentName:"ul"},"Decrease the BCH Stability Fee from 5.5% to 1.5%."),(0,o.kt)("li",{parentName:"ul"},"Decrease the LTC Stability Fee from 5.5% to 1.5%."),(0,o.kt)("li",{parentName:"ul"},"Decrease the FIL Stability Fee from 5.5% to 1.5%."),(0,o.kt)("li",{parentName:"ul"},"Decrease the ZEC Stability Fee from 5.5% to 1.5%."),(0,o.kt)("li",{parentName:"ul"},"Decrease the DOT Stability Fee from 5.5% to 1.5%."),(0,o.kt)("li",{parentName:"ul"},"Decrease the UNI Stability Fee from 5.5% to 1.5%."),(0,o.kt)("li",{parentName:"ul"},"Decrease the MOB Stability Fee from 5.5% to 1.5%.")),(0,o.kt)("h4",{id:"what-does-this-mean-to-you"},"What does this mean to you?"),(0,o.kt)("p",null,"With these changes, minting pUSD against the above mentioned collateral assets is cheaper for you. If combining with other Pando products, you can even have a potential of earning sizable yields. For example, currently you can now supply pUSD in ",(0,o.kt)("a",{parentName:"p",href:"https://rings.pando.im/#/"},"Pando Rings")," and enjoy the APY for supplying pUSD at around 15.6% while borrowing pUSD from Pando Leaf at only 1% - 1.5%. As you can see, the loan grows at a lower rate than the principal."))}f.isMDXComponent=!0}}]);