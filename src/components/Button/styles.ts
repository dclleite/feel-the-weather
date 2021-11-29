import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../tokens'

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDefault: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  buttonContainer: {
    width: '100%',
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontFamily: FONTS.ROBOTO_MEDIUM,
  }
})