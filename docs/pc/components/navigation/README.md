---
title: 'Navigation 导航'
sidebarDepth: 2
---

## Tabs 标签面板
<ClientOnly>
  <simple-tab/>
<font size=5>Tab Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| v-model/value| 绑定值 | string | - | - |
| tabPosition| 选项卡所在位置 | string | left, top | top |

<font size=5>TabItem Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
|name| 选项卡名称 | string | - | - |
|disabled| 面板名称 | boolean | - | false |

<font size=5>TabPane Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
|name| 面板名称 | string | - | - |

</ClientOnly>

## Steps 步骤条
<ClientOnly>
  <simple-steps/>

<font size=5>Steps Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
|active| 设置当前激活步骤 | number | - | 0 |
|direction| 步骤条显示方向 | string | horizontal, vertical | horizontal|
|step-finish-color| 自定义完成步骤显示颜色 | string | - | 主题色，#d4b1b5 |
|span| 	每个step的间距, 单位：px | number | - | - |

<font size=5>Step Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
|title| 标题 | string | - | - |
|description| 描述 | string | - | - |
|icon| 图标名称 | string | - | - |
</ClientOnly>

## Menu 导航菜单
<ClientOnly>
  <simple-menu/>

<font size=5>s-menu Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
|selected-index| 默认选中子菜单的 index ，可用 .sync 修饰符同步	 | String | -- | -- |
|vertical| 纵向菜单 | Boolean | -- | false |
|width| 菜单宽度 | String | -- | 100% |

<font size=5>s-menu Methods </font>
| 方法名 | 说明 | 参数 |
| :------ | ------ | ------ |
|updateMenu| 根据给定的 index 或 path 更新 menu 子菜单的展开和选中状态，需要在 $nextTick 中调用 | { index }、{ path } |

<font size=5>s-menu Events </font>
| 事件名称 | 说明 | 回调参数 |
| :------ | ------ | ------ |
| index-change |  点击 s-menu-item 时触发 | 被点击 s-menu-item 的 index 值 |
| name-change | 点击 s-menu-item 时触发 | 被点击 s-menu-item 的 name 值 |
| path-change	| 点击 x-menu-item 时触发	| 被点击 x-menu-item 对应的 path 路径，形如 name1/name2/name3 |

<font size=5>s-sub-menu Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| index | sub 子菜单的唯一标志，必填 | String | -- | -- |
| name | sub 子菜单的名称，必填 | String | -- | -- |
| open |	sub 子菜单默认展开，当默认展开时，sub 子菜单只会在被点击时关闭 |	Boolean	| --	| false |

<font size=5>s-menu-item Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| index | item 子菜单的唯一标志，必填 | String | -- | -- |
| name | item 子菜单的名称，必填 | String | -- | -- |
</ClientOnly>

## Pager 分页器
<ClientOnly>
  <simple-pager/>
<font size=5>s-pager Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| total	| 总页数，必填 |	Number |	-- |	-- |
| current |	当前页数，必填,用 .sync 绑定 |	Number	| --	| -- |
| single-hide	| 当只有一页时隐藏分页器，默认隐藏（true）|	Boolean	| -- | true | 
| simple |	简洁样式，默认不开启（false）	| Boolean	| --	| false |
</ClientOnly>

## Progress 全局加载进度条
<ClientOnly>
  <simple-progress/>
<font size=5>s-progress Methods </font>
| 方法名 | 说明 | 参数 |
| :------ | ------ | ------ |
| start | 从 0 显示进度条，并自动加载进度 | -- |
| finish |	结束进度条，补全剩余进度并自动消失 | --|
| error	| 以错误的类型结束进度条，补全剩余进度并自动消失 | -- |

#### 在 Vue 实例中通过直接调用以下方法来使用组件：
```
this.$progress.start();
this.$progress.finish();
this.$progress.error();
```
#### 在 Router 中调用：
```
  simple.progress.start();
  simple.progress.finish();
  simple.progress.error();
```
#### 同时提供了全局配置和全局销毁方法：
```
this.$progress.config(options);
this.$progress.destroy();

simple.progress.config(options);
simple.progress.destroy();
```
<font size=5> Options 参数说明 </font>
| 参数 | 说明 | 类型 |
| :------ | ------ | ------ |
| background | 进度条背景颜色 | String |
| color |	进度条颜色 | String |
| failedColor	| 错误类型进度条颜色 | String |
| height	| 进度条高度 | Number |
</ClientOnly>