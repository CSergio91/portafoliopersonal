import React from 'react'

export default function Experincia({title, exp_description, fecha, ver}) {
  return (
    <div className='card_experiencia'>
      <div className="exp_title">
        <h1 className="title">{title}</h1>
      </div>
      <div className="exp_fecha"><p>{fecha}</p></div>
      <div className="space"></div>
      <div className="space"></div>
      
      <div className="exp_descript"><p>{exp_description}</p></div>
      
    </div>
  )
}
