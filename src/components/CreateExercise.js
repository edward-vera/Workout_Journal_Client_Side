import axios from 'axios';
import React, { useState } from 'react'
import { 
    Box,
    // Button,
    FilledInput,
    Stack,
} from '@mui/material'
import { useParams } from 'react-router-dom';
import { Loader } from './Loader'

export function CreateExercise({token, user, exercises, setExercises}) {
    const {id} = useParams();
    const[exerciseName, setExerciseName] = useState("");
    const[muscleTarget, setMuscleTarget] = useState("");
    const[equipmentType, setEquipmentType] = useState("");
    const[sets, setSets] = useState("");
    const[reps, setReps] = useState("");
    const[weight, setWeight] = useState("");
    const[duration, setDuration] = useState("");
    const[notes, setNotes] = useState("");

    const onSubmit = (e) => {
      e.preventDefault();

      const body = {workoutId : id,
      exerciseName,
      muscleTarget,
      equipmentType,
      sets,
      reps,
      weight,
      duration,
      notes}

      axios.post(`https://workout-journal-server.vercel.app/workoutsId/`,
        body,
      {
          headers:{
              Authorization: `Bearer ${token}`
          }
      }
      ).then((response) => {
        console.log(response)
        
      })

      setExercises([...exercises, body])
      setExerciseName("");
      setMuscleTarget("");
      setEquipmentType("");
      setSets("");
      setReps("");
      setWeight("");
      setDuration("");
      setNotes("");
  }

  return (
      <Box id="exercises" sx={{ mt: { lg: '30px' } }}>
        <Stack className='workouts-container' direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
          <Stack className="calories-card">

              <FilledInput type="text" className='input' 
              onChange={(e) => setExerciseName(e.target.value)} 
              value={exerciseName} 
              placeholder="Exercise Name">
              </FilledInput>
              
              <FilledInput type="text" className='input' 
              onChange={(e) => setMuscleTarget(e.target.value)} 
              value={muscleTarget} 
              placeholder="Muscle Target">
              </FilledInput>
              
              <FilledInput type="text" className='input' 
              onChange={(e) => setEquipmentType(e.target.value)} 
              value={equipmentType} 
              placeholder="Equipment Used">
              </FilledInput>

              <FilledInput type="text" className='input' 
              onChange={(e) => setSets(e.target.value)} 
              value={sets} 
              placeholder="Sets">
              </FilledInput>
              
              <FilledInput type="text" className='input' 
              onChange={(e) => setReps(e.target.value)} 
              value={reps} 
              placeholder="Reps">
              </FilledInput>

              <FilledInput type="text" className='input' 
              onChange={(e) => setWeight(e.target.value)} 
              value={weight} 
              placeholder="Total Weight">
              </FilledInput>

              <FilledInput type="text" className='input' 
              onChange={(e) => setDuration(e.target.value)} 
              value={duration} 
              placeholder="If timed note duration">
              </FilledInput>

              <FilledInput type="text" className='input' 
              onChange={(e) => setNotes(e.target.value)} 
              value={notes} 
              placeholder="Notes">
              </FilledInput>

              <input onClick={onSubmit} className='submit' type='submit' value="Submit" />
          </Stack>
        </Stack>
      </Box>
  )
}