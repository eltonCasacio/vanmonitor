import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${RFValue(5)}px ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.COLORS.WHITE_100};
`

export const TitleWrapper = styled.View`
  flex: 1;
  margin-left: ${RFValue(10)}px;
`

export const Title = styled.Text<{ goes: boolean }>`
  ${({ theme, goes }) => css`
    font-family: ${theme.FONTS.PoppinsSemiBold};
    color: ${goes ? theme.COLORS.GREEN : theme.COLORS.ATTENTION};
  `}
`

