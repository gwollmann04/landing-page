import { Flex, Text, Icon, useToast } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { BsEmojiSmile } from 'react-icons/bs'

import { HeaderMenuSocialIcons, ContactForm } from '@/src/components'
import { SOCIAL_MEDIA_OPTIONS } from '@/src/constants/menu'
import { contactResolver } from '@/src/services/contactYupResolvers'
import { ContactFormType } from '@/src/@types/contact'
import { sendEmail } from '@/src/services/contactServices'

// Deixar mais bonito
// automcomplete deixando branco
const Contact = () => {
  const toast = useToast()
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
      autoComplete="none"
      onSubmit={handleSubmit(onSubmit)}
    >
      <ContactForm
        isSubmitting={isSubmitting}
        errors={errors}
        control={control}
      />
      <Flex direction="column" textAlign="center" fontSize="24px">
        <Text justifyContent="center" display="flex">
          Lets get in touch!
          <Icon
            as={BsEmojiSmile}
            alignSelf="center"
            color="#E2E8F0"
            boxSize="18px"
            ml="12px"
          />
        </Text>
        <Text my="12px">Send me an e-mail</Text>
        <Text>Or contact me in one of my socials</Text>
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
