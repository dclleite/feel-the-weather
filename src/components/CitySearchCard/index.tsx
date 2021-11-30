import * as React from 'react'
import { View } from 'react-native'

import { Button } from '../Button'
import { Card } from '../Card'
import { Label } from '../Label'

import { styles } from './styles'

type CitySearchCardProps = {
  primaryText: string
  secondaryText: string
  onPress: () => void
}

export function CitySearchCard({ primaryText, secondaryText, onPress }: CitySearchCardProps){
  return (
    <Card style={styles.container}>
      <Label 
        primaryText={primaryText}
        secondaryText={secondaryText}
      />
      <Button title='ADICIONAR' appearance='secondary' style={styles.button} onPress={onPress} />
    </Card>
  )
}