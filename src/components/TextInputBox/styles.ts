
import { Platform, StyleSheet } from 'react-native'
import { COLORS } from '../../tokens'

export const styles = StyleSheet.create({
  container: {
    paddingBottom: Platform.OS === 'ios' ? 100 : 0,
    width: '100%',
    paddingTop: 16,
  },
  input: {
    width: '100%',
    height: 50,
    textAlignVertical: 'top',
    color: COLORS.BLACK_60
  }
})