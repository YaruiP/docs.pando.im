"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[4414],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(t),d=a,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4973:function(e,n,t){t.d(n,{Z:function(){return p},I:function(){return s}});var r=t(7294),a=/{\w+}/g,o="{}";function i(e,n){var t=[],i=e.replace(a,(function(e){var a=e.substr(1,e.length-2),i=null==n?void 0:n[a];if(void 0!==i){var l=r.isValidElement(i)?i:String(i);return t.push(l),o}return e}));return 0===t.length?e:t.every((function(e){return"string"==typeof e}))?i.split(o).reduce((function(e,n,r){var a;return e.concat(n).concat(null!==(a=t[r])&&void 0!==a?a:"")}),""):i.split(o).reduce((function(e,n,a){return[].concat(e,[r.createElement(r.Fragment,{key:a},n,t[a])])}),[])}function l(e){var n=e.children,t=e.values;if("string"!=typeof n)throw console.warn("Illegal <Interpolate> children",n),new Error("The Docusaurus <Interpolate> component only accept simple string values");return i(n,t)}var c=t(7529);function u(e){var n,t=e.id,r=e.message;return null!==(n=c[null!=t?t:r])&&void 0!==n?n:r}function s(e,n){var t,r=e.message;return i(null!==(t=u({message:r,id:e.id}))&&void 0!==t?t:r,n)}function p(e){var n,t=e.children,a=e.id,o=e.values;if("string"!=typeof t)throw console.warn("Illegal <Translate> children",t),new Error("The Docusaurus <Translate> component only accept simple string values");var i=null!==(n=u({message:t,id:a}))&&void 0!==n?n:t;return r.createElement(l,{values:o},i)}},2008:function(e,n,t){t.d(n,{M:function(){return u}});var r=t(7294),a="container_2Pz7",o="title_24BA",i="subtitle_2vvR",l="msg_3ZE1",c=t(4973);function u(e){var n=e.msg,t="";return n&&(t=r.createElement("div",{className:l},n)),r.createElement("div",{className:a},r.createElement("div",{className:o},r.createElement(c.Z,null,"This Article needs additional information.")),r.createElement("div",{className:i},r.createElement(c.Z,null,"Please help improve it by "),r.createElement("a",{href:"https://docs.pando.im/docs/community/contribute"},r.createElement(c.Z,null,"polishing the content"))),t)}},526:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=t(2008),l=["components"],c={title:"\ub0b4 \uac70\ub798\uac00 \uc2e4\ud328\ud55c \uc774\uc720\ub294 \ubb34\uc5c7\uc785\ub2c8\uae4c?",date:new Date("2021-08-15T22:33:07.000Z")},u=void 0,s={unversionedId:"lake/faqs/why-transaction-fail",id:"lake/faqs/why-transaction-fail",isDocsHomePage:!1,title:"\ub0b4 \uac70\ub798\uac00 \uc2e4\ud328\ud55c \uc774\uc720\ub294 \ubb34\uc5c7\uc785\ub2c8\uae4c?",description:"\uc77c\ubc18\uc801\uc778 \ud2b8\ub79c\uc7ad\uc158 \uc2e4\ud328\ub294 \uc2ac\ub9ac\ud53c\uc9c0\ub97c \ucd08\uacfc\ud558\ub294 \ud2b8\ub79c\uc7ad\uc158\uc73c\ub85c \uc778\ud574 \ubc1c\uc0dd\ud569\ub2c8\ub2e4. \ucd5c\uc2e0 \uac70\ub798 \ud398\uc5b4 \ub370\uc774\ud130\ub97c \uc5bb\uc73c\ub824\uba74 \ud398\uc774\uc9c0\ub97c \uc0c8\ub85c\uace0\uce68\ud558\uc138\uc694.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/lake/faqs/why-transaction-fail.md",sourceDirName:"lake/faqs",slug:"/lake/faqs/why-transaction-fail",permalink:"/ko/docs/lake/faqs/why-transaction-fail",version:"current",frontMatter:{title:"\ub0b4 \uac70\ub798\uac00 \uc2e4\ud328\ud55c \uc774\uc720\ub294 \ubb34\uc5c7\uc785\ub2c8\uae4c?",date:"2021-08-15T22:33:07.000Z"},sidebar:"docs",previous:{title:"\uac00\uaca9\uc740 \uc5b4\ub5bb\uac8c \uacb0\uc815\ub418\ub098\uc694?",permalink:"/ko/docs/lake/faqs/price"},next:{title:"\uc720\ub3d9\uc131 \uacf5\uae09\uc5d0 \uc2e4\ud328\ud55c \uc774\uc720\ub294 \ubb34\uc5c7\uc785\ub2c8\uae4c?",permalink:"/ko/docs/lake/faqs/why-providing-liquidity-fail"}},p=[],f={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(i.M,{mdxType:"Improvement"}),(0,o.kt)("p",null,"\uc77c\ubc18\uc801\uc778 \ud2b8\ub79c\uc7ad\uc158 \uc2e4\ud328\ub294 \uc2ac\ub9ac\ud53c\uc9c0\ub97c \ucd08\uacfc\ud558\ub294 \ud2b8\ub79c\uc7ad\uc158\uc73c\ub85c \uc778\ud574 \ubc1c\uc0dd\ud569\ub2c8\ub2e4. \ucd5c\uc2e0 \uac70\ub798 \ud398\uc5b4 \ub370\uc774\ud130\ub97c \uc5bb\uc73c\ub824\uba74 \ud398\uc774\uc9c0\ub97c \uc0c8\ub85c\uace0\uce68\ud558\uc138\uc694."),(0,o.kt)("p",null,"Pando Lake\uac00 \uc6f9\ud398\uc774\uc9c0\uc5d0 \ud45c\uc2dc\ud558\ub294 \uc815\ubcf4\ub294 \uc218\ub7c9\uc744 \uc785\ub825\ud558\ub294 \uc2dc\uc810\uc758 \uc608\uc0c1 \uc815\ubcf4\uc785\ub2c8\ub2e4. \uc2e4\uc81c\ub85c \uc9c0\ubd88\ud560 \ub54c \ud0c0\uc778\uc758 \uac70\ub798 \ud589\uc704\ub85c \uc778\ud574 \uc9c0\ubd88\ud560 \ub54c \uc5bb\uac8c \ub418\ub294 \uc2e4\uc81c \uc790\uc0b0 \uae08\uc561\uc774 \uc608\uc0c1 \uae08\uc561\uacfc \ub2e4\ub978 \uacbd\uc6b0\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Pando Lake\ub294 \uc608\uc0c1\uacfc \uc2e4\uc81c \uacb0\uacfc\uc758 \uc218\ub7c9 \ucc28\uc774\uac00 \ud070 \uc774\ub7ec\ud55c \uac70\ub798\ub97c \uc801\uadf9 \uac70\ubd80\ud558\uc5ec \ucd94\uc815\uac12\uacfc \uc2e4\uc81c\uac12\uc758 \ucc28\uc774\ub85c \uc778\ud55c \uc190\uc2e4\uc744 \uc904\uc774\uae30 \uc704\ud574 \ub178\ub825\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uac70\ub798 \ubc84\ud2bc \uc6b0\uce21 \ud1b1\ub2c8\ubc14\ud034 \u2699 \uc544\uc774\ucf58 \ubc84\ud2bc\uc5d0\uc11c \uc2ac\ub9ac\ud53c\uc9c0(slippage) \ub77c\ub294 \ub9e4\uac1c\ubcc0\uc218\ub97c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc2ac\ub9ac\ud53c\uc9c0\ub294 Pando Lake \uac70\ub798 \uc911 \ucd94\uc815\ub41c \uc815\ubcf4\uc640 \uc2e4\uc81c \uac70\ub798 \uacb0\uacfc\uc758 \ucc28\uc774\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc2ac\ub9ac\ud53c\uc9c0(slippage) \uac00 \ud074\uc218\ub85d \ud2b8\ub79c\uc7ad\uc158\uc758 \uc608\uc0c1 \ucc28\uc774\uc5d0 \ub300\ud55c \ud5c8\uc6a9 \uc624\ucc28\uac00 \ub192\uc544\uc9c0\uace0 \ud2b8\ub79c\uc7ad\uc158\uc758 \uc131\uacf5\ub960\uc774 \ub192\uc544\uc9c0\uc9c0\ub9cc \uc190\uc2e4\ub3c4 \ucee4\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc2ac\ub9ac\ud53c\uc9c0\uac00 \uc791\uc744\uc218\ub85d, \uc989 \ud2b8\ub79c\uc7ad\uc158\uc758 \uc608\uc0c1 \ucc28\uc774\uc5d0 \ub300\ud55c \ud5c8\uc6a9 \uc624\ucc28\uac00 \ub0ae\uc744\uc218\ub85d \ud2b8\ub79c\uc7ad\uc158 \uc131\uacf5\ub960\uc774 \ub0ae\uc544\uc9c0\uc9c0\ub9cc \uac01 \uc8fc\ubb38\uc740 \uc6f9 \ud398\uc774\uc9c0\uc5d0\uc11c \ubcfc \uc218 \uc788\ub294 \uc608\uc0c1 \uc0c1\ud669\uacfc \ub354 \uc77c\uce58\ud569\ub2c8\ub2e4. \uc2ac\ub9ac\ud53c\uc9c0\uc758 \uae30\ubcf8\uac12\uc740 1%\uc785\ub2c8\ub2e4. \uc989, \uc2e4\uc81c \uac70\ub798\uac00 \uc6f9\ud398\uc774\uc9c0\uc5d0\uc11c \ubcf4\ub294 \uc608\uc0c1 \uac70\ub798 \uae08\uc561\uacfc 1% \uc774\uc0c1 \ucc28\uc774\uac00 \ub098\ub294 \uacbd\uc6b0 Pando Lake \uc5d4\uc9c4\uc740 \uac70\ub798\ub97c \uac70\ubd80\ud569\ub2c8\ub2e4."))}d.isMDXComponent=!0}}]);