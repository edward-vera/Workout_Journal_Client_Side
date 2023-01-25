import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../App.css'
import {
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

          props.setUser(response.data.user)
            
        setWorkouts(response.data.rows)})
      }, [props.token]);

      useEffect(() => {
      }, [workouts])
    
    return (
        <div className='listings-container'>
            <Typography>Your Workouts!</Typography>
            {!workouts.length ? (
                <p>Loading Workouts...</p>
            ) : (
            workouts.map(({id, workout}) => (
                <Container>
                            <Link to={`/workouts/${workouts.id}`}>
                            <Card>
                            <Typography className='workout-card'>
                                <h1>{workout}</h1>
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
        </div>
    )
}