import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: 45px;
  padding: 0 ${RFValue(8)}px;
  border-radius: ${RFValue(8)}px;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE_100};
`

export const InputContainer = styled.TextInput`
  flex: 1;
  height: 100%;
  margin-top: 8px;
  font-family: ${({ theme }) => theme.FONTS.PoppinsMedium};
  font-size: ${RFValue(16)}px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY2};
`
