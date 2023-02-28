import { FC, ReactNode } from 'react'
import { Container, Shadow } from './styles'

interface Props { children: ReactNode, borderRadius?: number}

const BoxShadow: FC<Props> = ({ children, borderRadius }) => {
  return (
    <Container style={[Shadow.containerStyle, {borderRadius: borderRadius}]}>
      {children}
    </Container>
  )
}

export { BoxShadow }

