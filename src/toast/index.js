/* eslint-disable */
import Vue from 'vue';
import Toast from './toast.js';

const install = function(Vue) {
  Vue.prototype.$toast = Toast;
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.0',
  install
}