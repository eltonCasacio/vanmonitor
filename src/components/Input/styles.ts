import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
height: 45px;
  flex-direction: row;
  padding: 0 ${RFValue(8)}px;
  border-radius: ${RFValue(8)}px;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE_100};
`

export const InputContainer = styled.TextInput`
  flex: 1;
height: auto;

  font-family: ${({ theme }) => theme.FONTS.PoppinsMedium};
  color: ${({ theme }) => theme.COLORS.GRAY2};
`
