import { Dispatch, SetStateAction } from 'react'

export declare interface GameInstructionProps {
  isGameQuitted: boolean
  unload: () => Promise<void>
  setIsGameQuitted: Dispatch<SetStateAction<boolean>>
}

export declare interface GameIntroductionProps {
  setIsGameEnabled: Dispatch<SetStateAction<boolean>>
}
