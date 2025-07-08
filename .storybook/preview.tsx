import * as React from 'react';
import type { Preview } from '@storybook/react';
import AppTheme from '../src/shared-theme/AppTheme';
import ColorModeSelect from '../src/shared-theme/ColorModeSelect';
import Box from '@mui/material/Box';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { useColorScheme } from '@mui/material/styles';

const withThemeProvider = (Story) => {
  return (
    <CssVarsProvider defaultMode="light" disableTransitionOnChange>
      <AppTheme>
        <Box sx={{ position: 'fixed', top: 16, right: 16, zIndex: 9999 }}>
          <ColorModeSelect size="small" />
        </Box>
        <Box
          sx={{
            minHeight: '100vh',
            backgroundColor: 'background.default',
            color: 'text.primary',
          }}
        >
          <Story />
        </Box>
      </AppTheme>
    </CssVarsProvider>
  );
};

const preview: Preview = {
  decorators: [withThemeProvider],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview; 