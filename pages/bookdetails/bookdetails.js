var util = require('../../utils/util.js')
Page({
  data: {
    book: {},
    days: 0,
    speed: 0,
  },
  updateIndexPage: function () {
    const pages = getCurrentPages()
    pages[0].updateBooklist()
  },
  up: function () {
    let { booklist, book } = this.data
    book.currentPage = +book.currentPage + 1
    booklist.some(e => {
      if (e.id == book.id) {
        e.currentPage = +e.currentPage + 1
        return true
      }
    })
    const { days, speed} = util.daysAndSpeed(book.startDate, util.formatTime(new Date()), book.currentPage)
    this.setData({ booklist, book, days, speed })
    wx.setStorageSync('booklist', booklist)
    this.updateIndexPage()
  },
  down: function () {
    let { booklist, book } = this.data
    book.currentPage = +book.currentPage - 1
    booklist.some(e => {
      if (e.id == book.id) {
        e.currentPage = +e.currentPage - 1
        return true
      }
    })
    const { days, speed} = util.daysAndSpeed(book.startDate, util.formatTime(new Date()), book.currentPage)
    this.setData({ booklist, book, days, speed })
    wx.setStorageSync('booklist', booklist)
    this.updateIndexPage()
  },
  onLoad: function (option) {
    const booklist = wx.getStorageSync('booklist')
    let book
    booklist.some(e => {
      if (e.id == option.bookId) {
        book = e
        return true
      }
    })
    console.log(book)
    const { days, speed} = util.daysAndSpeed(book.startDate, util.formatTime(new Date()), book.currentPage)
    this.setData({ booklist, book, days, speed })
  }
})
