<template>
  <el-form ref="passwordLogin" :model="params" :rules="rules" class="password-login">
		<el-form-item prop="phoneNumber">
      <el-input v-model="params.phoneNumber" placeholder="请输入手机号码"></el-input>
    </el-form-item>
		<el-form-item prop="password">
      <el-input v-model="params.password" type="password" placeholder="请输入登录密码"></el-input>
    </el-form-item>
		<el-form-item prop="flag">
      <div id="captchaPasslogin" style="width:100%;height:40px;"></div>
    </el-form-item>
		<el-button class="login-btn" @click="loginHandler">登录</el-button>
		<p class="tips">
			<a style="color:#0067ED;" @click="accountSetHandler('register')">注册账号</a>
			<a style="color:#222222;" @click="accountSetHandler('password')">忘记密码</a>
		</p>
	</el-form>
</template>

<script>
import { initGeetestFun, secondGeetestFun, passLoginFun } from "@/assets/js/api/login";
import { mobile,password } from "@/lib/validator";
import CryptoJS from "crypto-js";
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
			captchaObj: null,
			params: {
        phoneNumber:"",
				password: "",
				flag: false
      },
      rules:{
        phoneNumber: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { validator: mobile, message: '请输入正确的手机号码', trigger: 'blur' }
				],
				password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { validator: password, message: '请输入正确的登录密码', trigger: 'blur' }
				],
				flag: [
          { required: true, message: '请先进行验证', trigger: 'change' },
          { validator: checkFlag, trigger: 'change' },
        ]
      }
		}
	},
	methods: {
		loginHandler() {
			const self = this;
			let { phoneNumber, password } = this.params;
			const key = CryptoJS.enc.Utf8.parse("jiancc20190401");
			password = CryptoJS.AES.encrypt(self.params.password, key, {
				padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.ECB
			}).toString();
			this.$refs['passwordLogin'].validate((valid)=>{
				if(valid){
					passLoginFun({ phoneNumber, password }).then(res => {
						this.$message({
							type: res.message?"success":"error",
							message: res.message,
							center: true
						})
						res.success? this.$emit("loginCallback",res.data):this.captchaObj.reset();
					})
				}
			})
		},
		// 重置所有状态
    resetHandler() {
      // 重置数据
			this.$refs['passwordLogin'].resetFields();
			// 重置验证码
			this.captchaObj&&this.captchaObj.reset();
		},
		accountSetHandler(v) {
			this.$router.push(`/accountSetting/${v}`);
			this.$emit("loginCallback",null);
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
        captchaObj.appendTo("#captchaPasslogin");
        captchaObj.onSuccess(function () {
          // 获取第一次验证结果
          var result = captchaObj.getValidate();
          secondGeetestFun(result).then(res => {
						self.params.flag = true;
						self.$refs['passwordLogin'].validateField("flag",(errorMessage) => {});
          })
        });
      })
    })
	}
}
</script>

<style lang="less" scoped>
.password-login {
	padding: 40px 36px 0 33px;
	.login-btn {
		width: 100%;
		font-size: 16px;
		line-height: 1;
		font-weight: blod;
		padding: 11px 20px;
		color: #ffffff;
		background: #0067ED;
		margin-bottom: 10px;
	}
	.tips {
		display: flex;
		justify-content: space-between;
		font-size: 14px;
		a {
			cursor: pointer;
		}
	}
}
</style>


