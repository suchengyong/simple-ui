<template>
  <div>
    <p>用于图片裁剪</p>
    <h3>基础用法</h3>
    <simple-card>
    <div class="row" style="margin-top:40px;">
        <div class="col-md-6" ref="imgCutterBox" style="height:458px;overflow:hidden;">
            <div v-if="params.isModal" style="width:100%;height:458px;background:#dedede;box-sizing:border-box;border:1px solid #dedede;">
            <div style="width:50%;margin:180px auto auto auto;">
                <div class="btn btn-primary btn-block" @click="pluginExe('handleOpen')">{{params.label}}</div>
            </div>
            </div>
            <s-imageCrop
            v-if="refresh"
            ref="imgCutterModal"
            :crossOrigin="params.crossOrigin"
            :label="params.label"
            :rate="params.rate"
            :isModal="params.isModal"
            :showChooseBtn="params.showChooseBtn"
            :lockScroll="params.lockScroll"
            :boxWidth="params.boxWidth"
            :boxHeight="params.boxHeight"
            :cutWidth="params.cutWidth"
            :cutHeight="params.cutHeight"
            :sizeChange="params.sizeChange"
            :moveAble="params.moveAble"
            :tool="params.tool"
            :originalGraph="params.originalGraph"
            :DoNotDisplayCopyright="true"
            toolBgc="params.toolBgc"
            v-on:error="catchError"
            v-on:cutDown="cutDown">
            <span slot="open"></span>
            <span slot="choose" v-if="params.isModal==false"></span>
            <span slot="cancel" v-if="params.isModal==false"></span>
            <span slot="confirm" v-if="params.isModal==false"></span>
            </s-imageCrop>
        </div>
        <div class="col-md-3">
            <div class="imgCutDownBox" :style="'height:458px;'">

            <div class="imgCutDownBoxContainer">
                <img :src="imgSrc" v-if="!!imgSrc" alt="">
                <span v-else class="imgCutDownTips">Cut it out and show it here</span>
            </div>

            <div class="text-center">
                <a :class="'btn btn-light'+ (imgSrc?'':' disabled')" :disabled="!imgSrc" :href="imgSrc" download="image.jpg" role="button">Download</a>
            </div>
            </div>
        </div>
        <div class="col-md-3">
            <form>
            <div class="form-group">
                <label for="cutImgSrc"> Remote pictures src：</label>
                <input type="text" name="cutImgSrc" class="form-control" @input="catchInput($event)"
                        :value="cutImgSrc" placeholder="Remote pictures src">
            </div>
            <div class="form-group">
                <label for="cutImgWidth"> Remote pictures width：</label>
                <input type="number" name="cutImgWidth" class="form-control" @input="catchInput($event)"
                        :value="cutImgWidth" placeholder="Remote pictures width">

            </div>
            <div class="form-group">
                <label for="cutImgHeight"> Remote pictures height：</label>
                <input type="number" name="cutImgHeight" class="form-control" @input="catchInput($event)"
                        :value="cutImgHeight" placeholder="Remote pictures height">

            </div>
            <div class="form-group">
                <div class="btn btn-primary btn-block" v-if="params.isModal===false" @click="pluginExe('chooseImg')">{{params.label}}</div>
                <div class="btn btn-primary btn-block" v-if="params.isModal===true" @click="pluginExe('handleOpen')">{{params.label}}</div>
            </div>
            <div class="form-group">
                <button type="button" :disabled="params.isModal===true" class="btn btn-success btn-block" @click="pluginExe('cropPicture')">Confirm</button>
            </div>
            <div class="form-group">
                <button type="button" class="btn btn-light btn-block" :disabled="params.isModal===true" @click="pluginExe('clearAll')">Reset</button>
            </div>
            </form>
        </div>
    </div>
    <template v-slot:code><pre v-highlightjs><code class="vue">{{code}}</code></pre></template>
   </simple-card>
  </div>
</template>
<script>

import Vue from 'vue'
import imageCrop from "../../../src/imageCrop/imageCrop";
import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)

