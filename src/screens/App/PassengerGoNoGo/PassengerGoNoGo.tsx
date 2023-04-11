import React, { useState } from 'react'
import { NavigationContext, RouteProp, useRoute } from '@react-navigation/native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MarketingIMG from '@assets/images/mkt.png'
import { useAuth } from '@contexts/auth'
import {Edit} from '@services/passenger'
import { Header } from '@components/Header'
import { GoNoGoCard } from '@components/GoNoGoCard'
import { Button } from '@components/Button'
import * as S from './styles'

type CustomRoute = RouteProp<any, any>
interface PassengerProps {
  id: string
  name: string
  nickname: string
  routeCode: string
  schoolName: string
  goes: boolean
  comesback: boolean
  registerConfirmed: boolean
  monitorID: string
  driverName: string
}

export const PassengerGoNoGo: React.FC = () => {
  const navigation = React.useContext(NavigationContext)
  const { params } = useRoute<CustomRoute>()
  const { user } = useAuth()
  const [passenger, setPassenger] = useState<PassengerProps>({
    id: params?.id,
    name: params?.name,
    nickname: params?.nickname,
    routeCode: params?.routeCode,
    schoolName: params?.schoolName,
    goes: params?.goes,
    comesback: params?.comesback,
    registerConfirmed: params?.registerConfirmed,
    monitorID: user?.ID!,
    driverName: params?.driverName
  })

  const changeGoNoGo = async (k: string, v: boolean) => {
    setPassenger({ ...passenger, [k]: v })
  }

  const handleConfirm = async () => {
    Edit(passenger).then(() => navigation?.goBack())
  }

  return (
    <S.Container>
      <S.Header>
        <Header comeBack />
      </S.Header>

      <S.Body>
        <S.TitleWrapper>
          <S.Subtitle>{passenger.schoolName} - {passenger.driverName}</S.Subtitle>
        </S.TitleWrapper>

        <S.GoNoGoWrapper>
          <GoNoGoCard
            title='vai com a Van'
            name={passenger.name}
            status={passenger.goes}
            handleTaggle={(value) => changeGoNoGo('goes', value)}
          />
          <GoNoGoCard
            title='volta com a Van'
            name={passenger.name}
            status={passenger.comesback}
            handleTaggle={(value) => changeGoNoGo('comesback', value)}
          />
        </S.GoNoGoWrapper>
      </S.Body>

      <S.Footer>
        <Button
          title='confirmar'
          onPress={handleConfirm}
        />
      </S.Footer>

      <S.MarketingWrapper>
        <S.MarketingIMG source={MarketingIMG} />
        <S.MarketingIMG source={MarketingIMG} />
      </S.MarketingWrapper>
    </S.Container>
  )
}
