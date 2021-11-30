import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../tokens'

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
  },
  primaryText: {
    fontFamily: FONTS.ROBOTO_REGULAR,
    fontSize: 24,
    color: COLORS.BLACK_87,
    marginBottom: 2,
    flexWrap: 'wrap'
  },
  secondayText: {
    fontFamily: FONTS.ROBOTO_REGULAR,
    fontSize: 14,
    color: COLORS.BLACK_87,
    flexWrap: 'wrap'
  }
})