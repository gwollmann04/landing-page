import { TextProps, ModalProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

export interface TextIntroductionProps extends TextProps {
  text: string
}

export interface ModalIntroductionProps extends ModalProps {
  children?: ReactNode
}
