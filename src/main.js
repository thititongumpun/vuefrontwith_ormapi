import Vue from 'vue';
import VueRouter from 'vue-router';

import VueAxios from "vue-axios";
import axios from "axios";

import App from './App.vue';
import nameList from './components/nameList.vue';
import createName from './components/createName.vue';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);


const routes = [{
  name: 'nameList',
  path: '/nameList',
  component: nameList
}, {
  name: 'createName',
  path: '/createName',
  component: createName
}];

const router = new VueRouter({mode: 'history', routes: routes });

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app');