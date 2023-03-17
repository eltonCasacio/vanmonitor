import styled from "styled-components/native";
import { TextInputMask } from "react-native-masked-text";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE_100};
  height: 40px
`

export const InputContainer = styled(TextInputMask)`
  flex: 1;
  font-family: ${({ theme }) => theme.FONTS.PoppinsMedium};
  color: ${({ theme }) => theme.COLORS.GRAY2};
`

export const Label = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  background-color: ${({theme}) => theme.COLORS.GREEN};
`

export const LabelText = styled.Text`
  color: ${({theme}) => theme.COLORS.WHITE_100};
  font-family: ${({theme}) => theme.FONTS.PoppinsBold};
  font-size: 12px;
  text-transform: uppercase;
`
