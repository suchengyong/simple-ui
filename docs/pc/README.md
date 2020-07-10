---
title: '概述'
---

## 介绍

个人工作中总结的一套组件库，专门用于学习使用，不要用于生产项目，个人有时间就会新增几个组件

## 安装

#### 使用 npm 安装
推荐使用 npm 的方式进行开发，享受 node 生态圈和 webpack 工具链带来的便利。通过 npm 安装的模块包，我们可以轻松的使用 import 或者 require 的方式引用

```
npm install suchengyong-simple-ui

yarn add suchengyong-simple-ui

```

## 快速上手

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

##  颜色搭配

<ClientOnly>
  <simple-color/> 
</ClientOnly>
