
import { ALLOWED_FLAGS, setFlag, getFlag } from './store'

let activeTarget = null
export default (...args) => {
  const [oContainer] = args
  oContainer.addEventListener('click', handleClick.bind(null, ...args), false)
}

function handleClick (...args) {
  const [oContainer, handler, dateInfo, e] = args
  const target = e.target
  const className = target.className
  const flag = getFlag()

  // 点击日期 / 年
  if (className.includes('current-day')) {
    dateClick(target, handler)
    return
  }
  if (className.includes('decade-year')) {
    yearClick(oContainer, target, dateInfo)
  }

  // 点击年
  if (className === 'title-year') {
    titleClick(oContainer, dateInfo)
    return
  }

  switch (flag) {
    case ALLOWED_FLAGS.YEAR:
      yearControlClick(className, dateInfo)
      break
    case ALLOWED_FLAGS.MONTH:
      break
    case ALLOWED_FLAGS.DATE:
      controlClick(className, dateInfo)
      break
    default:
      break
  }
}


function titleClick (conatiner, dateInfo) {
  setFlag(ALLOWED_FLAGS.YEAR, conatiner, dateInfo)
}

function dateClick (target, handler) {
  if (activeTarget) {
    activeTarget.className = activeTarget.className.replace(' selected', '')
  }
  target.className += ' selected'
  activeTarget = target
  handler && handler(target.dataset.date)
}

function yearClick (container, target, dateInfo) {
  dateInfo.year = Number(target.dataset.year)
  setFlag(ALLOWED_FLAGS.DATE, container, dateInfo)
}

function controlClick (className, dateInfo) {
  switch (className) {
    case 'control-btn btn-year-lt':
      dateInfo.year -= 1
      break;
    case 'control-btn btn-month-lt':
      dateInfo.month -= 1
      break;
    case 'control-btn btn-month-gt':
      dateInfo.month += 1
      break;
    case 'control-btn btn-year-gt':
      dateInfo.year += 1
      break;
    default:
      break
  }
}

function yearControlClick (className, dateInfo) {
  switch (className) {
    case 'year-control-btn btn-year-lt':
      dateInfo.year -= 10
      break;
    case 'year-control-btn btn-year-gt':
      dateInfo.year += 10
      break;
    default:
      break
  }
}

