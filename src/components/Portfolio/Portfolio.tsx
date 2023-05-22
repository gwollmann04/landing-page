import { Flex, Text } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

import { PortfolioCard } from '@/src/components'

// Refatorar o const e talvez o hook novo
// Começar sempre no 1º elemento o carousel
const teste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const Portfolio = () => {
  const [totalOnPage, setTotalOnPage] = useState(0)

  const chevronWidth = 40
  const cardWidth = 300
  const cardBoxRef = useRef<any>(null)
  const totalPadding = 56

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
        p="24px"
        borderRadius="0 0 24px 24px"
        ref={cardBoxRef}
      >
        <Swiper
          modules={[Pagination, Navigation]}
          slidesPerView={totalOnPage}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {teste.map((item) => {
            return (
              <SwiperSlide key={item}>
                <PortfolioCard />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Flex>
    </Flex>
  )
}

export default Portfolio