export default {
  name:'simple-imageCrop',
  components:{
      's-imageCrop':imageCrop
  },
  data () {
    return {
        cutImgSrc: 'http://placekitten.com/300/300',
        cutImgWidth: 300,
        cutImgHeight: 300,
        imgSrc: null,
        refresh: true,
        params: {
            label: 'Crop local pictures',
            crossOrigin: true,
            crossOriginHeader: '*',
            rate: '',
            toolBgc: 'none',
            isModal: false,
            showChooseBtn: true,
            lockScroll: true,
            boxWidth: 500,
            boxHeight: 458,
            cutWidth: 250,
            cutHeight: 250,
            sizeChange: true,
            moveAble: true,
            tool: true,
            originalGraph: false,
        },
        code:`
        <s-imageCrop
          v-if="refresh"
          ref="imgCutterModal"
          :crossOrigin="params.crossOrigin"
          :label="params.label"
          :rate="params.rate"
          :isModal="params.isModal"
          :showChooseBtn="params.showChooseBtn"
          :lockScroll="params.lockScroll"
          :boxWidth="params.boxWidth"
          :boxHeight="params.boxHeight"
          :cutWidth="params.cutWidth"
          :cutHeight="params.cutHeight"
          :sizeChange="params.sizeChange"
          :moveAble="params.moveAble"
          :tool="params.tool"
          :originalGraph="params.originalGraph"
          :DoNotDisplayCopyright="true"
          toolBgc="params.toolBgc"
          v-on:error="catchError"
          v-on:cutDown="cutDown">
          <span slot="open"></span>
          <span slot="choose" v-if="params.isModal==false"></span>
          <span slot="cancel" v-if="params.isModal==false"></span>
          <span slot="confirm" v-if="params.isModal==false"></span>
        </s-imageCrop>
        `.replace(/^ {8}/gm, "").trim(),
        }
  },
  mounted () {
    let $imgCutterBox = this.$refs.imgCutterBox;
    this.params.boxWidth = $imgCutterBox.offsetWidth-30;
  },
  methods: {
      cutDown: function (res) {
        console.log(res);
        this.imgSrc = res.dataURL;
      },
      doRefresh: function () {
        this.refresh = false;
        this.$nextTick(() => {
          this.refresh = true;
        })
      },
      catchInput(e) {
        let val = e.target.value;
        let key = e.target.name;
        this[key] = val;
      },
      catchError(res) {
        console.log(res);
        window.alert(res.msg);
      },
      pluginExe:function(functionName){
        this.$refs.imgCutterModal[functionName]();
      },
  }
}
</script>
<style lang="scss">
.row{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.col-md-6{
  flex: 0 0 50%;
  max-width: 50%;
}
.btn{
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-transform: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: .375rem 0px;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
} 
.btn-primary{
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
} 
.btn-block{
  display: block;
  width: 100%;
}
.btn-light{
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}
.btn-success{
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}
.col-md-3{
  flex: 0 0 23%;
  width: 23%;
  margin-right: 1%;
}
.text-center{
  text-align: center;
}
.form-group{
  margin-bottom: 1rem;
}
.form-group label{
  display: inline-block;
  margin-bottom: .5rem;
}
.form-control{
  display: block;
  width: 100%;
  height: calc(1.5em + .75rem + 2px);
  padding: .375rem 0px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.imgCutDownBox {
  width:100%;
  background:#dedede;
  box-sizing:border-box;
  border:1px solid #dedede;
}
.imgCutDownBoxContainer {
  width:90%;
  height:360px;
  overflow:hidden;
  margin:20px auto;
  border:1px solid #ccc;
  background:#fff;
  text-align:center;
}
.imgCutDownBoxContainer img {
  max-width:100%;
  max-height:100%;
  margin-top:50%;
  transform: translateY(-50%);
}
.imgCutDownTips {
  font-size:0.8em;
  line-height:360px;
  color:#c0c4cc;
}

</style>
