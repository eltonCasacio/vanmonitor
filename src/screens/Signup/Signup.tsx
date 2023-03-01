import React, { useState } from 'react'
import * as S from './styles'
import Input from '@components/Input'
import InputMask from '@components/InputMask'
import { Button } from '@components/Button'

const Signup: React.FC = () => {
  const [value, setValue] = useState("")

  return (
    <S.Container>
      <S.ContentHeader>
        <S.Title>Cadastro</S.Title>
      </S.ContentHeader>
      <S.ContentBody>
        <S.InputWrapper>
          <Input
            leftIcon
            iconNameLeft='card-outline'
            iconSize={25}
            placeholder={'Nome do Responsavél'}
            inputValue={value}
            onChangeText={text => setValue(text)}
            autoCapitalize='none'
            autoCorrect={false}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <InputMask
            leftIcon
            inputType='cpf'
            iconNameLeft='card-outline'
            iconSize={25}
            placeholder={'CPF do Responsavél'}
            inputValue={value}
            onChangeText={text => { }}
            autoCapitalize='none'
            autoCorrect={false}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <InputMask
            leftIcon
            inputType='cel-phone'
            iconNameLeft='card-outline'
            iconSize={25}
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
          onPress={() => { }}
        />
      </S.ContentFooter>
    </S.Container>
  )
}

export { Signup }
