// 获取极验验证码
export const initGeetestFun = () => {
  // return axios.request({
  //   url: "/webApi/user/startCaptcha",
  //   params:{
  //     clientType: "web",
  //     ipAddress: "47.103.36.247"
  //   },
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   methods: "get"
  // });
};

// 发起极验二次请求
export const secondGeetestFun = params => {
  // params = Object.assign(
  //   {
  //     clientType: "web",
  //     ipAddress: "47.103.36.247"
  //   },
  //   params
  // );
  // return axios.request({
  //   url: "/webApi/user/verifyLoginCode",
  //   params,
  //   methods: "get"
  // });
};

// 发起送短信验证码
export const sendSmsFun = phone => {
  // return axios.request({
  //   url: "/webApi/user/sendSms",
  //   params:{
  //     phoneNumber: phone
  //   },
  //   methods: "get"
  // });
};

// 获取微信二维码
export const getQrFun = () => {
  // return axios.request({
  //   url: "/webApi/user/createTempTicket",
  //   methods: "get"
  // });
};

// 验证码登录
export const codeLoginFun = ({ phoneNumber, veriCode, type = 2 }) => {
  // let params = {
  //   phoneNumber,
  //   veriCode,
  //   type
  // };
  // return axios.request({
  //   url: "/webApi/user/register",
  //   params,
  //   methods: "post"
  // });
};

// 账户密码登录
export const passLoginFun = params => {
  // return axios.request({
  //   url: "/webApi/user/login",
  //   params,
  //   methods: "post"
  // });
};

// 注册账号
export const regAccountFun = params => {
  // return axios.request({
  //   url: "/webApi/user/register",
  //   params,
  //   methods: "post"
  // });
};

// 找回密码
export const getPasswordFun = params => {
  // return axios.request({
  //   url: "/webApi/user/forgetPwd",
  //   params,
  //   methods: "post"
  // });
};

// 验证手机号码
export const modifyPhoneFun = params => {
  // return axios.request({
  //   url: "/webApi/user/modifyPhoneNum",
  //   params,
  //   methods: "post"
  // });
};

// 验证账号师傅注册
export const checkRegFun = phoneNumber => {
  // return axios.request({
  //   url: "/webApi/user/checkRegister",
  //   params: {
  //     phoneNumber
  //   },
  //   methods: "post"
  // });
}
