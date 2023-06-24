import React, { useState } from 'react'
import './Champion.css'
import { useEffect } from 'react'
const Champion = ({name,img}) => {
    
  return (
    <div className='champion'>
        <img src={img}/>
        <p>{name}</p>
        
    </div>
  )
}

export default Champion