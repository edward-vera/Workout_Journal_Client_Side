import React from 'react'
import axios from 'axios'
import {
    Button,
} from '@mui/material'
import { useParams } from 'react-router-dom'

export function DeleteExercise({workoutId}) {
    const {id} = useParams();
    const onSubmit = (e) =>{
        e.preventDefault();
    
        axios.delete(`https://workout-journal-server.vercel.app/workoutsId/`,
        id
        ).then((response => {
            console.log(response, "this")
        }))
    }


  return (
   <>
   <Button onClick={onSubmit}>Delete</Button>
   </>
  )
}