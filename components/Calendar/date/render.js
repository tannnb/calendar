import { createWeekDaysNode, createDateNode, createControlArea } from "./creator"
import './index.less'

export function render (oContainer, year, month) {
  oContainer.innerHTML = ''

  const oTable = document.createElement('table')
  oTable.className = 'my-calendar-table'

  const oTHead = document.createElement('thead')
  const oTBody = document.createElement('tbody')
  oTBody.className = 'my-calendar-body'

  const weekDayNode = createWeekDaysNode()

  oTHead.appendChild(weekDayNode)
  const controlArea = createControlArea(year, month)

  const dateTrs = createDateNode(year, month)
  dateTrs.forEach(tr => oTBody.appendChild(tr))

  oTable.appendChild(oTHead)
  oTable.appendChild(oTBody)
  oContainer.appendChild(controlArea)
  oContainer.appendChild(oTable)
}
export function update (year, month) {
  const oTBody = document.querySelector('.my-calendar-body')
  const oTitleYear = document.querySelector('.title-year')
  const oTitleMonth = document.querySelector('.title-month')
  const dateTrs = createDateNode(year, month)

  oTBody.innerHTML = ''
  oTitleYear.innerHTML = year
  oTitleMonth.innerHTML = month
  dateTrs.forEach(tr => oTBody.appendChild(tr))
}

