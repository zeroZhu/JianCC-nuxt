<template>
  <div class="list-banner">
    <div class="list-banner-haed">
      <h3>{{title}}</h3>
    </div>
    <ul class="list-banner-list">
      <li class="list-item" v-for="(item,index) in data" :key="index">
        <img class="lit-item-left"  v-if="item.coverImgId" :src="item.coverImgId" alt="查挂证上建查查">
        <div class="lit-item-left" v-else style="background:#d1dfe9"></div>
        <div class="lit-item-right">
          <router-link tag="h4" :to="`/news-detail?id=${item.id}`" >{{item.title}}</router-link>
          <p>{{item.summary}}</p>
          <div class="info">
            <span v-for="v in item.labels" :key="v.id" class="tag" >{{v.label}}</span>
            <span class="view"> <i class="iconfont icon-yuedushu fl"></i>  {{item.readCount}}</span>
            <span class="time">{{formatTimeHandler(item.createTime)}}</span>
          </div>
        </div>
      </li>
    </ul>
    <!-- <el-button class="list-banner-more">查看更多</el-button> -->
  </div>
</template>

<script>
import { formatTime } from "@/assets/js/until.js";
export default {
  name: "listBanner",
  props: {
    title: String,
    data: Array
  },
  data() {
    return{
    };
  },
  methods:{
    formatTimeHandler(v) {
      return formatTime(v,"yy/mm/dd");
    }
  },
  mounted() {

  }
}
</script>

<style lang="less" scoped>
.list-banner {
  .list-banner-haed {
    border-bottom: 1px solid #eaedf1;
    text-align: left;
    h3 {
      font-size: 22px;
      color: #222222;
      font-weight: 400;
      padding: 4px 13px 12px 7px;
      display: inline-block;
      position: relative;
    }
    h3::after {
      content: "";
      height: 3px;
      width: 64px;
      border-radius: 2px;
      background-color: #0067ED;
      position: absolute;
      left: 0px;
      bottom: -1px;
    }
  }
  .list-banner-list {
    .list-item:last-child {
      border-bottom: none;
    }
    .list-item {
      height: 181px;
      padding: 20px 0 24px;
      box-sizing: border-box;
      display: flex;
      border-bottom: 1px solid #ededf1;
      .lit-item-left {
        width: 220px;
        height: 137px;
        margin-right: 20px;
      }
      .lit-item-right{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        text-align: left;
        h4 {
          font-size:18px;
          font-weight:bold;
          color:rgba(51,51,51,1);
          margin-bottom: 7px;
          cursor: pointer;
        }
        h4:hover {
          color:#0067ED;
        }
        p{
          font-size: 14px;
          color: #666666;
          line-height: 24px;
          flex: auto;
        }
        .info {
          .time, .view {
            color: #999999;
            font-size: 14px;
            line-height: 20px;
            float: right;
            .icon-yuedushu {
              font-size: 20px;
              margin-right: 4px;
            }
          }
          .time {
            margin-right: 12px;
          }
        }
      }
    }
  }
  .list-banner-more {
    margin-bottom: 50px;
    padding: 12px 37px;
    color: #0067ED;
    font-size: 14px;
    border-color: #0067ED;
  }
  .list-banner-more:active{
    color: #ffffff;
    background: #0067ED;
  }
}
</style>