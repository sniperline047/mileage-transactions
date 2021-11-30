import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import { Text, Caption, Avatar } from 'react-native-paper'
import { Colors as c, Spaces as spc } from '../theme/Theme'
import { MaterialIcons } from '@expo/vector-icons'

const TimelineItem = ({ cost, odometer, time }) => (
  <View style={styles.itemContainer}>
    <Avatar.Icon
      style={styles.avatar}
      color={c.background}
      size={40}
      icon="speedometer"
    />
    <View style={{ flex: 1 }}>
      <Text>Refueling</Text>
      <Caption>{time}</Caption>
      <View style={styles.odometerText}>
        <MaterialIcons
          style={{ marginRight: spc.small }}
          name="speed"
          size={20}
          color={c.light}
        />
        <Caption>{`${odometer} mi`}</Caption>
      </View>
    </View>
    <Text>{cost}</Text>
  </View>
)

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: c.background,
    borderRadius: spc.small,
    padding: spc.medium,
    marginBottom: spc.medium,
    marginLeft: spc.large,
  },
  avatar: {
    position: 'absolute',
    left: -spc.large,
    backgroundColor: c.light,
  },
  odometerText: { flexDirection: 'row', alignItems: 'center' },
})

TimelineItem.defaultProps = {
  odometer: 0,
  cost: '₹ 0',
  time: '-',
}

TimelineItem.propTypes = {
  cost: PropTypes.string.isRequired,
  odometer: PropTypes.number,
  time: PropTypes.string,
}

export default TimelineItem
