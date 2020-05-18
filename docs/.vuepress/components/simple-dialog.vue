<template>
   <div >
    <p>用于提供水平和垂直方向展开收起动画功能的小组件。</p>
    <h3>基础用法</h3>
    <simple-card>
      <div><s-button type="primary" @click="startSpread">Dialog弹空</s-button></div>
      <template v-slot:code><pre v-highlightjs><code class="vue">{{code}}</code></pre></template>
    </simple-card>
  </div>
</template>
<script>
import Vue from 'vue'
import Dialog from '../../../src/dialog/index'
import VueHighlightJS from 'vue-highlightjs'
import Button from '../../../src/button/button'
Vue.use(VueHighlightJS)
Vue.prototype.$dialog = Dialog
export default {
    name:'simple-dialog',
    components:{
        's-button':Button
    },
    data(){
        return {
            code: `import Vue from 'vue'
            import Dialog from './dialog/index'
            Vue.prototype.$dialog = Dialog
            this.$dialog({
              title: '流程结束',
              text: '您未开启下节点处理，确定后审批流程结束，不需要下节点处理人操作！',
              // type: 'input',
              // placeholder: '请输入内容文本...',
              // length: 10,
              showCancelBtn: true,
              confirmText: '确认',
              confirm () {
              },
              cancel () {
                
              }
            })`.replace(/^ {8}/gm, '').trim(),
        }
    },
    methods: {
       startSpread(){
         this.$dialog({
          title: '流程结束',
          text: '您未开启下节点处理，确定后审批流程结束，不需要下节点处理人操作！',
          // type: 'input',
          // placeholder: '请输入内容文本...',
          // length: 10,
          showCancelBtn: true,
          confirmText: '确认',
          confirm () {
          },
          cancel () {
            
          }
        })
       }
    },
}
</script>
<style lang="scss" scoped>

</style>

