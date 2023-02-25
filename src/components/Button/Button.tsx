import React from 'react'
import {RectButtonProps} from 'react-native-gesture-handler'
import * as S from './styles'
import Img from '@assets/images/doguinho.png'

interface Props extends RectButtonProps {
  title: string
}

const Button: React.FC<Props> = ({title, ...rest}) => {
  return (
    <S.BoxShadow style={S.Shadow.containerStyle}>
      <S.Button {...rest}>
        <S.ImgButton  source={Img} resizeMode="contain"/>
        <S.Title>{title}</S.Title>
      </S.Button>
    </S.BoxShadow>
  )
}

export { Button }
