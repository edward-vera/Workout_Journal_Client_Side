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
import { 
  Link,
  useParams } from 'react-router-dom'
import { Loader } from './Loader'

export function CreateCalories({token, user, calories, setCalories }, props) {
    const {id} = useParams();
    const [meal, setMeal] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [calorie, setCalorie] = useState("");
    const [fat, setFat] = useState("");
    const [protein, setProtein] = useState("");

    const onSubmit = (e) => {
      e.preventDefault();

      const body = {calorieId : id,
        meal,
        ingredients,
        calorie,
        fat,
        protein}

      axios.post("https://workout-journal-server.vercel.app/calorietracker", 
        body,
      {
        headers: {
          Authorization : `Bearer ${token}`
        }
      }
      ).then((response) => {

        console.log(response)
      })

      // if (!calories.length) return <Loader />;
      console.log(calories)

        setCalories([...calories, body])
        setMeal("");
        setIngredients("");
        setCalorie("");
        setFat("");
        setProtein("");
      }


  return (
      <Box id="exercises" sx={{ mt: { lg: '30px' } }}>
        <Stack className='workouts-container' 
        direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} 
        flexWrap="wrap" justifyContent="center">
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
  )
}
