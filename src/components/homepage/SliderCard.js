import { Avatar } from '@material-ui/core'
import React from 'react'
import './SliderCard.css'
import love from '../../assets/love.png'

function SliderCard({ image, avatar, name }) {
  return (
    <div className="sliderCard">
      <img src={image} alt={name} />
      <img src={love} alt="love" className="love" />
      <div>
        <Avatar src={avatar} className="gambar" />
        <p className="name">{name}</p>
        <p className="follow">Ikuti +</p>
      </div>
    </div>
  )
}

export default SliderCard
