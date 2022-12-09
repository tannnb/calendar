import { getDateInfo } from './utils'
import { render, update } from './render'
import './index.less'
import event from './event'
import reactive from './reactive'

export default (handler) => {
  const oContainer = document.createElement('div')
  oContainer.className = 'my-calendar'
  const dateInfo = reactive()
  event(oContainer, handler, dateInfo)

  return {
    render: render(oContainer),
    update,
    getDateInfo
  }
}