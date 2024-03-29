import React, { useEffect } from 'react'
import { Platform, PermissionsAndroid, Text } from 'react-native'
import { Header } from '@components/Header'
import * as S from './styles'
import Theme from '@styles/theme'

import { Config } from '@config/conf'
import MapViewDirections from 'react-native-maps-directions'
import { Marker } from 'react-native-maps'
import { getLocality } from '@services/map'
import { useRoute } from '@react-navigation/native'
import { GetMonitorByID } from '@services/monitor'
import { useAuth } from '@contexts/auth'
interface Coords {
    latitude: number
    longitude: number
}

interface RegionProps extends Coords {
    latitudeDelta: number
    longitudeDelta: number
}

type MapProps = {
    id: string
    name: string
    routeCode: string
    registerConfirmed: boolean
    schoolName: string
}

export const Map: React.FC = () => {
    const { user } = useAuth()
    const params = useRoute().params as MapProps
    const [monitorMerker, setMonitorMerker] = React.useState<RegionProps>()
    const [driverMerker, setDriverMerker] = React.useState<Coords>()
    const [distance, setDistance] = React.useState<string>()

    useEffect(() => {
        const interval = setInterval(async () => {
            try {
                let result = await getLocality(params.routeCode)
                if (result.latitude != 0) {
                    setDriverMerker({
                        latitude: Number(result.latitude),
                        longitude: Number(result.longitude),
                    })
                }
            } catch (error) {
                console.error("DRIVER MERKER:::", error)
            }
        }, 3000);

        GetMonitorByID(user?.ID.toString()!).then(res => {
            setMonitorMerker({
                latitude: Number(res.latitude),
                longitude: Number(res.longitude),
                latitudeDelta: 0.04,
                longitudeDelta: 0.05
            })
        })

        return function cleanup() {
            clearInterval(interval)
        };
    }, [])

    return (
        <S.Container>
            <S.Header>
                <Header comeBack />
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
                    coordinate={{ latitude: monitorMerker?.latitude || 0, longitude: monitorMerker?.longitude || 0 }}
                />
                <Marker
                    coordinate={{ latitude: driverMerker?.latitude || 0, longitude: driverMerker?.longitude || 0 }}
                />
            </S.Map>

            <S.Footer>
                <Text style={{ color: 'black' }}>Chega em {distance}</Text>
                <Text style={{ color: 'black' }}>ALUNO: {params.name}</Text>
                <Text style={{ color: 'black' }}>ESCOLA: {params.schoolName}</Text>
            </S.Footer>
        </S.Container>
    )
}
