"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[877],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=a,y=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},101:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Paying Back pUSD",sidebar_position:6,date:new Date("2021-08-13T12:33:07.000Z")},c=void 0,u={unversionedId:"leaf/tutorials/payback",id:"leaf/tutorials/payback",isDocsHomePage:!1,title:"Paying Back pUSD",description:"Paying back pUSD is useful when wanting to save a Vault from being liquidated, or the Vault owner wants to decrease the size of their position or to free up the collateral.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/leaf/tutorials/payback.md",sourceDirName:"leaf/tutorials",slug:"/leaf/tutorials/payback",permalink:"/ko/docs/leaf/tutorials/payback",version:"current",sidebarPosition:6,frontMatter:{title:"Paying Back pUSD",sidebar_position:6,date:"2021-08-13T12:33:07.000Z"},sidebar:"docs",previous:{title:"Add Collateral",permalink:"/ko/docs/leaf/tutorials/add-collateral"},next:{title:"Withdrawing Collateral",permalink:"/ko/docs/leaf/tutorials/withdraw"}},s=[],p={toc:s};function f(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Paying back pUSD is useful when wanting to save a Vault from being liquidated, or the Vault owner wants to decrease the size of their position or to free up the collateral. "),(0,o.kt)("p",null,'To pay back, click on "Pay back" to land on the Pay Back page. Fill in the amount you intend to pay back manually or click "Set Max" to pay off all the debts. '),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9777).Z})),(0,o.kt)("p",null,"The debt reduce from 13000 to 12000 pusd after repaying the pusd, and you can also see the details of this repayment in the chat window."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6036).Z})),(0,o.kt)("p",null,'Please be noted that when you click "Set Max", you will be charged slightly higher than the outstanding debt amount to successfully pay off the debt because the interests are calculated and added to the debt real-time. Any excess amount after the payment will be returned to your wallet.  '),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(381).Z})))}f.isMDXComponent=!0},9777:function(e,t,n){t.Z=n.p+"assets/images/leaf-payback-p1-899489e020c0c70fbf130dd695e28876.png"},6036:function(e,t,n){t.Z=n.p+"assets/images/leaf-payback-p2-dc5a39d1e689e9082693d7f60996223d.png"},381:function(e,t,n){t.Z=n.p+"assets/images/payback-p2-c3aefd9dc6600505844191b4430b17fa.png"}}]);