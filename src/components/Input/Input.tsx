import React, {
  forwardRef,
  useCallback,
  useState,
  useImperativeHandle,
  useRef,
  useEffect
} from 'react'
import { useField } from '@unform/core'
import { Text, TextInputProps } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as S from './styles'

interface InpurRef {
  focus(): void
}

interface InputValueReference {
  Value: string
}

interface InputProps extends TextInputProps {
  name: string;
  value?: string;
  iconName?: React.ComponentProps<typeof Ionicons>["name"];
}


const Input: React.ForwardRefRenderFunction<InpurRef, InputProps> = () => {
  return (
    <S.Container>
      <Text>Input</Text>
    </S.Container>
  )
}

export { Input }
