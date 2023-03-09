import React from 'react'
import * as S from './styles'
import Icon from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

interface PassengerProps {
  schoolName: string
  passengerName: string
  handlePassenger: () => void
  handleInformation: () => void
}

export const PassengerCard: React.FC<PassengerProps> = ({
  schoolName,
  passengerName,
  handleInformation,
  handlePassenger
}) => {
  return (
    <S.Container>
      <S.Content onPress={handlePassenger} >
        <Ionicons
          name={'person-circle-outline'}
          size={60}
        />
        <S.InfoWrapper>
          <S.Title>{schoolName}</S.Title>
          <S.Subtitle>{passengerName}</S.Subtitle>
        </S.InfoWrapper>
      </S.Content>

      <S.Edit onPress={handleInformation}>
        <Icon
          name={'infocirlceo'}
          size={30}
        />
      </S.Edit>

    </S.Container>
  )
}
