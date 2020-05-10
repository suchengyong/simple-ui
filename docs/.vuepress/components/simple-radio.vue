<template>
  <div>
    <p>适用于在多个互斥的选项中选择的场景</p>
    <h3>基础用法</h3>
    <simple-card>
      <s-radio :default-index="index" :options="options" @on-change="radioOnChange($event)"></s-radio>
      <template v-slot:code><pre v-highlightjs><code class="vue">{{code}}</code></pre></template>
   </simple-card>
  </div>
</template>
<script>
import Radio from "../../../src/radio/radio";
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)

export default {
  name:'simple-radio',
  components:{
      's-radio':Radio
  },
  data () {
    return {
      code:`
      <s-radio 
        :default-index="index" 
        :options="options" 
        @on-change="radioOnChange($event)">
      </s-radio>
       export default {
          data(){
            return {
                index: 0,
                options: [
                    { label: '苹果', value: 'Apple' },
                    { label: '梨', value: 'Pear' },
                    { label: '橘子', value: 'Orange' }
                ]
            }
          },
          methods: {
            radioOnChange (e) {
               console.log(e)
            }
          }
      }`.replace(/^ {8}/gm, "").trim(),
      index: 0,
      options: [
        { label: '苹果', value: 'Apple' },
        { label: '梨', value: 'Pear' },
        { label: '橘子', value: 'Orange' }
      ]
    }
  },
  methods: {
    radioOnChange (e) {
      console.log(e)
    }
  }
}
</script>
<style lang="scss" scoped>
 
</style>
