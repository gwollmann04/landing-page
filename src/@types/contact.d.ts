import { FlexProps } from '@chakra-ui/react'

export interface CustomComponentProps extends FlexProps {
  errorMessage: string | FieldError
  placeholder: string
  field: ControllerRenderProps
}

export type ContactFormType = {
  user_name: string
  user_email: string
  subject: string
  message: string
}

export interface ContactFormProps {
  isSubmitting: boolean
  errors: FieldErrors<ContactFormType>
  control: Control<ContactFormType, any>
}
