import Routes from './routes';

import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { theme } from 'themes';

import { useNavigation } from 'react-router-dom';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Routes />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
