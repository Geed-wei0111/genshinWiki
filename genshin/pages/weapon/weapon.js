// pages/weapon/weapon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weapons:[],
    searchString:"",
    select:"",
  },
  handleSearch(ev){
    this.setData({
      searchString:ev.detail.value
    })
  },
  searchWeapon(){
    var url = "http://localhost:3000/weapon?";
    if (this.data.searchString.length != 0){
      url+= "name_like=";
      url+= this.data.searchString;
    }
    if (this.data.select.length != 0){
      url+= "&variety=";
      url+= this.data.select;
    }
    wx.request({
      url: url,
      success:res=>{
        console.log(this.data.select+" "+this.data.searchString+" "+url);
        console.log(res.data)
        this.setData({
          weapons:res.data
        })
      }
    })
  },
  handleWeaponDetail(ev){
    wx.navigateTo({
      url: '/pages/weapon/detail/detail?id='+ev.currentTarget.dataset.wepid,
    })
  },
  handleSelect(ev){
    // console.log(ev);
    var vid = ev.currentTarget.dataset.id;
    // console.log(typeof(vid));
    switch(vid){
      case '0':
        this.setData({
          select:""
        })
        break;
      case '1':
        this.setData({
          select:"长柄武器"
        })
        break;
      case '2':this.setData({
          select:"法器"
        })
        break;
      case '3':this.setData({
          select:"单手剑"
        })
        break;
      case '4':
        this.setData({
          select:"双手剑"
        })
        break;
      case '5':
        this.setData({
          select:"弓"
        })
        break;
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://localhost:3000/weapon',
      success:res=>{
        this.setData({
          weapons:res.data
        })
        console.log(this.data.weapons)
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