import event from './event'
import {reactive} from './store'
import { render } from './date/render'
import './index.less'

export default (el, [year, month], handler) => {
  const App = document.querySelector(el)

  const oContainer = document.createElement('div')
  oContainer.className = 'my-calendar'

  render(oContainer, year, month)
  const dateInfo = reactive({ year, month })
  event(oContainer, handler, dateInfo)

  App.appendChild(oContainer)
}