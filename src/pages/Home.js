import React
//  { useEffect, useState } 
from 'react'
// import axios from 'axios';
import { 
  Button, 
  Box,
  Stack,
  Typography
} from '@mui/material'
import {
  Link,
} from 'react-router-dom'
import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: red[500],
  '&:hover': {
    backgroundColor: red[700],
  },
}));

export function Home(props) {
  console.log(props)
  const activeUser = props.user;

  

  return (

      <Box className='home-buttons' sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
        <Typography variant="h4" fontWeight="bold" 
        sx={{ fontSize: { lg: '44px', xs: '30px' } }} mt="-70px" mb="46px" textAlign="center">Welcome! {activeUser}</Typography>
        <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
          <ColorButton component={Link} variant='contained' type='submit' to="/workouts">
            <Typography>
                Your Workouts!
            </Typography>
          </ColorButton>
          {/* <ColorButton component={Link} variant='contained' type='submit' to="/createworkout">
            <Typography>
                Create New Workout!
            </Typography>
          </ColorButton> */}
          <ColorButton component={Link} variant='contained' type='submit' to="/calorietracker">
            <Typography>
                Your Calorie Tracker!
            </Typography>
          </ColorButton>
          <ColorButton component={Link} variant='contained' type='submit' to="/bmicalculator"> 
            <Typography> 
                BMI Calculator
            </Typography>  
          </ColorButton>
        </Stack>
      </Box>
  )
}