import React, {
   useEffect, 
  //  useState 
  } from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import axios from 'axios';
// import { Exercises } from './Exercises';

export default function WorkoutDropdowns(props) {
  // const [target, setTarget] = useState("");
  // const [bodyPart, setBodyPart] = useState("");
  // const [reps, setReps] = useState("");
  // const [sets, setSets] = useState("");
  // const [weight, setWeight] = useState("");
  // const [notes, setNotes] = useState("");
  // const [duration, setDuration] = useState("");

  useEffect(() => {
    axios.get('https://workout-journal-server.vercel.app/workouts', {
      headers: {
        Authorization : `Bearer ${props.token}`,
      }
    }).then((response) => {
      // console.log(response);
    })
  }, [props.token])
  
  useEffect(() => {
  }, [])


  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  return (

    <div>
      {/* {exercises.map((exercises) => {
        console.log(exercises);
      })} */}
    </div>
  
  );

}