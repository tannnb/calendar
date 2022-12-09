export function createTrs (count) {
  const trArr = []
  for (let i = 0; i < count; i++) {
    const oTr = document.createElement('tr')
    trArr.push(oTr)
  }
  return trArr
}

export function getDateInfo (timStamp) {
  const time = timStamp ? new Date(timStamp) : new Date()
  return [
    time.getFullYear(),
    time.getMonth() + 1,
    time.getDate()
  ]
}