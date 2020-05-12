<template>
   <div >
    <p>用于提供水平和垂直方向展开收起动画功能的小组件。</p>
    <h3>基础用法</h3>
    <simple-card>
        <div><s-button class="mg" type="primary" @click="startSpread('visible1')">展开/收起</s-button></div>
        <s-spread :visible="visible1">
            <div class="green com mg">垂直方向展开收起</div>
        </s-spread>
        <div> <s-button class="mg" type="success" @click="startSpread('visible2')">展开/收起</s-button></div>
        <s-spread :visible="visible2" horizontal>
            <div class="red com">水平方向展开收起</div>
        </s-spread>
      <template v-slot:code><pre v-highlightjs><code class="vue">{{code}}</code></pre></template>
    </simple-card>
  </div>
</template>
<script>
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
import Spread from '../../../src/timepicker/spread'
import Button from '../../../src/button/button'
Vue.use(VueHighlightJS)

export default {
    name:'simple-spread',
    components:{
        's-spread':Spread,
        's-button':Button
    },
    data(){
        return {
            visible1:true,
            visible2:true,
            code: `
            纵向动画
            <s-spread :visible="visible1"></s-spread>
            横向动画
            <s-spread :visible="visible2" horizontal></s-spread>
            `.replace(/^ {8}/gm, '').trim(),
        }
    },
    methods:{
        startSpread:function(prams){
        prams=='visible1'? this.visible1 = !this.visible1 : this.visible2 = !this.visible2
       }
    }
}
</script>
<style lang="scss" scoped>
.green{
    background: green;
}
.red{
   background: red; 
}
.com {
    width: 400px;
    height: 200px;
    text-align: center;
    line-height: 200px;
    color: #fff;
    font-size: 16px;
}
.mg{
    margin-bottom: 20px;
}
</style>

