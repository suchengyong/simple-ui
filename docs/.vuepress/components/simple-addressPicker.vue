<template>
  <div>
    <p>城市地区滚动选择，用于移动H5选择地址</p>
    <h3>基础用法</h3>
    <simple-card>
         <s-addressPicker v-model="location" :show.sync="showPicker"></s-addressPicker>
        <s-button type='primary' @click="open">按钮</s-button>
        <template v-slot:code><pre v-highlightjs><code class="vue">{{code}}</code></pre></template>
    </simple-card>
    
  </div>
</template>
<script>
import addressPicker from "../../../src/addressPicker/addressPicker";
import Button from '../../../src/button/button'
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)
export default {
  name:'simple-addressPicker',
  data() {
    return {
        code:`<s-address :_visible="visible" @confirm="confirm" @close="close"></s-address>
            <s-button type='primary' @click="open">按钮</s-button>
            export default {
            data () {
                return {
                showPicker:false,
                location:'',
                }
            },
             watch:{
                location(newVal,oldVal){
                    console.log(newVal)
                }
            }, 
            methods: {
                open(){
                this.visible = true;
                },
            }`.replace(/^ {8}/gm, "").trim(),
            showPicker:false,
            location:'',
    };
  },
  components: {
    's-button':Button,
    "s-addressPicker": addressPicker
  },
   watch:{
        location(newVal,oldVal){
            console.log(newVal)
        }
    }, 
  methods: {
    open(){
      this.showPicker = true;
    }
  }
};
</script>