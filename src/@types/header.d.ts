import { ButtonProps, FlexProps, IconProps } from '@chakra-ui/react'
import { OverridableComponent } from '@mui/material/OverridableComponent'

export declare type Option = {
  label: string
  value: string
}

export declare interface HeaderMenuButtonProps extends ButtonProps {
  key: string
  option: Option
}

export declare interface HeaderMenuSocialIconsProps extends IconProps {
  option: {
    label: string
    value: string
    icon: OverridableComponent
  }
}
