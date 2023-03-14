import React, { useEffect, useRef, useState } from 'react'
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
import { GetDriverByRouteCode } from '@services/home'
import { useAuth } from 'contexts/auth'

interface PassengerInfo {
  id: string
  name: string
  nickname: string
  routeCode: string
  goes: boolean
  comesback: boolean
  registerConfirmed: boolean
  schoolName: string
  driverName: string
}

export const Home: React.FC = () => {
  const { signout, loading, user } = useAuth()
  const navigation = React.useContext(NavigationContext)
  const [data, setData] = useState<PassengerInfo[]>([])

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
    GetPassengers(user?.ID).then(passengers => {
      passengers.map(passenger => {
        setData([])
        GetDriverByRouteCode(passenger.routeCode).then(driver => {
          setData(prevValue => [...prevValue, {
            id: passenger.id,
            name: passenger.name,
            nickname: passenger.nickname,
            routeCode: passenger.routeCode,
            goes: passenger.goes,
            comesback: passenger.comesback,
            registerConfirmed: passenger.registerConfirmed,
            schoolName: passenger.schoolName,
            driverName: driver.name
          }])
        })
      })
    })
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
          data={data}
          renderItem={({ item }) => (
            <PassengerCard
              passengerName={item.name}
              schoolName={item.schoolName}
              driverName={item.driverName}
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
      </S.Footer>
      <TouchableOpacity onPress={handleLogout}>
        <Text style={{ fontSize: 20, margin: 20 }}>Sair</Text>
      </TouchableOpacity>
    </S.Container>
  )
}
