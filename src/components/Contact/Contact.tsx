import {
  Flex,
  Text,
  useToast,
  keyframes,
  usePrefersReducedMotion,
  Icon
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { BsMailbox } from 'react-icons/bs'

import { HeaderMenuSocialIcons, ContactForm } from '@/src/components'
import { SOCIAL_MEDIA_OPTIONS } from '@/src/constants/menu'
import { contactResolver } from '@/src/services/contactYupResolvers'
import { ContactFormType } from '@/src/@types/contact'
import { sendEmail } from '@/src/services/contactServices'

const textColorGradient = keyframes`
  from {
    background-position: 0% 50%;
}
  to {
    background-position: 100% 50%;
}
`

// Deixar mais bonito
// Remover commit das envs
const Contact = () => {
  const toast = useToast()
  const prefersReducedMotion = usePrefersReducedMotion()

  const textColorAnimation = prefersReducedMotion
    ? undefined
    : `${textColorGradient} 3s ease-in-out infinite alternate`

  const {
    control,
    formState: { isSubmitting, errors },
    handleSubmit,
  } = useForm<ContactFormType>({
    mode: 'onChange',
    resolver: contactResolver,
  })

  const onSubmit = async (values: ContactFormType) => {
    try {
      await sendEmail(values)
      toast({
        description: 'E-mail sent successfully!',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      })
    } catch {
      toast({
        description: 'There was a problem sending your e-mail!',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      })
    }
  }

  return (
    <Flex
      w="100%"
      background="linear-gradient(180deg, #242424 20%, #171425 100%)"
      justifyContent="center"
      py="84px"
      id="contact"
      as="form"
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <ContactForm
        isSubmitting={isSubmitting}
        errors={errors}
        control={control}
      />
      <Flex direction="column" fontSize="24px">
        <Text
          display="flex"
          sx={{
            background: 'linear-gradient(to right, #6355a4, #6355a4, #e89a3e, #e89a3e)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
            fontSize: '64px',
            animation: textColorAnimation,
            '-webkit-animation':  textColorAnimation,
            backgroundSize: '300%',
            '-moz-animation': textColorAnimation,
            alignSelf:"end"
          }}
        >
          Lets get in touch!
        </Text>
        <Text display='flex'  my="36px">
          Send me an e-mail... <Icon boxSize='32px' ml='12px' alignItems='center'  as={BsMailbox}/>
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
    </Flex>
  )
}

export default Contact
