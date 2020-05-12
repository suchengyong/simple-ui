<template>
   <div >
    <p>用于展示页面加载、异步请求的加载进度条。全局只会创建一个Loading，因此在任何位置调用的方法都会控制同一个组件。主要在路由切换和AJAX请求中使用，由于这两者都不能拿到精确的进度，Loading会模拟进度</p>
    <h3>基础用法</h3>
    <simple-card>
        <s-button type="primary" @click="start">开始</s-button>
        <s-button type="success" @click="finish">完成</s-button>
        <s-button type="danger" @click="error">错误</s-button>
      <template v-slot:code><pre v-highlightjs><code class="vue">{{code}}</code></pre></template>
    </simple-card>
  </div>
</template>
<script>
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
import btn from '../../../src/button/button'
import Progress from "../../../src/progress/index";
Vue.use(VueHighlightJS)
Vue.use(Progress)
export default {
  data(){
    return {
      code: `
       <s-button type="primary" @click="start">开始</s-button>
        <s-button type="success" @click="finish">完成</s-button>
        <s-button type="danger" @click="error">错误</s-button>
        <script>
        import Vue from 'vue'
        import Progress from "progress";
        Vue.use(Progress)
        export default {
            methods: {
                start() {
                  this.$progress.start();
                },
                finish() {
                  this.$progress.finish();
                },
                error() {
                  this.$progress.error();
                }
            }
        }
      `.replace(/^ {8}/gm, '').trim()
    }
  },
    components:{
        's-button':btn
    },
    methods: {
        start() {
            this.$progress.start();
        },
        finish() {
            this.$progress.finish();
        },
        error() {
            this.$progress.error();
        }
    }
}
</script>
<style lang="scss" scoped>

</style>

