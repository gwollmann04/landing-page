import { Flex, Icon } from '@chakra-ui/react'
import { Instagram, LinkedIn, GitHub } from '@mui/icons-material'
import Link from 'next/link'

import { NAVBAR_MENU_OPTIONS, SOCIAL_MEDIA_OPTIONS } from '@/src/constants/menu'
import { HeaderMenuButton } from '@/src/components'

const HeaderMenu = () => {
  return (
    <Flex alignItems="center">
      {NAVBAR_MENU_OPTIONS.map((option) => (
        <HeaderMenuButton option={option} key={option.label} />
      ))}
      <Link
        rel="noopener noreferrer"
        target="_blank"
        style={{ display: 'flex' }}
        href={`${SOCIAL_MEDIA_OPTIONS[0].value}`}
      >
        <Icon as={LinkedIn} color="#6f5c7a" boxSize="24px" mr="12px" />
      </Link>
      <Link
        rel="noopener noreferrer"
        target="_blank"
        style={{ display: 'flex' }}
        href={`${SOCIAL_MEDIA_OPTIONS[1].value}`}
      >
        <Icon as={GitHub} color="#6f5c7a" boxSize="24px" mr="12px" />
      </Link>
      <Link
        rel="noopener noreferrer"
        target="_blank"
        style={{ display: 'flex' }}
        href={`${SOCIAL_MEDIA_OPTIONS[2].value}`}
      >
        <Icon as={Instagram} color="#6f5c7a" boxSize="24px" />
      </Link>
    </Flex>
  )
}

export default HeaderMenu
