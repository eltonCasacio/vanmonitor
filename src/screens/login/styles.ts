import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  justify-content: space-between;
  padding: ${RFValue(10)}px;

`

export const ContentHeader = styled.View`
  align-items: center;
  padding: ${RFValue(10)}px;
`

export const ContentBody = styled.View`
  align-items: center;
`

export const ContentFooter = styled.View`
`

export const Title = styled.Text`
 ${({ theme }) => css`
    text-align: center;
    font-size: ${RFValue(20)}px;
    font-family: ${theme.FONTS.PoppinsMediumItalic};
  `}
`

export const Description = styled.Text`
 ${({ theme }) => css`
    margin-top: ${RFValue(20)}px;
    font-family: ${theme.FONTS.PoppinsLight};
  `}
`

export const InputCPF = styled.Text``

