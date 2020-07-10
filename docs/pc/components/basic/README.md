---
title: 'Basic 基础'
sidebarDepth: 2
---
## Icon 图标
<ClientOnly>
  <simple-icon/>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| name | 图标名称 | string |- | - |
| color | 图标颜色, 支持常见颜色和十六进制颜色 | string |- | - |

</ClientOnly>



## Button 按钮
<ClientOnly>
  <simple-button/>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| type | 按钮类型 | string |primary, info, success, warning, danger | - |
| disabled | 按钮是否禁用 | boolean |- | false |
| icon | 按钮上图标名称 | string |- | - |
| icon-position | 图标在按钮的左右位置 | string|left, right  | - |
| loading | 显示加载中图标 | boolean |- | false |

</ClientOnly>


## Layout 布局
<ClientOnly>
  <simple-layout/>
<font size=5>Row Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| gutter |栅格间隔 | number,单位px |- |- |
| align | flex 布局下的水平排列方式 | string |center, left, right | left |

<font size=5>Col Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| span | 栅格占据的列数 | number |- |24 |
| offset | 栅格左侧的间隔格数 | number |- | 0 |
| xs | 小于576px 响应式栅格数或者栅格属性对象 | object (例如： {span: 4, offset: 4})	 |- | - |
| sm |介于576px和768px的响应式栅格数或者栅格属性对象 | object (例如： {span: 4, offset: 4})|-  | - |
| md |介于768x和992px的响应式栅格数或者栅格属性对象 | object (例如： {span: 4, offset: 4})|-  | - |
| lg |介于992px和1200px的响应式栅格数或者栅格属性对象 | object (例如： {span: 4, offset: 4})|-  | - |
| xl |大于1200px的响应式栅格数或者栅格属性对象 | object (例如： {span: 4, offset: 4})|-  | - |
</ClientOnly>

## Container 容器
<ClientOnly>
  <simple-container/>
<font size=5>Header Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| height | header高度，单位px | Number/String |- | 60 |

<font size=5>Sider Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| width | sider宽度，单位px | Number/String |- | 300 |

<font size=5>Footer Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| height | footer高度，单位px | Number/String |- | 60 |
</ClientOnly>

## Waterfall 瀑布流
<ClientOnly>
  <simple-waterfall/>
<style>
table th:first-of-type {
    width: 20%;
}
table th:nth-of-type(2) {
    width: 60%;
}
table th:nth-of-type(3) {
    width: 20%;
}
</style>
<font size=5>Header Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| width | 瀑布流布局中每个子元素的宽度，单位为 px | Number | -- | 200 |
| source |  组件 v-for 列表渲染的数据，必填，渲染时数据将以作用域插槽的形式传回父组件 | Array | -- | -- |
| target |  组件监听滚动的目标，可以是 CSS 选择器，也可以是 HTML 元素，如果不传，组件将默认监听 window | String , HTMLElement | -- | -- |

<font size=5>Events</font>
| 事件名称| 说明 | 回调参数 | 
| :------: | :------: | :------: |
| scroll-bottom | 被监听的元素滚动到底部时触发，只触发一次，当 source 数据改变时，会重新添加监听（滚动到底部时会再次触发） |  -- |
</ClientOnly>