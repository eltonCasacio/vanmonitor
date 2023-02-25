import React from 'react'
import { SafeAreaView } from 'react-native'
import { Button } from '@components/Button/Button'
import { ButtonWithIcon } from '@components/ButtonWithIcon/ButtonWithIcon'
import * as S from './styles'

const Login: React.FC = () => {
  return (
    <SafeAreaView>
      <S.Container>
        <S.ContentHeader>
          <S.Title>Seja bem vindo(a) a Horus</S.Title>
        </S.ContentHeader>

        <S.ContentBody>
          <S.Description>digite o CPF</S.Description>
          <Button title='Dog'/>
          <ButtonWithIcon title='Facebook' iconName="facebook"/>
        </S.ContentBody>
        <S.ContentFooter></S.ContentFooter>
      </S.Container>
    </SafeAreaView>
  )
}

export { Login }
