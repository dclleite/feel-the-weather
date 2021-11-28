import React from 'react'

import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { styles } from './styles'

type Props = TouchableOpacityProps & {
  title: string
  isLoading?: boolean
}

export function Button({
  title, 
  isLoading = false,
  ...rest
}: Props){

  function renderButtonContent() {
    if(isLoading) {
      return <ActivityIndicator />
    }

    return (
      <Text style={[styles.title]}>
        {title}
      </Text>
    )
  }

  return (
    <TouchableOpacity
      style={[styles.button]}
      activeOpacity={0.7}
      disabled={isLoading}
      {...rest}
    >
      {renderButtonContent()}
    </TouchableOpacity>
  )
}