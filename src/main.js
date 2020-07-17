/* eslint-disable */
import Vue from 'vue'
import Demo from './demo.vue'
import VueHighlightJS from 'vue-highlightjs'
import progress from './progress/index'
import Globalcomponent from './index.js'

Vue.use(progress)
Vue.use(VueHighlightJS)
Vue.use(Globalcomponent)

Vue.config.productionTip = false

new Vue({
  render: h => h(Demo)
}).$mount('#app')
