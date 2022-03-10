import React from 'react'
import SliderCard from './SliderCard'
import avatar1 from '../../assets/avatar1.svg'
import avatar2 from '../../assets/avatar2.svg'
import image1 from '../../assets/avatar1.webp'
import image2 from '../../assets/avatar2.webp'
import next from '../../assets/next.webp'
import './ShowcaseCards.css'
import { Link } from 'react-router-dom'

function ShowcaseCards() {
  return (
    <div className="showcaseCards">
      <div className="showcaseCards__left">
        <h1 style={{ color: 'var(--primary-text)' }}>Design Showcase</h1>
        <p>Upload karyamu disini & buat portofolio</p>
      </div>
      <div className="showcaseCards__middle">
        <SliderCard image={image1} avatar={avatar1} name="Greativ" />
        <SliderCard image={image2} avatar={avatar2} name="Anthony" />
      </div>
      <div className="showcaseCards__right">
        <Link to="/portofolio">
          <img src={next} alt="next" />
        </Link>
      </div>
    </div>
  )
}

export default ShowcaseCards
