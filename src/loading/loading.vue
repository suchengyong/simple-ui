<template>
  <section>
    <div v-if="setToastType(type, 'loading')" class="ap-toast-box" v-show="visible">
      <div class="ap-toast-content">
        <div class="ap-toast-load"><span></span><span></span><span></span><span></span><span></span><span></span></div>
        <div class="ap-toast-text">{{ setToastText(text) }}</div>
      </div>
    </div>

    <div v-if="setToastType(type, 'success')" class="ap-toast-box" v-show="visible">
      <div class="ap-toast-content">
        <div class="ap-toast-success"><s class="iconfont icon-ayh-toast-success"></s></div>
        <div class="ap-toast-text">{{ setToastText(text) }}</div>
      </div>
    </div>

    <div v-if="setToastType(type, 'warning')" class="ap-toast-box" v-show="visible">
      <div class="ap-toast-content">
        <div class="ap-toast-warning"><s class="iconfont icon-ayh-toast-warning"></s></div>
        <div class="ap-toast-text">{{ setToastText(text) }}</div>
      </div>
    </div>

    <div v-if="setToastType(type, 'error')" class="ap-toast-box" v-show="visible">
      <div class="ap-toast-content">
        <div class="ap-toast-error"><s class="iconfont icon-ayh-toast-error"></s></div>
        <div class="ap-toast-text">{{ setToastText(text) }}</div>
      </div>
    </div>

    <div v-if="setToastType(type, 'message')" class="ap-toast-msg" v-show="visible">
      <div class="ap-toast-content">
        <div class="ap-toast-text">{{ setToastText(text) }}</div>
      </div>
    </div>

  </section>
</template>

<script type="text/babel">
/* eslint-disable */
const TOAST_MAP = {
    'loading': 'loading',
    'success': 'success',
    'warning': 'warning',
    'error': 'error',
    'message': 'message'
};
  export default {
    name: 'apToast',
    data() {
      return {
        type: '',
        text: '',
        visible: false
      };
    },

    methods: {
        setToastType(type, value) {
            return TOAST_MAP[type] === value
        },
        setToastText(value) {
            if (TOAST_MAP[this.type] === 'loading') {
                return value ? this.splitText(value, 6) : '加载中';
            } else if (TOAST_MAP[this.type] === 'success') {
                return value ? this.splitText(value, 6) : '成功';
            } else if (TOAST_MAP[this.type] === 'error') {
                return value ? this.splitText(value, 6) : '失败';
            } else if (TOAST_MAP[this.type] === 'warning') {
                return value ? this.splitText(value, 6) : '警告';
            } else if (TOAST_MAP[this.type] === 'message') {
                return value ? this.splitText(value, 30) : '...';
            } else {
                return ''
            }
        },
        splitText(value, length) {
            return value.length > length ? `${value.substring(0, length-1)}..` : value
        }
    }
  };
</script>

<style scoped>
.ap-toast-box {
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 80000;
}
.ap-toast-content {
    width:100px;
    height:100px;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: rgba(0,0,0,.8);
    border-radius: 10px;
    z-index: 8999910;
}
.ap-toast-load, .ap-toast-success, .ap-toast-error {
    width: 30px;
    height: 30px;
    position: relative;
    margin: 20px auto 0;
}
.ap-toast-text {
    font-size: 16px;
    display: block;
    width: 100%;
    text-align: center;
    color: #e4e4e4;
    margin-top: 10px;
    font-weight: normal;
    letter-spacing: 1px
}
/** 加载动画的静态样式 **/
.ap-toast-load {width:32px;height:32px;position: relative; margin: 20px auto 0}
.ap-toast-load span{position:absolute;left:15px;top:0;width:2px;height:32px;display: block}
.ap-toast-load span:before{content:'';display:block; height:25%; width: 100%; position: absolute; left: 0; top: 0; background:#fcfcfc;border-radius:5px; opacity: 0;}
.ap-toast-load span:after{content:'';display:block; height:25%; width: 100%; position: absolute; left: 0; bottom: 0; background:#fcfcfc;border-radius:5px; opacity: 0;}
.ap-toast-load span:nth-child(2){-webkit-transform:rotate(30deg);}
.ap-toast-load span:nth-child(3){-webkit-transform:rotate(60deg);}
.ap-toast-load span:nth-child(4){-webkit-transform:rotate(90deg);}
.ap-toast-load span:nth-child(5){-webkit-transform:rotate(120deg);}
.ap-toast-load span:nth-child(6){-webkit-transform:rotate(150deg);}


/** 加载动画 **/
@-webkit-keyframes toastLoad{
    0%{opacity:1;}
    100%{opacity:0;}
}
.ap-toast-load span:nth-child(1):before{-webkit-animation:toastLoad 1.2s linear 0s infinite;}
.ap-toast-load span:nth-child(2):before{-webkit-animation:toastLoad 1.2s linear 0.1s infinite;}
.ap-toast-load span:nth-child(3):before{-webkit-animation:toastLoad 1.2s linear 0.2s infinite;}
.ap-toast-load span:nth-child(4):before{-webkit-animation:toastLoad 1.2s linear 0.3s infinite;}
.ap-toast-load span:nth-child(5):before{-webkit-animation:toastLoad 1.2s linear 0.4s infinite;}
.ap-toast-load span:nth-child(6):before{-webkit-animation:toastLoad 1.2s linear 0.5s infinite;}
.ap-toast-load span:nth-child(1):after{-webkit-animation:toastLoad 1.2s linear 0.6s infinite;}
.ap-toast-load span:nth-child(2):after{-webkit-animation:toastLoad 1.2s linear 0.7s infinite;}
.ap-toast-load span:nth-child(3):after{-webkit-animation:toastLoad 1.2s linear 0.8s infinite;}
.ap-toast-load span:nth-child(4):after{-webkit-animation:toastLoad 1.2s linear 0.9s infinite;}
.ap-toast-load span:nth-child(5):after{-webkit-animation:toastLoad 1.2s linear 1s infinite;}
.ap-toast-load span:nth-child(6):after{-webkit-animation:toastLoad 1.2s linear 1.1s infinite;}

.ap-toast-success > .iconfont, .ap-toast-error > .iconfont {
    position: absolute;
    top: -2px;
    left: -3px;
    color: #e4e4e4;
    font-size: 28px;
}

.ap-toast-msg {
    width: 100vw;
    height: 1px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
}
@-webkit-keyframes toastMsg{
    0% {
        opacity:0;
        transform: translate3d(0, 80vh, 0)
    }
    100% {
        opacity:1;
        transform: translate3d(0, 60vh, 0)
    }
}
.ap-toast-msg > .ap-toast-content {
    width: 70vw;
    height: 36px;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    margin: 0 auto;
    background: rgba(0,0,0,.76);
    border-radius: 36px;
    opacity: 1;
    transform: translate3d(0, 60vh, 0);
    animation:toastMsg .2s linear;
}
.ap-toast-msg > .ap-toast-content > .ap-toast-text {
    margin-top: 0;
    line-height: 36px;
    color: #fff;
}
</style>
