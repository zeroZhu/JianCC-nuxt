<template>
  <header class="header">
    <div class="header-main">
      <div class="header-main-search">
        <router-link to="/">
          <img height="30px" style="margin-right: 15px;" src="@/assets/img/logo-black.png" alt="">
        </router-link>
        <img height="18px" src="@/assets/img/slogan.png" alt="">
      </div>
      <nav class="header-main-nav">
        <router-link class="nav-item" to="/">查挂证</router-link><i class="split"></i>
        <router-link class="nav-item" to="/building-news">建设头条</router-link><i class="split"></i>
        <router-link class="nav-item" to="/industry-data">行业大数据</router-link><i class="split"></i>
        <router-link class="nav-item" to="/knowledge-base">知识库</router-link><i class="split"></i>
        <el-dropdown v-if="token" placement="bottom" >
          <span class="el-dropdown-link">
            <a  class="nav-item" style="margin-right:0">{{nickName}}<i class="el-icon-arrow-down el-icon--right"></i></a>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <router-link to="/personal" tag="span" >个人中心</router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <span @click="logoutHandler">退出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <li @click="openLogDialog" class="nav-item" v-else>登录/注册</li>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: "headerComponent",
  data() {
    return {
      searchTypes:[
        { key: 0, label: '查企业', name: 'enterpriseList' },
        { key: 1, label: '查人员', name: 'personnelList' },
        { key: 2, label: '查项目', name: 'projectList'  }
      ],
      placeholders: ["请输入企业名称，如:武隆建筑","请输入人员名称，如:何志恒","请输入项目名称，如:建查查"],
      searchType: 0,
      keyWord: '',
    };
  },
  computed:{
    ...mapState({
      token: state => state.user.token,
      nickName: state => state.user.nickName
    })
  },
  methods:{
    ...mapMutations([
      "changeLoginVisible", "changeUser"
    ]),
    quertHandler(){
      this.$message({
        type: "error",
        message: "该功能尚未开放，敬请期待！",
        center: true,
        duration: 1500
      })
      // let params = {
      //   type: this.searchType,
      //   keyWord: this.keyWord
      // }
      // let name = this.searchTypes[this.searchType].name;
      // this.$router.push({name ,params});
    },
    openLogDialog() {
      this.changeLoginVisible(true)
    },
    logoutHandler() {
      this.changeUser(null);
      this.$router.push({
        path: "/"
      })
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  background: #ffffff;
  border-bottom: 1px solid #eaedf1;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  .header-main {
    width: 1180px;
    margin: 0 auto;
    height: 80px;
    display: flex;
    justify-content: space-between;
    .header-main-search {
      display: flex;
      align-items: center;
      .search-input {
        display: flex;
        flex-direction: column;
        .type {
          display: flex;
          li {
            padding: 3px 8px;
            font-size: #222222;
            cursor: pointer;
            border-top-left-radius: 2px;
            border-top-right-radius: 2px;
            &.active {
              background: #0067ED;
              color: #ffffff;
            }
          }
        }
        .el-input{
          /deep/ .el-input__inner {
            width: 280px;
            height: 30px;
            line-height: 30px;
            font-size: 12px;
            border: 1px solid #0067ED;
            border-radius: 0 0 0 2px;
          }
          /deep/ .el-input-group__append {
            background-color: transparent;
            border-color: transparent;
            .el-button--primary {
              color: #ffffff;
              background-color: #0067ED;
              border-color: #0067ED;
              font-size: 12px;
              padding: 9px 15px 9px 15px;
              float: left;
              border-top-left-radius: 0;
              border-bottom-left-radius: 0;
            }
          }
        } 
      }

    }
    .header-main-nav {
      display: flex;
      align-items: center;
      .nav-item {
        font-size: 16px;
        color: #222222;
        cursor: pointer;
        margin: 0 20px;
      }
      .nav-item:hover {
        color: #0067ED;
      }
      .split {
        width: 1px;
        height: 15px;
        background: #eaedf1;
      }
    }
  }
}
</style>

