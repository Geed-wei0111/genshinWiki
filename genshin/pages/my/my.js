// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:wx.getStorageSync('userInfo'),
  },
  //授权登录
  handleLogin(){
    var that = this;
    //获取用户详细信息
    wx.getUserProfile({
      desc: '用于完善会员资料', 
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
        })
        //查询是否有资料在json中
        wx.request({
          url: `http://localhost:3000/users?nickname=${this.data.userInfo.nickName}`,
          success:res=>{
            var phonenum;
            if (res.data.length === 0){
              //输入手机号
              wx.showModal({
                title:"新用户？绑定手机吧！",
                editable:true,
                success:res=>{
                  phonenum = res.content;
                  //上传到json里
                  wx.request({
                    url: 'http://localhost:3000/users',
                    method:'POST',
                    data:{"nickname":that.data.userInfo.nickName,"phone":phonenum},
                  })
                  wx.setStorageSync('userPhone', {"nickname":that.data.userInfo.nickName,"phone":phonenum});
                  wx.setStorageSync('userInfo', that.data.userInfo);
                }
              })
            }else{
              //json里有数据，在手机缓存再存一次
              phonenum = res.data[0].phone;
              wx.setStorageSync('userPhone', {"nickname":that.data.userInfo.nickName,"phone":phonenum});
              wx.setStorageSync('userInfo', that.data.userInfo);
            }
          }
        })
      }
    })
  },
  //退出登录
  handleExit(){
    wx.showModal({
      title:"你确定要退出吗？",
      success:(res)=>{
        if (res.confirm){
          this.setData({
            userInfo:null
          })
          wx.removeStorageSync('userInfo');
          wx.removeStorageSync('userPhone');
        }
      }
    })
  },
  myWeapon(){
    wx.navigateTo({
      url: '/pages/my/likewep/likewep',
    })
  },
  aboutUs(){
    wx.showModal({
      content:"制作：原P小组\n时间：2021年6月30日"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})