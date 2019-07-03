<template>
  <footer class="footer">
    <div class="footer-nav">
      <div class="footer-nav-left">
        <ul>
          <h4>快速导航</h4>
          <li>联系我们</li>
          <li>关于我们</li>
          <li>用户协议</li>
          <li>版权政策</li>
          <li>免责声明</li>
          <li>意见反馈</li>
          <li>加入我们</li>
          <!-- <router-link tag="li" to="https://www.baidu.com">联系我们</router-link>
          <router-link tag="li" to="https://www.baidu.com">关于我们</router-link>
          <router-link tag="li" to="https://www.baidu.com">用户协议</router-link>
          <router-link tag="li" to="https://www.baidu.com">版权政策</router-link>
          <router-link tag="li" to="https://www.baidu.com">免责声明</router-link>
          <router-link tag="li" to="https://www.baidu.com">意见反馈</router-link>
          <router-link tag="li" to="https://www.baidu.com">加入我们</router-link> -->
        </ul>
        <ul>
          <h4>数据来源</h4>
          <li v-for="item in dataSource[0]" :key="item.link"> 
            <a target="_blank" :href="item.link">{{item.name}}</a>
          </li>
        </ul>
        <ul style="padding-top:36px">
          <li v-for="item in dataSource[1]" :key="item.link"> 
            <a target="_blank" :href="item.link">{{item.name}}</a>
          </li>
        </ul>
      </div>
      <div class="footer-nav-right">
        <ul>
          <h4>联系我们</h4>                
          <li>QQ在线客服:3471486810</li>
          <li>服务时间：08:30-18:00（工作日）</li>
        </ul>
        <div class="offical-wechat">
          <img src="@/assets/img/subscriptionQr.png" alt="">
          <h5>建查查微信订阅号</h5>
        </div>
        <div class="offical-wechat">
          <img src="@/assets/img/serveQr.png" alt="">
          <h5>建查查微信小程序</h5>
        </div>
      </div>
    </div>
    <div class="footer-link">
      <ul>
        <li style="color: #ffffff;">友情链接</li>
        <li v-for="item in links" :key="item.name">
          <a :href="item.link" >{{item.name}}</a>
        </li>
      </ul>
    </div>
    <div class="footer-state">
      <p>Copyright © 2019 皖ICP备19005666号-1 版权所有 安徽四库全数科技有限公司</p>
    </div>
  </footer>
</template>

