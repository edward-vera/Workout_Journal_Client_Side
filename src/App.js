// Imports
import React,
{ useState,
useEffect } 
from 'react';
import { 
  Route, 
  Routes, 
  // Navigate
 } from 'react-router-dom';
import { Box } from '@mui/material';
import './css/App.css';

// Components
import { NavBar } from './components/NavBar'
import { ExerciseDetail } from './pages/ExerciseDetail'
import { Footer } from './components/Footer'
import { HeroBanner } from './components/HeroBanner'

// Pages
import { Home } from './pages/Home';
import { KnownExercises} from './pages/KnownExercises';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { Workouts } from './pages/Workouts';
import { CreateWorkout } from './pages/CreateWorkout';
import { WorkoutExercises } from './pages/WorkoutExercises';
import { Calories } from './pages/Calories';
import { BmiCalculator } from './pages/BmiCalculator';
import { About } from './pages/About';
import { CreateCalories } from './components/CreateCalories';

import cookie from 'cookie'


export function App() {
    const cookies = cookie.parse(document.cookie)
    const [token, setToken] = useState("");
    const [user, setUser] = useState(null);

    useEffect(() => {
      if (cookies.token){

        setToken(cookies.token)
      }
    }, [])
  
    // // Check the cookies for a cookie called "loggedIn"
      // const checkAuth = () => {
      // const cookies = cookie.parse(document.cookie); 
      // return cookies['loggedin'] ? true : false;
      // }

    // // This will hide routes unless logged in
    //   const ProtectedRoute = (props) => {
    //     const {component: Component, ...rest} = props
    //     console.log(rest)
    //     return checkAuth() === true ? <Component /> : <SignIn />;
    //   }


  return (
        <Box width="400px" sx={{ width : { xl: '1488px'}}} m="auto">
          <NavBar token={token} setToken={setToken}/>
            <Routes>
              <Route path="/" element={<HeroBanner/>}/>
              <Route path="/home" element={<Home />}/>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn setToken={setToken}/>} />
              <Route path="/knownexercises" element={<KnownExercises />}/>
              <Route path="/exercise/:id" element={<ExerciseDetail />} />
              <Route path="/createworkout" element={<CreateWorkout />}/>
              <Route path="/workouts" element={<Workouts token={token} user={user} setUser={setUser}/>} />
              <Route path="/workouts/:id" element={<WorkoutExercises token={token}/>}/>
              <Route path="/bmicalculator" element={<BmiCalculator />} />
              <Route path="/calorietracker" element={<Calories token={token} user={user} setUser={setUser}/>} />
              <Route path="/createcalories" element={<CreateCalories />} />
              <Route path="/about" element={<About />} />
            </Routes>
          <Footer />
        </Box>
  );
}