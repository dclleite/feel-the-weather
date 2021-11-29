import * as React from 'react'

import { View, ViewProps } from 'react-native'

import { styles } from './styles'

export function Card({ children, style, ...rest }: ViewProps){
  return (
    <View {...rest} style={[style, styles.container]} >
      {children}
    </View>
  )
}