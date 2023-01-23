import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'

export const Signin = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
  useEffect(() => {
    console.log({email});
  }, [email])
  
  useEffect(() => {
    console.log({password});
  }, [password])

  return (
    <>
    <form
        className='form'
        onSubmit={(e) => {
            e.preventDefault()

            axios.post("https://workout-journal-server.vercel.app/signin", {
                email,
                password
            }).then((response)=> props.setToken(response.data.token))
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
            <input type="submit" value="Sign in"/>
    </form>
    </>
  )
}