import {
  Image,
  Flex,
  Grid,
  GridItem,
  keyframes,
  usePrefersReducedMotion,
  Text,
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
          color="#FFFFFF"
          width="100%"
          direction="column"
          justifyContent="center"
          fontSize="24px"
        >
          <Text color="gray.200" animation={textAnimation('1s')} opacity="0">
            Hi, my name is Guilherme
          </Text>
          <Text color="gray.200" my='12px' animation={textAnimation('3s')} opacity="0">
            I am a frontend developer 
          </Text>
          <Text color="gray.200" mb='12px' animation={textAnimation('5s')} opacity="0">
            With almost 2 years of experience using React
          </Text>
          <Text color="gray.200" animation={textAnimation('7s')} opacity="0">
            I also made a cool draw using pixel art, check it out
          </Text>
        </Flex>
      </Grid>
    </Flex>
  )
}

export default Introduction
