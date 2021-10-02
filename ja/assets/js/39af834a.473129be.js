"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[996],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4973:function(e,t,n){n.d(t,{Z:function(){return p},I:function(){return c}});var r=n(7294),a=/{\w+}/g,o="{}";function i(e,t){var n=[],i=e.replace(a,(function(e){var a=e.substr(1,e.length-2),i=null==t?void 0:t[a];if(void 0!==i){var l=r.isValidElement(i)?i:String(i);return n.push(l),o}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?i.split(o).reduce((function(e,t,r){var a;return e.concat(t).concat(null!==(a=n[r])&&void 0!==a?a:"")}),""):i.split(o).reduce((function(e,t,a){return[].concat(e,[r.createElement(r.Fragment,{key:a},t,n[a])])}),[])}function l(e){var t=e.children,n=e.values;if("string"!=typeof t)throw console.warn("Illegal <Interpolate> children",t),new Error("The Docusaurus <Interpolate> component only accept simple string values");return i(t,n)}var u=n(7529);function s(e){var t,n=e.id,r=e.message;return null!==(t=u[null!=n?n:r])&&void 0!==t?t:r}function c(e,t){var n,r=e.message;return i(null!==(n=s({message:r,id:e.id}))&&void 0!==n?n:r,t)}function p(e){var t,n=e.children,a=e.id,o=e.values;if("string"!=typeof n)throw console.warn("Illegal <Translate> children",n),new Error("The Docusaurus <Translate> component only accept simple string values");var i=null!==(t=s({message:n,id:a}))&&void 0!==t?t:n;return r.createElement(l,{values:o},i)}},2008:function(e,t,n){n.d(t,{M:function(){return s}});var r=n(7294),a="container_2Pz7",o="title_24BA",i="subtitle_2vvR",l="msg_3ZE1",u=n(4973);function s(e){var t=e.msg,n="";return t&&(n=r.createElement("div",{className:l},t)),r.createElement("div",{className:a},r.createElement("div",{className:o},r.createElement(u.Z,null,"This Article needs additional information.")),r.createElement("div",{className:i},r.createElement(u.Z,null,"Please help improve it by "),r.createElement("a",{href:"https://docs.pando.im/docs/community/contribute"},r.createElement(u.Z,null,"polishing the content"))),n)}},2882:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(2008),l=["components"],u={title:"Contribute",sidebar_position:2,date:new Date("2021-09-15T22:33:07.000Z")},s=void 0,c={unversionedId:"community/contribute",id:"community/contribute",isDocsHomePage:!1,title:"Contribute",description:"Improvement,",source:"@site/docs/community/contribute.md",sourceDirName:"community",slug:"/community/contribute",permalink:"/ja/docs/community/contribute",version:"current",sidebarPosition:2,frontMatter:{title:"Contribute",sidebar_position:2,date:"2021-09-15T22:33:07.000Z"},sidebar:"docs",previous:{title:"Support",permalink:"/ja/docs/community/support"},next:{title:"Articles",permalink:"/ja/docs/community/articles"}},p=[{value:"Preparation",id:"preparation",children:[]},{value:"Document Structure",id:"document-structure",children:[]},{value:"Translation",id:"translation",children:[{value:"Generate new translation files for new languages",id:"generate-new-translation-files-for-new-languages",children:[]},{value:"Translate the documents",id:"translate-the-documents",children:[]}]}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.M,{mdxType:"Improvement"}),(0,o.kt)("p",null,"Pando documentation is open source. You are very welcomed to translate it into other languages to make it accessible to greater population!"),(0,o.kt)("h2",{id:"preparation"},"Preparation"),(0,o.kt)("p",null,"Pando documentation is based on ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/en/latest/"},"Docusaurus"),", a static site generator for React.js."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You need to ensure that you have Yarn installed"),(0,o.kt)("li",{parentName:"ul"},"Clone the repository of the document"),(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn")," in the root of the ",(0,o.kt)("inlineCode",{parentName:"li"},"developer-docs")),(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn start")," to preview the documentation")),(0,o.kt)("h2",{id:"document-structure"},"Document Structure"),(0,o.kt)("p",null,"The documentation is organized in the following way:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"all source is in the ",(0,o.kt)("inlineCode",{parentName:"li"},"docs")," directory"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"docs")," directory contains the following subdirectories:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lake")," contains all the Pando Lake documentation"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"leaf")," contains all the Pando Leaf documentation"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rings")," contains all the Pando Rings documentation"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"wallets")," contains all documentation about wallets on Mixin Network"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"3rd-party-apps")," lists applications built on top of Pando"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"security")," contains documentation concerning security issues"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"community")," contains all the community documentation")))),(0,o.kt)("h2",{id:"translation"},"Translation"),(0,o.kt)("h3",{id:"generate-new-translation-files-for-new-languages"},"Generate new translation files for new languages"),(0,o.kt)("p",null,"If you're the maintainer of this project, please follow the instructions in the ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/i18n/tutorial"},"i18n tutorial")," to add a new language."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Translate the index page")),(0,o.kt)("p",null,"Please follow the instructions ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/i18n/tutorial#use-the-translation-apis"},"here")," to translate your index page and react components."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Generate/Update json files")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run write-translations --locale $LANG_CODE\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"$LANG_CODE")," is the language code of the language you want to generate. For example, if you want to generate the translation files for the French language, you should use ",(0,o.kt)("inlineCode",{parentName:"p"},"fr"),"."),(0,o.kt)("p",null,"The translation files are generated in the ",(0,o.kt)("inlineCode",{parentName:"p"},"i18n/$LANG_CODE/")," directory."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Generate Markdown files")),(0,o.kt)("p",null,"Copy the docs Markdown files to ",(0,o.kt)("inlineCode",{parentName:"p"},"i18n/$LANG_CODE/docusaurus-plugin-content-docs/current"),", and translate them:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p i18n/$LANG_CODE/docusaurus-plugin-content-docs/current\ncp -r docs/** i18n/$LANG_CODE/docusaurus-plugin-content-docs/current\n")),(0,o.kt)("h3",{id:"translate-the-documents"},"Translate the documents"),(0,o.kt)("p",null,"All the documents are placed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"i18n/$LANG_CODE/")," according to the languages."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"i18n/$LANG_CODE/code.json"),": the translation of the index page and the text used by docusaurus."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"i18n/$LANG_CODE/docusaurus-theme-classic/footer.json"),": the translation of footer."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"i18n/$LANG_CODE/docusaurus-theme-classic/navbar.json"),": the translation of navbar."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"i18n/$LANG_CODE/docusaurus-plugin-content-docs/current.json"),": the label of category on sidebar."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"i18n/$LANG_CODE/docusaurus-plugin-content-docs/current/**"),": the markdown files of documents.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Preview the translation")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run start --locale $LANG_CODE\n")))}m.isMDXComponent=!0}}]);