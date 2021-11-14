"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[8408],{7495:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return o},toc:function(){return u},default:function(){return d}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),s=a(5532),c=["components"],i={title:"\u8cc7\u7523\u3092\u8aad\u307f\u53d6\u308b",date:new Date("2021-09-30T23:18:01.000Z")},m=void 0,o={unversionedId:"lake/apis/assets",id:"lake/apis/assets",isDocsHomePage:!1,title:"\u8cc7\u7523\u3092\u8aad\u307f\u53d6\u308b",description:"GET /assets",source:"@site/i18n/ja/docusaurus-plugin-content-docs-developer/current/lake/apis/assets.md",sourceDirName:"lake/apis",slug:"/lake/apis/assets",permalink:"/ja/developer/lake/apis/assets",version:"current",lastUpdatedAt:1636868787,formattedLastUpdatedAt:"11/14/2021",frontMatter:{title:"\u8cc7\u7523\u3092\u8aad\u307f\u53d6\u308b",date:"2021-09-30T23:18:01.000Z"},sidebar:"docs",previous:{title:"Read Pairs",permalink:"/ja/developer/lake/apis/pairs"},next:{title:"\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u4f5c\u6210",permalink:"/ja/developer/lake/apis/actions"}},u=[{value:"GET /assets",id:"get-assets",children:[]}],p={toc:u};function d(e){var t=e.components,a=(0,l.Z)(e,c);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"get-assets"},"GET /assets"),(0,r.kt)("p",null,"\u3053\u306e API \u306f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u3059\u3079\u3066\u306e\u6697\u53f7\u8cc7\u7523\u306b\u5bfe\u5fdc\u3057\u307e\u3059\u3002"),(0,r.kt)(s.jI,{base:"https://api.4swap.org/api",url:"/assets",mdxType:"APIEndpoint"}),(0,r.kt)(s.Yk,{mdxType:"APIMetaPanel"}),(0,r.kt)(s.Xv,{title:"\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u8cc7\u7523\u3092\u8aad\u307f\u53d6\u308b",method:"GET",isPublic:!0,base:"https://api.4swap.org/api",url:"/assets",mdxType:"APIRequest"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1627697766503,\n  "data": {\n    "assets": [\n      {Asset Entity},\n      {Asset Entity},\n      ...\n    ]\n  }\n}\n')))}d.isMDXComponent=!0},5532:function(e,t,a){a.d(t,{jI:function(){return h},Yk:function(){return d},kH:function(){return x},so:function(){return C},Xv:function(){return v}});var n=a(7294),l=a(6010),r="title_sZG8",s="panel_2t5Q",c="table_3oTh",i="tbody_2SpR",m="tr_2EbQ",o="td_W9xC",u="th_3VyX",p=a(4973);function d(e){var t=e.scope,a=e.scopeNote,d=e.limitation,E=null;return E=t?n.createElement("div",null,n.createElement("code",null,t||"-"),a&&n.createElement("span",null,"; ",a)):n.createElement("span",null,n.createElement(p.Z,null,"com.api_metapanel.public")),n.createElement("section",{className:(0,l.Z)("meta-panel",s)},n.createElement("h3",{className:r},n.createElement(p.Z,null,"com.api_metapanel")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",c)},n.createElement("tbody",{className:i},n.createElement("tr",{className:m},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",o,u)},n.createElement(p.Z,null,"com.api_metapanel.authorization")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",o)},E)),n.createElement("tr",{className:m},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",o,u)},n.createElement(p.Z,null,"com.api_metapanel.limitation")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",o)},d||"No limitation")))))}var E=a(3958);function v(e){e.title;var t=e.url,a=e.method,l=e.isPublic,r=e.base,s=e.data,c=r||"https://api.4swap.org";return n.createElement("div",{className:"request"},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_request")),n.createElement(E.Z,{className:"language-bash"},"curl -X ",a||"GET"," ",'"'+c+t+'"',' -H "Content-Type: application/json"',l?" ":' -H "Bearer: $TOKEN"',s?" "+s:""))}var f="container_2R7I";function h(e){var t=e.url,a=e.base||"https://api.mixin.one";return n.createElement("div",{className:f},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_endpoint")),n.createElement(E.Z,{className:"language-sass"},""+a+t))}var N=a(7462),_="title_37bC",k="panel_1nCE",Z="table_1ccU",b="tbody_2YH9",g="tr_122g",y="td_2Fkc",T="th_3Lc3",j="required_13Y0",P="name_NWXV",q=/p-([a-zA-Z_]+)/;function w(e){var t=e.name,a=e.value,r="";return e.required&&(r=n.createElement("div",{className:j},n.createElement(p.Z,null,"com.api_params.required"))),n.createElement("tr",{className:g},n.createElement("th",{className:(0,l.Z)(y,T)},n.createElement("code",{className:P},t),r),n.createElement("td",{className:y},a))}function A(e,t){var a={},n=q.exec(e);if(null!==n&&n.length>1){var l=n[1],r=e.slice(l.length+3);return a.name=l,0===r.length?a.value=t:"required"===r&&(a.required=t),a}return null}function x(e){var t=[],a={};for(var r in e)if(Object.hasOwnProperty.call(e,r)){var s=A(r,e[r]);if(null!==s)for(var c in Object.hasOwnProperty.call(a,s.name)||(a[s.name]={}),s)Object.hasOwnProperty.call(s,c)&&(a[s.name][c]=s[c])}for(var i in a)t.push({name:i,value:a[i].value||"",required:!!a[i].required});return n.createElement("section",{className:(0,l.Z)("meta-panel",k)},n.createElement("h3",{className:_},n.createElement(p.Z,null,"com.api_params.parameters")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",Z)},n.createElement("tbody",{className:b},t.map((function(e,t){return n.createElement(w,(0,N.Z)({key:t},e))})))))}var I="container_1Yme";function C(e){return n.createElement("div",{className:I},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_payload")),n.createElement(E.Z,{className:"language-json"},e.children))}}}]);