<template>
  <div style="margin:60px">
    <!-- <s-button @click="x">show modal</s-button> -->
    <!-- <s-cascader :options="options" :selected.sync="selected"></s-cascader>
     -->
   <s-radio :default-index="index" :options="options" @on-change="radioOnChange($event)"></s-radio>
  </div>
</template>
<script>
// import modal from './plugins/modal'
// import toast from './plugins/toast'
// import Vue from 'vue'
// Vue.use(modal)
// Vue.use(toast)

export default {
  data () {
    return {
      index: 0,
      options: [
        { label: '苹果', value: 'Apple' },
        { label: '梨', value: 'Pear' },
        { label: '橘子', value: 'Orange' }
      ]
    }
  },
  computed: {

  },
  mounted () {
  },
  methods: {
    radioOnChange (e) {
      console.log(e)
    }
  }
}
</script>
<style lang="scss">
 @import './static/scss/global.scss';

</style>
