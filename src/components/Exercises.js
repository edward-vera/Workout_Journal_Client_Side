import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {
    Container
} from '@mui/material'

export function Exercises(props) {
    const [exercises, setExercises] = useState("");
    // console.log(props);

    useEffect(() => {
        axios.get("https://workout-journal-server.vercel.app/exercises", {
        // axios.get("http://localhost:5000/exercises", {
            // headers: {               
            //     Authorization : `Bearer ${props.token}`
            // }
        }).then((response) => {

            console.log(response);
            
        setExercises(response.data.rows)})

      }, [props.token]);

      useEffect(() => {
      }, [exercises])

  return (
    <div>
       {!exercises ? (
                <p>Loading exercises...</p>
            ) : (
            exercises.map(({id, data, exercise}) => (
                <Container>
                    <p>{exercise}</p>
                </Container>

            ))
        )}
    </div>
  )
}
