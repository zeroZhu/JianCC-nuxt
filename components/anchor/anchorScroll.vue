<template>
  <div class="anchor-banner-title">
    <div class="radios-arrow"></div>
    <div class="title-list">
      <p v-for="item in listShow" :key="item.key" :class="{active:index==item.key}">{{item.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      now: new Date().getTime(),
      index: 1,
      list: [
        {key:0, title:'第一阶段 自查自纠 2018年12月至2019年3月底'},
        {key:1, title:'第二阶段 全面排查 2019年4月至2019年8月底'},
        {key:2, title:'第三阶段 指导督促 2019年4月至2019年11月底'}
      ]
    }
  },
  methods: {
    init() {
      let { now } = this;
      if(now>new Date("2019-12-1 00:00:01").getTime() && now<new Date("2019-3-31 24:00:00").getTime()) {
        this.index = 0;
      }else if(now>new Date("2019-4-1 00:00:01").getTime() && now<new Date("2019-8-31 24:00:00").getTime()) {
        this.index = 1;
      }else {
        this.index = 2;
      }
    }
  },
  computed: {
    listShow() {
      let { list, index } = this;
      let arr = [ list[index-1], list[index], list[index+1] ];

      let result = arr.map(v=>{
        return v==undefined?{key:2, title:''}:v;
      })
      return result;
    }
  },
  mounted() {
    this.$nextTick(this.init())
  }
};
</script>

<style lang="less" scoped>
.anchor-banner-title {
  padding-left: 28px;
  display: flex;
  align-items: center;
  height: 89px;
  .radios-arrow {
    width: 21px;
    height: 21px;
    background: rgba(255, 255, 255, 1);
    border: 2px solid rgba(226, 65, 24, 1);
    border-radius: 50%;
    box-sizing: border-box;
    position: relative;
  }
  .radios-arrow::after,
  .radios-arrow::before {
    content: "";
    width: 2px;
    height: 33px;
    background: #e5e5e5;
    position: absolute;
    top: -8px;
    left: 4px;
  }
  .radios-arrow::before {
    transform: rotate(-30deg) translateY(-25px);
  }
  .radios-arrow::after {
    transform: rotate(30deg) translateY(25px);
  }
  .title-list {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      min-height: 16px;
      font-size: 16px;
      line-height: 1;
      text-align: left;
      color: #a8a8a8;
      &.active {
        font-size: 24px;
        font-weight: bold;
        text-indent: 20px;
        line-height: 1;
        color: #e24118;
        transform: translateY(-2px);
      }
    }
  }
}
</style>


