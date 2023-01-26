import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../App.css'
import { 
    Button,
} from '@mui/material'
import {
    Link, 
    // useNavigate
} from 'react-router-dom'

export function Exercises(props) {
    const [exercises, setExercises] = useState([]);
    // console.log(props);

    useEffect(() => {
        axios.get("https://workout-journal-server.vercel.app/exercises", {
        // axios.get("http://localhost:5000/exercises", {
            headers: 
            {               
                Authorization : `Bearer ${props.token}`
            }
        }).then((response) => {

            // console.log(response.data);
            
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
            console.log(exercise);
            return (
            <div className='list'>
                <div>
                <h2>Exercise : {exercise.exercise_name.charAt(0).toUpperCase() + exercise.exercise_name.slice(1)}</h2>
                </div>
                <p>Muscle Target : {exercise.muscle_target.charAt(0).toUpperCase() + exercise.muscle_target.slice(1)}</p>
                <p>Equipment Used : {exercise.equipment_type.charAt(0).toUpperCase() + exercise.equipment_type.slice(1)}</p>
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
