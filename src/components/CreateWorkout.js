import axios from 'axios';
import React, { useState } from 'react'
import WorkoutDropdown from './WorkoutDropdowns'

export function CreateWorkout({token, user, workouts, setworkouts}) {
    const[workout, setWorkout] = useState("");

  return (
    <form className='form' onSubmit={(e) => {
        e.preventDefault();

        axios.post("https://workout-journal-server.vercel.app/workouts",{
            workout,
            user_id: user.id
        }, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })

        setWorkout("");
        setWorkout([...workout, {workout, user_id: user.id}])
    }}>
        
        <WorkoutDropdown />
        <input className='submit' type="submit" to="/createworkout" value="Add a Workout!" />
    </form>
  )
}