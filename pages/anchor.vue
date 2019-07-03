<template>
  <div class="anchor">
    <anchorHead/>
    <!-- 搜索框 -->
    <div class="anchor-layout">
      <div class="anchor-search">
        <el-input style="margin-left:119px;" v-model="params.name" placeholder="请输入真实姓名"></el-input>
        <el-input style="margin-left:30px;" v-model="params.idNum" placeholder="请输入身份证号码"></el-input>
        <el-button style="margin-left:60px;" @click="queryHandler" >查一查</el-button>
      </div>

      <div class="anchor-banner mb20">
        <anchorScroll/>
        <anchorCount/>
      </div>

      <div class="anchor-main">
        <div class="anchor-main-atricle">
          <list-banner :title="listBanner.title" :data="listBanner.data" ></list-banner>
        </div>

        <div class="anchor-main-aside">
          <div class="attend-adver" style="height:298px;">
          </div>

          <div class="anchored-adver" style="height:298px;">
          </div>
        </div>
      </div>
    </div>
    <div class="anchor-introduce">
      <h1>关于我们</h1>
      <p>建查查基于政府公开数据，结合独家的数据库技术与先进的数据研发能力，为用户在线提供全国40万+家建筑工程企业、数百万行业从业人员、数百万工程业绩等超过30种数据维度的信息，涵盖企业资质、人员资格、工程业绩、信用行为等多种角度，深度链接行业数据，为企业、人员提供精准、全面、海量的数据服务。建查查，始终致力于成为最领先的建筑业综合数据服务平台。</p>
    </div>
    <footer-component/>
    <el-dialog
      close-on-click-modal
      custom-class="anchor-result"
      :visible.sync="dialog.visible"
      :show-close="false"
      width="420px"
      >
      <div class="result-box" :class="anchorClass">
        <div class="result-content">
          <h1>
            {{anchorTitle}}
          </h1>
          <p>
            <span :class="anchorClass">{{params.name}}，{{idCardShow}}，</span><span>{{anchorDesc}}</span>
          </p>
          <div class="qr-code">
            <img src="~assets/img/subscriptionQr.png" alt="">
            <p>关注建查查公众号</p>
            <p>获取挂证整改办法</p>
          </div>
        </div>
        <i class="close-btn el-icon-circle-close-outline" @click="dialog.visible=false" ></i>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import anchorHead from "@/components/anchor/anchorHead.vue";
import anchorCount from "@/components/anchor/anchorCount.vue";
import anchorScroll from "@/components/anchor/anchorScroll.vue";
import listBanner from "@/components/listBanner.vue";
import { queryAnchorFun, getPersonnelFun } from "@/assets/js/api/anchor";
import { getArticlesFun } from "@/assets/js/api/news.js";
import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    anchorHead, anchorCount, anchorScroll, listBanner
  },
  data() {
    return {
      loading: null,
      params: {
        idNum:'',
        name:'',
      },
      listBanner: {
        title: '挂证专题新闻',
        data: []
      },
      anchor: 0,
      anchorStatus: "normal",
      nowDate: new Date(),
      dialog: {
        visible: false
      }
    };
  },
  mounted() {
    // this.getArticles();
  },
  methods: {
    ...mapMutations([
      "changeLoginVisible"
    ]),
    queryHandler() {
      let { idNum, name } = this.params;
      // 去空格
      idNum=idNum.trim();
      name=name.trim();
      // 回显到页面
      this.params = {
        idNum, name
      }
      if(!this.token){
        this.changeLoginVisible(true);
        return;
      }
      if (name == "" || !/^[\u4e00-\u9fa5]+$/.test(name)){
        let message = name == "" ? "请输入真实姓名" : "请输入正确的姓名";
        this.$message({
          type:'warning',
          message,
          center: true
        })
        return;
      }
      if (idNum == "" || (idNum.length != 15 && idNum.length != 18 )){
        let message = idNum == "" ? "请输入身份证号码" : "请输入正确的身份证号码";
        this.$message({
          type:'warning',
          message,
          center: true
        })
        return;
      }
      // 验证身份信息
      getPersonnelFun({ idNum, name }).then(res=>{
        let { success, data } = res;
        if(data == -1 || data == -2) {
          let message = data == -1 ? "查无此人" : "姓名与身份证不一致";
          this.$message({
            type:'warning',
            message,
            center: true
          })
        }else {
          // 验证通过开始查询
          this.loading = this.$loading({
            customClass: "anchor-loading",
            lock: true,
            text: '正在查询中...',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });
          return queryAnchorFun(this.params);
        }
      }).then( res => {
        if(res&&res.success){
          this.loading.close();
          this.dialog.visible = true;
          this.anchor = res.data;
          this.anchorStatus = res.data==0?"normal":(res.data==1?"warn":"danger");
        }
      })
    },
    getArticles() {
      console.log("=========请求开始");
      getArticlesFun({titlelabel:'16a240a65d51110'}).then(res=>{
        const {data, message, success} = res;
        console.log({data, message, success});
        if(success){
          this.listBanner.data = data.list;
        }else{
          console.log('$message调用')
          this.$message({
            type: "error",
            message,
            center: true
          })
        }
      })
    }
  },
  computed: {
    ...mapState({
      token: state => state.user.token,
      nickName: state => state.user.nickName
    }),
    anchorClass() {
      return {
        "anchor-normal": this.anchorStatus == "normal",
        "anchor-warn": this.anchorStatus == "warn",
        "anchor-danger": this.anchorStatus == "danger"
      }
    },
    anchorTitle() {
      let titles = {
        normal:"暂无挂证相关风险",
        warn:"挂证风险较低",
        danger:"挂证风险较高"
      }
      return titles[this.anchorStatus];
    },
    anchorDesc() {
      let descs = {
        "0": "在2019年之前尚未发现存在挂靠行为",
        "1": "2019年之前，因信息不完整，可能存在挂证风险",
        "21": "2019年之前存在同时就职多家单位的情况",
        "22": "2019年之前存在注册证书单位与实际单位不一致的风险"
      }
      return descs[this.anchor+''];
    },
    idCardShow() {
      let { idNum, name } = this.params;
      let len = idNum.length, str = idNum.substring(6,len-2);

      return idNum.replace(str,"***********");
    }
  }
}
</script>

