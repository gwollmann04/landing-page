import { Flex, Grid, Text } from '@chakra-ui/react'

import { CRONOLOGY_ITEMS } from '@/src/constants/about'
import { CronologyItem } from '@/src/components'

// Corrigir as explicações de cada item da cronologia
const About = () => {
  return (
    <Flex
      width="100%"
      background="#242424"
      alignItems="center"
      direction="column"
      id="about"
      p="84px 20%"
    >
      <Text
        py="12px"
        background="blackAlpha.300"
        textAlign="center"
        textColor="gray.200"
        fontSize="36px"
        w="100%"
        borderRadius="24px 24px 0 0"
      >
        About
      </Text>
      <Grid
        w="100%"
        borderRadius="0 0 24px 24px"
        background="blackAlpha.600"
        py="12px"
        templateColumns="1fr 5px 1fr"
      >
        {CRONOLOGY_ITEMS.map((item, index) => (
          <CronologyItem key={item.value} item={item} index={index} />
        ))}
      </Grid>
    </Flex>
  )
}

export default About
