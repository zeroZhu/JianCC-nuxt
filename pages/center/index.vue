<template>
  <div class="personal-layout">
    <panel-component>
      <h4 class="list-title" slot="header">账户设置</h4>
      <div class="list-content" slot="content">
        <div class="account-header">
          <p class="mb15">
            <span class style="color:#222222;font-size:16px;">
              账户信息完整度：
              <i style="color:#0067ED;font-size:24px;">{{accountCompletion}}%</i>
            </span>
            <span class="ml10" style="color:#666666;font-size:14px;">上次登录：{{lastLoginTime}}</span>
          </p>
          <el-progress
            :text-inside="true"
            :stroke-width="18"
            :percentage="accountCompletion"
            color="#0067ED"
            style="width:616px"
          ></el-progress>
        </div>
        <ul class="account-list">
          <!-- <li class="account-list-item">
            <h3 class="list-item-title"> 
              <i class="iconfont" :class="realFlag?'icon-yirenzheng success':'icon-weirenzheng danger'"></i>
              实名认证
            </h3>
            <p class="list-item-desc">
              <span class="success" v-if="realFlag">{{name}} {{idCard}}</span>
              <span class="danger" v-else >尚未认证</span>
              <span>,便于及时匹配您的注册证书。</span>
            </p>
            <el-button v-if="realFlag" type="text" disabled class="list-item-status disabled">已认证</el-button>
            <el-button v-else type="text" class="list-item-status danger" @click="skipTo('/personal/account-real-name')" >去认证</el-button>
          </li>-->
          <li class="account-list-item">
            <h3 class="list-item-title">
              <i class="iconfont" :class="true?'icon-yirenzheng success':'icon-weirenzheng danger'"></i>
              昵称
            </h3>
            <p class="list-item-desc">
              <span class="success">{{userInfo.nickName}}</span>
              <span>,您在建查查的昵称。</span>
            </p>
            <el-button type="text" @click="editNickname.visible = true" class="list-item-status">去修改</el-button>
          </li>
          <li class="account-list-item">
            <h3 class="list-item-title">
              <i class="iconfont" :class="true?'icon-yirenzheng success':'icon-weirenzheng danger'"></i>
              手机认证
            </h3>
            <p class="list-item-desc">
              <span class="success">{{userInfo.phoneNumber}}</span>
              <span>,便于及时匹配您的注册证书。</span>
            </p>
            <el-button type="text" @click="openEditPhone" class="list-item-status">去修改</el-button>
          </li>
          <!-- <li class="account-list-item">
            <h3 class="list-item-title">
              <i class="iconfont" :class="emailFlag?'icon-yirenzheng success':'icon-weirenzheng danger'"></i>
              邮箱认证
            </h3>
            <p class="list-item-desc">
              <span class="success" v-if="passwordFlag">{{email}}</span>
              <span class="danger" v-else >尚未认证</span>
              <span>,便于及时匹配您的注册证书。</span>
            </p>
            <el-button v-if="emailFlag" type="text" class="list-item-status">去修改</el-button>
            <el-button v-else type="text" class="list-item-status danger">去认证</el-button>
          </li>-->
          <li class="account-list-item">
            <h3 class="list-item-title">
              <i
                class="iconfont"
                :class="passwordFlag?'icon-yirenzheng success':'icon-weirenzheng danger'"
              ></i>
              登录密码
            </h3>
            <p class="list-item-desc">
              <span class="success" v-if="passwordFlag">已设置</span>
              <span class="danger" v-else>尚未设置</span>
              <span>,您登录建查查使用的密码。</span>
            </p>
            <el-button
              v-if="passwordFlag"
              @click="editPassword.visible = true"
              type="text"
              class="list-item-status"
            >去修改</el-button>
            <el-button
              v-else
              type="text"
              @click="setPassword.visible = true"
              class="list-item-status danger"
            >去设置</el-button>
          </li>
        </ul>
      </div>
    </panel-component>
    <!-- 修改昵称 -->
    <el-dialog
      custom-class="account-set"
      title="修改昵称"
      :visible.sync="editNickname.visible"
      :close-on-click-modal="false"
      width="720px"
      @close="resetHandler('editNickname')"
      @submit.native.prevent
    >
      <el-form class="nickname" label-width="80px">
        <el-form-item label="昵称" style="margin-bottom:10px;">
          <el-input placeholder="请输入新的昵称" v-model="editNickname.nickName"></el-input>
        </el-form-item>
        <el-form-item>
          <p>昵称：2~12个字符之间，可以汉字、字母和数字组合</p>
        </el-form-item>
        <el-form-item class="mb0">
          <el-button class="confirm-btn" @click="updateNicknameHandler">确认修改</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 设置密码 -->
    <el-dialog
      custom-class="account-set"
      title="设置密码"
      :visible.sync="setPassword.visible"
      :close-on-click-modal="false"
      width="720px"
      @close="resetHandler('setPassword')"
    >
      <el-form
        class="set-password"
        ref="setPassword"
        :model="setPassword.params"
        :rules="setPassword.rules"
      >
        <el-form-item prop="password" style="margin-bottom:20px;">
          <el-input
            type="password"
            placeholder="请设置8-20位字母/数字密码"
            v-model="setPassword.params.password"
          ></el-input>
        </el-form-item>
        <el-form-item prop="surePassword" style="margin-bottom:30px;">
          <el-input
            type="password"
            placeholder="请再次确认设置的密码"
            v-model="setPassword.params.surePassword"
          ></el-input>
        </el-form-item>
        <el-form-item class="mb0">
          <el-button class="confirm-btn" @click="updatePasswordHandler('setPassword')">确认修改</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 修改密码 -->
    <el-dialog
      custom-class="account-set"
      title="修改密码"
      :visible.sync="editPassword.visible"
      :close-on-click-modal="false"
      width="720px"
      @close="resetHandler('editPassword')"
    >
      <el-form
        class="password"
        ref="editPassword"
        :model="editPassword.params"
        :rules="editPassword.rules"
        label-width="100px"
      >
        <el-form-item label="原密码" prop="oldPassword">
          <el-input
            placeholder="请输入原登录密码"
            type="password"
            v-model="editPassword.params.oldPassword"
          ></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="password">
          <el-input
            placeholder="请设置新的8-20位字母/数字密码"
            type="password"
            v-model="editPassword.params.password"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认新密码" prop="surePassword" style="margin-bottom:30px;">
          <el-input
            placeholder="请再次确认新设置的密码"
            type="password"
            v-model="editPassword.params.surePassword"
          ></el-input>
        </el-form-item>
        <el-form-item class="mb0">
          <el-button class="confirm-btn" @click="updatePasswordHandler('editPassword')">确认修改</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 修改手机 -->
    <el-dialog
      custom-class="account-set"
      title="修改手机"
      :visible.sync="editPhone.visible"
      :close-on-click-modal="false"
      width="720px"
      @close="resetHandler('editPhone')"
      @submit.native.prevent
    >
      <el-form class="phone" ref="editPhone" :model="editPhone.params" :rules="editPhone.rules">
        <p
          v-if="editPhone.step==1"
          style="margin-bottom: 25px;line-height:1;white-space: nowrap;
    transform: translate(-30px);"
        >系统将向您的当前手机号码：{{userInfo.phoneNumber}}发送一条验证码</p>
        <el-form-item prop="phoneNumber" style="margin-top: 10px;" v-else>
          <el-input placeholder="请输入新的手机号码" v-model="editPhone.params.phoneNumber"></el-input>
        </el-form-item>
        <el-form-item prop="flag">
          <div id="captchaEditPhone" style="width:100%;height:40px;"></div>
        </el-form-item>
        <el-form-item prop="veriCode" style="margin-bottom:30px;">
          <el-input v-model="editPhone.params.veriCode" placeholder="短信验证码">
            <el-button
              type="text"
              :disabled="times==0?false:true"
              slot="suffix"
              @click="getCodeHandler"
            >{{times?`${times}S 后重试`:"获取验证码"}}</el-button>
          </el-input>
        </el-form-item>
        <el-form-item class="mb0">
          <el-button class="confirm-btn" @click="updatePhoneHandler">确认</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { mobile, nickName, password } from '@/assets/js/validator.js'
