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
          '-webkit-text-fill-color': '#E2E8F0',
          '-webkit-box-shadow': '0 0 0px 1000px none inset',
          transition: 'background-color 5000s ease-in-out 0s',
        },
        'input:-webkit-autofill:hover': {
          '-webkit-text-fill-color': '#E2E8F0',
          '-webkit-box-shadow': '0 0 0px 1000px none inset',
          transition: 'background-color 5000s ease-in-out 0s',
        },
        'input:-webkit-autofill:focus': {
          '-webkit-text-fill-color': '#E2E8F0',
          '-webkit-box-shadow': '0 0 0px 1000px none inset',
          transition: 'background-color 5000s ease-in-out 0s',
        },
        'input:-webkit-autofill:active': {
          '-webkit-text-fill-color': '#E2E8F0',
          '-webkit-box-shadow': '0 0 0px 1000px none inset',
          transition: 'background-color 5000s ease-in-out 0s',
        }
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
