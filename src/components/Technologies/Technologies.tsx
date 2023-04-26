import { Flex } from '@chakra-ui/react'
import { useState } from 'react'

import { TechnologyIcon, TechnologyText } from '@/src/components'
import { TECHNOLOGIES_ITEMS } from '@/src/constants/about'

//Colocar icone de pixelart
//Colocar um icone para infos extra, tipo Figma, Jira, Azure
const Technologies = () => {
  const [technologySelectedText, setTechnologySelectedText] = useState('')

  return (
    <Flex
      py="64px"
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
      <TechnologyText technologySelectedText={technologySelectedText}/>
    </Flex>
  )
}

export default Technologies
