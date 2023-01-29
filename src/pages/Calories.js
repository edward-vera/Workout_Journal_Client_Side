import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  // Container,
  // Card,
  Stack,
  Typography
} from '@mui/material'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../css/App.css'
import { Loader } from '../components/Loader';

export function Calories(props) {
    // console.log(props.calories);
    const [calories, setCalories] = useState("");

  useEffect(() => {
    axios.get("https://workout-journal-server.vercel.app/calories", {
      header: {
        Authorization : `Bearer ${props.token}`
      }
    }).then((response) => {

      console.log(response);

      // FOR ACTUAL WEBSITE
      // setCalories(response.data.user)
      // FOR STYLING
      setCalories(response.data)
    
    })

  }, [props.token]);

  useEffect(() => {
  }, [calories])

  if (!calories) return <Loader />;

return( 
<Box id="exercises" sx={{ mt: { lg: '30px' } }}>
        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        <h1>Your Meal And Calorie Plan!</h1>
        </Typography>
        <Stack className='workouts-container' direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
          {calories.map((calories, index) =>{
            return (
              <Link className="calories-card">
               <Button sx={{ mt:'15px', ml: '21px', mr: '22px', color: '#fff', background: '#00425A', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
               Date:{calories.date}
               </Button>
              <Stack direction="row">
                <Button sx={{ ml: '21px', color: '#fff', background: '#1F8A70', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                Meal: <br/>
                {calories.meal}
                </Button>
                <Button sx={{ ml: '21px', mr: '22px', color: '#fff', background: '#BFDB38', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                Ingredients: <br/> {calories.ingredients}
                </Button>
              </Stack>
              <Button sx={{ ml: '22px', mr: '22px', color: '#fff', background: '#FC7300', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                Fat: {calories.fat}
              </Button>
              <Button sx={{ ml: '22px', mr: '22px', color: '#fff', background: '#FC7300', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                Protein: {calories.protein}
              </Button>
              <Button sx={{ ml: '22px', mr: '22px', color: '#fff', background: '#FC7300', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                Calories: {calories.calories}
              </Button>
              <Button>
                Submit Meal
              </Button>
            </Link>
          )
        })}
      </Stack>
      </Box>
  )
}