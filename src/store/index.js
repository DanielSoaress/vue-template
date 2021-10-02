import Vue from 'vue';
import Vuex from 'vuex';
import global from './modules/global';
import * as modules from './modules';

Vue.use(Vuex);

const Store = new Vuex.Store({
  //plugins: [createPersistedState({ paths: ['global'] })],
  modules: {
    global,
    ...modules
  }
});

export default Store;
