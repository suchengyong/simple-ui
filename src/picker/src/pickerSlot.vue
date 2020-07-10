<template>
  <div class="picker-list">
    <div class="picker-roller" ref="roller">
        <div class="picker-roller-item" 
            :class="{'picker-roller-item-hidden': isHidden(index + 1)}"
            v-for="(item,index) in _listData"
            :style="setRollerStyle(index + 1)"
            :key="index">
                {{typeof item == "object" ? item.value:item}}
        </div>
    </div>
    <div class="picker-content">
        <div class="picker-list-panel" ref="list">
            <div :style="{color:_currColor}" class="picker-item" v-for="(item,index) in _listData"
                :key="index">
                {{typeof item == "object" ? item.value:item}}
            </div>
        </div>
    </div>
    <div class="picker-mask"></div>
    <div class="picker-indicator"></div>
</div>
</template>
<script>
/* eslint-disable */
export default {
    name:'picker-slot',
    props: {
        _listData: {
            type: Array,
            required: true
        },
        _defaultValue: {
            type: Object | String | Number
        },
        keyIndex: {
            type: Number,
            default: 0
        },
        _isUpdate: {
            type: Boolean,
            default: false
        },
        _currColor:{
            type: String,
            default: '#F0250F'
        }
    },
    data() {
        return {
            touchParams: {
                startY: 0, 
                endY: 0, 
                startTime: 0, 
                endTime: 0
            },
            currIndex: 1,
            transformY: 0,
            scrollDistance: 0,
            lineSpacing: 36,
            rotation: 20,
            timer: null
        }
    },
    watch: {
        '_isUpdate': function() {
            this.transformY = 0;
            this.modifyStatus();
        },
        '_defaultValue': function() {
            this.transformY = 0;
            this.modifyStatus();
        }
    },
    methods: {
        updateTransform(value) {
            if (value) {
                this.transformY = 0;
                this.timer = setTimeout(() => {
                    this.modifyStatus(null, value);
                }, 10); 
            } 
        },

        setRollerStyle(index) {
            return `transform: rotate3d(1, 0, 0, ${-this.rotation * index}deg) translate3d(0px, 0px, 104px)`;
        },

        isHidden(index) {
            if (index >= this.currIndex + 8 || index <= this.currIndex - 8) {
                return true;
            } else {
                return false;
            }
        },

        setTransform(translateY = 0, type, time = 1000, deg) {
            if (type === 'end') {
                this.$refs.list.style.webkitTransition = `transform ${time}ms cubic-bezier(0.19, 1, 0.22, 1)`;
                this.$refs.roller.style.webkitTransition = `transform ${time}ms cubic-bezier(0.19, 1, 0.22, 1)`;
            } else {
                this.$refs.list.style.webkitTransition = '';
                this.$refs.roller.style.webkitTransition = '';
            }
            this.$refs.list.style.webkitTransform = `translate3d(0, ${translateY}px, 0)`;
            this.$refs.roller.style.webkitTransform = `rotate3d(1, 0, 0, ${deg})`;
            this.scrollDistance = translateY;
        },

        setMove(move, type, time) {
            let updateMove = move + this.transformY;
            if (type === 'end') {
                // 限定滚动距离
                if (updateMove > 0) {
                    updateMove = 0;
                }
                if (updateMove < -(this._listData.length - 1) * this.lineSpacing) {
                    updateMove = -(this._listData.length - 1) * this.lineSpacing;
                }

                // 设置滚动距离为lineSpacing的倍数值
                let endMove = Math.round(updateMove / this.lineSpacing) * this.lineSpacing;
                let deg = `${(Math.abs(Math.round(endMove / this.lineSpacing)) + 1) * this.rotation}deg`;
                this.setTransform(endMove, type, time, deg);
                this.timer = setTimeout(() => {
                    this.setChooseValue(endMove);
                }, time / 2); 

                this.currIndex = (Math.abs(Math.round(endMove/ this.lineSpacing)) + 1);
            } else {
                let deg = '0deg';
                if (updateMove < 0) {
                    deg = `${(Math.abs(updateMove / this.lineSpacing) + 1) * this.rotation}deg`;
                } else {
                    deg = `${((-updateMove / this.lineSpacing) + 1) * this.rotation}deg`;
                }
                
                this.setTransform(updateMove, null, null, deg);
                this.currIndex = (Math.abs(Math.round(updateMove/ this.lineSpacing)) + 1);
            }
        },

        setChooseValue(move) {
            this.$emit('chooseItem', this._listData[(Math.round(-move / this.lineSpacing))], this.keyIndex);
        },
	
	    touchStart(event) {
            event.preventDefault();

            let changedTouches = event.changedTouches[0];
            this.touchParams.startY = changedTouches.pageY;
            this.touchParams.startTime = event.timestamp || Date.now();
            this.transformY = this.scrollDistance;
        },

        touchMove(event) {
            event.preventDefault();

            let changedTouches = event.changedTouches[0];
            this.touchParams.lastY = changedTouches.pageY;
            this.touchParams.lastTime = event.timestamp || Date.now();
            let move = this.touchParams.lastY - this.touchParams.startY;

            this.setMove(move);
        },

        touchEnd(event) {
            event.preventDefault();

            let changedTouches = event.changedTouches[0];
            this.touchParams.lastY = changedTouches.pageY;
            this.touchParams.lastTime = event.timestamp || Date.now();
            let move = this.touchParams.lastY - this.touchParams.startY;

            let moveTime = this.touchParams.lastTime - this.touchParams.startTime;
            if (moveTime <= 300) {
                move = move * 2;
                moveTime = moveTime + 1000;
                this.setMove(move, 'end', moveTime);
            } else {
                this.setMove(move, 'end');
            }
        },

        modifyStatus (type, defaultValue) {
            defaultValue = defaultValue ? defaultValue : this._defaultValue;
            let index = -1;
            if(typeof defaultValue == "object" ){
                this._listData.forEach((ele,index1) => {
                    if(defaultValue){
                        if(JSON.stringify(ele) == JSON.stringify(defaultValue)){
                            index = index1
                        }
                    }
                });
            }else{
                index = this._listData.indexOf(defaultValue);
            }
            this.currIndex = index === -1 ? 1 : (index + 1);
            let move = index === -1 ? 0 : (index * this.lineSpacing);
            type && this.setChooseValue(-move);
            this.setMove(-move);
        }
    },

    mounted() {
        this.$nextTick(() => {
            this.modifyStatus(true);
            // 监听
            this.$el.addEventListener('touchstart', this.touchStart);
            this.$el.addEventListener('touchmove', this.touchMove);
            this.$el.addEventListener('touchend', this.touchEnd);
        });
    },
    beforeDestroy() {
        // 移除监听
        this.$el.removeEventListener('touchstart', this.touchStart);
        this.$el.removeEventListener('touchmove', this.touchMove);
        this.$el.removeEventListener('touchend', this.touchEnd);
        clearTimeout(this.timer);
    }
}
</script>

<style scoped>
.picker-list{
    flex: 1;
    position: relative;
    height: 252px;
    overflow: hidden;
    text-align: center;
}
.picker-list-panel{
    transform-style: preserve-3d;
    overflow: hidden;
}
.picker-mask{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-position: top, bottom;
    background-size: 100% 108px;
    background-repeat: no-repeat;
    z-index: 3;
}
.picker-indicator{
    position: absolute;
    top: 108px;
    width: 100%;
    height: 34px;
    border-top: 1px solid #DADADA;
    border-bottom: 1px solid #DADADA;
    z-index: 3;
}
.picker-content, .picker-roller{
    position: absolute;
    top: 108px;
    width: 100%;
    height: 36px;
}
.picker-content{
    background: #FFF;
    z-index: 2;
    overflow: hidden;
}
.picker-item, .picker-roller-item{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 36px;
    color:#F0250F;
    font-size: 14px;
    text-align: center;
}
.picker-item{
    font-size: 15px;
    background: #FFF;
}
.picker-roller{
    z-index: 1;
    transform-style: preserve-3d;
}
.picker-roller-item{
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    width: 100%;
    color: #848484;
}
.picker-roller-item-hidden {
    visibility: hidden;
    opacity: 0;
}
</style>

