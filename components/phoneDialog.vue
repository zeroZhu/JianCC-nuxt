<template>
  <el-dialog
    custom-class="account-set"
    title="手机号码认证"
    :visible.sync="visible"
    :show-close="false"
    :close-on-click-modal="false"
    width="720px"
    @close="resetHandler"
    @open="initGeet"
    >
    <el-form class="phone" ref="setPhone" :model="params" :rules="rules" >
      <el-form-item prop="phoneNumber" style="margin-top: 10px;">
        <el-input placeholder="请输入手机号码" v-model="params.phoneNumber"></el-input>
      </el-form-item>
      <el-form-item prop="flag">
        <div id="captchaSetPhone" style="width:100%;height:40px;"></div>
      </el-form-item>
      <el-form-item  prop="veriCode" style="margin-bottom:24px;">
        <el-input v-model="params.veriCode" placeholder="短信验证码">
          <el-button type="text" :disabled="times==0?false:true" slot="suffix" @click="getCodeHandler">{{times?`${times}S 后重试`:"获取验证码"}}</el-button>
        </el-input>
      </el-form-item>
      <el-form-item class="mb0" >
        <el-button class="confirm-btn" @click="submit" >立即认证</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { mobile } from "@/lib/validator.js";
import { initGeetestFun, secondGeetestFun, sendSmsFun } from "@/assets/js/api/login";
import { setPhoneFun } from "@/assets/js/api/account";
import { mapState, mapMutations } from "vuex";
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
        phoneNumber: "",
        veriCode: "",
        flag: false
      },
      rules: {
        phoneNumber: [
          { required: true, message: '请输入新的手机号码', trigger: 'blur' },
          { validator: mobile, trigger: 'blur' }
        ],
        veriCode: [
          { required: true, message: '请输入短信验证码', trigger: 'blur' }
        ],
        flag: [
          { required: true, message: '请先进行验证', trigger: 'change' },
          { validator: checkFlag, trigger: 'change' },
        ]
      }
    }
  },
  mounted() {
    // this.initGeet();
  },
  methods: {
    ...mapMutations([
      "changeSetPhoneVisible", "changeUser"
    ]),
    initGeet() {
      const self = this;
      !this.captchaObj&&initGeetestFun().then(res=>{
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
          captchaObj.appendTo("#captchaSetPhone");
          captchaObj.onSuccess(function () {
            // 获取第一次验证结果
            var result = captchaObj.getValidate();
            secondGeetestFun(result).then(res => {
              self.params.flag = true;
              self.$refs['setPhone'].validateField("flag",(errorMessage) => {});
            })
          });
        })
      })
    },
    // 获取验证码
    getCodeHandler() {
      const self = this;
      let phoneVal = false, flagVal = false, callback = () => {
        let { phoneNumber } = this.params;
        if(phoneVal&&flagVal){
          sendSmsFun(phoneNumber).then(res => {
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
      }
      this.$refs['setPhone'].validateField("phoneNumber",(errorMessage) => {
        errorMessage==""&&(phoneVal=true);
        callback()
      });
      this.$refs['setPhone'].validateField("flag",(errorMessage) => {
        errorMessage==""&&(flagVal=true);
        callback()
      });
    },
    submit() {
      this.$refs['setPhone'].validate((valid)=>{
        if(valid) {
          let { userId } = this;
          let { phoneNumber, veriCode } = this.params;
          setPhoneFun({ phoneNumber, veriCode, userId }).then(res=>{
            let {success, data} = res;
            if(success){
              this.changeUser(data);
              this.changeSetPhoneVisible(false);
            }
          });
        }
      })
    },
    resetHandler() {

    }
  },
  computed: {
    ...mapState({
      visible: state => state.setPhone.visible,
      userId: state => state.setPhone.userId
    })
  }
}
</script>

<style lang="less" scoped>
/deep/.account-set {
  box-shadow:0px 13px 51px 0px rgba(10,39,85,0.11);
  .el-dialog__header {
    padding: 13px 20px 12px;
    border-bottom: 1px solid #EAEDF1;
    text-align: left;
    .el-dialog__title {
      font-size: 14px;
    }
    .el-dialog__headerbtn {
      top: 17px;
      font-size: 18px;
    }
  }
  .el-dialog__body {
    .el-form-item {
      margin-bottom: 20px;
    }
    >.phone {
      padding: 0 60px 30px 280px;
      background: url("../assets/img/setPhone.png") no-repeat;
      background-position: 55px 0px;
      .el-input__suffix {
      line-height: 40px;
      .el-button {
          color: #0067ED;
          width: 90px;
          &.is-disabled {
            color: #999999!important;
          }
        }
      }
      .el-input__suffix:after {
        content: "";
        width: 1px;
        height: 15px;
        background: #EAEDF1;
        position: absolute;
        left: 0px;
        top: 13px;
      }
    }
    .confirm-btn {
      width: 100%;
      color: #FFFFFF;
      background-color: #0067ed;
    }
  }
}
</style>


