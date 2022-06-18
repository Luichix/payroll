const { DateTime, Duration } = require('luxon')

const timeMath = (data) => {
  let first = DateTime.fromISO(data[0].FirstTime)
  let second = DateTime.fromISO(data[0].LastTime)
  
  const difTime = second.diff(first,['hour', 'minutes', 'seconds'])
  console.log(difTime.toFormat('hh:mm:ss'))
  return   difTime.toFormat('hh:mm:ss')

}

const durationMath = (data) => {
  let first = Duration.fromISOTime(data[0].FirstDuration)
  let second = Duration.fromISOTime(data[0].SecondDuration)
  
  const difDuration = second.minus(first)

  return difDuration.toFormat('hh:mm:ss')
}



module.exports = {
  timeMath,
  durationMath
}