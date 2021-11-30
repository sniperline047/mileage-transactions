import faker from 'faker'

export default function getFakeInitialTransactions(count) {
  // initializing globals
  let LATEST_ODOMETER = faker.datatype.number({
    min: 18000,
    max: 26000,
    precision: 1,
  })
  let LATEST_DATE_RANGE = 1
  let DATE_RANGE_START = new Date()
  let DATE_RANGE_END = new Date(
    DATE_RANGE_START - LATEST_DATE_RANGE * 24 * 3600 * 1000
  )

  let txns = []

  for (let i = count; i > 0; i--) {
    let data = {
      odometer:
        LATEST_ODOMETER -
        faker.datatype.number({ min: 5, max: 100, precision: 1 }),
      gas: faker.datatype.number({ min: 1, max: 5, precision: 0.25 }),
      type: faker.random.arrayElement([0, 1]),
      ppl: parseFloat(faker.finance.amount(80, 90, 2)),
      created_at: faker.date.between(DATE_RANGE_START, DATE_RANGE_END).toISOString(),
      id: faker.datatype.uuid(),
    }

    txns.push(data)

    // updating globals
    LATEST_ODOMETER = data.odometer
    LATEST_DATE_RANGE += faker.datatype.number({ min: 1, max: 5, precision: 1 })
    DATE_RANGE_START = DATE_RANGE_END
    DATE_RANGE_END = new Date(
      DATE_RANGE_START - LATEST_DATE_RANGE * 24 * 3600 * 1000
    )
  }

  return txns
}
