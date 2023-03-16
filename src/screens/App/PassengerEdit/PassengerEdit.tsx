import React, { useState } from 'react'
import * as S from './styles'
import { Header } from '@components/Header'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { Edit, Delete } from '@services/passenger'
import { NavigationContext, RouteProp } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'
import {useAuth} from '@contexts/auth'
import theme from '@styles/theme'

interface PassengerProps {
  id: string
  name: string
  nickname: string
  routeCode: string
  schoolName: string
  goes: boolean
  comesback: boolean
  registerConfirmed: boolean
  monitorID: string
}

type PassengerErrors = {
  name: boolean,
  routeCode: boolean,
  schoolName: boolean,
}

type CustomRoute = RouteProp<any, any>

export const PassengerEdit: React.FC = () => {
  const {user} = useAuth()
  const navigation = React.useContext(NavigationContext)
  const { params } = useRoute<CustomRoute>()
  const [passenger, setPassenger] = useState<PassengerProps>({
    id: params?.id,
    name: params?.name,
    nickname: params?.nickname,
    routeCode: params?.routeCode,
    schoolName: params?.schoolName,
    comesback: params?.comesback,
    goes: params?.goes,
    registerConfirmed: params?.registerConfirmed,
    monitorID: user?.ID!
  })
  const [errors, setErrors] = useState({} as PassengerErrors)

  const changePassenger = (k: string, v: string) => {
    setPassenger({ ...passenger, [k]: v })
  }

  const handleConfirm = async () => {
    if (validate()) {
      Edit(passenger)
        .then(() => navigation?.goBack())
        .catch(() => console.error("Erro ao registrar passageiro!"))
    }
  }

  const handleDelete = () => {
    if (validate()) {
      Delete(passenger.id)
        .then(() => navigation?.goBack())
        .catch(() => console.error("Erro ao registrar passageiro!"))
    }
  }

  const validate = (): boolean => {
    setErrors({
      name: passenger.name == "",
      routeCode: passenger.routeCode == "",
      schoolName: passenger.schoolName == "",
    })
    return passenger.name != "" && passenger.routeCode != "" && passenger.schoolName != ""
  }

  return (
    <S.Container>
      <Header comeBack />

      <S.ContentBody>
        <S.InputWrapper hasError={errors.name}>
          <Input
            placeholder={'nome'}
            inputValue={passenger.name}
            onChangeText={text => changePassenger("name", text)}
            autoCapitalize='none'
            autoCorrect={false}
          />
        </S.InputWrapper>
        <S.InputWrapper hasError={false}>
          <Input
            placeholder={'apelido'}
            inputValue={passenger.nickname}
            onChangeText={text => changePassenger("nickname", text)}
            autoCapitalize='none'
            autoCorrect={false}
          />
        </S.InputWrapper>
        <S.InputWrapper hasError={errors.schoolName}>
          <Input
            placeholder={'escola'}
            inputValue={passenger.schoolName}
            onChangeText={text => changePassenger("schoolName", text)}
            autoCapitalize='none'
            autoCorrect={false}
          />
        </S.InputWrapper>
        <S.InputWrapper hasError={errors.routeCode}>
          <Input
            placeholder={'código da rota'}
            inputValue={passenger.routeCode}
            onChangeText={text => changePassenger("routeCode", text)}
            autoCapitalize='none'
            autoCorrect={false}
          />
        </S.InputWrapper>
      </S.ContentBody>

      <S.ContentFooter>
        <Button
          title='excluir passageiro'
          onPress={handleDelete}
          style={{backgroundColor:theme.COLORS.ATTENTION, marginBottom:10}}
        />
         <Button
          title='confirmar'
          onPress={handleConfirm}
        />
      </S.ContentFooter>
    </S.Container>
  )
}
