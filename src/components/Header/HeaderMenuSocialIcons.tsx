import { Icon } from '@chakra-ui/react'
import Link from 'next/link'

import { HeaderMenuSocialIconsProps } from '@/src/@types/header'

const HeaderMenuSocialIcons = ({ option }: HeaderMenuSocialIconsProps) => {
  return (
    <Link
      key={option.value}
      rel="noopener noreferrer"
      target="_blank"
      style={{ display: 'flex' }}
      href={`${option.value}`}
    >
      <Icon as={option.icon} color="#6f5c7a" boxSize="24px" mr="12px" />
    </Link>
  )
}

export default HeaderMenuSocialIcons
