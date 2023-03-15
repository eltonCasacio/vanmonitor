import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TextInputMask } from "react-native-masked-text";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 45px;
  padding: 0 ${RFValue(8)}px;
  border-radius: ${RFValue(8)}px;
  background-color: ${({ theme }) => theme.COLORS.WHITE_100};
`

export const InputContainer = styled(TextInputMask)`
  flex: 1;
  height: 100%;
  margin-top: 8px;
  font-family: ${({ theme }) => theme.FONTS.PoppinsMedium};
  color: ${({ theme }) => theme.COLORS.GRAY2};
`
