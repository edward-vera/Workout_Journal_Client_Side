import React, { useState } from 'react'
import {
  Box,
  Button,
  // Container,
  // Card,
  Stack,
  TextField,
  // Typography
} from '@mui/material'
// import { 
//   Link 
// } from 'react-router-dom'
import axios from 'axios';

export function CalorieCard({token, calories, allCalories, setAllCalories}) {
  
  const [edit, setEdit] = useState(false);
  const [caloriesState, setCaloriesState] = useState(calories);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setCaloriesState({
      ...caloriesState, 
      [name] : value
    });
  }

  const handleSubmit = (e) => {
    axios.put(`https://workout-journal-server.vercel.app/calorietracker/${calories.id}`,
      caloriesState,
      {
        headers: {
          Authorization : `Bearer ${token}`
        }
      }
    ).then((response) => {
      console.log(response)
      const copy = [...allCalories];
      const foundIndex = copy.findIndex((item) => {
        console.log(item)
        return item.id == calories.id;
      }) 
      copy[foundIndex] = caloriesState;
      setAllCalories(copy)
      setEdit(false)
    })
  }

  return (
  <>
  {edit ? ( 
    <Box className="calories-card">
      <TextField onChange={handleChange} label="Date" name='date' sx={{ mt:'15px', ml: '21px', mr: '22px', color: '#fff', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }} value={caloriesState.date}/>
        <Stack direction="row">
        <TextField onChange={handleChange} label="Meal" name='meal' sx={{ ml: '21px', color: '#fff', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }} value={caloriesState.meal} />
        <TextField onChange={handleChange} label="Ingredients" name='ingredients' sx={{ ml: '21px', mr: '22px', color: '#fff', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }} value={caloriesState.ingredients}/>
        </Stack>
        <TextField onChange={handleChange} label="Fat" name='fat' sx={{ ml: '22px', mr: '22px', color: '#fff', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }} value={caloriesState.fat}/>
        <TextField onChange={handleChange} label="Protein" name='protein' sx={{ ml: '22px', mr: '22px', color: '#fff', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }} value={caloriesState.protein}/>
        <TextField onChange={handleChange} label="Calorie" name='calorie' sx={{ ml: '22px', mr: '22px', color: '#fff', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }} value={caloriesState.calorie}/>
        <Stack direction='row' justifyContent='center'>
        <Button onClick={() => {handleSubmit()}}>Submit</Button>
        <Button onClick={() => {setEdit(false)}}>Cancel</Button>
        </Stack>
    </Box>
  ) : (
    <Box className="calories-card">
        <Button sx={{ mt:'15px', ml: '21px', mr: '22px', color: '#fff', background: '#00425A', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        Date:{calories.date}
        </Button>
        <Stack direction="row">
        <Button sx={{ ml: '21px', color: '#fff', background: '#1F8A70', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        Meal: 
        <br/>
        {calories.meal}
        </Button>
        <Button sx={{ ml: '21px', mr: '22px', color: '#fff', background: '#BFDB38', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        Ingredients: 
        <br/> 
        {calories.ingredients}
        </Button>
        </Stack>
        <Button sx={{ ml: '22px', mr: '22px', color: '#fff', background: '#FC7300', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
          Fat: {calories.fat}
        </Button>
        <Button sx={{ ml: '22px', mr: '22px', color: '#fff', background: '#FC7300', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
          Protein: {calories.protein}
        </Button>
        <Button sx={{ ml: '22px', mr: '22px', color: '#fff', background: '#FC7300', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
          Calories: {calories.calorie}
        </Button>
        <Button onClick={() => {setEdit(true)}}>Edit</Button>
    </Box>
      )}
  </>
  )
}