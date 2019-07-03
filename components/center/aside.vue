<template>
  <div class="personal-aside">
    <div v-for="group in data" :key="group.path" class="aside-group">
      <h3 class="aside-group-title">
        <i class="iconfont" :class="group.icon"></i>
        {{group.title}}
      </h3>
      <ul>
        <router-link class="aside-group-item" v-for="item in group.children" :key="item.path" 
          tag="li" :to="'/personal/'+group.path+'-'+item.path" 
          :class="{'active':asideIndex==item.path}">
          {{item.name}}
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      asideIndex:'setting',
      data: [
        {
          title: "个人中心",
          path: "account",
          icon: "icon-gerenzhongxin",
          children: [
            {
              name: "账户设置",
              path: "setting"
            },
            {
              name: "发票管理",
              path: "invoice-manage"
            },
            {
              name: "我的消息",
              path: "my-message"
            }
          ]
        },
        {
          title: "我的关注",
          path: "attention",
          icon: "icon-guanzhu",
          children: [
            {
              name: "关注动态",
              path: "trends"
            },
            {
              name: "关注列表",
              path: "list"
            }
          ]
        },
        {
          title: "订单中心",
          path: "order-center",
          icon: "icon-dingdan",
          children: [
            {
              name: "我的订单",
              path: "my-order"
            }
          ]
        },
        {
          title: "会员中心",
          path: "member-center",
          icon: "icon-huiyuan",
          children: [
            {
              name: "我的会员",
              path: "my-member"
            },
            {
              name: "优惠卷",
              path: "my-coupon"
            }
          ]
        },
        {
          title: "证书管理",
          path: "credentials-manage",
          icon: "icon-zhengshu",
          children: [
            {
              name: "我的证书",
              path: "my-credentials"
            }
          ]
        }
      ]
    };
  },
  mounted() {
    this.init();
  },
  watch: {
    $route: {
      // 监听路由动态改变 asideIndex
      handler(to, form){
        if(to.path.indexOf('/personal')==0) {
          this.asideIndex = to.path.replace('/personal/','').split('-')[1];
        }
      },
      deep: true
    }
  },
  methods: {
    init(){
      // 获取asideIndex
      let path = this.$route.fullPath;
      if(path.indexOf('/personal')==0) {
        this.asideIndex = path.replace('/personal/','').split('-')[1];
      }
    },
  }
};
</script>

<style lang="less" scoped>
.personal-aside {
  width: 180px;
  .aside-group {
    padding-top: 15px;
    background-color: #ffffff;
    border-bottom: 1px solid #EAEDF1;
    .aside-group-title, .aside-group-item {
      padding-left: 58px;
      text-align: left;
      font-size: 14px;
      height: 44px;
      line-height: 44px;
      cursor: pointer;
    }
    .aside-group-title {
      color: #222222;
      position: relative;
      .iconfont {
        color: #0067ED;
        font-size: 20px;
        position: absolute;
        top: 0px;
        left: 30px;
      }
    }
    .aside-group-item {
      color: #666666;
      &.active {
        color: #0067ED;
        background-color: #F8F9FB;
      }
    }
    .aside-group-item:hover, .aside-group-item:focus {
      color: #0067ED;
      background-color: #F8F9FB;
    }
  }
}
</style>


