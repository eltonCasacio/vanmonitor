import styled from "styled-components/native";

export const Container = styled.View`
  height: 40px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE_100};
`

export const InputContainer = styled.TextInput`
  flex: 1;
  font-family: ${({ theme }) => theme.FONTS.PoppinsMedium};
  color: ${({ theme }) => theme.COLORS.GRAY2};
`

export const Label = styled.View`
  height: 100%;
  padding: 0 10px;
  justify-content: center;
  align-items: center;
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
