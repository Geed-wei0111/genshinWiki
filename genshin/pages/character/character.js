// pages/character/character.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    character:[],
    searchString:"",
  },
  handleSearch(ev){
    this.setData({
      searchString:ev.detail.value
    })
  },
  searchCharacter(){
    var url = "http://localhost:3000/character?";
    if (this.data.searchString.length != 0){
      url+= "name_like=";
      url+= this.data.searchString;
    }
    wx.request({
      url: url,
      success:res=>{
        console.log(res.data)
        this.setData({
          character:res.data
        })
      }
    })
  },
  handleCharacterDetail(ev){
    wx.navigateTo({
      url: '/pages/character/detail/detail?id='+ev.currentTarget.dataset.chaid,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://localhost:3000/character',
      success:res=>{
        this.setData({
          character:res.data
        })
        console.log(this.data.character)
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