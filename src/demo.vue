<template>
  <div style="margin:60px">
    <s-button @click="start">开始</s-button>
    <s-button @click="finish">完成</s-button>
    <s-button @click="error">错误</s-button>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data () {
    return {
    }
  },
  computed: {
  },
  mounted () {
    this.$dialog({
      title: '流程结束',
      text: '您未开启下节点处理，确定后审批流程结束，不需要下节点处理人操作！',
      // type: 'input',
      // placeholder: '请输入内容文本...',
      // length: 10,
      showCancelBtn: true,
      confirmText: '确认',
      confirm () {
      },
      cancel () {
        
      }
    })
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
<style lang="scss">
.backg{
  background: red;
  color: #fff;
  font-size: 20px;
  margin-top: 20px;
}
</style>
