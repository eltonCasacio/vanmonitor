import React from 'react'
import * as S from './styles'
import Icons from 'react-native-vector-icons/Ionicons'
import { TextInputProps } from 'react-native'
import { TextInputMaskTypeProp } from 'react-native-masked-text'
import { useTheme } from 'styled-components'

interface InputProps {
  label: string
  rightIcon?: boolean
  leftIcon?: boolean
  iconNameLeft?: string
  iconNameRight?: string
  iconSize?: number
  iconColor?: string
  inputType: TextInputMaskTypeProp
  inputValue: string
  mask?: string
  onChangeText: ((text: string, rawText?: string | undefined) => void) | undefined
}
export const InputMask: React.FC<InputProps & TextInputProps> = ({
  label,
  leftIcon,
  rightIcon,
  iconNameLeft,
  iconNameRight,
  iconSize,
  iconColor,
  inputType,
  inputValue,
  mask,
  onChangeText,
  ...rest
}) => {
  const { COLORS } = useTheme()
  return (
    <S.Container>
      <S.Label>
        {label && <S.LabelText>{label}</S.LabelText>}
      </S.Label>
      {leftIcon && (
        <Icons
          name={iconNameLeft!}
          size={iconSize}
          color={iconColor || COLORS.GRAY3}
        />
      )}
      {inputType == 'custom' ? (
        <S.InputContainer
          {...rest}
          type={inputType}
          value={inputValue}
          onChangeText={onChangeText}
          options={{
            mask: mask
          }}
        />
      ) : (
        <S.InputContainer
          {...rest}
          type={inputType}
          value={inputValue}
          onChangeText={onChangeText}
        />
      )}

      {rightIcon && (
        <Icons
          name={iconNameRight!}
          size={iconSize}
          color={iconColor || COLORS.GRAY3}
        />
      )}
    </S.Container>
  )
}
