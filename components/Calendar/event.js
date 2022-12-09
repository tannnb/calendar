


let activeTarget = null
export default (oContainer, handler, dateInfo) => {
  oContainer.addEventListener('click', handleClick.bind(null, handler, dateInfo), false)
}


function handleClick (...args) {
  const [handler, dateInfo, e] = args
  const target = e.target
  const className = target.className

  if (className.includes('current-day')) {
    dateClick(target, handler)
    return
  }

  controlClick(className, dateInfo)
}

function dateClick (target, handler) {
  if (activeTarget) {
    activeTarget.className = activeTarget.className.replace(' selected', '')
  }
  target.className += ' selected'
  activeTarget = target
  handler && handler(target.dataset.date)
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