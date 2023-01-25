import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { Signup } from './components/Signup';
import { Signin } from './components/Signin';
import { Workouts } from './components/Workouts';
import { CreateWorkout } from './components/CreateWorkout';
import { Exercises } from './components/Exercises';

export function Router() {
    const [token, setToken] = useState("");
    const [user, setUser] = useState(null);

  return (
    <Routes>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/" element={<Signin setToken={setToken}/>}/>
        <Route path="/createworkout" element={<CreateWorkout token={token} user={user} setUser={setUser} />}/>
        <Route path="/workouts" element={<Workouts token={token} user={user} setUser={setUser} />}/>
        <Route path="/exercises" element={<Exercises />} />
    </Routes>
  );
}