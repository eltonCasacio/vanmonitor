import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  height: 100%;
  justify-content: space-around;
  padding: ${RFValue(20)}px ${RFValue(20)}px;
`

export const ContentHeader = styled.View`
  align-items: center;
  padding: ${RFValue(10)}px;
`

export const ContentBody = styled.View`
  align-items: center;
`

export const ContentFooter = styled.View`
  align-items: center;
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
    color: ${theme.COLORS.GREEN};
    font-size: ${RFValue(18)}px;
    font-family: ${theme.FONTS.PoppinsMediumItalic};
  `}
`
export const CreateAccount = styled.Text`
 ${({ theme }) => css`
    width: 100%;
    font-family: ${theme.FONTS.PoppinsMediumItalic};
    color: ${theme.COLORS.GREEN};
    text-align: center;
  `}
`
