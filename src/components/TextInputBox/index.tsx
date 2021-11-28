import React, { useEffect, useRef } from 'react'

import { TextInput, TouchableOpacity, View, Text } from 'react-native'
import { Button } from '../Button'

import { styles } from './styles'

type TextInputBoxProps = {
  value: string
  placeholder?: string
  onChangeText: (value: string) => void
  onPress: () => void
  buttonTitle: string
  isLoading: boolean
  reference?: (inputRef: React.RefObject<TextInput>) => void
}

export function TextInputBox({
  value, 
  placeholder,
  onChangeText,
  buttonTitle,
  onPress,
  isLoading = false,
  reference
}: TextInputBoxProps){
  const inputRef = useRef<TextInput>(null)

  useEffect(() => {
    reference && reference(inputRef)
  }, [])

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        ref={inputRef}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />

      <Button 
        title={buttonTitle}
        onPress={onPress} 
        isLoading={isLoading}
      />

    </View>
  )
}