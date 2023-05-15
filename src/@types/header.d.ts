import { OverridableComponent } from '@mui/material/OverridableComponent'

export declare type Option = {
  label: string
  value: string
}

export declare interface HeaderMenuButtonProps {
  key: string
  option: Option
}

export declare interface HeaderMenuSocialIconsProps {
  option: {
    label: string
    value: string
    icon: OverridableComponent
  }
}
