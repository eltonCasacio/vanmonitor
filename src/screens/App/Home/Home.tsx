import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { Header } from '@components/Header'
import { PassengerCard } from '@components/PassengerCard'
import { PartnersCard } from '@components/PartnersCard'
import { Partners } from '@utils/images/partners'
import { Alert, FlatList } from 'react-native'
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
  const { user } = useAuth()
  const navigation = React.useContext(NavigationContext)
  const [data, setData] = useState<PassengerInfo[]>([])

  const handlePassenger = (params: PassengerResponse) => {
    navigation?.navigate('Map', {
      passengerName: params?.name,
      schoolName: params?.schoolName,
      route: params?.routeCode
    })
  }

  const handleInformation = (params: PassengerResponse) => {
    Alert.alert('Not implemented', params.name)
  }

  const handlePassengerRegister = () => {
    navigation?.navigate('PassengerRegister')
  }

  const loadData = () => {
    GetPassengers(user?.ID).then(passengers => {
      passengers && passengers.map(passenger => {
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
  }

  useEffect(() => {
    loadData()
  }, [])

  React.useEffect(() => {
    const unsubscribe = navigation?.addListener('state', () => {
      loadData()
    });

    return unsubscribe;
  }, [navigation]);


  return (
    <S.Container>
      <Header />
      <S.Content>
        <S.ContentHeader>
          <S.ContentTitle>Passageiros</S.ContentTitle>
          <S.PlusIcon onPress={handlePassengerRegister}>
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
              handleInformation={() => handleInformation(item)}
              handlePassenger={() => handlePassenger(item)}
            />
          )}
          scrollEnabled
        />
      </S.Content>

      <S.Partners>
        <PartnersCard
          source={Partners[0].source}
          title={Partners[0].title}
        />

        <PartnersCard
          source={Partners[1].source}
          title={Partners[1].title}
        />

        <PartnersCard
          source={Partners[2].source}
          title={Partners[2].title}
        />
      </S.Partners>


      <S.Footer>
        <S.MarketingWrapper>
          <S.MarketingIMG source={MarketingIMG} />
          <S.MarketingIMG source={MarketingIMG} />
        </S.MarketingWrapper>
      </S.Footer>
    </S.Container>
  )
}
