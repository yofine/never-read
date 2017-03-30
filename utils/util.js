const formatTime = date => {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('-')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const daysAndSpeed = (start, end, currentPage) => {
  console.log(start, end, currentPage)
  let days = 1
  if (start < end) {
    let startDate = start.split('-')
    let _startDate = new Date(`${startDate[1]}-${startDate[2]}-${startDate[0]}`)
    let endDate = end.split('-')
    let _endDate = new Date(`${endDate[1]}-${endDate[2]}-${endDate[0]}`)
    const days = parseInt(Math.abs(_endDate - _startDate) / 1000 / 60 / 60 / 24) + 1
  }
  const speed = currentPage > 0 ? Math.round(currentPage / days) : 0
  return { days, speed }
}


module.exports = {
  formatTime,
  daysAndSpeed,
}