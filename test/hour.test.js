const timeMath = require('./hour').timeMath
const durationMath = require('./hour').durationMath

const data = [{
  ID_HOUR: 1,
  DateDay: "2022-04-01T06:00:00.000Z",
  FK_PERSONAL: 1,
  FirstTime: "2022-04-01T21:00:00",
  LastTime: "2022-04-02T05:00:00",
  FirstDuration: '21:00:00',
  SecondDuration: '29:00:00'
}]

describe('time math', () => { 
  test('test time math object data', () => {
    const result = timeMath(data)

    expect(result).toBe('08:00:00')
  }) 

  test('test duration math object data', () => {
    const result = durationMath(data)

    expect(result).toBe('08:00:00')
  })

 })
