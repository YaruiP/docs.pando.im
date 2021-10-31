"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[6310],{5444:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return u},default:function(){return p}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i=a(5532),s=["components"],c={title:"Collaterals\u3092\u8aad\u3080",sidebar_position:4,date:new Date("2021-10-01T23:18:01.000Z")},o=void 0,m={unversionedId:"leaf/apis/cats",id:"leaf/apis/cats",isDocsHomePage:!1,title:"Collaterals\u3092\u8aad\u3080",description:"\u3059\u3079\u3066\u306eCollaterals\u3092\u8aad\u3080",source:"@site/i18n/ja/docusaurus-plugin-content-docs-developer/current/leaf/apis/cats.md",sourceDirName:"leaf/apis",slug:"/leaf/apis/cats",permalink:"/ja/developer/leaf/apis/cats",version:"current",lastUpdatedAt:1635688354,formattedLastUpdatedAt:"10/31/2021",sidebarPosition:4,frontMatter:{title:"Collaterals\u3092\u8aad\u3080",sidebar_position:4,date:"2021-10-01T23:18:01.000Z"},sidebar:"docs",previous:{title:"\u30a2\u30bb\u30c3\u30c8\u3092\u8aad\u3080",permalink:"/ja/developer/leaf/apis/assets"},next:{title:"\u30aa\u30fc\u30af\u30b7\u30e7\u30f3\u3092\u8aad\u3080",permalink:"/ja/developer/leaf/apis/flips"}},u=[{value:"\u3059\u3079\u3066\u306eCollaterals\u3092\u8aad\u3080",id:"\u3059\u3079\u3066\u306ecollaterals\u3092\u8aad\u3080",children:[{value:"GET /cats",id:"get-cats",children:[]}]},{value:"\u5358\u4e00\u306eCollaterals\u3092\u8aad\u3080",id:"\u5358\u4e00\u306ecollaterals\u3092\u8aad\u3080",children:[{value:"GET /cats/:id",id:"get-catsid",children:[]}]}],d={toc:u};function p(e){var t=e.components,a=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u3059\u3079\u3066\u306ecollaterals\u3092\u8aad\u3080"},"\u3059\u3079\u3066\u306eCollaterals\u3092\u8aad\u3080"),(0,r.kt)("h3",{id:"get-cats"},"GET /cats"),(0,r.kt)("p",null,"\u3053\u306e API \u306f\u3001\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u3059\u3079\u3066\u306e\u62c5\u4fdd\u306b\u5bfe\u5fdc\u3057\u307e\u3059\u3002"),(0,r.kt)(i.jI,{base:"https://leaf-api.pando.im/api",url:"/cats",mdxType:"APIEndpoint"}),(0,r.kt)(i.Yk,{mdxType:"APIMetaPanel"}),(0,r.kt)(i.Xv,{title:"\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u8cc7\u7523\u3092\u8aad\u307f\u53d6\u308b",method:"GET",isPublic:!0,base:"https://leaf-api.pando.im/api",url:"/cats",mdxType:"APIRequest"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "collaterals": [\n    {\n      // normalized debt\n      "art": "number",\n      // minimum bid increase\n      "beg": "number",\n      // max pUSD out for liquidation \n      "box": "number",\n      // the liquidation penalty\n      "chop": "number",\n      "created_at": "2021-10-02",\n      // the asset id of debt\n      "dai": "string",\n      // total pUSD issued\n      "debt": "number",\n      // max liquidation Quantity per auction\n      "dunk": "number",\n      // debt floor per vault\n      "dust": "number",\n      // stability fee\n      "duty": "number",\n      // the asset id of collateral\n      "gem": "string",\n      // id of this collateral type\n      "id": "string",\n      // locked Collateral\n      "ink": "number",\n      // debt Ceiling \n      "line": "number",\n      // balance of pUSD out for liquidation\n      "litter": "number",\n      // status of this collateral type\n      "live": true,\n      // liquidation ratio, eg 150%\n      "mat": "number",\n      // name of this collateral type\n      "name": "string",\n      // number of vaults belong to this collateral type\n      "number_of_vaults": 0,\n      // current price of gem/dai\n      "price": "number",\n      // accumulated Rates\n      "rate": "number",\n      // the update date of `rate`\n      "rho": "2021-10-02",\n      // total debt supplied\n      "supply": "number",\n      // total auction length\n      "tau": 0,\n      // single bid lifetime\n      "ttl": 0\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"\u5358\u4e00\u306ecollaterals\u3092\u8aad\u3080"},"\u5358\u4e00\u306eCollaterals\u3092\u8aad\u3080"),(0,r.kt)("h3",{id:"get-catsid"},"GET /cats/:id"),(0,r.kt)("p",null,"\u3053\u306e API \u306f asset_id ",(0,r.kt)("inlineCode",{parentName:"p"},":id")," \u3067 1 \u3064\u306e oracle \u306b\u5fdc\u7b54\u3057\u307e\u3059"),(0,r.kt)(i.jI,{base:"https://leaf-api.pando.im/api",url:"/cats/:id",mdxType:"APIEndpoint"}),(0,r.kt)(i.Yk,{mdxType:"APIMetaPanel"}),(0,r.kt)(i.kH,{"p-id":"the collateral id","p-id-required":"{true}",mdxType:"APIParams"}),(0,r.kt)(i.Xv,{title:"ID\u30671\u3064\u306e\u62c5\u4fdd\u3092\u8aad\u3080",method:"GET",isPublic:!0,base:"https://leaf-api.pando.im/api",url:"/cats/d0ec4cc7-edf6-5359-bf23-41fc9d26444e",mdxType:"APIRequest"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'  "ts": 1633138872979,\n  "data": {\n    "id": "d0ec4cc7-edf6-5359-bf23-41fc9d26444e",\n    "created_at": "2021-04-27T07:02:55Z",\n    "name": "BTC",\n    "gem": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",\n    "dai": "31d2ea9c-95eb-3355-b65b-ba096853bc18",\n    "ink": "717.09020133",\n    "art": "9463539.4478672014194987",\n    "rate": "1.0192090425079456",\n    "rho": "2021-10-02T01:40:26Z",\n    "debt": "9530560.48933399",\n    "line": "19000000",\n    "dust": "100",\n    "price": "47815.83",\n    "mat": "1.5",\n    "duty": "1.045",\n    "chop": "1.13",\n    "dunk": "5000",\n    "beg": "1.03",\n    "ttl": 1800,\n    "tau": 43200,\n    "live": true,\n    "number_of_vaults": "407",\n    "box": "500000",\n    "litter": "0",\n    "supply": "19000000"\n  }\n}\n')))}p.isMDXComponent=!0},5532:function(e,t,a){a.d(t,{jI:function(){return E},Yk:function(){return p},kH:function(){return j},so:function(){return D},Xv:function(){return f}});var n=a(7294),l=a(6010),r="title_sZG8",i="panel_2t5Q",s="table_3oTh",c="tbody_2SpR",o="tr_2EbQ",m="td_W9xC",u="th_3VyX",d=a(4973);function p(e){var t=e.scope,a=e.scopeNote,p=e.limitation,b=null;return b=t?n.createElement("div",null,n.createElement("code",null,t||"-"),a&&n.createElement("span",null,"; ",a)):n.createElement("span",null,n.createElement(d.Z,null,"com.api_metapanel.public")),n.createElement("section",{className:(0,l.Z)("meta-panel",i)},n.createElement("h3",{className:r},n.createElement(d.Z,null,"com.api_metapanel")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",s)},n.createElement("tbody",{className:c},n.createElement("tr",{className:o},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",m,u)},n.createElement(d.Z,null,"com.api_metapanel.authorization")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",m)},b)),n.createElement("tr",{className:o},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",m,u)},n.createElement(d.Z,null,"com.api_metapanel.limitation")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",m)},p||"No limitation")))))}var b=a(3958);function f(e){e.title;var t=e.url,a=e.method,l=e.isPublic,r=e.base,i=e.data,s=r||"https://api.4swap.org";return n.createElement("div",{className:"request"},n.createElement("h3",null,n.createElement(d.Z,null,"com.api_request")),n.createElement(b.Z,{className:"language-bash"},"curl -X ",a||"GET"," ",'"'+s+t+'"',' -H "Content-Type: application/json"',l?" ":' -H "Bearer: $TOKEN"',i?" "+i:""))}var h="container_2R7I";function E(e){var t=e.url,a=e.base||"https://api.mixin.one";return n.createElement("div",{className:h},n.createElement("h3",null,n.createElement(d.Z,null,"com.api_endpoint")),n.createElement(b.Z,{className:"language-sass"},""+a+t))}var v=a(7462),_="title_37bC",g="panel_1nCE",k="table_1ccU",N="tbody_2YH9",y="tr_122g",Z="td_2Fkc",T="th_3Lc3",P="required_13Y0",C="name_NWXV",q=/p-([a-zA-Z_]+)/;function x(e){var t=e.name,a=e.value,r="";return e.required&&(r=n.createElement("div",{className:P},n.createElement(d.Z,null,"com.api_params.required"))),n.createElement("tr",{className:y},n.createElement("th",{className:(0,l.Z)(Z,T)},n.createElement("code",{className:C},t),r),n.createElement("td",{className:Z},a))}function I(e,t){var a={},n=q.exec(e);if(null!==n&&n.length>1){var l=n[1],r=e.slice(l.length+3);return a.name=l,0===r.length?a.value=t:"required"===r&&(a.required=t),a}return null}function j(e){var t=[],a={};for(var r in e)if(Object.hasOwnProperty.call(e,r)){var i=I(r,e[r]);if(null!==i)for(var s in Object.hasOwnProperty.call(a,i.name)||(a[i.name]={}),i)Object.hasOwnProperty.call(i,s)&&(a[i.name][s]=i[s])}for(var c in a)t.push({name:c,value:a[c].value||"",required:!!a[c].required});return n.createElement("section",{className:(0,l.Z)("meta-panel",g)},n.createElement("h3",{className:_},n.createElement(d.Z,null,"com.api_params.parameters")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",k)},n.createElement("tbody",{className:N},t.map((function(e,t){return n.createElement(x,(0,v.Z)({key:t},e))})))))}var A="container_1Yme";function D(e){return n.createElement("div",{className:A},n.createElement("h3",null,n.createElement(d.Z,null,"com.api_payload")),n.createElement(b.Z,{className:"language-json"},e.children))}}}]);