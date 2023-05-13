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

import { CronologyItemPropTypes } from '@/src/@types/about'

// Refatorar o divider
const CronologyItem = ({ index, item }: CronologyItemPropTypes) => {
  return index % 2 === 0 ? (
    <Fragment key={item.value}>
      <GridItem>
        <Accordion px="16px" allowMultiple>
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
  ) : (
    <Fragment key={item.value}>
      <GridItem />
      <GridItem>
        <Divider
          w="2px"
          bg="gray.200"
          borderColor="gray.200"
          orientation="vertical"
        />
      </GridItem>
      <GridItem>
        <Accordion px="16px" allowMultiple>
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
      </GridItem>
    </Fragment>
  )
}

export default CronologyItem
