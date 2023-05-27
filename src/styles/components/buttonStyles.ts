export const buttonStyles = {
  variants: {
    primary: {
      padding: '6px 12px',
      background: '#292442',
      border: '4px solid #292442',
      borderRadius: '20px',
      _hover: {
        background: '#E2E8F0',
        color: '#292442'
      }
    },
    secondary: {
      mr: '36px',
      background:
        'linear-gradient(0deg, #6f5c7a, #6f5c7a) no-repeat right bottom / 0 2px',
      transition: 'background-size 350ms',
      pb: '2px',
      _hover: {
        color: 'none',
        backgroundSize: '100% 2px',
        backgroundPositionX: 'left'
      },
      _active: { color: 'none' },
      color: '#6f5c7a'
    },
    portfolio: {
      padding: '6px 12px',
      background: '#524884',
      border: '4px solid #524884',
      borderRadius: '12px',
      _hover: {
        background: '#E2E8F0',
        color: '#524884'
      }
    },
    link: {
      px: '0px',
      color: '#E2E8F0',
      pb: '5px',
      fontWeight: 'normal',
      fontSize: '24px',
      background: 'none',
      textDecoration: 'underline',
      _hover: { background: 'none' }
    }
  }
}
