import React, { useState } from 'react';
import { NavButton } from '../components/NavButton';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';
// import {NavBarDropDown}  from '../components/NavBarDropDown';

export function NavBar() {
  const [click, setClick] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropDown(false);
    } else {
      setDropDown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropDown(false);
    } else {
      setDropDown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}>
          Get Fit!
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/knownexercises'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Exercises
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/workouts'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Workouts 
            </Link>
            <Link
              to='/calorietracker'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Calorie Tracker
            </Link>
            {/* {dropDown && <NavBarDropDown />} */}
          </li>
          <li>
            {/* <Link
              to='/signin'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Sign In
            </Link> */}
          </li>
        <NavButton />
        </ul>
      </nav>
    </>
  );
}