import { StyleSheet } from 'react-native'
import { COLORS } from '../../tokens'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.WHITE,
    padding: 16,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }
})