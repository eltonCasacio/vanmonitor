import styled from "styled-components/native";

export const Container = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE_100};
`

export const InputContainer = styled.TextInput`
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
  width: 70px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: ${({theme}) => theme.COLORS.GREEN};
`

export const LabelText = styled.Text`
  color: ${({theme}) => theme.COLORS.WHITE_100};
  font-family: ${({theme}) => theme.FONTS.PoppinsRegular};
  text-transform: lowercase;
`
