import { extendTheme } from '@chakra-ui/react'

import { textStyles } from './components/textStyles'
import { buttonStyles } from './components/buttonStyles'

const theme = extendTheme({
  fonts: {
    body: `'Roboto', sans-serif`,
  },
  styles: {
    global: {
      body: {
        background: '#242424',
        color: '#E2E8F0',
        whiteSpace: 'pre-line',
        textAlign: 'justify',
        width:'100%'
      },
      svg: {
        fontSize: '12px',
        color: '#E2E8F0',
      },
    },
  },
  components: {
    Text: textStyles,
    Button: buttonStyles,
  },
})

export default theme
