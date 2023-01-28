import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../css/App.css'
import {
    Button,
    Container,
    Card,
    Typography
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { 
    Link,
} from 'react-router-dom'
// import cookie from 'cookie';

// const checkAuth = () => {
//     const cookies = cookie.parse(document.cookie);
//     return cookies['loggedIn'] ? true : false;
//   };

export function Workouts(props) {
    // console.log(props.workouts)
    const [workouts, setWorkouts] = useState("");

    useEffect(() => {
        axios.get("https://workout-journal-server.vercel.app/workouts", {
        // axios.get("http://localhost:5000/workouts", {
          headers: {               
            Authorization : `Bearer ${props.token}`
          }
        }).then((response) => {

            console.log(response);

          props.setUser(response.data.user)
            
        setWorkouts(response.data.rows)})
      }, [props.token]);

      useEffect(() => {
      }, [workouts])
    
    return (
      <>
      <Typography>
      <h1>Your Workouts!</h1>
      </Typography>
        <div className='listings-container'>
            {!workouts.length ? (
                <p>Loading Workouts...</p>
            ) : (
            workouts.map(({id, exercise, workout}) => (
              <Container>
                            <Link to={`/workoutexercises/${exercise.workout_id}`}>
                            <Card>
                            <Typography className='workout-card'>
                                <h1>{workout.charAt(0).toUpperCase() + workout.slice(1)}</h1>
                            </Typography>
                            <DeleteIcon
                            onClick={() => props.removeListings()}
                            className='icon text-red'
                            color='warning'
                            sx={{
                            '&:hover': {
                            backgroundColor: 'transparent',
                            cursor: 'pointer',
                            },
                            }} 
                            />
                            </Card>
                            </Link>
            </Container>
            ))
        )}
        <Button component={Link} variant='contained' type='submit' to="/createworkout">Create A New Workout!</Button>
        </div>
    </>
    )
}