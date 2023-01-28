import axios from 'axios';
import React, { useState } from 'react'
import WorkoutDropdown from '../components/WorkoutDropdowns'
import { 
    Button,
} from '@mui/material'
import {
    Link,
} from 'react-router-dom'

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
        <Button component={Link} variant='contained' type='submit'>Add New Exercise</Button>
        <Button component={Link} variant='contained' type='submit' to="/workouts">Create Workout!</Button>
    </form>
  )
}