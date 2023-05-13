import {
  Flex,
  Text,
  Button,
  usePrefersReducedMotion,
  keyframes,
} from '@chakra-ui/react'
import { Unity, useUnityContext } from 'react-unity-webgl'
import { useState } from 'react'

import { IfComponent } from '@/src/components'

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

//Acessar o jogo no mobile?
// Componentizar
const Game = () => {
  const [isGameEnabled, setIsGameEnabled] = useState(false)
  const [isGameQuitted, setIsGameQuitted] = useState(false)

  const prefersReducedMotion = usePrefersReducedMotion()

  const isGameEnabledAndNotQuitted = isGameEnabled && !isGameQuitted

  const controllersAnimation = prefersReducedMotion
    ? undefined
    : `${fadeIn} 3s `

  const { unityProvider, unload } = useUnityContext({
    loaderUrl: 'build/SpaceShooterWebGL.loader.js',
    dataUrl: 'build/SpaceShooterWebGL.data',
    frameworkUrl: 'build/SpaceShooterWebGL.framework.js',
    codeUrl: 'build/SpaceShooterWebGL.wasm',
  })

  return (
    <Flex width="100%" alignItems="center" direction="column" p="84px 20%">
      <Flex
        h={isGameEnabledAndNotQuitted ? '600px' : '400px'}
        p={isGameEnabledAndNotQuitted ? '24px' : '84px 64px'}
        background="blackAlpha.300"
        w={isGameEnabledAndNotQuitted ? '960px' : '100%'}
        alignItems="center"
        direction="column"
        fontSize="24px"
        justifyContent="center"
      >
        <IfComponent
          condition={!isGameEnabled && !isGameQuitted}
          component={
            <>
              <Text>
                Hey <br />
                I have also made a game <br />
                During a C# course <br />
                Wanna check it out?
              </Text>
              <Flex mt="36px">
                <Button
                  variant="primary"
                  onClick={() => setIsGameEnabled(true)}
                >
                  Sure
                </Button>
                <Button
                  ml="12px"
                  variant="primary"
                  onClick={() => setIsGameEnabled(true)}
                >
                  Absolutely
                </Button>
              </Flex>
            </>
          }
        />
        <IfComponent
          condition={isGameEnabled && isGameQuitted}
          component={
            <Flex>
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
          <Flex
            w={isGameEnabledAndNotQuitted ? '960px' : '100%'}
            background="blackAlpha.300"
            alignItems="center"
            direction="column"
            p="12px"
            animation={controllersAnimation}
          >
            <Button
              ml="12px"
              border="4px solid #292442"
              borderRadius="20px"
              background="#292442"
              maxW="120px"
              mb="8px"
              _hover={{ background: '#E2E8F0', color: '#292442' }}
              onClick={async () => {
                setIsGameQuitted(!isGameQuitted)
                if (!isGameQuitted) await unload()
              }}
            >
              {isGameEnabled && isGameQuitted ? 'Play Again' : 'Quit'}
            </Button>
            <Text>W A S D or Arrow Keys to Control the Airship</Text>
            <Text my="8px">Left Click or Space to Shoot</Text>
            <Text>Right Click to use Shield</Text>
            <Text fontSize="10px" mt="8px">
              *The assets utilized in the creation of this game were provided
              during the course, as I am not the original creator of these
              resources.
            </Text>
          </Flex>
        }
      />
    </Flex>
  )
}

export default Game
