import * as React from 'react'
import { useEffect, useState } from 'react'

import { 
  Text, 
  TextInput, 
  Keyboard, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView, 
  FlatList 
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInputBox } from '../../components/TextInputBox'
import { WeatherDetailsCard } from '../../components/WeatherDetailsCard'
import { useWeather } from '../../hooks/useWeather'
import { NavigationProps } from '../../navigation'

import { styles } from './styles'



export function Home({ navigation }: NavigationProps){
  const [nameCity, setNameCity] =  useState('')
  const [inputRef, setInputRef] = useState<React.RefObject<TextInput> | null>(null)
  
  const {
    isTypingCityName, 
    setIsTypingCityName, 
    isSearching, 
    searchCity, 
    citiesWeatherForecast
  } = useWeather()

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setIsTypingCityName(false)
      setNameCity('')
    })

    return () => {
      showSubscription.remove()
    }
  }, [])

  useEffect(() => {
    if(isTypingCityName) {
      inputRef?.current?.focus()
    }
  }, [inputRef])

  function renderEmptyList() {
    if(citiesWeatherForecast.length === 0) {
      return (
        <ScrollView style={{paddingTop: 60}}> 
          <Text style={styles.primaryText}>
              Parece que você ainda não adicionou uma cidade
          </Text>
          <Text style={styles.secondaryText}>
              Tente adicionar uma cidade usando o botão de busca
          </Text>
        </ScrollView>
      )
    }
  }

  function renderCards() {
    if(citiesWeatherForecast.length > 0) {
      return (
        <FlatList 
          keyExtractor={item => String(item.city.id)}
          data={citiesWeatherForecast}
          keyboardShouldPersistTaps='never'
          renderItem={({item}) => {
            const {city, weatherForecast } = item
            const {current: currentWeather} = weatherForecast
            return (
              <WeatherDetailsCard
                primaryText={city.name}
                secondaryText={city.country}
                curerentTemp={currentWeather.temp}
                weatherDescription={currentWeather.weather[0].description}
                tempMax={weatherForecast.daily[0].temp.max}
                tempMin={weatherForecast.daily[0].temp.min}
                showIcon
              />
            )
          }}
        />
      )
    }
  }

  function renderTextInputBox() {
    if(isTypingCityName) {
      return (
        <KeyboardAvoidingView
          style={{width: '100%'}} 
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <TextInputBox 
            value={nameCity}
            placeholder="Pesquise uma cidade"
            onChangeText={setNameCity}
            reference={(ref) => setInputRef(ref) }
            buttonTitle='Pesquisar'
            isLoading={isSearching}
            onPress={() => {
              if(nameCity) {
                searchCity(nameCity, () => navigation.navigate('SearchScreen'))
              }
            }}
          />
        </KeyboardAvoidingView>
      )
    }
  }

  return (
    <SafeAreaView style={styles.container} edges={['bottom']} >
      {renderEmptyList()}

      {renderCards()}
      {renderTextInputBox()}

    </SafeAreaView>
   
  )
}