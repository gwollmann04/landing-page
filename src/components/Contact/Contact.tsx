import { Flex, Input, Text, Textarea, Icon, Button } from '@chakra-ui/react'
import { useForm, Controller } from 'react-hook-form'
import { BsEmojiSmile } from 'react-icons/bs'

import { HeaderMenuSocialIcons } from '@/src/components'
import { SOCIAL_MEDIA_OPTIONS } from '@/src/constants/menu'
import { contactResolver } from '@/src/services/contactYupResolvers'

// Sinal de obrigatorio
// Tratar casos de erro
// Adicionar api de email
// Refatorar o Form
// Colocar toast de enviado ou erro
const Contact = () => {
  const {
    control,
    watch,
    formState: { isSubmitting, errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    resolver: contactResolver,
  })
console.log(errors)
  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <Flex
      w="100%"
      background="linear-gradient(180deg, #242424 20%, #171425 100%)"
      justifyContent="center"
      py="84px"
      id="contact"
      as="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Flex w="50%" alignItems="center" direction="column">
        <Controller
          name="user_name"
          control={control}
          render={({ field }) => (
            <Input
              maxW="576px"
              textColor="#E2E8F0"
              focusBorderColor="#171425"
              borderColor="#E2E8F0"
              bg="none"
              placeholder="Your name"
              {...field}
            />
          )}
        />
        <Controller
          name="user_email"
          control={control}
          render={({ field }) => (
            <Input
              maxW="576px"
              my="24px"
              textColor="#E2E8F0"
              focusBorderColor="#171425"
              borderColor="#E2E8F0"
              bg="none"
              placeholder="Your e-mail"
              {...field}
            />
          )}
        />
        <Controller
          name="subject"
          control={control}
          render={({ field }) => (
            <Input
              maxW="576px"
              textColor="#E2E8F0"
              focusBorderColor="#171425"
              borderColor="#E2E8F0"
              bg="none"
              placeholder="Subject"
              {...field}
            />
          )}
        />
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <Textarea
              maxW="576px"
              mt="48px"
              resize="none"
              textColor="#E2E8F0"
              focusBorderColor="#171425"
              borderColor="#E2E8F0"
              bg="none"
              h="200px"
              placeholder="Message"
              {...field}
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
