import { Flex } from '@chakra-ui/react'

import useScrollPosition from '@/src/hooks/useScrollPosition'

import { HeaderMenu, LogoIcon } from '@/src/components'

// Deixar responsivo
// Refatorar o menu com os links das redes sociais
// Permitir alterar idioma
const Header = () => {
  const scrollPosition = useScrollPosition()

  const backgroundColor = scrollPosition > 20 ? '#242424' : '#171425'

  return (
    <Flex
      justifyContent="space-between"
      w="100%"
      position="sticky"
      top="0"
      zIndex="1"
      background={backgroundColor}
      transition="background 1s"
      px='84px'
    >
      <LogoIcon fill={backgroundColor} transition="fill 1s" />
      <HeaderMenu />
    </Flex>
  )
}

export default Header
