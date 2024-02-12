import Home from '../components/Home';
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { black, lime } from '@mui/material/colors';

// create the theme at the top of all 
const theme = createTheme ({
    palette: {
      primary: {
        main: '#000',
      },
      secondary: {
        main: '#fff',
      },
    },
    
  typography: {
    myVariant: {
      fontSize: '40px',
      color: lime[100],
    }
  }
});

function Index() {
  return ( <ThemeProvider theme={theme}>
    <Home />
    </ThemeProvider>)
}

export default Index;
