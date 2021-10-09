// pages/mission/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    video:null,
    comment:[]
  },
  //发表评论
  handleComment(){
    wx.showModal({
      editable:true,
      title:"输入你的评论",
      success:res=>{
        if (res.confirm){
          wx.request({
            url: 'http://localhost:3000/video_comment',
            method:"POST",
            data:{"vid":this.data.video.id,"comment":res.content}
          })
          this.loadComment();
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 加载视频
    wx.request({
      url: 'http://localhost:3000/videos?id='+options.id,
      success:res=>{
        this.setData({
          video:res.data[0]
        })
        //设置小标题
        wx.setNavigationBarTitle({
          title: this.data.video.name,
        })
        //加载评论
        this.loadComment();
      }
    })
  },
  loadComment(){
    wx.request({
      url: 'http://localhost:3000/video_comment?vid='+this.data.video.id,
      success:res=>{
        if (res.data.length != 0){
          this.setData({
            comment:res.data
          })  
        }else{
          wx.showToast({
            title: '该视频没有评论',
            icon:"none",
            duration:2000
          })
        }
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