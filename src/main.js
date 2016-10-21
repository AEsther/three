/*import Vue from 'vue'
import App from './App'*/
var Vue=require("vue");
var App=require("./App");
var VueRouter=require("vue-router");
var RouterConfig=require("./config");
var VueResource=require("vue-resource");
// var one=require("./one");
// var two=require("./two");
Vue.use(VueRouter);
Vue.use(VueResource);
var router=new VueRouter();
RouterConfig(router);
//console.log(router);
router.start(App,"#apps");

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
