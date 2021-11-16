"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[179],{2869:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return m},default:function(){return u}});var n=t(7462),l=t(3366),r=(t(7294),t(3905)),c=t(5532),s=["components"],i={title:"Read Oracles",date:new Date("2021-10-01T23:18:01.000Z")},o=void 0,d={unversionedId:"leaf/apis/oracles",id:"leaf/apis/oracles",isDocsHomePage:!1,title:"Read Oracles",description:"Read All Oracles",source:"@site/i18n/ja/docusaurus-plugin-content-docs-developer/current/leaf/apis/oracles.md",sourceDirName:"leaf/apis",slug:"/leaf/apis/oracles",permalink:"/ja/developer/leaf/apis/oracles",version:"current",lastUpdatedAt:1637041308,formattedLastUpdatedAt:"11/16/2021",frontMatter:{title:"Read Oracles",date:"2021-10-01T23:18:01.000Z"},sidebar:"docs",previous:{title:"Read Vaults",permalink:"/ja/developer/leaf/apis/vaults"},next:{title:"Read Transactions",permalink:"/ja/developer/leaf/apis/transactions"}},m=[{value:"Read All Oracles",id:"read-all-oracles",children:[{value:"GET /oracles",id:"get-oracles",children:[]}]},{value:"Read Single Oracle",id:"read-single-oracle",children:[{value:"GET /oracles/:id",id:"get-oraclesid",children:[]}]}],p={toc:m};function u(e){var a=e.components,t=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"read-all-oracles"},"Read All Oracles"),(0,r.kt)("h3",{id:"get-oracles"},"GET /oracles"),(0,r.kt)("p",null,"This API will respond all oracles."),(0,r.kt)(c.jI,{base:"https://leaf-api.pando.im/api",url:"/oracles",mdxType:"APIEndpoint"}),(0,r.kt)(c.Yk,{mdxType:"APIMetaPanel"}),(0,r.kt)(c.Xv,{title:"Read all oracles",method:"GET",isPublic:!0,base:"https://leaf-api.pando.im/api",url:"/oracles",mdxType:"APIRequest"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1633140945596,\n  "data": {\n    "oracles": [\n      {\n        "asset_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",\n        "hop": 1800,\n        // current price\n        "current": "47817.13",\n        // next pirce\n        "next": "47759.41",\n        // the time of latest price\n        "peek_at": "2021-04-27T06:00:00Z",\n        // the threshold of the consensus\n        "threshold": 4,\n        // the members who have agreed to the price\n        "governors": [\n          "db33b0c9-2e64-4aed-98b4-4d0b1d6a2826",\n          "d2d4399d-669d-4448-89f6-d65805e62fb7",\n          "1265e53d-3642-484c-9f3d-b8616606fd6d",\n          "75f18fe8-b056-46d6-9c48-0214425e58ce"\n        ]\n      },\n      // ...\n    ]\n  }\n}\n')),(0,r.kt)("h2",{id:"read-single-oracle"},"Read Single Oracle"),(0,r.kt)("h3",{id:"get-oraclesid"},"GET /oracles/:id"),(0,r.kt)("p",null,"This API will respond one oracle with asset_id ",(0,r.kt)("inlineCode",{parentName:"p"},":id")),(0,r.kt)(c.jI,{base:"https://leaf-api.pando.im/api",url:"/oracles/:id",mdxType:"APIEndpoint"}),(0,r.kt)(c.Yk,{mdxType:"APIMetaPanel"}),(0,r.kt)(c.kH,{"p-id":"the asset id","p-id-required":"{true}",mdxType:"APIParams"}),(0,r.kt)(c.Xv,{title:"Read one oracle",method:"GET",isPublic:!0,base:"https://leaf-api.pando.im/api",url:"/oracles/c6d0c728-2624-429b-8e0d-d9d19b6592fa",mdxType:"APIRequest"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1633141162231,\n  "data": {\n    "asset_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",\n    "hop": 1800,\n    // current price\n    "current": "47817.13",\n    // next pirce\n    "next": "47759.41",\n    // the time of latest price\n    "peek_at": "2021-04-27T06:00:00Z",\n    // the threshold of the consensus\n    "threshold": 4,\n    // the members who have agreed to the price\n    "governors": [\n      "db33b0c9-2e64-4aed-98b4-4d0b1d6a2826",\n      "d2d4399d-669d-4448-89f6-d65805e62fb7",\n      "1265e53d-3642-484c-9f3d-b8616606fd6d",\n      "75f18fe8-b056-46d6-9c48-0214425e58ce"\n    ]\n  }\n}\n')))}u.isMDXComponent=!0},5532:function(e,a,t){t.d(a,{jI:function(){return b},Yk:function(){return u},kH:function(){return j},so:function(){return w},Xv:function(){return f}});var n=t(7294),l=t(6010),r="title_sZG8",c="panel_2t5Q",s="table_3oTh",i="tbody_2SpR",o="tr_2EbQ",d="td_W9xC",m="th_3VyX",p=t(4973);function u(e){var a=e.scope,t=e.scopeNote,u=e.limitation,h=null;return h=a?n.createElement("div",null,n.createElement("code",null,a||"-"),t&&n.createElement("span",null,"; ",t)):n.createElement("span",null,n.createElement(p.Z,null,"com.api_metapanel.public")),n.createElement("section",{className:(0,l.Z)("meta-panel",c)},n.createElement("h3",{className:r},n.createElement(p.Z,null,"com.api_metapanel")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",s)},n.createElement("tbody",{className:i},n.createElement("tr",{className:o},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",d,m)},n.createElement(p.Z,null,"com.api_metapanel.authorization")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",d)},h)),n.createElement("tr",{className:o},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",d,m)},n.createElement(p.Z,null,"com.api_metapanel.limitation")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",d)},u||"No limitation")))))}var h=t(3958);function f(e){e.title;var a=e.url,t=e.method,l=e.isPublic,r=e.base,c=e.data,s=r||"https://api.4swap.org";return n.createElement("div",{className:"request"},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_request")),n.createElement(h.Z,{className:"language-bash"},"curl -X ",t||"GET"," ",'"'+s+a+'"',' -H "Content-Type: application/json"',l?" ":' -H "Bearer: $TOKEN"',c?" "+c:""))}var E="container_2R7I";function b(e){var a=e.url,t=e.base||"https://api.mixin.one";return n.createElement("div",{className:E},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_endpoint")),n.createElement(h.Z,{className:"language-sass"},""+t+a))}var v=t(7462),k="title_37bC",N="panel_1nCE",_="table_1ccU",g="tbody_2YH9",Z="tr_122g",T="td_2Fkc",y="th_3Lc3",R="required_13Y0",P="name_NWXV",x=/p-([a-zA-Z_]+)/;function A(e){var a=e.name,t=e.value,r="";return e.required&&(r=n.createElement("div",{className:R},n.createElement(p.Z,null,"com.api_params.required"))),n.createElement("tr",{className:Z},n.createElement("th",{className:(0,l.Z)(T,y)},n.createElement("code",{className:P},a),r),n.createElement("td",{className:T},t))}function O(e,a){var t={},n=x.exec(e);if(null!==n&&n.length>1){var l=n[1],r=e.slice(l.length+3);return t.name=l,0===r.length?t.value=a:"required"===r&&(t.required=a),t}return null}function j(e){var a=[],t={};for(var r in e)if(Object.hasOwnProperty.call(e,r)){var c=O(r,e[r]);if(null!==c)for(var s in Object.hasOwnProperty.call(t,c.name)||(t[c.name]={}),c)Object.hasOwnProperty.call(c,s)&&(t[c.name][s]=c[s])}for(var i in t)a.push({name:i,value:t[i].value||"",required:!!t[i].required});return n.createElement("section",{className:(0,l.Z)("meta-panel",N)},n.createElement("h3",{className:k},n.createElement(p.Z,null,"com.api_params.parameters")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",_)},n.createElement("tbody",{className:g},a.map((function(e,a){return n.createElement(A,(0,v.Z)({key:a},e))})))))}var I="container_1Yme";function w(e){return n.createElement("div",{className:I},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_payload")),n.createElement(h.Z,{className:"language-json"},e.children))}}}]);