import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { Header } from '@components/Header'
import { PassengerCard } from '@components/PassengerCard'
import { PartnersCard } from '@components/PartnersCard'
import { Partners } from '@utils/images/partners'
import { FlatList, Text, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import MarketingIMG from '@assets/images/mkt.png'
import { NavigationContext } from '@react-navigation/native'
import { GetPassengers, PassengerResponse } from '@services/home'
import {useAuth} from 'contexts/auth'


export const Home: React.FC = () => {
  const { signout, user } = useAuth()
  const navigation = React.useContext(NavigationContext)
  const [passengers, setPassengers] = useState<PassengerResponse[]>()

  async function handleLogout() {
    signout()
  }

  async function handlePassenger(params: PassengerResponse) {
    navigation?.navigate('Map', {
      passengerName: params?.name,
      schoolName: params?.schoolName,
      route: params?.routeCode
    })
  }

  useEffect(() => {
    GetPassengers("6c36caa4-1b36-410d-bffe-03c71b5b5539").then(res => setPassengers(res))
  }, [])

  return (
    <S.Container>
      <Header />

      <S.Content>
        <S.ContentHeader>
          <S.ContentTitle>Passageiros</S.ContentTitle>
          <S.PlusIcon>
            <Feather name='plus' size={22} />
          </S.PlusIcon>
        </S.ContentHeader>

        <FlatList
          data={passengers}
          renderItem={({ item }) => (
            <PassengerCard
              passengerName={item.name}
              schoolName={item.schoolName}
              handleInformation={() => { }}
              handlePassenger={() => handlePassenger(item)}
            />
          )}
          scrollEnabled
        />
      </S.Content>

      <S.Partners>
        <FlatList
          horizontal
          data={Partners}
          renderItem={({ item }) => (
            <PartnersCard
              source={item.source}
              title={item.title}
            />
          )}
          scrollEnabled
        />
      </S.Partners>

      <S.Footer>
        <S.MarketingWrapper>
          <S.MarketingIMG source={MarketingIMG} />
        </S.MarketingWrapper>

        <S.MarketingWrapper>
          <S.MarketingIMG source={MarketingIMG} />
        </S.MarketingWrapper>
      </S.Footer>
      <TouchableOpacity onPress={handleLogout}>
        <Text style={{ fontSize: 20, margin: 20 }}>Siar</Text>
      </TouchableOpacity>
    </S.Container>
  )
}
