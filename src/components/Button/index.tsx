import * as React from 'react'

import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { COLORS } from '../../tokens'

import { styles } from './styles'

type Props = TouchableOpacityProps & {
  title: string
  category?: 'default' | 'container'
  appearance?: 'primary' | 'secondary'
  isLoading?: boolean
}

export function Button({
  title, 
  category = 'default',
  appearance = 'primary',
  isLoading = false,
  style,
  ...rest
}: Props){

  function renderButtonContent() {
    if(isLoading) {
      return <ActivityIndicator />
    }

    return (
      <Text style={[
        styles.title,
        {color: appearance === 'primary' ? COLORS.WHITE : COLORS.AZURE}
      ]}>
        {title}
      </Text>
    )
  }

  return (
    <TouchableOpacity
      style={[
        styles.button, 
        style,
        category === 'default' ? styles.buttonDefault : styles.buttonContainer,
        {backgroundColor: appearance === 'primary' ? COLORS.AZURE : COLORS.WHITE}
      ]}
      activeOpacity={0.7}
      disabled={isLoading}
      {...rest}
    >
      {renderButtonContent()}
    </TouchableOpacity>
  )
}