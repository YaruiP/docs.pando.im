"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[2040],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(t),d=a,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4973:function(e,n,t){t.d(n,{Z:function(){return p},I:function(){return u}});var r=t(7294),a=/{\w+}/g,o="{}";function i(e,n){var t=[],i=e.replace(a,(function(e){var a=e.substr(1,e.length-2),i=null==n?void 0:n[a];if(void 0!==i){var c=r.isValidElement(i)?i:String(i);return t.push(c),o}return e}));return 0===t.length?e:t.every((function(e){return"string"==typeof e}))?i.split(o).reduce((function(e,n,r){var a;return e.concat(n).concat(null!==(a=t[r])&&void 0!==a?a:"")}),""):i.split(o).reduce((function(e,n,a){return[].concat(e,[r.createElement(r.Fragment,{key:a},n,t[a])])}),[])}function c(e){var n=e.children,t=e.values;if("string"!=typeof n)throw console.warn("Illegal <Interpolate> children",n),new Error("The Docusaurus <Interpolate> component only accept simple string values");return i(n,t)}var l=t(7529);function s(e){var n,t=e.id,r=e.message;return null!==(n=l[null!=t?t:r])&&void 0!==n?n:r}function u(e,n){var t,r=e.message;return i(null!==(t=s({message:r,id:e.id}))&&void 0!==t?t:r,n)}function p(e){var n,t=e.children,a=e.id,o=e.values;if("string"!=typeof t)throw console.warn("Illegal <Translate> children",t),new Error("The Docusaurus <Translate> component only accept simple string values");var i=null!==(n=s({message:t,id:a}))&&void 0!==n?n:t;return r.createElement(c,{values:o},i)}},2008:function(e,n,t){t.d(n,{M:function(){return s}});var r=t(7294),a="container_2Pz7",o="title_24BA",i="subtitle_2vvR",c="msg_3ZE1",l=t(4973);function s(e){var n=e.msg,t="";return n&&(t=r.createElement("div",{className:c},n)),r.createElement("div",{className:a},r.createElement("div",{className:o},r.createElement(l.Z,null,"This Article needs additional information.")),r.createElement("div",{className:i},r.createElement(l.Z,null,"Please help improve it by "),r.createElement("a",{href:"https://docs.pando.im/docs/community/contribute"},r.createElement(l.Z,null,"polishing the content"))),t)}},23:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=t(2008),c=["components"],l={title:"What's the difference between Lake and 4swap",sidebar_position:1,date:new Date("2021-08-15T22:33:07.000Z")},s=void 0,u={unversionedId:"lake/faqs/lake-vs-4swap",id:"lake/faqs/lake-vs-4swap",isDocsHomePage:!1,title:"What's the difference between Lake and 4swap",description:"Improvement,",source:"@site/docs/lake/faqs/lake-vs-4swap.md",sourceDirName:"lake/faqs",slug:"/lake/faqs/lake-vs-4swap",permalink:"/docs/lake/faqs/lake-vs-4swap",version:"current",sidebarPosition:1,frontMatter:{title:"What's the difference between Lake and 4swap",sidebar_position:1,date:"2021-08-15T22:33:07.000Z"},sidebar:"docs",previous:{title:"Glossary",permalink:"/docs/lake/key-concepts/glossary"},next:{title:"How are prices determined?",permalink:"/docs/lake/faqs/price"}},p=[],f={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(i.M,{mdxType:"Improvement"}),(0,o.kt)("p",null,"Pando lake only allow for selected pools that have strong community base and proven credentials."))}d.isMDXComponent=!0}}]);