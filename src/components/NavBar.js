import * as React from 'react';
import {
  AppBar,
  Box,
  Button,
  createTheme,
  Stack,
  ThemeProvider,
  Toolbar,
} from '@mui/material';

import { Link } from 'react-router-dom';



export function NavBar() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#000000',
      },
      secondary: {
        main: '#E0E0E0',
      },
      accent: {
        main: '#a0a0a9',
      },
    },
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={theme}>
      <AppBar color='primary' position="static">
        <Toolbar>
          <Button fontSize='36px' sx={ {p:"25px"} } color='inherit' component={Link} to="/home">
            Get Fit
          </Button>
          <Stack ml="300px" direction='row' gap="25px">
          <Button component={Link} to="/workouts" color="inherit">Workouts</Button>
          <Button component={Link} to="/knownexercises" color="inherit">Exercises</Button>
          <Button component={Link} to="/calorietracker" color="inherit">Calorie Tracker</Button>
          <Button component={Link} to="/bmicalculator" color="inherit">BMI Calc</Button>
          <Button component={Link} to="/signin" color="inherit">Signin</Button>
          </Stack>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </Box>
  );
}
