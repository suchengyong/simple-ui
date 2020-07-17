/* eslint-disable */
import Vue from 'vue';
import Loading from './loading.js';

const install = function(Vue) {
  Vue.prototype.$loading = Loading;
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.0',
  install
}