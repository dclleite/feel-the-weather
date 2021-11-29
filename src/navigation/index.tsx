import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack'
import { Home } from '../screens/Home'
import NavigationHeaderOptions from '../components/NavigationHeaderOptions'
import { useWeather } from '../hooks/useWeather'
import { SearchScreen } from '../screens/SearchScreen'

const Stack = createNativeStackNavigator()

export default function Navigation() {
  const {setIsTypingCityName, searchCityName} = useWeather()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ 
          ...NavigationHeaderOptions({title: 'Cidades', onPress: () => {
            setIsTypingCityName && setIsTypingCityName(true)
          }}),
        }} 
        />
        <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ 
          ...NavigationHeaderOptions({title: searchCityName, category:'close-button', onPress: () => {
            // setIsSearching && setIsSearching(true)
          }}),
          
        }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

type RootStackParamList = {
  Home: undefined
  SearchScreen: undefined
};

export type NavigationProps = NativeStackScreenProps<RootStackParamList>