import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../tokens'

export const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  currentTemp: {
    fontFamily: FONTS.ROBOTO_REGULAR,
    fontSize: 34,
    letterSpacing: 0.25,
    color: COLORS.ORANGE,
  },
  weatherDescription: {
    color: COLORS.ORANGE,
    fontFamily: FONTS.ROBOTO_REGULAR,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  tempMinMax: {
    marginTop: 2,
    fontFamily: FONTS.ROBOTO_REGULAR,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
    color: COLORS.BLACK_87
  },
  icon: {
    margin: 15,
    marginRight: 4,
  }

})