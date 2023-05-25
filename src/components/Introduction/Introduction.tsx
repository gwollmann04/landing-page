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
} from '@chakra-ui/react'
import { useCallback } from 'react'

import { TextIntroduction, ModalIntroduction } from '@/src/components'

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const textSequence = keyframes`
  from { transform: translateY(20px); }
  to { opacity: 1; transform: none }
`
// Deixar single quote todo projeto
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
      py={['64px', '64px', '156px']}
    >
      <Grid
        templateColumns={['1fr', '1fr', 'repeat(2, 1fr)', 'repeat(2, 1fr)']}
        width="100%"
      >
        <GridItem
          mb={['36px', '36px', '0px']}
          justifySelf={['center', 'center', 'flex-end']}
          pr={['0px', '0px', '24px', '84px']}
        >
          <Image
            w="300px"
            borderRadius="50%"
            src="/assets/images/perfil.png"
            alt="Profile"
            animation={imageAnimation}
          />
        </GridItem>
        <Flex
          pl={['12px', '12px', '24px', '84px']}
          pr="12px"
          width="100%"
          direction="column"
          justifyContent="center"
          fontSize="24px"
        >
          <TextIntroduction
            animation={textAnimation('1s')}
            text="Hi, my name is Guilherme"
          />
          <TextIntroduction
            animation={textAnimation('3s')}
            text="I am a frontend developer"
            my="12px"
          />
          <TextIntroduction
            animation={textAnimation('5s')}
            text="With almost 2 years of experience using React"
            mb="12px"
          />
          <Flex
            justifyContent={['center', 'center', 'center', 'start']}
            textAlign={['center', 'center', 'center', 'start']}
            animation={textAnimation('7s')}
            opacity="0"
          >
            <Text mr="4px">
              I also made a cool draw in pixel art,{' '}
              <Button variant="link" onClick={onOpen}>
                check it out
              </Button>
            </Text>
          </Flex>
        </Flex>
      </Grid>
      <ModalIntroduction isOpen={isOpen} onClose={onClose} />
    </Flex>
  )
}

export default Introduction
