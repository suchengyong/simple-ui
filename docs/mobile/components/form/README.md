---
title: 'Form 表单'
sidebarDepth: 2
---
## Input 输入框
<ClientOnly>
  <simple-input/>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| icon | 图标名称 | string |- | - |
| value/v-model|绑定值 | string |- | - |
| disabled|原生属性，是否只读 | boolean |- | false |
| readonly|原生属性，是否只读 | boolean |- | false |
| error|错误提示 | string |- | - |
| placeholder|输入框占位文本 | string |- | - |
</ClientOnly>

## Form 表单
<ClientOnly>
  <simple-form/>
<font size=5>Form Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| model| 表单数据对象 | object |- | - |
| rules|表单验证规则, 支持字段长度/字段正则/必要字段/自定义规则校验 | object |- | - |

<font size=5>FormItem Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| label |标签文本 | string |- | - |
| name |表单域 model 字段 | string |- | - |
</ClientOnly>

## datepicker 日期选择器
<ClientOnly>
  <simple-datepicker/>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| v-model/value| 绑定值 | Date |- | - |
| beginDay|一周起始从周几开始 | number|0,1 | 1 |


<font size=5>Events</font>
| 事件名称| 说明 | 回调参数 | 
| :------ | ------ | ------ |
| openPanel| 打开日期面板触发 | 组件实例 |
| closePane| 关闭日期面板触发 | 组件实例|
</ClientOnly>


## timepicker 时间选择器
<ClientOnly>
  <simple-timepicker/>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| default-value| 默认选中时间，必须为"00:00:00"格式的字符串 | String |- | - |

</ClientOnly>

## Cascader 级联选择器
<ClientOnly>
  <simple-cascader/>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| value / v-model| 选中项绑定值 | array |- | - |
| options|可选项数据源，键名可通过 props 属性配置 | array| - | - |
</ClientOnly>

## Radio 单选框
<ClientOnly>
  <simple-radio />
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| vertical | 垂直排列的 radio | Boolean | -- | false |
| options | radio 的选项数组| Array | -- | -- |
| default-index	| 默认选中选项的 index 值	| Number |	--	| -- |


<font size=5>Events</font>
| 事件名称| 说明 | 回调参数 | 
| :------ | ------ | ------ |
| on-change | 选中项改变时触发 | 选中项的 value 值 |
</ClientOnly>


## Switch 开关
<ClientOnly>
  <simple-switch />
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| s-width | switch 开关的宽度 | String | -- | 40px |
| disabled | 禁用状态| Boolean | -- | false |
| false-color / true-color	| switch 开关不同状态对应的背景颜色	| String |	--	| -- |
| false-text / true-text	| switch 开关不同状态对应的提示文字	| String |	--	| -- |

<font size=5>Events</font>
| 事件名称| 说明 | 回调参数 | 
| :------ | ------ | ------ |
| on-change | value 改变时触发 | 改变后的 value 值 |
</ClientOnly>