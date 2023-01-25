import * as React from 'react';
import {
  AppBar,
  Typography,
  createTheme,
  ThemeProvider,
  Box,
} from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3BB371',
    },
    secondary: {
      main: '#E0E0E0',
    },
    accent: {
      main: '#a0a0a9',
    },
  },
});

export default function LoginBar(props) {
  console.log(props);
  const activeUser = props.user.slice(-1)[0].username;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={theme}>
        <AppBar
          position='static'
          color='secondary'
          sx={{
            height: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant='caption'
            sx={{ marginLeft: '24px', marginTop: '4px' }}
            style={{ color: '#a0a0a9' }}
          >
            Logged In as {activeUser}
          </Typography>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}