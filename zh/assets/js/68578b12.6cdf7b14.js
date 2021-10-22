"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[9025],{5843:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return m},default:function(){return u}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),c=a(5532),s=["components"],i={title:"\u8bfb\u53d6Oracles",sidebar_position:7,date:new Date("2021-10-01T23:18:01.000Z")},o=void 0,d={unversionedId:"leaf/apis/oracles",id:"leaf/apis/oracles",isDocsHomePage:!1,title:"\u8bfb\u53d6Oracles",description:"\u8bfb\u53d6\u6240\u6709Oracles",source:"@site/i18n/zh/docusaurus-plugin-content-docs-developer/current/leaf/apis/oracles.md",sourceDirName:"leaf/apis",slug:"/leaf/apis/oracles",permalink:"/zh/developer/leaf/apis/oracles",version:"current",lastUpdatedAt:1634911455,formattedLastUpdatedAt:"10/22/2021",sidebarPosition:7,frontMatter:{title:"\u8bfb\u53d6Oracles",sidebar_position:7,date:"2021-10-01T23:18:01.000Z"},sidebar:"docs",previous:{title:"\u8bfb\u53d6\u91d1\u5e93",permalink:"/zh/developer/leaf/apis/vaults"},next:{title:"\u8bfb\u53d6\u4ea4\u6613",permalink:"/zh/developer/leaf/apis/transactions"}},m=[{value:"\u8bfb\u53d6\u6240\u6709Oracles",id:"\u8bfb\u53d6\u6240\u6709oracles",children:[{value:"GET /oracles",id:"get-oracles",children:[]}]},{value:"\u8bfb\u53d6\u5355\u4e2aOracle",id:"\u8bfb\u53d6\u5355\u4e2aoracle",children:[{value:"GET /oracles/:id",id:"get-oraclesid",children:[]}]}],p={toc:m};function u(e){var t=e.components,a=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u8bfb\u53d6\u6240\u6709oracles"},"\u8bfb\u53d6\u6240\u6709Oracles"),(0,r.kt)("h3",{id:"get-oracles"},"GET /oracles"),(0,r.kt)("p",null,"\u6b64 API \u5c06\u8fd4\u56de\u6240\u6709Oraces\u3002"),(0,r.kt)(c.jI,{base:"https://leaf-api.pando.im/api",url:"/oracles",mdxType:"APIEndpoint"}),(0,r.kt)(c.Yk,{mdxType:"APIMetaPanel"}),(0,r.kt)(c.Xv,{title:"\u8bfb\u53d6\u6240\u6709Oracles",method:"GET",isPublic:!0,base:"https://leaf-api.pando.im/api",url:"/oracles",mdxType:"APIRequest"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1633140945596,\n  "data": {\n    "oracles": [\n      {\n        "asset_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",\n        "hop": 1800,\n        // current price\n        "current": "47817.13",\n        // next pirce\n        "next": "47759.41",\n        // the time of latest price\n        "peek_at": "2021-04-27T06:00:00Z",\n        // the threshold of the consensus\n        "threshold": 4,\n        // the members who have agreed to the price\n        "governors": [\n          "db33b0c9-2e64-4aed-98b4-4d0b1d6a2826",\n          "d2d4399d-669d-4448-89f6-d65805e62fb7",\n          "1265e53d-3642-484c-9f3d-b8616606fd6d",\n          "75f18fe8-b056-46d6-9c48-0214425e58ce"\n        ]\n      },\n      // ...\n    ]\n  }\n}\n')),(0,r.kt)("h2",{id:"\u8bfb\u53d6\u5355\u4e2aoracle"},"\u8bfb\u53d6\u5355\u4e2aOracle"),(0,r.kt)("h3",{id:"get-oraclesid"},"GET /oracles/:id"),(0,r.kt)("p",null,"\u6b64 API \u5c06\u6839\u636easset_id ",(0,r.kt)("inlineCode",{parentName:"p"},":id")," \u8fd4\u56de\u4e00\u4e2aOracle\u3002"),(0,r.kt)(c.jI,{base:"https://leaf-api.pando.im/api",url:"/oracles/:id",mdxType:"APIEndpoint"}),(0,r.kt)(c.Yk,{mdxType:"APIMetaPanel"}),(0,r.kt)(c.kH,{"p-id":"the asset id","p-id-required":"{true}",mdxType:"APIParams"}),(0,r.kt)(c.Xv,{title:"\u8bfb\u53d6\u5355\u4e2aOracle",method:"GET",isPublic:!0,base:"https://leaf-api.pando.im/api",url:"/oracles/c6d0c728-2624-429b-8e0d-d9d19b6592fa",mdxType:"APIRequest"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1633141162231,\n  "data": {\n    "asset_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",\n    "hop": 1800,\n    // current price\n    "current": "47817.13",\n    // next pirce\n    "next": "47759.41",\n    // the time of latest price\n    "peek_at": "2021-04-27T06:00:00Z",\n    // the threshold of the consensus\n    "threshold": 4,\n    // the members who have agreed to the price\n    "governors": [\n      "db33b0c9-2e64-4aed-98b4-4d0b1d6a2826",\n      "d2d4399d-669d-4448-89f6-d65805e62fb7",\n      "1265e53d-3642-484c-9f3d-b8616606fd6d",\n      "75f18fe8-b056-46d6-9c48-0214425e58ce"\n    ]\n  }\n}\n')))}u.isMDXComponent=!0},5532:function(e,t,a){a.d(t,{jI:function(){return E},Yk:function(){return u},kH:function(){return A},so:function(){return w},Xv:function(){return f}});var n=a(7294),l=a(6010),r="title_sZG8",c="panel_2t5Q",s="table_3oTh",i="tbody_2SpR",o="tr_2EbQ",d="td_W9xC",m="th_3VyX",p=a(4973);function u(e){var t=e.scope,a=e.scopeNote,u=e.limitation,h=null;return h=t?n.createElement("div",null,n.createElement("code",null,t||"-"),a&&n.createElement("span",null,"; ",a)):n.createElement("span",null,n.createElement(p.Z,null,"com.api_metapanel.public")),n.createElement("section",{className:(0,l.Z)("meta-panel",c)},n.createElement("h3",{className:r},n.createElement(p.Z,null,"com.api_metapanel")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",s)},n.createElement("tbody",{className:i},n.createElement("tr",{className:o},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",d,m)},n.createElement(p.Z,null,"com.api_metapanel.authorization")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",d)},h)),n.createElement("tr",{className:o},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",d,m)},n.createElement(p.Z,null,"com.api_metapanel.limitation")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",d)},u||"No limitation")))))}var h=a(3958);function f(e){e.title;var t=e.url,a=e.method,l=e.isPublic,r=e.base,c=e.data,s=r||"https://api.4swap.org";return n.createElement("div",{className:"request"},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_request")),n.createElement(h.Z,{className:"language-bash"},"curl -X ",a||"GET"," ",'"'+s+t+'"',' -H "Content-Type: application/json"',l?" ":' -H "Bearer: $TOKEN"',c?" "+c:""))}var b="container_2R7I";function E(e){var t=e.url,a=e.base||"https://api.mixin.one";return n.createElement("div",{className:b},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_endpoint")),n.createElement(h.Z,{className:"language-sass"},""+a+t))}var v=a(7462),_="title_37bC",k="panel_1nCE",N="table_1ccU",Z="tbody_2YH9",g="tr_122g",T="td_2Fkc",y="th_3Lc3",P="required_13Y0",O="name_NWXV",x=/p-([a-zA-Z_]+)/;function I(e){var t=e.name,a=e.value,r="";return e.required&&(r=n.createElement("div",{className:P},n.createElement(p.Z,null,"com.api_params.required"))),n.createElement("tr",{className:g},n.createElement("th",{className:(0,l.Z)(T,y)},n.createElement("code",{className:O},t),r),n.createElement("td",{className:T},a))}function q(e,t){var a={},n=x.exec(e);if(null!==n&&n.length>1){var l=n[1],r=e.slice(l.length+3);return a.name=l,0===r.length?a.value=t:"required"===r&&(a.required=t),a}return null}function A(e){var t=[],a={};for(var r in e)if(Object.hasOwnProperty.call(e,r)){var c=q(r,e[r]);if(null!==c)for(var s in Object.hasOwnProperty.call(a,c.name)||(a[c.name]={}),c)Object.hasOwnProperty.call(c,s)&&(a[c.name][s]=c[s])}for(var i in a)t.push({name:i,value:a[i].value||"",required:!!a[i].required});return n.createElement("section",{className:(0,l.Z)("meta-panel",k)},n.createElement("h3",{className:_},n.createElement(p.Z,null,"com.api_params.parameters")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",N)},n.createElement("tbody",{className:Z},t.map((function(e,t){return n.createElement(I,(0,v.Z)({key:t},e))})))))}var j="container_1Yme";function w(e){return n.createElement("div",{className:j},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_payload")),n.createElement(h.Z,{className:"language-json"},e.children))}}}]);