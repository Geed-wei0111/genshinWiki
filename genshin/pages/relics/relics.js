// pages/relics/relics.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    relics:[],
    searchString:"",
  },
  //传值
  handleSearch(ev){
    this.setData({
      searchString:ev.detail.value
    })
  },
  //搜索
  searchRelics(){
    var url = "http://localhost:3000/relics?";
    if (this.data.searchString.length != 0){
      url+= "name_like=";
      url+= this.data.searchString;
    }
    
    wx.request({
      url: url,
      success:res=>{
        console.log(res.data)
        this.setData({
          relics:res.data
        })
      }
    })
  },
  //跳转到详情页
  handleRelicsDetail(ev){
    wx.navigateTo({
      url: '/pages/relics/detail/detail?id='+ev.currentTarget.dataset.reid,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://localhost:3000/relics',
      success:res=>{
        this.setData({
          relics:res.data
        })
        console.log(this.data.relics)
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