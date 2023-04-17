import styled from "styled-components/native";

export const Container = styled.View`
  position: absolute;
  top: 10px;
  left: 15px;
  right: 15px;
  padding: 50px 30px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.COLORS.GRAY5};
  border-width: 1px;
  background-color: ${({ theme }) => theme.COLORS.WHITE_100};
  align-items: center;
`

export const H1 = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PoppinsMedium};
  text-align: center;
  font-weight: bold;
  font-size: 22px;
  color: ${({ theme }) => theme.COLORS.GREEN};
`

export const H3 = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PoppinsMedium};
  text-align: center;
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.BLACK};
`

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PoppinsMedium};
  margin: 15px 0;
  color: ${({ theme }) => theme.COLORS.GRAY3};
  text-align: center;
`

export const ButtonContainer = styled.View`
  flex-direction: row;
`


export const Button = styled.View`
  margin: 20px 5px 0;
`
