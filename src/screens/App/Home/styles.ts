import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY6};
  justify-content: space-between;
`

export const Content = styled.View`
  max-height: 200px;
  padding: 15px;
  margin: 0 15px;
  border-radius: 3PX;
  background-color: ${({ theme }) => theme.COLORS.WHITE_100};
`

export const ContentHeader = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
`

export const ContentTitle = styled.Text`
  font-family: ${({theme}) => theme.FONTS.PoppinsSemiBold};
  color: ${({ theme }) => theme.COLORS.GRAY2};
`

export const PlusIcon = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-end;
  width: 50px;
  height: 100%;
  color: ${({ theme }) => theme.COLORS.GRAY2};
`

export const Footer = styled.View`
  justify-content: space-between;
  margin: 15px;
`

export const MarketingWrapper = styled.TouchableOpacity`
  margin-bottom: 5px;
  `
export const MarketingIMG = styled.Image`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
`

export const Partners = styled.View`
margin: 20px 0;
align-items: center;
`
