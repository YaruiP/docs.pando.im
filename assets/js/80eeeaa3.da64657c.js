"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[7353],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||r;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4335:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var o=n(7462),i=n(3366),r=(n(7294),n(3905)),a=["components"],s={title:"How to update the icon of LP token",date:new Date("2021-11-13T22:33:07.000Z")},l=void 0,c={unversionedId:"lake/faqs/how-to-update-lp-token-icon",id:"lake/faqs/how-to-update-lp-token-icon",isDocsHomePage:!1,title:"How to update the icon of LP token",description:"The icon of LP token is generated by 4swap-icon-gen.",source:"@site/docs/lake/faqs/how-to-update-lp-token-icon.md",sourceDirName:"lake/faqs",slug:"/lake/faqs/how-to-update-lp-token-icon",permalink:"/docs/lake/faqs/how-to-update-lp-token-icon",version:"current",frontMatter:{title:"How to update the icon of LP token",date:"2021-11-13T22:33:07.000Z"},sidebar:"docs",previous:{title:"Where can I see liquidity reward\uff1f",permalink:"/docs/lake/faqs/where-can-I-see-liquidity-reward"},next:{title:"Which tokens are supported?",permalink:"/docs/lake/faqs/supported-tokens"}},p=[{value:"1. Submit latest asset icon to Mixin Network",id:"1-submit-latest-asset-icon-to-mixin-network",children:[]},{value:"2. Generate the icon of LP token",id:"2-generate-the-icon-of-lp-token",children:[]},{value:"3. Submit new LP token icon to Mixin Network",id:"3-submit-new-lp-token-icon-to-mixin-network",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The icon of LP token is generated by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fox-one/4swap-icon-gen"},(0,r.kt)("inlineCode",{parentName:"a"},"4swap-icon-gen")),"."),(0,r.kt)("p",null,"Please follow the steps below to update the icon of LP token."),(0,r.kt)("h2",{id:"1-submit-latest-asset-icon-to-mixin-network"},"1. Submit latest asset icon to Mixin Network"),(0,r.kt)("p",null,"If not, please refer ",(0,r.kt)("a",{parentName:"p",href:"../tutorials/listing"},"this tutorial")," to submit the asset icon."),(0,r.kt)("p",null,"Before you can generate the icon of LP token, you need to make sure new asset icon has been deployed to Mixin Network."),(0,r.kt)("p",null,"To check the status of new asset icon, please visit ",(0,r.kt)("inlineCode",{parentName:"p"},"https://mixin.one/snapshots/YOUR_ASSET_SYMBOL_NAME")," in browser. The webpage will display the asset's information, include the asset's icon."),(0,r.kt)("h2",{id:"2-generate-the-icon-of-lp-token"},"2. Generate the icon of LP token"),(0,r.kt)("p",null,"Download the latest version of  ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fox-one/4swap-icon-gen"},(0,r.kt)("inlineCode",{parentName:"a"},"4swap-icon-gen"))," and build it with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go build\n")),(0,r.kt)("p",null,"then run it with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./4swap-icon-gen -config YOUR_KEYSTORE_FILE -a0 1ST_ASSET_ID -a1 2ND_ASSET_ID\n")),(0,r.kt)("p",null,"in which,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"YOUR_KEYSTORE_FILE")," is the keystore file of your account.\nYou can get it from ",(0,r.kt)("a",{parentName:"li",href:"https://developers.mixin.one/dashboard"},"Mixin Developer Dashboard"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1ST_ASSET_ID")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"2ND_ASSET_ID")," are the asset IDs of the assets you want to generate the icon of LP token.\nYou can get it by visiting ",(0,r.kt)("inlineCode",{parentName:"li"},"https://mixin.one/snapshots/YOUR_ASSET_SYMBOL_NAME")," in browser. The url will change from the symbol to the asset ID.")),(0,r.kt)("p",null,"This command will fetch the latest icon from Mixin Network and generate the icon of LP token at the current directory."),(0,r.kt)("h2",{id:"3-submit-new-lp-token-icon-to-mixin-network"},"3. Submit new LP token icon to Mixin Network"),(0,r.kt)("p",null,"Like other assets' icons, you need to submit the new LP token icon to Mixin Network. Visit ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MixinNetwork/asset-profile/"},"https://github.com/MixinNetwork/asset-profile/")," in browser to submit it."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Please create a pull request when you have finished. It usually takes about 1~2 days for Mixin Network to process your pull request."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"")))}d.isMDXComponent=!0}}]);