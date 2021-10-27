import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
const breakpointsCustom = createBreakpoints({
  base: '720px',
  md: '1337px',
  lg: '1440px',
  xl: '1920px',
  '2xl': '4400px',
});

const theme = extendTheme({
  breakpoints: breakpointsCustom,
  fonts: {
    heading: 'Zen Dots',
    body: 'Zen Dots',
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        color: 'gray.500',
      },
      _selection: { bgColor: 'gray.700', color: 'yellow' },
    },
  },
});

export default theme;
