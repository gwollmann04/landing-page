import { Flex } from '@chakra-ui/react'
import { Unity, useUnityContext } from 'react-unity-webgl'
import { useState } from 'react'

import {
  IfComponent,
  GameInstructions,
  GameIntroduction,
} from '@/src/components'

//Acessar o jogo no mobile?
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
    <Flex width="100%" alignItems="center" direction="column" p="84px 20% 0px 20%">
      <Flex
        h={isGameEnabledAndNotQuitted ? '600px' : '400px'}
        p={isGameEnabledAndNotQuitted ? '24px' : '84px 64px'}
        background="blackAlpha.300"
        w={isGameEnabledAndNotQuitted ? '960px' : '100%'}
        alignItems="center"
        direction="column"
        fontSize="24px"
        justifyContent="center"
        borderRadius={isGameEnabled ? '24px 24px  0px 0px' : '24px'}
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
