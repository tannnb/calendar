import { createWeekDaysNode, createDateNode, createDateTrs } from "./creator"


export function render (oContainer) {
  const oTHead = document.createElement('thead')
  const oTBody = document.createElement('tbody')
  const weekDayNode = createWeekDaysNode()
  oTBody.className = 'my-calendar-body'

  return function (year, month) {
    oTHead.appendChild(weekDayNode)

    const dateTrs = createDateNode(year, month)
    dateTrs.forEach(tr => {
      oTBody.appendChild(tr)
    })

    oContainer.appendChild(oTHead)
    oContainer.appendChild(oTBody)
    return oContainer
  }
}
export function update (year, month) {
  const oTBody = document.querySelector('.my-calendar-body')
  const dateTrs = createWeekDaysNode(year, month)
  oTBody.innerHTML = ''

  dateTrs.forEach(tr => oTBody.appendChild(tr))
}

