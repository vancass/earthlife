import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vue-awesome/icons/arrow-right';
import 'vue-awesome/icons/arrow-left';
import 'vue-awesome/icons/download';
import 'vue-awesome/icons/exclamation-circle';
import 'vue-awesome/icons/envelope';
import 'vue-awesome/icons/print';
import 'vue-awesome/icons/check-circle';
import 'vue-awesome/icons/brands/facebook-f';
import Icon from 'vue-awesome/components/Icon';

Vue.config.productionTip = false;

Vue.component('v-icon', Icon);

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    window.addEventListener('beforeunload', e => {
      if (router.currentRoute.name !== 'home') {
        e.preventDefault();
        e.returnValue = '';
      }
    });
  }
}).$mount('#app');
