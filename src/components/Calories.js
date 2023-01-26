import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ResetTvRounded } from '@mui/icons-material';

export function Calorie(props) {
    const [calories, setCalories] = useState("");

  useEffect(() => {
    axios.get('https://workout-journal-server.vercel.app/calories', {
      header: {
        Authorization : `Bearer ${props.token}`
      }
    }).then((response) => {

      console.log(response);

      setCalories(response.data)})
  }, [props.token]);

  useEffect(() => {
  }, [calories])

  if(!calories) {
    return null
}

return( 
    <div>
      {calories.map((calories) =>{
        console.log(calories);
        return (
          <div>
            <p>{calories.meal}</p>
            <p>{calories.ingredients}</p>
            <p>{calories.fat}</p>
            <p>{calories.protein}</p>
          </div>
        )
      })}
    </div>
  )
}