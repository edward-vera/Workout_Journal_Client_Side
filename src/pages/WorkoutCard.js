import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../css/App.css'
import { 
    Box,
    Button,
    Stack
} from '@mui/material'
import { Loader } from '../components/Loader';

export function WorkoutCard(props) {
    const [exercises, setExercises] = useState([]);
    // console.log(props);

    useEffect(() => {
        axios.get(`https://workout-journal-server.vercel.app/workoutsId/workout/${props.workoutId}`, 
             {
             // axios.get("http://localhost:5000/exercises", {
                 headers: 
                 {               
                     Authorization : `Bearer ${props.token}`
                 }
             }
        ).then((response) => {

            // console.log(response);

            // console.log(response, 'responseeee')
        setExercises(response.data.rows)})

      }, [props.token]);

      useEffect(() => {
      }, [exercises])

    if(!exercises) {
        return <Loader />
    }

  return (
    <Box className='exercise-container'>
        {exercises.map((exercise, index) =>{
            // console.log(exercise);
            return (
            <Stack key={index}>
                <Stack>
                    <Button sx={{ mt:'15px', ml: '21px', mr: '22px', color: '#fff', background: '#00425A', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                        Exercise : {exercise.exerciseName.charAt(0).toUpperCase() + exercise.exerciseName.slice(1)}</Button>
                </Stack>
            </Stack>
            )
        })}
    </Box>
  )
}
