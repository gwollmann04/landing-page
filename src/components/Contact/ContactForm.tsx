import { Flex, Button } from '@chakra-ui/react'
import { Controller } from 'react-hook-form'

import { CustomInput, CustomTextArea } from '@/src/components'
import { ContactFormProps } from '@/src/@types/contact'

const ContactForm = ({ isSubmitting, errors, control }: ContactFormProps) => {
  return (
    <Flex
      w={['100%', '100%', '100%', '50%']}
      alignItems="center"
      direction="column"
      p="24px"
    >
      <Controller
        name="user_name"
        control={control}
        render={({ field }) => (
          <CustomInput
            placeholder="Your name"
            field={field}
            errorMessage={errors?.user_name?.message}
          />
        )}
      />
      <Controller
        name="user_email"
        control={control}
        render={({ field }) => (
          <CustomInput
            placeholder="Your e-mail"
            field={field}
            my="24px"
            errorMessage={errors?.user_email?.message}
          />
        )}
      />
      <Controller
        name="subject"
        control={control}
        render={({ field }) => (
          <CustomInput
            placeholder="Subject"
            field={field}
            errorMessage={errors?.subject?.message}
          />
        )}
      />
      <Controller
        name="message"
        control={control}
        render={({ field }) => (
          <CustomTextArea
            placeholder="Message"
            field={field}
            errorMessage={errors?.message?.message}
            mt="48px"
          />
        )}
      />
      <Button
        type="submit"
        mt="12px"
        variant="primary"
        isLoading={isSubmitting}
      >
        Send e-mail
      </Button>
    </Flex>
  )
}

export default ContactForm
