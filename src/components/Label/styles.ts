import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../tokens'

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  primaryText: {
    fontFamily: FONTS.ROBOTO_REGULAR,
    fontSize: 24,
    color: COLORS.BLACK_87,
    marginBottom: 2,
  },
  secondayText: {
    fontFamily: FONTS.ROBOTO_REGULAR,
    fontSize: 14,
    color: COLORS.BLACK_87,
  }
})