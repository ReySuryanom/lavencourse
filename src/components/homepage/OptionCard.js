import React from 'react'
import './OptionCard.css'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import { Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom'

function OptionCard({ image, title, type, mentor, id }) {
  return (
    <div className="optionCard">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <div className="optionCard__icons">
        <div>
          <LibraryBooksIcon />
          <p>{`${type[0]} Modul`}</p>
        </div>
        <div>
          <AccessTimeIcon />
          <p style={{ marginRight: '3.5rem' }}>{`${type[1]} Jam`}</p>
        </div>
      </div>
      <div className="optionCard__avatar">
        <Avatar src="" />
        <div>
          <p style={{ fontWeight: 'bold' }}>{mentor[0]}</p>
          <p style={{ color: 'var(--second-text)', fontSize: 'small' }}>
            {mentor[1]}
          </p>
        </div>
      </div>
      <Link to={`kelas/${id}`} style={{ margin: '0 auto' }}>
        <div className="btn">Lihat Kelas</div>
      </Link>
    </div>
  )
}

export default OptionCard
