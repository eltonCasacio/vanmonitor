import styled from "styled-components/native";
import { TextInputMask } from "react-native-masked-text";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE_100};
  height: 50px;
`

export const InputContainer = styled(TextInputMask)`
  flex: 1;
  font-family: ${({ theme }) => theme.FONTS.PoppinsMedium};
  font-size: 16px;
  margin-left: 10px;
  color: ${({ theme }) => theme.COLORS.GRAY2};
`

export const Label = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
  min-width: 60px;
  padding: 0 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: ${({theme}) => theme.COLORS.GREEN};
`

export const LabelText = styled.Text`
  color: ${({theme}) => theme.COLORS.WHITE_100};
  font-family: ${({theme}) => theme.FONTS.PoppinsRegular};
  text-transform: lowercase;
`
