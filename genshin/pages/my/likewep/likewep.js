// pages/my/likewep/likewep.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },
  handleDetail(ev){
    var id = ev.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/weapon/detail/detail?id='+id,
    })
  },
  handleDelete(ev){
    var id = ev.currentTarget.dataset.id;
    wx.showModal({
      title:"你确定要删除吗？",
      success:res=>{
        if (res.confirm){
          wx.request({
            url: 'http://localhost:3000/weapon_like/'+id,
            method:"DELETE"
          })
          this.loadWeapon();
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadWeapon();
  },
  loadWeapon(){
    var phone = wx.getStorageSync('userPhone');
    wx.request({
      url: 'http://localhost:3000/weapon_like?user='+phone.phone,
      success:res=>{
        this.setData({
          list:res.data
        })
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