import { createMonthControlArea, createMonthNode } from './creator'
import './index.less'

export function render (oContainer, year,month) {
  oContainer.innerHTML = ''

  const oTable = document.createElement('table')
  oTable.className = 'my-month-calendar-table'

  const controlArea = createMonthControlArea(year)
  const monthNode = createMonthNode(month)
  monthNode.forEach(tr => oTable.appendChild(tr))

  oContainer.appendChild(controlArea)
  oContainer.appendChild(oTable)
}


export function update (year) {
  const oYear = document.querySelector('.title-year')
  oYear.innerText = year
}