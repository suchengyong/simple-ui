<template>
  <transition name="fade">
    <div class="picker" v-show="show" @click="$emit('update:show', true)">
      <div class="panel slide-up" @click.stop>
        <div class="picker-title">选择居住城市</div>
        <ul class="header">
          <li
            v-for="(item, index) in result"
            :key="index"
            class="header-item"
            @click="handleClick(item, index)"
          >
            <div class="menu" :class="{ active: currentActiveIndex === index }">
              {{ item.name }}
            </div>
          </li>
          <li
            v-show="result.length < 3"
            @click="handleClick({})"
            class="header-item"
          >
            <div
              class="menu"
              :class="{ active: currentActiveIndex === undefined }"
            >
              请选择
            </div>
          </li>
        </ul>
        <div class="content">
          <vue-scroll :ops="ops" ref="vs">
            <ul class="list">
              <li
                class="list-item"
                v-for="(item, index) in list"
                :id="'li' + index"
                :key="item._id"
                @click="handlePick(item)"
              >
                <span>{{ item.name }}</span>
                <img :src="yesUrl" class="icon" v-if="activeCurrent(item)" />
                <img :src="yesUrl" class="icon" v-if="currentActiveIndex==2&&indexIcon == index" />
              </li>
            </ul>
          </vue-scroll>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
/* eslint-disable */
import district from "./district.json";
import yesUrl from "./yes.svg";

const sorter = (a, b) => a.code - b.code;
const provinces = district.filter(area => area.level === 0).sort(sorter);
const cities = district.filter(area => area.level === 1).sort(sorter);
const areas = district.filter(area => area.level === 2).sort(sorter);

export default {
  name: "s-addressPicker",
  props: ["show", "address"],
  model: {
    prop: "address",
    event: "pick"
  },
  data() {
    return {
      yesUrl,
      result: [],
      currentActiveIndex: undefined,
      list: [],
      ops: {
        vuescroll: {
          mode: "native"
        },
        scrollPanel: {
          scrollingX: false
        },
        rail: {},
        bar: {
          disable: true
        }
      },
      i:0,
      indexIcon:0,
    };
  },
  watch: {
    show(nv) {
      if (nv) {
        this.$nextTick(() => {
          this.$refs.vs.refresh();
        });
      }
    }
  },
  methods: {
    activeCurrent(item){
      for(var i=0;i<this.result.length-1;i++){
        if(this.result[i]._id == item._id){
          return true;
        }
      }
      if(this.currentActiveIndex == 2){
        return this.result.includes(item)
      }
    },
    handleClick(item) {
      this.currentActiveIndex = item.level;
      const CH = document.querySelector('.list-item').clientHeight
      switch (item.level) {
        case undefined:
          switch (this.result.length) {
            case 1:
              this.list = cities.filter(
                area => area.parent === this.result[0]._id
              );
              break;
            case 2:
              this.list = areas.filter(
                area => area.parent === this.result[1]._id
              );
              break;
          }
          break;
        case 0:
          this.list = provinces;
          if (this.result[0]) {
            const index = this.list.findIndex(
              item => item._id === this.result[0]._id
            );
            this.$refs.vs.scrollTo(
              {
                y: (index - 4) * CH
              },
              800,
              "easeOutQuad"
            );
          }
          break;
        case 1:
          this.list = cities.filter(area => area.parent === this.result[0]._id);
          if (this.result[1]) {
            const index = this.list.findIndex(
              item => item._id === this.result[1]._id
            );
            this.$refs.vs.scrollTo(
              {
                y: (index - 4) * CH
              },
              800,
              "easeOutQuad"
            );
          }
          break;
        case 2:
          this.list = areas.filter(area => area.parent === this.result[1]._id);
          if (this.result[2]) {
            const index = this.list.findIndex(
              item => item._id === this.result[2]._id
            );
            this.$refs.vs.scrollTo(
              {
                y: (index - 4) * CH
              },
              800,
              "easeOutQuad"
            );
          }
          break;
      }
    },
    handlePick(item) {
      switch (item.level) {
        case 0:
          this.currentActiveIndex = undefined;
          this.result.splice(0, 3, item);
          this.list = cities.filter(area => area.parent === item._id);
          break;
        case 1:
          this.currentActiveIndex = undefined;
          this.result.splice(1, 2, item);
          this.list = areas.filter(area => area.parent === item._id);
          break;
        case 2:
          this.result.splice(2, 1, item);
          this.currentActiveIndex = 2;
          this.indexIcon = -1;
          this.$emit("update:show", false);
          this.$emit("pick", this.result);
          break;
      }
    }
  },
  mounted() {
    let province, city, area;
    switch (this.address.length) {
      case 0:
        this.list = provinces;
        break;
      case 1:
        province = provinces.find(item => item.name === this.address[0]);
        if (!province) {
          throw new Error("找不到以下地址:" + this.address);
        }
        this.result.push(province);
        this.list = cities.filter(area => area.parent === province._id);
        break;
      case 2:
        province = provinces.find(item => item.name === this.address[0]);
        city = cities.find(item => item.name === this.address[1]);
        if (!province || !city) {
          throw new Error("找不到以下地址:" + this.address);
        }
        this.result.push(province, city);
        this.list = areas.filter(area => area.parent === city._id);
        break;
      case 3:
        province = provinces.find(item => item.name === this.address[0]);
        city = cities.find(item => item.name === this.address[1]);
        area = areas.find(item => item.name === this.address[2]);
        if (!province || !city || !area) {
          throw new Error("找不到以下地址:" + this.address);
        }
        this.currentActiveIndex = 2;
        this.result.push(province, city, area);
        this.list = areas.filter(area => area.parent === city._id);
        break;
    }
    if(JSON.parse(localStorage.getItem("storeLocation"))){
      this.result = JSON.parse(localStorage.getItem("storeLocation"))
      this.list = areas.filter(area => area.parent === this.result[1]._id);
      this.currentActiveIndex = 2;
      this.list.forEach((element,index) => {
        if(element._id == this.result[2]._id){
          this.indexIcon = index;
        }
      });
    }
  }
  
};
</script>

<style scoped>
.picker-title{
   font-size:.9rem;
   color:#27314A;
   text-align:center;
   line-height:2rem;
}
img {
  content: normal;
}
@keyframes slide-up{
  from { transform: translate3d(0, 100%, 0); }
  to { transform: translate3d(0, 0, 0); }
}
.picker {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, .5);
  z-index:100;
}
.panel {
  position: absolute;
  background: #fff;
  bottom: 0;
  left: 0;
  right: 0;
  animation: slide-up .3s;
}
.header {
  list-style: none;
  border-bottom: 1px solid #c8c7cc;
  margin: 0;
  padding: 0;
  display: flex;
}
.menu {
  line-height:2rem;
  border-bottom: 1.5px solid #fff;
  font-size: .9rem;
  color: rgba(0, 0, 0, .45);
  padding:0 .7rem;
}  
.menu .active {
  color: #497BEC;
  border-bottom-color: #497BEC;
}
.content {
  height: 13rem;
}
.list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.list-item {
  height: 2rem;
  padding-left:.7rem;
  font-size: .9rem;
  display: flex;
  align-items: center;
}
.icon {
  width: .9rem;
  height: .9rem;
  margin-left: .5rem;
}
.icon.active {
  color: #497BEC;
}
</style>