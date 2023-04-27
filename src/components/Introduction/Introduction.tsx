import {
  Image,
  Flex,
  Grid,
  GridItem,
  keyframes,
  usePrefersReducedMotion,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
} from '@chakra-ui/react'
import { useCallback } from 'react'

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const textSequence = keyframes`
  from { transform: translateY(20px); }
  to { opacity: 1; transform: none }
`

const Introduction = () => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const imageAnimation = prefersReducedMotion ? undefined : `${fadeIn} 5s `

  const textAnimation = useCallback(
    (delay: string) =>
      prefersReducedMotion
        ? undefined
        : `${textSequence} 1.5s forwards ${delay}`,
    [prefersReducedMotion],
  )

  return (
    <Flex
      width="100%"
      direction="column"
      background="linear-gradient(180deg, #171425 20%, #242424 100%)"
      py="150px"
    >
      <Grid templateColumns="repeat(2, 1fr)" width="100%">
        <GridItem justifySelf="flex-end" pr="84px">
          <Image
            w="300px"
            borderRadius="50%"
            src="/assets/images/perfil.png"
            alt="Profile"
            animation={imageAnimation}
          />
        </GridItem>
        <Flex
          pl="84px"
          color="gray.200"
          width="100%"
          direction="column"
          justifyContent="center"
          fontSize="24px"
        >
          <Text animation={textAnimation('1s')} opacity="0">
            Hi, my name is Guilherme
          </Text>
          <Text my="12px" animation={textAnimation('3s')} opacity="0">
            I am a frontend developer
          </Text>
          <Text mb="12px" animation={textAnimation('5s')} opacity="0">
            With almost 2 years of experience using React
          </Text>
          <Flex animation={textAnimation('7s')} opacity="0">
            <Text mr="4px">I also made a cool draw using pixel art,</Text>
            <Button
              px="0px"
              pb="5px"
              fontWeight="normal"
              fontSize="24px"
              background="none"
              textDecoration="underline"
              _hover={{ background: 'none' }}
              onClick={onOpen}
            >
              check it out
            </Button>
          </Flex>
        </Flex>
      </Grid>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent background="#242424" maxH="1400" maxW="1000">
          <ModalBody  p="2px">
            <ModalCloseButton
              position="absolute"
              top="2px"
              right="2px"
              color="gray.200"
            />
            <Image
              w="100%"
              h="100%"
              src="/assets/images/ds_sun.gif"
              alt="Gif"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  )
}

export default Introduction
