import { createDecadeYears, getStartAndEndYear } from "./utils";
import { getDateInfo, createTrs } from '../utils'
import './index.less'
const domPool = {
  controlArea: null
}

// 创建头部区域: <  2020 - 2290  >
export function createYearControlArea (year) {
  const [startYear, endYear] = getStartAndEndYear(year)
  if (!domPool.controlArea) {
    domPool.controlArea = document.createElement('div')
    domPool.controlArea.className = 'year-control-area'
    domPool.controlArea.innerHTML = `
    <span class='year-control-btn btn-year-lt'>&lt;&lt;</span>
    <span class='control-show'>
      <span class='control-title'>
        <span class='start-year'>${startYear}</span>
        -
        <span class='end-year'>${endYear}</span>
      </span>
    </span>
    <span class='year-control-btn btn-year-gt'>&gt;&gt;</span>
    `
  } else {
    domPool.controlArea.querySelector('.start-year').innterText = startYear
    domPool.controlArea.querySelector('.end-year').innterText = endYear
  }

  return domPool.controlArea
}

// 创建10个年份td
export function createYearTd (year) {
  const decadeYearArr = createDecadeYears(year)
  const [currentYear] = getDateInfo()
  const tdArr = []
  decadeYearArr.forEach(year => {
    const oTd = document.createElement('td')
    oTd.className = 'year decade-year'
    if (year === currentYear) {
      oTd.className += ' current'
    }
    oTd.innerText = year
    oTd.setAttribute('data-year', year)
    tdArr.push(oTd)
  })
  return tdArr
}

// 创建3行tr,并添加td到tr中
export function createYearNode (year) {
  const yearTrArr = createTrs(3)
  const yearTds = createYearTd(year)

  let index = 0
  yearTrArr.forEach(tr => {
    for (let i = 0; i < 4 && yearTds[index]; i++) {
      tr.appendChild(yearTds[index++])
    }
  })
  return yearTrArr
}