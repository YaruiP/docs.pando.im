"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[568],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),o=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=o(a),f=r,m=u["".concat(s,".").concat(f)]||u[f]||c[f]||i;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4012:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return p},default:function(){return P}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],d={title:"Read Vaults",sidebar_position:6,date:new Date("2021-10-01T23:18:01.000Z")},s=void 0,o={unversionedId:"leaf/apis/vaults",id:"leaf/apis/vaults",isDocsHomePage:!1,title:"Read Vaults",description:'"@site/src/components/api"\uc5d0\uc11c  { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } \ub97c \uac00\uc838\uc635\ub2c8\ub2e4.',source:"@site/i18n/ko/docusaurus-plugin-content-docs-developer/current/leaf/apis/vaults.md",sourceDirName:"leaf/apis",slug:"/leaf/apis/vaults",permalink:"/ko/developer/leaf/apis/vaults",version:"current",lastUpdatedAt:1635688354,formattedLastUpdatedAt:"10/31/2021",sidebarPosition:6,frontMatter:{title:"Read Vaults",sidebar_position:6,date:"2021-10-01T23:18:01.000Z"},sidebar:"docs",previous:{title:"Read Auctions",permalink:"/ko/developer/leaf/apis/flips"},next:{title:"Read Oracles",permalink:"/ko/developer/leaf/apis/oracles"}},p=[{value:"Read All Vaults",id:"read-all-vaults",children:[{value:"GET /vats",id:"get-vats",children:[]}]},{value:"Read Single Vault",id:"read-single-vault",children:[{value:"GET /vat/:id",id:"get-vatid",children:[]}]},{value:"Read All Vault Events",id:"read-all-vault-events",children:[{value:"GET /vat/:id/events",id:"get-vatidevents",children:[]}]},{value:"Read My Vaults",id:"read-my-vaults",children:[{value:"GET /me/vats",id:"get-mevats",children:[]}]}],c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},u=c("APIEndpoint"),f=c("APIMetaPanel"),m=c("APIParams"),v=c("APIRequest"),b={toc:p};function P(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'"@site/src/components/api"\uc5d0\uc11c  { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } \ub97c \uac00\uc838\uc635\ub2c8\ub2e4.'),(0,i.kt)("h2",{id:"read-all-vaults"},"Read All Vaults"),(0,i.kt)("h3",{id:"get-vats"},"GET /vats"),(0,i.kt)("p",null,"\uc774 API\ub294 \ubaa8\ub4e0 \ubcfc\ud2b8\uc5d0 \uc751\ub2f5\ud569\ub2c8\ub2e4."),(0,i.kt)(u,{base:"https://leaf-api.pando.im/api",url:"/vats",mdxType:"APIEndpoint"}),(0,i.kt)(f,{mdxType:"APIMetaPanel"}),(0,i.kt)(m,{"p-cursor":"the cursor to start from","p-limit":"the limitation of items in response",mdxType:"APIParams"}),(0,i.kt)(v,{title:"Read all vaults",method:"GET",isPublic:!0,base:"https://leaf-api.pando.im/api",url:"/vats",mdxType:"APIRequest"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1633140121000,\n  "data": {\n    "vaults": [\n      {\n        "id": "52010fd0-6a9d-393c-abcb-ca997d950bf5",\n        "created_at": "2021-04-27T10:51:16Z",\n        "collateral_id": "d0ec4cc7-edf6-5359-bf23-41fc9d26444e",\n        // \uc7a0\uae34 \ub2f4\ubcf4\n        "ink": "2",\n        // \uc815\uc0c1\ud654 \ubd80\ucc44 (normalized debt)\n        "art": "30530.6925452775230346",\n        "identity_id": "1"\n      },\n      {\n        "id": "321b4903-c291-39e4-9563-6b01c4826b08",\n        "created_at": "2021-04-27T10:53:26Z",\n        "collateral_id": "686cb137-b5e6-586c-bece-926736ffc583",\n        "ink": "2",\n        "art": "98.1633931890668012",\n        "identity_id": "2"\n      },\n      {\n        "id": "6fbd8796-3ffa-38ab-aa95-64584e6e57ca",\n        "created_at": "2021-04-27T11:01:52Z",\n        "collateral_id": "d0ec4cc7-edf6-5359-bf23-41fc9d26444e",\n        "ink": "10",\n        "art": "206146.036118189767744",\n        "identity_id": "3"\n      }\n      // ...\n    ],\n    "pagination": {\n      "next_cursor": "100",\n      "has_next": true\n    }\n  }\n}\n')),(0,i.kt)("h2",{id:"read-single-vault"},"Read Single Vault"),(0,i.kt)("h3",{id:"get-vatid"},"GET /vat/:id"),(0,i.kt)("p",null,"\uc774 API\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},":id"),"\ub85c \ud558\ub098\uc758 \ubcfc\ud2b8\uc5d0 \uc751\ub2f5\ud569\ub2c8\ub2e4."),(0,i.kt)(u,{base:"https://leaf-api.pando.im/api",url:"/vats/:id",mdxType:"APIEndpoint"}),(0,i.kt)(f,{mdxType:"APIMetaPanel"}),(0,i.kt)(m,{"p-id":"the vault id","p-id-required":"{true}",mdxType:"APIParams"}),(0,i.kt)(v,{title:"Read one vault",method:"GET",isPublic:!0,base:"https://leaf-api.pando.im/api",url:"/vats/52010fd0-6a9d-393c-abcb-ca997d950bf5",mdxType:"APIRequest"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1633140496485,\n  "data": {\n    "id": "52010fd0-6a9d-393c-abcb-ca997d950bf5",\n    "created_at": "2021-04-27T10:51:16Z",\n    "collateral_id": "d0ec4cc7-edf6-5359-bf23-41fc9d26444e",\n    "ink": "2",\n    "art": "30530.6925452775230346",\n    "identity_id": "1"\n  }\n}\n')),(0,i.kt)("h2",{id:"read-all-vault-events"},"Read All Vault Events"),(0,i.kt)("h3",{id:"get-vatidevents"},"GET /vat/:id/events"),(0,i.kt)("p",null,"\uc774 API\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},":id"),"\ub85c \ud55c \ubcfc\ud2b8\uc758 \ubaa8\ub4e0 \uc774\ubca4\ud2b8\uc5d0 \uc751\ub2f5\ud569\ub2c8\ub2e4."),(0,i.kt)(u,{base:"https://leaf-api.pando.im/api",url:"/vat/:id/events",mdxType:"APIEndpoint"}),(0,i.kt)(f,{mdxType:"APIMetaPanel"}),(0,i.kt)(m,{"p-id":"the vault id","p-id-required":"{true}",mdxType:"APIParams"}),(0,i.kt)(v,{title:"Read all events of one vault",method:"GET",isPublic:!0,base:"https://leaf-api.pando.im/api",url:"/vaults/52010fd0-6a9d-393c-abcb-ca997d950bf5/events",mdxType:"APIRequest"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1633140563750,\n  "data": {\n    "events": [\n      {\n        "vault_id": "52010fd0-6a9d-393c-abcb-ca997d950bf5",\n        "created_at": "2021-09-28T06:52:14Z",\n        "action": "VatWithdraw",\n        "dink": "-1",\n        "dart": "0",\n        "debt": "0"\n      },\n      {\n        "vault_id": "52010fd0-6a9d-393c-abcb-ca997d950bf5",\n        "created_at": "2021-09-28T06:51:54Z",\n        "action": "VatPayback",\n        "dink": "0",\n        "dart": "-14724.0127094986199707",\n        "debt": "-15000"\n      },\n      // ...\n    ]\n  }\n}\n')),(0,i.kt)("h2",{id:"read-my-vaults"},"Read My Vaults"),(0,i.kt)("h3",{id:"get-mevats"},"GET /me/vats"),(0,i.kt)("p",null,"\uc774 API\ub294 \ud604\uc7ac \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc18d\ud55c \ubaa8\ub4e0 \ubcfc\ud2b8\uc5d0 \uc751\ub2f5\ud569\ub2c8\ub2e4."),(0,i.kt)(u,{base:"https://leaf-api.pando.im/api",url:"/me/vats",mdxType:"APIEndpoint"}),(0,i.kt)(f,{scope:"Authorized",mdxType:"APIMetaPanel"}),(0,i.kt)(m,{"p-cursor":"the cursor to start from","p-limit":"the limitation of items in response",mdxType:"APIParams"}),(0,i.kt)(v,{title:"Read all vaults of a user",method:"GET",base:"https://leaf-api.pando.im/api",url:"/me/vats",mdxType:"APIRequest"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1633140121000,\n  "data": {\n    "vaults": [\n      {\n        "id": "52010fd0-6a9d-393c-abcb-ca997d950bf5",\n        "created_at": "2021-04-27T10:51:16Z",\n        "collateral_id": "d0ec4cc7-edf6-5359-bf23-41fc9d26444e",\n        "ink": "2",\n        "art": "30530.6925452775230346",\n        "identity_id": "1"\n      },\n      // ...\n    ],\n    "pagination": {\n      "next_cursor": "100",\n      "has_next": true\n    }\n  }\n}\n')))}P.isMDXComponent=!0}}]);