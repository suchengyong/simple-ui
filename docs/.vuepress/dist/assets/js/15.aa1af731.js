(window.webpackJsonp=window.webpackJsonp||[]).push([[15,20],{151:function(a,e,c){"use strict";var o=c(18),t=c(13),n=c(28),l=c(101),r=c(102),s=c(23),m=c(158),N=c(103);t(t.S+t.F*!c(73)((function(a){Array.from(a)})),"Array",{from:function(a){var e,c,t,i,p=n(a),A="function"==typeof this?this:Array,u=arguments.length,f=u>1?arguments[1]:void 0,j=void 0!==f,C=0,I=N(p);if(j&&(f=o(f,u>2?arguments[2]:void 0,2)),null==I||A==Array&&r(I))for(c=new A(e=s(p.length));e>C;C++)m(c,C,j?f(p[C],C):p[C]);else for(i=I.call(p),c=new A;!(t=i.next()).done;C++)m(c,C,j?l(i,f,[t.value,C],!0):t.value);return c.length=C,c}})},154:function(a,e,c){},158:function(a,e,c){"use strict";var o=c(10),t=c(51);a.exports=function(a,e,c){e in a?o.f(a,e,t(0,c)):a[e]=c}},177:function(a,e,c){"use strict";var o=c(154);c.n(o).a},178:function(a,e,c){},218:function(a,e,c){"use strict";c.r(e);c(104),c(151),c(4);var o={name:"simple-color",props:{list:{type:Array}},data:function(){return{isOpen:!1}},mounted:function(){this.addFanDot()},watch:{isOpen:function(a){var e=this;Array.from(this.$refs.fan.children).forEach((function(c,o){if(a){var t=150/e.list.length*o;c.style.transform="rotate(".concat(t-73,"deg)")}else c.style.transform="none"}))}},methods:{selectColor:function(a){this.$emit("selectColor",a)},addFanDot:function(){var a=this,e=document.createElement("div");e.style.cssText="height:14px;width:14px;background:#fff;border-radius:50%;position:absolute;bottom:4px;left:8px",this.$refs.fan.lastChild.appendChild(e),e.addEventListener("click",(function(){a.isOpen=!a.isOpen}))},getItemStyle:function(a,e){this.list.length;return{backgroundColor:a,transformOrigin:"10px 140px",zIndex:e}}}},t=(c(177),c(1)),n=Object(t.a)(o,(function(){var a=this,e=a.$createElement,c=a._self._c||e;return c("div",{ref:"fan",staticClass:"fan"},a._l(a.list,(function(e,o){return c("div",{key:o,staticClass:"item",style:a.getItemStyle(e.color,o),on:{click:function(c){return a.selectColor(e)}}})})),0)}),[],!1,null,"5b9ad17f",null);e.default=n.exports},421:function(a,e,c){"use strict";var o=c(178);c.n(o).a},477:function(a,e,c){"use strict";c.r(e);c(4);var o=c(218),t=[{color:"#DC9FB4",cnName:"撫子",jpName:"NADESHIKO"},{color:"#E16B8C",cnName:"紅梅",jpName:"KOHBAI"},{color:"#8E354A",cnName:"蘇芳",jpName:"SUOH"},{color:"#F8C3CD",cnName:"退紅",jpName:"TAIKOH"},{color:"#F4A7B9",cnName:"一斥染",jpName:"IKKONZOME"},{color:"#64363C",cnName:"桑染",jpName:"KUWAZOME"},{color:"#F596AA",cnName:"桃",jpName:"MOMO"},{color:"#B5495B",cnName:"苺",jpName:"ICHIGO"},{color:"#E87A90",cnName:"薄紅",jpName:"USUBENI"},{color:"#D05A6E",cnName:"今様",jpName:"IMAYOH"},{color:"#DB4D6D",cnName:"中紅",jpName:"NAKABENI"},{color:"#FEDFE1",cnName:"桜",jpName:"SAKURA"}],n=[{color:"#BC9F77",cnName:"白茶",jpName:"SHIRACHA"},{color:"#876633",cnName:"媚茶",jpName:"KOBICHA"},{color:"#C18A26",cnName:"黄唐茶",jpName:"KIGARACHA"},{color:"#FFB11B",cnName:"山吹",jpName:"YAMABUKI"},{color:"#D19826",cnName:"山吹茶",jpName:"YAMABUKICHA"},{color:"#DDA52D",cnName:"櫨染",jpName:"HAJIZOME"},{color:"#C99833",cnName:"桑茶",jpName:"UWACHA"},{color:"#F9BF45",cnName:"玉子",jpName:"TAMAGO"},{color:"#DCB879",cnName:"白橡",jpName:"SHIROTSURUBAMI"},{color:"#BA9132",cnName:"黄橡",jpName:"KITSURUBAMI"},{color:"#E8B647",cnName:"玉蜀黍",jpName:"TAMAMOROKOSHI"},{color:"#F7C242",cnName:"花葉",jpName:"HANABA"}],l=[{color:"#A5A051",cnName:"鶸茶",jpName:"HIWACHA"},{color:"#BEC23F",cnName:"鶸",jpName:"HIWA"},{color:"#6C6A2D",cnName:"鶯",jpName:"UGUISU"},{color:"#939650",cnName:"柳茶",jpName:"YANAGICHA"},{color:"#838A2D",cnName:"苔",jpName:"KOKE"},{color:"#B1B479",cnName:"麹塵",jpName:"KIKUJIN"},{color:"#616138",cnName:"璃寛茶",jpName:"RIKANCHA"},{color:"#4B4E2A",cnName:"藍媚茶",jpName:"AIKOBICHA"},{color:"#5B622E",cnName:"海松",jpName:"MIRU"},{color:"#4D5139",cnName:"千歳茶",jpName:"SENSAICHA"},{color:"#89916B",cnName:"梅幸茶",jpName:"BAIKOCHA"},{color:"#91AD70",cnName:"柳染",jpName:"YANAGIZOME"}],r=[{color:"#5DAC81",cnName:"若竹",jpName:"WAKATAKE"},{color:"#36563C",cnName:"千歳緑",jpName:"CHITOSEMIDORI"},{color:"#227D51",cnName:"緑, MIDORI",jpName:"緑, MIDORI"},{color:"#A8D8B9",cnName:"白緑",jpName:"BYAKUROKU"},{color:"#6A8372",cnName:"老竹",jpName:"OITAKE"},{color:"#2D6D4B",cnName:"木賊",jpName:"TOKUSA"},{color:"#465D4C",cnName:"御納戸茶",jpName:"ONANDOCHA"},{color:"#24936E",cnName:"緑青",jpName:"ROKUSYOH"},{color:"#86A697",cnName:"錆青磁",jpName:"SABISEIJI"},{color:"#00896C",cnName:"青竹",jpName:"AOTAKE"},{color:"#20604F",cnName:"虫襖",jpName:"MUSHIAO"},{color:"#00AA90",cnName:"青緑",jpName:"AOMIDORI"}],s=[{color:"#81C7D4",cnName:"水",jpName:"MIZU"},{color:"#33A6B8",cnName:"浅葱",jpName:"ASAGI"},{color:"#0D5661",cnName:"藍",jpName:"AI"},{color:"#0089A7",cnName:"新橋",jpName:"SHINBASHI"},{color:"#336774",cnName:"錆御納戸",jpName:"SABIONANDO"},{color:"#1E88A8",cnName:"花浅葱",jpName:"HANAASAGI"},{color:"#577C8A",cnName:"舛花",jpName:"MASUHANA"},{color:"#58B2DC",cnName:"空",jpName:"SORA"},{color:"#2B5F75",cnName:"熨斗目花",jpName:"NOSHIMEHANA"},{color:"#3A8FB7",cnName:"千草",jpName:"CHIGUSA"},{color:"#7DB9DE",cnName:"勿忘草",jpName:"WASURENAGUSA"},{color:"#51A8DD",cnName:"群青",jpName:"GUNJYO"}],m=[{color:"#7B90D2",cnName:"紅碧",jpName:"BENIMIDORI"},{color:"#6E75A4",cnName:"藤鼠",jpName:"FUJINEZUMI"},{color:"#8B81C3",cnName:"藤",jpName:"FUJI"},{color:"#70649A",cnName:"二藍",jpName:"FUTAAI"},{color:"#9B90C2",cnName:"楝",jpName:"OUCHI"},{color:"#8A6BBE",cnName:"藤紫",jpName:"FUJIMURASAKI"},{color:"#6A4C9C",cnName:"桔梗",jpName:"KIKYO"},{color:"#8F77B5",cnName:"紫苑",jpName:"SHION"},{color:"#B28FCE",cnName:"薄",jpName:"USU"},{color:"#986DB2",cnName:"半",jpName:"HASHITA"},{color:"#77428D",cnName:"江戸紫",jpName:"EDOMURASAKI"},{color:"#B481BB",cnName:"紅藤",jpName:"BENIFUJI"}],N={name:"simple-color",data:function(){return{display:{cnName:"桜",jpName:"simple",color:"#FEDFE1"},value:"",list1:t,list2:n,list3:l,list4:r,list5:s,list6:m}},mounted:function(){var a=this.$refs;[a.fan1,a.fan2,a.fan3,a.fan4,a.fan5,a.fan6].forEach((function(a,e){setTimeout((function(){a.isOpen=!0}),1200*e)}))},methods:{changeDisplay:function(a){this.display=a}},components:{"simple-fan":o.default}},i=(c(421),c(1)),p=Object(i.a)(N,(function(){var a=this.$createElement;this._self._c;return this._m(0)}),[function(){var a=this,e=a.$createElement,c=a._self._c||e;return c("div",[c("h1",[a._v("Color 色彩搭配")]),a._v(" "),c("p",[a._v("推荐使用以下颜色作为设计和开发规范，以保证页面和组件之间的视觉一致。")]),a._v(" "),c("h1",[a._v("主色")]),a._v(" "),c("p",[a._v("使用友好的蓝色作为主色")]),a._v(" "),c("div",{staticClass:"color-wrapper"},[c("div",{staticClass:"color-example"},[c("div",{staticClass:"color-cube",staticStyle:{"background-color":"rgb(64,169,255)"}},[c("span",{staticClass:"title"},[a._v("Light")]),a._v(" "),c("span",{staticClass:"detail"},[a._v("#3eaf7c")])])]),a._v(" "),c("div",{staticClass:"color-example"},[c("div",{staticClass:"color-cube",staticStyle:{"background-color":"rgb(24, 144, 255)"}},[c("span",{staticClass:"title"},[a._v("Primary")]),a._v(" "),c("span",{staticClass:"detail"},[a._v("#1890ff")])])]),a._v(" "),c("div",{staticClass:"color-example"},[c("div",{staticClass:"color-cube",staticStyle:{"background-color":"rgb(9, 109, 217)"}},[c("span",{staticClass:"title"},[a._v("Dark")]),a._v(" "),c("span",{staticClass:"detail"},[a._v("#096dd9")])])])]),a._v(" "),c("h1",[a._v("功能色")]),a._v(" "),c("p",[a._v("功能色常用于信息提示，比如成功、警告和失败。")]),a._v(" "),c("div",{staticClass:"color-wrapper"},[c("div",{staticClass:"color-example"},[c("div",{staticClass:"color-cube",staticStyle:{"background-color":"rgb(82, 196, 26)"}},[c("span",{staticClass:"title"},[a._v("Success")]),a._v(" "),c("span",{staticClass:"detail"},[a._v("#52c41a")])])]),a._v(" "),c("div",{staticClass:"color-example"},[c("div",{staticClass:"color-cube",staticStyle:{"background-color":"rgb(250, 173, 20)"}},[c("span",{staticClass:"title"},[a._v("Warning")]),a._v(" "),c("span",{staticClass:"detail"},[a._v("#faad14")])])]),a._v(" "),c("div",{staticClass:"color-example"},[c("div",{staticClass:"color-cube",staticStyle:{"background-color":"rgb(245, 34, 45)"}},[c("span",{staticClass:"title"},[a._v("Error")]),a._v(" "),c("span",{staticClass:"detail"},[a._v("#f5222d")])])])])])}],!1,null,"90a217fe",null);e.default=p.exports}}]);