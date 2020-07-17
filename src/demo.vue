<template>
  <div style="margin:60px">
    <s-addressPicker v-model="location" :show.sync="showPicker"></s-addressPicker>
   <s-button type='primary' @click="open">按钮</s-button>
  </div>
</template>
<script>
/* eslint-disable */
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
      this.showPicker = true;
    },
  }
}
</script>
<style lang="scss">

</style>
