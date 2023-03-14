import React from 'react'
import * as S from './styles'
import Icon from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import theme from '@styles/theme'

interface PassengerProps {
  schoolName: string
  passengerName: string
  driverName: string
  handlePassenger: () => void
  handleInformation: () => void
}

export const PassengerCard: React.FC<PassengerProps> = ({
  schoolName,
  passengerName,
  driverName,
  handleInformation,
  handlePassenger
}) => {
  return (
    <S.Container>
      <S.Content onPress={handlePassenger} >
        <Ionicons
          name={'person-circle-outline'}
          size={45}
          color={theme.COLORS.GRAY3}
        />
        <S.InfoWrapper>
          <S.Title>{schoolName} - {passengerName}</S.Title>
          <S.Subtitle>{driverName}</S.Subtitle>
        </S.InfoWrapper>
      </S.Content>

      <S.Edit onPress={handleInformation}>
        <Icon
          name={'appstore-o'}
          size={20}
          color={theme.COLORS.GRAY4}
        />
      </S.Edit>

    </S.Container>
  )
}
