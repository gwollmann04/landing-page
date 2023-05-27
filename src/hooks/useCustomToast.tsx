import { useToast } from '@chakra-ui/react'

import { useCustomToastProps } from '@/src/@types/customHooks'

export const useCustomToast = () => {
  const toastChakra = useToast()

  const toast = ({ message, type }: useCustomToastProps) => {
    toastChakra({
      description: message,
      status: type,
      position: 'top-right',
      isClosable: true
    })
  }

  return { toast }
}
