import { Flex } from '@chakra-ui/react'
import { useState } from 'react'
import Link from 'next/link'

import { TechnologyIcon, TechnologyText } from '@/src/components'
import { TECHNOLOGIES_ITEMS } from '@/src/constants/about'

const Technologies = () => {
  const [technologySelectedText, setTechnologySelectedText] = useState('')

  return (
    <Flex
      width='100%'
      background='blackAlpha.900'
      alignItems='center'
      p={['16px', '48px', '64px', '84px']}
      justifyContent='center'
      direction='column'
    >
      <Flex
        flexWrap='wrap'
        maxW='820px'
        width='100%'
        justifyContent={['center', 'center', 'center', 'space-between']}
      >
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
          padding: '6px 12px'
        }}
        target='_blank'
        href='/assets/files/Guilherme_Wollmann.pdf'
        download
      >
        Download CV
      </Link>
    </Flex>
  )
}

export default Technologies
