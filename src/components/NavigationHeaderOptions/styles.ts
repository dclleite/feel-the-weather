import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../tokens'

export const styles = StyleSheet.create({
  headerTitleContainer: {
    width: '100%',
  },
  headerTitle: {
    fontFamily: FONTS.ROBOTO_MEDIUM,
    color: COLORS.WHITE,
    fontSize: 20,
  },
  headerTitleCloseButton: {
    fontFamily: FONTS.ROBOTO_REGULAR,
    color: COLORS.WHITE_SMOKE,
    fontSize: 16,
    lineHeight: 24,
  }
})