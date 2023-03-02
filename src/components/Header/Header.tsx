import React from 'react'
import * as S from './styles'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

interface HeaderProps {
  comeBack?: boolean
}
export const Header: React.FC<HeaderProps> = ({ comeBack }) => {
  const { goBack } = useNavigation()
  return (
    <S.Container>
      {comeBack &&
        <S.GoBack onPress={() => goBack()}>
          <Icon
            name={'left'}
            size={30}
          />
        </S.GoBack>
      }
      <S.Menu onPress={() => {}}>
        <Icon
          name={'bars'}
          size={35}
        />
      </S.Menu>
    </S.Container>
  )
}

