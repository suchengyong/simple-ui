<template>
<s-actionsheet :_visible="visible" @close="closeActionSheet">
    <div class="picker" slot="custom">
        <div class="picker-control">
            <span class="picker-cancel-btn" :style="{color:_cancelColor}"  @click="closeActionSheet">{{_cancelBtnTxt}}</span>
            <div class="picker-title">{{_title ? _title : ''}}</div>
            <span class="picker-confirm-btn" :style="{color:_confirmColor}" @click="confirm">{{_confirmText}}</span>
        </div>
        <div class="picker-panel">
            <template v-for="(item, index) of _listData" >
                <picker-slot 
                    :_curr-color="_currColor"
                    :ref="`picer-slot-${(index)}`" 
                    :_default-value="chooseValueData[index]" 
                    :_is-update="isUpdate" 
                    :_list-data="item" 
                    @chooseItem="chooseItem" 
                    :key="index" 
                    :key-index="index"
                ></picker-slot>
            </template>
        </div>
    </div>
</s-actionsheet>
</template>
<script>
/* eslint-disable */
import pickerSlot from "./pickerSlot.vue";
export default {
    name:'s-picker',
    props: {
        _cancelColor: {
            type: String,
            default: '#999'
        },
        _confirmColor: {
            type: String,
            default: '#944DF6'
        },
        _currColor:{
            type: String,
            default: '#944DF6'
        },
        _visible: {
            type: Boolean,
            default: false
        },
        _cancelBtnTxt:{
            type: String,
            default: '取消'
        },
        _confirmText:{
            type: String,
            default: '确定'
        },
        _title: {
            type: String,
            default: ' '
        },
        _listData: {
            type: Array,
            default: () => []
        },
        _defaultValueData: {
            type: Array,
            default: () => []
        },
    },
    components: {
       [pickerSlot.name]: pickerSlot,
    },
    data() {
        return {
            chooseValueData: [],
            cacheValueData: [],
            isUpdate: false,
            visible:false
        };
    },
    watch: {
        '_visible':function(){
            this.visible = this._visible;
        },
        '_defaultValueData': function() {
            this.chooseValueData = [...this._defaultValueData];
            this.cacheValueData = [...this._defaultValueData];
            this.$emit('confirm', this.cacheValueData);
        }
    },
    methods: {
        updateChooseValue(self, index, value) {
            self.cacheValueData.splice(index, 1, value);
            let ref = `picer-slot-${index}`;
            self.$refs[ref][0].updateTransform(value);
        },
        closeActionSheet() {
            this.isUpdate = !this.isUpdate;
            this.cacheValueData = [...this.chooseValueData];
            this.$emit('close');
            this.$emit('close-update', this, this.chooseValueData);
        },
        confirm() {
            this.$emit('confirm', this.cacheValueData);
            this.chooseValueData = [...this.cacheValueData];
            this.$emit('close');
        },
        chooseItem(val, index) {
            if (this.cacheValueData[index] !== val) {
                this.cacheValueData[index] = val;
                this.$emit('choose', this, index, val, this.cacheValueData);
            }  
        }
    },
    created() {
        if (this._defaultValueData && this._defaultValueData.length) {
            this.chooseValueData = [...this._defaultValueData];
        } else {
            let defaultValueData = [];
            this._listData.map((item, index) => {
                defaultValueData.push(item[0]);
            });
            this.chooseValueData = [...defaultValueData];
        }
    }
}
</script>

<style scoped>
.picker{
    background-color: rgb(255, 255, 255);
    width: 100%;
}
.picker-control{
    display: flex;
    height: 40px;
    border-bottom: 1px solid #F6F6F6;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
}
.picker-cancel-btn{
    width: 60px;
    color: #999;
}
.picker-confirm-btn{
    width: 60px;
    color: #F0250F;
}
.picker-title{
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.picker-panel{
    height: 240px;
    display: flex;
}
</style>
