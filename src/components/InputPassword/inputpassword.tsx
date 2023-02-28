import React, { useState } from 'react'
import * as S from './styles'
import Icons from 'react-native-vector-icons/Ionicons'
import { TextInputProps, TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components'

interface InputProps {
  leftIcon?: boolean
  iconName?: string //lock-closed-outline
  iconSize?: number
  iconColor?: string
  inputValue: string
  onChangeText: ((text: string, rawText?: string | undefined) => void) | undefined
}
const InputPassword: React.FC<InputProps & TextInputProps> = ({
  leftIcon,
  iconName,
  iconSize,
  iconColor,
  inputValue,
  onChangeText,
  ...rest
}) => {
  const [isPasswordVisible, changePasswordVisible] = useState(false)
  const {COLORS} = useTheme()

  return (
    <S.Container>
      {leftIcon && (
        <Icons
          name={iconName!}
          size={iconSize}
          color={iconColor || COLORS.GRAY2}
        />
      )}
      <S.InputContainer
        {...rest}
        value={inputValue}
        onChangeText={onChangeText}
        secureTextEntry={!isPasswordVisible}
      />

      <TouchableOpacity onPress={() => changePasswordVisible(!isPasswordVisible)}>
        <Icons
          name={isPasswordVisible ? 'eye' : 'eye-off'}
          size={iconSize}
          color={iconColor || COLORS.GRAY3}
        />
      </TouchableOpacity>

    </S.Container>
  )
}

export default InputPassword
