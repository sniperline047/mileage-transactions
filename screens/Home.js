import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { View, ScrollView } from 'react-native'
import { Caption } from 'react-native-paper'
import { Chip, InfoItem } from '../components'
import { default as s } from '../theme/Styles'
import { useSelector } from 'react-redux'
import { FaButton } from '../components'
import {
  getMetrics,
  getCost,
  getTransaction,
  trends,
  getMonthYear,
} from '../utils/metrics'

const Home = ({ navigation }) => {
  let trxns = useSelector((state) => state.transactions)
  let [metrics, setMetrics] = useState({
    avg: 0,
    lastAvg: 0,
    fuelPriceTrend: 0, // [0 -> up, 1 -> neutral/unknown, 2 -> down]
    fuelConsumptionTrend: 0, // [0 -> up, 1 -> neutral/unknown, 2 -> down]
    currentMonthAvg: 0,
    prevMonthAvergae: 0,
  })

  const routeToAdd = () => {
    navigation.navigate('Add')
  }

  useEffect(() => {
    let newMetrics = getMetrics(trxns)
    setMetrics(newMetrics)
  }, [trxns])

  return (
    <View style={s.baseContainer}>
      <View style={{ margin: 12 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={s.flexCenter}>
            <Chip name="Gas" icon="gas-station-outline" />
            <View style={s.infoCardContainer}>
              <InfoItem
                icon="opacity"
                title={`${metrics.avg}`}
                caption="mi/l"
                description="Average Fuel Consumption"
              />
              <InfoItem
                icon={trends[metrics.fuelConsumptionTrend].icon}
                iconColor={trends[metrics.fuelConsumptionTrend].color}
                title={`${metrics.lastAvg}`}
                caption="mi/l"
                description="Last Fuel Consumption"
              />
              <InfoItem
                icon={trends[metrics.fuelPriceTrend].icon}
                iconColor={trends[metrics.fuelPriceTrend].color}
                title={`₹ ${getTransaction(trxns, trxns.length - 1).ppl}`}
                description="Last Fuel Price"
              />
            </View>
          </View>

          <View style={s.flexCenter}>
            <Chip name="Costs" icon="circle-multiple" />
            <View style={s.infoCardContainer}>
              <Caption style={{ height: 20 }}>This Month</Caption>
              <InfoItem
                icon="gas-station"
                title={`₹ ${metrics.currentMonthAvg}`}
                description="Gas"
              />
              <InfoItem icon="cash-100" title="₹ 0" description="Other Costs" />

              <Caption>Previous Month</Caption>
              <InfoItem
                icon="gas-station"
                title={`₹ ${metrics.prevMonthAvergae}`}
                description="Gas"
              />
              <InfoItem icon="cash-100" title="₹ 0" description="Other Costs" />
            </View>
          </View>

          <View style={s.flexCenter}>
            <Chip name="Last Enteries" icon="chart-timeline-variant" />
            <View style={s.infoCardContainer}>
              <Caption>{getMonthYear(trxns[0].created_at)}</Caption>
              <InfoItem
                icon="gas-station"
                title={`₹ ${getCost(trxns, 1)}`}
                description="Refueling"
              />
              <Caption>{getMonthYear(trxns[1].created_at)}</Caption>
              <InfoItem
                icon="gas-station"
                title={`₹ ${getCost(trxns, 2)}`}
                description="Refueling"
              />
            </View>
          </View>
        </ScrollView>
      </View>
      <FaButton onClick={routeToAdd} />
    </View>
  )
}

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default Home
