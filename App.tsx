import * as React from 'react'
import { StatusBar } from 'expo-status-bar'

import useCachedResources from './src/hooks/useCachedResources'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from './src/navigation'
import { WeatherProvider } from './src/hooks/useWeather'

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
