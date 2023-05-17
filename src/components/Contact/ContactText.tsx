import {
  Flex,
  Text,
  keyframes,
  usePrefersReducedMotion,
  Icon,
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
    <Flex direction="column" fontSize="24px">
      <Text
        display="flex"
        sx={{
          background:
            'linear-gradient(to right, #6355a4, #6355a4, #e89a3e, #e89a3e)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          fontSize: '64px',
          animation: textColorAnimation,
          backgroundSize: '300%',
          alignSelf: 'end',
        }}
      >
        Lets get in touch!
      </Text>
      <Text display="flex" my="36px">
        Send me an e-mail...{' '}
        <Icon boxSize="32px" ml="12px" alignItems="center" as={BsMailbox} />
      </Text>
      <Text px="36px" mb="24px">
        ...Or contact me in one of my socials
      </Text>
      <Flex justifyContent="center" mt="12px">
        {SOCIAL_MEDIA_OPTIONS.map((option) => (
          <HeaderMenuSocialIcons key={option.value} option={option} />
        ))}
      </Flex>
    </Flex>
  )
}

export default ContactText
