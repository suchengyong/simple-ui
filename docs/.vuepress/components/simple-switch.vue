<template>
  <div>
    <p>在两种状态间切换时用到的开关选择器。使用v-model绑定一个布尔值，或者监听on-change事件，滑块在左侧时值为false，滑块在右侧时值为true。</p>
    <h3>基础用法</h3>
    <simple-card>
        <div>
            <s-switch v-model="type1" @on-change="switchOnChange"></s-switch>
        </div>
       <div>
           <s-switch disabled></s-switch>
       </div>
        <div>
        <s-switch
            v-model="type2" 
            false-color="black" 
            true-color="blue">
        </s-switch>
        </div>
        <div>
        <s-switch 
            false-text="选择左" 
            true-text="选择右" 
            v-model="type3">
        </s-switch>
        </div>
      <template v-slot:code><pre v-highlightjs><code class="vue">{{code}}</code></pre></template>
   </simple-card>
  </div>
</template>
<script>
import Switch from "../../../src/switch/switch";
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)

export default {
  name:'simple-switch',
  components:{
      's-switch':Switch
  },
  data () {
    return {
      type1:false,
      type2:true,
      type3:false,
      code:`
        <s-switch v-model="type1"></s-switch>
        <s-switch disabled></s-switch>
        <s-switch
            v-model="type2" 
            false-color="black" 
            true-color="blue">
        </s-switch>
        <s-switch 
            false-text="选择左" 
            true-text="选择右" 
            v-model="type3">
        </s-switch>`.replace(/^ {8}/gm, "").trim(),
    }
  },
  methods: {
    switchOnChange (e) {
      console.log(e)
    }
  }
}
</script>
<style lang="scss" scoped>
 
</style>
