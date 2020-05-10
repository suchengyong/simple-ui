<template>
  <div>
    <p>输入或选择时间的组件。使用v-model绑定。</p>
    <h3>基础用法</h3>
    <simple-card>
      <s-timepicker v-model="time" default-value="12:00:00"></s-timepicker>
      <p>当前所选时间为：{{time}}</p>
      <template v-slot:code><pre v-highlightjs><code class="vue">{{code}}</code></pre></template>
   </simple-card>
  </div>
</template>
<script>
import Timepicker from "../../../src/timepicker/timepicker";
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)

export default {
  name:'simple-timepicker',
  components:{
      's-timepicker':Timepicker
  },
  data () {
    return {
      time:'',
      code:`
       <s-timepicker v-model="time" default-value="12:00:00"></s-timepicker>
     `.replace(/^ {8}/gm, "").trim(),
    }
  },
  methods: {
    radioOnChange (e) {
      console.log(e)
    }
  }
}
</script>
<style lang="scss" scoped>
 
</style>
