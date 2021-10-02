import Vue from 'vue'
import App from './App.vue'
import env from '../env';
import routes from './routes/routes';
import store from './store';
import VueRouter from 'vue-router';

// importações global
import { components, directives } from './global';

// iniciando o global
Vue.use(components);
Vue.use(directives);

// iniciando plugins
Vue.use(VueRouter);

Vue.prototype.$env = env;

// configurações do route
const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'active',
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});



Vue.config.productionTip = false

new Vue({
  beforeCreate: function() {
    Vue.prototype.$routes = router;
  },
  render: h => h(App),
  store,
  router
}).$mount('#app')
