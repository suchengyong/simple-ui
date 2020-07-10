<template>
    <div class="actionsheet">
        <transition name="fade">
            <div class="actionsheet-mask" @click="clickActionSheetMask" v-show="visible"></div>
        </transition>
        <transition name="slideUp">
            <div class="actionsheet-panel" v-show="visible">
                <div class="actionsheet-custom" v-if="$slots.custom">
                    <slot name="custom" v-html="custom"></slot>
                </div>
                <ul class="actionsheet-menu" >
                    <li class="actionsheet-item" :class="{'actionsheet-item-active': isHighlight(item)}" v-for="(item, index) of _menuItems" :key="index" @click="chooseItem(item)">{{item[_optionTag]}}</li>
                </ul>
                <div class="actionsheet-cancel" v-if="_cancelTxt" @click="closeActionSheet">{{_cancelTxt}}</div>
            </div>
        </transition>
    </div>
</template>
<script>
/* eslint-disable */
export default {
    name:'s-actionsheet',
    props: {
        _visible: {
            type: Boolean,
            default: false
        },
        _cancelTxt: {
            type: String,
            default: ''
        },
        _optionTag: {
            type: String,
            default: 'name'
        },
        _chooseTagValue: {
            type: String,
            default: ''
        },
        _menuItems: {
            type: Array,
            default: () => []
        }
    },
    data(){
        return{
            visible:false
        }
    },
    watch: {
        _visible(value) {
            this.visible = this._visible;
            this.$emit('open');
        }
    },
    methods: {
        isHighlight(item) {
            return this._chooseTagValue == item[this._optionTag] || this._chooseTagValue === 0;
        },
        closeActionSheet() {
            this.$emit('close');
        },
        clickActionSheetMask() {
            this.closeActionSheet();
        },
        chooseItem(item) {
            this.closeActionSheet();
            this.$emit('choose', item);
        }
    }
}
</script>

<style scoped>
@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes fadeOut {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}
.fade-enter-active {
    animation:fadeIn .2s ease;
}

.fade-leave-active {
    animation: fadeOut .2s ease;
}
@keyframes slideUpIn {
    from {
        transform: translate3d(0, 100%, 0);
        visibility: visible;
    }

    to {
        transform: translate3d(0, 0, 0);
    }
}

@keyframes slideUpOut {
    from {
        transform: translate3d(0, 0, 0);
    }

    to {
        visibility: hidden;
        transform: translate3d(0, 100%, 0);
    }
}
.slideUp-enter-active {
    animation: slideUpIn .3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.slideUp-leave-active {
    animation: slideUpOut .2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}
.actionsheet-mask{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index:9998;
    background-color: rgba(0,0,0,0.75);
}
.actionsheet-panel{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index:10001;
    background-color: rgb(246, 246, 246);
}
.actionsheet-modal{
    padding: 12px;
    margin: 0;
    text-align: center;
    background-color: #FFF;
    border-bottom: 1px solid rgba(196, 198, 210, 0.35);
}
.actionsheet-title, .actionsheet-sub-title{
    padding: 5px 0;
}
.actionsheet-title{
    font-size: 16px;
    color: #848484;
}
.actionsheet-sub-title{
    font-size: 14px;
    color: #848484;
    margin-inline-start: 0px;
}
.actionsheet-menu{
    list-style: none;
    padding: 0;
    margin: 0;
}
.actionsheet-cancel, .actionsheet-item{
    padding: 12px;
    font-size: 16px;
    color: #848484;
    text-align: center;
    background-color: #FFF;
}
.actionsheet-item {
    border-bottom: 1px solid #dadada;
}
.actionsheet-item-active{
    color: #F0250F;
}
.actionsheet-menu .actionsheet-item:last-child{
    border-bottom: none;
}
.actionsheet-cancel{
    margin-top: 10px;
}
</style>
