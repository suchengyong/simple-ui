<template>
  <div>
    <p>底部滚动选择项目</p>
    <h3>基础用法</h3>
    <simple-card>
        <s-picker :_visible="visible" :_default-value-data="defaultValueData" :_list-data="listData" @confirm="confirm" @close="close"></s-picker>
        <s-button type='primary' @click="open">按钮</s-button>
        <template v-slot:code><pre v-highlightjs><code class="vue">{{code}}</code></pre></template>
    </simple-card>
    
  </div>
</template>
<script>
import Picker from "../../../src/picker/src/main";
import Button from '../../../src/button/button'
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)
export default {
  name:'simple-picker',
  data() {
    return {
        code:` <s-picker :_visible="visible" :_default-value-data="defaultValueData" :_list-data="listData" @confirm="confirm" @close="close"></s-picker>
            <s-button type='primary' @click="open">按钮</s-button>
            export default {
            data () {
                return {
                visible:false,
                defaultValueData:[],
                listData: [[{
                    value: '教师',
                    id: 'SI02'
                }, {
                    value: '学生',
                    id: 'SI03'
                }, {
                    value: '工人',
                    id: 'SI04'
                },{
                    value: '农民',
                    id: 'SI05'
                }, {
                    value: '商人',
                    id: 'SI06'
                }]],
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
        visible:false,
        defaultValueData:[],
        listData: [[{
            value: '教师',
            id: 'SI02'
        }, {
            value: '学生',
            id: 'SI03'
        }, {
            value: '工人',
            id: 'SI04'
        },{
            value: '农民',
            id: 'SI05'
        }, {
            value: '商人',
            id: 'SI06'
        }]],
    };
  },
  components: {
    's-button':Button,
    "s-picker": Picker
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