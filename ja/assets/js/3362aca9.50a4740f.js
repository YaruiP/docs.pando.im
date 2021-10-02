"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[2058],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(g,i(i({ref:n},l),{},{components:t})):r.createElement(g,i({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},885:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={title:"API Reference",sidebar_position:4,date:new Date("2021-08-16T17:40:00.000Z")},p=void 0,c={unversionedId:"rings/apis",id:"rings/apis",isDocsHomePage:!1,title:"API Reference",description:"This document describes the definition and usage of the restful api and RPC interface of the pando rings engine.",source:"@site/developer/rings/apis.md",sourceDirName:"rings",slug:"/rings/apis",permalink:"/ja/developer/rings/apis",version:"current",lastUpdatedAt:1629253582,formattedLastUpdatedAt:"8/18/2021",sidebarPosition:4,frontMatter:{title:"API Reference",sidebar_position:4,date:"2021-08-16T17:40:00.000Z"},sidebar:"docs",previous:{title:"Guide",permalink:"/ja/developer/rings/guide"},next:{title:"Open Source",permalink:"/ja/developer/resources/open-source"}},l=[{value:"Restful API",id:"restful-api",children:[{value:"\u2022 All markets",id:"-all-markets",children:[]},{value:"\u2022 Transactions",id:"-transactions",children:[]},{value:"\u2022 Request Pay",id:"-request-pay",children:[]}]},{value:"RPC",id:"rpc",children:[{value:"\u2022 Usage",id:"-usage",children:[]}]},{value:"Actions",id:"actions",children:[]}],d={toc:l};function u(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document describes the definition and usage of the restful api and RPC interface of the pando rings engine."),(0,o.kt)("h2",{id:"restful-api"},"Restful API"),(0,o.kt)("h3",{id:"-all-markets"},"\u2022 All markets"),(0,o.kt)("p",null,"Returns all the markets that can be supplied and borrowed."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"HTTP")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET /api/v1/markets/all\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "id": 1,\n      "asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",\n      "symbol": "USDT",\n      "ctoken_asset_id": "f8abf8be-2ead-3638-afa4-8a0b08872998",\n      "total_cash": "334.7108376354365625",\n      "total_borrows": "8.7389310703276705",\n      "reserves": "0.4136021855620769",\n      "ctokens": "339.76830046",\n      "init_exchange_rate": "1",\n      "reserve_factor": "0.1",\n      "liquidation_incentive": "0.05",\n      "borrow_cap": "0",\n      "collateral_factor": "0.75",\n      "close_factor": "0.5",\n      "base_rate": "0.025",\n      "multiplier": "0.3",\n      "jump_multiplier": "0",\n      "kink": "0",\n      "block_number": 1719179,\n      "utilization_rate": "0.0254752469950221",\n      "exchange_rate": "1.0096179250853535",\n      "supply_rate_per_block": "0.0000000003559835",\n      "borrow_rate_per_block": "0.0000000155263385",\n      "price": "1.0002",\n      "price_updated_at": "2021-08-17T11:14:49+08:00",\n      "borrow_index": "0.0000000123582381",\n      "version": 2230721,\n      "status": 1,\n      "created_at": "2020-12-18T17:37:07+08:00",\n      "updated_at": "2021-08-17T11:14:50+08:00",\n      "supply_apy": "0.0007484197104",\n      "borrow_apy": "0.0326425740624",\n      "suppliers": 36,\n      "borrowers": 15\n    }\n  ]\n}\n')),(0,o.kt)("h3",{id:"-transactions"},"\u2022 Transactions"),(0,o.kt)("p",null,"Returns all the user transactions by time."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"HTTP")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET /api/v1/transactions?limit=10&offset=\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Query Params"),"\n|key|type|des|\n|---|---|---|\n|limit|string|page data limit, 500 by default|\n|offset|string|Pagination start time, RFC3339Nano format, e.g. 2020-12-12T12:12:12.999999999Z|"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": 28022,\n    "action": 1,\n    "trace_id": "f88257ab-1eaa-3941-a1c7-3de547c301dc",\n    "user_id": "3deb7492-fabd-4792-875e-a08a64391db4",\n    "follow_id": "41dcd9d6-6653-4c2f-ba77-c241654c3abe",\n    "asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",\n    "amount": "0.4",\n    "data": {\n      "amount": "0.39619513",\n      "ctoken_asset_id": "f8abf8be-2ead-3638-afa4-8a0b08872998"\n    },\n    "created_at": "2021-08-10T12:01:27+08:00",\n    "updated_at": "2021-08-10T12:01:27+08:00"\n  },\n  {\n    "id": 28023,\n    "action": 5,\n    "trace_id": "16bd7cb6-2db3-51d1-b9a2-82d77e598423",\n    "user_id": "3deb7492-fabd-4792-875e-a08a64391db4",\n    "follow_id": "41dcd9d6-6653-4c2f-ba77-c241654c3abe",\n    "snapshot_trace_id": "ee4c355a-8fb2-3f39-9e16-b151bef4372a",\n    "asset_id": "f8abf8be-2ead-3638-afa4-8a0b08872998",\n    "amount": "0.39619513",\n    "data": {\n      "origin": 0\n    },\n    "created_at": "2021-08-10T12:01:34+08:00",\n    "updated_at": "2021-08-10T12:01:34+08:00"\n  }\n]\n')),(0,o.kt)("h3",{id:"-request-pay"},"\u2022 Request Pay"),(0,o.kt)("p",null,"Returns the pay url according to the specified action and paramter data."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"HTTP")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-url"},"POST /api/v1/pay-requests\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Payload")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "memo_base64": "AQIQU1BMqZkaQmWmkOzm4LfkFA==",\n  "asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",\n  "amount": "0.01",\n  "trace_id": "2996c597-db43-4294-982e-6791909c0271",\n  "follow_id": "53504ca9-991a-4265-a690-ece6e0b7e414"\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "url":"mixin://codes/6df372af-5557-4064-a074-698c4677661e"\n}\n')),(0,o.kt)("h2",{id:"rpc"},"RPC"),(0,o.kt)("p",null,"Based on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/twitchtv/twirp"},"Twirp")," implementation RPC interfaces.\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fox-one/pando-rings-sdk-go/blob/main/rpc/service.proto"},"proto file")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-proto"},'syntax = "proto3";\n\noption go_package = "../rpc";\n\nimport "google/protobuf/timestamp.proto";\n\nmessage MarketReq {\n\n}\n\nmessage Market {\n    int64 id = 1;\n    string asset_id = 2;\n    string symbol = 3;\n    string ctoken_asset_id = 4;\n    string total_cash = 5;\n    string total_borrows = 6;\n    string reserves = 7;\n    string ctokens = 8;\n    string init_exchange_rate = 9;\n    string reserve_factor = 10;\n    string liquidation_incentive = 11;\n    string borrow_cap = 12;\n    string collateral_factor = 13;\n    string close_factor = 14;\n    string base_rate = 15;\n    string multiplier = 16;\n    string jump_multiplier = 17;\n    string kink = 18;\n    int64 block_number = 19;\n    string utilization_rate = 20;\n    string exchange_rate = 21;\n    string supply_rate_per_block = 22;\n    string borrow_rate_per_block = 23;\n    string price = 24;\n    google.protobuf.Timestamp price_update_at = 25;\n    string borrow_index = 26;\n    int32 status = 27;\n    google.protobuf.Timestamp created_at = 28;\n    google.protobuf.Timestamp updated_at = 29;\n    int64 suppliers = 30;\n    int64 borrowers = 31;\n    string supply_apy = 32;\n    string borrow_apy = 33;\n}\n\nmessage MarketListResp {\n    repeated Market data = 1;\n}\n\nmessage PriceReq {\n\n}\n\nmessage PriceReceiver {\n    repeated string members = 1;\n    int32 threshold = 2;\n}\n\nmessage PriceSigner {\n    int32 index = 1;\n    string verify_key = 2;\n}\n\nmessage Price {\n    string asset_id = 1;\n    string symbol = 2;\n    string trace_id = 3;\n    PriceReceiver receiver = 4;\n    repeated PriceSigner signers = 5;\n    int32 threshold = 6;\n}\nmessage PriceRequestResp {\n    repeated Price data = 1;\n}\n\nmessage TransactionReq {\n    google.protobuf.Timestamp offset = 1;\n    int32 limit = 2;\n}\n\nmessage Transaction {\n    int64 id = 1;\n    int32 action = 2;\n    string trace_id = 3;\n    string user_id = 4;\n    string follow_id = 5;\n    string snapshot_trace_id = 6;\n    string asset_id = 7;\n    string amount = 8;\n    bytes data = 9;\n    google.protobuf.Timestamp created_at = 10;\n}\n\nmessage TransactionListResp {\n    repeated Transaction data = 1;\n}\n\nmessage PayReq {\n    string asset_id = 1;\n    string amount = 2;\n    string trace_id = 3;\n    string follow_id = 4;\n    string memo_base64 = 5;\n    bool with_gas = 6;\n}\n\nmessage PayResp {\n    string url = 1;\n}\n\nservice Compound {\n    rpc AllMarkets(MarketReq) returns (MarketListResp);\n    rpc PriceRequest(PriceReq) returns (PriceRequestResp);\n    rpc Transactions(TransactionReq) returns (TransactionListResp);\n    rpc PayRequest (PayReq) returns (PayResp);\n}\n')),(0,o.kt)("h3",{id:"-usage"},"\u2022 Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'rpcClient := rpc.NewCompoundProtobufClient("https://compound-test-api.fox.one", &http.Client{})\n\n//request all markets\nmarkets, err := rpcClient.AllMarkets(ctx, &rpc.MarketReq{})\nif err != nil {\n    return nil, err\n}\nreturn markets, nil\n\n//request transactions\nt := timestamppb.New(time.Now().AddDate(0, 0, -400))\nreq := rpc.TransactionReq{\n    Offset: t,\n    Limit:  50,\n}\n\ntransactions, err := rpcClient.Transactions(cmd.Context(), &req)\nif err != nil {\n    return nil, err\n}\n\nreturn transactions, nil\n\n// request pay\nreq := rpc.PayReq{\n    AssetId:    "4d8c508b-91c5-375b-92b0-ee702ed2dac5",\n    Amount:     "0.01",\n    TraceId:    uuid.New(),\n    FollowId:   uuid.New(),\n    MemoBase64: "AQIQONJAADfaSXCp+PK9A5Erkg==",\n}\nresp, err := rpcClient.PayRequest(cmd.Context(), &req)\nif err != nil {\n    return nil, err\n}\n\nreturn resp, nil\n')),(0,o.kt)("h2",{id:"actions"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/fox-one/compound/blob/master/core/action.go"},"Actions")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"const (\n    // ActionTypeDefault default\n    ActionTypeDefault ActionType = iota\n    // ActionTypeSupply supply action\n    ActionTypeSupply\n    // ActionTypeBorrow borrow action\n    ActionTypeBorrow\n    // ActionTypeRedeem redeem action\n    ActionTypeRedeem\n    // ActionTypeRepay repay action\n    ActionTypeRepay\n    // ActionTypeMint mint ctoken action\n    ActionTypeMint\n    // ActionTypePledge pledge action\n    ActionTypePledge\n    // ActionTypeUnpledge unpledge action\n    ActionTypeUnpledge\n    // ActionTypeLiquidate liquidation action\n    ActionTypeLiquidate\n    // ActionTypeRedeemTransfer redeem transfer action\n    ActionTypeRedeemTransfer\n    // ActionTypeUnpledgeTransfer unpledge transfer action\n    ActionTypeUnpledgeTransfer\n    // ActionTypeBorrowTransfer borrow transfer action\n    ActionTypeBorrowTransfer\n    // ActionTypeLiquidateTransfer liquidation transfer action\n    ActionTypeLiquidateTransfer\n    // ActionTypeRefundTransfer refund action\n    ActionTypeRefundTransfer\n    // ActionTypeRepayRefundTransfer repay refund action\n    ActionTypeRepayRefundTransfer\n    // ActionTypeLiquidateRefundTransfer seize refund action\n    ActionTypeLiquidateRefundTransfer\n    // ActionTypeProposalAddMarket add market proposal action\n    ActionTypeProposalAddMarket\n    // ActionTypeProposalUpdateMarket update market proposal action\n    ActionTypeProposalUpdateMarket\n    // ActionTypeProposalWithdrawReserves withdraw reserves proposal action\n    ActionTypeProposalWithdrawReserves\n    // ActionTypeProposalProvidePrice provide price action\n    ActionTypeProposalProvidePrice\n    // ActionTypeProposalVote vote action\n    ActionTypeProposalVote\n    // ActionTypeProposalInjectCTokenForMint inject token action\n    ActionTypeProposalInjectCTokenForMint\n    // ActionTypeProposalUpdateMarketAdvance update market advance parameters action\n    ActionTypeProposalUpdateMarketAdvance\n    // ActionTypeProposalTransfer proposal transfer action\n    ActionTypeProposalTransfer\n    // ActionTypeProposalCloseMarket proposal close market action\n    ActionTypeProposalCloseMarket\n    // ActionTypeProposalOpenMarket proposal open market action\n    ActionTypeProposalOpenMarket\n    // ActionTypeProposalAddScope proposal add allowlist scope action\n    ActionTypeProposalAddScope\n    // ActionTypeProposalRemoveScope proposal remove allowlist scope action\n    ActionTypeProposalRemoveScope\n    // ActionTypeProposalAddAllowList proposal add to allowlist action\n    ActionTypeProposalAddAllowList\n    // ActionTypeProposalRemoveAllowList proposal remove from allowlist action\n    ActionTypeProposalRemoveAllowList\n    // ActionTypeUpdateMarket update market\n    ActionTypeUpdateMarket\n    // ActionTypeQuickPledge supply -> pledge\n    ActionTypeQuickPledge\n    // ActionTypeQuickBorrow supply -> pledge -> borrow\n    ActionTypeQuickBorrow\n    // ActionTypeQuickBorrowTransfer quick borrow transfer\n    ActionTypeQuickBorrowTransfer\n    // ActionTypeQuickRedeem unpledge -> redeem\n    ActionTypeQuickRedeem\n    // ActionTypeQuickRedeem quick redeem transfer\n    ActionTypeQuickRedeemTransfer\n    // ActionTypeProposalAddOracleSigner add oracle signer proposal action\n    ActionTypeProposalAddOracleSigner\n    // ActionTypeProposalRemoveOracleSigner remove oracle signer proposal action\n    ActionTypeProposalRemoveOracleSigner\n)\n")))}u.isMDXComponent=!0}}]);