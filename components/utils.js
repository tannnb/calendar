// 当月第一天是周几
function getFirstWeekDay (year, month) {
  const date = new Date(year, month - 1, 1)
  return date.getDay()
}

// 当月多少天
function getMontDayCount (year, month) {
  const date = new Date(year, month, 0)
  return date.getDate()
}

function getLastMonthRestDays (year, month) {
  const days = getFirstWeekDay(year, month)
  let lastDate = getMontDayCount(year, month - 1)
  const restDays = []
  while (restDays.length < days) {
    restDays.push(lastDate--)
  }
  return restDays.reverse()
}

function getNextMonthRestDays (year, month) {
  const lastMonthRestDayCount = getFirstWeekDay(year, month)
  const currentMonthRestDayCount = getMontDayCount(year, month)
  const nextMonthRestDayCount = 42 - (lastMonthRestDayCount + currentMonthRestDayCount)
  const restDay = []
  for (let i = 1; i <= nextMonthRestDayCount; i++) {
    restDay.push(i)
  }
  return restDay
}

function getDateInfo (timStamp) {
  const time = timStamp ? new Date(timStamp) : new Date()
  return [
    time.getFullYear(),
    time.getMonth() + 1,
    time.getDate()
  ]
}

function getFormatDate (year, month, date) {
  const dateArr = [year, month, date]
  for (let i = 1; i < dateArr.length; i++) {
    dateArr[i] < 10 && (dateArr[i] = '0' + dateArr[i])
  }
  return dateArr.join('-')
}