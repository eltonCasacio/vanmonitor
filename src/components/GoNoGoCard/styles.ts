import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity<{statusGoNoGo: boolean}>`
  flex-direction: row;
  align-items: center;
  padding: ${RFValue(10)}px;
  border-radius: 5px;
  background-color: ${({ theme, statusGoNoGo }) => statusGoNoGo? theme.COLORS.WHITE_100: theme.COLORS.GREEN};
`

export const TitleWrapper = styled.View`
  flex: 1;
  padding: 10px;
  margin-left: ${RFValue(10)}px;
`

export const Title = styled.Text<{statusGoNoGo: boolean}>`
  ${({ theme, statusGoNoGo}) => css`
    font-family: ${theme.FONTS.PoppinsSemiBold};
    font-size: ${RFValue(14)}px;
    color: ${statusGoNoGo? theme.COLORS.GREEN: theme.COLORS.WHITE_100};
  `}
`

