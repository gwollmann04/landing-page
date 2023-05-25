import { Flex, Text, Icon } from '@chakra-ui/react'
import { Unity, useUnityContext } from 'react-unity-webgl'
import { useState } from 'react'
import { AiOutlineSmile } from 'react-icons/ai'
import { FaGamepad } from 'react-icons/fa'
import { SlScreenDesktop } from 'react-icons/sl'
import { BsUnity } from 'react-icons/bs'

import {
  IfComponent,
  GameInstructions,
  GameIntroduction,
} from '@/src/components'

//Refatorar o mobile
const Game = () => {
  const [isGameEnabled, setIsGameEnabled] = useState(false)
  const [isGameQuitted, setIsGameQuitted] = useState(false)

  const isGameEnabledAndNotQuitted = isGameEnabled && !isGameQuitted

  const { unityProvider, unload } = useUnityContext({
    loaderUrl: 'build/SpaceShooterWebGL.loader.js',
    dataUrl: 'build/SpaceShooterWebGL.data',
    frameworkUrl: 'build/SpaceShooterWebGL.framework.js',
    codeUrl: 'build/SpaceShooterWebGL.wasm',
  })

  return (
    <Flex
      width="100%"
      alignItems="center"
      direction="column"
      p={['32px 16px', '48px', '64px', '84px 20% 0px 20%']}
    >
      <Flex
        background="blackAlpha.300"
        display={['flex', 'flex', 'flex', 'none']}
        w="100%"
        h="324px"
        alignItems="center"
        justifyContent="center"
        borderRadius="24px"
      >
        <Flex
          px="6px"
          fontSize="24px"
          textAlign="center"
          alignItems="center"
          direction="column"
        >
          Hey
          <Flex justifyContent="center" alignItems="center">
            <Text>
              I have also made a game
              <Icon
                ml="8px"
                mb="-4px"
                color="yellow.300"
                as={AiOutlineSmile}
                boxSize="22px"
              />
            </Text>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            <Text>
              During a C# course
              <Icon
                ml="8px"
                mb="-4px"
                color="#524884"
                as={BsUnity}
                boxSize="22px"
              />
            </Text>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            <Text>
              But in order for you to play
              <Icon
                ml="8px"
                mb="-4px"
                color="blue.300"
                as={FaGamepad}
                boxSize="22px"
              />
            </Text>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            <Text>
              You need to be on a bigger screen
              <Icon
                ml="8px"
                mb="-4px"
                color="green.300"
                as={SlScreenDesktop}
                boxSize="22px"
              />
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        h={isGameEnabledAndNotQuitted ? '600px' : '400px'}
        p={isGameEnabledAndNotQuitted ? '24px' : '84px 64px'}
        background="blackAlpha.300"
        w={isGameEnabledAndNotQuitted ? '960px' : '100%'}
        alignItems="center"
        direction="column"
        fontSize="24px"
        justifyContent="center"
        maxW="1144px"
        borderRadius={isGameEnabled ? '24px 24px  0px 0px' : '24px'}
        display={['none', 'none', 'none', 'flex']}
      >
        <IfComponent
          condition={!isGameEnabled}
          component={<GameIntroduction setIsGameEnabled={setIsGameEnabled} />}
        />
        <IfComponent
          condition={isGameQuitted}
          component={
            <Flex textAlign="center">
              Thanks for playing! <br /> <br />
              (Did you beat the boss?)
            </Flex>
          }
        />
        <IfComponent
          condition={isGameEnabledAndNotQuitted}
          component={
            <Unity
              unityProvider={unityProvider}
              style={{ width: '100%', height: '100%' }}
            />
          }
        />
      </Flex>
      <IfComponent
        condition={isGameEnabled}
        component={
          <GameInstructions
            isGameQuitted={isGameQuitted}
            unload={unload}
            setIsGameQuitted={setIsGameQuitted}
          />
        }
      />
    </Flex>
  )
}

export default Game
