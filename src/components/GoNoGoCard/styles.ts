import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${RFValue(15)}px 0;
  background-color: ${({ theme }) => theme.COLORS.WHITE_100};
`

export const TitleWrapper = styled.View`
  flex: 1;
  margin-left: ${RFValue(10)}px;
`

export const Title = styled.Text<{ goes: boolean }>`
  ${({ theme, goes }) => css`
    font-family: ${theme.FONTS.PoppinsSemiBold};
    font-size: ${RFValue(14)}px;
    color: ${goes ? theme.COLORS.GREEN : theme.COLORS.ATTENTION};
  `}
`

