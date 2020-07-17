/* eslint-disable */
import Vue from 'vue';
import Dialog from './dialog.js';

const install = function(Vue) {
  Vue.prototype.$dialog = Dialog;
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.0',
  install
}