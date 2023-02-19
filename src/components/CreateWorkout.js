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
    const [workout, setWorkout] = useState({
        workoutId : "",
        workout : ""
    });

    const onSubmit = (e) => {
        e.preventDefault();

        console.log('i am a log')
        console.log(token, 'TOKENNNNNN')
        axios.post("https://workout-journal-server.vercel.app/workouts",
            workout,
        {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
    ).then((response) => {

        console.log(response, "RESPONSE")
        const copyBody = {...workout}
        copyBody.workoutId = response.data.insertId
        setWorkouts([...workouts, copyBody])
    })

    setWorkout({
        workoutId : "",
        workout : ""
    });
    }

  return (
    <Box>
        <Stack className='workouts-container' direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
          <Stack className="calories-card">

              <FilledInput type="text" className='input' 
              onChange={(e) => setWorkout({
                ...workout, 
                workout : e.target.value
              })} 
              value={workout.workout}
              placeholder="Workout Name">
              </FilledInput>

              <input onClick={onSubmit} className='submit' type='submit' value="Submit" />
          </Stack>
        </Stack>
    </Box>
  )
}