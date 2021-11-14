"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[4177],{4211:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return m},default:function(){return d}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),c=a(5532),s=["components"],i={title:"\u627f\u8a8d",date:new Date("2021-07-31T11:18:01.000Z")},o=void 0,u={unversionedId:"lake/apis/auth",id:"lake/apis/auth",isDocsHomePage:!1,title:"\u627f\u8a8d",description:"\u307b\u3068\u3093\u3069\u306eAPI\u306f\u516c\u958b\u30a2\u30af\u30bb\u30b9\u3067\u3059\u304c\u3001\u8a8d\u8a3c\u3055\u308c\u305f\u30e6\u30fc\u30b6\u30fc\u306e\u307f\u304c\u5229\u7528\u3067\u304d\u308b\u3082\u306e\u3082\u3042\u308a\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs-developer/current/lake/apis/auth.md",sourceDirName:"lake/apis",slug:"/lake/apis/auth",permalink:"/ja/developer/lake/apis/auth",version:"current",lastUpdatedAt:1636868787,formattedLastUpdatedAt:"11/14/2021",frontMatter:{title:"\u627f\u8a8d",date:"2021-07-31T11:18:01.000Z"},sidebar:"docs",previous:{title:"Lake API \u6982\u8981",permalink:"/ja/developer/lake/apis/overview"},next:{title:"MTG\u60c5\u5831\u3092\u8aad\u307f\u53d6\u308b",permalink:"/ja/developer/lake/apis/info"}},m=[{value:"POST /oauth",id:"post-oauth",children:[]}],p={toc:m};function d(e){var t=e.components,a=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u307b\u3068\u3093\u3069\u306eAPI\u306f\u516c\u958b\u30a2\u30af\u30bb\u30b9\u3067\u3059\u304c\u3001\u8a8d\u8a3c\u3055\u308c\u305f\u30e6\u30fc\u30b6\u30fc\u306e\u307f\u304c\u5229\u7528\u3067\u304d\u308b\u3082\u306e\u3082\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"Pando Lake \u3068 4swap \u306f\u3001\u6a19\u6e96 OAuth \u30d7\u30ed\u30c8\u30b3\u30eb\u3092\u4f7f\u7528\u3057\u3066\u30e6\u30fc\u30b6\u30fc\u3092\u8a8d\u8a3c\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"post-oauth"},"POST /oauth"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developers.mixin.one/docs/api/oauth/oauth#get-access-token"},"Mixin Messenger\u306eOAuth API")," \u306e\u4ee3\u308f\u308a\u306b\u3053\u306eAPI\u3092\u30b3\u30fc\u30eb\u3057\u3066\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3092\u30b3\u30fc\u30c9\u3068\u4ea4\u63db\u3057\u307e\u3059\u3002"),(0,r.kt)(c.jI,{base:"https://api.4swap.org/api",url:"/oauth",mdxType:"APIEndpoint"}),(0,r.kt)(c.Yk,{mdxType:"APIMetaPanel"}),(0,r.kt)(c.so,{mdxType:"APIPayload"},'{ // Mixin Messenger\'s OAuth\u304b\u3089\u306e\u30b3\u30fc\u30c9 "code":       "28fefbf1284d90ceb10bddd517fab2a716f4713ebe3f3299a9fd4d881b4c8b54", // leave "broker_id" and "label" to empty if you don\'t want to use other brokers. "broker_id":  "", "label":      "" } '),(0,r.kt)(c.Xv,{title:"\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3092\u4ea4\u63db",method:"POST",isPublic:!0,base:"https://api.4swap.org/api",url:"/oauth --data PAYLOAD",mdxType:"APIRequest"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1627697766645,\n  "data": {\n    "scope": "PROFILE:READ ASSETS:READ",\n    // the OAuth token\n    "token": "..."\n  }\n}\n')),(0,r.kt)("p",null,"\u30c8\u30fc\u30af\u30f3\u306f ",(0,r.kt)("a",{parentName:"p",href:"https://developers.mixin.one/docs/api/guide"},"Mixin API")," \u3068\u4e92\u63db\u6027\u304c\u3042\u308a\u307e\u3059\u3002 Mixin API \u304b\u3089\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3057\u3066\u3082\u69cb\u3044\u307e\u305b\u3093\u3002"))}d.isMDXComponent=!0},5532:function(e,t,a){a.d(t,{jI:function(){return v},Yk:function(){return d},kH:function(){return w},so:function(){return M},Xv:function(){return E}});var n=a(7294),l=a(6010),r="title_sZG8",c="panel_2t5Q",s="table_3oTh",i="tbody_2SpR",o="tr_2EbQ",u="td_W9xC",m="th_3VyX",p=a(4973);function d(e){var t=e.scope,a=e.scopeNote,d=e.limitation,h=null;return h=t?n.createElement("div",null,n.createElement("code",null,t||"-"),a&&n.createElement("span",null,"; ",a)):n.createElement("span",null,n.createElement(p.Z,null,"com.api_metapanel.public")),n.createElement("section",{className:(0,l.Z)("meta-panel",c)},n.createElement("h3",{className:r},n.createElement(p.Z,null,"com.api_metapanel")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",s)},n.createElement("tbody",{className:i},n.createElement("tr",{className:o},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",u,m)},n.createElement(p.Z,null,"com.api_metapanel.authorization")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",u)},h)),n.createElement("tr",{className:o},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",u,m)},n.createElement(p.Z,null,"com.api_metapanel.limitation")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",u)},d||"No limitation")))))}var h=a(3958);function E(e){e.title;var t=e.url,a=e.method,l=e.isPublic,r=e.base,c=e.data,s=r||"https://api.4swap.org";return n.createElement("div",{className:"request"},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_request")),n.createElement(h.Z,{className:"language-bash"},"curl -X ",a||"GET"," ",'"'+s+t+'"',' -H "Content-Type: application/json"',l?" ":' -H "Bearer: $TOKEN"',c?" "+c:""))}var f="container_2R7I";function v(e){var t=e.url,a=e.base||"https://api.mixin.one";return n.createElement("div",{className:f},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_endpoint")),n.createElement(h.Z,{className:"language-sass"},""+a+t))}var k=a(7462),b="title_37bC",N="panel_1nCE",_="table_1ccU",Z="tbody_2YH9",P="tr_122g",g="td_2Fkc",A="th_3Lc3",y="required_13Y0",T="name_NWXV",I=/p-([a-zA-Z_]+)/;function O(e){var t=e.name,a=e.value,r="";return e.required&&(r=n.createElement("div",{className:y},n.createElement(p.Z,null,"com.api_params.required"))),n.createElement("tr",{className:P},n.createElement("th",{className:(0,l.Z)(g,A)},n.createElement("code",{className:T},t),r),n.createElement("td",{className:g},a))}function x(e,t){var a={},n=I.exec(e);if(null!==n&&n.length>1){var l=n[1],r=e.slice(l.length+3);return a.name=l,0===r.length?a.value=t:"required"===r&&(a.required=t),a}return null}function w(e){var t=[],a={};for(var r in e)if(Object.hasOwnProperty.call(e,r)){var c=x(r,e[r]);if(null!==c)for(var s in Object.hasOwnProperty.call(a,c.name)||(a[c.name]={}),c)Object.hasOwnProperty.call(c,s)&&(a[c.name][s]=c[s])}for(var i in a)t.push({name:i,value:a[i].value||"",required:!!a[i].required});return n.createElement("section",{className:(0,l.Z)("meta-panel",N)},n.createElement("h3",{className:b},n.createElement(p.Z,null,"com.api_params.parameters")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",_)},n.createElement("tbody",{className:Z},t.map((function(e,t){return n.createElement(O,(0,k.Z)({key:t},e))})))))}var j="container_1Yme";function M(e){return n.createElement("div",{className:j},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_payload")),n.createElement(h.Z,{className:"language-json"},e.children))}}}]);