import { Flex, Grid, Text, useBreakpointValue } from '@chakra-ui/react'

import { CRONOLOGY_ITEMS } from '@/src/constants/about'
import { CronologyItem, CronologyItemMobile } from '@/src/components'

const About = () => {
  const isMobile = useBreakpointValue({
    base: true,
    md: true,
    lg: false
  })

  return (
    <Flex
      width='100%'
      alignItems='center'
      direction='column'
      id='about'
      maxW='1144px'
      alignSelf='center'
      p={['32px 16px', '48px', '84px', '84px']}
    >
      <Text
        py='12px'
        background='blackAlpha.300'
        textAlign='center'
        fontSize='36px'
        w='100%'
        borderRadius='24px 24px 0 0'
      >
        About
      </Text>
      <Grid
        w='100%'
        borderRadius='0 0 24px 24px'
        background='blackAlpha.600'
        py='12px'
        templateColumns={['1fr', '1fr', '1fr', '1fr 5px 1fr']}
      >
        {isMobile
          ? CRONOLOGY_ITEMS.map((item) => (
              <CronologyItemMobile key={item.value} item={item} />
            ))
          : CRONOLOGY_ITEMS.map((item, index) => (
              <CronologyItem key={item.value} item={item} index={index} />
            ))}
      </Grid>
    </Flex>
  )
}

export default About
