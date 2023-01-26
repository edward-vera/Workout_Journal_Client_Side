import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Button, ThemeProvider, Toolbar, Typography, createTheme } from '@mui/material'
import cookie from 'cookie';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3BB371',
    },
    secondary: {
      main: '#E0E0E0',
    },
  },
});

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies['loggedIn'] ? true : false;
};


export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <AppBar position='relative'>
        <Toolbar>
          <Typography variant="h5" style={{ flexGrow: "1" }}>
                      My Fitness Journal
          </Typography>
          <ul className="nav-list">
                    <li className="nav-list-item">
                    <Button style={{ color: 'white' }} component={Link} to="/home">Home</Button>
                    </li>
                    {/* {checkAuth() ? ( */}
                        <li className='nav-list-item'>
                        <Button style={{ color: 'white' }} component={Link} to='/createworkout'>
                          Create Workout
                        </Button>
                      </li> 
                                  {/* // ) : null} */}
                    <li
                    className='nav-list-item'
                    onClick={() => {
                        document.cookie = cookie.serialize('loggedIn', null, {
                        maxAge: 0,
                    });
                        navigate('/');
                     }}
                     >
                        <Button style={{ color: 'white' }}>
                            {checkAuth() ? 'Logout' : 'Login'}
                         </Button>
                    </li>
                </ul>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navigation;