//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    booklist: []
  },
  addBook: function () {
    wx.navigateTo({
      url: '../newbook/index'
    })
  },
  viewDetails: function(event) {
    const { bookid } = event.currentTarget.dataset
    console.log(bookid)
    wx.navigateTo({
      url: `../bookdetails/bookdetails?bookId=${bookid}`
    })
  },
  updateBooklist: function() {
    const booklist = wx.getStorageSync('booklist')
    this.setData({booklist})
  },
  clearBooklist: function() {
    wx.clearStorageSync()
    this.setData({booklist: []})
  },
  onLoad: function () {
    var that = this
    const booklist = wx.getStorageSync('booklist')
    this.setData({booklist})
  }
})

/*{
      id: 1,
      name: '计算机程序的构造与解释',
      cover: 'https://img5.doubanio.com/lpic/s1113106.jpg',
      currentPage: 1,
      totalPage: 473,
      startDate: '2017-03-22'
    }, {
      id: 2,
      name: '软件随想录',
      cover: 'https://img3.doubanio.com/lpic/s6103451.jpg',
      currentPage: 1,
      totalPage: 292,
      startDate: '2017-03-15'
    }, {
      id: 3,
      name: 'R语言编程艺术',
      cover: 'https://img1.doubanio.com/lpic/s26540607.jpg',
      currentPage: 1,
      totalPage: 303,
      startDate: '2017-03-15'
    }, {
      id: 4,
      name: '算法导论',
      cover: 'https://img3.doubanio.com/lpic/s25648004.jpg',
      currentPage: 1,
      totalPage: 780,
      startDate: '2017-03-15'
    }, {
      id: 5,
      name: '垃圾回收的算法与实现',
      cover: 'https://img3.doubanio.com/lpic/s28830934.jpg',
      currentPage: 1,
      totalPage: 456,
      startDate: '2017-03-15'
    }
*/