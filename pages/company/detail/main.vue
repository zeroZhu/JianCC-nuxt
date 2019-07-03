<template>
  <div class="detail-main">
    <div class="detail-main-article">
      <panel-tab-component :titleConfig="titleConfig">
        <div class="detail-content">
          <!-- 资质资格 -->
          <div class="panel-tab-item">
            <h3>资质资格</h3>
            <div class="content-item">
              <h4>建筑业资质 <span class="count">90</span></h4>
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
              <el-pagination
                class="mt20 tl"
                background small
                layout="pager "
                :total="1000">
              </el-pagination>
            </div>
            <div class="content-item">
              <h4>设计资质 <span class="count">90</span></h4>
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
              <el-pagination
                class="mt20 tl"
                background small
                layout="pager "
                :total="1000">
              </el-pagination>
            </div>
            <div class="content-item">
              <h4>安全生产许可证 <span class="source">数据来源：江西住房和城乡建设厅</span></h4>
              <form-table-component></form-table-component>
            </div>
          </div>
          <!-- 注册人员 -->
          <div class="panel-tab-item">
            <h3>注册人员</h3>
            <div class="content-item">
              <h4>注册人员概览 <span class="count">90</span></h4>
              <div class="antv">
                <div class="antv-item">
                  <div class="antv-overivew">
                    <!-- <nightingale-chart id="personOverivew1" :data="personnel.registered.data"  :legend="personnel.registered.title"></nightingale-chart> -->
                  </div>
                    <p>人员占比</p>
                </div>
                
                <div class="antv-item">
                  <div class="antv-overivew">
                    <!-- <bar-chart id="personOverivew2" :data="personnel.registered.data"  :xAxis="personnel.registered.title"></bar-chart> -->
                  </div>
                  <p>人员绝对值</p>
                </div>
              </div>
            </div>
            <div class="content-item">
              <h4>注册建筑师 <span class="count">90</span></h4>
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
              <el-pagination
                class="mt20 tl"
                background small
                layout="pager "
                :total="1000">
              </el-pagination>
            </div>
            <div class="content-item">
              <h4>勘察设计注册工程师 <span class="count">90</span></h4>
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
              <el-pagination
                class="mt20 tl"
                background small
                layout="pager "
                :total="1000">
              </el-pagination>
            </div>
          </div>
          <!-- 非注册人员 -->
          <div class="panel-tab-item">
            <h3>非注册人员</h3>
            <div class="content-item">
              <h4>安全生产管理人员 <span class="count">90</span></h4>
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
              <el-pagination
                class="mt20 tl"
                background small
                layout="pager "
                :total="1000">
              </el-pagination>
            </div>
            <div class="content-item">
              <h4>施工现场专业人员 <span class="count">90</span></h4>
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
              <el-pagination
                class="mt20 tl"
                background small
                layout="pager "
                :total="1000">
              </el-pagination>
            </div>
            <div class="content-item">
              <h4>职称人员 <span class="count">90</span></h4>
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
              <el-pagination
                class="mt20 tl"
                background small
                layout="pager "
                :total="1000">
              </el-pagination>
            </div>
            <div class="content-item">
              <h4>施工现场专业人员 <span class="count">90</span></h4>
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
              <el-pagination
                class="mt20 tl"
                background small
                layout="pager "
                :total="1000">
              </el-pagination>
            </div>
          </div>
          <!-- 工程业绩 -->
          <div class="panel-tab-item">
            <h3>工程业绩</h3>
            <div class="content-item">
              <h4>业绩概览</h4>
              <div class="antv">
                <div class="antv-item">
                  <div class="antv-overivew">
                    <!-- <map-chart id="achievementSplit" ></map-chart> -->
                  </div>
                  <p>业绩分布图</p>
                </div>
                <div class="antv-item">
                  <div class="antv-overivew">
                    <!-- <pie-chart id="achievementView" :data="achievement.proportionData"  ></pie-chart> -->
                  </div>
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
              <el-pagination
                class="mt20 tl"
                background small
                layout="pager "
                :total="1000">
              </el-pagination>
            </div>
          </div>
          <!-- 公司背景 -->
          <div class="panel-tab-item">
            <h3>公司背景</h3>
            <div class="content-item">
              <h4>工商信息</h4>
              <form-table-component></form-table-component>
            </div>
            <div class="content-item">
              <h4>分支机构 <span class="count">90</span> </h4>
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
            <div class="content-item">
              <h4>信用行为</h4>
            </div>
          </div>
        </div>
      </panel-tab-component>
    </div>
    <div class="detail-main-aside">
      <div class="adver300-200"></div>
      <!-- <div class="address-box">
        <div class="header">企业地址</div>
        <baidu-map class="content"   :center="center" :zoom="zoom" @ready="handler">
          <bm-marker :position="{lng: center.lng, lat: center.lat}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
          </bm-marker>
        </baidu-map>
        <p class="desc">合肥市高新区创新大道2800号创新产业园二期J1号楼C座6层601室</p>
      </div> -->
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
        {id:"0", label:"资质资格",children:[
          {id:"0", label:"建筑业资质",count:90},
          {id:"1", label:"设计资质",count:90},
          {id:"2", label:"建筑业资质",count:90}
        ]},
        {id:"1", label:"企业人员",children:[
          {id:"0", label:"注册人员概览",count:90},
          {id:"1", label:"注册建筑师",count:90},
          {id:"2", label:"勘察设计注册工程师",count:90},
          {id:"3", label:"安全生产管理人员",count:90},
          {id:"4", label:"施工现场专业人员",count:90},
          {id:"5", label:"职称人员",count:90},
          {id:"6", label:"特种作业人员",count:90}
        ]},
        {id:"2", label:"工程业绩", children:[
          {id:"0", label:"业绩概览",count:90},
          {id:"1", label:"业务关系穿透图",count:90},
          {id:"2", label:"工程业绩",count:90}
        ]},
        {id:"3", label:"工商信息",children:[
          {id:"0", label:"工商信息",count:90},
          {id:"1", label:"分支机构",count:90}
        ]},
        {id:"4", label:"信用行为", children:[
          {id:"0", label:"信用行为"}
        ]}
      ],
      personnel: {
        registered: {
          title: [
            "注册房地产估价师",
            "注册造价工程师",
            "注册监理工程师",
            "注册建造师",
            "勘察设计注册工程师",
            "注册建筑师"
          ],
          data: [120, 200, 150, 80, 70, 110],
        }
      },
      achievement: {
        proportionData:[
          {name:"业绩A", value:"80"},
          {name:"业绩B", value:"102"},
          {name:"业绩C", value:"110"},
          {name:"业绩D", value:"68"},
          {name:"业绩E", value:"97"},
          {name:"业绩F", value:"56"}
        ]
      },
      tableData: [
        {certCode:'A152002846', name:'工程设计市政行业轨道交通工程专业甲级', organs:'安徽省建筑厅'},
        {certCode:'A152002846', name:'工程设计市政行业轨道交通工程专业甲级', organs:'安徽省建筑厅'},
        {certCode:'A152002846', name:'工程设计市政行业轨道交通工程专业甲级', organs:'安徽省建筑厅'},
        {certCode:'A152002846', name:'工程设计市政行业轨道交通工程专业甲级', organs:'安徽省建筑厅'},
        {certCode:'A152002846', name:'工程设计市政行业轨道交通工程专业甲级', organs:'安徽省建筑厅'},
        {certCode:'A152002846', name:'工程设计市政行业轨道交通工程专业甲级', organs:'安徽省建筑厅'}
      ],
      background:{
        businessInformation:[
          {label:"单位名称",value:"单位名称"},
          {label:"编号",value:"编号"},
          {label:"主要负责人",value:"主要负责人"},
          {label:"单位地址",value:"单位地址"},
          {label:"经济类型",value:"经济类型"},
          {label:"许可范围",value:"许可范围"},
          {label:"有效期起始",value:"有效期起始"},
          {label:"有效期截止",value:"有效期截止"},
          {label:"发证日期",value:"发证日期"},
          {label:"发证机关",value:"发证机关"},
        ]
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
