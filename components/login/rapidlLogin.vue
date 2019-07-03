<template>
  <div class="rapidl-login">
    <div class="title mt30">
      <span style="color:#0067ED">微信扫一扫</span> >
      <span>关注公众号</span> >
      <span>登录</span>
    </div>
    <img class="QRcode mt30" :src="QRcode" alt>
    <p class="tips mt25">若您首次使用建查查，我们将为您创建一个新的账号</p>
  </div>
</template>
<script>
import { getQrFun } from "@/assets/js/api/login";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
			ws: null,
      QRcode: ""
    };
  },
  mounted() {
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  methods: {
    ...mapMutations([
      "changeSetPhoneVisible", "changeSetPhoneUserId"
    ]),
    getQRcode() {
      getQrFun().then(res => {
        if (res.success) {
          this.QRcode = res.data.codeUrl;
          this.connectWebSocket(res.data.sceneId);
        }
      });
    },
    connectWebSocket(v) {
      const self = this;
      this.ws = new WebSocket(`ws://www.jiancc.cn/socketApi/webSocket/${v}`);
      this.ws.onopen = function(evnt) {
        console.log("=========websocket连接==========");
        console.log(v);
      };
      this.ws.onmessage = function(evnt) {
        let response = JSON.parse(evnt.data);
        console.log(response);
        if(response.data&&response.data.token){
          self.$emit("loginCallback", response.data);
        }else{
          self.$emit("loginCallback");
          self.changeSetPhoneVisible(true);
          self.changeSetPhoneUserId(response.data.userId);
        }
      };
       this.ws.onclose = function(evnt) {
        console.log("=========websocket关闭==========");
        console.log(evnt);
      };
		},
		resetHandler() {
			if(this.ws) {
				this.ws.close();
			}
		}
  }
};
</script>
 
<style lang="less" scoped>
.rapidl-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-size: 15px;
    line-height: 1;
  }
  .QRcode {
    width: 203px;
    height: 203px;
    box-sizing: border-box;
    border: 1px solid #d2d2d2;
    border-radius: 10px;
  }
  .tips {
    font-size: 14px;
    color: #999999;
  }
}
</style>
 
