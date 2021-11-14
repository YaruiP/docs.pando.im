"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[8084],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),d=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return o.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return t?o.createElement(f,i(i({ref:n},s),{},{components:t})):o.createElement(f,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},315:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),i=["components"],l={title:"\uc9c0\uac11 \ubd88\ub7ec\uc624\uae30",date:new Date("2021-07-22T22:33:07.000Z")},c=void 0,d={unversionedId:"lake/guide/invoke-wallets",id:"lake/guide/invoke-wallets",isDocsHomePage:!1,title:"\uc9c0\uac11 \ubd88\ub7ec\uc624\uae30",description:"\ud604\uc7ac 4swap/Lake\uc640 \ud638\ud658\ub418\ub294 \uc9c0\uac11\uc740 \ub450 \uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs-developer/current/lake/guide/invoke-wallets.md",sourceDirName:"lake/guide",slug:"/lake/guide/invoke-wallets",permalink:"/ko/developer/lake/guide/invoke-wallets",version:"current",lastUpdatedAt:1636868787,formattedLastUpdatedAt:"11/14/2021",frontMatter:{title:"\uc9c0\uac11 \ubd88\ub7ec\uc624\uae30",date:"2021-07-22T22:33:07.000Z"},sidebar:"docs",previous:{title:"SDK\ub97c \uc0ac\uc6a9\ud558\uc5ec \uac70\ub798\ud558\uae30",permalink:"/ko/developer/lake/guide/using-sdk"},next:{title:"Lake API \uac1c\uc694",permalink:"/ko/developer/lake/apis/overview"}},s=[{value:"Messenger \ubd88\ub7ec\uc624\uae30",id:"messenger-\ubd88\ub7ec\uc624\uae30",children:[{value:"Way 1",id:"way-1",children:[]},{value:"Way 2",id:"way-2",children:[]}]},{value:"Fennec \ubd88\ub7ec\uc624\uae30",id:"fennec-\ubd88\ub7ec\uc624\uae30",children:[]}],p={toc:s};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ud604\uc7ac 4swap/Lake\uc640 \ud638\ud658\ub418\ub294 \uc9c0\uac11\uc740 \ub450 \uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/apps/wallets#mixin-messenger"},"Mixin Messenger"),": Mixin \ud575\uc2ec \ud300\uc5d0\uc11c \ub9cc\ub4e0 \ubaa8\ubc14\uc77c \uc9c0\uac11\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/apps/wallets#fennec"},"Fennec"),": Fox.ONE \ud300\uc5d0\uc11c \ub9cc\ub4e0 \ube0c\ub77c\uc6b0\uc800 \ud655\uc7a5 \uc9c0\uac11\uc785\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\uc774\ub7ec\ud55c \uc9c0\uac11\uc744 \uc9c0\uc6d0\ud558\ub294 \uc6f9 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc81c\uacf5\ud558\ub824\uba74 \uc6f9 \uc571\uc744 \uc9c0\uac11\uacfc \ud1b5\ud569\ud558\uc5ec \uc6d0\ud558\ub294 \uc2dc\uac04\uc5d0 \uacb0\uc81c\ud560 \uc218 \uc788\ub3c4\ub85d \ud638\ucd9c\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"messenger-\ubd88\ub7ec\uc624\uae30"},"Messenger \ubd88\ub7ec\uc624\uae30"),(0,a.kt)("p",null,"Mixin Messenger\uc758 \uacb0\uc81c \uc778\ud130\ud398\uc774\uc2a4\ub97c \ud638\ucd9c\ud558\ub294 \uac83\uc740 \ub9e4\uc6b0 \uac04\ub2e8\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uba3c\uc800 \ub2e4\uc911\uc11c\uba85 \uc804\uc1a1\uc744 \ud655\uc778\ud574\uc57c \ud568\uc744 \ub098\ud0c0\ub0b4\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"code_url")," \ub610\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"code"),"\ub97c \uac00\uc838\uc640\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub450 \uac00\uc9c0 \ubc29\ubc95\uc73c\ub85c \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"API ",(0,a.kt)("a",{parentName:"li",href:"../apis/actions"},'"/api/actions"\ub97c \ub530\ub77c'),(0,a.kt)("a",{parentName:"li",href:"../action-protocol#swap-crypto"},"swap action"),"\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"API ",(0,a.kt)("inlineCode",{parentName:"li"}," https://api.mixin.one/payments"),"\ub97c \ud638\ucd9c\ud558\uc5ec ",(0,a.kt)("inlineCode",{parentName:"li"},"code_id"),"\uac00 \ud3ec\ud568\ub41c \uacb0\uc81c \uac1c\uccb4\ub97c \uac00\uc838\uc635\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"\uc790\uccb4 \ubc31\uc5d4\ub4dc\uc5d0\uc11c \ud2b8\ub79c\uc7ad\uc158\uc744 \uc0dd\uc131\ud558\uace0 code/code_url\uc744 \ud504\ub860\ud2b8\uc5d4\ub4dc\uc5d0 \uc804\ub2ec\ud558\uc2ed\uc2dc\uc624.")),(0,a.kt)("p",null,"\uccab \ubc88\uc9f8 \ubc29\ubc95\uc744 \uc54c\ub824\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"way-1"},"Way 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const BTC_ASSET_ID = 'c6d0c728-2624-429b-8e0d-d9d19b6592fa';\nconst ETH_ASSET_ID = '43d61dcd-e413-450d-80b8-101d5e903357';\n\nasync function pay() {\n  const follow_id = uuid.v4();\n\n  // \uba54\ubaa8 \uc791\uc131\n  const memo = `3,${YOUR_USER_ID},${follow_id},${ETH_ASSET_ID},${''},${'0.0001'}`;\n\n  // BTC\uc5d0\uc11c ETH\ub85c \uc2a4\uc651\ud558\ub294 \uc791\uc5c5 \uc0dd\uc131\n  const resp = await http.post(`/actions`, {\n    data: {\n      action: memo,\n      amount: \"0.0001\",\n      asset_id: BTC_ASSET_ID,\n      // \ub610\ub294 Broker_id\ub97c \ube44\uc6cc \ub450\uc2ed\uc2dc\uc624.\n      broker_id: '5dbdb169-d56d-4b5b-b066-9b0780691b14',\n    }\n  });\n\n  // \uc6f9 \uc571\uc774 Messenger\uc758 webview\uc5d0\uc11c \uc2e4\ud589 \uc911\uc778 \uacbd\uc6b0\n  // \uadf8\uac83\uc740 \uacb0\uc81c UI\ub97c \ud638\ucd9c\ud560 \uac83\uc785\ub2c8\ub2e4.\n  window.location.href = `https://mixin.one/codes/${resp.code}`;\n\n  // \uc6f9\uc5d0\uc11c \ub370\uc2a4\ud06c\ud1b1 \ubc29\ubb38\ub3c4 \uc9c0\uc6d0\ud558\ub294 \uacbd\uc6b0\n  // \ub2e4\uc74c\uacfc \uac19\uc774 \uc0ac\uc6a9\uc790\uc5d0\uac8c QrCode\ub97c \ud45c\uc2dc\ud574\uc57c \ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.\n  // const qrCode = generateQrCode(`https://mixin.one/codes/${resp.coded}`)\n  // showQrCodeDialog();\n}\n")),(0,a.kt)("h3",{id:"way-2"},"Way 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const BTC_ASSET_ID = 'c6d0c728-2624-429b-8e0d-d9d19b6592fa';\nconst ETH_ASSET_ID = '43d61dcd-e413-450d-80b8-101d5e903357';\n\nasync function pay() {\n  const follow_id = uuid.v4();\n\n  // \uba54\ubaa8 \uc791\uc131\n  const memo = `3,${YOUR_USER_ID},${follow_id},${ETH_ASSET_ID},${''},${'0.0001'}`;\n\n  // BTC\uc5d0\uc11c ETH\ub85c \uc2a4\uc651\ud558\ub294 \uc791\uc5c5 \uc0dd\uc131\n  const resp = await http.post(`https://api.mixin.one/payments`, {\n    data: {\n      BTC_ASSET_ID,\n      '0.0001',\n      memo,\n      trace_id: follow_id,\n      // API `/api/information`\uc5d0\uc11c \uc218\uc2e0\uae30 \ubc0f \uc784\uacc4\uac12 \uc77d\uae30\n      opponent_multisig: { receivers, threshold },\n    }\n  });\n\n  // \uc6f9 \uc571\uc774 Messenger\uc758 webview\uc5d0\uc11c \uc2e4\ud589 \uc911\uc778 \uacbd\uc6b0\n  // \uadf8\uac83\uc740 \uacb0\uc81c UI\ub97c \ud638\ucd9c\ud560 \uac83\uc785\ub2c8\ub2e4.\n  window.location.href = resp.data.code_url;\n\n  // \uc6f9\uc5d0\uc11c \ub370\uc2a4\ud06c\ud1b1 \ubc29\ubb38\ub3c4 \uc9c0\uc6d0\ud558\ub294 \uacbd\uc6b0\n  // \ub2e4\uc74c\uacfc \uac19\uc774 \uc0ac\uc6a9\uc790\uc5d0\uac8c QrCode\ub97c \ud45c\uc2dc\ud574\uc57c \ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.\n  // const qrCode = generateQrCode(`https://mixin.one/codes/${resp.coded}`)\n  // showQrCodeDialog();\n}\n")),(0,a.kt)("h2",{id:"fennec-\ubd88\ub7ec\uc624\uae30"},"Fennec \ubd88\ub7ec\uc624\uae30"),(0,a.kt)("p",null,"Fennec\uc740 \uc554\ud638\ud654\ub41c \ud0a4 \uc800\uc7a5\uc18c\ub97c \ube0c\ub77c\uc6b0\uc800\uc5d0 \uc800\uc7a5\ud558\ub294 \ube0c\ub77c\uc6b0\uc800 \ud655\uc7a5 \uc9c0\uac11\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc790\uc0b0\uc744 \ub85c\ub4dc\ud558\uac70\ub098 \ud504\ub85c\ud544\uc744 \uc77d\uac70\ub098 \uacb0\uc81c\ub97c \uc900\ube44\ud558\uae30 \uc704\ud574 Mixin API\ub97c \ud638\ucd9c\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \ub300\uc2e0 Fennec\uc740 \uc774 \ubaa8\ub4e0 \uc791\uc5c5\uc744 \uc218\ud589\ud560 \uc218 \uc788\ub294 \uc790\uccb4 API\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fox-one/fennec#4-interact-with-your-mixin-dapp"},"demo's source code"),"\ub97c \uc77d\uace0 \uc54c\uc544\ubcf4\uc138\uc694."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// fennec ext\nlet ext = null;\n// fennec context\nlet ctx = null;\n// token\nlet token = null;\n\nasync function load() {\n  // ext\ub97c \ud655\uc778\ud558\uace0 context \ub97c \ud30c\uc545\ud558\uc138\uc694.\n  if (window.__MIXIN__ && window.__MIXIN__.mixin_ext) {\n    ext = window.__MIXIN__.mixin_ext;\n    ctx = await ext.enable(\"demo\");\n    if (ctx) {\n      token = await ctx.wallet.signToken({\n        payload: { from: \"demo\" }\n      });\n    }\n  }\n}\n\nconst BTC_ASSET_ID = 'c6d0c728-2624-429b-8e0d-d9d19b6592fa';\nconst ETH_ASSET_ID = '43d61dcd-e413-450d-80b8-101d5e903357';\n\nfunction pay() {\n  const follow_id = uuid.v4();\n\n  // \uba54\ubaa8 \uc791\uc131\n  const memo = `3,${YOUR_USER_ID},${follow_id},${ETH_ASSET_ID},${''},${'0.0001'}`;\n\n  // BTC\uc5d0\uc11c ETH\ub85c \uc2a4\uc651\ud558\ub294 \uc791\uc5c5 \uc0dd\uc131\n  const resp = await http.post(`/actions`, {\n    data: {\n      action: memo,\n      amount: \"0.0001\",\n      asset_id: BTC_ASSET_ID,\n      // \ub610\ub294 Broker_id\ub97c \ube44\uc6cc \ub450\uc2ed\uc2dc\uc624.\n      broker_id: '5dbdb169-d56d-4b5b-b066-9b0780691b14',\n    }\n  });\n\n  ctx.wallet.multisigsPayment({ code: resp.code });\n}\n")))}u.isMDXComponent=!0}}]);