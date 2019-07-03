<template>
  <div class="hot-rank">
    <h3 class="hot-rank-head">
      热榜
      <router-link tag="span" class="hot-rank-more" to="/rank-list"  >
        更多<i class="iconfont icon-left-arrow-copy"></i>
      </router-link>
    </h3>
    <div class="hot-rank-content">
      <div class="hot-rank-title clearfix">
        <h4 :class="{'active':index==0}" @click="index=0">企业资质榜</h4>
        <h4 :class="{'active':index==1}" @click="index=1">人员证书榜</h4>
      </div>
      <transition name="fade" mode="in-out">
        <ul class="hot-rank-list">
          <router-link tag="li" :to="item.link" v-for="item in data[index]" :key="item.index" class="list-item" >
            <div class="index" :class="'index'+item.index">{{item.index>3?item.index:''}}</div>
            <span class="name" >{{item.name}}</span>
            <span class="quota" :class="'quota'+item.index">{{item.quota}}</span>
          </router-link>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "hotRank",
  data() {
    return {
      index:0,
      data:[
        [
          {index: 1, name: "深圳瀚海基因", link: "www.baidu.com", quota: '10310k'},
          {index: 2, name: "字节跳动有限公司", link: "www.baidu.com", quota: '10310k'},
          {index: 3, name: "安徽省建筑院", link: "www.baidu.com", quota: '10310k'},
          {index: 4, name: "安徽武隆建筑", link: "www.baidu.com", quota: '10310k'},
          {index: 5, name: "科林尔建筑集团", link: "www.baidu.com", quota: '10310k'},
          {index: 6, name: "冠宇建筑", link: "www.baidu.com", quota: '10310k'},
          {index: 7, name: "齐德龙建筑公司", link: "www.baidu.com", quota: '10310k'},
          {index: 8, name: "万兴建筑集团有限公司", link: "www.baidu.com", quota: '10310k'},
          {index: 9, name: "启东建筑集团有限公司", link: "www.baidu.com", quota: '10310k'},
          {index: 10, name: "广州市建筑集团有限公司", link: "www.baidu.com", quota: '10310k'}
        ], [
          {index: 1, name: "深圳瀚海基因1", link: "www.baidu.com", quota: '10310k'},
          {index: 2, name: "字节跳动有限公司1", link: "www.baidu.com", quota: '10310k'},
          {index: 3, name: "安徽省建筑院1", link: "www.baidu.com", quota: '10310k'},
          {index: 4, name: "安徽武隆建筑", link: "www.baidu.com", quota: '10310k'},
          {index: 5, name: "科林尔建筑集团", link: "www.baidu.com", quota: '10310k'},
          {index: 6, name: "冠宇建筑", link: "www.baidu.com", quota: '10310k'},
          {index: 7, name: "齐德龙建筑公司", link: "www.baidu.com", quota: '10310k'},
          {index: 8, name: "万兴建筑集团有限公司", link: "www.baidu.com", quota: '10310k'},
          {index: 9, name: "启东建筑集团有限公司", link: "www.baidu.com", quota: '10310k'},
          {index: 10, name: "广州市建筑集团有限公司", link: "www.baidu.com", quota: '10310k'}
        ]
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.hot-rank {
  .hot-rank-head {
    font-size: 22px;
    font-weight: 400;
    color: #222222;
    text-align: left;
    padding: 4px 13px 12px 7px;
    border-bottom: 1px solid #EAEDF1;
    position: relative;
    >.hot-rank-more {
      font-size: 14px;
      color: #999999;
      position: absolute;
      bottom: 12px;
      right: 0px;
      cursor: pointer;
      line-height: 1;
      >.iconfont{
        font-size: 12px;
      }
    }
    >.hot-rank-more:hover {
      color: #0067ED;
    }
  }
  .hot-rank-head::after {
    content: "";
    height: 3px;
    width: 64px;
    border-radius: 2px;
    background-color: #0067ED;
    position: absolute;
    left: 0px;
    bottom: -1px;
  }
  .hot-rank-content {
    .hot-rank-title {
      height: 57px;
      line-height: 57px;
      padding: 0 22px;
      margin-bottom: -1px;
      display: flex;
      justify-content: space-between;
      h4 {
        font-size: 16px;
        font-weight: 400;
        color: #666666;
        flex-basis: 50%;
        position: relative;
        cursor: pointer;
        text-align: center;
        &.active {
          color: #0067ED;
          font-weight: bold;
        }
        &.active::after{
          content: "";
          height: 3px;
          width: 30px;
          border-radius: 2px;
          background: #1982ee;
          display: inline-block;
          position: absolute;
          left: 49px;
          bottom: 0px;
        }
      }
    }
    .hot-rank-list {
      .list-item {
        height: 55px;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px dashed #eaedf1;
        .index {
          height: 19px;
          width: 19px;
          border-radius: 50%;
          line-height: 20px;
          text-align: center;
          background: #f2f3f6;
          margin-right: 10px;
          &.index1, &.index2, &.index3{
            width: 22px;
            height: 26px;
            transform: translateY(-1px);
            border-radius: 0;
          }
          &.index1 {
            background: url("./../assets/img/index/index1.png")
          }
          &.index2 {
            background: url("./../assets/img/index/index2.png")
          }
          &.index3 {
            background: url("./../assets/img/index/index3.png")
          }
        }
        .name {
          font-size: 15px;
          color: #222222;
          text-align: left;
          flex: auto;
        }
        .quota {
          font-size: 14px;
          color: #999999;
          &.quota1 {
            color: #ed2221;
          }
          &.quota2 {
            color: #0067ED;
          }
          &.quota3 {
            color: #fd9510;
          }
        }
      }
      .list-item:hover {
        .name {
          color: #0067ED;
        }
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>

