import {
  Flex,
  Text,
  keyframes,
  usePrefersReducedMotion,
  Icon
} from '@chakra-ui/react'
import { BsMailbox } from 'react-icons/bs'

import { HeaderMenuSocialIcons } from '@/src/components'
import { SOCIAL_MEDIA_OPTIONS } from '@/src/constants/menu'

const textColorGradient = keyframes`
    from {
      background-position: 0% 50%;
  }
    to {
      background-position: 100% 50%;
  }
  `

const ContactText = () => {
  const prefersReducedMotion = usePrefersReducedMotion()

  const textColorAnimation = prefersReducedMotion
    ? undefined
    : `${textColorGradient} 3s ease-in-out infinite alternate`

  return (
    <Flex direction='column' fontSize='24px' px='24px'>
      <Text
        display='flex'
        alignSelf={['center', 'center', 'center', 'end']}
        textAlign='center'
        fontSize={['48px', '48px', '48px', '64px']}
        sx={{
          background:
            'linear-gradient(to right, #6355a4, #6355a4, #e89a3e, #e89a3e)',
          'WebkitBackgroundClip': 'text',
          'WebkitTextFillColor': 'transparent',
          animation: textColorAnimation,
          backgroundSize: '300%'
        }}
      >
        Lets get in touch!
      </Text>
      <Text ml={['18px', '38px', '64px', '0px']} display='flex' my='36px'>
        Send me an e-mail...{' '}
        <Icon boxSize='32px' ml='12px' alignItems='center' as={BsMailbox} />
      </Text>
      <Text
        alignSelf='flex-end'
        mb={['0px', '0px', '0px', '24px']}
        mr={['8px', '16px', '32px', '0px']}
        textAlign='center'
      >
        ...Or contact me in one of my socials
      </Text>
      <Flex justifyContent='center' mt='12px'>
        {SOCIAL_MEDIA_OPTIONS.map((option) => (
          <HeaderMenuSocialIcons
            key={option.value}
            option={option}
            boxSize='32px'
          />
        ))}
      </Flex>
    </Flex>
  )
}

export default ContactText
