import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/App.css'
import {
  Box,
  Button,
  // Container,
  // Card,
  Stack,
  Typography
} from '@mui/material'
import { 
  Link 
} from 'react-router-dom'
// import { Loader } from '../components/Loader';
import { CreateCalories } from '../components/CreateCalories'
// import { red } from '@mui/material/colors';
// import { styled } from '@mui/material/styles';

export function Calories(props) {
    // console.log(props.calories);
    const [calories, setCalories] = useState("");

  useEffect(() => {
    axios.get("https://workout-journal-server.vercel.app/calorietracker", {
      header: {
        Authorization : `Bearer ${props.token}`
      }
    }).then((response) => {

      // console.log(response);

      // FOR ACTUAL WEBSITE
      // props.setUser(response.data.user)
      // FOR STYLING
      // setCalories(response.data)
      setCalories(response.data)})
  }, [props.token]);

  useEffect(() => {
  }, [calories])

  if (!calories) return <CreateCalories />;

return( 
<Box sx={{ mt: { lg: '30px' } }}>
        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mt="30px" mb="49px" textAlign="center">
        <Typography component='span' variant='h2'>Your Meal And Calorie Plan!</Typography>
        </Typography>
        <Stack className='workouts-container' direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
          {calories.map((calories, index) =>{
            // console.log(calories)
            return (
              <Link key={index} className="calories-card">
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
                    Calories: {calories.calorie}
                  </Button>
              
              {/* <Button component={Link} to="/createcalories" sx={{ ml: '22px', mr: '22px', color: '#fff', background: '#FC7300', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                Create New Meal!
              </Button> */}
            </Link>
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