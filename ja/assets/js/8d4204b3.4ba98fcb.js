"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[1981],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return c}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=u(n),c=a,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return n?r.createElement(k,i(i({ref:e},s),{},{components:n})):r.createElement(k,i({ref:e},s))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4973:function(t,e,n){n.d(e,{Z:function(){return d},I:function(){return s}});var r=n(7294),a=/{\w+}/g,l="{}";function i(t,e){var n=[],i=t.replace(a,(function(t){var a=t.substr(1,t.length-2),i=null==e?void 0:e[a];if(void 0!==i){var o=r.isValidElement(i)?i:String(i);return n.push(o),l}return t}));return 0===n.length?t:n.every((function(t){return"string"==typeof t}))?i.split(l).reduce((function(t,e,r){var a;return t.concat(e).concat(null!==(a=n[r])&&void 0!==a?a:"")}),""):i.split(l).reduce((function(t,e,a){return[].concat(t,[r.createElement(r.Fragment,{key:a},e,n[a])])}),[])}function o(t){var e=t.children,n=t.values;if("string"!=typeof e)throw console.warn("Illegal <Interpolate> children",e),new Error("The Docusaurus <Interpolate> component only accept simple string values");return i(e,n)}var p=n(7529);function u(t){var e,n=t.id,r=t.message;return null!==(e=p[null!=n?n:r])&&void 0!==e?e:r}function s(t,e){var n,r=t.message;return i(null!==(n=u({message:r,id:t.id}))&&void 0!==n?n:r,e)}function d(t){var e,n=t.children,a=t.id,l=t.values;if("string"!=typeof n)throw console.warn("Illegal <Translate> children",n),new Error("The Docusaurus <Translate> component only accept simple string values");var i=null!==(e=u({message:n,id:a}))&&void 0!==e?e:n;return r.createElement(o,{values:l},i)}},2008:function(t,e,n){n.d(e,{M:function(){return u}});var r=n(7294),a="container_2Pz7",l="title_24BA",i="subtitle_2vvR",o="msg_3ZE1",p=n(4973);function u(t){var e=t.msg,n="";return e&&(n=r.createElement("div",{className:o},e)),r.createElement("div",{className:a},r.createElement("div",{className:l},r.createElement(p.Z,null,"This Article needs additional information.")),r.createElement("div",{className:i},r.createElement(p.Z,null,"Please help improve it by "),r.createElement("a",{href:"https://docs.pando.im/docs/community/contribute"},r.createElement(p.Z,null,"polishing the content"))),n)}},5168:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=n(2008),o=["components"],p={title:"\u76e3\u67fb\u5831\u544a\u66f8"},u=void 0,s={unversionedId:"security/audit-reports",id:"security/audit-reports",isDocsHomePage:!1,title:"\u76e3\u67fb\u5831\u544a\u66f8",description:"IOActive\u304b\u3089\u306e\u76e3\u67fb\u30ec\u30dd\u30fc\u30c8",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/security/audit-reports.md",sourceDirName:"security",slug:"/security/audit-reports",permalink:"/ja/docs/security/audit-reports",version:"current",frontMatter:{title:"\u76e3\u67fb\u5831\u544a\u66f8"},sidebar:"docs",previous:{title:"Mixin\u306f\u4fe1\u983c\u3067\u304d\u308b\u30b0\u30eb\u30fc\u30d7",permalink:"/ja/docs/security/mtg"},next:{title:"Support",permalink:"/ja/docs/community/support"}},d=[{value:"IOActive\u304b\u3089\u306e\u76e3\u67fb\u30ec\u30dd\u30fc\u30c8",id:"ioactive\u304b\u3089\u306e\u76e3\u67fb\u30ec\u30dd\u30fc\u30c8",children:[{value:"\u30ec\u30dd\u30fc\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b",id:"\u30ec\u30dd\u30fc\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b",children:[]},{value:"\u8abf\u67fb\u7d50\u679c\u3068\u4fee\u5fa9\u30b9\u30c6\u30fc\u30bf\u30b9",id:"\u8abf\u67fb\u7d50\u679c\u3068\u4fee\u5fa9\u30b9\u30c6\u30fc\u30bf\u30b9",children:[]},{value:"\u554f\u984c\u5206\u6790",id:"\u554f\u984c\u5206\u6790",children:[]}]},{value:"Audit Reports from LeastAuthority",id:"audit-reports-from-leastauthority",children:[{value:"\u30ec\u30dd\u30fc\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b",id:"\u30ec\u30dd\u30fc\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b-1",children:[]},{value:"\u8abf\u67fb\u7d50\u679c\u3068\u4fee\u5fa9\u30b9\u30c6\u30fc\u30bf\u30b9",id:"\u8abf\u67fb\u7d50\u679c\u3068\u4fee\u5fa9\u30b9\u30c6\u30fc\u30bf\u30b9-1",children:[]},{value:"Responses to Findings",id:"responses-to-findings",children:[]}]}],m={toc:d};function c(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)(i.M,{mdxType:"Improvement"}),(0,l.kt)("h2",{id:"ioactive\u304b\u3089\u306e\u76e3\u67fb\u30ec\u30dd\u30fc\u30c8"},"IOActive\u304b\u3089\u306e\u76e3\u67fb\u30ec\u30dd\u30fc\u30c8"),(0,l.kt)("h3",{id:"\u30ec\u30dd\u30fc\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b"},"\u30ec\u30dd\u30fc\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"//docs.pando.im/reports/ioactive-report.pdf"},"IOActive\u304b\u3089\u306e\u76e3\u67fb\u30ec\u30dd\u30fc\u30c8")),(0,l.kt)("h3",{id:"\u8abf\u67fb\u7d50\u679c\u3068\u4fee\u5fa9\u30b9\u30c6\u30fc\u30bf\u30b9"},"\u8abf\u67fb\u7d50\u679c\u3068\u4fee\u5fa9\u30b9\u30c6\u30fc\u30bf\u30b9"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"\u30bf\u30a4\u30c8\u30eb"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7dcf\u30ea\u30b9\u30af"),(0,l.kt)("th",{parentName:"tr",align:null},"\u30b9\u30c6\u30fc\u30bf\u30b9"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MP-07"),(0,l.kt)("td",{parentName:"tr",align:null},"Rings - \u501f\u5165\u8fd4\u6e08\u53d6\u5f15\u306f\u3001\u501f\u5165\u6b8b\u9ad8\u3092\u5909\u66f4\u3057\u305f\u5f8c\u306b\u884c\u3046\u3068\u3001\u5931\u6557\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ad8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4fee\u6b63\u6e08")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MP-06"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5168\u822c - \u8907\u6570\u306e\u8106\u5f31\u6027\u3092\u6301\u3064\u53e4\u3044Web\u30b5\u30fc\u30d0\u30fc"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ad8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4fee\u6b63\u6e08")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MP-01"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8a3c\u660e\u66f8\u306e\u30d4\u30f3\u7559\u3081\u4e0d\u8db3"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e2d"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MP-02"),(0,l.kt)("td",{parentName:"tr",align:null},"JailBreak\u306e\u691c\u51fa\u304c\u4e0d\u8db3\u3057\u3066\u3044\u307e\u3059"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e2d"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MP-03"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30a2\u30d7\u30ea\u30c8\u30e9\u30f3\u30b9\u30dd\u30fc\u30c8\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u304c\u7121\u52b9\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f4e"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MP-04"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30d0\u30a4\u30ca\u30ea\u306b\u8a2d\u5b9a\u3055\u308c\u305f RPATH"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f4e"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MP-05"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30d0\u30a4\u30ca\u30ea\u30e6\u30fc\u30b6\u30fc\u306e\u5b89\u5168\u3067\u306a\u3044 API"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f4e"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"\u554f\u984c\u5206\u6790"},"\u554f\u984c\u5206\u6790"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"MP-07: Rings -\u501f\u5165\u6b8b\u9ad8\u306e\u5909\u66f4\u5f8c\u3001\u501f\u5165\u8fd4\u6e08\u53d6\u5f15\u304c\u5931\u6557\u3059\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059")),(0,l.kt)("p",null,"\u3053\u306e\u554f\u984c\u306f\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Payee.handleRepayEvent()")," \u30ed\u30b8\u30c3\u30af\u304c\u6b63\u3057\u304f\u306a\u3044\u3053\u3068\u304c\u539f\u56e0\u3067\u767a\u751f\u3057\u307e\u3059\u3002 \u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001IOActive\u76e3\u67fb\u30ec\u30dd\u30fc\u30c8\uff08p3\u304b\u3089p8\uff09\u3092\u304a\u8aad\u307f\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"MP-07: \u5168\u822c - \u8907\u6570\u306e\u8106\u5f31\u6027\u3092\u6301\u3064\u53e4\u3044Web\u30b5\u30fc\u30d0\u30fc")),(0,l.kt)("p",null,"\u3053\u306e\u554f\u984c\u306f\u3001API\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u63d0\u4f9b\u3059\u308b\u53e4\u3044Web\u30b5\u30fc\u30d0\u30fc\u304c\u539f\u56e0\u3067\u767a\u751f\u3057\u307e\u3059\u3002 \u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001IOActive\u76e3\u67fb\u30ec\u30dd\u30fc\u30c8\uff08p3\u304b\u3089p8\uff09\u3092\u304a\u8aad\u307f\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"MP-01: \u8a3c\u660e\u66f8\u306e\u30d4\u30f3\u7559\u3081\u4e0d\u8db3")),(0,l.kt)("p",null,"\u3053\u308c\u306f\u3001Mixin Messenger\u306b\u95a2\u9023\u3059\u308b\u554f\u984c\u3067\u3059\u3002"),(0,l.kt)("p",null,"At present, most Apps reply entirely to the certifications that operating system maintains and do not determine which certificate to trust or not. Attackers who break the operating system's trust storage or hack a root CA can set up a man-in-the-middle attack and capture the transmitted data between the App and the server."),(0,l.kt)("p",null,"Mixin Team and Pando Team are not responsible for ensuring the safety of user's local operating system and the root CA. After discussing with the Mixin Team, we decided to ignore this issue for now."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"MP-02: Insufficient JailBreak Detection")),(0,l.kt)("p",null,"This is an issue related to the Mixin Messenger iOS."),(0,l.kt)("p",null,"Mixin Team is not responsible for ensuring the safety of user's local operating system, so they decided to ignore this issue for now."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"MP-03: App Transport Security Disabled")),(0,l.kt)("p",null,"\u3053\u308c\u306f\u3001Mixin Messenger\u306eiOS\u306b\u95a2\u9023\u3059\u308b\u554f\u984c\u3067\u3059\u3002"),(0,l.kt)("p",null,"\u30ec\u30dd\u30fc\u30c8\u306b\u306f\u3001WebView\u304b\u3089\u306e\u8981\u6c42\u306b\u5bfe\u3057\u3066ATS\u304c\u7121\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u3053\u3068\u304c\u8a18\u8f09\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u30e6\u30fc\u30b6\u30fc\u306fWebView\u3092\u4f7f\u7528\u3057\u3066HTTPWeb\u30da\u30fc\u30b8\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u305f\u3081\u3001\u3053\u308c\u306f\u30a2\u30d7\u30ea\u306e\u6b20\u9665\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"MP-04: \u30d0\u30a4\u30ca\u30ea\u3067\u8a2d\u5b9a\u3055\u308c\u305fRPATH")),(0,l.kt)("p",null,"This issue is very hard to exploit, so the Mixin Team decided to ignore this issue for now."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"MP-05: Binary Users Insecure APIs")),(0,l.kt)("p",null,"This issue is very hard to exploit, so the Mixin Team decided to ignore this issue for now."),(0,l.kt)("h2",{id:"audit-reports-from-leastauthority"},"Audit Reports from LeastAuthority"),(0,l.kt)("h3",{id:"\u30ec\u30dd\u30fc\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b-1"},"\u30ec\u30dd\u30fc\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"//docs.pando.im/reports/least-authority-report.pdf"},"\u6700\u4f4e\u6a29\u9650\u304b\u3089\u306e\u76e3\u67fb\u30ec\u30dd\u30fc\u30c8")),(0,l.kt)("h3",{id:"\u8abf\u67fb\u7d50\u679c\u3068\u4fee\u5fa9\u30b9\u30c6\u30fc\u30bf\u30b9-1"},"\u8abf\u67fb\u7d50\u679c\u3068\u4fee\u5fa9\u30b9\u30c6\u30fc\u30bf\u30b9"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"\u30bf\u30a4\u30c8\u30eb"),(0,l.kt)("th",{parentName:"tr",align:null},"\u30b9\u30c6\u30fc\u30bf\u30b9"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"A"),(0,l.kt)("td",{parentName:"tr",align:null},"No Provision to Handle Compromise of Shared MTG Key"),(0,l.kt)("td",{parentName:"tr",align:null},"Won't fix")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"B"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30ed\u30fc\u30c9\u30de\u30c3\u30d7\u306f\u5b58\u5728\u3057\u307e\u305b\u3093"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4fee\u6b63\u3055\u308c\u307e\u305b\u3093")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"C"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30d7\u30ed\u30c8\u30b3\u30eb\u306e\u4ed5\u69d8\u304c\u3042\u308a\u307e\u305b\u3093"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"D"),(0,l.kt)("td",{parentName:"tr",align:null},"Secrets Are Shared and Persist in Plain Text"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4fee\u6b63\u3055\u308c\u307e\u305b\u3093")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"E"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8a8d\u8a3c\u3055\u308c\u3066\u3044\u306a\u3044\u6697\u53f7\u5316\u30e2\u30fc\u30c9\u306e\u4f7f\u7528"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4fee\u6b63\u3055\u308c\u307e\u305b\u3093")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"F"),(0,l.kt)("td",{parentName:"tr",align:null},"Input Not Checked When Adding or Removing PKCS #7 Padding"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4fee\u6b63\u3055\u308c\u307e\u305b\u3093")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"G"),(0,l.kt)("td",{parentName:"tr",align:null},"Excess Centralization"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"responses-to-findings"},"Responses to Findings"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Finding A: No Provision to Handle Compromise of Shared MTG Key")),(0,l.kt)("p",null,"In the begining, the purpose of the shared key is to encrypt the memo. In the previous version, Pando Leaf and Rings put ",(0,l.kt)("inlineCode",{parentName:"p"},"user_id")," in the memo, and the shared key is used to encrypt it."),(0,l.kt)("p",null,"However, to better protect the user's privacy, we upgrade the Mixin Network, that adding ",(0,l.kt)("inlineCode",{parentName:"p"},"user_id")," in the UTXO directly. Now Pando has already remove the ",(0,l.kt)("inlineCode",{parentName:"p"},"user_id")," from the memo so there is no sensitive information in the memo."),(0,l.kt)("p",null,"\u30d7\u30ed\u30c8\u30b3\u30eb\u3092\u3088\u308a\u5bdb\u5bb9\u306b\u3059\u308b\u305f\u3081\u306b\u3001\u79c1\u305f\u3061\u306f\u6697\u53f7\u5316\u3055\u308c\u305f\u30e1\u30e2\u306e\u30b5\u30dd\u30fc\u30c8\u3092\u7dad\u6301\u3057\u307e\u3059\u3002 \u305f\u3060\u3057\u3001\u30e1\u30e2\u306b\u30d7\u30ec\u30fc\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u4f7f\u7528\u3057\u3001\u6697\u53f7\u5316\u3057\u306a\u3044\u3067\u304a\u304f\u306e\u306f\u307e\u3063\u305f\u304f\u554f\u984c\u3042\u308a\u307e\u305b\u3093\u3002 \u8a00\u3044\u63db\u3048\u308c\u3070\u3001\u5171\u6709\u30ad\u30fc\u306f\u3082\u306f\u3084\u91cd\u8981\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8abf\u67fb\u7d50\u679cB\uff1a\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30ed\u30fc\u30c9\u30de\u30c3\u30d7\u304c\u5b58\u5728\u3057\u307e\u305b\u3093")),(0,l.kt)("p",null,"\u5b9f\u969b\u306b\u306f\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u95a2\u9023\u306e\u8a08\u753b\u3092\u542b\u3080\u30ed\u30fc\u30c9\u30de\u30c3\u30d7\u304c\u3042\u308a\u307e\u3059\u3002 \u5c06\u6765\u7684\u306b\u30ed\u30fc\u30c9\u30de\u30c3\u30d7\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8abf\u67fb\u7d50\u679cC\uff1a\u30d7\u30ed\u30c8\u30b3\u30eb\u4ed5\u69d8\u304c\u5b58\u5728\u3057\u307e\u305b\u3093")),(0,l.kt)("p",null,"\u30d7\u30ed\u30c8\u30b3\u30eb\u306e\u3044\u304f\u3064\u304b\u306e\u4ed5\u69d8\u306f\u3059\u3067\u306b\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059\u3002 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.pando.im/developer/intro"},"https://docs.pando.im/developer/intro")," \u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("p",null,"\u5c06\u6765\u7684\u306b\u306f\u3001\u3053\u3053\u3067\u3088\u308a\u591a\u304f\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u63d0\u4f9b\u3059\u308b\u4e88\u5b9a\u3067\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8abf\u67fb\u7d50\u679cD\uff1a\u79d8\u5bc6\u306f\u5171\u6709\u3055\u308c\u3001\u30d7\u30ec\u30fc\u30f3\u30c6\u30ad\u30b9\u30c8\u3067\u5b58\u7d9a\u3057\u307e\u3059\u3002")),(0,l.kt)("p",null,"\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u3092\u7ba1\u7406\u3057\u3001\u5c55\u958b\u74b0\u5883\u3092\u5b89\u5168\u306b\u4fdd\u3064\u72ec\u81ea\u306e\u65b9\u6cd5\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Finding E: Use of Unauthenticated Encryption Mode")),(0,l.kt)("p",null,"\u30e1\u30e2\u306e\u6697\u53f7\u5316\u306b\u306fAES-CBC\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002 AES-GCM\u306b\u5207\u308a\u66ff\u3048\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002 However, because of the explanation of the ",(0,l.kt)("strong",{parentName:"p"},"Finding A"),", Pando decided to ignore this issue."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Finding F: Input Not Checked When Adding or Removing PKCS #7 Padding")),(0,l.kt)("p",null,"Same as above."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Finding G: Excess Centralization")),(0,l.kt)("p",null,"\u306f\u3044\u3001\u73fe\u6642\u70b9\u3067\u306f\u3001MTG\u306b\u65b0\u3057\u3044\u30e1\u30f3\u30d0\u30fc\u3092\u8ffd\u52a0\u3057\u305f\u308a\u3001\u65e2\u5b58\u306e\u30e1\u30f3\u30d0\u30fc\u3092\u524a\u9664\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u306f\u56f0\u96e3\u3067\u3059\u3002"),(0,l.kt)("p",null,"MTG\u30e1\u30f3\u30d0\u30fc\u306e\u8ffd\u52a0\u3068\u524a\u9664\u3092\u53ef\u80fd\u306b\u3059\u308b\u65b0\u3057\u3044\u30ac\u30d0\u30ca\u30f3\u30b9\u30b7\u30b9\u30c6\u30e0\u306b\u53d6\u308a\u7d44\u3093\u3067\u3044\u307e\u3059\u3002 \u65b0\u3057\u3044\u30ac\u30d0\u30ca\u30f3\u30b9\u4f53\u5236\u306f\u4eca\u5f8c\u3082\u516c\u958b\u3055\u308c\u308b\u4e88\u5b9a\u3067\u3059\u3002"))}c.isMDXComponent=!0}}]);