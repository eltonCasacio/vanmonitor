import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Header } from '@components/Header'
import { GoNoGoCard } from '@components/GoNoGoCard'
import { Edit } from '@services/passenger'
import * as S from './styles'
import { PassengerResponse } from '@services/home'
import { useAuth } from '@contexts/auth'
import { Text } from 'react-native'

type GONOGOPARAMS = 'AUSENTE' | 'NAO VAI' | 'NAO VOLTA'

export const PassengerGoNoGo: React.FC = () => {
    const { navigate } = useNavigation()
    const passenger = useRoute().params as PassengerResponse
    const { user } = useAuth()

    const handleConfirm = (props: GONOGOPARAMS) => {
        if (props == 'AUSENTE') {
            passenger.comesback = !passenger.comesback
            passenger.goes = !passenger.goes
        }

        if (props == 'NAO VAI') {
            passenger.goes = !passenger.goes
        } else {
            passenger.comesback = !passenger.comesback
        }

        Edit({
            id: passenger.id,
            comesback: passenger.comesback,
            goes: passenger.goes,
            monitorID: user?.ID!,
            name: passenger.name,
            nickname: passenger.nickname,
            registerConfirmed: passenger.registerConfirmed,
            routeCode: passenger.routeCode,
            schoolName: passenger.schoolName
        }).then(() => navigate('Home'))
    }

    return (
        <S.Container>
            <S.Header>
                <Header comeBack />
            </S.Header>

            <S.Body>
                <S.TitleWrapper>
                    <S.Subtitle>{passenger?.schoolName}</S.Subtitle>
                </S.TitleWrapper>

                <S.GoNoGoWrapper>
                    <S.GoNoGoItem>
                        <GoNoGoCard
                            goes={'NAO VAI'}
                            title='Não vai de transporte'
                            name={passenger?.name}
                            callback={handleConfirm}
                            statusGoNoGo={passenger.goes}
                        />
                    </S.GoNoGoItem>

                    <S.GoNoGoItem>
                        <GoNoGoCard
                            goes={'NAO VOLTA'}
                            title='não volta de transporte'
                            name={passenger?.name}
                            callback={handleConfirm}
                            statusGoNoGo={passenger.comesback}
                        />
                    </S.GoNoGoItem>
                </S.GoNoGoWrapper>

                <Text style={{fontWeight:'bold'}}>Informação atual da viagem de {passenger?.name}</Text>
                <Text>{passenger.goes ? "Vai" : "Não vai"} de transporte</Text>
                <Text>{passenger.comesback ? "Volta" : "Não volta"} de transporte</Text>
            </S.Body>
        </S.Container>
    )
}
