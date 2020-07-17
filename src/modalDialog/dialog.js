/* eslint-disable */
import Vue from 'vue';
import Dialog from './index.vue';

let DialogConstructor = Vue.extend(Dialog);
let instance;
instance = new DialogConstructor({
    el: document.createElement('div')
});
let $body = document.body;
$body.appendChild(instance.$el);

export default instance;

