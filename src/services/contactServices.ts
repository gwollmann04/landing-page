import emailjs from '@emailjs/browser'
import { ContactFormType } from '@/src/@types/contact'

export const sendEmail = (params: ContactFormType) =>
  emailjs.send(
    String(process.env.NEXT_PUBLIC_SERVICE_ID),
    String(process.env.NEXT_PUBLIC_TEMPLATE_ID),
    { ...params },
    String(process.env.NEXT_PUBLIC_PUBLIC_KEY),
  )
