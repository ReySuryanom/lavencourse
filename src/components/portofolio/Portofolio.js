import React from 'react'
import './Portofolio.css'
import PostCard from './PostCards'
import karya from '../../assets/karya.webp'

function Portofolio() {
  return (
    <div className="portoflio">
      <h1 className="title">Upload karyamu disini</h1>
      <div className="header">
        <div className="left__side">
          <img src={karya} alt="karya" />
        </div>
        <div className="right__side">
          <h1>Explore Creative Design</h1>
          <div className="btn">Upload karyamu</div>
        </div>
      </div>
      <PostCard />
    </div>
  )
}

export default Portofolio
