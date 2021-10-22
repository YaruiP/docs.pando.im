"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[8764],{7758:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return m},default:function(){return u}});var n=a(7462),l=a(3366),i=(a(7294),a(3905)),r=a(5532),s=["components"],c={title:"\u8bfb\u53d6\u62cd\u5356\u4fe1\u606f",sidebar_position:5,date:new Date("2021-10-01T23:18:01.000Z")},p=void 0,o={unversionedId:"leaf/apis/flips",id:"leaf/apis/flips",isDocsHomePage:!1,title:"\u8bfb\u53d6\u62cd\u5356\u4fe1\u606f",description:"\u8bfb\u53d6\u6240\u6709\u62cd\u5356\u7684\u8bb0\u5f55",source:"@site/i18n/zh/docusaurus-plugin-content-docs-developer/current/leaf/apis/flips.md",sourceDirName:"leaf/apis",slug:"/leaf/apis/flips",permalink:"/zh/developer/leaf/apis/flips",version:"current",lastUpdatedAt:1634911455,formattedLastUpdatedAt:"10/22/2021",sidebarPosition:5,frontMatter:{title:"\u8bfb\u53d6\u62cd\u5356\u4fe1\u606f",sidebar_position:5,date:"2021-10-01T23:18:01.000Z"},sidebar:"docs",previous:{title:"\u8bfb\u53d6\u62b5\u62bc\u7269",permalink:"/zh/developer/leaf/apis/cats"},next:{title:"\u8bfb\u53d6\u91d1\u5e93",permalink:"/zh/developer/leaf/apis/vaults"}},m=[{value:"\u8bfb\u53d6\u6240\u6709\u62cd\u5356\u7684\u8bb0\u5f55",id:"\u8bfb\u53d6\u6240\u6709\u62cd\u5356\u7684\u8bb0\u5f55",children:[{value:"GET /flips",id:"get-flips",children:[]}]},{value:"\u8bfb\u53d6\u5355\u4e2a\u62cd\u5356\u8bb0\u5f55",id:"\u8bfb\u53d6\u5355\u4e2a\u62cd\u5356\u8bb0\u5f55",children:[{value:"GET /flips/:id",id:"get-flipsid",children:[]}]},{value:"\u8bfb\u53d6\u62cd\u5356\u4e8b\u4ef6",id:"\u8bfb\u53d6\u62cd\u5356\u4e8b\u4ef6",children:[{value:"GET /flips/:id/events",id:"get-flipsidevents",children:[]}]}],d={toc:m};function u(e){var t=e.components,a=(0,l.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u8bfb\u53d6\u6240\u6709\u62cd\u5356\u7684\u8bb0\u5f55"},"\u8bfb\u53d6\u6240\u6709\u62cd\u5356\u7684\u8bb0\u5f55"),(0,i.kt)("h3",{id:"get-flips"},"GET /flips"),(0,i.kt)("p",null,"\u6b64 API \u5c06\u8fd4\u56de\u6240\u6709\u7684\u62cd\u5356\u8bb0\u5f55\u3002"),(0,i.kt)(r.jI,{base:"https://leaf-api.pando.im/api",url:"/flips",mdxType:"APIEndpoint"}),(0,i.kt)(r.Yk,{mdxType:"APIMetaPanel"}),(0,i.kt)(r.kH,{"p-cursor":"the cursor to start from","p-limit":"the limitation of items in response",mdxType:"APIParams"}),(0,i.kt)(r.Xv,{title:"\u8bfb\u53d6\u6240\u6709\u62cd\u5356\u7684\u8bb0\u5f55",method:"GET",isPublic:!0,base:"https://leaf-api.pando.im/api",url:"/flips",mdxType:"APIRequest"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "flips": [\n    {\n      // ActionKick: the auction begins, any bid are accepted\n      // ActionBid: the auction bidding\n      // ActionDeal: the auction is over\n      "action": 0,\n      "art": "string",\n      // the current amount of bid\n      "bid": "string",\n      "collateral_id": "string",\n      "created_at": "2021-10-02",\n      // auction end time\n      "end": "2021-10-02",\n      "guy": "string",\n      "id": "string",\n      // the amount of auctioned collateral\n      "lot": "100",\n      // the max amount of bid accepted\n      "tab": "2",\n      // bid end time\n      "tic": "2021-10-02",\n      "vault_id": "string"\n    }\n  ],\n  "pagination": {\n    "has_next": true,\n    "next_cursor": "string"\n  }\n}\n')),(0,i.kt)("h2",{id:"\u8bfb\u53d6\u5355\u4e2a\u62cd\u5356\u8bb0\u5f55"},"\u8bfb\u53d6\u5355\u4e2a\u62cd\u5356\u8bb0\u5f55"),(0,i.kt)("h3",{id:"get-flipsid"},"GET /flips/:id"),(0,i.kt)("p",null,"\u6b64 API \u5c06\u6839\u636e ",(0,i.kt)("inlineCode",{parentName:"p"},":id")," \u8fd4\u56de\u4e00\u6b21\u62cd\u5356\u4fe1\u606f\u3002"),(0,i.kt)(r.jI,{base:"https://leaf-api.pando.im/api",url:"/flips/:id",mdxType:"APIEndpoint"}),(0,i.kt)(r.Yk,{mdxType:"APIMetaPanel"}),(0,i.kt)(r.Xv,{title:"\u8bfb\u53d6\u5355\u4e2a\u62cd\u5356\u8bb0\u5f55",method:"GET",isPublic:!0,base:"https://leaf-api.pando.im/api",url:"/flips/4ce8a961-4b90-34e8-9780-6ce46a8205a6",mdxType:"APIRequest"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1633139399005,\n  "data": {\n    "id": "4ce8a961-4b90-34e8-9780-6ce46a8205a6",\n    "created_at": "2021-06-22T13:00:42Z",\n    "tic": "2021-06-22T14:01:13Z",\n    "end": "2021-06-23T01:00:42Z",\n    "bid": "1859.30248633",\n    "lot": "1.07",\n    "tab": "1859.30248633",\n    "art": "1631.9052992207771378",\n    "collateral_id": "686cb137-b5e6-586c-bece-926736ffc583",\n    "vault_id": "754a82aa-6f9a-3ddc-aa4e-985f6e1b7687",\n    "guy": "",\n    "action": "FlipDeal"\n  }\n}\n')),(0,i.kt)("h2",{id:"\u8bfb\u53d6\u62cd\u5356\u4e8b\u4ef6"},"\u8bfb\u53d6\u62cd\u5356\u4e8b\u4ef6"),(0,i.kt)("h3",{id:"get-flipsidevents"},"GET /flips/:id/events"),(0,i.kt)("p",null,"\u6b64 API \u5c06\u6839\u636e ",(0,i.kt)("inlineCode",{parentName:"p"},":id")," \u8fd4\u56de\u4e00\u6b21\u62cd\u5356\u7684\u6240\u6709\u4e8b\u4ef6\u3002"),(0,i.kt)(r.jI,{base:"https://leaf-api.pando.im/api",url:"/flips/:id/events",mdxType:"APIEndpoint"}),(0,i.kt)(r.Yk,{mdxType:"APIMetaPanel"}),(0,i.kt)(r.Xv,{title:"\u8bfb\u53d6\u4e00\u6b21\u62cd\u5356\u7684\u6240\u6709\u4e8b\u4ef6",method:"GET",isPublic:!0,base:"https://leaf-api.pando.im/api",url:"/flips/4ce8a961-4b90-34e8-9780-6ce46a8205a6/events",mdxType:"APIRequest"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1633139503820,\n  "data": {\n    "events": [\n      {\n        "flip_id": "4ce8a961-4b90-34e8-9780-6ce46a8205a6",\n        "created_at": "2021-06-22T13:00:42Z",\n        "action": "FlipKick",\n        "bid": "0",\n        "lot": "1.358"\n      },\n      {\n        "flip_id": "4ce8a961-4b90-34e8-9780-6ce46a8205a6",\n        "created_at": "2021-06-22T13:01:55Z",\n        "action": "FlipBid",\n        "bid": "5",\n        "lot": "1.358"\n      },\n      {\n        "flip_id": "4ce8a961-4b90-34e8-9780-6ce46a8205a6",\n        "created_at": "2021-06-22T13:02:49Z",\n        "action": "FlipBid",\n        "bid": "1859.30248633",\n        "lot": "1.358"\n      },\n      // ...\n    ]\n  }\n}\n')))}u.isMDXComponent=!0},5532:function(e,t,a){a.d(t,{jI:function(){return E},Yk:function(){return u},kH:function(){return q},so:function(){return R},Xv:function(){return h}});var n=a(7294),l=a(6010),i="title_sZG8",r="panel_2t5Q",s="table_3oTh",c="tbody_2SpR",p="tr_2EbQ",o="td_W9xC",m="th_3VyX",d=a(4973);function u(e){var t=e.scope,a=e.scopeNote,u=e.limitation,f=null;return f=t?n.createElement("div",null,n.createElement("code",null,t||"-"),a&&n.createElement("span",null,"; ",a)):n.createElement("span",null,n.createElement(d.Z,null,"com.api_metapanel.public")),n.createElement("section",{className:(0,l.Z)("meta-panel",r)},n.createElement("h3",{className:i},n.createElement(d.Z,null,"com.api_metapanel")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",s)},n.createElement("tbody",{className:c},n.createElement("tr",{className:p},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",o,m)},n.createElement(d.Z,null,"com.api_metapanel.authorization")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",o)},f)),n.createElement("tr",{className:p},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",o,m)},n.createElement(d.Z,null,"com.api_metapanel.limitation")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",o)},u||"No limitation")))))}var f=a(3958);function h(e){e.title;var t=e.url,a=e.method,l=e.isPublic,i=e.base,r=e.data,s=i||"https://api.4swap.org";return n.createElement("div",{className:"request"},n.createElement("h3",null,n.createElement(d.Z,null,"com.api_request")),n.createElement(f.Z,{className:"language-bash"},"curl -X ",a||"GET"," ",'"'+s+t+'"',' -H "Content-Type: application/json"',l?" ":' -H "Bearer: $TOKEN"',r?" "+r:""))}var b="container_2R7I";function E(e){var t=e.url,a=e.base||"https://api.mixin.one";return n.createElement("div",{className:b},n.createElement("h3",null,n.createElement(d.Z,null,"com.api_endpoint")),n.createElement(f.Z,{className:"language-sass"},""+a+t))}var v=a(7462),_="title_37bC",k="panel_1nCE",g="table_1ccU",N="tbody_2YH9",Z="tr_122g",T="td_2Fkc",y="th_3Lc3",P="required_13Y0",A="name_NWXV",I=/p-([a-zA-Z_]+)/;function x(e){var t=e.name,a=e.value,i="";return e.required&&(i=n.createElement("div",{className:P},n.createElement(d.Z,null,"com.api_params.required"))),n.createElement("tr",{className:Z},n.createElement("th",{className:(0,l.Z)(T,y)},n.createElement("code",{className:A},t),i),n.createElement("td",{className:T},a))}function j(e,t){var a={},n=I.exec(e);if(null!==n&&n.length>1){var l=n[1],i=e.slice(l.length+3);return a.name=l,0===i.length?a.value=t:"required"===i&&(a.required=t),a}return null}function q(e){var t=[],a={};for(var i in e)if(Object.hasOwnProperty.call(e,i)){var r=j(i,e[i]);if(null!==r)for(var s in Object.hasOwnProperty.call(a,r.name)||(a[r.name]={}),r)Object.hasOwnProperty.call(r,s)&&(a[r.name][s]=r[s])}for(var c in a)t.push({name:c,value:a[c].value||"",required:!!a[c].required});return n.createElement("section",{className:(0,l.Z)("meta-panel",k)},n.createElement("h3",{className:_},n.createElement(d.Z,null,"com.api_params.parameters")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",g)},n.createElement("tbody",{className:N},t.map((function(e,t){return n.createElement(x,(0,v.Z)({key:t},e))})))))}var G="container_1Yme";function R(e){return n.createElement("div",{className:G},n.createElement("h3",null,n.createElement(d.Z,null,"com.api_payload")),n.createElement(f.Z,{className:"language-json"},e.children))}}}]);