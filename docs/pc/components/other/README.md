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
| tips | 加载状态的提示文字，将出现在加载动画的正下方 | String | -- | -- |
| tips-color | 加载状态的提示文字颜色 | String | -- | #36b1bf |
| tips-size | 加载状态的提示文字大小 | String | -- | 14px |
</ClientOnly>

## Count 数字加载
<ClientOnly>
  <simple-count/>

<font size=5> Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| startVal | 开始值	|	Number |	0 |
| endVal	| 结束值	| Number |	2020 |
| duration | 持续时间（毫秒）|	Number|	3000|
| autoplay	| 自动播放时	| Boolean	| true|
| decimals	| 要显示的小数位数 |	Number |	-- | 0 |
| decimal	| 分割小数	| String	| --| -- |
| separator	| 分隔符 | String | --| -- |
| prefix |	前缀	| String | --| -- |
| suffix	| 后缀	| String | --| -- |
| useEasing	| 是否使用缓动动画	| Boolean	| -- | true|
| easingFn	| 缓动动画	| Function|--| --|
</ClientOnly>

## imageCrop 图片裁剪
<ClientOnly>
  <simple-imageCrop/>

<font size=5> Attributes</font>
| 属性名|	作用|	类型|	必填|	默认值|
| ------ | ---- | ----- | ---- | ---- |
|isModal|	是否为弹窗模式|	Boolean	|否	|true|
|showChooseBtn|	是否显示选择图片按钮 |	Boolean	 |否 |	true |
|lockScroll	|是否在Dialog出现时将body滚动锁定 |	Boolean |	否 |	true |
|label|	默认打开裁剪工具按钮的显示文字 |	String |	否 |	选择图片 |
|boxWidth|	裁剪工具宽度 |	Number |	否 |	800 |
|boxHeight|	裁剪工具高度 |	Number |否 |	400 |
|cutWidth|	默认裁剪宽度 |	Number |	否 |	200 |
|cutHeight|	默认裁剪高度 |	Number |	否 |	200 |
|tool|	是否显示工具栏 |	Boolean	 |否 |	true |
|sizeChange	|是否能够调整裁剪框大小 |	Boolean |	否 |	true |
|moveAble|	能否调整裁剪区域位置 |	Boolean	 |否 |	true |
|crossOrigin|	是否设置跨域，需要服务器做相应更改 |	Boolean |	否 |	false |
|crossOriginHeader|	设置跨域信息crossOrigin为true时才生效 |	String |	否 |	'' |
|rate|	图片比例 |	String(例: "4:3") |	否 |- |
|cutDown|	完成截图后要执行的方法	 | Function |	是 |	- |
|error|	错误回调 |	Function |	否 |	- |
</ClientOnly>