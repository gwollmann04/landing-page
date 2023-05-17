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
        width: '100%',
        'input:-webkit-autofill': {
          '-webkit-box-shadow': '0 0 0 30px #242424 inset !important',
        },
        'input:-webkit-autofill:hover': {
          '-webkit-box-shadow': '0 0 0 30px #242424 inset !important',
        },
        'input:-webkit-autofill:focus': {
          '-webkit-box-shadow': '0 0 0 30px #242424 inset !important',
        },
        'input:-webkit-autofill:active': {
          '-webkit-box-shadow': '0 0 0 30px #242424 inset !important',
        },
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
