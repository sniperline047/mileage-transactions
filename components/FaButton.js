import * as React from 'react'
import PropTypes from 'prop-types'
import { FAB } from 'react-native-paper'
import { default as s } from '../theme/Styles'

const FaButton = ({ onClick }) => (
  <FAB
    style={s.fabStyle}
    medium
    icon="plus"
    onPress={() => onClick()}
  />
)

FaButton.defaultProps = {
  onClick: () => {},
}

FaButton.propTypes = {
  onClick: PropTypes.func,
}

export default FaButton
