var util = require('../../utils/util.js')
Page({
  data: {
    date: util.formatTime(new Date()),
    cover: ""
  },
  formSubmit: function (e) {
    const pages = getCurrentPages()
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    try {
      const booklist = wx.getStorageSync('booklist') || []
      let newBook = e.detail.value
      if (!(newBook.name && newBook.cover && newBook.currentPage && newBook.totalPage && newBook.startDate)) {
        wx.showToast({
          title: '缺少必填信息',
          icon: 'warn',
          duration: 2000
        })
        return false
      }
      const currentDate = +new Date()
      Object.assign(newBook, {
        id: newBook.name + currentDate,
        status: 1,
        createdAt: currentDate,
        updatedAt: currentDate
      })
      booklist.push(newBook)
      wx.setStorageSync('booklist', booklist)
      pages[0].updateBooklist()
      wx.navigateBack({
        delta: 1,
        success: function (res) {
          // success
        },
        fail: function () {
          // fail
        },
        complete: function () {
          // complete
        }
      })
    } catch (e) {
      console.log(e)
    }
  },
  formReset: function () {
    console.log('form发生了reset事件')
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  dateChange: function(e) {
    console.log('form 发生了 dateChange 事件，携带数据为：', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  chooseImage: function(e) {
    console.log('form 发生了 chooseImage 事件，携带数据为：')
    const that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        console.log("wx.chooseImage 返回数据", res)
        var tempFilePaths = res.tempFilePaths
        wx.saveFile({
          tempFilePath: tempFilePaths[0],
          success: function (res) {
            console.log("wx.saveFile 返回数据", res)
            var savedFilePath = res.savedFilePath
            that.setData({
              cover: res.savedFilePath
            })
          }
        })
      }
    })
  },
  onLoad: function (option) {
  }
})
