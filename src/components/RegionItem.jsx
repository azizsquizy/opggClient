import React from 'react'
import "./Region.css"
import {Link} from "react-router-dom"
const RegionItem = ({name,flag}) => {
  return (
    <Link className='region'>
    <img src={flag}/>
    <p>{name}</p>
    </Link>
  )
}

export default RegionItem