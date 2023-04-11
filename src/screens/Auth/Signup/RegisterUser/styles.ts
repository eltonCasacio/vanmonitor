import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

interface InputWrapperProps { hasError: boolean }


export const Container = styled.View`
    flex: 1;
    padding: ${RFValue(20)}px;
    padding-top: ${RFValue(40)}px;
`

export const ContentBody = styled.View`
    flex: 0.5;
    justify-content: flex-end;
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

export const IMGWrapper = styled.View`
    position: absolute;
    bottom: 100px;
    left: 33%;
`

export const IMG = styled.Image``

export const ContentFooter = styled.View`
    flex: 0.5;
    flex-direction: row;
    justify-content: center;
`

export const Button = styled.View`
    flex: 1;
    align-self: flex-end;
    height: 60px;
`


