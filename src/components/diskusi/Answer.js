import { Avatar } from '@material-ui/core'
import React from 'react'

function Answer({ answer, date, name, avatar }) {
  return (
    <div className="answer">
      <Avatar src={avatar} />
      <div className="answer__container">
        <h3 style={{ marginTop: '-0.05rem' }}>{name || 'Anonymous'}</h3>
        <p style={{ fontSize: 'small', marginTop: '-1rem' }}>{date}</p>
        <p>{answer}</p>
      </div>
    </div>
  )
}

export default Answer
