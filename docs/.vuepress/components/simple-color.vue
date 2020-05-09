<template>
  <div>
    <h1>Color 色彩搭配</h1>
    <p>推荐使用以下颜色作为设计和开发规范，以保证页面和组件之间的视觉一致。</p>
    <h1>主色</h1>
    <p>使用友好的蓝色作为主色</p>
    <div class="color-wrapper">
      <div class="color-example">
        <div class="color-cube" style="background-color:rgb(64,169,255)">
          <span class="title">Light</span>
          <span class="detail">#3eaf7c</span>
        </div>
      </div>
      <div class="color-example">
        <div class="color-cube" style="background-color:rgb(24, 144, 255)">
          <span class="title">Primary</span>
          <span class="detail">#1890ff</span>
        </div>
      </div>
      <div class="color-example">
        <div class="color-cube" style="background-color:rgb(9, 109, 217)">
          <span class="title">Dark</span>
          <span class="detail">#096dd9</span>
        </div>
      </div>
    </div>
    <h1>功能色</h1>
    <p>功能色常用于信息提示，比如成功、警告和失败。</p>
    <div class="color-wrapper">
      <div class="color-example">
        <div class="color-cube" style="background-color:rgb(82, 196, 26)">
          <span class="title">Success</span>
          <span class="detail">#52c41a</span>
        </div>
      </div>
      <div class="color-example">
        <div class="color-cube" style="background-color:rgb(250, 173, 20)">
          <span class="title">Warning</span>
          <span class="detail">#faad14</span>
        </div>
      </div>
      <div class="color-example">
        <div class="color-cube" style="background-color:rgb(245, 34, 45)">
          <span class="title">Error</span>
          <span class="detail">#f5222d</span>
        </div>
      </div>
    </div>
    <!-- <div class="palette">
      <div style="height:50px;width:100%"> 点击扇子上的颜色，还有下方白色按钮可以折叠的哦~~</div>
      <div class="row">
        <simple-fan :list="list1" @selectColor="changeDisplay" ref="fan1"></simple-fan>
        <simple-fan :list="list2"  @selectColor="changeDisplay" ref="fan2"></simple-fan>
      </div>
      <div class="row">
        <simple-fan :list="list3" @selectColor="changeDisplay" ref="fan3"></simple-fan>
        <simple-fan :list="list4"  @selectColor="changeDisplay" ref="fan4"></simple-fan>
      </div>
      <div class="row">
        <simple-fan :list="list5" @selectColor="changeDisplay" ref="fan5"></simple-fan>
        <simple-fan :list="list6"  @selectColor="changeDisplay" ref="fan6"></simple-fan>
      </div>
    </div>
    <div class="introduction" :style="{backgroundColor:display.color,transition:'1.5s'}">
      <div class="color-cn">{{display.cnName}}</div>
      <div class="color-jp">{{display.jpName}}</div>
      <div class="color-value">{{display.color}}</div>
    </div> -->
  </div>
</template>
<script>
import simpleFan from './simple-fan'
import {list1, list2 ,list3,list4, list5,list6} from '../../static/js/color'
export default {
  name:'simple-color',
  data(){
    return {
      display:{
        cnName:'桜',
        jpName:'simple',
        color:'#FEDFE1'
      },
      value:'',
      list1,
      list2,
      list3,
      list4,
      list5,
      list6
    }
  },
  mounted(){
   let {fan1,fan2,fan3,fan4,fan5,fan6} = this.$refs
   let fanList = [fan1,fan2,fan3,fan4,fan5,fan6]
   fanList.forEach((item,index)=>{
      setTimeout(()=>{
        item.isOpen = true
      },1200*index)
   })
  },
  methods:{
    changeDisplay(v){
      this.display =v
    }
  },
  components:{
    'simple-fan': simpleFan
  }
}
</script>
<style lang="scss" scoped>
.color-example {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 20px 0;
}
.color-example > .color-cube {
    width: 200px;
    height: 100px;
    flex-shrink: 0;
    color: rgba(255, 255, 255, 0.85);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    border-radius: 4px;
    padding-left: 20px;
    margin-right: 20px;
}
.color-example > .color-cube > .title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
}
.color-example > .color-cube > .detail {
    font-size: 16px;
    font-weight: 600;
}
.color-wrapper{
  display: flex;
  flex-direction: row;
  .palette{
    width: 720px;
  }
  .introduction{
    flex-grow: 1;
    background: #DC9FB4;
    color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    .color-cn{
      margin:100px 0 30px;
      font-size: 60px;
      display: flex;
      width: 1em;
    }
    .color-jp{
      font-size: 18px;
    }
    .color-value{
      margin-top:20px;
    }
  }
}
 .row{
   margin-bottom:20px;
   /deep/ .fan{
     &:last-child{
       margin-left: 30px;
     }
   }
 }
 
</style>