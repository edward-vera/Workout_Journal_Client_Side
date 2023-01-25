import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'

export const Signin = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
  useEffect(() => {
    console.log({email, password});
  }, [email, password])

  return (
    <>
    <form
        className='form'
        onSubmit={(e) => {
            e.preventDefault()

            axios.post("https://workout-journal-server.vercel.app/signin", {
            // axios.post("http://localhost:5000/signin", {
                email,
                password
            }
            ).then((response) =>{
              console.log(response);
              props.setToken(response.data.token)
            })

          
            setEmail("");
            setPassword("");
            navigate("/workouts")
        }}
    >

        <label className='label'>
            Email:
            <input className='input' type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label className='label'>
            Password:
            <input className='input' type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
            <input className='submit' type="submit"/>
            <p>New Here? <Link to="/Signup">Signup!</Link></p>
    </form>
    </>
  )
}