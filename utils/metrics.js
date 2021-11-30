import {
  isSameMonth,
  addMonths,
  getDate,
  getMonth,
  getYear,
  parseISO,
} from 'date-fns'

const sectionedData = (trxns) => {
  let sectionedData = []

  let startInx = 0
  for (let i = 1; i < trxns.length; i = i + 1) {
    if (
      !isSameMonth(
        new Date(trxns[i - 1].created_at),
        new Date(trxns[i].created_at)
      )
    ) {
      sectionedData.push({
        title: getMonthYear(trxns[i - 1].created_at),
        data: trxns.slice(startInx, i),
      })
      startInx = i
    }
  }

  sectionedData.push({
    title: getMonthYear(trxns[startInx].created_at),
    data: trxns.slice(startInx, trxns.length),
  })

  return sectionedData
}

const getMetrics = (trxns = []) => {
  let initMtrx = {
    avg: 0,
    lastAvg: 0,
    fuelPriceTrend: 1,
    fuelConsumptionTrend: 1,
    currentMonthAvg: 0,
    prevMonthAvergae: 0,
  }

  let currentSum = getTransactionSum(trxns)
  let lastSum = getTransactionSum(trxns.slice(1, trxns.length))
  let currentMonthSum = getTransactionSum(
    trxns.filter((val) => isSameMonth(new Date(), new Date(val.created_at)))
  )
  let previousMonthSum = getTransactionSum(
    trxns.filter((val) =>
      isSameMonth(addMonths(new Date(), -1), new Date(val.created_at))
    )
  )

  if (currentSum[1] > 0)
    initMtrx.avg = parseFloat((currentSum[3] / currentSum[0]).toFixed(2))
  if (lastSum[1] > 0)
    initMtrx.lastAvg = parseFloat((lastSum[3] / lastSum[0]).toFixed(2))
  initMtrx.currentMonthAvg = parseFloat(currentMonthSum[1].toFixed(2))
  initMtrx.prevMonthAvergae = parseFloat(previousMonthSum[1].toFixed(2))
  initMtrx.fuelPriceTrend =
    currentSum[2] / trxns.length > lastSum[2] / (trxns.length - 1) ? 0 : 2
  initMtrx.fuelConsumptionTrend =
    currentSum[0] / trxns.length > lastSum[0] / (trxns.length - 1) ? 0 : 2

  return initMtrx
}

const getTransactionSum = (trxns) => {
  let totalGas = 0
  let totalCost = 0
  let totalPrice = 0
  let totalDistance = 0
  for (let i = trxns.length - 1; i >= 0; i--) {
    totalGas += trxns[i].gas
    totalCost += trxns[i].ppl * trxns[i].gas
    totalPrice += trxns[i].ppl
    if (i - 1 >= 0) {
      totalDistance += Math.abs(trxns[i].odometer - trxns[i - 1].odometer)
    }
  }

  return [totalGas, totalCost, totalPrice, totalDistance]
}

const trends = [
  { icon: 'trending-up', color: 'green' },
  { icon: 'device-unknown', color: 'yellow' },
  { icon: 'trending-down', color: 'red' },
]

const getTransaction = (trxns, index) => {
  let txn = trxns[index]
  return txn ? txn : { ppl: 0, gas: 0 }
}

const getCost = (trxns, index) => {
  let ppl = getTransaction(trxns, index).ppl
  let gas = getTransaction(trxns, index).gas

  return parseFloat((ppl * gas).toFixed(2))
}

const getMonthYear = (date) => {
  return `${mothList[getMonth(parseISO(date))]}, ${getYear(parseISO(date))}`
}

const getMonthDay = (date) => {
  return `${mothList[getMonth(parseISO(date))]}, ${getDate(parseISO(date))}`
}

const mothList = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export {
  getMetrics,
  getCost,
  getTransaction,
  getMonthYear,
  getMonthDay,
  sectionedData,
  trends,
}
