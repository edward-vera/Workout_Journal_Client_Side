import React, { useState } from 'react'
import { Box } from '@mui/material'
import { HeroBanner } from '../components/HeroBanner'
import { SearchExercises } from '../components/SearchExercises'
import { Exercises } from '../components/Exercises'


export function Home() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all')

    return (
      <form className='home'>
        
          <Box>
            <HeroBanner />
            <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
          </Box>

        


      {/* <div className='home-buttons'>
      <Button component={Link} variant='contained' type='submit' to="/workouts"> Your Workouts!</Button>
      <Button component={Link} variant='contained' type='submit' to="/createworkout"> Create New Workout!</Button>
      <Button component={Link} variant='contained' type='submit' to="/calories"> Your Calorie Tracker!</Button>
      </div> */}
      </form>
  )
}