import { Flex } from '@chakra-ui/react'
import { useState } from 'react'
import Link from 'next/link'
import { Unity, useUnityContext } from 'react-unity-webgl'

import { TechnologyIcon, TechnologyText } from '@/src/components'
import { TECHNOLOGIES_ITEMS } from '@/src/constants/about'

//Colocar uma forma de acessar o jogo
//Acessar o jogo no mobile?
//Configurar layout para exibir o jogo, tela de loading, botão para abrir e layout ao fechar
//Colocar algo sobre react native?
const Technologies = () => {
  const [technologySelectedText, setTechnologySelectedText] = useState('')

  const { unityProvider,loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: 'build/SpaceShooterWebGL.loader.js',
    dataUrl: 'build/SpaceShooterWebGL.data',
    frameworkUrl: 'build/SpaceShooterWebGL.framework.js',
    codeUrl: 'build/SpaceShooterWebGL.wasm',
  })

  return (
    <Flex
      py="64px"
      width="100%"
      background="blackAlpha.900"
      alignItems="center"
      px="25%"
      direction="column"
    >
      <Flex width="100%" justifyContent="space-between">
        {TECHNOLOGIES_ITEMS.map((item) => (
          <TechnologyIcon
            key={item.value}
            icon={item.icon}
            onClick={() => setTechnologySelectedText(item.value)}
          />
        ))}
      </Flex>
      <TechnologyText technologySelectedText={technologySelectedText} />
      <Link
        style={{
          marginTop: '24px',
          border: '4px solid #292442',
          borderRadius: '20px',
          background: '#292442',
          color: '#E2E8F0',
          padding: '6px 12px',
        }}
        target="_blank"
        href="/assets/Guilherme_Wollmann.pdf"
        download
      >
        Download CV
      </Link>
     {/*  <Unity
        unityProvider={unityProvider}
        style={{ width: '100%', height: '100%' }}
      /> */}
    </Flex>
  )
}

export default Technologies
