import { Card, Image, Text, Flex, Button, Link, Icon } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import { PORTFOLIO_TAGS } from '@/src/constants/portfolio'
import { PortfolioCardProps } from '@/src/@types/portfolio'

const PortfolioCard = ({
  name,
  gitHubURL,
  liveDemoURL,
  tags,
  imageURL
}: PortfolioCardProps) => {
  return (
    <Flex justifySelf="center" direction="column" maxW="350px" w='100%' p="28px">
      <Card borderRadius="36px" w="100%" h="250px" overflow="hidden" mb="6px">
        <Image
          w="100%"
          h="100%"
          _hover={{ transform: 'scale(1.25)' }}
          transition="transform 0.2s"
          src={imageURL}
          alt="Portfolio Card"
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
          {name}
        </Text>
      </Card>
      <Flex justifyContent="space-around">
        <Link isExternal href={liveDemoURL}>
          <Button mt="6px" mb="12px" variant="portfolio">
            Live Demo
            <Icon as={ExternalLinkIcon} ml="6px" boxSize="18px" />
          </Button>
        </Link>
        <Link isExternal href={gitHubURL}>
          <Button mt="6px" mb="12px" variant="portfolio">
            GitHub
            <Icon as={ExternalLinkIcon} ml="6px" boxSize="18px" />
          </Button>
        </Link>
      </Flex>
      <Flex w="100%" flexWrap="wrap">
        {tags.map((item: string) => (
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
