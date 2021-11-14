"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[7464],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return k}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),k=a,f=s["".concat(c,".").concat(k)]||s[k]||d[k]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},6162:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={title:"\u6982\u8ff0",date:new Date("2021-09-30T14:38:07.000Z")},c=void 0,u={unversionedId:"lake/overview",id:"lake/overview",isDocsHomePage:!1,title:"\u6982\u8ff0",description:"Pando Lake \u662f\u4e00\u4e2a \u5728 Mixin Network \u4e0a\u4f7f\u7528 MTG \u6280\u672f\u6784\u5efa\u7684 Uniswap v2 \u5b9e\u73b0\u3002 \u5f97\u76ca\u4e8eMixin\u8d85\u4e4e\u5bfb\u5e38\u7684TPS\uff0cPando Lake\u5728\u4ea4\u6613\u4e0a\u8868\u73b0\u51fa\u8272\uff0c\u5927\u591a\u6570\u4ea4\u6613\u51e0\u79d2\u949f\u5185\u5c31\u80fd\u5b8c\u6210\u786e\u8ba4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-developer/current/lake/overview.md",sourceDirName:"lake",slug:"/lake/overview",permalink:"/zh/developer/lake/overview",version:"current",lastUpdatedAt:1636868787,formattedLastUpdatedAt:"11/14/2021",frontMatter:{title:"\u6982\u8ff0",date:"2021-09-30T14:38:07.000Z"},sidebar:"docs",previous:{title:"\u4ecb\u7ecd",permalink:"/zh/developer/intro"},next:{title:"\u4f7f\u7528 SDK \u8fdb\u884c\u4ea4\u6613",permalink:"/zh/developer/lake/guide/using-sdk"}},p=[{value:"Pando Lake \u7b80\u4ecb",id:"pando-lake-\u7b80\u4ecb",children:[{value:"\u6cbb\u7406",id:"\u6cbb\u7406",children:[]},{value:"\u6d41\u52a8\u6c60",id:"\u6d41\u52a8\u6c60",children:[]},{value:"LP \u4ee3\u5e01",id:"lp-\u4ee3\u5e01",children:[]}]},{value:"\u64cd\u4f5c",id:"\u64cd\u4f5c",children:[{value:"\u5b58\u5165",id:"\u5b58\u5165",children:[]},{value:"\u53d6\u56de",id:"\u53d6\u56de",children:[]},{value:"\u4ea4\u6613",id:"\u4ea4\u6613",children:[]}]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],d={toc:p};function s(e){var n=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pando Lake \u662f\u4e00\u4e2a \u5728 Mixin Network \u4e0a\u4f7f\u7528 MTG \u6280\u672f\u6784\u5efa\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://uniswap.org"},"Uniswap")," v2 \u5b9e\u73b0\u3002 \u5f97\u76ca\u4e8eMixin\u8d85\u4e4e\u5bfb\u5e38\u7684TPS\uff0cPando Lake\u5728\u4ea4\u6613\u4e0a\u8868\u73b0\u51fa\u8272\uff0c\u5927\u591a\u6570\u4ea4\u6613\u51e0\u79d2\u949f\u5185\u5c31\u80fd\u5b8c\u6210\u786e\u8ba4\u3002"),(0,o.kt)("h2",{id:"pando-lake-\u7b80\u4ecb"},"Pando Lake \u7b80\u4ecb"),(0,o.kt)("h3",{id:"\u6cbb\u7406"},"\u6cbb\u7406"),(0,o.kt)("p",null,"Pando lake \u7531\u4e94\u4e2a\u53ef\u4fe1\u8282\u70b9\u7ef4\u62a4\u3002 \u521b\u5efa\u65b0\u6c60\u4e4b\u7c7b\u7684\u63d0\u8bae\u5fc5\u987b\u81f3\u5c11\u5f97\u5230\u4e09\u4e2a\u8282\u70b9\u7684\u6279\u51c6\u3002"),(0,o.kt)("h3",{id:"\u6d41\u52a8\u6c60"},"\u6d41\u52a8\u6c60"),(0,o.kt)("p",null,"\u6bcf\u4e2a\u6d41\u52a8\u6c60\u6301\u6709\u4e24\u4e2a\u4ee3\u5e01\uff0c\u5b83\u4eec\u5171\u540c\u4ee3\u8868\u8fd9\u4e9b\u8d44\u4ea7\u7684\u4ea4\u6613\u5bf9\u3002 \u6d41\u52a8\u6027\u63d0\u4f9b\u8005\u5c06\u4ee3\u5e01\u5b58\u5165\u6c60\u4e2d\uff0c\u8ba9\u4ea4\u6613\u8005\u8fdb\u884c\u4ea4\u6613\uff1b\u4f5c\u4e3a\u56de\u62a5\uff0c\u4ea4\u6613\u8d39\u7528\u6839\u636e\u6d41\u52a8\u6027\u8d21\u732e\u6bd4\u4f8b\u5168\u90e8\u7ed9\u4e88\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\u3002"),(0,o.kt)("h3",{id:"lp-\u4ee3\u5e01"},"LP \u4ee3\u5e01"),(0,o.kt)("p",null,"\u6bcf\u4e2a\u77ff\u6c60\u90fd\u6709\u4e00\u4e2a\u552f\u4e00\u7684\u4ee3\u5e01\uff08LP Token\uff09\u6765\u4ee3\u8868\u6d41\u901a\u7684\u6d41\u52a8\u6027\u3002 \u6301\u6709LP Token\u662f\u63d0\u4f9b\u6d41\u52a8\u6027\u7684\u8bc1\u660e\uff0c\u63d0\u53d6\u6d41\u52a8\u6027\u4e5f\u9700\u8981\u652f\u4ed8LP Token\u3002"),(0,o.kt)("p",null,"LP Token \u7684\u603b\u5e02\u503c\u7b49\u4e8e\u77ff\u6c60\u4e2d\u4e24\u4e2a\u4ee3\u5e01\u7684\u5e02\u503c\u4e4b\u548c\u3002"),(0,o.kt)("h2",{id:"\u64cd\u4f5c"},"\u64cd\u4f5c"),(0,o.kt)("h3",{id:"\u5b58\u5165"},"\u5b58\u5165"),(0,o.kt)("p",null,"\u589e\u52a0\u6d41\u52a8\u6c60\u7684\u50a8\u5907\u6210\u4e3a\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u5b58\u6b3e\u64cd\u4f5c",src:t(929).Z})),(0,o.kt)("h3",{id:"\u53d6\u56de"},"\u53d6\u56de"),(0,o.kt)("p",null,"\u5c06 LP Token \u652f\u4ed8\u56de\u6d41\u52a8\u6c60\u4ee5\u63d0\u53d6\u5176\u4e2d\u7684 Token\u3002 \u6d41\u52a8\u6c60\u7684\u50a8\u5907\u5c06\u51cf\u5c11\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u53d6\u6b3e\u64cd\u4f5c",src:t(7275).Z})),(0,o.kt)("h3",{id:"\u4ea4\u6613"},"\u4ea4\u6613"),(0,o.kt)("p",null,"\u6d41\u52a8\u6c60\u603b\u662f\u81ea\u52a8\u5904\u7406\u4ea4\u6613\u8005\u7684\u8bf7\u6c42\u3002 \u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u4efb\u610f\u4e00\u65b9\u7684\u6d41\u52a8\u6c60\u8fdb\u884c\u4ea4\u6613\uff0cPando Lake \u6700\u591a\u652f\u6301 4 \u4e2a\u6d41\u52a8\u6c60\u8fdb\u884c\u4e00\u7b14\u4ea4\u6613\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u4ea4\u6613\u64cd\u4f5c",src:t(9458).Z})),(0,o.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,o.kt)("p",null,"Pando Lake \u5b9e\u73b0\u4e86\u53bb\u4e2d\u5fc3\u5316\u53ef\u4fe1\u8282\u70b9\u5171\u8bc6\u7684\u76ee\u6807\uff0c\u4e3a Mixin Network \u7684\u6240\u6709\u7528\u6237\u5e26\u6765\u4e86\u5177\u6709\u591a\u79cd AMM \u516c\u5f0f\u7684 dex \u670d\u52a1\u3002"),(0,o.kt)("p",null,"Pando Lake \u8868\u73b0\u4e0d\u9519\uff0c\u4f46\u8fd8\u8fdc\u8fdc\u4e0d\u591f\u3002 \u6211\u4eec\u6b63\u5728\u5f00\u53d1\u4e00\u4e9b\u65b0\u7684\u6d41\u52a8\u6c60\uff0c\u4ee5\u4f7f\u6d41\u52a8\u6027\u66f4\u52a0\u7075\u6d3b\u548c\u9ad8\u6548\u3002 \u53ef\u4fe1\u8282\u70b9\u7684\u7ba1\u7406\u4e5f\u9700\u8981\u66f4\u52a0\u5f00\u653e\uff0c\u4ee5\u5438\u5f15\u66f4\u591a\u7684\u53c2\u4e0e\u8005\u3002"))}s.isMDXComponent=!0},929:function(e,n,t){n.Z=t.p+"assets/images/pando_lake_deposit_action-5f0f41dc629b4ed403249515302b16fc.png"},9458:function(e,n,t){n.Z=t.p+"assets/images/pando_lake_trade_action-d848c836845355e61f7ad9b662ae7da1.png"},7275:function(e,n,t){n.Z=t.p+"assets/images/pando_lake_withdraw_action-70455055e5ce2e9ac84b314f3350df34.png"}}]);