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

const CronologyItem = ({ index, item }: CronologyItemPropTypes) => {
  return index % 2 === 0 ? (
    <Fragment key={item.value}>
      <GridItem>
        <Accordion px="16px" allowMultiple>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <AccordionButton justifyContent="space-between">
                  <Text mr="4px" textColor="gray.200">
                    {item.label}
                  </Text>
                  {isExpanded ? (
                    <MinusIcon color="gray.200" fontSize="12px" />
                  ) : (
                    <AddIcon color="gray.200" fontSize="12px" />
                  )}
                </AccordionButton>
                <AccordionPanel
                  whiteSpace="pre-line"
                  textAlign="justify"
                  textColor="gray.200"
                  pb={4}
                >
                  {item.value}
                </AccordionPanel>
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
                  <Text mr="4px" textColor="gray.200">
                    {item.label}
                  </Text>
                  {isExpanded ? (
                    <MinusIcon color="gray.200" fontSize="12px" />
                  ) : (
                    <AddIcon color="gray.200" fontSize="12px" />
                  )}
                </AccordionButton>
                <AccordionPanel
                  textAlign="justify"
                  whiteSpace="pre-line"
                  textColor="gray.200"
                  pb={4}
                >
                  {item.value}
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </GridItem>
    </Fragment>
  )
}

export default CronologyItem
