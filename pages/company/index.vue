/*
 * @Author: Zero
 * @Date: 2019-02-28 09:05:20 
 * @Last Modified by: Zero
 * @Last Modified time: 2019-07-02 17:28:53
 */
<template>
  <div class="enterprise-list">
    <div class="list-main">
      <div class="list-atricle">
        <!-- 筛选框 -->
        <panel-component class="list-screen">
          <h4 class="header" slot="header">
            <span>筛选</span> 
            <el-button @click="resetHandler" type="text" style="color: #0067ED">重置筛选条件</el-button>
          </h4>
          <div class="content" slot="content">
            <div class="screen-item">
              <label class="screen-item--label">资质类型：</label>
              <div class="screen-item--content">
                <span v-for="item in enterpriseTypes" 
                :key="item.id"
                :class="{'active':enterpriseType==item.id}"
                @click="selectHandler('type',item.id)">{{item.label}}</span>
              </div>
            </div>
            <div class="screen-item">
              <label class="screen-item--label">省份地区：</label>
              <div class="screen-item--content">
                <span :class="{'active':enterpriseArea==0}">全国</span>
                <span>省份</span>
                <span>市</span>
              </div>
            </div>
            <div class="screen-item">
              <label class="screen-item--label">注册人员：</label>
              <div class="screen-item--content">
                <span v-for="item in enterpriseSizes" 
                :key="item.id"
                :class="{'active':enterpriseSize==item.id}"
                @click="selectHandler('size',item.id)">{{item.label}}</span>
              </div>
            </div>
          </div>
        </panel-component>
        <!-- 筛选结果 -->
        <panel-component class="list-result">
          <h4 class="header" slot="header">
            <span>建查查为您找到 <i style="color:#ed2221">1,000+</i> 企业</span>
            <ul class="header-right">
              <li :class="{'active':sortIndex==0}" @click="sortIndex=0">默认</li>
              <li v-for="item in sorts" :key="item.id"
                :class="{'active':sortIndex==item.id||sortIndex==-item.id}"
                @click="sortSelect(item.id)">{{item.label}}<i class="iconfont" :class="{'icon-arrow_down':item.id==-sortIndex,'icon-arrow_up':item.id!=-sortIndex}"></i></li>
            </ul>
          </h4>
          <ul class="content" slot="content">
            <li class="result-item" v-for="i in 8" :key="i">
              <img  class="logo" src="@/assets/img/logo-enterprise.png" alt="">
              <div class="info">
                <router-link tag="h4" to="/enterprise/detail">中铁五局集团建筑工程有限责任公司余杭分公司</router-link>
                <p>
                  <span>统一社会信用代码 ：<em>91110000101132416J</em></span>
                  <span>法定代表人 ：<i>佩奇</i></span>
                </p>
                <p>
                  <span>资质项 ：<i class="blue">19</i>项</span>
                  <span>注册人员 ：<i class="blue">210</i>名</span>
                  <span>历史业绩 ：<i class="blue">310</i>个</span>
                </p>
                <p class="tags">
                  <span style="background: #ffefe5;color: #ff6000">建筑业资质</span>
                  <span style="background: #e7f4fd;color: #0067ED">勘察资质</span>
                </p>
              </div>
              <div class="area">安徽合肥</div>
              <div class="tips-qr"></div>
            </li>
          </ul>
        </panel-component>
        <!-- 分页 -->
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000"
          style="margin-top: 60px;">
        </el-pagination>
      </div>
      <div class="list-aside">
        <img class="adver300-255 mb14" :src="adver1" alt="">
        <img class="adver300-255 mb14" :src="adver2" alt="">
        <!-- 同地区公司 -->
        <panel-component class="nearby-list mb14">
          <h4 class="header" slot="header">
            <span>同地区公司</span>
          </h4>
          <ul class="content" slot="content">
            <li class="list-item" v-for="i in 5" :key="i">
              <img  class="logo" src="@/assets/img/logo-enterprise.png" alt="">
              <div class="info">
                <h4>中铁五局集团建筑工程有限责任公司余杭分公司</h4>
                <p class="tags">
                  <span style="background: #ffefe5;color: #ff6000">建筑业资质</span>
                  <span style="background: #e7f4fd;color: #0067ED">勘察资质</span>
                </p>
              </div>
            </li>
          </ul>
        </panel-component>
        <!-- 最近浏览 -->
        <panel-component class="nearby-list">
          <h4 class="header" slot="header">
            <span>最近浏览</span>
          </h4>
          <ul class="content" slot="content">
            <li class="list-item" v-for="i in 5" :key="i">
              <img  class="logo" src="@/assets/img/logo-enterprise.png" alt="">
              <div class="info">
                <h4>中铁五局集团建筑工程有限责任公司余杭分公司</h4>
                <p class="time">
                  28分钟前
                </p>
              </div>
            </li>
          </ul>
        </panel-component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "enterpriseList",
  data() {
    return {
      // 广告图
      adver1: require("@/assets/img/adver/enterprise-list.png"),
      adver2: require("@/assets/img/adver/personnel-list.png"),
      // 筛选配置
      enterpriseTypes: [
        { id: 0,label: "全部" },
        { id: 1,label: "建筑业企业" },
        { id: 2,label: "勘察企业" },
        { id: 3,label: "涉及企业" },
        { id: 4,label: "监理企业" },
      ],
      enterpriseSizes: [
        { id: 0,label: "全部" },
        { id: 1,label: "少于10人" },
        { id: 2,label: "10至50人" },
        { id: 3,label: "50至99人" },
        { id: 4,label: "100人及以上" }
      ],
      cities: [{
        value: 'Beijing',
        label: '北京'
      }, {
        value: 'Shanghai',
        label: '上海'
      }, {
        value: 'Nanjing',
        label: '南京'
      }, {
        value: 'Chengdu',
        label: '成都'
      }, {
        value: 'Shenzhen',
        label: '深圳'
      }, {
        value: 'Guangzhou',
        label: '广州'
      }],

      enterpriseType: 0,  // 资质类型
      enterpriseArea: 0,  // 省份地区
      enterpriseSize: 0,  // 注册人员

      sorts: [
        { id: 1,label: "历史业绩" },
        { id: 2,label: "注册人数" },
      ],

      sortIndex: 1,  // 列表排序指标
    };
  },
  methods: {
    resetHandler() {
      this.enterpriseType = 0;  // 资质类型
      this.enterpriseArea = 0;  // 省份地区
      this.enterpriseSize = 0;  // 注册人员
    },
    selectHandler(t,v) {
      t=='size'?this.enterpriseSize = v: this.enterpriseType = v;
      this.queryHandler();
    },
    queryHandler() {
      let {enterpriseType, enterpriseArea, enterpriseSize } = this;
      let params = {
        enterpriseType, enterpriseArea, enterpriseSize 
      };
    },
    sortSelect(v) {
      v == this.sortIndex? this.sortIndex = -v: this.sortIndex = v;
    }
  }
};
</script>

