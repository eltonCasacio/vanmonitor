import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex-direction: row;
  padding: 0 ${RFValue(5)}px;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE_100};
  height: 55px;
`

export const InputContainer = styled.TextInput`
  flex: 1;
  font-family: ${({ theme }) => theme.FONTS.PoppinsMedium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.GRAY2};
`
