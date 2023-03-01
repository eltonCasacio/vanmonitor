import React, { useState } from 'react'
import * as S from './styles'
import Input from '@components/Input'
import InputMask from '@components/InputMask'
import { Button } from '@components/Button'
import { NavigationContext } from '@react-navigation/native'


const RegisterUser: React.FC = () => {
  const navigation = React.useContext(NavigationContext)
  const [value, setValue] = useState("")

  const goToRegisterAddress = () => {
    navigation?.navigate('Cadastro Endereco', {
      nomeResponsavel: 'Pedro',
      cpf: '1232343345',
      telefone: '1342342342'
    })
  }

  return (
    <S.Container>
      <S.ContentHeader>
        <S.Description>Cadastro do Usuário</S.Description>
      </S.ContentHeader>
      <S.ContentBody>
        <S.InputWrapper>
          <Input
            placeholder={'Nome do Responsavél'}
            inputValue={value}
            onChangeText={text => setValue(text)}
            autoCapitalize='none'
            autoCorrect={false}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <InputMask
            inputType='cpf'
            placeholder={'CPF do Responsavél'}
            inputValue={value}
            onChangeText={text => { }}
            autoCapitalize='none'
            autoCorrect={false}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <InputMask
            inputType='cel-phone'
            placeholder={'Telefone do Responsavél'}
            inputValue={value}
            onChangeText={text => { }}
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

export { RegisterUser }
