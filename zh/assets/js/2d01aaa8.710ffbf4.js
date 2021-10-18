"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[9107],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,f=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5680:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={title:"rToken",sidebar_position:1,date:new Date("2021-09-04T12:33:07.000Z")},c=void 0,p={unversionedId:"rings/key-concepts/rtoken",id:"rings/key-concepts/rtoken",isDocsHomePage:!1,title:"rToken",description:"When someone supplies an asset to Pando Rings, they are given rTokens in exchange.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/rings/key-concepts/rtoken.md",sourceDirName:"rings/key-concepts",slug:"/rings/key-concepts/rtoken",permalink:"/zh/docs/rings/key-concepts/rtoken",version:"current",sidebarPosition:1,frontMatter:{title:"rToken",sidebar_position:1,date:"2021-09-04T12:33:07.000Z"},sidebar:"docs",previous:{title:"Checking your transaction history",permalink:"/zh/docs/rings/tutorials/check-tx-history"},next:{title:"Net APY",permalink:"/zh/docs/rings/key-concepts/net-apy"}},l=[],u={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When someone supplies an asset to Pando Rings, they are given rTokens in exchange."),(0,o.kt)("p",null,"With the meaning of Rings Token, rToken is an ERC-20 token that is essentially a tokenized supply position and can be used as collateral in other liquidity pool or exchanged for other crypto assets."),(0,o.kt)("p",null,"Every type of cryptocurrency supplied to Pand Rings has a corresponding rToken. For example, if a user supplies ETH, they will receive rETH; if a user supplies BTC, they will receive rBTC."),(0,o.kt)("p",null,"rTokens are used in the process of ",(0,o.kt)("a",{parentName:"p",href:"./glossary"},"supplying"),", ",(0,o.kt)("a",{parentName:"p",href:"./glossary"},"pledging"),", ",(0,o.kt)("a",{parentName:"p",href:"./glossary"},"unpledging")," and ",(0,o.kt)("a",{parentName:"p",href:"./glossary"},"withdrawing"),". And it can be transferred freely to anyone in the same way you transfer any other crypto assets. Please be noted though, ",(0,o.kt)("strong",{parentName:"p"},"once you have transferred the rTokens to others, you are no longer entitled to the corresponding underlying assets"),"."),(0,o.kt)("p",null," Each asset market has its own Supply interest rate (",(0,o.kt)("a",{parentName:"p",href:"./glossary"},"Supply APY"),").  Simply by holding rTokens, the suppliers earn ",(0,o.kt)("strong",{parentName:"p"},"compound")," interest. "),(0,o.kt)("p",null," rTokens accumulate interest through the exchange rate against the corresponding Tokens. Over time, each rToken becomes convertible into an increasing amount of its underlying asset, even while the number of rTokens in your wallet stays the same. "),(0,o.kt)("p",null," When you ",(0,o.kt)("a",{parentName:"p",href:"./glossary"},"withdraw"),", your rTokens will be converted back to the corresponding Tokens. This is when you will get back your amount you put in as well as the interest yield. ",(0,o.kt)("strong",{parentName:"p"},"The interest yield will not be distributed while you are holding the rTokens. You will receive it only after you've withdrawed the asset to your wallet.")),(0,o.kt)("p",null,"You can withdraw the underlying asset from rToken at any time, granted that Pando Rings has enough market ",(0,o.kt)("a",{parentName:"p",href:"./glossary"},"liquidity")," of the asset."),(0,o.kt)("h4",{id:"trace-rtokens-here"},"Trace rTokens here:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x3e09ebcb505f085f7b802419cfc92370fd840276"},"rUSD (rToken against pUSD)")," "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x7bb6a8ed5a15396adedea940714a1ebc7d8e9f6a"},"rETH (rToken against ETH)")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x2fe5203c59f84ceb90ea078821bf419b4c0bb6da"},"rUSDT (rToken against USDT)")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x230d8b253cc1c6d43e408cd14907c1fc5fc8eb91"},"rDOT (rToken against DOT)")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0xee3ecf819b1eb872588d3430ab71145d4bf8be2d"},"rEOS (rToken against EOS)")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x6f5d7697ba37ebb893e31770fd587c41409351b3"},"rLTC (rToken against LTC)")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0xe97030e28279182707e977663ea950a99e4af6d7"},"rBTC (rToken against BTC)")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0xcf8c6b077abe14bd203707876209492b62407c45"},"rXIN (rToken against XIN)")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0xd3cd1519fc64c20c3ec7c061a88ee23065ddd5ed"},"rMOB (rToken against MOB)")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0xc05c9ae5c5186f0c616b32926625798d5f53a9cd"},"rBOX (rToken against BOX)")))}d.isMDXComponent=!0}}]);