import {
  Modal,
  ModalOverlay,
  ModalBody,
  ModalContent,
  Image,
  ModalCloseButton
} from '@chakra-ui/react'

import { ModalIntroductionProps } from '@/src/@types/introduction'

const ModalIntroduction = ({
  isOpen,
  onClose,
  ...props
}: ModalIntroductionProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} {...props}>
      <ModalOverlay />
      <ModalContent background='#242424' maxH='1400' maxW='1000'>
        <ModalBody p='2px'>
          <ModalCloseButton position='absolute' top='2px' right='2px' />
          <Image w='100%' h='100%' src='/assets/images/ds_sun.gif' alt='Gif' />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ModalIntroduction
