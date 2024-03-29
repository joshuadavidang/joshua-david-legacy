import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  colors: {
    brand: {
      black: '#121212',
      lightsOut: '#000000',
      midnight: '#000024',
      white: '#FFFFFF',
      offWhite: '#F0FFFF',
      gray: '#8492A6',
      purple: '#6868F6',
      lightGray: '#2D3748',
    },
  },
  components: {
    Button: {
      sizes: {
        xl: {
          h: '55px',
          fontSize: 'lg',
          px: '45px',
        },
      },
    },
  },
});

export default theme;
