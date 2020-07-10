<template>
    <div class="bg">
        <transition name="fade">
        <div class="fixed">
            <template v-for='(item,index) in selectedArray'>
                <div :key=index @click="selectedItem(item.value, item.code, item.value1, item.value2, item.value3, item.value4)" class="choose-list-item">{{item.value}}</div>
           </template>
            <div class="cancel-btn" @click="hidePop">取消</div>
        </div>
         </transition>  
    </div> 
</template>
<script>
/* eslint-disable */
export default {
  name: 's-pop',
  props: {
     selectedArray: Array
  },
  methods:{
     selectedItem(value,code, value1, value2, value3, value4){
         this.$emit('getValue', {value,code, value1, value2, value3, value4})
     },
     hidePop(){
         this.$emit('closePop')
     }
  }
  
}
</script>

<style scoped>
@keyframes slide-up{
  from { transform: translate3d(0, 100%, 0); }
  to { transform: translate3d(0, 0, 0); }
}
 .bg{
    position: fixed;
    z-index:9999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    font-size: 1.1rem;
    color: #333;
}   
 .choose-list-item{
    width:100%;
    line-height:3.8rem;
    text-align:center;
    background:white;
    font-size:1.1rem;
    color:#4B3B45;
    border-bottom:0.05rem solid #E7E8EB;
}
.fixed{
    width:100%;
    position:fixed;
    bottom:0;
    animation: slide-up .3s;
}
.cancel-btn{
    width:100%;
    line-height:3.8rem;
    text-align:center;
    background:white;
    font-size:1.1rem;
    color:#807C88;
    margin-top:0.2rem;
}
.choose-list-item:first-child{
    border-radius:1.2rem 1.2rem 0px 0px;
}
</style>