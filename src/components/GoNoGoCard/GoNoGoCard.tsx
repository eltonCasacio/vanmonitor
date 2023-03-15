import React, { useEffect, useState } from 'react'
import * as S from './styles'
import Entypo from 'react-native-vector-icons/Entypo'
import theme from '@styles/theme'
import { Switch } from 'react-native'

interface GoNoGoCardProps {
  title: string
  name: string
  status: boolean
  handleTaggle: (value: boolean) => void
}

export const GoNoGoCard: React.FC<GoNoGoCardProps> = ({
  title,
  name,
  status,
  handleTaggle
}) => {
  const [taggle, setTaggle] = useState(status)

  useEffect(() => {
    handleTaggle(taggle)
  }, [taggle])

  return (
    <S.Container>
      <Entypo
        name={'swap'}
        size={18}
        color={theme.COLORS.GRAY3}
      />
      <S.TitleWrapper>
        <S.Title goes={taggle}>{name} {!taggle && 'não'} {title}</S.Title>
      </S.TitleWrapper>
      <Switch
        trackColor={{ false: theme.COLORS.GRAY, true: theme.COLORS.GREEN }}
        thumbColor={taggle ? theme.COLORS.GREEN : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => setTaggle(!taggle)}
        value={taggle}
      />
    </S.Container>
  )
}
