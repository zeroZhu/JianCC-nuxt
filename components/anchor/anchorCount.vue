<template>
<div class="anchor-count-down">
  <h3>第三阶段挂证整治倒计时</h3>
  <div class="time">
      {{date.day}}<span>天</span>{{date.hour}}<span>时</span>{{date.min}}<span>分</span>{{date.sec}}
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      target: new Date("2019-011-30 24:00:00").getTime(),
      split: 0,
    }
  },
  methods: {
    init() {
      setInterval(()=>{
        let now = new Date().getTime();
        this.split = this.target - now;
      },1000);
    }
  },
  computed: {
    date() {
      let { split } = this;
      let day = Math.floor(split/86400000), hours = split%86400000;
      let hour = Math.floor(hours/3600000), mins = hours%3600000;
      let min = Math.floor(mins/60000), secs = mins%60000;
      let sec = Math.floor(secs/1000);
      day = day<10?"0"+day:day;
      hour = hour<10?"0"+hour:hour;
      min = min<10?"0"+min:min;
      sec = sec<10?"0"+sec:sec;
      let date = {
        day, hour, min, sec
      }
      return date;
    }
  },
  mounted() {
    this.init();
  }
}
</script>

<style lang="less" scoped>
.anchor-count-down {
  h3 {
    font-size:25px;
    font-weight: bold;
    color: #222222;
    text-align: right;
  }
  .time {
    font-size: 48px;
    color: #E24118;
    font-weight: bold;
    span {
      font-size: 14px;
    }
  }
}
</style>

