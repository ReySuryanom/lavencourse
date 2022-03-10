import React, { useEffect, useState } from 'react'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import { Link, useParams } from 'react-router-dom'
import { data } from '../../util/data'
import { Avatar } from '@material-ui/core'
import './DetailKelas.css'

function DetailKelas() {
  const { id } = useParams()
  const [className, setClassName] = useState()

  useEffect(() => {
    setClassName(data.find((item) => item.id === id))
  }, [className, id])

  return (
    <div className="detailKelas">
      <div className="left__side">
        <img src={className && className.image} alt="bg-img" />
      </div>
      <div className="right__side">
        <h2>{className && className.title}</h2>
        <div className="optionCard__avatar">
          <Avatar src="" />
          <div>
            <p style={{ fontWeight: 'bold' }}>
              {className && className.tutor[0]}
            </p>
            <p style={{ color: 'var(--second-text)', fontSize: 'small' }}>
              {className && className.tutor[1]}
            </p>
          </div>
        </div>
        <div className="optionCard__icons">
          <div>
            <LibraryBooksIcon />
            <p>{`${className && className.modul} Modul`}</p>
          </div>
          <div>
            <AccessTimeIcon />
            <p style={{ marginRight: '3.5rem' }}>{`${
              className && className.hours
            } Jam`}</p>
          </div>
        </div>
        <p>{className && className.desc}</p>
        <Link to={`/kelas/${id}/course`} className="btn daftar">
          Daftar Kelas
        </Link>
      </div>
    </div>
  )
}

export default DetailKelas
