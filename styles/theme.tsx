import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
  },
  colors: {
    brand: {
      black: '#121212',
      midnight: '#000024',
      white: '#FFFFFF',
      offWhite: '#F5F5F7',
      gray: '#8492a6',
      purple: '#6868F6',
      lightGray: '#f2f2f2',
    },
  },
});

export default theme;
