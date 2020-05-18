/* eslint-disable */
import Vue from 'vue'
import Dialog from './dialog/index'
import Demo from './demo.vue'
import VueHighlightJS from 'vue-highlightjs'
import progress from './progress/index'
Vue.use(progress)
// Tell Vue.js to use vue-highlightjs
Vue.use(VueHighlightJS)

Vue.prototype.$dialog = Dialog

Vue.config.productionTip = false
const context = require.context('./', true, /^((?!demo\.vue).)+\.vue$/)
try {
  context.keys().forEach(path => {
    let res = context(path)
    Vue.component(res.default.name, res.default)
  })
} catch (e) {
  console.log(e)
}

new Vue({
  render: h => h(Demo)
}).$mount('#app')
