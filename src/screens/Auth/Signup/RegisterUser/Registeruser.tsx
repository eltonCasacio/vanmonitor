import React, { useState } from 'react'
import * as S from './styles'
import Input from '@components/Input'
import InputMask from '@components/InputMask'
import { Button } from '@components/Button'
import { NavigationContext } from '@react-navigation/native'

interface UserProps {
  name: string
  cpf: string
  phone: string
}

interface ErrorProps {
  name: boolean
  cpf: boolean
  phone: boolean
}

export const RegisterUser: React.FC = () => {
  const navigation = React.useContext(NavigationContext)
  const [user, setUser] = useState<UserProps>({
    cpf: '',
    name: '',
    phone: ''
  })

  const [userError, setUserError] = useState<ErrorProps>({
    cpf: false,
    name: false,
    phone: false
  })

  const goToRegisterAddress = async () => {
    if (await validateUser()) {
      navigation?.navigate('Cadastro Endereco', user)
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
      <S.ContentHeader>
        <S.Description>Cadastro do Usuário</S.Description>
      </S.ContentHeader>
      <S.ContentBody>
        <S.InputWrapper hasError={userError.name}>
          <Input
            placeholder={'Nome do Responsavél'}
            inputValue={user.name}
            onChangeText={text => changeUser("name", text)}
            autoCapitalize='none'
            autoCorrect={false}
          />
        </S.InputWrapper>
        <S.InputWrapper hasError={userError.cpf}>
          <InputMask
            inputType='cpf'
            placeholder={'CPF do Responsavél'}
            inputValue={user.cpf}
            onChangeText={text => changeUser("cpf", text)}
            autoCapitalize='none'
            autoCorrect={false}
          />
        </S.InputWrapper>
        <S.InputWrapper hasError={userError.phone}>
          <InputMask
            inputType='cel-phone'
            placeholder={'Telefone do Responsavél'}
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
