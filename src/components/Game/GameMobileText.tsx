import { Flex, Text, Icon } from '@chakra-ui/react'

import { GameMobileTextProps } from '@/src/@types/game'

const GameMobileText = ({ text, icon, iconColor }: GameMobileTextProps) => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Text>
        {text}
        <Icon ml="8px" mb="-4px" color={iconColor} as={icon} boxSize="22px" />
      </Text>
    </Flex>
  )
}

export default GameMobileText
