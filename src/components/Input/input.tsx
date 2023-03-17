import React, { useState } from 'react'
import * as S from './styles'
import Icons from 'react-native-vector-icons/Ionicons'
import { TextInputProps, TouchableOpacity } from 'react-native'

interface InputProps {
  label: string
  rightIcon?: boolean
  leftIcon?: boolean
  iconNameLeft?: string
  iconNameRight?: string
  iconSize?: number
  iconColor?: string
  inputValue: string
  toggleHandle?: boolean
  onChangeText: ((text: string, rawText?: string | undefined) => void) | undefined
}
export const Input: React.FC<InputProps & TextInputProps> = ({
  label,
  leftIcon,
  rightIcon,
  iconNameLeft,
  iconNameRight,
  iconSize,
  iconColor,
  inputValue,
  toggleHandle,
  onChangeText,
  ...rest
}) => {
  const [toggle, setToggle] = useState(toggleHandle)

  return (
    <S.Container>
      <S.Label>
        {label && <S.LabelText>{label}</S.LabelText>}
      </S.Label>

      {leftIcon && (
        <Icons
          name={iconNameLeft!}
          size={iconSize}
          color={iconColor}
        />
      )}
      <S.InputContainer
        {...rest}
        value={inputValue}
        onChangeText={onChangeText}
      />
      {rightIcon && (
        <TouchableOpacity onPress={() => setToggle(!toggle)}>
          <Icons
            name={iconNameRight!}
            size={iconSize}
            color={iconColor}
          />
        </TouchableOpacity>
      )}
    </S.Container>
  )
}
