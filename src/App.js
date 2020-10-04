import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import AppContainer from './components/AppContainer';
import { GlobalStyles } from './global';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer />
    </ThemeProvider>
  );
};

export default App;
