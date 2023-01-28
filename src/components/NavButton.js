import React from 'react'
import '../css/NavButton.css'
import { Link } from 'react-router-dom'


export function NavButton() {
  return (
    <Link to='/signin'>
        <button className='btn'>Sign In!</button>
    </Link>
  )
}