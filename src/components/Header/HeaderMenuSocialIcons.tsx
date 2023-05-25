import { Icon, Link } from '@chakra-ui/react'

import { HeaderMenuSocialIconsProps } from '@/src/@types/header'

const HeaderMenuSocialIcons = ({ option, ...props }: HeaderMenuSocialIconsProps) => {
  return (
    <Link isExternal href={`${option.value}`}>
      <Icon as={option.icon} color="#6F5C7A" boxSize="24px" mx="6px" {...props}/>
    </Link>
  )
}

export default HeaderMenuSocialIcons
