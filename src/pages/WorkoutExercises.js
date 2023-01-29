import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../css/App.css'
import { 
    Button,
} from '@mui/material'
import {
    Link, 
    // useNavigate
} from 'react-router-dom'

export function WorkoutExercises(props) {
    const [exercises, setExercises] = useState([]);
    // console.log(props);

    useEffect(() => {
        axios.get("https://workout-journal-server.vercel.app/exercises", 
             {
             // axios.get("http://localhost:5000/exercises", {
                 headers: 
                 {               
                     Authorization : `Bearer ${props.token}`
                 }
             }
        ).then((response) => {

            // console.log(response);

            
        setExercises(response.data)})

      }, [props.token]);

      useEffect(() => {
      }, [exercises])

    if(!exercises) {
        return null
    }

  return (
    <div className='exercise-container'>
        {exercises.map((exercise) =>{
            // console.log(exercise);
            return (
            <div className='list'>
                <div>
                <h2>Exercise : {exercise.exerciseName.charAt(0).toUpperCase() + exercise.exerciseName.slice(1)}</h2>
                </div>
                <p>Muscle Target : {exercise.muscleTarget.charAt(0).toUpperCase() + exercise.muscleTarget.slice(1)}</p>
                <p>Equipment Used : {exercise.equipmentType.charAt(0).toUpperCase() + exercise.equipmentType.slice(1)}</p>
                <p>Sets : {exercise.sets} x Reps : {exercise.reps}</p>
                <p>Weight : {exercise.weight}</p>
                <p>Duration : {exercise.duration}</p>
                <p>Notes : {exercise.notes}</p>
            </div>
            )
        })}
        <Button component={Link} variant='contained' type='submit' to="/workouts">Back To Workouts!</Button>
    </div>
  )
}
