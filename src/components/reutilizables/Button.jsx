import React from 'react'
import './Button.css'

// eslint-disable-next-line react/prop-types
export default function Button({label, src, href}) {
  return (
    <div className='button-container'>
        <div className='content'>
        <a href={href} target="_blank" rel="noopener noreferrer">
            <button>
        <img src={src} alt="" className='img-reut'/>
        <h4>{label}</h4>
        </button>
        </a>
        </div>
    </div>
  )
}
