"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[509],{9831:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return u},default:function(){return d}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),c=a(5532),i=["components"],s={title:"Create Actions",sidebar_position:9,date:new Date("2021-10-01T23:18:01.000Z")},o=void 0,m={unversionedId:"leaf/apis/actions",id:"leaf/apis/actions",isDocsHomePage:!1,title:"Create Actions",description:"APIMetaPanel,",source:"@site/developer/leaf/apis/actions.md",sourceDirName:"leaf/apis",slug:"/leaf/apis/actions",permalink:"/ko/developer/leaf/apis/actions",version:"current",lastUpdatedAt:1633142068,formattedLastUpdatedAt:"10/2/2021",sidebarPosition:9,frontMatter:{title:"Create Actions",sidebar_position:9,date:"2021-10-01T23:18:01.000Z"},sidebar:"docs",previous:{title:"Read Transactions",permalink:"/ko/developer/leaf/apis/transactions"},next:{title:"Overview",permalink:"/ko/developer/rings/overview"}},u=[{value:"Create an Action",id:"create-an-action",children:[{value:"POST /actions",id:"post-actions",children:[]}]}],p={toc:u};function d(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"create-an-action"},"Create an Action"),(0,r.kt)("h3",{id:"post-actions"},"POST /actions"),(0,r.kt)("p",null,"Create an action with the parameters."),(0,r.kt)(c.jI,{base:"https://leaf-api.pando.im/api",url:"/actions",mdxType:"APIEndpoint"}),(0,r.kt)(c.Yk,{scope:"Authorized",mdxType:"APIMetaPanel"}),(0,r.kt)(c.so,{mdxType:"APIPayload"},'{\n  // the amount\n  "amount": 0,\n  // the asset id\n  "asset_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",\n  // an uuid to trace the transaction\n  "follow_id": "17d836d0-8b15-4cba-91d4-d343ed0ad737",\n  // other parameters\n  "parameters": [\n    "string"\n  ]\n}\n'),(0,r.kt)(c.Xv,{title:"Create an action",method:"POST",base:"https://leaf-api.pando.im/api",url:"/actions",data:"--data PAYLOAD",mdxType:"APIRequest"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  // the code and the code url.\n  // they could be used to invoke Mixin Network compatible wallet, like Messenger and Fennec.  "code": "string",\n  "code_url": "string",\n  "memo": "string"\n}\n')))}d.isMDXComponent=!0},5532:function(e,t,a){a.d(t,{jI:function(){return v},Yk:function(){return d},kH:function(){return q},so:function(){return I},Xv:function(){return f}});var n=a(7294),l=a(6010),r="title_sZG8",c="panel_2t5Q",i="table_3oTh",s="tbody_2SpR",o="tr_2EbQ",m="td_W9xC",u="th_3VyX",p=a(4973);function d(e){var t=e.scope,a=e.scopeNote,d=e.limitation,E=null;return E=t?n.createElement("div",null,n.createElement("code",null,t||"-"),a&&n.createElement("span",null,"; ",a)):n.createElement("span",null,n.createElement(p.Z,null,"com.api_metapanel.public")),n.createElement("section",{className:(0,l.Z)("meta-panel",c)},n.createElement("h3",{className:r},n.createElement(p.Z,null,"com.api_metapanel")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",i)},n.createElement("tbody",{className:s},n.createElement("tr",{className:o},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",m,u)},n.createElement(p.Z,null,"com.api_metapanel.authorization")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",m)},E)),n.createElement("tr",{className:o},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",m,u)},n.createElement(p.Z,null,"com.api_metapanel.limitation")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",m)},d||"No limitation")))))}var E=a(3958);function f(e){e.title;var t=e.url,a=e.method,l=e.isPublic,r=e.base,c=e.data,i=r||"https://api.4swap.org";return n.createElement("div",{className:"request"},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_request")),n.createElement(E.Z,{className:"language-bash"},"curl -X ",a||"GET"," ",'"'+i+t+'"',' -H "Content-Type: application/json"',l?" ":' -H "Bearer: $TOKEN"',c?" "+c:""))}var h="container_2R7I";function v(e){var t=e.url,a=e.base||"https://api.mixin.one";return n.createElement("div",{className:h},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_endpoint")),n.createElement(E.Z,{className:"language-sass"},""+a+t))}var _=a(7462),b="title_37bC",N="panel_1nCE",k="table_1ccU",Z="tbody_2YH9",g="tr_122g",y="td_2Fkc",P="th_3Lc3",A="required_13Y0",T="name_NWXV",w=/p-([a-zA-Z_]+)/;function C(e){var t=e.name,a=e.value,r="";return e.required&&(r=n.createElement("div",{className:A},n.createElement(p.Z,null,"com.api_params.required"))),n.createElement("tr",{className:g},n.createElement("th",{className:(0,l.Z)(y,P)},n.createElement("code",{className:T},t),r),n.createElement("td",{className:y},a))}function O(e,t){var a={},n=w.exec(e);if(null!==n&&n.length>1){var l=n[1],r=e.slice(l.length+3);return a.name=l,0===r.length?a.value=t:"required"===r&&(a.required=t),a}return null}function q(e){var t=[],a={};for(var r in e)if(Object.hasOwnProperty.call(e,r)){var c=O(r,e[r]);if(null!==c)for(var i in Object.hasOwnProperty.call(a,c.name)||(a[c.name]={}),c)Object.hasOwnProperty.call(c,i)&&(a[c.name][i]=c[i])}for(var s in a)t.push({name:s,value:a[s].value||"",required:!!a[s].required});return n.createElement("section",{className:(0,l.Z)("meta-panel",N)},n.createElement("h3",{className:b},n.createElement(p.Z,null,"com.api_params.parameters")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",k)},n.createElement("tbody",{className:Z},t.map((function(e,t){return n.createElement(C,(0,_.Z)({key:t},e))})))))}var x="container_1Yme";function I(e){return n.createElement("div",{className:x},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_payload")),n.createElement(E.Z,{className:"language-json"},e.children))}}}]);