import { Card, Image, Text, Flex } from '@chakra-ui/react'

import { PORTFOLIO_TAGS } from '@/src/constants/portfolio'

const tag = ['React', 'JavaScript', 'FullStack', 'React Native']
const PortfolioCard = () => {
  return (
    <Flex direction="column" w="300px" p="24px">
      <Card borderRadius="36px" w="100%" h="250px" overflow="hidden" mb="6px">
        <Image
          w="100%"
          h="100%"
          _hover={{ transform: 'scale(1.25)' }}
          transition="transform 0.2s"
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
        />

        <Text
          position="absolute"
          bottom="0"
          left="0"
          w="100%"
          background="hsl(0 0% 100% / 0.5)"
          backdropFilter="blur(32px)"
          p="12px 24px"
          color="blackAlpha.900"
        >
          Nome do projeto
        </Text>
      </Card>
      <Flex w="100%" flexWrap="wrap">
        {tag.map((item) => (
          <Text
            w="fit-content"
            background={PORTFOLIO_TAGS[item as keyof typeof PORTFOLIO_TAGS]}
            p="6px 12px"
            borderRadius="20px"
            key={item}
            m="6px"
          >
            {item}
          </Text>
        ))}
      </Flex>
    </Flex>
  )
}

export default PortfolioCard
