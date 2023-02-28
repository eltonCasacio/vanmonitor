import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import * as S from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto'

interface Props extends RectButtonProps {
  title: string
  iconName: React.ComponentProps<typeof Fontisto>["name"]
}

const ButtonWithIcon: React.FC<Props> = ({ title, iconName, ...rest }) => {
  return (
    <S.Button {...rest}>
      <S.IconFacebook name={iconName} />
      <S.Title>{title}</S.Title>
    </S.Button>
  )
}

export { ButtonWithIcon }
