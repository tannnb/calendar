


let activeTarget = null
export default (oContainer,handler) => {
  oContainer.addEventListener('click', function (e) {
    const target = e.target
    const className = target.className

    if (className.includes('current-day')) {
      if (activeTarget) {
        activeTarget.className = activeTarget.className.replace(' selected', '')
      }
      target.className += ' selected'
      activeTarget = target
      handler && handler(target.dataset.date)
    }
  }, false)
}