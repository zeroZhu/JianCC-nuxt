/*
 * @Author: Zero 
 * @Date: 2019-02-28 09:05:20 
 * @Last Modified by: Zero
 * @Last Modified time: 2019-03-11 13:29:24
 */
<template>
  <div class="project-list">
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
              <label class="screen-item--label">项目类别：</label>
              <div class="screen-item--content">
                <span v-for="item in projectTypes" 
                :key="item.id"
                :class="{'active':projectType==item.id}"
                @click="selectHandler('type',item.id)">{{item.label}}</span>
              </div>
            </div>
            <div class="screen-item">
              <label class="screen-item--label">省份地区：</label>
              <div class="screen-item--content">
                <span :class="{'active':projectArea==0}">全国</span>
                <span>省份</span>
                <span>市</span>
              </div>
            </div>
          </div>
        </panel-component>
        <!-- 筛选结果 -->
        <panel-component class="list-result">
          <h4 class="header" slot="header">
            <span>建查查为您找到 <i style="color:#ed2221">1,000+</i> 项目</span>
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
                <router-link tag="h4" to="/project/detail">房山区长沟镇新型城镇化建设北部浅山区定向安置房项目(暨北京基金小镇定向安置房)</router-link>
                <p>
                  建设单位：工业和信息化部计算机与微电子发展研究中心（中国软件评测中心）
                </p>
                <p>
                  <span>项目编号：1101051711060101</span>
                  <span>项目类别：<i class="blue">房屋建筑工程</i></span>
                </p>
                <p class="position">
                  <span class="blue"><i></i> 江苏省-淮安市-清河区</span>
                </p>
              </div>
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
        <div style="height: 225px;border-radius: 4px;background: #ffffff;margin-bottom: 20px;"></div>
        <div style="height: 225px;border-radius: 4px;background: #ffffff;margin-bottom: 20px;"></div>
        <!-- 同地区公司 -->
        <panel-component class="nearby-list" style="margin-bottom:20px">
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
      // 筛选配置
      projectTypes: [
        { id: 0,label: "全部" },
        { id: 1,label: "房屋建筑工程" },
        { id: 2,label: "市政工程" },
        { id: 3,label: "其他" }
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

      projectType: 0,  // 资质类型
      projectArea: 0,  // 省份地区

      sorts: [
        { id: 1,label: "历史业绩" },
        { id: 2,label: "注册人数" },
      ],

      sortIndex: 0,  // 列表排序指标
    };
  },
  methods: {
    resetHandler() {
      this.projectType = 0;  // 项目类型
      this.projectArea = 0;  // 省份地区
    },
    selectHandler(t,v) {
      t=='size'?this.projectArea = v: this.projectType = v;
      this.queryHandler();
    },
    queryHandler() {
      let {projectType, projectArea} = this;
      let params = {
        projectType, projectArea 
      };
    },
    sortSelect(v) {
      v == this.sortIndex? this.sortIndex = -v: this.sortIndex = v;
    }
  }
};
</script>

