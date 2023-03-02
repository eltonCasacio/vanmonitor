import React from 'react'
import * as S from './styles'
import Icon from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

interface PassengerProps {
  schoolName: string
  passengerName: string
  driverName: string
}

export const PassengerCard: React.FC<PassengerProps> = ({ schoolName, driverName, passengerName }) => {
  return (
    <S.Container>
      <S.Content>
        <Ionicons
          name={'person-circle-outline'}
          size={50}
        />
        <S.InfoWrapper>
          <S.Title>{schoolName} - {passengerName}</S.Title>
          <S.Subtitle>motorista {driverName}</S.Subtitle>
        </S.InfoWrapper>
      </S.Content>

      <S.Edit>
        <Icon
          name={'edit'}
          size={20}
        />
      </S.Edit>

    </S.Container>
  )
}
