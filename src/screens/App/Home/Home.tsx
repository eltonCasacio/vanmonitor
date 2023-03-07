import React from 'react'
import * as S from './styles'
import { Header } from '@components/Header'
import { PassengerCard } from '@components/PassengerCard'
import { PartnersCard } from '@components/PartnersCard'
import { passengers } from '@utils/passengers/passengers'
import { Partners } from '@utils/images/partners'
import { FlatList } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import MarketingIMG from '@assets/images/mkt.png'
import { NavigationContext } from '@react-navigation/native'

export const Home: React.FC = () => {
  const navigation = React.useContext(NavigationContext)

  const goToMapView = () => {
    navigation?.navigate('Map', {
      passengerName: "Monique",
      driverName: "Lurdes",
      schoolName: "SESI 355",
      route: "route_code"
    })
  }

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
              driverName={item.nomeMotorista}
              passengerName={item.nome}
              schoolName={item.nomeEscola}
              handleInformation={() => { }}
              handlePassenger={goToMapView}
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
    </S.Container>
  )
}
