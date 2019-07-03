<template>
  <div class="home-partner">
    <h3>合作伙伴</h3>
    <div class="home-partner-list">
      <ul class="list-item">
        <li v-for="(item,index) in data" :key="index" >
          <a :href="item.url"><img :src="item.icon" alt=""></a> 
        </li>
      </ul>
      <ul class="list-item">
        <li v-for="(item,index) in data" :key="index" >
          <a :href="item.url"><img :src="item.icon" alt=""></a> 
        </li>
      </ul>
      <ul class="list-item">
        <li v-for="(item,index) in data" :key="index" >
          <a :href="item.url"><img :src="item.icon" alt=""></a> 
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "homePartner",
  data() {
    return {
      data:[
        { icon: require("@/assets/img/partner/licaitong.png"), url:"https://www.baidu.com/" },
        { icon: require("@/assets/img/partner/ftzj.png"), url:"https://www.baidu.com/" },
        { icon: require("@/assets/img/partner/didi.png"), url:"https://www.baidu.com/" },
        { icon: require("@/assets/img/partner/tqhy.png"), url:"https://www.baidu.com/" }
      ]
    };
  }
}
</script>

<style lang="less" scoped>
.home-partner {
  margin-bottom: 80px;
  h3 {
    font-size: 30px;
    font-weight: 400;
    color: #222222;
    padding: 50px 0;
    text-align: center;
  }
  .home-partner-list {
    width: 1180px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    .list-item {
      display: flex;
      justify-content: space-between;
      margin: 18px 0;
      li {
        flex-basis: 25%;
      }
    }
  }
}
</style>
