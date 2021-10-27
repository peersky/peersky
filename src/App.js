import React from 'react';
import {
  ChakraProvider,
  extendTheme,
  createBreakpoints,
} from '@chakra-ui/react';
import theme from './theme';
import '@fontsource/zen-dots/400.css';
import LandingPage from './LandingPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <LandingPage />
    </ChakraProvider>
  );
}

export default App;
