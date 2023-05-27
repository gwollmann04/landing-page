import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { HeaderMenuButtonProps } from '@/src/@types/header'

const HeaderMenuButton = ({ option, ...props }: HeaderMenuButtonProps) => {
  const router = useRouter()
  return (
    <Button
      variant='secondary'
      onClick={() => router.push(`${option.value}`)}
      {...props}
    >
      {option.label}
    </Button>
  )
}

export default HeaderMenuButton
