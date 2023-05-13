import { Button, Icon } from '@chakra-ui/react'

import { TechnologyIconProps } from '@/src/@types/about'

const TechnologyIcon = ({ icon, ...props }: TechnologyIconProps) => {
  return (
    <Button
      h="64px"
      w="64px"
      bg="blackAlpha.600"
      border="1px solid #E2E8F0"
      _hover={{ bg: '#E2E8F0', border: '2px solid #000000' }}
      {...props}
    >
      <Icon as={icon} fontSize="64px" _hover={{ color: 'black' }} />
    </Button>
  )
}

export default TechnologyIcon
