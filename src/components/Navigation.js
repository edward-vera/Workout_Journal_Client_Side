import React from 'react'
import { Link, useNavigate } from "react-router-dom";
// import LoginBar from '../containers/LoginBar';
import { AppBar, ThemeProvider, Toolbar, Typography, createTheme } from '@mui/material'
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
                        <Typography>
                            <Link to="/workouts">Workouts</Link>
                        </Typography>
                    </li>
                    {checkAuth() ? (
                        <li className='nav-list-item'>
                        <Link to='/todos'>
                          <Typography style={{ color: 'white' }}>Add Workouts</Typography>
                        </Link>
                      </li> 
                                  ) : null}
                    <li
                    className='nav-list-item'
                    onClick={() => {
                        document.cookie = cookie.serialize('loggedIn', null, {
                        maxAge: 0,
                    });
                        navigate('/');
                     }}
                     >
                        <Typography style={{ color: 'white' }}>
                            {checkAuth() ? 'Logout' : 'Login'}
                         </Typography>
                    </li>
                </ul>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navigation;