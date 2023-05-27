import { Flex, FlexProps, Icon, Slide, useDisclosure } from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineCancel } from 'react-icons/md'

import { NAVBAR_MENU_OPTIONS, SOCIAL_MEDIA_OPTIONS } from '@/src/constants/menu'
import { HeaderMenuButton, HeaderMenuSocialIcons } from '@/src/components'

const HeaderMenuMobile = ({ background }: FlexProps) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Flex alignItems='center'>
      <Icon
        display={['block', 'block', 'block', 'none']}
        as={GiHamburgerMenu}
        ml='6px'
        boxSize='24px'
        onClick={onToggle}
        _hover={{ cursor: 'pointer' }}
      />

      <Slide direction='top' in={isOpen}>
        <Flex
          zIndex='5'
          w='100vw'
          direction='column'
          background={background}
          transition='background 1s'
          alignItems='center'
          py='24px'
        >
          <Icon
            as={MdOutlineCancel}
            boxSize='32px'
            onClick={onToggle}
            position='absolute'
            top='30'
            right='30'
            _hover={{ cursor: 'pointer' }}
            color='#6f5c7a'
          />
          {NAVBAR_MENU_OPTIONS.map((option) => (
            <HeaderMenuButton
              mr='0px'
              my='6px'
              option={option}
              key={option.label}
            />
          ))}
          <Flex mt='12px'>
            {SOCIAL_MEDIA_OPTIONS.map((option) => (
              <HeaderMenuSocialIcons key={option.value} option={option} />
            ))}
          </Flex>
        </Flex>
      </Slide>
    </Flex>
  )
}

export default HeaderMenuMobile
