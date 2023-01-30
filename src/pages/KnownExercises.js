import React, { useState } from 'react'
import { Box } from '@mui/material'
// import { HeroBanner } from '../components/HeroBanner'
import { SearchExercises } from '../components/SearchExercises'
import { Exercises } from '../components/Exercises'


export function KnownExercises() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all')

    return (
      <form className='home'>
        
          <Box>
            <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
          </Box>

        


      </form>
  )
}