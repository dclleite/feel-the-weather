import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../tokens'

export const styles = StyleSheet.create({
  button: {
    height: 48,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.ORANGE,
  },
  title: {
    fontSize: 16,
    fontFamily: FONTS.ROBOTO_MEDIUM,
    color: COLORS.WHITE
  }
})