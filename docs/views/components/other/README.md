---
title: 'Other 其他'
sidebarDepth: 2
---
## Sticky 粘滞组件
<ClientOnly>
  <simple-sticky/>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| offset-top| 发生粘滞条件距离浏览器视窗垂直距离, 单位px | number |- | 0 |

</ClientOnly>

## Collapse 折叠面板
<ClientOnly>
  <simple-collapse/>
<font size=5>Collapse Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| v-model| 当前激活的面板(如果是手风琴模式，绑定值类型需要为string，否则为array)|string/array |- | - |
| accordion| 是否手风琴模式|boolean|- | false |

<font size=5>CollapseItem Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| name|唯一标志符 | string |- | -|
| title|面板标题 | string |- | - |
</ClientOnly>

## Slider 轮播
<ClientOnly>
  <simple-slide/>

<font size=5>Slide Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| v-model/value| 绑定值|string|- | - |
| autoPlay| 是否自动播放|boolean|- | true |
|duration|是否自动播放,单位：ms|number|-|5000ms|

<font size=5>SlideItem Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| name|唯一标志符 | string |- | -|
</ClientOnly>

## Spread 动画
<ClientOnly>
  <simple-spread/>

<font size=5>Spread Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| visible| 控制内容的展开和收起，可动态绑定，必填。组件内部使用 v-show 控制内容的显示 |Boolean|-- | -- |
| horizontal | 横向展开和收起，默认为纵向 |boolean|-- | false |
| duration |动画持续时间，单位为 ms|String,number|--|300ms|

</ClientOnly>

## Spin 加载中
<ClientOnly>
  <simple-spin/>

<font size=5>Spin Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| spinning | 是否显示加载效果，默认不显示 | Boolean |-- | false |
| delay | 延迟显示加载效果出现的时间，单位为 ms，在加载效果出现前修改 spinning 为 false，则不出现加载效果（防止闪烁）| Number |-- | -- |
| width | 加载动画的直径大小，单位为 px | Number |-- | 80|
| tips | 加载状态的提示文字，将出现在加载动画的正下方 | String |-- | -- |
| tips-color | 加载状态的提示文字颜色 ｜ String | -- | #36b1bf |
</ClientOnly>
