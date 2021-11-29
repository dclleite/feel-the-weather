import * as React from 'react'
import { useEffect, useState } from 'react'

import { View, Text, TextInput, Keyboard, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CitySearchCard } from '../../components/CitySearchCard'
import { TextInputBox } from '../../components/TextInputBox'
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
    currentCityList
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
    if(currentCityList.length === 0) {
      return (
        <View style={{paddingTop: 60}}> 
          <Text style={styles.primaryText}>
              Parece que você ainda não adicionou uma cidade
          </Text>
          <Text style={styles.secondaryText}>
              Tente adicionar uma cidade usando o botão de busca
          </Text>
        </View>
      )
    }
  }

  function renderCards() {
    if(currentCityList.length > 0) {
      return (
        <>
          {currentCityList.map(city => (
            //cards apenas de exemplo
            <CitySearchCard 
              key={city.id}
              primaryText={city.name} 
              secondaryText={city.country} 
              onPress={() => console.log(city)} 
            />
          ))}
        </>
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
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ width: '100%'}}>  
        {renderEmptyList()}

        {renderCards()}

      </ScrollView>
      {renderTextInputBox()}

    </SafeAreaView>
   
  )
}