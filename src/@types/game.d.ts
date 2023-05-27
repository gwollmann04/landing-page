import { Dispatch, SetStateAction } from 'react'
import { IconProps } from '@chakra-ui/react'
import { OverridableComponent } from '@mui/material/OverridableComponent'

export declare interface GameInstructionProps {
  isGameQuitted: boolean
  unload: () => Promise<void>
  setIsGameQuitted: Dispatch<SetStateAction<boolean>>
}

export declare interface GameIntroductionProps {
  setIsGameEnabled: Dispatch<SetStateAction<boolean>>
}
export declare interface GameMobileTextProps extends IconProps {
  text: string
  icon: OverridableComponent
  iconColor: string
}
