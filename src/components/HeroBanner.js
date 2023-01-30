import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: red[500],
  '&:hover': {
    backgroundColor: red[700],
  },
}));

export function HeroBanner() {
  return (
    <Box sx={{
      mt: { lg: "10px", xs: "70px"},
      ml: { sm: "50px"}
    }} position= "relative" p="20px">
      
      <Typography color="#FF2625"
      fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      
      <Typography 
      fontWeight={700} 
      sx={{ fontSize : { lg : "44px", xs: "40px"}}}
      mb="23px" mt="30px">
        Sweat, Smile <br /> and Repeat
      </Typography>
      
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Checkout what you can do!
      
      </Typography>
      <ColorButton 
      variant="error" 
      backgroundcolor= "FF2625"
      padding= "10px"
      > 
      
      <Link to="/knownexercises" style={{ textDecoration: "none", color:"white"}}>
        Explore Exercises
      </Link>
      
      </ColorButton>
      
      <Typography
      fontWeight={600}
      color="#FF2625"
      sx={{
        opacity: 0.1,
        display: { lg: 'block', xs: 'none'}
      }}
      fontSize="200px"
      >
        Exercise
      </Typography>
    </Box>
  )
}