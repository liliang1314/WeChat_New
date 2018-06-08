Page({
  data:{
      name:"",
      password:"",
      disabled:true,
      toastHidden:true,
      toast_title:""
  },

  onPullDownRefresh: function() {

  },

  nameChange: function(e){
      this.setData({
          name:e.detail.value
      })
      var pwd = this.data.password;
      if(pwd.length > 0 && e.detail.value.length > 0){
          this.setData({
              disabled: false
          })
      }else{
          this.setData({
              disabled: true
          })
      }
  },
  pwdChange: function(e){
      this.setData({
          password:e.detail.value
      })
      var name = this.data.name;
      if(name.length > 0 && e.detail.value.length > 0){
          this.setData({
              disabled: false
          })
      }else{
          this.setData({
              disabled: true
          })
      }
  },

  onShareAppMessage: function () {
      return {
        title:"分享吧",
        desc: "什么东西？"
      }
  },

  login: function(){
      var name = this.data.name;
      var pwd = this.data.password;
      if(name === "name" && pwd === "123456"){
        //   this.setData({
        //       toastHidden:false,
        //       toast_title:'登录成功'
        //   })
          wx.navigateTo({
              url:"weather"
          })

      }else{
          this.setData({
              toastHidden:false,
              toast_title:'用户名／密码错误'
          })
      }
    //   var that = this;
    //   setTimeout(function(){
    //       that.setData({
    //           toastHidden:true
    //       })
    //   },3000);
  },
})
