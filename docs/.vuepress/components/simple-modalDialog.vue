<template>
  <div>
    <p>弹出框，有确认和取消按钮</p>
    <h3>基础用法</h3>
    <simple-card>
        <s-button type='primary' @click="open">按钮</s-button>
        <template v-slot:code><pre v-highlightjs><code class="vue">{{code}}</code></pre></template>
    </simple-card>
    
  </div>
</template>
<script>
import modalDialog from "../../../src/modalDialog/index";
import Button from '../../../src/button/button'
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)
Vue.use(modalDialog)
export default {
  name:'simple-modalDialog',
  data() {
    return {
        code:`<s-button type='primary' @click="open">按钮</s-button>
            methods: {
                open(){
                    this.$dialog.show({
                        title:'温馨提示',
                        content:'我们会在1-2个工作日内为您开通交易功能。',
                        titleColor:'#4B3B45',
                        isCancelBtn:false,
                        confirmText:'确认',
                        comifirmBtnClick(that) {
                            that.hidden()
                        },
                    })
                },
            }`.replace(/^ {8}/gm, "").trim(),
    };
  },
  components: {
    's-button':Button
  },
  methods: {
    open(){
    this.$dialog.show({
        title:'温馨提示',
        content:'我们会在1-2个工作日内为您开通交易功能。',
        titleColor:'#4B3B45',
        isCancelBtn:false,
        confirmText:'确认',
        comifirmBtnClick(that) {
            that.hidden()
        },
    })
    },
  }
};
</script>