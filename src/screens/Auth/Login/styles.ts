import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  padding: ${RFValue(20)}px ${RFValue(20)}px;
`

export const ContentHeader = styled.View`
  align-items: center;
  padding: ${RFValue(10)}px;
`

export const ContentBody = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
 ${({ theme }) => css`
    text-align: center;
    font-size: ${RFValue(20)}px;
    font-family: ${theme.FONTS.PoppinsMediumItalic};
    margin-top: ${RFValue(50)}px;
  `}
`

export const Description = styled.Text`
 ${({ theme }) => css`
    color: ${theme.COLORS.GREEN};
    font-size: ${RFValue(18)}px;
    font-family: ${theme.FONTS.PoppinsMediumItalic};
  `}
`

export const CreateAccountWrapper = styled.TouchableOpacity`
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

export const MessageError = styled.Text`
 ${({ theme }) => css`
    color: ${theme.COLORS.RED};
    font-family: ${theme.FONTS.PoppinsBoldItalic};
  `}
`

export const ContentFooter = styled.View`
  flex-direction: row;
  height: 60px;
`

export const ButtonWrapper = styled.View`
  flex: 1;
`
