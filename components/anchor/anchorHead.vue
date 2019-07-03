<template>
  <div class="anchor-head">
    <div class="anchor-head-content">
      <div class="anchor-head-top clearfix">
        <div class="anchor-head-logo clearfix">
          <img src="~assets/img/LOGO.png" alt=""/>
          <i></i>
          <span>查挂证</span>
        </div>
        <nav class="anchor-head-nav">
          <router-link to="/">查挂证</router-link><i class="split"></i>
          <router-link to="/building-news">建设头条</router-link><i class="split"></i>
          <router-link to="/industry-data">行业大数据</router-link><i class="split"></i>
          <router-link to="/knowledge-base">知识库</router-link><i class="split"></i>
          <el-dropdown v-if="token" placement="bottom">
            <span class="el-dropdown-link">
              <a>{{nickName}}</a><i style="color:#fff;" class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link to="/personal" tag="span">个人中心</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <span @click="logoutHandler">退出</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <a @click="openLogDialog" v-else >登录/注册</a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name:"anchorHead",
  components: {
    
  },
  data() {
    return{
      
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
    openLogDialog() {
      this.changeLoginVisible(true)
    },
    logoutHandler() {
      this.changeUser(null);
      this.$router.push({
        path: "/"
      })
    }
  },
  mounted() {}
}
</script>

<style lang="less" scoped>
.anchor-head {
  height: 560px;
  position: relative;
  background: url("~assets/img/anchor/bg-anchor.webp") no-repeat center;
  background-size: cover;
  .anchor-head-content {
    width: 1180px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 25px auto;
    .anchor-head-top {
      height: 31px;
      line-height: 31px;
      .anchor-head-logo {
        float: left;
        img {
          float: left;
        }
        i {
          width: 2px;
          height: 20px;
          float: left;
          background: #ffffff;
          margin: 0 17px;
          transform: translateY(5px);
        }
        span {
          float: left;
          font-size: 30px;
          color: #ffffff;
          transform: translateY(-1px);
        }
      }
      .anchor-head-nav {
        float: right;
        a {
          color: #FEFEFE;
          font-size: 16px;
          text-decoration: none;
          cursor: pointer;
        }
        .split {
          width: 1px;
          height: 14px;
          background: rgba(255, 255, 255, 1);
          margin: 0 20px;
          display: inline-block;
          transform: translateY(2px);
        }
      }
    }
  }
}
</style>