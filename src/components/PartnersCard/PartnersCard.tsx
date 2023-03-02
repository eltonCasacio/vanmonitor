import React from 'react'
import { ImageSourcePropType } from 'react-native/types'
import * as S from './styles'


interface PartinarsProps {
  source: ImageSourcePropType
  title: string
}
export const PartnersCard: React.FC<PartinarsProps> = ({source, title}) => {
  return (
    <S.Container>
      <S.Card >
        <S.CardIMG source={source}/>
        <S.CardDescription>{title}</S.CardDescription>
      </S.Card>
    </S.Container>
  )
}