<script>
export default {
  name:"footerComponent",
  data() {
    return {
      dataSource: [
        [
          {name: '全国建筑市场监管公共服务平台', link:'http://jzsc.mohurd.gov.cn/asite/jsbpp/index'},
          {name: '全国企业信用信息公示系统', link:'http://www.gsxt.gov.cn/index.htm'},
          {name: '北京市住房和城乡建设委员会', link:'http://www.bjjs.gov.cn/'},
          {name: '山西省建筑市场监管公共服务平台', link:'http://jzsc.sxjs.gov.cn/Browse/'},
          {name: '内蒙古自治区建筑市场监管与诚信信息管理平台', link:'http://110.16.70.26/nmjgpublisher/default.aspx'},
          {name: '辽宁省建筑市场公共服务平台', link:'http://218.60.144.163/LNJGPublisher/Default.aspx'},
          {name: '吉林省建筑市场监管公共服务平台', link:'http://cx.jljsw.gov.cn/'},
          {name: '黑龙江省建筑市场监管公共服务平台', link:'http://111.40.23.65:8093/cip/loginAction_login.action'},
          {name: '上海市住房和城乡建设管理委员会', link:'http://www.shjjw.gov.cn/'},
          {name: '江苏省建筑市场监管与诚信信息一体化平台', link:'http://58.213.147.230:7001/Jsjzyxyglpt/faces/public/default.jsp'},
          {name: '江西省建筑市场监管与诚信信息一体化工作平台', link:'http://59.52.254.107:8093/JXZHXT3/'},
          {name: '山东省住房和城乡建设厅', link:'http://www.sdjs.gov.cn/'},
          {name: '湖北省建筑市场监督与诚信一体化工作平台', link:'http://59.175.169.110/web/'},
        ],
        [
          
          {name: '湖南省建筑市场和工程质量安全监管一体化平台', link:'http://qyryjg.hunanjz.com/public/index.aspx'},
          {name: '广东省住房和诚信建设厅', link:'http://zfcxjst.gd.gov.cn/'},
          {name: '广西建筑市场监管与诚信信息一体化平台', link:'http://ztb.gxzjt.gov.cn:1121/zjthy/Login_JZ/Pages/login_index.aspx?ReturnUrl=%2fzjthy%2f'},
          {name: '海南省建筑市场监管公共服务平台', link:'http://www.hizj.net:8008/publishweb/'},
          {name: '重庆市住房和城乡建设委员会', link:'http://www.ccc.gov.cn/'},
          {name: '贵州省建筑业监管和公共服务平台', link:'http://jzjg.gzjs.gov.cn:8088/gzzhxt/SYGS/SYGSGL/DefaultSY_new.aspx'},
          {name: '西藏自治区建筑市场监管与诚信信息平台', link:'http://111.11.196.111/'},
          {name: '陕西省建筑市场监管与诚信信息一体化平台', link:'http://124.115.170.171:7001/PDR/login'},
          {name: '甘肃省住房和城乡建设厅', link:'http://www.gsjs.com.cn/?tabid=1'},
          {name: '青海省工程建设监管和信用管理平台', link:'http://jzsc.qhcin.gov.cn/asite/cloud/index'},
          {name: '宁夏建筑市场监管服务系统', link:'http://www.nxjscx.com.cn/'},
          {name: '新疆工程建设云', link:'http://jsy.xjjs.gov.cn/aA13:B23site/cloud/index.jsp]'}
        ]
      ],
      links:[
        {name:"安徽邦辽企业管理有限公司", link:'http://ahbangliao.com/'},
        {name:"中国水泥网", link:'http://www.ccement.com/'},
        {name:"蜂聘网", link:'http://news.360guakao.net/'},
        {name:"中国建造师网", link:'http://www.coc.gov.cn/coc/'},
        {name:"中国建设工程造价管理协会", link:'http://www.ceca.org.cn/'},
        {name:"中国建设监理协会", link:'http://www.caec-china.org.cn/'},
        {name:"中国安全生产网", link:'http://www.aqsc.cn/'},
        {name:"老妖精注册消防", link:'http://studyyy.ke.qq.com/'},
        {name:"百川超级学霸", link:'http://www.bc150.com/'},
        {name:"今日头条", link:'https://www.toutiao.com/'},
        {name:"百家号", link:'https://baijiahao.baidu.com/'},
        {name:"天眼查", link:'https://baijiahao.baidu.com/'},
        {name:"企查查", link:'https://www.tianyancha.com/'},
        {name:"BOSS直聘", link:'https://www.zhipin.com/'},
        {name:"快手短视频", link:'https://www.kuaishou.com/'},
        {name:"抖音短视频", link:'https://www.douyin.com/'},
        {name:"腾讯创业服务平台", link:'https://c.qq.com/'},
        
      ]
    };
  }
}
</script>

<style lang="less" scoped>
.footer {
  background: #232936;
  padding-top: 40px;
  .footer-nav {
    width: 1180px;
    margin: 0 auto;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    .footer-nav-left {
      display: flex;
      justify-content: space-between;
      ul {
        text-align: left;
        margin-right: 70px;
        h4 {
          font-size: 16px;
          color: #ffffff;
          font-weight: 400;
          margin-bottom: 15px;
        }
        li {
          font-size: 14px;
          color: #7a808f;
          line-height: 20px;
          margin-bottom: 3px;
          cursor: pointer;
        }
        li:hover {
          color: #ffffff;
          text-decoration: underline;
        }
      }
    }
    .footer-nav-right {
      ul {
        text-align: left;
        h4 {
          font-size: 16px;
          color: #ffffff;
          font-weight: 400;
          margin-bottom: 15px;
        }
        li {
          font-size: 14px;
          color: #7a808f;
          line-height: 20px;
          margin-bottom: 3px;
        }
      }
      .offical-wechat {
        float: right;
        margin-top: 22px;
        div {
          width: 132px;
          height: 132px;
          border-radius: 4px;
          background: #ffffff;
          // margin: 0 7.5px 5px 7.5px;
        }
        h5 {
          font-size: 14px;
          color: #7a808f;
          text-align: center;
        }
      }
      .offical-wechat+.offical-wechat {
        margin-right: 16px;
      }
    }
  }
  .footer-link {
    width: 1180px;
    margin: 0 auto;
    border-top: 1px solid #454a53;
    padding: 20px 0;
    text-align: left;
    h4 {
      font-size: 14px;
      color: #ffffff;
      margin-bottom: 15px;
    }
    ul {
      margin-top: 5px;
      display: flex;
      flex-wrap: wrap;
      li {
        font-size: 14px;
        color: #7a808f;
        line-height: 20px;
        margin: 0 10px;
      }
      li:hover {
        color: #ffffff;
        text-decoration: underline;
      }
    }
  }
  .footer-state {
    border-top: 1px solid #454a53;
    padding: 25px 0;
    font-size: 14px;
    color: #7a808f;
  }
  
}
</style>
