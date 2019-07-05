<template>
  <div class="detail-main">
    <div class="detail-main-article">
      <panel-tab-component :titleConfig="titleConfig" >
        <div class="detail-content">
          <!-- 基本信息 -->
          <div class="panel-tab-item">
            <h3>基本信息</h3>
            <detailInfo />
            <monomerInfo />
            <particUnit />
            <qualityApply />
          </div>
          <!-- 招投标信息 -->
          <div class="panel-tab-item">
            <h3>招投标信息</h3>
            <bidInfo/>
          </div>
          <!-- 合同备案 -->
          <div class="panel-tab-item">
            <h3>合同备案</h3>
            <contractInfo />
          </div>
          <!-- 施工图审查 -->
          <div class="panel-tab-item">
            <h3>施工图审查</h3>
            <workDrawInfo />
            <workDrawUnit />
            <workDrawPerson />
          </div>

          <!-- 施工许可 -->
          <div class="panel-tab-item">
            <h3>施工许可</h3>
            <constrPermitInfo />
          </div>
          <!-- 竣工备案 -->
          <div class="panel-tab-item">
            <h3>施工许可</h3>
            <div class="content-item">
              <h4>施工许可 <span class="count">90</span> </h4>
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
import detailInfo from "./components/basic/detailInfo.vue";
import monomerInfo from "./components/basic/monomerInfo.vue";
import particUnit from "./components/basic/particUnit.vue";
import qualityApply from "./components/basic/qualityApply.vue";
import bidInfo from "./components/bidInfo.vue";
import contractInfo from "./components/contractInfo.vue";
//workDrawInfo
import workDrawInfo from "./components/workDraw/workDrawInfo.vue";
import workDrawUnit from "./components/workDraw/workDrawUnit.vue";
import workDrawPerson from "./components/workDraw/workDrawPerson.vue";
//constrPermit
import constrPermitInfo from "./components/constrPermit/constrPermitInfo.vue";
export default {
  name: "detailMain",
  components:{
    detailInfo, monomerInfo, particUnit, qualityApply,
    bidInfo, contractInfo,
    workDrawInfo, workDrawUnit, workDrawPerson,
    constrPermitInfo 
  },
  data() {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3,
      titleConfig: [
        {id:"Basic", label:"基本信息", children: [
          {id:"detailInfo", label:"详细信息"},
          {id:"monomerInfo", label:"单体信息"},
          {id:"particUnit", label:"参与单位"}
        ]},
        {id:"Bidding", label:"招投标信息", children: [
          {id:"bidding", label:"招投标信息"}
        ]},
        {id:"WorkDraw", label:"施工图审查", children: [
          {id:"workDrawInfo", label:"施工图审查信息"},
          {id:"workDrawUnit", label:"施工图审查相关单位"},
          {id:"workDrawPerson", label:"施工图审查相关人员"}
        ]},
        {id:"ContractFiling", label:"合同备案", children: [
          {id:"concatFill", label:"详细信息"}
        ]},
        {id:"ConstrPermit", label:"施工许可", children: [
          {id:"constrPermitInfo", label:"施工许可信息"},
          {id:"constructionPermit", label:"质量安全监督信息"},
          {id:"scenePeoson", label:"现场人员"},
          {id:"sceneAduit", label:"现场检查"},
        ]},
        {id:"Accept", label:"竣工备案", children: [
          {id:"record", label:"竣工验收"},
          {id:"acceptRecord", label:"竣工验收备案"}
        ]}
      ],
      tableData: [
        {certCode:'A152002846', name:'工程设计市政行业轨道交通工程专业甲级', organs:'安徽省建筑厅'},
        {certCode:'A152002846', name:'工程设计市政行业轨道交通工程专业甲级', organs:'安徽省建筑厅'},
        {certCode:'A152002846', name:'工程设计市政行业轨道交通工程专业甲级', organs:'安徽省建筑厅'},
        {certCode:'A152002846', name:'工程设计市政行业轨道交通工程专业甲级', organs:'安徽省建筑厅'},
        {certCode:'A152002846', name:'工程设计市政行业轨道交通工程专业甲级', organs:'安徽省建筑厅'},
        {certCode:'A152002846', name:'工程设计市政行业轨道交通工程专业甲级', organs:'安徽省建筑厅'}
      ],
      basic:[
        {label:"项目名称",value:"单位名称"},
        {label:"省级项目编号",value:"编号"},
        {label:"建设单位",value:"主要负责人"},
        {label:"建设单位统一信用代码",value:"单位地址"},
        {label:"项目分类",value:"经济类型"},
        {label:"建设性质",value:"许可范围"},
        {label:"总面积",value:"有效期起始"},
        {label:"总投资",value:"有效期截止"},
        {label:"立项级别",value:"发证日期"},
        {label:"立项文号",value:"发证机关"},
        {label:"其他信息",value:"工程概况：1号单体中央党史研究室骚子营4号院小区节能综合改造工程,建筑面积为2767.000平方米；高度为2.700米；地上层数为6.0层；地下层数为0层；基础类型为F01 墙下条形基础；结构类型为S01 砌体结构;03 实心砖； 建设单位提供的文件和资料符合程序审查要求。对施工图设计文件中有关地基基础和主体结构安全，以及违反工程建设标准强制性条文等问题，原设计单位已进行了修改。经过对修改后的设计文件的复审，本工程施工图设计文件符合工程建设强制性标准要求，地基基础和主体结构安全。 施工图设计文件的技术性审查合格。"},
      ]
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

