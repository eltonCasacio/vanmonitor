import React, { useEffect, useRef } from 'react'
import * as S from './styles'
import { Header } from '@components/Header'
import { PassengerCard } from '@components/PassengerCard'
import { passengers } from '@utils/passengers'
import { FlatList, Platform, PermissionsAndroid } from 'react-native'
import Geolocation from '@react-native-community/geolocation'
import { Marker } from 'react-native-maps'
import VanIcon from '@assets/images/van.png'
import PersonIcon from '@assets/images/person.png'
interface RegionProps {
  latitude: number
  longitude: number
  latitudeDelta: number
  longitudeDelta: number
}

export const Map: React.FC = () => {
  const [region, setRegion] = React.useState<RegionProps>()
  const [driverRegion, setDriverRegion] = React.useState<RegionProps>({
    latitude: -22.846676,
    longitude: -47.062422,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  })

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
        minZoomLevel={5}
        showsUserLocation={true}
        loadingEnabled={true}
        accessible={false}
        showsMyLocationButton={false}
        zoomControlEnabled={false}
      >
        <Marker
          icon={PersonIcon}
          coordinate={{ latitude: region?.latitude || 0, longitude: region?.longitude || 0 }}
        />
        <Marker
          icon={VanIcon}
          coordinate={{ latitude: driverRegion?.latitude || 0, longitude: driverRegion?.longitude || 0 }}
        />
      </S.Map>

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
