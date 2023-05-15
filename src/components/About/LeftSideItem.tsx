import {
  GridItem,
  Text,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Fragment } from 'react'

import { CronologyItem } from '@/src/@types/about'

const LeftSideItem = ({ value, label }: CronologyItem) => {
  return (
    <Fragment key={value}>
      <GridItem>
        <Accordion px="16px" allowMultiple>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <AccordionButton justifyContent="space-between">
                  <Text mr="4px">{label}</Text>
                  {isExpanded ? <MinusIcon /> : <AddIcon />}
                </AccordionButton>
                <AccordionPanel pb={4}>{value}</AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </GridItem>
      <GridItem>
        <Divider
          w="2px"
          bg="gray.200"
          borderColor="gray.200"
          orientation="vertical"
        />
      </GridItem>
      <GridItem />
    </Fragment>
  )
}

export default LeftSideItem
