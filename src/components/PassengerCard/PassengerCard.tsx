import React from 'react'
import * as S from './styles'
import Icon from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import theme from '@styles/theme'

interface PassengerProps {
  schoolName: string
  passengerName: string
  driverName: string
  handlePassenger: () => void
  handleInformation: () => void
  handleEdit: () => void
}

export const PassengerCard: React.FC<PassengerProps> = ({
  schoolName,
  passengerName,
  driverName,
  handleInformation,
  handlePassenger,
  handleEdit
}) => {
  return (
    <S.Container>
      <S.Content >
        <Ionicons
          name={'person-circle-outline'}
          size={35}
          color={theme.COLORS.GRAY3}
        />
        <S.InfoWrapper>
          <S.Title>{schoolName} - {passengerName}</S.Title>
          <S.Subtitle>{driverName}</S.Subtitle>
        </S.InfoWrapper>
      </S.Content>

      <S.EditWrapper>
        <S.EditItem onPress={handleEdit}>
          <Icon
            name={'edit'}
            size={20}
            color={theme.COLORS.ORANGE}
          />
        </S.EditItem>

        <S.EditItem onPress={handleInformation}>
          <Fontisto
            name={'arrow-swap'}
            size={20}
            color={theme.COLORS.GREEN}
          />
        </S.EditItem>

        <S.EditItem onPress={handlePassenger}>
          <Ionicons
            name={'map'}
            size={20}
            color={theme.COLORS.ORANGE_300}
          />
        </S.EditItem>

      </S.EditWrapper>

    </S.Container>
  )
}
