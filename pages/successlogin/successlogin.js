// pages/successlogin/successlogin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      userId:'',
      ajlist:[],
      index:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userId:options.userId,
    })
    console.log(this.data.userId)

    wx.request({
      url: 'http://localhost:8080/getRealateCase',
      data:{
        userId:this.data.userId
      },
      method:'GET',
      header:{
        'content-type':'application/json'
      },
      success:res =>{
        console.log(res)
        this.setData({
          ajlist:res.data
        })
      },
      fail:function(res){
        console.log("--------fail--------");
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
    wx.request({
      url: 'http://localhost:8080/getRealateCase',
      data:{
        userId:this.data.userId
      },
      method:'GET',
      header:{
        'content-type':'application/json'
      },
      success:res =>{
        console.log(res)
        this.setData({
          ajlist:res.data
        })
      },
      fail:function(res){
        console.log("--------fail--------");
      }
    })
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

  },

  relate:function(e){
    wx.navigateTo({
      url: '../relateaj/relateaj?userId='+this.data.userId,
    })
  }











})