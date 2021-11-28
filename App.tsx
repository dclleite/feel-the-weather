import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, View } from 'react-native'
import useCachedResources from './src/hooks/useCachedResources'

export default function App() {
  const isLoadingComplete = useCachedResources()
  
  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <View >
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    )
  }
}
