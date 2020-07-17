<template>
  <div>
    <p>城市地区滚动选择，用于移动H5选择地址</p>
    <h3>基础用法</h3>
    <simple-card>
        <s-address :_visible="visible" @confirm="confirm" @close="close"></s-address>
        <s-button type='primary' @click="open">按钮</s-button>
        <template v-slot:code><pre v-highlightjs><code class="vue">{{code}}</code></pre></template>
    </simple-card>
    
  </div>
</template>
<script>
import address from "../../../src/address/src/main";
import Button from '../../../src/button/button'
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)
export default {
  name:'simple-address',
  data() {
    return {
        code:`<s-address :_visible="visible" @confirm="confirm" @close="close"></s-address>
            <s-button type='primary' @click="open">按钮</s-button>
            export default {
            data () {
                return {
                visible:false
                }
            },
            methods: {
                open(){
                this.visible = true;
                },
                close(){
                this.visible = false;
                },
                confirm(data){
                console.log(data)
                this.visible = false;
                }
            }`.replace(/^ {8}/gm, "").trim(),
        visible:false
    };
  },
  components: {
    's-button':Button,
    "s-address": address
  },
  methods: {
    open(){
      this.visible = true;
    },
    close(){
       this.visible = false;
    },
    confirm(data){
       console.log(data)
       this.visible = false;
    }
  }
};
</script>