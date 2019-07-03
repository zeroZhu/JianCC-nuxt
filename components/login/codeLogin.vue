<template>
  <el-form ref="codeLogin" :model="params" :rules="rules"  class="code-login">
    <el-form-item prop="phoneNumber">
      <el-input v-model="params.phoneNumber" placeholder="请输入手机号码"></el-input>
    </el-form-item>
    <el-form-item prop="flag">
      <div id="captchaCodelogin" style="width:100%;height40px;"></div>
    </el-form-item>
    <el-form-item prop="veriCode">
      <el-input v-model="params.veriCode" placeholder="短信验证码">
        <el-button type="text" :disabled="times==0?false:true" slot="suffix" @click="getCodeHandler">{{times?`${times}S后重试`:"获取验证码"}}</el-button>
      </el-input>
    </el-form-item>
    <el-button class="login-btn" @click="loginHandler">登录</el-button>
    <p class="tips mt30 mb30">若您首次使用建查查，我们将为您创建一个新的账号</p>
  </el-form>
</template>

<script>
import { initGeetestFun, secondGeetestFun, sendSmsFun, codeLoginFun } from "@/assets/js/api/login";
import { mobile } from "@/lib/validator";
export default {
	data() {
    let checkFlag = (rule, value, callback)=> {
      if(!value){
        callback("请先通过验证");
      } else {
        callback();
      }
    }
		return {
      times: 0,
      timer: null,
      captchaObj: null,
      params: {
        phoneNumber:"",
        veriCode: "",
        flag: false
      },
      rules:{
        phoneNumber: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { validator: mobile, message: '请输入正确的手机号码', trigger: 'blur' }
        ],
        veriCode: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ],
				flag: [
          { required: true, message: '请先进行验证', trigger: 'change' },
          { validator: checkFlag, trigger: 'change' },
        ]
      }
		}
	},
	methods: {
    // 获取验证码
    getCodeHandler() {
      const self = this;
      let phoneNumberVal = false, flagVal = false;
      this.$refs['codeLogin'].validateField("phoneNumber",(errorMessage) => {
        errorMessage=="" && (phoneNumberVal = true);
      })
      this.$refs['codeLogin'].validateField("flag",(errorMessage) => {
        errorMessage=="" && (flagVal = true);
      })
      if(phoneNumberVal&&flagVal) {
        sendSmsFun(this.params.phoneNumber).then(res => {
          let { success, message } = res;
          self.$message({
            type: success?"success":"error",
            message,
            center: true
          })
          if(success) {
            self.times = 60;
            self.timer = setInterval(()=>{
              if(self.times == 0){
                clearInterval(self.timer);
                return;
              }else {}
              self.times--
            },1000)
          }
        });
      }
    },
    // 登录注册
    loginHandler() {
      this.$refs['codeLogin'].validate((valid)=>{
        if(valid){
          let { phoneNumber, veriCode } = this.params;
          codeLoginFun({phoneNumber, veriCode}).then(res=> {
            this.$message({
              type: res.success?"success":"error",
              message: res.message,
              center: true
            })
            res.success?this.$emit("loginCallback",res.data):this.captchaObj.reset();
          })
        }
      })
    },
    // 重置所有状态
    resetHandler() {
      // 清除定时器
      clearInterval(this.timer);
      // 重置数据
      this.times = 0;
      this.$refs['codeLogin'].resetFields();
      // 重置验证
      this.captchaObj&&this.captchaObj.reset();
    }
	},
	mounted() {
    const self = this;
		initGeetestFun().then(res=>{
      let { gt, challenge, success } = res;
      initGeetest({
        // 以下配置参数来自服务端 SDK
        gt,
        challenge,
        offline: !success,
        new_captcha: true,
        product: "float",
        width: "100%"
      }, function (captchaObj) {
        self.captchaObj = captchaObj;
        // 这里可以调用验证实例 captchaObj 的实例方法
        captchaObj.appendTo("#captchaCodelogin");
        captchaObj.onSuccess(function () {
          // 获取第一次验证结果
          var result = captchaObj.getValidate();
          secondGeetestFun(result).then(res => {
            self.params.flag = true;
            self.$refs['codeLogin'].validateField("flag",(errorMessage) => {});
          })
        });
      })
    })
	},
};
</script>

<style lang="less" scoped>
.code-login {
  padding: 40px 36px 0 33px;
  .el-input {
    border-color: #eaedf1;
    /deep/.el-input__suffix {
      line-height: 40px;
      .el-button {
        color: #0067ED;
        width: 90px;
        &.is-disabled {
          color: #999999!important;
        }
      }
      
    }
    /deep/.el-input__suffix:after {
      content: "";
      width: 1px;
      height: 15px;
      background: #EAEDF1;
      position: absolute;
      left: 0px;
      top: 14px;
    }
  }
  .login-btn {
    width: 100%;
    font-size: 16px;
    line-height: 1;
    font-weight: blod;
    padding: 11px 20px;
    color: #ffffff;
    background: #0067ed;
    margin-bottom: 3px;
  }
  .tips {
    font-size: 14px;
    color: #999999;
  }
}
</style>

