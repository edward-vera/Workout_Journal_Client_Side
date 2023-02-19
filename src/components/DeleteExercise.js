import React 
// { useState } 
from 'react'
import axios from 'axios'
import {
    Button,
} from '@mui/material'

export function DeleteExercise({id, token, exercises, setExercises}) {
    const onSubmit = (e) =>{
        e.preventDefault();

        console.log(token, 'this is a token')


        axios.delete(`https://workout-journal-server.vercel.app/workoutsId/${id}`,
        {
            headers: {
              Authorization : `Bearer ${token}`
            }
        }
        ).then((response) => {
            console.log(response, "this has been deleted")

            const copy = [...exercises];
            const foundIndex = copy.findIndex(item => {
                return item.id == id
            })

            copy.splice(foundIndex, 1)
            console.log(copy, "this is the copy")
            setExercises(copy);
            
        })
    }


  return (
   <>
   <Button onClick={onSubmit}>Delete</Button>
   </>
  )
}