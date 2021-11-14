"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[5057],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,d=p["".concat(l,".").concat(m)]||p[m]||g[m]||i;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8496:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={title:"Guide",date:new Date("2021-08-16T18:40:00.000Z")},l=void 0,u={unversionedId:"rings/guide",id:"rings/guide",isDocsHomePage:!1,title:"Guide",description:"An easier and faster way to Connect to Pando Rings engine.",source:"@site/i18n/es/docusaurus-plugin-content-docs-developer/current/rings/guide.md",sourceDirName:"rings",slug:"/rings/guide",permalink:"/es/developer/rings/guide",version:"current",lastUpdatedAt:1636868787,formattedLastUpdatedAt:"11/14/2021",frontMatter:{title:"Guide",date:"2021-08-16T18:40:00.000Z"},sidebar:"docs",previous:{title:"Technical Design",permalink:"/es/developer/rings/design"},next:{title:"API Reference",permalink:"/es/developer/rings/apis"}},c=[{value:"Installing",id:"installing",children:[]},{value:"Usage",id:"usage",children:[]}],g={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"An easier and faster way to Connect to Pando Rings engine."),(0,i.kt)("h2",{id:"installing"},"Installing"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"go get github.com/fox-one/pando-rings-sdk-go\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Initialize the endpoint")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'rings.Endpoint = "xxxxx" // e.g. rings.Endpoint = "https://compound-test-api.fox.one"\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Import")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/fox-one/pando-rings-sdk-go"\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Request all markets")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"rings.RequestAllMarkets(ctx context.Context) ([]*Market, error)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Request transactions")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"rings.RequestTransactions(ctx context.Context, limit int, offset time.Time) ([]*Transaction, error)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Request user action")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"//request supply action url\nrings.RequestSupply(ctx context.Context, followID string, assetID string, amount decimal.Decimal) (string, string, error)\n\n//request pledge action url\nrings.RequestPledge(ctx context.Context, followID string, ctokenAssetID string, amount decimal.Decimal) (string, string, error)\n\n// request unpledge action url\nrings.RequestUnpledge(ctx context.Context, followID string, ctokenAssetID string, ctokenAmount decimal.Decimal) (string, string, error)\n\n// request quick pledge action url\nrings.RequestQuickPledge(ctx context.Context, followID string, assetID string, amount decimal.Decimal) (string, string, error)\n\n// request redeem action url\nrings.RequestRedeem(ctx context.Context, followID string, ctokenAssetID string, redeemAmount decimal.Decimal) (string, string, error)\n\n// request quick redeem action url\nrings.RequestQuickRedeem(ctx context.Context, followID string, ctokenAssetID string, redeemAmount decimal.Decimal) (string, string, error)\n\n// request borrow action url\nrings.RequestBorrow(ctx context.Context, followID string, assetID string, borrowAmount decimal.Decimal) (string, string, error)\n\n// request quick borrow action url\nrings.RequestQuickBorrow(ctx context.Context, followID string, supplyAssetID string, supplyAmount decimal.Decimal, borrowAssetID string, borrowAmount decimal.Decimal) (string, string, error)\n\n// request repay action url\nrings.RequestRepay(ctx context.Context, followID string, assetID string, amount decimal.Decimal) (string, string, error)\n\n// request liquidate action url\nrings.RequestLiquidate(ctx context.Context, followID string, supplyUserID string, supplyCTokenAssetID string, borrowAssetID string, repayAmount decimal.Decimal) (string, string, error)\n\n")),(0,i.kt)("p",null,"More details of sdk using, please read the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fox-one/pando-rings-sdk-go/tree/main/example"},"example"),", Or refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fox-one/compound-app"},"official full-featured version of Pando rings for implementation")))}p.isMDXComponent=!0}}]);