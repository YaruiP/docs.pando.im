"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[8776],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return k}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=u(n),k=a,c=d["".concat(p,".").concat(k)]||d[k]||s[k]||l;return n?r.createElement(c,i(i({ref:e},m),{},{components:n})):r.createElement(c,i({ref:e},m))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9838:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return m},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={title:"Interest Rate Determination",date:"16-10-2021 12:33:07"},p=void 0,u={unversionedId:"rings/key-concepts/interest-model",id:"rings/key-concepts/interest-model",isDocsHomePage:!1,title:"Interest Rate Determination",description:"All interest rates in Pando Rings are determined as a function of utilization rate. With the changes in the utilization rate, interest rates continuously fluctuate.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/rings/key-concepts/interest-model.md",sourceDirName:"rings/key-concepts",slug:"/rings/key-concepts/interest-model",permalink:"/de/docs/rings/key-concepts/interest-model",version:"current",frontMatter:{title:"Interest Rate Determination",date:"16-10-2021 12:33:07"},sidebar:"docs",previous:{title:"Loan Risk Indicator",permalink:"/de/docs/rings/key-concepts/loan-risk-indicator"},next:{title:"Liquidation",permalink:"/de/docs/rings/key-concepts/liquidation"}},m=[{value:"The Utilization Rate",id:"the-utilization-rate",children:[]},{value:"Borrow rate",id:"borrow-rate",children:[]},{value:"Supply rate",id:"supply-rate",children:[]},{value:"Parameters of all Pando Rings&#39; money markets",id:"parameters-of-all-pando-rings-money-markets",children:[]}],s={toc:m};function d(t){var e=t.components,o=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"All interest rates in Pando Rings are determined as a function of ",(0,l.kt)("strong",{parentName:"p"},"utilization rate"),". ",(0,l.kt)("strong",{parentName:"p"},"With the changes in the utilization rate, interest rates continuously fluctuate.")),(0,l.kt)("h3",{id:"the-utilization-rate"},"The Utilization Rate"),(0,l.kt)("p",null,"The utilization rate for a money market is defined as:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Utilization_rate = market.total_borrows/(market.total_cash + market.borrows - market.reserves)\n")),(0,l.kt)("p",null,"Where"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"market.total_borrows refers to the amount of total borrow of a certain money market"),(0,l.kt)("li",{parentName:"ul"},"market.total_cash refers to the amount left in the system of a certain money market"),(0,l.kt)("li",{parentName:"ul"},"market.reserves refers to the amount that is kept as profit of a certain money market")),(0,l.kt)("p",null,"The formula can be interpreted roughly as the percentage of money borrowed out of the total money supplied."),(0,l.kt)("p",null,"A high utilization rate signifies that demand is high and a lot of borrowing is taking place, so interest rates go up as an incentive to get more people to inject cash into the system. A low utilization rate signifies that demand for borrowing is low, so interest rates go down to encourage more people to borrow cash from the system."),(0,l.kt)("h3",{id:"borrow-rate"},"Borrow rate"),(0,l.kt)("p",null,"Currently, the borrow rate model of all money markets on Rings follow the Jump Rate model."),(0,l.kt)("p",null,"In this model, there is a key parameter defined as ",(0,l.kt)("strong",{parentName:"p"},"Kink"),", which is a value of the utilization rate and creates a sharp turning point where the interest rates spike."),(0,l.kt)("p",null,"The borrow rate of the jump rate model is defined as:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"When the utilization rate \u2264 Kink:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Borrow_interest_rate = multiplier * market.utilization_rate + base_rate\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"When the utilization rate > Kink:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Borrow_interest_rate = multiplier * Kink + jump_multiplier * (market.utilization_rate - Kink) + base_rate\n")),(0,l.kt)("p",null,"Where"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"base_rate per year is the minimum borrowing rate"),(0,l.kt)("li",{parentName:"ul"},"multiplier per year is the rate of increase in interest rate with respect to utilization"),(0,l.kt)("li",{parentName:"ul"},"Kink is the point in the model in which the model follows the jump multiplier"),(0,l.kt)("li",{parentName:"ul"},"jump_multiplier per year is the rate of increase in interest rate with respect to utilization after the Kink")),(0,l.kt)("h3",{id:"supply-rate"},"Supply rate"),(0,l.kt)("p",null,"The supply rate is calculated as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Supply_interest_rate = Borrow_interest_rate * market.utilization_rate * (1 - market.reserve_factor)\n")),(0,l.kt)("p",null,"Where"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"market.utilization_rate is the utilization rate of a certain market"),(0,l.kt)("li",{parentName:"ul"},"market.reserve_factor controls what percentage of the interest borrowers pay for a certain market is kept within the system to protect lenders against borrow default and liquidation malfunction"),(0,l.kt)("li",{parentName:"ul"},"Borrow_interest_rate is the interest rate that borrowers pay for a certian market")),(0,l.kt)("h3",{id:"parameters-of-all-pando-rings-money-markets"},"Parameters of all Pando Rings' money markets"),(0,l.kt)("p",null,"(last updated on Oct 18, 2021)"),(0,l.kt)("p",null,"Currently, all money markets has a Kink of 80%, meaning, when utilization ratio reaches 80%, both the supply and borrow interest rates will have a sudden jump."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Symbol"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"base_rate"),(0,l.kt)("th",{parentName:"tr",align:null},"reserve_factor"),(0,l.kt)("th",{parentName:"tr",align:null},"multiplier"),(0,l.kt)("th",{parentName:"tr",align:null},"jump_multiplier"),(0,l.kt)("th",{parentName:"tr",align:null},"kink"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pUSD"),(0,l.kt)("td",{parentName:"tr",align:null},"Pando USD"),(0,l.kt)("td",{parentName:"tr",align:null},"0%"),(0,l.kt)("td",{parentName:"tr",align:null},"15%"),(0,l.kt)("td",{parentName:"tr",align:null},"5.8%"),(0,l.kt)("td",{parentName:"tr",align:null},"1.476"),(0,l.kt)("td",{parentName:"tr",align:null},"80%")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USDT"),(0,l.kt)("td",{parentName:"tr",align:null},"Tether USD"),(0,l.kt)("td",{parentName:"tr",align:null},"0%"),(0,l.kt)("td",{parentName:"tr",align:null},"15%"),(0,l.kt)("td",{parentName:"tr",align:null},"5.8%"),(0,l.kt)("td",{parentName:"tr",align:null},"1.476"),(0,l.kt)("td",{parentName:"tr",align:null},"80%")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BTC"),(0,l.kt)("td",{parentName:"tr",align:null},"Bitcoin"),(0,l.kt)("td",{parentName:"tr",align:null},"0%"),(0,l.kt)("td",{parentName:"tr",align:null},"20%"),(0,l.kt)("td",{parentName:"tr",align:null},"29.13%"),(0,l.kt)("td",{parentName:"tr",align:null},"3.6255"),(0,l.kt)("td",{parentName:"tr",align:null},"80%")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ETH"),(0,l.kt)("td",{parentName:"tr",align:null},"Ethereum"),(0,l.kt)("td",{parentName:"tr",align:null},"0%"),(0,l.kt)("td",{parentName:"tr",align:null},"20%"),(0,l.kt)("td",{parentName:"tr",align:null},"29.13%"),(0,l.kt)("td",{parentName:"tr",align:null},"3.6255"),(0,l.kt)("td",{parentName:"tr",align:null},"80%")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LTC"),(0,l.kt)("td",{parentName:"tr",align:null},"Litecoin"),(0,l.kt)("td",{parentName:"tr",align:null},"0%"),(0,l.kt)("td",{parentName:"tr",align:null},"20%"),(0,l.kt)("td",{parentName:"tr",align:null},"29.13%"),(0,l.kt)("td",{parentName:"tr",align:null},"3.6255"),(0,l.kt)("td",{parentName:"tr",align:null},"80%")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EOS"),(0,l.kt)("td",{parentName:"tr",align:null},"EOS"),(0,l.kt)("td",{parentName:"tr",align:null},"0%"),(0,l.kt)("td",{parentName:"tr",align:null},"20%"),(0,l.kt)("td",{parentName:"tr",align:null},"29.13%"),(0,l.kt)("td",{parentName:"tr",align:null},"3.6255"),(0,l.kt)("td",{parentName:"tr",align:null},"80%")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DOT"),(0,l.kt)("td",{parentName:"tr",align:null},"Polkadot"),(0,l.kt)("td",{parentName:"tr",align:null},"0%"),(0,l.kt)("td",{parentName:"tr",align:null},"20%"),(0,l.kt)("td",{parentName:"tr",align:null},"29.13%"),(0,l.kt)("td",{parentName:"tr",align:null},"3.6255"),(0,l.kt)("td",{parentName:"tr",align:null},"80%")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"XIN"),(0,l.kt)("td",{parentName:"tr",align:null},"Mixin"),(0,l.kt)("td",{parentName:"tr",align:null},"0%"),(0,l.kt)("td",{parentName:"tr",align:null},"20%"),(0,l.kt)("td",{parentName:"tr",align:null},"29.13%"),(0,l.kt)("td",{parentName:"tr",align:null},"3.6255"),(0,l.kt)("td",{parentName:"tr",align:null},"80%")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MOB"),(0,l.kt)("td",{parentName:"tr",align:null},"MoblieCoin"),(0,l.kt)("td",{parentName:"tr",align:null},"0%"),(0,l.kt)("td",{parentName:"tr",align:null},"20%"),(0,l.kt)("td",{parentName:"tr",align:null},"29.13%"),(0,l.kt)("td",{parentName:"tr",align:null},"3.6255"),(0,l.kt)("td",{parentName:"tr",align:null},"80%")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BOX"),(0,l.kt)("td",{parentName:"tr",align:null},"BoxToken"),(0,l.kt)("td",{parentName:"tr",align:null},"0%"),(0,l.kt)("td",{parentName:"tr",align:null},"20%"),(0,l.kt)("td",{parentName:"tr",align:null},"29.13%"),(0,l.kt)("td",{parentName:"tr",align:null},"3.6255"),(0,l.kt)("td",{parentName:"tr",align:null},"80%")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DOGE"),(0,l.kt)("td",{parentName:"tr",align:null},"DogeCoin"),(0,l.kt)("td",{parentName:"tr",align:null},"0%"),(0,l.kt)("td",{parentName:"tr",align:null},"20%"),(0,l.kt)("td",{parentName:"tr",align:null},"29.13%"),(0,l.kt)("td",{parentName:"tr",align:null},"3.6255"),(0,l.kt)("td",{parentName:"tr",align:null},"80%")))),(0,l.kt)("p",null,"For pUSD and USDT: ",(0,l.kt)("img",{src:n(7069).Z})),(0,l.kt)("p",null,"For BTC, ETH, LTC, EOS. DOT, XIN, MOB, BOX and DOGE: ",(0,l.kt)("img",{src:n(4403).Z})),(0,l.kt)("p",null,"It is important to understand the interest rate model of your selected money markets and monitor the changes in the interest rates for the profitability and safety of your assets."))}d.isMDXComponent=!0},4403:function(t,e,n){e.Z=n.p+"assets/images/othercoins-model-9cc030eab9c124084d42af282139ab53.png"},7069:function(t,e,n){e.Z=n.p+"assets/images/stablecoin-model-9c2f63bd88ef29e56b98cde2687147b1.png"}}]);