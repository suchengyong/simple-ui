<template>
  <s-picker
    :_visible="visible"
    _title="请选择城市"
    :_list-data="listData"
    :_default-value-data="_defaultValueData"
    :_cancelColor="_cancelColor"
    :_confirmColor="_confirmColor"
    :_currColor="_currColor"
    :_cancelBtnTxt="_cancelBtnTxt"
    :_confirmText="_confirmText"
    @close="switchPicker('visible')"
    @confirm="setChooseValue"
    @choose="updateChooseValue"
    @close-update="closeUpdateChooseValue"
  ></s-picker>
</template>

<script type="text/babel">
/* eslint-disable */
  import {cityData} from '../data/citydata'
  export default {
      name:'s-address',
      props: {
          _visible: {
              type: Boolean,
              default: false
          },
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
           _cancelBtnTxt:{
              type: String,
              default: '取消'
          },
          _confirmText:{
              type: String,
              default: '确定'
          },
          _defaultValueData:{
              type: Array,
              default: () => []
          }
      },
      data() {
          return {
            visible:false,
            listData:[],
            province:[],
            city:[],
            area:[],
            cacheCity:[],
            cacheArea:[],
          }
      },
      watch: {
        _visible(newVal,oldVal) {
          this.visible = newVal;
        },
      },
      created() {
        cityData.forEach((item,index)=>{
          this.province.push(item)
        })
        cityData[0].childs.forEach((item,index)=>{
          this.city.push(item)
        })
        let city = cityData[0].childs;
        city[0].childs.forEach((item,index)=>{
          this.area.push(item)
        })
        this.cacheCity = this.city;
        this.cacheArea = this.area;
        this.$nextTick(()=>{
          this.listData = [
            ...[this.province],
            ...[this.city],
            ...[this.area]
          ];
        })
      },
      methods: {
          switchPicker(param) {
            this.$emit('close');
          },
          closeUpdateChooseValue(self,value){
            if(value.length == 0){
              this.$nextTick(()=>{
                this.listData.splice(1, 2, [...this.cacheCity],[...this.cacheArea]);
              })
            }else{
              this.$nextTick(()=>{
                this.listData.splice(1, 2, [...value[0].childs],[...value[1].childs]);
                self.updateChooseValue(self,1,value[1])
                self.updateChooseValue(self,2,value[2])
              })
            }
          },
          // 联动地区
          updateLinkCity(self, value, index, chooseValue, cacheValueData) {
            if (!value) {
                return false;
            }
            switch (index) {
                case 1:
                this.city = [];
                this.area = [];
                this.listData[0].forEach((itemPre,i)=>{
                  if(itemPre.id == value.id){
                    cityData[i].childs.forEach((item,index)=>{
                      this.city.push(item)
                    })
                    let city = cityData[i].childs;
                    city[0].childs.forEach((item,index)=>{
                      this.area.push(item)
                    })
                    this.listData.splice(1, 2, [... this.city],[... this.area]);
                  }
                })
                chooseValue = chooseValue ? chooseValue : this.listData[index][0];
                self && self.updateChooseValue(self, index, chooseValue);
                this.updateLinkCity(
                    self,
                    chooseValue,
                    2,
                    cacheValueData && cacheValueData[2] ? cacheValueData[2] : null
                );
                break;
                case 2:
                this.area = [];
                this.listData[1].forEach((item,i)=>{
                  if(item.id == value.id){
                    item.childs.forEach((itemChild,index)=>{
                      this.area.push(itemChild)
                    })
                    this.listData.splice(2, 1, [... this.area]);
                  }
                })
                chooseValue = chooseValue ? chooseValue : this.listData[index][0];
                self && self.updateChooseValue(self, index, chooseValue);
                break;
            }
          },

          updateChooseValue(self, index, value, cacheValueData) {
            index < 2 && this.updateLinkCity(self, value, index + 1, null);
          },

          setChooseValue(chooseData) {
            this.$emit('confirm',chooseData)
          }
      }
  }
</script>

