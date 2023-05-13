import { Text } from '@chakra-ui/react'

import { TextIntroductionProps } from '@/src/@types/introduction'

const TextIntroduction = ({ text, ...props }: TextIntroductionProps) => {
  return (
    <Text textAlign="start" opacity="0" {...props}>
      {text}
    </Text>
  )
}

export default TextIntroduction
