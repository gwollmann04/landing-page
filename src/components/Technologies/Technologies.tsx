import { Flex } from '@chakra-ui/react'
import { FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiTypescript, SiCss3, SiHtml5 } from 'react-icons/si'
import { TbBrandCSharp, TbSql} from 'react-icons/tb'

import { TechnologyIcon } from '@/src/components'

//Colocar icone de pixelart
const Technologies = () => {
  return (
    <Flex
      py="64px"
      width="100%"
      background="blackAlpha.900"
      alignItems="center"
      justifyContent="space-between"
      px='25%'
      flexWrap='wrap'
    >
      <TechnologyIcon icon={FaReact} />
      <TechnologyIcon icon={IoLogoJavascript} />
      <TechnologyIcon icon={SiTypescript} />
      <TechnologyIcon icon={SiCss3} />
      <TechnologyIcon icon={SiHtml5} />
      <TechnologyIcon icon={TbBrandCSharp} />
      <TechnologyIcon icon={TbSql} />
    </Flex>
  )
}

export default Technologies
