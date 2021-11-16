"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[8772],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,k=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?o.createElement(k,r(r({ref:t},p),{},{components:n})):o.createElement(k,r({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8303:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],s={title:"How to update the icon of LP token",date:new Date("2021-11-13T22:33:07.000Z")},l=void 0,c={unversionedId:"lake/faqs/how-to-update-lp-token-icon",id:"lake/faqs/how-to-update-lp-token-icon",isDocsHomePage:!1,title:"How to update the icon of LP token",description:"The icon of LP token is generated by 4swap-icon-gen.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/lake/faqs/how-to-update-lp-token-icon.md",sourceDirName:"lake/faqs",slug:"/lake/faqs/how-to-update-lp-token-icon",permalink:"/ko/docs/lake/faqs/how-to-update-lp-token-icon",version:"current",frontMatter:{title:"How to update the icon of LP token",date:"2021-11-13T22:33:07.000Z"},sidebar:"docs",previous:{title:"Where can I see liquidity reward\uff1f",permalink:"/ko/docs/lake/faqs/where-can-I-see-liquidity-reward"},next:{title:"Which tokens are supported?",permalink:"/ko/docs/lake/faqs/supported-tokens"}},p=[{value:"1. Submit latest asset icon to Mixin Network",id:"1-submit-latest-asset-icon-to-mixin-network",children:[]},{value:"2. Generate the icon of LP token",id:"2-generate-the-icon-of-lp-token",children:[]},{value:"3. Submit new LP token icon to Mixin Network",id:"3-submit-new-lp-token-icon-to-mixin-network",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The icon of LP token is generated by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fox-one/4swap-icon-gen"},(0,i.kt)("inlineCode",{parentName:"a"},"4swap-icon-gen")),"."),(0,i.kt)("p",null,"Please follow the steps below to update the icon of LP token."),(0,i.kt)("h2",{id:"1-submit-latest-asset-icon-to-mixin-network"},"1. Submit latest asset icon to Mixin Network"),(0,i.kt)("p",null,"If not, please refer ",(0,i.kt)("a",{parentName:"p",href:"../tutorials/listing"},"this tutorial")," to submit the asset icon."),(0,i.kt)("p",null,"Before you can generate the icon of LP token, you need to make sure new asset icon has been deployed to Mixin Network."),(0,i.kt)("p",null,"To check the status of new asset icon, please visit ",(0,i.kt)("inlineCode",{parentName:"p"},"https://mixin.one/snapshots/YOUR_ASSET_SYMBOL_NAME")," in browser. The webpage will display the asset's information, include the asset's icon."),(0,i.kt)("h2",{id:"2-generate-the-icon-of-lp-token"},"2. Generate the icon of LP token"),(0,i.kt)("p",null,"Download the latest version of  ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fox-one/4swap-icon-gen"},(0,i.kt)("inlineCode",{parentName:"a"},"4swap-icon-gen"))," and build it with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go build\n")),(0,i.kt)("p",null,"then run it with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./4swap-icon-gen -config YOUR_KEYSTORE_FILE -a0 LP_ASSET_ID -a1 1ST_ASSET_ID -a2 2ND_ASSET_ID\n")),(0,i.kt)("p",null,"in which,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"YOUR_KEYSTORE_FILE")," is the keystore file of your account. You can get it from ",(0,i.kt)("a",{parentName:"li",href:"https://developers.mixin.one/dashboard"},"Mixin Developer Dashboard"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LP_ASSET_ID")," is the asset ID of LP token."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1ST_ASSET_ID")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"2ND_ASSET_ID")," are the asset IDs of the assets you want to generate the icon of LP token. You can get it by visiting ",(0,i.kt)("inlineCode",{parentName:"li"},"https://mixin.one/snapshots/YOUR_ASSET_SYMBOL_NAME")," in browser. The url will change from the symbol to the asset ID.")),(0,i.kt)("p",null,"This command will fetch the latest icons from Mixin Network and generate the icon of LP token in the ",(0,i.kt)("inlineCode",{parentName:"p"},"output")," directory."),(0,i.kt)("p",null,"for example, if you want to generate a new icon for ",(0,i.kt)("inlineCode",{parentName:"p"},"sRUM-XIN"),", you can run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./4swap-icon-gen -config YOUR_KEYSTORE_FILE -a0 a53872c5-b1a3-32da-bbc4-230a7ced69cb -a1 4f2ec12c-22f4-3a9e-b757-c84b6415ea8f -a2 c94ac88f-4671-3976-b60a-09064f1811e8\n")),(0,i.kt)("h2",{id:"3-submit-new-lp-token-icon-to-mixin-network"},"3. Submit new LP token icon to Mixin Network"),(0,i.kt)("p",null,"Like other assets' icons, you need to submit the new LP token icon to Mixin Network. Visit ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/MixinNetwork/asset-profile/"},"https://github.com/MixinNetwork/asset-profile/")," in browser to submit it."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please create a pull request when you have finished. It usually takes about 1~2 days for Mixin Network to process your pull request."))))}d.isMDXComponent=!0}}]);