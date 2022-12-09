
import { getMonthDayCount, getNextMonthRestDays, getDateInfo, getLastMonthRestDays, getFormatDate } from "./utils"
import { WEEK_DAYS } from "./config"


export function createWeekDaysNode () {
  const oTr = document.createElement('tr')
  oTr.className = 'week-day'
  oTr.innerHTML = WEEK_DAYS.map(item => (`<th>${item}</th>`)).join('')
  return oTr
}

export function createDateNode (year, month) {
  const lastMonthRestDayCount = getLastMonthRestDays(year, month)
  const currentMonthRestDayCount = getMonthDayCount(year, month)
  const nextMonthRestDays = getNextMonthRestDays(year, month)
  const dateTrArr = createDateTrs(6)

  const lastMonthRestDaysTd = createRestDaysTd(lastMonthRestDayCount)
  const currentMonthRestDaysTd = createCurrentDaysTd(currentMonthRestDayCount, year, month)
  const nextMonthRestDaysTd = createRestDaysTd(nextMonthRestDays)

  const tdArr = [
    ...lastMonthRestDaysTd,
    ...currentMonthRestDaysTd,
    ...nextMonthRestDaysTd
  ]

  let index = 0
  dateTrArr.forEach(tr => {
    for (let i = 0; i < 7; i++) {
      tr.appendChild(tdArr[index])
      index++;
    }
  })

  return dateTrArr
}

export function createDateTrs (count) {
  const trArr = []
  for (let i = 0; i < count; i++) {
    const oTr = document.createElement('tr')
    trArr.push(oTr)
  }
  return trArr
}

function createRestDaysTd (restArr) {
  return restArr.map(item => {
    const oTd = document.createElement('td')
    oTd.className = 'day rest-day'
    oTd.innerText = item
    return oTd
  })
}

function createCurrentDaysTd (currentDayCount, year, month) {
  const oTdArr = []
  const [currentYear, currentMonth, currentDate] = getDateInfo()
  for (let i = 1; i <= currentDayCount; i++) {
    const oTd = document.createElement('td')
    const currentActive = currentYear === year && currentMonth === month && currentDate === i
    oTd.className = currentActive ? 'day current-day current' : 'day current-day'

    oTd.innerText = i
    oTd.setAttribute('data-date', getFormatDate(year, month, i))
    oTdArr.push(oTd)
  }
  return oTdArr
}