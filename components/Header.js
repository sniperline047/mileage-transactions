import * as React from 'react'
import PropTypes from 'prop-types'
import { Appbar } from 'react-native-paper'
import { default as s } from '../theme/Styles'

const CustomHeader = ({ headerTitle, goBack, handleSave, disabled }) => {
  return (
    <Appbar.Header style={s.customHeader}>
      <Appbar.BackAction onPress={goBack} />
      <Appbar.Content title={headerTitle} />
      <Appbar.Action icon="check" disabled={disabled} onPress={handleSave} />
    </Appbar.Header>
  )
}

CustomHeader.defaultProps = {
  headerTitle: '',
  disabled: false,
  goBack: () => {},
  handleSave: () => {},
}

CustomHeader.propTypes = {
  headerTitle: PropTypes.string,
  goBack: PropTypes.func,
  disabled: PropTypes.bool,
  handleSave: PropTypes.func,
}

export default CustomHeader
