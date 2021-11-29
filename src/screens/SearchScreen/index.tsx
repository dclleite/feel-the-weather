import * as React from 'react'

import { ScrollView } from 'react-native'
import { CitySearchCard } from '../../components/CitySearchCard'
import { useWeather } from '../../hooks/useWeather'
import { NavigationProps } from '../../navigation'

import { styles } from './styles'

export function SearchScreen({navigation}: NavigationProps){
  const { citiesFound, addCity } = useWeather()
  return (
    <ScrollView 
      style={{ flex: 1 }}
      contentContainerStyle={{ alignItems: 'center' , padding: 16 }}
    >
      {citiesFound && citiesFound.length && citiesFound.map((city) => (
        <CitySearchCard 
          key={city.id}
          primaryText={city.name} 
          secondaryText={city.country} 
          onPress={() => {
            addCity(city)
            navigation.navigate('Home')
          }} 
        />
      ))}
      

    </ScrollView>
  )
}