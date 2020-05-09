---
title: '快速上手'
---
# 快速上手

```vue
<template>
  <div id="app">
    <s-button type="primary">点击报名</s-button>
  </div>
</template>

<script>
import {Button} from 'suchengyong-simple-ui'
import 'suchengyong-simple-ui/dist/simple.css'


export default {
  name: 'app',
  components: {
    's-button':Button
  }
}
</script>

```
<!-- <ClientOnly>
  <simple-img/>
</ClientOnly> -->