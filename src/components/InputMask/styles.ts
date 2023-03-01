import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TextInputMask } from "react-native-masked-text";

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: 60px;
  padding: 0 ${RFValue(8)}px;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY5};
`

export const InputContainer = styled(TextInputMask)`
  flex: 1;
  height: 100%;
  margin-top: 8px;
  font-family: ${({ theme }) => theme.FONTS.PoppinsLight};
  font-size: ${RFValue(16)}px;
  text-align: center;
  border-radius: ${RFValue(8)}px;
  color: ${({ theme }) => theme.COLORS.GRAY2};
`
