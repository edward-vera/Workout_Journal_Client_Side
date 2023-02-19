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
import {CreateExercise} from '../components/CreateExercise'
import { DeleteExercise } from '../components/DeleteExercise'
import { useParams } from 'react-router-dom';

export function WorkoutExercises(props) {
    const {id} = useParams();
    const [exercises, setExercises] = useState([]);
    console.log(id, 'exercises')
    console.log(props.token, 'inside workoutexercises');

    useEffect(() => {
        axios.get(`https://workout-journal-server.vercel.app/workoutsId/workout/${id}`,
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

return(
    <Box id="exercises" sx={{ mt: { lg: '30px' } }}>
        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mt="30px" mb="49px" textAlign="center">
        <Typography component='span' variant='h2'>Your Workouts!</Typography>
        </Typography>
        <Stack className='workouts-container' direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {exercises.map((exercise, index) => {
            return(
                <Link key={index} className="calories-card">
                    {console.log(exercise)}
                        <Button sx={{ mt:'15px', ml: '21px', mr: '22px', color: '#fff', background: '#00425A', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                        Exercise : {exercise.exerciseName.charAt(0).toUpperCase() + exercise.exerciseName.slice(1)}
                        </Button>
                <Stack direction="row">
                        <Button sx={{ ml: '21px', color: '#fff', background: '#1F8A70', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                        Target : {exercise.muscleTarget.charAt(0).toUpperCase() + exercise.muscleTarget.slice(1)}
                        </Button>
                        <Button sx={{ ml: '21px', mr: '22px', color: '#fff', background: '#BFDB38', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                        Equipment Used : {exercise.equipmentType.charAt(0).toUpperCase() + exercise.equipmentType.slice(1)}
                        </Button>
                </Stack>
                <Stack direction="row" justifyContent="center">
                        <Button sx={{ ml: '22px', mr: '22px', color: '#fff', background: '#FC7300', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                        Sets : {exercise.sets}
                        </Button>
                        <Button sx={{ ml: '22px', mr: '22px', color: '#fff', background: '#FC7300', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                        Reps : {exercise.reps}
                        </Button>
                </Stack>
                        <Button sx={{ ml: '22px', mr: '22px', color: '#fff', background: '#FC7300', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                        Weight : {exercise.weight}
                        </Button>
                        <Button sx={{ ml: '22px', mr: '22px', color: '#fff', background: '#FC7300', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                        Duration : {exercise.duration}
                        </Button>
                        <Button sx={{ ml: '22px', mr: '22px', color: '#fff', background: '#FC7300', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                        Notes : {exercise.notes}
                        </Button>
                        <DeleteExercise id={ exercise.id } token={ props.token } exercises = { exercises } setExercises = { setExercises }/>
                </Link>  
            )
        })}
        <CreateExercise workoutid={ id } exercises={ exercises } setExercises = { setExercises }/>
        </Stack>
    </Box>
)}