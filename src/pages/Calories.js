import React, { useEffect, useState } from 'react'
import axios from 'axios'

export function Calories(props) {
    const [calories, setCalories] = useState("");
    console.log(props);

  useEffect(() => {
    axios.get('https://workout-journal-server.vercel.app/calories', {
      header: {
        Authorization : `Bearer ${props.token}`
      }
    }).then((response) => {

      console.log(response);

      setCalories(response.data.rows)})
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