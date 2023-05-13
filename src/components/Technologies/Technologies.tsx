import { Flex } from '@chakra-ui/react'
import { useState } from 'react'
import Link from 'next/link'

import { TechnologyIcon, TechnologyText } from '@/src/components'
import { TECHNOLOGIES_ITEMS } from '@/src/constants/about'

//Colocar algo sobre react native?
const Technologies = () => {
  const [technologySelectedText, setTechnologySelectedText] = useState('')

  return (
    <Flex
      py="84px"
      width="100%"
      background="blackAlpha.900"
      alignItems="center"
      px="25%"
      direction="column"
    >
      <Flex width="100%" justifyContent="space-between">
        {TECHNOLOGIES_ITEMS.map((item) => (
          <TechnologyIcon
            key={item.value}
            icon={item.icon}
            onClick={() => setTechnologySelectedText(item.value)}
          />
        ))}
      </Flex>
      <TechnologyText technologySelectedText={technologySelectedText} />
      <Link
        style={{
          marginTop: '24px',
          border: '4px solid #292442',
          borderRadius: '20px',
          background: '#292442',
          padding: '6px 12px',
        }}
        target="_blank"
        href="/assets/files/Guilherme_Wollmann.pdf"
        download
      >
        Download CV
      </Link>
    </Flex>
  )
}

export default Technologies
