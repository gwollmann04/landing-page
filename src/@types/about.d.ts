import { ButtonProps } from '@chakra-ui/react'

export type CronologyItem = {
  value: string
  label: string
}

export declare interface CronologyItemPropTypes {
  index?: number
  item: CronologyItem
}

export declare interface TechnologyTextProps {
  technologySelectedText: string
}

export interface TechnologyIconProps extends ButtonProps {
  icon: As<any> | undefined
}
