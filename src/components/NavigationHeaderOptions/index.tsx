import React from 'react'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { MaterialIcons } from '@expo/vector-icons'
import { View , Text} from 'react-native'

import { styles } from './styles'
import { COLORS } from '../../tokens'

type HeaderProps = {
  title: string
  category?: 'default' | 'close-button' | 'back-button'
  onPress?: () => void
}

export default function NavigationHeaderOptions({ title, category = 'default', onPress }: HeaderProps): NativeStackNavigationOptions {

  function headerTitle() {
    return (
      <View style={styles.headerTitleContainer}>
        <Text style={[styles.headerTitle, category === 'close-button' && styles.headerTitleCloseButton]}>
          {title}
        </Text>
      </View>
    )
  }

  function headerLeft() {
    if(category === 'close-button') {
      return (
        <MaterialIcons name='close' size={16} color={COLORS.WHITE_SMOKE} onPress={onPress} />
      ) 
    } else if(category === 'back-button') {
      return (
        <MaterialIcons name='arrow-back-ios' size={16} color={COLORS.WHITE} onPress={onPress}  />
      )
    }
  }

  function headerRight() {
    if(category === 'default') {
      return (
        <MaterialIcons name='search' size={20} color={COLORS.WHITE} onPress={onPress}  />
      )
    }
  }

  const headerStyle = {
    backgroundColor: COLORS.AZURE,
  }

  return {
    headerTitle,
    headerLeft,
    headerRight,
    headerStyle,
  }
}