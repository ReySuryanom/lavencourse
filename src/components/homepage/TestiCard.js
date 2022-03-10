import { Avatar } from '@material-ui/core'
import React from 'react'
import './TestiCard.css'

function TestiCard({ avatar, name, type, text }) {
  return (
    <div className="testiCard">
      <div className="testiCard__left">
        <Avatar src={avatar} />
      </div>
      <div className="testiCard__right">
        <h3>{name}</h3>
        <p style={{ fontSize: 'small', marginTop: '-0.5rem' }}>{type}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default TestiCard
