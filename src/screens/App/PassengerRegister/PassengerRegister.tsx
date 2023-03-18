import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { Header } from '@components/Header'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { useAuth } from '@contexts/auth'
import { Register } from '@services/passenger'
import { NavigationContext } from '@react-navigation/native'

interface PassengerProps {
  name: string
  nickname: string
  routeCode: string
  schoolName: string
  monitorID: string
}

type PassengerErrors = {
  name: boolean,
  routeCode: boolean,
  schoolName: boolean,
}

const initialProps: PassengerProps = {
  name: '',
  nickname: '',
  schoolName: '',
  routeCode: '',
  monitorID: ''
}

export const PassengerRegister: React.FC = () => {
  const { user } = useAuth()
  const navigation = React.useContext(NavigationContext)
  const [passenger, setPassenger] = useState<PassengerProps>(initialProps)
  const [errors, setErrors] = useState({} as PassengerErrors)

  const changePassenger = (k: string, v: string) => {
    setPassenger({ ...passenger, [k]: v })
  }

  const handleConfirm = async () => {
    if (validate()) {
      Register(passenger)
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

  useEffect(() => {
    initialProps.monitorID = user?.ID!
  }, [])

  return (
    <S.Container>
      <Header comeBack />

      <S.ContentBody>
        <S.InputWrapper hasError={errors.name}>
          <Input
            label='nome'
            inputValue={passenger.name}
            onChangeText={text => changePassenger("name", text)}
            autoCapitalize='none'
            autoCorrect={false}
          />
        </S.InputWrapper>
        <S.InputWrapper hasError={false}>
          <Input
            label='apelido'
            inputValue={passenger.nickname}
            onChangeText={text => changePassenger("nickname", text)}
            autoCapitalize='none'
            autoCorrect={false}
          />
        </S.InputWrapper>
        <S.InputWrapper hasError={errors.schoolName}>
          <Input
            label='escola'
            inputValue={passenger.schoolName}
            onChangeText={text => changePassenger("schoolName", text)}
            autoCapitalize='none'
            autoCorrect={false}
          />
        </S.InputWrapper>
        <S.InputWrapper hasError={errors.routeCode}>
          <Input
            label='codigo da rota'
            inputValue={passenger.routeCode}
            onChangeText={text => changePassenger("routeCode", text)}
            autoCapitalize='none'
            autoCorrect={false}
          />
        </S.InputWrapper>
      </S.ContentBody>

      <S.ContentFooter>
        <Button
          title='confirmar'
          onPress={handleConfirm}
        />
      </S.ContentFooter>
    </S.Container>
  )
}
