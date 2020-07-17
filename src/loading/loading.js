/* eslint-disable */
import Vue from 'vue';
import ToastLoading from './loading.vue';

let LoadingConstructor = Vue.extend(ToastLoading);
let instance; 
instance = new LoadingConstructor({
    el: document.createElement('div')
});

const instanceLoading = (LoadingType, LoadingText) => {
  let $body = document.body;
  $body.appendChild(instance.$el);

  instance.type = LoadingType;
  instance.text = LoadingText;
  Vue.nextTick(() => {
    instance.visible = true;
  });

  return instance;
};

LoadingConstructor.prototype.delayClose = (number) => {
    let _delay = typeof number === 'number' ? number : 2000
    setTimeout(() => {
        instance.visible = false
    }, _delay)
}

LoadingConstructor.prototype.close = () => {
    Vue.nextTick(() => {
        instance.visible = false;
    });    
}

export default instanceLoading;