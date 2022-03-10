import React from 'react'
import './Card.css'

function Card({ image, title, text }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

export default Card
