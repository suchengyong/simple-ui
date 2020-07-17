---
title: 'Other 其他'
sidebarDepth: 2
---
## Message  消息
<ClientOnly>
  <simple-message/>

<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| message| 消息提示文本 | string | - | - |
| type| 消息类型 | string | info, success, error, warning| info |
| duration| 消息出现时长 | number，单位：ms | - | 6000ms |
| enableHtml	| 允许插入html |boolean | - | false |
| closeBtn| 自定义关闭按钮文案和回调，有效的key包括”btnTex'(value type:String),'callback'(value type: Function)} |object | - | - |
| position| 消息提示出现位置 | string | top,middle,bottom | top |
</ClientOnly>


## Modal 模态框
<ClientOnly>
<simple-modal/>

<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| title| 模态框标题 | string | - | - |
| content| 模态框内容 | string /html片段(需要设置enableContentHtml是true)| - | - |
| enableContentHtml	| 允许插入html作为内容 | boolean | - | false |
| btnConfig| 自定义关闭按钮文案和回调，有效的key包括不同类型按钮文案和按钮点击回调，如下'confrimCallback', 'cancelCallback', 'cancelModalCallback', 'confirmText', 'cancelText')} |object | - | - |
</ClientOnly>


## Popover 弹出框
<ClientOnly>
  <simple-popover/>

<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| content| 消息提示文本 | string | - | - |
| placement| 出现位置 | string | 消息提示文本| top|
| trigger| 触发方式| string | click, hover| click|
</ClientOnly>

## Dialog 模态框
<ClientOnly>
<simple-dialog/>

<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| title| 模态框标题 | string | - | - |
| text| 模态框内容 | string | - | - |
| showCancelBtn	| 取消按钮是否显示 | boolean | - | false |
| confirmText	| 确认按钮文字 | string | - | 确认 |
| confirm | 确认按钮事件 | - | - | - |
| cancel | 取消按钮事件 | - | - | - |
</ClientOnly>


## Actionsheet 底部弹出框
<ClientOnly>
<simple-actionsheet/>

<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| _visible| 弹出框是否显示与不显示 | boolean | - | false |
| _cancelTxt| 取消按钮文本 | string | - | - |
| _optionTag	| _menuItems数组里面每一项的属性值 | boolean | - | false |
| _chooseTagValue	|选择项的属性值 | string | - | -- |
| _menuItems | 弹出框里面数据 | Array | - | - |
| open | 打开弹出框的回调 | - | - | - |
| close | 关闭弹出框回调 | - | - | - |
| choose | 选择每一项回调 | - | - | - |
</ClientOnly>


## Address 城市地区滚动选择
<ClientOnly>
<simple-address/>

<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| _visible| 弹出框是否显示与不显示 | boolean | - | false |
| _cancelBtnTxt| 取消按钮文本 | string | - | - |
| _cancelColor| 取消按钮文本颜色 | string | - | - |
| _confirmColor| 确认按钮文本颜色 | string | - | - |
| _confirmText| 确认按钮文本 | string | - | - |
| _currColor| 滚动选择文本颜色 | string | - | - |
| _defaultValueData	| 默认现在的项目 | Array | - | -- |
| confirm | 确认按钮回调 | - | - | - |
| close | 关闭弹出框回调 | - | - | - |
</ClientOnly>

## AddressPicker 模仿京东城市地区选择
<ClientOnly>
<simple-addressPicker/>

<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| _visible| 弹出框是否显示与不显示 | boolean | - | false |
| _cancelBtnTxt| 取消按钮文本 | string | - | - |
| _cancelColor| 取消按钮文本颜色 | string | - | - |
| _confirmColor| 确认按钮文本颜色 | string | - | - |
| _confirmText| 确认按钮文本 | string | - | - |
| _currColor| 滚动选择文本颜色 | string | - | - |
| _defaultValueData	| 默认现在的项目 | Array | - | -- |
| confirm | 确认按钮回调 | - | - | - |
| close | 关闭弹出框回调 | - | - | - |
</ClientOnly>

## Picker 底部滚动选择
<ClientOnly>
<simple-picker/>

<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| _visible| 弹出框是否显示与不显示 | boolean | - | false |
| _title | 标题 | string |-- |--|
| _listData| 数据列表 | Array | -- | -- |
| _cancelBtnTxt| 取消按钮文本 | string | - | - |
| _cancelColor| 取消按钮文本颜色 | string | - | - |
| _confirmColor| 确认按钮文本颜色 | string | - | - |
| _confirmText| 确认按钮文本 | string | - | - |
| _currColor| 滚动选择文本颜色 | string | - | - |
| _defaultValueData	| 默认现在的项目 | Array | - | -- |
| confirm | 确认按钮回调 | - | - | - |
| close | 关闭弹出框回调 | - | - | - |
</ClientOnly>

## modalDialog 弹出框
<ClientOnly>
<simple-modalDialog/>

<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| content| 内容 | string | - | -- |
| title | 标题 | string |-- |--|
| htmlcontent| html标签富文本内容 | string | -- | -- |
| titleColor| 标题颜色 | string | - | - |
| contentColor| 内容文本颜色 | string | - | - |
| _confirmColor| 确认按钮文本颜色 | string | - | - |
| _confirmText| 确认按钮文本 | string | - | - |
| isShowConfirm| 是否显示确认按钮 | string | - | - |
| isCancelBtn	| 是否显示取消按钮 | Array | - | -- |
| comifirmBtnClick | 确认按钮回调 | - | - | - |
| cancelBtnClick | 取消弹出框回调 | - | - | - |
</ClientOnly>

## loading 加载动画
<ClientOnly>
<simple-loading/>

<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| type| 动画类型loading | string | -- | -- |
</ClientOnly>


## toast 提示框 
<ClientOnly>
<simple-toast/>

<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| message| 需要提示的内容 | string | -- | -- |
</ClientOnly>