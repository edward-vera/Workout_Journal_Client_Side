import { Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Workout = (props) => {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        axios.get("https://workout-journal-server.vercel.app/workouts", {
        // axios.get("http://localhost:5000/workouts", {
          headers: {               
            Authorization : `Bearer ${props.token}`
          }
        }).then((response) => {

          props.setUser(response.data.user)
            
        setWorkouts(response.data.rows)})
      }, [props.token]);

      useEffect(() => {
        // console.log(workouts);
      }, [workouts])

  return (
    <Box className='workout-container'>
        <Stack className='list'>
            {!workouts.length ? (
                <Typography>Loading Workouts...</Typography>
            ) : (
            workouts.map(({id, workout, user_id}) => (
                <li className='item' key={id}>{workout}</li>
            ))
        )}    
        </Stack>     
    </Box>
  )
}