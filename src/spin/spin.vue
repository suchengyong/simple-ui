<template>
    <transition name="spin-fade">
        <div class="s-spin-wrapper" v-if="appear">
            <div class="circle" :style="{width:`${width}px`,height:`${width}px`}">
                <span-icon name="loading" class="icon"></span-icon>
            </div>
            <span class="tips" v-if="tips" :style="{color:tipsColor}">{{tips}}</span>
        </div>
    </transition>
</template>
<script>
    import Icon from './icon.vue'
    export default {
        name: 's-span',
        components: { 'span-icon': Icon},
        props: {
            delay: Number,
            tips: { type: String, default: '加载中...' },
            width: { type: Number, default: 80 },
            tipsColor: { type: String, default: '#36b1bf' },
            spinning: { type: Boolean, default: false }
        },
        data() {
            return { appear: false, timerId: null }
        },
        watch: {
            spinning: {
                handler(val) {
                    if (val && this.delay) {
                        this.timerId = setTimeout(() => {
                            this.appear = val
                        }, this.delay)
                        return
                    }
                    this.appear = val
                    if (!val && this.timerId) {
                        window.clearTimeout(this.timerId)
                    }
                },
                immediate: true
            }
        },
        beforeDestroy() {
            this.timerId && window.clearTimeout(this.timerId)
            this.timerId = null
        }
    }
</script>
<style scoped lang="scss">
    $p:#36b1bf;
    .s-spin-wrapper {
        display: inline-flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        >.circle {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            animation: s-spin 1.3s linear infinite;
            >.icon {
                width: 100%;
                height: 100%;
                color: greenyellow;
            }
        }
        >.tips {
            display: inline-flex;
            height: 22px;
            justify-content: center;
            align-content: center;
            color: $p;
        }
    }
    @keyframes s-spin {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .spin-fade-enter-active, .spin-fade-leave-active {
        transition: opacity .3s linear;
    }
    .spin-fade-enter, .spin-fade-leave-to {
        opacity: 0;
    }
</style>