import {
  updateUserFun,
  getUserFun,
  updatePassFun
} from '@/assets/js/api/account.js'
import {
  initGeetestFun,
  secondGeetestFun,
  sendSmsFun,
  modifyPhoneFun,
  checkRegFun
} from '@/assets/js/api/login'
import { mapState, mapMutations } from 'vuex'
import CryptoJS from 'crypto-js'

export default {
  data() {
    let surePassword = (rule, value, callback) => {
        let { password } = this.setPassword.params
        if (value !== password) {
          callback(new Error('两次输入的密码不一致'))
        } else {
          callback()
        }
      },
      surePassword1 = (rule, value, callback) => {
        let { password } = this.editPassword.params
        if (value !== password) {
          callback(new Error('两次输入的密码不一致'))
        } else {
          callback()
        }
      },
      checkFlag = (rule, value, callback) => {
        if (!value) {
          callback('请先通过验证')
        } else {
          callback()
        }
      },
      checkAccount = (rule, value, callback) => {
        checkRegFun(value).then(res => {
          let { success, data } = res
          if (success) {
            callback()
          } else {
            callback('该手机号码已被注册')
          }
        })
      }
    return {
      times: 0,
      timer: null,
      captchaObj: null,
      userInfo: {
        nickName: '',
        phoneNumber: '',
        password: ''
      },
      editNickname: {
        visible: false,
        nickName: ''
      },
      editPhone: {
        step: 1,
        visible: false,
        params: {
          phoneNumber: '',
          veriCode: '',
          flag: false
        },
        rules: {
          phoneNumber: [
            { required: true, message: '请输入新的手机号码', trigger: 'blur' },
            { validator: mobile, trigger: 'blur' },
            { validator: checkAccount, trigger: 'blur' }
          ],
          veriCode: [
            { required: true, message: '请输入短信验证码', trigger: 'blur' }
          ],
          flag: [
            { required: true, message: '请先进行验证', trigger: 'change' },
            { validator: checkFlag, trigger: 'change' }
          ]
        }
      },
      editPassword: {
        visible: false,
        params: {
          oldPassword: '',
          password: '',
          surePassword: ''
        },
        rules: {
          oldPassword: [
            { required: true, message: '请输入原登录密码', trigger: 'blur' },
            { validator: password, trigger: 'blur' }
          ],
          password: [
            {
              required: true,
              message: '请设置新的登录密码',
              trigger: 'blur'
            },
            { validator: password, trigger: 'blur' }
          ],
          surePassword: [
            {
              required: true,
              message: '请确认新的登录密码',
              trigger: 'blur'
            },
            { validator: surePassword1, trigger: 'blur' }
          ]
        }
      },
      setPassword: {
        visible: false,
        params: {
          password: '',
          surePassword: ''
        },
        rules: {
          password: [
            {
              required: true,
              message: '请设置8-20位字母/数字密码',
              trigger: 'blur'
            },
            { validator: password, trigger: 'blur' }
          ],
          surePassword: [
            {
              required: true,
              message: '请再次确认设置的密码',
              trigger: 'blur'
            },
            { validator: surePassword, trigger: 'blur' }
          ]
        }
      }
    }
  },
  computed: {
    ...mapState({
      lastLoginTime: state => state.user.lastLoginTime
    }),
    accountCompletion() {
      let { nickName, phoneNumber, password } = this.userInfo
      let count = 0
      nickName && nickName != '' ? (count = count + 30) : count
      phoneNumber && phoneNumber != '' ? (count = count + 40) : count
      password && password == '1' ? (count = count + 30) : count
      return count
    },
    passwordFlag() {
      let password = this.userInfo.password
      return password == '1' ? true : false
    }
  },
  methods: {
    ...mapMutations(['changeUser']),
    // 获取验证码
    getCodeHandler() {
      const self = this
      let phoneNumberVal = false,
        flagVal = false
      let {
        step,
        params: { phoneNumber }
      } = this.editPhone
      let callback = () => {
        if (phoneNumberVal && flagVal) {
          let data = step == 1 ? undefined : phoneNumber
          sendSmsFun(data).then(res => {
            let { success, message } = res
            self.$message({
              type: success ? 'success' : 'error',
              message,
              center: true
            })
            if (success) {
              self.times = 60
              self.timer = setInterval(() => {
                if (self.times == 0) {
                  clearInterval(self.timer)
                  return
                } else {
                }
                self.times--
              }, 1000)
            }
          })
        }
      }
      if (step == 1) {
        phoneNumberVal = true
        this.$refs['editPhone'].validateField('flag', errorMessage => {
          errorMessage == '' && (flagVal = true)
        })
        callback()
      } else {
        this.$refs['editPhone'].validateField('phoneNumber', errorMessage => {
          errorMessage == '' && (phoneNumberVal = true)
          callback()
        })
        this.$refs['editPhone'].validateField('flag', errorMessage => {
          errorMessage == '' && (flagVal = true)
          callback()
        })
      }
    },
    // 初始化极验
    initGeerHandler(callback) {
      const self = this
      initGeetestFun().then(res => {
        let { gt, challenge, success } = res
        initGeetest(
          {
            // 以下配置参数来自服务端 SDK
            gt,
            challenge,
            offline: !success,
            new_captcha: true,
            product: 'float',
            width: '100%'
          },
          function(captchaObj) {
            self.captchaObj = captchaObj
            // 这里可以调用验证实例 captchaObj 的实例方法
            captchaObj.appendTo('#captchaEditPhone')
            captchaObj.onSuccess(function() {
              // 获取第一次验证结果
              var result = captchaObj.getValidate()
              secondGeetestFun(result).then(res => {
                self.editPhone.params.flag = true
                self.$refs['editPhone'].validateField(
                  'flag',
                  errorMessage => {}
                )
              })
            })
            self.editPhone.visible = true
          }
        )
      })
    },
    // 昵称
    updateNicknameHandler() {
      let { nickName } = this.editNickname
      nickName = nickName.trim()
      if (/^[0-9A-Za-z_\u4e00-\u9fa5]{2,12}$/.test(nickName)) {
        updateUserFun({
          nickName
        }).then(res => {
          this.$message({
            type: res.success ? 'success' : 'error',
            message: res.message,
            center: true
          })
          if (res.success) {
            this.editNickname.visible = false
            // 同步store
            let userInfo = JSON.parse(localStorage.getItem('userInfo'))
            userInfo.nickName = nickName
            this.changeUser(userInfo)
          }
        })
      } else {
        this.$message({
          type: 'warning',
          message: '请输入正确的昵称',
          center: true
        })
      }
    },
    // 更新密码
    updatePasswordHandler(v) {
      this.$refs[v].validate(vaild => {
        if (vaild) {
          if (v == 'setPassword') {
            // 设置密码
            let { password } = this.setPassword.params
            var params = { password }
          } else {
            // 修改密码
            let { oldPassword, password } = this.editPassword.params
            var params = { oldPassword, password }
          }
          const key = CryptoJS.enc.Utf8.parse('jiancc20190401')
          params.password = CryptoJS.AES.encrypt(params.password, key, {
            padding: CryptoJS.pad.Pkcs7,
            mode: CryptoJS.mode.ECB
          }).toString()
          if (params.oldPassword) {
            // 修改密码
            params.oldPassword = CryptoJS.AES.encrypt(params.oldPassword, key, {
              padding: CryptoJS.pad.Pkcs7,
              mode: CryptoJS.mode.ECB
            }).toString()
          }
          updatePassFun(params).then(res => {
            this.$message({
              type: res.success ? 'success' : 'error',
              message: res.message,
              center: true
            })
            if (res.success) {
              this[v].visible = false
            }
          })
        }
      })
    },
    // 修改手机号码
    openEditPhone() {
      if (this.captchaObj) {
        this.editPhone.visible = true
      } else {
        this.initGeerHandler()
      }
    },
    updatePhoneHandler() {
      const self = this
      let {
        step,
        params: { veriCode, phoneNumber }
      } = this.editPhone
      this.$refs['editPhone'].validate(vaild => {
        if (vaild) {
          let data = step == 1 ? { veriCode } : { veriCode, phoneNumber }
          modifyPhoneFun(data).then(res => {
            this.$message({
              type: res.success ? 'success' : 'error',
              message: res.message,
              center: true
            })
            if (res.success) {
              if (step == 1) {
                self.editPhone.step++
              } else {
                updateUserFun({
                  phoneNumber
                }).then(res => {
                  self.$message({
                    type: res.success ? 'success' : 'error',
                    message: res.message,
                    center: true
                  })
                  if (res.success) {
                    self.editPhone.visible = false
                  }
                })
              }
              self.captchaObj.reset()
              clearInterval(self.timer)
              self.times = 0
              self.$refs['editPhone'].resetFields()
            }
          })
        }
      })
    },
    resetHandler(v) {
      const self = this
      switch (v) {
        case 'editNickname':
          this.editNickname.nickName = ''
          break
        case 'setPassword':
          this.$refs['setPassword'].resetFields()
          break
        case 'editPassword':
          this.$refs['editPassword'].resetFields()
          break
        case 'editPhone':
          this.$refs['editPhone'].resetFields()
          this.captchaObj.reset()
          this.editPhone.step = 1
          break
      }
      getUserFun().then(res => {
        let { nickName, phoneNumber, password } = res.data
        self.userInfo = {
          nickName,
          phoneNumber,
          password
        }
      })
    }
  },
  mounted() {
    const self = this
    this.$nextTick(function() {

    })
  }
}
</script>

