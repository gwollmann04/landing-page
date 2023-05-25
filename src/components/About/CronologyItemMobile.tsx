import { CronologyItemPropTypes } from '@/src/@types/about'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Text,
} from '@chakra-ui/react'

const CronologyItemMobile = ({ item }: CronologyItemPropTypes) => {
  return (
    <Accordion key={item.label} p="16px" allowMultiple>
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <AccordionButton justifyContent="space-between">
              <Text mr="4px">{item.label}</Text>
              {isExpanded ? <MinusIcon /> : <AddIcon />}
            </AccordionButton>
            <AccordionPanel pb={4}>{item.value}</AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  )
}

export default CronologyItemMobile
