const { DateTime } = require('luxon')


const timeMath = (data) => {
  let first = DateTime.fromISO(data[0].FirstTime)
  let second = DateTime.fromISO(data[0].LastTime)

  const difTime = second.diff(first,['hours', 'minutes', 'seconds'])
  console.log(difTime.toString())
  console.log(difTime.toObject())
  console.log(difTime.toFormat('hh:mm:ss'))

  return   difTime.toFormat('hh:mm:ss')

}


module.exports = {
  timeMath
}