import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../css/App.css'
import {
    Box,
    Button,
    // Container,
    // Card,
    Stack,
    Typography
} from '@mui/material'
import { 
    Link,
} from 'react-router-dom'

import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { WorkoutCard } from './WorkoutCard';
import { Loader } from '../components/Loader';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: red[500],
  '&:hover': {
    backgroundColor: red[700],
  },
}));



export function Workouts(props) {
    // console.log(props.workouts)
    const [workouts, setWorkouts] = useState("");
    
    useEffect(() => {
      axios.get("https://workout-journal-server.vercel.app/workouts", {
        headers: {               
          Authorization : `Bearer ${props.token}`
        }
      }).then((response) => {

          console.log(response);
          

        // FOR ACTUAL SITE
        props.setUser(response.data.user)
        // FOR STYLING
        // props.setUser(response.data)
          
      setWorkouts(response.data.rows)})
    }, [props.token]);

    useEffect(() => {
    }, [workouts])
    
    if (!workouts) return <Loader />;

  
    return (
      <Box id="exercises" sx={{ mt: { lg: '30px' } }}>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        <h1>Your Workouts!</h1 >
      </Typography>
        <Stack className='workouts-container' direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
            {!workouts ? (
                <Stack><Typography>Loading Workouts...</Typography></Stack>
            ) : (
            workouts.map(({id, workout}) => (
              <Link className="calories-card">
               <Button component={Link} to="/workoutsid/" sx={{ mt:'15px', ml: '21px', mr: '22px', color: '#fff', background: '#00425A', fontSize: '24px', borderRadius: '20px', textTransform: 'capitalize' }}>
               {workout}
               </Button>
               <WorkoutCard/>
              <Stack direction="row" justifyContent="center">
                <Button sx={{color: '#fff', background: '#1F8A70', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                Delete
                </Button>
                <Button sx={{ ml: '15px', color: '#fff', background: '#1F8A70', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                Edit
                </Button>
              </Stack>
            </Link>
            ))
        )}
        <ColorButton component={Link} variant='contained' type='submit' to="/createworkout">Create A New Workout!</ColorButton>
        </Stack>
    </Box>
    )
}