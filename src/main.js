import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-default.css";

Vue.use(VueToast, {
  position: "bottom"
});


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
