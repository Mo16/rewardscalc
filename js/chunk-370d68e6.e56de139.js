(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-370d68e6"],{1148:function(t,e,a){"use strict";var n=a("a691"),r=a("577e"),i=a("1d80");t.exports=function(t){var e=r(i(this)),a="",s=n(t);if(s<0||s==1/0)throw RangeError("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(e+=e))1&s&&(a+=e);return a}},"24e6":function(t,e,a){"use strict";a.r(e);var n,r,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("PageHeader",{attrs:{title:t.title,items:t.items}}),a("Stat"),a("div",{staticClass:"row"},[a("SalesAnalytics")],1)],1)},s=[],o=a("5658"),l=a("2579"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 col-xl-3"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"float-end mt-2"},[t.tokenPrice?a("img",{attrs:{src:"https://i.ibb.co/ngx3bH1/icon.png",height:"80"}}):a("b-spinner",{staticClass:"m-2",attrs:{variant:"primary",role:"status"}})],1),a("div",[t.tokenPrice?a("h4",{staticClass:"mb-1 mt-1"},[t._v(" $ "),a("span",{attrs:{"data-plugin":"counterup"}},[a("countTo",{attrs:{startVal:2e-7,endVal:t.tokenPrice,duration:2e3,decimals:8}})],1)]):t._e(),t.tokenPrice?t._e():a("h4",{staticClass:"mb-1 mt-1"},[t._v(" Loading.. ")]),a("p",{staticClass:"text-muted mb-0"},[t._v("Token Price")])]),t.tokenPriceChange?a("p",{staticClass:"text-muted mt-3 mb-0"},[t.tokenPriceChange>=0?a("span",{staticClass:"text-success me-1"},[a("i",{staticClass:"mdi mdi-arrow-up-bold me-1"}),t._v(" "+t._s(t.tokenPriceChange)+" % ")]):t._e(),t.tokenPriceChange<0?a("span",{staticClass:"text-danger me-1"},[a("i",{staticClass:"mdi mdi-arrow-down-bold me-1"}),t._v(" "+t._s(t.tokenPriceChange)+" % ")]):t._e(),t._v(" since last 24h ")]):t._e(),t.tokenPriceChange?t._e():a("p",{staticClass:"text-muted mt-3 mb-0"},[t._v(" Loading.. ")])])])]),a("div",{staticClass:"col-md-6 col-xl-3"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[t._m(0),a("div",[a("h4",{staticClass:"mb-1 mt-1"},[t._v(" $ "),a("span",{attrs:{"data-plugin":"counterup"}},[a("countTo",{attrs:{startVal:0,endVal:t.tokenVolume,duration:2e3,decimals:2}})],1)]),a("p",{staticClass:"text-muted mb-0"},[t._v("Volume")])]),a("p",{staticClass:"text-muted mt-3 mb-0"},[t._v(" since last 24h ")])])])]),a("div",{staticClass:"col-md-6 col-xl-3"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[t._m(1),a("div",[a("h4",{staticClass:"mb-1 mt-1"},[a("span",{attrs:{"data-plugin":"counterup"}},[a("countTo",{attrs:{startVal:0,endVal:t.telegramUser,duration:2e3}})],1)]),a("p",{staticClass:"text-muted mb-0"},[t._v("User")])]),a("p",{staticClass:"text-muted mt-3 mb-0"},[t._v(" on Telegram ")])])])]),a("div",{staticClass:"col-md-6 col-xl-3"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[t._m(2),a("div",[t.bnbPrice?a("h4",{staticClass:"mb-1 mt-1"},[t._v(" $ "),a("span",{attrs:{"data-plugin":"counterup"}},[a("countTo",{attrs:{startVal:0,endVal:t.bnbPrice,duration:2e3,decimals:2}})],1)]):t._e(),t.bnbPrice?t._e():a("h4",{staticClass:"mb-1 mt-1"},[t._v(" Loading.. ")]),a("p",{staticClass:"text-muted mb-0"},[t._v("BNB Price")])]),t.bnbChange?a("p",{staticClass:"text-muted mt-3 mb-0"},[t.bnbChange>=0?a("span",{staticClass:"text-success me-1"},[a("i",{staticClass:"mdi mdi-arrow-up-bold me-1"}),t._v(" "+t._s(t.bnbChange.toFixed(2))+" % ")]):t._e(),t.bnbChange<0?a("span",{staticClass:"text-danger me-1"},[a("i",{staticClass:"mdi mdi-arrow-down-bold me-1"}),t._v(" "+t._s(t.bnbChange.toFixed(2))+" % ")]):t._e(),t._v(" since last 24h ")]):t._e(),t.bnbChange?t._e():a("p",{staticClass:"text-muted mt-3 mb-0"},[t._v(" Loading.. ")])])])])])},u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"float-end mt-2"},[a("img",{attrs:{src:"https://i.ibb.co/ngx3bH1/icon.png",height:"80"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"float-end mt-2"},[a("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1024px-Telegram_logo.svg.png",alt:"",height:"60"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"float-end mt-2"},[a("img",{attrs:{src:"https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png",alt:"",height:"60"}})])}],d=a("1da1"),m=(a("96cf"),a("b680"),a("ec1b")),h=a.n(m),p=a("bc3a"),f=a.n(p),b={components:{countTo:h.a},mounted:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){var e,a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getData();case 2:return e=t.sent,this.tokenPrice=e.price,a=e.priceChange,this.tokenPriceChange=a.toFixed(2),this.tokenVolume=e.volume,t.next=9,this.getCommunityData();case 9:return n=t.sent,this.telegramUser=n.telegramUser,this.twitterFollower=n.twitterFollower,t.next=14,this.getBNBData();case 14:r=t.sent,this.bnbPrice=r.price,this.bnbChange=r.priceChange;case 17:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{getData:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://api.coingecko.com/api/v3/simple/price?ids=fatcake&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true");case 2:return e=t.sent,t.abrupt("return",{price:e.data.fatcake.usd,priceChange:e.data.fatcake.usd_24h_change,volume:e.data.fatcake.usd_24h_vol});case 4:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),getBNBData:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://api.coingecko.com/api/v3/simple/price?ids=wbnb&vs_currencies=usd&include_24hr_change=true");case 2:return e=t.sent,t.abrupt("return",{price:e.data.wbnb.usd,priceChange:e.data.wbnb.usd_24h_change});case 4:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),getCommunityData:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://api.coingecko.com/api/v3/coins/fatcake?community_data=true&developer_data=true");case 2:return e=t.sent,t.abrupt("return",{telegramUser:e.data.community_data.telegram_channel_user_count,twitterFollower:e.data.community_data.twitter_followers});case 4:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},data:function(){return{bnbPrice:null,bnbChange:null,tokenPrice:null,tokenPriceChange:null,tokenVolume:null,telegramUser:null,twitterFollower:null,series:[{data:[25,66,41,89,63,25,44,20,36,40,54]}],chartOptions:{fill:{colors:["#5b73e8"]},chart:{type:"bar",sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"50%"}},labels:[1,2,3,4,5,6,7,8,9,10,11],xaxis:{crosshairs:{width:1}},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(){return""}}},marker:{show:!1}}},growthChartOptions:{fill:{colors:["#f1b44c"]},chart:{type:"bar",sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"50%"}},labels:[1,2,3,4,5,6,7,8,9,10,11],xaxis:{crosshairs:{width:1}},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(){return""}}},marker:{show:!1}}},orderseries:[70],orderRadial:{fill:{colors:["#34c38f"]},chart:{sparkline:{enabled:!0}},dataLabels:{enabled:!1},plotOptions:{radialBar:{hollow:{margin:0,size:"60%"},track:{margin:0},dataLabels:{show:!1}}}},customerseries:[55],customerRadial:{fill:{colors:["#5b73e8"]},chart:{sparkline:{enabled:!0}},dataLabels:{enabled:!1},plotOptions:{radialBar:{hollow:{margin:0,size:"60%"},track:{margin:0},dataLabels:{show:!1}}}}}}},v=b,g=a("2877"),C=Object(g["a"])(v,c,u,!1,null,null,null),w=C.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"float-end"},[a("b-dropdown",{attrs:{variant:"white","toggle-class":"text-reset p-0","menu-class":"dropdown-menu-end"},scopedSlots:t._u([{key:"button-content",fn:function(){return[a("span",{staticClass:"fw-semibold"},[t._v("Sort By:")]),a("span",{staticClass:"text-muted"},[t._v(" Weekly "),a("i",{staticClass:"mdi mdi-chevron-down ms-1"})])]},proxy:!0}])},[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Weekly")])])],1),a("h4",{staticClass:"card-title mb-4"},[t._v("Chart (Last 7 days)")]),a("div",{staticClass:"mt-1"}),a("div",{staticClass:"mt-3"},[a("CoinChart",{attrs:{token:"fatcake",label:"FatCake Price",color:"blue"}})],1)])]),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"float-end"},[a("b-dropdown",{attrs:{variant:"white","toggle-class":"text-reset p-0","menu-class":"dropdown-menu-end"},scopedSlots:t._u([{key:"button-content",fn:function(){return[a("span",{staticClass:"fw-semibold"},[t._v("Sort By:")]),a("span",{staticClass:"text-muted"},[t._v(" Weekly "),a("i",{staticClass:"mdi mdi-chevron-down ms-1"})])]},proxy:!0}])},[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Weekly")])])],1),a("h4",{staticClass:"card-title mb-4"},[t._v("Chart (Last 7 days)")]),a("div",{staticClass:"mt-1"}),a("div",{staticClass:"mt-3"},[a("CoinChart",{attrs:{token:"binancecoin",label:"BNB Price",color:"yellow"}})],1)])]),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"float-end"},[a("b-dropdown",{attrs:{variant:"white","toggle-class":"text-reset p-0","menu-class":"dropdown-menu-end"},scopedSlots:t._u([{key:"button-content",fn:function(){return[a("span",{staticClass:"fw-semibold"},[t._v("Sort By:")]),a("span",{staticClass:"text-muted"},[t._v(" Weekly "),a("i",{staticClass:"mdi mdi-chevron-down ms-1"})])]},proxy:!0}])},[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Weekly")])])],1),a("h4",{staticClass:"card-title mb-4"},[t._v("Chart (Last 7 days)")]),a("div",{staticClass:"mt-1"}),a("div",{staticClass:"mt-3"},[a("CoinChart",{attrs:{token:"pancakeswap-token",label:"CAKE Price",color:"pink"}})],1)])])])},x=[],y=(a("99af"),a("1fca")),k={extends:y["c"],props:["token","color","label"],data:function(){return{}},methods:{getFatCakeData:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://api.coingecko.com/api/v3/coins/".concat(this.token,"/market_chart?vs_currency=usd&days=7"));case 2:return e=t.sent,t.abrupt("return",e.data.prices);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getDateString:function(t){var e=new Date;return e.setDate(e.getDate()-t),"".concat(e.getMonth()+1,"/").concat(e.getUTCDate())}},mounted:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var a,n,r,i,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getFatCakeData();case 2:for(a=e.sent,n=1e3,r=0,i=[],s=[],o=0;o<a.length;o++)a[o][1]<n&&(n=a[o][1]),a[o][1]>r&&(r=a[o][1]),i.push(a[o][1]),s.push("");t.renderChart({labels:s,datasets:[{label:t.label,fill:!0,lineTension:.5,backgroundColor:"rgba(91, 140, 232, 0.2)",borderColor:t.color,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#5b73e8",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#5b73e8",pointHoverBorderColor:"#fff",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:i}]},{defaultFontColor:"#9295a4",responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{color:"rgba(166, 176, 207, 0.1)"}}],yAxes:[{ticks:{max:r+n/50,min:n-n/50},gridLines:{color:"rgba(166, 176, 207, 0.1)"}}]}});case 9:case"end":return e.stop()}}),e)})))()}},V=k,F=Object(g["a"])(V,n,r,!1,null,null,null),D=F.exports,A={components:{CoinChart:D},data:function(){return{series:[{name:"Volume",type:"area",data:[44,55,41,67,22,43,21,41,56,27,43]}],chartOptions:{chart:{stacked:!1,toolbar:{show:!1}},stroke:{width:[0,2,4],curve:"smooth"},plotOptions:{bar:{columnWidth:"30%"}},colors:["#5b73e8","#dfe2e6","#f1b44c"],fill:{opacity:[.85,.25,1],gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.85,opacityTo:.55,stops:[0,100,100,100]}},labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],markers:{size:0},xaxis:{type:"datetime"},yaxis:{title:{text:"Points"}},tooltip:{shared:!0,intersect:!1,y:{formatter:function(t){return"undefined"!==typeof t?t.toFixed(0)+" points":t}}},grid:{borderColor:"#f1f1f1"}}}}},P=A,S=Object(g["a"])(P,_,x,!1,null,null,null),O=S.exports,B={page:{title:"Dashboard"},components:{Layout:o["a"],PageHeader:l["a"],Stat:w,SalesAnalytics:O},data:function(){return{title:"Dashboard",items:[{text:"FatCake",active:!0},{text:"Dashboard"}]}}},R=B,T=Object(g["a"])(R,i,s,!1,null,null,null);e["default"]=T.exports},"408a":function(t,e,a){var n=a("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},b680:function(t,e,a){"use strict";var n=a("23e7"),r=a("a691"),i=a("408a"),s=a("1148"),o=a("d039"),l=1..toFixed,c=Math.floor,u=function(t,e,a){return 0===e?a:e%2===1?u(t,e-1,a*t):u(t*t,e/2,a)},d=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},m=function(t,e,a){var n=-1,r=a;while(++n<6)r+=e*t[n],t[n]=r%1e7,r=c(r/1e7)},h=function(t,e){var a=6,n=0;while(--a>=0)n+=t[a],t[a]=c(n/e),n=n%e*1e7},p=function(t){var e=6,a="";while(--e>=0)if(""!==a||0===e||0!==t[e]){var n=String(t[e]);a=""===a?n:a+s.call("0",7-n.length)+n}return a},f=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){l.call({})}));n({target:"Number",proto:!0,forced:f},{toFixed:function(t){var e,a,n,o,l=i(this),c=r(t),f=[0,0,0,0,0,0],b="",v="0";if(c<0||c>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(b="-",l=-l),l>1e-21)if(e=d(l*u(2,69,1))-69,a=e<0?l*u(2,-e,1):l/u(2,e,1),a*=4503599627370496,e=52-e,e>0){m(f,0,a),n=c;while(n>=7)m(f,1e7,0),n-=7;m(f,u(10,n,1),0),n=e-1;while(n>=23)h(f,1<<23),n-=23;h(f,1<<n),m(f,1,1),h(f,2),v=p(f)}else m(f,0,a),m(f,1<<-e,0),v=p(f)+s.call("0",c);return c>0?(o=v.length,v=b+(o<=c?"0."+s.call("0",c-o)+v:v.slice(0,o-c)+"."+v.slice(o-c))):v=b+v,v}})},ec1b:function(t,e,a){!function(e,a){t.exports=a()}(0,(function(){return function(t){function e(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var a={};return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,a){var n=a(4)(a(1),a(5),null,null);t.exports=n.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,a,n){return a*(1-Math.pow(2,-10*t/n))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,n.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,n.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,n.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,n.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,n.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals),t+="";var e=t.split("."),a=e[0],n=e.length>1?this.decimal+e[1]:"",r=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;r.test(a);)a=a.replace(r,"$1"+this.separator+"$2");return this.prefix+a+n+this.suffix}},destroyed:function(){(0,n.cancelAnimationFrame)(this.rAF)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(0),r=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=r.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",r.default)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0,r="webkit moz ms o".split(" "),i=void 0,s=void 0;if("undefined"==typeof window)e.requestAnimationFrame=i=function(){},e.cancelAnimationFrame=s=function(){};else{e.requestAnimationFrame=i=window.requestAnimationFrame,e.cancelAnimationFrame=s=window.cancelAnimationFrame;for(var o=void 0,l=0;l<r.length&&(!i||!s);l++)o=r[l],e.requestAnimationFrame=i=i||window[o+"RequestAnimationFrame"],e.cancelAnimationFrame=s=s||window[o+"CancelAnimationFrame"]||window[o+"CancelRequestAnimationFrame"];i&&s||(e.requestAnimationFrame=i=function(t){var e=(new Date).getTime(),a=Math.max(0,16-(e-n)),r=window.setTimeout((function(){t(e+a)}),a);return n=e+a,r},e.cancelAnimationFrame=s=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=i,e.cancelAnimationFrame=s},function(t,e){t.exports=function(t,e,a,n){var r,i=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(r=t,i=t.default);var o="function"==typeof i?i.options:i;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),a&&(o._scopeId=a),n){var l=Object.create(o.computed||null);Object.keys(n).forEach((function(t){var e=n[t];l[t]=function(){return e}})),o.computed=l}return{esModule:r,exports:i,options:o}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])}))}}]);
//# sourceMappingURL=chunk-370d68e6.e56de139.js.map