/* eslint-disable */
import Vue from 'vue';
import AutoScroll from './index.vue';

AutoScroll.install = function(Vue) {
  Vue.component(AutoScroll.name, AutoScroll);
};

export default AutoScroll;