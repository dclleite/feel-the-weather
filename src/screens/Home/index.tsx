import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'

import { View, Text, TextInput, Keyboard, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInputBox } from '../../components/TextInputBox'
import { useWeather } from '../../hooks/useWeather'
import { NavigationProps } from '../../navigation'

import { styles } from './styles'



export function Home({ navigation }: NavigationProps){
  const [nameCity, setNameCity] =  useState('')
  const [inputRef, setInputRef] = useState<React.RefObject<TextInput> | null>(null)
  
  const {isTypingCityName, setIsTypingCityName, isSearching, searchCity} = useWeather()

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
    return (
      <View> 
        <Text style={styles.primaryText}>
            Parece que você ainda não adicionou uma cidade
        </Text>
        <Text style={styles.secondaryText}>
            Tente adicionar uma cidade usando o botão de busca
        </Text>
      </View>
    )
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
                navigation.navigate('SearchScreen')
                searchCity(nameCity)
              }
            }}
          />
        </KeyboardAvoidingView>
       
      )
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>  
        {renderEmptyList()}

      </ScrollView>
      {renderTextInputBox()}

    </SafeAreaView>
   
  )
}