import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Pressable } from 'react-native'

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

export const CreateAccountWrapper = styled(Pressable)`
  align-items: center;
  flex-direction: row;
  justify-content:  center;
  margin: ${RFValue(5)}px 0;
`

export const CreateAccountText = styled.Text`
 ${({ theme }) => css`
    font-size: ${RFValue(14)}px;
    color: ${theme.COLORS.GRAY3};
    font-family: ${theme.FONTS.PoppinsMediumItalic};
  `}
`

export const CreateAccountTextBold = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(14)}px;
    color: ${theme.COLORS.GRAY2};
    font-family: ${theme.FONTS.PoppinsSemiBoldItalic};
    margin-left: ${RFValue(5)}px;
  `}
`
