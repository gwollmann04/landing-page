import { yupResolver } from '@hookform/resolvers/yup'
import { validateEmail } from 'validations-br'
import * as yup from 'yup'

import { customValidateName } from '@/src/helpers/customValidators'

yup.setLocale({
  mixed: { required: 'Required field.' }
})

export const contactResolver = yupResolver(
  yup.object().shape({
    user_name: yup
      .string()
      .test('valid-name', 'Invalid name.', (value) =>
        customValidateName(String(value))
      )
      .required(),
    user_email: yup
      .string()
      .test('is-email', 'Enter a valid email address.', (value) =>
        validateEmail(String(value))
      )
      .required(),
    subject: yup.string().required(),
    message: yup.string().required()
  })
)
