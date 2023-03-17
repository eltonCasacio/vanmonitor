import React, { useState } from 'react'
import * as S from './styles'
import { Input } from '@components/Input'
import { InputMask } from '@components/InputMask'
import { Button } from '@components/Button'
import { useNavigation } from '@react-navigation/native'

export const RegisterUser: React.FC = () => {
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

  async function validateUser(): Promise<boolean> {
    setUserError({
      cpf: user.cpf.length < 14,
      name: user.name == "",
      phone: user.phone.length < 15
    })
    return user.cpf.length == 14 && user.name != "" && user.phone.length == 15
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
            onChangeText={text => changeUser("cpf", text)}
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
