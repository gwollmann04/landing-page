import { Flex, Text, Button } from '@chakra-ui/react'

import { GameIntroductionProps } from '@/src/@types/game'

const GameIntroduction = ({ setIsGameEnabled }: GameIntroductionProps) => {
  return (
    <>
      <Text textAlign='center'>
        Hey <br />
        I have also made a game <br />
        During a C# course <br />
        Wanna check it out?
      </Text>
      <Flex mt='36px'>
        <Button variant='primary' onClick={() => setIsGameEnabled(true)}>
          Sure
        </Button>
        <Button
          ml='12px'
          variant='primary'
          onClick={() => setIsGameEnabled(true)}
        >
          Absolutely
        </Button>
      </Flex>
    </>
  )
}

export default GameIntroduction
