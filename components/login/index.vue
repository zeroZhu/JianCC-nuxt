<template>
  <el-dialog
    custom-class="login-dialog"
    :show-close="false"
    :visible="$store.state.login.visible"
    width="410px"
    @open="openCallback"
    >
    <el-tabs v-model="tabsIndex" >
      <el-tab-pane label="极速登录" name="rapidl">
        <rapidlLogin ref="rapidlLogin" @loginCallback="loginCallback" />
      </el-tab-pane>
      <el-tab-pane label="验证码登录" name="code">
        <codeLogin ref="codeLogin" @loginCallback="loginCallback" />
      </el-tab-pane>
      <el-tab-pane label="密码登录" name="password">
        <passwordLogin ref="passwordLogin" @loginCallback="loginCallback" />
      </el-tab-pane>
    </el-tabs>
    <i class="close-btn el-icon-circle-close-outline" @click="closeDialog" ></i>
  </el-dialog>
</template>

<script>
import rapidlLogin from "./rapidlLogin.vue";
import codeLogin from "./codeLogin.vue";
import passwordLogin from "./passwordLogin.vue";

import { mapMutations } from 'vuex';

export default {
  name: "loginDialog",
  components: {
    rapidlLogin, codeLogin, passwordLogin
  },
  data() {
    return {
      tabsIndex: "rapidl"
    };
  },
  methods: {
    ...mapMutations([
      "changeLoginVisible", "changeUser"
    ]),
    closeDialog() {
      this.changeLoginVisible(false);
      this.closeCallback();
    },
    loginCallback(v) {
      this.changeUser(v);
      this.changeLoginVisible(false);
      this.closeCallback();
    },
    closeCallback() {
      this.$refs['codeLogin'].resetHandler();
      this.$refs['rapidlLogin'].resetHandler();
      this.$refs['passwordLogin'].resetHandler();
    },
    openCallback() {
      this.$nextTick(()=> {
        this.$refs['rapidlLogin'].getQRcode();
      })
    }
  },
  mounted() {
  }
}
</script>

<style lang="less" scoped>
/deep/.login-dialog {
  border-radius: 6px;
  .el-dialog__header {
    display: none;
  }
  .el-dialog__body {
    height: 420px;
    padding: 0;
  }
  .el-tabs {
    .el-tabs__header {
      margin: 0;
      .el-tabs__nav {
        margin: 0 61px;
        .el-tabs__active-bar {
          background: #0067ED;
        }
        .el-tabs__item {
          height: 65px;
          line-height: 70px;
          font-size: 16px;
          color: #222222;
          &.is-active {
            color: #0067ED;
          }
        }
      }
    }
  }
  .close-btn {
    color: #ffffff;
    font-size: 29px;
    cursor: pointer;
    position: absolute;
    bottom: -58px;
    transform: translateX(-50%)
  }
}
</style>


