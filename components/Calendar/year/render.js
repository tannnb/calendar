
import { createYearControlArea, createYearNode } from './creator'
import { getStartAndEndYear } from './utils'


export function render (oContainer, year) {
  oContainer.innerHTML = ''

  const oTable = document.createElement('table')
  oTable.className = 'my-year-calendar-table'

  const controlArea = createYearControlArea(year)
  const yearNode = createYearNode(year)
  yearNode.forEach(tr => oTable.appendChild(tr))

  oContainer.appendChild(controlArea)
  oContainer.appendChild(oTable)
}

export function update (year) {
  const oTable = document.querySelector('.my-year-calendar-table')
  const oStartYear = document.querySelector('.start-year')
  const oEndYear = document.querySelector('.end-year')

  const yearNode = createYearNode(year)
  const [startYear, endYear] = getStartAndEndYear(year)
  oStartYear.innerText = startYear
  oEndYear.innerText = endYear
  oTable.innerHTML = ''
  yearNode.forEach(tr => oTable.appendChild(tr))
}