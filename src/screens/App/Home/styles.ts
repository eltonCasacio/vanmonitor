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
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`

export const PlusIcon = styled.TouchableOpacity`
  align-items: center;
  width: 50px;
`

export const ContentTitle = styled.Text``

export const Footer = styled.View`
  justify-content: space-between;
  margin: 15px;
`

export const MarketingWrapper = styled.TouchableOpacity`
  margin-bottom: 10px;
`
export const MarketingIMG = styled.Image``

export const Partners = styled.View`
margin: 20px 0;
align-items: center;
`
