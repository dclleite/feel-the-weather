import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

import useCachedResources from './src/hooks/useCachedResources'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from './src/navigation'
import { WeatherProvider } from './src/hooks/useWeather'


function teste() {

  return {
    headerTitle: () => {

      return (
        <View style={{flex: 1, justifyContent: 'flex-start', backgroundColor: 'red', margin: 0}}>
          <Text>Home</Text>
        </View>
      )
    }
  }
}

export default function App() {
  const isLoadingComplete = useCachedResources()
  
  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <WeatherProvider>
        <SafeAreaProvider>
          <Navigation />
          <StatusBar          
            style="light" 
            translucent
            backgroundColor="transparent"  
          />
        </SafeAreaProvider>
      </WeatherProvider>
    )
  }
}
