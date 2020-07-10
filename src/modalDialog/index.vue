<template>
  <transition name="confirm-fade">
    <div v-if="isShowConfirm" class="my-confirm">
      <div class="confirm-content-wrap" @click.stop>
        <p class="my-confirm-img" v-if="typeImg">
            <img v-if="typeImg == 'fail'" :src="fail">
            <img v-if="typeImg == 'success'" :src="success">
            <img v-if="typeImg == 'warning'" :src="warning">
        </p>
        <h3 class="my-confirm-title" v-if="title" :style="{color:titleColor}">{{ title }}</h3>
        <p class="my-confirm-content" v-if="content" :style="{color:contentColor}">{{ content }}</p>
        <p class="my-confirm-content" v-if="htmlcontent" :style="{color:contentColor}" v-html="htmlcontent"></p>
        <div class="my-operation">
          <div v-if="isCancelBtn" class="my-cancel-btn" @click="clickFun('clickCancel')">
            <p class="my-btn-text my-border-right" :style="{color:cancelTextColor}">{{ cancelText }}</p>
          </div>
          <div :style="{width:isCancelBtn?'auto':'50%',padding:isCancelBtn?'.8rem 1.5rem':'1rem 1.5rem'}" class="confirm-btn" @click="clickFun('clickConfirm')">
            <p class="my-btn-text" :style="{color:confirmTextColor}">{{ confirmText }}</p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
/* eslint-disable */
export default {
    name:'s-modalDialog',
    data () {
        return {
            title: '', // 提示框标题
            content: '', // 提示框的内容
            htmlcontent:'',
            success:'',
            warning:'',
            fail:'',
            typeImg:'',
            titleColor:"#333",//标题字体颜色
            contentColor:'#666',//内容字体颜色
            isShowConfirm: false, // 用于控制整个窗口的显示/隐藏
            isCancelBtn:true,
            cancelBtnClick:null,
            cancelText: '取消', // 取消按钮的文字
            cancelTextColor:"#807C88",//取消按钮的文字颜色
            confirmText: '确认', // 确认按钮的文字
            comifirmBtnClick:null,
            confirmTextColor:"#944DF6",//确认按钮的文字颜色
            outerData: null, // 用于记录外部传进来的数据，也可以给外部监听userBehavior，事件的函数提供判断到底是哪个事件触发的
        }
    },
    methods: {
        show (config) {
            if (Object.prototype.toString.call(config) === '[object Object]') {
                this.comifirmBtnClick = config.comifirmBtnClick || null;
                this.isCancelBtn = config.isCancelBtn || false;
                this.cancelBtnClick = config.cancelBtnClick || null
                this.content = config.content || ''
                this.htmlcontent = config.htmlcontent || ''
                this.typeImg = config.typeImg || ''
                this.titleColor = config.titleColor || "#333"
                this.title = config.title || ''
                this.contentColor = config.contentColor || '#666'
                this.cancelText = config.cancelText || '取消'
                this.cancelTextColor = config.cancelTextColor || "#944DF6"
                this.confirmText = config.confirmText || '确认'
                this.confirmTextColor = config.confirmTextColor || "#fff"
                this.outerData = config.data || null;
            }
            this.isShowConfirm = true
        },
        hidden () {
            this.title = ''
            this.content = ''
            this.htmlcontent = ''
            this.typeImg = ''
            this.isShowConfirm = false
            this.isCancelBtn = true
            this.titleColor = "#333"
            this.contentColor = '#666'
            this.cancelText = '取消'
            this.cancelTextColor = "#8F94A7"
            this.cancelBtnClick = null;
            this.confirmText = '确认'
            this.comifirmBtnClick = null;
            this.confirmTextColor = '#497BEC'
            this.outerData = null;
        },
        clickFun (type) {
            if(type == 'clickConfirm'){
                if (typeof this.comifirmBtnClick === "function") {
                    this.comifirmBtnClick.call(this,this);
                }
            }else{
                if (typeof this.cancelBtnClick === "function") {
                    this.cancelBtnClick.call(this,this);
                }
            }
        }
    }
}
</script>

<style scoped>
html,body{
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.my-confirm {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.65);
    z-index: 99998;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.confirm-fade-enter-active {
    animation: opacity 0.3s;
}
.confirm-fade-enter-active .confirm-content-wrap {
    animation: scale 0.3s;
}
.confirm-fade-leave-active {
    animation: outOpacity 0.2s;
}
.confirm-content-wrap {
    position: absolute;
    top: 20%;
    left: 0;
    right: 0;
    width: 80%;
    margin: 0 auto;
    background-color: #fff;
    border-radius: .3rem;
    z-index: 999;
    user-select: none;
}
.my-confirm-title {
    padding-top: 1rem;
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
    color: #333;
}
.my-confirm-img{
    text-align: center;
    width: 100%;
    padding-top: 1rem;
    box-sizing: border-box;
}
.my-confirm-img img{
    width: 6rem;
    height: 6rem;
}
.my-confirm-content {
    padding: 1rem;
    text-align: center;
    font-size:.8rem;
    color: #666;
    line-height: 1.5;
}
.my-operation {
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 1rem 1.5rem 2rem;
}
.my-operation .my-cancel-btn, .confirm-btn {
    border-radius: 2rem;
    padding: .8rem 1.5rem;
}
.my-operation .my-cancel-btn {
    background: #FFFFFF;
    border: 1px solid #944DF6;
}
.my-operation .confirm-btn {
   background-image: linear-gradient(to right , #e976e2, #b572fa);
   background-size: cover;
}
.my-operation .my-btn-text {
    text-align: center;
    font-size:.9rem;
}

@keyframes opacity {
0% {
    opacity: 0;
}
100% {
    opacity: 1;
}
}
@keyframes scale {
0% {
    transform: scale(0);
}
60% {
    transform: scale(1.1);
}
100% {
    transform: scale(1);
}
}
@keyframes outOpacity {
0% {
    opacity: 1;
}
100% {
    opacity: 0;
}
}
</style>