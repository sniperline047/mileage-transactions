import React from 'react'
import { View, StyleSheet, SectionList, Text } from 'react-native'
import { FaButton, TimelineItem } from '../components'
import { default as s } from '../theme/Styles'
import { Colors as c, Spaces as spc } from '../theme/Theme'
import { useSelector } from 'react-redux'
import { getMonthDay, sectionedData } from '../utils/metrics'

const Timeline = () => {
  let trxns = useSelector((state) => state.transactions)

  const renderItem = ({ item }) => (
    <TimelineItem
      cost={`₹ ${(item.ppl * item.gas).toFixed(2)}`}
      odometer={item.odometer}
      time={getMonthDay(item.created_at)}
    />
  )

  const renderSeparator = ({ section: { title } }) => (
    <View>
      <View style={[styles.timelineStart, styles.timelineDot]} />
      <Text style={styles.header}>{title}</Text>
    </View>
  )

  return (
    <View style={s.baseContainer}>
      <View style={styles.timelineContainer}>
        <View
          style={[
            { width: spc.large, position: 'absolute', left: 4, height: '100%' },
            s.flexCenter,
          ]}>
          <View style={styles.timelineStart} />
          <View style={styles.timelineBar} />
        </View>
        <SectionList
          contentContainerStyle={styles.flatlistContainer}
          sections={sectionedData(trxns)}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          renderSectionHeader={renderSeparator}
          ListFooterComponent={() => (
            <Text style={styles.header}>All Data Loaded!</Text>
          )}
        />
      </View>
      <FaButton />
    </View>
  )
}

const styles = StyleSheet.create({
  flatlistContainer: {
    marginTop: spc.large + spc.small,
    paddingBottom: spc.large + spc.small,
  },
  timelineContainer: {
    flex: 1,
    margin: spc.smaller,
    marginBottom: 0,
    flexDirection: 'row',
  },
  timelineStart: {
    width: spc.default,
    height: spc.default,
    borderRadius: spc.small,
    backgroundColor: c.light,
    position: 'absolute',
    top: 0,
  },
  header: {
    color: c.light,
    fontWeight: '800',
    marginBottom: spc.two,
    marginTop: spc.slab,
    marginLeft: spc.larger,
  },
  timelineBar: { flex: 1, width: 4, backgroundColor: c.light },
  timelineDot: {
    top: 14,
    left: spc.slab,
    borderWidth: 2,
    borderColor: 'white',
  },
})

export default Timeline
