import { useEffect, useState } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'
import { FontAwesome } from '@expo/vector-icons'

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false)

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await SplashScreen.preventAutoHideAsync()

        await Font.loadAsync({
          ...FontAwesome.font,
          'Roboto-Regular': require('../../assets/fonts/Roboto-Regular.ttf'),
          'Roboto-Medium': require('../../assets/fonts/Roboto-Medium.ttf')
        })
      } catch (e) {
        console.warn(e)
      } finally {
        setLoadingComplete(true)
        SplashScreen.hideAsync()
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  return isLoadingComplete
}