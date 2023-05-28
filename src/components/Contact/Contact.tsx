import { Flex } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { ContactForm, ContactText } from '@/src/components'
import { contactResolver } from '@/src/services/contactYupResolvers'
import { ContactFormType } from '@/src/@types/contact'
import { sendEmail } from '@/src/services/contactServices'
import { useCustomToast } from '@/src/hooks'

const Contact = () => {
  const { toast } = useCustomToast()

  const {
    control,
    formState: { isSubmitting, errors },
    handleSubmit
  } = useForm<ContactFormType>({
    mode: 'onChange',
    resolver: contactResolver,
    defaultValues: {
      user_name: '',
      user_email: '',
      message: '',
      subject: ''
    }
  })

  const onSubmit = async (values: ContactFormType) => {
    try {
      await sendEmail(values)
      toast({
        message: 'E-mail sent successfully!',
        type: 'success'
      })
    } catch {
      toast({
        message: 'There was a problem sending your e-mail!',
        type: 'error'
      })
    }
  }

  return (
    <Flex
      w='100%'
      background='linear-gradient(180deg, #242424 20%, #171425 100%)'
      justifyContent='center'
      pt='96px'
      pb={['32px', '48px', '64px', '84px']}
      id='contact'
      as='form'
      autoComplete='off'
      onSubmit={handleSubmit(onSubmit)}
      direction={['column', 'column', 'column', 'row']}
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
