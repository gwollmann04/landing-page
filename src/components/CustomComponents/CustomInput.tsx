import { Input, Text, Flex } from '@chakra-ui/react'

import { IfComponent } from '@/src/components'
import { CustomComponentProps } from '@/src/@types/contact'

const CustomInput = ({
  errorMessage,
  placeholder,
  field,
  ...props
}: CustomComponentProps) => {
  return (
    <Flex w="100%" maxW="576px" direction="column" {...props}>
      <Input
        autoComplete="off"
        textColor="#E2E8F0"
        focusBorderColor="#171425"
        borderColor="#E2E8F0"
        bg="none"
        placeholder={placeholder}
        {...field}
      />
      <IfComponent
        condition={!!errorMessage}
        component={
          <Text mt="6px" color="#B10606">
            {errorMessage}
          </Text>
        }
      />
    </Flex>
  )
}

export default CustomInput
