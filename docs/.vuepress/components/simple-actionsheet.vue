<template>
  <div>
    <p>动作组件底部弹出框</p>
    <h3>基础用法</h3>
    <simple-card>
    <s-actionsheet  :_visible="visible" @close="closeActionSheet" _cancelTxt="取消"  :_menuItems="menuItems" ></s-actionsheet>
    <div><s-button type="primary" @click="open">弹出框</s-button></div>
    <template v-slot:code><pre v-highlightjs><code class="vue">{{code}}</code></pre></template>
   </simple-card>
  </div>
</template>
<script>

import Vue from 'vue'
import Button from '../../../src/button/button'
import Actionsheet from '../../../src/actionsheet/index'
import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)

export default {
  name:'simple-count',
  components:{
      's-button':Button,
      's-actionsheet':Actionsheet
  },
  data () {
    return {
       visible:false,
        menuItems:[
            {name:'语文'},{name:'数学'}
        ],
        code:`
         <s-actionsheet  :_visible="visible" @close="closeActionSheet" _cancelTxt="取消"  :_menuItems="menuItems" ></s-actionsheet>
        `.replace(/^ {8}/gm, "").trim(),
        }
  },
  methods: {
    open(){
        this.visible = true;
    },
    closeActionSheet(){
        this.visible = false;
    }
  }
}
</script>
<style lang="scss" scoped>
 
</style>
