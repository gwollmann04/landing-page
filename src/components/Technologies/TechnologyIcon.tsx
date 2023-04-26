import { Button, Icon } from '@chakra-ui/react'

const TechnologyIcon = ({ icon, ...props }: any) => {
  return (
    <Button
      h="64px"
      w="64px"
      bg="blackAlpha.600"
      border="1px solid #E2E8F0"
      _hover={{ bg: '#E2E8F0', border: '2px solid #000000' }}
      {...props}
    >
      <Icon
        as={icon}
        fontSize="64px"
        color="#E2E8F0"
        _hover={{ color: 'black' }}
      />
    </Button>
  )
}

export default TechnologyIcon
