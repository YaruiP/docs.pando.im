"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[3419],{1474:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return m},default:function(){return d}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),s=a(5532),c=["components"],o={title:"Authorization",date:"31-07-2021 11:18:01"},i=void 0,u={unversionedId:"lake/apis/auth",id:"lake/apis/auth",isDocsHomePage:!1,title:"Authorization",description:"Most APIs are public access, but some are only available to authenticated users.",source:"@site/i18n/de/docusaurus-plugin-content-docs-developer/current/lake/apis/auth.md",sourceDirName:"lake/apis",slug:"/lake/apis/auth",permalink:"/de/developer/lake/apis/auth",version:"current",lastUpdatedAt:1636868787,formattedLastUpdatedAt:"11/14/2021",frontMatter:{title:"Authorization",date:"31-07-2021 11:18:01"},sidebar:"docs",previous:{title:"Lake API \xdcbersicht",permalink:"/de/developer/lake/apis/overview"},next:{title:"Read MTG Info",permalink:"/de/developer/lake/apis/info"}},m=[{value:"POST /oauth",id:"post-oauth",children:[]}],p={toc:m};function d(e){var t=e.components,a=(0,l.Z)(e,c);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Most APIs are public access, but some are only available to authenticated users."),(0,r.kt)("p",null,"Pando Lake and 4swap use standard OAuth protocol to authorize users."),(0,r.kt)("h2",{id:"post-oauth"},"POST /oauth"),(0,r.kt)("p",null,"Call this API instead of ",(0,r.kt)("a",{parentName:"p",href:"https://developers.mixin.one/docs/api/oauth/oauth#get-access-token"},"Mixin Messenger's OAuth API")," to exchange the access token with code."),(0,r.kt)(s.jI,{base:"https://api.4swap.org/api",url:"/oauth",mdxType:"APIEndpoint"}),(0,r.kt)(s.Yk,{mdxType:"APIMetaPanel"}),(0,r.kt)(s.so,{mdxType:"APIPayload"},'{ // the code from Mixin Messenger\'s OAuth "code":       "28fefbf1284d90ceb10bddd517fab2a716f4713ebe3f3299a9fd4d881b4c8b54", // leave "broker_id" and "label" to empty if you don\'t want to use other brokers. "broker_id":  "", "label":      "" } '),(0,r.kt)(s.Xv,{title:"Exchange an access token",method:"POST",isPublic:!0,base:"https://api.4swap.org/api",url:"/oauth --data PAYLOAD",mdxType:"APIRequest"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1627697766645,\n  "data": {\n    "scope": "PROFILE:READ ASSETS:READ",\n    // the OAuth token\n    "token": "..."\n  }\n}\n')),(0,r.kt)("p",null,"The token is compatible with ",(0,r.kt)("a",{parentName:"p",href:"https://developers.mixin.one/docs/api/guide"},"Mixin API"),". It's fine to use it to get information from Mixin API."))}d.isMDXComponent=!0},5532:function(e,t,a){a.d(t,{jI:function(){return b},Yk:function(){return d},kH:function(){return w},so:function(){return q},Xv:function(){return E}});var n=a(7294),l=a(6010),r="title_sZG8",s="panel_2t5Q",c="table_3oTh",o="tbody_2SpR",i="tr_2EbQ",u="td_W9xC",m="th_3VyX",p=a(4973);function d(e){var t=e.scope,a=e.scopeNote,d=e.limitation,h=null;return h=t?n.createElement("div",null,n.createElement("code",null,t||"-"),a&&n.createElement("span",null,"; ",a)):n.createElement("span",null,n.createElement(p.Z,null,"com.api_metapanel.public")),n.createElement("section",{className:(0,l.Z)("meta-panel",s)},n.createElement("h3",{className:r},n.createElement(p.Z,null,"com.api_metapanel")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",c)},n.createElement("tbody",{className:o},n.createElement("tr",{className:i},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",u,m)},n.createElement(p.Z,null,"com.api_metapanel.authorization")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",u)},h)),n.createElement("tr",{className:i},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",u,m)},n.createElement(p.Z,null,"com.api_metapanel.limitation")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",u)},d||"No limitation")))))}var h=a(3958);function E(e){e.title;var t=e.url,a=e.method,l=e.isPublic,r=e.base,s=e.data,c=r||"https://api.4swap.org";return n.createElement("div",{className:"request"},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_request")),n.createElement(h.Z,{className:"language-bash"},"curl -X ",a||"GET"," ",'"'+c+t+'"',' -H "Content-Type: application/json"',l?" ":' -H "Bearer: $TOKEN"',s?" "+s:""))}var f="container_2R7I";function b(e){var t=e.url,a=e.base||"https://api.mixin.one";return n.createElement("div",{className:f},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_endpoint")),n.createElement(h.Z,{className:"language-sass"},""+a+t))}var k=a(7462),v="title_37bC",N="panel_1nCE",_="table_1ccU",g="tbody_2YH9",A="tr_122g",Z="td_2Fkc",P="th_3Lc3",y="required_13Y0",I="name_NWXV",x=/p-([a-zA-Z_]+)/;function O(e){var t=e.name,a=e.value,r="";return e.required&&(r=n.createElement("div",{className:y},n.createElement(p.Z,null,"com.api_params.required"))),n.createElement("tr",{className:A},n.createElement("th",{className:(0,l.Z)(Z,P)},n.createElement("code",{className:I},t),r),n.createElement("td",{className:Z},a))}function T(e,t){var a={},n=x.exec(e);if(null!==n&&n.length>1){var l=n[1],r=e.slice(l.length+3);return a.name=l,0===r.length?a.value=t:"required"===r&&(a.required=t),a}return null}function w(e){var t=[],a={};for(var r in e)if(Object.hasOwnProperty.call(e,r)){var s=T(r,e[r]);if(null!==s)for(var c in Object.hasOwnProperty.call(a,s.name)||(a[s.name]={}),s)Object.hasOwnProperty.call(s,c)&&(a[s.name][c]=s[c])}for(var o in a)t.push({name:o,value:a[o].value||"",required:!!a[o].required});return n.createElement("section",{className:(0,l.Z)("meta-panel",N)},n.createElement("h3",{className:v},n.createElement(p.Z,null,"com.api_params.parameters")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",_)},n.createElement("tbody",{className:g},t.map((function(e,t){return n.createElement(O,(0,k.Z)({key:t},e))})))))}var M="container_1Yme";function q(e){return n.createElement("div",{className:M},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_payload")),n.createElement(h.Z,{className:"language-json"},e.children))}}}]);