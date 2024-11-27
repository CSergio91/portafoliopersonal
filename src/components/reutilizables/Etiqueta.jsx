import React from 'react'
import './Etiqueta.css'

// eslint-disable-next-line react/prop-types
export default function Etiqueta({src, alt, label}) {
  return (
    <div className='etiqueta-container'>
        <div className='etiqueta-content'>
            <div className="etiq-cont"> 
        <img className="etiq-logo"
        src={src} 
        alt={alt} 
        />
        </div>
        <div className="etiq-cont"> 
        <h3>{label}</h3>
        </div></div>
    </div>
  )
}