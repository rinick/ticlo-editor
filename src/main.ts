import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

let vueMain = new Vue({
  el: '#app',
  render: h => h(App)
});
