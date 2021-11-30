import * as React from 'react'

import { FlatList, View } from 'react-native'
import { CitySearchCard } from '../../components/CitySearchCard'
import { useWeather } from '../../hooks/useWeather'
import { NavigationProps } from '../../navigation'

import { styles } from './styles'

export function SearchScreen({navigation}: NavigationProps){
  const { citiesFound, addCity } = useWeather()

  function renderCityList() {
    if(citiesFound && citiesFound.length > 0) {
      return (
        <FlatList 
          contentContainerStyle={styles.flatListContent}
          keyExtractor={item => String(item.id)}
          data={citiesFound}
          renderItem={({item}) => (
            <CitySearchCard 
              primaryText={item.name} 
              secondaryText={item.country} 
              onPress={() => {
                addCity(item)
                navigation.navigate('Home')
              }} 
            />
        
          )}
        />
      )
    }
  }

  return (
    <View style={styles.container}>
      {renderCityList()}
    </View>
  )
}