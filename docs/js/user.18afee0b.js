(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user"],{"0dae":function(e,t,n){"use strict";n("91a2")},"0eaf":function(e,t,n){"use strict";n("b0c0");var c=n("7a23"),a=Object(c["T"])("data-v-2adef164");Object(c["C"])("data-v-2adef164");var r={class:"simple-header van-hairline--bottom"},o={key:1},u={class:"simple-header-name"},i=Object(c["j"])("i",{class:"nbicon nbmore"},null,-1),s=Object(c["j"])("div",{class:"block"},null,-1);Object(c["A"])();var b=a((function(e,t,n,a,b,j){return Object(c["z"])(),Object(c["f"])(c["a"],null,[Object(c["j"])("header",r,[a.isback?(Object(c["z"])(),Object(c["f"])("i",o,"      ")):(Object(c["z"])(),Object(c["f"])("i",{key:0,class:"nbicon nbfanhui",onClick:t[1]||(t[1]=function(){return a.goBack.apply(a,arguments)})})),Object(c["j"])("div",u,Object(c["L"])(n.name),1),i]),s],64)})),j=n("6c02"),l={props:{name:{type:String,default:""},back:{type:String,default:""},noback:{type:Boolean,default:!1}},emits:["callback"],setup:function(e,t){var n=Object(c["E"])(e.noback),a=Object(j["d"])(),r=function(){e.back?a.push({path:e.back}):a.go(-1),t.emit("callback")};return{goBack:r,isback:n}}},d=(n("122a"),n("6b0d")),O=n.n(d);const f=O()(l,[["render",b],["__scopeId","data-v-2adef164"]]);t["a"]=f},"122a":function(e,t,n){"use strict";n("89b7")},1511:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a=Object(c["T"])("data-v-25810bea");Object(c["C"])("data-v-25810bea");var r={class:"user-box"},o={class:"user-info"},u={class:"info"},i=Object(c["j"])("img",{src:"https://s.yezgea02.com/1604040746310/aaaddd.png"},null,-1),s={class:"user-desc"},b={class:"name"},j={class:"user-list"},l=Object(c["j"])("span",null,"我的订单",-1),d=Object(c["j"])("span",null,"账号管理",-1),O=Object(c["j"])("span",null,"地址管理",-1),f=Object(c["j"])("span",null,"关于我们",-1);Object(c["A"])();var v=a((function(e,t,n,v,p,g){var m=Object(c["H"])("s-header"),k=Object(c["H"])("van-skeleton"),h=Object(c["H"])("van-icon"),w=Object(c["H"])("nav-bar");return Object(c["z"])(),Object(c["f"])("div",r,[Object(c["j"])(m,{name:"我的"}),Object(c["j"])(k,{title:"",avatar:!0,row:3,loading:e.loading},{default:a((function(){return[Object(c["j"])("div",o,[Object(c["j"])("div",u,[i,Object(c["j"])("div",s,[Object(c["j"])("span",null,"昵称："+Object(c["L"])(e.user.nickName),1),Object(c["j"])("span",null,"登录名："+Object(c["L"])(e.user.loginName),1),Object(c["j"])("span",b,"个性签名："+Object(c["L"])(e.user.introduceSign),1)])])])]})),_:1},8,["loading"]),Object(c["j"])("ul",j,[Object(c["j"])("li",{class:"van-hairline--bottom",onClick:t[1]||(t[1]=function(e){return v.goTo("/order")})},[l,Object(c["j"])(h,{name:"arrow"})]),Object(c["j"])("li",{class:"van-hairline--bottom",onClick:t[2]||(t[2]=function(e){return v.goTo("/setting")})},[d,Object(c["j"])(h,{name:"arrow"})]),Object(c["j"])("li",{class:"van-hairline--bottom",onClick:t[3]||(t[3]=function(e){return v.goTo("/address",{from:"mine"})})},[O,Object(c["j"])(h,{name:"arrow"})]),Object(c["j"])("li",{onClick:t[4]||(t[4]=function(e){return v.goTo("/about")})},[f,Object(c["j"])(h,{name:"arrow"})])]),Object(c["j"])(w)])})),p=n("5530"),g=(n("96cf"),n("1da1")),m=n("d000"),k=n("0eaf"),h=n("9a1b"),w=n("6c02"),C={components:{navBar:m["a"],sHeader:k["a"]},setup:function(){var e=Object(w["d"])(),t=Object(c["D"])({user:{},loading:!0});Object(c["w"])(Object(g["a"])(regeneratorRuntime.mark((function e(){var n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(h["b"])();case 2:n=e.sent,c=n.data,t.user=c,t.loading=!1;case 6:case"end":return e.stop()}}),e)}))));var n=function(){e.go(-1)},a=function(t,n){e.push({path:t,query:n||{}})};return Object(p["a"])(Object(p["a"])({},Object(c["M"])(t)),{},{goBack:n,goTo:a})}},y=(n("6180"),n("6b0d")),_=n.n(y);const T=_()(C,[["render",v],["__scopeId","data-v-25810bea"]]);t["default"]=T},6180:function(e,t,n){"use strict";n("fb95")},"89b7":function(e,t,n){},"91a2":function(e,t,n){},"9a1b":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return i}));var c=n("a27e");function a(){return c["a"].get("/user/info")}function r(e){return c["a"].put("/user/info",e)}function o(e){return c["a"].post("/user/login",e)}function u(){return c["a"].post("/user/logout")}function i(e){return c["a"].post("/user/register",e)}},caad:function(e,t,n){"use strict";var c=n("23e7"),a=n("4d64").includes,r=n("44d2"),o=n("ae40"),u=o("indexOf",{ACCESSORS:!0,1:0});c({target:"Array",proto:!0,forced:!u},{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),r("includes")},d000:function(e,t,n){"use strict";var c=n("7a23"),a=Object(c["T"])("data-v-ce4468ce");Object(c["C"])("data-v-ce4468ce");var r={class:"nav-bar van-hairline--top"},o={class:"nav-list"},u=Object(c["j"])("i",{class:"nbicon nblvsefenkaicankaoxianban-1"},null,-1),i=Object(c["j"])("span",null,"首页",-1),s=Object(c["j"])("i",{class:"nbicon nbfenlei"},null,-1),b=Object(c["j"])("span",null,"分类",-1),j=Object(c["j"])("span",null,"购物车",-1),l=Object(c["j"])("i",{class:"nbicon nblvsefenkaicankaoxianban-"},null,-1),d=Object(c["j"])("span",null,"我的",-1);Object(c["A"])();var O=a((function(e,t,n,O,f,v){var p=Object(c["H"])("router-link"),g=Object(c["H"])("van-icon");return Object(c["z"])(),Object(c["f"])("div",r,[Object(c["j"])("ul",o,[Object(c["j"])(p,{class:"nav-list-item active",to:"home"},{default:a((function(){return[u,i]})),_:1}),Object(c["j"])(p,{class:"nav-list-item",to:"category"},{default:a((function(){return[s,b]})),_:1}),Object(c["j"])(p,{class:"nav-list-item",to:"cart"},{default:a((function(){return[Object(c["j"])(g,{name:"shopping-cart-o",badge:O.count?O.count:""},null,8,["badge"]),j]})),_:1}),Object(c["j"])(p,{class:"nav-list-item",to:"user"},{default:a((function(){return[l,d]})),_:1})])])})),f=(n("caad"),n("6c02")),v=n("5502"),p=n("495f"),g={setup:function(){var e=Object(f["c"])(),t=Object(v["b"])();Object(c["w"])((function(){var n=Object(p["a"])("token"),c=e.path;n&&!["/home","/category"].includes(c)&&t.dispatch("updateCart")}));var n=Object(c["d"])((function(){return t.state.cartCount}));return{count:n}}},m=(n("0dae"),n("6b0d")),k=n.n(m);const h=k()(g,[["render",O],["__scopeId","data-v-ce4468ce"]]);t["a"]=h},fb95:function(e,t,n){}}]);
//# sourceMappingURL=user.18afee0b.js.map