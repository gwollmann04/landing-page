import { Flex } from '@chakra-ui/react'

import { NAVBAR_MENU_OPTIONS, SOCIAL_MEDIA_OPTIONS } from '@/src/constants/menu'
import { HeaderMenuButton, HeaderMenuSocialIcons } from '@/src/components'

const HeaderMenu = () => {
  return (
    <Flex display={['none', 'none', 'none', 'flex']} alignItems="center">
      {NAVBAR_MENU_OPTIONS.map((option) => (
        <HeaderMenuButton option={option} key={option.label} />
      ))}
      {SOCIAL_MEDIA_OPTIONS.map((option) => (
        <HeaderMenuSocialIcons key={option.value} option={option} />
      ))}
    </Flex>
  )
}

export default HeaderMenu
