(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{140:function(t,e,i){"use strict";var r=i(3),s=i(17),o=i(21),n=i(70),l=i(68),c=i(7),a=i(97).f,h=i(98).f,u=i(10).f,d=i(144).trim,f=r.Number,v=f,m=f.prototype,p="Number"==o(i(69)(m)),g="trim"in String.prototype,w=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){var i,r,s,o=(e=g?e.trim():d(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(i=e.charCodeAt(2))||120===i)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,s=49;break;case 79:case 111:r=8,s=55;break;default:return+e}for(var n,c=e.slice(2),a=0,h=c.length;a<h;a++)if((n=c.charCodeAt(a))<48||n>s)return NaN;return parseInt(c,r)}}return+e};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof f&&(p?c((function(){m.valueOf.call(i)})):"Number"!=o(i))?n(new v(w(e)),i,f):w(e)};for(var y,E=i(8)?a(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;E.length>_;_++)s(v,y=E[_])&&!s(f,y)&&u(f,y,h(v,y));f.prototype=m,m.constructor=f,i(14)(r,"Number",f)}},144:function(t,e,i){var r=i(13),s=i(20),o=i(7),n=i(145),l="["+n+"]",c=RegExp("^"+l+l+"*"),a=RegExp(l+l+"*$"),h=function(t,e,i){var s={},l=o((function(){return!!n[t]()||"​"!="​"[t]()})),c=s[t]=l?e(u):n[t];i&&(s[i]=c),r(r.P+r.F*l,"String",s)},u=h.trim=function(t,e){return t=String(s(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(a,"")),t};t.exports=h},145:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},165:function(t,e,i){"use strict";var r=i(26),s=i(103),o=i(22);t.exports=function(t){for(var e=r(this),i=o(e.length),n=arguments.length,l=s(n>1?arguments[1]:void 0,i),c=n>2?arguments[2]:void 0,a=void 0===c?i:s(c,i);a>l;)e[l++]=t;return e}},229:function(t,e,i){},230:function(t,e,i){},241:function(t,e,i){var r=i(13);r(r.P,"Array",{fill:i(165)}),i(100)("fill")},510:function(t,e,i){"use strict";var r=i(229);i.n(r).a},511:function(t,e,i){"use strict";var r=i(230);i.n(r).a},537:function(t,e,i){"use strict";i.r(e);i(9),i(4),i(241),i(140);var r={name:"s-waterfall",props:{width:{type:Number,default:200},source:{type:Array,required:!0},target:""},data:function(){return{col:0,gutter:0,heightArray:null,dom:null}},mounted:function(){var t=this;this.resize(),this.target?("string"==typeof this.target?this.dom=document.querySelector(this.target):this.dom=this.target,this.dom.addEventListener("scroll",this.listenScroll)):window.addEventListener("scroll",this.listenScroll),this.$nextTick((function(){t.resize(),window.addEventListener("resize",t.resize)}))},methods:{listenScroll:function(){var t,e,i;this.target?(t=this.dom.scrollHeight,e=this.dom.scrollTop,i=this.dom.clientHeight):(t=document.documentElement.scrollHeight||document.body.scrollHeight,e=document.documentElement.scrollTop||document.body.scrollTop,i=document.documentElement.clientHeight||document.body.clientHeight),t-e<i+10&&(this.$emit("scroll-bottom"),this.target?this.dom.removeEventListener("scroll",this.listenScroll):window.removeEventListener("scroll",this.listenScroll))},resize:function(){var t=this;this.$el.style.width="auto";var e=this.$el.getBoundingClientRect().width;this.$el.style.width=e+"px",this.col=Math.floor(e/this.width),1===this.col?this.gutter=(e-this.width)/2:this.gutter=(e-this.width*this.col)/(this.col-1),this.heightArray=Array(this.col).fill(0),this.$nextTick((function(){t.$refs.box.forEach((function(e){e.style.width=t.width+"px"})),t.$refs.item.forEach((function(e){e.style.width=t.width+"px";var i=Math.min.apply(void 0,t.heightArray),r=t.heightArray.indexOf(i),s=e.getBoundingClientRect().height;e.style.top=i+"px",1===t.col?e.style.left=t.gutter+"px":e.style.left=t.gutter*r+t.width*r+"px",t.$refs.box[r].style.height=i+s+"px",t.$set(t.heightArray,r,i+s)}))}))}},watch:{source:{handler:function(t){this.resize(),this.target?this.dom.removeEventListener("scroll",this.listenScroll):window.removeEventListener("scroll",this.listenScroll),this.target?this.dom.addEventListener("scroll",this.listenScroll):window.addEventListener("scroll",this.listenScroll)},deep:!0}},beforeDestroy:function(){this.target?this.dom.removeEventListener("scroll",this.listenScroll):window.removeEventListener("scroll",this.listenScroll),window.removeEventListener("resize",this.resize)}},s=(i(510),i(1)),o=Object(s.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"x-waterfall"},[t.col&&t.source&&t.source.length?[t._l(t.col,(function(t,e){return i("div",{key:e,ref:"box",refInFor:!0,staticClass:"box"})})),t._v(" "),t._l(t.source,(function(e,r){return i("div",{key:"item-"+r,ref:"item",refInFor:!0,staticClass:"item"},[t._t("default",null,{prop:e})],2)}))]:t._e()],2)}),[],!1,null,"960fe022",null).exports,n=i(0),l=i(151),c=i.n(l);n.a.use(c.a);var a={name:"simple-waterfall",components:{"s-waterfall":o},data:function(){return{source:[{title:"文后回复发文后回复发挥好发挥废话话费废话话费哈字挥好发挥废话话费废话话费哈字",size:120},{title:"文后回复发挥好发挥废话话费废话话费哈字",size:220},{title:"文字",size:140},{title:"文后回复发挥好发挥废话话费废话话费哈字",size:160},{title:"文字",size:180},{title:"文字",size:320},{title:"文后回复发挥好发挥废话话费废话话费哈字",size:420},{title:"文字",size:150},{title:"文后回复发挥好发挥废话话费废话话费哈字",size:120},{title:"文字",size:160},{title:"文后回复发挥好发挥废话话费废话话费哈字文后回复发挥好发挥废话话费废话话费哈字",size:120},{title:"文字",size:320},{title:"文后回复发挥好发挥废话话费废话话费哈字文后回复发挥好发挥废话话费废话话费哈字",size:120},{title:"文字",size:420}],code:'\n       <x-waterfall \n        :width="150" \n        :source="source" \n        @scroll-bottom="scrollBottom">\n        <div slot-scope="slotProps">\n            <div>slot</div>\n            <div>宽度 {{ slotProps.prop.size }}</div>\n        </div>\n        </x-waterfall>\n     '.replace(/^ {8}/gm,"").trim()}},methods:{scrollBottom:function(t){console.log(t)}}},h=(i(511),Object(s.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("p",[t._v("瀑布流组件，快速实现瀑布流布局。")]),t._v(" "),i("p",[t._v("通过作用域插槽，瀑布流组件可将数据传回父组件，父组件使用slot-scope可以在插槽中获取到传回的数据。")]),t._v(" "),i("h3",[t._v("基础用法")]),t._v(" "),i("simple-card",{scopedSlots:t._u([{key:"code",fn:function(){return[i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[i("code",{staticClass:"vue"},[t._v(t._s(t.code))])])]},proxy:!0}])},[i("s-waterfall",{attrs:{width:"120",source:t.source},on:{"scroll-bottom":t.scrollBottom},scopedSlots:t._u([{key:"default",fn:function(e){return i("div",{staticClass:"backg"},[i("div",[t._v("插槽:"+t._s(e.prop.title))]),t._v(" "),i("div",[t._v("宽度 "+t._s(e.prop.size))])])}}])})],1)],1)}),[],!1,null,"c6b6c9c0",null));e.default=h.exports}}]);