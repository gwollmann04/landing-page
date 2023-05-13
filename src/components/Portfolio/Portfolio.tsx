import { Flex, Button } from '@chakra-ui/react'
import { useState } from 'react'

import { IfComponent, PortfolioCard } from '@/src/components'

// Colocar o titulo de PortFolio
// Calcular o total na pagina pelo tamanho da pagina
const teste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 10
  const totalOnPage = 4
  const pageNumber = pageSize / totalOnPage

  return (
    <Flex
      width="100%"
      background="#171425"
      id="portfolio"
      mb="200px"
      direction="column"
      alignItems="center"
      p="24px"
    >
      <Flex flexWrap="wrap">
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
  )
}

export default Portfolio
