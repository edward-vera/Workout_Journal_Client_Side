import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Button,
} from '@mui/material';
import {
  Link, 
  useNavigate
} from 'react-router-dom';
import '../css/SignIn.css';
import cookie from 'cookie';

export const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

    useEffect(() => {
      // console.log({email, password});
    }, [email, password])


  return (
    <>
    <form
        className='form'
        onSubmit={(e) => {
            e.preventDefault()

            axios.post(
            "https://workout-journal-server.vercel.app/signin", {
            // "http://localhost:5000/signin", {
                email,
                password
            }
            ).then((response) =>{
              // console.log(response)
              document.cookie = cookie.serialize("token", response.data.token)
              props.setToken(response.data.token);
              // response.data.token
              // ?(document.cookie = 'loggedIn=true; max-age=60*1000')
              // : response.send('Invalid Username or Passwork');
              // document.cookie = 'loggedIn=true; max-age=60*1000'

            });

            setEmail("");
            setPassword("");
            navigate("/home");
        }}
    >

        <label className='label'>
            Email:
            <input 
            className='input' 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            />
        </label>
        <label className='label'>
            Password:
            <input 
            className='input'
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </label>
            <input className='submit' type="submit"/>
            <Button component={Link} variant='contained' type='submit' to="/signup"> New Here? Sign Up!</Button>
    </form>
    </>
  )
}