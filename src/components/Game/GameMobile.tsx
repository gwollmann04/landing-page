import { Flex } from '@chakra-ui/react'
import { AiOutlineSmile } from 'react-icons/ai'
import { FaGamepad } from 'react-icons/fa'
import { SlScreenDesktop } from 'react-icons/sl'
import { BsUnity } from 'react-icons/bs'

import { GameMobileText } from '@/src/components'

const GameMobile = () => {
  return (
    <Flex
      background='blackAlpha.300'
      display={['flex', 'flex', 'flex', 'none']}
      w='100%'
      h='324px'
      alignItems='center'
      justifyContent='center'
      borderRadius='24px'
    >
      <Flex
        px='6px'
        fontSize='24px'
        textAlign='center'
        alignItems='center'
        direction='column'
      >
        Hey
        <GameMobileText
          text='I have also made a game'
          iconColor='yellow.300'
          icon={AiOutlineSmile}
        />
        <GameMobileText
          text='During a C# course'
          iconColor='#524884'
          icon={BsUnity}
        />
        <GameMobileText
          text='But in order for you to play'
          iconColor='blue.300'
          icon={FaGamepad}
        />
        <GameMobileText
          text='You need to be on a bigger screen'
          iconColor='green.300'
          icon={SlScreenDesktop}
        />
      </Flex>
    </Flex>
  )
}

export default GameMobile
