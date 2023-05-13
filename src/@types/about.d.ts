import { ButtonProps } from '@chakra-ui/react'

export declare type CronologyItemPropTypes = {
  index: number
  item: {
    value: string
    label: string
  }
}

export declare type TechnologyTextProps = {
  technologySelectedText: string
}

export interface TechnologyIconProps extends ButtonProps {
  icon: As<any> | undefined
}
