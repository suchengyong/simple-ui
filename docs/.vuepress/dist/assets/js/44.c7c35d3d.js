(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{235:function(t,e,s){},521:function(t,e,s){"use strict";var i=s(235);s.n(i).a},559:function(t,e,s){"use strict";s.r(e);s(9);var i={name:"s-switch",props:{value:{type:Boolean,default:!1},xWidth:{type:String,default:"40px"},falseText:{type:String,default:""},trueText:{type:String,default:""},disabled:{type:Boolean,default:!1},falseColor:{type:String,default:""},trueColor:{type:String,default:""}},computed:{coreStyle:function(){return"width:".concat(this.xWidth,";height:").concat(parseInt(this.xWidth)/2,"px;border-radius:").concat(parseInt(this.xWidth)/4,"px")},innerStyle:function(){return"width:".concat(parseInt(this.xWidth)/2-4,"px;height:").concat(parseInt(this.xWidth)/2-4,"px")}},methods:{toggle:function(){if(!this.disabled){var t=!this.value;this.$emit("input",t),this.$emit("on-change",t),this.trueColor&&t&&(this.$refs.core.style.background=this.trueColor),this.falseColor&&!t&&(this.$refs.core.style.background=this.falseColor)}}},mounted:function(){this.trueColor&&this.value&&(this.$refs.core.style.background=this.trueColor),this.falseColor&&!this.value&&(this.$refs.core.style.background=this.falseColor)}},n=(s(521),s(1)),a=Object(n.a)(i,(function(){var t,e=this,s=e.$createElement,i=e._self._c||s;return i("div",{staticClass:"s-switch"},[e.falseText?i("span",{staticClass:"switch-left-text"},[e._v(e._s(e.falseText))]):e._e(),e._v(" "),i("span",{ref:"core",staticClass:"s-switch-core",class:(t={active:e.value},t.disabled=e.disabled,t),style:e.coreStyle,attrs:{value:e.value},on:{click:e.toggle}},[i("span",{staticClass:"s-switch-core-inner",style:e.innerStyle})]),e._v(" "),e.trueText?i("span",{staticClass:"switch-right-text"},[e._v(e._s(e.trueText))]):e._e()])}),[],!1,null,"38e9c774",null).exports,l=s(0),c=s(151),o=s.n(c);l.default.use(o.a);var r={name:"simple-switch",components:{"s-switch":a},data:function(){return{type1:!1,type2:!0,type3:!1,code:'\n        <s-switch v-model="type1"></s-switch>\n        <s-switch disabled></s-switch>\n        <s-switch\n            v-model="type2" \n            false-color="black" \n            true-color="blue">\n        </s-switch>\n        <s-switch \n            false-text="选择左" \n            true-text="选择右" \n            v-model="type3">\n        </s-switch>'.replace(/^ {8}/gm,"").trim()}},methods:{switchOnChange:function(t){console.log(t)}}},h=Object(n.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("p",[t._v("在两种状态间切换时用到的开关选择器。使用v-model绑定一个布尔值，或者监听on-change事件，滑块在左侧时值为false，滑块在右侧时值为true。")]),t._v(" "),s("h3",[t._v("基础用法")]),t._v(" "),s("simple-card",{scopedSlots:t._u([{key:"code",fn:function(){return[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[s("code",{staticClass:"vue"},[t._v(t._s(t.code))])])]},proxy:!0}])},[s("div",[s("s-switch",{on:{"on-change":t.switchOnChange},model:{value:t.type1,callback:function(e){t.type1=e},expression:"type1"}})],1),t._v(" "),s("div",[s("s-switch",{attrs:{disabled:""}})],1),t._v(" "),s("div",[s("s-switch",{attrs:{"false-color":"black","true-color":"blue"},model:{value:t.type2,callback:function(e){t.type2=e},expression:"type2"}})],1),t._v(" "),s("div",[s("s-switch",{attrs:{"false-text":"选择左","true-text":"选择右"},model:{value:t.type3,callback:function(e){t.type3=e},expression:"type3"}})],1)])],1)}),[],!1,null,"c9d113e0",null);e.default=h.exports}}]);