import styled from "styled-components/native";

export const Items = styled.View`
  position: absolute;
  top: 40px;
  right: 30px;
  padding: 40px;
  border-radius: 8px;
  border-color: ${({theme}) => theme.COLORS.GRAY5};
  border-width: 1px;
  background-color: ${({theme}) => theme.COLORS.WHITE_100};
`

export const Item = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`

export const Title = styled.Text<{iconName:string}>`
  font-family: ${({theme}) => theme.FONTS.PoppinsSemiBold};
  font-size: 16px;
  text-transform: uppercase;
  padding-top: 5px;
  padding-left: 5px;
  color: ${({iconName}) => iconName == 'delete'? 'red': 'black'};
`
