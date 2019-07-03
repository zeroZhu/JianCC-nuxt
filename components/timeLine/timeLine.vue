<template>
  <div class="time-line" :style="{'height':height}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'timeLine',
  props: {
    height: String
  },
  data() {
    return {};
  }
}
</script>

<style lang="less" scoped>
.time-line {
  overflow-y:auto;
  padding-left: 5px;
  padding-right: 18px;
}
 .time-line::-webkit-scrollbar {/*滚动条整体样式*/
  width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
  height: 4px;
}
.time-line::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  background:#0067ED
}
.time-line::-webkit-scrollbar-track {/*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  border-radius: 5px;
  background:#F7F9FB;
}
</style>

