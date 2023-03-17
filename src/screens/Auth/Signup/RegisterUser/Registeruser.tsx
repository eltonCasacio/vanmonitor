import React, { useState } from 'react'
import * as S from './styles'
import { Input } from '@components/Input'
import { InputMask } from '@components/InputMask'
import { Button } from '@components/Button'
import { useNavigation } from '@react-navigation/native'
import { FormatCPF } from '@utils/Auth/convertToOnlyNumbers'

const InitialUserProps = {
  name: "",
  cpf: "",
  phone: ""
}
const ErrorProps = {
  name: false,
  cpf: false,
  phone: false,
}

export const RegisterUser: React.FC = () => {
  const { navigate } = useNavigation()
  const [user, setUser] = useState(InitialUserProps)
  const [userError, setUserError] = useState(ErrorProps)

  const goToRegisterAddress = async () => {
    if (await validateUser()) {
      navigate('RegisterAddress', user)
    }
  }

  const changeUser = (k: string, v: string) => {
    setUser({ ...user, [k]: v })
  }

  const changeCPF = (cpf: string) => {
    FormatCPF(cpf).then((res) => setUser({ ...user, cpf: res }))
  }

  async function validateUser(): Promise<boolean> {
    setUserError({
      cpf: user.cpf.length < 11,
      name: user.name == "",
      phone: user.phone.length < 15
    })
    return user.cpf.length == 11 && user.name != "" && user.phone.length == 15
  }

  return (
    <S.Container>
      <S.ContentBody>
        <S.InputWrapper hasError={userError.name}>
          <Input
            label='nome'
            inputValue={user.name}
            onChangeText={text => changeUser("name", text)}
            autoCapitalize='none'
            autoCorrect={false}
          />
        </S.InputWrapper>

        <S.InputWrapper hasError={userError.cpf}>
          <InputMask
            label='cpf'
            inputType='cpf'
            inputValue={user.cpf}
            onChangeText={text => changeCPF(text)}
            autoCapitalize='none'
            autoCorrect={false}
          />
        </S.InputWrapper>

        <S.InputWrapper hasError={userError.phone}>
          <InputMask
            label='Tel'
            inputType='cel-phone'
            inputValue={user.phone}
            onChangeText={text => changeUser("phone", text)}
            autoCapitalize='none'
            autoCorrect={false}
          />
        </S.InputWrapper>
      </S.ContentBody>
      <S.ContentFooter>
        <Button
          title='proximo'
          onPress={goToRegisterAddress}
        />
      </S.ContentFooter>
    </S.Container>
  )
}
