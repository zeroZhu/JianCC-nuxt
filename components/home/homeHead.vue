<template>
  <div class="home-head">
    <div class="home-head-content">
      <div class="home-head-top clearfix">
        <img class="home-head-logo" src="~assets/img/LOGO.png" alt=""/>
        <nav class="home-head-nav">
          <router-link class="hot" to="home">查挂靠<i></i></router-link>
          <router-link to="home">建设头条<i></i></router-link>
          <router-link to="home">行业大数据</router-link><i></i>
          <router-link to="home">知识库</router-link><i></i>
          <router-link to="home">登陆/注册</router-link>
        </nav>
      </div>
      <h1 class="home-head-title">
        建筑业数据服务专家
      </h1>
      <div class="home-head-search">
        <div class="search-type">
          <span v-for="item in searchTypes" 
            :class="{'active':searchType==item.key}" 
            :key="item.key" 
            @click="searchType=item.key"
          >{{item.label}}</span>
        </div>
        <div class="search-input">
          <el-input v-model="keyWord" :placeholder="placeholders[searchType]">
            <el-button slot="append" type="primary" @click="quertHandler()" >查一查</el-button>
          </el-input>
        </div>
        <div class="search-hot clearfix">
          <h5>热门搜索</h5>
          <ul class="clearfix" >
            <router-link v-for="item in hots" :key="item.id" tag="li" :to="item.url">{{item.label}}</router-link>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"homeHead",
  components: {
    
  },
  data() {
    return{
      searchTypes:[
        { key: 0, label: '查企业', path: '/company' },
        { key: 1, label: '查人员', path: '/person' },
        { key: 2, label: '查项目', path: '/project'  },
        { key: 3, label: '查挂靠', path: '/project'  }
      ],
      searchType: 0,
      keyWord: '',
      placeholders:[
        "请输入企业名称关键字/企业统一社会信用代码","请输入人员名称，如：何志恒","请输入项目名称，如：建查查"
      ],
      hots:[
          {id:0,url:"www.baidi.com",label:"今日头条"},
          {id:1,url:"www.baidi.com",label:"网易新闻"},
          {id:2,url:"www.baidi.com",label:"支付宝"},
          {id:3,url:"www.baidi.com",label:"权健集团"},
          {id:4,url:"www.baidi.com",label:"嘉行传媒"},
          {id:5,url:"www.baidi.com",label:"锤子数码"},
          {id:6,url:"www.baidi.com",label:"深圳瀚海基因"},
          {id:7,url:"www.baidi.com",label:"今日头条"},
          {id:8,url:"www.baidi.com",label:"网易新闻"},
          {id:9,url:"www.baidi.com",label:"支付宝"},
          {id:10,url:"www.baidi.com",label:"权健集团"},
          {id:11,url:"www.baidi.com",label:"嘉行传媒"},
          {id:12,url:"www.baidi.com",label:"锤子数码"},
          {id:13,url:"www.baidi.com",label:"深圳瀚海基因"}
        ]
    };
  },
  methods:{
    quertHandler(){
      let params = {
        type: this.searchType,
        keyWord: this.keyWord
      }
      let path = this.searchTypes[this.searchType].path;
      this.$router.push({path ,params});
    }
  }
}
</script>

<style lang="less" scoped>
.home-head {
  height: 500px;
  position: relative;
  background: url("~assets/img/home/bg-home.png") no-repeat center;
  background-size: cover;
  .home-head-content {
    width: 1180px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 25px auto;
    .home-head-top {
      line-height: 31px;
      .home-head-logo {
        float: left;
      }
      .home-head-nav {
        float: right;
        a {
          color: #FEFEFE;
          font-size: 16px;
          text-decoration: none;
        }
        i {
          width: 1px;
          height: 14px;
          background: rgba(255, 255, 255, 1);
          margin: 0 20px;
          display: inline-block;
          transform: translateY(2px);
        }
      }
    }
    .home-head-title {
      margin: 75px auto 0;
      font-size: 45px;
      line-height: 1;
      color: rgba(255, 255, 255, 1);
      font-weight: 400;
      text-align: center;
      letter-spacing: 5px;
    }
    .home-head-search {
      margin-top: 50px;
      .search-type {
        margin: 0 auto;
        text-align: center;
        span {
          width: 77px;
          height: 35px;
          line-height: 30px;
          text-align: center;
          display: inline-block;
          font-size: 16px;
          color: #A8C6FF;
          margin-right: 25px;
          cursor: pointer;
          &.active {
            color: #0067ED;
            background: url("~assets/img/tooltip.png");
          }
        }
      }
      .search-input {
        display: flex;
        justify-content: center;
        margin-top: 15px;
        .el-input {
          width:720px;
          height:50px;
          /deep/ .el-input__inner {
            height: 100%;
            font-size: 16px;
            border: none;
          }
          /deep/ .el-input-group__append {
            background-color: transparent;
            border-color: transparent;
            .el-button--primary {
              color: #fff;
              background-color: #FF9812;
              border-color: #FF9812;
              font-size: 18px;
              padding: 16.5px 32px;
              border-top-left-radius: 0;
              border-bottom-left-radius: 0;
            }
          }
        }
      }
      .search-hot {
        width: 720px;
        margin: 35px auto 0;
        text-align: left;
        h5 {
          width: 52px;
          height: 52px;
          padding: 6px 11px;
          box-sizing: border-box;
          border-radius: 4px;
          border: 1px solid #bee3ff;
          font-size: 14px;
          color: #ffffff;
          font-weight: 400;
          margin-left: 10px;
          float: left;
          background-color: rgba(255, 255, 255, 0.15)
        }
        ul {
          width: 615px;
          padding: 0px 10px 0px 20px;
          float: left;
          li{
            float: left;
            color: #A8C6FF;
            font-size: 14px;
            margin-right: 17px;
            line-height: 26px;
            cursor: pointer;
          };
          li:hover{
            color: #ffffff;
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>