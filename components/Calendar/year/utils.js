

// 获取10年区间
export function createDecadeYears (year) {
  const str = year.toString().slice(0, 3)
  const yearArr = []

  for (let i = 0; i < 10; i++) {
    yearArr.push(Number(str + i))
  }
  return yearArr
}

// 获取10年内，第一年和最后一年
export function getStartAndEndYear (year) {
  const str = year.toString().slice(0, 3)
  return [Number(str + '0'), Number(str + '9')]
}