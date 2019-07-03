<template>
  <div class="home">
    <homeHead></homeHead>
    <div class="content">
      <div class="home-banner">
        <div class="banner-item" v-for="item in banners" :key="item.id">
          <div class="icon">
            <img  :src="item.icon" alt="">
          </div>
          <div class="desc">
            <img class="title" :src="item.title" alt="">
            <p :style="{width:item.descWidth}">
              {{item.desc}}
            </p>
          </div>
        </div>
      </div>
      <el-carousel class="mt25" trigger="click" height="140px">
        <el-carousel-item v-for="item in carousels" :key="item.id">
          <img width="1180px" height="140px" :src="item.pic" alt="">
        </el-carousel-item>
      </el-carousel>
      <div class="home-main mt40">
        <div class="home-main-atricle">
          <list-banner :title="listBanner.title" :data="listBanner.data" ></list-banner>
        </div>
        <div class="home-main-aside">
          <hot-rank></hot-rank>
        </div>
      </div>
    </div>
    <div style="backgroundColor:#F7F9FB;padding:50px 0">
      <div class="content">
        <div class="home-main">
          <div class="home-main-atricle">
            <newRank/>
          </div>
          <div class="home-main-aside">
            <newsLine/>
          </div>
        </div>
      </div>
    </div>
    <home-partner />
    <!-- <footer-component/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import homeHead from "@/components/home/homeHead.vue";
import homePartner from "@/components/home/homePartner.vue";
import listBanner from "@/components/listBanner.vue";
import hotRank from "@/components/hotRank.vue";
import newRank from "@/components/home/newRank.vue";
import newsLine from "@/components/home/newsLine.vue";

export default {
  layout: 'home',
  components: {
    homeHead, listBanner, hotRank, homePartner, newsLine, newRank
  },
  data() {
    return{
      carousels: [
        {id: 0,pic: require("~/static/img/carousels/carousels1.jpg"), link: 'www.baidu.com' },
        {id: 1,pic: require("~/static/img/carousels/carousels2.jpg"), link: 'www.baidu.com' },
        {id: 2,pic: require("~/static/img/carousels/carousels3.png"), link: 'www.baidu.com' },
      ],
      banners: [
        {id:0, icon: require("~/static/img/home/entity.png"), title: require("~/static/img/home/entity-font.png"), desc:"百万项企业资质、人员、业绩任意查询", descWidth:"154px"},
        {id:1, icon: require("~/static/img/home/people.png"), title: require("~/static/img/home/people-font.png"), desc:"多维度关注人员资格、履职信息，一网打尽", descWidth:"156px"},
        {id:2, icon: require("~/static/img/home/achievement.png"), title: require("~/static/img/home/achievement-font.png"), desc:"招投标、审图、合同、竣工等全方位解析", descWidth:"169px"},
        {id:3, icon: require("~/static/img/home/source.png"), title: require("@/static/img/home/source-font.png"), desc:"数据与国家权威网站同步，实时更新", descWidth:"127px"},
      ],
      listBanner: {
        title: '头条',
        data: [
          { 
            title: "住房城乡建设部等 8 部门联合印发通知", content: '违法违规开采、运输、销售和使用海砂，导致各类违法违规海砂流入建筑市场，给工程质量安全带来隐患。为保障工程质量和人民群众生命财产', 
            tags: ['最新政策', '深化改革', '八大员'], time: "2018/10/24", view: 20114
          },
          { 
            title: '住房城乡建设部等 8 部门联合印发通知', content: '违法违规开采、运输、销售和使用海砂，导致各类违法违规海砂流入建筑市场，给工程质量安全带来隐患。为保障工程质量和人民群众生命财产', 
            tags: ['最新政策', '深化改革', '八大员'], time: "2018/10/24", view: 20114
          },
          { 
            title: '住房城乡建设部等 8 部门联合印发通知', content: '违法违规开采、运输、销售和使用海砂，导致各类违法违规海砂流入建筑市场，给工程质量安全带来隐患。为保障工程质量和人民群众生命财产', 
            tags: ['最新政策', '深化改革', '八大员'], time: "2018/10/24", view: 20114
          }
        ]
      }
    };
  }
};
</script>

<style lang="less">
.home {
  .content {
    width: 1180px;
    margin: 0 auto;
    .home-banner {
      margin-top: 40px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .banner-item {
        width: 200px;
        height: 65px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        .icon {
          margin-right: 20px;
        }
        .desc {
          width: auto;
          text-align: left;
          title {
            height: 19px;
          }
          p {
            margin-top: 5px;
            font-size: 14px;
            color: #666666;
          }
        }
      }
    }
    .home-main {
      display: flex;
      .home-main-atricle {
        flex-basis: 850px;
        margin-right: 30px;
      }
      .home-main-aside {
        flex-basis: 300px;
      }
    }
  }
}
</style>
