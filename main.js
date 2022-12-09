import MyCalendar from './components/Calendar'

  ; (function () {
    const myCalendar = MyCalendar('#app', [2022, 12], () => {
      console.log('init')
    })
  })()