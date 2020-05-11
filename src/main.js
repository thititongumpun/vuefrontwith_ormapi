import Vue from "vue";
import VueRouter from "vue-router";


import VueAxios from "vue-axios";
import axios from "axios";

import App from "./App.vue";
import NameList from "./components/NameList.vue";
import CreateName from "./components/CreateName.vue";

Vue.use(VueRouter);


Vue.use(VueAxios, axios);

const routes = [
  {
    name: "NameList",
    path: "/name_list",
    component: NameList
  },
  {
    name: "CreateName",
    path: "/create_name",
    component: CreateName
  }
];

const router = new VueRouter({ mode: "history", routes: routes });

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");