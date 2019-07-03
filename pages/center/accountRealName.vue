<template>
  <div class="personal-layout account-setting">
    <panel-component>
      <h4 class="account-setting-title" slot="header">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>账户设置</el-breadcrumb-item>
          <el-breadcrumb-item>实名认证</el-breadcrumb-item>
        </el-breadcrumb>
      </h4>
      <el-form class="account-setting-form" ref="form" :model="form" label-width="85px"  slot="content">
          <el-form-item label="姓名">
            <el-input v-model="form.realName" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="身份证号">
            <el-input v-model="form.idCard" placeholder="请输入身份证号"></el-input>
          </el-form-item>
          <el-form-item label="上传身份证">
            <div class="clearfix">
              <el-upload class="upload-card-front mr16" :show-file-list="false" action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
              </el-upload>
              <el-upload class="upload-card-reverse" :show-file-list="false" action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
              </el-upload>
            </div>
            <p><i>*</i>身份证确认上传后不可修改</p>
          </el-form-item>
          <el-form-item>
            <el-button class="submit-btn" type="primary">确认上传</el-button>
          </el-form-item>
        </el-form>
    </panel-component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        realName: "",
        idCard:""
      }
    }
  },
  computed:{
    realFlag() {
      return this.idCard?true:false;
    },
    emailFlag() {
      return this.eamil?true:false;
    },
    passwordFlag() {
      return this.password?true:false;
    }
  }
}
</script>

<style lang="less" scoped>
.account-setting {
  .account-setting-title {
    padding-top: 20px;
  }
  .account-setting-form {
    width: 505px;
    margin-left: 240px;
    margin-top: 40px;
    .el-form-item__content {
      .el-input {
        width: 340px;
        float: left;
      }
      .upload-card-front, .upload-card-reverse {
        width: 192px;height: 120px;
        float: left;
        /deep/.el-upload--picture-card {
          width: 100%;height: 100%;line-height: 100%;
          border: none;
        }
      }
      .upload-card-front /deep/.el-upload--picture-card {
        background: url("~assets/img/upload-card-front.png") no-repeat center center;
        background-size: cover;
      }
      .upload-card-reverse /deep/.el-upload--picture-card {
        background: url("~assets/img/upload-card-reverse.png") no-repeat center center;
        background-size: cover;
      }
      p {
        color: #222222;text-align:left;
        i {
          color:#ED2221;
        }
      }
      .el-button.submit-btn {
        width: 100%;
        .el-button--primary {
          background-color: #0067ED;
          border-color: #0067ED;
        }
      }
    }
  } 
}
</style>
