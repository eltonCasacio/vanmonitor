import React, { useState } from 'react'
import * as S from './styles'
import { Image, Text } from 'react-native'
import NaoVouImg from '@assets/images/naovou.png'
import VouImg from '@assets/images/vou.png'
import AusenteImg from '@assets/images/ausente.png'
import { PopupGoNoGo } from '@components/PopupConfirmGoNoGo'

const NoGoMessage = "Será informado ao condutor que o aluno NÃO embarcara no trajeto de IDA"
const NoBackMessage = "Será informado ao condutor que o aluno NÃO embarcara no trajeto de VOLTA"
const AusenteMessage = "Será informado ao condutor que o aluno NÃO embarcara no trajeto de IDA e VOLTA"
const DESFAZERMESSAGE = "Cancelar, o aluno fará uso do transporte"

type GONOGOPARAMS = 'AUSENTE' | 'NAO VAI' | 'NAO VOLTA'

interface GoNoGoCardProps {
    title: string
    name: string
    goes: GONOGOPARAMS
    statusGoNoGo: boolean
    callback(value: GONOGOPARAMS): void
}

export const GoNoGoCard: React.FC<GoNoGoCardProps> = ({
    title,
    name,
    goes,
    statusGoNoGo,
    callback
}) => {
    const [showPopup, setShowMenu] = useState(false)

    const handleConfirm = () => {
        callback(goes)
        setShowMenu(false)
    }

    return (
        <S.Container onPress={() => setShowMenu(true)} statusGoNoGo={statusGoNoGo}>
            <PopupGoNoGo
                showMenu={showPopup}
                description={!statusGoNoGo? DESFAZERMESSAGE : goes == 'AUSENTE' ? AusenteMessage : goes == 'NAO VAI' ? NoGoMessage : NoBackMessage}
                cancel={() => setShowMenu(false)}
                confirm={handleConfirm}
            />
            <Image
                source={goes == 'AUSENTE' ? AusenteImg : goes == 'NAO VAI' ? NaoVouImg : VouImg}
                style={{ width: 40, height: 40 }}
            />
            <S.TitleWrapper>
                <S.Title statusGoNoGo={statusGoNoGo}>{name} {title}</S.Title>
                <Text>{goes == 'AUSENTE' ? AusenteMessage : goes == 'NAO VAI' ? NoGoMessage : NoBackMessage}</Text>
            </S.TitleWrapper>
        </S.Container>
    )
}
