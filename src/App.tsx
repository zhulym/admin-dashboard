/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import { ColorModeContext } from './theme';
import { useThemeMode } from 'hooks/useThemeMode';

const App: FC = () => {
  const [theme, colormode] = useThemeMode();

  // <CssBaseline/> reset styles to default
  return (
    <ColorModeContext.Provider value={colormode as any}>
      <ThemeProvider theme={theme as any}>
        <CssBaseline />
        <div className="app">
          <main className="content"></main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>

  );
};

export default App;
