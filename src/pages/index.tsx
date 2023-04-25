import { Introduction, Header, About, Portfolio, Technologies } from '@/src/components'
import { Flex } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex minHeight="100vh" height="100%" width="100%" direction="column">
      <Header />
      <Introduction />
      <About />
      <Technologies />
      <Portfolio />
    </Flex>
  )
}
