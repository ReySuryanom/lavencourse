import React from 'react'
import SliderCard from '../homepage/SliderCard'
import avatar1 from '../../assets/avatar1.svg'
import avatar2 from '../../assets/avatar2.svg'
import image1 from '../../assets/avatar1.webp'
import image2 from '../../assets/avatar2.webp'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import image5 from '../../assets/image5.png'
import image6 from '../../assets/image6.png'
import './PostCards.css'

function PostCard() {
  return (
    <div className="postCards">
      <SliderCard image={image1} avatar={avatar1} name="Mellyn Puth" />
      <SliderCard image={image2} avatar={avatar2} name="Ferdy Ahmad" />
      <SliderCard image={image3} avatar={avatar2} name="Ferdy Ahmad" />
      <SliderCard image={image4} avatar={avatar2} name="Ferdy Ahmad" />
      <SliderCard image={image5} avatar={avatar2} name="Ferdy Ahmad" />
      <SliderCard image={image6} avatar={avatar2} name="Ferdy Ahmad" />
    </div>
  )
}

export default PostCard
