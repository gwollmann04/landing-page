import { Flex } from '@chakra-ui/react'

import useScrollPosition from '@/src/hooks/useScrollPosition'
import { HeaderMenu, LogoIcon, HeaderMenuMobile } from '@/src/components'

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
      px={['16px', '84px']}
    >
      <LogoIcon fill={backgroundColor} transition="fill 1s" />
      <Flex>
        <HeaderMenu />
        <HeaderMenuMobile background={backgroundColor} />
      </Flex>
    </Flex>
  )
}

export default Header