<style lang="less" scoped>
.anchor {
  padding-bottom: 550px;
  background-color: #EDEDED;
  .anchor-layout {
    width: 1180px;
    margin: 0 auto;
    padding-top: 95px;
    margin-bottom: 44px;
    position: relative;
    .anchor-search {
      height: 134px;
      width: 100%;
      position: absolute;
      top: -69px;
      border-radius: 10px;
      background-color: #ffffff;
      display: flex;
      align-items: center;
      box-shadow:0px 0px 51px 0px rgba(66,19,8,0.06);
      .el-input {
        width: 298px;
        /deep/.el-input__inner {
          height: 59px;
          line-height: 59px;
          background-color: #F4F4F4;
          border: 1px solid #EDEDED;
          text-align: center;
          font-size: 16px;
          color: #666666;
        }
      }
      .el-button {
        padding: 19.5px 91px;
        font-size: 18px;
        color: #ffffff;
        background-color: #E24118;
        border-color: #E24118;
      }
    }
    .anchor-banner {
      height: 189px;
      border-radius: 10px;
      background: color(#ffffff);
      padding: 0 50px 0 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .anchor-main {
      display: flex;
      .anchor-main-atricle {
        width: 900px;
        padding: 18px 22px 10px 28px;
        background-color: #ffffff;
        border: 1px solid #EDEDED;
        border-radius: 10px;
        margin-right: 20px;
        box-sizing: border-box;
        /deep/.list-banner {
          .list-banner-haed h3::after {
            display: none;
          }
          .el-button.list-banner-more {
            color: #E24118;
            border-color: #E24118;
            margin-bottom: 30px;
          }
          .el-button.list-banner-more:hover, .el-button.list-banner-more:focus {
            background-color: rgba(226,65,24,0.1)
          }
        }
      }
      .anchor-main-aside {
        flex-basis: 260px;
        .attend-adver {
          height: 147px;
          background: url('~assets/img/anchor/chaguakao.png') no-repeat center;
          background-size: cover;
          margin-bottom: 20px;
          border-radius: 9px;
        }
        .anchored-adver {
          height: 195px;
          background: url('~assets/img/anchor/attend.png') no-repeat center;
          background-size: cover;
          border-radius: 9px;
        }
      }
    }
  }
  .anchor-introduce {
    height: 420px;
    background: url(~assets/img/anchor/introduce.png);
    color: #ffffff;
    padding-top: 120px;
    box-sizing: border-box;
    h1 {
      font-size: 30px;
      text-align: center;
      margin-bottom: 40px;
    }
    p {
      width: 867px;
      margin: 0 auto;
      font-size: 16px;
      line-height: 24px;
    }
  }
  /deep/.anchor-result.el-dialog {
    border-radius: 4px;
    .el-dialog__header {
      display: none;
    }
    .el-dialog__body {
      height: 603px;
      padding: 0;
      .result-box {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding-top: 228px;
        position: relative;
        &.anchor-normal {
          background: url(~assets/img/anchor/normal.png) no-repeat center;
          background-size: cover;
        }
        &.anchor-warn {
          background: url(~assets/img/anchor/warn.png) no-repeat center;
          background-size: cover;
        }
        &.anchor-danger {
          background: url(~assets/img/anchor/danger.png) no-repeat center;
          background-size: cover;
        }
        .result-content {
          padding-top: 47px;
          padding-left: 33px;
          padding-right: 33px;
          h1 {
            color: #ffffff;
            font-size: 24px;
            line-height: 1;
            margin-bottom: 16px;
          }
          p {
            width: 315px;
            text-align: left;
            color: #FCFF00;
            >.anchor-normal {
              color: #CAE1FF;
            }
            >.anchor-warn {
              color: #FFE2DB;
            }
            >.anchor-danger {
              color: #FFE2DB;
            }
          }
          .qr-code {
            margin-top: 35px;
            display: flex;
            flex-direction: column;
            align-items: center;
            >img {
              width: 140px;
              height: 140px;
              border-radius: 6px;
              margin-bottom: 10px;
            }
            >p {
              font-size: 16px;
              color: #ffffff;
              text-align: center;
            }
          }
        }
        .close-btn {
          color: #ffffff;
          font-size: 29px;
          cursor: pointer;
          position: absolute;
          bottom: -58px;
          transform: translateX(-50%);
        }
      }
    }
  }
}
</style>

