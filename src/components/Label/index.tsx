import * as React from 'react'

import { View, Text } from 'react-native'

import { styles } from './styles'

type LabelProps = {
  primaryText: string
  secondaryText: string
}

export function Label({ primaryText, secondaryText }: LabelProps){
  return (
    <View style={styles.container}>
      <Text style={styles.primaryText}>{primaryText}</Text>
      <Text style={styles.secondayText}>{secondaryText}</Text>
    </View>
  )
}