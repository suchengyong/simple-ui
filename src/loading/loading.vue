<template>
    <div class="custom-loading"  v-if="show">
        <div class="custom-loading-Mask"></div>
        <div class="custom-loading-box">
            <div class="custom-loading-content"><span>{{text}}</span><em :style="{borderLeftColor:progressColor}"></em></div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
export default {
    data(){
        return{
            show:false,
            text:'加载中...',
            progressColor:'#497BEC',
        }
    },
}
</script>

<style scoped>
.custom-loading{
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 9999999999;
	display: flex;
	justify-content: center;
	align-items: center;
}
.custom-loading-Mask {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: rgba(0,0,0,.4);
}
.custom-loading-box{
	width: 8rem;
	height: 8rem;
	border-radius: 0.3rem;
	background: #fff;
	position: relative;
	z-index: 100;
	display: flex;
	justify-content: center;
	align-items: center;
}
.custom-loading-content{
	width: 8rem;
    height: 8rem;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-content:center;
	flex-wrap: wrap;
	position: relative;
}
@-webkit-keyframes haha1{
	0%{-webkit-transform:rotate(0deg);}
	25%{-webkit-transform:rotate(90deg);}
	50%{-webkit-transform:rotate(180deg);}
	75%{-webkit-transform:rotate(270deg);}
	100%{-webkit-transform:rotate(360deg);}
}
.custom-loading-content span{
	width: 100%;
	text-align: center;
	font-size: 1rem;
}
.custom-loading-content em{
	position: absolute;
	width: 6rem;
	height: 6rem;
	top: 0.85rem;
	left: 0.85rem;
	border: 0.15rem solid transparent;
	border-radius: 50%;
	-webkit-animation: haha1 1s infinite linear;
	animation: haha1 1s infinite linear;
}
</style>
