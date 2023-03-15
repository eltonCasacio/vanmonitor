import React from 'react'
import { RouteProp, useRoute } from '@react-navigation/native'
import { Header } from '@components/Header'
import { GoNoGoCard } from '@components/GoNoGoCard'
import { Button } from '@components/Button'
import * as S from './styles'
import MarketingIMG from '@assets/images/mkt.png'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

type CustomRoute = RouteProp<any, any>

export const PassengerGoNoGo: React.FC = () => {
  const { params } = useRoute<CustomRoute>()

  return (
    <S.Container>
      <S.Header>
        <Header comeBack />
      </S.Header>

      <S.Body>
        <S.TitleWrapper>
          <S.Subtitle>{params?.schoolName} - {params?.driverName}</S.Subtitle>
          <FontAwesome5 name={'shipping-fast'} size={15}/>
        </S.TitleWrapper>

        <S.GoNoGoWrapper>
          <GoNoGoCard
            title='vai com a Van'
            name={params?.name}
            status={params?.goes}
            handleTaggle={(value) => { }}
          />
          <GoNoGoCard
            title='volta com a Van'
            name={params?.name}
            status={params?.comesback}
            handleTaggle={(value) => { }}
          />
        </S.GoNoGoWrapper>

        <S.Observation placeholder='Observação' multiline maxLength={150} numberOfLines={4} />
      </S.Body>

      <S.Footer>
        <Button
          title='confirmar'
          onPress={() => { }}
        />
      </S.Footer>

      <S.MarketingWrapper>
        <S.MarketingIMG source={MarketingIMG} />
        <S.MarketingIMG source={MarketingIMG} />
      </S.MarketingWrapper>
    </S.Container>
  )
}
