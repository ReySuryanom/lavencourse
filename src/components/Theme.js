import React from 'react'
import './Theme.css'

function Theme({ title, text }) {
  return (
    <div className="theme">
      <h2>{title}</h2>
      <hr />
      {text && <p>{text}</p>}
    </div>
  )
}

export default Theme
