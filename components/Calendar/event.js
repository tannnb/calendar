
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
    return
  }
  if(className.includes('static-momth')) {
    monthClick(oContainer, target, dateInfo)
    return
  }

  // 点击年
  if (className === 'title-year') {
    titleYearClick(oContainer, dateInfo)
    return
  }
  if (className === 'title-month') {
    titleMonthClick(oContainer, dateInfo)
    return
  }

  switch (flag) {
    case ALLOWED_FLAGS.YEAR:
      yearControlClick(className, dateInfo)
      break
    case ALLOWED_FLAGS.MONTH:
      monthControlClick(className,dateInfo)
      break
    case ALLOWED_FLAGS.DATE:
      dateControlClick(className, dateInfo)
      break
    default:
      break
  }
}

function titleYearClick (conatiner, dateInfo) {
  setFlag(ALLOWED_FLAGS.YEAR, conatiner, dateInfo)
}
function titleMonthClick (conatiner, dateInfo) {
  setFlag(ALLOWED_FLAGS.MONTH, conatiner, dateInfo)
}


function yearClick (container, target, dateInfo) {
  dateInfo.year = Number(target.dataset.year)
  setFlag(ALLOWED_FLAGS.DATE, container, dateInfo)
}
function monthClick(container, target, dateInfo) {
  dateInfo.month = Number(target.dataset.month)
  setFlag(ALLOWED_FLAGS.DATE, container, dateInfo)
}
function dateClick (target, handler) {
  if (activeTarget) {
    activeTarget.className = activeTarget.className.replace(' selected', '')
  }
  target.className += ' selected'
  activeTarget = target
  handler && handler(target.dataset.date)
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
function monthControlClick (className, dateInfo) {
  switch (className) {
    case 'month-control-btn btn-year-lt':
      dateInfo.year-= 1
      break;
    case 'month-control-btn btn-year-gt':
      dateInfo.year += 1
      break;
    default:
      break
  }
}
function dateControlClick (className, dateInfo) {
  switch (className) {
    case 'control-btn btn-year-lt':
      dateInfo.year -= 1
      break;
    case 'control-btn btn-month-lt':
      dateInfo.month > 1 && (dateInfo.month -= 1)
      break;
    case 'control-btn btn-month-gt':
      dateInfo.month < 12 && (dateInfo.month += 1)
      break;
    case 'control-btn btn-year-gt':
      dateInfo.year += 1
      break;
    default:
      break
  }
}
