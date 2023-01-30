import React, { useState } from 'react'
import axios from 'axios'
import '../css/App.css'
import {
  Box,
  // Button,
  // Container,
  // Card,
  FilledInput,
  Stack,
  // Typography
} from '@mui/material'
// import { Link } from 'react-router-dom'
import { Loader } from './Loader'

export function CreateCalories({token, user, calories, setCalories }, props) {
    const [meal, setMeal] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [calorie, setCalorie] = useState("");
    const [fat, setFat] = useState("");
    const [protein, setProtein] = useState("");

    const onSubmit=(e) => {
      e.preventDefault();

      axios.post("https://workout-journal-server.vercel.app/calorietracker", {
        meal,
        ingredients,
        calorie,
        fat,
        protein
      },
      // {
      //   header: {
      //     Authorization : `Bearer ${token}`
      //   }
      // }
      ).then((response) => {

        console.log(response)
      })

      if (!calories.length) return <Loader />;


        setMeal("");
        setIngredients("");
        setCalorie("");
        setFat("");
        setProtein("");
        setCalories(...calories.data, {setCalories})
        
      }


  return (

    <Box>
      <Box id="exercises" sx={{ mt: { lg: '30px' } }}>
        <Stack className='workouts-container' direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
          <Stack className="calories-card">
              <FilledInput type="text" className='input' 
              onChange={(e) => setMeal(e.target.value)} 
              value={meal}
              placeholder="Meal">
              </FilledInput>
              
              <FilledInput type="text" className='input' 
              onChange={(e) => setIngredients(e.target.value)} 
              value={ingredients} 
              placeholder="Ingredients">
              </FilledInput>
              
              <FilledInput type="text" className='input' 
              onChange={(e) => setCalorie(e.target.value)} 
              value={calorie} 
              placeholder="Calorie Total">
              </FilledInput>
              
              <FilledInput type="text" className='input' 
              onChange={(e) => setFat(e.target.value)} 
              value={fat} 
              placeholder="Fat Total">
              </FilledInput>
              
              
              <FilledInput type="text" className='input' 
              onChange={(e) => setProtein(e.target.value)} 
              value={protein} 
              placeholder="Protein Total">
              </FilledInput>

              <input onClick={onSubmit} className='submit' type='submit' value="Submit" />
          </Stack>
        </Stack>
      </Box>
        {/* <Stack direction="row" justifyContent="center">
                <Button sx={{ 
                    ml: '22px', 
                    mr: '22px', 
                    color: '#fff', 
                    background: '#00425A', 
                    fontSize: '14px', 
                    borderRadius: '20px', 
                    textTransform: 'capitalize' }}
                    // onClick={() => }
                    >
                    <Typography>Submit</Typography>
                </Button>
                <Button sx={{ 
                    ml: '22px', 
                    mr: '22px', 
                    color: '#fff', 
                    background: '#00425A', 
                    fontSize: '14px', 
                    borderRadius: '20px', 
                    textTransform: 'capitalize' }}
                    // onClick={() => }
                    >
                    <Typography>Edit</Typography>
                </Button>
                <Button sx={{ 
                    ml: '22px', 
                    mr: '22px', 
                    color: '#fff', 
                    background: '#00425A', 
                    fontSize: '14px', 
                    borderRadius: '20px', 
                    textTransform: 'capitalize' }}
                    // onClick={() => }
                    >
                    <Typography>Delete</Typography>
                </Button>
        </Stack> */}
    </Box>  
  )
}
