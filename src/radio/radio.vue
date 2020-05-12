<template>
    <div class="x-radio" :class="{vertical}">
        <s-option v-for="(option,index) in options" :key="option.value" :option="option" :index="index" :current.sync="current"></s-option>
    </div>
</template>
<script>
import Option from './option.vue'
export default {
  name: 's-radio',
  components: { 's-option': Option },
  props: {
    options: { type: Array, required: true },
    vertical: { type: Boolean, default: false },
    defaultIndex: Number
  },
  data () {
    return {
      current: -1
    }
  },
  watch: {
    current (val) {
      if (val > -1) {
        this.$emit('value-change', this.options[val].value)
      }
    }
  },
  created () {
    if (this.defaultIndex || this.defaultIndex === 0) {
      this.current = this.defaultIndex
    } else {
      this.current = ''
    }
  }
}
</script>
<style scoped lang="scss">
  .x-radio {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &.vertical {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
