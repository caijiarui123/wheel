webpackJsonp([9],{NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("IvJb");document.documentElement.style.fontSize=window.innerWidth/750*100+"px";var a={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var o=e("C7Lr")({name:"App"},a,!1,function(t){e("Z/mL")},null,null).exports,r=e("zO6J");i.a.use(r.a);var s=new r.a({mode:"hash",routes:[{path:"/index",name:"index",component:function(){return Promise.all([e.e(0),e.e(1)]).then(e.bind(null,"42Hy"))}},{path:"/detail",component:function(){return Promise.all([e.e(0),e.e(5)]).then(e.bind(null,"wHgX"))}},{path:"/img",component:function(){return Promise.all([e.e(0),e.e(4)]).then(e.bind(null,"b0ui"))}},{path:"/color",component:function(){return e.e(7).then(e.bind(null,"3rbB"))}},{path:"/type",component:function(){return e.e(6).then(e.bind(null,"kMqs"))}},{path:"/quotation",component:function(){return Promise.all([e.e(0),e.e(3)]).then(e.bind(null,"5gQX"))}},{path:"/login",component:function(){return e.e(2).then(e.bind(null,"xJsL"))}},{path:"*",redirect:"/index"}]});s.beforeEach(function(t,n,e){window.localStorage.getItem("login")||"/login"==t.path||e("/login"),e()}),s.afterEach(function(t,n){});var c=s,u=e("9rMa"),l=e("3cXf"),d=e.n(l),f=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};/\?/.test(t)?t+="&_="+ +new Date:t+="?_="+ +new Date;var i={method:n};return"POST"==n&&(i.body=d()(e)),fetch(t,i).then(function(t){return t.json()})},m=/localhost:8080/gi.test(window.location.host)?"http://baojia-test.chelun.com":"https://baojia.chelun.com",h=function(t){var n="";return t&&(n+="provinceid="+t),f(m+"/v1-city-alllist.html?"+n)},p={namespaced:!0,state:{letters:[],brand:{},flag:!1,letter:"",brandId:"",makeList:"",isShowList:!1},mutations:{listDate:function(t,n){var e=[],i={};n.forEach(function(t){var n=t.Spelling[0];-1!=e.indexOf(n)?i[n].push(t):(e.push(n),i[n]=[t])}),t.letters=e,t.brand=i},changeMakeList:function(t,n){t.brandId=n.id,t.makeList=n.list,t.isShowList=!0},showLetter:function(t,n){t.flag=n},changeLetter:function(t,n){t.letter=n},hideMakeList:function(t){t.isShowList=!1}},actions:{listDate:function(t,n){var e=t.commit;f(m+"/v2-car-getMasterBrandList.html").then(function(t){1==t.code?e("listDate",t.data):alert(t.msg)})},getMakeList:function(t,n){var e,i=t.commit,a=t.state;n!=a.brandId&&(e=n,f(m+"/v2-car-getMakeListByMasterBrandId.html?MasterID="+e)).then(function(t){i("changeMakeList",{id:n,list:t.data})})}}},g=e("IHPB"),v=e.n(g),w=e("zsLt"),_=e.n(w),y={namespaced:!0,state:{info:{},currentYear:"全部"},getters:{datas:function(t){if(t.info)return t.info},years:function(t){if(!t.info.list)return[];var n=t.info.list.map(function(t){return t.market_attribute.year}),e=new _.a(n);return["全部"].concat(v()(e))},list:function(t){if(!t.info.list)return[];function n(t){var n=[],e={};return t.forEach(function(t){var i=t.exhaust_str+"/"+t.max_power_str+" "+t.inhale_type;-1==n.indexOf(i)?(n.push(i),e[i]=[t]):e[i].push(t)}),e}return"全部"==t.currentYear?n(t.info.list):n(t.info.list.filter(function(n){return n.market_attribute.year==t.currentYear}))}},mutations:{changeYear:function(t,n){t.currentYear=n},updataInfo:function(t,n){t.info=n,n.list.sort(function(t,n){return n.market_attribute.year!=t.market_attribute.year?n.market_attribute.year-t.market_attribute.year:n.exhaust_str>t.exhaust_str?-1:n.exhaust_str<t.exhaust_str?1:n.max_power_str>t.max_power_str?-1:n.max_power_str<t.max_power_str?1:n.market_attribute.dealer_price_min>t.market_attribute.dealer_price_min?-1:1})}},actions:{getDetailList:function(t,n){var e,i=t.commit;(e=n,f(m+"/v2-car-getInfoAndListById.html?SerialID="+e)).then(function(t){i("updataInfo",t.data)})}}},b={namespaced:!0,state:{isLogin:!1},mutations:{logins:function(t,n){"cc"==n.username&&"123"==n.password&&(t.isLogin=!t.isLogin),console.log(t.isLogin)}}},L={namespaced:!0,state:{isShowCity:!1,currentCity:"",city:{}},mutations:{showCity:function(t,n){t.isShowCity=n},updateCity:function(t,n){t.city=n,t.isShowCity=!1}}},I={namespaced:!0,state:{locationCity:"",provinces:[],cities:[],isShowCity:!1},mutations:{updateProvinces:function(t,n){t.provinces=n.data},updateCities:function(t,n){t.cities=n.data,t.isShowCity=!0},hideCity:function(t,n){t.isShowCity=!1}},actions:{getCityList:function(t,n){var e=t.commit;n?h(n).then(function(t){console.log(t),e("updateCities",t)}):h().then(function(t){e("updateProvinces",t)})}}},x={namespaced:!0,state:{list:[],page:1},mutations:{updateList:function(t,n){t.list=t.list.concat(n),t.page++}},actions:{getImgDetailList:function(t){var n=t.commit,e=t.state;console.log("state...",e),function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=arguments[3],a=arguments[4],o="SerialID="+t+"&ImageID="+n+"&Page="+e+"&PageSize="+(arguments.length>5&&void 0!==arguments[5]?arguments[5]:30);return i&&(o+="&ColorID="+i),a&&(o+="&CarID="+a),f(m+"/v2-car-getCategoryImageList.html?"+o)}(2593,6,e.page).then(function(t){console.log(t),n("updateList",t.data.List)})}}};i.a.use(u.b);var C=new u.a({modules:{app:p,detail:y,login:b,quotation:L,city:I,img:x}});window.store=C;var k=C;i.a.config.productionTip=!1,new i.a({el:"#app",router:c,store:k,components:{App:o},template:"<App/>"})},"Z/mL":function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.724ba56a09f982e0cb6c.js.map