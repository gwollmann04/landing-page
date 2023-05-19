import { Icon, Link } from '@chakra-ui/react'

import { HeaderMenuSocialIconsProps } from '@/src/@types/header'

const HeaderMenuSocialIcons = ({ option }: HeaderMenuSocialIconsProps) => {
  return (
    <Link isExternal href={`${option.value}`}>
      <Icon as={option.icon} color="#6F5C7A" boxSize="24px" mr="12px" />
    </Link>
  )
}

export default HeaderMenuSocialIcons
