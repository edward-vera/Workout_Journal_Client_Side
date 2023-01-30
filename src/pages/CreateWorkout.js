import axios from 'axios';
import React, { useState } from 'react'
import WorkoutDropdown from '../components/WorkoutDropdowns'
import { 
    Button,
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

export function CreateWorkout({token, user, workouts, setworkouts}) {
    const[workout, setWorkout] = useState("");

  return (
    <form className='form' onSubmit={(e) => {
        e.preventDefault();

        axios.post("https://workout-journal-server.vercel.app/workouts",{
            workout,
            user_id: user.id
        }, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })

        setWorkout("");
        setWorkout([...workout, {workout, user_id: user.id}])
    }}>
        
        <WorkoutDropdown />
        <ColorButton component={Link} variant='contained' type='submit'>Add New Exercise</ColorButton>
        <ColorButton component={Link} variant='contained' type='submit' to="/workouts">Create Workout!</ColorButton>
    </form>
  )
}