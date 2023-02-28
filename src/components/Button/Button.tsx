import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { ActivityIndicator, PressableProps, Touchable, TouchableOpacityProps } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import * as S from './styles'

import { variants } from './Variant'
import { useTheme } from 'styled-components'

interface Props {
  title: string
  onPress: () => void
  iconName?: string
  isLoading?: boolean
  disabled?: boolean
  variant?: 'primary' | 'outline'
  style?: TouchableOpacityProps['style']
}

const Button: React.FC<Props> = ({
  title,
  onPress,
  iconName,
  isLoading,
  disabled,
  variant = 'primary',
  style
}) => {
  const { COLORS } = useTheme()
  const buttonVariant = variants[variant]
  const buttonStyle = disabled ? buttonVariant.disabled : buttonVariant.enabled
  return (
    <S.Container
      onPress={onPress}
      disabled={isLoading || disabled}
      style={[buttonStyle.button, style]}
    >
      {isLoading ? (
        <ActivityIndicator color={COLORS.GRAY1} />
      )
        : (
          <S.Content>
            {iconName && (
              <Icon
                name={iconName}
                size={buttonStyle.icon.size}
                color={buttonStyle.icon.color}
                style={buttonStyle.icon.style}
              />
            )}
            <S.Title>{title}</S.Title>
          </S.Content>
        )
      }
    </S.Container>
  )
}

export { Button }
