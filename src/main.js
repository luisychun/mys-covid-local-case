import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VuePapaParse from "vue-papa-parse";
import Chartkick from "vue-chartkick";
import Chart from "chart.js";

Vue.use(VuePapaParse);
Vue.use(Chartkick.use(Chart));
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
