const getItem = function(v) {
  var result = ''
  try{
    result =  JSON.parse(localStorage.getItem("userInfo"))[v];
  }
  catch {
    result = '';
  }
  finally {
    return result;
  }
}

const user = {
  state: {
    token: getItem('token'),
    nickName: getItem('nickName'),
    lastLoginTime: getItem('lastLoginTime')
  },
  mutations: {
    changeUser(state, v) {
      if (v) {
        localStorage.setItem("userInfo", JSON.stringify(v));
        state.token = v.token;
        state.nickName = v.nickName;
        state.lastLoginTime = v.lastLoginTime;
      } else {
        localStorage.removeItem("userInfo");
        state.token = undefined;
        state.nickName = undefined;
        state.lastLoginTime = undefined;
      }
    }
  }
};

export default user;
