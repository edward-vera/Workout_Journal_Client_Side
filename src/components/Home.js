import React from 'react'
import { 
    Button,
  } from '@mui/material'
  import {
    Link, 
    // useNavigate
  } from 'react-router-dom'

export function Home() {
    return (
      <div>
      <Button component={Link} variant='contained' type='submit' to="/workouts"> Your Workouts!</Button>
      <Button component={Link} variant='contained' type='submit' to="/createworkout"> Create New Workout!</Button>
      <Button component={Link} variant='contained' type='submit' to="/calories"> Your Calorie Tracker!</Button>
      <Button component={Link} variant='contained' type='submit' to="/"> Already Have An Account? Sign In!</Button>
      </div>
  )
}