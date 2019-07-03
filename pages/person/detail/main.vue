<template>
  <div class="detail-main">
    <div class="detail-main-article">
      <panel-tab-component :titleConfig="this.titleConfig" >
        <div class="detail-content">
          <!-- 从业轨迹 -->
          <div class="panel-tab-item">
            <h3>从业轨迹</h3>
            <div class="content-item">
              <h4>从业轨迹</h4>
              <track-time-component :data="careerTrack"></track-time-component>
            </div>
          </div>
          <!-- 注册证书 -->
          <div class="panel-tab-item">
            <h3>注册证书</h3>
            <certificate-component class="mt20"></certificate-component>
            <certificate-component class="mt20"></certificate-component>
          </div>
          <!-- 非注册证书 -->
          <div class="panel-tab-item">
            <h3>非注册证书</h3>
            <div class="content-item">
              <h4>安全生产考核合格证书 </h4>
              <certificate-component :type="0"></certificate-component>
              <certificate-component :type="0" class="mt20"></certificate-component>
            </div>
          </div>
          <!-- 工程业绩 -->
          <div class="panel-tab-item">
            <h3>工程业绩</h3>
            <div class="content-item">
              <h4>业绩概览</h4>
              <div class="antv">
                <div class="antv-item">
                  <div class="antv-overivew"></div>
                  <p>业绩分布图</p>
                </div>
                <div class="antv-item">
                  <div class="antv-split"></div>
                  <p>项目类型占比图</p>
                </div>
              </div>
            </div>
            <div class="content-item">
              <h4>工程业绩 <span class="count">90</span> </h4>
              <el-table 
                border stripe
                :data="tableData"
                >
                <el-table-column
                  type="index"
                  align="center">
                </el-table-column>
                <el-table-column
                  prop="certCode"
                  label="资质证书号"
                  align="center"></el-table-column>
                <el-table-column
                  prop="name"
                  label="资质名称"
                  align="center"
                  width="300px"></el-table-column>
                <el-table-column
                  prop="organs"
                  label="发证机关"
                  align="center"></el-table-column>
                <el-table-column
                  prop="operate"
                  label="操作"
                  align="center">
                  <el-button type="text">详情</el-button>
                  </el-table-column>
              </el-table>
            </div>
          </div>
          <!-- 信用行为 -->
          <div class="panel-tab-item">
            <h3>信用行为</h3>
            <div class="content-item tc">
              <h4>信用行为</h4>
              <img :src="credit.good" alt="">
            </div>
          </div>
        </div>
      </panel-tab-component>
    </div>
    <div class="detail-main-aside">
      <div class="adver300-200"></div>
      <div class="address-box">
        <div class="header">企业地址</div>
        <!-- <baidu-map class="content"   :center="center" :zoom="zoom" @ready="handler">
          <bm-marker :position="{lng: center.lng, lat: center.lat}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
          </bm-marker>
        </baidu-map> -->
        <p class="desc">合肥市高新区创新大道2800号创新产业园二期J1号楼C座6层601室</p>
      </div>
      <panel-component class="nearby-list mt20">
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
</template>

<script>
export default {
  name: "detailMain",
  data() {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3,
      titleConfig: [
        {id:"1", label:"从业轨迹"},
        {id:"2", label:"注册证书"},
        {id:"3", label:"非注册证书"},
        {id:"4", label:"工程业绩"},
        {id:"5", label:"信用行为"}
      ],
      careerTrack: [
        {label: "一级注册建造师", list: [
          {companyName:"中铁四局集团第二工程有限公司", startTime: "2016-12-17", endTime: "2016-12-17"},
          {companyName:"中铁四局集团第二工程有限公司", startTime: "2016-12-17", endTime: "2016-12-17"},
          {companyName:"中铁四局集团第二工程有限公司", startTime: "2016-12-17", endTime: "2016-12-17"},
        ]},
        {label: "二级注册建造师", list: [
          {companyName:"中铁四局集团第二工程有限公司", startTime: "2016-12-17", endTime: "2016-12-17"},
          {companyName:"中铁四局集团第二工程有限公司", startTime: "2016-12-17", endTime: "2016-12-17"},
          {companyName:"中铁四局集团第二工程有限公司", startTime: "2016-12-17", endTime: "2016-12-17"},
        ]},
      ],
      tableData: [
        {certCode:'A152002846', name:'工程设计市政行业轨道交通工程专业甲级', organs:'安徽省建筑厅'},
        {certCode:'A152002846', name:'工程设计市政行业轨道交通工程专业甲级', organs:'安徽省建筑厅'},
        {certCode:'A152002846', name:'工程设计市政行业轨道交通工程专业甲级', organs:'安徽省建筑厅'},
        {certCode:'A152002846', name:'工程设计市政行业轨道交通工程专业甲级', organs:'安徽省建筑厅'},
        {certCode:'A152002846', name:'工程设计市政行业轨道交通工程专业甲级', organs:'安徽省建筑厅'},
        {certCode:'A152002846', name:'工程设计市政行业轨道交通工程专业甲级', organs:'安徽省建筑厅'}
      ],
      credit: {
        good: require("@/assets/img/credit-good.png"),
        bad: require("@/assets/img/credit-bad.png"),
      }
    };
  },
  methods: {
    handler() {
      this.center.lng = 117.141715;
      this.center.lat = 31.842579;
      this.zoom = 15;
    }
  }
};
</script>
