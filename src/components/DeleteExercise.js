import React from 'react'
import axios from 'axios'
import {
    Button,
} from '@mui/material'

export function DeleteExercise({id, token}) {
    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(token, 'this is a token')
        axios.delete(`https://workout-journal-server.vercel.app/workoutsId/${id}`,
        {
            headers: {
              Authorization : `Bearer ${token}`
            }
        }
        ).then((response => {
            console.log(response, "this has been deleted")
        }))
    }


  return (
   <>
   <Button onClick={onSubmit}>Delete</Button>
   </>
  )
}