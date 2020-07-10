<template>
  <div style="margin:60px">
   <s-actionsheet  :_visible="visible" @close="closeActionSheet" _cancelTxt="取消"  :_menuItems="menuItems" ></s-actionsheet>
   <div @click="open">动作组件</div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data () {
    return {
      visible:false,
      menuItems:[
        {name:'语文'},{name:'数学'}
      ]
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
    open(){
      this.visible = true;
    },
    closeActionSheet(){
       this.visible = false;
    }
  }
}
</script>
<style lang="scss">

</style>
