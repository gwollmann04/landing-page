import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { HeaderMenuButtonProps } from '@/src/@types/header'

const HeaderMenuButton = ({ option, key }: HeaderMenuButtonProps) => {
  const router = useRouter()
  return (
    <Button
      variant="ghost"
      _hover={{
        color: 'none',
        backgroundSize: '100% 2px',
        backgroundPositionX: 'left',
      }}
      _active={{ color: 'none' }}
      onClick={() => router.push(`${option.value}`)}
      color="#6f5c7a"
      key={key}
      mr="84px"
      background="linear-gradient(0deg, #6f5c7a, #6f5c7a) no-repeat right bottom / 0 2px"
      transition="background-size 350ms"
      pb="2px"
    >
      {option.label}
    </Button>
  )
}

export default HeaderMenuButton
