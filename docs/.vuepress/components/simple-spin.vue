<template>
   <div >
    <p>用于提供水平和垂直方向展开收起动画功能的小组件。</p>
    <h3>基础用法</h3>
    <simple-card>
      <s-spin :spinning="spinning" tips="加载中..." :width="50" :tips-color="tipsColor"></s-spin>
      <div><s-button type="primary" @click="startSpread">取消/加载</s-button></div>
      <template v-slot:code><pre v-highlightjs><code class="vue">{{code}}</code></pre></template>
    </simple-card>
  </div>
</template>
<script>
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
import Spin from '../../../src/spin/spin'
import Button from '../../../src/button/button'
Vue.use(VueHighlightJS)

export default {
    name:'simple-spin',
    components:{
        's-spin':Spin,
        's-button':Button
    },
    data(){
        return {
            spinning:true,
            tipsColor:'#333',
            code: `
            <s-spin :spinning="spinning" tips="加载中..." :width="100"></s-spin>
            `.replace(/^ {8}/gm, '').trim(),
        }
    },
    methods: {
        startSpread(){
            this.spinning = !this.spinning;
        }
    },
}
</script>
<style lang="scss" scoped>

</style>

