import * as React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import { Text, Caption } from 'react-native-paper'
import { default as s } from '../theme/Styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Colors as c, Spaces as spc } from '../theme/Theme'

const InfoItem = ({ title, description, caption, icon, iconColor }) => (
  <View style={[s.flxRowSpcBtwn, s.infoContainer]}>
    <View style={s.flxRowSpcBtwn}>
      <MaterialCommunityIcons name={icon} size={20} color={iconColor} />
      <View style={s.flxRowSpcBtwn}>
        <Text style={styles.titleText} numberOfLines={1}>
          {title}
        </Text>
        <Caption numberOfLines={1}>{caption}</Caption>
      </View>
    </View>
    <Caption numberOfLines={1}>{description}</Caption>
  </View>
)

InfoItem.defaultProps = {
  caption: '',
  icon: 'home',
  iconColor: c.light,
}

InfoItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  caption: PropTypes.string,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
}

const styles = StyleSheet.create({
  titleText: {
    marginLeft: spc.slab,
    marginRight: spc.smaller,
  },
})

export default InfoItem
