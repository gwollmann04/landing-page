import { Flex, useToast } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { ContactForm, ContactText } from '@/src/components'

import { contactResolver } from '@/src/services/contactYupResolvers'
import { ContactFormType } from '@/src/@types/contact'
import { sendEmail } from '@/src/services/contactServices'

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
      py={['32px 16px', '48px', '64px', '84px']}
      id="contact"
      as="form"
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      direction={['column','column','column','row']}
    >
      <ContactText />
      <ContactForm
        isSubmitting={isSubmitting}
        errors={errors}
        control={control}
      />
    </Flex>
  )
}

export default Contact
