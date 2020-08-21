import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);
const modulesFiles = require.context('./modules', false, /\.js$/),
  modules = modulesFiles.keys().reduce((module, modulePath) => {
    // console.log(module, modulePath);
    const moduleName = modulePath.replace(/^\.\/(.*)\.w+$/, '$1'),
      value = modulesFiles(modulePath);
    module[moduleName] = value.default;
    console.log(moduleName,value)
    return module;
  }, {}),
  store = new Vuex.Store({
    modules,
    plugins: [createPersistedState({
      storage: window.sessionStorage
    })]
  });
export default store;
