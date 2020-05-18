<template>
  <div>
    <p>用于数字展示动画</p>
    <h3>基础用法</h3>
    <simple-card>
    <div><s-button type="primary" @click="startSpread">数字动画</s-button></div>
    <h1><s-count :startVal='startVal' :endVal='endVal' :duration='3000'></s-count></h1>
    <template v-slot:code><pre v-highlightjs><code class="vue">{{code}}</code></pre></template>
   </simple-card>
  </div>
</template>
<script>

import Vue from 'vue'
import CountTo from "../../../src/countTo/countTo";
import Button from '../../../src/button/button'
import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)

export default {
  name:'simple-count',
  components:{
      's-button':Button,
      's-count':CountTo
  },
  data () {
    return {
        startVal:0,
        endVal:2018,
        code:`
        <s-count :startVal='startVal' :endVal='endVal' :duration='3000'></s-count>
        `.replace(/^ {8}/gm, "").trim(),
        }
  },
  methods: {
      startSpread(){
          this.endVal = 2020;
      }
  }
}
</script>
<style lang="scss" scoped>
 
</style>
