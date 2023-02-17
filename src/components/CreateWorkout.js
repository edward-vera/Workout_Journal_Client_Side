import React, { useState } from 'react';
import axios from 'axios';
import { 
    Box,
    FilledInput,
    Stack,
} from '@mui/material'
import { useParams } from 'react-router-dom';

export function CreateWorkout({token, user, workouts, setWorkouts}, props) {
    console.log(props)
    const {id} = useParams();
    const [workout, setWorkout] = useState("");
    const [workoutId, setWorkoutId] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

    const body = {
        workoutId,
        workout}
    
    axios.post("https://workout-journal-server.vercel.app/workouts",
        body,
    {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    ).then((response) => {

        console.log(response, "RESPONSE")

    })

    setWorkouts([...workouts, body], {setWorkouts})
    setWorkoutId("");
    setWorkout("");
    }

  return (
    <Box>
        <Stack className='workouts-container' direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
          <Stack className="calories-card">

              <FilledInput type="text" className='input' 
              onChange={(e) => setWorkout(e.target.value)} 
              value={workout}
              placeholder="Workout Name">
              </FilledInput>

              <input onClick={onSubmit} className='submit' type='submit' value="Submit" />
          </Stack>
        </Stack>
    </Box>
  )
}