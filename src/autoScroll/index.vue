<template>
    <div class="auto-scroll">
      <ul ref='autoScroll' :style="{
        'transition': 'all ' + duration + 'ms',
        'transform': 'translateY(-' + (autoScrollIndex * 2) + 'rem)'
      }">
        <template v-for="(item,index) in autoScrollData">
          <li :key='index' ref="`autoScroll-li-${index}`"><p :data-id="item.id">{{item.title}}</p></li>
        </template>
      </ul>
    </div>
</template>
<script>
/* eslint-disable */
import { requestAnimationFrame, cancelAnimationFrame } from './requestAnimationFrame.js'
export default {
  name: 's-autoScroll',
  props: {
    _scrollData: {
      type: Array,
      default: () => {
          return []
      }
    },
    _duration: {
      type: Number,
      required: false,
      default: 3000
    },
  },
  data() {
    return {
      duration: 0,
      autoScrollData: this._scrollData,
      autoScrollIndex: 0,
      total: 0,
      rAF: null
    };
  },
  mounted() {
    this.autoScrollIndex = 0;
    this.duration = this._duration;
    let endEvent = this.detectTransitionsEndEvents();
    let $autoScroll = this.$refs['autoScroll'];
    $autoScroll.addEventListener(endEvent, (e) => {
        this.rAF = requestAnimationFrame(this.scroll);
    });
    this.start()
    
  },
  methods: {
    scroll() {
        if (this.autoScrollIndex === this.total - 1) {
            this.duration = 0; 
            this.autoScrollIndex = 0;
            setTimeout(() => {
                this.duration = this._duration;
                this.rAF = requestAnimationFrame(this.scroll)
            })
          } else {
            this.autoScrollIndex++;
          }
    }, 
    start() {
        this.autoScrollData.push(this._scrollData[0]);
        this.total = this.autoScrollData.length;
        this.rAF = requestAnimationFrame(this.scroll);
    },
    detectTransitionsEndEvents(){
        let t,
        el = document.createElement('surface'),
        transitions = {
         'transition':'transitionend',
         'OTransition':'oTransitionEnd',
         'MozTransition':'transitionend',
         'WebkitTransition':'webkitTransitionEnd'
        };
 
        for(t in transitions){
            if( el.style[t] !== undefined ){
               return transitions[t];
            }
        }
    }    
  },
  beforeDestroy() {
    let $autoScroll = this.$refs['autoScroll'];
    $autoScroll.removeEventListener(this.detectTransitionsEndEvents(), () => {})
    cancelAnimationFrame(this.rAF)
  }
};
</script>
<style scoped>
.auto-scroll {
    width: auto;
    height: 2rem;
    overflow: hidden;
}
ul {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    text-align: center;
    transition: all .5s;
    transform: translateY(0);
}
li {
    list-style: none;
    height: 2rem;
    line-height: 2rem;
    display: flex;
    align-items: center;
}
p {
    font-size: 0.7rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap
}
</style>
