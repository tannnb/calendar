import event from './event'
import { reactive } from './store'
import { render } from './date/render'
import { getDateInfo } from './utils'
import './index.less'


export default (...args) => {
  if (args.length === 2 && typeof args[1] === 'function') {
    const [year, month] = getDateInfo
    const [el, handler] = args
    init(el, [year, month], handler)
  } else {
    const [el, [year, month], handler] = args
    init(el, [year, month], handler)
  }
}

function init (el, [year, month], handler) {
  const App = document.querySelector(el)

  const oContainer = document.createElement('div')
  oContainer.className = 'my-calendar'

  render(oContainer, year, month)
  const dateInfo = reactive({ year, month })
  event(oContainer, handler, dateInfo)

  App.appendChild(oContainer)
}