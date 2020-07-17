<template>
  <div>
    <p>loading加载动画</p>
    <h3>基础用法</h3>
    <simple-card>
        <s-button type='primary' @click="open">按钮</s-button>
        <template v-slot:code><pre v-highlightjs><code class="vue">{{code}}</code></pre></template>
    </simple-card>
    
  </div>
</template>
<script>
import loading from "../../../src/loading/index";
import Button from '../../../src/button/button'
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)
Vue.use(loading)
export default {
  name:'simple-loading',
  data() {
    return {
        code:`<s-button type='primary' @click="open">按钮</s-button>
            methods: {
                open(){
                    this.$loading('loading', '加载中...')
                },
            }`.replace(/^ {8}/gm, "").trim(),
    };
  },
  components: {
    's-button':Button
  },
  methods: {
    open(){
        this.$loading('loading', '加载中...')
    },
  }
};
</script>