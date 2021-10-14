"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[7367],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),l=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=l(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),c=l(n),h=o,w=c["".concat(u,".").concat(h)]||c[h]||p[h]||a;return n?r.createElement(w,i(i({ref:e},d),{},{components:n})):r.createElement(w,i({ref:e},d))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1356:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return d},default:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:"Withdrawing assets from Pando Rings",sidebar_position:7,date:new Date("2021-09-04T12:33:07.000Z")},u=void 0,l={unversionedId:"rings/tutorials/how-to-withdraw",id:"rings/tutorials/how-to-withdraw",isDocsHomePage:!1,title:"Withdrawing assets from Pando Rings",description:"When you want to get back the asset you supplied to the market, you will need to withdraw. After withdrawing, you will stop earning supply interest.",source:"@site/docs/rings/tutorials/how-to-withdraw.md",sourceDirName:"rings/tutorials",slug:"/rings/tutorials/how-to-withdraw",permalink:"/zh/docs/rings/tutorials/how-to-withdraw",version:"current",sidebarPosition:7,frontMatter:{title:"Withdrawing assets from Pando Rings",sidebar_position:7,date:"2021-09-04T12:33:07.000Z"},sidebar:"docs",previous:{title:"Repaying your borrow in Pando Rings",permalink:"/zh/docs/rings/tutorials/how-to-repay"},next:{title:"Checking market statistics",permalink:"/zh/docs/rings/tutorials/check-market-stats"}},d=[],p={toc:d};function c(t){var e=t.components,s=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,s,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When you want to get back the asset you supplied to the market, you will need to withdraw. After withdrawing, you will stop earning supply interest. "),(0,a.kt)("p",null,'Click on the supplied asset card on the Me page, then click on "Withdraw", you will then land on the Withdraw page. '),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Available to withdraw")," shows the amount you can withdraw. It is the sum of your unpledged asset amount and the pledged amount that is not covering borrows. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Unpledged")," shows your supplied but unpledged amount of a specific rToken. And ",(0,a.kt)("strong",{parentName:"p"},"Supplying")," shows your supply amount of the asset.  "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(377).Z})),(0,a.kt)("p",null,"The system prioritizes withdrawing from the unpledged amount. "),(0,a.kt)("p",null,"If the amount you intend to withdraw is not more than your unpledged amount, the system will withdraw directly from the unpledged amount. "),(0,a.kt)("p",null,"If you do have unpledged amount and the amount you intend to withdraw is more than the unpledged, you will need to first unpledge certain amount then withdraw all the the unpledged amount to receive it in your wallet. "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(662).Z})),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"You may need ",(0,a.kt)("a",{parentName:"p",href:"https://docs.pando.im/docs/leaf/key-concepts/pando-seed"},"pando seed")," to assist in this operation."))),(0,a.kt)("p",null,"If you don't have any unpledged amount left and your pledged amount is not fully covering borrows, the system will directly withdraw for you from your pledged amount, finishing withdrawing in just one step."),(0,a.kt)("p",null,"If you have outstanding borrow, it is possible that you cannot withdraw the same amount you have supplied. In this case, please return part or total amount of your borrow first. "),(0,a.kt)("p",null,"Please be noted that, if you have outstanding borrow, withdrawing from your pledged amount, or in other words, unpledging rTokens, will reduce your borrow capacity (borrow limit), affecting your loan risk level. The reasoning behind is, because your borrow stays the same, when your borrow limit decreases, your borrow will take a bigger percentage of your borrow limit. Please be cautious with your withdrawing and avoid ",(0,a.kt)("a",{parentName:"p",href:"../key-concepts/liquidation"},"liquidation")," of your pledged assets."))}c.isMDXComponent=!0},377:function(t,e,n){e.Z=n.p+"assets/images/withdraw1-09247b03d670eff4df6959d9dabd58af.jpg"},662:function(t,e,n){e.Z=n.p+"assets/images/withdraw2-0d041f2b4dc5f17d72b7c8130d256c89.jpg"}}]);