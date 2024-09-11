import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";
import React, { useContext } from 'react';

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

const App = ({ Component, pageProps }: AppProps) => {

  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export const useColorModeContext = () => {
  return useContext(ColorModeContext);
}

export default App;