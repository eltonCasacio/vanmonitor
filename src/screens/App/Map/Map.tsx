import React, { useEffect } from 'react'
import { Platform, PermissionsAndroid, Text } from 'react-native'
import { Header } from '@components/Header'
import VanIcon from '@assets/images/van.png'
import PersonIcon from '@assets/images/person.png'
import * as S from './styles'
import Theme from '@styles/theme'

import { Config } from '@config/google'
import Geolocation from '@react-native-community/geolocation'
import MapViewDirections from 'react-native-maps-directions';
import { Marker } from 'react-native-maps'
import { getLocality } from '@services/map'
import { RouteProp, useRoute } from '@react-navigation/native'

interface Coords {
  latitude: number
  longitude: number
}

interface RegionProps extends Coords {
  latitudeDelta: number
  longitudeDelta: number
}

type MapProps = {
  passengerName: any,
  driverName: any,
  schoolName: any,
  route: any
}

type CustomRoute = RouteProp<MapProps, any>


export const Map: React.FC = () => {
  const {params} = useRoute<CustomRoute>()
  const [monitorMerker, setMonitorMerker] = React.useState<RegionProps>()
  const [driverMerker, setDriverMerker] = React.useState<Coords>()
  const [distance, setDistance] = React.useState<string>()
  let interval = 0

  const getCurrencyDriverPosition = () => {
    interval = setInterval(async () => {
      let result = await getLocality(params?.route)
      setDriverMerker({
        latitude: Number(result.latitude),
        longitude: Number(result.longitude),
      })
    }, 3000);
    return () => clearInterval(interval)
  }

  useEffect(() => {
    //getCurrencyDriverPosition()

    Geolocation.getCurrentPosition(info => {
      setMonitorMerker({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      })
    })
  }, [])

  return (
    <S.Container>
      <S.Header>
        <Header />
      </S.Header>

      <S.Map
        region={monitorMerker}
        zoomEnabled={true}
        minZoomLevel={5}
        showsUserLocation={true}
        loadingEnabled={true}
        accessible={false}
        showsMyLocationButton={false}
        zoomControlEnabled={false}
        onMapReady={() => {
          Platform.OS == 'android' ?
            PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            ) : ''
        }}
      >
        {driverMerker && (
          <MapViewDirections
            origin={monitorMerker}
            destination={driverMerker}
            apikey={Config.GOOGLE_MAPS_APIKEY}
            strokeColor={Theme.COLORS.GREEN1}
            strokeWidth={5}
            onReady={(res) => {
              setDistance(res.legs[0].duration.text)
            }}
          />
        )}

        <Marker
          icon={PersonIcon}
          coordinate={{ latitude: monitorMerker?.latitude || 0, longitude: monitorMerker?.longitude || 0 }}
        />
        <Marker
          icon={VanIcon}
          coordinate={{ latitude: driverMerker?.latitude || 0, longitude: driverMerker?.longitude || 0 }}
        />
      </S.Map>

      <S.Footer>
        <Text>Chega em {distance}</Text>
        <Text>MOTORISTA: {params?.driverName}</Text>
        <Text>ALUNO: {params?.passengerName}</Text>
        <Text>ESCOLA: {params?.schoolName}</Text>
      </S.Footer>
    </S.Container>
  )
}
