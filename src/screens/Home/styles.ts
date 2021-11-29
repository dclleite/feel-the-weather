import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../tokens'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  primaryText: {
    fontFamily: FONTS.ROBOTO_MEDIUM,
    fontSize: 20,
    textAlign: 'center',
    color: COLORS.BLACK_87,
    marginHorizontal: 14,
    marginBottom: 16
  },
  secondaryText: {
    fontFamily: FONTS.ROBOTO_REGULAR,
    fontSize: 16,
    textAlign: 'center',
    color: COLORS.BLACK_60
  }
})