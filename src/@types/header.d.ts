import { OverridableComponent } from "@mui/material/OverridableComponent"

export declare type Option = {
  label: string
  value: string
}

export declare type HeaderMenuButtonProps = {
  key: string
  option: Option
}

export declare type HeaderMenuSocialIconsProps = {
  option: {
    label: string
    value: string
    icon: OverridableComponent
  }
}
