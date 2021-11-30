import React from 'react'

import { ActivityIndicator, ActivityIndicatorProps, View } from 'react-native'

import { styles } from './styles'

export function Loader(props: ActivityIndicatorProps){
  return (
    <View style={styles.container} >
      <ActivityIndicator  {...props} />
    </View>
  )
}