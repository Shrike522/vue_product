// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui';
import Vuex from 'vuex';
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

//引入element-ui
Vue.use(Element);

//引入vuex
Vue.use(Vuex);

//设置全局store
const store = new Vuex.Store({
  state:{},
  getters:{},
  mutations:{},
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App),
})
