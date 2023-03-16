import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TextInputMask } from "react-native-masked-text";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${RFValue(8)}px;
  background-color: ${({ theme }) => theme.COLORS.WHITE_100};
  height: 55px;
`

export const InputContainer = styled(TextInputMask)`
  flex: 1;
  margin-top: 8px;
  font-family: ${({ theme }) => theme.FONTS.PoppinsMedium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.GRAY2};
`
