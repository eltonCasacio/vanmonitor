import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

interface InputWrapperProps { hasError: boolean }


export const Container = styled.View`
  height: 100%;
  justify-content: center;
  padding: ${RFValue(20)}px;
  padding-top: ${RFValue(50)}px;
`

export const ContentBody = styled.View`
  flex: 1;
  justify-content: center;
`

export const InputWrapper = styled.View<InputWrapperProps>`
  ${({ hasError, theme }) => css`
    margin: ${RFValue(10)}px 0;
    border-bottom-color: ${hasError ? theme.COLORS.ATTENTION_LIGHT6 : "transparent"};
    border-bottom-width: 2px;
  `}
`

export const Label = styled.Text`
  color: ${({theme}) => theme.COLORS.GREEN};
`

export const ContentFooter = styled.View`
  flex-direction: row;
  height: 50px;
`
