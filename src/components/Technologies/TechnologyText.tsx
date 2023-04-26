import { Flex, Text } from '@chakra-ui/react'

type TechnologyTextProps = {
  technologySelectedText: string
}

const TechnologyText = ({ technologySelectedText }: TechnologyTextProps) => {
  return (
    <Flex
      p="24px 12px"
      w="100%"
      border="4px solid #292442"
      borderRadius="12px"
      mt="48px"
      minH="288px"
      {...(!technologySelectedText && {
        alignItems: 'center',
        justifyContent: 'center',
      })}
    >
      <Text color="#E2E8F0" whiteSpace="pre-line">
        {technologySelectedText ? technologySelectedText : 'Pick one'}
      </Text>
    </Flex>
  )
}

export default TechnologyText
