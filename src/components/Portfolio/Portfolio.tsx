import { Flex, Text, useBreakpointValue } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Virtual } from 'swiper'

import { PortfolioCard } from '@/src/components'
import { PORTFOLIO_PROJECTS } from '@/src/constants/portfolio'

const Portfolio = () => {
  const variant = useBreakpointValue({
    base: 1,
    md: 2,
    lg: 2,
    xl: 3
  })

  return (
    <Flex
      p={['32px 16px', '32px', '64px', '84px']}
      direction='column'
      id='portfolio'
      w='100%'
      alignSelf='center'
      maxW='1312px'
    >
      <Text
        py='12px'
        background='blackAlpha.900'
        textAlign='center'
        fontSize='36px'
        w='100%'
        borderRadius='24px 24px 0 0'
      >
        Portfolio
      </Text>
      <Flex
        width='100%'
        background='#171425'
        p={['12px', '12px', '12px', '24px']}
        borderRadius='0 0 24px 24px'
      >
        <Swiper
          modules={[Pagination, Navigation, Virtual]}
          slidesPerView={variant}
          navigation={variant === 3}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          virtual
        >
          {PORTFOLIO_PROJECTS.map((item, index) => {
            return (
              <SwiperSlide key={item.name} virtualIndex={index}>
                <PortfolioCard
                  name={item.name}
                  gitHubURL={item.gitHubURL}
                  tags={item.tags}
                  liveDemoURL={item.liveDemoURL}
                  imageURL={item.imageURL}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Flex>
    </Flex>
  )
}

export default Portfolio
