<template>
  <div>
    <p>适用于在多个互斥的选项中选择的场景</p>
    <h3>基础用法</h3>
    <h4>页数较少时完全显示</h4>
    <simple-card>
      <s-pager :total="7" :current.sync="current1"></s-pager>
      <template v-slot:code><pre v-highlightjs><code class="vue">{{code1}}</code></pre></template>
   </simple-card>
   <h4>页数较多时非连续页之间显示分隔符</h4>
    <simple-card>
      <s-pager :total="50" :current.sync="current2"></s-pager>
      <template v-slot:code><pre v-highlightjs><code class="vue">{{code2}}</code></pre></template>
   </simple-card>
   <h4>simple 属性开启简洁样式</h4>
    <simple-card>
      <s-pager :total="50" :current.sync="current3" simple></s-pager>
      <template v-slot:code><pre v-highlightjs><code class="vue">{{code3}}</code></pre></template>
   </simple-card>
  </div>
</template>
<script>
import Pager from "../../../src/pager/pager";
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)

export default {
  name:'simple-pager',
  components:{
      's-pager':Pager
  },
  data () {
    return {
      current1:1,
      current2:2,
      current3:3,
      code1:`
      <s-pager :total="7" :current.sync="current1"></s-pager>
      }`.replace(/^ {8}/gm, "").trim(),
      code2:`
      <s-pager :total="50" :current.sync="current2"></s-pager>
      }`.replace(/^ {8}/gm, "").trim(),
      code3:`
      <s-pager :total="50" :current.sync="current3" simple></s-pager>
      }`.replace(/^ {8}/gm, "").trim(),
    }
  },
  methods: {
    
  }
}
</script>
<style lang="scss" scoped>
 
</style>
