import MyCalendar from './components/Calendar'
import { update, render } from './components/Calendar/render'

  ; (function () {
    const myCalendar = MyCalendar(handler)
    const App = document.querySelector('#app')
    const dateInfo = myCalendar.getDateInfo()
  
    function init () {
      render(...dateInfo)
    }

    function render (...args) {
      App.appendChild(myCalendar.render(...args))
    }

    function handler(date) {
      console.log(date)
    }


    init()
  })()