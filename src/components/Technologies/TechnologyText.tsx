import { Flex, Text } from '@chakra-ui/react'

import { TechnologyTextProps } from '@/src/@types/about'

const TechnologyText = ({ technologySelectedText }: TechnologyTextProps) => {
  return (
    <Flex
      p="24px 12px"
      w="100%"
      border="4px solid #292442"
      borderRadius="12px"
      mt="48px"
      minH="300px"
      {...(!technologySelectedText && {
        alignItems: 'center',
        justifyContent: 'center',
      })}
    >
      <Text>
        {technologySelectedText ? technologySelectedText : 'Pick one'}
      </Text>
    </Flex>
  )
}

export default TechnologyText
