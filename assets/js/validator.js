//验证手机号码
export const mobile = (rule, value, callback) => {
  var reg = /^1[3|5|7|8]\d{9}$/;
  if (!reg.test(value)) {
    callback(new Error("请输入正确的手机号码"));
    return false;
  } else {
    callback();
    return true;
  }
};

// 密码格式验证
export const password = (rule, value, callback) => {
  var reg = /^[0-9A-Za-z]{8,20}$/;
  console.log(reg.test(value));
  if (!reg.test(value)) {
    callback(new Error("请输入正确的密码"));
  } else {
    callback();
  }
} 

// 验证昵称
export const nickName = (rule, value, callback) => {
  var reg = /^[0-9A-Za-z]{2,12}$/;
  if (!reg.test(value)) {
    callback(new Error("请输入正确的昵称"));
    return false;
  } else {
    callback();
    return true;
  }
}