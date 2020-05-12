<template>
  <div>
    <p>导航组件，可无限嵌套子菜单，支持横向和纵向。导航菜单一般配合路由实现页面跳转功能，在selected属性上使用.sync修饰符可实现数据绑定，也可以监听selected-change事件，菜单被点击时将抛出对应条目的name值。</p>
    <h3>基础用法</h3>
    <h4>水平菜单</h4>
    <simple-card>
        <s-menu :selected-index.sync="selected1">
            <s-sub-menu index="1" name="home">
                <template slot="title">首页</template>
                <s-menu-item name="homeculture" index="1-1">首页文化</s-menu-item>
                <s-menu-item name="homedevelopers" index="1-2">首页团队</s-menu-item>
                <s-menu-item name="chomeontacts" index="1-3">首页方式</s-menu-item>
            </s-sub-menu>
            <s-sub-menu index="2" name="about">
                <template slot="title">关于</template>
                <s-menu-item name="culture" index="2-1">企业文化</s-menu-item>
                <s-menu-item name="developers" index="2-2">开发团队</s-menu-item>
                <s-menu-item name="contacts" index="2-3">联系方式</s-menu-item>
            </s-sub-menu>
            <s-sub-menu name="hire" index="3">
                <template slot="title">招聘</template>
                <s-menu-item name="font" index="3-1">前端开发</s-menu-item>
                <s-menu-item name="back" index="3-2">后端维护</s-menu-item>
                <s-menu-item name="sale" index="3-2">销售团队</s-menu-item>
            </s-sub-menu>
        </s-menu>
      <template v-slot:code><pre v-highlightjs><code class="vue">{{code}}</code></pre></template>
   </simple-card>
  <h4>垂直导航菜单，多级嵌套</h4>
   <simple-card>
        <s-menu :width="200" :selected-index.sync="selected1" vertical>
            <s-sub-menu index="1" name="home">
                <template slot="title">首页</template>
                <s-menu-item name="homeculture" index="1-1">首页文化</s-menu-item>
                <s-menu-item name="homedevelopers" index="1-2">首页团队</s-menu-item>
                <s-menu-item name="chomeontacts" index="1-3">首页方式</s-menu-item>
            </s-sub-menu>
            <s-sub-menu index="2" name="about">
                <template slot="title">关于</template>
                <s-menu-item name="culture" index="2-1">企业文化</s-menu-item>
                <s-menu-item name="developers" index="2-2">开发团队</s-menu-item>
                <s-menu-item name="contacts" index="2-3">联系方式</s-menu-item>
            </s-sub-menu>
            <s-sub-menu name="hire" index="3">
                <template slot="title">招聘</template>
                <s-menu-item name="font" index="3-1">前端开发</s-menu-item>
                <s-menu-item name="back" index="3-2">后端维护</s-menu-item>
                <s-menu-item name="sale" index="3-2">销售团队</s-menu-item>
            </s-sub-menu>
        </s-menu>
      <template v-slot:code><pre v-highlightjs><code class="vue">{{code1}}</code></pre></template>
   </simple-card>
  </div>
</template>
<script>
import Menu from "../../../src/menu/menu";
import MenuItem from "../../../src/menu/menu-item";
import SubMenu from "../../../src/menu/sub-menu";
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)

export default {
  name:'simple-menu',
  components:{
      's-menu':Menu,
      's-sub-menu':SubMenu,
      's-menu-item':MenuItem
  },
  data () {
    return {
      selected1:'',
      code:`
        <s-menu :selected-index.sync="selected1">
            <s-sub-menu index="1" name="home">
                <template slot="title">首页</template>
                <s-menu-item name="homeculture" index="1-1">首页文化</s-menu-item>
                <s-menu-item name="homedevelopers" index="1-2">首页团队</s-menu-item>
                <s-menu-item name="chomeontacts" index="1-3">首页方式</s-menu-item>
            </s-sub-menu>
            <s-sub-menu index="2" name="about">
                <template slot="title">关于</template>
                <s-menu-item name="culture" index="2-1">企业文化</s-menu-item>
                <s-menu-item name="developers" index="2-2">开发团队</s-menu-item>
                <s-menu-item name="contacts" index="2-3">联系方式</s-menu-item>
            </s-sub-menu>
            <s-sub-menu name="hire" index="3">
                <template slot="title">招聘</template>
                <s-menu-item name="font" index="3-1">前端开发</s-menu-item>
                <s-menu-item name="back" index="3-2">后端维护</s-menu-item>
                <s-menu-item name="sale" index="3-2">销售团队</s-menu-item>
            </s-sub-menu>
        </s-menu>
      `.replace(/^ {8}/gm, "").trim(),
      code1:`
        <s-menu :width="200" :selected-index.sync="selected1" vertical>
            <s-sub-menu index="1" name="home">
                <template slot="title">首页</template>
                <s-menu-item name="homeculture" index="1-1">首页文化</s-menu-item>
                <s-menu-item name="homedevelopers" index="1-2">首页团队</s-menu-item>
                <s-menu-item name="chomeontacts" index="1-3">首页方式</s-menu-item>
            </s-sub-menu>
            <s-sub-menu index="2" name="about">
                <template slot="title">关于</template>
                <s-menu-item name="culture" index="2-1">企业文化</s-menu-item>
                <s-menu-item name="developers" index="2-2">开发团队</s-menu-item>
                <s-menu-item name="contacts" index="2-3">联系方式</s-menu-item>
            </s-sub-menu>
            <s-sub-menu name="hire" index="3">
                <template slot="title">招聘</template>
                <s-menu-item name="font" index="3-1">前端开发</s-menu-item>
                <s-menu-item name="back" index="3-2">后端维护</s-menu-item>
                <s-menu-item name="sale" index="3-2">销售团队</s-menu-item>
            </s-sub-menu>
        </s-menu>
      `.replace(/^ {8}/gm, "").trim(),
    }
  },
  methods: {
   
  }
}
</script>
<style lang="scss" scoped>
 
</style>
