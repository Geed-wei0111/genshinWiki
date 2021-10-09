// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lunbo:[],
    icon:[],
    comments:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //loading the lunbos
    wx.request({
      url: 'http://localhost:3000/lunbo',
      success:res=>{
        this.setData({
          lunbo:res.data
        })
      }     
    })

    //loading the icons
    wx.request({
      url: 'http://localhost:3000/icons',
      success:res=>{
        this.setData({
          icon:res.data
        })
      }
    })

    //loading the comments
    wx.request({
      url: 'http://localhost:3000/comments',
      success:res=>{
        this.setData({
          comments:res.data,
        })
      }
    })
  },
  handleNavigator(ev){
    var id = ev.currentTarget.dataset.id;
    switch (id){
      case 0:
        wx.navigateTo({
          url: '/pages/character/character',
        })
        break;
      case 1:
        wx.navigateTo({
          url: '/pages/mission/mission',
        });
        break;
      case 2:
        wx.navigateTo({
          url: '/pages/relics/relics',
        });
        break;
      case 3:
        wx.navigateTo({
          url: '/pages/weapon/weapon',
        });
        break;
      default:break;
    }
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
    //loading the comments
    wx.request({
      url: 'http://localhost:3000/comments',
      success:res=>{
        this.setData({
          comments:res.data,
        })
      }
    })
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