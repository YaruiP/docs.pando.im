"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[2093],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),s=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(f,o(o({ref:e},p),{},{components:n})):a.createElement(f,o({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9129:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Withdrawing Collateral",sidebar_position:7,date:new Date("2021-08-13T12:33:07.000Z")},c=void 0,s={unversionedId:"leaf/tutorials/withdraw",id:"leaf/tutorials/withdraw",isDocsHomePage:!1,title:"Withdrawing Collateral",description:'To withdraw collateral from a Vault and return it to the wallet, click "Withdraw" to proceed.',source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/leaf/tutorials/withdraw.md",sourceDirName:"leaf/tutorials",slug:"/leaf/tutorials/withdraw",permalink:"/ko/docs/leaf/tutorials/withdraw",version:"current",sidebarPosition:7,frontMatter:{title:"Withdrawing Collateral",sidebar_position:7,date:"2021-08-13T12:33:07.000Z"},sidebar:"docs",previous:{title:"Paying Back pUSD",permalink:"/ko/docs/leaf/tutorials/payback"},next:{title:"Participating in the Auction",permalink:"/ko/docs/leaf/tutorials/auction-participation"}},p=[],d={toc:p};function u(t){var e=t.components,l=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'To withdraw collateral from a Vault and return it to the wallet, click "Withdraw" to proceed. '),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4917).Z})),(0,i.kt)("p",null,"Enter the amount you want to\nwithdraw, click withdarw, and\nEnter PIN, the ETH collateral reduce from 4.7947 to 1.7947. You can also see details about this withdraw in chat window."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9502).Z})),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please be noted that withdrawing collateral without first paying back your generated pUSD will result in a lower collateralization ratio and putting the Vault at higher risk for liquidation."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You may need ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pando.im/docs/leaf/key-concepts/pando-seed"},"pando seed")," to assist in this operation."))))}u.isMDXComponent=!0},4917:function(t,e,n){e.Z=n.p+"assets/images/leaf-withdraw-p1-8eb3cbefb88399ff62aa0bf060976dbc.png"},9502:function(t,e,n){e.Z=n.p+"assets/images/leaf-withdraw-p2-6c5c710c6aae46a763532c8ab078634e.png"}}]);