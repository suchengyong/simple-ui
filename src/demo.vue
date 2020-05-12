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
