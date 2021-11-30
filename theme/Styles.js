/**
 * Project level stylesheet for common styles
 */

import { StyleSheet } from 'react-native'
import { Colors as c, Spaces as spc } from './Theme'

export default StyleSheet.create({
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  flxRowSpcBtwn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
  },
  baseContainer: {
    flex: 1,
    backgroundColor: c.backgroundSecondary,
    color: c.primary,
  },
  chipStyle: {
    margin: spc.default,
    alignItems: 'center',
    flex: 1,
    backgroundColor: c.background,
  },
  chipTextStyle: {
    color: c.primary,
  },
  fabStyle: {
    position: 'absolute',
    right: spc.small,
    bottom: spc.small,
  },
  infoCardContainer: {
    flex: 1,
    width: '100%',
    borderRadius: spc.small,
    marginHorizontal: spc.default,
    padding: spc.small,
    backgroundColor: c.background,
  },
  infoContainer: {
    flex: 1,
    marginBottom: spc.small,
  },
  infoItemStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  customHeader: {
    backgroundColor: c.background,
    color: c.primary,
  },
  customInput: {
    backgroundColor: c.backgroundSecondary,
    borderWidth: 1,
    flex: 1,
    borderRadius: spc.small,
    borderColor: c.background,
    height: spc.larger,
    color: c.primary,
    padding: spc.slab,
    marginLeft: spc.slab,
  },
  formContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spc.default,
    width: '100%',
  },
  customPicker: {
    backgroundColor: c.backgroundSecondary,
    borderWidth: 1,
    flex: 1,
    borderRadius: spc.small,
    borderColor: c.background,
    height: spc.larger,
    color: c.primary,
    marginLeft: spc.slab,
    overflow: 'hidden',
    paddingBottom: spc.default,
  },
})
