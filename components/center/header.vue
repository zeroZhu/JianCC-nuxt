<template>
  <div class="personal-header">
    <div class="user">
      <img class="user-icon" :src="userImg" alt="">
      <div class="user-desc">
        <p class="name">{{nickName}}</p>
        <p class="company">暂无注册单位</p>
      </div>
    </div>
    <div class="button">
      <!-- <el-button>立即开通会员</el-button> -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      userImg: require('@/assets/img/personal/user.png')
    }
  },
  computed:{
    ...mapState({
      nickName: state => state.user.nickName
    })
  },
}
</script>

<style lang="less" scoped>
.personal-header {
  height: 180px;
  background:url("~assets/img/personal/header-bg.png");
  border-radius: 4px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  .user {
    display: flex;
    align-items: center;
    >.user-icon {
      width: 85px;
      height: 85px;
      border-radius: 50%;
      border: 3px solid #ffffff;
      margin-right: 20px;
      box-sizing: border-box;
    }
    >.user-desc {
      display: flex;
      flex-direction: column;
      text-align: left;
      color: #ffffff;
      .name {
        font-size: 20px;
        font-weight: bold;
        line-height: 1;
        margin-bottom: 15px;
      }
      .company {
        font-size: 14px;
        line-height: 1;
      }
    }
  }
  .button {
    display: flex;
    align-items: center;
    .el-button {
      padding: 14px 25px;
      color: #674C14;
      font-weight: bold;
      border-radius: 20px;
      background:linear-gradient(90deg,#FFEA59,#FCB53E);
      border-color: #FCB53E;
    }
    .el-button:active {
      border: none;
    }
  }
}
</style>

