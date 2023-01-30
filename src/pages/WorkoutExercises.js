import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../css/App.css'
import { 
    Box,
    Button,
    Stack,
    Typography
} from '@mui/material'
import {
    Link, 
    // useNavigate
} from 'react-router-dom'

export function WorkoutExercises(props) {
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
                <Stack>
                <Typography>Exercise : {exercise.exerciseName.charAt(0).toUpperCase() + exercise.exerciseName.slice(1)}</Typography>
                </Stack>
                <Typography>Muscle Target : {exercise.muscleTarget.charAt(0).toUpperCase() + exercise.muscleTarget.slice(1)}</Typography>
                <Typography>Equipment Used : {exercise.equipmentType.charAt(0).toUpperCase() + exercise.equipmentType.slice(1)}</Typography>
                <Typography>Sets : {exercise.sets} x Reps : {exercise.reps}</Typography>
                <Typography>Weight : {exercise.weight}</Typography>
                <Typography>Duration : {exercise.duration}</Typography>
                <Typography>Notes : {exercise.notes}</Typography>
            </Stack>
            </Stack>
            )
        })}
        <Button component={Link} variant='contained' type='submit' to="/workouts">Back To Workouts!</Button>
    </Box>
  )
}