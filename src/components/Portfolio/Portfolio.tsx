import { Flex, Button, Text } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'

import { IfComponent, PortfolioCard } from '@/src/components'

// Trocar por um carousel
// Refatorar o const e talvez o hook novo
const teste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalOnPage, setTotalOnPage] = useState(0)

  const cardWidth = 300
  const cardBoxRef = useRef<any>(null)
  const pageSize = 10
  const totalPadding = 48

  const pageNumber = pageSize / totalOnPage

  useEffect(() => {
    const updatePosition = () => {
      const currentTotalOnPage =
        (cardBoxRef?.current?.clientWidth - totalPadding) / cardWidth
      setTotalOnPage(Math.floor(currentTotalOnPage))
    }

    window.addEventListener('resize', updatePosition)

    updatePosition()
    return () => window.removeEventListener('resize', updatePosition)
  }, [])

  return (
    <Flex p="84px 20%" direction="column" id="portfolio">
      <Text
        py="12px"
        background="blackAlpha.900"
        textAlign="center"
        fontSize="36px"
        w="100%"
        borderRadius="24px 24px 0 0"
      >
        Portfolio
      </Text>
      <Flex
        width="100%"
        background="#171425"
        direction="column"
        alignItems="center"
        p="24px"
        borderRadius="0 0 24px 24px"
        ref={cardBoxRef}
      >
        <Flex justifyContent='center' flexWrap="wrap">
          {teste.slice(0, currentPage * totalOnPage).map((item) => (
            <PortfolioCard key={item} />
          ))}
        </Flex>
        <IfComponent
          condition={currentPage < pageNumber}
          component={
            <Button
              variant="primary"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Load more
            </Button>
          }
        />
      </Flex>
    </Flex>
  )
}

export default Portfolio
