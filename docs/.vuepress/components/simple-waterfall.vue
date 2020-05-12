<template>
  <div>
    <p>瀑布流组件，快速实现瀑布流布局。</p>
    <p>通过作用域插槽，瀑布流组件可将数据传回父组件，父组件使用slot-scope可以在插槽中获取到传回的数据。</p>
    <h3>基础用法</h3>
    <simple-card>
     <s-waterfall width='120' :source= 'source' @scroll-bottom='scrollBottom'>
      <div slot-scope="slotProps" class="backg">
        <div>插槽:{{slotProps.prop.title}}</div>
        <div>宽度 {{ slotProps.prop.size }}</div>
      </div>
    </s-waterfall>
    <template v-slot:code><pre v-highlightjs><code class="vue">{{code}}</code></pre></template>
   </simple-card>
  </div>
</template>
<script>
import Waterfall from "../../../src/waterfall/waterfall";
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)

export default {
  name:'simple-waterfall',
  components:{
      's-waterfall':Waterfall
  },
  data () {
    return {
     source:[{
       title:'文后回复发文后回复发挥好发挥废话话费废话话费哈字挥好发挥废话话费废话话费哈字',
       size:120,
     },{
       title:'文后回复发挥好发挥废话话费废话话费哈字',
       size:220,
     },{
       title:'文字',
       size:140,
     },{
       title:'文后回复发挥好发挥废话话费废话话费哈字',
       size:160,
     },{
       title:'文字',
       size:180,
     },{
       title:'文字',
       size:320,
     },{
       title:'文后回复发挥好发挥废话话费废话话费哈字',
       size:420,
     },{
       title:'文字',
       size:150,
     },{
       title:'文后回复发挥好发挥废话话费废话话费哈字',
       size:120,
     },{
       title:'文字',
       size:160,
     },{
       title:'文后回复发挥好发挥废话话费废话话费哈字文后回复发挥好发挥废话话费废话话费哈字',
       size:120,
     },{
       title:'文字',
       size:320,
     },{
       title:'文后回复发挥好发挥废话话费废话话费哈字文后回复发挥好发挥废话话费废话话费哈字',
       size:120,
     },{
       title:'文字',
       size:420,
     }],
      code:`
       <x-waterfall 
        :width="150" 
        :source="source" 
        @scroll-bottom="scrollBottom">
        <div slot-scope="slotProps">
            <div>slot</div>
            <div>宽度 {{ slotProps.prop.size }}</div>
        </div>
        </x-waterfall>
     `.replace(/^ {8}/gm, "").trim(),
    }
  },
  methods: {
    scrollBottom (e) {
      console.log(e)
    }
  }
}
</script>
<style lang="scss" scoped>
 .backg{
  background: #80d2db;
  color: #fff;
  font-size: 20px;
  margin-top: 20px;
}
</style>
