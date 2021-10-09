// pages/weapon/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weapon:{},
    wepid:null
  },
  likeThisWeapon(){
    var user = wx.getStorageSync('userPhone');
    // console.log(this.data.wepid+" "+user.phone);
    wx.request({
      url: 'http://localhost:3000/weapon_like?user='+user.phone+"&wepid="+this.data.wepid,
      success:res=>{
        if ( wx.getStorageSync('userPhone').phone == null){
          wx.showToast({
            title: '你还没登录呢',
          })
        }
        else if (res.data.length === 0){
          wx.request({
            url: 'http://localhost:3000/weapon_like',
            method:"POST",
            data:{"user":user.phone, "wepid":this.data.wepid,"wepname":this.data.weapon.name}
          })
          wx.showToast({
            title: '收藏成功~',
          })
        }else{
          wx.showToast({
            title: '你已经收藏过了哦',
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://localhost:3000/weapon?id='+options.id,
      success:res=>{
        this.setData({
          weapon:res.data[0],
          wepid:options.id
        })
        wx.setNavigationBarTitle({
          title: this.data.weapon.name,
        })
        // console.log(this.data.weapon)
      }
    })
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