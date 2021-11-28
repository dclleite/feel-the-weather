import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home'
import NavigationHeaderOptions from '../components/NavigationHeaderOptions'
import { Text, View } from 'react-native'
import { useWeather } from '../hooks/useWeather'

const Stack = createNativeStackNavigator()



export default function Navigation() {
  const {setIsSearching} = useWeather()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ 
          ...NavigationHeaderOptions({title: 'Cidades', onPress: () => {
            setIsSearching && setIsSearching(true)
          }}),
        }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}