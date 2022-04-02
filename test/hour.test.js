const validateHour = require('./hour').validateHour
const timeMath = require('./hour').timeMath

const data = [{
  ID_HOUR: 1,
  DateDay: "2022-04-01T06:00:00.000Z",
  FK_PERSONAL: 1,
  FirstTime: "07:55:00",
  LastTime: "17:15:00"
}]

describe('time math', () => { 
  test('test time math object data', () => {
    const result = timeMath(data)
    

    expect(result).toBe('09:20:00')
  }) 
 })
