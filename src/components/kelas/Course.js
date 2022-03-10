import React from 'react'
import play from '../../assets/play.png'
import './Course.css'

function Course() {
  return (
    <div className="course">
      <div className="left__side">
        <h1>MATERI</h1>
        <p style={{ backgroundColor: '#7db1f9' }}>1. Mengenal Desain</p>
        <p>2. Jenis Desain</p>
        <p>3. Bentuk</p>
        <p>4. Tipografi</p>
      </div>
      <div className="right__side">
        <div className="top__side">
          <img src={play} alt="play-btn" />
        </div>
        <div className="bottom__side">
          <div className="btn">{`<< Video Sebelumnya`}</div>
          <div className="btn">{`Video Selanjutnya >>`}</div>
        </div>
      </div>
    </div>
  )
}

export default Course
