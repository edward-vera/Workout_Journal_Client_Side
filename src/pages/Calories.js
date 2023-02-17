import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/App.css'
import {
  Box,
  // Button,
  // Container,
  // Card,
  Stack,
  Typography
} from '@mui/material'
// import { 
//   Link 
// } from 'react-router-dom'
// import { Loader } from '../components/Loader';
import { CreateCalories } from '../components/CreateCalories'
import { CalorieCard } from '../components/CalorieCard'
// import { red } from '@mui/material/colors';
// import { styled } from '@mui/material/styles';

export function Calories(props) {
    // console.log(props.calories);
    const [calories, setCalories] = useState([]);

    
    useEffect(() => {
    console.log(props.token, '*****token*****')
    if(!props.token){
      return
    }
    axios.get("https://workout-journal-server.vercel.app/calorietracker", {
      headers: {
        Authorization : `Bearer ${props.token}`
      }
    }).then((response) => {

      console.log(response);

      // FOR ACTUAL WEBSITE
      props.setUser(response.data.user)
      // FOR STYLING
      // setCalories(response.data)
      setCalories(response.data.rows)})
  }, [props.token]);

  useEffect(() => {
    // console.log('calories DATAAAAAAAAA', calories)
  }, [calories])

  if (!calories) return <CreateCalories />;

return( 
<Box sx={{ mt: { lg: '30px' } }}>
        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mt="30px" mb="49px" textAlign="center">
        <Typography component='span' variant='h2'>Your Meal And Calorie Plan!</Typography>
        </Typography>
        <Stack className='workouts-container' direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
          {calories.map((item, index) =>{
            // console.log(calories)
            return (
              <CalorieCard calories={item} allCalories={calories} key={index} token={props.token} setAllCalories={setCalories}/>
          )
        })}
        <CreateCalories 
        token={props.token} user={props.user} 
        setCalories={setCalories} calories={calories}
        />
      </Stack>
    </Box>
  )
}