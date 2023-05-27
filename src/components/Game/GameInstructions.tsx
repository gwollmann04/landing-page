import {
  Flex,
  Text,
  Button,
  usePrefersReducedMotion,
  keyframes
} from '@chakra-ui/react'

import { GameInstructionProps } from '@/src/@types/game'

const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
  `

const GameInstructions = ({
  isGameQuitted,
  unload,
  setIsGameQuitted
}: GameInstructionProps) => {
  const prefersReducedMotion = usePrefersReducedMotion()

  const controllersAnimation = prefersReducedMotion
    ? undefined
    : `${fadeIn} 3s `

  return (
    <Flex
      w={isGameQuitted ? '100%' : '960px'}
      background='blackAlpha.300'
      alignItems='center'
      direction='column'
      p='12px'
      borderRadius='0px 0px 24px 24px'
      animation={controllersAnimation}
    >
      <Button
        ml='12px'
        border='4px solid #292442'
        borderRadius='20px'
        background='#292442'
        maxW='120px'
        mb='8px'
        _hover={{ background: '#E2E8F0', color: '#292442' }}
        onClick={async () => {
          setIsGameQuitted(!isGameQuitted)
          if (!isGameQuitted) await unload()
        }}
      >
        {isGameQuitted ? 'Play Again' : 'Quit'}
      </Button>
      <Text>W A S D or Arrow Keys to Control the Airship</Text>
      <Text my='8px'>Left Click or Space to Shoot</Text>
      <Text>Right Click to use Shield</Text>
      <Text fontSize='10px' mt='8px'>
        *The assets utilized in the creation of this game were provided during
        the course, as I am not the original creator of these resources.
      </Text>
    </Flex>
  )
}

export default GameInstructions
