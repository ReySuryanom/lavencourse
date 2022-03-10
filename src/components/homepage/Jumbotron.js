import React from 'react'
import { Link } from 'react-router-dom'
import header from '../../assets/header.webp'
import './Jumbotron.css'

function Jumbotron() {
  return (
    <div className="jumbotron">
      <div className="jumbotron__left__side">
        <h1 className="title">Build Your Design Skill in here</h1>
        <p>
          Pelajari keahlian desain grafis disini dan buatlah sesuatu untuk orang
          lain
        </p>
        <Link to="/kelas">
          <div className="btn">Lihat Kelas</div>
        </Link>
      </div>
      <div className="jumbotron__right__side">
        <img src={header} alt="jumbotron_header" />
      </div>
    </div>
  )
}

export default Jumbotron
