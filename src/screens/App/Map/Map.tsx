import React, { useEffect } from 'react'
import * as S from './styles'
import { Header } from '@components/Header'
import { PassengerCard } from '@components/PassengerCard'
import { passengers } from '@utils/passengers'
import { FlatList, Platform, PermissionsAndroid } from 'react-native'
import Geolocation from '@react-native-community/geolocation'

interface RegionProps {
  latitude: number
  longitude: number
  latitudeDelta: number
  longitudeDelta: number
}

export const Map: React.FC = () => {
  const [region, setRegion] = React.useState<RegionProps>()

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setRegion({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      })
    },
      () => { }, {
      enableHighAccuracy: true,
      timeout: 2000,
    }
    )
  }, [])

  return (
    <S.Container>
      <S.Header>
        <Header />
      </S.Header>

      <S.Map
        onMapReady={() => {
          Platform.OS == 'android' ?
            PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            ) : ''
        }}
        region={region}
        zoomEnabled={true}
        // minZoomLevel={10}
        showsUserLocation={true}
        loadingEnabled={true}
        accessible={false}
      />

      <S.Footer>
        <FlatList
          data={passengers}
          renderItem={({ item }) => (
            <PassengerCard
              driverName={item.nomeMotorista}
              passengerName={item.nome}
              schoolName={item.nomeEscola} />
          )}
          scrollEnabled
        />
      </S.Footer>
    </S.Container>
  )
}
