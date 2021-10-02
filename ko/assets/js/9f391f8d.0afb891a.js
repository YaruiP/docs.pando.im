"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[7141],{4349:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return m},default:function(){return u}});var n=t(7462),s=t(3366),l=(t(7294),t(3905)),i=t(5532),r=["components"],c={title:"Read Assets",sidebar_position:3,date:new Date("2021-09-30T23:18:01.000Z")},o=void 0,d={unversionedId:"leaf/apis/assets",id:"leaf/apis/assets",isDocsHomePage:!1,title:"Read Assets",description:"APIMetaPanel,",source:"@site/developer/leaf/apis/assets.md",sourceDirName:"leaf/apis",slug:"/leaf/apis/assets",permalink:"/ko/developer/leaf/apis/assets",version:"current",lastUpdatedAt:1633142068,formattedLastUpdatedAt:"10/2/2021",sidebarPosition:3,frontMatter:{title:"Read Assets",sidebar_position:3,date:"2021-09-30T23:18:01.000Z"},sidebar:"docs",previous:{title:"Read Info",permalink:"/ko/developer/leaf/apis/info"},next:{title:"Read Collaterals",permalink:"/ko/developer/leaf/apis/cats"}},m=[{value:"Read All Assets",id:"read-all-assets",children:[{value:"GET /assets",id:"get-assets",children:[]}]},{value:"Read Single Asset",id:"read-single-asset",children:[{value:"GET /assets/:asset_id",id:"get-assetsasset_id",children:[]}]}],p={toc:m};function u(e){var a=e.components,t=(0,s.Z)(e,r);return(0,l.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"read-all-assets"},"Read All Assets"),(0,l.kt)("h3",{id:"get-assets"},"GET /assets"),(0,l.kt)("p",null,"This API will respond all supported crypto assets."),(0,l.kt)(i.jI,{base:"https://leaf-api.pando.im/api",url:"/assets",mdxType:"APIEndpoint"}),(0,l.kt)(i.Yk,{mdxType:"APIMetaPanel"}),(0,l.kt)(i.Xv,{title:"Read supported assets",method:"GET",isPublic:!0,base:"https://leaf-api.pando.im/api",url:"/assets",mdxType:"APIRequest"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1633110638578,\n  "data": {\n    "assets": [\n      {\n        "id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",\n        "name": "Bitcoin",\n        "symbol": "BTC",\n        "logo": "https://mixin-images.zeromesh.net/HvYGJsV5TGeZ-X9Ek3FEQohQZ3fE9LBEBGcOcn4c4BNHovP4fW4YB97Dg5LcXoQ1hUjMEgjbl1DPlKg1TW7kK6XP=s128",\n        "chain_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",\n        "chain": {\n          "id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",\n          "name": "Bitcoin",\n          "symbol": "BTC",\n          "logo": "https://mixin-images.zeromesh.net/HvYGJsV5TGeZ-X9Ek3FEQohQZ3fE9LBEBGcOcn4c4BNHovP4fW4YB97Dg5LcXoQ1hUjMEgjbl1DPlKg1TW7kK6XP=s128",\n          "chain_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",\n          "chain": null,\n          "price": "47640"\n        },\n        "price": "47640"\n      },\n      // ...\n    ]\n  }\n}\n')),(0,l.kt)("h2",{id:"read-single-asset"},"Read Single Asset"),(0,l.kt)("h3",{id:"get-assetsasset_id"},"GET /assets/:asset_id"),(0,l.kt)("p",null,"This API will respond one crypto asset with ",(0,l.kt)("inlineCode",{parentName:"p"},":asset_id")),(0,l.kt)(i.jI,{base:"https://leaf-api.pando.im/api",url:"/assets/:asset_id",mdxType:"APIEndpoint"}),(0,l.kt)(i.Yk,{mdxType:"APIMetaPanel"}),(0,l.kt)(i.kH,{"p-asset_id":"the asset id","p-asset_id-required":"{true}",mdxType:"APIParams"}),(0,l.kt)(i.Xv,{title:"Read one asset",method:"GET",isPublic:!0,base:"https://leaf-api.pando.im/api",url:"/assets/c6d0c728-2624-429b-8e0d-d9d19b6592fa",mdxType:"APIRequest"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1633110638578,\n  "data": {\n    "assets": [\n      {\n        "id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",\n        "name": "Bitcoin",\n        "symbol": "BTC",\n        "logo": "https://mixin-images.zeromesh.net/HvYGJsV5TGeZ-X9Ek3FEQohQZ3fE9LBEBGcOcn4c4BNHovP4fW4YB97Dg5LcXoQ1hUjMEgjbl1DPlKg1TW7kK6XP=s128",\n        "chain_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",\n        "chain": {\n          "id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",\n          "name": "Bitcoin",\n          "symbol": "BTC",\n          "logo": "https://mixin-images.zeromesh.net/HvYGJsV5TGeZ-X9Ek3FEQohQZ3fE9LBEBGcOcn4c4BNHovP4fW4YB97Dg5LcXoQ1hUjMEgjbl1DPlKg1TW7kK6XP=s128",\n          "chain_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",\n          "chain": null,\n          "price": "47640"\n        },\n        "price": "47640"\n      },\n      // ...\n    ]\n  }\n}\n')))}u.isMDXComponent=!0},5532:function(e,a,t){t.d(a,{jI:function(){return b},Yk:function(){return u},kH:function(){return R},so:function(){return x},Xv:function(){return h}});var n=t(7294),s=t(6010),l="title_sZG8",i="panel_2t5Q",r="table_3oTh",c="tbody_2SpR",o="tr_2EbQ",d="td_W9xC",m="th_3VyX",p=t(4973);function u(e){var a=e.scope,t=e.scopeNote,u=e.limitation,E=null;return E=a?n.createElement("div",null,n.createElement("code",null,a||"-"),t&&n.createElement("span",null,"; ",t)):n.createElement("span",null,n.createElement(p.Z,null,"com.api_metapanel.public")),n.createElement("section",{className:(0,s.Z)("meta-panel",i)},n.createElement("h3",{className:l},n.createElement(p.Z,null,"com.api_metapanel")),n.createElement("table",{className:(0,s.Z)("meta-panel-table",r)},n.createElement("tbody",{className:c},n.createElement("tr",{className:o},n.createElement("th",{className:(0,s.Z)("meta-panel-cell",d,m)},n.createElement(p.Z,null,"com.api_metapanel.authorization")),n.createElement("td",{className:(0,s.Z)("meta-panel-cell",d)},E)),n.createElement("tr",{className:o},n.createElement("th",{className:(0,s.Z)("meta-panel-cell",d,m)},n.createElement(p.Z,null,"com.api_metapanel.limitation")),n.createElement("td",{className:(0,s.Z)("meta-panel-cell",d)},u||"No limitation")))))}var E=t(3958);function h(e){e.title;var a=e.url,t=e.method,s=e.isPublic,l=e.base,i=e.data,r=l||"https://api.4swap.org";return n.createElement("div",{className:"request"},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_request")),n.createElement(E.Z,{className:"language-bash"},"curl -X ",t||"GET"," ",'"'+r+a+'"',' -H "Content-Type: application/json"',s?" ":' -H "Bearer: $TOKEN"',i?" "+i:""))}var f="container_2R7I";function b(e){var a=e.url,t=e.base||"https://api.mixin.one";return n.createElement("div",{className:f},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_endpoint")),n.createElement(E.Z,{className:"language-sass"},""+t+a))}var v=t(7462),g="title_37bC",k="panel_1nCE",_="table_1ccU",N="tbody_2YH9",Z="tr_122g",T="td_2Fkc",P="th_3Lc3",y="required_13Y0",B="name_NWXV",A=/p-([a-zA-Z_]+)/;function G(e){var a=e.name,t=e.value,l="";return e.required&&(l=n.createElement("div",{className:y},n.createElement(p.Z,null,"com.api_params.required"))),n.createElement("tr",{className:Z},n.createElement("th",{className:(0,s.Z)(T,P)},n.createElement("code",{className:B},a),l),n.createElement("td",{className:T},t))}function X(e,a){var t={},n=A.exec(e);if(null!==n&&n.length>1){var s=n[1],l=e.slice(s.length+3);return t.name=s,0===l.length?t.value=a:"required"===l&&(t.required=a),t}return null}function R(e){var a=[],t={};for(var l in e)if(Object.hasOwnProperty.call(e,l)){var i=X(l,e[l]);if(null!==i)for(var r in Object.hasOwnProperty.call(t,i.name)||(t[i.name]={}),i)Object.hasOwnProperty.call(i,r)&&(t[i.name][r]=i[r])}for(var c in t)a.push({name:c,value:t[c].value||"",required:!!t[c].required});return n.createElement("section",{className:(0,s.Z)("meta-panel",k)},n.createElement("h3",{className:g},n.createElement(p.Z,null,"com.api_params.parameters")),n.createElement("table",{className:(0,s.Z)("meta-panel-table",_)},n.createElement("tbody",{className:N},a.map((function(e,a){return n.createElement(G,(0,v.Z)({key:a},e))})))))}var j="container_1Yme";function x(e){return n.createElement("div",{className:j},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_payload")),n.createElement(E.Z,{className:"language-json"},e.children))}}}]);