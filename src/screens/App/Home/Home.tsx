import React, { useState } from 'react'
import * as S from './styles'
import { Header } from '@components/Header'
import { PassengerCard } from '@components/PassengerCard'
import { PartnersCard } from '@components/PartnersCard'
import { Partners } from '@utils/images/partners'
import { FlatList } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import MarketingIMG from '@assets/images/mkt.png'
import { useNavigation } from '@react-navigation/native'
import { GetPassengers, PassengerResponse, GetDriverByRouteCode } from '@services/home'
import { useAuth } from 'contexts/auth'
import theme from '@styles/theme'

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
    const { navigate, addListener, isFocused } = useNavigation()
    const [data, setData] = useState<PassengerInfo[]>([])

    const handleGoToMap = (params: PassengerResponse) => {
        if (params.registerConfirmed) {
            navigate('Map', {
                id: params.id,
                name: params.name,
                schoolName: params.schoolName,
                routeCode: params.routeCode,
                registerConfirmed: params.registerConfirmed
            })
        }
    }

    const handleInformation = (params: PassengerResponse) => {
        navigate('PassengerGoNoGo', params)
    }

    const handlePassengerRegister = () => {
        navigate('PassengerRegister')
    }

    const handleEdit = (params: PassengerInfo) => {
        navigate('PassengerEdit', params)
    }

    const loadData = () => {
        setData([])
        GetPassengers(user?.ID).then(passengers => {
            passengers && passengers.map(passenger => {
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
                        driverName: driver.name,
                    }])
                })
            })
        })
    }

    React.useEffect(() => {
        const unsubscribe = addListener('state', () => {
            loadData()
        });

        return unsubscribe;
    }, [isFocused]);


    return (
        <S.Container>
            <Header />
            <S.Content>
                <S.ContentHeader>
                    <S.ContentTitle>Passageiros</S.ContentTitle>
                    <S.PlusIcon onPress={handlePassengerRegister}>
                        <Feather name='plus' size={22} color={theme.COLORS.GREEN} />
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
                            handleGoToMap={() => handleGoToMap(item)}
                            handleEdit={() => handleEdit(item)}
                        />
                    )}
                    scrollEnabled
                />
            </S.Content>
            <S.Footer></S.Footer>
        </S.Container>
    )
}
