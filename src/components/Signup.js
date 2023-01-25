import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'

export const Signup = (props) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
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

            axios.post("https://workout-journal-server.vercel.app/signup", {
            // axios.post("http://localhost:5000/signup", {
                name,
                email,
                password
            }
            ).then((response) =>{
              console.log(response);
            })
            setName("");
            setEmail("");
            setPassword("");
            navigate("/");
          }}

    >

        <label className='label'>
            Name:
            <input className='input' type="text" onChange={(e) => setName(e.target.value)}/>
        </label>
        <label className='label'>
            Email:
            <input className='input' type="email" onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label className='label'>
            Password:
            <input className='input' type="password" onChange={(e) => setPassword(e.target.value)}/>
        </label>
            <input className='submit' type="submit"/>
        <p>Already Have An Account? <Link to="/">Sign in!</Link></p>
    </form>
    </>
  )
}