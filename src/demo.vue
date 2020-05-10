<template>
  <div style="margin:60px">
      <s-timepicker v-model="time" :default-value="defaultValue"></s-timepicker>
      <p>当前所选时间为：{{time}}</p>
  </div>
</template>
<script>

export default {
  data () {
    return {
      time: '',
      defaultValue: '12:00:00'
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="scss">
 @import './static/scss/global.scss';

</style>
