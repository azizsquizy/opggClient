import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"
import league from '../assets/league.png'
import logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logos'>
            <img src={logo}/>
            <img src={league}/>
        </div>
        <div className='links'>
            <Link  to={"/Champions"} className='link'>Champions</Link>
            <Link  to={"/"} className='link'>Home</Link>
        </div>
    </div>
  )
}

export default Navbar