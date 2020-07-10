/* eslint-disable */
import Vue from 'vue';
import ApAddress from './src/main.vue';

ApAddress.install = function(Vue) {
  Vue.component(ApAddress.name, ApAddress);
};

export default ApAddress;