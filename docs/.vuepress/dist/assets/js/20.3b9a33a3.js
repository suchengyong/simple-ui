(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{140:function(t,i,n){"use strict";var a=n(3),e=n(17),r=n(21),s=n(70),o=n(68),l=n(7),u=n(97).f,c=n(98).f,h=n(10).f,d=n(144).trim,p=a.Number,f=p,m=p.prototype,V="Number"==r(n(69)(m)),g="trim"in String.prototype,v=function(t){var i=o(t,!1);if("string"==typeof i&&i.length>2){var n,a,e,r=(i=g?i.trim():d(i,3)).charCodeAt(0);if(43===r||45===r){if(88===(n=i.charCodeAt(2))||120===n)return NaN}else if(48===r){switch(i.charCodeAt(1)){case 66:case 98:a=2,e=49;break;case 79:case 111:a=8,e=55;break;default:return+i}for(var s,l=i.slice(2),u=0,c=l.length;u<c;u++)if((s=l.charCodeAt(u))<48||s>e)return NaN;return parseInt(l,a)}}return+i};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var i=arguments.length<1?0:t,n=this;return n instanceof p&&(V?l((function(){m.valueOf.call(n)})):"Number"!=r(n))?s(new f(v(i)),n,p):v(i)};for(var y,b=n(8)?u(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;b.length>w;w++)e(f,y=b[w])&&!e(p,y)&&h(p,y,c(f,y));p.prototype=m,m.constructor=p,n(14)(a,"Number",p)}},141:function(t,i,n){"use strict";var a=n(13),e=n(99)(!0);a(a.P,"Array",{includes:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}}),n(100)("includes")},142:function(t,i,n){"use strict";var a=n(13),e=n(146);a(a.P+a.F*n(147)("includes"),"String",{includes:function(t){return!!~e(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},143:function(t,i,n){},144:function(t,i,n){var a=n(13),e=n(20),r=n(7),s=n(145),o="["+s+"]",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),c=function(t,i,n){var e={},o=r((function(){return!!s[t]()||"​"!="​"[t]()})),l=e[t]=o?i(h):s[t];n&&(e[n]=l),a(a.P+a.F*o,"String",e)},h=c.trim=function(t,i){return t=String(e(t)),1&i&&(t=t.replace(l,"")),2&i&&(t=t.replace(u,"")),t};t.exports=c},145:function(t,i){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},146:function(t,i,n){var a=n(71),e=n(20);t.exports=function(t,i,n){if(a(i))throw TypeError("String#"+n+" doesn't accept regex!");return String(e(t))}},147:function(t,i,n){var a=n(2)("match");t.exports=function(t){var i=/./;try{"/./"[t](i)}catch(n){try{return i[a]=!1,!"/./"[t](i)}catch(t){}}return!0}},149:function(t,i,n){"use strict";n(141),n(142);var a={name:"s-button",components:{"s-icon":n(148).a},props:{type:{type:String,validator:function(t){return["primary","info","success","warning","danger"].includes(t)}},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},icon:{type:String,required:!1},iconPosition:{type:String,default:"left",validator:function(t){return"left"===t||"right"===t}}},computed:{btnClass:function(){var t=[];return this.iconPosition&&t.push("ico-".concat(this.iconPosition)),this.type&&t.push("btn-".concat(this.type)),this.disabled&&t.push("btn-disabled"),t.join(" ")}}},e=(n(150),n(1)),r=Object(e.a)(a,(function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("button",{staticClass:"s-button",class:t.btnClass,on:{click:function(i){return t.$emit("click")}}},[t.icon&&!t.loading?n("s-icon",{staticClass:"icon",attrs:{name:t.icon}}):t._e(),t._v(" "),t.loading?n("s-icon",{staticClass:"icon loading",attrs:{name:"loading"}}):t._e(),t._v(" "),n("div",{staticClass:"btn-content"},[t._t("default")],2)],1)}),[],!1,null,"98432282",null);i.a=r.exports},150:function(t,i,n){"use strict";var a=n(143);n.n(a).a},533:function(t,i,n){"use strict";n.r(i);n(9);var a,e,r=n(0),s=(n(72),n(140),0),o="webkit moz ms o".split(" ");if("undefined"==typeof window)a=function(){},e=function(){};else{var l;a=window.requestAnimationFrame,e=window.cancelAnimationFrame;for(var u=0;u<o.length&&(!a||!e);u++)l=o[u],a=a||window[l+"RequestAnimationFrame"],e=e||window[l+"CancelAnimationFrame"]||window[l+"CancelRequestAnimationFrame"];a&&e||(a=function(t){var i=(new Date).getTime(),n=Math.max(0,16-(i-s)),a=window.setTimeout((function(){t(i+n)}),n);return s=i+n,a},e=function(t){window.clearTimeout(t)})}var c={name:"s-count",props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2020},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,i,n,a){return n*(1-Math.pow(2,-10*t/a))*1024/1023+i}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=a(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){e(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,a(this.count)},reset:function(){this.startTime=null,e(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var i=t-this.startTime;this.remaining=this.localDuration-i,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(i,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(i,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(i/this.localDuration):this.printVal=this.localStartVal+(this.endVal-this.localStartVal)*(i/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),i<this.localDuration?this.rAF=a(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var i=(t+="").split("."),n=i[0],a=i.length>1?this.decimal+i[1]:"",e=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;e.test(n);)n=n.replace(e,"$1"+this.separator+"$2");return this.prefix+n+a+this.suffix}},destroyed:function(){e(this.rAF)}},h=n(1),d=Object(h.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("span",[this._v("\n  "+this._s(this.displayValue)+"\n")])}),[],!1,null,null,null).exports,p=n(149),f=n(151),m=n.n(f);r.a.use(m.a);var V={name:"simple-count",components:{"s-button":p.a,"s-count":d},data:function(){return{startVal:0,endVal:2018,code:"\n        <s-count :startVal='startVal' :endVal='endVal' :duration='3000'></s-count>\n        ".replace(/^ {8}/gm,"").trim()}},methods:{startSpread:function(){this.endVal=2020}}},g=Object(h.a)(V,(function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("p",[t._v("用于数字展示动画")]),t._v(" "),n("h3",[t._v("基础用法")]),t._v(" "),n("simple-card",{scopedSlots:t._u([{key:"code",fn:function(){return[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"vue"},[t._v(t._s(t.code))])])]},proxy:!0}])},[n("div",[n("s-button",{attrs:{type:"primary"},on:{click:t.startSpread}},[t._v("数字动画")])],1),t._v(" "),n("h1",[n("s-count",{attrs:{startVal:t.startVal,endVal:t.endVal,duration:3e3}})],1)])],1)}),[],!1,null,"e0418560",null);i.default=g.exports}}]);