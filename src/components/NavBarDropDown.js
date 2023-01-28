import React, { useState } from 'react'
import { MenuItems } from '../utils/MenuItems'
import { Link } from 'react-router-dom'
import '../css/NavBarDropDown.css'

export function NavBarDropDown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click)
  return (
    <>
    <ul onClick={handleClick}
    className={click ? 'drop-menu clicked' : 'dropdown-menu'}>
      {MenuItems.map((item, index)=> {
        return(
          <li key={index}>
            <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>{item.title}</Link>
          </li>
        )
      })}
    </ul>
    </>
  )
}