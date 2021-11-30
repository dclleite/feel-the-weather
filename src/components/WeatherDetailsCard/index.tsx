import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import { View, Text, TouchableOpacity } from 'react-native'
import { Card } from '../Card'
import { Label } from '../Label'

import { styles } from './styles'

type WeatherDetailsCardProps = {
  primaryText: string
  secondaryText: string
  weatherDescription: string
  tempMin: string
  tempMax: string
  curerentTemp: string
  showIcon: boolean
  isFavorite: boolean

  onPress?: () => void
}

export function WeatherDetailsCard({
  primaryText,
  secondaryText,
  weatherDescription,
  tempMax,
  tempMin,
  curerentTemp,
  showIcon = false,
  isFavorite = false,
  onPress,
}: WeatherDetailsCardProps){

  function renderIcon() {
    if(showIcon) {
      isFavorite 
        ? <MaterialIcons style={styles.icon} name='favorite' size={20} color="#ed0952" /> 
        : <MaterialIcons style={styles.icon} name='favorite-border' size={20} color="#ed0952" />
    }
  }

  return (
    <TouchableOpacity onPress={onPress} disabled={Boolean(!onPress)}>
      <Card style={styles.container}>
        <View style={styles.rowContainer}>
          <Label
            primaryText={primaryText}
            secondaryText={secondaryText}
          />
          <Text style={styles.currentTemp} >{curerentTemp}</Text>
        </View>
        <View style={styles.rowContainer}> 
          <View>
            <Text style={styles.weatherDescription}>{weatherDescription}</Text>
            <Text>{tempMin} - {tempMax}</Text>
          </View>
        
          {renderIcon()}
        </View>
      </Card>
    </TouchableOpacity>
  )
}