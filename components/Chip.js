import React from 'react'
import PropTypes from 'prop-types'
import { Chip } from 'react-native-paper'
import { default as s } from '../theme/Styles'

const MTChip = ({ name, icon }) => {
  return (
    <Chip
      style={s.chipStyle}
      textStyle={s.chipTextStyle}
      icon={icon}
      ellipsizeMode="tail"
      disabled>
      {name}
    </Chip>
  )
}

MTChip.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default MTChip
