<template>
  <div class="track-time">
    <div class="track-time-item" v-for="(item, index) in data" :key="index">
      <label class="track-time-label">{{item.label}}</label>
      <div class="track-time-line" :class="{'time-line-first':i==0}" v-for="(v,i) in item.list" :key="i">
        {{v.companyName}}
        <span class="turn">变更为</span>
        <span class="time">{{v.endTime}}</span>
        <span class="now">至今</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "trackTime",
  props: {
    data: Array
  },
  data() {
    return {};
  }
}
</script>

<style lang="less" scoped>
.track-time {
  padding: 40px 0;
  border: 1px solid #d8e8f4;
  // border-bottom: none;
  overflow-x: auto;
  .track-time-item {
    height: 48px;
    line-height: 48px;
    margin-bottom: 50px;
    padding: 0 30px;
    font-size: 12px;
    width: max-content;
    display: flex;
    .track-time-label {
      width: 100px;
      margin-right: 30px;
    }
    .track-time-line {
      padding: 0 45px;
      line-height: 1;
      height: 25px;
      color: #0067ED;
      border-bottom: 1px solid #d8e8f4;
      position: relative;
      .turn {
        color: #f34758;
        position: absolute;
        right: -18px;
        top: 0;
      }
      .time {
        color: #222222;
        position: absolute;
        right: -33px;
        bottom: -24px;
      }
      .now {
        color: #222222;
        position: absolute;
        right: 0;
        bottom: -24px;
        display: none;
      }
      &.time-line-first {
        padding-left: 0;
      }
    }
    .track-time-line:after {
      content: "";
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 1px solid #333333;
      position: absolute;
      right: -6px;
      bottom: -6px;
      background-color: #ffffff;
      z-index: 999;
    }
    .track-time-line:last-child {
      .time, .turn {
        display: none;
      }
      .now {
        display: inline !important;
      }
    }
    .track-time-line:last-child::after {
      display: none;
    }
  }
  .track-time-item:last-child {
    margin-bottom: 0;
  }
}
.track-time::-webkit-scrollbar {/*滚动条整体样式*/
  width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
  height: 4px;
}
.track-time::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
  border-radius: 5px;
  background:#dddddd;
}
.track-time::-webkit-scrollbar-track {/*滚动条里面轨道*/
  border-radius: 5px;
  background:#f6f6f6;
}
</style>

