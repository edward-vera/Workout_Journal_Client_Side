// Imports
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './css/App.css';

// Components
import { NavBar } from './components/NavBar'
import { ExerciseDetail } from './pages/ExerciseDetail'
import { Footer } from './components/Footer'

// Pages
import { Home } from './pages/Home';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { Workouts } from './pages/Workouts';
import { CreateWorkout } from './pages/CreateWorkout';
import { WorkoutExercises } from './pages/WorkoutExercises';
import { Calories } from './pages/Calories';
import { BmiCalculator } from './pages/BmiCalculator';
import { About } from './pages/About';


export function App() {
    const [token, setToken] = useState("");
    const [user, setUser] = useState(null);
  
  return (
        <Box width="400px" sx={{ width : { xl: '1488px'}}} m="auto">
          <NavBar />
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn setToken={setToken}/>} />
              <Route path="/exercise/:id" element={<ExerciseDetail />} />
              <Route path="/createworkout" element={<CreateWorkout token={token} user={user} setUser={setUser} />}/>
              <Route path="/workouts" element={<Workouts token={token} user={user} setUser={setUser} />}/>
              <Route path="/workouts/exerciseid" element={<WorkoutExercises token={token} user={user} setUser={setUser} />}/>
              <Route path="/bmicalculator" element={<BmiCalculator />} />
              <Route path="/calories" element={<Calories />} />
              <Route path="/about" element={<About />} />
            </Routes>
          <Footer />
        </Box>
  );
}

