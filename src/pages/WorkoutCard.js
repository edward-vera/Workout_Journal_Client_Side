import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../css/App.css'
import { 
    Box,
    // Button,
    Stack,
    Typography
} from '@mui/material'
// import {
//     Link, 
//     // useNavigate
// } from 'react-router-dom'

export function WorkoutCard(props) {
    const [exercises, setExercises] = useState([]);
    // console.log(props);

    useEffect(() => {
        axios.get("https://workout-journal-server.vercel.app/workoutsid", 
             {
             // axios.get("http://localhost:5000/exercises", {
                 headers: 
                 {               
                     Authorization : `Bearer ${props.token}`
                 }
             }
        ).then((response) => {

            // console.log(response);

            
        setExercises(response.data.rows)})

      }, [props.token]);

      useEffect(() => {
      }, [exercises])

    if(!exercises) {
        return null
    }

  return (
    <Box className='exercise-container'>
        {exercises.map((exercise, index) =>{
            // console.log(exercise);
            return (
            <Stack key={index}>
            <Stack className='list'>
                <Typography>Exercise : {exercise.exerciseName.charAt(0).toUpperCase() + exercise.exerciseName.slice(1)}</Typography>
            </Stack>
            </Stack>
            )
        })}
    </Box>
  )
}
