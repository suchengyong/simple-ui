<template>
  <div class="dialog-mask" v-if="showDialog">
    <div class="dialog-box">
      <div class="header" v-html="title" v-if="title"></div>
      <article class="body" :class="{'tl':textLeft}" v-html="text" v-if="text"></article>
      <article class="edit-block" v-if="type === 'input'" :class="text ? '' : 'pt-15'">
        <textarea class="edit-el" :rows="row" :placeholder="placeholder" v-model.trim="content"></textarea>
      </article>
      <div class="list" v-if="list.length>0">
        <div class="listItem" v-for="(item,index) in list" :key="index">{{item.cardInfoName}}</div>
      </div>
      <footer class="footer">
        <div class="my-cancel-btn fl" v-show="showCancelBtn" v-text="cancelText" @click="cancelClick">
        </div>
        <div class="confirm-btn fl" :style="{width: showCancelBtn ? '50%' : '100%'}" v-text="confirmText" @click="confirmClick" :class="showCancelBtn ? 'dib' : ''">
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 's-dialog',
  data () {
    return {
      showDialog: true,
      type: '',
      title: '',
      /* 文本 */
      text: '',
      /* 输入内容 */
      content: '',
      /* 默认输入最长20个字 */
      // maxLength: 20,
      showCancelBtn: true,
      confirmText: '确定',
      cancelText: '取消',
      placeholder: '请输入...（最多20个字）',
      confirm: null,
      cancel: null,
      row: 3,
      list: [],
      textLeft: false
    }
  },
  methods: {
    cancelClick () {
      this.showDialog = false;
      this.cancel(this.content)
    },
    confirmClick () {
      this.showDialog = false
      this.confirm(this.content)
    }
  },
  mounted () {
    this.maxLength = this.length ? this.length : 20
  }
}
/*  使用例子 只有type = input 时是有输入框的
    this.$dialog({
        title: '流程结束',
        text: '您未开启下节点处理，确定后审批流程结束，不需要下节点处理人操作！',
        // type: 'input',
        // placeholder: '请输入内容文本...',
        // length: 10,
        showCancelBtn: false,
        confirmText: '确认',
        confirm () {
        }
      })
  */
</script>

<style lang="scss" scoped>
.dialog-mask {
  position: fixed;
  z-index: 9999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
}

.dialog-box {
  position: fixed;
  background-color: #ffffff;
  width: 315px;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 16px;
  border-radius: 0.10px;
  padding-top: 30px;
  .header {
    color: #000000;
    // padding: 0.15rem;
    // padding-bottom: 0.05rem;
    font-size: 22px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 16px;
  }
  .body {
    padding: 0 15px 15px;
    color: #555555;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
  }
  .pt-15 {
    padding-top: 15px !important;
  }
  .edit-block {
    padding: 0 15px 25px 15px;
    .edit-el {
      border-radius: 5px;
      padding:8px 10px;
      width:93%;
      color: #555555;
      font-size: 16px;
    }
    .edit-el::placeholder {
      color: #888888;
      font-size: 16px;
      line-height: 20px;
    }
  }
  .footer {
    border-top: 1px solid #eeeeee;
    white-space: nowrap;
    font-size: 0;
    text-align: center;
    display: flex;
    .my-cancel-btn {
      padding: 11px 0;
      font-size: 16px;
      line-height: 28px;
      width: 50%;
      color: #313437;
      border-radius: 0 0 0 8px;
      border-right: 1px solid #eeeeee;
    }
    .confirm-btn {
      padding: 11px 0;
      font-size: 16px;
      line-height: 28px;
      width: 50%;
      color: #222222;
      border-radius: 0 0 8px 8px;
      color: #418bfb;
    }
  }
}
textarea {
  background-color: #f5f5f5;
}
.list{
  padding:0 15px;
  margin-bottom: 10px;
  max-height: 150px;
  overflow: auto;
  .listItem{
    text-align: center;
    padding-bottom: 10px;
    color: #555555;
  }
}
.tl{
  text-align: left !important;
}
</style>
