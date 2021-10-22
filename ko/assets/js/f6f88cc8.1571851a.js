"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[699],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],p={title:"Swapping",sidebar_position:2,date:new Date("2021-08-15T22:33:07.000Z")},s=void 0,c={unversionedId:"lake/tutorials/swapping",id:"lake/tutorials/swapping",isDocsHomePage:!1,title:"Swapping",description:"\uae30\uc5b4 \uc544\uc774\ucf58\uc744 \ud0ed\ud558\uc5ec \uc2ac\ub9ac\ud53c\uc9c0(slippage)\ub97c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/lake/tutorials/swapping.md",sourceDirName:"lake/tutorials",slug:"/lake/tutorials/swapping",permalink:"/ko/docs/lake/tutorials/swapping",version:"current",sidebarPosition:2,frontMatter:{title:"Swapping",sidebar_position:2,date:"2021-08-15T22:33:07.000Z"},sidebar:"docs",previous:{title:"Providing liquidity",permalink:"/ko/docs/lake/tutorials/providing-liquidity"},next:{title:"Removing liquidity",permalink:"/ko/docs/lake/tutorials/removing-liquidity"}},l=[],u={toc:l};function d(e){var t=e.components,p=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\uae30\uc5b4 \uc544\uc774\ucf58\uc744 \ud0ed\ud558\uc5ec ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pando.im/docs/lake/key-concepts/slippage-impernament-loss"},"\uc2ac\ub9ac\ud53c\uc9c0(slippage)"),"\ub97c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9269).Z})),(0,i.kt)("p",null,"\uc774 \uacbd\ub85c\ub294 \uac70\ub798\uac00 \ucc98\ub9ac\ub420 \ub2e8\uacc4\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(954).Z})),(0,i.kt)("p",null,"\uc54c\uace0\ub9ac\uc998\uc740 \uac00\ub2a5\ud55c \ub9ce\uc740 \uc790\uc0b0\uc744 \ubc1b\uc744 \uc218 \uc788\ub3c4\ub85d \ucd5c\uc801\uc758 \uacbd\ub85c\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7601).Z})," 6\uc790\ub9ac PIN\uc744 \uc785\ub825\ud558\uc5ec \uacb0\uc81c\ub97c \uc644\ub8cc\ud558\uba74 \uac70\ub798 \ub0b4\uc5ed\uc774 \ud31d\uc5c5\ub429\ub2c8\ub2e4. \ub300\ud654 \ucc3d\uc5d0\uc11c\ub3c4 \uac70\ub798 \ub0b4\uc5ed\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9078).Z})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.pando.im/docs/lake/key-concepts/trading-fee"},"\uac70\ub798 \uc218\uc218\ub8cc"),"\ub97c \ubcf4\uc2dc\ub824\uba74 \ud074\ub9ad\ud558\uc138\uc694."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"swapping \uc2dc \uac00\uaca9 \uc601\ud5a5\uc5d0 \uc720\uc758\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4. "),(0,i.kt)("p",{parentName:"div"},"\uac00\uaca9 \uc601\ud5a5\uc774 \ub108\ubb34 \ud06c\ub2e4\ub294 \uac83\uc740 \uac70\ub798\uc758 \uc720\ub3d9\uc131\uc774 \ubd80\uc871\ud558\uac70\ub098 \uac70\ub798 \uae08\uc561\uc774 \ub108\ubb34 \ud06c\ub2e4\ub294 \uac83\uc744 \uc758\ubbf8\ud558\uba70, \uac70\ub798\ub97c \uc9c0\uc18d\ud558\uba74 \uc190\uc2e4\uc774 \ub354 \ucee4\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))))}d.isMDXComponent=!0},9078:function(e,t,n){t.Z=n.p+"assets/images/swap-p-59e48efbeacd1d34e7436fb084faee09.png"},9269:function(e,t,n){t.Z=n.p+"assets/images/swapping-p1-613d930fd3e6426e8ecacb742bee1c91.png"},954:function(e,t,n){t.Z=n.p+"assets/images/swapping-p2-5cb7b824608147171ebf18570b16ce8b.png"},7601:function(e,t,n){t.Z=n.p+"assets/images/swapping-p3-354e62867b4274a7bb29adb5d9926370.png"}}]);