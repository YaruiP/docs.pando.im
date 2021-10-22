"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[9801],{167:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return o},default:function(){return p}});var s=a(7462),n=a(3366),r=(a(7294),a(3905)),l=a(5532),i=["components"],d={title:"Read Market",sidebar_position:3,date:new Date("2021-09-30T23:18:01.000Z")},c=void 0,u={unversionedId:"lake/apis/stat",id:"lake/apis/stat",isDocsHomePage:!1,title:"Read Market",description:"Read Global Statistics",source:"@site/i18n/ja/docusaurus-plugin-content-docs-developer/current/lake/apis/stat.md",sourceDirName:"lake/apis",slug:"/lake/apis/stat",permalink:"/ja/developer/lake/apis/stat",version:"current",lastUpdatedAt:1634562135,formattedLastUpdatedAt:"10/18/2021",sidebarPosition:3,frontMatter:{title:"Read Market",sidebar_position:3,date:"2021-09-30T23:18:01.000Z"},sidebar:"docs",previous:{title:"MTG\u60c5\u5831\u3092\u8aad\u307f\u53d6\u308b",permalink:"/ja/developer/lake/apis/info"},next:{title:"Read Pairs",permalink:"/ja/developer/lake/apis/pairs"}},o=[{value:"Read Global Statistics",id:"read-global-statistics",children:[{value:"GET /states/markets",id:"get-statesmarkets",children:[]}]},{value:"Read Pair Statistics",id:"read-pair-statistics",children:[{value:"GET /states/markets/:base/:quote",id:"get-statesmarketsbasequote",children:[]}]},{value:"Read Candlestick Data",id:"read-candlestick-data",children:[{value:"GET /states/markets/:base/:quote/kline/v2?dur=:dur",id:"get-statesmarketsbasequoteklinev2durdur",children:[]}]}],m={toc:o};function p(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,s.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"read-global-statistics"},"Read Global Statistics"),(0,r.kt)("h3",{id:"get-statesmarkets"},"GET /states/markets"),(0,r.kt)("p",null,"This API will respond historical market statistics"),(0,r.kt)(l.jI,{base:"https://api.4swap.org/api",url:"/stats/markets/?dur=:dur",mdxType:"APIEndpoint"}),(0,r.kt)(l.Yk,{mdxType:"APIMetaPanel"}),(0,r.kt)(l.kH,{"p-dur":"The duration. for example, 4320h means latest 180 days",mdxType:"APIParams"}),(0,r.kt)(l.Xv,{title:"Read market statistics",method:"GET",isPublic:!0,base:"https://api.4swap.org/api",url:"/stats/markets/?dur=4320h",mdxType:"APIRequest"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1627697766503,\n  "data": [\n    {\n      "ts": 1617408000,\n      "date": "2021-04-03T00:00:00Z",\n      // liquidity in US dollar\n      "value": "88919122.02992768",\n      // liquidity in US dollar\n      "volume": "10727320.64681277"\n    },\n    ...\n  ]\n}\n')),(0,r.kt)("h2",{id:"read-pair-statistics"},"Read Pair Statistics"),(0,r.kt)("h3",{id:"get-statesmarketsbasequote"},"GET /states/markets/:base/:quote"),(0,r.kt)("p",null,"This API will respond historical market statistics specified by base and quote asset."),(0,r.kt)(l.jI,{base:"https://api.4swap.org/api",url:"/stats/markets/:base/:quote/?dur=:dur",mdxType:"APIEndpoint"}),(0,r.kt)(l.Yk,{mdxType:"APIMetaPanel"}),(0,r.kt)(l.kH,{"p-base":"The base asset id","p-base-required":"{true}","p-quote":"The quote asset id","p-quote-required":"{true}","p-dur":"The duration. for example, 4320h means latest 180 days",mdxType:"APIParams"}),(0,r.kt)(l.Xv,{title:"Read market statistics of ETH-BTC",method:"GET",isPublic:!0,base:"https://api.4swap.org/api",url:"/stats/markets/43d61dcd-e413-450d-80b8-101d5e903357/c6d0c728-2624-429b-8e0d-d9d19b6592fa?dur=4320h",mdxType:"APIRequest"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1627697766503,\n  "data": [\n    {\n      "ts": 1617408000,\n      "date": "2021-04-03T00:00:00Z",\n      // liquidity in US dollar\n      "value": "88919122.02992768",\n      // liquidity in US dollar\n      "volume": "10727320.64681277"\n    },\n    ...\n  ]\n}\n')),(0,r.kt)("h2",{id:"read-candlestick-data"},"Read Candlestick Data"),(0,r.kt)("h3",{id:"get-statesmarketsbasequoteklinev2durdur"},"GET /states/markets/:base/:quote/kline/v2?dur=:dur"),(0,r.kt)("p",null,"This API will respond the candlestick data specified by base and quote asset."),(0,r.kt)(l.jI,{base:"https://api.4swap.org/api",url:"/stats/markets/:base/:quote/kline/v2?dur=:dur",mdxType:"APIEndpoint"}),(0,r.kt)(l.Yk,{mdxType:"APIMetaPanel"}),(0,r.kt)(l.kH,{"p-base":"The base asset id","p-base-required":"{true}","p-quote":"The quote asset id","p-quote-required":"{true}","p-dur":"The duration. for example, 4320h means latest 180 days",mdxType:"APIParams"}),(0,r.kt)(l.Xv,{title:"Read market statistics of ETH-BTC",method:"GET",isPublic:!0,base:"https://api.4swap.org/api",url:"/stats/markets/43d61dcd-e413-450d-80b8-101d5e903357/c6d0c728-2624-429b-8e0d-d9d19b6592fa/kline/v2?dur=4320h",mdxType:"APIRequest"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1627697766503,\n  "data": [\n    [\n      // timestamp\n      1612148400,\n      // price of base / quote\n      "0.039304863681",\n      // price of quote / base\n      "25.442131511901"\n    ]\n    ...\n  ]\n}\n')))}p.isMDXComponent=!0},5532:function(e,t,a){a.d(t,{jI:function(){return E},Yk:function(){return p},kH:function(){return A},so:function(){return j},Xv:function(){return b}});var s=a(7294),n=a(6010),r="title_sZG8",l="panel_2t5Q",i="table_3oTh",d="tbody_2SpR",c="tr_2EbQ",u="td_W9xC",o="th_3VyX",m=a(4973);function p(e){var t=e.scope,a=e.scopeNote,p=e.limitation,k=null;return k=t?s.createElement("div",null,s.createElement("code",null,t||"-"),a&&s.createElement("span",null,"; ",a)):s.createElement("span",null,s.createElement(m.Z,null,"com.api_metapanel.public")),s.createElement("section",{className:(0,n.Z)("meta-panel",l)},s.createElement("h3",{className:r},s.createElement(m.Z,null,"com.api_metapanel")),s.createElement("table",{className:(0,n.Z)("meta-panel-table",i)},s.createElement("tbody",{className:d},s.createElement("tr",{className:c},s.createElement("th",{className:(0,n.Z)("meta-panel-cell",u,o)},s.createElement(m.Z,null,"com.api_metapanel.authorization")),s.createElement("td",{className:(0,n.Z)("meta-panel-cell",u)},k)),s.createElement("tr",{className:c},s.createElement("th",{className:(0,n.Z)("meta-panel-cell",u,o)},s.createElement(m.Z,null,"com.api_metapanel.limitation")),s.createElement("td",{className:(0,n.Z)("meta-panel-cell",u)},p||"No limitation")))))}var k=a(3958);function b(e){e.title;var t=e.url,a=e.method,n=e.isPublic,r=e.base,l=e.data,i=r||"https://api.4swap.org";return s.createElement("div",{className:"request"},s.createElement("h3",null,s.createElement(m.Z,null,"com.api_request")),s.createElement(k.Z,{className:"language-bash"},"curl -X ",a||"GET"," ",'"'+i+t+'"',' -H "Content-Type: application/json"',n?" ":' -H "Bearer: $TOKEN"',l?" "+l:""))}var h="container_2R7I";function E(e){var t=e.url,a=e.base||"https://api.mixin.one";return s.createElement("div",{className:h},s.createElement("h3",null,s.createElement(m.Z,null,"com.api_endpoint")),s.createElement(k.Z,{className:"language-sass"},""+a+t))}var v=a(7462),T="title_37bC",f="panel_1nCE",q="table_1ccU",g="tbody_2YH9",N="tr_122g",y="td_2Fkc",P="th_3Lc3",_="required_13Y0",Z="name_NWXV",R=/p-([a-zA-Z_]+)/;function I(e){var t=e.name,a=e.value,r="";return e.required&&(r=s.createElement("div",{className:_},s.createElement(m.Z,null,"com.api_params.required"))),s.createElement("tr",{className:N},s.createElement("th",{className:(0,n.Z)(y,P)},s.createElement("code",{className:Z},t),r),s.createElement("td",{className:y},a))}function x(e,t){var a={},s=R.exec(e);if(null!==s&&s.length>1){var n=s[1],r=e.slice(n.length+3);return a.name=n,0===r.length?a.value=t:"required"===r&&(a.required=t),a}return null}function A(e){var t=[],a={};for(var r in e)if(Object.hasOwnProperty.call(e,r)){var l=x(r,e[r]);if(null!==l)for(var i in Object.hasOwnProperty.call(a,l.name)||(a[l.name]={}),l)Object.hasOwnProperty.call(l,i)&&(a[l.name][i]=l[i])}for(var d in a)t.push({name:d,value:a[d].value||"",required:!!a[d].required});return s.createElement("section",{className:(0,n.Z)("meta-panel",f)},s.createElement("h3",{className:T},s.createElement(m.Z,null,"com.api_params.parameters")),s.createElement("table",{className:(0,n.Z)("meta-panel-table",q)},s.createElement("tbody",{className:g},t.map((function(e,t){return s.createElement(I,(0,v.Z)({key:t},e))})))))}var w="container_1Yme";function j(e){return s.createElement("div",{className:w},s.createElement("h3",null,s.createElement(m.Z,null,"com.api_payload")),s.createElement(k.Z,{className:"language-json"},e.children))}}}]);