<style lang="less" scoped>
.account-header {
  height: 126px;
  background-color: #fdfdfd;
  padding: 40px 65px;
  box-sizing: border-box;
  text-align: left;
  line-height: 1;
}
.account-list {
  .account-list-item {
    height: 94px;
    padding: 0 65px;
    display: flex;
    align-items: center;
    border-bottom: 1px dashed #eaedf1;
    position: relative;
    .el-button {
      position: absolute;
      right: 108px;
    }
    .success {
      color: #0067ed !important;
    }
    .disabled {
      color: #999999 !important;
    }
    .danger {
      color: #ed2221 !important;
    }
    .list-item-title {
      width: 234px;
      position: relative;
      padding-left: 35px;
      .iconfont {
        position: absolute;
        top: -4px;
        left: 0px;
        font-size: 24px;
        margin-right: 13px;
      }
    }
  }
  .account-list-item:last-child {
    border-bottom: none;
  }
}
/deep/.el-progress-bar__innerText {
  display: none;
}
/deep/.account-set {
  box-shadow: 0px 13px 51px 0px rgba(10, 39, 85, 0.11);
  .el-dialog__header {
    padding: 13px 20px 12px;
    border-bottom: 1px solid #eaedf1;
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
    > .nickname {
      padding: 20px 120px 30px 140px;
      .el-form-item {
        p {
          text-align: left;
          font-size: 12px;
          line-height: 1;
          color: #999999;
        }
      }
    }
    > .phone {
      padding: 0 190px 30px;
      .el-input__suffix {
        line-height: 40px;
        .el-button {
          color: #0067ed;
          width: 90px;
          &.is-disabled {
            color: #999999 !important;
          }
        }
      }
      .el-input__suffix:after {
        content: '';
        width: 1px;
        height: 15px;
        background: #eaedf1;
        position: absolute;
        left: 0px;
        top: 13px;
      }
    }
    > .password {
      padding: 20px 120px 30px 120px;
    }
    > .set-password {
      padding: 30px 60px 30px 280px;
      background: url('~assets/img/set-password.png') no-repeat;
      background-position: 52px -10px;
    }
    .confirm-btn {
      width: 100%;
      color: #ffffff;
      background-color: #0067ed;
    }
  }
}
</style>

